<template>
  <div id="app" class="container-fliud">
    <div id="nav">
      <router-link to="/">Analyzer</router-link>
      |
      <router-link to="/encryptor">Encryptor</router-link>
      |
      <a @click="openModal" title="Afin's Spanish Alphabet Table">
        <img src="@/assets/info.png" style="max-width: 20px; max-height: 20px">
      </a>
    </div>
    <router-view/>
    <modal-table-alphabet/>
  </div>
</template>

<script>
import ModalTableAlphabet from './components/ModalTableAlphabet.vue';

export default {
  name: 'App',
  components: {
    ModalTableAlphabet,
  },
  data() {
    return {
      isclose: false,
    };
  },
  methods: {
    openModal() {
      // eslint-disable-next-line no-undef
      $('#staticBackdrop')
        .modal('show');
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
