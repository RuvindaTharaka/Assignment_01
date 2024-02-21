import React,{useState,useEffect} from 'react'

const Addbutton = () => {

const [value,setValue] = useState("Default");
const [value2,setValue2] = useState("Default");

useEffect(()=>{
    console.log(value2)
    setValue2("Changed In UseEffect!")
},[])

  return (
    <div>
        <button type="button" onClick={()=>{ 
            setValue2("Add Button Clicked 2")
            console.log(value2) }}      
            style={{ width:'80px',height:'40px',background:'green',color:'white', fontSize:'14px' }}>
            Add
        </button>
        <p>Display : {value}</p>
        <p>New : {value2}</p>
    </div>
    
  )
}

export default Addbutton