import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Rocket } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for personal projects and small websites',
      monthlyPrice: 9,
      icon: Zap,
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
      icon: Rocket,
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
    }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

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

  const handleSelectPlan = (plan: typeof plans[0]) => {
    navigate('/payment', { 
      state: { 
        plan: plan.name,
        price: getPrice(plan.monthlyPrice),
        billing: isAnnual ? 'annual' : 'monthly'
      }
    });
  };

  return (
    <Layout>
      <div 
        ref={containerRef}
        className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        onMouseMove={handleMouseMove}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_50%)] pointer-events-none" />
        
        {/* Ripple Effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none animate-ping"
            style={{
              left: ripple.x - 2,
              top: ripple.y - 2,
              width: 4,
              height: 4,
            }}
          >
            <div className="w-full h-full bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-full h-full bg-primary/10 rounded-full animate-ping" style={{ animationDelay: '0.1s' }} />
          </div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                🚀 Hosting Evolved
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-hero bg-clip-text text-white">
                Choose Your
              </span>
              <br />
              <span className="text-white">Power Level</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              Start your journey with AUREVO. Deploy faster, scale smarter, evolve beyond limits.
            </p>

            {/* Enhanced Pricing Toggle */}
            <div className="flex items-center justify-center space-x-6 mb-16">
              <span className={`text-lg font-medium transition-all duration-300 ${!isAnnual ? 'text-primary scale-110' : 'text-slate-400'}`}>
                Monthly
              </span>
              <div className="relative">
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/25 ${
                    isAnnual ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                      isAnnual ? 'translate-x-9' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <span className={`text-lg font-medium transition-all duration-300 ${isAnnual ? 'text-primary scale-110' : 'text-slate-400'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge className="ml-3 bg-accent text-slate-900 animate-pulse">
                  💰 Save 20%
                </Badge>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative glass-effect backdrop-blur-xl bg-slate-800/50 border transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                    plan.popular 
                      ? 'border-primary/50 ring-2 ring-primary/20 shadow-primary/20' 
                      : 'border-slate-700/50 hover:border-primary/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 text-sm font-semibold shadow-lg">
                        ⭐ Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-white mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-slate-300 text-lg">{plan.description}</CardDescription>
                    
                    <div className="mt-8">
                      <div className="relative">
                        <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {getPriceLabel(plan.monthlyPrice)}
                        </span>
                        {isAnnual && (
                          <div className="text-slate-400 line-through text-sm mt-1">
                            Was ${plan.monthlyPrice * 12}/year
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center group/item">
                          <div className="p-1 rounded-full bg-primary/20 mr-3">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-slate-200 group-hover/item:text-white transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => handleSelectPlan(plan)}
                      variant={plan.popular ? "default" : "outline"} 
                      className={`w-full h-12 text-lg font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25' 
                          : 'border-primary/30 text-primary hover:bg-primary/10'
                      }`}
                    >
                      Get Started with {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced FAQ Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12">Everything You Need to Know</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: "Can I change plans anytime?",
                  a: "Absolutely! Upgrade or downgrade instantly. Changes take effect immediately with prorated billing."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We support all major cryptocurrencies, credit cards, and digital payment methods through NOWPayments."
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes! Every plan includes a 14-day free trial. No credit card required to get started."
                },
                {
                  q: "How fast is deployment?",
                  a: "Lightning fast! Your sites deploy in under 30 seconds with our global CDN network."
                }
              ].map((faq, index) => (
                <div key={index} className="text-left p-6 rounded-lg bg-slate-800/30 backdrop-blur border border-slate-700/50 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-bold text-white mb-3 text-lg">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;