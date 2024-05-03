import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screen/home/home';
import CadDespesa from './src/screen/cadastro-despesa/cad-despesa';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />

        <Stack.Screen
          name="despesa"
          component={CadDespesa}
          options={{
            title: 'Despesa',
            headerTitleAlign: 'center',
            headerShadowVisible: false
          }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
