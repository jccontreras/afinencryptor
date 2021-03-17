<template>
  <div class="container-fluid">
    <div class="card">
      <form @submit.prevent="analyzeText">
        <div class="card-body">
          <h5 class="card-title">Welcome to Encryptor Afin</h5>
          <h6 class="card-subtitle mb-2 text-muted">please enter the text you want to analyze</h6>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Text to Analyze</span>
            </div>
            <textarea class="form-control" aria-label="Text" v-model="analyze.text"
                      placeholder="text to analyzet or decrypt" required/>
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
</template>

<script>
export default {
  name: 'AnalyzerComponent',
  data() {
    return {
      analyze: {},
      showresult: false,
    };
  },
  methods: {
    analyzeText() {
      this.fixText();
    },
    countLetters() {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < this.analyze.text.length; j++) {
        const letter = this.analyze.text[j];
        const aux = [];
        this.analyze.text = this.analyze.text.split('');

        // eslint-disable-next-line array-callback-return
        this.analyze.text.map((n) => {
          if (n === letter) {
            aux.push(n);
          }
        });
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
