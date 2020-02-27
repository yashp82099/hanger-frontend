import React, { Component} from 'react'
// import React, {  } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Icon } from 'semantic-ui-react'
// import { MAP } from '../../key'


export default class Map extends Component {


    

    // handleMarkers = (place) => {
    //     // console.log(place.coordinates.latitude);
    //     // console.log(place.coordinates.longitude);
        
    //     return <Marker key={place.id} latitude={place.coordinates.latitude} longitude={place.coordinates.longitude}>
          
    //         <Icon onClick={e => {this.setState({selected: place})}} color='violet' name='food' />
          
    //     </Marker>



    render() {
        return (
            <div>
                <ReactMapGL                 
                    latitude={this.props.coordinates.lat} longitude={this.props.coordinates.log} width='100%' height='40vh' zoom={11}
                    mapboxApiAccessToken='pk.eyJ1IjoieWFzaDgyMDk5IiwiYSI6ImNrNXprZGExbjE0ZTkzb25lbGtjMThqY2EifQ.xVgPsuuHGfESZb20kpkV4Q'>
                        <Marker latitude={this.props.coordinates.lat} longitude={this.props.coordinates.log}>
          
                         <Icon color='violet' name='map marker alternate' />
                
                        </Marker>
                </ReactMapGL>

            </div>
        )
    }
}
