import React from "react"
import TestBookNavbar from './MCQ/testBookNavbar'
import AllExamsCard from "./MCQ/AllExamsCard"

const MainContainer=()=>{
    return(
        <div className="mainContainer">
              <TestBookNavbar/>
              <AllExamsCard/>
        </div>
    )
}
export default MainContainer