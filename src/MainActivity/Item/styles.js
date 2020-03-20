import { StyleSheet, Dimensions } from "react-native";

var styles = StyleSheet.create({
    imgBGR: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flexDirection: "column"
    },
    prentScroll: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },
    textName: {
        marginTop: 50,
        textAlign: "center",
        fontSize: 30,
        color: 'white'

    },
    textSummary: {
        textAlign: "center",
        fontSize: 15,
        color: 'white',
        marginTop: 10,
    },
    textTemparature: {
        textAlign: "center",
        fontSize: 100,
        color: 'white',
        paddingLeft: 30,
        fontFamily: "Comic Sans MS",
    },
    view1: {
        borderBottomColor: '#E0F2F7',
        borderBottomWidth: 1,
        flexDirection: "column",
        marginBottom: 10,
    },
    view2: {
        flexDirection: "row",
        borderBottomColor: '#E0F2F7',
        borderBottomWidth: 1,
        height: 120
    },
    textTime: {
        textAlign: "left",
        fontSize: 15,
        color: 'white',
        marginLeft: 10,
        textAlign: "center",
        width: 80,
    },
    view3: {
        margin: 10,
        width: 80,
        flexDirection: 'column'
    },
    text1: {
        color: 'white',
        opacity: 0.7,
        fontSize: 13,
        textAlign: 'left'
    },
    text2: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left'
    },
    view4: {
        marginLeft: 10,
        flexDirection: 'row', 
        marginRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
        alignContent: "center",
    },
    view5: {
        flexDirection: 'column',
        borderBottomColor: '#E0F2F7',
        borderBottomWidth: 1,
        width: '50%',
    },
    textTimeItem: {
        color: 'white',
        fontSize: 15,
        textAlign: "center",
    },
    textHunidityItem: {
        color: '#58D3F7',
        fontSize: 15,
        textAlign: "center",
    },
    imgIconItem: {
        width: 40,
        height: 40,
        alignSelf: 'center'
    },
    textTemperatureItem: {
        color: 'white',
        fontSize: 18,
        alignSelf: "center",
    },
    viewDaily: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
    },
    timeDaily: {
        color: "white",
        width: 80,
        textAlign: 'center',
        fontSize: 15,
    },
    imgIconDaily: {
        marginLeft: 50,
        width: 40,
        height: 40,
        alignSelf: 'center'
    },
    hightTemperatureDaily: {
        fontSize: 15,
        color: "white",
        marginLeft: 20
    },
    lowTemperature: {
        fontSize: 15,
        color: "white",
        marginRight: 20,
        opacity: 0.8
    }



})
export default styles;