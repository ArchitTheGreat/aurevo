import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Globe, Shield, Zap, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import Layout from "@/components/Layout";
// Fixed: Use a regular <a> instead of next/link for Vite compatibility

const Index = () => {
  // Add dark class to enable dark theme
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="secondary" className="mb-6">
              Developer-Friendly Hosting
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">AUREVO</span>{" "}
              <span className="text-foreground">— Hosting Evolved</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Beyond banks. Beyond limits. The next evolution of deployment with flexible payment
              options.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("pricing")}
                className="group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="professional"
                size="xl"
                onClick={() => scrollToSection("features")}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Modern Developers</h2>
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

            <Card
              className="gradient-card shadow-card hover:shadow-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Developer First</h3>
                <p className="text-muted-foreground">
                  Git integration, automatic deployments, and powerful CLI tools built for your
                  workflow.
                </p>
              </CardContent>
            </Card>

            <Card
              className="gradient-card shadow-card hover:shadow-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "0.2s" }}
            >
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No surprises. Just straightforward pricing that scales with you.
            </p>
            {/* Use regular <a> instead of Link */}
            <a
              href="/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline mt-4"
            >
              View Detailed Pricing
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>

          <Button variant="hero" size="sm">
            View Pricing
          </Button>
        </div>
      </section>

      {/* Payment Options Section */}
      <section id="payment" className="py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Flexible Payment Options</h2>
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
                  Pay with credit cards, bank transfers, and other conventional payment methods
                  through our secure payment gateway.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Credit Cards</Badge>
                  <Badge variant="secondary">Bank Transfer</Badge>
                  <Badge variant="secondary">PayPal</Badge>
                </div>
              </CardContent>
            </Card>

            <Card
              className="gradient-card shadow-card hover:shadow-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Cryptocurrency</h3>
                <p className="text-muted-foreground mb-6">
                  Pay with Bitcoin, Ethereum, USDC, and other major cryptocurrencies. Fast, secure,
                  and decentralized payments.
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">AUREVO</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Developer-friendly hosting with flexible payment options. Built for the modern web.
            </p>

            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Support
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">© 2024 AUREVO. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
