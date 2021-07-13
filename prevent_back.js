function preventBack() {
    var cntrlIsPressed = false;
    
    $(document).keydown(function(event){
    if(event.which=="17")
        cntrlIsPressed = true;
    });

    $(document).keyup(function(){
        cntrlIsPressed = false;
    });


    var regex = /#.*/;
    $('a').click(function(e) {
        var href = $(this).attr('href');
        if (!regex.test(href) && !cntrlIsPressed) {
            e.preventDefault();
            window.location.replace(href);
        }
    });
}