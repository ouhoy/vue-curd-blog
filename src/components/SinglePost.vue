<script setup lang="ts">

import {computed} from "vue";

interface Post {
  title: string,
  body: string,
  id: number
}

const {post} = defineProps<{ post: Post }>()
const snippet = computed(() => {
  return post.body.substring(0, 100) + "..."
})

</script>

<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>

  </div>
</template>

<style scoped>

</style>