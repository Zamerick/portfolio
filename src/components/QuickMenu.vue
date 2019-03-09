<template>
  <div class="quick-menu" id="quickMenu">
    <ul v-if="this.isActive">
      <li v-for="(n,key) in menuCount" :key="key" class="sub-menu bg-grey-darkest rounded-full border-grey border-2" :style="getSubMenu(n-1)">
        <nav-icon ref="icon"  v-if="menuUrlList[n-1].isLink" :to="menuUrlList[n-1].url" :icon="menuUrlList[n-1].icon" class="ml-2 my-1 hidden"/>
        <nav-icon ref="icon" v-else :href="menuUrlList[n-1].url" :icon="menuUrlList[n-1].icon"  class="ml-2 my-1 hidden"/>
      </li>
    </ul>
    <div class='menu bg-grey text-black'>
      <div class='core-menu' @click="toggleMenu">
        <div class='bar'></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavIcon from '@/components/NavIcon.vue';
import { VueClass } from 'vue-class-component/lib/declarations';
@Component({ components: { NavIcon }})
export default class QuickMenu extends Vue {
  @Prop() menuCount!: Number;
  @Prop() menuUrlList!: Array<Object>;
  isActive: boolean = false;
  getSubMenu (n: number) {
    var subMenu = [
      [['0', '-160'], ['80', '-138.6'], ['138.6', '-80'], ['160', '0']]
    ];
    return {
      top: subMenu[0][n][0] + 'px',
      left: subMenu[0][n][1] + 'px'
    };
  }
  toggleMenu () {
    let menuEl = document.getElementById('quickMenu');
    let menuIconEl = this.$refs.icon as Array<NavIcon>;
    this.isActive = !this.isActive;
    if (menuEl !== null) {
      menuEl.classList.toggle('active');
      menuIconEl.forEach((element: NavIcon) => {
        element.$el.classList.toggle('hidden');
        element.$el.classList.toggle('menu-animate');
      });
    }
  }
}
</script>
<style lang="stylus">
.menu-animate {
  animation: bounce 1s linear 1s;
}

.quick-menu {
  color: #0c0e10;
  width: 60px;
  height: 60px;
  transition: all 1s ease;
  margin: 0.5em;
  top: 30px;
  right: 30px;
  transform: rotate(180deg);

  > .menu {
    display: block;
    position: absolute;
    border-radius: 50% !important;
    width: 60px;
    height: 60px;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
    color: #0c0e10;
    transition: all 1s ease;

    .core-menu {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 60px;
      height: 60px;
      transform: rotate(180deg);
      transition: all 1s ease;

      .bar {
        transition: all 1s ease;
        width: 28px;
        height: 3px;
        background: #0c0e10;
        position: absolute;
        top: 35%;
        margin-top: -1.5px;
        left: 16px;
        transform-origin: 0% 50%;

        &:before, &:after {
          transition: all 1s ease;
          content: '';
          width: 28px;
          height: 3px;
          background: #0c0e10;
          position: absolute;
          left: 0px;
          transform-origin: 0% 50%;
        }

        &:before {
          margin-top: 30%;
        }

        &:after {
          margin-top: 60%;
        }
      }
    }
  }

  .sub-menu {
    box-sizing: border-box;
    position: absolute;
  }

  // CSS for transforming hamburger into cross.
  &.active {
    transform: rotate(0deg) !important;

    .menu {
      transform: scale(0.7);

      .bar {
        top: 50%;
        margin-top: -1.5px;
        left: 50%;
        margin-left: -12px;
        transform-origin: 50% 50%;
        transform: rotate(405deg);

        &:before {
          transform-origin: 50% 50%;
          transform: rotate(-450deg);
          margin-top: 0px;
        }

        // hides the third "extra" line from cross mode.
        &:after {
          opacity: 0;
        }
      }
    }
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0px);
  }

  10% {
    transform: translateY(6px);
  }

  30% {
    transform: translateY(-4px);
  }

  70% {
    transform: translateY(3px);
  }

  90% {
    transform: translateY(-2px);
  }
}
</style>
