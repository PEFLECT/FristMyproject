import React from 'react' 8.5K (gzipped: 3.4K)
//เรียกใช้ page ทั้งหมดของ react
import {Switch , BrowserRouter , Route} from 'react-router-dom' 25K (gzipped: 8.3K)
//เอาไว้เชื่อมหน้า
import LoginPage from '../pages/login'
//เอาเข้ามา
import HomePage from '../pages/home'

const RouterContalner = () =>{
//const คล้ายๆ var
  return(
    <RouterContalner>
    //
      <Switch>
      //
        <Route exact path = {'/'} components={HomePage}/>
        //หน้า index
        <Route exact path = {'/login'} components = {LoginPage}/>
        //หน้า login **สามาเพิ่มได้หน้าได้อีก

      </Switch>
    </RouterContalner>
  )
}
export{
  RouterContalner
  //
}
