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
    data: {
        filtered: [],
        videos:[],
        recommendationVideos: [],
    },
    methods: {
        searchVideo(payload) {
            this.filtered = payload
        },
        uploadVideo(payload) {
            console.log('======= get ')
            text="get"
            this.videos.push(payload)

        }
    }
})