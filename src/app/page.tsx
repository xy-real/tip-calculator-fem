import React from 'react';
//import { useState } from 'react';
import BillInput from '../components/BillInput';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='flex items-center justify-center min-h-screen flex-row'>
        <div className='w-200 h-100 bg-white rounded-md'>
          <div className='flex flex-row'>
            <div>
              <BillInput />
            </div>
          </div>
        </div>
      </div>
      {/* Your tip calculator components will go here */}
    </main>
  );
}
