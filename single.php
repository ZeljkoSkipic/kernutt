<?php get_header(); ?>

<div id="main-content">
	<div class="container clearfix">
		<div id="left-area">
			<h1><?php the_title(); ?></h1>
			<span class="ks_sp_author">By <?php echo get_the_author_meta('display_name'); ?></span>
			<div class="kn_sp_content">
				<?php the_content(); ?>
			</div>
		</div>

		<?php get_sidebar(); ?>
	</div>
</div>

<?php

get_footer();
