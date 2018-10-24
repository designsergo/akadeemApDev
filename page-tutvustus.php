<?php get_header(); ?>

<!-- <div class="search-header"><input name="search" type="text" placeholder="Otsi"><span class="ap-icon-search"></span></div> -->

<div class="container-fluid">
	<div class="row row-about antialias">
		<div class="bg">
			<div class="bg-gradient">
				<!--<div class="title">
					<h2><?= get_the_title(); ?></h2>
					<h3><?= get_post_meta(get_the_ID(), 'meta_subtitle', true) ?></h3>
				</div>
				<img class="bg-logo hidden-xs" src="<?= get_stylesheet_directory_uri(); ?>/img/logo-akadeemia-a.svg" alt="Äripäeva Akadeemia">
				<div class="bg-logo-text hidden-xs"></div>
			</div>-->
		</div>
	</div>
</div>



<div class="container container-left">
	<div class="row row-text antialias">
		<div class="col-sm-10 col-lg-9 col-sm-offset-1">
			<h2><p><?= get_post_meta(get_the_ID(), 'meta_subtitle', true) ?></p></h2>
			<BR>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; ?>
		</div>
	</div>
</div>

<?php //get_template_part( 'module', 'trainers' );
?>

<?php get_footer(); ?>
