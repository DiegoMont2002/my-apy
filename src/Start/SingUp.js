
import React from 'react';
import { Link } from 'react-router-dom';
import './singUp.css';


export default function SingUp() {
    return (
        <body style={{ backgroundColor: '#e8e8e8' }}>
    
    
    <container fluid className='p-4 background-radial-gradient overflow-hidden'>

      <row>

        <div className='col-md-6 text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            The best offer <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </div>

        <div className='col-md-6 position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <card className='my-8 bg-glass'>
            <cardbody className='p-5'>

              <row>
                <div className='col-6'>
                  <input wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </div>

                <div className='col-6'>
                  <input wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </div>
              </row>

              <input wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <input wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <checkbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <btn className='w-100 mb-4' size='md'>sign up</btn>

              <div className="text-center">

                <p>or sign up with:</p>

                <btn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <icon fab icon='facebook-f' size="sm"/>
                </btn>

                <btn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <icon fab icon='twitter' size="sm"/>
                </btn>

                <btn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <icon fab icon='google' size="sm"/>
                </btn>

                <btn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <icon fab icon='github' size="sm"/>
                </btn>

              </div>

            </cardbody>
          </card>

        </div>

      </row>

    </container>

        </body>

    )
}
