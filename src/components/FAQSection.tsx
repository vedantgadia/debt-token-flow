
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of assets can be tokenised on the Vayana Debt Platform?",
    answer: "We currently support tokenisation of loans, debentures, and other private credit instruments. Structured products and hybrid debt instruments are also supported through custom workflows."
  },
  {
    question: "Is the platform available as a white-label solution?",
    answer: "Yes, VDP is available as a white-label SaaS offering for banks, fintechs, and other ecosystem players."
  },
  {
    question: "Is the platform regulatory compliant?",
    answer: "VDP enforces built-in compliance rules for KYC, investor eligibility, and transfer restrictions. It is also adaptable to jurisdiction-specific regulations."
  },
  {
    question: "Who is the platform intended for?",
    answer: "VDP is purpose-built for asset originators, fintech platforms, private credit funds, banks, family offices, NBFIs, and asset managers looking to digitise credit workflows and scale investor access."
  },
  {
    question: "Can the platform handle multiple investor types and jurisdictions?",
    answer: "Yes, VDP supports complex investor onboarding, jurisdiction-based compliance filters, and dynamic transfer rules based on regulatory requirements."
  },
  {
    question: "How long does it take to launch a tokenised debt instrument?",
    answer: "Depending on the complexity of the structure, it can be done in as little as 1–2 weeks using our pre-built templates and onboarding support."
  },
  {
    question: "What level of support does Vayana provide post-deployment?",
    answer: "We offer dedicated onboarding, compliance configuration, and integration support, along with SLAs for enterprise clients."
  },
  {
    question: "Can tokenised assets be custodied or held with third-party custodians?",
    answer: "Yes. VDP is compatible with both self-custody and integration with institutional custodians, depending on client preferences."
  },
  {
    question: "Is the pricing model flexible for smaller institutions or pilots?",
    answer: "Yes, we offer tiered SaaS pricing to cater to different client segments, including early-stage fintechs, banks, and large-scale platforms."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20" id="faq">
      <div className="container px-4 mx-auto">
        <h2 className="section-title text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4 pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
