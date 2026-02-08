import React from 'react'
import Card from '../../components/card/Card'

const EmployeeStatus = ({ employeeStatus }) => {
  return (   <Card>
                <div className="font-satoshi">
                  <h2 className="text-[18px] font-bold tracking-tight text-slate-800">
                    Employee Status
                  </h2>
                  <p className="mt-1 text-[13px] font-medium italic text-slate-500">
                    A quick overview of employees
                  </p>
                  <div className="mt-3 border-t border-slate-200" />
                </div>
                <div className="mt-4">
                  <div className="text-base font-semibold text-slate-700">Total Employee</div>
                  <div className="mt-1 text-[28px] font-bold tracking-tight text-slate-900">
                    {employeeStatus.total}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {employeeStatus.breakdown.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="text-base font-semibold text-slate-700">{item.label}</div>
                      <div className="mt-2 text-[28px] font-bold tracking-tight text-slate-900">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
  )
}

export default EmployeeStatus