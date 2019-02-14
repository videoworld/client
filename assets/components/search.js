Vue.component('search-video', {
    data() {
        return {
            search:""
        }
    },
    props: ['videos'],
    methods: {
        searchVideo: function() {
            
            $emit('search-video', this.search)
        }
    },
    template: `
    <form class="form-inline my-1">
        <div class="md-form form-sm my-0">
        <input v-model="search" class="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search" aria-label="Search">
        </div>
        <i class="fas fa-search" style="cursor: pointer"></i>
    </form>
    `
})