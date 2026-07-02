import { journeySteps, tutors } from "@/lib/site-content";

import { SITE_NAME, SITE_URL } from "./site";

export const organization = {
  legalName: "武汉宸联科技有限公司",
  brandName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  slogan: "实战驱动增长，行动定义未来。",
  description:
    "宸联教育专注 OPC 一人公司孵化与 AI 生态社群建设，以「以工代练」帮助个体在 6 周内跑通 AI 实战变现闭环。",
  location: {
    addressLocality: "武汉市硚口区",
    addressCountry: "CN",
    description: "全国运营中心（2026 年 3 月落户）",
  },
  partner: {
    name: "北京互远未来科技有限公司",
    role: "战略合作方（技术中台与师资体系共享）",
  },
} as const;

export const positioning =
  "OPC 一人公司孵化 · AI 实战教育 · AI 生态社群";

export const valueProposition =
  "以工代练，6 周打通 AI 实战变现闭环。学员在真实商业项目中掌握 GEO 诊断、思维克隆、自动化工作流等核心技能，直接跑通个人变现通路。";

export const elevatorPitch =
  "我们通过「以工代练」带你打实战——让你 6 周内跨越 AI 迷茫期，掌握 GEO 诊断、思维克隆、自动化工作流等核心技能，直接打通属于你的业务变现通路，加入一个持续进化的 AI 实战社群。";

export const keyMetrics = [
  {
    label: "2025 年 OPC 学员数",
    value: "50 位",
    note: "全部孵化出独立交付能力",
  },
  {
    label: "人均年收益",
    value: "10 万+",
    note: "实训结束后半年内实现",
  },
  {
    label: "领跑学员变现",
    value: "200 万+",
    note: "半年内跑通完整变现闭环",
  },
  {
    label: "孵化周期",
    value: "6 周",
    note: "非脱产可弹性安排（2-6 周）",
  },
] as const;

export const methodologies = [
  {
    name: "以工代练",
    description:
      "不听课、不背概念，上手就做。学员在真实项目中走完完整商业闭环。",
  },
  {
    name: "业务探索流",
    description:
      "快速定位核心业务场景，找到 AI 可以打穿的高频、高价值环节，以小切口推进。",
  },
  {
    name: "人格魅力三角形",
    description:
      "创始人彭晶（灵汐）首创的私域信任构建模型，打通信任、成交与复购的变现闭环。",
  },
] as const;

export const trainingModules = [
  "GEO 诊断与智能建站",
  "专家思维克隆",
  "短视频矩阵与内容工厂",
  "AI 自动化工作流与智能体开发",
] as const;

export const course = {
  name: "OPC 一人公司孵化营",
  code: "OPC-INCUBATION",
  description:
    "以工代练的 AI 实战孵化营：学员在导师带领下参与真实项目交付，掌握 3+ 门 AI 实战技能，跑通个人变现闭环并获得 OPC 认证。",
  duration: "P6W",
  educationalLevel: "职业教育 / 实战培训",
  audience: ["转型年轻人", "应届毕业生", "副业重启者"],
  prerequisites: "零 AI 基础可入，带电脑即可",
} as const;

export const howToSteps = journeySteps.map((step, index) => ({
  name: `${step.title}（${step.period}）`,
  text: step.description,
  anchor: `journey-step-${index + 1}`,
  url: `${SITE_URL}/#journey-step-${index + 1}`,
}));

export const faqs = [
  {
    question: "OPC 是什么？与普通 AI 课有何不同？",
    answer:
      "OPC（One Person Company）是宸联教育的核心产品，核心理念是「以工代练」。它不是一门课，而是「实战训练 + 项目交付 + 社群赋能」三位一体的孵化体系：学员入学即参与真实商业项目交付，结业时既掌握 AI 全链路技能，也跑通变现闭环。",
  },
  {
    question: "零 AI 基础可以参加吗？",
    answer:
      "可以。OPC 孵化营面向零 AI 基础学员开放，带电脑即可入学。课程以真实项目实操为主，讲师一线带队，不讲空理论。",
  },
  {
    question: "6 周能学到什么、赚到什么？",
    answer:
      "6 周内学员将上手 AI 工具箱、参与真实项目交付、独立完成子模块并获得首次收入，最终跑通个人变现闭环。2025 年 50 位 OPC 学员人均年收益 10 万+，领跑学员半年变现 200 万+。",
  },
  {
    question: "结业后还有什么支持？",
    answer:
      "结业后学员加入 OPC 社群，获得技能体系、实战项目、变现通路、导师陪跑、联合接单与持续进化支持。结业不散场，持续接单与协作成长。",
  },
  {
    question: "宸联教育与互远 AI 是什么关系？",
    answer:
      "宸联教育以武汉宸联科技有限公司为主体运营，与北京互远未来科技有限公司形成战略合作。互远提供 GEO 引擎、思维克隆技术、自动化工作流与师资体系；宸联负责前台交付、社群运营与学员孵化。",
  },
] as const;

export const communityBenefits = [
  "技能体系：GEO / 思维克隆 / 内容工厂 / 自动化工作流",
  "实战项目：真实商业项目交付，产出即作品集",
  "变现通路：宸联/互远持续输出高价值业务，OPC 优先接单",
  "导师陪跑：结业后持续答疑与项目指导",
  "社群资源：OPC 同学群 + 协作机制 + 联合接单",
  "持续进化：新工具与新方法论第一时间共享",
] as const;

export const contactTopics = [
  "OPC 一人公司孵化营、AI 实战技能课咨询",
  "企业 AI 内训、定制化 Skill 开发",
  "政府/园区 AI 新职业孵化基地共建",
  "师资合作、讲师邀约与公开课",
] as const;

export const geoTutors = tutors;

export const pageTitle =
  "6 周，从零到你的第一个 AI 变现闭环 — 宸联教育 · OPC 孵化营";

export const pageDescription =
  "学 AI 的人很多，走通变现的人很少。6 周实战孵化，让你用真实项目跑通属于你自己的变现路径。";
