import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import qrEth from "@/assets/qr-eth.png"
import qrDoge from "@/assets/qr-doge.png"

export const Payment = () => {
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
                variant="neonOutline"
                onClick={() => copyToClipboard("0x1234567890abcdef1234567890abcdef12345678", "eth")}
                className="w-full"
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
                variant="neonOutline"
                onClick={() => copyToClipboard("DMK3L4N8EXAMPLE9XYZ", "doge")}
                className="w-full border-neon-green text-neon-green hover:bg-neon-green"
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