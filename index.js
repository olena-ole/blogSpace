'use strict';

const form = document.querySelector('#post-form');
let postsArr = [];

function renderPosts() {
    let html = '';
    for (let post of postsArr) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
        `;
    };
    document.getElementById('blog-list').innerHTML = html;
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        postsArr = data.slice(0, 5);
        renderPosts();
    });

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const postTitle = formData.get('title');
    const postBody = formData.get('body');
    form.reset();
    const data = {
        title: postTitle,
        body: postBody
    };
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {'Content-Type': 'application/json'} 
    })
        .then(res => res.json())
        .then(data => {
            postsArr.unshift(data);
            renderPosts();
        });
})