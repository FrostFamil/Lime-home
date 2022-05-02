import { StyleSheet } from 'react-native';


const styles = () => {
  
    return StyleSheet.create({
        mainView: { 
            margin: 10, 
            height: 120, 
            backgroundColor: '#f7f1e9', 
            flexDirection: 'row',
            borderWidth: 1
        },
        imageView: {
            width: '35%', 
            height: '100%'
        },
        image: {
            width: '100%', 
            height: '100%'
        },
        textsView: {
            marginLeft: 5, 
            justifyContent: 'space-around'
        },
        nameText: {
            fontSize: 23
        },
        markerTextView: {
            flexDirection: 'row', 
            alignItems: 'center'
        },
        distanceText: {
            fontSize: 15, 
            marginLeft: 5
        },
        lineView: {
            marginVertical: 5
        },
        priceView: {
            flexDirection: 'row', 
            alignItems: 'center'
        },
        fromText: {
            fontSize: 15
        },
        price: {
            color: '#c1824d', 
            fontWeight: 'bold'
        }
    });
  };

export default styles;