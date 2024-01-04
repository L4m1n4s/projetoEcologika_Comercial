import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { centros, coletas, residuos, setCentroDeCusto, setColetasSelecionadas, setResiduosSelecionadas } from '../helpers/holder';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


export function GerenciamentoResiduos({ navigation } : NativeStackScreenProps<any>) {


  const [openCentro, setOpenCentro] = useState(false);
  const [valueCentro, setValueCentro] = useState(null);
  const [itemsCentro, setItemsCentro] = useState(centros);

  const [openColeta, setOpeColeta] = useState(false);
  const [valueColeta, setValueColeta] = useState([]);
  const [itemsColeta, setItemsColeta] = useState(coletas);

  const [openResiduos, setOpenResiduos] = useState(false);
  const [valueResiduos, setValueResiduos] = useState([]);
  const [itemsResiduos, setItemsResiduos] = useState(residuos);

  return (
    <View style={styles.container}>

      <Text style={styles.tittle}>Centro de Custo:</Text>
      <DropDownPicker style={styles.dropDown}
        zIndex={7}
        open={openCentro}
        value={valueCentro}
        items={itemsCentro}
        maxHeight={300}
        textStyle={styles.dropDownText}
        placeholder="Selecionar Centro de Custo"
        setOpen={setOpenCentro}
        setValue={setValueCentro}
        setItems={setItemsCentro}
        onChangeValue={() => setCentroDeCusto(valueCentro ?? 0)}
      />

      <Text style={styles.tittle}>Coleta e Transporte:</Text>
      <DropDownPicker style={styles.dropDown}
        multiple={true}
        min={0}
        max={coletas.length}
        maxHeight={300}
        textStyle={styles.dropDownText}
        placeholder="Selecionar Coleta e Transporte"
        multipleText={valueColeta.length + " Residuos selecionados"}
        zIndex={6}
        open={openColeta}
        value={valueColeta}
        items={itemsColeta}
        setOpen={setOpeColeta}
        setValue={setValueColeta}
        setItems={setItemsColeta}
        onChangeValue={() => setColetasSelecionadas(valueColeta)}
      />

      <Text style={styles.tittle}>Residuos:</Text>
      <DropDownPicker style={styles.dropDown}
        multiple={true}
        min={0}
        max={residuos.length}
        maxHeight={300}
        textStyle={styles.dropDownText}
        placeholder="Selecionar Residuos"
        multipleText={valueResiduos.length + " Residuos selecionados"}
        zIndex={5}
        open={openResiduos}
        value={valueResiduos}
        items={itemsResiduos}
        setOpen={setOpenResiduos}
        setValue={setValueResiduos}
        setItems={setItemsResiduos}
        onChangeValue={() => setResiduosSelecionadas(valueResiduos)}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Coletas')}>
        <Text style={styles.buttonText}>Ir para lista de Coleta e Transporte</Text>
      </TouchableOpacity>

    </View>
  )


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    alignItems: 'center',
  },
  tittle: {
    fontWeight: 'bold',
    color:'#000',
    marginTop: 15,
    marginBottom: 15,
    fontSize: 25,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: "#000",
    width: "80%",
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 50,
    alignSelf: 'center',
  },
  buttonText: {
    color: "#FFF",
    textAlign: 'center',
  },
  dropDown:{
    borderWidth:2,
    marginBottom:25,
  },
  dropDownText:{
    fontSize:17,
    textAlign:'center',

  },

})
