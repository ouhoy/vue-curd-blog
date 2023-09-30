<script setup lang="ts">
import Spinner from "@/components/Spinner.vue";

import getPosts from "@/composables/getPosts";
import {computed, onMounted, onUpdated, ref, watch, watchEffect} from "vue";
import PostList from "@/components/PostList.vue";
import {useRoute} from "vue-router";
import TagCloud from "@/components/TagCloud.vue";

const route = useRoute()
const tag = ref(route.params.tag);
const {posts, error, load} = getPosts();
load();


interface Post {
  title: string,
  body: string,
  id: number,
  tags: string[]
}

const postsWithTag = computed(() => posts.value.filter(post => post.tags.includes(`${tag.value}`)));

watch(() => route.params.tag, () => {
  tag.value = route.params.tag;
});

</script>

<template>
  {{ tag }}

  <div v-if="error"><p>{{ error }}</p></div>
  <div v-if="postsWithTag.length">
    <PostList :posts="postsWithTag"/>
    <TagCloud :posts="posts"/>
  </div>
  <div v-else>
    <Spinner/>
  </div>

</template>

<style scoped>

</style>

<!--<template>-->
<!--  <div class="tag">-->
<!--    <div v-if="error">{{ error }}</div>-->
<!--    <div v-if="posts.length" class="layout">-->
<!--      <PostList :posts="postsWithTag" />-->
<!--      <TagCloud :posts="posts" />-->
<!--    </div>-->
<!--    <div v-else>-->
<!--      <Spinner />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import TagCloud from '../components/TagCloud.vue'-->
<!--import Spinner from '../components/Spinner.vue'-->
<!--import PostList from '../components/PostList.vue'-->
<!--import getPosts from '../composables/getPosts'-->
<!--import { useRoute } from 'vue-router'-->
<!--import { computed } from 'vue'-->

<!--export default {-->
<!--  components: { PostList, Spinner, TagCloud },-->
<!--  setup() {-->
<!--    const route = useRoute()-->
<!--    const { posts, error, load } = getPosts()-->

<!--    load()-->

<!--    const postsWithTag = computed(() => {-->
<!--      console.log("Ran")-->
<!--      return posts.value.filter(p => p.tags.includes(route.params.tag))-->

<!--    })-->
<!--    console.log("Changed")-->
<!--    return { error, posts, postsWithTag }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--  .tag {-->
<!--    max-width: 1200px;-->
<!--    margin: 0 auto;-->
<!--    padding: 10px;-->
<!--  }-->
<!--</style>-->