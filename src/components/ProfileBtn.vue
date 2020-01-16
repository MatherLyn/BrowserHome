<template>
  <svg
    t="1577533250180"
    class="icon profile-btn"
    viewBox="0 0 1102 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="6298"
    width="200"
    height="200"
  >
    <path
      d="M514.576879 0C233.086593 0 2.796308 230.4 2.796308 512S233.086593 1024 514.576879
      1024s511.780571-230.4 511.780572-512S796.067165 0 514.576879 0z m0 153.6c86.966857 0
      153.563429 66.56 153.563429 153.6 0 87.003429-66.56 153.563429-153.563429
      153.563429-87.003429 0-153.526857-66.56-153.526857-153.563429 0-87.04 66.56-153.6
      153.526857-153.6z m0 727.04c-127.963429 0-240.530286-66.56-307.053714-163.84 0-102.4
      204.726857-158.72 307.053714-158.72 102.326857 0 307.053714 56.32 307.053714
      158.72-66.56 97.28-179.126857 163.84-307.053714 163.84z"
      p-id="6299"
      fill="#fff"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ProfileBtn extends Vue {}
</script>

<style scoped>
  .profile-btn {
    right: 8rem;
  }
  .profile-btn:hover {
    transform: scale(0.9)
  }
</style>