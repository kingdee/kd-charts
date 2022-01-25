import React from 'react';
import CountUp from 'react-countup';

function demo() {
  return (
    <>
      <div style={{ fontSize: '50px' }}>
        <CountUp start={-100} end={100} duration={2.75} delay={2} />
      </div>
    </>
  );
}

export default demo;
