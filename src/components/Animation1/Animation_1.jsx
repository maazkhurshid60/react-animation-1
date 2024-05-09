//Main Imports
import React, { useEffect } from 'react'

//Style Imports
import './animation_1.style.scss';

//Anime JS Import
import anime from 'animejs/lib/anime.es';

//Icons Import
import { GrHostMaintenance } from "react-icons/gr";
import { TbPresentationAnalytics } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { GrDeploy } from "react-icons/gr";

//Animation 1 Component Export
export default function Animation1Component() {

  //Defining animation related variables
  const timeLineConfig = { loop: true };
  const tl = anime.timeline(timeLineConfig);
  const tlIcon = anime.timeline(timeLineConfig);
  const tlPar = anime.timeline(timeLineConfig);
  const timeDuration = 1000; //1000ms == 1s

  //First UseEffect will start the animations timeline
  useEffect(() => {
    
    tl.add({
      targets: '.circle-4',
      duration: timeDuration,
      background: [
        {value: 'rgb(255, 66, 80)', },
        {value: 'rgb(255,255,255)'},
      ]
    })
    .add({
      targets: '.circle-5',
      duration: timeDuration,
      background: [
        {value: 'rgb(255, 66, 80)', },
        {value: 'rgb(255,255,255)'}
      ]
    })
    .add({
      targets: '.circle-6',
      duration: timeDuration,
      background: [
        {value: 'rgb(255, 66, 80)', },
        {value: 'rgb(255,255,255)'}
      ]
    })
    .add({
      targets: '.circle-3',
      duration: timeDuration,
      background: [
        {value: 'rgb(255, 66, 80)', },
        {value: 'rgb(255,255,255)'}
      ]
    })
    .add({
      targets: '.circle-2',
      duration: timeDuration,
      background: [
        {value: 'rgb(255, 66, 80)', },
        {value: 'rgb(255,255,255)'}
      ]
    })
    .add({
      targets: '.circle-1',
      duration: timeDuration,
      background: [
        {value: 'rgb(255, 66, 80)', },
        {value: 'rgb(255,255,255)'}
      ]
    });

    tlIcon.add({
      targets: '.circle-4 .un-hover-i',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(202, 60, 70)'},
      ]
    })
    .add({
      targets: '.circle-5 .un-hover-i',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(202, 60, 70)'}
      ]
    })
    .add({
      targets: '.circle-6 .un-hover-i',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(202, 60, 70)'}
      ]
    })
    .add({
      targets: '.circle-3 .un-hover-i',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(202, 60, 70)'}
      ]
    })
    .add({
      targets: '.circle-2 .un-hover-i',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(202, 60, 70)'}
      ]
    })
    .add({
      targets: '.circle-1 .un-hover-i',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(202, 60, 70)'}
      ]
    });

    tlPar.add({
      targets: '.circle-4 .un-hover-p',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(0,0,0)', },
      ]
    })
    .add({
      targets: '.circle-5 .un-hover-p',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(0,0,0)', },
      ]
    })
    .add({
      targets: '.circle-6 .un-hover-p',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(0,0,0)', },
      ]
    })
    .add({
      targets: '.circle-3 .un-hover-p',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(0,0,0)', },
      ]
    })
    .add({
      targets: '.circle-2 .un-hover-p',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(0,0,0)', },
      ]
    })
    .add({
      targets: '.circle-1 .un-hover-p',
      duration: timeDuration,
      color: [
        {value: 'rgb(255,255,255)', },
        {value: 'rgb(0,0,0)', },
      ]
    });

  }, []);

  //Second UseEffect will add event handlers on each circle for controlling behavior of animation timelines
  useEffect(() => {
    for (let index = 1; index <= 6; index++) {
      const circleEle = window.document.getElementsByClassName(`circle-${index}`)[0];
      circleEle.addEventListener('mouseover', () => {
        tl.pause();
        tlIcon.pause();
        tlPar.pause();
      })
      circleEle.addEventListener('mouseleave', () => {
        tl.play();
        tlIcon.play();
        tlPar.play();
      })
    }
  }, [])

  return (
    <>
      <div className='animation-1'>
        <div className='parent-div'>
          <div className='child-1-div'>
            <div className='child-1-2-div'>
              <div className='child-2-div'>
                <div className='child-2-2-div'>
                  <div className='inner-most-div'>
                    <p id='sft'>Software</p>
                    <hr className='hr-ln' id='first-hr'/>
                    <p id='dev'>Development</p>
                    <hr className='hr-ln' id='second-hr'/>
                    <p id='lf-cycle'>Life Cycle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='circle-1'>
            <GrHostMaintenance className='un-hover-i' size={25} />
            <p className='un-hover-p'>Maintenance</p>
            <div className='sm-circle'>
              6
            </div>
            <span className="popuptext" id="myPopup-6">
              <div className='popup-content'>
                <div className='sec-1'>
                  <h4 className='popup-content-heading'>Deliverables</h4>
                  <ul>
                    <li>Bug Reports</li>
                    <li>Change Requests</li>
                    <li>Software Updates and Patches</li>
                  </ul>
                </div>
                <div className='sec-2'>
                  <h4 className='popup-content-heading'>Team</h4>
                  <ul>
                    <li>Project Manager</li>
                    <li>Business Analyst</li>
                    <li>Developers</li>
                    <li>QA Engineer</li>
                    <li>Support Engineer</li>
                  </ul>
                </div>
              </div>
            </span>
          </div>
          <div className='circle-2'>
          <GrDeploy className='un-hover-i' size={25} />
            <p className='un-hover-p'>Deployment</p>
            <div className='sm-circle'>
              5
            </div>
            <span className="popuptext" id="myPopup-5">
              <div className='popup-content'>
                <div className='sec-1'>
                  <h4 className='popup-content-heading'>Deliverables</h4>
                  <ul>
                    <li>Deployment Plan</li>
                    <li>Deployment Scripts</li>
                  </ul>
                </div>
                <div className='sec-2'>
                  <h4 className='popup-content-heading'>Team</h4>
                  <ul>
                    <li>System Administrators</li>
                    <li>Front-End Developer</li>
                    <li>Back-End Developer</li>
                    <li>DevOps Engineer</li>
                  </ul>
                </div>
              </div>
            </span>
          </div>
          <div className='circle-3'>
            <GrTest className='un-hover-i' size={25} />
            <p className='un-hover-p'>Testing & QA</p>
            <div className='sm-circle'>
              4
            </div>
            <span className="popuptext" id="myPopup-4">
              <div className='popup-content'>
                <div className='sec-1'>
                  <h4 className='popup-content-heading'>Deliverables</h4>
                  <ul>
                    <li>Test Cases</li>
                    <li>Quality Assurance Reports</li>
                    <li>Bug Free Software</li>
                  </ul>
                </div>
                <div className='sec-2'>
                  <h4 className='popup-content-heading'>Team</h4>
                  <ul>
                    <li>Automation QA Engineer</li>
                    <li>Manual QA Engineer</li>
                  </ul>
                </div>
              </div>
            </span>
          </div>
          <div className='circle-4'>
            <TbPresentationAnalytics className='un-hover-i' size={25} />
            <p className='un-hover-p'>Analysis & Planning</p>
            <div className='sm-circle'>
              1
            </div>
            <span className="popuptext" id="myPopup-1">
              <div className='popup-content'>
                <div className='sec-1'>
                  <h4 className='popup-content-heading'>Deliverables</h4>
                  <ul>
                    <li>Project Charter</li>
                    <li>Project Plan</li>
                    <li>Gap Analysis</li>
                    <li>Road Map</li>
                    <li>Project Scope</li>
                  </ul>
                </div>
                <div className='sec-2'>
                  <h4 className='popup-content-heading'>Team</h4>
                  <ul>
                    <li>Business Analyst</li>
                    <li>Project Manager</li>
                    <li>Stakeholders</li>
                  </ul>
                </div>
              </div>
            </span>
          </div>
          <div className='circle-5'>
            <MdOutlineDesignServices className='un-hover-i' size={25} />
            <p className='un-hover-p'>Design</p>
            <div className='sm-circle'>
              2
            </div>
            <span className="popuptext" id="myPopup-2">
              <div className='popup-content'>
                <div className='sec-1'>
                  <h4 className='popup-content-heading'>Deliverables</h4>
                  <ul>
                    <li>System Architecture Diagram</li>
                    <li>Software Design Documents</li>
                    <li>User Interface (UI) Design</li>
                    <li>Prototyping</li>
                  </ul>
                </div>
                <div className='sec-2'>
                  <h4 className='popup-content-heading'>Team</h4>
                  <ul>
                    <li>UI/UX Designer</li>
                    <li>Project Manager</li>
                    <li>Software Architect</li>
                  </ul>
                </div>
              </div>
            </span>
          </div>
          <div className='circle-6'>
            <FaConnectdevelop className='un-hover-i' size={25} />
            <p className='un-hover-p'>Development</p>
            <div className='sm-circle'>
              3
            </div>
            <span className="popuptext" id="myPopup-3">
              <div className='popup-content'>
                <div className='sec-1'>
                  <h4 className='popup-content-heading'>Deliverables</h4>
                  <ul>
                    <li>Source Code</li>
                    <li>Database Schema</li>
                    <li>Working App</li>
                  </ul>
                </div>
                <div className='sec-2'>
                  <h4 className='popup-content-heading'>Team</h4>
                  <ul>
                    <li>Project Manager</li>
                    <li>Front-End Developer</li>
                    <li>Back-End Developer</li>
                  </ul>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

