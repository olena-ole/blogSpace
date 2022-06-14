'use strict';

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => console.log(data.slice(0, 5)));