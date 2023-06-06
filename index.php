<?php

get_header();
$title = get_field('blog_archive_title', 'option');
$description = get_field('blog_archive_description', 'option');
$image = get_field('blog_archive_image', 'option');
$categories = get_terms(array(
    'taxonomy'   => 'category',
    'hide_empty' => true,
    'parent' => 0
));

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

            <?php if ($title) : ?>

                <h1 class="heading-primary"><?php echo $title; ?></h1>

            <?php endif; ?>

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
        <div class="posts_filters_panel">

        </div>
        <div class="posts_filters_selection">
            <?php if ($categories) : ?>

                <div class="posts_filter">
                    <div class="posts_filter_top parent">
                        <?php esc_html_e('Filter by medium', 'kernutt'); ?>
                    </div>
                    <div style="display: none;" class="posts_filter_bottom">

                        <?php
                        foreach ($categories as $cat) :
                        ?>
                            <input <?php if ($categories_url && in_array($cat->term_id, $categories_url)) echo 'checked=checked'; ?> class="post_categories" type="checkbox" id="<?php echo $cat->term_id; ?>" name="post-category" value="<?php echo $cat->term_id; ?>">
                            <label for="<?php echo $cat->term_id; ?>"><?php echo $cat->name; ?></label><br>
                        <?php
                        endforeach;
                        ?>

                    </div>
                </div>

            <?php endif; ?>

            <div class="posts_filter content_filter <?php if(!$children_categories) echo "disabled"; ?>">
                <div class="posts_filter_top child">
                    <?php esc_html_e('Filter by content type', 'kernutt'); ?>
                </div>
                <div style="display: none;" class="posts_filter_bottom">

                    <?php
                    if ($children_categories) {
                        foreach ($children_categories as $child_category) {

                    ?>
                            <div data-parent="<?php echo $child_category->parent; ?>">
                                <input <?php if ($categories_children_url && in_array($child_category->term_id, $categories_children_url)) echo "checked=checked"; ?> data-parent="<?php echo $child_category->parent; ?>" data-child="true" class="post_categories" type="checkbox" id="<?php echo $child_category->term_id; ?>" name="post-category" value="<?php echo $child_category->term_id; ?>">
                                <label data-parent="<?php echo $child_category->parent; ?>" for="<?php echo $child_category->term_id; ?>"><?php echo $child_category->name; ?></label>
                            </div>

                    <?php
                        }
                    }
                    ?>

                </div>
            </div>
        </div>
    </div>
    <div class="posts_grid_inner">
        <?php
        while (have_posts()) :
            the_post();
            get_template_part('template-parts/content', 'post');
        endwhile;
        ?>
    </div>
    <div class="load_more_container">
        <a class="et_pb_button load-more-filter" href="#"><?php esc_html_e('Load More', 'kernutt'); ?></a>
    </div>
</div>
<?php get_footer();
