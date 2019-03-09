<template>
  <div @mouseover="toggleShow()" @mouseout="toggleShow()" class="flex flex-row justify-center">
    <a v-if="this.isLink"  class="w-12 h-12 flex flex-col justify-center text-white active:text-blue hover:text-blue" :href="this.href">
      <icon v-if="!this.show" :name="this.icon"/>
      <span class="-ml-2 text-sm nav-text" v-if="this.hasText && this.show">{{text}}</span>
    </a>
    <router-link v-if="this.isRoute" class="w-12 h-12 flex flex-col justify-center text-white active:text-blue hover:text-blue" :to="this.to">
      <icon v-if="!this.show" :name="this.icon"/>
      <span class="-ml-2 text-xs" v-if="this.hasText && this.show">{{text}}</span>
    </router-link>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/global/Icon.vue';
@Component({ components: { Icon }})
export default class NavIcon extends Vue {
  @Prop() icon!: string;
  @Prop() text!: string;
  @Prop() to!: string;
  @Prop() href!: string;
  show: boolean = false;
  get id () {
    return '#' + this.icon;
  }
  get isLink () {
    return this.href != null && this.href !== '';
  }
  get isRoute () {
    return this.to != null && this.to !== '';
  }
  get hasText () {
    return this.text != null && this.text !== '';
  }
  toggleShow () {
    if (this.hasText) {
      this.show = !this.show;
    }
  }
}
</script>
<style lang="stylus">
*:focus {
  border: none;
}

.nav-text {
  font-variant: small-caps;
  font-style: normal;
}

svg, svg:focus {
  all: inherit;
  border: none;
}
</style>
