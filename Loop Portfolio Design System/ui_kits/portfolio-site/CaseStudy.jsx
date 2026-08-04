(function(){
const { Button, Icon, Tag, MediaFrame, TiltCard, Card, StatBlock, SectionHeading, ProjectCard } = window.LoopPortfolioDesignSystem_41f2ca;

function CaseStudy({ project, next, onBack, onOpen }) {
  return (
    <article style={{ padding:'var(--space-10) var(--space-8) var(--section-y)', maxWidth:'var(--page-max)', margin:'0 auto', display:'flex', flexDirection:'column', gap:'var(--space-12)' }}>
      <Button variant="outline" size="sm" iconPosition="left" icon={<Icon name="arrow-left" size={14} />} onClick={onBack} style={{ alignSelf:'flex-start' }}>All work</Button>
      <header style={{ display:'flex', flexDirection:'column', gap:'var(--space-6)' }}>
        <div style={{ display:'flex', gap:'var(--space-2)', flexWrap:'wrap' }}>{project.tags.map(t => <Tag key={t} tone="mint">{t}</Tag>)}<Tag>{project.year}</Tag></div>
        <h1 style={{ fontSize:'var(--text-display-1)', letterSpacing:'var(--tracking-hero)', lineHeight:'var(--leading-display)' }}>{project.title}</h1>
        <p style={{ fontSize:'var(--text-lead)', color:'var(--text-secondary)', maxWidth:'var(--measure)' }}>{project.summary}</p>
      </header>
      <TiltCard max={6}><MediaFrame palette={project.palette} ratio="16 / 9" label={project.title + ' — hero shot'} /></TiltCard>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-4)' }}>
        <StatBlock value={project.client} label="Client" />
        <StatBlock value={project.role} label="Role" tone="blue" />
        <StatBlock value={project.duration} label="Duration" tone="butter" />
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1.4fr)', gap:'var(--space-10)', alignItems:'start' }}>
        <SectionHeading eyebrow="The brief" title="Make it unmistakable" />
        <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-5)' }}>
          <p>The existing identity had drifted across a dozen surfaces. We rebuilt it from one idea — a single continuous line — and let every other decision fall out of that.</p>
          <p style={{ color:'var(--text-secondary)' }}>The system ships as tokens, a component library and a motion kit, so the team can keep building without me in the room.</p>
          <Card tone="lilac" padding="var(--space-6)">
            <strong style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-title-3)' }}>Outcome</strong>
            <p style={{ marginTop:'var(--space-2)', fontSize:'var(--text-body-sm)' }}>Launch week traffic up 3.2×, and a design team that stopped filing “which blue?” tickets.</p>
          </Card>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-6)' }}>
        <MediaFrame palette="paper" ratio="4 / 3" label="Detail 01" />
        <MediaFrame palette={project.palette} ratio="4 / 3" label="Detail 02" />
      </div>
      {next && (
        <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-6)' }}>
          <SectionHeading eyebrow="Next" title={next.title} />
          <TiltCard max={8} style={{ maxWidth:520 }}>
            <ProjectCard {...next} onClick={(e) => { e.preventDefault(); onOpen(next.id); }} />
          </TiltCard>
        </div>
      )}
    </article>
  );
}
Object.assign(window, { CaseStudy });
})();
