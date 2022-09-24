import React from 'react'
import { useLocation } from 'react-router-dom';
function SmallNav() {
    const location = useLocation();

    const textToShow = location.pathname;
  return (
    <div><nav class="navbar border-dark navbar-expand-md navbar-light border bg-light shadow mt-5 rounded ">
    <div>Başak Aktaş {textToShow}</div>
  </nav></div>
  )
}

export default SmallNav