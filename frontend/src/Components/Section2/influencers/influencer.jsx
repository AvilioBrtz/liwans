import React from 'react'
import { BsStars } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { inf_pick } from '../../../assets/assets';
import { useNavigate } from 'react-router-dom'
import './influencer.css'
import useProductItem from '../../../Zustand/useProductItem';

const Influencer = () => {
  const navigate = useNavigate()
  const { setProduct } = useProductItem()
  const handleNavigation = (route,pick) =>{
    navigate(route)
    localStorage.setItem("product", JSON.stringify(pick))
  }

  return (
    <div className='influencer-wrap'>
      <div className="inf-header">
        <IoIosStarOutline size={30}/>
        <h2>influencer looks</h2>
        <BsStars color='gold' size={20}/>
      </div>
       <div className="inf-content">
            {inf_pick.map((pick)=>(
              <div key={pick.id} className='inf-pick' onClick={()=> {setProduct(pick);handleNavigation("/product", pick)}}>
                  <img src={pick.image} alt="pick" />
                  <h3>Ksh {pick.price}</h3>
              </div>
            ))}
            </div>
    </div>
  )
}

export default Influencer
