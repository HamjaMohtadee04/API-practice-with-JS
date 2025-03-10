function loadPosts(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => displayPosts(data))
}
/*
1.get the container element where you want to add the new elements
2.create chile element
3.set innerHTML
4.appenChild
 */
function displayPosts(posts){
    const postsContainer = document.getElementById('posts-container')
    for ( const post of posts){
            //  console.log(post)
       const postDiv = document.createElement('div')
       postDiv.classList.add('post')
       postDiv.innerHTML =`
       <h4>User-${post.userId}</h4>
        <h5>Post:${post.title}</h5>
  <p>Post Description: ${post.body}</p>
       `;
       postsContainer.appendChild(postDiv);
        // console.log(postsContainer)
    }
}

loadPosts()
