<?php

$title = get_sub_field('title');
$content = get_sub_field('content');
$size = 'full';

?>
<div class="career_intro career_container">
	<div class="career_intro_left">
		<h2 class="font-a intro_title"><?php echo $title; ?></h2>
		<div class="font-b intro_content"><?php echo $content; ?></div>
		<?php
		if( have_rows('images') ): ?>
		<div class="intro_logos">
			<?php while( have_rows('images') ) : the_row(); ?>
				<?php
				$logo_img = get_sub_field('logo_img');
				$link = get_sub_field('logo_link');

				if( $link ) :
					$link_url = $link['url'];
					$link_title = $link['title'];
					$link_target = $link['target'] ? $link['target'] : '_self';
					?>
				<a class="button" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
				<?php endif; ?>
					<?php if( $logo_img ) :
						echo wp_get_attachment_image( $logo_img, $size, "", array( "class" => "logo_img" ) );
					endif; ?>
				<?php if( $link ): ?>
				</a>
				<?php endif; ?>
			<?php endwhile; ?>
			</div>
		<?php endif; ?>
	</div>

	<div class="career_intro_right">
		<?php
		$image = get_sub_field('image');
		if( $image ) {
			echo wp_get_attachment_image( $image, $size, "", array( "class" => "intro_image" ) );
		} ?>
	</div>
</div>
<div class="core_values">
	<?php
	$core_value_image = get_sub_field('core_value_image');
	if( $core_value_image ) {
		echo wp_get_attachment_image( $core_value_image, $size, "", array( "class" => "core_value_image" ) );
	} ?>
</div>
