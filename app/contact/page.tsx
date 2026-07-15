'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { trackFormSubmission } from '@/lib/analytics';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'consulting-ia',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Service: ${formData.service}\nTéléphone: ${formData.phone || 'Non fourni'}\n\n${formData.message}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('API error:', data.error);
      }

      setSubmitted(true);
      trackFormSubmission('contact');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'consulting-ia',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />
      <Header />

      <main className="flex-grow">
        <section className="bg-bg-light py-16">
          <div className="container max-w-3xl text-center">
            <span className="eyebrow">Demander un devis</span>
            <h1 className="text-4xl font-bold mb-4 text-dark">
              Parlons de Votre Projet
            </h1>
            <p className="text-xl text-mid">
              30 min de consultation gratuite pour évaluer vos besoins et définir un plan d'action.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form */}
              <div>
                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                    ✅ Merci ! Je vais vous recontacter rapidement.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nom *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                      placeholder="+33 6 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Intéressé *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                    >
                      <option value="consulting-ia">Consulting IA & Formation</option>
                      <option value="directeur-marketing">Directeur Marketing Externalisé</option>
                      <option value="jury-certification">Jury Certification IA</option>
                      <option value="autre">Autre / À discuter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow h-32"
                      placeholder="Décrivez votre besoin..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-accent text-center"
                  >
                    Envoyer & Réserver Audit
                  </button>

                  <p className="text-xs text-mid text-center">
                    Je vous recontacterai sous 24h par email ou téléphone.
                  </p>
                </form>
              </div>

              {/* Info */}
              <div>
                <div className="bg-bg-light p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-lg mb-4 text-dark">Infos Pratiques</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-mid mb-1">📍 Localisation</p>
                      <p className="text-dark">Valence, Drôme (France)</p>
                      <p className="text-sm text-muted">Disponible 100% remote</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-mid mb-1">⏰ Délais</p>
                      <p className="text-dark">Réponse sous 24h</p>
                      <p className="text-sm text-muted">Disponibilités : jours ouvrables 9h-18h</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-mid mb-1">💰 Audit Gratuit</p>
                      <p className="text-dark">30 min sans engagement</p>
                      <p className="text-sm text-muted">Pour évaluer vos besoins</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-mid mb-1">🔗 Réseaux Sociaux</p>
                      <p className="text-sm">
                        <a href="https://linkedin.com" className="text-dark hover:text-yellow-dark underline">LinkedIn</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-light p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-dark">Vous Préférez un Appel Direct ?</h3>
                  <p className="text-mid mb-4">
                    Réservez directement un créneau sur Calendly :
                  </p>
                  <a
                    href="https://calendar.app.google/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost text-center block"
                  >
                    Calendly - Réserver Maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Contact */}
        <section className="py-12 bg-bg-light">
          <div className="container max-w-2xl">
            <h2 className="text-2xl font-bold mb-8 text-center text-dark">Questions sur le Contact</h2>

            <div className="space-y-4">
              {[
                { q: "Répondez-vous rapidement ?", a: "Oui, 24h maximum. Généralement sous 2-3h les jours ouvrables." },
                { q: "L'audit est vraiment gratuit ?", a: "Oui, 100%. Aucune obligation d'acheter après." },
                { q: "Puis-je appeler directement ?", a: "Préférez Calendly ou le formulaire. Je vous répondrai rapidement." },
              ].map((item, i) => (
                <details key={i} className="bg-white border border-border p-4 rounded-lg cursor-pointer">
                  <summary className="font-bold text-dark">{item.q}</summary>
                  <p className="mt-3 text-mid text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
