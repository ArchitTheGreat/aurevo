import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket, faLock, faTools, faClock, faCheckCircle } from "@fortawesome/free-solid-svg-icons"

export const Pricing = () => {
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
                  <FontAwesomeIcon icon={faRocket} className="text-neon-blue w-5 h-5" />
                  <span>Unlimited bandwidth</span>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faLock} className="text-neon-blue w-5 h-5" />
                  <span>Free SSL included</span>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faTools} className="text-neon-blue w-5 h-5" />
                  <span>Managed deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faClock} className="text-neon-blue w-5 h-5" />
                  <span>24/7 uptime monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-neon-blue w-5 h-5" />
                  <span>Worry-free setup</span>
                </div>
              </div>
              
              <Button
                variant="neon"
                size="lg"
                onClick={scrollToPayment}
                className="w-full"
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