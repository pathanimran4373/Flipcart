import React from 'react';
import {ColorRing} from 'react-loader-spinner';

const LoadingSpinner = () => (
  <>
  <div className='w-full h-11/12 flex items-center mt-60 justify-center'>
  <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#0066b2"]}
            />
  </div>
  </>
);

export default LoadingSpinner;
