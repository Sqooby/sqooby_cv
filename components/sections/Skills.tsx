import { Card } from '@/components/ds/Card'
import { SectionHeading } from '@/components/ds/SectionHeading'
import { Tag } from '@/components/ds/Tag'
import { skillsData } from '@/data/skills'

const groups = [
  { key: 'mobile', title: 'Mobile', tone: 'mint' },
  { key: 'web', title: 'Web', tone: 'blue' },
  { key: 'backend', title: 'Backend', tone: 'lilac' },
  { key: 'tools', title: 'Narzędzia', tone: 'butter' },
] as const

export default function Skills() {
  return (
    <section id="skills" className="py-section">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="03 / UMIEJĘTNOŚCI"
          title="Stack, który znam"
          description="Mobile na pierwszym miejscu, web zaraz za nim. Reszta to narzędzia, bez których i tak nikt nie pracuje."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <Card key={group.key} tone={group.tone} className="flex flex-col gap-5 !p-6">
              <h3 className="text-title-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData[group.key].map((skill) => (
                  <Tag key={skill.name} tone="paper">
                    {skill.name}
                  </Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
