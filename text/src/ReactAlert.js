import React from 'react'
import ReactJsAlert  from "reactjs-alert"

const ReactAlert = () => {
    const [status,setStatus]=useState(false);
const [type,setType]=useState("");
const [title,setTitlee]=useState("");
  return (
    <div className='App'>
        <button onClick={()=>{
            setStatus(true);
            setType("success")
            setTitlee("This is a success alert")
        }}
        
        />
        <ReactJsAlert
         status={status}
         type={type}
         title={title}
         quotes={true}
         quote="This is react alert"
         Close={()=>setStatus(false)}        
        />

    </div>
  )
}

export default ReactAlert