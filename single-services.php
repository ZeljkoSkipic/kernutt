<?php

get_header();

$main_text = get_field('main_text');
$related_industries = get_field('related_industries');
$related_industries_link = get_field('related_industries_see_all_link');
$related_industries_description = get_field('related_industries_description');
$other_services = get_field('other_services');
$other_services_description = get_field('other_services_description');
$other_services_link = get_field('other_services_see_all_link');
$title = get_the_title();
$quote = get_field('quote');
$quote_person = get_field('quote_person');

$form_image = get_field('form_image');
$form_description = get_field('form_description');
$form_id = get_field('form_id');
$form_title = get_field('form_title');

?>


<div class="service-hero">
    <?php the_post_thumbnail(); ?>
</div>

<div class="container">
    <?php if ($title) : ?>

        <h1><?php echo $title; ?></h1>

    <?php endif; ?>
    <div class="service-top">
        <div class="service-top__left">
            <?php echo $main_text; ?>
        </div>
        <div class="service-top__right">

            <?php if ($quote) : ?>

                <div class="service-top__quote">
                    <p class="service-top__quote-text">
                        <?php echo $quote; ?>
                    </p>

                    <?php if ($quote_person) : ?>

                        <p class="service-top__quote-author"><?php echo $quote_person; ?></p>

                    <?php endif; ?>

                </div>

            <?php endif; ?>

            <div class="service-top__related-wrapper">
                <div class="service-top__related-left services_industries">
                    <h3> <?php esc_html_e('Related Industries', 'kernutt'); ?></h3>

                    <?php if ($related_industries_description) : ?>

                        <p class="service-top__related-description"><?php echo $related_industries_description; ?></p>

                    <?php endif; ?>

                    <?php echo $related_industries; ?>

                    <?php if($related_industries_link): ?>

                    <a class="see_all" href="<?php echo $related_industries_link; ?>"><?php esc_html_e('See all', 'kernutt') ?></a>

                    <?php endif; ?><br>

                </div>
            </div>
        </div>
    </div>
</div>

<!-- Form Section -->

<section class="form-service">
    <div class="container">
        <div class="form-service__inner">
            <div class="form-service__left">

                <?php if ($form_image) : ?>

                    <div class="form-service__image">
                        <?php echo wp_get_attachment_image($form_image, 'full'); ?>
                    </div>

                <?php endif; ?>

                <?php if ($form_description) : ?>

                    <div class="form-service__description"><?php echo $form_description; ?></div>

                <?php endif; ?>

            </div>
            <div class="form-service__mid">

                <?php if ($form_id) : ?>

                    <div class="inner_form">

                        <?php if($form_title): ?>

                        <h2><?php echo $form_title; ?></h2>

                        <?php endif; ?>

                        <?php echo gravity_form($form_id, false); ?>
                    </div>

                <?php endif; ?>

            </div>
			<div class="form-service__right services_industries">
				<h3><?php esc_html_e('Other Services', 'kernutt'); ?></h3>
				<?php if ($other_services_description) : ?>

				<p class="form-service__right__other-description"><?php echo $other_services_description; ?></p>

				<?php endif; ?>
				<?php echo $other_services; ?>

				<?php if($other_services_link): ?>

				<a class="see_all" href="<?php echo $other_services_link; ?>"><?php esc_html_e('See all', 'kernutt') ?></a>

				<?php endif; ?>

			</div>
        </div>
    </div>
</section>

<!-- Form Section END -->


<!-- Category Posts -->

<?php get_template_part('template-parts/category', 'posts'); ?>

<!-- Category Posts END -->

<?php

get_footer();
