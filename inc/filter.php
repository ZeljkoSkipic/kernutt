<?php

// Filter after page refresh

function blog_filter( $query ) {
	if ( ! is_admin() && $query->is_main_query() && is_home() ) {

		$categories = (isset($_GET['categories']) && $_GET['categories'] ? wp_strip_all_tags($_GET['categories']) : "");
        $categories_children = (isset($_GET['categoriesChildren']) && $_GET['categoriesChildren'] ? wp_strip_all_tags($_GET['categoriesChildren']) : "");
        $offset = (isset($_GET['offset']) && $_GET['offset'] ? wp_strip_all_tags($_GET['offset']) : 0);

        // Media Type Category

        $media_type_cat = get_term_by('slug', 'media-type', 'category');
        (int)  $media_type_ID = $media_type_cat ?  $media_type_cat->term_id : "";

        // Tax Query

        $tax_query = [];

        if($categories || $media_type_ID) {
            $categories = explode('-', $categories);
            array_push($categories, $media_type_ID);

            array_push($tax_query, [
                'taxonomy' => 'category',
                'field'    => 'post_id',
                'terms'    => $categories,
            ]);
        }

        if($categories_children) {
            $categories_children = explode('-', $categories_children);
            array_push($tax_query, [
                'taxonomy' => 'category',
                'field'    => 'post_id',
                'terms'    =>  $categories_children,
            ]);
        }

        if(count($tax_query) > 1) {
            $tax_query['relation'] = "AND";
        }


        $query->set('tax_query', $tax_query);
        $query->set('posts_per_page', 10 + $offset);

		return;
	}
}
add_action( 'pre_get_posts', 'blog_filter', 1 );

// Filter Admin Terms (Show Just Parent terms and Exclude Media Type)

function filter_hide_child_taxonomies( $args, $field ) {
    $media_type_cat = get_term_by('slug', 'media-type', 'category');
    (string)  $media_type_ID = $media_type_cat ?  $media_type_cat->term_id : "";
    $args['parent'] = 0;
    $args['exclude'] = $media_type_ID;
    return $args;
}

add_filter('acf/fields/taxonomy/query/name=filter_terms', 'filter_hide_child_taxonomies', 10, 3);
