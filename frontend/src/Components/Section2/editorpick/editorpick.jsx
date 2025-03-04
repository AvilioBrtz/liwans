import React from 'react'
import { editor_pick } from '../../../assets/assets'
import './editor.css'
import { IoIosStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import useProductItem from '../../../Zustand/useProductItem';

const EditorPick = () => {
  const navigate = useNavigate()
  const { setProduct } = useProductItem()
  const handleNavigation = (route, pick) =>{
    navigate(route)
    localStorage.setItem("product", JSON.stringify(pick))
  }

  return (
    <div className='editor-wrap'>
        <div className="editor-header">
            <IoIosStarOutline size={30}/>
            <h2>editor's pick</h2>
        </div>
        <div className="editor-content">
      {editor_pick.map((pick)=>(
        <div key={pick.id} className='editor-pick' onClick={()=> {setProduct(pick);handleNavigation("/product", pick)}}>
            <img src={pick.image} alt="pick" />
            <h3>Ksh {pick.price}</h3>
        </div>
      ))}
      </div>
    </div>
  )
}

export default EditorPick
