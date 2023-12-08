import "./Footer.css"

const currentDate = new Date();

function Footer() {
  return (
    <div className="footer">2017 - { currentDate.getFullYear() } © KhAiMed</div>
  )
}

export default Footer