import { Button, TextField } from '@mui/material';
import React from 'react';
import CustomBootstrapInput from './Bootstrapinput';

class BasicDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <br />
        <h1>Basic Details</h1>
        <br />
        <div style={{ background: 'white', height: '450px' }}>
          <header className='px-5 py-4 border-b border-slate-100 header__app'>
            <h2 className='font-semibold text-slate-800'>Basic Inputs</h2>
          </header>
          <div style={{marginTop:'30px',marginLeft:'30px'}}>
            <div style={{marginBottom:'20px'}}>
              <CustomBootstrapInput
                label='Name'
                id='outlined-size-small'
                size='small'
              />
            </div>
            <div style={{marginBottom:'20px'}}>
            <CustomBootstrapInput
                label='Mobile'
                id='outlined-size-small'
                size='small'
              />
            </div>
            <div style={{marginBottom:'20px'}}>
            <CustomBootstrapInput
                label='Age'
                id='outlined-size-small'
                size='small'
              />
            </div>  
            <Button variant="contained" style={{width:'230px'}}>Submit</Button>

          </div>
        </div>
      </div>
    );
  }
}

export default BasicDetails;
