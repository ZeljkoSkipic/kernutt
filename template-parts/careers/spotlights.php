<?php
$spotlight = get_sub_field( 'select_spotlight' );
?>

<?php
$spotlights = get_field( $spotlight , 'option');
if (!$spotlights) return;

?>
<div class="career_container spotlights_container">
<h2 class="font-a"><?php the_sub_field('title'); ?></h2>
<section class="spotlights">
    <div class="spotlights__slider">

        <?php
        foreach ($spotlights as $id => $spotlight) :
            $image = get_the_post_thumbnail($spotlight, 'large');
            $popup_image = get_field('spotlight_popup', $spotlight);
            $popup_youtube = get_field('spotlight_video', $spotlight, false);
            $image_video = get_field('image_video', $spotlight);
        ?>
            <div class="spotlights__item carousel-cell">

                <?php if ($image_video === true && $popup_image) : ?>

                    <a data-fancybox href="<?php echo wp_get_attachment_url($popup_image, 'full'); ?>"><?php echo $image ?> </a>

                <?php
                elseif ($popup_youtube) :

                ?>
                    <a data-fancybox class="various fancybox" data-fancybox-type="iframe" href="<?php echo $popup_youtube; ?>"><?php echo $image; ?></a>

                <?php else : echo $image; ?>

                <?php endif; ?>

            </div>

        <?php
        endforeach;
        ?>

    </div>
</section>
</div>
