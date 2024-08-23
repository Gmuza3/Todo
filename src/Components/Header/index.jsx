import weather from "../Images/weather.png"
import "./style.css"

const Header =() =>{
    return(
        <div className="header-zone">
            <div className="img-zone">
                <img src={weather} alt="" />
            </div>
            <div className="box">
                <div className="text-zone">
                    <span></span>
                    <h1>to-do now</h1>
                    <span></span>
                </div>
                <div className="icon-zone">
                    <span></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 33 33" fill="none">
                        <path d="M16.5135 20.4265H12.5135V16.4265L24.5135 4.42651L28.5135 8.42651L16.5135 20.4265Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21.5135 7.42651L25.5135 11.4265" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M27.5135 15.4265V26.4265C27.5135 26.6917 27.4082 26.9461 27.2206 27.1336C27.0331 27.3212 26.7787 27.4265 26.5135 27.4265H6.51352C6.2483 27.4265 5.99395 27.3212 5.80641 27.1336C5.61888 26.9461 5.51352 26.6917 5.51352 26.4265V6.42651C5.51352 6.1613 5.61888 5.90694 5.80641 5.71941C5.99395 5.53187 6.2483 5.42651 6.51352 5.42651H17.5135" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
export default Header;