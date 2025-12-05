import AccordionItem from "./accordian-item";

export interface AccordianItem {
  question: string;
  answer: string;
}

const accordianItems: AccordianItem[] = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export default function FAQs() {
  return (
    <section className="bg-linear-(--faqs-section-gradient) px-4 py-[72px] text-white sm:py-24">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex max-w-2xl flex-col gap-5">
          {/* FAQs heading */}
          <h2 className="text-center text-5xl leading-12 font-bold tracking-tighter">
            Frequently asked questions
          </h2>

          {/* FAQs */}
          <div className="flex flex-col pt-12">
            {accordianItems.map((accordianItem) => (
              <AccordionItem
                key={accordianItem.question}
                question={accordianItem.question}
                answer={accordianItem.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
