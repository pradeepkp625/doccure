import React from 'react';
import CustomizedSwitches from '../utils/AntSwitch';
function TablePatients({ tableData }) {
  return (
    <div className='col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200'>
      <div className='p-3'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full'>
            {/* Table header */}
            <thead className='text-xs uppercase text-slate-400 bg-slate-50 rounded-sm'>
              <tr>
            {tableData.head.map((item)=>{
              return  <th className='p-2'>
                  <div className='font-semibold text-left'>{item}</div>
                </th>
                 })}
                </tr>
            </thead>

            {/* Table body */}
            <tbody className='text-sm font-medium divide-y divide-slate-100'>
              {/* Row */}
              {tableData?.content?.map((item) => {
                return (
                  <tr>
                    <td className='p-2'>
                      <div className='flex items-center'>
                        <div className='text-slate-800'>{item['ID']}</div>
                      </div>
                    </td>
                    <td className='p-2'>
                      <div className='text-center'>
                      {item['PATIENT']}
                      </div>
                    </td>
                    <td className='p-2'>
                      <div className='text-center text-green-500'>
                      {item['Last Visit']}
                      </div>
                    </td>
                    <td className='p-2'>
                      <div className='text-center text-sky-500'>
                      {item['Blood Group']}
                      </div>
                    </td>
                    <td className='p-2'>
                      <div className='text-center text-sky-500'>
                      {item['Total Income']}
                      </div>
                    </td>
                    <td className='p-2'>
                      <div className='text-center text-sky-500'>
                      <CustomizedSwitches/>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {/* Row */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TablePatients;
