import React ,{useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
let Nav=()=>{
  let navigate=useNavigate();
  let [search,setSearch]=useState("");

  let searchStore=(e)=>{
      setSearch(e.target.value);
  }
  let searchPage=()=>{
      navigate('/search',{state:{searchVal:search}});
  }
        return<>
          <div className='container-fluid nav d-flex bg-light'>
                <h3 className='text-danger'>MovieDb</h3>
                <ul className='d-flex mt-2'>
                    <li className='mx-3 mt-1'><Link to="/" className='link'>Popular</Link></li>
                    <li className='mx-3 mt-1'><Link to="/toprating" className='link'>Top Rated</Link></li>
                    <li className='mx-3 mt-1'><Link to="/upcoming" className='link'>Upcoming</Link></li>
                    <li><div className='d-flex'><input type="text" name="search" id="search" placeholder='Search Movie' onChange={(e)=>{searchStore(e)}} value={search} className='form-control mx-2'/>
                    <button className='btn btn-primary' onClick={searchPage}>Search</button></div></li>
                </ul>

          </div>
        
        </>
}
export default Nav;