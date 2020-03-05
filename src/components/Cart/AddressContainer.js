import React, { Component } from 'react'
import {connect} from 'react-redux'
import AddressCard from './AddressCard'
import { Button, Header, Image, Modal, Input, Icon, Card } from 'semantic-ui-react'

class AddressContainer extends Component{

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

    handelSubmit = (e) => {
      e.preventDefault()
      let address = {
        name: this.props.name,
        address_1: this.props.address_1,
        address_2: this.props.address_2,
        city: this.props.city,
        state: this.props.state,
        zip: this.props.zip,
      }
      console.log(e);
      fetch('http://localhost:3000/addresses',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Token': localStorage.getItem('token')
        },
        body: JSON.stringify({address})
      }).then(res => res.json())
      .then(address => {
        this.props.reset_form()
        this.props.addressChange(address.address)})
        this.handleClose()

      
    }


    handleAddressChange = (address) => {
      this.props.addressChange(address)
    }

    render(){
    return (
        <div>
          <Modal size='mini' open={this.state.modalOpen} onClose={this.handleClose} trigger={<Button onClick={this.handleOpen}>New Address</Button>}>
          <Modal.Header>Add Address</Modal.Header>
            <Modal.Content image></Modal.Content>
              <div>
                <form onSubmit={this.handelSubmit}>
                <Input fluid required placeholder='Name of Place' name='name' onChange={(e) => this.props.edit_address(e)} value={this.props.name} />
                  <Input fluid required placeholder='Address 1' name='address_1' onChange={(e) => this.props.edit_address(e)} value={this.props.address_1} />
                  <Input fluid placeholder='Address 2' name='address_2' onChange={(e) => this.props.edit_address(e)} value={this.props.address_2} />
                  <Input fluid required placeholder='City' name='city' onChange={(e) => this.props.edit_address(e)} value={this.props.city} />
                  <Input fluid required placeholder='State' name='state' onChange={(e) => this.props.edit_address(e)} value={this.props.state} />
                  <Input fluid required placeholder='Zip' name='zip' onChange={(e) => this.props.edit_address(e)} value={this.props.zip} />
                  <Button type='submit'>Add Address</Button>
                </form>
              </div>
            <Modal.Content image></Modal.Content>
          </Modal>

          <Modal size='small' trigger={<Icon name='pencil'/>}>
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image scrolling>
              <Modal.Description >
                <Header>Modal Header</Header>
                <Card.Group itemsPerRow='2' centered>
                  {this.props.addresses.map(address => <AddressCard selectAddress={this.handleAddressChange} address={address}/>)}
                  </Card.Group>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary>
                Proceed <Icon name='chevron right' />
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {...state.user, ...state.address}
}

const mapDispatchToProps = (dispatch) => {
  return {edit_address: (e) => dispatch({type:'EDIT_ADDRESS', value: e.target.value, name: e.target.name}),
          addressChange: (data) => dispatch({type: 'SELECT_ADDRESS', value: data}),
          reset_form: () => dispatch({type: 'RESET_FORM'}) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressContainer)
