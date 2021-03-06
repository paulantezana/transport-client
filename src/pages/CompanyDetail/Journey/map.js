import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    DirectionsRenderer,
} from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyABQyZQtbDS8rDSrcR7ikMTBz_Rtv8pNv4&v=3.exp&libraries=geometry,drawing,places',
        // googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `75vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();
            // console.log(this.props,'PROPSSSSSSSSSss');
            DirectionsService.route(
                {
                    origin: new google.maps.LatLng(-14.236181, -71.231494),
                    destination: new google.maps.LatLng(-14.282332, -71.219851),
                    travelMode: google.maps.TravelMode.DRIVING,
                    waypoints: [
                        {
                            location: new google.maps.LatLng(-14.248244, -71.238827),
                            stopover: false,
                        },
                        {
                            location: new google.maps.LatLng(-14.258107, -71.228346),
                            stopover: false,
                        },
                        {
                            location: new google.maps.LatLng(-14.271588, -71.226526),
                            stopover: false,
                        },
                        {
                            location: new google.maps.LatLng(-14.277884, -71.229287),
                            stopover: false,
                        },
                        {
                            location: new google.maps.LatLng(-14.278513, -71.226337),
                            stopover: false,
                        },
                        {
                            location: new google.maps.LatLng(-14.278305, -71.225125),
                            stopover: false,
                        },
                    ],
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        this.setState({
                            directions: result,
                        });
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        },
    })
)(props => {
    return (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: props.locations[0].latitude, lng: props.locations[0].longitude }}
        >
            {props.isMarkerShown &&
                props.locations.map((item, key) => (
                    <Marker key={key} position={{ lat: item.latitude, lng: item.longitude }}>
                        <InfoBox>
                            <div
                                style={{
                                    backgroundColor: `yellow`,
                                    opacity: 0.75,
                                    padding: `4px`,
                                    width: '100px',
                                }}
                            >
                                <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                                    {item.name}
                                </div>
                            </div>
                        </InfoBox>
                    </Marker>
                ))}
            ,{props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>
    );
});

class Maps extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isMarkerShown: false,
            locations: [
                {
                    latitude: -14.253026,
                    longitude: -71.230565,
                },
            ],
        };
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.delayedShowMarker = this.delayedShowMarker.bind(this);
    }

    componentDidMount() {
        this.delayedShowMarker();
    }

    delayedShowMarker() {
        setTimeout(() => {
            this.setState({ isMarkerShown: true });
        }, 3000);
    }

    handleMarkerClick() {
        this.setState({ isMarkerShown: false });
        this.delayedShowMarker();
    }

    render() {
        return (
            <div>
                <MyMapComponent
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                    locations={this.state.locations}
                />
            </div>
        );
    }
}

export default Maps;
