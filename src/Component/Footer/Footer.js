import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='Footer'>
        <div className='Links'>
            <div>
                <a href='https://www.facebook.com/netflixus' > <i class="fa-brands fa-facebook"></i></a>
            </div>
            <div>
                <a href ="https://www.instagram.com/Netflix"  className=''><i class="fa-brands fa-instagram"></i> </a>
            </div>
            <div> <a href="https://twitter.com/netflix"></a><i class="fa-brands fa-twitter"></i></div>
            <div><a href="https://www.youtube.com/user/NewOnNetflix"><i class="fa-brands fa-youtube"></i></a></div>
        </div>
        <div className='List'>
         <div className='list1'>
         <div className='Footer_list'>
            <ul>
                <li><a href="#" >Audio Description</a></li>
                <li><a href="#" >Investor Relations</a></li>
                <li><a href="#" >Terms of Use</a></li>
                <li><a href="#" >Do Not  Sell or Share My Pesonal Information</a></li>
            </ul>
        </div>
        <div className='Footer_list'>
            <ul>
                <li><a href="#" >Legal Notices</a></li>
                <li><a href="#" >Corporate Information</a></li>
                <li><a href="#" >Help Center</a></li>
            </ul>
        </div>
          </div>
          <div className='list2'>
          <div className='Footer_list'>
            <ul>
                <li><a href="#" >Gift Cards</a></li>
                <li><a href="#" >Media Center</a></li>
                <li><a href="#" >Jobs</a></li>
            </ul>
        </div>
        <div className='Footer_list'>
            <ul>
                <li><a href="" >Privacy</a></li>
                <li><a href="" >Cookie Preferences</a></li>
                <li><a href="" >Contacet Us</a></li>
            </ul>
        </div>
          </div>
        </div>
        <div className='me'>
            <span>cloned by: Getachew D</span>
        </div>
    </div>
  )
}

export default Footer