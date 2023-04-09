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
$form_id = get_field('form_id');
$form_title = get_field('form_title');
$posts_category = get_field('posts_category');

$recent_posts = get_posts([
    'posts_per_page' => 4,
    'post_type'     => 'post',
    'orderby'       => 'date',
    'order'         => 'DESC',
    'tax_query' => array(
        array(
            'taxonomy' => 'category',
            'field'    => 'post_id',
            'terms'    => $posts_category ? $posts_category : [],
        ),
    ),
]);

?>

<div class="kn_industry_hero">
    <?php the_post_thumbnail(); ?>
</div>
<div class="kn_industry_main">
    <div class="kn_im_left">
        <h1 class="kn_inner_title"><?php the_title(); ?></h1>
        <div>
            <?php echo $content; ?>
        </div>
    </div>
    <div class="kn_im_right">
		<h2 class="kn_inner_title"><?php echo $st; ?></h2>
            <div class="kn_i_services">
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
							<a href="<?php $s_link; ?>">
							<?php endif; ?>
								<?php echo $service; ?></li>
							<?php if( $s_link ): ?>
							</a>
							<?php endif; ?>
                        <?php // End loop.
                        endwhile; ?>
                    </ul>
                <?php endif; ?>
                <a class="see_all" href="/services">See all</a>
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
<div class="kn_industry_sec_2">
    <div class="kn_is2_inner">
		<h2 class="kn_inner_title"><?php echo $tt ?></h2>
		<div class="kn_is_2_col_1">
			<figure>
                <?php
                $team_image = get_field('team_image');
                $size = 'full';
                if ($logo) {
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

<?php if ($recent_posts) : ?>

    <div class="posts_grid">
        <h2 class="kn_inner_title"><?php the_field('industry_posts_title'); ?></h2>
        <div class="posts_grid_inner">

            <?php
            foreach ($recent_posts as $recent_post) :
                global $post;
                $post = $recent_post;
                setup_postdata($post);
                $image = get_the_post_thumbnail(get_the_id(), "medium");
                $title = get_the_title();
                $excerpt = get_the_excerpt();
				$categories = get_the_category();
				$separator = ' | ';
				$output = '';
            ?>

                <div class="posts_grid_item">
                    <div class="pg-image">

                        <?php if($image): ?>
                            <a href="<?php the_permalink(); ?>">
                               <?php echo $image; ?>
                            </a>
                        <?php endif; ?>

                    </div>

                    <?php if($title): ?>

                    <h2 class="heading-secondary">
                        <a href="<?php the_permalink(); ?>"><?php echo $title; ?></a>
                    </h2>
					<?php if ( ! empty( $categories ) ) { ?>
					<div class="cats">
					<?php foreach( $categories as $category ) {
						$output .= '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" alt="' . esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ) . '">' . esc_html( $category->name ) . '</a>' . $separator;
					}
					echo trim( $output, $separator ); ?>
					</div>
				<?php } ?>

                    <?php endif; ?>

                    <?php if($excerpt): ?>

                    <div class="entry-content"> <?php echo $excerpt; ?> </div>

                    <?php endif; ?>

                </div>

            <?php

            endforeach;
            wp_reset_postdata();
            ?>

        </div>
    </div>

<?php endif; ?>

<?php get_footer();
