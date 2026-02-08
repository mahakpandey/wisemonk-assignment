import { Calendar } from "lucide-react";

const UpcomingHolidaysCard = ({ holidays }) => {
  return (
    <div className="font-satoshi flex flex-col rounded-xl bg-white px-5 py-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-100">
            <Calendar className="h-4 w-4 text-slate-600" />
          </span>
          <h3 className="text-[16px] font-bold text-slate-800">
            Upcoming Holidays
          </h3>
        </div>
        <span className="text-[14px] font-normal text-[#2684FF]">
          <a
            href="#"
            className=" hover:underline"
          >
            View All
          </a>
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        {holidays.map((h) => (
          <div key={h.name} className="flex gap-2 items-center">
            <div className="flex  shrink-0 flex-col px-2.5 border border-gray-100 rounded-[5px]">
              <span className="text-[12px] font-medium text-slate-900">
                {h.month}
              </span>
              <span className="text-[16px] font-bold leading-tight text-slate-900">
                {h.date}
              </span>
            </div>
            <div className="min-w-0 flex flex-col justify-center gap-1">
              <span className="text-[14px] font-bold text-slate-900">
                {h.name}
              </span>
              <span className="text-[14px] font-medium text-slate-500">
                {h.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UpcomingHolidays = ({ holidays }) => {
  return <UpcomingHolidaysCard holidays={holidays} />;
};

export default UpcomingHolidays;
