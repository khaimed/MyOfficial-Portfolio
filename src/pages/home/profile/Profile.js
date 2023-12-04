import "./Profile.css"
import React from "react";
import Info from "../../../data/user";
import Introduction from "./introduction/Introduction";
import BackgroundAnimate from "./backgroudanimate/BackgroundAnimate";
import SocialMediaIcon from "../../../components/socialmediaicons/SocialMediaIcon"
import Footer from "../../../components/footer/Footer"

const Profile = () => {
  return (
    <>
      <Introduction />
      <BackgroundAnimate />
      <div className="content">
          <div className="img-content">
              <img src="images/profile.png" alt="Profile" />
          </div>
          <div className="text-content">
              <h2 className="title">{Info.profileContent.fisrtName + " " + Info.profileContent.lastName }</h2>
              <p className="sub-title">{Info.profileContent.domaine}</p>
              <p className="paragraph">{Info.profileContent.paragraph}</p>
              <SocialMediaIcon />
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Profile