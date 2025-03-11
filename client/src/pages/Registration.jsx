import React from 'react';
import RegistrationCards from '../components/RegistrationCards';
import RegistrationLogo from '/registration_icon.png';
import RenewLogo from '/renew.png';
import Check from '/check.png';
import Support from '/support.png';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className='h-[calc(100vh-15vh)] flex justify-center items-center'>
      <div className="cards-container bg-[#4472C4] h-[80%] w-[70%] flex items-center justify-center gap-12 flex-wrap rounded-[2px]">
        <RegistrationCards 
          source={RegistrationLogo} 
          Ename="New Business Registration" 
          Nname="नयाँ व्यवसाय दर्ता" 
          onClick={() => navigate('/register')} 
        />
        <RegistrationCards 
          source={RenewLogo} 
          Ename="Renew Business" 
          Nname="व्यवसाय नविकरण" 
          onClick={() => navigate('/renew')}
        />
        <RegistrationCards 
          source={Check} 
          Ename="Check Business Detail" 
          Nname="व्यवसाय खोजि" 
          onClick={() => navigate('/check-business')}
        />
        <RegistrationCards 
          source={Support} 
          Ename="Technical Support" 
          Nname="प्राविधिक सहायता" 
          onClick={() => navigate('/support')}
        />
      </div>
    </div>
  );
};

export default Registration;
