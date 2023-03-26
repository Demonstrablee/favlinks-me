import * as React from 'react'
import { useState } from 'react'
import Table from './Table';
import Form from './Form';


const LinkContainer = (props) => {

const [favLinks , setFavLinks] = useState([]);
const [linkNames, setLinkNames] = useState([])

  const handleRemove = (index:number) => {
    /* TODO - Create logic for setting the state to filter array and remove favLink at index*/
  
    let arra1 = favLinks.filter((favLink:string) => {return (favLink) !== favLinks[index]});
    let arra2 = linkNames.filter((linkName:string) => {return (linkName) !== linkNames[index]});
    // console.log(arra1)

    setFavLinks(arra1)
    setLinkNames(arra2)
    
 
  }

  const handleSubmit = (favLink: string, linkName: string) => {
    /*TODO - Create logic to set state and add new favLink to favLinks array in state*/
    setFavLinks(favLinks.concat(favLink));
    setLinkNames(linkNames.concat(linkName));

    //console.log(favLinks) // this wont show me the array is updated until AFTER this function has fully run and I go again

    console.log("ADDED LINK and NAME ")

  }
 

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
       
      <h3>Add New</h3>
      
      {/*TODO - Add Table Component */}
        <Table URL= {favLinks} name={linkNames} removeLink= {handleRemove} handlesubmit ={handleSubmit} />

      {/*TODO - Add Form Component */}
        <Form favlinks = {favLinks} handleSubmit={handleSubmit}/>

      
      


         
    </div>
  )
}

export default LinkContainer
