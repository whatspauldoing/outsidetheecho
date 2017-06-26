var cookieObjLeft = "";
var cookieObjRight = "";
var arrival = new Date().getTime();
var refresh = true;
var last_topic = "";
function setUp(searchForMe) {
    if(Cookies.get('searchTerms')) {
        storedSearchTerms = Cookies.get('searchTerms');
        searchTermsSplit = storedSearchTerms.split("|");
        jQuery.each(searchTermsSplit,function(key,val) {
            if(val != 'undefined') {
                jQuery("#searchTerms").prepend("<div class='search_term' id='" + encodeURIComponent(val) + "'>" + val + "</div>");
                jQuery(".search_term").unbind().click(function() {
                    newNews(this.id);
                });   
                last_topic = val;
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
    if(searchForMe != "") {
        last_topic = searchForMe;
        addTag(last_topic);
    }            
    newNews(last_topic);
}
function newNews(searchTerm) {
    var now = new Date().getTime();
    if((now - arrival) > 300000) {
        refresh = true;
        localStorage.clear();
    } else {
        refresh = false;
    }
    rawSearchTerm = searchTerm;
    searchTerm = encodeURIComponent(searchTerm);
    jQuery("#left-wing").html("");
    jQuery("#right-wing").html("");
    if(localStorage.getItem("left-" + searchTerm) && refresh == false) {
        data = JSON.parse(localStorage.getItem("left-" + searchTerm));
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
   } else {
        leftwing = encodeURIComponent("from:owenjones OR from:abiwilks OR from:marcuschown OR from:mrjamesob OR from:thestaggers OR from:thecanarysays OR from:TomLondon6 OR from:georgemonbiot OR from:paulmasonnews");
        jQuery.get( "functions/twitter-proxy.php?url=search/tweets.json?"+encodeURIComponent("q=" + searchTerm + "%20" + leftwing + "&count=10&result_type=recent&language=en&include_entities=true"), function( data ) {
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
            localStorage.setItem("left-" + searchTerm,JSON.stringify(data));     
        });
        arrival = new Date().getTime();
    }
    if(localStorage.getItem("right-" + searchTerm) && refresh == false) {
        data = JSON.parse(localStorage.getItem("right-" + searchTerm));
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
   } else {
       cookieObjRight = "";
        rightwing = encodeURIComponent("from:toadmeister OR from:Melanielatest OR from:DanielJHannan OR from:isabelhardman OR from:montie OR from:toryboypierce OR from:juliaHB1 OR from:iaindale OR from:DPJHodges");
        jQuery.get( "functions/twitter-proxy.php?url=search/tweets.json?"+encodeURIComponent("q=" + searchTerm + "%20" + rightwing + "&count=10&result_type=recent&language=en&include_entities=true"), function( data ) {
            cookieObjRight = JSON.stringify(data);
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
            localStorage.setItem("right-" + searchTerm,JSON.stringify(data));    
        });  
       arrival = new Date().getTime();
   }
}
function addTag(full_search_term) {
    jQuery("#searchTerms").prepend("<div class='search_term' id='" + encodeURIComponent(full_search_term) + "'>" + full_search_term + "</div>");
    jQuery(".search_term").click(function() {
        newNews(this.id);
    });   
    jQuery("#freeSearch").val("");
    searchTerms = Cookies.get("searchTerms") + "|" + full_search_term;
    Cookies.set("searchTerms",searchTerms,{expires:7});
}