<script setup lang="ts">

const {post} = defineProps<{ post: { title: string, tags: string[] } }>()

</script>

<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{  }}</p>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<style scoped>

</style>