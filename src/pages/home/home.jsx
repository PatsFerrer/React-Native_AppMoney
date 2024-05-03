import { Image, Text, View } from "react-native"
import icons from "../../constants/icons.js"
import { styles } from "./home.style.js";
import Despesa from './../../components/despesa/despesa.jsx';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.logo} />

      <View style={styles.dashboard}>
        <View>
          <Text style={styles.dashboardValor}>R$ 5.000,00</Text>
          <Text style={styles.dashboardText}>Todos os gastos</Text>
        </View>
        <Image style={styles.dashboardImg} source={icons.money}/>
      </View>

      <View>
        <Text style={styles.despesaTitulo}>Despesas</Text>
        <Despesa />
      </View>

    </View>
  )
}

export default Home;