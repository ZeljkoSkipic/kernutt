<?php

/*
Template Name: Awards
Template Post Type: page
*/

get_header();


?>
<div class="awards_hero kn_container">
	<div class="awards_hero_left">
		<h1><?php the_title(); ?></h1>
		<?php the_content(); ?>
	</div>
	<div class="awards_hero_right">
		<?php the_post_thumbnail('full'); ?>
	</div>
</div>
<div class="kn_awards_page kn_container">
	<?php

	if( have_rows('year') ): ?>

		<?php while( have_rows('year') ) : the_row(); ?>

			<?php
			$year_number = get_sub_field('year_number'); ?>
			<div class="year year<?php echo $year_number; ?>">
				<h2 class="award_year"><?php echo $year_number; ?></h2>

				<?php if( have_rows('award') ): ?>
				<div class="awards_inner">
					<?php while( have_rows('award') ) : the_row(); ?>
						<div class="award <?php the_sub_field('image_type'); ?>">
							<?php $award_image = get_sub_field('award_image');
							$award_description = get_sub_field('award_description');
							$award_link = get_sub_field('award_link');
							$size = 'full';
							if( $award_image ) {
								echo wp_get_attachment_image( $award_image, $size, "", array( "class" => "award_image" ) );
							} ?>
							<div class="award_description"><?php echo $award_description; ?></div>
							<?php if( $award_link ):
							$award_link_url = $award_link['url'];
							$award_link_title = $award_link['title'];
							$award_link_target = $award_link['target'] ? $award_link['target'] : '_self';
							?>
							<a class="award_link" href="<?php echo esc_url( $award_link_url ); ?>" target="<?php echo esc_attr( $award_link_target ); ?>"><?php echo esc_html( $award_link_title ); ?></a>
						<?php endif; ?>
						</div>
					<?php endwhile; ?>
				</div>
				<?php endif; ?>

			</div>
		<?php endwhile; ?>

	<?php endif; ?>
</div>

<?php

get_footer();
