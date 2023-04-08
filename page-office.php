<?php
/**
 * Template Name: Office
 * Template Post Type: page
 */

get_header();

$left = get_field('left');
$middle = get_field('middle');
$right = get_field('right');
?>

	<div class="container">
		<div id="content-area" class="clearfix">
			<div class="office_location">
			<div class="of_left">
				<?php
					if( $left ):
						while( have_rows('left') ): the_row();
						$o_image = get_sub_field('image'); ?>
						<figure>
							<img src="<?php echo esc_url( $o_image['url'] ); ?>" alt="<?php echo esc_attr( $o_image['alt'] ); ?>" />
						</figure>
						<h1 class="of_name"><?php echo esc_attr( $left['address'] ); ?></h1>
						<a class="of_phone" href="tel:<?php echo $left['phone']; ?>"><?php echo $left['phone']; ?></a>
						<?php $m_image = get_sub_field('maps_image'); ?>
						<a href="<?php echo $left['maps_link']; ?>">
							<figure class="of_map">
								<img src="<?php echo esc_url( $m_image['url'] ); ?>" alt="<?php echo esc_attr( $m_image['alt'] ); ?>" />
							</figure>
						</a>
						<div class="kn_lb_wrap"><a class="et_pb_button" href="<?php echo esc_url( $m_image['url'] ); ?>">Get Directions</a></div>
						<?php endwhile;
					endif;
				?>
			</div>
			<?php if( $middle ):
				while( have_rows('middle') ): the_row(); ?>
				<div class="of_middle">
					<h2 class="tm_subtitle" ><?php the_sub_field('mid_title'); ?></h2>
					<?php
					$mid_images = $middle['mid_image'];
					if( $mid_images ) { ?>
					<div class="of_mid_images">
						<?php foreach( $mid_images as $mid_image ) { ?>
							<figure>
								<img src="<?php echo esc_url( $mid_image['image']['url'] ); ?>" alt="<?php echo esc_attr( $mid_image['image']['alt'] ); ?>" />
							</figure>
						<?php } ?>
						</div>
					<?php } ?>
					<div class="of_main_description">
						<?php echo $middle['main_description']; ?>
					</div>
					<div class="of_lists">
						<?php
						$lists = $middle['list'];
						if( $lists ) {
							foreach( $lists as $list ) {
								$list_title = $list['title'];
								$list_text = $list['content']; ?>
								<div class="of_list">
									<h4 class="of_list_title"><?php echo $list_title; ?></h4>
									<div class="of_list_text"><?php echo $list_text; ?></div>
								</div>
							<?php }
						} ?>
					</div>
					<?php $gallery = $middle['gallery'];
					$size = 'full'; // (thumbnail, medium, large, full or custom size)
					if( $gallery ): ?>
						<h2 class="tm_subtitle" ><?php the_sub_field('gallery_title'); ?></h2>
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
				<?php endwhile; ?>
			<?php endif; ?>
			<?php if( $right ):
				while( have_rows('right') ): the_row();
				$subtitle = get_sub_field('subtitle');
				$team_members = get_sub_field('team_members');
				print_r($offices);
				?>
				<div class="of_right">
				<div class="of_right_inner">
					<?php if($subtitle): ?>
					<h2 class="tm_subtitle">
						<?php echo $subtitle; ?>
					</h2>
					<?php endif; ?>


					<?php
					$team_members = get_sub_field('team_members');
					if( $team_members ): ?>
						<div class="of_members">
						<?php foreach( $team_members as $post ):

							// Setup this post for WP functions (variable must be named $post).
							setup_postdata($post); ?>
							<div class="of_member">
								<?php $team_left = get_field('team_left');
									if( $team_left ) :
										echo '<img src="' . esc_url( $team_left['photo']['url'] ) . '" alt="' . esc_attr( $team_left['photo']['alt'] ) . '" />';
										echo '<h4><a href="' . get_permalink() . '">' . esc_attr( $team_left['name'] ) . '</a><span class="member_position">' . esc_attr( $team_left['member_job_title'] ) . '</span></h4>'; ?>
									<?php endif; ?>
						</div>
						<?php endforeach; ?>
						</div>
						<?php
						// Reset the global post object so that the rest of the page works correctly.
						wp_reset_postdata(); ?>
					<?php endif; ?>


					<?php $mt_link = get_sub_field('meet_the_team_link');
					if( $mt_link ):
						$mt_link_url = $mt_link['url'];
						$mt_link_title = $mt_link['title'];
						$mt_link_target = $mt_link['target'] ? $mt_link['target'] : '_self';
						?>
					<a class="meet_more_team" href="<?php echo esc_url( $mt_link_url ); ?>" target="<?php echo esc_attr( $mt_link_target ); ?>"><?php echo esc_html( $mt_link_title ); ?></a>
				<?php endif; ?>
					<div class="of_lists">
						<?php
						$lists = $right['list_right'];
						if( $lists ) {
							foreach( $lists as $list ) {
								$list_title = $list['title'];
								$list_text = $list['content']; ?>
								<div class="of_list">
									<h4 class="of_list_title"><?php echo $list_title; ?></h4>
									<div class="of_list_text"><?php echo $list_text; ?></div>
								</div>
							<?php }
						} ?>
					</div>

					</div>
				</div>
				<?php endwhile; ?>
			<?php endif; ?>
			</div>
		</div>
	</div>
<?php

get_footer();
