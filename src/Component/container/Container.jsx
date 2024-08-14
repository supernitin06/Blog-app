import React from 'react';

function Container({ children }) {
  return (
    <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg'>
      {children}
    </div>
  );
}

export default Container;
