import demoavatar from '../images/demoavatar.png';

import { useAsync } from 'react-async';
import { useEffect, useState } from 'react';

import setEquasion from '../api/setEqasion';

import checkResult from '../api/checkResult';

let H = 0;
let M = 0;
let S = 0;
let clock;

// Set posibility of submission of equasion result on pressed enter on keyboard 
// document.onkeydown=function(){
//   if(window.event.keyCode ==='13'){
//     checkResult();
//   }
// }

let avatar;

function MainScreen(props) {
  const [operation, setOperation] = useState("addition");
  const [difficulty, setDifficulty] = useState("easy");
  const [integer, setInteger] = useState({"firstInteger" : 2, "secondInteger" : 3})
  const [style, setStyle] = useState({"easy" : "larger", "hard" : "", "train" : "larger", "compete" : ""});
  const [timer, setTimer] = useState(false);
  const [hour, setHour] = useState(H);
  const [minutes, setMinutes] = useState(M);
  const [seconds, setSeconds] = useState(S);
  const [disabled, setDisabled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [color, setColor] = useState("#4e5e72");
  const [plusTimeCount, setPlusTimeCount] = useState("");

  const operationSign = {"addition" : "+", "subtraction" : "-", "multiplication" : "x", "division" : "/"};
  
  // if (localStorage.getItem("avatar")) {
  //   avatar = localStorage.getItem("avatar");
  // } else {
  //   avatar = demoavatar;
  // }

  const selectOperation = (e) => {
    if (timer === false) {
      let operationArray = Array.from(document.getElementsByClassName("operation"));

      operationArray.forEach(element => {
        if(element.id === e.target.id) {
          element.classList.add("selected-operation");
          setOperation(element.id);
        } else {
          element.classList.remove("selected-operation");
        }
      });
  
      let eqasion = setEquasion(e.target.id, difficulty);
      let newIntegers = {"firstInteger" : eqasion.firstInteger, "secondInteger" : eqasion.secondInteger}
      setInteger(newIntegers);
    }
  }

  const newEqasion = () => {
    document.querySelector("#result").value = "";
    setColor("#4e5e72");
    let eqasion = setEquasion(operation, difficulty);
    let newIntegers = {"firstInteger" : eqasion.firstInteger, "secondInteger" : eqasion.secondInteger}
    setInteger(newIntegers);
  }

  const chooseDifficulty = () => {
    let newStyle = style;
    let newIntegers;

    if (difficulty === "easy") {
      setDifficulty("hard");

      newStyle.easy = "";
      newStyle.hard = "larger";

      let eqasion = setEquasion(operation, "hard");
      newIntegers = {"firstInteger" : eqasion.firstInteger, "secondInteger" : eqasion.secondInteger}
    } else {
      setDifficulty("easy");
      
      newStyle.easy = "larger";
      newStyle.hard = "";

      let eqasion = setEquasion(operation, "easy");
      newIntegers = {"firstInteger" : eqasion.firstInteger, "secondInteger" : eqasion.secondInteger}
    }

    setStyle(newStyle);
    setInteger(newIntegers);
  }

  const timerSwitch = () => {
    let newStyle = style;

    if (timer === false) {
      setTimer(true);
      setDisabled(true);
      clock = setInterval(timeCount, 1000);

      newStyle.train = "";
      newStyle.compete = "larger";
      document.querySelector("#skip").classList.remove("d-none");
      document.querySelector("#new").classList.remove("d-none");
      
    } else {
      S = 0;
      M = 0;
      H = 0;
      setSeconds(S);
      setMinutes(M);
      setHour(H);

      setTimer(false);
      setDisabled(false);
      clearInterval(clock);

      newStyle.train = "larger";
      newStyle.compete = "";
      document.querySelector("#skip").classList.add("d-none");
      document.querySelector("#new").classList.add("d-none");
    }
    setStyle(newStyle);
    setProgress(0);
    setProgressBar(0);
    newEqasion();
  }

  const resetTimer = () => {
    S = 0;
    M = 0;
    H = 0;
    newEqasion();
    setProgressBar(0);
    setProgress(0);
  }

  function timeCount() {
    S = S + 1;
    if (S === 60) {
      S = 0;
      M = M + 1;
      if (M === 60) {
        M = 0;
        H = H + 1;
      }
    }
    setSeconds(S);
    setMinutes(M);
    setHour(H);
  }

  const check = (value) => {
    if (checkResult(integer.firstInteger, integer.secondInteger, operation, value)) {
      setColor("green");
      setProgress(progress + 1);
      setProgressBar(progressBar + 10);
      if (progress < 9) {
        setTimeout(() => {
          newEqasion();
          // setColor("#4e5e72");
          // document.querySelector("#result").value = "";
        }, 500);
      } else {
        document.querySelector('#openModal').click();
        clearInterval(clock);
      }
    } else {
      setColor("red");
    }
  }

  const skip = () => {
    newEqasion();
    setPlusTimeCount("+5");
    document.querySelector('#plusTime').classList.add('plusTime');
    for(let i = 0; i < 5; i ++) {
      timeCount();
    }
  }

  const changeUsername = (e) => {
    localStorage.setItem("username", e.target.value);
  }

  useEffect(() => {
    document.querySelector("#result").focus();
  });

  return(
    <div className="col d-flex flex-column align-items-center" id="mainscreen">
      <div className="row pt-3 pb-3 w-100  bg-dark">
        <div className="col-6 d-flex flex-row align-items-center justify-content-start">
          <img src={(localStorage.getItem("avatar") ? (localStorage.getItem("avatar")) : (demoavatar))} alt="avatar" className="w-25 me-3" id="avatar" onClick={() =>props.setPage("avatar")}></img>
          <input id="username" type="text" maxLength={10} defaultValue={(localStorage.getItem("username") ? (localStorage.getItem("username")) : ("Username"))} onChange={changeUsername}></input>
        </div>
        <div className="col-6 d-flex flex-column align-items-end justify-content-center">
          {
            (timer) ? (
              <p className="larger position-relative">
                <span id="plusTime" className="me-3" onAnimationEnd={(e) => {e.target.classList.remove('plusTime'); setPlusTimeCount("")}}>{plusTimeCount}</span>
                <span>{(hour < 10) ? ("0" + hour) : (hour)}</span>
                :
                <span>{(minutes < 10) ? ("0" + minutes) : (minutes)}</span>
                :<span>{(seconds < 10) ? ("0" + seconds) : (seconds)}</span>
              </p>
            ) : (null)
          }
           {
            (timer) ? (
              <>
              <div className="progress w-75">
                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{"width": progressBar + '%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h3 className="mt-2" >{progress} / 10</h3>
              </>
            ) : (null)
          }
        </div>
      </div> 
      <div className="row pt-1 pb-1 w-100 bg-success d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center">
          <h1 id="addition" className="m-2  me-5 operation selected-operation" onClick={selectOperation}>+</h1>
          <h1 id="subtraction" className="m-2 me-5 operation" onClick={selectOperation}>-</h1>
          <h1 id="multiplication" className="m-2 me-5 operation" onClick={selectOperation}>x</h1>
          <h1 id="division" className="m-2 operation" onClick={selectOperation}>/</h1>
        </div>
      </div>
      <div className="row pt-1 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center">
          <h1 id="first-integer" className="equasion m-2">{integer.firstInteger}</h1>
          <h1 id="operation" className="equasion m-2">{operationSign[operation]}</h1>
          <h1 id="second-integer" className="equasion m-2">{integer.secondInteger}</h1>
          <h1 className="equasion m-2">=</h1>
          <input id="result" className="w-100 border-0 bg-light equasion m-2" style={{"color" : color}} onChange={
            (e) => {e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').slice(0, 4);
                    check(e.target.value);}
            }
            autoComplete='off'
            autoFocus
            >
          </input>
        </div>
      </div>
      <div className="row pt-1 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start">
          <button className="btn- btn-dark text-white d-none" id="skip" onClick={skip}>skip</button>
        </div>
      </div>
      <div className="row pt-1 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start">
          <button className="btn- btn-dark text-white d-none" id="new" onClick={resetTimer}>new start</button>
        </div>
      </div>
      <div className="row pt-5 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start">
          <div className="form-check form-switch d-flex flex-row align-items-center">
            <input className="form-check-input" type="checkbox" id="chooseDifficulty" onChange={chooseDifficulty} disabled={disabled}></input>
            <label className="form-check-label ms-2" htmlFor="chooseDifficulty"><span className={style.easy}>Easy</span>/<span className={style.hard}>Hard</span></label>
          </div>
        </div>
      </div>
      <div className="row pt-1 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start">
          <div className="form-check form-switch d-flex flex-row align-items-center">
            <input className="form-check-input" type="checkbox" id="selectTimer" onChange={timerSwitch}></input>
            <label className="form-check-label ms-2" htmlFor="selectTimer"><span className={style.train}>Train</span>/<span className={style.compete}>Compete</span></label>
          </div>
        </div>
      </div>
      <div className="row pt-5 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start">
          <p>game developed by</p>
        </div>
      </div>

      {/* Button trigger modal */}
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="openModal">
        Launch static backdrop modal
      </button>

      {/* Modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={timerSwitch}></button>
            </div>
            <div className="modal-body text-center">
            <h1 className="modal-title larger mt-5 mb-5 fw-bold" id="staticBackdropLabel">Congratulation on finishing game!</h1>
            <h1>Operation: <span className="larger" style={{"color" : "green"}}>{operation}</span></h1>
            <h1>Difficulty: <span  className="larger" style={{"color" : "green"}}>{difficulty}</span></h1>
            <h1>Time:  <span className="larger" style={{"color" : "green"}}>{(hour < 10) ? ("0" + hour) : (hour)}</span>
                :
                <span className="larger" style={{"color" : "green"}}>{(minutes < 10) ? ("0" + minutes) : (minutes)}</span>
                :<span className="larger" style={{"color" : "green"}}>{(seconds < 10) ? ("0" + seconds) : (seconds)}</span>
            </h1>
            <img src={(localStorage.getItem("avatar") ? (localStorage.getItem("avatar")) : (demoavatar))} alt="avatar" className="w-25 me-3" id="avatar" onClick={() =>props.setPage("avatar")}></img>
            <div id="fireworks" className="pyro">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}


export default MainScreen;