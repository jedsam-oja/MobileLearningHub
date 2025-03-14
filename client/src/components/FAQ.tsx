import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      question: "What is OnlineJacademy?",
      answer: "OnlineJacademy is a comprehensive medical education platform designed to help medical students and professionals enhance their learning through interactive resources, including MCQs, video lectures, spaced repetition tools, study groups, and educational podcasts."
    },
    {
      question: "How much does OnlineJacademy cost?",
      answer: "OnlineJacademy offers multiple subscription plans to fit different needs and budgets. We provide monthly and annual subscriptions with various tiers of access. Students can also benefit from special discounted rates. Visit our pricing page for detailed information."
    },
    {
      question: "Can I access OnlineJacademy on mobile devices?",
      answer: "Yes, OnlineJacademy is fully responsive and works on all devices including smartphones, tablets, laptops, and desktop computers. We also offer dedicated mobile apps for iOS and Android for an optimized mobile learning experience."
    },
    {
      question: "How is the question bank organized?",
      answer: "Our question bank is organized by medical specialties, subjects, and difficulty levels. You can create custom practice sessions based on specific topics, or take comprehensive tests that simulate exam conditions. All questions include detailed explanations and references."
    },
    {
      question: "Are the video lectures downloadable for offline viewing?",
      answer: "Yes, premium subscribers can download video lectures for offline viewing. This feature is particularly useful for studying in areas with limited internet connectivity or while traveling."
    },
    {
      question: "How does the spaced repetition system work?",
      answer: "Our spaced repetition system uses an algorithm based on cognitive science to optimize memory retention. It tracks your performance on each question and schedules reviews at the optimal intervals for long-term retention, presenting difficult items more frequently than ones you know well."
    },
    {
      question: "Can I form private study groups with my classmates?",
      answer: "Absolutely! OnlineJacademy allows you to create private study groups where you can invite specific members, share resources, schedule virtual study sessions, and collaborate on notes and flashcards."
    },
    {
      question: "How often is the content updated?",
      answer: "We regularly update our content to reflect the latest medical knowledge, guidelines, and exam patterns. Our team of medical educators reviews and refreshes the question bank, video lectures, and other resources on a quarterly basis."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to commonly asked questions about OnlineJacademy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}