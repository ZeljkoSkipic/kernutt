<?php
$image = get_the_post_thumbnail(get_the_id(), "medium");
$title = get_the_title();
$excerpt = get_the_excerpt();
$categories = get_the_category();
$separator = ' | ';
$output = '';
?>

<div class="posts_grid_item">
    <div class="pg-image">

        <?php if ($image) : ?>
            <a href="<?php the_permalink(); ?>">
                <?php echo $image; ?>
            </a>
        <?php endif; ?>

    </div>

    <?php if ($title) : ?>

        <h2 class="heading-secondary">
            <a href="<?php the_permalink(); ?>"><?php echo $title; ?></a>
        </h2>
        <?php if (!empty($categories)) { ?>
            <div class="cats">
                <?php foreach ($categories as $category) {
                    $output .= '<a href="' . esc_url(get_category_link($category->term_id)) . '" alt="' . esc_attr(sprintf(__('View all posts in %s', 'textdomain'), $category->name)) . '">' . esc_html($category->name) . '</a>' . $separator;
                }
                echo trim($output, $separator); ?>
            </div>
        <?php } ?>

    <?php endif; ?>

    <?php if ($excerpt) : ?>

        <div class="entry-content"> <?php echo $excerpt; ?> </div>

    <?php endif; ?>

</div>