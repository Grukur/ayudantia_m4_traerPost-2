
const getPosts = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        if (data) {
            const postInfo = data.map(i =>
                `<li>
                    <p><strong>${i.title}</strong></p>
                    <p>${i.body}</p>
                </li>`
            ).join('')
            
            document.getElementById('post-data').innerHTML = postInfo
        }
    } catch (error) {
        console.log(error)
    }
}