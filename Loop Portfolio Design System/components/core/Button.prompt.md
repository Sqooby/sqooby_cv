Outlined pill button with a hard ink offset shadow — the primary call to action everywhere in Loop.

```jsx
<Button tone="ink" size="lg" icon={<Icon name="arrow-right" tone="inverse" />}>Launch web app</Button>
<Button tone="paper" variant="solid">Available on other devices</Button>
```

Tones: ink (default CTA), paper (secondary on colour), blue / mint / lilac / butter (playful accents). Sizes sm/md/lg map to the 36/48/60px control heights. `variant="outline"` drops the fill but keeps the border + shadow. Labels are UPPERCASE by design.
