<template>
  <div id="work-view">
    <loading-screen v-if="loading"></loading-screen>
    <div id="filter-controls" v-if="!loading" class="mx-auto w-3/4 md:w-content md:px-4 mt-16 bg-black text-center py-4 block border-solid border-2 border-grey-dark">
      <p class="text-white pb-2">Filter by Type:</p>
      <button @click="filterWorks('all')" class="ml-2 mt-2 bg-grey-dark text-white py-2 px-3 rounded-full">All</button>
      <button @click="filterWorks(type)" class="ml-2 mt-2 bg-grey-dark text-white py-2 px-3 rounded-full" v-for="(type, index) in types" :key="index">{{type}}</button>
    </div>
    <transition-group name="bounce" tag="div" class="grid mt-4" v-if="!loading">
      <router-link :to="'/work/'+ project.id" v-for="project in projects" :key="project.id">
          <img class="work-image" :src="project.image" alt="placeholder">
      </router-link>
    </transition-group>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { get } from '@/store/Repository';
import loadingScreen from '@/components/global/LoadingScreen.vue';
import Project from '@/store/Project.ts';
@Component({ components: { loadingScreen } })
export default class Projects extends Vue {
    itemType: string = 'all';
    allProjects: Array<Project> = [];
    loading: boolean = true;
    get types () {
      return Array.from(new Set(this.allProjects.map(item => item.type)));
    }
    get projects () {
      if (this.itemType === 'all') {
        return this.allProjects;
      } else {
        return this.allProjects.filter(el => {
          return el.type === this.itemType;
        });
      }
    }
    mounted () {
      get('http://api.test/api/projects')
        .then(response => {
          this.allProjects = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
    filterWorks (type: string) {
      this.itemType = type;
    }
}
</script>
<style lang="stylus">
.work-image {
  object-fit: cover;
}

.grid-item-preview {
  grid-column: span 99;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-flow: row;
  grid-gap: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.bounce-enter-active {
  animation: bounce-in 1s;
}

.bounce-leave-active {
  animation: bounce-in 1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>
