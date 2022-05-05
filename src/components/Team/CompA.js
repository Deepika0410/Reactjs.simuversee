import React from "react";
import "./CompA.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo_sm.png";
import rahul from "../../images/rahul_sir.png";
import chiran from "../../images/dr_chiranjiv.jpg";
import a_ranjan from "../../images/amit_ranjan.png";
import dominic from "../../images/dominic_pariera.png";
import a_nathan from "../../images/arun_nathan.png";

import mvp from "../../images/mvp.png";
import forbes from "../../images/forbes.png";
import d_science from "../../images/data_science.png";
function CompA() {
    return (

        <div>

            <nav className="navbar sticky-top navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                        <img src={logo} alt="nav_logo" />
                    </a>
                    <span class="navbar-text">
                        Our Leadership Team
                    </span>
                </div>
            </nav>

            <div className="row con1">
                <div className="col-md-5" textAlign="center">

                    <div class="table-responsive">
                        <table class="table  align-middle ">

                            <tbody>
                                <tr>
                                    <td> <img src={rahul} alt="rahul_sir" className="img_team" /></td>
                                </tr>
                                <tr>
                                    <td><h4 className="lead_name">Mr. Rahul Nathan</h4>
                                        <h6>PMP</h6>
                                    </td>
                                </tr>
                                <tr>

                                    <td><img src={mvp} alt="rahul_sir_mvp" className="exp-img" /></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
                <div className="col-md-7 lead_desc" >
                    <ul>
                        <li>  Rahul Nathan is leading this project.   </li>
                        <li>  Rahul brings about 20+ years of industry experience in the Hospitality, Information Technology, entrepreneurship and Entertainment industry . He done casting for a few advertisements having been part of several entertainment ventures.
                        </li>
                        <li>  He has won several awards and accolades in the Information Technology space, some of them being first in India.
                        </li>
                        <li>  Currently he is the CEO of Unruffled Feathers Enterprises Private Limited which is a fully technology enabled Internet of People platform solving the business needs of the entertainment, film and theater  industry.
                        </li>

                    </ul>

                </div>
            </div>
            <div className="row con2">
                <div className="col-md-5">

                    

                   
                    <div class="table-responsive" >
                        <table class="table align-middle" >

                            <tbody>
                                <tr>
                                    <td colspan="2"> <img src={chiran} alt="dr_chiranjiv" className="img_team" /></td>
                                </tr>
                                <tr>
                                    <td colspan="2"> <h4 className="lead_name">Dr. Chiranjiv Roy</h4></td>
                                </tr>
                                <tr>

                                    <td><img src={forbes} alt="croy_forbes" className="exp-img" /></td>
                                    <td><img src={d_science} alt="croy_ds" className="exp-img" /></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-7 lead_desc" >
                    <ul>
                        <li>  Dr. Chiranjiv Roy brings 20+ years of data driven digital product development experience working across sectors like banking, manufacturing, automobile and media industry with Fortune 100 companies as Nissan Motors, Mercedes Benz and Hewlett Packard.
                        </li>
                        <li>  He holds a PhD in Applied Data Analytics (Research Grant from Mercedes Benz) with research across Max Planck University, Germany and IIT – BHU, India and also filed 28+ patents across his career in areas of Artificial Intelligence and Digital Product development.

                        </li>
                        <li>  He is a Forbes Technology Council Member – 2021, also holds advisory positions in International Group of Artificial Intelligence (IGOAI, Middle East) and Visiting Faculty for various IIMs and IITs in India.

                        </li>
                        <li>  As the Product Development Head and Chief Data Science Advisor for SPANNDEEPP, Dr Roy has developed the algorithms and architecture and driving it to the product.

                        </li>

                    </ul>

                </div>
            </div>
            <div className="row con1">
                <div className="col-md-5" textAlign="center">

                    <img src={a_ranjan} alt="amit_ranjan" className="img_team" />


                    <h4 className="lead_name">Mr. Amit Ranjan Gupta</h4>



                </div>
                <div className="col-md-7 lead_desc" >
                    <ul>
                        <li>  Amit brings 12+ years of leadership experience across IT, Banking and finance, fintech.
                        </li>
                        <li> An alumni of Indian School Of Business ,Hyderabad and ICICI Bank business leadership program, he brings a wealth of managerial and leadership experience in B2B business development, corporate banking, product growth, strategy and fund raising.

                        </li>
                        <li> He was in leadership positions  on 0-1 stints as head of product and business across India.  He is product growth mentor of multiple start ups and part of advisory board.

                        </li>
                        <li>  With tons of experience across IT, Banking and finance and tech, he has proven track record of helping founders in monetizing their idea in internet/tech space.

                        </li>

                    </ul>

                </div>
            </div>
            <div className="row con2">
                <div className="col-md-5">

                    <img src={dominic} alt="dominic" className="img_team" />

                    <h4 className="lead_name">Dominic Pariera</h4>

                </div>
                <div className="col-md-7 lead_desc" >
                    <ul>
                        <li>  With 20+ years of deep cross-cultural exposure, he has built a reputation for delivering strong outcomes on global projects in India, USA, Australia, South Africa and Kenya.

                        </li>
                        <li> He is experienced in contact center operations, customer service centers, change / re-engineering projects, talent development and cross-cultural communication, Learning & Development & Human Resources.


                        </li>
                        <li>  He is instrumental in designing of learning content,facilitation and providing on-going coaching for targeted business needs, defining training roadmaps, process mapping, L&D structures and re-defining customer experience and people management in the HR space.


                        </li>
                        <li>  "Passion Drives Excellence" is his mantra.


                        </li>
                        <li>
                            He is driving HR and operations for Spanndeepp.

                        </li>

                    </ul>

                </div>
            </div>
            <nav className="navbar sticky-top navbar-light bg-light">
                <div className="container-fluid" style={{textAlign:"Center"}} >
                <a className="navbar-brand" href="#">
                        <img src={logo} alt="nav_logo" />
                    </a>
                    <span class="navbar-text">
                        Our Advisor Team
                    </span>
                   
                </div>
            </nav>

            <div className="row con1">
                <div className="col-md-5" textAlign="center">

                    <img src={a_nathan} alt="arun_nathan" className="img_team" />


                    <h4 className="lead_name">Mr. Arun Kumar Nathan</h4>



                </div>
                <div className="col-md-7 lead_desc" >
                    <ul>
                        <li>  Arun brings 40+ years of experience in leading large multi-national corporations and adds an edge in corporate and economies of scale strategy.
                        </li>
                        <li>  An alumni of Birla Institute of Technology, Mesra and IIM Ahmedabad besides having participated in several other technical and management training programs ,he brings a wealth of managerial and leadership experience through his multiple domain knowledge and wide network of acquaintances.

                        </li>
                        <li>  He was in senior managerial positions in SIEMENS across Germany , Iran and India and later CEO of the Indian subsidiary of the German MNC RITTAL and later served as Advisor and Member of the Board of several other MNCs established in India.

                        </li>
                        <li>  Besides being skilled in all aspects of management Arun also is widely travelled across the globe and is fluent in many languages including German .

                        </li>
                        <li> He is the founder of Unruffled Feathers Enterprises Private limited.


                        </li>

                    </ul>

                </div>
            </div>
          
        </div>

    );
}
export default CompA;