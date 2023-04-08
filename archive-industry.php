<?php get_header(); ?>
<article class="archive-industry">
    <div class="archive-industry__inner">
        <!-- Hero -->
        <?php get_template_part('template-parts/archive', 'hero'); ?>
        <!-- END -->

        <?php if(have_posts()): ?>

        <div class="archive-industry__items">

            <?php
            while(have_posts()):

                the_post();
				$title = get_the_title();
				$image = get_field('archive_image');
				$size = 'full';
				?>
				<div class="service-industry">
				<div class="service-industry__inner">


					<div class="service-industry__image">
					<a href="<?php the_permalink(); ?>">
					<?php if( $image ) {
						echo wp_get_attachment_image( $image, $size );
					} ?>
					</a>
					</div>

					<h3 class="heading-third"><a href="<?php the_permalink(); ?>"><?php echo $title; ?></a></h3>

				</div>
			</div>
		<?php endwhile; ?>

        </div>

        <?php endif; ?>

        <?php post_navigation(); ?>

    </div>
</article>

<?php get_footer(); ?>
