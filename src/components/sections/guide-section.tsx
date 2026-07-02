import Image from "next/image";

import { tutors } from "@/lib/site-content";

export function GuideSection() {
  return (
    <section id="guide" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20">
          <span className="text-sm tracking-wider text-iron-300 uppercase">
            谁带你走
          </span>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-bold md:text-5xl">
            带你的人，
            <br />
            <span className="text-warm">正在一线做交付</span>
          </h2>
          <p className="mt-4 text-lg text-iron-300">
            不是职业讲师。每个人讲的是自己上周在做的事。
          </p>
        </div>
        <div className="grid gap-px bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
          {tutors.map((tutor) => (
            <div key={tutor.name} className="bg-ink-50 p-8 md:p-10">
              <div className="mb-5 aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src={tutor.image}
                  alt={tutor.alt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs tracking-wider text-iron-400">{tutor.role}</p>
              <h3 className="mt-1 mb-2 font-heading text-lg font-bold">
                {tutor.name}
              </h3>
              <p className="text-sm leading-relaxed text-iron-300">
                {tutor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
