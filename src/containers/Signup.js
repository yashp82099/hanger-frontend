import React from 'react'
import SignUp from '../components/Signup/SignUpForm'
import Pictures from '../components/Login/Pictures'
import logo from './logo.png'
import {withRouter} from 'react-router-dom'
import { Button, Divider, Container, Form, Image, Grid, Segment } from 'semantic-ui-react'


function Signup(props) {
    return (
        <div>
              <br/>
              <Image src={logo} centered size='medium' />
              <hr/>
             <Container>
            
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <SignUp/>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Pictures/>
                </Grid.Column>
                </Grid>

                <Divider vertical>Hanger</Divider>
            </Segment>
        </Container> 
        <Container textAlign='center'>
        <Button onClick={()=>  props.history.push({pathname: '/home'})} color='blue'>Back to LogIn</Button>
        </Container>
          </div>
    )
}

export default withRouter(Signup)
