import React from 'react';
import LoginPopup from './LoginPopup';
import RegistrationPopup from './RegistrationPopup';

const AuthorizationPage = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

  return (
    <div className="relative h-screen flex items-center justify-center">
      {isRegistrationOpen ? (
        <RegistrationPopup
          onClick={() => {
            setIsRegistrationOpen(!isRegistrationOpen);
          }}
        />
      ) : (
        <LoginPopup
          onClick={() => {
            setIsRegistrationOpen(!isRegistrationOpen);
          }}
        />
      )}
    </div>
  );
};

export default AuthorizationPage;
