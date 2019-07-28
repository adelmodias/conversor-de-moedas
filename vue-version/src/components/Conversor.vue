<template>
  <div>
    <h2>Conversor de moedas com Vue.js</h2>

    <div class="conversor">
      <h2>{{moedaA}} para {{moedaB}}</h2>

      <form>
        <input type="text" v-model="moedaA_valor" v-bind:placeholder="moedaA">
        <input type="submit" value="Converter" v-on:click.prevent="converter">
      </form>

      <h2>Valor convertido: {{moedaB_valor}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Conversor',
  props: [
    "moedaA",
    "moedaB"
  ],
  data() {
    return {
      moedaA_valor: "",
      moedaB_valor: 0
    }
  },
  methods: {
    converter() {
      let de_para = `${this.moedaA}_${this.moedaB}`;
      let apiKey = "950bee05bedc8315e117";
      let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${apiKey}`;

      fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        let cotacao = json[de_para];
        this.moedaB_valor = ( parseFloat(this.moedaA_valor) * cotacao).toFixed(2);
      })
    }
  }
}
</script>

<style scoped>
.conversor {
  padding: 50px 40px;
  /* width: 450px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 30px 30px 50px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
  background: #fff;
  border-radius: 5px;
}

h2 {
  font-size: 2rem;
  margin-top: 10px;
  margin-bottom: 40px;
  margin-bottom: 1.5rem;
  font-family: "Raleway", serif;
  font-weight: 400;
}

form {
  display: flex;
  justify-content: center;
}

input {
  margin-bottom: 25px;
  font-size: 1.5rem;
  font-family: "Raleway", serif;
}
</style>
