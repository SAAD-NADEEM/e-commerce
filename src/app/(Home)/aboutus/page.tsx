import { Award, Target, Users, Zap } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className="py-20 px-6 text-center" style={{ backgroundColor: 'var(--color-main-foreground)' }}>
      <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
        About Us
      </h1>
      <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        We're on a mission to revolutionize online shopping with exceptional products and unforgettable customer experiences.
      </p>
    </div>
  );
};

const StorySection = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>
        Our Story
      </h2>
      <div className="space-y-6">
        <p style={{ color: 'var(--color-text-secondary)' }} className="text-lg leading-relaxed">
          Founded in 2020, our e-commerce platform began with a simple vision: to make quality products accessible to everyone. What started as a small team of passionate entrepreneurs has grown into a thriving community of shoppers and sellers worldwide.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }} className="text-lg leading-relaxed">
          We believe that great shopping experiences go beyond transactions. They're about building relationships, fostering trust, and creating moments of joy. Every decision we make is guided by this philosophy and our commitment to our customers.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }} className="text-lg leading-relaxed">
          Today, we're proud to serve millions of customers globally, offering an extensive range of products backed by our promise of quality, authenticity, and exceptional service.
        </p>
      </div>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Customer First',
      description: 'Every decision we make is centered around improving your shopping experience.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We partner with trusted sellers and curate products that meet our high standards.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly evolve our platform to bring you the latest features and capabilities.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a vibrant community where customers and sellers thrive together.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-text-primary)' }}>
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-lg text-center transition hover:shadow-lg"
              style={{ backgroundColor: 'var(--color-main-foreground)' }}
            >
              <div className="flex justify-center mb-4">
                <Icon
                  size={40}
                  style={{ color: 'var(--color-main-primary)' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                {value.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: '5M+', label: 'Active Customers' },
    { number: '50K+', label: 'Trusted Sellers' },
    { number: '100M+', label: 'Products Available' },
    { number: '24/7', label: 'Customer Support' },
  ];

  return (
    <div
      className="py-16 px-6"
      style={{ backgroundColor: 'var(--color-main-foreground)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: 'var(--color-main-primary)' }}
              >
                {stat.number}
              </div>
              <p style={{ color: 'var(--color-text-secondary)' }} className="text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const team = [
    { name: 'Sarah Johnson', role: 'Founder & CEO' },
    { name: 'Michael Chen', role: 'CTO' },
    { name: 'Emma Williams', role: 'Head of Customer Experience' },
    { name: 'David Rodriguez', role: 'VP of Sales' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-text-primary)' }}>
        Meet Our Leadership
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="p-6 rounded-lg text-center"
            style={{ backgroundColor: 'var(--color-main-foreground)' }}
          >
            <div
              className="w-20 h-20 rounded-full mx-auto mb-4"
              style={{ backgroundColor: 'var(--color-main-primary)' }}
            />
            <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--color-text-primary)' }}>
              {member.name}
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div
      className="py-16 px-6 text-center"
      style={{ backgroundColor: 'var(--color-main-foreground)' }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
          Ready to Shop?
        </h2>
        <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          Discover thousands of quality products from trusted sellers. Join our community today and experience the difference.
        </p>
        <button
          className="px-8 py-4 rounded-lg font-semibold text-white transition hover:shadow-lg"
          style={{ backgroundColor: 'var(--color-main-primary)' }}
        >
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-main-background)' }}>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <StatsSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}