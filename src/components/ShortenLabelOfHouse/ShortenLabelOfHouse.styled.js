import { StyleSheet } from 'react-native';


const styles = () => {
  
    return StyleSheet.create({
        mainView: { 
            margin: 10, 
            height: 120, 
            backgroundColor: '#f7f1e9', 
            flexDirection: 'row'
        },
        imageView: {
            width: '35%', 
            height: '100%'
        },
        image: {
            width: '100%', 
            height: '100%'
        }
    });
  };

export default styles;