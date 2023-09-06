<?php

/*
Template Name: Homepage
Template Post Type: page
*/

get_header();

$hero_video = get_field('hero_video');
$size = 'full';
$hero_title = get_field('hero_title');
$hero_subtitle = get_field('hero_subtitle');

$sec_1_title = get_field('sec_1_title');
$sec_1_intro = get_field('sec_1_intro');

?>

<div class="kn_homepage">
	<div class="home_hero">
		<?php if( $hero_video ) { ?>
			<video width="954" height="535" autoplay="autoplay" muted onclick="this.paused ? this.play() : this.pause(); arguments[0].preventDefault();" playsinline>
				<source src="<?php echo $hero_video;?>" type="video/mp4" >
			</video>
		<?php } ?>
		<div class="home_hero_text">
			<h2 class="home_hero_title"><?php echo $hero_title; ?></h1>
			<h1 class="home_hero_subtitle"><?php echo $hero_subtitle; ?></h2>
		</div>
	</div>
	<div class="home_sec_1 kn_container">
		<h2 class="sec_1_title"><?php echo $sec_1_title; ?></h2>
		<div class="sec_1_intro">
			<?php echo $sec_1_intro; ?>
		</div>
		<?php

		// Check rows existexists.
		if( have_rows('boxes') ): ?>
			<div class="sec_1_boxes">
			<?php // Loop through rows.
			while( have_rows('boxes') ) : the_row();

				// Load sub field value.
				$box_image = get_sub_field('box_image');
				$box_text = get_sub_field('box_text');
				$box_link = get_sub_field('box_link');
				?>
				<figure class="box">
				<?php
				if( $box_link ):
					$link_url = $box_link['url'];
					$link_title = $box_link['title'];
					$link_target = $box_link['target'] ? $box_link['target'] : '_self';
					?>
				<a href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
				<?php if( $box_image ) {
					echo wp_get_attachment_image( $box_image, $size );
				} ?>

				<figcaption><?php echo $link_title; ?></figcaption>
				</a>
				<?php endif; ?>
			</figure>
			<?php // End loop.
			endwhile;
		endif; ?>
		</div>
	</div>

</div>

<?php

get_footer();
