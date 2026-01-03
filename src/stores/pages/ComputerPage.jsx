import React,{useState} from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
    const [selectedProduct,setSelectedProduct]=useState([]);
    const companyHandler=(computers)=>{
        if(selectedProduct.includes(computers)){
            setSelectedProduct(selectedProduct.filter((item)=>item !== computers))
        }
        else{
            setSelectedProduct([...selectedProduct,computers])
        }
    }
    const filteredProduct=selectedProduct.length==0 ? computerData : computerData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
        <Navbar/>
        <div className="full-page">
            <div className="pro-selected">
                {
                    computerData.map((computer)=>{
                        return(
                            <div className="pro-input">
                                <label> 
                                <input type="checkBox"
                                onChange={()=>companyHandler(computer.company)}/>
                                    {computer.company}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="pageSection">
                {
                   filteredProduct.map((item)=>{
                    return(
                        <div>
                            <Link to={`/computer/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt="page-image"/>
                                </div>
                                <div className="mobile-details">
                                    <h2>{item.company},{item.model}</h2>
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

export default ComputerPage