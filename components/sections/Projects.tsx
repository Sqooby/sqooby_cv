import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ds/Button'
import { ProjectCard } from '@/components/ds/ProjectCard'
import { SectionHeading } from '@/components/ds/SectionHeading'
import { TiltCard } from '@/components/ds/TiltCard'
import { projectsData } from '@/data/projects'

const palettes = ['blue', 'mint', 'lilac', 'sunset'] as const

export default function Projects() {
  return (
    <section id="projects" className="py-section">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="01 / PROJEKTY"
          title="Wybrane projekty"
          description="Aplikacje mobilne i strony, które są wdrożone i działają u prawdziwych użytkowników — nie w szufladzie."
          action={
            <Button
              tone="paper"
              href="https://github.com/Sqooby"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ArrowUpRight size={16} strokeWidth={2} />}
            >
              Mój GitHub
            </Button>
          }
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, i) => (
            <TiltCard key={project.id} max={6} lift={6}>
              <ProjectCard
                title={project.title}
                summary={project.description}
                tags={project.technologies.slice(0, 3)}
                image={project.image}
                palette={palettes[i % palettes.length]}
                href={project.liveUrl ?? project.githubUrl ?? '#'}
              />
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
