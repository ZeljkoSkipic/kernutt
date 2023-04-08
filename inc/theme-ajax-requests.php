<?php

// Author posts load more
add_action('wp_ajax_author_posts_load_more', 'author_posts_load_more');
add_action('wp_ajax_nopriv_author_posts_load_more', 'author_posts_load_more');

function author_posts_load_more() {

    if ( ! wp_verify_nonce( $_POST['nonce'], 'ajax-call-token' ) ) {
        die ( 'Nonce key is invalid!');
    }

    $offset = (isset($_POST['offset']) && $_POST['offset'] ? wp_strip_all_tags($_POST['offset']) : "");
    $user = (isset($_POST['user']) && $_POST['user'] ? wp_strip_all_tags($_POST['user']) : "");

    if($offset) {
       
        if ($user) {
            $author_posts = get_posts(array(
                'post_type'         => 'post',
                'posts_per_page'    => 3,
                'offset'            => $offset,
                'author'            =>  $user,
                'orderby'           => 'date',
                'order'             => "DESC"
            ));

            if($author_posts) {
        
                ob_start();
                foreach($author_posts as $author_post) {

                    global $post;
                    $post = $author_post;
                    setup_postdata($post);
                    get_template_part('template-parts/author', 'posts');
                }

                wp_reset_postdata();

                echo ob_get_clean();

            }
        }
    }


    die();

}