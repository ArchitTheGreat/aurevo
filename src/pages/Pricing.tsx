import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for personal projects and small websites',
      monthlyPrice: 9,
      features: [
        '1 Website',
        '10GB Storage',
        '100GB Bandwidth',
        'SSL Certificate',
        'Basic Support',
        'Git Integration'
      ]
    },
    {
      name: 'Developer',
      description: 'Ideal for developers and growing businesses',
      monthlyPrice: 29,
      features: [
        '5 Websites',
        '50GB Storage',
        '500GB Bandwidth',
        'SSL Certificate',
        'Priority Support',
        'Git Integration',
        'CI/CD Pipelines',
        'Custom Domains',
        'Advanced Analytics'
      ],
      popular: true
    },
    {
      name: 'Business',
      description: 'For high-traffic sites and teams',
      monthlyPrice: 79,
      features: [
        '25 Websites',
        '200GB Storage',
        '2TB Bandwidth',
        'SSL Certificate',
        '24/7 Support',
        'Git Integration',
        'CI/CD Pipelines',
        'Custom Domains',
        'Advanced Analytics',
        'Load Balancing',
        'DDoS Protection',
        'Team Collaboration'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: 199,
      features: [
        'Unlimited Websites',
        '1TB Storage',
        '10TB Bandwidth',
        'SSL Certificate',
        'Dedicated Support',
        'Git Integration',
        'CI/CD Pipelines',
        'Custom Domains',
        'Advanced Analytics',
        'Load Balancing',
        'DDoS Protection',
        'Team Collaboration',
        'White-label Solution',
        'Custom Integrations',
        'SLA Guarantee'
      ]
    }
  ];

  const getPrice = (monthlyPrice: number) => {
    if (isAnnual) {
      return Math.round(monthlyPrice * 12 * 0.8); // 20% discount
    }
    return monthlyPrice;
  };

  const getPriceLabel = (monthlyPrice: number) => {
    if (isAnnual) {
      return `$${getPrice(monthlyPrice)}/year`;
    }
    return `$${monthlyPrice}/month`;
  };

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-hero bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your needs. Upgrade or downgrade at any time.
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm ${!isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isAnnual ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="ml-2">
                  Save 20%
                </Badge>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {getPriceLabel(plan.monthlyPrice)}
                    </span>
                    {isAnnual && (
                      <div className="text-sm text-muted-foreground line-through">
                        ${plan.monthlyPrice * 12}/year
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-left">
                <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards, PayPal, and cryptocurrency payments.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">Yes, all plans come with a 14-day free trial. No credit card required.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;