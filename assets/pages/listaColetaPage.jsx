import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { IdColetasSelecionadas, centroSelecionado, centros, coletas, nomeCentroSelecionado, setNomeCentro } from './holder';
import { ModalColetaValores } from '../modal/modalModels';

export function ListaColeta({ navigation }) {

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

  const irParaListaResiduos = () => {
    //showLoadingModal()
    navigation.navigate('Residuos')
  };

  useEffect(() => {
    // Use a função filter para encontrar dados correspondentes aos IDs
    const dadosFiltrados = coletas.filter((item) => IdColetasSelecionadas.includes(item.value));
    setDadosFiltrados(dadosFiltrados);
  }, []);

  useEffect(() => {
    let itemEncontrado = centros.find(item => item.value === centroSelecionado);
    setNomeCentro(itemEncontrado.chave);
    //console.log(nomeCentroSelecionado);
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.gridHolderTop}>
        <View style={styles.grid}>
          <Text style={styles.textGrid}>Coleta</Text>
        </View>

        <View style={styles.grid}>
          <Text style={styles.textGrid}>Unidade de Medida</Text>
        </View>

        <View style={styles.grid}>
          <Text style={styles.textGrid}>Valor</Text>
        </View>
      </View>


      <ScrollView style={styles.scrowView} overScrollMode='never' showsVerticalScrollIndicator={false}>
        {dadosFiltrados.map((coleta, index) => (
          <View key={index} style={styles.gridHolder}>

            <View style={styles.grid}>
              <Text style={styles.textGrid}>{`${coleta.label}`}</Text>
            </View>

            <View style={styles.grid}>
              <Text style={styles.textGrid}>{`${coleta.unidadeMedida}`}</Text>
            </View>

            <TouchableOpacity style={styles.grid} onPress={() => abrirModal(index)}>
              <Text style={styles.textGrid}>{`${coleta.valorFinal}`}</Text>
            </TouchableOpacity>


            {/* Modal condicional */}
            {modalIndex === index && (
              <Modal
                transparent={false}
                animationType='fade'
                visible={modalVisible}
                onRequestClose={fecharModal}
              >
                <ModalColetaValores handleClose={fecharModal} dadosFiltrados={dadosFiltrados} coleta={coleta} />
              </Modal>
            )}


          </View>



        ))}</ScrollView>


      <TouchableOpacity style={styles.button} onPress={() => irParaListaResiduos()}>
        <Text style={styles.buttonText}>Coleta de Residuos</Text>
      </TouchableOpacity>


    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    backgroundColor: "#000",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 25,
    marginTop: 25,
  },
  buttonText: {
    color: "#FFF",
  },
  textGrid: {
    color: '#000',
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  grid: {
    borderWidth: 3,
    width: '30%'
  },
  gridHolder: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  gridHolderTop: {
    flexDirection: 'row',
    backgroundColor: '#F0FA1E',
    alignSelf: 'center',
  },
  scrowView: {
    borderBottomWidth: 5,
    width: '100%'
  },


})