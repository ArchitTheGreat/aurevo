import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const Index = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPayment = () => {
    document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })
  }

  const copyToClipboard = async (address: string, type: string) => {
    await navigator.clipboard.writeText(address)
    setCopiedAddress(type)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-hero px-6">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block">Crypto-Only Hosting.</span>
            <span className="block text-neon-blue">No Banks.</span>
            <span className="block text-neon-green">No Drama.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Deploy your site, pay with <span className="text-neon-blue font-semibold">ETH/USDC</span>. Simple.
          </p>
          
          <Button
            onClick={scrollToPricing}
            className="animate-glow-pulse bg-gradient-to-r from-neon-blue to-neon-green text-background font-bold text-lg px-12 py-4 h-14 rounded-xl shadow-neon hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-neon-blue">Simple Pricing</h2>
          
          <Card className="max-w-md mx-auto gradient-card border-neon shadow-card p-8">
            <h3 className="text-2xl font-bold mb-4">Hosting Plan</h3>
            <div className="mb-8">
              <span className="text-4xl font-black text-neon-blue">0.0093 ETH</span>
              <span className="text-muted-foreground ml-2">/ month</span>
            </div>
            
            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-neon-blue rounded-full"></span><span>Unlimited bandwidth</span></div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-neon-blue rounded-full"></span><span>Free SSL included</span></div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-neon-blue rounded-full"></span><span>Managed deployment</span></div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-neon-blue rounded-full"></span><span>24/7 uptime monitoring</span></div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-neon-blue rounded-full"></span><span>Worry-free setup</span></div>
            </div>
            
            <Button onClick={scrollToPayment} className="w-full bg-gradient-to-r from-neon-blue to-neon-green text-background font-bold">
              Pay & Upload Your Site →
            </Button>
          </Card>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neon-green">Step 1: Send Payment</h2>
          <p className="text-xl mb-16 text-muted-foreground">Send crypto to the address below. Save your transaction hash.</p>

          <div className="max-w-md mx-auto">
            <Card className="gradient-card border-neon-blue/50 p-8 hover:shadow-neon transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-neon-blue">ETH / USDC</h3>
                <div className="mb-6">
                  <img src="/lovable-uploads/03d767f5-a9bf-4d53-b0b3-a863721e8ea7.png" alt="ETH/USDC Payment QR Code" className="w-48 h-48 mx-auto rounded-lg mb-4 object-contain" />
                  <div className="bg-secondary p-3 rounded-lg font-mono text-sm break-all">0x6aC5e3016382208E57A8224F4288414d0b30a276</div>
                </div>
                <Button variant="neonOutline" onClick={() => copyToClipboard("0x6aC5e3016382208E57A8224F4288414d0b30a276", "eth")} className="w-full">
                  {copiedAddress === "eth" ? "Copied!" : "Copy Address"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neon-green">Thank You!</h2>
              <p className="text-xl text-muted-foreground">We'll verify your payment and deploy your site. Expect your live link within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-neon-blue">Step 2: Upload Your Files</h2>
                <p className="text-xl text-muted-foreground">Upload your site files and details so we can deploy it.</p>
              </div>

              <Card className="gradient-card p-8">
                <form name="site-upload" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="site-upload" />
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="files">Upload your site files (ZIP, max 100MB)</Label>
                      <Input id="files" name="files" type="file" accept=".zip" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="domain">Your domain (or leave blank for free subdomain)</Label>
                      <Input id="domain" name="domain" placeholder="example.com" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="txhash">Transaction hash (from Step 1) *</Label>
                      <Input id="txhash" name="txhash" placeholder="0x..." required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="contact">Your contact (email or Telegram) *</Label>
                      <Input id="contact" name="contact" placeholder="your@email.com or @telegram" required className="mt-2" />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-neon-blue to-neon-green text-background font-bold">
                      Submit Files
                    </Button>
                  </div>
                </form>
              </Card>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card border-t border-neon/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            Powered by Netlify infrastructure. Managed by <span className="text-neon-blue font-semibold">Cryptyc</span>.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index