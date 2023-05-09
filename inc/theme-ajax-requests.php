<?php
// Posts load more

add_action('wp_ajax_posts_load_more', 'posts_load_more');
add_action('wp_ajax_nopriv_posts_load_more', 'posts_load_more');

function posts_load_more()
{

    if (!wp_verify_nonce($_POST['nonce'], 'ajax-call-token')) {
        die('Nonce key is invalid!');
    }

    $offset = (isset($_POST['offset']) && $_POST['offset'] ? wp_strip_all_tags($_POST['offset']) : "");
    $user = (isset($_POST['user']) && $_POST['user'] ? wp_strip_all_tags($_POST['user']) : "");
    $category = (isset($_POST['cat']) && $_POST['cat'] ? wp_strip_all_tags($_POST['cat']) : "");

    if ($offset) {

        if ($user) {
            $author_posts = new WP_Query(array(
                'post_type'         => 'post',
                'posts_per_page'    => 4,
                'offset'            => $offset,
                'author_name' 		=> get_the_author_meta('user_nicename', $user),
                'orderby'           => 'date',
                'order'             => "DESC",
            ));

            if ($author_posts->have_posts()) {

                ob_start();
                foreach ($author_posts->posts as $author_post) {

                    global $post;
                    $post = $author_post;
                    setup_postdata($post);
                    get_template_part('template-parts/author', 'posts');
                }

                wp_reset_postdata();

                echo ob_get_clean();
            }
        } elseif ($category) {

            $posts = get_posts([
                'posts_per_page' => 4,
                'offset'            => $offset,
                'post_type'     => 'post',
                'orderby'       => 'date',
                'order'         => 'DESC',
                'tax_query' => array(
                    array(
                        'taxonomy' => 'category',
                        'field'    => 'post_id',
                        'terms'    => $category,
                    ),
                ),
            ]);

            if ($posts) {

                ob_start();
                foreach ($posts as $post_single) {

                    global $post;
                    $post = $post_single;
                    setup_postdata($post);
                    get_template_part('template-parts/content', 'recent-post');
                }

                wp_reset_postdata();

                echo ob_get_clean();
            }
        }
    }

    die();
}
