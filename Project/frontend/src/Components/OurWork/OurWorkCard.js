import React from 'react'
import AnimatedNumbers from "react-animated-numbers";

function OurWorkCard({title,count,icon}) {
      return (
            <div className="col">
                  <div className="card border-0 bg-dark">
                        <div className="card-body text-center">
                              <h5 className="card-title text-warning fs-1"><i className={icon} /></h5>
                              <span className="card-subtitle mb-2 text-light d-flex justify-content-center">
                              <AnimatedNumbers
                                    includeComma
                                    animateToNumber={count}>
                              </AnimatedNumbers>
                              </span>
                              <p className="card-text text-orange text-center">{title}</p>
                        </div>
                  </div>
            </div>
      )
}

export default OurWorkCard