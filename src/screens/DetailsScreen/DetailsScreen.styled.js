import { StyleSheet } from 'react-native';


const styles = () => {
  
    return StyleSheet.create({
        mainView: {
            flex: 1, 
            backgroundColor: '#f7f1e9', 
            justifyContent: 'space-around'
        },
        carouselView: {
            flex: 1
        },
        image: {
            width: '100%', 
            height: '100%'
        },
        paginationView: {
            position: 'absolute', 
            top: 240, 
            marginHorizontal: 30
        },
        dotStyle: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#4d6447',
            borderWidth: 2,
            borderColor: '#f7f1e9'
        },
        inactiveDotStyle: {
            backgroundColor: '#f7f1e9'
        },
        titleDistanceMainView: { 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            margin: 10
        },
        nameText: {
            fontSize: 23
        },
        ratingMainView: {
            flexDirection: 'row', 
            borderWidth: 0.8, 
            width: 60, 
            height: 30, 
            alignItems: 'center', 
            justifyContent: 'center'
        },
        ratingText: {
            fontSize: 20, 
            fontWeight: '500'
        },
        markerTextView: {
            flexDirection: 'row', 
            alignItems: 'center', 
            marginLeft: 15
        },
        markerText: {
            fontSize: 15,
            marginLeft: 5
        },
        descriptionView: {
            marginHorizontal: 10, 
            marginTop: 15
        },
        description: {
            fontSize: 17
        },
        lineView: {
            marginVertical: 20, 
            marginHorizontal: 10 
        },
        roomTypesMainView: {
            flex: 0.5, 
            marginHorizontal: 10
        },
        roomTypesText: {
            fontSize: 20, 
            fontWeight: '600'
        },
        flatListItemView: {
            borderWidth: 0.5, 
            width: 140, 
            height: 30, 
            backgroundColor: '#c8caab', 
            borderRadius: 5, 
            margin: 5, 
            justifyContent: 'center', 
            alignItems: 'center'
        },
        footerView: {
            flex: 0.3, 
            backgroundColor: '#c8caab'
        },
        footerSubView: {
            flex: 1,
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginHorizontal: 5
        },
        textView: {
            flexDirection: 'row', 
            alignItems: 'center'
        },
        fromText: {
            fontSize: 18
        },
        priceText: {
            color: '#c1824d',
            fontWeight: 'bold', 
            fontSize: 18
        },
        buttonView: {
            width: 150, 
            height: 50, 
            backgroundColor: '#4d6447', 
            alignItems: 'center',
            justifyContent: 'center', 
            borderRadius: 5
        },
        buttonText: {
            color: 'white', 
            fontSize: 20
        }
    });
  };

export default styles;