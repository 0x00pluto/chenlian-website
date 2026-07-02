import { navLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-200 bg-ink py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-iron md:flex-row">
          <p>宸联教育 · 武汉宸联科技有限公司</p>
          <p>战略合作：北京互远未来科技有限公司</p>
          <p>&copy; 2026</p>
        </div>
      </div>
    </footer>
  );
}
