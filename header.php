<!DOCTYPE html>
<html lang="et">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

	<title><?php is_front_page() ? '' : wp_title('-', true, 'right'); bloginfo('name'); ?></title>

	<style><? include 'css/critical.css'; ?></style>

	<meta name="description" content="<?= bloginfo('description'); ?>">
	<link rel="icon" type="image/x-icon" href="<?= get_stylesheet_directory_uri(); ?>/favicon.ico" />
	<link rel="apple-touch-icon" sizes="72x72" href="<?= get_stylesheet_directory_uri(); ?>/img/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="120x120" href="<?= get_stylesheet_directory_uri(); ?>/img/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="152x152" href="<?= get_stylesheet_directory_uri(); ?>/img/apple-touch-icon-152x152.png">
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,500,700,900&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet"> 
	<meta name="format-detection" content="telephone=no">
	<?php wp_meta(); ?>
	<?php wp_head(); ?>

	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body class="light">
	<div class="overflow-hide">
		<header class="vertical">
			<a href="<?= esc_url( home_url('/') ); ?>"><h1 class="indent">Äripäeva Akadeemia</h1>
			</a>

			<nav id="mmenu">
				<ul>
				<?php
					wp_nav_menu( array(
						'menu' => 'Main',
						'container' => false,
						'items_wrap' => '%3$s')
					);

			echo '<li><a href="#" class="menu-newsletter">Uudiskiri</a></li>';
				?>
				</ul>
			</nav>

			<a class="ap-icon-facebook" href="https://www.facebook.com/AripaevaAkadeemia" target="_blank"></a>
			<div class="bg-slant"></div>
			<div class="burger visible-xs"><span></span><span></span><span></span><span></span></div>
			<div class="search visible-xs"><span></span><span></span></div>
		</header>
