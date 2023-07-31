<?php
/**
 * Template Name: Upload
 * Template Post Type: page
 */

get_header();


?>
	<div class="upload_container">
		<div class="upload_container_inner">
			<?php

			if( have_rows('upload_content') ): ?>

				<?php while( have_rows('upload_content') ) : the_row(); ?>

					<?php
					$title = get_sub_field('title');
					$text = get_sub_field('text'); ?>
					<div class="register_section">
						<h2><?php echo $title; ?></h2>
						<div><?php echo $text; ?></div>
					</div>
				<?php endwhile; ?>

			<?php endif; ?>
			<div class="embed_row">
				<div class="left">
					<?php the_field('embed_code'); ?>
				</div>
				<div class="right"><?php the_field('disclaimer'); ?></div>
			</div>
		</div>
	</div>
<?php

get_footer();
