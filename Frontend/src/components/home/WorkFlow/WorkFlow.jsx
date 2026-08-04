import {
  ClipboardList,
  Building2,
  Settings,
  Rocket,
} from "lucide-react";

import HowItWorksCard from "./HowItWorksCard";

const workflow = [
  {
    icon: <ClipboardList size={34} />,
    title: "Request a Clinic",
    description:
      "Submit your clinic details and onboarding request.",
  },
  {
    icon: <Building2 size={34} />,
    title: "Workspace Created",
    description:
      "PATRAK creates a secure cloud workspace for your clinic.",
  },
  {
    icon: <Settings size={34} />,
    title: "Configure Modules",
    description:
      "Choose the modules your clinic requires.",
  },
  {
    icon: <Rocket size={34} />,
    title: "Go Live",
    description:
      "Start managing your clinic with PATRAK.",
  },
];

function WorkFlow() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      {/* Heading */}

      <div className="text-center">

        <p className="uppercase tracking-widest text-[#54ACBF] font-semibold">

          How It Works

        </p>

        <h2 className="mt-3 text-4xl font-bold text-[#023859]">

          Getting Started is Simple

        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">

          From requesting your clinic workspace to going live,
          PATRAK makes onboarding simple, secure, and hassle-free.

        </p>

      </div>

      {/* Timeline */}

      <div className="relative mt-24">

        {/* Horizontal Line */}

        <div className="hidden lg:block absolute top-10 left-24 right-24 h-0.5 bg-[#D8EEF2]"></div>

        {/* Steps */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {workflow.map((step) => (

            <HowItWorksCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default WorkFlow;