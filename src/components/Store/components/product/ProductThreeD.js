import React from 'react'
import './ProductThreeD.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import {dataProduct} from './ProductThreeDdata'
const ProductThreeD = () => {
    let circle =<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
  </svg>;
  const location =useLocation();
 const  navigate=useNavigate();
const productTopicHandler = (i) => {
    console.log(i);
    navigate('/shop/productThreeDView', { state: i });
  };

  const [sends,setSends] =useState([]);
  console.log('hello data',sends)


  const productTakeHandler = (p) => {
    console.log('bag data',p);
     navigate('/bag', { state: p });
     console.log('navigatedata',location.state)
  };


  const [size,setSize] =useState('')
  // const [remove,setRemove] =useState(dataProduct);
  const [remove1,setRemove1] =useState(dataProduct);


  console.log(size);



const removeHandle=(id)=>{
const filterData= remove1.filter((item)=>
item.id  !== id
)
setRemove1(filterData)
}
  return (
    <div>
      {
         console.log(remove1) 
      }
        {/* <div className='container-lg'> */}
            <div className='row head-1'  style={{textAlign:"center"}}>
                <h1>
                    How does it look?
                    <br/>
                    <p className='  head-2'>
                Click on the product you want to find the best fit of and once you find the best fit you can add
                 them to bag. But if you didn’t like the product keep browsing for more. 
                 </p>
                    </h1>
                    </div>

                    <div className='row justify-content-around '>
                        
                        <div className='col-md-6'>
                                
                           
                               {
                                   remove1.map((item,index)=>(
                                        
                        <div className='row  justify-content-around centerVerical' key={index}>
                        <div className='col-2 mx-1 '>
                        <input class="form-check-input" 
                      onClick={() => {
                        productTopicHandler(item);
                        setSends(item);
                      }}
                        type="radio" 
                        
                        style={{backgroundColor:" #F8444F",width:"25px",height:"25px"}}
                        />
                        </div>
                        <div className='col-4 '>
                       
                            <div className='cardUnder'>
                                <img src={item.srcA}  alt="" className='img-fluid'/>
                        </div>
                        </div>
                        <div className='col-auto' style={{textAlign:"end"}}>
                            <p className='brand'>{item.brand}</p>
                            <p className='product'>{item.productName}</p>
                            <p className='remove text-start'
                            onClick={()=>(
                                removeHandle(item.id)
                            )
                        }
                            > 
                            {circle}
                            remove
                            </p>

                        </div>
                       </div>
                                    ))
                                }
                                 <div className='row justify-content-around '>
                        <div className='col-auto g-0 ' >
                        <button className='btn  whSet'
                       onClick={() => {
                        productTakeHandler(sends);
                      }}
                        >
                          Add to bag
                          </button>
                             </div>
                        <div className='col-auto g-0 '> 
                        <button className='btn  whSet-b'>Keep Browsing</button>
                        </div>
                             </div>

                        </div>
                       
                        <div className='col-md-4'>
                            <div className='p-3' style={{border:"2px solid #F8444F",borderRadius:'10px'}} >
                            <div className='row justify-content-center '>
                               
                                 {
                                    location.state.srcB.map((item,index)=>(
                                        <div className='backGrey' key={index}>
                                        <img src={item}  alt="" className='img-fluid'/>
                                    </div>
                                    ))
                                } ;
                               

                            </div>
                            <div className='row text-center m-0'><p id="bestFit">Best Fit</p></div>
                            <div className='row justify-content-center'>
                              <div className='col g-0'>
                               <div className='inputSize '>
                               <div class="col-3 g-0">
    <button type="text" 
    class=" space px-4 py-1"
    value="S"
       onClick={(i)=>{
        setSize(i.target.value)
    }}>S</button>

  </div>
  <div class="col-3  g-0">
    <button type="text" 
    class=" space px-4 py-1"
    value="M"
       onClick={(i)=>{
        setSize(i.target.value)
    }}>M</button>
    
  </div>
  <div class="col-3 g-0">
  <button type="text" 
    class=" space px-4 py-1"
    value="L"
       onClick={(i)=>{
        setSize(i.target.value)
    }}>L</button>
    
  </div>
                               </div>
                              </div>
                            </div>
                            </div>
                        </div>
                    </div>
            
        {/* </div> */}
    </div>
  )
}

export default ProductThreeD