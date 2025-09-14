import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export const Payment = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const ethAddress = "0x6aC5e3016382208E57A8224F4288414d0b30a276"

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

        <div className="max-w-md mx-auto">
          <Card className="gradient-card border-neon-blue/50 p-8 hover:shadow-neon transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-neon-blue">
                ETH / USDC
              </h3>
              
              <div className="mb-6">
                <img src="/lovable-uploads/03d767f5-a9bf-4d53-b0b3-a863721e8ea7.png" alt="ETH/USDC Payment QR Code" className="w-48 h-48 mx-auto rounded-lg mb-4 object-contain" />
                <div className="bg-secondary p-3 rounded-lg font-mono text-sm break-all">
                  {ethAddress}
                </div>
              </div>
              
              <Button
                variant="neonOutline"
                onClick={() => copyToClipboard("0x6aC5e3016382208E57A8224F4288414d0b30a276", "eth")}
                className="w-full"
              >
                {copiedAddress === "eth" ? "Copied!" : "Copy Address"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}