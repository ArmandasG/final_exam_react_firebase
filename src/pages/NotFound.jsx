import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthProvider';

function NotFound() {
    const {isLoggedIn} = useAuthCtx()
    const navigate = useNavigate()
    
    
    
  return (
    <div>
        <h1>Page not found 404</h1>
        <Link to="/login">return</Link>
    </div>
  )
}

export default NotFound