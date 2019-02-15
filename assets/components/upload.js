const databaseUrl = 'http://localhost:3000'

Vue.component('upload-video', {
  data() {
    return {
      title: '',
      description: '',
      file: ''
    }
  },
  methods : {
    uploadVideo() {
      const formData = new FormData()
      formData.append('video', this.files[0])
      formData.append('title', this.title)
      formData.append('description', this.description)

      axios({
        method : 'post', 
        url : `${databaseUrl}/videos`,
        headers : {"Content-Type" : 'multipart/form-data'},
        data : formData
      })
      .then(({data}) => {
        this.$emit('upload-video', {video : data})
        this.title = ''
        this.description = ''
        this.file = []
        
      })
      .catch(err => {
        console.error(err)
      })
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
    },
    previewFiles() {
      this.files = this.$refs.myFiles.files
    },
  },
  template: `
  <div>
  <form method ="POST" @submit.prevent="uploadVideo">
    <div class="modal-body mx-3">
        <div class="md-form mb-5">
        <input type="text" id="form34" class="form-control validate" v-model="title">
        <label data-error="wrong" data-success="right" for="form34">Title</label>
        </div>
        <div class="md-form">
        <textarea type="text" id="form8" class="md-textarea form-control" rows="4" v-model="description"></textarea>
        <label data-error="wrong" data-success="right" for="form8" >Description</label>
        <input type="file" ref="myFiles" @change="previewFiles" multiple>
        </div>
    </div>
    <div class="modal-footer d-flex justify-content-center">
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <button class="btn btn-unique  red accent-4" type="submit"> Upload <i class="fas fa-paper-plane-o ml-1"></i></button>
    </div>
  </form>
  </div>
  `,
  
})