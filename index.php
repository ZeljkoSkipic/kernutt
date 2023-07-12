<?php

get_header();
$title = get_field('blog_archive_title', 'option');
$description = get_field('blog_archive_description', 'option');
$image = get_field('blog_archive_image', 'option');
$all_categories = get_terms(array(
    'taxonomy'   => 'category',
    'hide_empty' => false,
));

$categories = get_field('filter_terms', 'options');

// Get Media type categorie

$media_type_cat = array_filter((array) $all_categories, function ($term) {
    return $term->slug === 'media-type';
});

// Media type categories

$media_type_categories = [];

if ($media_type_cat && is_array($media_type_cat)) {
    $media_type_cat_term = array_values($media_type_cat)[0];
    $media_type_categories_IDs = get_term_children($media_type_cat_term->term_id, 'category');

    if ($media_type_categories_IDs) {
        foreach ($media_type_categories_IDs as $media_type_category_ID) {
            $media_type_categories[] = get_term($media_type_category_ID, 'category');
        }
    }
}

// Remove empty media terms

$media_type_categories = array_filter((array) $media_type_categories, function ($term) {
    return $term->count !== 0;
});

// Remove Empty Terms

$categories = array_filter((array) $categories, function ($term) {
    return $term->count !== 0 && $term->slug !== 'media-type';
});


$categories_url = (isset($_GET['categories']) && $_GET['categories'] ? wp_strip_all_tags($_GET['categories']) : "");
$categories_children_url = (isset($_GET['categoriesChildren']) && $_GET['categoriesChildren'] ? wp_strip_all_tags($_GET['categoriesChildren']) : "");
$children_categories = [];

// Get children categries

if ($categories_url) {
    $categories_url = explode('-', $categories_url);

    if ($categories_url) {
        foreach ($categories_url as $category_url) {
            $get_children = get_term_children($category_url, 'category');

            if ($get_children) {
                foreach ($get_children as $child) {
                    $child_object = get_term($child, 'category');

                    if ($child_object) {
                        $children_categories[] = $child_object;
                    }
                }
            }
        }
    }
}

// Remove empty children categories

if ($children_categories) {
    $children_categories = array_filter($children_categories, function ($child) {
        return $child->count !== 0;
    });
}


if ($categories_children_url) {
    $categories_children_url = explode('-', $categories_children_url);
}

?>

<section class="archive-hero">
    <div class="archive-hero__inner">
        <div class="archive-hero__left">

            <?php
            $hero_logo = get_field('hero_logo', 'option');
            $size = 'full';
            if ($hero_logo) {
                echo wp_get_attachment_image($hero_logo, $size, "", array("class" => "hero_logo"));
            } ?>

            <?php if ($description) : ?>

                <div class="archive-hero__description">
                    <?php echo $description; ?>
                </div>

            <?php endif; ?>

        </div>
        <div class="archive-hero__right">

            <?php if ($image) : ?>

                <div class="archive-hero__image">
                    <?php echo wp_get_attachment_image($image, 'full'); ?>
                </div>

            <?php endif; ?>

        </div>
    </div>
</section>

<div class="posts_grid">
    <div class="posts_filters">

        <div class="filter-wrapper">
            <div class="arrows">

                <svg class="slick-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g>
                        <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z" />
                        <polygon points="13.293 7.293 8.586 12 13.293 16.707 14.707 15.293 11.414 12 14.707 8.707 13.293 7.293" />
                    </g>
                </svg>
                <svg class="slick-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g>
                        <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z" />
                        <polygon points="9.293 8.707 12.586 12 9.293 15.293 10.707 16.707 15.414 12 10.707 7.293 9.293 8.707" />
                    </g>
                </svg>

            </div>
            <div class="posts_filters_panel">

            </div>
        </div>

        <div class="posts_filters_selection">

            <?php if ($media_type_categories) : ?>

                <div class="posts_filter">
                    <div class="posts_filter_top parent <?php foreach ($media_type_categories as $child_media_category) {

                                                            if ($categories_children_url && in_array($child_media_category->term_id, $categories_children_url)) {
                                                                echo "open_init";
                                                                break;
                                                            }
                                                        } ?>">
                        <?php esc_html_e('Filter by medium', 'kernutt'); ?>
                    </div>
                    <div style="display: none;" class="posts_filter_bottom media_cat">


                        <?php
                        if (isset($media_type_categories) && $media_type_categories) :
                            foreach ($media_type_categories as $child_category) :

                        ?>
                                <div class='child-cat' data-parent="<?php echo $child_category->parent; ?>">
                                    <input <?php if ($categories_children_url && in_array($child_category->term_id, $categories_children_url)) echo "checked=checked"; ?> data-parent="<?php echo $child_category->parent; ?>" data-child="true" class="post_categories" type="checkbox" id="<?php echo $child_category->term_id; ?>" name="post-category" value="<?php echo $child_category->term_id; ?>">
                                    <label data-parent="<?php echo $child_category->parent; ?>" for="<?php echo $child_category->term_id; ?>"><?php echo $child_category->name; ?></label>
                                </div>

                        <?php

                            endforeach;
                        endif;

                        ?>

                    </div>
                </div>

            <?php endif; ?>

            <div class="posts_filter content_filter">
                <div class="posts_filter_top child <?php if ($categories) foreach ($categories as $cat) {
                                                        if ($categories_url && in_array($cat->term_id, $categories_url)) {
                                                            echo "open_init";
                                                            break;
                                                        }
                                                    }  ?>">
                    <?php esc_html_e('Filter by content type', 'kernutt'); ?>
                </div>
                <div style="display: none;" class="posts_filter_bottom">

                    <?php
                    if ($categories) {
                        foreach ($categories as $cat) {

                    ?>
                            <div class="parent-cat">
                                <input <?php if ($categories_url && in_array($cat->term_id, $categories_url)) echo 'checked=checked'; ?> class="post_categories" type="checkbox" id="<?php echo $cat->term_id; ?>" name="post-category" value="<?php echo $cat->term_id; ?>">
                                <label for="<?php echo $cat->term_id; ?>"><?php echo $cat->name; ?></label><br>
                            </div>

                            <?php

                            if ($children_categories) :
                                foreach ($children_categories as $child_category) :
                                    if ($child_category->parent === $cat->term_id) :
                            ?>
                                        <div class='child-cat' data-parent="<?php echo $child_category->parent; ?>">
                                            <input <?php if ($categories_children_url && in_array($child_category->term_id, $categories_children_url)) echo "checked=checked"; ?> data-parent="<?php echo $child_category->parent; ?>" data-child="true" class="post_categories" type="checkbox" id="<?php echo $child_category->term_id; ?>" name="post-category" value="<?php echo $child_category->term_id; ?>">
                                            <label data-parent="<?php echo $child_category->parent; ?>" for="<?php echo $child_category->term_id; ?>"><?php echo $child_category->name; ?></label>
                                        </div>

                    <?php
                                    endif;
                                endforeach;
                            endif;
                        }
                    }
                    ?>

                </div>
            </div>
        </div>
        <a class="blog_reset" href="<?php echo get_post_type_archive_link('post'); ?>"><?php esc_html_e('Clear All', 'kernutt'); ?></a>
    </div>
    <div class="posts_grid_inner">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                get_template_part('template-parts/content', 'post');
            endwhile;
        else :
        ?>
            <p class="filter_no_results"> <?php esc_html_e('No results for the given terms.', 'kernutt'); ?> </p>
        <?php
        endif;
        ?>
    </div>



    <div class="load_more_container">
        <a class="et_pb_button load-more-filter" href="#"><?php esc_html_e('Load More', 'kernutt'); ?></a>
    </div>

</div>
<?php get_footer();
