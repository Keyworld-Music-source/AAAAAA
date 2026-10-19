import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { levels, programmeImages, programmes, programmeLabel, siteCopy } from "@/data/site-content";
import { SectionHeading } from "./site-shell";

export function ProgrammePanels() {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{programmes.map((item, index) => <article key={item.name} className="programme-panel relative isolate flex min-h-96 flex-col justify-end overflow-hidden bg-deep p-7 text-deep-foreground">
    <img src={programmeImages[item.name]} alt="" loading="lazy" width={640} height={640} className="programme-bg" />
    <div className="absolute inset-0 -z-10 bg-programme-overlay" />
    <span className="font-display text-4xl text-primary">0{index + 1}</span>
    <h3 className="mt-6 font-display text-3xl">{programmeLabel(item.name)}</h3>
    <p className="mt-4 min-h-20 text-sm leading-6 text-deep-muted">{item.description}</p>
    <Button asChild variant="link" className="mt-5 justify-start px-0 text-primary"><Link to="/courses" search={{ programme: item.name }}>{siteCopy.viewProgram} <ArrowRight className="size-4" /></Link></Button>
  </article>)}</div>;
}

export function ProgrammeGrid({ home = false }: { home?: boolean }) { return <section className="section-pad bg-surface"><div className="content-wrap"><SectionHeading eyebrow="Programmes" title={siteCopy.programmeTitle} copy={siteCopy.programmeCopy} /><div className="mt-14"><ProgrammePanels /></div></div></section>; }

export function LevelsGrid() { return <section className="section-pad bg-deep text-deep-foreground"><div className="content-wrap"><SectionHeading light eyebrow="Three levels" title={siteCopy.levelsTitle} /><div className="mt-14 grid lg:grid-cols-3">{levels.map((level, index) => <article key={level.id} className="border-t border-deep-foreground/20 p-7 lg:p-9"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase text-primary">Level {index + 1}</span><span className="flex items-center gap-2 text-xs text-deep-muted"><Clock3 className="size-4" />{level.duration}</span></div><h3 className="mt-8 font-display text-4xl">{level.name}</h3><p className="mt-5 min-h-24 text-sm leading-6 text-deep-muted">{level.summary}</p><div className="mt-8 flex items-end justify-between border-t border-deep-foreground/10 pt-6"><span><strong className="font-display text-2xl">{level.physicalFee}</strong><span className="mt-1 block text-xs text-deep-muted">{siteCopy.feeNote}</span></span><Button asChild variant="glass"><Link to="/courses" search={{ level: level.id, detail: true }}>Explore <ArrowRight className="size-4" /></Link></Button></div></article>)}</div></div></section>; }
