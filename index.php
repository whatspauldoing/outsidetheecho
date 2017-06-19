<html>
    <head>
        <meta charset="utf-8">
        <title>Outside the Echo - Providing balance to your social media news</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="http://localhost:8888/outsidetheecho/css/style.css" rel="stylesheet">
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
<link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Noto+Serif" rel="stylesheet">
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
                    <span class='search_term' id='brexit'>Brexit</span><span class='search_term' id='trump'>Trump</span><span class='search_term' id='grenfell'>Grenfell</span>
                    <span class='search_term' id='finsburypark'>Finsbury Park</span>
                </div>
            </div>            
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-4" style="text-align:left">
                    <h3>Left</h3>
                    <div id='left-wing'>
                    </div>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-4" style="text-align:right">
                    <h3>Right</h3>
                    <div id='right-wing'>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
        <script>
            jQuery(document).ready(function() {
                searchTerm = encodeURIComponent("brexit");
                leftwing = encodeURIComponent("from:DailyMirror OR from:guardian OR from:independent");
                jQuery.get( "functions/twitter-proxy.php?url=search/tweets.json?"+encodeURIComponent("q=" + searchTerm + "%20" + leftwing + "&result_type=recent&language=en&include_entities=true"), function( data ) {
                    jQuery.each(data,function(key,val) {
                        jQuery.each(val,function(key2,val2) {
                            if(val2['text']) {
                                formatted_text = "";
                                unformatted_text = val2['text'];
                                text_array = unformatted_text.split(" ");
                                for(text in text_array) {
                                    if(!text_array[text].includes("t.co"))  {
                                       formatted_text += text_array[text] + " ";
                                    }
                                }
                                
                                formatted_urls = "";
                                if(val2['entities']) {
                                    console.log(val2['entities']);
                                    jQuery.each(val2['entities']['urls'], function() {
                                        formatted_urls += "<a href='" + this.expanded_url + "'><i>" + this.display_url + "</i></a>" + "<br/>";
                                    });
                                }
                                jQuery("#left-wing").append("<a href='http://twitter.com/" + val2['user']['id_str'] + "/status/" + val2['id_str'] + "'>" + formatted_text + "</a><br/>" + formatted_urls + "<a href='http://twitter.com/" + val2['user']['screen_name'] + "'><b>" + val2['user']['name'] + "</b></a><br/><br/>");
                            }
                        });
                    });
                });
                rightwing = encodeURIComponent("from:telegraph OR from:DailyMailUk OR from:DailyExpressUk");
                jQuery.get( "functions/twitter-proxy.php?url=search/tweets.json?"+encodeURIComponent("q=" + searchTerm + "%20" + rightwing + "&result_type=recent&language=en&include_entities=true"), function( data ) {
                    jQuery.each(data,function(key,val) {
                        jQuery.each(val,function(key2,val2) {
                            if(val2['text']) {
                                formatted_text = "";
                                unformatted_text = val2['text'];
                                text_array = unformatted_text.split(" ");
                                for(text in text_array) {
                                    if(!text_array[text].includes("t.co"))  {
                                       formatted_text += text_array[text] + " ";
                                    }
                                }
                                
                                formatted_urls = "";
                                if(val2['entities']) {
                                    console.log(val2['entities']);
                                    jQuery.each(val2['entities']['urls'], function() {
                                        formatted_urls += "<a href='" + this.expanded_url + "'><i>" + this.display_url + "</i></a>" + "<br/>";
                                    });
                                }
                                jQuery("#right-wing").append("<a href='http://twitter.com/" + val2['user']['id_str'] + "/status/" + val2['id_str'] + "'>" + formatted_text + "</a><br/>" + formatted_urls + "<a href='http://twitter.com/" + val2['user']['screen_name'] + "'><b>" + val2['user']['name'] + "</b></a><br/><br/>");
                            }
                        });
                    });
                });       
                jQuery(".search_term").click(function() {
                    console.log('clicked');
                    newNews(this.id);
                });
            });
            function newNews(searchTerm) {
                jQuery("#left-wing").html("");
                jQuery("#right-wing").html("");
                leftwing = encodeURIComponent("from:DailyMirror OR from:guardian OR from:independent");
                jQuery.get( "functions/twitter-proxy.php?url=search/tweets.json?"+encodeURIComponent("q=" + searchTerm + "%20" + leftwing + "&result_type=recent&language=en&include_entities=true"), function( data ) {
                    jQuery.each(data,function(key,val) {
                        jQuery.each(val,function(key2,val2) {
                            if(val2['text']) {
                                formatted_text = "";
                                unformatted_text = val2['text'];
                                text_array = unformatted_text.split(" ");
                                for(text in text_array) {
                                    if(!text_array[text].includes("t.co"))  {
                                       formatted_text += text_array[text] + " ";
                                    }
                                }
                                
                                formatted_urls = "";
                                if(val2['entities']) {
                                    console.log(val2['entities']);
                                    jQuery.each(val2['entities']['urls'], function() {
                                        formatted_urls += "<a href='" + this.expanded_url + "'><i>" + this.display_url + "</i></a>" + "<br/>";
                                    });
                                }
                                jQuery("#left-wing").append("<a href='http://twitter.com/" + val2['user']['id_str'] + "/status/" + val2['id_str'] + "'>" + formatted_text + "</a><br/>" + formatted_urls + "<a href='http://twitter.com/" + val2['user']['screen_name'] + "'><b>" + val2['user']['name'] + "</b></a><br/><br/>");
                            }
                        });
                    });
                });
                rightwing = encodeURIComponent("from:telegraph OR from:DailyMailUk OR from:DailyExpressUk");
                jQuery.get( "functions/twitter-proxy.php?url=search/tweets.json?"+encodeURIComponent("q=" + searchTerm + "%20" + rightwing + "&result_type=recent&language=en&include_entities=true"), function( data ) {
                    jQuery.each(data,function(key,val) {
                        jQuery.each(val,function(key2,val2) {
                            if(val2['text']) {
                                formatted_text = "";
                                unformatted_text = val2['text'];
                                text_array = unformatted_text.split(" ");
                                for(text in text_array) {
                                    if(!text_array[text].includes("t.co"))  {
                                       formatted_text += text_array[text] + " ";
                                    }
                                }
                                
                                formatted_urls = "";
                                if(val2['entities']) {
                                    console.log(val2['entities']);
                                    jQuery.each(val2['entities']['urls'], function() {
                                        formatted_urls += "<a href='" + this.expanded_url + "'><i>" + this.display_url + "</i></a>" + "<br/>";
                                    });
                                }
                                jQuery("#right-wing").append("<a href='http://twitter.com/" + val2['user']['id_str'] + "/status/" + val2['id_str'] + "'>" + formatted_text + "</a><br/>" + formatted_urls + "<a href='http://twitter.com/" + val2['user']['screen_name'] + "'><b>" + val2['user']['name'] + "</b></a><br/><br/>");
                            }
                        });
                    });
                });                
            }
        </script>
    </body>
</html>