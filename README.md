# cleanLoader.js
Allows you to keep thrid party scripts/tags in a separate html file so that you can keep your business logic and app clean. You can add different scripts, iframes or html elements to top/bottom of head and body in html.

## Usage
**The library depends on jQuery. Please include jQuery before adding this file.** 
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="PATH_TO_CLEAN_LOADER_JS_FOLDER/cleanLoader.js"></script
```
**Simply open the cleanLoader.html file and add your scripts based on the following pattern.**
To add scripts at the start of head tag, just insert your code in the following block in cleanLoader.html. For e.g you can add optimizely snippet in the following way. Where xxxxxxxxx is your project code.
```html
<div id="prependHead">
    <!--Optimizely-->
    <script src="//cdn.optimizely.com/js/xxxxxxxxx.js"></script>
    <!--Optimizely-->
</div>
```

To add scripts at the end of head tag, just insert your code in the following block. For e.g you can add mixpanel snippet in the following way. Where your token is your mixpanel project key.
```html
<div id="appendHead">
    <!--Mixpanel-->
    <script type="text/javascript">
        (function(c,a){window.mixpanel=a;var b,d,h,e;b=c.createElement("script");
            b.type="text/javascript";b.async=!0;b.src=("https:"===c.location.protocol?"https:":"http:")+
                    '//cdn.mxpnl.com/libs/mixpanel-2.2.min.js';d=c.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(b,d);a._i=[];a.init=function(b,c,f){function d(a,b){
                var c=b.split(".");2==c.length&&(a=a[c[0]],b=c[1]);a[b]=function(){a.push([b].concat(
                        Array.prototype.slice.call(arguments,0)))}}var g=a;"undefined"!==typeof f?g=a[f]=[]:
                    f="mixpanel";g.people=g.people||[];h=['disable','track','track_pageview','track_links',
                'track_forms','register','register_once','unregister','identify','alias','name_tag','set_config',
                'people.set','people.set_once','people.increment','people.track_charge','people.append'];
                for(e=0;e<h.length;e++)d(g,h[e]);a._i.push([b,c,f])};a.__SV=1.2;})(document,window.mixpanel||[]);
        mixpanel.init("YOUR TOKEN");
        mixpanel.track("Page View", {
            "Page Name": document.title,
                "URL": window.location.pathname
        });c
    </script>
    <!--Mixpanel-->
</div>
```

To add scripts at the start of head tag, just insert your code in the following block. For e.g you can add Google anaytics snippet in the following way. Where UA-XXXXX-Y is your Google Analytics tracker code.
```html
<div id="prependBody">
    <!-- Google Analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
  ga('create', 'UA-XXXXX-Y', 'auto');
  ga('send', 'pageview');
</script>
<!-- End Google Analytics -->
</div>
```

To add scripts at the end of body tag, just insert your code in the following block. In the example below I am adding AddRoll and Crazy Egg tags.
```html
<div id="appendBody">
    <!--AddRoll-->
    <script type="text/javascript">
        adroll_adv_id = "ADDROLL_ADVERTISER_ID";
        adroll_pix_id = "ADDROLL_PIXEL_ID";
        (function () {
            var oldonload = window.onload;
            window.onload = function(){
                __adroll_loaded=true;
                var scr = document.createElement("script");
                var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
                scr.setAttribute('async', 'true');
                scr.type = "text/javascript";
                scr.src = host + "/j/roundtrip.js";
                ((document.getElementsByTagName('head') || [null])[0] ||
                        document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
                if(oldonload){oldonload()}};
        }());
    </script>
    <!--AddRoll-->
    <!--Crazy Egg-->
    <script type="text/javascript">
        setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0014/4786.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
    </script>
    <!--CrazyEgg-->
</div>
```
##Browser Support
cleanLoader.js is built over jQuery. It's supported in latest versions of all popular browsers.

| Browser           | Supported Versions
| ------------------|:-----------------:|
| Google Chrome     | 27.0+             |
| Firefox           | 14.0+             |
| Safari            | 6.1+              |
| Internet Explorer | 8.0+             |
| Opera             | 14.0+             |

##Contributing
####Report a bug / Request a feature
If you want to report a bug or request a feature, use the [Issues](https://github.com/fouadbhatti/clean-loader/issues) section. Before creating a new issue, search the existing ones to make sure that you're not creating a duplicate. When reporting a bug, be sure to include OS/browser version and steps/code to reproduce the bug, a [JSFiddle](http://jsfiddle.net/) would be great.

####Development
If you want ot contribute to arrive, here is the workflow you should use:

1. Fork the repository.
2. Clone the forked repository locally.
3. From the `dev` branch, create and checkout a new feature branch to work upon. (If you want to work on some minor bug fix, you can skip this step and continue to work in `dev` branch)
4. Make your changes in that branch (the actual source file is `/src/cleanLoader.js`).
5. Push the changes to your github repository.
6. Submit a pull request from your repo back to the original repository.
7. Once it is accepted, remember to pull those changes back into your develop branch!

**Keywords**

javascript, js, jquery, analytics, loader, dynamic, insertions, event, scripts injection

