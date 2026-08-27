"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Blob } from "@/components/ds/Blob";
import { Button } from "@/components/ds/Button";

const ease = [0.4, 0, 0.2, 1] as const;

function stagger(i: number) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease, delay: i * 0.12 },
    },
  };
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const content = (
    <>
      <p className="loop-eyebrow !text-ink-500">
        Michał Basznianin — Flutter developer
      </p>
      <h1
        className="max-w-[16ch] pb-[0.08em] text-hero"
        style={{ fontVariationSettings: '"wdth" 118' }}
      >
        Buduję aplikacje, które się{" "}
        <span className="text-clay-500">spina.</span>
      </h1>
      <p className="max-w-[40ch] text-body text-ink-600">
        Flutter, Dart, mobile. 4 lata komercyjnego kodu — Rzeszów.
      </p>
      <Button
        size="lg"
        tone="paper"
        href="#projects"
        icon={<ArrowDown size={18} strokeWidth={2} />}
      >
        Wybrane projekty
      </Button>
    </>
  );

  if (reduceMotion) {
    return (
      <section
        id="top"
        className="relative flex min-h-screen items-start overflow-hidden px-6 pt-[136px]"
      >
        <Blob
          palette="blue"
          size={720}
          opacity={0.5}
          className="absolute -left-44 -top-64 z-0"
        />
        <Blob
          palette="sunset"
          size={560}
          opacity={0.42}
          className="absolute -right-40 top-16 z-0"
        />
        <div className="relative z-10 mx-auto flex max-w-page flex-col items-start gap-5 text-left">
          {content}
        </div>
      </section>
    );
  }

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-start overflow-hidden px-6 pt-[136px]"
    >
      <Blob
        palette="blue"
        size={720}
        opacity={0.5}
        className="absolute -left-44 -top-64 z-0"
      />
      <Blob
        palette="sunset"
        size={560}
        opacity={0.42}
        className="absolute -right-40 top-16 z-0"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-page flex-col items-start gap-5 text-left">
        <motion.p className="loop-eyebrow !text-ink-500" {...stagger(0)}>
          Michał Basznianin — Flutter developer
        </motion.p>
        <motion.h1
          className="max-w-[16ch] pb-[0.08em] text-hero"
          style={{ fontVariationSettings: '"wdth" 118' }}
          {...stagger(1)}
        >
          Buduję aplikacje, które się{" "}
          <span className="text-clay-500">spina.</span>
        </motion.h1>
        <motion.p
          className="max-w-[40ch] text-body text-ink-600"
          {...stagger(2)}
        >
          Flutter, Dart, mobile. 4 lata komercyjnego kodu — Rzeszów.
        </motion.p>
        <motion.div {...stagger(3)}>
          <Button
            size="lg"
            tone="paper"
            href="#projects"
            icon={<ArrowDown size={18} strokeWidth={2} />}
          >
            Wybrane projekty
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
