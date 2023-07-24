<?php

if ( ! defined( 'T_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'T_VERSION', '2.0.0' );
}

// Include Files

include  get_stylesheet_directory() . "/inc/theme-ajax-requests.php";
include  get_stylesheet_directory() . "/inc/shortcodes-api.php";
include  get_stylesheet_directory() . "/inc/filter.php";

add_action('wp_enqueue_scripts', 'elegant_enqueue_css');

function elegant_enqueue_css()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css', array(), T_VERSION);
    wp_enqueue_script('kernutt-scripts', get_stylesheet_directory_uri() . "/assets/js/custom.min.js", array('jquery'), "1.0", true);
    wp_enqueue_script('flickity', get_stylesheet_directory_uri() . "/assets/js/vendor/flickity.js", array('jquery'), "1.0", true);
    wp_enqueue_script('fancybox', get_stylesheet_directory_uri() . "/assets/js/vendor/fancybox.js", array('jquery'), "1.0", true);

	$cache_buster = date("YmdHi", filemtime( get_stylesheet_directory() . '/main.css'));
	wp_enqueue_style( 'main', get_stylesheet_directory_uri() . '/main.css', array(), $cache_buster, 'all' );

    $media_type_cat = get_term_by('slug', 'media-type', 'category');

    $theme_options = [
        'ajax_admin'        => admin_url('admin-ajax.php'),
        'nonce'             => wp_create_nonce('ajax-call-token'),
        'loadMore'          => __('There are no more posts to display.', 'kernutt'),
        'mediaTypeCatID'    => $media_type_cat ? $media_type_cat->term_id : ""
    ];

    wp_localize_script('kernutt-scripts', 'theme', $theme_options);
}




// Pagination

if (!function_exists('post_navigation')) :
    function post_navigation()
    {
?>
        <div class="nav-links">
            <?php
            global $wp_query;

            $big = 999999999; // need an unlikely integer

            echo paginate_links(array(
                'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                'format' => '?paged=%#%',
                'current' => max(1, get_query_var('paged')),
                'total' => $wp_query->max_num_pages,
                'prev_text' => "&#8592",
                'next_text' => "&#8594"
            ));
            ?>
        </div>
<?php
    }
endif;

// Create Team Post Type
function create_posttype()
{

    $singular = 'Team';
    $plural = 'Team';

    register_post_type(
        'team',
        // CPT Options
        array(
            'labels' => array(
                'name' => __($singular, 'kernutt'),
                'singular_name' => __($singular, 'kernutt'),
                'add_new'               => _x('Add New', 'starter', 'kernutt'),
                'add_new_item'        => __('Add New ' . $singular, 'kernutt'),
                'edit'                  => __('Edit', 'kernutt'),
                'edit_item'              => __('Edit ' . $singular, 'kernutt'),
                'new_item'              => __('New ' . $singular, 'kernutt'),
                'view'                   => __('View ' . $singular, 'kernutt'),
                'view_item'           => __('View ' . $singular, 'kernutt'),
                'search_term'         => __('Search ' . $plural, 'kernutt'),
                'parent'               => __('Parent ' . $singular, 'kernutt'),
                'not_found'           => __('No ' . $plural . ' found', 'kernutt'),
                'not_found_in_trash'  => __('No ' . $plural . ' in Trash', 'kernutt')
            ),
            'supports' => array('title', 'excerpt', 'author', 'thumbnail',),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'team'),
            'show_in_rest' => false,
            'menu_icon' => 'dashicons-groups',
        )
    );

    $singular = 'Industry';
    $plural = 'Industries';

    register_post_type(
        'industry',
        // CPT Options
        array(
            'labels' => array(
                'name' => __($plural, 'kernutt'),
                'singular_name' => __($singular, 'kernutt'),
                'add_new'               => _x('Add New', 'starter', 'kernutt'),
                'add_new_item'        => __('Add New ' . $singular, 'kernutt'),
                'edit'                  => __('Edit', 'kernutt'),
                'edit_item'              => __('Edit ' . $singular, 'kernutt'),
                'new_item'              => __('New ' . $singular, 'kernutt'),
                'view'                   => __('View ' . $singular, 'kernutt'),
                'view_item'           => __('View ' . $singular, 'kernutt'),
                'search_term'         => __('Search ' . $plural, 'kernutt'),
                'parent'               => __('Parent ' . $singular, 'kernutt'),
                'not_found'           => __('No ' . $plural . ' found', 'kernutt'),
                'not_found_in_trash'  => __('No ' . $plural . ' in Trash', 'kernutt')
            ),
            'supports' => array('title', 'excerpt', 'author', 'thumbnail',),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'industry'),
            'show_in_rest' => false,
            'menu_icon' => 'dashicons-hammer',
        )
    );

    $singular = 'Service';
    $plural = 'Services';

    register_post_type(
        'services',
        // CPT Options
        array(
            'labels' => array(
                'name' => __($plural, 'kernutt'),
                'singular_name' => __($singular, 'kernutt'),
                'add_new'               => _x('Add New', 'kernutt', 'kernutt'),
                'add_new_item'        => __('Add New ' . $singular, 'kernutt'),
                'edit'                  => __('Edit', 'starter'),
                'edit_item'              => __('Edit ' . $singular, 'kernutt'),
                'new_item'              => __('New ' . $singular, 'kernutt'),
                'view'                   => __('View ' . $singular, 'kernutt'),
                'view_item'           => __('View ' . $singular, 'kernutt'),
                'search_term'         => __('Search ' . $plural, 'kernutt'),
                'parent'               => __('Parent ' . $singular, 'kernutt'),
                'not_found'           => __('No ' . $plural . ' found', 'kernutt'),
                'not_found_in_trash'  => __('No ' . $plural . ' in Trash', 'kernutt')
            ),
            'supports' => array('title', 'excerpt', 'author', 'thumbnail', 'page-attributes'),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'service'),
            'show_in_rest' => false,
            'menu_icon' => 'dashicons-editor-spellcheck',
        )
    );

    $singular = 'Spotlight';
    $plural = 'Spotlights';

    register_post_type(
        'spotlight',
        // CPT Options
        array(
            'labels' => array(
                'name' => __($plural, 'kernutt'),
                'singular_name' => __($singular, 'kernutt'),
                'add_new'               => _x('Add New', 'kernutt', 'kernutt'),
                'add_new_item'        => __('Add New ' . $singular, 'kernutt'),
                'edit'                  => __('Edit', 'starter'),
                'edit_item'              => __('Edit ' . $singular, 'kernutt'),
                'new_item'              => __('New ' . $singular, 'kernutt'),
                'view'                   => __('View ' . $singular, 'kernutt'),
                'view_item'           => __('View ' . $singular, 'kernutt'),
                'search_term'         => __('Search ' . $plural, 'kernutt'),
                'parent'               => __('Parent ' . $singular, 'kernutt'),
                'not_found'           => __('No ' . $plural . ' found', 'kernutt'),
                'not_found_in_trash'  => __('No ' . $plural . ' in Trash', 'kernutt')
            ),
            'supports' => array('title', 'thumbnail'),
            'public' => true,
            'has_archive' => false,
            'rewrite' => array('slug' => 'spotlight'),
            'show_in_rest' => false,
            'menu_icon' => 'dashicons-groups',
        )
    );
}
// Hooking up our function to theme setup
add_action('init', 'create_posttype');



add_action('init', 'create_team_taxonomies', 0);

//create a custom taxonomy name it subjects for your posts

function create_team_taxonomies()
{

    // Add new taxonomy, make it hierarchical like categories
    //first do the translations part for GUI

    $role_labels = array(
        'name' => _x('Roles', 'taxonomy general name'),
        'singular_name' => _x('Role', 'taxonomy singular name'),
        'search_items' =>  __('Search Roles'),
        'all_items' => __('All Roles'),
        'parent_item' => __('Parent Role'),
        'parent_item_colon' => __('Parent Role:'),
        'edit_item' => __('Edit Role'),
        'update_item' => __('Update Role'),
        'add_new_item' => __('Add New Role'),
        'new_item_name' => __('New Role Name'),
        'menu_name' => __('Roles'),
    );

    // Now register the taxonomy
    register_taxonomy('roles', array('team'), array(
        'hierarchical' => true,
        'labels' => $role_labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'role'),
    ));

    $office_labels = array(
        'name' => _x('Offices', 'taxonomy general name'),
        'singular_name' => _x('Office', 'taxonomy singular name'),
        'search_items' =>  __('Search Offices'),
        'all_items' => __('All Offices'),
        'parent_item' => __('Parent Office'),
        'parent_item_colon' => __('Parent Office:'),
        'edit_item' => __('Edit Office'),
        'update_item' => __('Update Office'),
        'add_new_item' => __('Add New Office'),
        'new_item_name' => __('New Office Name'),
        'menu_name' => __('Offices'),
    );

    // Now register the taxonomy
    register_taxonomy('offices', array('team'), array(
        'hierarchical' => true,
        'labels' => $office_labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'office'),
    ));
}

if (function_exists('acf_add_options_page')) {

	acf_add_options_page(array(
        'page_title'    => 'Site General Settings',
        'menu_title'    => 'Site Settings',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false,
		'icon_url' 		=> 'dashicons-admin-site',
    ));

    acf_add_options_sub_page(array(
        'page_title'     => 'Archive Page',
        'menu_title'    => 'Archive',
        'parent_slug'    => 'edit.php?post_type=industry',
    ));

    acf_add_options_sub_page(array(
        'page_title'     => 'Team Archive',
        'menu_title'    => 'Team Archive',
        'parent_slug'    => 'edit.php?post_type=team',
    ));

    acf_add_options_sub_page(array(
        'page_title'     => 'Service Archive',
        'menu_title'    => 'Service Archive',
        'parent_slug'    => 'edit.php?post_type=services',
    ));

	acf_add_options_sub_page(array(
        'page_title'     => 'Blog Archive',
        'menu_title'    => 'Blog Archive',
        'parent_slug'    => 'edit.php',
    ));

    acf_add_options_sub_page(array(
        'page_title'     => 'Spotlights Settings',
        'menu_title'    => 'Spotlights Settings',
        'parent_slug'    => 'edit.php?post_type=spotlight',
    ));
}


// Set Up ACF Local Json

add_filter('acf/settings/save_json', 'my_acf_json_save_point');

function my_acf_json_save_point($path)
{

    // update path
    $path = get_stylesheet_directory() . '/acf-json';


    // return
    return $path;
}

add_filter('acf/settings/load_json', 'my_acf_json_load_point');

function my_acf_json_load_point($paths)
{

    // remove original path (optional)
    unset($paths[0]);


    // append path
    $paths[] = get_stylesheet_directory() . '/acf-json';


    // return
    return $paths;
}
