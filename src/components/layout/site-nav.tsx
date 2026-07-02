"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 mix-blend-difference">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="宸联教育"
              width={120}
              height={48}
              className="h-12 w-auto max-h-12"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white/90"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#cta"
              className="inline-flex items-center gap-1.5 rounded-full bg-warm px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-warm-300"
            >
              迈出第一步
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="cursor-pointer p-2 text-white/60 hover:text-white md:hidden"
                aria-label="菜单"
              >
                <MenuIcon />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className={cn(
                "w-72 border-l border-ink-200 bg-ink-100 p-0 text-base sm:max-w-72"
              )}
            >
              <div className="flex justify-end p-5">
                <SheetClose asChild>
                  <button
                    type="button"
                    className="cursor-pointer p-2 text-white/60 hover:text-white"
                    aria-label="关闭菜单"
                  >
                    <CloseIcon />
                  </button>
                </SheetClose>
              </div>
              <div className="flex flex-col gap-6 px-8 text-white/70">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-warm px-5 py-3 font-medium text-ink"
                >
                  迈出第一步
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
