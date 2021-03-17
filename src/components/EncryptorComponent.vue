<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card">
          <form @submit.prevent="runAfin">
            <div class="card-body">
              <h5 class="card-title">Encryptor Afin</h5>
              <h6 class="card-subtitle mb-2 text-muted">please enter the following data</h6>
              <h6 class="card-subtitle mb-2 text-muted">
                remember that the variable 'n' is equal to 27</h6>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="dataa">a</span>
                      </div>
                      <input type="number" class="form-control" placeholder="Ex: 10"
                             min="1" max="27" title="no greater than 27"
                             v-model="encryp.a" required>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="datab">b</span>
                      </div>
                      <input type="number" class="form-control" placeholder="Ex: 10"
                             min="1" max="27" title="no greater than 27"
                             v-model="encryp.b" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Text</span>
                      </div>
                      <textarea class="form-control" aria-label="Text" v-model="encryp.text"
                                placeholder="text to encrypt or decrypt" required/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer" style="border-top-style: none">
              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn btn-dark"
                          @click="loadToDo(false)">Decrypt
                  </button>
                </div>
                <div class="col">
                  <a @click="reloadForm">
                    <img src="@/assets/reload.png" style="max-width: 30px; max-height: 30px">
                  </a>
                </div>
                <div class="col">
                  <button type="submit" class="btn btn-success"
                          @click="loadToDo(true)">Encrypt
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-if="showresult" class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="input-group">
              <div class="input-group-prepend">
                <span v-if="todo" class="input-group-text">Encrypted Text</span>
                <span v-else class="input-group-text">Decrypted Text</span>
              </div>
              <textarea class="form-control" aria-label="Text" v-model="encryp.result"
                        placeholder="text to encrypt or decrypt" readonly/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as constants from '../store/constants';

export default {
  name: 'EncryptorComponent',
  data() {
    return {
      encryp: {},
      todo: null,
      alphabet: {},
      alphabetlist: [],
      showresult: false,
    };
  },
  methods: {
    runAfin() {
      this.fixText();
      if (!this.todo) {
        this.decryptText();
      } else {
        this.encryptText();
      }
      this.showresult = true;
    },
    decryptText() {
      const inv = this.invMod(this.encryp.a, constants.n);
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < this.encryp.text.length; j++) {
        const aux = this.encryp.text.charAt(j);
        this.alphabetlist.forEach((item) => {
          if (aux === item.letter) {
            let res = Number(item.value) - Number(this.encryp.b);
            res *= inv;
            res = this.exactMod(res, constants.n);
            // eslint-disable-next-line operator-assignment
            alert(this.findFinalLetter(res));
            // eslint-disable-next-line operator-assignment
            this.encryp.result = this.encryp.result + this.findFinalLetter(res);
          }
        });
      }
    },
    encryptText() {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < this.encryp.text.length; j++) {
        const aux = this.encryp.text.charAt(j);
        this.alphabetlist.forEach((item) => {
          if (aux === item.letter) {
            let res = Number(this.encryp.a) * Number(item.value);
            res += Number(this.encryp.b);
            res = Number(this.exactMod(res, constants.n));
            alert(this.findFinalLetter(res));
            // eslint-disable-next-line operator-assignment
            this.encryp.result = this.encryp.result + this.findFinalLetter(Number(res));
            // alert(c);
          }
        });
      }
    },
    findFinalLetter(l) {
      // eslint-disable-next-line consistent-return
      this.alphabetlist.forEach((item) => {
        if (l === Number(item.value)) {
          return item.letter;
        }
      });
    },
    exactMod(a, m) {
      const remain = a % m;
      return Math.floor(remain >= 0 ? remain : remain + m);
    },
    invMod(a, m) {
      // eslint-disable-next-line no-param-reassign
      [a, m] = [Number(a), Number(m)];
      if (Number.isNaN(a) || Number.isNaN(m)) {
        return NaN; // invalid input
      }
      // eslint-disable-next-line no-mixed-operators,no-param-reassign
      a = (a % m + m) % m;
      if (!a || m < 2) {
        return NaN; // invalid input
      }
      // find the gcd
      const s = [];
      let b = m;
      while (b) {
        // eslint-disable-next-line no-param-reassign
        [a, b] = [b, a % b];
        s.push({
          a,
          b,
        });
      }
      if (a !== 1) {
        return 'NaN'; // inverse does not exists
      }
      // find the inverse
      let x = 1;
      let y = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = s.length - 2; i >= 0; --i) {
        [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)];
      }
      // eslint-disable-next-line no-mixed-operators
      return (y % m + m) % m;
    },
    loadToDo(aux) {
      this.todo = aux;
    },
    reloadForm() {
      this.encryp = {};
      this.encryp.result = '';
      this.showresult = false;
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
      textnospace = this.encryp.text.replace(/\n/g, '');
      this.encryp.text = textnospace;
      this.encryp.text = this.encryp.text.toUpperCase();
    },
  },
  mounted() {
    this.encryp.result = '';
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
