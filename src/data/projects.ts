export type Field = 'Web Dev' | 'ML' | 'AI' | 'Cybersecurity' | 'Cloud'

export type Project = {
  id: string
  title: string
  company: string
  field: Field
  paid: boolean
  deadline: string
  rewards: string[]
  description: string
  status?: 'Open' | 'Closed'
}

export const projects: Project[] = [
  {
    id: 'INT-101',
    title: 'Build a marketing landing page',
    company: 'BrightApps',
    field: 'Web Dev',
    paid: false,
    deadline: '2026-01-15',
    rewards: ['Certificate', 'Merch'],
    description:
      'Create a responsive marketing landing page for a new product. Focus on accessibility and conversion metrics.',
    status: 'Open'
  },
  {
    id: 'INT-102',
    title: 'Image classification model',
    company: 'VisionaryAI',
    field: 'ML',
    paid: true,
    deadline: '2026-02-01',
    rewards: ['PPO', 'Certificate'],
    description: 'Train a model to classify images into product categories.',
    status: 'Open'
  },
  {
    id: 'INT-103',
    title: 'Security audit challenge',
    company: 'ShieldSec',
    field: 'Cybersecurity',
    paid: true,
    deadline: '2025-12-31',
    rewards: ['Office Visit', 'PPI'],
    description: 'Perform a security audit on a small sample app and write a report of findings.',
    status: 'Open'
  }
]
