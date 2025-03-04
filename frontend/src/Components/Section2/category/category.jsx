import React from 'react'
import './category.css'
import { category_menu } from '../../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Category = ({setCategory}) => {
  const navigate = useNavigate()
  const handleNavigation = (route, pick) =>{
    navigate(route)
  }
  return( 
    <div className='category-wrap'>
    <div className="category-header">
      <h2>Categories</h2>
    </div>
    <div className='category'>
      {
        category_menu.map((item) => (
          <div key={item.id} className='category-item' onClick={()=> {setCategory(item.name) ;handleNavigation("/category")}}>
            <img src={item.image} alt={item.name} />
            <h3 className='category-name'>{item.name}</h3>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Category
