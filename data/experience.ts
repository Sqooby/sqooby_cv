export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export const experienceData: Experience[] = [
  {
    id: '1',
    title: 'Junior Flutter Developer',
    company: 'IT8',
    period: 'Lut 2024 - Obecnie',
    description: 'Rozwój aplikacji mobilnych w technologii Flutter (Dart).',
    achievements: [
      'Rozwój aplikacji mobilnej do zarządzania szkołą tańca',
      'Tworzenie dokumentacji technicznej projektu',
      'Praca w zespole oraz efektywne korzystanie z GitHub',
      'Praktyczne wykorzystanie umiejętności programowania w Dart/Flutter',
    ],
  },
  {
    id: '2',
    title: 'Intern Flutter Developer',
    company: 'ItMesh',
    period: 'Mar 2023 - Sty 2024',
    description: 'Praktyki w zakresie rozwoju aplikacji mobilnych Flutter.',
    achievements: [
      'Rozwój aplikacji mobilnej do zarządzania szkołą tańca',
      'Tworzenie dokumentacji projektu',
      'Praca zespołowa i znajomość systemu kontroli wersji GitHub',
      'Zastosowanie praktyczne umiejętności w Dart (Flutter)',
    ],
  },
  {
    id: '3',
    title: 'Intern Flutter Developer',
    company: 'Ideo',
    period: 'Sty 2023 - Lut 2023',
    description: 'Staż w zakresie programowania aplikacji mobilnych.',
    achievements: [
      'Rozwój aplikacji mobilnej do wyszukiwania książek',
      'Współpraca z mentorem w celu dalszego rozwoju',
      'Wykorzystanie REST API w aplikacji',
      'Praca zespołowa i dokumentacja projektu',
    ],
  },
  {
    id: '4',
    title: 'Członek koła naukowego',
    company: 'SKNI KOD',
    period: '2021 - Aktualnie',
    description: 'Aktywny członek Studenckiego Koła Naukowego Informatyków KOD na Politechnice Rzeszowskiej.',
    achievements: [
      'Praktyczne zastosowanie umiejętności programistycznych',
      'Współpraca w zespole projektowym',
      'Rozwój kompetencji w zakresie różnych technologii',
      'Udział w projektach badawczych i rozwojowych',
    ],
  },
]
