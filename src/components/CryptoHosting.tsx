import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import qrEth from "@/assets/qr-eth.png"
import qrDoge from "@/assets/qr-doge.png"

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero px-6">
      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="block">Crypto-Only Hosting.</span>
          <span className="block text-neon-blue">No Banks.</span>
          <span className="block text-neon-green">No Drama.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          Deploy your site, pay with <span className="text-neon-blue font-semibold">ETH/USDC/DOGE</span>. Simple.
        </p>
        
        <Button
          variant="default"
          size="lg"
          onClick={scrollToPricing}
          className="animate-glow-pulse bg-gradient-to-r from-neon-blue to-neon-green text-background font-bold text-lg px-8 py-4 shadow-neon hover:shadow-lg hover:scale-105 transition-all duration-300 h-14 rounded-xl px-12"
        >
          Get Started Now
        </Button>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Pricing = () => {
  const scrollToPayment = () => {
    document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-neon-blue">
          Simple Pricing
        </h2>
        
        <div className="max-w-md mx-auto">
          <Card className="gradient-card border-neon shadow-card p-8 hover:shadow-neon transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Hosting Plan</h3>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-neon-blue">0.0093 ETH</span>
                <span className="text-muted-foreground ml-2">/ month</span>
              </div>
              
              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span>Unlimited bandwidth</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  <span>Free SSL included</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🛠</span>
                  <span>Managed deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏱</span>
                  <span>24/7 uptime monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Worry-free setup</span>
                </div>
              </div>
              
              <Button
                variant="default"
                size="lg"
                onClick={scrollToPayment}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-green text-background font-bold shadow-neon hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Pay & Upload Your Site →
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

const Payment = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const ethAddress = "0x1234...abcd"
  const dogeAddress = "DMK3...xyz9"

  const copyToClipboard = async (address: string, type: string) => {
    await navigator.clipboard.writeText(address)
    setCopiedAddress(type)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  return (
    <section id="payment" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neon-green">
          Step 1: Send Payment
        </h2>
        
        <p className="text-xl mb-16 text-muted-foreground max-w-2xl mx-auto">
          Send crypto to the address below. Save your transaction hash.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* ETH/USDC Card */}
          <Card className="gradient-card border-neon-blue/50 p-8 hover:shadow-neon transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-neon-blue">
                ETH / USDC
              </h3>
              
              <div className="mb-6">
                <img 
                  src={qrEth} 
                  alt="ETH QR Code" 
                  className="w-48 h-48 mx-auto rounded-lg mb-4"
                />
                <div className="bg-secondary p-3 rounded-lg font-mono text-sm break-all">
                  {ethAddress}
                </div>
              </div>
              
              <Button
                variant="outline"
                onClick={() => copyToClipboard("0x1234567890abcdef1234567890abcdef12345678", "eth")}
                className="w-full border-2 border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300"
              >
                {copiedAddress === "eth" ? "Copied!" : "Copy Address"}
              </Button>
            </div>
          </Card>

          {/* DOGE Card */}
          <Card className="gradient-card border-neon-green/50 p-8 hover:shadow-neon transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-neon-green">
                DOGE
              </h3>
              
              <div className="mb-6">
                <img 
                  src={qrDoge} 
                  alt="DOGE QR Code" 
                  className="w-48 h-48 mx-auto rounded-lg mb-4"
                />
                <div className="bg-secondary p-3 rounded-lg font-mono text-sm break-all">
                  {dogeAddress}
                </div>
              </div>
              
              <Button
                variant="outline"
                onClick={() => copyToClipboard("DMK3L4N8EXAMPLE9XYZ", "doge")}
                className="w-full border-2 border-neon-green bg-transparent text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300"
              >
                {copiedAddress === "doge" ? "Copied!" : "Copy Address"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

const Upload = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    
    // Scroll to confirmation
    setTimeout(() => {
      document.getElementById('confirmation')?.scrollIntoView({ behavior: 'smooth' })
    }, 500)
  }

  if (submitted) {
    return (
      <section id="confirmation" className="py-20 px-6 bg-background">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neon-green">
            Thank You!
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            We'll verify your payment and deploy your site. Expect your live link within 24 hours.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="upload" className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neon-blue">
            Step 2: Upload Your Files
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Upload your site files and details so we can deploy it.
          </p>
        </div>

        <Card className="gradient-card border-neon shadow-card p-8">
          <form name="site-upload" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="site-upload" />
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="files" className="text-lg font-semibold">
                  Upload your site files (ZIP, max 100MB)
                </Label>
                <Input
                  id="files"
                  name="files"
                  type="file"
                  accept=".zip"
                  required
                  className="mt-2 border-neon-blue/50 focus:border-neon-blue"
                />
              </div>

              <div>
                <Label htmlFor="domain" className="text-lg font-semibold">
                  Your domain (or leave blank for free subdomain)
                </Label>
                <Input
                  id="domain"
                  name="domain"
                  type="text"
                  placeholder="example.com"
                  className="mt-2 border-neon-blue/50 focus:border-neon-blue"
                />
              </div>

              <div>
                <Label htmlFor="txhash" className="text-lg font-semibold">
                  Transaction hash (from Step 1) *
                </Label>
                <Input
                  id="txhash"
                  name="txhash"
                  type="text"
                  placeholder="0x..."
                  required
                  className="mt-2 border-neon-blue/50 focus:border-neon-blue"
                />
              </div>

              <div>
                <Label htmlFor="contact" className="text-lg font-semibold">
                  Your contact (email or Telegram) *
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="your@email.com or @telegram"
                  required
                  className="mt-2 border-neon-blue/50 focus:border-neon-blue"
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full mt-8 bg-gradient-to-r from-neon-blue to-neon-green text-background font-bold shadow-neon hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Submit Files
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card border-t border-neon/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          Powered by Netlify infrastructure. Managed by <span className="text-neon-blue font-semibold">CryptoHost</span>.
        </p>
      </div>
    </footer>
  )
}

export const CryptoHostingLanding = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Hero />
      <Pricing />
      <Payment />
      <Upload />
      <Footer />
    </div>
  )
}