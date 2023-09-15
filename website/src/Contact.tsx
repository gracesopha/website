import * as React from "react";
import * as ReactDOM from "react-dom";
import github from "./imgs/github.png"
import linkedin from "./imgs/linkedin.png"
import mail from "./imgs/mail.png"
//<img id="github" alt="github" src={}/>


export const Contact: React.FC = () => {
    const emailAddress = 'gdsopha@gmail.com';
    return (
        <div>
            <h1 className="Banner">grace sopha</h1>
            <div className="socials">
                <div>
                <p>I appreciate your interest! As far as social media, I am on LinkedIn and Github.
                    Please do not hesitate to contact me via email as well at <a href={`mailto:${emailAddress}`}>gdsopha@gmail.com</a> for work related inquiries. 
                    I will be in touch as soon as possible!
                </p>
                </div>
                <div>
                <a href={`mailto:${emailAddress}`}>
                <img id="github" alt="github" className="logo" src={mail}/>
                    </a>
                </div>
                <div>
                <a
                href="https://github.com/gracesopha"
                target="_blank"
                rel="noreferrer"
                >
                <img id="github" alt="github" className="logo" src={github}/>
                </a>
                </div>
                <div>
                <a
                href="https://www.linkedin.com/in/grace-sopha/"
                target="_blank"
                rel="noreferrer"
                >
                <img id="linkedin" alt="linkedin" className="logo" src={linkedin}/>
                </a>
                </div>
            </div>
        </div>
    );
  };
  
  export default Contact;
  