import { useState } from "react"
import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { PlansSection } from "@/components/plans-section"
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

  return (
    <div className="dark">
      <Navbar onBuyClick={() => setBuyOpen(true)} />
      <main>
        <Hero3D onBuyClick={() => setBuyOpen(true)} />
        <PlansSection onBuyClick={() => setBuyOpen(true)} />
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
        <CTASection onBuyClick={() => setBuyOpen(true)} />
      </main>
      <Footer />
      <BuyModal open={buyOpen} onClose={() => setBuyOpen(false)} />
    </div>
  )
}
