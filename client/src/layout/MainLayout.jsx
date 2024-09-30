import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SearchProvider } from '../Hook/UseSearch';
// import { Navbar } from '../components/Navbar';
export const MainLayout = ({children}) => {
  // const [search, setSearch] = useState('');

  return (
    <>
     {/* <Navbar search={search} setSearch={setSearch} />  */}
     <SearchProvider>
    <Header/>
    <div>{children}</div>
    <Footer/>
    </SearchProvider>
    </>
    
  )
}