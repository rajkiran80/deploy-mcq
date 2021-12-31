import React from 'react'
import EachBlog from './EachBlog'
import BlogDescrip from './BlogDescrip'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import About from './About'
import Navbar from './Navbar'
import TestBookNavbar from './MCQ/testBookNavbar'
import SearchBar from './MCQ/SearchBar'
import FZF from './404'
import MainContainer from './MainContainer'

const App=()=>{
    return(
        <div className='container'>
            {/*<Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<EachBlog/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blogDescrip/:id/*" element={<BlogDescrip/>}/>
                </Routes>
            </Router>*/}
            <Router>
            <MainContainer/>
                <Routes>
                    <Route path="/" element={<MainContainer/>} exact/>
                    <Route path="/search" element={<SearchBar/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App