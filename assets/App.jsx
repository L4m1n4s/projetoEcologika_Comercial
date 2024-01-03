import { NavigationContainer } from '@react-navigation/native'
import { Home } from './pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GerenciamentoResiduos } from './pages/GerenciamentoResiduos';
import { ListaColeta } from './pages/listaColetaPage';
import { ListaResiduos } from './pages/listaResiduos';
import { EmpresaDados } from './pages/empresaDados';

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
