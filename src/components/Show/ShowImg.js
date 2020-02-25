import React from 'react'
import {Image} from 'semantic-ui-react'

function ShowImg(props) {
    return (
        <Image src={props.img} className='productImg' />
    )
}

export default ShowImg
