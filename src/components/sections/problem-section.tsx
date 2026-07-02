import Image from "next/image";

import { problemTypes } from "@/lib/site-content";

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20">
          <span className="text-sm tracking-wider text-iron-300 uppercase">
            第一步：确认这是你的问题
          </span>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-bold md:text-5xl">
            AI 工具学了又忘，
            <br />
            <span className="text-warm">缺的不是课，是变现的路</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-iron-300">
            你不是不会用 AI。你是学了很多，但没人带你走通从「会用」到「变现」那最后一步。
          </p>
        </div>
        <div className="grid gap-px bg-ink-200 md:grid-cols-3">
          {problemTypes.map((item) => (
            <div
              key={item.type}
              className="flex min-h-[280px] flex-col justify-between bg-ink-50 p-10 md:p-14"
            >
              <div>
                <span className="text-xs tracking-wider text-iron uppercase">
                  {item.type}
                </span>
                <h3 className="mt-3 mb-3 font-heading text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-iron-300">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 text-sm text-iron">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full rounded-lg object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-sm text-iron-400">对号入座了？</p>
        </div>
      </div>
    </section>
  );
}
