import { StyleSheet } from 'react-native';


const styles = () => {
  
    return StyleSheet.create({
        markerView: {
            zIndex: 1000,
            width: 35, 
            height: 35, 
            backgroundColor: '#4b4b4d', 
            alignItems: 'center', 
            justifyContent: 'center'
        }
    });
  };

export default styles;