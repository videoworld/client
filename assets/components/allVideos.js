Vue.component('all-videos', {
    props: ['homepagevideos'],
    methods: {
        getTwitterText(title, url) {
            let convert = url.split(' ').join('%20')
            return `${title} ${convert}`
        },
        whatsappUrl(url) {
            return `https://api.whatsapp.com/send?text=${url}`
        }
    },
    template: `
    <!--VIDEO-->
    <div id="video-detail" class="col-12 col-sm-6 col-md-8 scroll">
    <hr>
        <div class="card z-depth-2 offset-md-1" style="width: 85%;" v-for="vid in homepagevideos">
            <div class="view overlay">
                <div class="card-body elegant-color white-text">
                    <a class="mr-4"><i class="fas fa-share-alt white-text"></i></a>
                    <h4 class="card-title">{{ vid.title }}</h4>
                    <hr class="hr-light">
                    <p class="card-text white-text mb-4">{{ vid.description }}</p>
                    <a class="twitter-share-button"
                        href="https://twitter.com/intent/tweet"
                        data-size="large"
                        :data-text="getTwitterText(vid.title, vid.videoUrl)"
                        data-url="#VideoWorld"
                        data-hashtags="VideoWorld"
                        data-via="twitterdev"
                        data-related="twitterapi,twitter">
                    Tweet
                    </a>
                    <div class="line-it-button" data-lang="en" data-type="share-c" data-ver="2" :data-url="vid.videoUrl" style="display: none;"></div>
                    <div><a :href="whatsappUrl(vid.videoUrl)" target="_blank"><img src="https://img.icons8.com/color/48/000000/whatsapp.png" height="30px"></a></div
                    <g:plus action="share" ...></g:plus>
                </div>                     
                <div class="embed-responsive embed-responsive-16by9">
                    <video width="320" height="240" class="embed-responsive-item" controls>
                        <source :src="vid.videoUrl" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>   
    <hr>
    </div> 
    `
})
/* <iframe class="embed-responsive-item" :src="vid.videoUrl" allowfullscreen></iframe> */
/* <div class="line-it-button" data-lang="en" data-type="share-d" data-ver="2" data-url="http://upvid.mahdihrs.world" style="display: none;"></div> */
/* <iframe src="https://www.facebook.com/plugins/share_button.php?href=https://storage.googleapis.com/miniwpstorage/1550204158199PMMB(PapaMarahMukaBopeng).mp4/&layout=button_count&size=large&mobile_iframe=true&width=83&height=28&appId" width="83" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe> */

{/* <a href="whatsapp://send" data-text="Take a look at this awesome website:" data-href="" class="wa_btn wa_btn_s" style="display:none">Share</a> */}