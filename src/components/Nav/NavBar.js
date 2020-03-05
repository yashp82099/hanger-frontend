import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from './logo5.png'
import './nav.css'

export default class MenuExampleMenus extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>

        <Link to='/home'>
          <Menu.Item>
          <Image src={logo} size='mini' className='navLogo'/>
        </Menu.Item>   
        </Link>



        <Link to='/home'>
          <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}>
          Home
        </Menu.Item>   
        </Link>
       
       <Link to='/cart'>
          <Menu.Item
          name='submit'
          active={activeItem === 'submit'}
          onClick={this.handleItemClick}
        >
          Cart
        </Menu.Item> 
       </Link>
        
        

        <Menu.Menu position='right'>
          <Link to='/order'>
            <Menu.Item
            name='LogOut'
            active={activeItem === 'LogO'}
            onClick={this.handleItemClick}
          >
            Orders
          </Menu.Item>
          </Link>
          <Link to='/profile'>
            <Menu.Item
            name='LogOut'
            active={activeItem === 'LogO'}
            onClick={this.handleItemClick}
          >
            Profile
          </Menu.Item>
          </Link>
          
          <Link to='/'>
            <Menu.Item
            name='help'
            active={activeItem === 'help'}
            onClick={this.handleItemClick}
          >
            LogOut
          </Menu.Item>
          </Link>
          
        </Menu.Menu>
      </Menu>
    )
  }
}
