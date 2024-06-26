import React from 'react'
import './style.css'

function Button({name, active, onClick}) {
    return(
        <div className='containerButton'>
        <button onClick={() => {onClick(20)}} className={active ? 'button':'disabledButton'}>{name}</button>
        <span>Seus dados estão seguros conosco</span>
        </div>
    )
}
export default Button