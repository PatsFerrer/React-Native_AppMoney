import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

import icons from "../../constants/icons.js"
import { styles } from "./home.style.js";
import Despesa from './../../components/despesa/despesa.jsx';

const Home = () => {

  const [total, setTotal] = useState(0);
  const [despesas, setDespesas] = useState([]);

  const OpenDespesa = (id) => {
    console.log('cadastrar despesa');
  }

  const listarDespesas = () => {
    //simular o acesso a API...
    const dados = [
      { id: 1, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png", categoria: "Carro", descricao: "Pagamento IPVA", valor: 2500 },
      { id: 2, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png", categoria: "Casa", descricao: "Condomínio", valor: 620 },
      { id: 3, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png", categoria: "Lazer", descricao: "Sorvete no parque", valor: 17.50 },
      { id: 4, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Walmart", valor: 375 },
      { id: 5, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png", categoria: "Educação", descricao: "Faculdade", valor: 490 },
      { id: 6, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Passagem Aérea", valor: 610 },
      { id: 7, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Churrasco", valor: 144.30 },
      { id: 8, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Hotel", valor: 330 }
    ];

    // soma dos valores
    const soma = dados.reduce(function(prev, current){
      return prev + current.valor;
    }, 0)

    setTotal(soma)
    setDespesas(dados)
  }

  useEffect(() => {
    listarDespesas();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.logo} />

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.dashboard}>
          <View>
            <Text style={styles.dashboardValor}>
              R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </Text>
            <Text style={styles.dashboardText}>Todos os gastos</Text>
          </View>
          <Image style={styles.dashboardImg} source={icons.money} />
        </View>

        <View>
          <Text style={styles.despesaTitulo}>Despesas</Text>


          {
            despesas.map((despesa) => {
              return (
                <Despesa
                  key={despesa.id}
                  id={despesa.id}
                  icon={despesa.icon}
                  categoria={despesa.categoria}
                  descricao={despesa.descricao}
                  valor={despesa.valor}
                />
              )
            })
          }

        </View>

      </ScrollView>

      <TouchableOpacity style={styles.btnAdd} onPress={() => OpenDespesa(0)}>
        <Image source={icons.add} style={styles.btnAddImage} />
      </TouchableOpacity>

    </View>
  )
}

export default Home;