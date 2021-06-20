import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import CommonHelper from '../utils';

const Helper = new CommonHelper();

type State = {
  fields: Object
};

type Props = {
  initialCenter?: Object
};

export class MapContainer extends Component<Props, State> {
  static defaultProps = {
    initialCenter: {}
  };

  state = {
    fields: {}
  };

  async componentDidMount() {
    const { initialCenter } = this.props;
    if (initialCenter && initialCenter.latitude) {
      this.setInitialCenter(initialCenter);
    } else {
      const { lat, lng } = await this.getcurrentLocation();
      this.setState(prev => ({
        fields: {
          ...prev.fields,
          location: { lat, lng }
        }
      }));
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const { initialCenter } = this.props;
    if (nextProps.initialCenter !== initialCenter) {
      if (nextProps.initialCenter && nextProps.initialCenter.latitude) {
        this.setInitialCenter(nextProps.initialCenter);
      }
    }
  }

  setInitialCenter = (initialCenter: Object) => {
    if (initialCenter && initialCenter.latitude) {
      const { latitude, longitude } = initialCenter;
      this.setState(prev => ({
        fields: {
          ...prev.fields,
          location: { lat: latitude, lng: longitude }
        }
      }));
    }
  };

  getcurrentLocation = () => {
    if (navigator && navigator.geolocation) {
      return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(pos => {
          const { coords } = pos;
          resolve({
            lat: coords.latitude,
            lng: coords.longitude
          });
        });
      });
    }
    return { lat: 0, lng: 0 };
  };

  addMarker = (location: Object, map: Object) => {
    const { updatePortSelection } = this.props;
    this.setState(prev => ({
      fields: {
        ...prev.fields,
        location
      }
    }));
    map.panTo(location);
    updatePortSelection(location.lat(), location.lng());
  };

  render() {
    const { fields } = this.state;
    const { location } = fields;
    const { google } = this.props;
    return (
      <Map
        google={google}
        zoom={14}
        initialCenter={location}
        center={location}
        onClick={(t, map, c) => this.addMarker(c.latLng, map)}
      >
        <Marker position={location} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: Helper.GoogleApiKey
})(MapContainer);
