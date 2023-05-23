import React, { useEffect, useState, useRef } from "react";
import './invoice.css';


function Invoice ()  {

    const [searchValue, setSearchValue] = useState('');
    const [tableData, setTableData] = useState([]);

    const getUniqueValues = (array) => (
        [...new Set(array)]
      );

    
    // Event handler for search input change
    const handleSearchInputChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    // Event handler for search button click
    const handleSearchButtonClick = () => {
      // Fetch data from API using searchValue and update tableData
      // Example API call using fetch:
      fetch(`/purchase/?search=Lot: ${searchValue}`)
        .then((response) => response.json())
        .then((data) => setTableData(data));
    };
  
    // Event handler for posting table data to another API

    //const price= useRef()
    //const lot = useRef()
    //const sname = useRef()
    //const smobile= useRef()
    //const saccount = useRef()

    const price = tableData.map(x => x.Price);
    
    const lot = tableData.map(x => x.Lot);

    const sname = tableData.map(x => x.Sname);
    
    const smobile = tableData.map(x => x.Smobile);
  
    const saccount = tableData.map(x => x.Saccount);
    

    const calculateTotalPrice = () => {
        let totalPrice = 0;
    
        price.forEach(item => {
          totalPrice += item;
        });
    
        return totalPrice;
      };

    const uniqueLot = getUniqueValues(lot)
    const uniqueSname = getUniqueValues(sname)
    const uniqueSmobile = getUniqueValues(smobile)
    const uniqueSaccount = getUniqueValues(saccount)

    let invoice = [];
    const handlePostTableData = () => {
        invoice = {
            Lot: uniqueLot[0],
            Price: calculateTotalPrice(),
            Sname: uniqueSname[0],
            Smobile: uniqueSmobile[0],
            Saccount: uniqueSaccount[0]
        }

      // Post tableData to another API
      // Example API call using fetch:

      fetch('/finance/', {
        method: 'POST',
        body: JSON.stringify(invoice),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          // Handle the response from the API if needed
          console.log(response);
        });
        
    };



    const renderTableRows = () => {
      if (tableData.length === 0) {
        return (
          <tr>
            <td colSpan="5">Loading, please wait...</td>
          </tr>
        );
      }

      tableData.map((item) => (
        <tr key={item.id}>
          <td>
              <td>{item.id}</td>
              <td>{item.Name}</td>
              <td>{String(item.Price).replace(/\B(?=(\d{3})+(?!\d))/g,",")}</td>
              <td>{item.Batch}</td>
              <td>{item.Lot}</td>
          </td>
          <td>
              <td>{item.Sname}</td>
              <td>{item.Smobile}</td>
              <td>{item.Saccount}</td>
          </td>
        </tr>
      ))

    }


    
    const renderTableRows2 = () => {
      // if (tableData.length === 0) {
      //   return (
      //     <tr>
      //       <td colSpan="5">Loading, please wait...</td>
      //     </tr>
      //   );
      // }

      <tr>
          <td>
              <td></td>
              <td></td>
              <td>Total Cost: {String(calculateTotalPrice()).replace(/\B(?=(\d{3})+(?!\d))/g,",")}</td>
              <td></td>
              <td></td>
          </td>
          <td>
              <td></td>
              <td></td>
              <td></td>
          </td>
      </tr>

    }




    return (
      <div>
        <div className ='inputbutton'>
        <input
          type="number"
          value={searchValue}
          onChange={handleSearchInputChange}
          placeholder="Input Lot Number..."
          className="input"
        />
        <br/>
        <br/>
        <button onClick={handleSearchButtonClick}>Search</button>
        </div>

        <div className='invoicebutton'>
        <button onClick={handlePostTableData}>Generate Invoice</button>
        </div>

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
                    </tr>
            </thead>
            <tbody>
            {renderTableRows()}
            </tbody>
            <tfoot>
            {renderTableRows2()}
            </tfoot>
        </table>
        </div>
        
      </div>
    );
  };
  
  export default Invoice;