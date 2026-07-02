import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink-50" />
      <div className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-warm/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-rose/5 blur-[80px]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="animate-fade-up stagger-1">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs tracking-wider text-white/40 uppercase">
                OPC 一人公司孵化 · 宸联教育
              </div>
            </div>
            <h1 className="animate-fade-up stagger-2 font-heading text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="text-white">你离 AI 变现，</span>
              <br />
              <span className="text-white">只差</span>
              <span className="animate-shimmer">一次实战</span>
            </h1>
            <p className="animate-fade-up stagger-3 mt-8 max-w-2xl text-lg leading-relaxed text-iron-300 md:text-xl">
              6 周，从零基础到跑通属于你自己的变现闭环。
              <br />
              不是听课，是用真实项目赚真实钱。
            </p>
            <div className="animate-fade-up stagger-4 mt-10 flex flex-wrap gap-4">
              <Link
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-warm px-8 py-4 text-base font-bold text-ink transition-all duration-200 hover:bg-warm-300"
              >
                看看适不适合你
                <ArrowIcon />
              </Link>
              <Link
                href="#stories"
                className="inline-flex items-center gap-2 px-4 py-4 text-sm text-white/50 transition-colors hover:text-white/80"
              >
                先看走通的人
              </Link>
            </div>
            <div className="animate-fade-up stagger-5 mt-12 flex items-center gap-4 text-sm text-iron-400">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-warm" />
                2025 年已孵化 50+ 人
              </span>
              <span className="h-1 w-1 rounded-full bg-iron-600" />
              <span>人均年收益 10 万+</span>
              <span className="h-1 w-1 rounded-full bg-iron-600" />
              <span>领跑者半年 200 万+</span>
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block">
            <div className="relative">
              <div className="absolute -top-8 -right-8 h-48 w-48 rounded-full bg-warm/10 blur-[80px]" />
              <Image
                src="/images/chenlian-hero.jpg"
                alt="宸联教育实训场景"
                width={600}
                height={700}
                className="w-full animate-float rounded-2xl object-cover"
                style={{ aspectRatio: "6/7" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
