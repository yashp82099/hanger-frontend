import React from 'react'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
  } from 'semantic-ui-react'
  import './home.css'
  import {connect} from 'react-redux'

const colorOptions = [
{name:'', text: 'All', value: '' },
{name:'color', text: 'Black', value: 'black' },
{name:'color', text: 'Brown', value: 'brown' },
{name:'color', text: 'Green', value: 'green' },
{name:'color', text: 'Red', value: 'red' },
{name:'color', text: 'White', value: 'white' },
{name:'color', text: 'Denim', value: 'denim' },
{name:'color', text: 'Yellow', value: 'yellow' },
{name:'color', text: 'Grey', value: 'grey' },
{name:'color', text: 'Blue', value: 'blue' },
{name:'color', text: 'Orange', value: 'orange' },
{name:'color', text: 'Purple', value: 'purple' }
]

const SortOptions = [
    {name:'', text: 'All', value: '' },
    {name:'sort', text: 'Low - High', value: 'low' },
    {name:'sort', text: 'High - Low', value: 'high' },
    {name:'sort', text: 'Rating', value: 'rating' },
    {name:'sort', text: 'Popular', value: 'popular' },
    ]

const SizeOptions = [
    {name:'', text: 'All', value: '' },
    {name:'size', text: 'Extra Small', value: 'xs' },
    {name:'size', text: 'Small', value: 's' },
    {name:'size', text: 'Medium', value: 'm' },
    {name:'size', text: 'Large', value: 'l' },
    {name:'size', text: 'Extra Large', value: 'xl' },
    ]


const genderOptions = [
    {name:'', text: 'All', value: '' },
    { key: 'm', name:'genre', text: 'Men', value: 'men' },
    { key: 'f', name:'genre', text: 'Women', value: 'women' },
    ]

    const ProductsUrl2 = 'http://localhost:3000/get/products/2'


function Filter(props) {

    const handleChange = (e,{value}, name) => {
        // e.target.preventDefault()   
        // debugger
        console.log(value);
        console.log(name);
        
        
        props.edit_filter(name, e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch(ProductsUrl2,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    product:{
                        search: props.search,
                        sort: props.sort,
                        color: props.color,
                        gender: props.gender,
                        size: props.size,
    
                    }
                })
            }).then(res => res.json())
            .then(data => props.getProducts(data))
            props.unselect()
        
    }

    return (
        <div className='filterDiv'>
            <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
        <Form.Select
            id='color'
            name='color'
            control={Select}
            label='Color'
            options={colorOptions}
            placeholder='Color'
            onChange={(e, {value}) => {
                e.preventDefault()
                handleChange(e,{value}, 'color')
            }}
          />
        <Form.Select
            id='size'
            control={Select}
            label='Size'
            options={SizeOptions}
            placeholder='Size'
            onChange={(e, {value}) => {
                e.preventDefault()
                handleChange(e,{value}, 'size')
            }}
          />
        <Form.Select
            id='gender'
            control={Select}
            label='Gender'
            options={genderOptions}
            placeholder='Gender'
            onChange={(e, {value}) => {
                e.preventDefault()
                handleChange(e,{value}, 'gender')
            }}
          />

        </Form.Group>
            <Form.Field
                id='sort'
                size='small'
                control={Select}
                label='Sort'
                options={SortOptions}
                placeholder='Sort'
                onChange={(e, {value}) => {
                    e.preventDefault()
                    handleChange(e,{value}, 'sort')
                }}
            />


        <Form.Field control={Button}>Search</Form.Field>
      </Form>
        </div>
        
    )
}



const mapStateToProps = (state) => {
    return {...state.home,...state.filter}
}

const mapDispatchToProps = (dispatch) => {
    return {edit_filter: (name, e)=> dispatch({type: 'EDIT_FILTER', name: name ,  value: e.target.querySelector('.text').innerText}),
            getProducts: (data) => dispatch({type: 'NEW_PRODUCTS', value:data}),
            unselect: ()=> dispatch({type:'UNSELECT'})}
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)
