<?php
get_header();

// Partners

$partners = get_posts([
    'post_type'         => 'team',
    'posts_per_page'    => -1,
    'tax_query' => array(
        array(
            'taxonomy' => 'roles',
            'field'    => 'term_id',
            'terms'    => [155]
        ),
    ),
]);

// Directors

$directors = get_posts([
    'post_type'         => 'team',
    'posts_per_page'    => -1,
    'tax_query' => array(
        array(
            'taxonomy' => 'roles',
            'field'    => 'term_id',
            'terms'    => [156]
        ),
    ),
]);

// Senior Managers and managers

$senior_managers = get_posts([
    'post_type'         => 'team',
    'posts_per_page'    => -1,
    'tax_query' => array(
        array(
            'taxonomy' => 'roles',
            'field'    => 'term_id',
            'terms'    => [157]
        ),
    ),
]);

$managers = get_posts([
    'post_type'         => 'team',
    'posts_per_page'    => -1,
    'tax_query' => array(
        array(
            'taxonomy' => 'roles',
            'field'    => 'term_id',
            'terms'    => [158]
        ),
    ),
]);


// Internal team

$internal_team_members = get_posts([
    'post_type'         => 'team',
    'posts_per_page'    => -1,
    'tax_query' => array(
        array(
            'taxonomy' => 'roles',
            'field'    => 'term_id',
            'terms'    => [162]
        ),
    ),
]);

?>

 <!-- Hero -->
 <?php get_template_part('template-parts/archive', 'hero'); ?>
 <!-- END -->

<div class="team_archive">
    <div class="team_archive_members">
        <div class="team_archive_intro">
            <?php the_field('team_archive_description', 'option'); ?>
        </div>
        <div class="team_archive_items">

            <?php
            if ($partners) :

            ?>
                <div class="team_archive_item">
                    <h2 class="team_role"><?php esc_html_e('Partners', 'kernutt'); ?></h2>
                    <div class="team_archive_grid">
                        <?php
                        foreach ($partners as $partner) :
                            global $post;
                            $post = $partner;
                            setup_postdata($post);
                            $team_left = get_field('team_left', get_the_ID());

                        ?>

                            <div class="team_member">
                                <a href="<?php the_permalink(); ?>">
                                    <figure>
                                        <img src="<?php echo esc_url($team_left['photo']['url']); ?>" alt="<?php echo esc_attr($team_left['photo']['alt']); ?>" />
                                        <img class="secondary_img" src="<?php echo esc_url($team_left['secondary_photo']['url']); ?>" alt="<?php echo esc_attr($team_left['secondary_photo']['alt']); ?>" />
                                    </figure>
                                </a>
                                <h2 class="team_name"><a href="<?php the_permalink(); ?>"><?php echo $team_left['name']; ?></a></h2>
                                <h4 class="team_position"><?php echo $team_left['member_job_title']; ?></h4>
                            </div>

                        <?php
                        endforeach;
                        wp_reset_postdata();
                        ?>

                    </div>
                </div>

            <?php

            endif;
            ?>
            <?php
            if ($directors) :

            ?>
                <div class="team_archive_item">
                    <h2 class="team_role"><?php esc_html_e('Directors', 'kernutt'); ?></h2>
                    <div class="team_archive_grid">
                        <?php
                        foreach ($directors as $director) :
                            global $post;
                            $post = $director;
                            setup_postdata($post);
                            $team_left = get_field('team_left', get_the_ID());

                        ?>

                            <div class="team_member">
                                <a href="<?php the_permalink(); ?>">
                                    <figure>
                                        <img src="<?php echo esc_url($team_left['photo']['url']); ?>" alt="<?php echo esc_attr($team_left['photo']['alt']); ?>" />
                                        <img class="secondary_img" src="<?php echo esc_url($team_left['secondary_photo']['url']); ?>" alt="<?php echo esc_attr($team_left['secondary_photo']['alt']); ?>" />
                                    </figure>
                                </a>
                                <h2 class="team_name"><a href="<?php the_permalink(); ?>"><?php echo $team_left['name']; ?></a></h2>
                                <h4 class="team_position"><?php echo $team_left['member_job_title']; ?></h4>
                            </div>

                        <?php
                        endforeach;
                        wp_reset_postdata();
                        ?>

                    </div>
                </div>

            <?php

            endif;
            ?>

            <?php if ($senior_managers || $managers) : ?>

                <div class="team_archive_items_wrapper">
                    <?php
                    if ($senior_managers) :

                    ?>
                        <div class="team_archive_item">
							<div class="team_header_grid">
								<div class="team_archive_header">
									<h2 class="team_role"><?php esc_html_e('Senior Manager', 'kernutt'); ?></h2>
								</div>
								<div class="team_archive_header desktop_role">
									<h2 class="team_role"><?php esc_html_e('Managers', 'kernutt'); ?></h2>
								</div>
							</div>
                            <div class="team_archive_grid">
                                <?php
                                foreach ($senior_managers as $senior_manager) :
                                    global $post;
                                    $post = $senior_manager;
                                    setup_postdata($post);
                                    $team_left = get_field('team_left', get_the_ID());

                                ?>

                                    <div class="team_member">
                                        <a href="<?php the_permalink(); ?>">
                                            <figure>
                                                <img src="<?php echo esc_url($team_left['photo']['url']); ?>" alt="<?php echo esc_attr($team_left['photo']['alt']); ?>" />
                                                <img class="secondary_img" src="<?php echo esc_url($team_left['secondary_photo']['url']); ?>" alt="<?php echo esc_attr($team_left['secondary_photo']['alt']); ?>" />
                                            </figure>
                                        </a>
                                        <h2 class="team_name"><a href="<?php the_permalink(); ?>"><?php echo $team_left['name']; ?></a></h2>
                                        <h4 class="team_position"><?php echo $team_left['member_job_title']; ?></h4>
                                    </div>

                                <?php
                                endforeach;
                                wp_reset_postdata();
                                ?>


                    <?php

                    endif;
                    ?>

                    <?php
                    if ($managers) :

                    ?>
								<div class="team_archive_header mobile_role">
									<h2 class="team_role"><?php esc_html_e('Managers', 'kernutt'); ?></h2>
								</div>
                                <?php
                                foreach ($managers as $manager) :
                                    global $post;
                                    $post = $manager;
                                    setup_postdata($post);
                                    $team_left = get_field('team_left', get_the_ID());

                                ?>

                                    <div class="team_member manager_member">
                                        <a href="<?php the_permalink(); ?>">
                                            <figure>
                                                <img src="<?php echo esc_url($team_left['photo']['url']); ?>" alt="<?php echo esc_attr($team_left['photo']['alt']); ?>" />
                                                <img class="secondary_img" src="<?php echo esc_url($team_left['secondary_photo']['url']); ?>" alt="<?php echo esc_attr($team_left['secondary_photo']['alt']); ?>" />
                                            </figure>
                                        </a>
                                        <h2 class="team_name"><a href="<?php the_permalink(); ?>"><?php echo $team_left['name']; ?></a></h2>
                                        <h4 class="team_position"><?php echo $team_left['member_job_title']; ?></h4>
                                    </div>

                                <?php
                                endforeach;
                                wp_reset_postdata();
                                ?>

                            </div>
                        </div>

                    <?php

                    endif;
                    ?>
                </div>

            <?php endif; ?>

            <?php
            if ($internal_team_members) :

            ?>
                <div class="team_archive_item">
                    <h2 class="team_role"><?php esc_html_e('Internal Team', 'kernutt'); ?></h2>
                    <div class="team_archive_grid">
                        <?php
                        foreach ($internal_team_members as $internal_team_member) :
                            global $post;
                            $post =  $internal_team_member;
                            setup_postdata($post);
                            $team_left = get_field('team_left', get_the_ID());

                        ?>

                            <div class="team_member">
                                <a href="<?php the_permalink(); ?>">
                                    <figure>
                                        <img src="<?php echo esc_url($team_left['photo']['url']); ?>" alt="<?php echo esc_attr($team_left['photo']['alt']); ?>" />
                                        <img class="secondary_img" src="<?php echo esc_url($team_left['secondary_photo']['url']); ?>" alt="<?php echo esc_attr($team_left['secondary_photo']['alt']); ?>" />
                                    </figure>
                                </a>
                                <h2 class="team_name"><a href="<?php the_permalink(); ?>"><?php echo $team_left['name']; ?></a></h2>
                                <h4 class="team_position"><?php echo $team_left['member_job_title']; ?></h4>
                            </div>

                        <?php
                        endforeach;
                        wp_reset_postdata();
                        ?>

                    </div>
                </div>

            <?php

            endif;
            ?>

        </div>
    </div>
</div>

<?php

get_footer();
