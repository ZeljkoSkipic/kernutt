<?php

get_header();
$title = get_field('blog_archive_title', 'option');
$description = get_field('blog_archive_description', 'option');
$image = get_field('blog_archive_image', 'option');
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
<div class="posts_grid_inner">
<?php while ( have_posts() ) : ?>

	<?php the_post();
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

<?php endwhile; ?>
</div>
</div>
<?php get_footer();
