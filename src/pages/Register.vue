<script setup lang="ts">
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router'; // import router
import { auth } from '../firebase';
const email = ref('');
const password = ref('');
const router = useRouter(); // get a reference to our vue router
const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
    .then(data => {
      console.log('Successfully registered!');
      router.push('/feed'); // redirect to the feed
    })
    .catch(error => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
<template>
  <Navbar />
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl"
    >
      <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
        Register Your Account
      </div>
      <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
        Sign up using the methods below.
      </div>

      <div class="mt-10">
        <form action="#">
          <div class="flex flex-col mb-5">
            <label for="email" class="mb-1 text-xs tracking-wide text-gray-600"
              >E-Mail Address:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <i class="fas fa-at text-blue-500"></i>
              </div>

              <input
                type="email"
                name="email"
                class="bg-white text-gray-500 text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your email"
                v-model="email"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >Password:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <span>
                  <i class="fas fa-lock text-blue-500"></i>
                </span>
              </div>

              <input
                type="password"
                name="password"
                class="bg-white text-gray-500 text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your password"
                v-model="password"
              />
            </div>
          </div>

          <div class="flex w-full">
            <button
              @click="register"
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">Register</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex justify-center items-center mt-6">
      <span class="ml-2">
        Already have an account?
        <router-link to="/login" class="ml-2 text-blue-500 font-semibold">
          Login
        </router-link>
      </span>
    </div>
  </div>
</template>
<style></style>
