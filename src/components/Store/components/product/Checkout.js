import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { UseCart } from '../../../../CartContext'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
        container:{
           display:'flex',
           margin:'100px',
           justifyContent:'space-between',
           padding:'30px',
           marginLeft:'100px'
        },
        mainContainer:{
           width:'55%',
           display:'flex',
        },

        aboutCloth:{
           marginLeft:'20px'
        },
        title:{
            fontWeight:'bolder',
             fontSize:'20px'
        },
        img:{
         border:'1px solid lightgrey',
         borderRadius:'10px',
         padding:'5px'
        },
        desc:{
             color:'grey',
             fontSize:'14px',
             width:'250px'
        },
        specsContainer:{
           width:'45%',
           display:'flex',
           justifyContent:'space-between',
           alignItems:'center'
        },
        quantity:{
              fontWeight:'bold',
              background:'lightgrey',
              borderRadius:'5px'
        },
        span:{
               padding:'10px',
               '&:hover':{
                 cursor:'pointer'
               }
        },
        totalprice:{
           marginRight:'10px'
        },
        deleteButton:{
           marginLeft:'10px',
           border:'none',
           background:'none'
        }
})

function Checkout() {

   const {state:{cartItems},dispatch} = UseCart()
   const [qty,setQty] = useState(1)
   // const Price = cartItems[0].price.slice(0,cartItems[0].price.length-4)
   // console.log(Price)
   // const [totalPrice,setTotalPrice] = useState(Price)
      const classes=useStyles()
  return (<>
     { cartItems.length>0 ? ( <>
     {
        cartItems.map((item,key)=>( 
        <div className={classes.container} key={key.id}>
         <div className={classes.mainContainer}>
                 <div className={classes.img}>
                 <img src={item.src} height="150px" />
                  </div>
                  <div className={classes.aboutCloth}>
                      <div className={classes.title}>{item.title}</div>
                      <div className={classes.desc}>{item.desc}</div>
                  </div>
               </div>
               <div className={classes.specsContainer}>
                  <div className={classes.quantity}>
                      <span className={classes.span} onClick={()=>{
                        setQty(qty-1)
                        // setTotalPrice(totalPrice - parseInt(item.price.slice(0,item.price.length-4)))
                        }}>-</span>
                      <span style={{padding:"10px"}}>{qty}</span>
                      <span className={classes.span} onClick={()=>{
                         setQty(qty+1)
                        //  setTotalPrice(totalPrice + parseInt(item.price.slice(0,item.price.length-4)))
                         }}>+</span>
                  </div>
                  <div className={classes.price}>
                  {item.price}
                  </div>
                  <div className={classes.priceAndDelete}>
                      <span className={classes.totalprice}>   </span>
                      <button className={classes.deleteButton} onClick={()=>{
                         dispatch({
                            type:'REMOVE_FROM_CART',
                            payload: item
                         })
                      }}><DeleteIcon/></button>
                  </div>
         </div>
       </div>))
     }
     </>   
       ): (<div> <h2 style={{marginTop:"100px"}}>cart is empty</h2> </div>)}
    </>
  )
}

export default Checkout
