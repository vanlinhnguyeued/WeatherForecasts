import React, { Component } from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import styles from "./styles";
import apiKey from '../data/APIKey';
import ParentItem from './Item/ParentItem';

export default class MainActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      enableScrollViewScroll: true,
      location: [{
        'name': 'Da Nang',
        'coordinates': '16.07,108.22',
        'data': 0
      },
      {
        'name': 'Ha Noi',
        'coordinates': '21.02,105.84',
        'data': 0
      },
      {
        'name': 'HoChiMinh City',
        'coordinates': '10.83,106.67',
        'data': 0
      },]
    }

  }
  setContent(value){
      this.setState({content: value})
  }
  onEnableScroll = (value) => {
    this.setState({
      enableScrollViewScroll: value,
    });
  };
  async getDataFromAPI(coordinates) {
    let url = 'https://api.darksky.net/forecast/' + apiKey + '/' + coordinates;
    try {
      let response = await fetch(url)
      let responseJSON = await response.json();
      return responseJSON;

    } catch (error) {
      console.log(error);

    }
  }
  addDatatoWeatherData = async () => {
    let a = this.state.location;
    for (var i in this.state.location) {
      let data = await this.getDataFromAPI(a[i].coordinates);
      a[i] = Object.assign({}, a[i], {
        data
      })

    }
    this.setState({ location: a });

  }
  componentDidMount() {
    this.addDatatoWeatherData();
  }
  render() {

    if (this.state.location[1].data == 0) {
      return (
        <View style={styles.mainScrollView}>
          <ActivityIndicator size='small' color='#D8D8D8' />
        </View>
      )
    }
    else {
      console.log(this.state.location);
      return (
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          style={styles.mainScrollView}
          parent={this}
          scrollEnabled={this.state.enableScrollViewScroll}
          contentContainerStyle={this.state.content}
        >
          {this.state.location.map((item, i) => (
            <ParentItem
              item={item} key={i} parent={this}
            />
          ))}
        </ScrollView>
      )
    }

  }
}
