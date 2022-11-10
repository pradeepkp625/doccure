import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import Appointments from './Appointments';
import Doctors from '../pages/Doctors';
import Patients from '../pages/Patients';
import TableAppointments from './TableAppointments';
import TableDoctors from './TableDoctors';
import TablePatients from './TablePatients';
import { AppointmentData, DoctorData, PatientsData } from '../utils/JsonData';
import BasicDetails from '../partials/dashboard/BasicDetails';
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activescreen, setActivescreen] = useState('dashboard');
  function setscreen(name) {
    setActivescreen(name);
  }
  function renderComponent() {
    if (window.location.href.indexOf("basic-details") > -1) {
      return <BasicDetails/>
    }
    switch (activescreen) {
      case 'dashboard':
        return (
          <>
            <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2'>
              <FilterButton />
              <Datepicker />
            </div>
            <div className='dashboard-container'>
            {/* style={{ width: '50%', marginRight: '30px' }} */}
              <div className='dashboard-box'>
                <header className='px-5 py-4 border-b border-slate-100 header__app'>
                  <h2 className='font-semibold text-slate-800'>
                    Upcoming Appointments
                  </h2>
                </header>
                <TableAppointments tableData={AppointmentData} />
              </div>
              <div className='dashboard-box'>
                <header className='px-5 py-4 border-b border-slate-100 header__app'>
                  <h2 className='font-semibold text-slate-800'>Doctors</h2>
                </header>
                <TableDoctors tableData={DoctorData} />
              </div>
            </div>
            <div style={{ width: '100%', marginTop: '30px' }}>
              <header className='px-5 py-4 border-b border-slate-100 header__app'>
                <h2 className='font-semibold text-slate-800'>Patients</h2>
              </header>
              <TablePatients tableData={PatientsData} />
            </div>
          </>
        );
        break;
      case 'appointments':
        return <Appointments />;
      case 'patients':
        return <Patients />;
      case 'doctors':
        return <Doctors />;
      case 'Patients':
        return <Appointments />;
    }
  }
  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setActivescreen={setActivescreen}
        setscreen={setscreen}
      />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Dashboard actions */}
            <div className='sm:flex sm:justify-between sm:items-center mb-8'>
              {/* Left: Avatars */}
              <div />

              {/* Right: Actions */}
            </div>
            {renderComponent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
