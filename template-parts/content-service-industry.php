<?php
/*
Template part for content (Services, Industries)
*/

$title = get_the_title();
$image = get_the_post_thumbnail( get_the_ID(), 'large');
?>

<div class="service-industry">
    <div class="service-industry__inner">

        <?php if($image): ?>

        <div class="service-industry__image">
           <a href="<?php the_permalink(); ?>"> <?php echo $image; ?> </a>
        </div>

        <?php endif; ?>

        <?php if($title): ?>

        <h3 class="heading-third"><a href="<?php the_permalink(); ?>"><?php echo $title; ?></a></h3>

        <?php endif; ?>

    </div>
</div>