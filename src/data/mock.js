export const dashboardMock = {
  user: {
    firstName: 'Sarah',
  },
  stats: [
    { label: 'Active Employees', value: '12', hint: '+6 new hires this month', green: true },
    { label: 'Upcoming Payroll', value: '$8000', hint: 'Next run scheduled for nov 15', green: false },
    { label: 'Pending Invoices', value: '$2800', hint: 'Pending invoice for this month', green: false },
  ],
  timeline: [
    {
      title: 'Payroll cut-off',
      subtitle: 'Lock time & attendance changes',
      meta: 'Today • 6:00 PM',
      status: 'in_progress',
    },
    {
      title: 'Compliance review',
      subtitle: 'PF / ESI validations & audit checks',
      meta: 'Tomorrow • 11:30 AM',
      status: 'upcoming',
    },
    {
      title: 'Payslips generation',
      subtitle: 'Generate and publish payslips',
      meta: 'Thu • 2:00 PM',
      status: 'upcoming',
    },
    {
      title: 'Bank transfer',
      subtitle: 'Initiate payout to employees',
      meta: 'Fri • 10:00 AM',
      status: 'blocked',
    },
  ],
  statusSummary: [
    { label: 'Present', value: '221', bar: '88%', note: 'Strong attendance today' },
    { label: 'Remote', value: '42', bar: '55%', note: 'Hybrid teams online' },
    { label: 'On leave', value: '9', bar: '18%', note: 'Planned time off' },
    { label: 'Pending docs', value: '6', bar: '22%', note: 'KYC & forms' },
  ],
  requests: [
    {
      id: 'req-1',
      name: 'Rohit Mehra',
      role: 'Product Designer',
      type: 'Leave request',
      detail: 'Feb 8–9 • Sick leave',
      status: 'Pending',
    },
    {
      id: 'req-2',
      name: 'Aisha Khan',
      role: 'Finance Associate',
      type: 'Reimbursement',
      detail: '$86.20 • Travel',
      status: 'Pending',
    },
    {
      id: 'req-3',
      name: 'Daniel Lee',
      role: 'Engineering Manager',
      type: 'Leave request',
      detail: 'Feb 14 • Casual leave',
      status: 'Approved',
    },
    {
      id: 'req-4',
      name: 'Meera Iyer',
      role: 'HR Generalist',
      type: 'Reimbursement',
      detail: '$142.00 • Team lunch',
      status: 'Rejected',
    },
  ],
  rightbar: {
    holidays: [
      { name: 'Diwali', month: 'Oct', date: '26' },
      { name: 'Christmas', month: 'Nov', date: '24' },
    ],
    onLeave: [
      { name: 'Rajesh Singh', role: 'developer', date: 'Oct 15 - Oct 16' },
      { name: 'Priya Sharma', role: 'Designer', date: 'Oct 20' },
      { name: 'Rahul Kumar', role: 'Accountant', date: 'Oct 21' },
    ],
    birthdays: [
      { name: 'Priya Sharma', role: 'Designer', date: 'Today' },
      { name: 'Rahul Kumar', role: 'Accountant', date: 'Oct 22' },
      { name: 'Rajesh Singh', role: 'developer', date: 'Oct 25' },
    ],
  }
}