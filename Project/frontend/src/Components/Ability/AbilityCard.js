import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';

function AbilityCard({percentage,icon,colorT,pathcolor,title}) {
  return (
      <div className='cardFlush'>
      <div className="card shadow-lg ghost mb-3  wow bounceIn animated" data-wow-delay=".20s">
        <div className="card-body  p-1">
        
            <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
                // Text size
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none'
                // Colors
                pathColor: `rgba(${colorT}, ${percentage / 100})`,
                textColor: '#f88',
                trailColor: pathcolor,
                backgroundColor: '#3e98c7',
              })}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <>
              <p className="text-center m-0" style={{fontSize: '110px',color: 'rgba('+colorT+')'}}><i className={icon} /></p>
              <p className="text-center p-0" style={{position:"absolute",bottom:"-5px",color: 'rgba('+colorT+')'}}>{percentage}%</p>
            </>

            </CircularProgressbarWithChildren>
            <p className="h4 text-center m-0 fw-bold">{title}</p>
          
        </div>
      </div>
    </div>
  )
}

export default AbilityCard