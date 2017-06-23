function setUp() {
    if(jQuery.cookie('searchTerms')) {
        storedSearchTerms = jQuery.cookie('searchTerms');
        searchTermsSplit = storedSearchTerms.split("|");
        jQuery.each(searchTermsSplit,function(key,val) {
            if(val != 'undefined') {
                jQuery("#searchTerms").prepend("<div class='search_term' id='" + encodeURIComponent(val) + "'>" + val + "</div>");
                jQuery(".search_term").click(function() {
                    newNews(this.id);
                });   
            }
        });
    } else {
        jQuery('#cookies').show();
    }
    jQuery("#searchNow").click(function() {
        newNews(jQuery("#freeSearch").val());
        addTag(jQuery("#freeSearch").val());
    });
    jQuery("#freeSearch").on('keyup', function (e) {
        if (e.keyCode == 13) {
            newNews(jQuery("#freeSearch").val());
            addTag(jQuery("#freeSearch").val());
        }
    });                
    newNews("uk");
}



function newNews(searchTerm) {
    searchTerm = encodeURIComponent(searchTerm);
    jQuery("#left-wing").html("");
    jQuery("#right-wing").html("");
    //from:DailyMirror OR from:guardian OR from:independent OR 
    leftwing = encodeURIComponent("from:owenjones OR from:abiwilks OR from:marcuschown OR from:mrjamesob OR from:thestaggers OR from:thecanarysays OR from:TomLondon6 OR from:georgemonbiot OR from:paulmasonnews");
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
                        jQuery.each(val2['entities']['urls'], function() {
                            formatted_urls += "<a href='" + this.expanded_url + "'>Article <i class='fa fa-link' aria-hidden='true'></i></a>" + "<br/>";
                        });
                    }
                    jQuery("#left-wing").append("<div class='tweet'><a href='http://twitter.com/" + val2['user']['id_str'] + "/status/" + val2['id_str'] + "'>" + formatted_text + "</a><br/>" + formatted_urls + "<a href='http://twitter.com/" + val2['user']['screen_name'] + "'><b>" + val2['user']['name'] + "</b></a></div>");
                }
            });
        });
    });
    //from:telegraph OR from:DailyMailUk OR from:DailyExpressUk OR 
                    rightwing = encodeURIComponent("from:toadmeister OR from:afneil OR from:peston OR from:isabelhardman OR from:timothy_stanley OR from:clarkemicah OR from:OborneTweets OR from:50ShadesOfTory OR from:DPJHodges");
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
                        jQuery.each(val2['entities']['urls'], function() {
                            formatted_urls += "<a href='" + this.expanded_url + "'>Article <i class='fa fa-link' aria-hidden='true'></i></a>" + "<br/>";
                        });
                    }
                    jQuery("#right-wing").append("<div class='tweet'><a href='http://twitter.com/" + val2['user']['id_str'] + "/status/" + val2['id_str'] + "'>" + formatted_text + "</a><br/>" + formatted_urls + "<a href='http://twitter.com/" + val2['user']['screen_name'] + "'><b>" + val2['user']['name'] + "</b></a></div>");
                }
            });
        });
    });                
}
function addTag(full_search_term) {
    jQuery("#searchTerms").prepend("<div class='search_term' id='" + encodeURIComponent(full_search_term) + "'>" + full_search_term + "</div>");
    jQuery(".search_term").click(function() {
        newNews(this.id);
    });   
    jQuery("#freeSearch").val("");
    searchTerms = jQuery.cookie("searchTerms") + "|" + full_search_term;
    jQuery.cookie("searchTerms",searchTerms,{expires:7});
}