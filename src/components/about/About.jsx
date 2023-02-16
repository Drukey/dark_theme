import "./about.css";
import Quote from "../../img/quote.jpg";
import Mine from "../../img/mine.jfif";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Mine}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm an ICT personnel based in Dar es Salaam, Tanzania. I graduated from the <a style ={{textDecoration: "none" }} href="https://www.udom.ac.tz/staff/7/college%20of%20informatics%20and%20virtual%20education"><b style= {{ color: "#0073e6"}} >University of Dodoma(UDOM)</b></a>.
        </p>

        <p className="a-desc"> 
         I have 3+ yrs in <b>IT Infrastucture, </b><b>Cyber Security, </b><b>Backup and Disaster Recovery Management, </b><b>Servers and Storage solutions.</b>

        </p>

        <p className="a-desc">
        Throughout the years I have gained experince from accomplishing projects within a specific time. I've had a chance to support various clients as 
           <a  style ={{textDecoration: "none" }} 
          href=""><b style ={{ color:"Gre#43B02A"}}> CRDB Bank, </b>
          <b style ={{ color:"Red"}}> DTB Bank, </b>
          <b style ={{ color:"Blue"}}>Reliance Ins, </b>
          <b style ={{ color:"Black"}}>TIPER, </b>
          <b style ={{ color:"Red"}}>ORXY Energies. </b>
          </a>I learned to deliver top quality support and value to a customer's business.
        </p>

       



        <div className="a-award">
          <img src={Quote} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Motivational Quote</h4>
            <p className="a-award-desc">
              "None..." 
            </p>
            <p className="a-award-desc-quo">
              ~Unkown 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
