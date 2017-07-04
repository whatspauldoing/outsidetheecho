<?php
    include_once('oauth.php');
    $query = $_GET['q'];
    $query .= "-filter:retweets filter:links";
    $sources = $_GET['sources'];
    
    $bearer_token = get_bearer_token(); // get the bearer token
    $url = "https://api.twitter.com/1.1/search/tweets.json";
    $formed_url = "?q=" . urlencode($query) . "%20" . urlencode($sources) . "&count=1&result_type=latest&language=en&include_entities=true";
    $headers = array( 
        "GET /1.1/search/tweets.json".$formed_url." HTTP/1.1", 
        "Host: api.twitter.com", 
        "User-Agent: outsidetheecho Twitter Application-only OAuth App v.1",
        "Authorization: Bearer ".$bearer_token
    );
    $ch = curl_init();  // setup a curl
    curl_setopt($ch, CURLOPT_URL,$url.$formed_url);  // set url to send to
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); // set custom headers
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // return output
    $retrievedhtml = curl_exec ($ch); // execute the curl
    curl_close($ch); // close the curl
    invalidate_bearer_token($bearer_token); // invalidate the token
    $json_output = $retrievedhtml;
    print $json_output;
?>