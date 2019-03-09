<template>
  <div>
    <router-link class="text-blue bg-black px-8 py-4 m-8 block w-content border-solid border-grey-dark border-2 rounded" to="/work">Back</router-link>
    <div class="bg-black m-auto border-solid border-grey-dark border-8 md:border-1rem p-4 rounded-lg text-white w-4/5">
      <h1 class="text-blue text-center m-4 mb-12">{{this.project.title}}</h1>
      <p>Created: {{ this.project.project_date}} </p>
      <p class="pb-8"> {{ this.project.description}}</p>
      <iframe :src="this.project.link" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { get } from '@/store/Repository';
import Project from '@/store/Project.ts';
@Component({})
export default class Single extends Vue {
  @Prop() id!: number;
  project: Project = new Project();
  beforeMount () {
    get('projects/' + this.id)
      .then((response) => {
        this.project = response.data;
      });
  }
}
</script>
<style lang="stylus">
</style>
