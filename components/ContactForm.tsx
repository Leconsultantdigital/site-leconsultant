'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [state, setState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error state on input change
    if (state.isError) {
      setState((prev) => ({
        ...prev,
        isError: false,
        errorMessage: '',
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Tous les champs sont obligatoires.',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Veuillez entrer une adresse email valide.',
      });
      return;
    }

    setState((prev) => ({
      ...prev,
      isSubmitting: true,
      isError: false,
      errorMessage: '',
    }));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message');
      }

      // Success
      setState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        errorMessage: '',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          isSuccess: false,
        }));
      }, 5000);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Une erreur est survenue';
      setState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: errorMsg,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
          Votre nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jean Dupont"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-dark placeholder-mid focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent transition"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
          Votre email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jean@example.com"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-dark placeholder-mid focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent transition"
          required
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet ou votre question..."
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-dark placeholder-mid focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent transition resize-none"
          required
        />
      </div>

      {/* Error Message */}
      {state.isError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">⚠️ {state.errorMessage}</p>
        </div>
      )}

      {/* Success Message */}
      {state.isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 text-sm">✅ {state.errorMessage || 'Message envoyé avec succès! Je vous recontacterai rapidement.'}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.isSubmitting || state.isSuccess}
        className={`w-full py-3 rounded-lg font-semibold transition ${
          state.isSubmitting || state.isSuccess
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'btn btn-accent'
        }`}
      >
        {state.isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></span>
            Envoi en cours...
          </span>
        ) : state.isSuccess ? (
          '✅ Message envoyé'
        ) : (
          'Envoyer mon message'
        )}
      </button>

      {/* Privacy note */}
      <p className="text-xs text-mid text-center">
        Vos données sont sécurisées et ne seront utilisées que pour vous répondre.
      </p>
    </form>
  );
}
