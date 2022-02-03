import demoavatar from '../images/demoavatar.png';

import { useAsync } from 'react-async';
import { useState } from 'react';

import bear from '../images/animals/bear.png';
import bull from '../images/animals/bull.png';
import donkey from '../images/animals/donkey.png';
import eagle from '../images/animals/eagle.png';
import elephant from '../images/animals/elephant.png';
import elk from '../images/animals/elk.png';
import fox from '../images/animals/fox.png';
import hamster from '../images/animals/hamster.png';
import horse from '../images/animals/horse.png';
import koala from '../images/animals/koala.png';
import lion from '../images/animals/lion.png';
import panda from '../images/animals/panda.png';
import sloth from '../images/animals/sloth.png';
import turtle from '../images/animals/turtle.png';

import baseballcap from '../images/hat/baseball-cap.png';
import baseballcap1 from '../images/hat/baseball-cap (1).png';
import beanie from '../images/hat/beanie.png';
import bearhat from '../images/hat/bear-hat.png';
import beret from '../images/hat/beret.png';
import cap from '../images/hat/cap.png';
import cap1 from '../images/hat/cap (1).png';
import cowboyhat from '../images/hat/cowboy-hat.png';
import hat from '../images/hat/hat.png';
import hat1 from '../images/hat/hat (1).png';
import hat2 from '../images/hat/hat (2).png';
import hat3 from '../images/hat/hat (3).png';
import propeller from '../images/hat/propeller.png';
import santahat from '../images/hat/santa-hat.png';
import winterhat from '../images/hat/winter-hat.png';
import witchhat from '../images/hat/witch-hat.png';

import sunglasses from '../images/sunglasses/sunglasses.png';
import sunglasses1 from '../images/sunglasses/sunglasses (1).png'
import sunglasses2 from '../images/sunglasses/sunglasses (2).png'
// import sunglasses3 from '../images/sunglasses/sunglasses (3).png'
import sunglasses4 from '../images/sunglasses/sunglasses (4).png'
import sunglasses5 from '../images/sunglasses/sunglasses (5).png'
// import sunglasses6 from '../images/sunglasses/sunglasses (6).png'
import sunglasses7 from '../images/sunglasses/sunglasses (7).png'
import sunglasses8 from '../images/sunglasses/sunglasses (8).png'
import sunglasses9 from '../images/sunglasses/sunglasses (9).png'
import sunglasses10 from '../images/sunglasses/sunglasses (10).png'
import sunglasses11 from '../images/sunglasses/sunglasses (11).png'
import sunglasses12 from '../images/sunglasses/sunglasses (12).png'
import sunglasses13 from '../images/sunglasses/sunglasses (13).png'
import sunglasses14 from '../images/sunglasses/sunglasses (14).png'
import sunglasses15 from '../images/sunglasses/sunglasses (15).png'
import sunglasses16 from '../images/sunglasses/sunglasses (16).png'




let icons = {"animal" : localStorage.getItem("animal"), "hat" : localStorage.getItem("hat"), "sunglasses" : localStorage.getItem("sunglasses")};
let showdemoavatar = false;


function Avatar(props) {
  let transparency;
  let isDisabled;
  if (localStorage.getItem("animal") !== "") {
    transparency = ""
    isDisabled = false;
  } else {
    transparency = "transparent"
    isDisabled = true;
  }
  const [avatar, setAvatar] = useState("");
  const [canvas, setCanvas] = useState("d-none");
  const [opacity, setOpacity] = useState(transparency);
  const [disabled, setDisabled] = useState(isDisabled);

  const draw = (e, image) => {
    
      if (image === "animal") {
        icons.hat = "";
        icons.sunglasses = "";
        setOpacity("");
        setDisabled(false);
        showdemoavatar = false;
      }

      if (image === "hat" || image === "sunglasses") {
        if (icons.animal === "") {
          return
        }
      }

      if (image === "animal" && e.target.id === "") {
        setOpacity("transparent");
        showdemoavatar = true;
      }

      icons[image] = e.target.id;

      let canvas = document.getElementById("canvas");
        
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let image in icons) {
        if (icons[image] !== "") {
          const ctx = canvas.getContext('2d');
          const imageObj = new Image();
          imageObj.src = icons[image];

          if (image === "animal") {
              imageObj.onload = function() {
                // Smoother edges when drawing image on canvas, especcially due to dark bacground and transparent image edges are visible
                ctx.imageSmoothingEnabled=true;
                ctx.imageSmoothingQuality = "high";
                ctx.drawImage(imageObj, 0, 0.25*canvas.height, canvas.width, 0.75*canvas.height);
              };
          }

          if (image === "hat") {
              imageObj.onload = function() {
                ctx.imageSmoothingEnabled=true;
                ctx.imageSmoothingQuality = "high";
                ctx.drawImage(imageObj, 0.1375*canvas.width, 0, 0.725*canvas.width, 0.5*canvas.height);
              };
          }

          if (image === "sunglasses") {
            imageObj.onload = function() {
              ctx.imageSmoothingEnabled=true;
              ctx.imageSmoothingQuality = "high";
              ctx.drawImage(imageObj, 0.1375*canvas.width, 0.35*canvas.height, 0.725*canvas.width, 0.5*canvas.height);
            };
          }
        }
      }

      document.getElementById(image).childNodes.forEach(element => {
        if (element.id === e.target.id) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      })

      setAvatar("d-none");
      setCanvas("");
    }

    const saveAvatar = async () => {
      if (showdemoavatar === true) {
        localStorage.removeItem("avatar");
        localStorage.setItem("animal", "");
        localStorage.setItem("hat", "");
        localStorage.setItem("sunglasses", "");
        props.setPage("main");
      } else {
        const canvas = document.getElementById("canvas");
        const url = await canvas.toDataURL();
        localStorage.setItem("avatar", url);
        localStorage.setItem("animal", icons.animal);
        localStorage.setItem("hat", icons.hat);
        localStorage.setItem("sunglasses", icons.sunglasses);
        props.setPage("main");
      }
      
    }

    const changeUsername = (e) => {
      localStorage.setItem("username", e.target.value);
    }

    const cancel = () => {
      for (let image in icons) {
        icons[image] = localStorage.getItem(image);
      }
      props.setPage("main");
    }
    
  return(
    <div className="col d-flex flex-column align-items-center" id="mainscreen">
      <div className="row pt-3 pb-3 w-100  bg-dark">
        <div className="col-6 d-flex flex-row align-items-center justify-content-start" id="header">
          <img src={(localStorage.getItem("avatar") ? (localStorage.getItem("avatar")) : (demoavatar))} display={avatar} alt="avatar" className={"w-25 me-3 " + avatar} id="avatar" onClick={() => props.setPage("main")}></img>
          <canvas display={canvas} className={"w-25 me-3 " + canvas} id="canvas" width="200px" height="300px"></canvas>
          <input id="username" type="text" maxLength={10} defaultValue={(localStorage.getItem("username") ? (localStorage.getItem("username")) : ("Username"))} onChange={changeUsername}></input>
        </div>
      </div> 
      <div className="row pt-1 pb-1 w-100 bg-success d-flex justify-content-start">
      </div>
      <div className="row pt-3 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12">
          <h1>Choose avatar</h1>
        </div>
      </div>
      <div className="row pt-1 pb-1 mb-3 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start flex-wrap" id="animal">
          <img src={bear} alt="bear" className="animal me-3 mb-3" id={bear} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={bull} alt="bull" className="animal me-3 mb-3" id={bull} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={donkey} alt="donkey" className="animal me-3 mb-3" id={donkey} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={elephant} alt="elephant" className="animal me-3 mb-3" id={elephant} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={fox} alt="fox" className="animal me-3 mb-3" id={fox} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={hamster} alt="hamster" className="animal me-3 mb-3" id={hamster} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={horse} alt="horse" className="animal me-3 mb-3" id={horse} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={koala} alt="koala" className="animal me-3 mb-3" id={koala} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={lion} alt="lion" className="animal me-3 mb-3" id={lion} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={panda} alt="panda" className="animal me-3 mb-3" id={panda} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={sloth} alt="sloth" className="animal me-3 mb-3" id={sloth} onClick={(e, image) => draw(e, "animal")}></img>
          <img src={turtle} alt="turtle" className="animal me-3 mb-3" id={turtle} onClick={(e, image) => draw(e, "animal")}></img>
          <p id="" onClick={(e, image) => draw(e, "animal")}>none</p>
        </div>
      </div>
      <div className="row pt-1 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12">
          <h1>Personalize your avatar</h1>
        </div>
      </div>
      <div className="row pt-1 pb-5 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start flex-wrap" id="hat">
          <img src={beanie} alt="beanine" className={"animal me-3 mb-3 " + opacity} id={beanie} onClick={(e, image) => draw(e, "hat")}></img>
          <img src={beret} alt="beret" className={"animal me-3 mb-3 " + opacity} id={beret} onClick={(e, image) => draw(e, "hat")}></img>
          <img src={cap1} alt="cap1" className={"animal me-3 mb-3 " + opacity} id={cap1} onClick={(e, image) => draw(e, "hat")}></img>
          <img src={cowboyhat} alt="cowboy hat" className={"animal me-3 mb-3 " + opacity} id={cowboyhat} onClick={(e, image) => draw(e, "hat")}></img>
          <img src={hat} alt="hat" className={"animal me-3 mb-3 " + opacity} id={hat} onClick={(e, image) => draw(e, "hat")}></img>
          <img src={hat1} alt="hat" className={"animal me-3 mb-3 " + opacity} id={hat1} onClick={(e, image) => draw(e, "hat")}></img>
          <img src={hat2} alt="hat" className={"animal me-3 mb-3 " + opacity} id={hat2} onClick={(e, image) => draw(e, "hat")}></img>
          <img src={hat3} alt="hat" className={"animal me-3 mb-3 " + opacity} id={hat3} onClick={(e, image) => draw(e, "hat")}></img>
          <img src={winterhat} alt="winter hat" className={"animal me-3 mb-3 " + opacity} id={winterhat} onClick={(e, image) => draw(e, "hat")}></img>
          <img src={witchhat} alt="witch hat" className={"animal me-3 mb-3 " + opacity} id={witchhat} onClick={(e, image) => draw(e, "hat")}></img>
          <p id="" onClick={(e, image) => draw(e, "hat")}>none</p>
        </div>
      </div>
      <div className="row pt-1 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start flex-wrap" id="sunglasses">
          <img src={sunglasses} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses1} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses1} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses2} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses2} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses4} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses4} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses5} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses5} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses7} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses7} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses8} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses8} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses9} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses9} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses10} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses10} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses11} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses11} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses12} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses12} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses13} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses13} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses14} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses14} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses15} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses15} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <img src={sunglasses16} alt="sunglasses" className={"animal me-3 mb-3 " + opacity} id={sunglasses16} onClick={(e, image) => draw(e, "sunglasses")}></img>
          <p id="" onClick={(e, image) => draw(e, "sunglasses")}>none</p>
        </div>
      </div>
      <div className="row pt-1 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start">
          <button className="btn- btn-dark text-white me-3" onClick={saveAvatar} disabled={disabled}>confirm</button>
          <button className="btn- btn-dark text-white" onClick={cancel}>cancel</button>
        </div>
      </div>
      <div className="row pt-5 pb-1 w-100 bg-light d-flex justify-content-start">
        <div className="col-12 d-flex flex-row align-items-center justify-content-start">
          <p>game developed by</p>
        </div>
      </div>
    </div>
  )
}

export default Avatar;