new Vue({
    el:"#app",
    created() {
        axios.get(`http://localhost:3000/videos`)
        .then(videos => {
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
        },
        onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

            var id_token = googleUser.getAuthResponse().id_token;

            axios.post('http://localhost:3000/api/user/authentication/google', {id_token})
                .then(({data}) => {
                    localStorage.setItem('token', `${data.token}`)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})