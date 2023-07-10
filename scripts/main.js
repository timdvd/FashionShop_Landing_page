$(document).ready(function () {
    showMoreProds();
    showMoreFeatured();

    $('.hamburger').on('click', function (){
        $('.navigation-menu-adapt').slideToggle();
        $(this).toggleClass('is-active');
    })
});

function showMoreProds(){
    $('.products .new').hide();
    $('.products .new').slice(0,8).show();
    $('.button-show-more').on('click', function(){
        $('.products .new').slice(8,13).slideDown();
        $('.button-show-more').hide();
    });
}

function showMoreFeatured(){
    $('.featured .feat').hide();
    $('.featured .feat').slice(0,4).show();
    $('.button-show-more-featured').on('click', function(){
        $('.featured .feat').slice(4,9).slideDown();
        $('.button-show-more-featured').hide();
    });
}
document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu( "#my-menu", {
            // options
        },{
            offCanvas: {
                page: {
                    selector: "#my-page"
                }
            }
        });
    }
);
