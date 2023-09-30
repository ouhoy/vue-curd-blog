<script setup lang="ts">
import useTags from "@/composables/useTags";

interface Post {
  title: string,
  body: string,
  id: number,
  tags: string[]
}

const {posts} = defineProps<{ posts: Post[] }>();
const {tags} = useTags(posts);


</script>

<template>

  <div class="tag-cloud">
    <h3>Tag</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{name: 'Tag', params:{tag}}">
        #{{ tag }}
      </router-link>
    </div>
  </div>

</template>

<style scoped>

</style>