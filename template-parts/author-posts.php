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

	<div class="sp_meta">

	<?php
		if( $contributors ): ?>
			<span>by</span>
			<?php foreach( $contributors as $contributor ):
				$permalink = get_permalink( $contributor->ID );
				$title = get_the_title( $contributor->ID );
				?>
					<span class="ks_sp_author"><a href="<?php echo esc_url( $permalink ); ?>"><?php echo esc_html( $title ); ?></a></span>
					|
			<?php endforeach; ?>
		<?php endif; ?>
		<?php if( !$contributors ) : ?>
			<span class="ks_sp_author">by Kernutt Stokes</span>
		<?php endif; ?>
        <time datetime="<?php echo get_the_date('c'); ?>" itemprop="datePublished"><?php echo get_the_date(); ?></time>

	</div>

    <?php if ($excerpt) : ?>

        <div class="entry-content">
            <?php echo $excerpt; ?>
        </div>

    <?php endif; ?>

</div>
