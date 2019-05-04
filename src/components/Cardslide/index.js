import React from 'react'

import { Card } from 'antd';

import '../../styles/main.css'
import 'antd/dist/antd.css'
//# icon
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const { Meta } = Card;
const Cardslide = () =>{
    return (
             <Card
                type="inner"
                title="Recommended"
                extra={<a href="#">More</a> }
                
            >
            Inner Card content
            </Card>
            
    )
}
export{
    Cardslide
}