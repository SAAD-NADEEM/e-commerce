"use client"

import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactHeader = () => {
  return (
    <div className="py-16 px-6 text-center" style={{ backgroundColor: 'var(--color-main-foreground)' }}>
      <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
        Get in Touch
      </h1>
      <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
        Have questions or feedback? We&apos;d love to hear from you. Reach out to us anytime.
      </p>
    </div>
  );
};

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none"
            style={{
              borderColor: 'var(--color-main-secondary)',
              backgroundColor: 'var(--color-main-background)',
              color: 'var(--color-text-primary)',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-main-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--color-main-secondary)')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none"
            style={{
              borderColor: 'var(--color-main-secondary)',
              backgroundColor: 'var(--color-main-background)',
              color: 'var(--color-text-primary)',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-main-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--color-main-secondary)')}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Email Address
        </label>
        <input
          type="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none"
          style={{
            borderColor: 'var(--color-main-secondary)',
            backgroundColor: 'var(--color-main-background)',
            color: 'var(--color-text-primary)',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-main-primary)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-main-secondary)')}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Subject
        </label>
        <input
          type="text"
          placeholder="What is this about?"
          className="w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none"
          style={{
            borderColor: 'var(--color-main-secondary)',
            backgroundColor: 'var(--color-main-background)',
            color: 'var(--color-text-primary)',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-main-primary)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-main-secondary)')}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Message
        </label>
        <textarea
          placeholder="Tell us more about your inquiry..."
          rows={5}
          className="w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none resize-none"
          style={{
            borderColor: 'var(--color-main-secondary)',
            backgroundColor: 'var(--color-main-background)',
            color: 'var(--color-text-primary)',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-main-primary)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-main-secondary)')}
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition hover:shadow-lg"
        style={{ backgroundColor: 'var(--color-main-primary)' }}
      >
        <Send size={20} />
        Send Message
      </button>
    </form>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      details: 'support@ecommerce.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Commerce Street, NY 10001',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {contactDetails.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="p-6 rounded-lg text-center"
            style={{ backgroundColor: 'var(--color-main-foreground)' }}
          >
            <div className="flex justify-center mb-4">
              <Icon
                size={32}
                style={{ color: 'var(--color-main-primary)' }}
              />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
              {item.title}
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              {item.details}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-main-background)' }}>
      <ContactHeader />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>
              Send us a Message
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>
              Contact Information
            </h2>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}