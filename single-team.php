<?php

get_header();

$team_left = get_field('team_left');
$team_middle = get_field('team_middle');
$team_right = get_field('team_right');
$related_resources = get_field('related_resources');
$selected_user = get_field('select_user');

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

	<div class="container">
		<div id="content-area" class="clearfix">
			<div class="team_member">
			<?php if( $team_left ) : ?>
			<div class="tm_left">
			<figure>
			<img src="<?php echo esc_url( $team_left['photo']['url'] ); ?>" alt="<?php echo esc_attr( $team_left['photo']['alt'] ); ?>" />
			<img class="secondary_img" src="<?php echo esc_url( $team_left['secondary_photo']['url'] ); ?>" alt="<?php echo esc_attr( $team_left['secondary_photo']['alt'] ); ?>" />
			</figure>
				<h1 class="tm_name"><?php echo esc_attr( $team_left['name'] ); ?></h1>
				<h2 class="tm_job_title"><?php echo esc_attr( $team_left['member_job_title'] ); ?></h2>
				<a class="tm_phone" href="tel:<?php echo $team_left['phone']; ?>"><?php echo $team_left['phone']; ?></a>
				<a class="tm_mail" href="mail:to:<?php echo esc_attr( $team_left['email'] ); ?>"><?php echo esc_attr( $team_left['email'] ); ?></a>
				<div class="tm_education">
					<?php if($team_left['address']) : ?>
						<span class="school"><?php echo $team_left['address']; ?></span>
					<?php endif; ?>
					<span><?php echo $team_left['degree']; ?></span>
				</div>

				<div class="tm_education">
					<?php if($team_left['school']) : ?>
						<span class="school"><?php echo $team_left['school']; ?></span>
					<?php endif; ?>
					<span><?php echo $team_left['degree2']; ?></span>
				</div>

				<div class="tm_education">
					<?php if($team_left['school3']) : ?>
						<span class="school"><?php echo $team_left['school3']; ?></span>
					<?php endif; ?>
					<span><?php echo $team_left['degree3']; ?></span>
				</div>

				<blockquote><?php echo $team_left['quote']; ?></blockquote>
				<span class="tm_qp"><?php echo $team_left['quote_person']; ?></span>
			</div>
			<?php endif; ?>
			<?php if( $team_middle ) : ?>
			<div class="tm_middle">
				<div class="tm_description"><?php echo $team_middle['description']; ?></div>
				<?php
				$info_boxes = $team_middle['info_box'];
				if( $info_boxes ) {
					foreach( $info_boxes as $info_box ) {
						$title = $info_box['title'];
						$text = $info_box['textic']; ?>
						<div class="tm_info_box">
							<h2 class="tm_subtitle"><?php echo $title; ?></h2>
							<?php
							$ib_gallery = $info_box['ib_gallery'];
							$size = 'full'; // (thumbnail, medium, large, full or custom size)
							if( $ib_gallery ): ?>
								<div class="tm_gallery">
									<?php foreach( $ib_gallery as $ib_image_row ):

										$ib_image = $ib_image_row['image'];
										$ib_link = $ib_image_row['image_link'];
										?>
										<figure>
										<?php if( $ib_link ): ?>
											<a href="<?php echo esc_url( $ib_link ); ?>">
										<?php endif; ?>
											<?php if( $ib_image ) {
												echo wp_get_attachment_image( $ib_image, $size );
											}?>
											<?php if( $ib_link ): ?>
												</a>
											<?php endif; ?>
										</figure>
									<?php endforeach; ?>
									</div>
							<?php endif; ?>
							<div class="tm_subtext"><?php echo $text; ?></div>
						</div>
					<?php }
				}
				$gallery = $team_middle['gallery'];
				$size = 'full'; // (thumbnail, medium, large, full or custom size)
				if( $gallery ): ?>
					<div class="tm_gallery">
						<?php foreach( $gallery as $image_row ):

							$image = $image_row['image'];
							$link = $image_row['image_link'];
							?>
							<figure>
							<?php if( $link ): ?>
								<a href="<?php echo esc_url( $link ); ?>">
							<?php endif; ?>
								<?php if( $image ) {
									echo wp_get_attachment_image( $image, $size );
								}?>
								<?php if( $link ): ?>
									</a>
								<?php endif; ?>
							</figure>
						<?php endforeach; ?>
						</div>
				<?php endif; ?>
			</div>
			<?php endif; ?>
			<?php if( $team_right ) : ?>
			<div class="tm_right">
				<?php $lists = $team_right['list'];
				if( $lists ) {
					foreach( $lists as $list ) {
						$list_title = $list['list_title'];
						$list_text = $list['item']; ?>
						<h4 class="tm_list_title"><?php echo $list_title; ?></h4>
						<div class="tm_list_text"><?php echo $list_text; ?></div>
					<?php }
				} ?>
			</div>
			<?php endif; ?>
			</div>
		</div>
	</div>

<!-- Recent Posts By Author -->

<?php if (isset($author_posts) && $author_posts) : ?>

<div class="posts_grid">
	<h2 class="team_related_posts"><?php echo $related_resources ?></h2>

		<div class="posts_grid_inner">

				<?php foreach ($author_posts->posts as $author_post) {
					global $post;
					$post = $author_post;
					setup_postdata($post);
					get_template_part('template-parts/author', 'posts');
				}

				wp_reset_postdata();
				?>

			<?php if ($author_posts->max_num_pages > 1) : ?>

				<div class="load_more_container">
				<a data-total="<?php echo $author_posts->found_posts; ?>" data-user="<?php echo $selected_user['ID']; ?>" class="author-posts-load-more et_pb_button" href="#"><?php esc_html_e('Load More', 'kernutt'); ?></a>
				</div>

			<?php endif; ?>

		</div>
</div>

<?php endif; ?>

<!-- Recent Posts By Author END -->

<?php

get_footer();
