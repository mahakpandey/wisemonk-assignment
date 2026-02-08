import React from "react";
import { MotionDiv } from "../../shared/ui/Motion";
import { dashboardMock } from "../../data/mock";
import PayrollTimeline from "./PayrollTimeline";
import EmployeeStatus from "./EmployeeStatus";
import Requests from "./Requests";
import UpcomingHolidays from "./UpcomingHolidays";
import OnLeave from "./OnLeave";
import Birthday from "./Birthday";
import rahulImg from "../../assets/rahul.svg";
import rajeshImg from "../../assets/rajesh.svg";
import priyaImg from "../../assets/priya.svg";
import StatCard from "../../components/statcard/StatCard";

const avatarImages = { rahul: rahulImg, rajesh: rajeshImg, priya: priyaImg };

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const Dashboard = () => {
  const {
    stats,
    employeeStatus,
    leaveRequests,
    reimbursementRequests,
    rightbar,
  } = dashboardMock;

  return (
    <MotionDiv
      className="xl:h-full flex flex-col bg-[#F1F8FF]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex flex-col xl:flex-row xl:flex-1 xl:min-h-0 gap-4">
        <MotionDiv
          className="flex flex-col xl:flex-1 xl:min-h-0 xl:overflow-y-auto gap-4 min-w-0"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {stats.map((s) => (
              <MotionDiv key={s.label} variants={item}>
                <StatCard {...s} />
              </MotionDiv>
            ))}
          </div>

          <MotionDiv variants={item}>
            <PayrollTimeline payrollTimeline={dashboardMock.payrollTimeline} />
          </MotionDiv>

          <MotionDiv variants={item}>
            <EmployeeStatus employeeStatus={employeeStatus} />
          </MotionDiv>

          <MotionDiv variants={item}>
            <Requests
              leaveRequests={leaveRequests}
              reimbursementRequests={reimbursementRequests}
              avatarImages={avatarImages}
            />
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="flex flex-col gap-4 w-full xl:w-90 xl:shrink-0 xl:min-h-0 xl:overflow-y-auto min-w-0"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <MotionDiv variants={item}>
            <UpcomingHolidays holidays={rightbar.holidays} />
          </MotionDiv>

          <MotionDiv variants={item}>
            <OnLeave people={rightbar.onLeave} avatarImages={avatarImages} />
          </MotionDiv>

          <MotionDiv variants={item}>
            <Birthday people={rightbar.birthdays} avatarImages={avatarImages} />
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default Dashboard;
