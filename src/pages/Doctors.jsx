import React from 'react';
import FilterButton from '../partials/actions/FilterButton';
import SearchModal from '../partials/header/SearchModal';
import TableDoctors from './TableDoctors';


const defaultProps = {};

class Doctors extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        tableData:{
            head:[
              'Id','DOCTOR','Specialities','Member Since'  ,'No. of Appointments','Total Income','Account Status'
            ],
            content:[
              {
                ID: '#2323',
                DOCTOR: 'Dr.John Gyanoclogies',
                ['Specialities']: 'Allergies & Asthma',
                'Member Since':'Scheduled Appointment Video call',
                'No. of Appointments':'26 November 2022 12/20/2022',
                ['Total Income'] :'$300.00',
                ['Account Status'] :'False'
             },
             {
              ID: '#2323',
              DOCTOR: 'Dr.John Gyanoclogies',
              ['Specialities']: 'Allergies & Asthma',
              'Member Since':'Scheduled Appointment Video call',
              'No. of Appointments':'26 November 2022 12/20/2022',
              ['Total Income'] :'$300.00',
              ['Account Status'] :'False'
           },
           ,
             {
              ID: '#2323',
              DOCTOR: 'Dr.John Gyanoclogies',
              ['Specialities']: 'Allergies & Asthma',
              'Member Since':'Scheduled Appointment Video call',
              'No. of Appointments':'26 November 2022 12/20/2022',
              ['Total Income'] :'$300.00',
              ['Account Status'] :'False'
           },
           {
            ID: '#2323',
            DOCTOR: 'Dr.John Gyanoclogies',
            ['Specialities']: 'Allergies & Asthma',
            'Member Since':'Scheduled Appointment Video call',
            'No. of Appointments':'26 November 2022 12/20/2022',
            ['Total Income'] :'$300.00',
            ['Account Status'] :'False'
         },
            ]
        }
    };
}
    render() {
        return <div style={{background:'white'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <header className='px-5 py-4 border-b border-slate-100 header__app'>
            <h2 className='font-semibold text-slate-800'>
             Doctors
            </h2>
          </header>
          <FilterButton />
        </div>
            <TableDoctors
            tableData={this.state.tableData}
            />
        </div>
    }
}

// #endregion

export default Doctors;