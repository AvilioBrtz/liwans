import React from 'react'
import './section2.css'
import EditorPick from './editorpick/editorpick'
import Influencer from './influencers/influencer'
import Category from './category/category'
import Recent from './recent/recent'

const Section2 = ({setCategory}) => {
  return (
    <div className='section2'>
      <EditorPick />
      <Influencer />
      <Category setCategory = {setCategory}/>
      <Recent />
    </div>
  )
}

export default Section2
