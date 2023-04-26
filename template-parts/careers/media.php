<?php

$title = get_sub_field('title');
$text = get_sub_field('text');
$button = get_sub_field('button');

$image = get_sub_field('image');
$size = 'full';
$video_embed = get_sub_field('video_embed');

$order = get_sub_field_object('content_order');
$background = get_sub_field('background');
$color = get_sub_field('text_color');
?>

<div class="career_media <?php echo $order['value']; ?>" style="background-color: <?php echo $background; ?>">
	<div class="career_container">
		<div class="career_media_col1">
			<?php if( get_sub_field('media_type') == 'media_image' ) {
				if( $image ) {
					echo wp_get_attachment_image( $image, $size, "", array( "class" => "image" ) );
				}
			}	?>
				<?php if( get_sub_field('media_type') == 'video_embed' ) { ?>
					<div class="video_wrap">
						<?php echo $video_embed; ?>
					</div>
				<?php } ?>

		</div>
		<div class="career_media_col2">
			<h2 class="font-a" style="color: <?php echo $color; ?>"><?php echo $title; ?></h2>
			<div class="font-c" style="color: <?php echo $color; ?>"><?php echo $text; ?></div>
			<?php
			if( $button ):
				$link_url = $button['url'];
				$link_title = $button['title'];
				$link_target = $button['target'] ? $button['target'] : '_self';
				?>
				<a class="kn_btn" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>
			<?php endif; ?>
		</div>
	</div>
</div>
