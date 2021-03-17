<template>
  <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"
       tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Table Spanish Alphabet Afin</h5>
        </div>
        <div class="modal-body">
          <img src="@/assets/tablealphabet.png" style="max-width: 100%; max-height: 100%">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Got it</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalTableAlphabet',
};
</script>
