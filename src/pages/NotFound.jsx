import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function NotFound() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/")
  }, [navigate])
  return (
    <div>NotFound</div>
  )
}

export default NotFound