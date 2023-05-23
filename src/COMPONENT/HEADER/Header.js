import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import './Header.css';
import {Link} from 'react-router-dom';
// import b2 from "./../image/b2.png";
// import b5 from "./../image/b5.png";
// import b6 from "./../image/b6.png";
// import b7 from "./../image/b7.png";
// import b8 from "./../image/b8.png";
// import b10 from "./../image/b10.png";
// import b9 from "./../image/b9.png";
import b11 from "./../image/b11.png";
import g3 from "./../image/g3.jpg";
import s5 from "./../image/s5.png";
import s4 from "./../image/s4.png";
import s6 from "./../image/s6.png";

function Header() {
  const { collapseSidebar } = useProSidebar();

  
  
  return (
    <div className = "big" style={{ display: 'flex' }}>
      <Sidebar className='loom' >
      
        <div className = "title">
        <img src={g3} alt="stock" className="icon"/>
          
        </div>
        <Menu className='boom' >
        {/* <SubMenu className = "hook" title="PURCHASING DEPARTMENT">
          <SubMenu className = "hook" title="STOCK PURCHASED"> */}
        <MenuItem className = "hook" component={<Link to ="/addstockform"/>}><img src={s5} alt="stock" className="iconss"/><h5 className='troy'>ADD STOCK</h5></MenuItem>
        <MenuItem className = "hook" component={<Link to ="/addedstock"/>}><img src={s4} alt="stock" className="iconss"/><h5 className='troy'>STOCK DETAILS</h5></MenuItem>
          {/* </SubMenu> */}
        <MenuItem className = "hook" component={<Link to="/invoice"/>}><img src={s6} alt="stock" className="iconss"/><h5 className='troy'>GENERATE INVOICE</h5></MenuItem>
        {/* </SubMenu> */}
        <MenuItem className = "hook" component={<Link to ="/logout"></Link>}><img src={b11} alt="stock" className="iconsss"/><h5 className='troy'> LOG OUT </h5></MenuItem>
        </Menu>
      </Sidebar>
      <main>
      <div className = "div">
      <div className='container' onClick={() => collapseSidebar()}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
        </div>
        
        
        
      </main>
    </div>
  );
}

export default Header;