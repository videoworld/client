new Vue({
    el:"#app",
    data: {
        videos:[{title:"video A"}, {title: "video B"}],
        filtered: [],
        status: "not login"        
    },
    methods: {
        searchVideo(payload) {
            this.filtered = payload
        },
        uploadVideo(payload) {
            this.videos.push(payload)
        }
    }
})