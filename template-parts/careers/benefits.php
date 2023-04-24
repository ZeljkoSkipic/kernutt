<?php

$title = get_sub_field('title');

?>
<div class="career_container kn_benefits">
	<h2 class="font-a"><?php echo $title; ?></h2>

	<?php

	if( have_rows('benefits') ): ?>

		<?php while( have_rows('benefits') ) : the_row();

			$benefit_title = get_sub_field('benefit_title');
			$benefit_content = get_sub_field('benefit_content'); ?>

			<div class="kn_accordion">
				<h3 class="kn_accordion_title"><?php echo $benefit_title; ?></h3>
				<div class="kn_accordion_content"><?php echo $benefit_content; ?></div>
			</div>
		<?php endwhile; ?>

	<?php endif; ?>
</div>
