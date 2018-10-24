<?php
	get_header();

	function isMobile() {
		$useragent=$_SERVER['HTTP_USER_AGENT'];

		if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4)))
			return true;
		else
			return false;
	}
?>

<div class="search-header">
	<!--
	<input name="search" type="text" placeholder="Otsi">
	<span class="ap-icon-search"></span>
	-->

	<!--<div class="page-nav-text next hidden-xs"><?php next_post_link_plus(array('link'=>'Järgmine: <span>%title</span> <i class="ap-icon-arrow-a"></i>', 'format'=>'%link', 'order_by'=>'numeric', 'meta_key'=>'meta_order')); ?></div>
	<a class="page-nav close ap-icon-close hidden-xs" href="/koolitajad/"></a>-->
</div>

<!--<div class="page-nav-text prev hidden-xs"><?php previous_post_link_plus(array('link'=>'<i class="ap-icon-arrow-a-l"></i> Eelmine: <span>%title</span>', 'format'=>'%link', 'order_by'=>'numeric', 'meta_key'=>'meta_order')); ?></div>
-->
<div class="row-trainers-details antialias">
	<?php
		if (class_exists('MultiPostThumbnails')) {

			$type = get_post_type();
			$idImage = 'vertical-image';
			$idVideo = 'vertical-video';

			$imageUrl = ( isMobile() ) ? get_the_post_thumbnail_url(get_the_ID(), array(750,440)) : MultiPostThumbnails::get_post_thumbnail_url( $type, $idImage, $get_the_ID);

			if ( get_post_meta(get_the_ID(), 'meta_video', true) != '' ) {
				$videoUrl = get_post_meta(get_the_ID(), 'meta_video', true);
			}

		}
	?>
	<div class="portrait" style="background: url(<?= $imageUrl; ?>) center top / cover no-repeat;">
		<?php
			if ( isset($videoUrl) && !isMobile() )
				echo '<style>@media (min-width: 1025px) { .row-trainers-details .portrait { background: url('.get_stylesheet_directory_uri().'/img/loader-video.gif) center no-repeat #f5f5f5!important; }</style> <video autoplay loop muted><source src="'.$videoUrl.'" type="video/mp4"></video>';
		?>
	</div>
	<div class="info">
		<div class="details-header">
			<div class="page-nav-text"> <i class="ap-icon-arrow-a-l"></i><a href="/koolitajad/"> Tagasi</a></div>
		</div>
		<div class="details">
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>


			<h2><? the_title(); ?></h2>
			<p><? the_content(); ?></p>

		<?php endwhile; endif; ?>
		</div>
	</div>

	<?php
		$table = $wpdb->prefix.'backup_shop';
		$trainerName = explode(' ', get_the_title());

		$trainings = $wpdb->get_results("SELECT sid,name,subtitle,trainer_firstname,trainer_lastname,eventstartdate,eventenddate FROM $table WHERE trainer_firstname = '$trainerName[0]' AND trainer_lastname = '$trainerName[1]'");

		if ($trainings) {
			echo '<div class="upcoming-box"><div class="upcoming">'.
				'<div class="page-nav next ap-icon-arrow-a hidden-xs"></div>'.
				'<div class="page-nav prev ap-icon-arrow-a hidden-xs disabled"></div>'.
				'<h2>Tulevased koolitused</h2>'.
				'<div class="events">';

			$trainingsCount = 0;

			foreach ( $trainings as $training ) {
				$upcomingImageUrl = MultiPostThumbnails::get_post_thumbnail_url( get_post_type(), 'upcoming-image', $get_the_ID);
				$thumbUrl = ($upcomingImageUrl) ? $upcomingImageUrl : get_the_post_thumbnail_url(get_the_ID(), array(544,544));

				$currentDate = strtotime( date('c') );
				$startDate = strtotime($training->eventstartdate);
				$endDate = strtotime($training->eventenddate);
				$dateRange = ( $startDate < $endDate ) ? date('d.m.Y', $startDate).' - '.date('d.m.Y', $endDate) : date('d.m.Y', $startDate);

				if ( $currentDate > max($startDate, $endDate) )
					continue;

				$trainingsCount++;
				echo '<div class="event">'.
					'<div class="image-box-mobile">'.
					'<a href="http://pood.aripaev.ee/Product/ProductDetails?productId='.$training->sid.'" target="_blank"><div class="image" style="background: url('.$thumbUrl.') center / cover no-repeat;"><img class="logo" src="'.get_stylesheet_directory_uri().'/img/logo-akadeemia-a.svg" alt="Äripäeva Akadeemia"></div></a>'.
					'</div>'.
					'<div class="about-box">'.
					'<h4><a href="http://pood.aripaev.ee/Product/ProductDetails?productId='.$training->sid.'" target="_blank">'.$training->name.'</a></h4>'.
					'<p class="date">'.$dateRange.'</p>'.
					'<p class="desc">'.$training->subtitle.'</p>'.
					'<!-- <p class="trainer">Koolitaja: <strong>'.$training->trainer_firstname.' '.$training->trainer_lastname.'</strong></p> -->'.
					'<a class="button" href="http://pood.aripaev.ee/Product/ProductDetails?productId='.$training->sid.'" target="_blank">Registreeru</a>'.
					'</div>'.
					'<div class="image-box">'.
					'<a href="http://pood.aripaev.ee/Product/ProductDetails?productId='.$training->sid.'" target="_blank"><div class="image" style="background: url('.$thumbUrl.') center / cover no-repeat;"><img class="logo" src="'.get_stylesheet_directory_uri().'/img/logo-akadeemia-a.svg" alt="Äripäeva Akadeemia"></div></a>'.
					'</div>'.
				'</div>';
			}

			if ( 0 == $trainingsCount ) {
				echo '<p>
					Hetkel tulevased koolitused puuduvad
				</p>';
			}

			echo '</div>'; //class="events"
			echo '</div></div>'; // <div class="upcoming-box"><div class="upcoming">

		}

		$wpdb->flush();
	?>
<div class="info"><div id="trainer-footer"></div></div>

</div>


<?php get_footer(); ?>
