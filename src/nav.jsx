import React from 'react';
import { Link } from 'react-router-dom';
let Nav=()=>{
        return<>
          <div className='container-fluid nav d-flex bg-light'>
                <h3 className='text-danger'>MovieDb</h3>
                <ul className='d-flex mt-2'>
                    <li className='mx-3'><Link to="/" className='link'>Popular</Link></li>
                    <li className='mx-3'><Link to="/toprating" className='link'>Top Rated</Link></li>
                    <li className='mx-3'><Link to="/upcoming" className='link'>Upcoming</Link></li>
                </ul>

          </div>
        
        </>
}
export default Nav;