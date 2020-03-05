import React, { Component} from 'react'
// import React, {  } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Icon } from 'semantic-ui-react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import {connect} from 'react-redux'
// import { MAP } from '../../key'


class Map extends Component {

    state = {
        latitude: this.props.order.address.lat,
        longitude: this.props.order.address.long,
        width: '100%',
        height: "40vh",
        zoom: 11,
    }

    handleMapChange = (viewport) => {
        console.log(viewport);
        this.setState({
            longitude: viewport.longitude,
            latitude: viewport.latitude,
            zoom: viewport.zoom
        })
    }

    componentDidMount(){
        let coord = {lat: 33.793210, long: -84.395570 }
        this.props.change_location(coord)
    }
    

    // handleMarkers = (place) => {
    //     // console.log(place.coordinates.latitude);
    //     // console.log(place.coordinates.longitude);
        
    //     return <Marker key={place.id} latitude={place.coordinates.latitude} longitude={place.coordinates.longitude}>
          
    //         <Icon onClick={e => {this.setState({selected: place})}} color='violet' name='food' />
          
    //     </Marker>
    handleReceivedConversation = (some) =>{
        if(this.props.order.status === 'PROCESSING'){
           this.props.change_location(some)
        }
        
        
    }



    render() {
        return (
            <div>
                <ActionCableConsumer channel={{channel: "LocationChannel"}} onReceived={this.handleReceivedConversation} />
                <ReactMapGL latitude={this.state.latitude} longitude={this.state.longitude} width={this.state.width} height={this.state.height} zoom={this.state.zoom} mapboxApiAccessToken='pk.eyJ1IjoieWFzaDgyMDk5IiwiYSI6ImNrNXprZGExbjE0ZTkzb25lbGtjMThqY2EifQ.xVgPsuuHGfESZb20kpkV4Q' onViewportChange={viewport => this.handleMapChange(viewport) }>
                        <Marker latitude={this.props.order.address.lat} longitude={this.props.order.address.long}>
                         <Icon color='violet' name='map marker alternate' />
                        </Marker>
                        <Marker latitude={this.props.lat} longitude={this.props.long}>
                         <Icon color='violet' name='car' />
                        </Marker>
                </ReactMapGL>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {...state.location}
}

const mapDispatchToProps = (dispatch) => {
    return {change_location: (data) => dispatch({type:'CHANGE', value:data })}
}


export default connect(mapStateToProps,mapDispatchToProps)(Map)