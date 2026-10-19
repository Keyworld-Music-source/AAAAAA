import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { freeTraining, levels } from "@/data/site-content";

export const Route = createFileRoute("/free-training")({
  head: () => ({ meta: [{ title: "Free-Tuition Music Training for Tertiary Institution Students — Keyworld Music Institute" }, { name: "description", content: "Free-tuition music training for tertiary institution students, example: FUTA, with subsidized certificates. Piano/Keyboard, Sight-Playing, Sight-Singing and Ear-Training." }, { property: "og:title", content: "Free-Tuition Music Training for Tertiary Institution Students" }, { property: "og:description", content: freeTraining.intro }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: FreeTrainingPage,
});

function FreeTrainingPage() {
  return <>
    <PageHero eyebrow="Community initiative" title={freeTraining.title} description={freeTraining.intro} image={freeTraining.heroImage} titleClassName="text-3xl leading-[1.05] sm:text-5xl lg:text-6xl" />
    <section className="section-pad bg-surface"><div className="content-wrap"><SectionHeading eyebrow="Courses" title="What you can learn." />
      <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">{freeTraining.courses.map(c => (
        <a key={c.name} href="#apply" className="group block">
          <div className="aspect-square overflow-hidden bg-card"><img src={c.image} alt={c.name} loading="lazy" width={800} height={800} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
          <h3 className="mt-4 font-display text-2xl group-hover:text-primary">{c.name}</h3>
          <span className="mt-1 inline-flex items-center gap-1 text-sm text-primary">Register Interest <ArrowRight className="size-4" /></span>
        </a>
      ))}</div>
    </div></section>
    <section id="apply" className="section-pad scroll-mt-24 bg-background"><div className="content-wrap"><SectionHeading eyebrow="Apply" title="Choose how you want to learn." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">{freeTraining.applyOptions.map(o => (
        <a key={o.label} href={freeTraining.registerInterestUrl} target="_blank" rel="noreferrer" className="group flex items-center justify-between border border-foreground/15 bg-card p-8 transition-colors hover:border-primary">
          <span className="font-display text-2xl sm:text-3xl">{o.label}</span>
          <ArrowRight className="size-6 text-primary transition-transform group-hover:translate-x-1" />
        </a>
      ))}</div>
    </div></section>
    <section className="section-pad bg-deep text-deep-foreground"><div className="content-wrap"><SectionHeading light eyebrow="Levels & fees" title="Two levels. Subsidised certificates." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">{freeTraining.levels.map((l, i) => <article key={l.id} className="border border-deep-foreground/20 p-8">
        <span className="text-xs font-bold uppercase text-primary">Level {i + 1}</span>
        <h3 className="mt-4 font-display text-4xl">{l.name}</h3>
        <p className="mt-3 text-sm text-primary">{l.note}</p>
        <p className="mt-4 text-sm leading-6 text-deep-muted">{levels[i]?.summary}</p>
        <ul className="mt-6 space-y-2 border-t border-deep-foreground/10 pt-6">{l.fees.map(f => <li key={f} className="font-display text-xl">{f}</li>)}</ul>
      </article>)}</div>
    </div></section>
  </>;
}
