import React from 'react'
import Section1 from '../../Components/Section1/section1'
import Section2 from '../../Components/Section2/section2'
import Navbar from '../../Components/Navbar/navbar'

const Home = ({setShow, setCategory}) => {
  return (
    <div>
      <Navbar setShow={setShow}/>
      <Section1 />
      <Section2 setCategory = {setCategory}/>
    </div>
  )
}

export default Home
