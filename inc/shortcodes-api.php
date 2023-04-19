<?php
function spotlights() {

    ob_start();
        get_template_part('template-parts/spotlights');

    $content = ob_get_clean();

	return $content;
}
add_shortcode( 'spotlights_slider', 'spotlights' );
