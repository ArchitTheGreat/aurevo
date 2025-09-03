import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export const Upload = () => {
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
                variant="neon"
                size="lg"
                className="w-full mt-8"
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