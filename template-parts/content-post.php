<?php
$title = get_the_title();
$image = get_the_post_thumbnail(get_the_id(), 'large');
$excerpt = get_the_excerpt();
$contributors = get_field('contributors');


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

    <?php if ($excerpt) :
         if (strlen($excerpt) <= 100){
            // Outputs the whole post content
           $trimmed_excerpt = $excerpt;
        }else{
            $trimmed_excerpt = substr($excerpt, 0, strpos($excerpt, ' ', 60));
            $trimmed_excerpt.="...";
        }

          $single_url = "<a class='post-link' href='".get_the_permalink()."'>".__('see more.')." </a>";
          $excerpt = sprintf("%s %s", $trimmed_excerpt, $single_url );
          ?>

        <div class="entry-content"> <?php echo $excerpt;  ?> </div>

    <?php endif; ?>

</div>
