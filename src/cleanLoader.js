//Requires Jquery
// Fix for IE
try {
    console
} catch (e) {
    console = {};
    console.log = function () {};
    console.error = function () {};
}

var cleanLoader = new (function(){
    function loader(){
        $.ajax({
            url:'/src/cleanLoader.html', //Set your path to cleanLoader.html here.
            success:function(data){
                parseAnaltics(data);
            },
            error:function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });
    }
    function parseAnaltics(data){
        var $html=$(data);
        var $prependHead=$html.filter('#prependHead').children();
        var $appendHead=$html.filter('#appendHead').children();

        var $prependBody=$html.filter('#prependBody').children();
        var $appendBody=$html.filter('#appendBody').children();

       $('head').prepend($prependHead);
       $('head').append($appendHead);

      $('body').prepend($prependBody);
      $('body').append($appendBody);

    }
    this.start = function(){
        loader();
    }
});

$(function(){
    cleanLoader.start();
});


