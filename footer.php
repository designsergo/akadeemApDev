	<footer class="container-fluid">
		<div class="<?= (is_front_page()) ? 'container' : 'container-fluid'; ?>">
			<div class="row">
				<div class="col-sm-12 col-custom-offset">
					<div id="footer-text">
						<!--<p>AS Äripäev<span class="slash">/</span><span class="hidden-xs"><span class="hidden-sm">Vana-L&otilde;una 39/1, 19094 Tallinn<span class="slash">/</span></span>e-post: <a href="mailto:akadeemia@aripaev.ee">akadeemia@aripaev.ee</a><span class="slash">/</span></span>telefon: 667 0439</p>-->
					  <p>AS Äripäev<span class="slash">/</span><span><span>Vana-L&otilde;una 39/1, 19094 Tallinn<span class="slash">/</span></span>e-post: <a href="mailto:akadeemia@aripaev.ee">akadeemia@aripaev.ee</a><span class="slash">/</span></span><a href="tel:(+372) 667 0439">telefon: 667 0439</a></p>
					</div>
				</div>
			</div>
		</div>
		<a href="http://www.eall.ee/" class="floaty-link" target="_blank"></a>
		<!--<div class="copyright text-right"><a href="http://www.eall.ee/" target="_blank">Äripäev on Eesti<br>Ajalehtede Liidu liige<br>&copy; AS Äripäev 2000-<?= date('Y'); ?></a></div>-->
	</footer>

	<!--<div class="bg-logo-footer">
		<img src="<?= get_stylesheet_directory_uri(); ?>/img/logo-akadeemia-a.svg" alt="Äripäeva Akadeemia">
	</div>-->
	</div>

  <?php get_template_part('modal', 'windows'); ?>
	<?php wp_footer(); ?>
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-77654157-1', 'auto');
		ga('send', 'pageview');
	</script>
</body>
</html>
