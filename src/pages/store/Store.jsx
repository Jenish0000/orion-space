import React from 'react'
import './store.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Store = () => {
  return (
<div className="storeContainer">
  <div className="storeContent">
       <div className="leftstoreContent">
       <img src="/assets/images/productOne.jpg" className='storeproductOneImage'/>
       </div>
       <div className="rightStoreContent">
       <p className='productOneOfStore'>
            NEPAL-PQ1: PocketQube Training Kit
            </p>
            <p className="productOneOfStoreDisc">
            The Training Kit was designed so that anybody can get started in building and 
            PocketQube and launch it in space. We also provide training to your 
            college/university and team once you buy the kits.
             The kits have already reached more than 14 countries worldwide. 
            </p>
          

          <div className="storeBuyBtnWrapper">
          <a className="storeBuyBtn" href='https://www.tindie.com/products/orionspace/pikoqube-pocketqube-training-kit/' target="_blank">
                Buy
                <ShoppingCartOutlinedIcon
                style={{
                  fontSize:"14px",
                  marginTop:"3px",
                  marginLeft:"3px"
                }}
                />
          </a>
          </div>
       </div>
  </div>
</div>
  )
}

export default Store