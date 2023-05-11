<?php

get_header();

$content = get_field('main_content');
$quote = get_field('quote');
$quote_person = get_field('quote_person');
$at = get_field('affiliations_title');
$tt = get_field('meet_the_team');
$image = get_field('team_image');
$caption = get_field('team_caption');
$st = get_field('services_title');
$services_description = get_field('services_description');
$form_id = get_field('form_id');
$form_title = get_field('form_title');

?>

<div class="kn_industry_hero">
    <?php the_post_thumbnail(); ?>
</div>
<div class="kn_industry_main">
    <div class="kn_im_left">
        <h1 class="kn_inner_title"><?php the_title(); ?></h1>
        <div class="kn_industry_left_content">
            <?php echo $content; ?>
        </div>
    </div>
    <div class="kn_im_right">
		<h2 class="kn_inner_title"><?php echo $st; ?></h2>
            <div class="kn_i_services">
				<p class="kn_i_services_intro"><?php echo $services_description; ?></p>
                <?php
                // Check rows existexists.
                if (have_rows('services')) : ?>
                    <ul>
                        <?php // Loop through rows.
                        while (have_rows('services')) : the_row();

                            // Load sub field value.
                            $service = get_sub_field('service');
							$s_link = get_sub_field('service_link');
							?>

                            <li>
							<?php if( $s_link ): ?>
							<a href="<?php echo $s_link; ?>">
							<?php endif; ?>
								<?php echo $service; ?></li>
							<?php if( $s_link ): ?>
							</a>
							<?php endif; ?>
                        <?php // End loop.
                        endwhile; ?>
                    </ul>
                <?php endif; ?>
                <a class="see_all" href="/service">See all</a>
            </div>
        <h2 class="kn_inner_title"><?php echo $at; ?></h2>
        <div class="kn_i_logos">
            <?php

            // Check rows existexists.
            if (have_rows('logos')) :

                // Loop through rows.
                while (have_rows('logos')) : the_row();

                    // Load sub field value.
                    $logo = get_sub_field('logo');
                    $size = 'full';
                    if ($logo) {
                        echo wp_get_attachment_image($logo, $size);
                    }

                // End loop.
                endwhile;
            endif; ?>
        </div>
    </div>
</div>
<?php
	$acc_intro_title = get_field('acc_intro_title');
	$acc_intro = get_field('acc_intro');
	$accordion_title = get_field('accordion_title');

if( get_field('add_accordion') ) { ?>
<div class="kn_industry_accordion">
	<h2 class="acc_sec_intro_title"><?php echo $acc_intro_title; ?></h2>
	<div class="acc_sec_intro"><?php echo $acc_intro; ?></div>
	<div class="kn_accordion">
		<h4 class="acc_title kn_accordion_title"><?php echo $accordion_title; ?></h4>
		<div class="kn_accordion_content">
			<?php

			if( have_rows('blurb') ): ?>
				<div class="kn_blurbs">
				<?php while( have_rows('blurb') ) : the_row(); ?>

					<?php
					$blurb_title = get_sub_field('blurb_title');
					$blurb_content = get_sub_field('blurb_content');
					?>
					<div class="kn_blurb">
						<h5 class="blurb_title"><?php echo $blurb_title; ?></h5>
						<div class="blurb_content"><?php echo $blurb_content; ?></div>
					</div>
				<?php endwhile; ?>
			</div>
			<?php endif; ?>
		</div>
	</div>
</div>
<?php } ?>
<div class="kn_industry_sec_2">
    <div class="kn_is2_inner">
		<h2 class="kn_inner_title"><?php echo $tt ?></h2>
		<div class="kn_is_2_col_1">
			<figure>
                <?php
                $team_image = get_field('team_image');
                $size = 'full';
                if ($team_image) {
                    echo wp_get_attachment_image($team_image, $size);
                } ?>
                <figcaption>
                    <?php echo $caption; ?>
                </figcaption>
            </figure>
		</div>
		<div class="kn_is_2_col_2">
			<blockquote>
				<?php echo $quote; ?>
			</blockquote>
			<span class="quote_person"><?php echo $quote_person; ?></span>
		</div>
		<div class="kn_is_2_col_3">
			<div class="inner_form">
			<?php if ($form_id) : ?>

				<?php if($form_title): ?>

				<h2 class="kn_inner_title"><?php echo $form_title; ?></h2>

				<?php endif; ?>

				<?php echo gravity_form($form_id, false); ?>

			<?php endif; ?>
			</div>
		</div>
    </div>
</div>

<!-- Category Posts -->

<?php get_template_part('template-parts/category', 'posts'); ?>


<!-- Category Posts END -->

<?php get_footer();
