import React from "react"
import css from "./AllExamsCard.css"
import AllexamsJsonData from "./AllExamsJson"


const AllExamsCard=()=>{
    return(
        <div className="allExams-card-container">
            <h3>Popular Exams</h3>
            
                <div className="cards">
                    {
                        AllexamsJsonData.map((exam)=>{
                        return <div className="card">
                                    <div className="card-child">
                                        <div className="image">
                                            <img src={exam.img}/>
                                        </div>
                                        <div className="title">
                                            {exam.examName}
                                        </div>
                                        <div className="font">
                                            <i class="fas fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                        })
                   }
                </div>
            
        </div>
    )
}
export default AllExamsCard