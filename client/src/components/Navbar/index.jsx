import React, { useContext, useEffect, useState } from 'react'
import ProfileInfo from '../card/ProfileInfo'
import { SearchBar } from '../SearchBar'
import { Link, useNavigate } from 'react-router-dom'
import noteApi from '../../api/noteApi'
import { AppContext } from '../../context/AppContext'


export const Navbar = () => {
const navigate = useNavigate();
const [search,setSearch] = useState();
const { setNotes ,fetchNotes } = useContext(AppContext);
  const onSearchNote = async () => {
    try {
      const res = await noteApi.SearchNote(search); // Gọi API tìm kiếm
      console.log('Kết quả tìm kiếm:', res.data);
      setNotes(Array.isArray(res.data.machIngNote) ? res.data.machIngNote : []);
    } catch (error) {
      console.error('Lỗi khi tìm kiếm:', error);
    }
  };
const onClearSearch = ()=>{
  setSearch('')
  fetchNotes()

}
const Gohome=()=>{
  navigate("/")
}

  return (
    <div className='bg-white flex flex-col md:flex-row items-center justify-between px-6 py-2 drop-shadow'>
        <h2 onClick={Gohome} className='text-2xl font-medium text-blue-500 py-2'>NOTE</h2>
       
        <SearchBar 
        value={search ||""} 
        onChange={(e) => setSearch(e.target.value)} 
        handleSearch={onSearchNote} 
        onCleacrSearch={onClearSearch} 
      />
        <ProfileInfo/>
    </div>
  )
}
