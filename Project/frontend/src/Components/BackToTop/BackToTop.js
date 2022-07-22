
import React, { useState, useEffect } from 'react';

function BackToTop() {
  // inside component:
  
  const [rightPosition, setRightPosition] = useState("-65px");
  const handleScroll = () => {
      const position = window.pageYOffset;
      //console.log(position);
      if(position < 100){
          setRightPosition("-65px")
      }else{
        setRightPosition("0px")
      }
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
      <a className="backtotop" style={{right:rightPosition}} id="scrollToTop" href={"#Top"} ><span>&lt;</span></a>
  )
}

export default BackToTop