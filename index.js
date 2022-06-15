'use strict';

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        let html = '';
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
            `;
        };
        document.getElementById('blog-list').innerHTML = html;
    });

const form = document.querySelector('#post-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const postTitle = formData.get('title');
    const postBody = formData.get('body');
    const data = {
        title: postTitle,
        body: postBody
    };
    console.log(data);
})