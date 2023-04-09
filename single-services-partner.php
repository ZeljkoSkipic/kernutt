<?php
/*Template Name: Partner in Charge
Template Post Type: services
*/

get_header();
$main_text = get_field('main_text');
$related_industries = get_field('related_industries');
$related_industries_description = get_field('related_industries_description');
$related_industries_link = get_field('related_industries_see_all_link');
$other_services = get_field('other_services');
$other_services_link = get_field('other_services_see_all_link');
$title = get_the_title();
$quote = get_field('quote');
$quote_person = get_field('quote_person');
$form_image_title = get_field('form_image_title');
$form_image = get_field('form_image');
$form_title = get_field('form_title');
$form_id = get_field('form_id');
$selected_user = get_field('related_author_posts');
$related_posts_title = get_field('related_posts_title');

if ($selected_user) {
    $author_posts = new WP_Query(array(
        'post_type'         => 'post',
        'posts_per_page'    => 4,
        'author'            => $selected_user['ID'],
        'orderby'           => 'date',
        'order'             => "DESC"
    ));
}
?>


<div class="service-hero">
    <?php the_post_thumbnail(); ?>
</div>

<div class="container">
    <?php if ($title) : ?>

        <h1><?php echo $title; ?></h1>

    <?php endif; ?>
    <div class="service-top">
        <div class="service-top__left">
            <?php echo $main_text; ?>
        </div>
        <div class="service-top__right">
            <h3> <?php esc_html_e('Related Industries', 'kernutt'); ?></h3>

            <?php if ($related_industries_description) : ?>

                <p class="service-top__related-description"><?php echo $related_industries_description; ?></p>

            <?php endif; ?>

            <?php echo $related_industries; ?>

            <?php if($related_industries_link): ?>

            <a class="see_all" href="<?php echo $related_industries_link; ?>"><?php esc_html_e('See all', 'kernutt') ?></a>

            <?php endif; ?>

        </div>
    </div>
</div>

<!-- Form Section -->

<section class="form-service">
    <div class="container">

        <?php  if($form_image_title):  ?>

        <h2><?php echo $form_image_title; ?></h2>

        <?php endif; ?>

        <div class="form-service__inner">

            <div class="form-service__left">

                <?php if ($form_image) : ?>

                    <div class="form-service__image">
                        <?php echo wp_get_attachment_image($form_image, 'large'); ?>
                    </div>

                <?php endif; ?>

            </div>
            <?php if ($quote) : ?>

                <div class="form-service__quote">
                    <p class="form-service__quote-text">
                        <?php echo $quote; ?>
                    </p>

                    <?php if ($quote_person) : ?>

                        <p class="form-service__quote-author"><?php echo $quote_person; ?></p>

                    <?php endif; ?>

                </div>

            <?php endif; ?>

            <div class="form-service__right">

                <?php if($form_title): ?>

                <h2><?php echo $form_title; ?></h2>

                <?php endif; ?>

                <?php if ($form_id) : ?>

                    <div class="form-service__form">
                         <?php echo gravity_form($form_id, false); ?>
                    </div>

                <?php endif; ?>

            </div>
            <div class="form-service__related">
                <h3><?php esc_html_e('Other Services', 'kernutt'); ?></h3>
                <?php echo $other_services; ?>

                <?php if($other_services_link): ?>

                <a class="see_all" href="<?php echo $other_services_link; ?>"><?php esc_html_e('See all', 'kernutt') ?></a>

                <?php endif; ?>

            </div>
        </div>
    </div>
</section>

<!-- Form Section END -->


<!-- Category Posts -->

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

<!-- Category Posts END -->

<?php

get_footer();
