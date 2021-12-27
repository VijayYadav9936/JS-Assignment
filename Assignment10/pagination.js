function fetchData()
 {
    fetch('http://54.156.123.123/blogs')
        .then(res => res.json())
        .then(result => {
            let out = '<h2 class="vijay"> Assignment No 10 Blogs</h2><hr>'
            result.forEach(user => {
                out +=
                    `
                <hr>
                ${user.id}<br>
                ${user.title}<br>
                ${user.description}<br>
                ${user.author}<br>
            `

            });
            document.querySelector('#mainId').innerHTML = out;
        }
        )
}
fetchData();