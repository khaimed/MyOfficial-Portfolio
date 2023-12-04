import "./SocialMediaIcon.css"
import Info from "../../data/user"

function SocialMediaIcon() {
  return (
    <div className="socialmedia">
      <a href={Info.socialMedia.facebook} target="_blank" rel="noreferrer noopener">
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
      </a>
      <a href={Info.socialMedia.instagram} target="_blank" rel="noreferrer noopener">
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href={Info.socialMedia.youtube} target="_blank" rel="noreferrer noopener">
        <i className="fa fa-youtube-square" aria-hidden="true"></i>
      </a>
      <a href={Info.socialMedia.linkedin} target="_blank" rel="noreferrer noopener">
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href={Info.socialMedia.github} target="_blank" rel="noreferrer noopener">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <a href={Info.socialMedia.whatsapp} target="_blank" rel="noreferrer noopener">
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  )
}

export default SocialMediaIcon