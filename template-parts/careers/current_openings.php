<?php

$title = get_sub_field('title');
$content = get_sub_field('content');
$apply_title = get_sub_field('apply_title');
$apply_content = get_sub_field('apply_content');

?>
<div class="career_container kn_jobs">
	<div class="kn_jobs_left">
		<h2 class="font-a"><?php echo $title; ?></h2>
		<div class="kn_jobs_intro font-b"><?php echo $content; ?></div>

		<?php

		if( have_rows('jobs') ): ?>

			<?php while( have_rows('jobs') ) : the_row();

				$job_title = get_sub_field('job_title');
				$job_content = get_sub_field('job_content'); ?>

				<div class="kn_accordion">
					<h3 class="kn_accordion_title font-e"><?php echo $job_title; ?></h3>
					<div class="kn_accordion_content font-b"><?php echo $job_content; ?>
					<?php

					if( have_rows('job_subcontent') ): ?>

						<?php while( have_rows('job_subcontent') ) : the_row(); ?>

							<?php
							$subcontent_title = get_sub_field('subcontent_title');
							$subcontent_content = get_sub_field('subcontent_content');
							?>
							<strong class="job_subtitle"><?php echo $subcontent_title; ?></strong>
							<?php echo $subcontent_content; ?>
						<?php endwhile; ?>

					<?php endif; ?>
				</div>
				</div>
			<?php endwhile; ?>

		<?php endif; ?>
	</div>
	<div class="kn_jobs_right">
		<div class="kn_apply">
			<h3 class="apply_title font-a"><?php echo $apply_title; ?></h3>
			<div class="apply_content font-c"><?php echo $apply_content; ?></div>
		</div>
	</div>

</div>
