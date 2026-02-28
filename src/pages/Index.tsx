import { useState } from "react"
import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { PlansSection, PLANS } from "@/components/plans-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { AboutSection } from "@/components/about-section"
import { SafetySection } from "@/components/safety-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BuyModal } from "@/components/buy-modal"

export default function Index() {
  const [buyOpen, setBuyOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState({ name: PLANS[0].name, amount: PLANS[0].amount })

  const openBuy = (planName?: string, amount?: number) => {
    if (planName && amount) {
      setSelectedPlan({ name: planName, amount })
    }
    setBuyOpen(true)
  }

  return (
    <div className="dark">
      <Navbar onBuyClick={() => openBuy()} />
      <main>
        <Hero3D onBuyClick={() => openBuy()} />
        <PlansSection onBuyClick={(name, amount) => openBuy(name, amount)} />
        <FeaturesSection />
        <section id="technology">
          <ApplicationsTimeline />
        </section>
        <AboutSection />
        <section id="safety">
          <SafetySection />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection onBuyClick={() => openBuy()} />
      </main>
      <Footer />
      <BuyModal
        open={buyOpen}
        onClose={() => setBuyOpen(false)}
        planName={selectedPlan.name}
        planAmount={selectedPlan.amount}
      />
    </div>
  )
}
