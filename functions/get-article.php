<?php
    include('./simple_html_dom.php');
    $base = $_GET['url'];
    $source = $_GET['source'];
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($curl, CURLOPT_URL, $base);
    curl_setopt($curl, CURLOPT_REFERER, $base);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
    $str = curl_exec($curl);
    curl_close($curl);
    // Create a DOM object
    $html_base = new simple_html_dom();
    // Load HTML from a string
    $html_base->load($str);
    $anchors = $html_base->find('a');
    if(count($anchors) == 1) {
        $base = $anchors[0]->href;
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_URL, $base);
        curl_setopt($curl, CURLOPT_REFERER, $base);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        $str = curl_exec($curl);
        curl_close($curl);

        // Create a DOM object
        $html_base = new simple_html_dom();
        // Load HTML from a string
        $html_base->load($str);
        $anchors = $html_base->find('a');
        if(count($anchors) == 1) {
            $base = $anchors[0]->href;
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($curl, CURLOPT_HEADER, false);
            curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($curl, CURLOPT_URL, $base);
            curl_setopt($curl, CURLOPT_REFERER, $base);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
            $str = curl_exec($curl);
            curl_close($curl);

            // Create a DOM object
            $html_base = new simple_html_dom();
            // Load HTML from a string
            $html_base->load($str);
        }
    }

    //get all category links
    if($source == 'guardian') {
        foreach($html_base->find('.content__headline') as $element) {
            echo "<h1>";
            print_r( $element->innertext );
            echo "</h1>";
            break;
        }

        foreach($html_base->find('.maxed') as $element) {
            echo "<img src='";
            print_r( $element->src );
            echo "' />";
        }

        foreach($html_base->find('p') as $element) {
            echo "<p>";
            print_r( $element->innertext );
            echo "</p>";
        }
    } else if($source == 'TheCanarySays') {
        foreach($html_base->find('h1') as $element) {
            echo "<h1>";
            print_r( $element->innertext );
            echo "</h1>";
            break;
        }        
        foreach($html_base->find('.head-image img') as $element) {
            echo "<img src='";
            print_r( $element->src );
            echo "' />";
        }
        foreach($html_base->find('.article-post-content p') as $element) {
            echo "<p>";
            print_r( $element->innertext );
            echo "</p>";
        }                
    } else if($source == 'DailyMailUK') {
        foreach($html_base->find('.article-text h1') as $element) {
            echo "<h1>";
            print_r( $element->innertext );
            echo "</h1>";
            break;
        }        
        foreach($html_base->find('.head-image img') as $element) {
            echo "<img src='";
            print_r( $element->src );
            echo "' />";
        }
        foreach($html_base->find('.mol-para-with-font') as $element) {
            echo "<p>";
            print_r( $element->innertext );
            echo "</p>";
        }                
    } else if($source == 'ConHome') {
        foreach($html_base->find('.page-header h1') as $element) {
            echo "<h1>";
            print_r( $element->innertext );
            echo "</h1>";
            break;
        }        
        foreach($html_base->find('.main-image img') as $element) {
            echo "<img src='";
            print_r( $element->src );
            echo "' />";
        }
        foreach($html_base->find('.post_content p') as $element) {
            echo "<p>";
            print_r( $element->innertext );
            echo "</p>";
        }                
    } else if($source == 'SpecCoffeeHouse') {
        foreach($html_base->find('.article-header__title') as $element) {
            echo "<h1>";
            print_r( $element->innertext );
            echo "</h1>";
            break;
        }        
        foreach($html_base->find('.featured-image img') as $element) {
            echo "<img src='";
            print_r( $element->src );
            echo "' />";
        }
        foreach($html_base->find('.article-text p') as $element) {
            echo "<p>";
            print_r( $element->innertext );
            echo "</p>";
        }                
    }
    $html_base->clear(); 
    unset($html_base);


    //$htm = file_get_contents($url);
    //$stripped = json_encode(strip_tags($htm));
    //$p_tags = $html->find('p');
    //foreach($html->find('img') as $element) 
      //     echo $element->src . '<br>';
    //print_r $p_tags;
?>