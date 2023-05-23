import React ,{useState,useEffect, useCallback} from "react";
import Added from "./added";
import './addedstock.css'




function Addedstock(){

   

    // const [Stock , setStock]= useState([])
    const [data, setData] = useState([]);
    const [editedRow, setEditedRow] = useState(null);
    
    // Edit row
    const handleEdit = (row) => {
    setEditedRow(row);
    };

    const handleSave = async () => {
    try {
      const response = await fetch(`/purchase/${editedRow.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedRow),
      });

      if (response.ok) {
        setEditedRow(null);
        GetStock(); // Fetch updated data
      } else {
        console.error('Error saving data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Delete row
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/purchase/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        GetStock(); // Fetch updated data
      } else {
        console.error('Error deleting row:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  //fetch data from api
    useEffect(()=>{
      GetStock();
    },[]);

    function GetStock (){
        fetch("/purchase/").then(function (response) { return response.json() }).then(function (data) {
            console.log(data)
            setData(data);       
        })
    }

    // Render table rows
  const renderRows = () => {
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan="5">Loading, please wait...</td>
        </tr>
      );
    }
    data.map(function (row){
        return(
            <Added
            id = {row.id}
            Name= {editedRow && editedRow.id === row.id ? (
              <input
                type="text"
                value={editedRow.Name}
                onChange={(e) =>
                  setEditedRow({ ...editedRow, Name: e.target.value })
                }
              />
            ) : (
              row.Name
            )
            }
            Price={
            editedRow && editedRow.id === row.id ? (
              <input
                type="number"
                value={editedRow.Price}
                onChange={(e) =>
                  setEditedRow({ ...editedRow, Price: e.target.value })
                }
              />
            ) : (
              String(row.Price).replace(/\B(?=(\d{3})+(?!\d))/g,",")
            )
            }
            Batch={
              editedRow && editedRow.id === row.id ? (
                <input
                  type="text"
                  value={editedRow.Batch}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, Batch: e.target.value })
                  }
                />
              ) : (
                row.Batch
              )
            }
            Lot={
              editedRow && editedRow.id === row.id ? (
                <input
                  type="text"
                  value={editedRow.Lot}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, Lot: e.target.value })
                  }
                />
              ) : (
                row.Lot
              )
            }
            Sname={
              editedRow && editedRow.id === row.id ? (
                <input
                  type="text"
                  value={editedRow.Sname}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, Sname: e.target.value })
                  }
                />
              ) : (
                row.Sname
              )
            }
            Smobile={
              editedRow && editedRow.id === row.id ? (
                <input
                  type="text"
                  value={editedRow.Smobile}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, Smobile: e.target.value })
                  }
                />
              ) : (
                row.Smobile
              )
            }
            Saccount={
              editedRow && editedRow.id === row.id ? (
                <input
                  type="text"
                  value={editedRow.Saccount}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, Saccount: e.target.value })
                  }
                />
              ) : (
                row.Saccount
              )
            }
            Edit = {
              editedRow && editedRow.id === row.id ? (
                <button className="edit" onClick={handleSave}>Save</button>
              ) : (
                <button className="edit" onClick={() => handleEdit(row)}>Edit</button>
              )
            }
            Delete = {
              <button className="delete" onClick={() => handleDelete(row.id)}>Delete</button>
            }
            
            >

            </Added>
        )
    })
    
  };





    return (
        <div className="report">
            
            <table className="table">
                <thead>
                    <tr>
                        <th>
                        STOCK
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Batch Number</th>
                        <th>Lot Number</th>
                        </th>
                        <th>
                        SUPPLIER
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Account Details</th>
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {renderRows()}
                </tbody>
            </table>


        </div>
    )
}

export default Addedstock;