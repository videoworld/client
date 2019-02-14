new Vue({
    el:"#app",
    data: {
        videos:[],
    },
    methods: {
        searchVideo(payload) {
            this.text = `success` + payload
        }
    }
})