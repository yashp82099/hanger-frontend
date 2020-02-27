import React from 'react'
import {connect} from 'react-redux'
import AddressCard from './AddressCard'
import { Button, Header, Image, Modal, Input } from 'semantic-ui-react'

function AddressContainer(props) {

    const handelSubmit = (e) => {
      e.preventDefault()
      let address = {
        name: props.name,
        address_1: props.address_1,
        address_2: props.address_2,
        city: props.city,
        state: props.state,
        zip: props.zip,
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
      .then(address => props.addressChange(address.address))
      
    }


    const handleAddressChange = (address) => {
      props.addressChange(address)
    }


    return (
        <div>
          <Modal size='mini' trigger={<Button>New Address</Button>}>
          <Modal.Header>Add Address</Modal.Header>
            <Modal.Content image></Modal.Content>
              <div>
                <form onSubmit={handelSubmit}>
                <Input fluid required placeholder='Name of Place' name='name' onChange={(e) => props.edit_address(e)} value={props.name} />
                  <Input fluid required placeholder='Address 1' name='address_1' onChange={(e) => props.edit_address(e)} value={props.address_1} />
                  <Input fluid placeholder='Address 2' name='address_2' onChange={(e) => props.edit_address(e)} value={props.address_2} />
                  <Input fluid required placeholder='City' name='city' onChange={(e) => props.edit_address(e)} value={props.city} />
                  <Input fluid required placeholder='State' name='state' onChange={(e) => props.edit_address(e)} value={props.state} />
                  <Input fluid required placeholder='Zip' name='zip' onChange={(e) => props.edit_address(e)} value={props.zip} />
                  <Button type='submit'>Add Address</Button>
                </form>
              </div>
            <Modal.Content image></Modal.Content>
          </Modal>
            {props.addresses[0]? 
            props.addresses.map(address => <AddressCard selectAddress={handleAddressChange} address={address}/>):
            <h2>NO ADDRESSES</h2>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {...state.user, ...state.address}
}

const mapDispatchToProps = (dispatch) => {
  return {edit_address: (e) => dispatch({type:'EDIT_ADDRESS', value: e.target.value, name: e.target.name}),
          addressChange: (data) => dispatch({type: 'SELECT_ADDRESS', value: data}) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressContainer)
