import React from 'react'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import {Image} from 'semantic-ui-react'
import './picture.css'


function Pictures() {

    const img = [img1,img2,img3,img4,img5,img6]

    return (
        <div>
            <h2>"Make every outfit count"</h2>
            <Image centered bordered floated size='large' src={img[3]}/>
        </div>
    )
}

export default Pictures
