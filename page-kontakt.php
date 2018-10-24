<?php

get_header();
$themeUri = get_stylesheet_directory_uri();

?>

<!-- <div class="search-header"><input name="search" type="text" placeholder="Otsi"><span class="ap-icon-search"></span></div> -->

<div class="container container-left">
	<div class="row row-contact-page antialias">
		<div class="col-sm-11 col-sm-offset-1">
			<h2><?= get_the_title(); ?></h2>

			<?php
				$posts = get_posts( array( 'post_type' => 'contact', 'posts_per_page' => 100, 'meta_key' => 'meta_order', 'orderby' => 'meta_value_num', 'order' => 'ASC' ) );

				if ($posts) {
					foreach ($posts as $post) {
						setup_postdata($post);

						?><div class="contact">
								<div class="img" style="background: url(<?= (has_post_thumbnail()) ? the_post_thumbnail_url(array(260,260)) : get_stylesheet_directory_uri().'/img/default-user.png'; ?>) center / cover no-repeat;"></div>
								<dir class="contact-container">
									<p class="name"><? the_title() ?></p>
									<p class="title"><?= get_post_meta( get_the_ID(), 'meta_title', true ) ?></p>
									<p class="telephone"><span>tel:</span> <?= get_post_meta( get_the_ID(), 'meta_phone', true ) ?></span></p>
									<p class="email"><span>e-post:</span> <a href="mailto:<?= get_post_meta( get_the_ID(), 'meta_email', true ) ?>"><?= get_post_meta( get_the_ID(), 'meta_email', true ) ?></a></p>
								</dir>
						</div><?php
					}
				}

				wp_reset_postdata();
			?>
		</div>
	</div>
</div>

<?php get_footer(); ?>
