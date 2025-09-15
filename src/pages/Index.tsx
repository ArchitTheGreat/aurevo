import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Code, Globe, Shield, Zap, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  // Add dark class to enable dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="secondary" className="mb-6">
              Developer-Friendly Hosting
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ship Faster with{" "}
              <span className="text-primary-light">Cryptyc</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Production-ready hosting with flexible payment options. 
              Pay with crypto or fiat — we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('pricing')}
                className="group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="professional" 
                size="xl"
                onClick={() => scrollToSection('features')}
              >
                View Features
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for Modern Developers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to deploy, scale, and manage your applications with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="gradient-card shadow-card hover:shadow-accent transition-all duration-300 animate-slide-in-from-bottom">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Global CDN with edge locations worldwide. Your apps load instantly, everywhere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card shadow-card hover:shadow-accent transition-all duration-300 animate-slide-in-from-bottom" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Developer First</h3>
                <p className="text-muted-foreground">
                  Git integration, automatic deployments, and powerful CLI tools built for your workflow.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card shadow-card hover:shadow-accent transition-all duration-300 animate-slide-in-from-bottom" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  SSL certificates, DDoS protection, and compliance-ready infrastructure by default.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start building today with our developer-friendly hosting plan.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="gradient-card shadow-accent border-primary/20 relative overflow-hidden animate-fade-in">
              <div className="absolute top-0 left-0 right-0 h-1 gradient-accent"></div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Developer Plan</h3>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to ship production-ready apps
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Unlimited projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>100GB bandwidth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Custom domains</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>SSL certificates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>24/7 support</span>
                  </div>
                </div>
                
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="w-full"
                  onClick={() => scrollToSection('payment')}
                >
                  Choose Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section id="payment" className="py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Flexible Payment Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose how you want to pay. We support both traditional and modern payment methods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="gradient-card shadow-card hover:shadow-accent transition-all duration-300 animate-slide-in-from-bottom">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Traditional Payments</h3>
                <p className="text-muted-foreground mb-6">
                  Pay with credit cards, bank transfers, and other conventional payment methods through our secure payment gateway.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Credit Cards</Badge>
                  <Badge variant="secondary">Bank Transfer</Badge>
                  <Badge variant="secondary">PayPal</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gradient-card shadow-card hover:shadow-accent transition-all duration-300 animate-slide-in-from-bottom" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Cryptocurrency</h3>
                <p className="text-muted-foreground mb-6">
                  Pay with Bitcoin, Ethereum, USDC, and other major cryptocurrencies. Fast, secure, and decentralized payments.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Bitcoin</Badge>
                  <Badge variant="secondary">Ethereum</Badge>
                  <Badge variant="secondary">USDC</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upload/Contact Section */}
      <section id="upload" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Deploy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your project files and get your application live in minutes.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto gradient-card shadow-accent animate-fade-in">
            <CardContent className="p-12">
              <div className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center mx-auto mb-8">
                <Code className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Upload Your Project</h3>
              <p className="text-muted-foreground mb-8">
                Have your project ready? Upload your files and provide deployment details through our secure upload portal.
              </p>
              
              <Button 
                variant="gradient" 
                size="xl"
                className="group"
                onClick={() => {
                  // Placeholder for external upload form URL
                  window.open('YOUR_UPLOAD_FORM_URL_HERE', '_blank');
                }}
              >
                Upload Files
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Supports ZIP, TAR, and Git repositories
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Cryptyc</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Developer-friendly hosting with flexible payment options. 
              Built for the modern web.
            </p>
            
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2024 Cryptyc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;