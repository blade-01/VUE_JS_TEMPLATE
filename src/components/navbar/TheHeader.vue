<template>
  <header
    class="header flex items-center main fixed w-full h-[78px] top-0 left-0 z-50 shadow-sm bg-white"
  >
    <div class="container">
      <div class="header-content flex justify-between items-center w-full">
        <router-link :to="{ name: 'home' }">
          <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png" alt="logo" class="w-[60px] object-contain" />
        </router-link>
        <nav
          class="fixed h-full w-full top-0 -left-full mt-[76px] bg-white py-8 lg:relative lg:w-auto lg:left-0 lg:m-0 lg:p-0 lg:bg-inherit transition-all duration-500 lg:transition-none"
          :class="{ 'open-navbar': show }"
        >
          <ul
            class="block text-center lg:flex lg:space-x-12 lg:m-0 lg:items-center"
          >
            <li class="mb-8 lg:m-0 mt-10" v-for="route in routes" :key="route">
              <router-link
                :to="{ name: route.routeName }"
                class="font-medium capitalize"
                active-class="header-link"
                v-if="!route.outsideURL"
                >{{ route.name }}</router-link
              >
              <a
                :href="[
                  $route.name === 'home' || $route.name === 'about'
                    ? '#contact'
                    : '/#contact',
                ]"
                class="font-medium capitalize"
                v-else
                >Contact</a
              >
            </li>
          </ul>
        </nav>
        <div
          class="toggle lg:hidden transition-all duration-500"
          @click="toggleNav"
          :class="{ change: show }"
        >
          <div class="toggler"></div>
          <div class="toggler"></div>
          <div class="toggler"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const routes = [
  {
    name: "Home",
    routeName: "home",
  },
  {
    name: "About",
    routeName: "about",
  },
];
const show = ref(false);

const toggleNav = () => {
  show.value = !show.value;
};

const router = useRouter();

onMounted(() => {
  router.beforeEach(() => {
    show.value = false;
  });
});
</script>

<style lang="scss" scoped></style>
