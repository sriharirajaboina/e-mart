import React,{useState} from 'react'
import Navbar from "../components/Navbar"
import { watchData } from '../data/watches'
import { Link } from 'react-router-dom'

const WatchPages = () => {
  const [selectedWatch,setSelectedWatch]=useState([]);
  const companyHandler=(watchproduct)=>{
    if(selectedWatch.includes(watchproduct)){
      setSelectedWatch(selectedWatch.filter((item) => item !== watchproduct))
    }
    else{
      setSelectedWatch([...selectedWatch,watchproduct])
    }
   
  }
   const filteredWatches= selectedWatch.length === 0 ? watchData : watchData.filter((items)=> selectedWatch.includes(items.brand))
  return (
    <>
      <Navbar/>
      <div className="full-page">
        <div className="pro-selected">
            {
              watchData.map((watch)=>{
                return(
                  <div className="pro-input">
                    <label>
                      <input type="checkbox" 
                      onChange={()=>companyHandler(watch.brand)}/>
                      {watch.brand}
                    </label>
                  </div>
                )
              })
            }
        </div>
        <div className="pageSection">
            {
              filteredWatches.map((watches)=>{
                return(
                  <div>
                    <Link to={`/watches/${watches.id}`}>
                      <div className="pageImg">
                        <img src={watches.image} alt="watches" />
                      </div>
                      <div>
                        <div className="mobile-details">
                          <h3>
                            {watches.brand},{watches.model}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            }
        </div>
      </div>
    </>
  )
}

export default WatchPages