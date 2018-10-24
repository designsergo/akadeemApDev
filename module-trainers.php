<div class="text-center">
	<h2 <?= is_front_page() ? 'class="light"' : ''; ?>><a href="/koolitajad">Koolitajad</a></h2>

	<div class="container-wide trainer-portraits"></div>
	<div class="container-wide light">
		<div class="container text-left <?= is_front_page() ? '' : 'container-left'; ?>">
			<div class="row row-trainers">
				<div class="col-sm-11 col-sm-offset-1 <?= is_front_page() ? 'col-sm-12' : 'col-sm-11 col-sm-offset-1'; ?>">

					<?php
						$posts = get_posts( array( 'post_type' => 'trainer', 'posts_per_page' => 100, 'meta_key' => 'meta_order', 'orderby' => 'meta_value_num', 'order' => 'ASC' ) );

						if ($posts) {
							foreach ($posts as $post) {
								setup_postdata($post);

								?><div><a href="<?= get_permalink(); ?>"><? the_title() ?><span class="ap-icon-arrow-a"></span></a></div><?php
							}
						}

						wp_reset_postdata();
					?>

				</div>
			</div>
		</div>
	</div>
</div>