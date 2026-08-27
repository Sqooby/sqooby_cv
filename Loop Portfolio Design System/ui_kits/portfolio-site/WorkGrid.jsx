(function(){
const { SectionHeading, Pill, TiltCard, ProjectCard } = window.LoopPortfolioDesignSystem_41f2ca;

function WorkGrid({ projects, filters, filter, onFilter, onOpen }) {
  const shown = filter === 'All work' ? projects : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));
  return (
    <section id="work" style={{ padding:'var(--section-y) var(--space-8)', maxWidth:'var(--page-max)', margin:'0 auto', display:'flex', flexDirection:'column', gap:'var(--space-10)' }}>
      <SectionHeading eyebrow="01 / Work" title="Selected projects"
        description="Six of the forty-eight things I've shipped. Click one for the full story."
        action={<div style={{ display:'flex', gap:'var(--space-2)', flexWrap:'wrap' }}>
          {filters.map(fl => <Pill key={fl} active={fl === filter} onClick={() => onFilter(fl)}>{fl}</Pill>)}
        </div>} />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:'var(--space-6)' }}>
        {shown.map(p => (
          <TiltCard key={p.id} max={9}>
            <ProjectCard {...p} onClick={(e) => { e.preventDefault(); onOpen(p.id); }} />
          </TiltCard>
        ))}
      </div>
      {shown.length === 0 && <p style={{ color:'var(--text-muted)' }}>Nothing filed under “{filter}” yet.</p>}
    </section>
  );
}
Object.assign(window, { WorkGrid });
})();
