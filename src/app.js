import { LightningElement } from "lwc";

export default class App extends LightningElement {
    /**
     * Object Javascript
     * 
     * {key:value, key1: value1, key2: value2, }
     * nameObject = { 
          key1: value1,
          key2: value2, 
          key3: value3
        };

        acessar valores das keys:

        nomeObject.key

        Ex: 
          pessoa.nome
          pessoa.status

          os Dados em em uma lista
          um lista de resultados armazenados em objetos
         lista =  [
            {},
            {},
            {},
          ]
     */

    pessoa = {
      nome: "Prandini",
      tel: "8899",
      idade: 28,
      status: true
    };

    /**
     * Lista de Objetos
     */

    pokemons = [
      {cod: 1, nome: "Pikachu", tipo:"raio", nivel:52},
      {cod: 2, nome: "Charmander", tipo:"fogo", nivel:35},
      {cod: 3, nome: "Chicorita", tipo:"planta", nivel:21},
      {cod: 4, nome: "Mew", tipo:"Psiquico", nivel:11},
      {cod: 5, nome: "Charizard", tipo:"fogo", nivel:26},
      {cod: 6, nome: "Taurus", tipo:"Normal", nivel:46},
      {cod: 7, nome: "Articuno", tipo:"lendário", nivel:12}
    ];

    //Chicorita
    //Meow
    //Bulbassauro
    //Charizard
    //Taurus
    //Articuno
    //Zapdos
    //Jinx
    //Squartle
    

    /**
     * Crie uma lista de objetos com valores 
     * relacionadas a personagens da Caverna do Dragão
     * 
     * nome, arma, força, agilidade, inteligencia, estamina
     * 
     * 7 personagens
     * 
     * Exibir os dados em linhas.
     * H1 -> Personagens Caverna do Dragão
     * Dados abaixo
     * 
     */






}
