import React from 'react'
import {IoIosSearch , IoIosClose} from 'react-icons/io'
export const SearchBar = ({value,onChange,handleSearch,onCleacrSeacrch}) => {
  return (
    <div className='w-80 flex items-center px-4 bg-slate-200 rounded-md'>
        <input type="text" value={value} onChange={onChange} placeholder='Search...' className='w-full text-base bg-transparent rounded-md py-[11px] px-4 outline-none f' />
        {value && (
        <IoIosClose className=' text-slate-400 text-2xl cursor-pointer hover:text-black mr-3 '  onClick={onCleacrSeacrch}/>    )}
        
        <IoIosSearch className=' text-slate-400 text-xl cursor-pointer hover:text-black'  onClick={handleSearch}/> 
   
    </div>
  )
}
