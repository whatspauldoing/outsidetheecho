<html>
    <head>
        <meta charset="utf-8">
        <title>Outside the Echo - Providing balance to your social media news</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="http://localhost:8888/outsidetheecho/css/style.css" rel="stylesheet">
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <!-- <script type='text/javascript' src='http://localhost:8888/outsidetheecho/bootstrap/js/bootstrap.js?ver=4.8'></script> -->
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>     
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 center">
                    <h1>Outside The Echo</h1>
                    <h2>Providing balance to the social media echo chamber</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 center">
                    <a href='search:brexit'>Brexit</a> | <a href='search:brexit'>Trump</a>
                </div>
            </div>            
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-4" style="text-align:left">
                    <h3>Left Wing</h3>
                    <div id='left-wing'>
                    </div>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-4" style="text-align:right">
                    <h3>Right Wing</h3>
                    <p>Right wing twitter feed</p>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
        <script>
            jQuery(document).ready(function() {
                jQuery.get( "https://api.twitter.com/1.1/search/tweets.json?q=brexit", function( data ) {
                    jQuery( "#left-wing" ).html( data );
                    alert( "Load was performed." );
                });
            });
        </script>
    </body>
</html>