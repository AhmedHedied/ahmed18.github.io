/* global $, document, window, WOW */


/* Show And Hide The Menu */

$(document).ready(function(){
    
    "use strict";
    
    $(window).scroll(function(){
        
        if($(window).scrollTop() < 80) {
            
            $('.navbar').css({
                
                'margin-top': '-100px',
                'opacity': '0'
                
            });
            
            $('.navbar-default').css({
               
                'background-color': 'rgba(59, 59, 59, 0)'
                
            });
            
        }
        
        else {
            
            $('.navbar').css({
                
                'margin-top': '0px',
                'opacity': '1',
                'padding-top': '5px',
                'padding-bottom': '5px'
                
            });   
            
            $('.navbar-default').css({
               
                'background-color': 'rgba(59, 59, 59, 0.7)',
                'border-color': '#444'
                
            });
            
        }
        
    });
    
    
    /* Show And Hide Video Overlay */
    
    
    $('.our-video').mouseenter(function(){
       
        $('.our-video .video-overlay').fadeOut(500);                                              
    });
    
    $('.our-video').mouseleave(function(){
       
        $('.our-video .video-overlay').fadeIn(500);
        
    });

    
    
    
    
    /* Simple Client Slider */
    
    
    
    function checkClient() {
        
        var leftArrow = $('.fa-chevron-left'),
            
            rightArrow = $('.fa-chevron-right');
        
        
        if ( $('.client-item:first').hasClass('client-active') ) {
            
            leftArrow.fadeOut();
            
        }
        else {
            
            leftArrow.fadeIn();
            
        }
        
        
        if ( $('.client-item:last').hasClass('client-active') ) {
            
            rightArrow.fadeOut();
            
        }
        
        else {
            
            rightArrow.fadeIn();
            
        }
        
        
    }
    
    checkClient();
    
    
    $('.testimonials-box i').click(function(){
        
       
        if ( $(this).hasClass('fa-chevron-right') ) {
            
            $('.testimonials-box .client-active').fadeOut(1000, function(){
                
               $(this).removeClass('client-active').next('.client-item').addClass('client-active').fadeIn();
                
                checkClient();
                
            });
            
        }
        
        else {
            
            $('.testimonials-box .client-active').fadeOut(1000, function(){
                
               $(this).removeClass('client-active').prev('.client-item').addClass('client-active').fadeIn();
                
                checkClient();
                
            }); 
            
        }
        
        
    });
    
    
    
    
    /* trigger Nice Scroll */
    
    
       

    $("html").niceScroll({
        
        cursorcolor     : "#006cff",
        cursorborder    : "none"
        
    });
    
    
    
    
    /* Activate WoW.js */

  
    new WOW().init();
    
    
    
    /* Scroll to Top */
    
    
    var scrollButton = $(".scroll-top");
    
    
    $(window).scroll(function(){
       
        if ( $(this).scrollTop() >= 3600 ){
            
            scrollButton.show();
            
        }
        
        else {
            
            scrollButton.hide();
            
        }
        
    });
    
    
        scrollButton.click(function(){
           
            $("html,body").animate({scrollTop: 0 }, 1000 );
            
        });
    
    
});




















