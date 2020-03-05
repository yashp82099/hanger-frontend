import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import ShowImg from '../components/Show/ShowImg'
import ShowInfo from '../components/Show/ShowInfo'
import {Icon} from 'semantic-ui-react'

// let product = {}

export class Show extends Component {


    state = {
        img: '',
        product: {}
    }

    componentDidMount(){
        this.setState({product: this.props.product, img: this.props.product.thumb_image})
        // this.props.removeProduct()
    }

    handleImgChange = (img) => {
        this.setState({img: img[0]})
    }


    render() {
        return (
            <div>
                <div>
                    <Icon onClick={()=>this.props.unselect()} name='arrow left' size='massive'/>
                </div>
                {/* <button ></button><br/> */}
                {this.props.show || this.state.product.title? null : <Redirect to='/home' />}
                <div className='infoRight'>
                    <ShowImg img={this.state.img}/>
                </div>
                <div className='infoLeft'>
                    <ShowInfo img={this.state.img} info={this.state.product} handleImgChange={this.handleImgChange} />
                </div>
                
                
            </div>
        )
    }
}


export default Show