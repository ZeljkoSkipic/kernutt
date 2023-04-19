<?php

/*
Template Name: Careers
Template Post Type: page
*/

get_header();

$hero_image = get_field('hero_image');
$size = 'full';
$hero_title = get_field('hero_title');
$hero_subtitle = get_field('hero_subtitle');

$sec_1_title = get_field('sec_1_title');
$sec_1_intro = get_field('sec_1_intro');

?>

<div class="kn_careers_page">
	<?php
		if( function_exists('have_rows') ) :

			if ( have_rows('careers_sections') ) :

				while ( have_rows('careers_sections') ): the_row();

						get_template_part('template-parts/careers/' . get_row_layout());
					endwhile;

			endif;

		endif;

	?>
</div>

<?php

get_footer();
