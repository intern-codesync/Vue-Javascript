<template>
  <ul class="flex cursor-pointer bg-[#333] text-white">
    <router-link to="/" class="p-[20px] hover:text-[#fca5a5]">Home</router-link>
          <router-link to="/logo" class="p-[20px] hover:text-[#fca5a5]">Logo</router-link>
          <router-link to="/about" class="p-[20px] hover:text-[#fca5a5]">About</router-link>
          <router-link to="/service" class="p-[20px] hover:text-[#fca5a5]">Services</router-link>
          <router-link to="/contact" class="p-[20px] hover:text-[#fca5a5]">Contact</router-link>
          <router-link to="/toggle" class="p-[20px] hover:text-[#fca5a5]">Toggle</router-link>
      </ul>
  <router-view></router-view>
</template>
<script></script>
