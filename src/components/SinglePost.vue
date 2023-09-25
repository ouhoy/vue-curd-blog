<script setup lang="ts">

import {computed} from "vue";

interface Post {
  title: string,
  body: string,
  id: number,
  tags: string[]
}

const {post} = defineProps<{ post: Post }>();



const snippet = computed(() => {
  return post.body.substring(0, 100) + "..."
})

</script>

<template>
  <div class="post">
    <router-link :to="{name: 'Details', params: {id: post.id} }" >


      <h3>{{ post.title }}</h3>
    </router-link>

    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }} </span>
  </div>
</template>

<style scoped>

</style>