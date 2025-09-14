import { Button } from "@/components/ui/button"

export const Hero = () => {
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
          variant="hero"
          size="xl"
          onClick={scrollToPricing}
          className="animate-glow-pulse"
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