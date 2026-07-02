import { communityFeatures } from "@/lib/site-content";

function CommunityIcon({ icon }: { icon: string }) {
  const stroke = "#D99D2F";

  switch (icon) {
    case "book":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 17.5" />
          <path d="M8 7h8" />
          <path d="M8 11h6" />
          <path d="M8 15h4" />
        </svg>
      );
    case "file":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "star":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "users":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "monitor":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "clock":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    default:
      return null;
  }
}

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-28 md:py-36">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-warm/5 blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20">
          <span className="text-sm tracking-wider text-iron-300 uppercase">
            走通以后
          </span>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-bold md:text-5xl">
            你不是一个人，
            <br />
            <span className="text-warm">你加入了一个生态</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-5 rounded-xl border border-ink-200 bg-ink p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-warm/20">
                <CommunityIcon icon={feature.icon} />
              </div>
              <div>
                <h3 className="mb-1 font-heading text-base font-bold">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-iron-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
