(function(){
const { Button, Icon, Badge, Sticker, Blob, Marquee } = window.LoopPortfolioDesignSystem_41f2ca;
const { TiltCard, MediaFrame } = window.LoopPortfolioDesignSystem_41f2ca;

function Hero({ onCta }) {
  return (
    <section id="top" style={{ position:'relative', overflow:'hidden', padding:'clamp(48px,7vw,96px) var(--space-8) var(--space-16)' }}>
      <Blob palette="blue" size={720} opacity={.5} style={{ position:'absolute', top:-260, left:-180, zIndex:0 }} />
      <Blob palette="sunset" size={560} opacity={.42} style={{ position:'absolute', top:60, right:-160, zIndex:0 }} />
      <div style={{ position:'relative', zIndex:1, maxWidth:'var(--page-max)', margin:'0 auto', display:'flex', flexDirection:'column', gap:'var(--space-8)', alignItems:'center', textAlign:'center' }}>
        <Badge status="available">Open for projects — September 2026</Badge>
        <h1 style={{ fontSize:'var(--text-hero)', lineHeight:'var(--leading-hero)', letterSpacing:'var(--tracking-hero)', fontVariationSettings:'"wdth" 118', maxWidth:'14ch' }}>
          Design that<br/>refuses to<br/>be quiet
        </h1>
        <p style={{ fontSize:'var(--text-lead)', color:'var(--text-secondary)', maxWidth:'52ch' }}>
          I'm a designer working across brand, product and 3D. Nine years of shipping work that is loud on the outside and precise underneath.
        </p>
        <div style={{ display:'flex', gap:'var(--space-3)', flexWrap:'wrap', justifyContent:'center' }}>
          <Button size="lg" onClick={onCta} icon={<Icon name="arrow-down" size={18} tone="inverse" />}>See the work</Button>
          <Button size="lg" tone="paper" href="mailto:hi@loop.studio" icon={<Icon name="arrow-up-right" size={18} />}>Book a call</Button>
        </div>
        <div style={{ position:'relative', width:'min(100%,900px)', marginTop:'var(--space-8)' }}>
          <Sticker icon="sparkles" tone="mint" rotate={-8} style={{ position:'absolute', left:-8, top:-22, zIndex:3 }}>New case study</Sticker>
          <Sticker icon="box" tone="blush" rotate={7} style={{ position:'absolute', right:-6, bottom:-20, zIndex:3 }}>Built in WebGL</Sticker>
          <TiltCard max={8}>
            <MediaFrame palette="lilac" ratio="16 / 9" label="Showreel — drop a cover image here" style={{ boxShadow:'var(--shadow-sticker-lg)' }} />
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
})();
