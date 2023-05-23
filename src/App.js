import './App.css';
import {Route,Routes} from'react-router-dom';
import Header from './COMPONENT/HEADER/Header';
import { useContext } from 'react';
import './COMPONENT/Auth/Auth.css';
import Authman from './COMPONENT/Auth/Auth';
import Logout from './COMPONENT/Auth/logout';
import AuthContext from './STORE/auth-context';
import Addstockform from './COMPONENT/STOCK PURCHASED/addstockform';
import Addedstock from './COMPONENT/STOCK PURCHASED/addedstock';
import Invoice from './COMPONENT/GENERATE INVOICE/invoice';



function App() {

  const authCtx = useContext(AuthContext)
  //const isLoggedIn =authCtx.isLoggedIn
  //console.log(isLoggedIn)
  return (
    <div className='pap'>

      <div className='sap'>
        {/*isLoggedIn*/ (<Header></Header>)}
         
      </div>

  

    <div className='rap'>
      
        <Routes>
          
            {/*isLoggedIn &&*/ (
             <Route path="/addstockform" element={<Addstockform></Addstockform>} />
             )}
  
            {/*isLoggedIn && */(
                <Route path='/addedstock' element={<Addedstock></Addedstock>} />
             )}

            {/*isLoggedIn && */(
                <Route path='/invoice' element={<Invoice></Invoice>} />
              )}

            {/*isLoggedIn &&*/ (
            <Route path='/logout' element={<Logout></Logout>}/>
            )}

            <Route path='/' element={<Authman></Authman>} />
            {/* <Route path='/signup' element={<Register></Register>} /> */}

        </Routes>
    </div>



    </div>

   
  );
}

export default App;
