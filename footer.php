<?php
if ( et_theme_builder_overrides_layout( ET_THEME_BUILDER_HEADER_LAYOUT_POST_TYPE ) || et_theme_builder_overrides_layout( ET_THEME_BUILDER_FOOTER_LAYOUT_POST_TYPE ) ) {
    // Skip rendering anything as this partial is being buffered anyway.
    // In addition, avoids get_sidebar() issues since that uses
    // locate_template() with require_once.
    return;
}

/**
 * Fires after the main content, before the footer is output.
 *
 * @since 3.10
 */
do_action( 'et_after_main_content' );

if ( 'on' === et_get_option( 'divi_back_to_top', 'false' ) ) : ?>

	<span class="et_pb_scroll_top et-pb-icon"></span>

<?php endif;

if ( ! is_page_template( 'page-template-blank.php' ) ) : ?>

			<footer id="main-footer">
			<div class="container">
				<div id="footer-widgets">
					<div class="ks_footer_widget_1">
						<?php dynamic_sidebar( 'sidebar-2' ); ?>
					</div>
					<div class="ks_footer_widget_2">
						<?php dynamic_sidebar( 'sidebar-3' ); ?>
					</div>
					<div class="ks_footer_widget_3">
						<?php dynamic_sidebar( 'sidebar-4' ); ?>
					</div>
					<div class="ks_footer_widget_4">
						<?php dynamic_sidebar( 'sidebar-5' ); ?>
					</div>
					<div class="ks_footer_widget_5">
						<?php dynamic_sidebar( 'sidebar-6' ); ?>
					</div>
				</div>
			</div>


		<?php
			if ( has_nav_menu( 'footer-menu' ) ) : ?>

				<div id="et-footer-nav">
					<div class="container">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'footer-menu',
								'depth'          => '1',
								'menu_class'     => 'bottom-nav',
								'container'      => '',
								'fallback_cb'    => '',
							) );
						?>
					</div>
				</div>

			<?php endif; ?>

				<div id="footer-bottom">
					<div class="container clearfix">
				<?php
					if ( false !== et_get_option( 'show_footer_social_icons', true ) ) {
						get_template_part( 'includes/social_icons', 'footer' );
					}

					// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
					echo et_core_fix_unclosed_html_tags( et_core_esc_previously( et_get_footer_credits() ) );
					// phpcs:enable
				?>
					</div>
				</div>
			</footer>
		</div>

<?php endif; // ! is_page_template( 'page-template-blank.php' ) ?>

	</div>

	<?php if(is_home()): ?>

	<div class="filter_loader disabled">
		<span class="loader"></span>
	</div>

	<?php endif; ?>

	<?php wp_footer(); ?>
	<div style="display: none;" class="menu-item-popup-notice">
    <div class="menu-item-popup-notice__inner">
      <span class="menu-item-popup-notice__close">&#10005;</span>
      <div class="menu-item-popup-notice__icon">
		<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D9BB20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
		</div>
	  <p class="menu-item-popup-notice__mess kn_inner_title"><?php the_field('popup_title', 'option'); ?></p>
      <p class="menu-item-popup-notice__description"><?php the_field('popup_text', 'option'); ?></p>
      <div class="menu-item-popup-notice__buttons">
	  	<a target="_blank" class="menu-item-popup-notice__continue" href="#"><?php the_field('btn_1_text', 'option'); ?></a>
        <a class="menu-item-popup-notice__stay" href="#"><?php the_field('btn_2_text', 'option'); ?></a>
      </div>
    </div>
  </div>
</body>
</html>
