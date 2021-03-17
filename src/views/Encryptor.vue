<template>
  <div class="mx-auto" style="width: 50%;">
    <encryptor-component/>
  </div>
</template>

<script>
import EncryptorComponent from '../components/EncryptorComponent.vue';

export default {
  name: 'Encryptor',
  components: {
    EncryptorComponent,
  },
};
</script>
