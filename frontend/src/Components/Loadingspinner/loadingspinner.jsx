import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";
import './loading.css'

const LoadingSpinner = () => {
  return (
    <div className='loader'>
      <FadeLoader loading={loading} size={150} />
    </div>
  )
}
export default LoadingSpinner
