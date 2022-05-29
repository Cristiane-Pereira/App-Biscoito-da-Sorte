import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Biscoito from './assets/biscoito.png';
import BiscoitoAberto from './assets/biscoitoAberto.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7d22",
  },
});

const BiscoitodaSorte = () => {
  const [frase, setFrase] = useState("Alguma frase aqui");
  const [biscoito, setBiscoito] = useState(Biscoito);
  let frasesAleatorias = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
      'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.',
      'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
      'No meio da dificuldade encontra-se a oportunidade',
      'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
      'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação',
      'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
      'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
      'É parte da cura o desejo de ser curado.',
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'O que me preocupa não é o grito dos maus. É o silêncio dos bons.',
      'Imagine uma nova história para sua vida e acredite nela.',
      'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
      'Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.',
      'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
      'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
      'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
      'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.',
      'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.',
      'Por vezes sentimos que aquilo que fazemos não é senão uma gota de água no mar. Mas o mar seria menor se lhe faltasse uma gota.',
      'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
      'Quando uma criatura humana desperta para um grande sonho e sobre ele lança toda a força de sua alma, todo o universo conspira a seu favor.',
      'Na vida, não existem soluções. Existem forças em marcha: é preciso criá-las e, então, a elas seguem-se as soluções.',
      'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
      'O entusiasmo é a maior força da alma. Conserva-o e nunca te faltará poder para conseguires o que desejas.',
      'Quer você acredite que consiga fazer uma coisa ou não, você está certo.',
      'O verdadeiro homem mede a sua força quando se defronta com o obstáculo.',
      'Se você quer um pedacinho do paraíso, acredite em Deus.Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.',
      'Acredite, existem pessoas que não procuram beleza, mas sim coração.',
      'Ninguém é assim tão velho que não acredite que poderá viver por mais um ano.',
      'Acredite na justiça, mas não a que emana dos demais e sim na tua própria.',
      'Dois homens não podem passar meia hora juntos sem que um conquiste uma evidente superioridade em relação ao outro.',
      'Não abandones as tuas ilusões. Sem elas podes continuar a existir, mas deixas de viver.',
      'Acredite que você pode, assim você já está no meio do caminho.'
  ];

  const handleQuebraBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frasesAleatorias.length);
    setBiscoito(BiscoitoAberto);
    setFrase(frasesAleatorias[numeroAleatorio]);
  }
  return (
    <View style={styles.container}>
      <Image source={biscoito} style={styles.img} />
      <Text style={styles.text}>"{frase}"</Text>
      <TouchableOpacity style={styles.btn} onPress={handleQuebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Abra o Biscoito da Sorte</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BiscoitodaSorte;
