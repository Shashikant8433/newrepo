import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="trophy">
          <img src="/assets/1.png" alt="Trophy" className="img1" />
        </div>
        <div className="main">
          <img src="/assets/logo.png" alt="logo" className="logo" />
          <h5>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img
            src="/assets/2.png"
            alt="Award presenting ceremony"
            className="img2"
          />
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div>
        <div className="bottom">
          <p className="btm-mar">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <img src="../assets/3.png" alt="Products" className="img3" />
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
          <hr color="#ec3237" width="90%" />
          <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>

          <p className="lh">
            <span className="span">CHEMICALS & PROCESS</span>
            <span className="span">POWER</span>
            <span className="span">WATER & WASTE WATER</span>
            <span className="span">OILS & GAS</span>
            <span className="span">PHARMA</span>
            <span className="span">SUGARS & DISTILLERIES</span>
            <span className="span">PAPER & PULP</span>
            <span className="span">MARINE & DEFENCE</span>
            <span className="span">METAL & MINING</span>
            <span className="span">FOOD & BEVERAGE</span>
            <span className="span">PETROCHEMICAL & REFINERIES</span>
            <span className="span">SOLAR</span>
            <span className="span">BUILDING</span>
            <span className="span">HVAC</span>
            <span className="span">FIRE FIGHTING</span>
            AGRICULTURE & RESIDENTIAL
          </p>
        </div>
        <div className="footer">
          <div className="o">
            <a href="tel:+911800 200 1234">
              <img
                src="/assets/phone-square-alt-solid.svg"
                className="ph"
                alt="phone icon"
              />
              1800 200 1234
            </a>
          </div>
          <div className="tw">
            <a href="http://facebook.com">
              <img
                src="/assets/facebook-brands.svg"
                className="fb"
                alt="facebook icon"
              />
              www.facebook.com/cripumps
            </a>
          </div>
          <div className="th">
            <a href="http://www.crigroups.com">
              <img src="/assets/domain.png" className="ws" alt="website icon" />
              www.crigroups.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
