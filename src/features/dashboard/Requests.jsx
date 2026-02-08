import React from "react";
import Card from "../../components/card/Card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/avatar/Avatar";
import { MoreVertical } from "lucide-react";
import Button from "../../components/button/Button";

const Requests = ({ leaveRequests, reimbursementRequests, avatarImages }) => {
  return (
    <Card>
      <div className="font-satoshi">
        <h2 className="text-[16px] font-bold tracking-tight text-slate-900">
          Requests
        </h2>
        <p className="mt-1 text-[12px] font-medium text-slate-500">
          Review, approve, or reject employee request for leave and
          reimbursements.
        </p>
      </div>

      <div className="mt-5">
        <h3 className="text-[14px] font-bold text-slate-900">Leaves</h3>
        <div className="mt-3 space-y-3">
          {leaveRequests.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage
                    src={avatarImages[item.avatarKey]}
                    alt={item.name}
                  />
                  <AvatarFallback>
                    {item.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500">{item.role}</div>
                </div>
              </div>
              <div className="text-sm font-normal text-slate-700">
                {item.date}
              </div>
              <div className="flex flex-1 min-w-0 justify-end items-center gap-2">
                <span className="text-sm font-normal text-slate-700">
                  {item.note}
                </span>
                <Button
                  variant="icon"
                  type="button"
                  aria-label="More actions"
                  className="p-1"
                >
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-[14px] font-bold text-slate-900">Reimbursement</h3>
        <div className="mt-3 space-y-3">
          {reimbursementRequests.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage
                    src={avatarImages[item.avatarKey]}
                    alt={item.name}
                  />
                  <AvatarFallback>
                    {item.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500">{item.role}</div>
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-1 text-sm font-normal text-slate-700">
                <span>{item.amount}</span>
                <span>{item.reason}</span>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button
                  variant="secondary"
                  className="rounded-lg p-2 bg-[#2684FF]/10 text-[#2684FF] hover:bg-[#2684FF]/20 border-0"
                >
                  Reject
                </Button>
                <Button
                  variant="primary"
                  className="rounded-lg bg-[#2684FF] text-white hover:bg-blue-600"
                >
                  Approve
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Requests;
