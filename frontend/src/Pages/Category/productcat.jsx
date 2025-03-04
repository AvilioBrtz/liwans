import React from 'react'
import './productcat.css'
import { category_menu } from '../../assets/assets'
import { all_items } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import useProductItem from '../../Zustand/useProductItem'
import Navbar from '../../Components/Navbar/navbar'

const ProductCategory = ({category, setCategory}) => {
  const navigate = useNavigate()
  const { setProduct } = useProductItem()
  const handleNavigation = (route, item) =>{
    navigate(route)
    localStorage.setItem("product", JSON.stringify(item))
  }

  return (
    <>
    <Navbar />
    <div className="category-container">
    <div className='category-wrapper'>
      <div className="category-header">
        {category_menu.map((item) =>(
            <div key={item.id} className="category-product" onClick={()=> setCategory(item.name)}>
                <img className={category === item.name ? "active" : ""} src={item.image} alt={item.name} />
                <p>{item.name}</p>
            </div>
        ))}
      </div>
      <div className="item-container">
        {all_items.filter((item) =>{
          const lowerCaseCategory = category.toLocaleLowerCase();
          if(lowerCaseCategory === ""){
            return true;
          }
          return item.category && item.category.toLocaleLowerCase().includes(lowerCaseCategory);
        })
        .map((item) =>(
          <div key={item.id} className="item" onClick={()=> {setProduct(item);handleNavigation("/product", item)}}>
            <img src={item.image} alt={item.name} />
            <h3>Ksh {item.price}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default ProductCategory
