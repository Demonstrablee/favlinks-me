import * as React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  // boilerplate table body functional component
  //we use Array.map to create table rows from LinkData passed via props

  const names = props.linkNames
   const rows = props.linkData.map((row,index) => {
    return(
        <tr key={index}>
          <td>{names[index]}</td>
          <td>
            <a href={row}>{row}</a>
          </td>
          <td>
            <button onClick={() => props.removeLink(index)}>Delete</button>
          </td>
        </tr>
    )
    
  })
 
    
  
  return(<tbody>{rows}</tbody>)
}

const Table = (props) => {
     
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return( <table>
        <TableHeader/>
        <TableBody linkData = {props.URL} removeLink = {props.removeLink} linkNames= {props.name}/>
        
        
    </table>
    )
  
}

export default Table