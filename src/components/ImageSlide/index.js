import React from 'react'
import { Carousel } from 'antd';

import '../../styles/main.css'
import 'antd/dist/antd.css'

const Imgslide = () =>{
    return(
        <Carousel className={'ant-carousel'} autoplay>
            <img src={'https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
            <img src={'https://wallpaperstock.net/wallpapers/thumbs1/46142hd.jpg'}/>
            <img src={'https://wallpaperstock.net/wallpapers/thumbs1/34822wide.jpg'}/>
        </Carousel>
    )
}
export{
    Imgslide
}