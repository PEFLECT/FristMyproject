import React from 'react'
//เรียกใช้ page ทั้งหมดของ react
import {Switch , BrowserRouter , Route} from 'react-router-dom'
//เอาไว้เชื่อมหน้า
import LoginPage from '../pages/login'
//เอาเข้ามา
import HomePage from '../pages/home'

const RouterContalner = () =>{
//const คล้ายๆ var
  return(
    <BrowserRouter>
    
      <Switch>

        <Route exact path = {'/'} component={HomePage}/>
        //หน้า index
        <Route exact path = {'/login'} component = {LoginPage}/>
        //หน้า login **สามาเพิ่มได้หน้าได้อีก

      </Switch>
    </BrowserRouter>
  )
}
export{
  RouterContalner
  //
}
