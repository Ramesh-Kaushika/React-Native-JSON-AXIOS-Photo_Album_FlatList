

import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ButtonCom from './components/ButtonCom/ButtonCom';
import { Text } from "react-native-paper";
import CardCom from './components/CardCom/CardCom';



export default function App({}) {


  
  return (
    <SafeAreaView style={styles.container}>
    <View
    style={[
      styles.container,
      {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
      },
    ]}>
   
    <View  style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
    <Text style={{fontWeight: 'bold'}} variant="headlineLarge">JSON Card Generator</Text>

    </View>
    <View  style={{flex: 6,}}>
      <CardCom/>
    
    </View>
   
  </View>
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor:'#ffffff',
  },
})
