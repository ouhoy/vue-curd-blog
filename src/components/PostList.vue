<script setup lang="ts">

import SinglePost from "@/components/SinglePost.vue";

interface Post {
  title: string,
  body: string,
  id: number
}

const {posts} = defineProps<{ posts: Post[] }>()


</script>


<template>

  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
</template>

<style scoped>

</style>