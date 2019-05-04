import React from 'react'
//เรียกใช้ page ทั้งหมดของ react
import {RouterContalner} from './route/router'
class App extends React.Component{
//class app ใช้ component ทั้งหมดของ react
  render(){
    //การเเสดงผล
    return(
      <RouterContalner />
    )
  }
}
export default App
//เเสดงผลเเค่ class เดียว **export default class แค่อย่างเดียว **export { class , class  } ได้หลายอย่าง
