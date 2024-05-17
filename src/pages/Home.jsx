import React, { useEffect, useState } from 'react'
import NavBarHome from '../components/HomePage/NavBarHome'
import { getUserAPI } from '../services/allAPI';
import ViewSection from '../components/HomePage/ViewSection';


const Home = () => {
  const LocalUserid = localStorage.getItem('currentUserid');
  const [userDetails,setUserDetails] = useState("")

  useEffect(() => {
    getUserAPI().then(result => {
      result.data.forEach(user => {
        if (LocalUserid === user.id){
          setUserDetails(user)

        }
      });
    });
  }, []);
  
  return (
    <>
    <NavBarHome userDetails={userDetails}/>
    <ViewSection />

    
    
    </>
  )
}

export default Home