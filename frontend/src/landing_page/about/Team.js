import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>
      <div className="row p-4 text-muted fs-6" style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
        <div className="col p-4 text-center">
            <img src='media/images/vbv.png' style={{borderRadius:'100%', width:'60%'}}></img>
            <h4 className="mt-5">Vaibhav Naiyar</h4>
            <h6>Developer</h6>
        </div>
        <div className="col p-5">
            <p>Vaibhav is building a Zerodha Clone as part of his web development journey. Passionate about tech and design, he’s actively exploring how real-world platforms are built.</p>
            <p>He is a self-taught developer with a keen eye for detail and a growing interest in frontend frameworks and clean UI/UX.</p>
            
            <p>Connect on <a  href="https://github.com/VaibhavNaiyar" style={{textDecoration:'none'}}>GitHub</a> / <a  href="www.linkedin.com/in/vaibhav-naiyar-07b817291" style={{textDecoration:'none'}}>LinkedIn</a></p>        
        </div>
      </div>
    </div>
  );
}

export default Team;
