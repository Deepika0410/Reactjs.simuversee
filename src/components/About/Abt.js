import React from 'react'
import './Abt.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import img3 from '../../images/Home/img3.png'
import pic2 from '../../images/Picture2.png'
import t1 from '../../images/t1.png'
import t2 from '../../images/t2.png'
import t3 from '../../images/t3.png'
import t4 from '../../images/t4.png'
function Abt() {
  return (
    <div className='abt_container'>
     <div class="container-fluid c1">
      <div class="row"> 
     <div class="col-sm-12">  

     <h3 style={{fontSize:"26px"}}><b className="simu">S</b>imu<b className='simu'>V</b>erse Services
    </h3>
      </div>
     </div>
     <hr />
     <div class="row"> 
        <div class="col-lg-5 col-md-12 ">
            <img src={pic2} alt="img1" className="about-img" height="80%" />
        </div>
        <div class="col-lg-7  ">
            
              <h5 style={{fontSize:"22px", fontWeight:"100"}} >
                The SimuVerse team is a unique blend of mathematicians, software developers, and artists, and is ready to take up any challenging custom project.
              </h5>
              <br/>
              <div class=" col-sm-8 col-md-12 para1">
              <ul>
                <li>3D math and algorithms, CPU and GPU optimization</li>
                <li>Web, desktop, mobile (iOS, Android, Unity3D), and cloud solution development</li>
                <li>3D graphics: 3D engines, photo-realistic rendering, material shaders. V-Ray, Unity3D and Unreal Engine.
</li>
                <li>3D and 2D art, design, sculpturing, rigging, and animation</li>
                <li>3D clothes design, animation, and rendering</li>
                <li>3D body and face scanning.</li>
              </ul>
              </div>
              
            
        </div>
       </div>
       </div>
     <div className='comp6_container'>
            <div className='comp6_wrapper'>
                <h2 className='comp6_wrapper-title abt_heading'>
                    Rapidly evolve your supply chain and reduce fashion waste with intelligent 3D product modelling.
                </h2> 
                <section className='comp6_wrapper-model'>
                    <h2>
                        3D Model Viewer and Designer
                    </h2>
                    <img src={img3} alt="Img" />
                </section>
                
                <section className='comp6_wrapper-body'>
                <p>
                    SimuVerse’s digital modelling software will allow your retail business to design photorealistic products quickly and remotely.
                </p>
                    <h2>Sustainable Supply Chain</h2>
                    Become a driving force in the push for sustainable fashion with a digital supply chain that significantly reduces material waste.
                    <h2>Efficient Revisions</h2>
                    Eliminate physical samples, reduce production time and make fast corrections with accurate depictions of the fabric fit, form and drape.
                    <h2>Fast to Market</h2>
                    Digital sampling drastically accelerates your time to market. Stay agile with evolving fashion trends and beat your competitors to market.
                    <h2>On-Demand Manufacturing</h2> 
                    Sampling, refining and showcasing products digitally allows you the added flexibility of on-demand manufacturing, preventing excess inventory.

                 
                </section>
            </div>    
        </div>
    </div>
    
  )
}

export default Abt