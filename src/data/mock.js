export const dashboardMock = {
  user: {
    firstName: 'Sarah',
  },
  stats: [
    { label: 'Active Employees', value: '12', hint: '+6 new hires this month', green: true },
    { label: 'Upcoming Payroll', value: '$8000', hint: 'Next run scheduled for nov 15', green: false },
    { label: 'Pending Invoices', value: '$2800', hint: 'Pending invoice for this month', green: false },
  ],
  payrollTimeline: [
    { date: 'Oct 1', label: 'Payroll processed', status: 'completed', byWisemonk: true },
    { date: 'Oct 14', label: 'Provident fund deposit', status: 'completed', byWisemonk: true },
    { date: 'Oct 15', label: 'Reimbursements approval', status: 'warning', byWisemonk: false },
    { date: 'Oct 15', label: 'Payroll cutoff for next month', status: 'pending', byWisemonk: false },
    { date: 'Oct 20', label: 'Payroll invoice generation', status: 'pending', byWisemonk: false },
    { date: 'Oct 25', label: 'Payment to Wisemonk', status: 'pending', byWisemonk: false },
  ],

  employeeStatus: {
    total: 18,
    breakdown: [
      { label: 'Active', value: 12 },
      { label: 'Onboarding', value: 4 },
      { label: 'Yet to join', value: 2 },
    ],
  },
  leaveRequests: [
    {
      id: 'leave-1',
      name: 'Rahul Kumar',
      role: 'Accountant',
      avatarKey: 'rahul',
      date: 'Oct 25',
      note: 'Note: Urgent work',
    },
  ],
  reimbursementRequests: [
    {
      id: 'reimb-1',
      name: 'Rajesh Singh',
      role: 'Developer',
      avatarKey: 'rajesh',
      amount: '$500',
      reason: 'Travel Expanses',
    },
  ],
  rightbar: {
    holidays: [
      { name: 'Diwali', month: 'Oct', date: '26', type: 'Festival Holiday' },
      { name: 'Christmas', month: 'Nov', date: '24', type: 'Festival Holiday' },
    ],
    onLeave: [
      { name: 'Rajesh Singh', role: 'Developer', today: true, date: 'Oct 15 - Oct 16', avatarKey: 'rajesh' },
      { name: 'Priya Sharma', role: 'Designer', today: false, date: 'Oct 20', avatarKey: 'priya' },
      { name: 'Rahul Kumar', role: 'Accountant', today: false, date: 'Oct 21', avatarKey: 'rahul' },
    ],
    birthdays: [
      { name: 'Priya Sharma', role: 'Designer', today: true, date: '', avatarKey: 'priya' },
      { name: 'Rahul Kumar', role: 'Accountant', today: false, date: 'Oct 22', avatarKey: 'rahul' },
      { name: 'Rajesh Singh', role: 'Developer', today: false, date: 'Oct 25', avatarKey: 'rajesh' },
    ],
  }
}