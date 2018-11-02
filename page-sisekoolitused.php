<?php get_header(); ?>

<!-- <div class="search-header"><input name="search" type="text" placeholder="Otsi"><span class="ap-icon-search"></span></div> -->

<div class="container-fluid">
	<div class="row row-about row-internal-schooling antialias">
		<div class="bg">
			<div class="bg-gradient">
				<!-- <div class="title">
					<h3><?= get_post_meta(get_the_ID(), 'meta_subtitle', true) ?></h3>
					<h2><?= get_the_title(); ?></h2>
				</div> -->
			</div>
		</div>
	</div>
</div>

<div class="container container-left">
	<div class="row row-text row-internal-schooling antialias">
		<div class="col-sm-10 col-lg-9 col-sm-offset-1">
		    <h3><?= get_post_meta(get_the_ID(), 'meta_subtitle', true) ?></h3>
			<h2><?= get_the_title(); ?></h2>
			<br/>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; ?>
		</div>
	</div>
</div>

<?php
//get_template_part( 'module', 'trainers' ); 
?>

<?php get_footer(); ?>
