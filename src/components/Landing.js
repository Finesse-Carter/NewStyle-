import React from "react";
import "../css/LayOut.css";
import { Typography } from "@material-ui/core";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { Link } from "react-router-dom";
import "react-awesome-slider/dist/styles.css";
import img1 from "../image/photo-1513298666969-adb84fcb4f67.jpg";
import img2 from "../image/joshua-rawson-harris-L2kkaayv3YY-unsplash.jpg";
import img3 from "../image/mike-von-_i9Sil-9fak-unsplash.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider({ imgs }) {
  return (
    <AutoplaySlider
      play={true}
      interval={1000}
      animation="cubeAnimation"
      className="LandingSlider"
      fillParent={true}
      buttons={false}
      bullets={false}
      organicArrows={false}
    >
      {imgs.map((img) => {
        return (
          <div>
            <img src={img} alt="landing" />
          </div>
        );
      })}
    </AutoplaySlider>
  );
}

function Title() {
  return (
    <Typography
      variant="h1"
      color="primary"
      style={{ fontFamily: "Lobster, cursive", fontSize: "20rem" }}
    >
      Style
    </Typography>
  );
}

function Landing() {
  return (
    <div className="backGroundImg">
      <Slider imgs={[img1, img2, img3]} />
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10",
          top: 0,
          left: 0,
          flexDirection: "column",
        }}
      >
        <Title />
        <Typography variant="h2">
          <>
            <Link to="/login" className="linkWhite">
              Login
            </Link>{" "}
            <Link to="/SignUp" className="linkWhite">
              SignUp
            </Link>
          </>
        </Typography>
      </div>
    </div>
  );
}
export default Landing;
