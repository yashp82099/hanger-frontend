import React from 'react'
import Show from '../../containers/Show'
import {connect} from 'react-redux'
import {Icon} from "semantic-ui-react"

function ShowInfo(props) {

    const renderColor = (color) => {
        return <img onClick={()=> props.handleImgChange(color.sku_thumb_images)} src={color.sku_swatch_images} />
    }

    const handleCart = (product) => {
        let newProduct = {...props.selected, thumb_image: props.img }
        console.log(newProduct);
        
        props.add(newProduct)
    }


    return (
        <div>
            <h2>{props.info.title}</h2>
            <h3>{props.info.brand}</h3>
            <h5>${props.info.price}</h5>
            {props.info.variants?props.info.variants.map(color => renderColor(color)):null}
            <button onClick={()=>handleCart(props.info)}>ADD TO CART</button>
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return {...state.cart, ...state.home}
}

const mapDispatchToProps = (dispatch) => {
    return {add: (product) => dispatch({type:'ADD_TO_CART', value: product, total: product.price })}
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowInfo)


// info
// {brand: "PLUS", price: 14.99, pid: "2000390567", sa…}
// brand
// "PLUS"
// pid
// "2000390567"
// price
// 14.99
// sale_price
// 14.99
// thumb_image
// "https://www.forever21.com/images/1_front_330/00390567-01.jpg"
// title
// "Plus Size Cherry Embroidered Tee"
// url
// "https://www.forever21.com/us/shop/catalog/product/plus/plus_size-main/2000390567"

// variants
// [{…}]

// 0
// {sku_color_group: "RED", sku_swatch_images: Array(1…}
// sku_color_group
// "RED"

// sku_swatch_images
// ["https://www.forever21.com/images/sw_22/00390567-0…]
// 0
// "https://www.forever21.com/images/sw_22/00390567-01.jpg"

// sku_thumb_images
// ["https://www.forever21.com/images/1_front_330/0039…]
// 0
// "https://www.forever21.com/images/1_front_330/00390567-01.jpg"
// new prop
// : 