<?php
$related_posts_title = get_field('related_posts_title');

$posts_category = get_field('posts_category');

$recent_posts = new WP_Query ([
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


if ($recent_posts->posts) : ?>

	<div class="posts_grid">
		<h2 class="kn_inner_title"><?php echo $related_posts_title; ?></h2>
		<div class="posts_grid_inner">

			<?php
			foreach ($recent_posts->posts as $recent_post) :
				global $post;
				$post = $recent_post;
				setup_postdata($post);
				get_template_part('template-parts/content', 'recent-post');

			endforeach;
			wp_reset_postdata();
			?>

		</div>
		<?php if ($recent_posts->max_num_pages > 1) : ?>

			<div class="load_more_container">
				<a data-total="<?php echo $recent_posts->found_posts; ?>" data-category="<?php echo $posts_category ? $posts_category : ""; ?>" class="author-posts-load-more et_pb_button" href="#"><?php esc_html_e('Load More', 'kernutt'); ?></a>
			</div>

		<?php endif; ?>
	</div>

<?php endif; ?>
