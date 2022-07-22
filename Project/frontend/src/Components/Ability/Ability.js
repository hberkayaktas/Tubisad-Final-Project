import React from 'react'
import AbilityCard from './AbilityCard';

function Ability() {
  
  return (
      <section>
      <div className="row justify-content-center m-0 bg-dark pb-5">
        <div className="col-md-8">
          <div className="row justify-content-center">
            <p className="fw-bold text-center text-light fs-1">Yetenekler</p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <AbilityCard percentage={66} icon={"fa-brands fa-html5"}  colorT={"13, 110, 253"} pathcolor={"#d6d6d6"} title={"Html"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={85} icon={"fa-brands fa-css3-alt"}  colorT={"219,52,68"} pathcolor={"#f7acac"} title={"Css"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={77} icon={"fa-brands fa-js-square"}  colorT={"255,193,7"} pathcolor={"#fbe5a4"} title={"Javascript"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={82} icon={"fa-brands fa-react"}  colorT={"0,188,212"} pathcolor={"#9bf4ff"} title={"React"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={82} icon={"fa-brands fa-node-js"}  colorT={"158,178,59"} pathcolor={"#DAE2B6"} title={"Node js"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={95} icon={"fa-brands fa-bootstrap"}  colorT={"117,50,249"} pathcolor={"#b4eaed"} title={"Boostrap"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={65} icon={"fa-solid fa-database"}  colorT={"0,100,165"} pathcolor={"#b4eaed"} title={"SQL"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={75} icon={"fa-solid fa-file-lines"}  colorT={"2,52,15"} pathcolor={"#DAE2B6"} title={"Mongo DB"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={95} icon={"fa-brands fa-git-alt"}  colorT={"247,78,39"} pathcolor={"#ffcfc4"} title={"Git ve Github"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={95} icon={"fa-solid fa-robot"}  colorT={"57,62,70"} pathcolor={"#eeeeee"} title={"Rest Api"}/>
            </div>
            <div className="col-md-3">
              <AbilityCard percentage={100} icon={"fa-solid fa-laptop-code"}  colorT={"33,85,205"} pathcolor={"#E8F9FD"} title={"VS Code"}/>
            </div>
           

          </div>


        </div>
      </div>
    </section>
    
  )
}

export default Ability