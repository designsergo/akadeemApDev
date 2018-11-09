<?php get_header(); ?>

<!-- <div class="search-header"><input name="search" type="text" placeholder="Otsi"><span class="ap-icon-search"></span></div> -->
<!--<img class="bg-logo hidden-xs" src="<?= get_stylesheet_directory_uri(); ?>/img/logo-akadeemia-a.svg" alt="Äripäeva Akadeemia">-->


<div class="container">
	<div class="row row-intro antialias">
		<div class="col-md-11 col-lg-10 col-sm-offset-1">
			<?php
				$pages = get_pages( array('include' => '2') ); // include eq page id (dev=2,live=5)

				foreach ($pages as $page) {
					setup_postdata( $page );

					echo '<h2>'.get_the_title().'</h2>';
					echo '<p>'.get_the_content().'</p>';
				}

				wp_reset_postdata();
			?>
			<!--<a href="/tutvustus">Loe edasi<span class="ap-icon-arrow-a"></span></a>-->
		</div>
	</div>

	<div class="row antialias">
		<div class="col-md-11 col-lg-10 col-sm-offset-1 site-search-holder">
				
			<div class="input-group">
			<input type="search" id="site-search" name="site-search" class="site-search"
               placeholder="Otsi koolitusi, koolitajaid või koolitusteemasid"
			   aria-label="Otsi koolitusi, koolitajaid või koolitusteemasid"
			   onkeyup="searchTrainingsArray()">
				<div class="input-group-addon"><span class="btn-site-search-span"></span></div>
			</div>
				
				<!--<input type="submit" class="btn-site-search" value="Otsi">-->
				
				
			<div class="site-search-category_holder" id="site-search-category_holder">
				<select name="site-search-category" class="site-search-category" id="site-search-category">
					<option value="-">Vali kategooria</option>
				</select>
			</div>
			<div class="site-search-date_holder" id="site-search-date_holder">
				<input type="text" name="daterange" class="site-search-date"
					id="site-search-date" value="" placeholder="Vali ajavahemik" readonly />
				<span class="site-search-date_delete displayHider ap-icon-delete" id="site-search-date_delete"></span>
			</div>

			<div class='number-of-trainings_holder displayHider' id ='number-of-trainings_holder' ></div>

		</div>
	</div>

	<div class="row row-table" id="trainings-table">
		<div class="col-md-11 col-lg-10 col-sm-offset-1">
			<div class="table-header">
				<div class="table-cell date asc active ">Kuupäev <span class="ap-table-order"></span></div>
				<div class="table-cell title asc">Tutvustus <span class="ap-table-order"></span></div>
				<div class="table-cell duration asc hidden-xs">Kestus <!--<span class="ap-table-order"></span>--></div>
				<div class="table-cell trainer asc hidden-xs">Koolitaja <span class="ap-table-order"></span></div>
				<div class="table-cell more hidden-xs"></div>
			</div>

			<div class="loading"><div class="spinner"></div></div>

			<div class="items">
				<div class="table-row placeholder">
					<a href="#">
						<div class="table-cell date"><span>00.00.0000</span></div>
						<div class="table-cell title"><h3>Lorem ifsum dolor sit amet!</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales felis tortor, vel semper enim cursus sed. Nam dictum quis mauris vel iaculis.</p></div>
						<div class="table-cell duration hidden-xs"><span>Lorem</span></div>
						<div class="table-cell trainer hidden-xs"><span>Lorem Ipsum</span></div>
						<div class="table-cell more"><span class="text hidden-xs">Lorem ipsums</span><span class="ap-icon-arrow-a"></span></div>
					</a>
				</div>
				<div class="table-row placeholder">
					<a href="#">
						<div class="table-cell date"><span>00.00.0000</span></div>
						<div class="table-cell title"><h3>Lorem ifsum dolor sit amet!</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales felis tortor, vel semper enim cursus sed. Nam dictum quis mauris vel iaculis.</p></div>
						<div class="table-cell duration hidden-xs"><span>Lorem</span></div>
						<div class="table-cell trainer"><span>Lorem Ipsum</span></div>
						<div class="table-cell more"><span class="text hidden-xs">Lorem ipsums</span><span class="ap-icon-arrow-a"></span></div>
					</a>
				</div>
				<div class="table-row placeholder">
					<a href="#">
						<div class="table-cell date"><span>00.00.0000</span></div>
						<div class="table-cell title"><h3>Lorem ifsum dolor sit amet!</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales felis tortor, vel semper enim cursus sed. Nam dictum quis mauris vel iaculis.</p></div>
						<div class="table-cell duration hidden-xs"><span>Lorem</span></div>
						<div class="table-cell trainer"><span>Lorem Ipsum</span></div>
						<div class="table-cell more"><span class="text hidden-xs">Lorem ipsums</span><span class="ap-icon-arrow-a"></span></div>
					</a>
				</div>
				<div class="table-row placeholder">
					<a href="#">
						<div class="table-cell date"><span>00.00.0000</span></div>
						<div class="table-cell title"><h3>Lorem ifsum dolor sit amet!</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales felis tortor, vel semper enim cursus sed. Nam dictum quis mauris vel iaculis.</p></div>
						<div class="table-cell duration hidden-xs"><span>Lorem</span></div>
						<div class="table-cell trainer"><span>Lorem Ipsum</span></div>
						<div class="table-cell more"><span class="text hidden-xs">Lorem ipsums</span><span class="ap-icon-arrow-a"></span></div>
					</a>
				</div>
				<div class="table-row placeholder">
					<a href="#">
						<div class="table-cell date"><span>00.00.0000</span></div>
						<div class="table-cell title"><h3>Lorem ifsum dolor sit amet!</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales felis tortor, vel semper enim cursus sed. Nam dictum quis mauris vel iaculis.</p></div>
						<div class="table-cell duration hidden-xs"><span>Lorem</span></div>
						<div class="table-cell trainer"><span>Lorem Ipsum</span></div>
						<div class="table-cell more"><span class="text hidden-xs">Lorem ipsums</span><span class="ap-icon-arrow-a"></span></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<?php //get_template_part( 'module', 'trainers' );
?>

<?php get_footer(); ?>
