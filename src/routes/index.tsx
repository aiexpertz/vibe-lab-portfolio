import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav, Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Faq, FAQS } from "@/components/portfolio/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "n8n Automation for Real Estate Agents | AI Lead Bots & WhatsApp Agents" },
      {
        name: "description",
        content:
          "n8n automation for real estate agents: AI lead qualification bots, WhatsApp AI agents, voice AI call agents and CRM follow-up systems that reply to every lead in under 60 seconds.",
      },
      {
        property: "og:title",
        content: "n8n Automation for Real Estate Agents | AI Lead Bots & WhatsApp Agents",
      },
      {
        property: "og:description",
        content:
          "AI agents that qualify real estate leads, answer property inquiries on WhatsApp 24/7, match buyers to listings and automate realtor CRM follow-up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "VIBE_LAB \u2014 Ammar Siddiqui, AI Automation for Real Estate",
      url: "https://ammaraiexpert.findhubmedia.com/",
      image: "https://ammaraiexpert.findhubmedia.com/og-image.webp",
      description:
        "AI automation for real estate agents and agencies: n8n lead qualification bots, WhatsApp property inquiry automation, voice AI agents, buyer-listing matching and CRM follow-up systems.",
      email: "ammarsidaiexpert@gmail.com",
      telephone: "+92-314-7666278",
      founder: {
        "@type": "Person",
        name: "Ammar Siddiqui",
        jobTitle: "AI Automation Specialist for Real Estate",
        sameAs: ["https://www.linkedin.com/in/ammarsiddiqui-ai"],
      },
      areaServed: ["Dubai", "United Arab Emirates", "Saudi Arabia", "United States"],
      knowsAbout: [
        "n8n",
        "WhatsApp automation",
        "AI lead qualification",
        "real estate CRM automation",
        "voice AI agents",
        "appointment booking automation",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Philosophy />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
