<script setup lang="ts">
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref } from 'vue'; // used for conditional rendering
import { useRouter } from 'vue-router';
import { useTheme } from '/@/composables';
import { auth } from '../firebase';
const router = useRouter();
const isLoggedIn = ref(true); // runs after firebase is initialized
const { toggleDark } = useTheme();

onAuthStateChanged(auth, user => {
  if (user) {
    isLoggedIn.value = true; // if we have a user
  } else {
    isLoggedIn.value = false; // if we do not
  }
});

const logout = () => {
  signOut(auth)
    .then(() => {
      router.push('/');
    })
    .catch(error => {
      console.error(error);
    });
};
</script>
<template>
  <nav
    class="flex items-center justify-between flex-wrap p-6 fixed w-full z-10 top-0"
  >
    <div class="flex items-center flex-shrink-0 mr-6">
      <a href="/">
        <span class="text-2xl pl-2"
          ><i class="em em-grinning"></i> Areolung
        </span>
      </a>
    </div>

    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div
      class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
    >
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <router-link
            v-if="!isLoggedIn"
            to="/login"
            class="inline-block py-2 px-4"
          >
            Login
          </router-link>
          <button v-else @click="logout" class="inline-block py-2 px-4">
            Logout
          </button>
        </li>
        <li class="mr-3">
          <router-link to="/quiz" class="inline-block py-2 px-4">
            Quiz
          </router-link>
        </li>
        <li class="mr-3">
          <router-link to="/about" class="inline-block py-2 px-4">
            About
          </router-link>
        </li>
        <li>
          <a
            href="#"
            @click="toggleDark()"
            class="text-cyan-700 hover:text-cyan-500"
          >
            <i i="ph-sun dark:ph-moon" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
