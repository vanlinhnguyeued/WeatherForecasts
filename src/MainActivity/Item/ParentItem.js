import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    Dimensions,
    ImageBackground,
    TouchableWithoutFeedback,
    SectionList
} from 'react-native';
import styles from './styles';
import HourlyItem from './HourlyItem';
import DailyItem from './DailyItem'
export default class ParentItem extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            urlImage: require('../../assets/Images/Background/sun.jpg'),
        })
    }
    getDate(dt) {
        let d = new Date(dt * 1000);
        let st = d.toDateString();
        return st.slice(0, 4);
    }
    render() {
        return (
            <ImageBackground
                source={this.state.urlImage}
                style={styles.imgBGR}
            >
                <ScrollView style={styles.parentScroll}>
                    <View style={styles.view1}>
                        <Text style={styles.textName} >
                            {this.props.item.name}
                        </Text>
                        <Text style={styles.textSummary} >
                            {this.props.item.data.currently.summary}
                        </Text>
                        <Text style={styles.textTemparature}>
                            {Math.round((this.props.item.data.currently.temperature - 32) / 1.8)}°
                        </Text>
                        <Text style={styles.textTime} >
                            {this.getDate(this.props.item.data.currently.time)}
                        </Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={styles.view2}
                        onTouchStart={(ev) => {
                            this.props.parent.setContent({flex:1/3});
                        }}
                        onMomentumScrollEnd={(e)=>{
                            this.props.parent.setContent({});
                        }}
                        onScrollEndDrag={(e)=>{this.props.parent.setContent({})}}
                        // onTouchEnd={() => {
                        //     this.props.parent.onEnableScroll(true);
                        // }}
                    >
                        {this.props.item.data.hourly.data.map((item, index) => (
                                <HourlyItem
                                    item={item}
                                    key={index}
                                />
                        ))}

                    </ScrollView>
                    <View style={styles.view1} >
                        {this.props.item.data.daily.data.map((item, index) => (
                            <DailyItem
                                item={item}
                                key={index}
                            />
                        ))}
                    </View>
                    <View style={{ marginBottom: 50 }}>
                        <View style={styles.view4} >
                            <View style={styles.view5} >
                                <Text style={styles.text1} >
                                    TEMPERATURE
                            </Text>
                                <Text style={styles.text2}>
                                    {Math.round((this.props.item.data.currently.apparentTemperature - 32) / 1.8)}°
                            </Text>

                            </View>
                            <View style={styles.view5} >
                                <Text style={styles.text1} >
                                    DEW POINT
                            </Text>
                                <Text style={styles.text2}>
                                    {this.props.item.data.currently.dewPoint}%
                            </Text>

                            </View>
                        </View>
                        <View style={styles.view4} >
                            <View style={styles.view5} >
                                <Text style={styles.text1} >
                                    HUMIDITY
                            </Text>
                                <Text style={styles.text2}>
                                    {Math.round((this.props.item.data.currently.humidity) * 100)}%
                            </Text>

                            </View>
                            <View style={styles.view5} >
                                <Text style={styles.text1} >
                                    PRESSURE
                            </Text>
                                <Text style={styles.text2}>
                                    {this.props.item.data.currently.pressure}hPa
                            </Text>

                            </View>
                        </View>

                        <View style={styles.view4} >
                            <View style={styles.view5} >
                                <Text style={styles.text1} >
                                    Wind Speed
                            </Text>
                                <Text style={styles.text2}>
                                    {this.props.item.data.currently.windSpeed}km/h
                            </Text>

                            </View>
                            <View style={styles.view5} >
                                <Text style={styles.text1} >
                                    VISIBILITY
                            </Text>
                                <Text style={styles.text2}>
                                    {this.props.item.data.currently.visibility}km
                            </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
