<script setup lang="ts">
import Spinner from "@/components/Spinner.vue";

import getPosts from "@/composables/getPosts";
import {computed, onMounted, onUpdated, ref} from "vue";
import PostList from "@/components/PostList.vue";
import {useRoute} from "vue-router";

const route = useRoute()
const tag = route.params.tag;
const {posts, error, load} = getPosts();
load();

const postsWithTag = computed(() => posts.value.filter(post => post.tags.includes(`${tag}`)))

onUpdated(() => {
  console.log(route.params.tag)
})
</script>

<template>
  {{ tag }}

  <div v-if="error"><p>{{ error }}</p></div>
  <div v-if="postsWithTag.length">
    <PostList :posts="postsWithTag"/>
  </div>
  <div v-else>
    <Spinner/>
  </div>

</template>

<style scoped>

</style>