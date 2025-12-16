import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ExamplesSection } from "@/components/examples-section"
import { LeadFormSection } from "@/components/lead-form-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <ComparisonSection />
      <ExamplesSection />
      <LeadFormSection />
    </main>
  )
}
