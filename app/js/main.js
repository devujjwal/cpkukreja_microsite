objMicrosite = {
    init: function() {        
        objMicrosite.bindEvents();
        objForm.init();
    },
    navToggle: function () {
        var navElem = $('.nav__item');
        navElem.toggleClass('navbar__toggleshow');
        if (navElem.hasClass('navbar__toggleshow')) {
            $('#toggle-bar').removeClass('eticon-navmenu').addClass('eticon-navcancel');
        } else {
            $('#toggle-bar').removeClass('eticon-navcancel').addClass('eticon-navmenu');
        }
    },
    bindEvents : function() {
        $('.navbar__link-toggle').click(function(){
            objMicrosite.navToggle(); 
        });
        $('.scrollToBottom').click(function(){
            $('html, body').animate({
                scrollTop: $("#footer").offset().top - 600
            }, 2000);
        });
    },
    certificateCarousel: function() {
        $('.certificate').on('init', function(etcarousel) {$('.certificate').fadeIn(3000);}).etcarousel(objEtcarouselOpts.certCarouselOpts);
    },
    sliderCarousel: function() {
        $('#sliders').on('init', function(etcarousel) {$('#sliders').fadeIn(3000);}).etcarousel(objEtcarouselOpts.sliderCarouselOpts);
    },
    mediaCarousel: function() {
        $('#media-cards').on('init', function(etcarousel) {$('#media-cards').fadeIn(3000);}).etcarousel(objEtcarouselOpts.mediaCarouselOpts);
    },
    testimonialCarousel: function() {
        $('#testimonials').on('init', function(etcarousel) {$('#testimonials').fadeIn(3000);}).etcarousel(objEtcarouselOpts.testimonialCarouselOpts);        
    },
    clientCarousel: function() {
        $('#clients').on('init', function(etcarousel) {$('#clients').fadeIn(3000);}).etcarousel(objEtcarouselOpts.clientsCarouselOpts);        
    },
    peopleCarousel: function() {        
        $('#key-people').on('init', function(etcarousel) {$('#key-people').fadeIn(3000);}).etcarousel(objEtcarouselOpts.peopleCarouselOpts); 
    }
}

objEtcarouselOpts = {
    certCarouselOpts: {
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '#cert-left-btn',
        prevArrow: '#cert-right-btn',
        responsive: [           
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }    
        ]
    },
    sliderCarouselOpts: {
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        nextArrow: '#slider-left-btn',
        prevArrow: '#slider-right-btn',
    },
    mediaCarouselOpts : {
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '#media-next',
        prevArrow: '#media-prev',
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }    
        ]
    },
    testimonialCarouselOpts : {
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }    
        ]
    },
    clientsCarouselOpts : {
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '#client-next',
        prevArrow: '#client-prev',
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }    
        ]
    },
    peopleCarouselOpts : {
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '#people-next',
        prevArrow: '#people-prev',
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }    
        ]
    }
}

objForm = {
    init: function(){
        objForm.bindEvents();
    },
    pattern: {
        name: /^[a-zA-Z ]+$/,
        compname : /^[a-zA-Z0-9]/i,
        contactname: /^[a-zA-Z]{1}[a-zA-Z .-]{0,} [a-zA-Z .-]+$/,
        entityname: /^([A-Za-z0-9]{1}[A-Za-z0-9-.&]{1,}[\s]{0,1})+$/, 
        email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        mobile: /^(\+91-|\+91|0)?(6|7|8|9)\d{9}/,
        ext:/^[0-9]{1,5}$/,
	    std:/^[0-9]{2,5}$/,
	    landline: /^[1-9][0-9]{5,7}$/,
        pin: /^[1-9]{1}[0-9]{5}$/,
        textarea: '',
        pan: /(^([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})$)/,
        tan: /(^([a-zA-Z]{4})([0-9]{5})([a-zA-Z]{1})$)/,
        arn: /(^([0-9]{1,6})$)/,
        sertax: /(^([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{3})([0-9]{3})$)/,
        regno: /(^([l|L|u|U]{1})([0-9]{5})([a-zA-Z]{2})([0-9]{4})([a-zA-Z]{3})([0-9]{6})$)/,
        nonempty: /([^\s])/,
        gst : /(^([0-9]{2})([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})([a-zA-Z0-9]{1})([z|Z]{1})([a-zA-Z0-9]{1})$)/,
        hsn :/^[0-9.]*$/,
        sac :/^[0-9]*$/,
        city :/^[a-zA-Z. ]*$/,
        otp: /^[0-9]{4}$/
    },
    bindEvents : function() {
        $('.form-action button').click(function(e){
            $(".form-control" ).each(function( index ) {     
                objForm.validateBeforeSubmit($(this));                
            });
            var isValid = $(".form-control").hasClass('has-err');
            if(!isValid) {
                console.log('Posted');
            }
        });       
        $('.form-control').keyup(function(e){
            var $this = $(this);
            objForm.validateBeforeSubmit($this);            
        });
    },
    validateBeforeSubmit: function($this){
        var that = $this;
        var reqResult = true;               
        if ($this.data('required')) {
            reqResult = $(that).val() == '' ? true : false;                
            if(reqResult) {
                $this.addClass('has-err');
                $this.next().text('Required');                    
            } else {
                $this.removeClass('has-err');
                $this.next().text('');
            } 
        } 
        if ($this.data('pattern') && !reqResult) {
            var patternResult = objForm.pattern[$this.attr('data-pattern')].test($this.val());
            if (!patternResult) {
                $this.addClass('has-err');
                $this.next().text('Invalid ' +  $this.data('title'));
            } else {
                $this.removeClass('has-err');
                $this.next().text('');
            }
        }
    }
}

objMicrosite.init();