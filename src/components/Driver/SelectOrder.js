import React from 'react'
import OrderInfo from './OrderInfo'
import ReactMapGL, { Marker, Popup} from "react-map-gl";
import { Icon, Button, Menu } from 'semantic-ui-react'
import './drive.css'


function SelectOrder(props) {
    return (
        <div>
            <div>
            <ReactMapGL                 
                    latitude={props.order.address.lat} longitude={props.order.address.long} width='100%' height='100vh' zoom={16}
                    mapboxApiAccessToken='pk.eyJ1IjoieWFzaDgyMDk5IiwiYSI6ImNrNXprZGExbjE0ZTkzb25lbGtjMThqY2EifQ.xVgPsuuHGfESZb20kpkV4Q'>
                        <Marker latitude={props.order.address.lat} longitude={props.order.address.long}>
          
                         <Icon size='huge' color='blue' name='map marker alternate' />
                
                        </Marker>
            </ReactMapGL>  
            </div>
            <div className='driveDiv'>
                <OrderInfo order={props.order} />
                <div className='doneBtn'>
                    <Button color='blue' size='massive' onClick={(e)=>props.handleComplete(props.order)}>Done</Button>
                </div>

                
            </div>
            
            
        </div>
    )
}

export default SelectOrder
