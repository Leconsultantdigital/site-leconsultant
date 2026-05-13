import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Schema validation for contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(5000),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Email template
function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #FFD200; padding: 20px; border-radius: 8px 8px 0 0; }
          .header h1 { margin: 0; color: #1C1C2E; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1C1C2E; }
          .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #FFD200; }
          .footer { margin-top: 20px; font-size: 12px; color: #999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📬 Nouveau message de contact</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nom</div>
              <div class="value">${escapeHTML(data.name)}</div>
            </div>

            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${escapeHTML(data.email)}">${escapeHTML(data.email)}</a></div>
            </div>

            <div class="field">
              <div class="label">Message</div>
              <div class="value">${escapeHTML(data.message).replace(/\n/g, '<br>')}</div>
            </div>

            <div class="footer">
              <p>Message reçu depuis <strong>leconsultantdigital.fr</strong></p>
              <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Helper function to escape HTML
function escapeHTML(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// POST handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate data
    const validatedData = contactSchema.parse(body);

    // Check if API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Service email non configuré. Veuillez réessayer plus tard.' },
        { status: 500 }
      );
    }

    // Initialize Resend at runtime (not at module load time)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: 'contact@leconsultantdigital.fr',
      to: 'contact@leconsultantdigital.fr',
      replyTo: validatedData.email,
      subject: `Nouveau contact: ${validatedData.name}`,
      html: generateEmailHTML(validatedData),
    });

    // Check if email was sent successfully
    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message.' },
        { status: 500 }
      );
    }

    // Log successful submission (for analytics)
    console.log(`✅ Contact form submitted: ${validatedData.email}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Message envoyé avec succès! Je vous recontacterai rapidement.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Validation error
      const errorIssue = error.issues?.[0];
      const errorMessage = errorIssue?.message || 'Erreur de validation';
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}

// OPTIONS handler (CORS preflight)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
