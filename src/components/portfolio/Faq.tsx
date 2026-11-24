import { motion } from "framer-motion";

export const FAQS = [
  {
    question: "How fast can an AI agent reply to a new lead?",
    answer:
      "In under 60 seconds, 24/7 \u2014 including nights, weekends and holidays, when most property enquiries actually arrive.",
  },
  {
    question: "Which tools do you build with?",
    answer:
      "Every automation is built in n8n and connected to the tools you already use \u2014 WhatsApp, your CRM and your calendar.",
  },
  {
    question: "Can the agent book viewings into our calendar?",
    answer:
      "Yes. It qualifies the lead first, then books, confirms and sends reminders automatically.",
  },
  {
    question: "Do we need to change our current CRM?",
    answer:
      "No. The system is wired into your existing CRM and lead sources.",
  },
  {
    question: "How do we start?",
    answer:
      "Book a 15-minute call. You will see a live demo built around your own listings before you commit to anything.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex items-end mb-12 gap-4 sm:gap-8">
        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight shrink-0">
          COMMON_QUESTIONS
        </h2>
        <div className="h-px flex-1 bg-white/10 mb-2" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {FAQS.map((f, i) => (
          <motion.div
            key={f.question}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="p-8 bg-surface border border-white/10 hover:border-accent/60 transition-colors"
          >
            <div className="flex items-center mb-5">
              <div className="size-3 bg-accent rounded-full shadow-[0_0_12px_var(--color-accent)]" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-3">{f.question}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
