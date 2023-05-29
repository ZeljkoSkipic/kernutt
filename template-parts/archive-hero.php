<?php
/*
Template part for archive pages (Services, Industries)
*/

if (is_post_type_archive('industry')) {
    $title = get_field('industry_archive_title', 'option');
    $description = get_field('industry_archive_description', 'option');
    $image = get_field('industry_archive_image', 'option');
}

else if(is_post_type_archive('services')) {
    $title = get_field('service_archive_title', 'option');
    $description = get_field('service_archive_description', 'option');
    $image = get_field('service_archive_image', 'option');
}

else if(is_post_type_archive('team')) {
    $title = get_field('team_archive_title', 'option');
    $description = get_field('team_archive_description', 'option');
    $image = get_field('team_archive_image', 'option');
}

?>

<section class="archive-hero">
    <div class="archive-hero__inner">
        <div class="archive-hero__left">

            <?php if ($title) : ?>

                <h1 class="heading-primary"><?php echo $title; ?></h1>

            <?php endif; ?>

            <?php if ($description) : ?>

                <div class="archive-hero__description">
                    <?php echo $description; ?>
                </div>

            <?php endif; ?>

        </div>
        <div class="archive-hero__right">

            <?php if ($image) : ?>

                <div class="archive-hero__image">
                    <?php echo wp_get_attachment_image($image, 'full'); ?>
                </div>

            <?php endif; ?>

        </div>
    </div>
</section>
