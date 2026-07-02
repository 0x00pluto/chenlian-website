export const navLinks = [
  { href: "#problem", label: "适合我？" },
  { href: "#journey", label: "路径" },
  { href: "#stories", label: "走通的人" },
  { href: "#guide", label: "导师" },
] as const;

export const problemTypes = [
  {
    type: "类型 01",
    title: "你在传统岗位遇到天花板",
    description:
      "工作稳定但增长有限，想切换到 AI 赛道但不知道从哪里入手。不想脱产两年去读个学位，想要一个确定性能走通的路。",
    image: "/images/student-career.jpg",
    alt: "转型职场人",
  },
  {
    type: "类型 02",
    title: "你刚毕业，不想进传统格子间",
    description:
      "不想一毕业就陷入低效的重复工作。你想把 AI 作为你的核心竞争力，直接走一条更高起点、更快兑现的路。",
    image: "/images/student-grad.jpg",
    alt: "应届毕业生",
  },
  {
    type: "类型 03",
    title: "你想要一个确定性高的第二收入",
    description:
      "你可能是自由职业、全职妈妈、或者 Gap 期。你不需要另一个「知识付费」课程，你需要一个真正能变现的技能和通路。",
    image: "/images/student-side.jpg",
    alt: "副业/自由职业",
  },
] as const;

export const solutionStats = [
  { value: "6", suffix: "周", label: "非脱产弹性安排" },
  { value: "0", suffix: "", label: "AI 基础可入" },
  { value: "3", suffix: "+", label: "核心技能掌握" },
  { value: "1", suffix: "", label: "跑通的变现闭环" },
] as const;

export const journeySteps = [
  {
    step: "01",
    title: "上手",
    period: "第 1-2 周",
    description:
      "你上手 AI 工具箱，开始在导师带领下参与真实项目。不是模拟题，是客户真正在等的交付。",
    image: "/images/journey-step1.jpg",
    alt: "上手阶段",
  },
  {
    step: "02",
    title: "交付",
    period: "第 3-4 周",
    description:
      "你独立完成子模块交付，拿到第一笔项目收入。从「跟着做」变成「自己能做」。",
    image: "/images/journey-step2.jpg",
    alt: "交付阶段",
  },
  {
    step: "03",
    title: "跑通",
    period: "第 5-6 周",
    description:
      "你跑通属于自己的变现闭环，获得 OPC 认证。你不是「学完了」，是「走通了」。",
    image: "/images/journey-step3.jpg",
    alt: "跑通阶段",
  },
  {
    step: "04",
    title: "进化",
    period: "持续",
    description:
      "你加入 OPC 社群，持续接单、协作、成长。不是学完就散，是加入一个持续进化的 AI 实战圈。",
    image: "/images/journey-step4.jpg",
    alt: "社群阶段",
  },
] as const;

export const stories = [
  {
    quote:
      "之前学了半年 AI 课，工具都会用，就是不知道怎么变现。孵化营第 4 周接了第一个项目，第 6 周已经回本了。",
    name: "学员 A",
    role: "前互联网运营 → 独立 AI 营销顾问，半年变现 60 万+",
    image: "/images/student-a.jpg",
    imageAlt: "学员 A",
    avatar: "/images/avatar-a.jpg",
    imageFirst: true,
  },
  {
    quote:
      "毕业后没去上班。孵化营里跑通的项目直接变成了我自己的工作室，现在客户排队。",
    name: "学员 B",
    role: "应届毕业生 → AI 内容工作室创始人，服务 3 个品牌客户",
    image: "/images/student-b.jpg",
    imageAlt: "学员 B",
    avatar: "/images/avatar-a.jpg",
    imageFirst: false,
  },
  {
    quote:
      "全职带娃两年，之前焦虑到失眠。现在一边带娃一边接 AI 优化的单，收入比之前上班还高。",
    name: "学员 C",
    role: "全职妈妈 → 自由 AI 优化师，月收入稳定 2 万+",
    image: "/images/student-c.jpg",
    imageAlt: "学员 C",
    avatar: "/images/avatar-a.jpg",
    imageFirst: true,
  },
] as const;

export const tutors = [
  {
    name: "彭晶（灵汐）",
    role: "创始人 / 主讲导师",
    description:
      "10 年营销 × 10 年互联网 × 5 年 AI 落地。2025 年主导赋能 50 位 OPC 学员。首创「人格魅力三角形」营销理论。",
    image: "/images/tutor-peng.jpg",
    alt: "彭晶老师",
  },
  {
    name: "智鹏（布鲁托）",
    role: "联合创始人 / AI 技术首席导师",
    description:
      "20 年全栈开发，10+ 企业级 AI 产品落地。自研 GEO 营销引擎。服务海尔、方正证券等。",
    image: "/images/tutor-zhi.jpg",
    alt: "智鹏老师",
  },
  {
    name: "李桢",
    role: "专家顾问 / 课程总顾问",
    description:
      "工信部 AI 内容创作师首席讲师。已服务 184 家中大型企业，覆盖人大、复旦等顶尖学府。",
    image: "/images/tutor-li.jpg",
    alt: "李桢老师",
  },
  {
    name: "袁文（莫莫）",
    role: "核心讲师",
    description:
      "12 年医药大健康行业纵深，混沌学园 AI 教练。独创「AI 入企三螺旋模型」。",
    image: "/images/tutor-yuan.jpg",
    alt: "袁文老师",
  },
] as const;

export const communityFeatures = [
  {
    title: "技能体系",
    description:
      "AI 全链路工具箱：GEO 诊断、思维克隆、内容工厂、自动化工作流，一站式掌握。",
    icon: "book",
  },
  {
    title: "实战项目",
    description:
      "真实商业项目交付，讲师一线带队，产出即作品集。你做的不是作业，是客户在等的交付。",
    icon: "file",
  },
  {
    title: "变现通路",
    description:
      "宸联/互远持续输出高价值业务通路，OPC 优先接单，学完就有地方赚钱。",
    icon: "star",
  },
  {
    title: "导师陪跑",
    description:
      "结业不散场。导师持续答疑、项目指导，你在实战中遇到的任何一个坑都有人帮你避开。",
    icon: "users",
  },
  {
    title: "社群资源 + 联合接单",
    description:
      "OPC 同学群 + 协作机制，大项目联合接单，你接不完的转给同学，互相背书。",
    icon: "monitor",
  },
  {
    title: "持续进化",
    description:
      "新工具、新方法论第一时间共享。AI 变化快，你不需要一个人跟——整个社群帮你跟。",
    icon: "clock",
  },
] as const;

export const userTypeOptions = [
  "传统岗位想转 AI",
  "应届毕业生",
  "副业 / 自由职业",
  "其他",
] as const;
