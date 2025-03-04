import React from 'react'
import { all_items } from '../../../assets/assets'
import { useNavigate } from 'react-router-dom'
import './recent.css'
import useProductItem from '../../../Zustand/useProductItem'

const Recent = () => {
  const navigate = useNavigate()
  const { setProduct } = useProductItem()
  const handleNavigation = (route,item) =>{
    navigate(route)
    localStorage.setItem("product", JSON.stringify(item))
  }

  return (
    <div className='recent-wrap'>
      <div className="recent-header">
        <h2>Recently added</h2>
      </div>
      <div className="recent">
        {all_items.map((item) => (
            <div key={item.id} className="recent-item" onClick={()=> {setProduct(item);handleNavigation("/product", item)}}>
                <img src={item.image} alt={item.name} />
                <h3>Ksh {item.price}</h3>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Recent
