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
        $('#product_img img').click(function(){
            $('img#big_img').attr('src', $(this).attr('data-original'));
        });
    },
    certificateCarousel: function() {
        $('#certificate').on('init', function(etcarousel) {$('#certificate').fadeIn(3000);}).etcarousel(objEtcarouselOpts.certCarouselOpts);
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
    leadersCarousel: function() {
        $('#leaders').on('init', function(etcarousel) {$('#leaders').fadeIn(3000);}).etcarousel(objEtcarouselOpts.leadersCarouselOpts);        
    },
    clientCarousel: function() {
        $('#clients').on('init', function(etcarousel) {$('#clients').fadeIn(3000);}).etcarousel(objEtcarouselOpts.clientsCarouselOpts);        
    },
    peopleCarousel: function() {        
        $('#key-people').on('init', function(etcarousel) {$('#key-people').fadeIn(3000);}).etcarousel(objEtcarouselOpts.peopleCarouselOpts); 
    },
    productCarousel: function() {        
        $('#product_img').on('init', function(etcarousel) {$('#product_img').fadeIn(3000);}).etcarousel(objEtcarouselOpts.productCarouselOpts); 
    }
}

objEtcarouselOpts = {
    productCarouselOpts : {
        lazyLoad: 'ondemand',
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 7,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [           
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    nextArrow: '#cert-left-btn',
                    prevArrow: '#cert-right-btn',
                },
            breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }    
        ]
    },
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    nextArrow: false,
                    prevArrow: false
                },
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    nextArrow: false,
                    prevArrow: false
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
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [           
            {
            breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
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
    leadersCarouselOpts : {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [           
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
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
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
    specialKeys : [],        
    init: function(){
        objForm.bindEvents();
        objForm.specialKeys.push(8) // Backspace
        objForm.specialKeys.push(118); // Paste
        var isMobile = false;        
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
            isMobile = true;
        }
        var userDevice = isMobile ? 'MOBILE' : 'WEB';
        $('#enquirySource').val(userDevice);

        var userCity = localStorage.getItem('userCity');
        
        if (!!userCity) {
            $('#userCityInput').val(userCity);    
        } else {
            $.get("https://ipinfo.io", function(response) {
                localStorage.setItem('userCity', response.city);
                userCity = localStorage.getItem('userCity');
                $('#userCityInput').val(userCity);
            }, "jsonp");
        }  

    },
    isLive: (window.location.href.indexOf('etdev') == -1 ? 1 : 0),
    getFormData: function($form){
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};
        $.map(unindexed_array, function(n, i){
            indexed_array[n['name']] = n['value'];
        });
        return indexed_array;
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
                objForm.postFormData();
            }
        });       
        $('.form-control').keyup(function(e){
            var $this = $(this);
            objForm.validateBeforeSubmit($this);            
        });
        $('.close_post_results_msg').click(function(e){
            $('#post_results .html_msg').html("");
            $('#post_results').hide();
            $('#enquiry-form .form-control').val('');
        });
        $("input[data-pattern = 'mobile']").bind("keypress", function (e) {
            var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 48 && keyCode <= 57) || objForm.specialKeys.indexOf(keyCode) != -1);
            return ret;
        });
    },
    postFormData: function() {
        var $form = $('#enquiry-form');
        var query = objForm.getFormData($form);
        var serviceUrl = objForm.isLive ? 'https://etsmallbiz.indiatimes.com' : 'https://etsmallbizqa.indiatimes.com';
        $.ajax({
            async : true,
            data: query,
            headers: {
                'X-TOKEN' : localStorage.sendenquirykey
            },
            type: 'POST',
            url: serviceUrl + '/smelisting/sendenquiry',
            dataType: 'json',
            crossDomain : true,
            xhrFields: {
                withCredentials: true
            },
            success: function(data, status, req){
                console.log("success " + req.status);
                objForm.fetchCsrfToken(req,'sendenquirykey');
                if(req.status == 204) {
                    objForm.postFormData();                    
                } else if (req.status == 200) {
                    $('#post_results .html_msg').html("<h3>Thank you for your interest.</h3><p>One of our team member will get back to you as soon as possible.</p>");
                    $('#post_results').show();
                }
            },
            error: function(req, data){
                if(req.status == 429){
                    $('#post_results .html_msg').html("You have exceeded your daily Enquiry sending limits, kindly try after 24hrs.");
                    $('#post_results').show();
                }
                objForm.fetchCsrfToken(req);
            }
        });
    },
    fetchCsrfToken: function(req, keyName) {
        try {
            _csrfToken = req.getResponseHeader("X-TOKEN");
            if(_csrfToken != null) {
                localStorage.setItem(keyName, _csrfToken);
            }
        } catch(e) {
            console.log("error while fetching token", e)
        }
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