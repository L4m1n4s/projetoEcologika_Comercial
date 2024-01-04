import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { IdResiduosSelecionados, SetResiduosFinal, residuos, setResiduosSelecionadas } from './holder';
import { ModalLoading, ModalResiduoValores } from '../modal/modalModels';

export function ListaResiduos({ navigation }) {

  //Variavel para decidir a visibilidade da modal de carregamento
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    // Simula um carregamento por 2 segundos
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Limpa o timeout quando o componente é desmontado ou quando o carregamento é concluído
    return () => clearTimeout(timeoutId);
  }, []);

  function salvarResiduos() {
    navigation.navigate('Dados Contrato');
    SetResiduosFinal(dadosFiltrados);
  }

  useEffect(() => {
    // Use a função filter para encontrar dados correspondentes aos IDs
    const dadosFiltrados = residuos.filter((item) => IdResiduosSelecionados.includes(item.value));
    setDadosFiltrados(dadosFiltrados);
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
                <Text style={styles.textGrid}>{`${residuo.valor}`}</Text>
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

      <Modal
        visible={isLoading}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{ marginTop: 10, color:"#000", fontSize:30 }}>Carregando lista de residuos...</Text>
          </View>
        </View>
      </Modal>

    </View>

  )
}

const styles = StyleSheet.create({
  scrollview: {
    marginBottom: 10,
    width: "100%",
    height: 'auto'
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
    marginBottom: 25,
    marginTop: 25,
  },
  buttonText: {
    color: "#FFF",
    textAlign: 'center',
  },
  textGrid: {
    color: '#000',
    fontSize: 12,
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
    width: '16%'
  },
  gridHolder: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  gridHolderTop: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#F0FA1E',
    marginHorizontal: 15,
  },
  scrollview: {
    width: '100%',
    borderBottomWidth: 5,
  },


})