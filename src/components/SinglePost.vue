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
    <router-link :to="{name: 'Details', params: {id: post.id} }">


      <h3>{{ post.title }}</h3>
    </router-link>

    <p>{{ snippet }}</p>

    <span class="pill" v-for="tag in post.tags" :key="tag">
    <router-link class="pill" :to="{name: 'Tag', params: {tag: tag}}">
      #{{ tag }}
</router-link>
    </span>
  </div>
</template>

<style scoped>

</style>