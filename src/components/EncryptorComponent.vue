<template>
  <div class="card">
    <form @submit.prevent="runAfin">
      <div class="card-body">
        <h5 class="card-title">Encryptor Afin</h5>
        <h6 class="card-subtitle mb-2 text-muted">please enter the following data</h6>
        <h6 class="card-subtitle mb-2 text-muted">remember that the variable 'n' is equal to 27</h6>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="dataa">a</span>
                </div>
                <input type="number" class="form-control" placeholder="Ex: 10"
                       min="1" max="27" title="no greater than 27" v-model="encryp.a" required>
              </div>
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="datab">b</span>
                </div>
                <input type="number" class="form-control" placeholder="Ex: 10"
                       min="1" max="27" title="no greater than 27" v-model="encryp.b" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Text</span>
                </div>
                <textarea class="form-control" aria-label="Text"
                          v-model="encryp.text" placeholder="text to encrypt or decrypt" required/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer" style="border-top-style: none">
        <div class="row">
          <div class="col">
            <button type="submit" class="btn btn btn-dark" @click="loadToDo(false)">Decrypt</button>
          </div>
          <div class="col">
            <a @click="reloadForm">
              <img src="@/assets/reload.png" style="max-width: 30px; max-height: 30px">
            </a>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-success" @click="loadToDo(true)">Encrypt</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import * as constants from '../store/constants';

export default {
  name: 'EncryptorComponent',
  data() {
    return {
      encryp: {},
      todo: false,
      alphabet: {},
      alphabetlist: [],
    };
  },
  methods: {
    runAfin() {
      this.fixText();
    },
    loadToDo(aux) {
      this.todo = aux;
    },
    reloadForm() {
      this.encryp = {};
    },
    fixText() {
      let textnospace = this.encryp.text.replace(/ /g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/,/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/\./g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/;/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/:/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/\(/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/\)/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/'/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/\?/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/¿/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/!/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/¡/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/-/g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/\//g, '');
      this.encryp.text = textnospace;
      textnospace = this.encryp.text.replace(/_/g, '');
      this.encryp.text = textnospace;
    },
  },
  mounted() {
    const arrayalph = constants.ALPHABET.split('/');
    arrayalph.forEach((item) => {
      const alph = item.split(':');
      const aux = {};
      // eslint-disable-next-line prefer-destructuring
      aux.letter = alph[0];
      // eslint-disable-next-line prefer-destructuring
      aux.value = alph[1];
      this.alphabetlist.push(aux);
    });
  },
};
</script>
