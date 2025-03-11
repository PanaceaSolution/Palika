import React from 'react';

const DistrictInput = ({ selectedProvince }) => {
  const getDistrictsByProvince = (province) => {
    const districts = {
      "province-1": ["Bhojpur", "Dhankuta", "Ilam", "Jhapa", "Khotang", "Morang", "Okhaldhunga", "Panchthar", "Sankhuwasabha", "Solukhumbu", "Sunsari", "Taplejung", "Terhathum", "Udayapur"],
      "madhesh": ["Dhanusha", "Mahottari", "Sarlahi", "Sindhuli"],
      "bagmati": ["Bhaktapur", "Chitwan", "Dhading", "Kathmandu", "Lalitpur", "Makwanpur"],
      "gandaki": ["Gorkha", "Kaski", "Lamjung", "Manang", "Mustang", "Parbat", "Syangja", "Tanahun"],
      "lumbini": ["Arghakhanchi", "Banke", "Bardiya", "Dang", "Kapilvastu", "Nawalpur"],
      "karnali": ["Dailekh", "Dolpa", "Jumla", "Kalaiya", "Mugu", "Surkhet"],
      "sudurpaschim": ["Achham", "Baitadi", "Doti", "Kailali", "Kanchanpur"]
    };
    return districts[province] || [];
  };

  return (
    <div className='mt-4'>
      <h2 className='text-[#4472C4]'>Select District</h2>
      <select
        name="district"
        id="district"
        className='p-2 border-[#4472C4] border-[1px] rounded-sm'
        disabled={!selectedProvince}
      >
        <option value="">Select a District</option>
        {getDistrictsByProvince(selectedProvince).map((district) => (
          <option key={district} value={district}>{district}</option>
        ))}
      </select>
    </div>
  );
};

export default DistrictInput;
