new Vue({
    el:"#app",
    created() {
        axios.get(`http://localhost:3000/videos`)
        .then(videos => {
            console.log(videos.data)
            this.videos = videos.data
        })
        .catch(err => {
            console.log(err)
        })
    },
    components: {
        
    },
    data: {
        filtered: [],
        videos:[],
        recommendationVideos: []
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