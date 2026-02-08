import { House, ChartPie, Users, Shield, Calendar, DollarSign, Receipt } from 'lucide-react'

export const defaultSidebarSections = [
  {
    sectionTitle: 'WORKSPACE',
    items: [
      { label: 'Home', route: '/home', icon: House },
      { label: 'Dashboard', route: '/dashboard', icon: ChartPie },
      { label: 'People', route: '/people', icon: Users },
      { label: 'Compliance', route: '/compliance', icon: Shield },
      { label: 'Time', route: '/time', icon: Calendar },
    ],
  },
  {
    sectionTitle: 'FINANCE',
    items: [
      { label: 'Payroll', route: '/payroll', icon: DollarSign },
      { label: 'Billings', route: '/billings', icon: Receipt },
    ],
  },
]
