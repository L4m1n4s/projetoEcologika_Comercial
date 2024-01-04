import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

export function Home({ navigation } : NativeStackScreenProps<any>) {

  return (
    <View style={styles.container}>
      <Image source={require('@ecologika/assets/images/eco.png')} style={styles.icon}/>

      <Text style={styles.title}>Selecionar Propostas:</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gerenciamento de Residuos')}>
          <Text style={styles.buttonText}>Gerenciamento de Residuos</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:'25%',
  },
  icon:{
    width:150,
    height:150,
    marginBottom:30,
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
  },
  button:{
    backgroundColor:"#000",
    width:"80%",
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    marginTop:20,
  },
  buttonText:{
    color:"#FFFFFF",
    fontSize:20,
  },
});
