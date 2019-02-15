Vue.component('search-video', {
    data() {
        return {
            search:"",
        }
    },
    props: ['videos'],
    computed: {
        searchVideo: function() {
            let self = this
            let video =  this.videos.filter(function(vid){
                if (vid.title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0) {
                    return vid
                }
            })
            this.$emit("search-video", video)
        }
    },
    template: `
    <form :keyup="searchVideo" class="form-inline my-1">
        <div class="md-form form-sm my-0">
        <input v-model="search" class="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search" aria-label="Search">
        </div>
        <i class="fas fa-search" style="cursor: pointer"></i>
    </form>
    `
})