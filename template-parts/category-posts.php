<?php
$related_posts_title = get_field('related_posts_title');

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


if ($recent_posts) : ?>

<div class="posts_grid">
	<h2 class="kn_inner_title"><?php echo $related_posts_title; ?></h2>
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
