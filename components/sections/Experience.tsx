import { Card } from '@/components/ds/Card'
import { SectionHeading } from '@/components/ds/SectionHeading'
import { Tag } from '@/components/ds/Tag'
import { experienceData } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-section">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="04 / DOŚWIADCZENIE"
          title="Gdzie pisałem kod"
          description="Od stażu do etatu — każde miejsce nauczyło mnie czegoś, czego nie było na studiach."
        />

        <div className="flex flex-col gap-6">
          {experienceData.map((job) => (
            <Card key={job.id} className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-title-3">{job.title}</h3>
                  <Tag tone="lilac">{job.company}</Tag>
                </div>
                <span className="loop-eyebrow">{job.period}</span>
              </div>
              <p className="text-body text-ink-600">{job.description}</p>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {job.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-body-sm text-ink-600">
                    <span className="font-mono text-ink-900">—</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
