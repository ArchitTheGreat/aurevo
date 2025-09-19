import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push the boundaries of hosting technology to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Our success is built on the success of developers and businesses we serve worldwide.'
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'We maintain the highest standards of uptime and performance for mission-critical applications.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Every feature, every service, every interaction is designed to exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      bio: 'Former Google Cloud architect with 15+ years in distributed systems.'
    },
    {
      name: 'Sarah Kim',
      role: 'CTO',
      bio: 'Ex-AWS principal engineer specializing in edge computing and CDN technology.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Engineering',
      bio: 'Full-stack expert with experience scaling platforms to millions of users.'
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Customer Success',
      bio: 'Passionate about developer experience and customer satisfaction.'
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
                About AUREVO
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make web hosting simple, fast, and accessible for developers and businesses worldwide.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  AUREVO was born from a simple observation: web hosting was too complicated, too slow, and too expensive. 
                  As developers ourselves, we experienced the frustration of dealing with complex deployment processes, 
                  unreliable infrastructure, and poor support.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  In 2023, we set out to build the hosting platform we wished existed. One that would be lightning-fast, 
                  developer-friendly, and backed by enterprise-grade infrastructure. Today, AUREVO powers thousands of 
                  websites and applications across the globe.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe that great hosting should be invisible – it should just work, allowing you to focus on 
                  building amazing experiences for your users.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">99.99%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-muted-foreground">Global Regions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;