<?php

/*
Template Name: Basic
Template Post Type: post
*/


get_header(); ?>

<div id="main-content">
	<div class="container clearfix">
		<div class="empty"></div>
		<div id="left-area">
			<h1><?php the_title(); ?></h1>

			<?php
			$contributors = get_field('contributors');
			if( $contributors ): ?>
				<span>By</span>
				<?php foreach( $contributors as $contributor ):
					$permalink = get_permalink( $contributor->ID );
					$title = get_the_title( $contributor->ID );
					$member_job_title = get_field( 'member_job_title', $contributor->ID );
					$terms = get_the_terms( $contributor->ID, 'roles' );
					?>
						<span class="ks_sp_author"><a href="<?php echo esc_url( $permalink ); ?>"><?php echo esc_html( $title ); ?></a>,
						<?php echo esc_html( $member_job_title ); ?>
						<?php foreach ( $terms as $term ) {
							echo $term->name;
						} ?></span>
				<?php endforeach; ?>
			<?php endif; ?>

			<div class="kn_sp_content">
				<?php the_content(); ?>
			</div>
		</div>

		<?php get_sidebar(); ?>
	</div>
</div>

<?php

get_footer();
