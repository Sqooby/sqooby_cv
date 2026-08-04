(function(){
const { SectionHeading, StatBlock, TestimonialCard, Card, Tag, MediaFrame, TiltCard } = window.LoopPortfolioDesignSystem_41f2ca;

function About() {
  return (
    <section id="about" style={{ padding:'var(--section-y) var(--space-8)', maxWidth:'var(--page-max)', margin:'0 auto', display:'flex', flexDirection:'column', gap:'var(--space-12)' }}>
      <SectionHeading eyebrow="02 / About" title="Designer, occasional 3D tinkerer" />
      <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1.1fr) minmax(0,1fr)', gap:'var(--space-10)', alignItems:'start' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-6)' }}>
          <p style={{ fontSize:'var(--text-lead)' }}>I run a one-person studio out of Kraków. Most of my work starts as a brand problem and ends as a product — identity, design system, then the thing itself.</p>
          <p style={{ color:'var(--text-secondary)' }}>Before going independent I led design at two startups and spent a year making title sequences, which is where the 3D habit comes from. I still model everything myself.</p>
          <div style={{ display:'flex', gap:'var(--space-2)', flexWrap:'wrap' }}>
            {['Brand systems','Design systems','Product design','3D & motion','Art direction','Webflow / React'].map(t => <Tag key={t} tone="blue">{t}</Tag>)}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-4)' }}>
            <StatBlock value="9 yrs" label="Designing" tone="mint" />
            <StatBlock value="48" label="Projects shipped" tone="blue" />
            <StatBlock value="3" label="Awards" tone="butter" />
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-6)' }}>
          <TiltCard max={7}><MediaFrame palette="paper" ratio="4 / 5" label="Portrait" /></TiltCard>
          <TestimonialCard quote="The level of execution was exactly what was promised — and then some." author="Ana Ruiz" role="Head of Brand, Orbit" />
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { About });
})();
