<template>
  <div class="bg-black w-full">
    <h1 class="message text-white w-content bg-black p-8 rounded-lg mx-auto absolute">Sorry, that page doesn't exist.</h1>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class NotFound extends Vue {}
</script>
<style lang="stylus">
.message {
  transform: translateX(-50%);
  top: 20%;
  left: 50%;
}
</style>
