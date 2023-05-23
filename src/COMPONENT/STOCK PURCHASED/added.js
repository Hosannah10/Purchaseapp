import React from "react";




function Added (props){
return(
    
    <tr key = {props.id}>
            <td>
            <td>{props.id}</td>
            <td>{props.Name}</td>
            <td>{props.Price}</td>
            <td>{props.Batch}</td>
            <td>{props.Lot}</td>
            </td>
            <td>
            <td>{props.Sname}</td>
            <td>{props.Smobile}</td>
            <td>{props.Saccount}</td>
            </td>
            <td>
            <td>{props.Edit}</td>
            <td>{props.Delete}</td>
            </td>

    </tr>
)
    
}

export default Added;