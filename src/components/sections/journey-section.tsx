import Image from "next/image";

import { journeySteps } from "@/lib/site-content";

export function JourneySection() {
  return (
    <section id="journey" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20">
          <span className="text-sm tracking-wider text-iron-300 uppercase">
            第二步：你会经历什么
          </span>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-bold md:text-5xl">
            不是课程大纲，
            <br />
            <span className="text-warm">是你 6 周的真实进度</span>
          </h2>
        </div>
        <div className="grid gap-px bg-ink-200 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <div
              key={step.step}
              id={`journey-step-${index + 1}`}
              className="flex flex-col bg-ink-50 p-10 md:p-12"
            >
              <span className="font-heading text-5xl font-bold text-warm-400/30">
                {step.step}
              </span>
              <h3 className="mt-6 mb-2 font-heading text-lg font-bold">
                {step.title}
              </h3>
              <p className="mb-4 text-xs tracking-wider text-iron-400 uppercase">
                {step.period}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-iron-300">
                {step.description}
              </p>
              <div className="mt-6">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={400}
                  height={267}
                  className="w-full rounded-lg object-cover"
                  style={{ aspectRatio: "3/2" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
