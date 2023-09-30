import {ref} from "vue";

interface Post {
    title: string,
    body: string,
    id: number,
    tags: string[]
}


const useTags = function (posts: Post[]) {

    const tags = ref([] as string[]);
    const tagSet: Set<string> = new Set();

    posts.forEach(post => {
        post.tags.forEach(tag => tagSet.add(tag))
    })

    tags.value = [...tagSet];

    return {tags}
};

export default useTags;
