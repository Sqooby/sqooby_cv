import { Download } from "lucide-react";
import { Button } from "@/components/ds/Button";
import { MediaFrame } from "@/components/ds/MediaFrame";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { StatBlock } from "@/components/ds/StatBlock";
import { Sticker } from "@/components/ds/Sticker";
import { Tag } from "@/components/ds/Tag";
import { TiltCard } from "@/components/ds/TiltCard";

const capabilities = [
  "Flutter",
  "Dart",
  "React Native",
  "Firebase",
  "REST API",
  "Git",
  "Swift",
  "Kotlin",
];

export default function About() {
  return (
    <section id="about" className="py-section">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[2fr_3fr]">
        <div className="relative order-2 mx-auto w-full max-w-md lg:order-1">
          <Sticker
            tone="butter"
            rotate={-7}
            className="absolute -top-5 -left-2 z-10"
          >
            Rzeszów, PL
          </Sticker>
          <TiltCard max={6}>
            <MediaFrame
              src="/images/profile.jpg"
              alt="Michał Basznianin"
              ratio="4 / 5"
              className="shadow-sticker-lg"
            />
          </TiltCard>
        </div>

        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <SectionHeading
            eyebrow="02 / O MNIE"
            title="Kod pisany na serio"
            description="Student informatyki na studiach magisterskich, Flutter developer od trzech staży i jednego etatu."
          />

          <div className="flex max-w-[64ch] flex-col gap-4 text-body text-ink-600">
            <p>
              Specjalizuję się w aplikacjach mobilnych — Flutter i Dart to mój
              główny stack, React Native znam na tyle, żeby nie panikować.
              Zaczynałem od stażu w Ideo, potem ItMesh, dziś rozwijam aplikacje
              komercyjnie w IT8.
            </p>
            <p>
              Poza pracą działam w kole naukowym SKNI KOD na Politechnice
              Rzeszowskiej — tam nauczyłem się pracować w zespole, zanim
              ktokolwiek mi za to zapłacił. Nowych technologii uczę się szybko,
              bo lubię, a nie bo muszę.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <Tag key={c} tone="paper">
                {c}
              </Tag>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatBlock value="4+" label="Lata doświadczenia" tone="mint" />
            <StatBlock value="10+" label="Projektów" tone="blue" />
            <StatBlock value="4" label="Firmy i organizacje" tone="butter" />
          </div>

          <div>
            <Button
              href="/cv/CV_Michal_Basznianin.pdf"
              download
              icon={<Download size={16} strokeWidth={2} />}
            >
              Pobierz CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
