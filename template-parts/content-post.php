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

    <?php if ($excerpt) :
          $trimed_excerpt = wp_trim_words($excerpt, 100, "...");
          $single_url = "<a class='post-link' href='".get_the_permalink()."'>".__('see more.')." </a>";
          $excerpt = sprintf("%s %s", $trimed_excerpt, $single_url );
          ?>

        <div class="entry-content"> <?php echo $excerpt;  ?> </div>

    <?php endif; ?>

</div>
