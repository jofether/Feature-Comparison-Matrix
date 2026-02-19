import React, { useState } from 'react';

// Simple icon components (SVG based)
const Check = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Zap = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0010 2v5H4a1 1 0 00-.82 1.573l6 8A1 1 0 0010 17v-5h6a1 1 0 00.82-1.573l-6-8z" clipRule="evenodd" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 19H9a6 6 0 0112 0v1H3v-1a6 6 0 0112 0z" />
  </svg>
);

function App() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for getting started',
      features: ['5 Projects', 'Basic Analytics', 'Community Support', '99% Uptime'],
      cta: 'Get Started',
      color: 'gray',
      icon: Zap,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'Most popular for growing teams',
      features: ['Unlimited Projects', 'Advanced Analytics', '24/7 Support', 'Custom Domain', '99.9% Uptime'],
      cta: 'Start Free Trial',
      color: 'indigo',
      icon: Shield,
      popular: true,
    },
    {
      id: 'ent',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale operations',
      features: ['Everything in Pro', 'Dedicated Support', 'SSO Integration', 'Custom SLA', 'White Label'],
      cta: 'Contact Sales',
      color: 'blue',
      icon: Users,
    },
  ];

  const features = [
    { name: "unlimited Projects", icon: '📁', category: 'Core', basic: true, pro: true, ent: true },
    { name: "Data Export", icon: '📊', category: 'Data', basic: false, pro: true, ent: true },
    { name: "24/7 Support", icon: '🎧', category: 'Support', basic: false, pro: true, ent: true },
    { name: "SSO Integration", icon: '🔐', category: 'Security', basic: false, pro: false, ent: true },
    { name: "Custom Branding", icon: '🎨', category: 'Customization', basic: false, pro: false, ent: true },
    { name: "99.9% Uptime SLA", icon: '⚡', category: 'Reliability', basic: false, pro: false, ent: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 font-sans">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Choose the perfect plan for your needs. Always flexible to scale as you grow.</p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative group transition-all duration-300 transform hover:scale-105 ${
                  plan.popular ? 'md:scale-105 md:-mt-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <div
                  className={`h-full rounded-2xl shadow-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 border-2 border-indigo-400 shadow-2xl'
                      : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="p-8">
                    {/* Plan Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent
                          className={`w-6 h-6 ${
                            plan.popular ? 'text-indigo-200' : 'text-gray-400'
                          }`}
                        />
                        <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-100'}`}>
                          {plan.name}
                        </h3>
                      </div>
                      <p className={`text-sm ${plan.popular ? 'text-indigo-100' : 'text-gray-400'}`}>
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-100'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ml-2 ${plan.popular ? 'text-indigo-100' : 'text-gray-400'}`}>
                        {plan.period}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 px-6 rounded-lg font-bold mb-8 transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                        plan.popular
                          ? 'bg-white text-indigo-600 hover:bg-gray-100 shadow-lg'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check
                            className={`w-5 h-5 flex-shrink-0 ${
                              plan.popular ? 'text-indigo-200' : 'text-green-400'
                            }`}
                          />
                          <span className={plan.popular ? 'text-indigo-50' : 'text-gray-300'}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Table Title */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Detailed Feature Comparison</h2>
          <p className="text-gray-400 mt-2">Compare all features across our plans</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            {/* HEADER */}
            <thead className="bg-gray-900 text-white sticky top-0">
              <tr>
                <th className="px-6 py-4 font-medium text-lg w-1/3 text-left">Feature</th>
                <th className="px-6 py-4 font-bold text-center w-1/5 bg-gray-800">Basic</th>
                <th className="px-6 py-4 font-bold text-center w-1/5 bg-indigo-600">Pro</th>
                <th className="px-6 py-4 font-bold text-center w-1/5 bg-gray-800">Enterprise</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="divide-y divide-gray-700">
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors duration-200 ${
                    idx % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'
                  } hover:bg-gray-700`}
                >
                  <td className="px-6 py-4 font-medium text-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{feature.icon}</span>
                      <div>
                        <p className="font-semibold">{feature.name}</p>
                        <p className="text-xs text-gray-400">{feature.category}</p>
                      </div>
                    </div>
                  </td>

                  {/* Basic Column */}
                  <td className="px-6 py-4 text-center">
                    {feature.basic ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20">
                        <Check className="w-4 h-4 text-green-400" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6">
                        <X className="w-4 h-4 text-gray-500" />
                      </span>
                    )}
                  </td>


                  <td className="px-6 py-4 text-center bg-indigo-500/10 border-x border-indigo-500/20 font-bold">
                    {feature.pro ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/30">
                        <Check className="w-4 h-4 text-indigo-400" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6">
                        <X className="w-4 h-4 text-gray-500" />
                      </span>
                    )}
                  </td>

                  {/* Enterprise Column */}
                  <td className="px-6 py-4 text-center">
                    {feature.ent ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20">
                        <Check className="w-4 h-4 text-blue-400" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6">
                        <X className="w-4 h-4 text-gray-500" />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 mb-4">
            Still have questions about which plan is right for you?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-400">
        <p className="text-sm">All plans include SSL encryption, daily backups, and email support</p>
      </div>
    </div>
  );
}

export default App;
