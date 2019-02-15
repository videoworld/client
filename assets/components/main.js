new Vue({
    el:"#app",
    data: {
        videos:[],
    },
    methods: {
        searchVideo(payload) {
            // this.text = `success` + payload
        },
        uploadVideo(payload) {
            this.videos.push(payload)
        }
    }
})