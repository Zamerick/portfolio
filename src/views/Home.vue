<template>
  <div class="flex flex-col lg:flex-row h-screen">
    <div class="flex flex-col justify-center w-full block lg:hidden my-4">
      <div class="mx-auto bg-black w-1/4 rounded-full border-solid border-grey-dark border-4 md:border-8">
        <img class="px-2 py-1 md:px-8 md:py-4" src="@/assets/images/avatar.png">
      </div>
    </div>
    <div class="mx-auto w-3/4 lg:w-1/2 lg:px-32 flex flex-col justify-center">
      <div class="bg-black border-solid border-grey-dark border-8 md:border-1rem p-4 rounded-lg">
        <h1 class="text-blue text-center mb-8"> Hi! I'm Alex Oxthorn.</h1>
        <p class="text-grey-light">
          I'm a full-stack developer with a strong focus on the frontend. I specialize in Vue and Laravel, and I use those tools to make UI's that empowers users, and hopefully, spark at little joy.
          </p><br>
        <p class="text-grey-light"> If you'd like to learn more about me as a person, you can check out my <a class="text-blue" href="http://blog.alex-oxthorn.com">blog</a> where I talk about tech, entrepreneurship and (occasionally) philosophy/social activism.
        </p>
      </div>
    </div>
    <div class="hidden lg:flex lg:flex-col lg:justify-center lg:w-1/2">
      <div class="mx-auto bg-black w-content h-content rounded-full border-solid border-grey-dark border-1rem">
        <img class="p-16" src="@/assets/images/avatar.png">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { get } from '@/store/Repository';
@Component({})
export default class Home extends Vue {}
</script>
<style lang="stylus">
</style>
