import React from "react";
import { MotionDiv } from "../../shared/ui/Motion";
import Card from "../../components/card/Card";

function SkeletonBar({ className = "" }) {
  return (
    <MotionDiv
      className={`rounded bg-slate-200 ${className}`}
      aria-hidden
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function StatCardSkeleton() {
  return (
    <Card>
      <div className="flex flex-col gap-2.5">
        <SkeletonBar className="h-4 w-24" />
        <SkeletonBar className="h-7 w-12" />
        <SkeletonBar className="h-3 w-32" />
      </div>
    </Card>
  );
}

function PayrollTimelineSkeleton() {
  return (
    <Card>
      <div className="font-satoshi">
        <SkeletonBar className="h-4 w-56" />
        <SkeletonBar className="mt-1 h-3 w-72" />
      </div>
      <div className="mt-4 space-y-1">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative flex gap-3 pb-5">
            <SkeletonBar className="h-6 w-6 shrink-0 rounded-full" />
            <div className="flex-1 space-y-1">
              <SkeletonBar className="h-4 w-full max-w-[200px]" />
              <SkeletonBar className="h-3 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function EmployeeStatusSkeleton() {
  return (
    <Card>
      <div>
        <SkeletonBar className="h-5 w-36" />
        <SkeletonBar className="mt-1 h-3 w-48" />
      </div>
      <div className="mt-3 border-t border-slate-200 pt-4">
        <SkeletonBar className="h-4 w-28" />
        <SkeletonBar className="mt-1 h-8 w-12" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <SkeletonBar className="h-4 w-16" />
            <SkeletonBar className="mt-2 h-7 w-8" />
          </div>
        ))}
      </div>
    </Card>
  );
}

function RequestsSkeleton() {
  return (
    <Card>
      <div>
        <SkeletonBar className="h-4 w-20" />
        <SkeletonBar className="mt-1 h-3 w-full max-w-sm" />
      </div>
      <div className="mt-5">
        <SkeletonBar className="h-4 w-14" />
        <div className="mt-3 space-y-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <SkeletonBar className="h-10 w-10 shrink-0 rounded-full" />
              <div className="min-w-0 flex-1 space-y-1">
                <SkeletonBar className="h-4 w-24" />
                <SkeletonBar className="h-3 w-16" />
              </div>
              <SkeletonBar className="h-3 w-20" />
              <div className="flex gap-2">
                <SkeletonBar className="h-8 w-16 rounded" />
                <SkeletonBar className="h-8 w-16 rounded" />
              </div>
            </div>
          ))}
        </div>
        <SkeletonBar className="mt-4 h-4 w-24" />
        <div className="mt-3 space-y-3">
          {[1].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <SkeletonBar className="h-10 w-10 shrink-0 rounded-full" />
              <div className="min-w-0 flex-1 space-y-1">
                <SkeletonBar className="h-4 w-28" />
                <SkeletonBar className="h-3 w-20" />
              </div>
              <SkeletonBar className="h-8 w-16 rounded" />
              <SkeletonBar className="h-8 w-16 rounded" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function RightCardSkeleton({ titleWidth = "w-32" }) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <SkeletonBar className="h-8 w-8 rounded-lg" />
          <SkeletonBar className={`h-4 ${titleWidth}`} />
        </div>
      </div>
      <div className="mt-3 space-y-3">
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-4">
            <div className="flex shrink-0 flex-col gap-1">
              <SkeletonBar className="h-3 w-8" />
              <SkeletonBar className="h-6 w-8" />
            </div>
            <div className="flex-1 space-y-1">
              <SkeletonBar className="h-4 w-20" />
              <SkeletonBar className="h-3 w-28" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OnLeaveSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
        <SkeletonBar className="h-8 w-8 rounded-full" />
        <SkeletonBar className="h-4 w-24" />
      </div>
      <div className="mt-3">
        <SkeletonBar className="h-4 w-14" />
        <div className="mt-2 space-y-3">
          {[1].map((i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <SkeletonBar className="h-10 w-10 shrink-0 rounded-full" />
              <div className="flex-1 space-y-1">
                <SkeletonBar className="h-4 w-28" />
                <SkeletonBar className="h-3 w-16" />
              </div>
              <SkeletonBar className="h-3 w-24" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 border-t border-slate-200 pt-3">
        <SkeletonBar className="h-4 w-20" />
        <div className="mt-2 space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <SkeletonBar className="h-10 w-10 shrink-0 rounded-full" />
              <div className="flex-1 space-y-1">
                <SkeletonBar className="h-4 w-24" />
                <SkeletonBar className="h-3 w-14" />
              </div>
              <SkeletonBar className="h-3 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BirthdaySkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
        <SkeletonBar className="h-8 w-8 rounded-lg" />
        <SkeletonBar className="h-4 w-20" />
      </div>
      <div className="mt-3">
        <SkeletonBar className="h-4 w-14" />
        <div className="mt-2 space-y-3">
          {[1].map((i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <SkeletonBar className="h-10 w-10 shrink-0 rounded-full" />
              <div className="flex-1 space-y-1">
                <SkeletonBar className="h-4 w-24" />
                <SkeletonBar className="h-3 w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 border-t border-slate-200 pt-3">
        <SkeletonBar className="h-4 w-20" />
        <div className="mt-2 space-y-3">
          {[1].map((i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <SkeletonBar className="h-10 w-10 shrink-0 rounded-full" />
              <div className="flex-1 space-y-1">
                <SkeletonBar className="h-4 w-28" />
                <SkeletonBar className="h-3 w-14" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const skeletonContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const skeletonItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function DashboardSkeleton() {
  return (
    <MotionDiv
      className="xl:h-full flex flex-col bg-[#F1F8FF]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col xl:flex-row xl:flex-1 xl:min-h-0 gap-4">
        <MotionDiv
          className="flex flex-col xl:flex-1 xl:min-h-0 xl:overflow-y-auto gap-4 min-w-0"
          variants={skeletonContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <MotionDiv variants={skeletonItem}>
              <StatCardSkeleton />
            </MotionDiv>
            <MotionDiv variants={skeletonItem}>
              <StatCardSkeleton />
            </MotionDiv>
            <MotionDiv variants={skeletonItem}>
              <StatCardSkeleton />
            </MotionDiv>
          </div>
          <MotionDiv variants={skeletonItem}>
            <PayrollTimelineSkeleton />
          </MotionDiv>
          <MotionDiv variants={skeletonItem}>
            <EmployeeStatusSkeleton />
          </MotionDiv>
          <MotionDiv variants={skeletonItem}>
            <RequestsSkeleton />
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          className="flex flex-col gap-4 w-full xl:w-[360px] xl:shrink-0 xl:min-h-0 xl:overflow-y-auto min-w-0"
          variants={skeletonContainer}
          initial="hidden"
          animate="visible"
        >
          <MotionDiv variants={skeletonItem}>
            <RightCardSkeleton titleWidth="w-40" />
          </MotionDiv>
          <MotionDiv variants={skeletonItem}>
            <OnLeaveSkeleton />
          </MotionDiv>
          <MotionDiv variants={skeletonItem}>
            <BirthdaySkeleton />
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
