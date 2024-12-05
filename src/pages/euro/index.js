import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { buscarCotacao } from '../../services/api';

export default function Dolar(){
    const [valorMoedaEuro, setValorMoedaEuro] = useState(null);
    async function atualizar(){
        console.log("entrou nessa função")
        try{
          const response = await buscarCotacao("EUR-BRL");
          console.log(response.data);
          setValorMoedaEuro(response.data);
          console.log(valorMoedaEuro)
        } catch(error){
         console.log('Erro ao atualizar o valor da moeda: '+error);
        }
      }

      useEffect(() => {
        atualizar();
      }, []);

    return(
      <View style={styles.container}>
        <Image
            style={styles.img}
            source={require('../../../assets/euro.png')}
        />
        <Text style={styles.subtitulo}>O dólar americano está:</Text>
        <Text style={styles.preco}>R$ {valorMoedaEuro.ask}</Text>

        {/**Botão para atualizar o valor da moeda */}
        <TouchableOpacity style={styles.btn} onPress={atualizar}>
            <Text style={styles.btnText}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0B1C2C',
      gap: 20,
    },
    img:{
      width: '50%',
      height: 200,
    },
    subtitulo:{
      fontSize: 18,
      color: "white"
    },
    preco:{
      fontSize: 40,
      color: "white",
      fontWeight: 'bold'
    },
    btn:{
      width: '50%',
      height: 50,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 15,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#BFE766',
    }
  })