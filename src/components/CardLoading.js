import React from 'react';
import AeroplaneCardLoading from '../ui/AeroplaneCardLoading';

function CardLoading() {
  return (
    <>
      <AeroplaneCardLoading />
      <div className=" d-none d-lg-block d-lg-flex justify-content-center align-items-center ">
        <AeroplaneCardLoading />
        <AeroplaneCardLoading />
      </div>
    </>
  );
}

export default CardLoading;
