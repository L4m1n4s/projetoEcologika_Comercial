import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { IdResiduosSelecionados, SetResiduosFinal, residuos, setResiduosSelecionadas } from './holder';
import { ModalResiduoValores } from '../modal/modalModels';

export function ListaResiduos({ navigation }) {

  //Salva os dados com os IDs que batem
  const [dadosFiltrados, setDadosFiltrados] = useState([]);

  //Verificando se a Modal esta ativa
  const [modalVisible, setModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  const abrirModal = (index) => {
    setModalIndex(index);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalIndex(null);
    setModalVisible(false);
  };

  function salvarResiduos() {
    navigation.navigate('Dados Contrato');
    SetResiduosFinal(dadosFiltrados);
  }

  useEffect(() => {
    // Use a função filter para encontrar dados correspondentes aos IDs
    const dadosFiltrados = residuos.filter((item) => IdResiduosSelecionados.includes(item.value));
    //setDadosFiltrados(dadosFiltrados);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.gridHolderTop}>
        <View style={styles.gridClasse}>
          <Text style={styles.textGrid}>Classe</Text>
        </View>

        <View style={styles.gridNome}>
          <Text style={styles.textGrid}>Residuo</Text>
        </View>

        <View style={styles.gridTratamento}>
          <Text style={styles.textGrid}>Tecnologia de Tratamento</Text>
        </View>

        <View style={styles.gridMedida}>
          <Text style={styles.textGrid}>Unidade de Medida</Text>
        </View>

        <View style={styles.gridValor}>
          <Text style={styles.textGrid}>Valor</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollview} overScrollMode='never' showsVerticalScrollIndicator={false}>
        <View>
          {dadosFiltrados.map((residuo, index) => (
            <View key={index} style={styles.gridHolder}>

              <View style={styles.gridClasse}>
                <Text style={styles.textGrid}>{`${residuo.classeResiduo}`}</Text>
              </View>

              <View style={styles.gridNome}>
                <Text style={styles.textGrid}>{`${residuo.label}`}</Text>
              </View>

              <View style={styles.gridTratamento}>
                <Text style={styles.textGrid}>{`${residuo.tecnologiaTratamento}`}</Text>
              </View>

              <View style={styles.gridMedida}>
                <Text style={styles.textGrid}>{`${residuo.unidadeMedida}`}</Text>
              </View>

              <TouchableOpacity style={styles.gridValor} onPress={() => abrirModal(index)}>
                <Text style={styles.textGrid}>R${`${residuo.valor}`}</Text>
              </TouchableOpacity>


              {/* Modal condicional */}
              {modalIndex === index && (
                <Modal
                  transparent={false}
                  animationType='fade'
                  visible={modalVisible}
                  onRequestClose={fecharModal}>
                  <ModalResiduoValores handleClose={fecharModal} residuo={residuo} />
                </Modal>
              )}
            </View>
          ))}</View>
      </ScrollView>


      <TouchableOpacity style={styles.button} onPress={() => salvarResiduos()}>
        <Text style={styles.buttonText}>Adicionar dados do contrato</Text>
      </TouchableOpacity>




    </View>

  )
}

const styles = StyleSheet.create({
  scrollview: {
    marginBottom:10,
    width:"100%",
    height:'auto'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  button: {
    backgroundColor: "#000",
    width: "90%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom:25,
    marginTop:25,
  },
  buttonText: {
    color: "#FFF",
    textAlign: 'center',
  },
  textGrid: {
    color:'#000',    
    fontSize:12,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  gridClasse: {
    borderWidth: 3,
    width: '15%'
  },
  gridNome: {
    borderWidth: 3,
    width: '29%'
  },
  gridTratamento: {
    borderWidth: 3,
    width: '28%'
  },
  gridMedida: {
    borderWidth: 3,
    width: '15%'
  },
  gridValor: {
    borderWidth: 3,
    width: '20%'
  },
  gridHolder: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal:15,
  },
  gridHolderTop: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#F0FA1E',
    marginHorizontal:15,
  },
  scrollview:{
    width:'100%',
    borderBottomWidth:5,
  },


})