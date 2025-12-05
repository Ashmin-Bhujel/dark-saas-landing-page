import Box from "@/assets/icons/box";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

function FeatureCard({ title, description }: Feature) {
  return (
    <div className="flex max-w-sm flex-col items-center rounded-xl border border-white/30 px-5 py-10">
      {/* Box */}
      <div className="flex size-14 items-center justify-center rounded-lg bg-white text-black">
        <Box />
      </div>

      {/* Title */}
      <h3 className="pt-6 font-bold">{title}</h3>

      {/* Description */}
      <p className="pt-2 text-white/70">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="bg-black px-4 py-[72px] text-white sm:py-24">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Features content */}
        <div className="flex max-w-xl flex-col gap-5">
          <h2 className="text-5xl leading-12 font-bold tracking-tighter">
            Everything you need
          </h2>
          <p className="text-xl leading-7 text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        {/* Features cards */}
        <div className="flex max-w-7xl flex-col gap-4 pt-16 sm:flex-row">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
