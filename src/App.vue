<template>
  <div id="app" class="lg:flex background">
    <sidebar/>
    <transition name="slide">
      <router-view class="w-full h-full"/>
    </transition>
  </div>
</template>
<script lang="ts">
import '@/assets/css/tailwind.css';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/Sidebar.vue';
@Component({
  components: {
  Sidebar
  }
  })
export default class App extends Vue {}
</script>
<style lang="stylus">
</style>
