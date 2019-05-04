import React from 'react'

import {BottomNavigationSimple} from '../components/BottomNavigation'
import {AppbarSimple} from '../components/Appbar'
import '../styles/main.css'
import { TapbasSimple } from '../components/Taps';
import { Imgslide } from '../components/ImageSlide';
import {Buttommenu} from '../components/ButtomMenu';
import {Cardslide} from '../components/Cardslide';


class Home extends React.Component{

  render(){
    return(
      <div>
        <AppbarSimple/>
         <TapbasSimple/>
         <Imgslide/>
         <Buttommenu />
         <Cardslide/>
         <BottomNavigationSimple />
      </div>
    )
  }
}
export default Home
