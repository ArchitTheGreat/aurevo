import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Shield, Code, Globe, BarChart, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Global CDN with edge computing for millisecond response times worldwide.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, DDoS protection, and automated security monitoring.'
    },
    {
      icon: Code,
      title: 'Developer First',
      description: 'Git integration, CI/CD pipelines, and comprehensive APIs for seamless development.'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Deploy across 50+ regions with automatic failover and load balancing.'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Detailed insights into performance, user behavior, and resource usage.'
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical support from hosting specialists.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-hero bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale your applications with confidence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Specs */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.99%</div>
                <div className="text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-muted-foreground">Global Regions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10TB</div>
                <div className="text-muted-foreground">Free Bandwidth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;