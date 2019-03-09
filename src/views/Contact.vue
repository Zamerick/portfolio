<template>
  <div class="flex flex-wrap overflow-hidden">
    <div class="w-full lg:w-1/2 px-2 mb-2 md:mb-0">
      <h1 class="text-blue text-center my-8 md:my-16 lg:my-24">Contact Me</h1>
      <form action="" method="post" class="w-full max-w-md mx-auto">
        <div class="flex flex-wrap mb-2">
          <!-- Name -->
          <div class="w-full md:w-1/2 px-2 mb-2 md:mb-0">
            <input placeholder="Name" name="name" type="text" class="appearance-none block w-full bg-grey-dark text-grey-light rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-grey-ligher">
            <label for="name"></label>
          </div>
          <!-- Email -->
          <div class="w-full md:w-1/2 px-2 mb-2 md:mb-0">
            <input placeholder="Email" type="email" name="email" class="appearance-none block w-full bg-grey-dark text-grey-light rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-grey-ligher">
            <label for="email"></label>
          </div>
        </div>
        <!-- Subject -->
        <div class="w-full px-2 mb-4 md:mb-0">
          <input placeholder="Subject" type="text" name="subject" class="appearance-none block w-full bg-grey-dark text-grey-light rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-grey-ligher">
          <label for="subject"></label>
        </div>
        <!-- Message -->
        <div class="w-full px-2 mb-2 md:mb-0">
          <textarea placeholder="Message" name="message" class="appearance-none block w-full h-half bg-grey-dark text-grey-light rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-grey-ligher"></textarea>
          <label for="message"></label>
        </div>
        <button type="submit" class="ml-2 bg-blue text-white py-3 px-4 rounded md:mb-4">Send </button>
      </form>
    </div>
    <div class="bg-black w-full hidden lg:block lg:w-1/2 px-2 mb-2 md:mb-0 h-screen">
     <vue-particles class="h-screen" :particlesNumber="120" shapeType="circle" linesColor="#00AFEF" color="#00AFEF"></vue-particles>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class Contact extends Vue {}
</script>
<style lang="stylus">
</style>
