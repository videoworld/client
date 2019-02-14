Vue.component('all-videos', {
    props: [''],
    template: `
    <div id="video-detail" class="col-12 col-sm-6 col-md-8 scroll" >
    <hr>
    <!--VIDEO-->
    <div class="card z-depth-2 offset-md-1" style="width: 85%;">
        <div class="view overlay">
            <div class="card-body elegant-color white-text">
                <a class="mr-4"><i class="fas fa-share-alt white-text"></i></a>
                <h4 class="card-title">Video title</h4>
                <hr class="hr-light">
                <p class="card-text white-text mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <img class="card-img-bottom " src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg" alt="Card image cap">
        </div>                            
    </div>
    <hr>
    </div>
    `
})

// <!--VIDEO-->
// <!-- <div class="card z-depth-2 offset-md-1" style="width: 85%">
//     <div class="view overlay">
//         <div class="card-body elegant-color white-text rounded-bottom">
//             <a class="activator waves-effect mr-4"><i class="fas fa-share-alt white-text"></i></a>
//             <h4 class="card-title">Video title</h4>
//             <hr class="hr-light">
//             <p class="card-text white-text mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         </div>

//         <img class="card-img-bottom" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg" alt="Card image cap">
//         <a>
//             <div class="mask rgba-white-slight"></div>
//         </a>
//     </div>                            
// </div> -->
// <!-- <hr> -->