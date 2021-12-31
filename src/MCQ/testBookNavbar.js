import React,{useState,setState} from 'react'
import css from "./testBookNavbar.css"
import {Link} from 'react-router-dom'

const TestBookNavbar=()=>{
    const [toggleNavBar,setToggleNavBar]=useState(true)

    return(
        <div className='navbar-container'>
             <div className={!toggleNavBar ? "expandNavbar" : "navbar-section"}>
                 <div className='logo-brand centerChildElements'>
                      <div className='logo'>
                          <i className="fas fa-book-open"></i>
                      </div>
                      <div className='brand'>
                          <h3>testbook</h3>
                      </div>
                 </div>
                 <div className='all-nav-items'>
                     <nav>
                         <div className='home centerNavElements padding5px'>
                             <i className="fas fa-home equalSpacing"></i>
                             <h3 className='whiteColor'>Home</h3>
                         </div>
                         <p>LEARN</p>
                         <div className='home centerNavElements padding5px'>
                             <i className="fas fas-broom equalSpacing fadedColor"></i>
                             <h3 className='fadedColor'>Select Live Coaching</h3>
                         </div>
                         <p>TESTS</p>
                         <div className='tests'>
                             <div className='centerNavElements padding5px'>
                                  <i className="fas fa-file-alt equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Test Series</h3>
                             </div>
                             <div className='centerNavElements padding5px'> 
                                  <i className="fas fa-file-word equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Previous Year Papers</h3>
                             </div>
                             <div className='centerNavElements padding5px'>
                                  <i className="fas fa-broom equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Practice</h3>
                             </div>
                             <div className='centerNavElements padding5px'>
                                  <i className="fas fa-broom equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Quizzes</h3>
                             </div>
                             <div className='centerNavElements padding5px'>
                                  <i className="fas fa-broom equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Attempted Tests</h3>
                             </div>
                         </div>
                         <p>MORE</p>
                         <div className='tests'>
                             <div className='centerNavElements padding5px'>
                                  <i className="fas fa-file-alt equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Exams</h3>
                             </div>
                             <div className='centerNavElements padding5px'> 
                                  <i className="fas fa-file-word equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Saved Questions</h3>
                             </div>
                             <div className='centerNavElements padding5px'>
                                  <i className="fas fa-broom equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Doubts</h3>
                             </div>
                             <div className='centerNavElements padding5px'>
                                  <i className="fas fa-broom equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>GK & Current Affairs</h3>
                             </div>
                         </div>
                         <p>TESTBOOK PASS</p>
                         <div className='tests'>
                             <div className='centerNavElements padding5px'>
                                  <i className="fas fa-file-alt equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Pass</h3>
                             </div>
                             <div className='centerNavElements padding5px'> 
                                  <i className="fas fa-file-word equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Refer & Earn</h3>
                             </div>
                             <div className='centerNavElements padding5px'>
                                  <i className="fas fa-broom equalSpacing fadedColor"></i>
                                  <h3 className='fadedColor'>Our Selections</h3>
                             </div>
                         </div>
                     </nav>
                 </div>
             </div>
             <div className='search-bar-section centerChildElements forMobile'>
                  <div className='search-container'>
                      <Link to="/search"><input type="text" placeholder='Search'/></Link>
                      <Link to="/search"><i class="fas fa-search"></i></Link>
                  </div>
                  <div className='language-container centerChildElements'>
                      <div><i class="fas fa-language"></i></div>
                      <div>English</div>
                      <div><i class="fas fa-chevron-down"></i></div>
                      <div className='dropdown centerChildElements'>
                          <div><i class="fas fa-language"></i></div>
                          <div>Hindi</div>
                      </div>
                  </div>
                  <div className='get-pass-container'>
                      <div>
                          Get Pass
                      </div>
                  </div>
                  <div className='notification-container'>
                      <div>
                          <i class="fas fa-bell"></i>
                      </div>
                  </div>
                  <div className='profile-container'>
                        <div className='language-container centerChildElements'>
                            <div><i className="fas fa-user-circle" id="usersCircle"></i></div>
                            <div><i className="fas fa-chevron-down"></i></div>
                            <div className='dropdown centerChildElements'>
                                <div>Refer & Earn</div>
                                <div>Settings</div>
                                <div>Refer & Earn</div>
                            </div>
                        </div>
                  </div>
             </div>
             <div className='toggle'>
                  {toggleNavBar?<i class="fas fa-bars" onClick={()=>setToggleNavBar(false)}></i>:<i class="fas fa-times" onClick={()=>setToggleNavBar(true)}></i>}
             </div>
        </div>
    )
}
export default TestBookNavbar