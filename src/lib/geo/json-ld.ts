import {
  course,
  faqs,
  howToSteps,
  organization,
  pageDescription,
  pageTitle,
} from "@/lib/geo/facts";
import { SITE_URL } from "@/lib/geo/site";

export function buildHomeJsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const courseId = `${SITE_URL}/#course-opc`;
  const howToId = `${SITE_URL}/#howto-opc`;
  const faqId = `${SITE_URL}/#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: organization.brandName,
        legalName: organization.legalName,
        url: organization.url,
        logo: organization.logo,
        description: organization.description,
        slogan: organization.slogan,
        address: {
          "@type": "PostalAddress",
          addressLocality: organization.location.addressLocality,
          addressCountry: organization.location.addressCountry,
        },
        parentOrganization: {
          "@type": "Organization",
          name: organization.partner.name,
          description: organization.partner.role,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: organization.brandName,
        description: pageDescription,
        inLanguage: "zh-CN",
        publisher: { "@id": orgId },
      },
      {
        "@type": "Course",
        "@id": courseId,
        name: course.name,
        description: course.description,
        courseCode: course.code,
        educationalLevel: course.educationalLevel,
        timeRequired: course.duration,
        provider: { "@id": orgId },
        url: `${SITE_URL}/#cta`,
        teaches: [
          "GEO 诊断与智能建站",
          "专家思维克隆",
          "短视频矩阵与内容工厂",
          "AI 自动化工作流与智能体开发",
        ],
        audience: {
          "@type": "EducationalAudience",
          audienceType: course.audience.join("、"),
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "blended",
          courseWorkload: course.duration,
        },
      },
      {
        "@type": "HowTo",
        "@id": howToId,
        name: "OPC 孵化营 6 周成长路径",
        description:
          "从上手 AI 工具到跑通个人变现闭环的 6 周实战进度，以工代练参与真实项目交付。",
        totalTime: course.duration,
        step: howToSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
          url: step.url,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "zh-CN",
        isPartOf: { "@id": websiteId },
        about: { "@id": courseId },
        mainEntity: { "@id": courseId },
      },
    ],
  };
}
