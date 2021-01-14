$(document).ready(function () {
    $('.contact-college').click(function (e) { 
        e.preventDefault();
        $(this).siblings().find('ul').slideUp(1000);
        $(this).find('ul').slideToggle(1000); 
    });
    $('.contact-aboutme').click(function (e) { 
        e.preventDefault();
        $(this).siblings().find('ul').slideUp(1000);
        $(this).find('ul').slideToggle(1000);
        
    });
    

    
});