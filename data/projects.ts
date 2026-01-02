export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projectsData: Project[] = [
  {
    id: '0',
    title: 'OnkoRadar',
    description: 'Aplikacja mobilna Flutter stworzona dla organizacji Wellysa. OnkoRadar to kompleksowe narzędzie wspierające pacjentów onkologicznych w codziennym monitorowaniu zdrowia.',
    image: '/images/projects/onkoradar.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Mobile Development'],
    liveUrl: 'https://wellysa.com',
    featured: true,
  },
  {
    id: '1',
    title: 'Auto Serwis Costa - Website',
    description: 'Profesjonalna strona internetowa dla warsztatu samochodowego. Responsywny design z prezentacją usług, galerii oraz formularza kontaktowego.',
    image: '/images/projects/auto-serwis.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://auto-serwis-costa-website.pages.dev',
    githubUrl: 'https://github.com/Sqooby',
    featured: true,
  },
  {
    id: '2',
    title: 'Szklarnia - Website',
    description: 'Nowoczesna strona internetowa dla szklarni. Elegancki design z prezentacją produktów, galerii roślin oraz informacji kontaktowych.',
    image: '/images/projects/szklarnia.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
    liveUrl: 'https://szklarnia-website.pages.dev',
    githubUrl: 'https://github.com/Sqooby',
    featured: true,
  },
  {
    id: '3',
    title: 'Dance School Management App',
    description: 'Aplikacja mobilna Flutter do zarządzania szkołą tańca. Umożliwia rezerwację zajęć, zarządzanie grafikiem oraz komunikację z uczniami.',
    image: '/images/projects/dance-app.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    liveUrl: 'https://letsdancenow.pl',
    githubUrl: 'https://github.com/Sqooby',
    featured: true,
  },
]
