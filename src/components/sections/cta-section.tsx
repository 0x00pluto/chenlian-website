"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { userTypeOptions } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const fieldClassName = cn(
  "h-auto rounded-lg border-ink-200 bg-ink px-4 py-3 text-sm text-white",
  "placeholder:text-iron focus-visible:border-warm/50 focus-visible:ring-warm/20"
);

const labelClassName = "mb-1 block text-xs font-medium text-iron-400";

export function CtaSection() {
  const [userType, setUserType] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("感谢咨询！我们会在 24 小时内联系你。");
  };

  return (
    <section id="cta" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-10">
        <span className="text-sm font-medium tracking-wider text-iron-300 uppercase">
          下一步
        </span>
        <h2 className="mt-6 font-heading text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-white">这条路适合你吗？</span>
          <br />
          <span className="text-warm">聊聊你的情况</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-iron-300">
          不用马上决定。先聊聊你的现状和目标，我们帮你判断 OPC
          孵化营是不是你需要的。
        </p>
        <div className="mx-auto mt-12 max-w-lg">
          <div className="rounded-2xl border border-ink-200 bg-ink-50 p-8">
            <form className="space-y-4 text-left" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className={labelClassName}>
                    姓名
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="你的名字"
                    required
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <Label htmlFor="contact" className={labelClassName}>
                    联系方式
                  </Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="text"
                    placeholder="微信 / 手机"
                    required
                    className={fieldClassName}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="user-type" className={labelClassName}>
                  你属于哪一类？
                </Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger
                    id="user-type"
                    className={cn(fieldClassName, "w-full")}
                  >
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent className="border-ink-200 bg-ink-100 text-iron-300">
                    {userTypeOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="focus:bg-ink-200 focus:text-white"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message" className={labelClassName}>
                  简单说说你的情况
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="你现在在做什么？想让 AI 帮你解决什么问题？"
                  className={cn(fieldClassName, "resize-none")}
                />
              </div>
              <Button
                type="submit"
                variant="warm"
                className="h-auto w-full cursor-pointer rounded-xl px-6 py-4 text-base"
              >
                免费咨询
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
