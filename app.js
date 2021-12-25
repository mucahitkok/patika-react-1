import axios from "axios";


async function getData (id){
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const post1 = post.find((i)=> i.id === 1 )//sadece 1 id li postu almak için 
    return { user , post1 }
}

export default getData

