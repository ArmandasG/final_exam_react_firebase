import React from 'react'
import { useAuthCtx } from '../../store/AuthProvider'
import './feedback.scss'

function Feedback() {
    const { feedback , ui } = useAuthCtx();
    const { show, type, msg } = feedback;

  return show ? (
    <div className={`feedback-container ${type}`}>
        <p className='msg'>{msg}</p>
        <button className='close-button' onClick={()=> ui.closeAlert()}>&times;</button>
    </div>
  ) : null
}

export default Feedback