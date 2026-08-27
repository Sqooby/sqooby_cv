/* @ds-bundle: {"format":4,"namespace":"LoopPortfolioDesignSystem_41f2ca","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Blob","sourcePath":"components/core/Blob.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Sticker","sourcePath":"components/core/Sticker.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ContactCTA","sourcePath":"components/portfolio/ContactCTA.jsx"},{"name":"Footer","sourcePath":"components/portfolio/Footer.jsx"},{"name":"MediaFrame","sourcePath":"components/portfolio/MediaFrame.jsx"},{"name":"NavBar","sourcePath":"components/portfolio/NavBar.jsx"},{"name":"ProjectCard","sourcePath":"components/portfolio/ProjectCard.jsx"},{"name":"StatBlock","sourcePath":"components/portfolio/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/portfolio/TestimonialCard.jsx"},{"name":"TiltCard","sourcePath":"components/portfolio/TiltCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0624feaa62ed","components/core/Blob.jsx":"2a86f63e8065","components/core/Button.jsx":"cf6947c5532b","components/core/Card.jsx":"dbb1eae8bc04","components/core/Icon.jsx":"9ac581a04276","components/core/IconButton.jsx":"940f88c648bb","components/core/Marquee.jsx":"2a3c87db036a","components/core/Pill.jsx":"a4c4681fa3fc","components/core/SectionHeading.jsx":"caeb75b402c3","components/core/Sticker.jsx":"f598712cd4a9","components/core/Tag.jsx":"dc2cf0641bc2","components/forms/Checkbox.jsx":"f4dac3d36e13","components/forms/Input.jsx":"95dcc2baf1fa","components/forms/Select.jsx":"b7a69343a63b","components/forms/Switch.jsx":"cd2bdf8e50a6","components/forms/Textarea.jsx":"daa195571f4a","components/portfolio/ContactCTA.jsx":"6591ed0e2284","components/portfolio/Footer.jsx":"31e500e1746d","components/portfolio/MediaFrame.jsx":"33359562998d","components/portfolio/NavBar.jsx":"38ec19dafed5","components/portfolio/ProjectCard.jsx":"fb0c29351f54","components/portfolio/StatBlock.jsx":"50189029fc72","components/portfolio/TestimonialCard.jsx":"56c35a2a18c5","components/portfolio/TiltCard.jsx":"d944464a01e5","ui_kits/portfolio-site/About.jsx":"a4c2aebea5e5","ui_kits/portfolio-site/CaseStudy.jsx":"93faa77b8e79","ui_kits/portfolio-site/ContactSection.jsx":"1080b14dceb2","ui_kits/portfolio-site/Hero.jsx":"c5c17c001e42","ui_kits/portfolio-site/WorkGrid.jsx":"9dca603314a2","ui_kits/portfolio-site/data.js":"653ee689dc6b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LoopPortfolioDesignSystem_41f2ca = window.LoopPortfolioDesignSystem_41f2ca || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dot = {
  available: 'var(--mint-500)',
  busy: 'var(--butter-500)',
  closed: 'var(--clay-500)'
};
function Badge({
  children,
  status = 'available',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 32,
      padding: '0 var(--space-4)',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--outline-ink)',
      background: 'var(--paper-000)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: dot[status],
      boxShadow: '0 0 0 3px color-mix(in oklab,' + dot[status] + ' 30%,transparent)'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Blob.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const palettes = {
  blue: ['#2B5CFF', '#9DB8FF', '#D7E3FF'],
  mint: ['#33D18A', '#8FEFC0', '#D9F9E8'],
  lilac: ['#8B5CF6', '#C9B4FF', '#EDE5FF'],
  sunset: ['#FF5A2B', '#FF5C9A', '#FFC53D']
};

/** Soft 3D-looking gradient blob used behind heroes and cards. Pure CSS — no image assets. */
function Blob({
  palette = 'blue',
  size = 480,
  blur = 'var(--blob-blur)',
  spin = true,
  opacity = 1,
  style,
  ...rest
}) {
  const [a, b, c] = palettes[palette] || palettes.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      opacity,
      pointerEvents: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes loop-blob{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.08)}100%{transform:rotate(360deg) scale(1)}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '58% 42% 47% 53% / 46% 55% 45% 54%',
      background: 'radial-gradient(circle at 30% 28%, ' + c + ' 0%, ' + b + ' 38%, ' + a + ' 78%)',
      filter: 'blur(' + blur + ')',
      animation: spin ? 'loop-blob 24s var(--ease-in-out) infinite' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { Blob });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Blob.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  ink: {
    background: 'var(--ink-900)',
    color: 'var(--paper-000)'
  },
  paper: {
    background: 'var(--paper-000)',
    color: 'var(--ink-900)'
  },
  blue: {
    background: 'var(--blue-500)',
    color: 'var(--paper-000)'
  },
  mint: {
    background: 'var(--mint-300)',
    color: 'var(--ink-900)'
  },
  lilac: {
    background: 'var(--lilac-300)',
    color: 'var(--ink-900)'
  },
  butter: {
    background: 'var(--butter-500)',
    color: 'var(--ink-900)'
  }
};
const sizes = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 var(--space-4)',
    fontSize: 'var(--text-caption)'
  },
  md: {
    height: 'var(--control-h)',
    padding: '0 var(--space-6)',
    fontSize: 'var(--text-body-sm)'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 var(--space-8)',
    fontSize: 'var(--text-body)'
  }
};
function Button({
  children,
  tone = 'ink',
  size = 'md',
  variant = 'solid',
  icon,
  iconPosition = 'right',
  disabled,
  href,
  onClick,
  style,
  ...rest
}) {
  const [state, setState] = React.useState('idle');
  const base = tones[tone] || tones.ink;
  const solid = variant === 'solid';
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-bold)',
    letterSpacing: '0.01em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-control)',
    border: 'var(--outline-ink)',
    background: solid ? base.background : 'transparent',
    color: solid ? base.color : 'var(--ink-900)',
    boxShadow: state === 'active' ? 'var(--shadow-sticker-press)' : 'var(--shadow-sticker)',
    transform: state === 'active' ? 'var(--press-sink)' : state === 'hover' ? 'var(--hover-lift)' : 'none',
    transition: 'var(--transition-control)',
    opacity: disabled ? 0.4 : 1,
    ...sizes[size],
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('idle'),
    onMouseDown: () => setState('active'),
    onMouseUp: () => setState('hover'),
    onClick
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === 'left' ? icon : null, /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' ? icon : null);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: s
  }, handlers, rest), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: s,
    disabled: disabled
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  paper: 'var(--paper-000)',
  sunken: 'var(--paper-100)',
  blue: 'var(--blue-100)',
  mint: 'var(--mint-100)',
  lilac: 'var(--lilac-100)',
  blush: 'var(--blush-100)',
  butter: 'var(--butter-100)',
  ink: 'var(--ink-900)'
};
function Card({
  children,
  tone = 'paper',
  outlined = true,
  shadow = 'sticker',
  padding = 'var(--space-8)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tones[tone] || tones.paper,
      color: tone === 'ink' ? 'var(--paper-000)' : 'var(--text-primary)',
      border: outlined ? 'var(--outline-ink)' : 'none',
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: shadow === 'none' ? 'none' : shadow === 'soft' ? 'var(--shadow-soft)' : 'var(--shadow-sticker)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.484.0/icons/';

/** Lucide icon rendered from the lucide-static CDN. tone="inverse" flips it to paper white. */
function Icon({
  name,
  size = 20,
  tone = 'ink',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: CDN + name + '.svg',
    alt: "",
    "aria-hidden": "true",
    width: size,
    height: size,
    style: {
      display: 'block',
      width: size,
      height: size,
      flex: '0 0 auto',
      filter: tone === 'inverse' ? 'invert(1)' : tone === 'muted' ? 'opacity(.55)' : 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 36,
  md: 48,
  lg: 60
};
function IconButton({
  name,
  label,
  tone = 'paper',
  size = 'md',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size] || sizes.md;
  const inverse = tone === 'ink' || tone === 'blue';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      display: 'inline-grid',
      placeItems: 'center',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--outline-ink)',
      background: tone === 'ink' ? 'var(--ink-900)' : tone === 'blue' ? 'var(--blue-500)' : 'var(--paper-000)',
      boxShadow: hover ? 'var(--shadow-sticker)' : 'var(--shadow-sticker-sm)',
      transform: hover ? 'var(--hover-lift)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: px * 0.42,
    tone: inverse ? 'inverse' : 'ink'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Marquee({
  items = [],
  tone = 'ink',
  speed = 'var(--marquee-speed)',
  separator = '✳',
  style,
  ...rest
}) {
  const run = [...items, ...items];
  const inverse = tone === 'ink';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      background: inverse ? 'var(--ink-900)' : 'var(--butter-500)',
      color: inverse ? 'var(--paper-000)' : 'var(--ink-900)',
      borderTop: 'var(--outline-ink)',
      borderBottom: 'var(--outline-ink)',
      padding: 'var(--space-4) 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes loop-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      width: 'max-content',
      animation: 'loop-marquee ' + speed + ' linear infinite'
    }
  }, run.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      gap: 'var(--space-8)',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-title-3)',
      letterSpacing: 'var(--tracking-title)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, it, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5
    }
  }, separator)))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pill({
  children,
  tone = 'paper',
  active = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = active ? 'var(--ink-900)' : tone === 'tint' ? 'var(--blue-100)' : 'var(--paper-000)';
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : 'button',
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 'var(--control-h-sm)',
      padding: '0 var(--space-4)',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--outline-ink)',
      background: bg,
      color: active ? 'var(--paper-000)' : 'var(--ink-900)',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-caption)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      boxShadow: hover && !active ? 'var(--shadow-sticker-sm)' : 'none',
      transform: hover ? 'var(--hover-lift)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: '32ch'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "loop-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-2)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 'var(--leading-display)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      color: 'var(--text-secondary)',
      maxWidth: 'var(--measure)'
    }
  }, description)), action);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Sticker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  butter: 'var(--butter-500)',
  mint: 'var(--mint-300)',
  blush: 'var(--blush-300)',
  lilac: 'var(--lilac-300)',
  paper: 'var(--paper-000)'
};

/** Rotated, outlined sticker used to decorate heroes and cards. */
function Sticker({
  children,
  icon,
  tone = 'butter',
  rotate = -6,
  float = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: 'var(--space-2) var(--space-4)',
      background: tones[tone] || tones.butter,
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sticker)',
      transform: 'rotate(' + rotate + 'deg)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-caption)',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      animation: float ? 'loop-float 6s var(--ease-in-out) infinite' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes loop-float{0%,100%{translate:0 0}50%{translate:0 -8px}}'), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children);
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const map = {
  neutral: 'var(--paper-100)',
  blue: 'var(--blue-100)',
  mint: 'var(--mint-100)',
  lilac: 'var(--lilac-100)',
  blush: 'var(--blush-100)',
  butter: 'var(--butter-100)'
};
function Tag({
  children,
  tone = 'neutral',
  outlined = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '4px var(--space-3)',
      borderRadius: 'var(--radius-pill)',
      background: map[tone] || map.neutral,
      border: outlined ? 'var(--border-hairline) solid var(--border-ink)' : 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto',
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--mint-500)' : 'var(--paper-000)',
      boxShadow: 'var(--shadow-sticker-sm)',
      transition: 'var(--transition-control)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "loop-eyebrow",
    style: {
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-h)',
      padding: '0 var(--space-5)',
      font: 'inherit',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--paper-200)' : 'var(--paper-000)',
      border: 'var(--outline-ink)',
      borderColor: error ? 'var(--status-critical)' : 'var(--border-ink)',
      borderRadius: 'var(--radius-pill)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-sticker)' : 'var(--shadow-sticker-sm)',
      transform: focus ? 'var(--hover-lift)' : 'none',
      transition: 'var(--transition-control)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--status-critical)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "loop-eyebrow",
    style: {
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-h)',
      padding: '0 var(--space-5)',
      font: 'inherit',
      fontSize: 'var(--text-body-sm)',
      appearance: 'none',
      background: 'var(--paper-000)',
      color: 'var(--text-primary)',
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-pill)',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? 'var(--shadow-sticker)' : 'var(--shadow-sticker-sm)',
      transition: 'var(--transition-control)'
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (checked === undefined) setInner(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    "aria-label": typeof label === 'string' ? label : 'toggle',
    onClick: toggle,
    style: {
      width: 56,
      height: 32,
      padding: 3,
      display: 'flex',
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--blue-500)' : 'var(--paper-200)',
      boxShadow: 'var(--shadow-sticker-sm)',
      transition: 'background-color var(--dur-base) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--paper-000)',
      border: 'var(--border-hairline) solid var(--border-ink)',
      transform: on ? 'translateX(24px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  rows = 5,
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "loop-eyebrow",
    style: {
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: 'var(--space-4) var(--space-5)',
      font: 'inherit',
      fontSize: 'var(--text-body-sm)',
      resize: 'vertical',
      background: 'var(--paper-000)',
      color: 'var(--text-primary)',
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-lg)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-sticker)' : 'var(--shadow-sticker-sm)',
      transform: focus ? 'var(--hover-lift)' : 'none',
      transition: 'var(--transition-control)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ContactCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactCTA({
  headline = "Let's make something",
  email = 'hello@studio.com',
  note,
  action = 'Start a project',
  onAction,
  palette = 'sunset',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: 'var(--space-20) var(--space-8)',
      background: 'var(--ink-900)',
      color: 'var(--paper-000)',
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-2xl)',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Blob, {
    palette: palette,
    size: 620,
    opacity: .55,
    style: {
      position: 'absolute',
      left: '50%',
      top: '-30%',
      translate: '-50% 0',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-1)',
      letterSpacing: 'var(--tracking-hero)',
      lineHeight: 'var(--leading-display)',
      maxWidth: '14ch'
    }
  }, headline), note && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--paper-300)',
      maxWidth: '46ch'
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "paper",
    size: "lg",
    onClick: onAction,
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-right",
      size: 18
    })
  }, action), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "ink",
    variant: "outline",
    size: "lg",
    href: 'mailto:' + email,
    style: {
      color: 'var(--paper-000)',
      borderColor: 'var(--paper-000)',
      boxShadow: '4px 4px 0 var(--paper-000)'
    }
  }, email))));
}
Object.assign(__ds_scope, { ContactCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ContactCTA.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  brand = 'Studio',
  tagline,
  links = [],
  socials = [],
  year = new Date().getFullYear(),
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)',
      padding: 'var(--space-12) var(--space-8)',
      borderTop: 'var(--outline-ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-10)',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-title-1)',
      letterSpacing: 'var(--tracking-display)',
      fontVariationSettings: '"wdth" 112'
    }
  }, brand), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '34ch'
    }
  }, tagline)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href || '#',
    "aria-label": s.label,
    style: {
      width: 40,
      height: 40,
      display: 'grid',
      placeItems: 'center',
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--paper-000)',
      boxShadow: 'var(--shadow-sticker-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 16
  }))))), /*#__PURE__*/React.createElement("span", {
    className: "loop-eyebrow"
  }, "\xA9 ", year, " ", brand, " \u2014 built with too much coffee"));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/MediaFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const palettes = {
  blue: 'linear-gradient(135deg,#D7E3FF 0%,#9DB8FF 45%,#2B5CFF 100%)',
  mint: 'linear-gradient(135deg,#D9F9E8 0%,#8FEFC0 45%,#33D18A 100%)',
  lilac: 'linear-gradient(135deg,#EDE5FF 0%,#C9B4FF 45%,#8B5CF6 100%)',
  sunset: 'linear-gradient(135deg,#FFC53D 0%,#FF5C9A 55%,#FF5A2B 100%)',
  paper: 'linear-gradient(135deg,#FFFDF9 0%,#F0E4D5 100%)'
};

/** Outlined media well. Shows `src` if given, otherwise a labelled gradient placeholder. */
function MediaFrame({
  src,
  alt = '',
  palette = 'blue',
  ratio = '4 / 3',
  label = 'Add image',
  radius = 'var(--radius-media)',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "loop-grain",
    style: {
      aspectRatio: ratio,
      overflow: 'hidden',
      position: 'relative',
      border: 'var(--outline-ink)',
      borderRadius: radius,
      background: palettes[palette] || palettes.blue,
      display: 'grid',
      placeItems: 'center',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "loop-eyebrow",
    style: {
      color: 'var(--ink-900)',
      opacity: .6
    }
  }, label), children);
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand = 'Studio',
  items = [],
  activeItem,
  onNavigate,
  cta = 'Get in touch',
  onCta,
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      justifyContent: 'space-between',
      padding: 'var(--space-3) var(--space-4) var(--space-3) var(--space-6)',
      margin: 'var(--space-4)',
      background: 'color-mix(in oklab,var(--paper-000) 82%,transparent)',
      backdropFilter: 'blur(14px)',
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sticker)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-title-3)',
      letterSpacing: 'var(--tracking-title)',
      textDecoration: 'none',
      color: 'var(--ink-900)',
      fontVariationSettings: '"wdth" 112'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, items.map(it => {
    const item = typeof it === 'string' ? {
      label: it,
      id: it
    } : it;
    return /*#__PURE__*/React.createElement(__ds_scope.Pill, {
      key: item.id,
      active: activeItem === item.id,
      href: item.href,
      onClick: onNavigate ? e => {
        e.preventDefault();
        onNavigate(item.id);
      } : undefined
    }, item.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "plus",
    label: "More",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    tone: "ink",
    onClick: onCta,
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-right",
      size: 14,
      tone: "inverse"
    })
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  title,
  summary,
  tags = [],
  year,
  image,
  palette = 'blue',
  href = '#',
  size = 'md',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      textDecoration: 'none',
      color: 'var(--text-primary)',
      background: 'var(--paper-000)',
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-4)',
      boxShadow: hover ? 'var(--shadow-sticker-lg)' : 'var(--shadow-sticker)',
      transform: hover ? 'var(--hover-lift)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.MediaFrame, {
    src: image,
    alt: title,
    palette: palette,
    ratio: size === 'lg' ? '16 / 10' : '4 / 3',
    radius: "var(--radius-md)",
    label: title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: '0 var(--space-2) var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: size === 'lg' ? 'var(--text-title-1)' : 'var(--text-title-3)',
      letterSpacing: 'var(--tracking-title)'
    }
  }, title), year && /*#__PURE__*/React.createElement("span", {
    className: "loop-eyebrow"
  }, year)), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      alignItems: 'center',
      marginTop: 'var(--space-1)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "View", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 14
  })))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  tone = 'paper',
  style,
  ...rest
}) {
  const bg = {
    paper: 'var(--paper-000)',
    mint: 'var(--mint-100)',
    blue: 'var(--blue-100)',
    butter: 'var(--butter-100)',
    ink: 'var(--ink-900)'
  }[tone] || 'var(--paper-000)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--space-6)',
      background: bg,
      color: tone === 'ink' ? 'var(--paper-000)' : 'var(--text-primary)',
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sticker)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-title-1)',
      lineHeight: 'var(--leading-title)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "loop-eyebrow",
    style: {
      color: tone === 'ink' ? 'var(--paper-300)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialCard({
  quote,
  author,
  role,
  tone = 'blush',
  avatar,
  style,
  ...rest
}) {
  const bg = {
    blush: 'var(--blush-100)',
    mint: 'var(--mint-100)',
    lilac: 'var(--lilac-100)',
    paper: 'var(--paper-000)'
  }[tone] || 'var(--blush-100)';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      padding: 'var(--space-8)',
      background: bg,
      border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sticker)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-title-3)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-title)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      border: 'var(--outline-ink)',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, author), /*#__PURE__*/React.createElement("span", {
    className: "loop-eyebrow"
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TiltCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pointer-reactive 3D tilt wrapper. Wrap any card/media to give it depth. */
function TiltCard({
  children,
  max = 10,
  lift = 10,
  glare = true,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState({
    rx: 0,
    ry: 0,
    mx: 50,
    my: 50,
    on: false
  });
  const move = e => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width,
      py = (e.clientY - r.top) / r.height;
    setT({
      rx: (0.5 - py) * max * 2,
      ry: (px - 0.5) * max * 2,
      mx: px * 100,
      my: py * 100,
      on: true
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onMouseMove: move,
    onMouseLeave: () => setT({
      rx: 0,
      ry: 0,
      mx: 50,
      my: 50,
      on: false
    }),
    style: {
      perspective: 'var(--perspective)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      transformStyle: 'preserve-3d',
      transform: 'rotateX(' + t.rx + 'deg) rotateY(' + t.ry + 'deg) translateZ(' + (t.on ? lift : 0) + 'px)',
      transition: 'transform ' + (t.on ? 'var(--dur-fast)' : 'var(--dur-slow)') + ' var(--ease-out)',
      filter: t.on ? 'drop-shadow(var(--shadow-soft-lg))' : 'none'
    }
  }, children, glare && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      pointerEvents: 'none',
      opacity: t.on ? 0.35 : 0,
      transition: 'opacity var(--dur-base) var(--ease-out)',
      background: 'radial-gradient(280px circle at ' + t.mx + '% ' + t.my + '%, rgba(255,255,255,.9), transparent 60%)'
    }
  })));
}
Object.assign(__ds_scope, { TiltCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TiltCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/About.jsx
try { (() => {
(function () {
  const {
    SectionHeading,
    StatBlock,
    TestimonialCard,
    Card,
    Tag,
    MediaFrame,
    TiltCard
  } = window.LoopPortfolioDesignSystem_41f2ca;
  function About() {
    return /*#__PURE__*/React.createElement("section", {
      id: "about",
      style: {
        padding: 'var(--section-y) var(--space-8)',
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-12)'
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "02 / About",
      title: "Designer, occasional 3D tinkerer"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)',
        gap: 'var(--space-10)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-lead)'
      }
    }, "I run a one-person studio out of Krak\xF3w. Most of my work starts as a brand problem and ends as a product \u2014 identity, design system, then the thing itself."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, "Before going independent I led design at two startups and spent a year making title sequences, which is where the 3D habit comes from. I still model everything myself."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)',
        flexWrap: 'wrap'
      }
    }, ['Brand systems', 'Design systems', 'Product design', '3D & motion', 'Art direction', 'Webflow / React'].map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      tone: "blue"
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      value: "9 yrs",
      label: "Designing",
      tone: "mint"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "48",
      label: "Projects shipped",
      tone: "blue"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "3",
      label: "Awards",
      tone: "butter"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(TiltCard, {
      max: 7
    }, /*#__PURE__*/React.createElement(MediaFrame, {
      palette: "paper",
      ratio: "4 / 5",
      label: "Portrait"
    })), /*#__PURE__*/React.createElement(TestimonialCard, {
      quote: "The level of execution was exactly what was promised \u2014 and then some.",
      author: "Ana Ruiz",
      role: "Head of Brand, Orbit"
    }))));
  }
  Object.assign(window, {
    About
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/CaseStudy.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Button,
    Icon,
    Tag,
    MediaFrame,
    TiltCard,
    Card,
    StatBlock,
    SectionHeading,
    ProjectCard
  } = window.LoopPortfolioDesignSystem_41f2ca;
  function CaseStudy({
    project,
    next,
    onBack,
    onOpen
  }) {
    return /*#__PURE__*/React.createElement("article", {
      style: {
        padding: 'var(--space-10) var(--space-8) var(--section-y)',
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-12)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconPosition: "left",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left",
        size: 14
      }),
      onClick: onBack,
      style: {
        alignSelf: 'flex-start'
      }
    }, "All work"), /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)',
        flexWrap: 'wrap'
      }
    }, project.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      tone: "mint"
    }, t)), /*#__PURE__*/React.createElement(Tag, null, project.year)), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--text-display-1)',
        letterSpacing: 'var(--tracking-hero)',
        lineHeight: 'var(--leading-display)'
      }
    }, project.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-lead)',
        color: 'var(--text-secondary)',
        maxWidth: 'var(--measure)'
      }
    }, project.summary)), /*#__PURE__*/React.createElement(TiltCard, {
      max: 6
    }, /*#__PURE__*/React.createElement(MediaFrame, {
      palette: project.palette,
      ratio: "16 / 9",
      label: project.title + ' — hero shot'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      value: project.client,
      label: "Client"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: project.role,
      label: "Role",
      tone: "blue"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: project.duration,
      label: "Duration",
      tone: "butter"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
        gap: 'var(--space-10)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "The brief",
      title: "Make it unmistakable"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("p", null, "The existing identity had drifted across a dozen surfaces. We rebuilt it from one idea \u2014 a single continuous line \u2014 and let every other decision fall out of that."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, "The system ships as tokens, a component library and a motion kit, so the team can keep building without me in the room."), /*#__PURE__*/React.createElement(Card, {
      tone: "lilac",
      padding: "var(--space-6)"
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-title-3)'
      }
    }, "Outcome"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-2)',
        fontSize: 'var(--text-body-sm)'
      }
    }, "Launch week traffic up 3.2\xD7, and a design team that stopped filing \u201Cwhich blue?\u201D tickets.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(MediaFrame, {
      palette: "paper",
      ratio: "4 / 3",
      label: "Detail 01"
    }), /*#__PURE__*/React.createElement(MediaFrame, {
      palette: project.palette,
      ratio: "4 / 3",
      label: "Detail 02"
    })), next && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Next",
      title: next.title
    }), /*#__PURE__*/React.createElement(TiltCard, {
      max: 8,
      style: {
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, next, {
      onClick: e => {
        e.preventDefault();
        onOpen(next.id);
      }
    })))));
  }
  Object.assign(window, {
    CaseStudy
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/ContactSection.jsx
try { (() => {
(function () {
  const {
    ContactCTA,
    Card,
    Input,
    Textarea,
    Select,
    Checkbox,
    Button,
    Icon,
    SectionHeading
  } = window.LoopPortfolioDesignSystem_41f2ca;
  function ContactSection() {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("section", {
      id: "contact",
      style: {
        padding: '0 var(--space-8) var(--section-y)',
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-10)'
      }
    }, /*#__PURE__*/React.createElement(ContactCTA, {
      headline: "Let's make something loud",
      email: "hi@loop.studio",
      note: "Taking two projects this quarter. Tell me what you're building."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
        gap: 'var(--space-10)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "03 / Contact",
      title: "Or use the form"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, "I read everything and reply within two working days, even if it's a no.")), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-8)"
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        padding: 'var(--space-8) 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-title-2)'
      }
    }, "Got it."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, "I'll be in touch within two working days."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        alignSelf: 'center'
      },
      onClick: () => setSent(false)
    }, "Send another")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      placeholder: "Ada Lovelace"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@studio.com"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Project type",
      options: ['Brand system', 'Product design', '3D & motion', 'Something else']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Budget",
      options: ['Under 5k', '5–15k', '15–40k', '40k+']
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "What are you building?",
      rows: 4,
      style: {
        gridColumn: '1 / -1'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1',
        display: 'flex',
        gap: 'var(--space-6)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Add me to the studio letter",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      size: "md",
      style: {
        marginLeft: 'auto'
      },
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16,
        tone: "inverse"
      })
    }, "Send it"))))));
  }
  Object.assign(window, {
    ContactSection
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/Hero.jsx
try { (() => {
(function () {
  const {
    Button,
    Icon,
    Badge,
    Sticker,
    Blob,
    Marquee
  } = window.LoopPortfolioDesignSystem_41f2ca;
  const {
    TiltCard,
    MediaFrame
  } = window.LoopPortfolioDesignSystem_41f2ca;
  function Hero({
    onCta
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(48px,7vw,96px) var(--space-8) var(--space-16)'
      }
    }, /*#__PURE__*/React.createElement(Blob, {
      palette: "blue",
      size: 720,
      opacity: .5,
      style: {
        position: 'absolute',
        top: -260,
        left: -180,
        zIndex: 0
      }
    }), /*#__PURE__*/React.createElement(Blob, {
      palette: "sunset",
      size: 560,
      opacity: .42,
      style: {
        position: 'absolute',
        top: 60,
        right: -160,
        zIndex: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 1,
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-8)',
        alignItems: 'center',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      status: "available"
    }, "Open for projects \u2014 September 2026"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--text-hero)',
        lineHeight: 'var(--leading-hero)',
        letterSpacing: 'var(--tracking-hero)',
        fontVariationSettings: '"wdth" 118',
        maxWidth: '14ch'
      }
    }, "Design that", /*#__PURE__*/React.createElement("br", null), "refuses to", /*#__PURE__*/React.createElement("br", null), "be quiet"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-lead)',
        color: 'var(--text-secondary)',
        maxWidth: '52ch'
      }
    }, "I'm a designer working across brand, product and 3D. Nine years of shipping work that is loud on the outside and precise underneath."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onCta,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-down",
        size: 18,
        tone: "inverse"
      })
    }, "See the work"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      tone: "paper",
      href: "mailto:hi@loop.studio",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-up-right",
        size: 18
      })
    }, "Book a call")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 'min(100%,900px)',
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(Sticker, {
      icon: "sparkles",
      tone: "mint",
      rotate: -8,
      style: {
        position: 'absolute',
        left: -8,
        top: -22,
        zIndex: 3
      }
    }, "New case study"), /*#__PURE__*/React.createElement(Sticker, {
      icon: "box",
      tone: "blush",
      rotate: 7,
      style: {
        position: 'absolute',
        right: -6,
        bottom: -20,
        zIndex: 3
      }
    }, "Built in WebGL"), /*#__PURE__*/React.createElement(TiltCard, {
      max: 8
    }, /*#__PURE__*/React.createElement(MediaFrame, {
      palette: "lilac",
      ratio: "16 / 9",
      label: "Showreel \u2014 drop a cover image here",
      style: {
        boxShadow: 'var(--shadow-sticker-lg)'
      }
    })))));
  }
  Object.assign(window, {
    Hero
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/WorkGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    SectionHeading,
    Pill,
    TiltCard,
    ProjectCard
  } = window.LoopPortfolioDesignSystem_41f2ca;
  function WorkGrid({
    projects,
    filters,
    filter,
    onFilter,
    onOpen
  }) {
    const shown = filter === 'All work' ? projects : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));
    return /*#__PURE__*/React.createElement("section", {
      id: "work",
      style: {
        padding: 'var(--section-y) var(--space-8)',
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-10)'
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "01 / Work",
      title: "Selected projects",
      description: "Six of the forty-eight things I've shipped. Click one for the full story.",
      action: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-2)',
          flexWrap: 'wrap'
        }
      }, filters.map(fl => /*#__PURE__*/React.createElement(Pill, {
        key: fl,
        active: fl === filter,
        onClick: () => onFilter(fl)
      }, fl)))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))',
        gap: 'var(--space-6)'
      }
    }, shown.map(p => /*#__PURE__*/React.createElement(TiltCard, {
      key: p.id,
      max: 9
    }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p, {
      onClick: e => {
        e.preventDefault();
        onOpen(p.id);
      }
    }))))), shown.length === 0 && /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "Nothing filed under \u201C", filter, "\u201D yet."));
  }
  Object.assign(window, {
    WorkGrid
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/WorkGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/data.js
try { (() => {
window.LOOP_DATA = {
  projects: [{
    id: 'nimbus',
    title: 'Nimbus',
    summary: 'Rebrand and design system for a weather app used by 2M people.',
    tags: ['Brand', 'Design system'],
    year: '2026',
    palette: 'mint',
    role: 'Brand + product design',
    client: 'Nimbus Labs',
    duration: '14 weeks'
  }, {
    id: 'halogen',
    title: 'Halogen',
    summary: 'A WebGL product tour where the hardware assembles itself as you scroll.',
    tags: ['3D', 'Motion'],
    year: '2025',
    palette: 'sunset',
    role: 'Art direction + 3D',
    client: 'Halogen',
    duration: '9 weeks'
  }, {
    id: 'poste',
    title: 'Poste',
    summary: 'Editorial platform for independent writers — typography-first, dark by default.',
    tags: ['Product', 'Web'],
    year: '2025',
    palette: 'lilac',
    role: 'Product design',
    client: 'Poste',
    duration: '6 months'
  }, {
    id: 'orbit',
    title: 'Orbit Card',
    summary: 'Fintech card launch: identity, motion kit and the whole marketing site.',
    tags: ['Brand', 'Web'],
    year: '2024',
    palette: 'blue',
    role: 'Design lead',
    client: 'Orbit',
    duration: '11 weeks'
  }, {
    id: 'fern',
    title: 'Fern',
    summary: 'Packaging and site for a small-batch tea company in Lisbon.',
    tags: ['Brand'],
    year: '2024',
    palette: 'mint',
    role: 'Identity',
    client: 'Fern',
    duration: '5 weeks'
  }, {
    id: 'kiosk',
    title: 'Kiosk',
    summary: 'An iPad POS rebuilt around one-handed use for busy counters.',
    tags: ['Product'],
    year: '2023',
    palette: 'blue',
    role: 'Product design',
    client: 'Kiosk',
    duration: '4 months'
  }],
  filters: ['All work', 'Brand', 'Product', '3D', 'Web']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Blob = __ds_scope.Blob;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ContactCTA = __ds_scope.ContactCTA;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TiltCard = __ds_scope.TiltCard;

})();
