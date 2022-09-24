import React from 'react'
import { Link } from 'react-router-dom'
import "../css/css/RegisterLogin/RegisterLogin.css"
function LoginScreen() {
  return (
    <div className=' bglog'>
     
      <div className='row row__height justify-content-center mt-5'>
          <div className='col-md-5'>
              <div className='boxshadow p-5 mt-5'>
                  <h1 className='h1__register mt-5'>Giriş Yap</h1>
                  <input type="email" className="form-control" placeholder="email"></input>
                  <input type="password" className="form-control" placeholder="şifre"></input>
                 <Link to="/Profil/id"><button className='btn btn-primary btn-register mt-3 ml-0'>Giriş Yap</button></Link> 
                 <Link to="/Admin/id"><button className='btn btn-primary btn-register mt-3 '>Kayıt Ol</button></Link> 
              </div>
          </div>
      </div>
    </div>
  )
}

export default LoginScreen