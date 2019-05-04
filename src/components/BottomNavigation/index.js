import React from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import '../../styles/main.css'
const BottomNavigationSimple = () => {

return(

    <BottomNavigation
    className={'bottom-bar'}    
    showLabels
    style={{backgroundColor : '#747d8c'}}
    >
        <BottomNavigationAction style={{color:'#ffffff'}} label={'Libary'} icon={<img width={24} height={24} src={process.env.PUBLIC_URL + '/assets/icons/sj.png'}/>}/>
        <BottomNavigationAction style={{color:'#ffffff'}} label={'Home'} icon={<img width={24} height={24} src={process.env.PUBLIC_URL+'/assets/icons/sc.png'}/>}/>
        <BottomNavigationAction style={{color:'#ffffff'}} label={'Ranking'} icon={<img width={24} height={24} src={process.env.PUBLIC_URL+'/assets/icons/sd.png'}/>}/>
    </BottomNavigation>
)

}
export{
    BottomNavigationSimple
}