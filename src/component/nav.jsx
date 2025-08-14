import React ,{useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
let Nav=()=>{
  let navigate=useNavigate();

  let [search,setSearch]=useState("");
  let [isOpen,setIsOpen]=useState(false);

  let searchStore=(e)=>{
      setSearch(e.target.value);
  }
  let searchPage=()=>{
      navigate('/search',{state:{searchVal:search}});
      setIsOpen(false);
  }
        return<>
          <div className='container-fluid nav d-flex bg-secondary'>
                <h2 className='text-danger mt-2 p-0'><Link to="/" className='link'>MovieDb</Link></h2>

                <button className='btn btn-outline-secondary   d-md-none' onClick={()=>setIsOpen(!isOpen)}> ☰</button>
               <div className={`${isOpen?'menu-open':'menu-closed'} nav-menu`}>
                 <ul className='nav-list d-flex p-1'>
                    <li className='mx-2 mt-2'><Link to="/" className='link'>Popular</Link></li>
                    <li className='mx-2 mt-2'><Link to="/toprating" className='link'>Top Rated</Link></li>
                    <li className='mx-2 mt-2'><Link to="/upcoming" className='link'>Upcoming</Link></li>
                    <li><div className='d-flex'><input type="text" name="search" id="search" placeholder='Search Movie' onChange={(e)=>{searchStore(e)}} value={search} className='form-control mx-2'/>
                    <button className='btn btn-primary' onClick={searchPage}>Search</button></div></li>
                </ul>
               </div>
      
          </div>
        
        </>
}
export default Nav;