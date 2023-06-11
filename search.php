<?php get_header(); ?>

<?php
$s=get_search_query();
$args = array(
	's' =>$s
);
    // The Query
$the_query = new WP_Query( $args );
if ( $the_query->have_posts() ) { ?>
	<div class="posts_grid">
		<h1 class="kn_inner_title">Search results for: <em><?php echo $s; ?></em></h1>
		<?php
		$team_left = get_field('team_left');
		$size = 'full';
		?>
		<div class="posts_grid_inner">
        <?php while ( $the_query->have_posts() ) {
           $the_query->the_post();
			?>
			<div class="posts_grid_item">
				<a href="<?php the_permalink(); ?>">
				<div class="pg-image">
					<?php
					if ( get_post_type( get_the_ID() ) == 'team' ) { ?>
						<img src="<?php echo esc_url( $team_left['photo']['url'] ); ?>" alt="<?php echo esc_attr( $team_left['photo']['alt'] ); ?>" />
					<?php } else {
						the_post_thumbnail();
					} ?>
				</div>
				<h4 class="heading-secondary">
					<?php the_title(); ?>
				</h4>
				</a>
				<div class="entry-content">
					<?php the_excerpt(); ?>
				</div>
			</div>
			<?php
        } ?>
		</div>
	</div>
    <?php } else{ ?>
		<div class="container">
			No Results
		</div>
<?php } ?>

<?php get_footer(); ?>
