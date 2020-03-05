import React, { Component } from 'react'
// import {connect} from 'react-redux'
import LoginForm from '../components/Login/LoginForm'
import Pictures from '../components/Login/Pictures'
import logo from './logo.png'
import {withRouter} from 'react-router-dom'
import { Button, Divider, Container, Form, Image, Grid, Segment } from 'semantic-ui-react'

class Login extends Component {

    componentDidMount(){
        localStorage.removeItem('token')
    }

    render(){
      return (
          <div>
              <br/>
              <Image src={logo} centered size='medium' />
              <hr/>
             <Container>
            
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <LoginForm/>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Pictures/>
                </Grid.Column>
                </Grid>

                <Divider vertical>Hanger</Divider>
            </Segment>
        </Container> 
        <Container textAlign='center'>
        <Button onClick={()=>  this.props.history.push({pathname: '/signup'})} color='blue'>Create Account</Button>
        </Container>
          </div>
        
        
    )  
    }
    
}

export default withRouter(Login)
