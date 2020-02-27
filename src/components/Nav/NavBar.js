import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleMenus extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
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
