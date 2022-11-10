import React from 'react';
import FilterButton from '../partials/actions/FilterButton';
import TableAppointments from './TableAppointments';
const propTypes = {};

const defaultProps = {};

/**
 *
 */
class Appointments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        TableData:{
            head:[
              'Id','PATIENT','DOCTOR','DISEASE'  ,'CONSULTENENT TYPE','DATE & TIME','AMOUNT'
            ],
            content:[
                {
                   ID: '#2323',
                   PATIENT: 'Gobbs Siauw Male,40 Years Old',
                   DOCTOR: 'Dr.John Gyanoclogies',
                   DISEASE: 'Allergies & Asthma',
                   'CONSULTENENT TYPE':'Scheduled Appointment Video call',
                   'DATE & TIME':'26 November 2022 12/20/2022',
                   AMOUNT :'$300.00'
                },
                {
                  ID: '#2723',
                  PATIENT: ' Siauw Male,30 Years Old',
                  DOCTOR: 'Dr.John Gyanoclogies',
                  DISEASE: 'Allergies & Asthma',
                  'CONSULTENENT TYPE':'Scheduled Appointment Video call',
                  'DATE & TIME':'26 November 2022 12/20/2022',
                  AMOUNT :'$300.00'
               },
               ,
                {
                  ID: '#2723',
                  PATIENT: ' Siauw Male,30 Years Old',
                  DOCTOR: 'Dr.John Gyanoclogies',
                  DISEASE: 'Allergies & Asthma',
                  'CONSULTENENT TYPE':'Scheduled Appointment Video call',
                  'DATE & TIME':'26 November 2022 12/20/2022',
                  AMOUNT :'$300.00'
               }
               ,
                {
                  ID: '#2723',
                  PATIENT: ' Siauw Male,30 Years Old',
                  DOCTOR: 'Dr.John Gyanoclogies',
                  DISEASE: 'Allergies & Asthma',
                  'CONSULTENENT TYPE':'Scheduled Appointment Video call',
                  'DATE & TIME':'26 November 2022 12/20/2022',
                  AMOUNT :'$300.00'
               }
            ]
        }
    };
  }

  render() {
    return (
      <div style={{background:'white'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <header className='px-5 py-4 border-b border-slate-100 header__app'>
            <h2 className='font-semibold text-slate-800'>
              Upcoming Appointments
            </h2>
          </header>
          <FilterButton />
        </div>
        <TableAppointments 
        tableData={this.state.TableData}
        />
      </div>
    );
  }
}

Appointments.propTypes = propTypes;
Appointments.defaultProps = defaultProps;
// #endregion

export default Appointments;
