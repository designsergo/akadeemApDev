<?php get_header(); ?>

<!-- <div class="search-header"><input name="search" type="text" placeholder="Otsi"><span class="ap-icon-search"></span></div> -->

<div class="container container-left">
	<div class="row row-trainers-page antialias">
		<div class="col-sm-11 col-sm-offset-1">
			<h2><?= get_the_title(); ?></h2>

			<?php
				$posts = get_posts( array('post_type' => 'trainer', 'posts_per_page' => 100, 'meta_key' => 'meta_order', 'orderby' => 'meta_value_num', 'order' => 'ASC') );

				if ($posts) {
					foreach ($posts as $post) {
						setup_postdata($post);

						?><a class="trainer" href="<?= get_permalink(); ?>">
								<div class="img" style="background: url(<?= (has_post_thumbnail()) ? the_post_thumbnail_url(array(670,450)) : get_stylesheet_directory_uri().'/img/default-user.png'; ?>) center / cover no-repeat;"></div>
								<p><? the_title() ?></p>
						</a><?php
					}
				}

				wp_reset_postdata();
			?>
		</div>
	</div>
</div>

<?php get_footer(); ?>