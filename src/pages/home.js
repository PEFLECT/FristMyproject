import React from 'react'

import {BottomNavigationSimple} from '../components/BottomNavigation'
import {AppbarSimple} from '../components/Appbar'
import '../styles/main.css'
import { TapbasSimple } from '../components/Taps';
import { Imgslide } from '../components/ImageSlide';



class Home extends React.Component{

  render(){
    return(
      <div>
        <AppbarSimple/>
         <TapbasSimple/>
         <Imgslide/>
         
         <BottomNavigationSimple />
      </div>
    )
  }
}
export default Home
