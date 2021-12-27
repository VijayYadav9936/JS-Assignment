var fetchData;

fetch('http://54.156.123.123/blogs')
    .then(res => res.json())
    .then(result => {
        fetchData = result
        // console.log(fetchData);

        var state = {
            'querySet': fetchData,
            'page': 1,
            'rows': 5,
            'window': 5,
        }

        blogs()

        function pagination(querySet, page, rows) {

            var trimStart = (page - 1) * rows
            var trimEnd = trimStart + rows

            var trimmedData = querySet.slice(trimStart, trimEnd)

            var pages = Math.round(querySet.length / rows);

            return {
                'querySet': trimmedData,
                'pages': pages,
            }
        }

        function pageButtons(pages) {
            var wrapper = document.getElementById('pagination-wrapper')

            wrapper.innerHTML = ``
            console.log('Pages:', pages)

            var maxLeft = (state.page - Math.floor(state.window / 2))
            var maxRight = (state.page + Math.floor(state.window / 2))

            if (maxLeft < 1) {
                maxLeft = 1
                maxRight = state.window
            }

            if (maxRight > pages) {
                maxLeft = pages - (state.window - 1)

                if (maxLeft < 1) {
                    maxLeft = 1
                }
                maxRight = pages
            }



            for (var page = maxLeft; page <= maxRight; page++) {
                wrapper.innerHTML += `<button value=${page} class="page btn btn-lg btn-info justify-content-center">${page}</button>`
            }

            if (state.page != 1) {
                wrapper.innerHTML = `<button value=${1} class="page btn btn-lg btn-info justify-content-center">&#171; First</button>` + wrapper.innerHTML
            }

            if (state.page != pages) {
                wrapper.innerHTML += `<button value=${pages} class="page btn btn-lg btn-info justify-content-center">Last &#187;</button>`
            }

            $('.page').on('click', function () {
                $('#mainId').empty()

                state.page = Number($(this).val())

                blogs()
            })

        }


        function blogs() {
            var blogs = $('#mainId')

            var data = pagination(state.querySet, state.page, state.rows)
            var myList = data.querySet

            for (var i = 1 in myList) {
                var row = `<ol class="vijay"><br> <hr>
              <li>${myList[i].id}</li> 
              <li>${myList[i].title}</li>
              <li>${myList[i].author}</li>
              <li>${myList[i].description}</li>
              `
                blogs.append(row)
            }

            pageButtons(data.pages)
        }

    })


