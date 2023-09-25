import {ref} from "vue";

interface Post {
    title: string,
    body: string,
    id: number,
    tags: string[]
}

const getPosts = () => {

    const posts = ref<Post[]>([]);
    const error = ref<string>("");

    const load = async () => {

        try {

            let data = await fetch(`http://localhost:3000/posts`);

            if (!data.ok) throw Error("Something went wrong, please try again");

            posts.value = await data.json()


        } catch (err) {
            console.error("An error while fetching data: ", (err as Error).message)
            error.value = `${(err as Error).message}`;

        }
    }

    return {posts, error, load}
}

export default getPosts