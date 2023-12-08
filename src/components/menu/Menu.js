import "./Menu.css"
import React from 'react'

const Menu = ({ isOpen }) => {
  // const [textContent, updateText] = React.useState(
  //   "type and select to cut or copy text."
  // );
  const [hoverQuad, updateQuad] = React.useState("");
  const [activeQuad, updateActive] = React.useState("");
  // const [showError, updateError] = React.useState(false);
  let deBounce = null;
  
  const handleClick = quad => {
    if (quad === activeQuad) {
      updateActive("");
    } else {
      updateActive(quad);
    }
  };

  const handleExit = () => {
    deBounce = setTimeout(updateQuad(""), 300);
  };
  let rowA = "row ";
  let rowB = "row ";
  let colA = "column bg1 ";
  let colB = "column bg2 ";
  let colC = "column bg3 ";
  let colD = "column bg4 ";

  // it's kind of ugly but effective
  // just swapping some classnames
  // based on active or just hover
  // css flex does the rest

  if (activeQuad === "") {
    switch (hoverQuad) {
      case "colA":
        rowA += "onHover";
        rowB += "offHover";
        colA += "onHover";
        colC += "onHover";
        colB += "offHover";
        colD += "offHover";
        break;

      case "colB":
        rowA += "onHover";
        rowB += "offHover";
        colB += "onHover";
        colD += "onHover";
        colA += "offHover";
        colC += "offHover";
        break;

      case "colC":
        rowA += "offHover";
        rowB += "onHover";
        colC += "onHover";
        colA += "onHover";
        colB += "offHover";
        colD += "offHover";
        break;

      case "colD":
        rowA += "offHover";
        rowB += "onHover";
        colD += "onHover";
        colB += "onHover";
        colA += "offHover";
        colC += "offHover";
        break;

        default: break;
    }
  } else {
    switch (activeQuad) {
      case "colA":
        rowA += "active";
        rowB += "off";
        colA += "show";
        colC += "show";
        colB += "hide";
        colD += "hide";
        break;

      case "colB":
        rowA += "active";
        rowB += "off";
        colB += "show";
        colD += "show";
        colA += "hide";
        colC += "hide";
        break;

      case "colC":
        rowA += "off";
        rowB += "active";
        colA += "show";
        colC += "show";
        colB += "hide";
        colD += "hide";
        break;

      case "colD":
        rowA += "off";
        rowB += "active";
        colB += "show";
        colD += "show";
        colA += "hide";
        colC += "hide";
        break;

        default: break;
    }
  }

  return (
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>

      <div className={rowA}>

        <div
          className={colA}
          onMouseEnter={() => {
            updateQuad("colA");
          }}
          onMouseLeave={() => {
            handleExit();
          }}
        >
          <div
            role="button"
            className="ct colA"
            onClick={() => {
              handleClick("colA");
            }}
          >
            <label>About me</label>
            <span></span>
          </div>
        </div>

        <div
          className={colB}
          onMouseEnter={() => {
            updateQuad("colB");
          }}
          onMouseLeave={() => {
            handleExit();
          }}
        >

          <div
            role="button"
            className="ct colB"
            onClick={() => {
              handleClick("colB");
            }}
          >
            <label>Blog</label>
            <span></span>
          </div>

        </div>

      </div>

      <div className={rowB}>

        <div
          className={colC}
          onMouseEnter={() => {
            updateQuad("colC");
          }}
          onMouseLeave={() => {
            handleExit();
          }}
        >
          <div
            role="button"
            className="ct colC"
            onClick={() => {
              handleClick("colC");
            }}
          >
            <label>Portfolio</label>
            <span></span>
          </div>
        </div>

        <div
          className={colD}
          onMouseEnter={() => {
            updateQuad("colD");
          }}
          onMouseLeave={() => {
            handleExit();
          }}
        >
          <div
            role="button"
            className="ct colD"
            onClick={() => {
              handleClick("colD");
            }}
          >
            <label>Contact</label>
            <span></span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Menu