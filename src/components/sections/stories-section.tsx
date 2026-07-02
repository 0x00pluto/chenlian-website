import Image from "next/image";

import { stories } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function StoriesSection() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-ink-50 py-28 md:py-36"
    >
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-warm/5 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20">
          <span className="text-sm tracking-wider text-iron-300 uppercase">
            第三步：他们走通过了
          </span>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-bold md:text-5xl">
            2025 年，<span className="text-warm">50 个人</span>走通了
            <br />
            领跑的人半年变现 200 万+
          </h2>
        </div>

        {stories.map((story, index) => (
          <div
            key={story.name}
            className={cn(
              "grid items-center gap-10 lg:grid-cols-5",
              index < stories.length - 1 && "mb-20"
            )}
          >
            <div
              className={cn(
                "lg:col-span-2",
                !story.imageFirst && "lg:order-last"
              )}
            >
              <Image
                src={story.image}
                alt={story.imageAlt}
                width={500}
                height={375}
                className="w-full rounded-xl object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
            <div className="lg:col-span-3">
              <div className="quote-mark" />
              <blockquote className="font-heading text-xl leading-relaxed font-medium text-white/90 md:text-2xl">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={story.avatar}
                  alt="学员头像"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{story.name}</p>
                  <p className="text-xs text-iron-400">{story.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
