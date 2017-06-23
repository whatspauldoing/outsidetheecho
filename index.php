<html>
    <head>
        <meta charset="utf-8">
        <title>Outside the Echo - Providing balance to your social media news</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/outsidetheecho/css/style.css" rel="stylesheet">
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Noto+Serif" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        <script src="/outsidetheecho/js/jquery.cookie.js"></script>
        <script src="/outsidetheecho/js/outsidetheecho.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row" id='cookies'>
                <p>We use cookies to remember what you've search for in the past, that's it though.</p>
                <a onclick="jQuery('#cookies').hide();">close</a>
            </div>
            <div class="row">
                <div class="col-md-12 center">
                    <h1>Outside The Echo</h1>
                    <h4>Providing balance to the social media echo chamber</h4>
                </div>
            </div>
            <div id='xs-screen' class="row">
                <h2>Please turn landscape, it's better for balance.</h2>
            </div>   
            <div id='searchRow' class="row">
                <div id='searchBox'>
                    <input type='text' name='freeSearch' id='freeSearch' placeholder='Define the conversation...' />
                    <!-- <input id='searchNow' type='button' value='search' /> -->
                </div>
                <div id='searchTerms' class="col-md-12 center">
                    <div class='clearfix'></div>
                </div>
            </div>            
            <div  id='tweetRow' class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-10" style="text-align:left">
                    <div id='left-wing'>
                    </div>
                    <div id='right-wing'>
                    </div>                    
                </div>
                <div class="col-xs-1"></div>
            </div>
            <div class='clearfix'></div>
            <div class='row' id='props'>
                <div class='col-md-12'>
                    <p>This is a project born of wanting to break out of the social media echo chamber.</p>
                    <p>Hope you enjoy it, if we get loads if views it will probably hit the API limit, but I'll cross that bridge when I come to it. Cheers!</p>
                    <p>Thanks to:<br/>
                        <a href='https://github.com/hatemzidi' target='_blank'>https://github.com/hatemzidi</a> for the twitter-proxy code.<br/>
                        <a href='https://github.com/carhartl/jquery-cookie' target='_blank'>https://github.com/carhartl/jquery-cookie</a> for the cookies<br/>
                        <a href='https://twitter.com/rufushound' target='_blank'>@rufushound</a> for the lefties list<br/>
                        <a href='https://www.reddit.com/user/Hedgehogkilla' target='_blank'>https://www.reddit.com/user/Hedgehogkilla</a> for the righties list.
                    </p>
                    <p>Email: <a href='mailto:whatspauldoing@gmail.com' target='_self'>Whatspauldoing</a> with comments/suggestions/right wingers/left wingers.</p>
                    
                </div>
            </div>
        </div>
        <script>
            jQuery(document).ready(function() {
                setUp();
            });
        </script>
    </body>
</html>