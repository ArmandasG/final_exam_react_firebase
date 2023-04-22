import React from 'react'
import { useAuthCtx } from '../../store/AuthProvider'

function Feedback() {
    const { feedback , ui } = useAuthCtx();
    const { show, type, msg } = feedback;

  return show ? (
    <div className={`${type}`}>
        <p className=''>{msg}</p>
        <button className='' onClick={()=> ui.closeAlert()}>&times;</button>
    </div>
  ) : null
}

export default Feedback