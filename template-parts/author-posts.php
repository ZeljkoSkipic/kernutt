<?php
// Template part for author posts
$title = get_the_title();
$image = get_the_post_thumbnail(get_the_ID(), 'large');
$excerpt = get_the_excerpt(get_the_ID());
$categories = get_the_category();
$separator = ' | ';
$output = '';

?>

<div class="posts_grid_item">
    <div class="author-posts__item-image-date">

        <?php if ($image) : ?>

            <div class="pg-image">
                <a href="<?php the_permalink(get_the_ID()); ?>"><?php echo $image; ?> </a>
            </div>

        <?php endif; ?>

    </div>

    <?php if ($title) : ?>

        <h2 class="heading-secondary"><a href="<?php the_permalink(get_the_ID()); ?>"><?php echo $title; ?></a></h2>

    <?php endif; ?>

    <?php if ($excerpt) : ?>

        <div class="entry-content">
            <?php echo $excerpt; ?>
        </div>

    <?php endif; ?>

</div>
