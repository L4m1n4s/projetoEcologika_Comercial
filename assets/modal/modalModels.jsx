import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { centroSelecionado, nomeCentroSelecionado, residuos, tecnologiaTratamentoResiduos, unidadeMedida } from "../pages/holder";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker'

export function ModalColetaValores({ handleClose, coleta }) {

    let [inputValue, setInputValue] = useState("0");
    let [textInputCustom, setTextInputCustom] = useState("");
    
    function setValor() {
        handleClose();
        if(textInputCustom != "")
            coleta.valorFinal = "R$" + textInputCustom;
        else
            coleta.valorFinal = inputValue;
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{coleta.label}</Text>

                <View style={styles.valousArea}>
                    <TouchableOpacity style={styles.areaColeta} activeOpacity={0.3} onPress={() => setInputValue(coleta.centrosDeCusto[centroSelecionado][nomeCentroSelecionado][0])}>
                        <Text style={styles.numberTextColetas}>Custo de Transporte</Text>
                        <Text style={styles.numberColetas}>{coleta.centrosDeCusto[centroSelecionado][nomeCentroSelecionado][0]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.areaColeta} activeOpacity={0.3} onPress={() => setInputValue(coleta.centrosDeCusto[centroSelecionado][nomeCentroSelecionado][1])}>
                        <Text style={styles.numberTextColetas}>Valor Ideal</Text>
                        <Text style={styles.numberColetas}>{coleta.centrosDeCusto[centroSelecionado][nomeCentroSelecionado][1]}</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.valousArea}>
                    <TouchableOpacity style={styles.areaColeta} activeOpacity={0.3} onPress={() => setInputValue(coleta.centrosDeCusto[centroSelecionado][nomeCentroSelecionado][3])}>
                        <Text style={styles.numberTextColetas}>Valor - Média</Text>
                        <Text style={styles.numberColetas}>{coleta.centrosDeCusto[centroSelecionado][nomeCentroSelecionado][3]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.areaColeta} activeOpacity={0.3} onPress={() => setInputValue(coleta.centrosDeCusto[centroSelecionado][nomeCentroSelecionado][2])}>
                        <Text style={styles.numberTextColetas}>Valor - 0,6535</Text>
                        <Text style={styles.numberColetas}>{coleta.centrosDeCusto[centroSelecionado][nomeCentroSelecionado][2]}</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.textInput}
                    placeholder={inputValue}
                    onChangeText={newText => coleta.valorFinal = setTextInputCustom(newText)}
                    textAlign="center"
                    placeholderTextColor="#000"
                    borderWidth={3}
                    borderRadius={10}
                    width={'80%'}
                    height={"10%"}
                    marginTop={"10%"}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button} onPress={setValor}>
                    <Text style={styles.buttonText}>Confirmar Valores</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export function ModalResiduoValores({ handleClose, residuo }) {

    const [openUniMedida, setOpenUniMedida] = useState(false);
    const [valueUniMedida, setValueUniMedida] = useState(null);
    const [itemsUniMedida, setItemsUniMedida] = useState(unidadeMedida);

    const [openTratamento, setOpenTratamento] = useState(false);
    const [valueTratamento, setValueTratamento] = useState(null);
    const [itemsTratamento, setItemsTratamento] = useState(tecnologiaTratamentoResiduos);

    function MudarTratamento() {
        let tratamentoEncontrado = itemsTratamento.find(item => item.value === valueTratamento);
        console.log('mudando tecnologia de tratamento de ' + residuo.label + ' para ' + tratamentoEncontrado.label);
        residuo.tecnologiaTratamento = tratamentoEncontrado.label;
    }

    function MudarMedida() {
        let medidaEncontrado = unidadeMedida.find(item => item.value === valueUniMedida);
        console.log('mudando unidade de medida de ' + residuo.label + ' para ' + medidaEncontrado.label);
        residuo.unidadeMedida = medidaEncontrado.label;
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{residuo.label}</Text>

                <View style={styles.valousArea}>
                    <View style={styles.areaResiduos}>
                        <Text style={styles.numberTextResiduos}>Tecnologia de Tratamento</Text>
                        <DropDownPicker style={styles.numberResiduos}
                            zIndex={6}
                            open={openTratamento}
                            value={valueTratamento}
                            items={itemsTratamento}
                            maxHeight={250}
                            textStyle={styles.dropdownText}
                            placeholder="Selecionar Tecnologia de Tratamento"
                            setOpen={setOpenTratamento}
                            setValue={setValueTratamento}
                            setItems={setItemsTratamento}
                            onChangeValue={() => MudarTratamento()}
                        />

                    </View>
                </View>

                <View style={styles.valousArea}>
                    <View style={styles.areaResiduos}>
                        <Text style={styles.numberTextResiduos}>Unidade de Medida</Text>
                        <DropDownPicker style={styles.numberResiduos}
                            zIndex={5}
                            open={openUniMedida}
                            value={valueUniMedida}
                            items={itemsUniMedida}
                            maxHeight={250}
                            placeholder="Selecionar unidade de medida"
                            textStyle={styles.dropdownText}
                            placeholderStyle={styles.placeholder}
                            setOpen={setOpenUniMedida}
                            setValue={setValueUniMedida}
                            setItems={setItemsUniMedida}
                            onChangeValue={() => MudarMedida()}
                        />

                    </View>
                </View>

                <View style={styles.valousArea}>
                    <View style={styles.areaResiduos}>
                        <Text style={styles.numberTextResiduos}>Custo de Destinação</Text>
                        <Text style={styles.numberResiduos}>{residuo.custoDestinacao}</Text>
                    </View>

                </View>

                <TextInput
                    style={styles.textInput}
                    placeholder={"0"}
                    placeholderTextColor="#000"
                    onChangeText={newText => residuo.valor = newText}
                    textAlign="center"
                    borderWidth={3}
                    borderRadius={10}
                    height={"10%"}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button} onPress={handleClose}>
                    <Text style={styles.buttonText}>Confirmar Valores</Text>
                </TouchableOpacity>

            </View>
        </View>


    )
}

export function ModalLoading(){
    return(
        <View style={styles.loading}>
            <Text>Esta a carregar...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        height: 'auto',
        paddingTop: "10%",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 5,
        gap:3,
    },
    title: {
        fontSize: 24,
        paddingHorizontal: 5,
        fontWeight: "bold",
        color: "#000",
        borderWidth: 3,
        width: '90%',
        height: '15%',
        marginBottom:"10%",
        textAlign: "center",
        textAlignVertical: 'center',
    },
    text: {
        color: "#FFF",
        textAlign: "center",
    },
    valousArea: {
        flexDirection: "row",
        width: "90%",
        height: '15%',
        //alignItems: "center",
        //justifyContent: "space-between",
        //marginBottom: 15,
    },
    numberColetas: {
        fontSize: 25,
        height: "110%",
        fontWeight: "bold",
        borderWidth: 2,
        borderRadius: 1,
        textAlignVertical: "center",
        textAlign: "center",
        color: '#000',
    },
    numberTextColetas: {
        fontSize: 17,
        height: "110%",
        fontWeight: "bold",
        borderWidth: 2,
        borderRadius: 1,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#F0FA1E",
        color: '#000',
    },
    numberResiduos: {
        fontSize: 25,
        fontWeight: "bold",
        borderWidth: 3,
        borderRadius: 0,
        textAlignVertical: "center",
        width: '100%',
        textAlign: "center",
        color: '#000',
    },
    numberTextResiduos: {
        fontSize: 20,
        fontWeight: "bold",
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        textAlign: "center",
        backgroundColor: "#F0FA1E",
        color: '#000',
    },
    dropdownText: {
        fontSize: 17,
    },
    button: {
        backgroundColor: "black",
        width: "60%",
        height: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: "10%",
    },
    buttonText: {
        fontSize: 18,
        color: "#FFF"
    },
    areaColeta: {
        width: '50%',
        height: 30,
    },
    areaResiduos: {
        width: '100%',
    },
    textInput: {
        fontSize:20,
        fontWeight:'bold',
        width: "90%",
        height: "8%",
        color: '#000',
    },
    loading:{
        width:"100%",
        height:"100%",
    },
    loadingText:{
        textAlign:'center',
        textAlignVertical:'center',
    },

})