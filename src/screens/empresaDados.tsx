import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal, } from 'react-native'
import { InformacoesSalvas, SetAcNome, SetCnpj, SetEmail, SetEmpresaNome, SetEnderecoEmpresa, SetEnderecoOperacao, SetNumeroContrato, SetNumeroTelefone } from '../helpers/holder';
import { Platform } from 'react-native';
import { useEffect, useState } from 'react';
import RNFS from 'react-native-fs';
import PizZip  from 'pizzip';
import Docxtemplater from 'docxtemplater';

export function EmpresaDados() {

    useEffect(() => {
        (async () => createNewDocumentFromTemplate())()
    },[])

    async function createNewDocumentFromTemplate() {

        
        // RNFS.readFile(RNFS.MainBundlePath+"/Gerenciamento.docx")
        //     .then(content => console.debug("items", content));


        // console.log(RNFS.MainBundlePath + "/Gerenciamento.docx")

        var content = await RNFS.readFile(RNFS.MainBundlePath + "/Gerenciamento.docx", 'base64')

        const zip = new PizZip(content, {base64: true});
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        
        });

        const year = new Date().getFullYear().toString()
        const yearshot = year.substring(2,4)
        const formatter = new Intl.DateTimeFormat('pt-br', { month: 'long' });
        const month = formatter.format(new Date());
        const day = new Date().getDay().toString()

        console.log("processing")

        doc.render({
            num_contrato: '12312312',
            year: year,
            month: month,
            day: day,
            short_year: yearshot,

            nome_ac: "John",
            empresa: "Doe",
        });

        const buf = doc.getZip().generate({
            type: "base64",
            compression: "DEFLATE",
        });
        
        RNFS.writeFile(RNFS.MainBundlePath+"/out.docx",  buf, 'base64')
        console.log("processing done")
    }



    return (

        <View style={styles.container}>

            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} overScrollMode='never'>

                <Text style={styles.tittle}>Dados do contrato</Text>

                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='A/C (Nome do contatante)'
                    onChangeText={newText => SetAcNome(newText)}></TextInput>

                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='Nome da Empresa'
                    onChangeText={newText => SetEmpresaNome(newText)}></TextInput>

                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='CNPJ da Empresa'
                    onChangeText={newText => SetCnpj(newText)}></TextInput>

                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='E-mail do contatante'
                    onChangeText={newText => SetEmail(newText)}></TextInput>

                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='Numero de telefone'
                    onChangeText={newText => SetNumeroTelefone(newText)}></TextInput>

                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='Endereço de Operação'
                    onChangeText={newText => SetEnderecoOperacao(newText)}></TextInput>

                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='Endereço da Empresa'
                    onChangeText={newText => SetEnderecoEmpresa(newText)}></TextInput>

                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='Numero Da Poposta'
                    onChangeText={newText => SetNumeroContrato(newText)}></TextInput>

            </ScrollView>

            <TouchableOpacity style={styles.button} onPress={() => InformacoesSalvas()}>
                <Text style={styles.buttonText}>Adicionar dados do contrato</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 50,
    },
    input: {
        borderWidth: 2,
        borderRadius: 2,
        fontSize: 17,
        width: '80%',
        height: 40,
        textAlignVertical: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20,
        color: '#000',
    },
    scroll: {
        width: '100%',
        maxHeight: '80%',
        borderBottomWidth: 3,
    },
    button: {
        backgroundColor: "#000",
        width: "80%",
        height: "8%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: 30,
    },
    buttonText: {
        color: "#FFF",
        textAlign: 'center',
    },
    tittle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "bold",
        color: '#000'

    },
});