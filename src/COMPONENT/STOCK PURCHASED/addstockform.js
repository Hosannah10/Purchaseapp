import React ,{useState, useRef} from "react";
import './addstockform.css' 
import s1 from "./../image/s1.png";






function Addstockform (){

    const [stockname,setStockName]=useState('')
    const [stockprice,setStockPrice]=useState('')
    const [stockbatch,setStockBatch]=useState('')
    const [stocklot,setStockLot]=useState('')
    const [suppliername,setSupplierName]=useState('')
    const [suppliermobile,setSupplierMobile]=useState('')
    const [supplieraccount,setSupplierAccount]=useState('')
    const [error,setError]=useState(false)


   const name = useRef()
   const price= useRef()
   const batch= useRef()
   const lot = useRef()
   const sname = useRef()
   const smobile= useRef()
   const saccount = useRef()
   
   let stock = [];
//    let stocked = [];
   function addStock (e) {

       stock = {
           Name: name.current.value,
           Price: Number(price.current.value),
           Batch: batch.current.value,
           Lot: lot.current.value,
           Sname: sname.current.value,
           Smobile: smobile.current.value,
           Saccount: saccount.current.value
       }

    //    const stockwithId = stock.map((stock, index) => {
    //     return { id: index + 1, ...[stock].forEach(x=>x) };
    //   });

    //     stocked = stockwithId.forEach(x=>x);
        console.log(stock)
       e.preventDefault();
       if(stockname.length==0||stockprice.length==0||stockbatch.length==0||stocklot.length==0||suppliername.length==0||suppliermobile.length==0||supplieraccount.length==0){
           setError(true)
       }
       else{
       fetch ("/purchase/",{
           method:'POST',
           body:JSON.stringify(stock),
           headers:{'Content-Type':'application/json'}

       }).then(function(response){
           return response.json()
       }).then (function(data){
           console.log(data)
       })
       name.current.value=''
       price.current.value =''
       batch.current.value=''
       lot.current.value =''
       sname.current.value =''
       smobile.current.value =''
       saccount.current.value =''
    }
   
   
    }




   return (
       <div >
        <div className="main">
        
            
               <div className="section">
                    
                    <div className="imgs">
                        <div className="container-image">
                         <img src={s1} alt="stock" className="profile"/> 

                        </div>
                     </div>
                    <h1 className="reg">ADD STOCK DETAILS</h1>

                    

                        <div className="stock">
                        <h3>STOCK:</h3>
                            
                                <input className="input" type="text" name="name" placeholder="Name" ref={name} onChange={e=>setStockName(e.target.value)}/>
                                {error&&stockname.length<=0?
                                <label className="lab">Field cannot be empty</label>:""}
                            
                                <input className="input" type="number" name="name" placeholder="Price" ref={price} onChange={e=>setStockPrice(e.target.value)}/>
                                {error&&stockprice.length<=0?
                                <label className="lab">Field cannot be empty</label>:""}
                               
                                <input className="input" type="text" name="name" placeholder="Batch Number" ref={batch} onChange={e=>setStockBatch(e.target.value)}/>
                                {error&&stockbatch.length<=0?
                                <label className="lab">Field cannot be empty</label>:""}
        
                                <input className="input" type="text" name="name" placeholder="Lot Number" ref={lot} onChange={e=>setStockLot(e.target.value)}/>
                                {error&&stocklot.length<=0?
                                <label className="lab">Field cannot be empty</label>:""}
                            
                        </div>
                    
                        
                        <div className="supplier">
                            <h3>SUPPLIER:</h3>
                                
                                <input className="input" type="text" name="name" placeholder="Name" ref={sname} onChange={e=>setSupplierName(e.target.value)}/>
                                {error&&suppliername.length<=0?
                                <label className="lab">Field cannot be empty</label>:""}

                                
                                <input className="input" type="text" name="name" placeholder="Mobile Number" ref={smobile} onChange={e=>setSupplierMobile(e.target.value)}/>
                                {error&&suppliermobile.length<=0?
                                <label className="lab">Field cannot be empty</label>:""}

                                <input className="input" type="text" name="name" placeholder="Account Details" ref={saccount} onChange={e=>setSupplierAccount(e.target.value)}/>
                                {error&&supplieraccount.length<=0?
                                <label className="lab">Field cannot be empty</label>:""}
                        
                        </div>
                        <br/>
                        
                        
                        <button className="add" onClick={addStock}> Add Stock</button>
                        
                    <br/>
                    
                    
                        
                    
                    
                </div>
        
        </div>

        <br/>
        <br/>
        <br/>
       
    

       



   
       </div>

   )
}

export default Addstockform