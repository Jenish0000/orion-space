import React from 'react'
import './products.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
const Products = () => {
  return (
    <div className="produtsContainer">
      <div className="productHeadingWrapper">
      <h6 className='productsHeading'>
                  FEATURED INSIGHTS
                </h6>
      </div>
         <div className="productsContent">
           <div className="contentOneWrapper">
           <p className='smallHeading'>sanosat-1</p>
            <p className='productOneHeading'>
            Pioneering space exploration: Nepal's Sanosat-1 redefines innovation

            </p>
            <a href='#' className='continueHref'>
              Continue reading
              <CallMadeIcon
                className='arrowIcon'
              style={{
                fontSize:"14px",
                padding:"1px"
              }}
              />
              </a>
            </div>
            <div className="contentOneWrapper">
            <p className='smallHeadingTwo'>Nepal-PQ1</p>
            <p className='productTwoHeading'>         
            PocketQube Training: Revolutionizing space education with innovation
            </p>
            <a href='#' className='continueHref'>
              Continue reading
              <CallMadeIcon
              className='arrowIcon'
              style={{
                fontSize:"14px",
                padding:"1px"
              }}
              />
            </a>
           </div>
         </div>
    </div>
  )
}

export default Products