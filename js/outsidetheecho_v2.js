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
    jQuery.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=735791b12b66482da127d72f25c7cbb4", function( data ) {
        count = 0;
        jQuery.each(data['articles'], function(key,val) {
            bbc_article = "<div class='bbc'>";
            bbc_article +=     "<h4>" + val['author'] + "</h4>";
            bbc_article +=     "<h3>" + val['title'] + "</h3>";
            bbc_article +=     "<a href='" + val['url'] + "' target='_blank'><p>" + val['description'] + "</p>";
            bbc_article +=     "</a>";
            bbc_article += "</div>";
            jQuery("#bbc_news").append(bbc_article);
            count ++;
            if(count > 4) {
                return false;
            }
        });
    });
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
    if(searchTerm == 'clear') {
        Cookies.set("searchTerms","");  
        jQuery("#searchTerms").html("<div class='clearfix'></div>");
    } else {
        rawSearchTerm = searchTerm;
        searchTerm = encodeURIComponent(searchTerm);
        jQuery("#tweet-range").html("");
        source_array = ["guardian", "TheCanarySays", "DailyMailUK", "ConHome", "SpecCoffeeHouse"];
        jQuery.each(source_array, function (key, source) {
            jQuery("#" + source).html("<h3>@" + source + "</h3>");
            jQuery("#" + source).append("<h3>No Recent Comments...</h3>");
        });
        jQuery.each(source_array, function(key, source) {
            from = encodeURIComponent("from:" + source);
            jQuery.get( "functions/search-twitter.php?q=" + searchTerm + "&sources=" + from, function( data ) {
                data = JSON.parse(data);
                jQuery.each(data['statuses'],function(key,val) {
                    if(val['text']) {
                        formatted_text = "";
                        formatted_media = "";
                        unformatted_text = val['text'];
                        text_array = unformatted_text.split(" ");
                        for(text in text_array) {
                            if(!text_array[text].includes("t.co"))  {
                               formatted_text += text_array[text] + " ";
                            }
                        }
                        tweet_date = parseTwitterDate(val['created_at']);
                        formatted_urls = "";
                        if(val['entities']) {
                            jQuery.each(val['entities']['urls'], function() {
                                formatted_urls += "<a onclick=\"showArticle('" + this.expanded_url + "','" + val['user']['screen_name'] + "');return false;\" style='cursor:pointer'>" + this.display_url + " <i class='fa fa-external-link-square' aria-hidden='true'></i></a>" + "<br/>";
                            });
                            jQuery.each(val['entities']['media'], function() {
                                formatted_media += "<img class='tweet_media' src='" + this.media_url_https + "' />" + "<br/>";
                            });                            
                        }
                        if(val['retweeted_status']) {
                            jQuery.each(val['retweeted_status']['entities']['urls'], function() {
                                formatted_urls += "<a href='" + this.expanded_url + "'>" + this.display_url + " <i class='fa fa-link' aria-hidden='true'></i></a>" + "<br/>";
                            });                        
                        }
                        jQuery("#" + val['user']['screen_name']).html("<h3>@" + val['user']['screen_name'] + "</h3>");
                        jQuery("#" + val['user']['screen_name']).append("<div id='" + val['id_str'] + "'><h5>" + tweet_date + "</h5><h4>" + formatted_urls + "</h4><p><a href='http://twitter.com/" + val['user']['id_str'] + "/status/" + val['id_str'] + "'>" + formatted_text + "</a></p><p>" + formatted_media + "</p></div>"); 
                    }
                });
            });
        });
    }
}

function addTag(full_search_term) {
    jQuery("#searchTerms").prepend("<div class='search_term' id='" + encodeURIComponent(full_search_term) + "'>" + full_search_term + "</div>");
    jQuery(".search_term").click(function() {
        event.preventDefault();
        newNews(this.id);
        jQuery(".search_term").unbind();
    });   
    jQuery("#freeSearch").val("");
    searchTerms = Cookies.get("searchTerms") + "|" + full_search_term;
    Cookies.set("searchTerms",searchTerms,{expires:7});
}

function parseTwitterDate($stamp)
{		
// convert to local string and remove seconds and year //		
	var date = new Date(Date.parse($stamp)).toLocaleString().substr(0, 16);
// get the two digit hour //
	var hour = date.substr(-5, 2);
// convert to AM or PM //
	var ampm = hour<12 ? ' AM' : ' PM';
	if (hour>12) hour-= 12;
	if (hour==0) hour = 12;
// return the formatted string //
    us_date = date.substr(0, 11);
    mixed_date = us_date.split("/");
    uk_date = mixed_date[1] + "/" + mixed_date[0] + "/" + mixed_date[2];
    uk_date = uk_date.substr(0,(uk_date.length - 2));
	return uk_date;
}

function showArticle(url,source) {
    jQuery("#articleBox").show();
    jQuery("#articleBox").height(jQuery(window).height());
    jQuery("#articleFrame").height(jQuery(window).height());
    jQuery("#articleBox").css("top",jQuery(window).scrollTop() + "px");
    jQuery("#articleFrame").html("");
    jQuery.get('functions/get-article.php?url=' + url + "&source=" + source, function(data) {
        jQuery("#articleFrame").append(data);
    });
    jQuery("#articleClick").attr('href',url);            
    jQuery("#articleBox").click(function() {
        jQuery("#articleBox").hide();
        jQuery("#articleFrame").attr('src','');
    });
}

function setUpHeadlines() {
    //headline_sources = ['the-huffington-post','independent','mirror','google-news','daily-mail','the-telegraph','breitbart-news'];
    headline_sources = ['the-huffington-post','independent','google-news','the-telegraph','breitbart-news'];
   // div_ids = ['huffPost','independent','mirror','googleNews','dailyMail','telegraph','breitBart'];
    div_ids = ['huffPost','independent','googleNews','telegraph','breitBart'];
    hl_count = 0;
    jQuery.each(headline_sources,function(key,val) {
        getHeadlines(headline_sources[hl_count],div_ids[hl_count]);
        hl_count ++;
    });
}

function getHeadlines(source, div) {
    jQuery.get("https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=735791b12b66482da127d72f25c7cbb4", function( data ) {
        count = 0;
        jQuery.each(data['articles'], function(key,val) {
            headline_article = "<div class='headline'><a href='" + val['url'] + "' target='_blank' class='headline-link'>";
            headline_article +=     "<h3>" + source + "</h3>";
            if(val['author'] != null) {
                headline_article +=     "<h3>" + val['author'] + "</h3>";
            }
            headline_article +=     "<h4>" + val['title'] + "</h4>";
            headline_article +=     "<p>" + val['description'] + "</p>";
            headline_article +=     "</a>";
            headline_article += "</div>";
            jQuery("#" + div).append(headline_article);
            count ++;
            if(count > 4) {
                jQuery("#" + div).append("<div class='clearfix'></div>");
                return false;
            }
        });
    });
}