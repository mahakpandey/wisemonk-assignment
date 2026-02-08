import React from 'react'
import Card from '../../components/card/Card'

const EmployeeStatus = ({ employeeStatus }) => {
  return (   <Card className='flex flex-col gap-4'>
                <div className="flex flex-col gap-2.5 pb-3 border-b border-slate-200">
                  <h2 className="text-[18px] font-bold tracking-tight text-slate-800">
                    Employee Status
                  </h2>
                  <p className="text-[12px] font-medium text-gray-400">
                    A quick overview of employees
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-md font-bold text-gray-600">Total Employee</div>
                  <div className=" text-[18px] font-bold tracking-tight text-slate-900">
                    {employeeStatus.total}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {employeeStatus.breakdown.map((item) => (
                    <div
                      key={item.label}
                      className=" flex flex-col rounded-xl border border-slate-100 gap-3 bg-white p-2.25 shadow-sm"
                    >
                      <div className="text-[14px] font-medium text-gray-600">{item.label}</div>
                      <div className="text-[18px] font-bold tracking-tight text-slate-900">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
  )
}

export default EmployeeStatus