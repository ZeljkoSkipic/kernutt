<?php get_header(); ?>
<article class="archive-services">
    <div class="archive-services__inner">
        <!-- Hero -->
        <?php get_template_part('template-parts/archive', 'hero'); ?>
        <!-- END -->

        <?php if(have_posts()): ?>

        <div class="archive-services__items">

		<?php
            while(have_posts()):

                the_post();
				$title = get_the_title();
				$image = get_field('archive_image');
				$size = 'full';
				$ex_link = get_field('external_service_link'); ?>
				<div class="service-industry">
				<div class="service-industry__inner">


					<div class="service-industry__image">
					<a href="
					<?php if( $ex_link ):
					echo $ex_link;
					else :
					the_permalink();
					endif;
					?>">
					<?php if( $image ) {
						echo wp_get_attachment_image( $image, $size );
					} ?>
					</a>
					</div>

					<h3 class="heading-third"><a href="
					<?php if( $ex_link ):
					echo $ex_link;
					else :
					the_permalink();
					endif;
					?>"><?php echo $title; ?></a></h3>

				</div>
			</div>
		<?php endwhile; ?>

        </div>

        <?php endif; ?>

        <?php post_navigation(); ?>

    </div>
</article>

<?php get_footer(); ?>
