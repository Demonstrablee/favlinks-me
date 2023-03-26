import * as React from 'react'
import { useState } from 'react'


const Form = (props) => {
  
  const[Wname, setWName]= useState('')

  const[WURL, setWURL]= useState('')

  let formRef = React.useRef();

  const handleChange = (event) => {
    /*TODO - Logic for changing state based on form changes*/
    //console.log(event.target.id)
    switch(event.target.id){
      case "wname" :  
        setWName(event.target.value)
        console.log(event.target.id);
        break;

      case "url" :  
        setWURL(event.target.value)
        console.log(event.target.id);
        break;
    
    //console.log("change handled")
      

  }
}

  const onFormSubmit = (event) => { 
    // to prevent page reload on form submit
    event.preventDefault()
    
    //console.log("this is "+ document.getElementById("enterUser"))
    
    //console.log(WURL)     

    /* TODO - Logic for calling props to handle submission and setting state changes*/
      
     props.handleSubmit(WURL,Wname);
     setWName('') //YESSSS erases data stored in these input so that the form is cleared after the you press submit
     setWURL('')

  }

  return (
    <form>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
       

      <label>Name</label><br/>
      <input id = 'wname' value = {Wname} type = "text" onChange={handleChange}></input><br/>
      <label>URL</label><br/>
      <input id= 'url' value= {WURL} type= "text" onChange={handleChange}></input><br/>
      <input type= "reset" value = "Submit" onClick={onFormSubmit}></input>
      
       
     
    </form>
     
  )
}

export default Form