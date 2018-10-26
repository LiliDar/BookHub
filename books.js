var app = new Vue({

    el: '#app',

    data: {

        booksArray: [],
    },

    created: function () {

        this.getBooksData()
    },

    methods: {

        getBooksData() {
            fetch('https://api.myjson.com/bins/1h3vb3', {
                    "method": "GET",
                })
                .then(r => r.json())
                .then(json => {
                    console.log(json);
                    data = json;

                    app.booksArray = json.books;
                   
                })
        }
    },
})
