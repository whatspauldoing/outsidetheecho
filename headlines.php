<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Outside the Echo - Providing balance to your social media news</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/style_v2.css" rel="stylesheet">
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Noto+Serif" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        <script src="js/js.cookie.js"></script>
        <script src="js/outsidetheecho_v2.js"></script>
        <?php 
            $q = $_GET['q'];
            if($q != "") {
                echo "<script>var searchForMe = '" . $q . "';</script>";
            } else {
                echo "<script>var searchForMe = '';</script>";
            }
        ?>        
    </head>
    <body>
        <div id='the-content' class="container-fluid">
            <div class="row" id='cookies'>
                <p>We use cookies to remember what you've search for in the past, that's it though.</p>
                <a onclick="jQuery('#cookies').hide();">close</a>
            </div>
            <div class="row">
                <div class="col-md-12 center">
                    <h1>Outside The Echo<a href='http://twitter.com' target='_blank'><i class="fa fa-twitter" aria-hidden="true" style="margin-left:20px; color:#333;"></i></a></h1>
                    <h4>Providing political balance to the social media echo chamber</h4>
                    <div  style='margin-top:10px;'>
                        <a class='menu' href='/headlines.php'  style='color:#333;'>Headlines</a> | <a class='menu' href='/'  style='color:#333;'>Press Opinion</a> | <a class='menu' href='/people.php'  style='color:#333;'>People's Opinion</a> | <a class='menu' href='/commentary/'  style='color:#333;'>Outside the Echo Commentary</a>  
                    </div>
                </div>                
            </div>
            <div id='searchRow' class="row">
                <p class='center'>We have 5 news outlets from left to right wing (US and UK), find out what they're saying is important right now.</p>
            </div>    
            <div class='clearfix'></div>
            <div id='headline-content'>
                <div id='headlineRow'>
                    <span class='news-col' id='huffPost'></span>
                    <span class='news-col' id='independent'></span>
                    <span class='news-col' id='googleNews'></span>
                    <span class='news-col' id='telegraph'></span>
                    <span class='news-col' id='breitBart'></span>
                </div>
            </div>
            <div class='clearfix'></div>
            <div class="row" id='swipe_directions' style='margin-bottom:20px;'>
                <div class='col-md-6' style='text-align:left; float:left; width:50%;'>
                    <i class="fa fa-arrow-left" aria-hidden="true" style='font-size:150%; color:#E91A1A;'></i>
                </div>
                <div class='col-md-6' style='text-align:right; float:left; width:50%;'>
                    <i class="fa fa-arrow-right" aria-hidden="true" style='font-size:150%; color:#0C42C0;'></i>
                </div>
            </div>
            <div id='articleBox' class='row'>
                <h1 style='color:#fff; text-align:center; background:#000; padding:20px; margin:0px;'>Article Preview...</h1>
                <a href='' target="_blank" id='articleClick' style='color:#fff; text-align:center; background:#000; padding:20px; cursor:pointer; margin:0px; display:block; width:100%;'>Please visit the original page and support the publication. <i class='fa fa-external-link-square' aria-hidden='true'></i></a>
                <div id='articleFrame' name='article' width='100%' height='800px' style='border:none'></div>
            </div>
            <div class='row' id='props'>
                <div class='col-md-12'>
                    <p>This is a project born of wanting to break out of the social media echo chamber.</p>
                    <p>Hope you enjoy it, if we get loads of views it will probably hit the API limit and die, but I'll cross that bridge when I come to it. Cheers!</p>
                    <p>Thanks to:<br/>
                        <a href='https://github.com/jonhurlock/' target='_blank'>https://github.com/jonhurlock/</a> for the twitter-proxy code.<br/>
                        <a href='https://github.com/carhartl/jquery-cookie' target='_blank'>https://github.com/carhartl/jquery-cookie</a> for the cookies.<br/>
                        <a href='http://simplehtmldom.sourceforge.net/' target='_blank'>http://simplehtmldom.sourceforge.net/</a> for the article grabbing.<br/>
                        <a href='http://newsapi.org' target='_blank'>http://newsapi.org</a> for the headline feeds.<br/>
                    </p>
                    <p>Email: <a href='mailto:whatspauldoing@gmail.com' target='_self'>Whatspauldoing</a> with comments/suggestions/right wingers/left wingers.</p>
                    
                </div>
            </div>
        </div>
        <script>
            jQuery(document).ready(function() {
                setUpHeadlines();
            });
        </script>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-101657341-1', 'auto');
          ga('send', 'pageview');

        </script>        
    </body>
</html>