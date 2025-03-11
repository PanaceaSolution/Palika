import React, { useState } from 'react';
import DistrictInput from './DistrictInput';

const ProvinceSelector = () => {
  const [selectedProvince, setSelectedProvince] = useState('');

  return (
    <div className='flex flex-col items-start justify-center p-4'>
      <h2 className='text-[#4472C4]'>Select Province</h2>
      <select
        name='province'
        id='province'
        className='p-2 border-[#4472C4] border-[1px] rounded-sm'
        onChange={(e) => setSelectedProvince(e.target.value)}
        value={selectedProvince}
      >
        <option value=''>Select a Province</option>
        <option value='province-1'>Province No. 1</option>
        <option value='madhesh'>Madhesh Province</option>
        <option value='bagmati'>Bagmati Province</option>
        <option value='gandaki'>Gandaki Province</option>
        <option value='lumbini'>Lumbini Province</option>
        <option value='karnali'>Karnali Province</option>
        <option value='sudurpaschim'>Sudurpashchim Province</option>
      </select>
      <DistrictInput selectedProvince={selectedProvince} />
    </div>
  );
};

export default ProvinceSelector;
