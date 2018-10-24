<?php
	get_header();
?>


<div class="container-fluid">
	<div class="row row-about row-internal-schooling antialias">
		<div class="bg">
			<div class="bg-gradient">
				<div class="title">
					<h2>Sisekoolitused</h2>
					<h3>Koolitused firmasisese grupikoolitusena ehk sisekoolitusena.</h3>
				</div>
				<img class="bg-logo hidden-xs" src="<?= get_stylesheet_directory_uri(); ?>/img/logo-akadeemia-a.svg" alt="Äripäeva Akadeemia">
				<div class="bg-logo-text hidden-xs"></div>
			</div>
		</div>
	</div>
</div>

<div class="container container-left">
	<div class="row row-text row-internal-schooling antialias row-first">
		<div class="col-sm-10 col-lg-11 col-sm-offset-1">
			<?php while ( have_posts() ) : the_post(); ?>
				<div class="schooling-intro">
					<h2><? the_title(); ?></h2>
					<?php the_post_thumbnail(); ?>
					<?php the_content(); ?>

				</div>


				<?php $posts = get_field("trainers"); ?>



				<?php if( $posts ): ?>
					<?php $i = 0; ?>
					<?php foreach( $posts as $post): ?>
						<?php 
							setup_postdata($post); 
							$i++; 
						?>
		</div>
	</div>
</div>

<div class="container container-wide container-trainers <?php if($i == 1): ?>first<?php endif; ?>">
	<div class="row">
		<div class="container container-left">
			<div class="row row-text row-internal-schooling antialias">
				<div class="col-sm-10 col-lg-10 col-sm-offset-1">
					<?php if($i == 1): ?>
						<h2>Koolitajad</h2>
					<?php endif; ?>

					<div class="schooling-trainers row">
						<div class="col-sm-5 col-sm-push-7">
							<div class="square-wrap">
								<?php the_post_thumbnail(); ?>
							</div>
						</div>
						<div class="col-sm-7 col-sm-pull-5">
							<h3><?php echo the_title(); ?></h3>
							<div class="title"><?php echo get_post_meta( get_the_ID(), 'meta_title', true ) ?></div>
							<?php 
								$html = get_the_content();
								$html = preg_replace('~https?:\/\/(?:www\.)?vimeo\.com\/.*?\/?(\d+)~i', '', $html);
								echo apply_filters('the_content', $html);
							?>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>
					<?php endforeach; ?>

<div class="container container-left">
	<div class="row row-text row-internal-schooling antialias">
		<div class="col-sm-10 col-lg-11 col-sm-offset-1">
					<?php wp_reset_postdata(); ?>
				<?php endif; ?>



				<?php if(get_field('additional_info')): ?>
					<div class="schooling-additional">
						<h2>Lisainfo</h2>
						<?php the_field("additional_info"); ?>
					</div>
				<?php endif; ?>			

			<?php endwhile; ?>
		</div>
	</div>
</div>

<?php get_template_part( 'module', 'trainers' ); ?>
<?php get_footer(); ?>