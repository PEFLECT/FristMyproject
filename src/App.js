import React from 'react' 8.5K (gzipped: 3.4K)
//เรียกใช้ page ทั้งหมดของ react
import {RouterContalner} from './route/router'
class App extends React.Component{
//class app ใช้ component ทั้งหมดของ react
  render(){
    //การเเสดงผล
    return(
      <RouterContalner />
      //<div>path</div>
      // นำ Path ออก
    )
  }
}
export default App
//เเสดงผลเเค่ class เดียว **export default class แค่อย่างเดียว **export { class , class  } ได้หลายอย่าง
