import { solutionStats } from "@/lib/site-content";

export function SolutionSection() {
  return (
    <section className="bg-ink-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="mb-6 text-sm tracking-wider text-iron-400 uppercase">
          我们的答案
        </p>
        <h2 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-white">OPC 孵化营</span>
          <br />
          <span className="text-warm">以工代练，6 周走通变现</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-iron-300">
          不是听课。你从第一天就上手真实项目，在实战中掌握 AI
          全链路工具，同时赚到你的第一笔收入。
        </p>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {solutionStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-ink-200 bg-ink p-6"
            >
              <p className="font-heading text-3xl font-bold text-warm">
                {stat.value}
                {stat.suffix && (
                  <span className="text-warm/50">{stat.suffix}</span>
                )}
              </p>
              <p className="mt-2 text-xs text-iron-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
