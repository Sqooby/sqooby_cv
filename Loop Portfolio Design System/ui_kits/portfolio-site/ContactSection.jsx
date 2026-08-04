(function(){
const { ContactCTA, Card, Input, Textarea, Select, Checkbox, Button, Icon, SectionHeading } = window.LoopPortfolioDesignSystem_41f2ca;

function ContactSection() {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" style={{ padding:'0 var(--space-8) var(--section-y)', maxWidth:'var(--page-max)', margin:'0 auto', display:'flex', flexDirection:'column', gap:'var(--space-10)' }}>
      <ContactCTA headline="Let's make something loud" email="hi@loop.studio" note="Taking two projects this quarter. Tell me what you're building." />
      <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1.2fr)', gap:'var(--space-10)', alignItems:'start' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-4)' }}>
          <SectionHeading eyebrow="03 / Contact" title="Or use the form" />
          <p style={{ color:'var(--text-secondary)' }}>I read everything and reply within two working days, even if it's a no.</p>
        </div>
        <Card padding="var(--space-8)">
          {sent ? (
            <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-3)', padding:'var(--space-8) 0', textAlign:'center' }}>
              <h3 style={{ fontSize:'var(--text-title-2)' }}>Got it.</h3>
              <p style={{ color:'var(--text-secondary)' }}>I'll be in touch within two working days.</p>
              <Button variant="outline" size="sm" style={{ alignSelf:'center' }} onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-5)' }}>
              <Input label="Name" placeholder="Ada Lovelace" />
              <Input label="Email" type="email" placeholder="you@studio.com" />
              <Select label="Project type" options={['Brand system','Product design','3D & motion','Something else']} />
              <Select label="Budget" options={['Under 5k','5–15k','15–40k','40k+']} />
              <Textarea label="What are you building?" rows={4} style={{ gridColumn:'1 / -1' }} />
              <div style={{ gridColumn:'1 / -1', display:'flex', gap:'var(--space-6)', alignItems:'center', flexWrap:'wrap' }}>
                <Checkbox label="Add me to the studio letter" defaultChecked />
                <Button type="submit" size="md" style={{ marginLeft:'auto' }} icon={<Icon name="arrow-right" size={16} tone="inverse" />}>Send it</Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
Object.assign(window, { ContactSection });
})();
