import ContactSection from "@/components/ContactSection"
import DebtAboutSection from "@/components/DebtAboutSection"
import DebtCalloutSection from "@/components/DebtCalloutSection"
import DebtFeaturesSection from "@/components/DebtFeaturesSection"
import DebtHeroSection from "@/components/DebtHeroSection"
import DebtPlatformShowcase from "@/components/DebtPlatformShowcase"
import DebtPricingSection from "@/components/DebtPricingSection"
import DebtStepByStepSection from "@/components/DebtStepByStepSection"
import FAQSection from "@/components/FAQSection"
import LinkedInFeed from "@/components/LinkedInFeed"

const DebtCapitalMarket = () => {
    return (
        <>
            <DebtHeroSection />
            <DebtPricingSection />
            <DebtAboutSection />
            <DebtPlatformShowcase />
            <DebtCalloutSection />
            <DebtStepByStepSection />
            <DebtFeaturesSection />
            <FAQSection />
            <ContactSection />
            <LinkedInFeed />
        </>
    )
}

export default DebtCapitalMarket