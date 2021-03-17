<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card">
          <form @submit.prevent="analyzeText">
            <div class="card-body">
              <h5 class="card-title">Welcome to Encryptor Afin</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                please enter the text you want to analyze</h6>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Text to Analyze</span>
                </div>
                <textarea class="form-control" aria-label="Text" v-model="analyze.text"
                          placeholder="Text to Analyze" required/>
              </div>
            </div>
            <div class="card-footer" style="border-top-style: none">
              <div class="row">
                <div class="col-11">
                  <button type="submit" class="btn btn btn-dark">Analyze
                  </button>
                </div>
                <div class="col-1">
                  <a @click="reloadForm">
                    <img src="@/assets/reload.png" style="max-width: 30px; max-height: 30px">
                  </a>
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
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">First letter</span>
                    </div>
                    <input class="form-control" aria-label="Text" v-model="analyze.first"
                           placeholder="First letter" readonly/>
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Second letter</span>
                    </div>
                    <input class="form-control" aria-label="Text" v-model="analyze.second"
                           placeholder="Second letter" readonly/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AnalyzerComponent',
  data() {
    return {
      analyze: {},
      showresult: false,
      alphabetlist: [],
    };
  },
  methods: {
    analyzeText() {
      this.fixText();
      this.countLetters();
    },
    countLetters() {
      let first = 0;
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < this.analyze.text.length; j++) {
        const letter = this.analyze.text[j];
        const indices = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < this.analyze.text.length; i++) {
          if (this.analyze.text[i] === letter) {
            indices.push(this.analyze.text[i]);
          }
        }
        if (indices.length > first) {
          this.analyze.first = letter;
          first = indices.length;
        }
      }
      this.secondLetter(this.analyze.text, this.analyze.first);
      this.showresult = true;
    },
    secondLetter(text, aux) {
      let finaltext = '';
      let textaux = [];
      textaux = text.split(aux);
      textaux.forEach((item) => {
        finaltext += item;
      });
      let second = 0;
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < finaltext.length; j++) {
        const letter = finaltext[j];
        const indices = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < finaltext.length; i++) {
          if (finaltext[i] === letter) {
            indices.push(finaltext[i]);
          }
        }
        if (indices.length > second) {
          this.analyze.second = letter;
          second = indices.length;
        }
      }
    },
    fixText() {
      let textnospace = this.analyze.text.replace(/ /g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/,/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/\./g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/;/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/:/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/\(/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/\)/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/'/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/\?/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/¿/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/!/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/¡/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/-/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/\//g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/_/g, '');
      this.analyze.text = textnospace;
      textnospace = this.analyze.text.replace(/\n/g, '');
      this.analyze.text = textnospace;
      this.analyze.text = this.analyze.text.toUpperCase();
    },
    reloadForm() {
      this.analyze = {};
      this.showresult = false;
    },
  },
};
</script>
