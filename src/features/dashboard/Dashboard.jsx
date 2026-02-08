import React from 'react'
import { dashboardMock } from '../../data/mock'
import PayrollTimeline from './PayrollTimeline'
import EmployeeStatus from './EmployeeStatus'
import Requests from './Requests'
import UpcomingHolidays from './UpcomingHolidays'
import OnLeave from './OnLeave'
import Birthday from './Birthday'
import rahulImg from '../../assets/rahul.svg'
import rajeshImg from '../../assets/rajesh.svg'
import priyaImg from '../../assets/priya.svg'
import StatCard from '../../components/statCard/StatCard'


const avatarImages = { rahul: rahulImg, rajesh: rajeshImg, priya: priyaImg }

const Dashboard = () => {
      const { stats, employeeStatus, leaveRequests, reimbursementRequests, rightbar } = dashboardMock

  return (
     <div className="xl:h-full flex flex-col bg-[#F1F8FF]">
          <div className="flex flex-col xl:flex-row xl:flex-1 xl:min-h-0 gap-4">
            <div className="flex flex-col xl:flex-1 xl:min-h-0 xl:overflow-y-auto gap-4 min-w-0">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {stats.map((s) => (
                  <StatCard key={s.label} {...s} />
                ))}
              </div>

              <PayrollTimeline payrollTimeline={dashboardMock.payrollTimeline} />

              <EmployeeStatus employeeStatus={employeeStatus} />

                <Requests leaveRequests={leaveRequests} reimbursementRequests={reimbursementRequests} avatarImages={avatarImages} />

            </div>

            <div className="flex flex-col gap-4 w-full xl:w-[360px] xl:shrink-0 xl:min-h-0 xl:overflow-y-auto min-w-0">
                <UpcomingHolidays holidays={rightbar.holidays} />

                <OnLeave people={rightbar.onLeave} avatarImages={avatarImages} />

                <Birthday people={rightbar.birthdays} avatarImages={avatarImages} />
            </div>
          </div>

    </div>
  )
}

export default Dashboard