import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { faqs, siteConfig, siteCopy } from "@/data/site-content";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "Frequently Asked Questions — Keyworld Music Institute" }, { name: "description", content: "Answers about Keyworld programmes, levels, durations, instruments, fees, admission and enrolment." }, { property: "og:title", content: "FAQ — Keyworld Music Institute" }, { property: "og:description", content: "Everything you need to know before beginning your music programme." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: FAQPage,
});

function FAQPage() {
  return <><PageHero eyebrow="Questions, answered" title="Start with clarity. Continue with confidence." image={siteConfig.assets.violin} /><section className="section-pad bg-surface"><div className="content-wrap grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><SectionHeading eyebrow="FAQ" title="What learners ask us." copy="Still deciding? Speak with our team and we’ll help you choose the right programme, instrument and level." /><div><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger className="py-6 font-display text-xl no-underline hover:no-underline sm:text-2xl">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-7 text-sm leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion><Button asChild variant="premium" size="xl" className="mt-10"><Link to="/enrol" search={{ level: undefined, instrument: undefined, mode: undefined }}>{siteCopy.enrolNow} <ArrowRight /></Link></Button></div></div></section></>;
}