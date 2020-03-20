import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';
import styles from './styles';
export default class DailyItem extends Component {
    getTime(dt) {
        let d = new Date(dt * 1000);
        let st = d.toDateString();
        return st.slice(0, 3);
    }
    getIcom(id) {
        var icon;
        switch (id) {
            case "clear-day":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/01.png';
                    break;
                }
            case "clear-night":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/33.png';
                    break;
                }
            case "rain":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/18.png';
                    break;
                }
            case "snow":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/22.png';
                    break;
                }
            case "sleet":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/25.png';
                    break;
                }
            case "wind":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/32.png';
                    break;
                }
            case "fog":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/11.png';
                    break;
                }
            case "cloudy":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/07.png';
                    break;
                }
            case "partly-cloudy-day":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/03.png';
                    break;
                }
            case "partly-cloudy-night":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/35.png';
                    break;
                }
            case "hail":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/16.png';
                    break;
                }
            case "thunderstorm":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/sm/15.png';
                    break;
                }
            case "tornado":
                {
                    icon = 'https://uds-static.api.aero/weather/icon/lg/32.png';
                    break;
                }
            default:
                icon = 'https://uds-static.api.aero/weather/icon/lg/32.png';
        }
        return icon;
    }
    render() {
        return (
            <View style={styles.viewDaily}>
                <Text  style={styles.timeDaily} >
                    {this.getTime(this.props.item.time)}
                </Text>
                <Image style={styles.imgIconDaily} source={{ uri: this.getIcom(this.props.item.icon) }} />
                <Text style={styles.hightTemperatureDaily} >
                    {Math.round((this.props.item.temperatureHigh - 32) / 1.8)}°
                </Text>
                <Text style={styles.lowTemperature}>
                    {Math.round((this.props.item.temperatureLow - 32) / 1.8)}°
                </Text>
            </View>
        )
    }
}