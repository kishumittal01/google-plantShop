import React, { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
  const [inputValue, setInputValue] = useState('')
  
    function handleInput(e){
        setInputValue(e.target.value)
    }

    function handleBlur(){
        if(!inputValue.includes('@')){
            alert("Attention, there is no @, this is not a valid address")
        }
    }

    return (
    <footer className='jh_footer'>
        <div className="jh_footer_elem">
        For plant enthusiasts 🌿🌱🌵
        </div>
        <div className='jh_footer_elem'>Subscribe to our newsletter :</div>
        <input
            placeholder='Enter your email'
            onChange={handleInput}
            value={inputValue}
            onBlur={handleBlur}
            />
    </footer>
  )
}

export default Footer
