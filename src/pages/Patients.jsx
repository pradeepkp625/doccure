import React from 'react';
import FilterButton from '../partials/actions/FilterButton';
import TablePatients from './TablePatients';


const defaultProps = {};

class Patients extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        tableData:{
            head:[
              'Id','PATIENT','Last Visit','Blood Group'  ,'Total Income','Account Status',
            ],
            content:[
                {
                   ID: '#3456',
                   PATIENT: 'Bess Twishes Male,40 Years old',
                   ['Last Visit']: 'Dr.John Gyanoclogies',
                   ['Blood Group']: 'AB+',
                   ['Total Income']:'$300.00',
                   ['Account Status'] :'false'
                },
                {
                  ID: '#3456',
                  PATIENT: 'Bess Twishes Male,40 Years old',
                  ['Last Visit']: 'Dr.John Gyanoclogies',
                  ['Blood Group']: 'AB+',
                  ['Total Income']:'$300.00',
                  ['Account Status'] :'false'
               }, 
               {
                ID: '#3456',
                PATIENT: 'Bess Twishes Male,40 Years old',
                ['Last Visit']: 'Dr.John Gyanoclogies',
                ['Blood Group']: 'AB+',
                ['Total Income']:'$300.00',
                ['Account Status'] :'false'
             }, 
             {
              ID: '#3456',
              PATIENT: 'Bess Twishes Male,40 Years old',
              ['Last Visit']: 'Dr.John Gyanoclogies',
              ['Blood Group']: 'AB+',
              ['Total Income']:'$300.00',
              ['Account Status'] :'false'
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
             Patients
            </h2>
          </header>
          <FilterButton />
        </div>
            <TablePatients
            tableData={this.state.tableData}
            />
        </div>
    }
}

// #endregion

export default Patients;