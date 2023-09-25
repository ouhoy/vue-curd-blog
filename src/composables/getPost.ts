import {ref} from "vue";

interface Post {
    title: string,
    body: string,
    id: number,
    tags: string[]
}

const getPost = (id: number) => {

    const post = ref({} as Post);
    const error = ref<string>("");

    const load = async () => {

        try {

            let data = await fetch(`http://localhost:3000/posts/${id}`);
            console.log(id)
            if (!data.ok) throw Error(`A post with this id ${id} does not exist`);

            post.value = await data.json()


        } catch (err) {
            console.error("An error while fetching data: ", (err as Error).message)
            error.value = `${(err as Error).message}`;

        }
    }

    return {post, error, load}
}

export default getPost