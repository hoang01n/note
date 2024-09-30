import React, { useState } from 'react'
import ProfileInfo from '../card/ProfileInfo'
import { SearchBar } from '../SearchBar'
import { Link, useNavigate } from 'react-router-dom'
import { useSearch } from '../../Hook/UseSearch'
// import ReactDOMServer from 'react-dom/server';
export const Navbar = () => {
const navigate = useNavigate();
// const [search,setSearch] = useState('');
// console.dir("info :", <ProfileInfo/>)
// const handleSearch = ()=>{
//   setSearch(search)
// }
const { search, setSearch } = useSearch();
const onClearSeacrch = ()=>{
  setSearch('')
}
const Gohome=()=>{
  navigate("/")
}

  return (
    <div className='bg-white flex flex-col md:flex-row items-center justify-between px-6 py-2 drop-shadow'>
        <h2 onClick={Gohome} className='text-2xl font-medium text-blue-500 py-2'>NOTE</h2>
       
        <SearchBar 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        handleSearch={() => {}} 
        onCleacrSeacrch={onClearSeacrch} 
      />
        <ProfileInfo/>


       

    </div>
  )
}
