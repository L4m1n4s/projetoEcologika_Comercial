//Lista de residuos e coletas final
export let coletasFinal = [];
export let residuoListaFinal = [];

export let acNome;
export let nomeEmpresa;
export let CnpjEmpresa;
export let emailContatante;
export let numeroTelefone;
export let enderecoOperacao;
export let enderecoEmpresa;
export let numeroContrato;

export function InformacoesSalvas() {
    console.log("nome do contatante:"+ acNome + ", " + "nome da empresa:"+ nomeEmpresa + ", " + "Cnpj da empresa:"+ CnpjEmpresa + ", " + 
    "email do contatante:"+ emailContatante + ", " + "telefone da emrpesa:"+ numeroTelefone + ", " + "endereço de operação:"+ 
    enderecoOperacao + ", " + "endereço da empresa:"+ enderecoEmpresa + ", " + "numero do contrato:"+ numeroContrato)
}

export function SetColetasFinal(novaLista) {
    coletasFinal = novaLista;
    console.log(coletasFinal)
}

export function SetResiduosFinal(novaLista) {
    residuoListaFinal = novaLista;
    console.log(residuoListaFinal)
}

export function SetAcNome(novoTexto) {
    acNome = novoTexto;
    console.log(novoTexto);
}
export function SetEmpresaNome(novoTexto) {
    nomeEmpresa = novoTexto;
    console.log(nomeEmpresa);
}
export function SetCnpj(novoTexto) {
    CnpjEmpresa = novoTexto;
    console.log(CnpjEmpresa);
}
export function SetEmail(novoTexto) {
    emailContatante = novoTexto;
    console.log(emailContatante);
}
export function SetNumeroTelefone(novoTexto) {
    numeroTelefone = novoTexto;
    console.log(numeroTelefone);
}
export function SetEnderecoOperacao(novoTexto) {
    enderecoOperacao = novoTexto;
    console.log(enderecoOperacao);
}
export function SetEnderecoEmpresa(novoTexto) {
    enderecoEmpresa = novoTexto;
    console.log(enderecoEmpresa);
}
export function SetNumeroContrato(novoTexto) {
    numeroContrato = novoTexto;
    console.log(numeroContrato);
}



//IDs do centro e nome
export let centroSelecionado : number = 0;
export let nomeCentroSelecionado = '';

export function setCentroDeCusto(centro:number) {
    centroSelecionado = centro;
    //console.log(`${centroSelecionado} Selecionado`);
}

export function setNomeCentro(nome:string) {
    nomeCentroSelecionado = nome;
}

//Segura os IDs selecionados das coletas
export let IdColetasSelecionadas : string[] = [];

//Salva os IDs na variavel acima
export function setColetasSelecionadas(novoArray: string[]) {
    IdColetasSelecionadas = novoArray;
    //console.log(IdColetasSelecionadas);
}

//Segura os IDs selecionados dos Residuos
export let IdResiduosSelecionados : string[] = [];

//Salva os IDs na variavel acima
export function setResiduosSelecionadas(novoArray: string[]) {
    IdResiduosSelecionados = novoArray;
    //console.log(IdResiduosSelecionados);
}

export const unidadeMedida = [
    { label: "KG", value: '1' },
    { label: "LT", value: '2' },
    { label: "Unidade", value: '3' },
    { label: "TON", value: '4' },
    { label: "M³", value: '5' }];

export const tecnologiaTratamentoResiduos = [
    { label: 'blendagem', value: '1' },
    { label: 'Fisico', value: '2' },
    { label: 'Químico', value: '3' },
    { label: 'Recilagem', value: '4' },
    { label: 'Aterro Sanitario', value: '5' },
    { label: 'Descontaminação', value: '6' },
    { label: 'Despressurização para Reciclagem', value: '7' },
    { label: 'Aterro Classe I', value: '8' },
    { label: 'Aterro Classe II', value: '9' },
    { label: "Queima em fornos de Ceramica", value: '10' },
    { label: "Re-forno", value: '11' },
    { label: "Incineração", value: '12' }
];


export const centros = [
    { label: 'Campos dos Goytacazes', value: 0, chave: 'CampoDosGoytacazes' },
    { label: 'Duque de Caxias', value: 1, chave: 'DuquedeCaxias' },
    { label: 'Macaé Cabiunas', value: 2, chave: 'MacaeCabiunas' },
    { label: 'Macaé Centro', value: 3, chave: 'MacaeCentro' },
    { label: 'Macaé Ibitiba', value: 4, chave: 'MacaeIbitiba' },
    { label: 'Macaé Imbossaca', value: 5, chave: 'MacaeImbossaca' },
    { label: 'Macaé Novo Cavaleiros', value: 6, chave: 'MacaeNovoCavaleiros' },
    { label: 'Macaé Parque de Tubos', value: 7, chave: 'MacaeParqueDeTubos' },
    { label: 'Macaé Termoeletrica BR101', value: 8, chave: 'MacaeTermoeletricaBR101' },
    { label: 'Macaé Termoeletrica Marlim Azul', value: 9, chave: 'MacaeTermoeletricaMarlimAzul' },
    { label: 'Matriz Carapebus', value: 10, chave: 'MatrizCarapebus' },
    { label: 'Porto do Açu', value: 11, chave: 'PortoDoAçu' },
    { label: 'Região dos Lagos', value: 12, chave: 'RegiãoDosLagos' },
    { label: 'Rio das Ostras Centro', value: 13, chave: 'RioDasOstrasCentro' },
    { label: 'Rio das Ostras Mar do Norte', value: 14, chave: 'RioDasOstrasMarDoNorte' },
    { label: 'Tecnosol', value: 15, chave: 'Tecnosol' },
    { label: 'Vitoria Ambiental', value: 16, chave: 'VitoriaAmbiental' },
    { label: 'Zadar', value: 17, chave: 'Zadar' }
]

export type ColetasType = {
    label: string;
    value: string;
    unidadeMedida: string;
    valorFinal: string;
    centrosDeCusto: {[name:string]: CostDetailsType}[]
}

type CostDetailsType = {
    CustoDeTransporte: string;
    ValorIdeal: string;
    Valor065: string;
    ValorMedia: string;
}
export const coletas : ColetasType[] = [
    {
        label: 'Baú pequeno porte RSS', value: '1', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte: 'R$824,26', ValorIdeal: 'R$1.659,23', Valor065: 'R$1.261,30', ValorMedia: 'R$1.460.26'} },
            { DuquedeCaxias: {CustoDeTransporte: 'R$1.321,64', ValorIdeal: 'R$2.660,46', Valor065: 'R$2.022,40', ValorMedia: '2.341,43'} },
            { MacaeCabiunas: {CustoDeTransporte: 'R$408,43', ValorIdeal: 'R$822,18', Valor065: 'R$624,99', ValorMedia: 'R$723,58'} },
            { MacaeCentro: {CustoDeTransporte: 'R$517,34', ValorIdeal: 'R$1.041,41', Valor065: 'R$791,65', ValorMedia: 'R$916,53'} },
            { MacaeIbitiba: {CustoDeTransporte: 'R$520,74', ValorIdeal: 'R$1.048,25', Valor065: 'R$796,85', ValorMedia: 'R$922,55'} },
            { MacaeImbossaca: {CustoDeTransporte: 'R$639,85', ValorIdeal: 'R$1.288,02', Valor065: 'R$979,11', ValorMedia: 'R$1.133,56'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte: 'R$527,54', ValorIdeal: 'R$1.061,94', Valor065: 'R$807,25', ValorMedia: 'R$934,60'} },
            { MacaeParqueDeTubos: {CustoDeTransporte: 'R$639,85', ValorIdeal: 'R$1.288.02', Valor065: 'R$979,11', ValorMedia: 'R$1.133,56'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte: 'R$524,14', ValorIdeal: 'R$1.055,10', Valor065: 'R$802,05', ValorMedia: 'R$928,57'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte: 'R$530,94', ValorIdeal: 'R$1.068,78', Valor065: 'R$812,46', ValorMedia: 'R$940,62'} },
            { MatrizCarapebus: {CustoDeTransporte: 'R$381,23', ValorIdeal: 'R$767,42', Valor065: 'R$583,37', ValorMedia: 'R$675,40'} },
            { PortoDoAçu: {CustoDeTransporte: 'R$1.084,74', ValorIdeal: 'R$2.183,58', Valor065: 'R$1.659,89', ValorMedia: 'R$1.921,73'} },
            { RegiãoDosLagos: {CustoDeTransporte: 'R$939,26', ValorIdeal: 'R$1.890,74', Valor065: 'R$1.437,28', ValorMedia: 'R$1.664,01'} },
            { RioDasOstrasCentro: {CustoDeTransporte: 'R$653,45', ValorIdeal: 'R$1.315,39', Valor065: 'R$999,92', ValorMedia: 'R$1.57,66'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte: 'R$639,85', ValorIdeal: 'R$1.288,02', Valor065: 'R$979,11', ValorMedia: 'R$1.133,56'} },
            { Tecnosol: {CustoDeTransporte: 'R$401,63', ValorIdeal: 'R$808,49', Valor065: 'R$614,59', ValorMedia: 'R$711,54'} },
            { VitoriaAmbiental: {CustoDeTransporte: 'R$2.672,84', ValorIdeal: 'R$5.380,45', Valor065: 'R$4.090,05', ValorMedia: 'R$4.735,25'} },
            { Zadar: {CustoDeTransporte: 'R$398,23', ValorIdeal: 'R$801,64', Valor065: 'R$609,38', ValorMedia: 'R$705,51'} },
        ]
    },
    {
        label: 'Caminhão Baú', value: '2', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.284,95', ValorIdeal : 'R$2.586,61', Valor065 : 'R$1.966,26', ValorMedia : 'R$2.276,43'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.350,00', ValorIdeal : 'R$4.730,55', Valor065 : 'R$3.596.02', ValorMedia : 'R$4.163,28'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$572,15', ValorIdeal : 'R$1.151,74', Valor065 : 'R$875,52', ValorMedia : 'R$1.013,63'} },
            { MacaeCentro: {CustoDeTransporte : 'R$741,34', ValorIdeal : 'R$1.576,09', Valor065 : 'R$1.198,10', ValorMedia : 'R$1.387,09'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$754,42', ValorIdeal : 'R$1.518,65', Valor065 : 'R$1.154,43', ValorMedia : 'R$1.336,54'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$962,84', ValorIdeal : 'R$1.938,21', Valor065 : 'R$1.473,36', ValorMedia : 'R$1.705,78'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$780,57', ValorIdeal : 'R$1.571,30', Valor065 : 'R$1.194,30', ValorMedia : 'R$1.382,87'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$962,84', ValorIdeal : 'R$1.938,21', Valor065 : 'R$1.473,36', ValorMedia : 'R$1.705,78'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$767,50', ValorIdeal : 'R$1,544,97', Valor065 : 'R$1.174,44', ValorMedia : 'R$1.359,71'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$793,65', ValorIdeal : 'R$1.597,62', Valor065 : 'R$1.214,46', ValorMedia : 'R$1.406,04'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$467,54', ValorIdeal : 'R$941,15', Valor065 : 'R$715,43', ValorMedia : 'R$828,29'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$1.764,73', ValorIdeal : 'R$3.552,40', Valor065 : 'R$2.700,42', ValorMedia : 'R$3.126,41'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.615,07', ValorIdeal : 'R$3.251,15', Valor065 : 'R$2.471,42', ValorMedia : 'R$2.861,28'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$1.015,15', ValorIdeal : 'R$2.043,50', Valor065 : 'R$1.553,40', ValorMedia : 'R$1.798,45'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$962,84', ValorIdeal : 'R$1.938,21', Valor065 : 'R$1.473,36', ValorMedia : 'R$1.705,78'} },
            { Tecnosol: {CustoDeTransporte : 'R$546,00', ValorIdeal : 'R$1.099,09', Valor065 : 'R$835,50', ValorMedia : 'R$967,30'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$4.503,91', ValorIdeal : 'R$9.066,38', Valor065 : 'R$6.891,98', ValorMedia : 'R$7.979,18'} },
            { Zadar: {CustoDeTransporte : 'R$532,92', ValorIdeal : 'R$1.072,77', Valor065 : 'R$815,49', ValorMedia : 'R$944,13'} },
        ]
    },
    {
        label: 'Caminhão Munck', value: '3', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.343,21', ValorIdeal : 'R$2.703,88', Valor065 : 'R$2055,40', ValorMedia : 'R$2.379,64'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.425,66', ValorIdeal : 'R$4.882,85', Valor065 : 'R$3.338,87', ValorMedia : 'R$3.865,58'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$605,44', ValorIdeal : 'R$1.218,76', Valor065 : 'R$782,38', ValorMedia : 'R$882,64'} },
            { MacaeCentro: {CustoDeTransporte : 'R$782,08', ValorIdeal : 'R$1.576,09', Valor065 : 'R$992,99', ValorMedia : 'R$1.149,63'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$796,03', ValorIdeal : 'R$1.602,42', Valor065 : 'R$1.218,11', ValorMedia : 'R$1.410,26'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$1.714,95', Valor065 : 'R$1.303,65', ValorMedia : 'R$1.794,25'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$822,19', ValorIdeal : 'R$1.655,06', Valor065 : 'R$1.258,13', ValorMedia : 'R$1.456,60'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,77', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$809,11', ValorIdeal : 'R$1.628,74', Valor065 : 'R$1.238,12', ValorMedia : 'R$1.433,43'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$835,26', ValorIdeal : 'R$1.681,39', Valor065 : 'R$1.278,14', ValorMedia : 'R$1.479,76'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$500,83', ValorIdeal : 'R$1.008,16', Valor065 : 'R$766,37', ValorMedia : 'R$887,27'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$1.840,39', ValorIdeal : 'R$3.704,70', Valor065 : 'R$2.816,20', ValorMedia : 'R$2.828,71'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.681,65', ValorIdeal : 'R$3.385,17', Valor065 : 'R$2.573,30', ValorMedia : 'R$2.979,24'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$1.065,08', ValorIdeal : 'R$2.144,02', Valor065 : 'R$1.629,82', ValorMedia : 'R$1.886,92'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { Tecnosol: {CustoDeTransporte : 'R$579,29', ValorIdeal : 'R$1.166,11', Valor065 : 'R$886,44', ValorMedia : 'R$1.026,27'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$4.677,92', ValorIdeal : 'R$9.416,67', Valor065 : 'R$7.158,26', ValorMedia : 'R$8.287,47'} },
            { Zadar: {CustoDeTransporte : 'R$566,21', ValorIdeal : 'R$1.139,78', Valor065 : 'R$866,43', ValorMedia : 'R$1.003,11'} },
        ]
    },
    {
        label: 'Caminhão Vácuo 10M³', value: '4', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.155.56', ValorIdeal : 'R$2.326,14', Valor065 : 'R$1.768,26', ValorMedia : 'R$2.047,20'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.181,95', ValorIdeal : 'R$4.392,28', Valor065 : 'R$3.338,87', ValorMedia : 'R$3.865,58'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$498,21', ValorIdeal : 'R$1,002,90', Valor065 : 'R$762,38', ValorMedia : 'R$882,64'} },
            { MacaeCentro: {CustoDeTransporte : 'R$648,92', ValorIdeal : 'R$1.306,28', Valor065 : 'R$992,99', ValorMedia : 'R$1.149,63'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$662,00', ValorIdeal : 'R$1,332,60', Valor065 : 'R$1.013,00', ValorMedia : 'R$1.172,80'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$851,93', ValorIdeal : 'R$1.714,95', Valor065 : 'R$1.303,65', ValorMedia : 'R$1.509,30'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$688,15', ValorIdeal : 'R$1.385,25', Valor065 : 'R$1.053,02', ValorMedia : 'R$1.219,14'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$851,93', ValorIdeal : 'R$1.714,95', Valor065 : 'R$1.303,65', ValorMedia : 'R$1.509,30'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$675,07', ValorIdeal : 'R$1.358,93', Valor065 : 'R$1.033,01', ValorMedia : 'R$1.195,97'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$701,23', ValorIdeal : 'R$1.411,57', Valor065 : 'R$1.073,03', ValorMedia : 'R$1.242,30'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$393,60', ValorIdeal : 'R$792,31', Valor065 : 'R$602,29', ValorMedia : 'R$697,30'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$1.596,98', ValorIdeal : 'R$3.214,13', Valor065 : 'R$2.443,28', ValorMedia : 'R$2.828,71'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.467,19', ValorIdeal : 'R$2.953,47', Valor065 : 'R$2.245,13', ValorMedia : 'R$2.599,30'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$904,24', ValorIdeal : 'R$1.820,24', Valor065 : 'R$1.383,64', ValorMedia : 'R$1.601,97'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$851,93', ValorIdeal : 'R$1.714,95', Valor065 : 'R$1.303,65', ValorMedia : 'R$1.509,30'} },
            { Tecnosol: {CustoDeTransporte : 'R$472,06', ValorIdeal : 'R$950,26', Valor065 : 'R$722,35', ValorMedia : 'R$836,31'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$4.117,41', ValorIdeal : 'R$8.288,36', Valor065 : 'R$6.300,55', ValorMedia : 'R$7.294,45'} },
            { Zadar: {CustoDeTransporte : 'R$458,98', ValorIdeal : 'R$923,93', Valor065 : 'R$702,34', ValorMedia : 'R$813,14'} },
        ]
    },
    {
        label: 'Caminhão Vácuo 20M³', value: '5', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.341,98', ValorIdeal : 'R$2.701,41', Valor065 : 'R$2.053,53', ValorMedia : 'R$2.377,47'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.424,06', ValorIdeal : 'R$4.879,65', Valor065 : 'R$3.709,35', ValorMedia : 'R$4.294,50'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$604,74', ValorIdeal : 'R$1.217,34', Valor065 : 'R$925,39', ValorMedia : 'R$1.071,37'} },
            { MacaeCentro: {CustoDeTransporte : 'R$782,08', ValorIdeal : 'R$1.574,33', Valor065 : 'R$1.196,75', ValorMedia : 'R$1.385,54'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$795,16', ValorIdeal : 'R$1.600,65', Valor065 : 'R$1.216,76', ValorMedia : 'R$1.408,71'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$1.011,73', ValorIdeal : 'R$2.036,61', Valor065 : 'R$1.548,16', ValorMedia : 'R$1.792,39'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$821,31', ValorIdeal : 'R$1653,30', Valor065 : 'R$1.256,79', ValorMedia : 'R$1.455.04'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$1.11,73', ValorIdeal : 'R$2.036,61', Valor065 : 'R$1.548,16', ValorMedia : 'R$1.792,39'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$808,23', ValorIdeal : 'R$1.626,98', Valor065 : 'R$1.236,78', ValorMedia : 'R$1.431,88'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$834,39', ValorIdeal : 'R$1.679,62', Valor065 : 'R$1.276,80', ValorMedia : 'R$1.478,21'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$500,12', ValorIdeal : 'R$1.006,75', Valor065 : 'R$765,30', ValorMedia : 'R$886,03'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$1.838,79', ValorIdeal : 'R$3.701,50', Valor065 : 'R$2.813,76', ValorMedia : 'R$3.257,63'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.680,25', ValorIdeal : 'R$3.382,35', Valor065 : 'R$2.571,15', ValorMedia : 'R$2.976,75'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$1.064,03', ValorIdeal : 'R$2.141,90', Valor065 : 'R$1.628,21', ValorMedia : 'R$1.885,05'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$1.011,73', ValorIdeal : 'R$2.036,61', Valor065 : 'R$1.548,16', ValorMedia : 'R$1.792,39'} },
            { Tecnosol: {CustoDeTransporte : 'R$578,59', ValorIdeal : 'R$1.164,70', Valor065 : 'R$885,37', ValorMedia : 'R$1.025,03'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$4.674,26', ValorIdeal : 'R$9.409,30', Valor065 : 'R$7.152,65', ValorMedia : 'R$8.280,97'} },
            { Zadar: {CustoDeTransporte : 'R$565,51', ValorIdeal : 'R$1.138,37', Valor065 : 'R$865,35', ValorMedia : 'R$1.001,86'} },
        ]
    },
    {
        label: 'Caminhão Rolon com Caçamba de 30M³', value: '6', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.343,21', ValorIdeal : 'R$2.703,88', Valor065 : 'R$2.055,40', ValorMedia : 'R$2.379,64'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.425,66', ValorIdeal : 'R$4.882,85', Valor065 : 'R$3.711,79', ValorMedia : 'R$4.297,32'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$605,44', ValorIdeal : 'R$1.218,76', Valor065 : 'R$926,46', ValorMedia : 'R$1.072,61'} },
            { MacaeCentro: {CustoDeTransporte : 'R$782,96', ValorIdeal : 'R$1.576,09', Valor065 : 'R$1.198,10', ValorMedia : 'R$1.387,09'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$796,03', ValorIdeal : 'R$1.602,42', Valor065 : 'R$1.218,11', ValorMedia : 'R$1.410,26'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$822,19', ValorIdeal : 'R$1.655,06', Valor065 : 'R$1.258,13', ValorMedia : 'R$1.456,60'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$809,11', ValorIdeal : 'R$1.628,74', Valor065 : 'R$1.238,12', ValorMedia : 'R$1.433,43'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$835,26', ValorIdeal : 'R$1.681,39', Valor065 : 'R$1.278,14', ValorMedia : 'R$1.479,76'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$500,83', ValorIdeal : 'R$1.008,16', Valor065 : 'R$766,37', ValorMedia : 'R$887,27'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$1.840,39', ValorIdeal : 'R$3.704,70', Valor065 : 'R$2.816,20', ValorMedia : 'R$3.460,45'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.681,65', ValorIdeal : 'R$3.385,17', Valor065 : 'R$2.573,30', ValorMedia : 'R$2.979,24'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$1.065,08', ValorIdeal : 'R$2.144,02', Valor065 : 'R$1.629,82', ValorMedia : 'R$1.886,92'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { Tecnosol: {CustoDeTransporte : 'R$579,29', ValorIdeal : 'R$1.166,11', Valor065 : 'R$886,44', ValorMedia : 'R$1.026,27'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$4.677,92', ValorIdeal : 'R$9,416,67', Valor065 : 'R$7.158,26', ValorMedia : 'R$8.287,47'} },
            { Zadar: {CustoDeTransporte : 'R$566,21', ValorIdeal : 'R$1.139,78', Valor065 : 'R$866,43', ValorMedia : 'R$1.003,11'} },
        ]
    },
    {
        label: 'Caminhão Rolon com Garra Hvalueráulica', value: '7', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.343,21', ValorIdeal : 'R$2.703,88', Valor065 : 'R$2.055,40', ValorMedia : 'R$2.379,64'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.425,66', ValorIdeal : 'R$4.882,85', Valor065 : 'R$3.711,79', ValorMedia : 'R$4.297,32'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$605,44', ValorIdeal : 'R$1.218,76', Valor065 : 'R$926,46', ValorMedia : 'R$1.072,61'} },
            { MacaeCentro: {CustoDeTransporte : 'R$782,96', ValorIdeal : 'R$1.576,09', Valor065 : 'R$1.198,10', ValorMedia : 'R$1.387,09'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$796,03', ValorIdeal : 'R$1.602,42', Valor065 : 'R$1.218,11', ValorMedia : 'R$1.410,26'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$822,19', ValorIdeal : 'R$1.655,06', Valor065 : 'R$1.258,13', ValorMedia : 'R$1.456,60'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$809,11', ValorIdeal : 'R$1.628,74', Valor065 : 'R$1.238,12', ValorMedia : 'R$1.433,43'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$835,26', ValorIdeal : 'R$1.681,39', Valor065 : 'R$1.278,14', ValorMedia : 'R$1.479,76'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$500,83', ValorIdeal : 'R$1.008,16', Valor065 : 'R$766,37', ValorMedia : 'R$887,27'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$1.840,39', ValorIdeal : 'R$3.704,70', Valor065 : 'R$2.816,20', ValorMedia : 'R$3.260,45'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.681,65', ValorIdeal : 'R$3.385,17', Valor065 : 'R$2.573,30', ValorMedia : 'R$2.979,24'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$1.065,08', ValorIdeal : 'R$2.144,02', Valor065 : 'R$1.629,82', ValorMedia : 'R$1.886,92'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { Tecnosol: {CustoDeTransporte : 'R$579,29', ValorIdeal : 'R$1.166,11', Valor065 : 'R$886,44', ValorMedia : 'R$1.026,27'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$4.677,92', ValorIdeal : 'R$9416,67', Valor065 : 'R$7.158,26', ValorMedia : 'R$8.287,47'} },
            { Zadar: {CustoDeTransporte : 'R$566,21', ValorIdeal : 'R$1.139,78', Valor065 : 'R$866,43', ValorMedia : 'R$1.003,11'} },
        ]
    },
    {
        label: 'Caminhão Basculhante', value: '8', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.301,59', ValorIdeal : 'R$2.620,11', Valor065 : 'R$1.991,73', ValorMedia : 'R$2.305,92'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.371,61', ValorIdeal : 'R$4.774,07', Valor065 : 'R$3.629,09', ValorMedia : 'R$4.201,58'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$581,66', ValorIdeal : 'R$1.170,89', Valor065 : 'R$890,07', ValorMedia : 'R$1.030,48'} },
            { MacaeCentro: {CustoDeTransporte : 'R$753,23', ValorIdeal : 'R$1.516,26', Valor065 : 'R$1.152,61', ValorMedia : 'R$1.334,44'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$766,31', ValorIdeal : 'R$1.542,58', Valor065 : 'R$1.172,62', ValorMedia : 'R$1.357,60'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$977,11', ValorIdeal : 'R$1.966,92', Valor065 : 'R$1.495,19', ValorMedia : 'R$1.731,06'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$792,46', ValorIdeal : 'R$1.595,23', Valor065 : 'R$1.212,64', ValorMedia : 'R$1.403,94'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$977,11', ValorIdeal : 'R$1.966,92', Valor065 : 'R$1.495,19', ValorMedia : 'R$1.731,06'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$779,39', ValorIdeal : 'R$1.568,91', Valor065 : 'R$1.192,63', ValorMedia : 'R$1.380,77'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$805,54', ValorIdeal : 'R$1.621,55', Valor065 : 'R$1.232,65', ValorMedia : 'R$1.427,10'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$477,05', ValorIdeal : 'R$960,30', Valor065 : 'R$729,99', ValorMedia : 'R$845,14'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$1.786,34', ValorIdeal : 'R$3.595,92', Valor065 : 'R$2.733,50', ValorMedia : 'R$3.164,71'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.634,09', ValorIdeal : 'R$3.289,44', Valor065 : 'R$2.500,53', ValorMedia : 'R$2.894,98'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$1.029,42', ValorIdeal : 'R$2.072,22', Valor065 : 'R$1.575,24', ValorMedia : 'R$1.823,73'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$977,11', ValorIdeal : 'R$1.966,92', Valor065 : 'R$1.495,19', ValorMedia : 'R$1.731,06'} },
            { Tecnosol: {CustoDeTransporte : 'R$555,51', ValorIdeal : 'R$1.118,24', Valor065 : 'R$850,05', ValorMedia : 'R$984,15'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$4.553,62', ValorIdeal : 'R$9.166,47', Valor065 : 'R$6.968,06', ValorMedia : 'R$8.067,26'} },
            { Zadar: {CustoDeTransporte : 'R$542,43', ValorIdeal : 'R$1.091,92', Valor065 : 'R$830,04', ValorMedia : 'R$960,98'} },
        ]
    },
    {
        label: 'Caminhão Hidrojato', value: '9', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.468,04', ValorIdeal : 'R$2.955,18', Valor065 : 'R$2.246,43', ValorMedia : 'R$2.600,80'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.587,78', ValorIdeal : 'R$5.209,21', Valor065 : 'R$3.959,88', ValorMedia : 'R$4.584,55'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$676,78', ValorIdeal : 'R$1.362,35', Valor065 : 'R$1.035,62', ValorMedia : 'R$1.198,99'} },
            { MacaeCentro: {CustoDeTransporte : 'R$872,12', ValorIdeal : 'R$1.755,59', Valor065 : 'R$1.334,54', ValorMedia : 'R$1.545,07'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$885,20', ValorIdeal : 'R$1.781,91', Valor065 : 'R$1.354,55', ValorMedia : 'R$1.568,23'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$1.119,78', ValorIdeal : 'R$2.254,12', Valor065 : 'R$1.713,51', ValorMedia : 'R$1.983,82'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$911,36', ValorIdeal : 'R$1.834,56', Valor065 : 'R$1.394,58', ValorMedia : 'R$1.614,57'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$1.119,78', ValorIdeal : 'R$2.254,12', Valor065 : 'R$1.713,51', ValorMedia : 'R$1.983,82'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$898,28', ValorIdeal : 'R$1.808,24', Valor065 : 'R$1.374,57', ValorMedia : 'R$1.591,40'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$924,43', ValorIdeal : 'R$1.860,89', Valor065 : 'R$1.414,59', ValorMedia : 'R$1.637,74'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$572,16', ValorIdeal : 'R$1.151,76', Valor065 : 'R$875,53', ValorMedia : 'R$1.013,65'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$2.002,51', ValorIdeal : 'R$4.031,07', Valor065 : 'R$0.064,29', ValorMedia : 'R$3.547,68'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.824,32', ValorIdeal : 'R$3.672,37', Valor065 : 'R$2.791,62', ValorMedia : 'R$3.231,99'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$1.172,09', ValorIdeal : 'R$2.359,42', Valor065 : 'R$1.793,55', ValorMedia : 'R$2.076,49'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$1.119,78', ValorIdeal : 'R$2.254,12', Valor065 : 'R$1.713,51', ValorMedia : 'R$1.983,82'} },
            { Tecnosol: {CustoDeTransporte : 'R$650,62', ValorIdeal : 'R$1.309,71', Valor065 : 'R$995,60', ValorMedia : 'R$1.152,65'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$5.050,81', ValorIdeal : 'R$10.167,30', Valor065 : 'R$7.728,86', ValorMedia : 'R$8.948,08'} },
            { Zadar: {CustoDeTransporte : 'R$637,55', ValorIdeal : 'R$1.283,38', Valor065 : 'R$975,59', ValorMedia : 'R$1.129,48'} },
        ]
    },
    {
        label: 'Caminhão Carga Seca', value: '10', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.301,59', ValorIdeal : 'R$2.620,11', Valor065 : 'R$1.331,73', ValorMedia : 'R$2.305,92'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.371,61', ValorIdeal : 'R$4.774,07', Valor065 : 'R$3.629,09', ValorMedia : 'R$4.201,58'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$581,66', ValorIdeal : 'R$1.170,89', Valor065 : 'R$890,07', ValorMedia : 'R$1.030,48'} },
            { MacaeCentro: {CustoDeTransporte : 'R$753,23', ValorIdeal : 'R$1.516,26', Valor065 : 'R$1.152,61', ValorMedia : 'R$1.334,44'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$766,31', ValorIdeal : 'R$1.542,58', Valor065 : 'R$1.172,62', ValorMedia : 'R$1.357,60'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$977,11', ValorIdeal : 'R$1.966,92', Valor065 : 'R$1.495,19', ValorMedia : 'R$1.731,06'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$792,46', ValorIdeal : 'R$1.595,23', Valor065 : 'R$1.212,64', ValorMedia : 'R$1.403,94'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$977,11', ValorIdeal : 'R$1.966,92', Valor065 : 'R$1.495,19', ValorMedia : 'R$1.731,06'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$779,39', ValorIdeal : 'R$1.568,91', Valor065 : 'R$1.192,63', ValorMedia : 'R$1.380,77'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$805,54', ValorIdeal : 'R$1.621,55', Valor065 : 'R$1.232,65', ValorMedia : 'R$1.427,10'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$477,05', ValorIdeal : 'R$960,30', Valor065 : 'R$729,99', ValorMedia : 'R$845,14'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$1.786,34', ValorIdeal : 'R$3.595,92', Valor065 : 'R$2.733,50', ValorMedia : 'R$3.164,71'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.634,09', ValorIdeal : 'R$3.289,44', Valor065 : 'R$2.500,53', ValorMedia : 'R$2.894,98'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$1.029,42', ValorIdeal : 'R$2.072,24', Valor065 : 'R$1.575,24', ValorMedia : 'R$1.823,73'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$977,11', ValorIdeal : 'R$1.966,92', Valor065 : 'R$1.495,19', ValorMedia : 'R$1.731,06'} },
            { Tecnosol: {CustoDeTransporte : 'R$555,51', ValorIdeal : 'R$1.118,24', Valor065 : 'R$850,05', ValorMedia : 'R$984,15'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$4.553,62', ValorIdeal : 'R$9.166,47', Valor065 : 'R$6.968,06', ValorMedia : 'R$8.067,26'} },
            { Zadar: {CustoDeTransporte : 'R$542,43', ValorIdeal : 'R$1.091,92', Valor065 : 'R$830,04', ValorMedia : 'R$960,98'} },
        ]
    },
    {
        label: 'Carreta Carga Seca', value: '11', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$1.343,21', ValorIdeal : 'R$2.703,88', Valor065 : 'R$2.055,40', ValorMedia : 'R$2.379,64'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$2.425,66', ValorIdeal : 'R$4.882,85', Valor065 : 'R$3.711,79', ValorMedia : 'R$4.297,32'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$605,44', ValorIdeal : 'R$1.218,76', Valor065 : 'R$926,46', ValorMedia : 'R$1.072,61'} },
            { MacaeCentro: {CustoDeTransporte : 'R$782,96', ValorIdeal : 'R$1.576,09', Valor065 : 'R$1.198,10', ValorMedia : 'R$1.387,09'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$796,03', ValorIdeal : 'R$1.602,42', Valor065 : 'R$1.218,11', ValorMedia : 'R$1.410,26'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$822,19', ValorIdeal : 'R$1.655,06', Valor065 : 'R$1.258,13', ValorMedia : 'R$1.456,60'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$809,11', ValorIdeal : 'R$1.628,74', Valor065 : 'R$1.238,12', ValorMedia : 'R$1.433,43'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$835,26', ValorIdeal : 'R$1.681,39', Valor065 : 'R$1.278,14', ValorMedia : 'R$1.479,76'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$500,83', ValorIdeal : 'R$1.008,16', Valor065 : 'R$766,37', ValorMedia : 'R$887,27'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$1.840,39', ValorIdeal : 'R$3.704,70', Valor065 : 'R$2.816,20', ValorMedia : 'R$3.260,45'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$1.681,65', ValorIdeal : 'R$3.385,17', Valor065 : 'R$2.573,30', ValorMedia : 'R$2.979,24'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$1.065,08', ValorIdeal : 'R$2.144,02', Valor065 : 'R$1.629,82', ValorMedia : 'R$1.886,92'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$1.012,78', ValorIdeal : 'R$2.038,72', Valor065 : 'R$1.549,77', ValorMedia : 'R$1.794,25'} },
            { Tecnosol: {CustoDeTransporte : 'R$579,29', ValorIdeal : 'R$1.166,11', Valor065 : 'R$886,44', ValorMedia : 'R$1.026,27'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$4.677,92', ValorIdeal : 'R$9.416,67', Valor065 : 'R$7.158,26', ValorMedia : 'R$8.287,47'} },
            { Zadar: {CustoDeTransporte : 'R$566,21', ValorIdeal : 'R$1.139,78', Valor065 : 'R$866,43', ValorMedia : 'R$1.003,11'} },
        ]
    },
    {
        label: 'Caçamba de 5M³', value: '12', unidadeMedida: 'VIAGEM', valorFinal: '0', centrosDeCusto: [
            { CampoDosGoytacazes: {CustoDeTransporte : 'R$447,74', ValorIdeal : 'R$901,29', Valor065 : 'R$685,13', ValorMedia : 'R$793,21'} },
            { DuquedeCaxias: {CustoDeTransporte : 'R$808,25', ValorIdeal : 'R$1.627,62', Valor065 : 'R$1.237,26', ValorMedia : 'R$1.432,44'} },
            { MacaeCabiunas: {CustoDeTransporte : 'R$201,81', ValorIdeal : 'R$406,25', Valor065 : 'R$308,82', ValorMedia : 'R$357,54'} },
            { MacaeCentro: {CustoDeTransporte : 'R$260,99', ValorIdeal : 'R$525,36', Valor065 : 'R$399,37', ValorMedia : 'R$462,36'} },
            { MacaeIbitiba: {CustoDeTransporte : 'R$265,34', ValorIdeal : 'R$534,14', Valor065 : 'R$406,04', ValorMedia : 'R$470,09'} },
            { MacaeImbossaca: {CustoDeTransporte : 'R$997,59', ValorIdeal : 'R$679,57', Valor065 : 'R$516,59', ValorMedia : 'R$598,08'} },
            { MacaeNovoCavaleiros: {CustoDeTransporte : 'R$274,06', ValorIdeal : 'R$551,69', Valor065 : 'R$419,38', ValorMedia : 'R$485,53'} },
            { MacaeParqueDeTubos: {CustoDeTransporte : 'R$337,59', ValorIdeal : 'R$679,57', Valor065 : 'R$516,59', ValorMedia : 'R$598,08'} },
            { MacaeTermoeletricaBR101: {CustoDeTransporte : 'R$269,70', ValorIdeal : 'R$542,91', Valor065 : 'R$412,71', ValorMedia : 'R$477,81'} },
            { MacaeTermoeletricaMarlimAzul: {CustoDeTransporte : 'R$278,42', ValorIdeal : 'R$560,46', Valor065 : 'R$426,05', ValorMedia : 'R$493,25'} },
            { MatrizCarapebus: {CustoDeTransporte : 'R$166,94', ValorIdeal : 'R$336,05', Valor065 : 'R$255,46', ValorMedia : 'R$295,76'} },
            { PortoDoAçu: {CustoDeTransporte : 'R$613,46', ValorIdeal : 'R$1.234,73', Valor065 : 'R$938,73', ValorMedia : 'R$1.086,82'} },
            { RegiãoDosLagos: {CustoDeTransporte : 'R$560,55', ValorIdeal : 'R$1.128,39', Valor065 : 'R$857,77', ValorMedia : 'R$993,08'} },
            { RioDasOstrasCentro: {CustoDeTransporte : 'R$355,03', ValorIdeal : 'R$714,67', Valor065 : 'R$543,27', ValorMedia : 'R$628,97'} },
            { RioDasOstrasMarDoNorte: {CustoDeTransporte : 'R$337,59', ValorIdeal : 'R$679,57', Valor065 : 'R$516,59', ValorMedia : 'R$598,08'} },
            { Tecnosol: {CustoDeTransporte : 'R$193,10', ValorIdeal : 'R$388,70', Valor065 : 'R$295,48', ValorMedia : 'R$342,09'} },
            { VitoriaAmbiental: {CustoDeTransporte : 'R$1.559,31', ValorIdeal : 'R$3.138,89', Valor065 : 'R$2.386,09', ValorMedia : 'R$2.762,49'} },
            { Zadar: {CustoDeTransporte : 'R$188,74', ValorIdeal : 'R$379,93', Valor065 : 'R$288,81', ValorMedia : 'R$334,37'} },
        ]
    }]


export const residuos = [
    { label: 'Barra Oleosa', value: '1', classeResiduo: 'I', tecnologiaTratamento: 'Blendagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,38', ressarcimento: false },
    { label: 'Efluente Doméstico', value: '2', classeResiduo: 'II', tecnologiaTratamento: 'Fisico/ Químico /Biológico', unidadeMedida: 'M³', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Efluente Industrial', value: '3', classeResiduo: 'I', tecnologiaTratamento: 'Fisico/ Químico /Biológico', unidadeMedida: 'M³', valor: '0', custoDestinacao: '150,00', ressarcimento: false },
    { label: 'Efluente Oleoso (água)', value: '4', classeResiduo: 'I', tecnologiaTratamento: 'Fisico/ Químico /Biológico', unidadeMedida: 'M³', valor: '0', custoDestinacao: '83,60', ressarcimento: false },
    { label: 'Águas Cinzas', value: '5', classeResiduo: 'I', tecnologiaTratamento: 'Fisico/ Químico /Biológico', unidadeMedida: 'M³', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Efluente Sanitário', value: '6', classeResiduo: 'II', tecnologiaTratamento: 'Biológico', unidadeMedida: 'KG', valor: '0', custoDestinacao: '20,00', ressarcimento: false },
    { label: 'Granalha', value: '7', classeResiduo: 'I', tecnologiaTratamento: 'Blendagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,38', ressarcimento: false },
    { label: 'Isopor', value: '8', classeResiduo: 'II', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Embalagem Tetrapack', value: '9', classeResiduo: 'II', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Entulho de Obra (Limpo)', value: '10', classeResiduo: 'II', tecnologiaTratamento: 'Beneficiamento', unidadeMedida: 'KG', valor: '0', custoDestinacao: '10,37', ressarcimento: false },
    { label: 'Entulho de Obra (Sujo)', value: '11', classeResiduo: 'II', tecnologiaTratamento: 'Aterro Sanitário', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,05', ressarcimento: false },
    { label: 'Lampada Flourescente Inteira', value: '12', classeResiduo: 'I', tecnologiaTratamento: 'Descontaminação', unidadeMedida: 'Unidade', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Lampada Flourescente Quebrada', value: '13', classeResiduo: 'I', tecnologiaTratamento: 'Descontaminação', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Lampada Incandecente Inteira', value: '14', classeResiduo: 'I', tecnologiaTratamento: 'Descontaminação', unidadeMedida: 'Unidade', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Lampada Incandecente Quebrada', value: '15', classeResiduo: 'I', tecnologiaTratamento: 'Descontaminação', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Lampada LED', value: '16', classeResiduo: 'I', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Lampada Tubular Inteira', value: '17', classeResiduo: 'I', tecnologiaTratamento: 'Descontaminação', unidadeMedida: 'Unidade', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Lampada Tubular Quebrada', value: '18', classeResiduo: 'I', tecnologiaTratamento: 'Descontaminação', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Lata de Aerossol', value: '19', classeResiduo: 'I', tecnologiaTratamento: 'Despressurização para reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,80', ressarcimento: false },
    { label: 'Lixo Comum', value: '20', classeResiduo: 'II', tecnologiaTratamento: 'Aterro classe II', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,07', ressarcimento: false },
    { label: 'Lodo de ETE Líquvalueo', value: '21', classeResiduo: 'II', tecnologiaTratamento: 'Aterro classe II', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Lodo de ETE Seco', value: '22', classeResiduo: 'II', tecnologiaTratamento: 'Aterro classe II', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Lodo Pastoso', value: '23', classeResiduo: 'II', tecnologiaTratamento: 'Aterro classe II', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Madeira', value: '24', classeResiduo: 'II', tecnologiaTratamento: 'Queima em fornos de cerâmica/ Blendagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,07 s/custo para cerâmica', ressarcimento: false },
    { label: 'Oleo Diesel', value: '25', classeResiduo: 'I', tecnologiaTratamento: 'Re-fino/ Blendagem', unidadeMedida: 'LT', valor: '0', custoDestinacao: '0', ressarcimento: true },
    { label: 'Oleo Usado/Sujo', value: '26', classeResiduo: 'I', tecnologiaTratamento: 'Re-fino', unidadeMedida: 'LT', valor: '0', custoDestinacao: 'Venda', ressarcimento: true },
    { label: 'Oleo Vegetal', value: '27', classeResiduo: 'II', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'LT', valor: '0', custoDestinacao: '0', ressarcimento: true },
    { label: 'Papel/Papelão não Contaminado', value: '28', classeResiduo: 'II', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: 'Venda', ressarcimento: true },
    { label: 'Pilhas e baterias (Lítio e Cadimio)', value: '29', classeResiduo: 'I', tecnologiaTratamento: 'Aterro classe I', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,50', ressarcimento: false },
    { label: 'Plastico não contaminado', value: '30', classeResiduo: 'II', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: 'Venda', ressarcimento: false },
    { label: 'Pneus Inservíveis', value: '31', classeResiduo: 'II', tecnologiaTratamento: 'Beneficiamento', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Produto Químico (Blendagem)', value: '32', classeResiduo: 'I', tecnologiaTratamento: 'Blendagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,40', ressarcimento: false },
    { label: 'Produto Químico (Incineração)', value: '33', classeResiduo: 'I', tecnologiaTratamento: 'Incireração', unidadeMedida: 'KG', valor: '0', custoDestinacao: '2,40', ressarcimento: false },
    { label: 'Produto Químico (Aterro Classe I)', value: '34', classeResiduo: 'I', tecnologiaTratamento: 'Aterro classe I', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,50', ressarcimento: false },
    { label: 'Resíduo de Jardinagem', value: '35', classeResiduo: 'II', tecnologiaTratamento: 'Aterro classe II', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Resíduo Contaminado com Óleo ou Produto Químico', value: '36', classeResiduo: 'I', tecnologiaTratamento: 'Blendagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,38', ressarcimento: false },
    { label: 'Resíduo Infecto Contagioso', value: '37', classeResiduo: 'I', tecnologiaTratamento: 'Autoclave', unidadeMedida: 'KG', valor: '0', custoDestinacao: '3,50', ressarcimento: false },
    { label: 'Resíduo Orgânico', value: '38', classeResiduo: 'I', tecnologiaTratamento: 'Aterro classe II', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0,60', ressarcimento: false },
    { label: 'Resíduo Serviço Farmaceutico', value: '39', classeResiduo: 'I', tecnologiaTratamento: 'Incireração', unidadeMedida: 'KG', valor: '0', custoDestinacao: '2,50', ressarcimento: false },
    { label: 'RSS - Carcaça de Animal', value: '40', classeResiduo: 'I', tecnologiaTratamento: 'Incireração', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Sucata de Aluminio', value: '41', classeResiduo: 'II', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Sucata de Material Eletro Eletrônico', value: '42', classeResiduo: 'I', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Sucata de Inox', value: '43', classeResiduo: 'II', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Sucata Ferrosa', value: '44', classeResiduo: 'II', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: true },
    { label: 'Sucata Metálica', value: '45', classeResiduo: 'II', tecnologiaTratamento: 'Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: true },
    { label: 'IBCs - Contaminados', value: '46', classeResiduo: 'I', tecnologiaTratamento: 'Descontaminação para Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: '0', ressarcimento: false },
    { label: 'Tambor/Bombona 200/50/25/20 LTS Contaminado', value: '47', classeResiduo: 'I', tecnologiaTratamento: 'Descontaminação para Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: 'Venda', ressarcimento: false },
    { label: 'Vidro', value: '48', classeResiduo: 'II', tecnologiaTratamento: 'Aterro classe II/ Reciclagem', unidadeMedida: 'KG', valor: '0', custoDestinacao: 'Venda', ressarcimento: false },
    { label: 'Baterias Automotivas', value: '49', classeResiduo: 'I', tecnologiaTratamento: '???', unidadeMedida: 'Uidade', valor: '0', custoDestinacao: '0', ressarcimento: false },]

    export type ResiduosType = typeof residuos[0];