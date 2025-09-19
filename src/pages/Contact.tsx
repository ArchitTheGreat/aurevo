import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@aurevo.com'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team in real-time',
      contact: 'Available 24/7'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Talk to our experts directly',
      contact: '+1 (555) 123-4567'
    },
    {
      icon: MapPin,
      title: 'Office',
      description: 'Visit us at our headquarters',
      contact: 'San Francisco, CA'
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
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                <CardHeader>
                  <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary">{method.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
                <CardDescription className="text-center">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your question or how we can help..."
                      rows={5}
                    />
                  </div>
                  
                  <Button variant="hero" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="glass-effect border-primary/20">
                <CardHeader>
                  <CardTitle>How quickly do you respond to support requests?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We aim to respond to all support requests within 24 hours. For urgent issues, 
                    our live chat is available 24/7 for immediate assistance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-primary/20">
                <CardHeader>
                  <CardTitle>Do you offer phone support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, phone support is available for Business and Enterprise plan customers. 
                    Contact us to schedule a call with our technical team.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-primary/20">
                <CardHeader>
                  <CardTitle>Can you help with website migration?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! Our team can help you migrate your existing website to AUREVO. 
                    We offer free migration assistance for all new customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;