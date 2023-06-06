<?php
$title = get_the_title();
$image = get_the_post_thumbnail(get_the_id(), 'large');
$excerpt = get_the_excerpt();
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

        <h4 class="heading-secondary">
            <a href="<?php the_permalink(); ?>"><?php echo $title; ?></a>
        </h4>

    <?php endif; ?>

    <?php if ($excerpt) : ?>

        <div class="entry-content"> <?php echo $excerpt; ?> </div>

    <?php endif; ?>

</div>