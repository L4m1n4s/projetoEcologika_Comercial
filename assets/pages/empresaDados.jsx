import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal, } from 'react-native'
import { InformacoesSalvas, SetAcNome, SetCnpj, SetEmail, SetEmpresaNome, SetEnderecoEmpresa, SetEnderecoOperacao, SetNumeroContrato, SetNumeroTelefone } from './holder';
import { Platform } from 'react-native';
import { useEffect, useState } from 'react';
import RNFS, { DocumentDirectoryPath, read, readDir, readDirAssets, readFile, readFileAssets, readdir } from 'react-native-fs';

export function EmpresaDados() {

    useEffect(() => {

        //RNFS.readFolder(require('../docs/Gerenciamento.docx'))

        //RNFS.readFolder(require('../docs'));
        checkFileExistence();
    })

    function checkFileExistence() {

        RNFS.readDir('/assets/docs/Gerenciamento.docx')
            .then(content => console.log(content));

        {/* RNFS.readFileAssets('docs/teste.txt')
            .then(content => {
                console.log('Conteúdo do arquivo:', content);
            })
            .catch(error => {
                console.log('Erro ao ler o arquivo:', error.message);
            });*/}

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