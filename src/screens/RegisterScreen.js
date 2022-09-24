import React from 'react'

import "../css/css/RegisterLogin/RegisterLogin.css"

function RegisterScreen() {
  return (
    <div className=' bglog'>
     
      <div className='row row__height justify-content-center mt-5'>
          <div className='col-md-5'>
              <div className='boxshadow p-5 mt-5'>
                  <h1 className='h1__register mt-5'>Kayıt Ol</h1>
                  <input type="text" className="form-control" placeholder="kullanıcı adı"></input>
                  <input type="email" className="form-control" placeholder="email"></input>
                  <input type="password" className="form-control" placeholder="şifre"></input>
                  <input type="password" className="form-control" placeholder="şifreni onayla"></input>
                  <button className='btn btn-primary btn-register mt-3 ml-0'>Kayıt Ol</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default RegisterScreen