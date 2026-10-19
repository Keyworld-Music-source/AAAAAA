import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { aboutContent, siteConfig, siteCopy } from "@/data/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us — Keyworld Music Institute" }, { name: "description", content: "Learn about Keyworld Music Institute: our mission, our structured music training and how we develop musicians in Akure and online." }, { property: "og:title", content: "About Keyworld Music Institute" }, { property: "og:description", content: "Structured, progressive music education from absolute beginner to industry pro." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: AboutPage,
});

function AboutPage() {
  return <>
    <PageHero eyebrow="About Us" title={aboutContent.hero} description={aboutContent.intro} image={siteConfig.assets.room} />
    <section className="section-pad bg-background"><div className="content-wrap grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
      <SectionHeading eyebrow="Our story" title={aboutContent.storyTitle} />
      <div className="space-y-6 text-base leading-8 text-muted-foreground">{aboutContent.story.map(p => <p key={p}>{p}</p>)}</div>
    </div></section>
    <section className="section-pad bg-deep text-deep-foreground"><div className="content-wrap"><SectionHeading light eyebrow="What we stand for" title={aboutContent.valuesTitle} />
      <div className="mt-12 grid gap-px bg-deep-foreground/15 md:grid-cols-2 lg:grid-cols-4">{aboutContent.values.map((v, i) => <article key={v.title} className="bg-deep p-8"><span className="text-xs font-bold text-primary">0{i + 1}</span><h3 className="mt-6 font-display text-2xl">{v.title}</h3><p className="mt-4 text-sm leading-6 text-deep-muted">{v.copy}</p></article>)}</div>
    </div></section>
    <section className="section-pad bg-surface"><div className="content-wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
      <div className="max-w-2xl"><h2 className="font-display text-4xl leading-none sm:text-6xl">{aboutContent.ctaTitle}</h2><p className="mt-5 text-muted-foreground">{aboutContent.ctaCopy}</p></div>
      <div className="flex flex-wrap gap-4">
        <Button asChild variant="premium" size="xl"><Link to="/courses">Explore Courses <ArrowRight /></Link></Button>
        <Button asChild variant="outline" size="xl"><Link to="/enrol">{siteCopy.enrolNow}</Link></Button>
        <Button asChild variant="ghost" size="xl"><Link to="/contact"><MessageCircle /> Contact Us</Link></Button>
      </div>
    </div></section>
  </>;
}
