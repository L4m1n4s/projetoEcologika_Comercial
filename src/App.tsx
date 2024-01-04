import { NavigationContainer } from '@react-navigation/native'
import { Home } from './screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GerenciamentoResiduos } from './screens/GerenciamentoResiduos';
import { ListaColeta } from './screens/listaColetaPage';
import { ListaResiduos } from './screens/listaResiduos';
import { EmpresaDados } from './screens/empresaDados';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gerenciamento de Residuos" component={GerenciamentoResiduos} />
        <Stack.Screen name="Coletas" component={ListaColeta} />
        <Stack.Screen name="Residuos" component={ListaResiduos} />
        <Stack.Screen name="Dados Contrato" component={EmpresaDados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
