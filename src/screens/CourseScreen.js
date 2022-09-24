import React from 'react'
import udemy from "../img/udemy.png"
import "../css/css/CourseScreen/Courses.css"
import SmallNav from '../components/SmallNav'
function CourseScreen() {
  return (
    <div className='bg  '>
    <SmallNav />
    <div className='row mt-5 d-flex justify-conetnt-center' >
    <h1 className='mt-5 h1__courses'>KURSLAR</h1>
    </div>
        
        <div className='container '>
            <div className='row'>
                <div className='col-md-4 col-sm-12 mt-5'>
                   <div className='card my-3 w-100 text-center'>
                       <img src={udemy} className="card-img-top"></img>
                       <div className='card-body'>
                           <h4 className='card-title'>Reiki 1</h4>
                           <hr></hr>
                           <p className='card-text p__normal p__card'>Astrolojiye ilk adım</p>
                           <a href='https://www.udemy.com/mobile/ipad/' target="_blank" className='btn card-link'>Kursu AL </a>
                       </div>
                   </div>
                </div>
                <div className='col-md-4 col-sm-12 mt-5'>
                <div className='card my-3 w-100 text-center'>
                       <img src={udemy} className="card-img-top"></img>
                       <div className='card-body'>
                           <h4 className='card-title'>Reiki 1</h4>
                           <hr></hr>
                           <p className='card-text p__normal p__card'>Astrolojiye ilk adım</p>
                           <a className='btn card-link'>Kursu AL </a>
                       </div>
                   </div>
                </div>
                <div className='col-md-4 col-sm-12 mt-5'>
                <div className='card my-3 w-100 text-center'>
                       <img src={udemy} className="card-img-top"></img>
                       <div className='card-body'>
                           <h4 className='card-title'>Reiki 1</h4>
                           <hr></hr>
                           <p className='card-text p__normal p__card'>Astrolojiye ilk adımını at</p>
                           <a className='btn card-link'>Kursu AL </a>
                       </div>
                   </div>
                </div>
                <div className='col-md-4 col-sm-12 mt-5'>
                <div className='card my-3 w-100 text-center'>
                       <img src={udemy} className="card-img-top"></img>
                       <div className='card-body '>
                           <h4 className='card-title'>Reiki 1</h4>
                           <hr></hr>
                           <p className='card-text p__normal p__card '>Astrolojiye ilk adım</p>
                           <a className='btn card-link'>Kursu AL </a>
                       </div>
                   </div>
                </div>
                <div className='col-md-4 col-sm-12 mt-5'>
                <div className='card my-3 w-100 text-center'>
                       <img src={udemy} className="card-img-top"></img>
                       <div className='card-body'>
                           <h4 className='card-title'>Reiki 1</h4>
                           <hr></hr>
                           <p className='card-text p__normal p__card'>Astrolojiye ilk adım</p>
                           <a className='btn card-link'>Kursu AL </a>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseScreen