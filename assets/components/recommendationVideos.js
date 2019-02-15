Vue.component('recommendation-videos', {
    props: ['recom-vids'],
    template: `
    <div id="random-video" class="col-10 col-md-1 scroll">
    <hr>
        <div class="card offset-md-1" style="width:80%">
            <div class="view overlay">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" alt="Card image cap">
                <a>
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>
            <div class="card-body elegant-color white-text">
                <a href="#!" class="d-flex justify-content-end"><h5>Watch Video <i class="fas fa-angle-double-right"></i></h5></a>
            </div>
        </div>
        <hr>
    </div>
    `
})

/* <div class="card offset-md-1" style="width:80%">
<div class="view overlay">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" alt="Card image cap">
    <a>
        <div class="mask rgba-white-slight"></div>
    </a>
</div>

<div class="card-body elegant-color white-text">
    <a href="#!" class="d-flex justify-content-end"><h5>Watch Video <i class="fas fa-angle-double-right"></i></h5></a>
</div>
</div>
<hr>

<div class="card offset-md-1" style="width:80%">
<div class="view overlay">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" alt="Card image cap">
    <a>
        <div class="mask rgba-white-slight"></div>
    </a>
</div>

<div class="card-body elegant-color white-text">
    <a href="#!" class="d-flex justify-content-end"><h5>Watch Video <i class="fas fa-angle-double-right"></i></h5></a>
</div>
</div>
<hr> */