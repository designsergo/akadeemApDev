<?php

/* Äripäeva Akadeemia functions */


/**
 * Settings
 */

add_theme_support( 'post-thumbnails' );

// Hide 'comments' menu items from admin panel
function remove_posts_menu_page() {
	// remove_menu_page( 'edit.php' );
	remove_menu_page( 'edit-comments.php' );
}
add_action( 'admin_menu', 'remove_posts_menu_page' );

// Add dynamic main menu
function register_main_menu() {
	register_nav_menu('header-menu',__( 'Main' ));
}
add_action( 'init', 'register_main_menu' );

// Disable toolbar for all except admin
function remove_admin_bar() {
	if (!current_user_can('administrator') && !is_admin()) {
		show_admin_bar(false);
	}
}
add_action('after_setup_theme', 'remove_admin_bar');

// Disable
function remove_rest_api () {
	remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
	remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 );
	remove_action( 'template_redirect', 'rest_output_link_header', 11, 0 );
}
add_action( 'after_setup_theme', 'remove_rest_api' );

// Set custom titles for newsletter templates
function ak_filter_wp_title( $title ) {
  if (is_page_template('newsletter-change.php')) {
      return 'Kontaktandmete muutmine - ';
  }
  if (is_page_template('newsletter-unsubscribe.php')) {
      return 'Uudiskirjast loobumine - ';
  }

  return $title;
}
add_filter('wp_title', 'ak_filter_wp_title');


/**
 * Enqueue scripts and styles
 */

function ak_scripts_styles() {
	// Javascript
	wp_enqueue_script('jquery-js', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', array(), null, true);
	wp_enqueue_script('jquery-mobile-js', get_template_directory_uri().'/js/lib/jquery.mobile.custom.min.js', array('jquery-js'), null, true); // v 1.4.5
	wp_enqueue_script('akadeemia-js', get_template_directory_uri().'/js/akadeemia.js', array('jquery-mobile-js'), md5_file(get_template_directory_uri().'/js/akadeemia.js'), true);

	wp_enqueue_script('moment-js', 'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js', array(), null, true);
	wp_enqueue_script('daterangepicker-js', 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'ak_scripts_styles');

function ak_add_footer_styles() {
	// CSS - enqueue in footer since we have critical CSS in the head
	wp_enqueue_style('akadeemia', get_template_directory_uri().'/css/akadeemia.css', array(), md5_file(get_template_directory_uri().'/css/akadeemia.css'));

	//wp_enqueue_script('daterangepicker-css', 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css', array(), null, true);
};
add_action('get_footer', 'ak_add_footer_styles');


/**
 * Custom CSS for the admin panel
 */

function admin_custom_css() {
  echo '<style>
          th#portrait.manage-column.column-portrait { width:64px !important; }
        </style>';
}
add_action('admin_head', 'admin_custom_css');


/**
 * Custom post types
 */

function ak_post_trainer() {
	// UI labels
	$labels = array(
		'name'                => _x( 'Trainers', 'Post Type General Name', 'akadeemia' ),
		'singular_name'       => _x( 'Trainer', 'Post Type Singular Name', 'akadeemia' ),
		'menu_name'           => __( 'Trainers', 'akadeemia' ),
		'parent_item_colon'   => __( 'Parent Trainer', 'akadeemia' ),
		'all_items'           => __( 'All Trainers', 'akadeemia' ),
		'view_item'           => __( 'View Trainer', 'akadeemia' ),
		'add_new_item'        => __( 'Add New Trainer', 'akadeemia' ),
		'add_new'             => __( 'Add New', 'akadeemia' ),
		'edit_item'           => __( 'Edit Trainer', 'akadeemia' ),
		'update_item'         => __( 'Update Trainer', 'akadeemia' ),
		'search_items'        => __( 'Search Trainer', 'akadeemia' ),
		'not_found'           => __( 'Not Found', 'akadeemia' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'akadeemia' ),
	);
	// Other options
	$args = array(
		'label'               => __( 'trainer', 'akadeemia' ),
		'description'         => __( 'Trainers', 'akadeemia' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions' ), // 'custom-fields'
		'taxonomies'          => array( 'genres' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'menu_icon'           => 'dashicons-businessman',
		'rewrite'             => array( 'slug' => 'koolitaja' )
	);
	register_post_type( 'trainer', $args );
}
add_action('init', 'ak_post_trainer', 0);

function ak_post_contact() {
	// UI labels
	$labels = array(
		'name'                => _x( 'Contacts', 'Post Type General Name', 'akadeemia' ),
		'singular_name'       => _x( 'Contact', 'Post Type Singular Name', 'akadeemia' ),
		'menu_name'           => __( 'Contacts', 'akadeemia' ),
		'parent_item_colon'   => __( 'Parent Contact', 'akadeemia' ),
		'all_items'           => __( 'All Contacts', 'akadeemia' ),
		'view_item'           => __( 'View Contact', 'akadeemia' ),
		'add_new_item'        => __( 'Add New Contact', 'akadeemia' ),
		'add_new'             => __( 'Add New', 'akadeemia' ),
		'edit_item'           => __( 'Edit Contact', 'akadeemia' ),
		'update_item'         => __( 'Update Contact', 'akadeemia' ),
		'search_items'        => __( 'Search Contact', 'akadeemia' ),
		'not_found'           => __( 'Not Found', 'akadeemia' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'akadeemia' ),
	);
	// Other options
	$args = array(
		'label'               => __( 'contact', 'akadeemia' ),
		'description'         => __( 'Contacts', 'akadeemia' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'thumbnail' ), // 'custom-fields'
		'taxonomies'          => array( 'genres' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'menu_icon'           => 'dashicons-admin-users'
	);
	register_post_type( 'contact', $args );
}
add_action('init', 'ak_post_contact', 0);

function ak_post_schooling() {
	// UI labels
	$labels = array(
		'name'                => _x( 'Schoolings', 'Post Type General Name', 'akadeemia' ),
		'singular_name'       => _x( 'Schooling', 'Post Type Singular Name', 'akadeemia' ),
		'menu_name'           => __( 'Schooling', 'akadeemia' ),
		'parent_item_colon'   => __( 'Parent Schooling', 'akadeemia' ),
		'all_items'           => __( 'All Schoolings', 'akadeemia' ),
		'view_item'           => __( 'View Schooling', 'akadeemia' ),
		'add_new_item'        => __( 'Add New Schooling', 'akadeemia' ),
		'add_new'             => __( 'Add New', 'akadeemia' ),
		'edit_item'           => __( 'Edit Schooling', 'akadeemia' ),
		'update_item'         => __( 'Update Schooling', 'akadeemia' ),
		'search_items'        => __( 'Search Schooling', 'akadeemia' ),
		'not_found'           => __( 'Not Found', 'akadeemia' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'akadeemia' ),
	);
	// Other options
	$args = array(
		'label'               => __( 'schooling', 'akadeemia' ),
		'description'         => __( 'Schoolings', 'akadeemia' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'thumbnail', 'post-formats'),
		'taxonomies'          => array( 'genres' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'menu_icon'           => 'dashicons-groups',
		'rewrite'             => array( 'slug' => 'sisekoolitused' )
	);
	register_post_type( 'schooling', $args );
}
add_action('init', 'ak_post_schooling', 0);

/**
 * Change default values
 */

function custom_enter_title( $input ) {
	global $post_type;

	if ( is_admin() && ($post_type == 'contact' || $post_type == 'trainer') )
		return __( 'Enter name here', 'akadeemia' );

	return $input;
}
add_filter('enter_title_here', 'custom_enter_title');


/**
 * Custom fields
 */

function meta_info() {
	global $post;
	$custom = get_post_custom($post->ID);
	?>
	<table>
		<tr>
			<td><label><?php _e('Title:', 'akadeemia'); ?></label></td>
			<td><input name="meta_title" value="<?= $custom['meta_title'][0]; ?>" type="text" class="regular-text" /></td>
		</tr>
		<tr>
			<td><label><?php _e('E-mail:', 'akadeemia'); ?></label></td>
			<td><input name="meta_email" value="<?= $custom['meta_email'][0]; ?>" type="text" class="regular-text" /></td>
		</tr>
		<tr>
			<td style="vertical-align: top; padding-top: 6px;"><label><?php _e('Phone:', 'akadeemia'); ?></label></td>
			<td style="padding-bottom: 15px;" ><input name="meta_phone" value="<?= $custom['meta_phone'][0]; ?>" type="text" class="regular-text" /></td>
		</tr>
		<tr>
			<td><label><?php _e('Twitter:', 'akadeemia'); ?></label></td>
			<td><input name="meta_twitter" value="<?= $custom['meta_twitter'][0]; ?>" type="text" class="regular-text" /></td>
		</tr>
		<tr>
			<td><label><?php _e('Facebook:', 'akadeemia'); ?></label></td>
			<td><input name="meta_facebook" value="<?= $custom['meta_facebook'][0]; ?>" type="text" class="regular-text" /></td>
		</tr>
		<tr>
			<td><label><?php _e('LinkedIn:', 'akadeemia'); ?></label></td>
			<td><input name="meta_linkedin" value="<?= $custom['meta_linkedin'][0]; ?>" type="text" class="regular-text" /></td>
		</tr>
		<tr>
			<td><label><?php _e('Skype:', 'akadeemia'); ?></label></td>
			<td><input name="meta_skype" value="<?= $custom['meta_skype'][0]; ?>" type="text" class="regular-text" /></td>
		</tr>
		<tr>
			<td><label><?php _e('Website:', 'akadeemia'); ?></label></td>
			<td><input name="meta_website" value="<?= $custom['meta_website'][0]; ?>" type="text" class="regular-text" /></td>
		</tr>
	</table>
	<?php
}

function meta_video() {
	global $post;
	$custom = get_post_custom($post->ID);
	?>
	<table>
		<tr>
			<td><label><?php _e('URL:', 'akadeemia'); ?></label></td>
			<td><input name="meta_video" value="<?= $custom['meta_video'][0]; ?>" type="text" /></td>
		</tr>
	</table>
	<?php
}

function meta_order() {
	global $post;
	$custom = get_post_custom($post->ID);
	?><input name="meta_order" value="<?= $custom['meta_order'][0]; ?>" placeholder="0" type="text" /><?php
}

function meta_subtitle() {
	global $post;
	$custom = get_post_custom($post->ID);
	?><input name="meta_subtitle" value="<?= $custom['meta_subtitle'][0]; ?>" type="text" /><?php
}

function admin_init(){
	// trainer
	add_meta_box('meta-info', __('Meta', 'akadeemia'), 'meta_info', 'trainer', 'normal', 'high');
	add_meta_box('meta-video', __('Vertical Video', 'akadeemia'), 'meta_video', 'trainer', 'side', 'low');
	add_meta_box('meta-order', __('Order nr', 'akadeemia'), 'meta_order', 'trainer', 'side', 'low');
	// contact
	add_meta_box('meta-info', __('Meta', 'akadeemia'), 'meta_info', 'contact', 'normal', 'high');
	add_meta_box('meta-order', __('Order nr', 'akadeemia'), 'meta_order', 'contact', 'side', 'low');
	// pages
	add_meta_box('meta-subtitle', __('Subtitle', 'akadeemia'), 'meta_subtitle', 'page', 'side', 'high');
}
add_action('admin_init', 'admin_init');


/**
 * Save custom fields data
 */

function ak_save_meta(){
	global $post;
	$post_type = $post->post_type;

	if ($post_type == 'trainer' || $post_type == 'contact') {
		update_post_meta($post->ID, 'meta_title', $_POST['meta_title']);
		update_post_meta($post->ID, 'meta_email', $_POST['meta_email']);
		update_post_meta($post->ID, 'meta_phone', $_POST['meta_phone']);

		update_post_meta($post->ID, 'meta_twitter', $_POST['meta_twitter']);
		update_post_meta($post->ID, 'meta_facebook', $_POST['meta_facebook']);
		update_post_meta($post->ID, 'meta_linkedin', $_POST['meta_linkedin']);
		update_post_meta($post->ID, 'meta_skype', $_POST['meta_skype']);
		update_post_meta($post->ID, 'meta_website', $_POST['meta_website']);

		if ($_POST['meta_order'] != '')
			update_post_meta($post->ID, 'meta_order', $_POST['meta_order']);
		else
			update_post_meta($post->ID, 'meta_order', 0);
	}

	if ($post_type == 'trainer') {
		update_post_meta($post->ID, 'meta_video', $_POST['meta_video']);
	}

	if ($post_type == 'schooling') {
		update_post_meta($post->ID, 'meta_video', $_POST['meta_video']);
	}

	if ($post_type == 'page') {
		update_post_meta($post->ID, 'meta_subtitle', $_POST['meta_subtitle']);
	}
}
add_action('save_post', 'ak_save_meta', 1, 2);


/**
 * Enable multiple thumbnails for certain post types
 */

if (class_exists('MultiPostThumbnails')) {
	new MultiPostThumbnails(
		array(
			'label' => 'Vertical Image',
			'id' => 'vertical-image',
			'post_type' => 'trainer'
		)
	);
	new MultiPostThumbnails(
		array(
			'label' => 'Upcoming Image',
			'id' => 'upcoming-image',
			'post_type' => 'trainer'
		)
	);
}


/**
 * Custom list view columns
 */

function ak_contact_custom_columns($column) {
	global $post;
	$custom = get_post_custom($post->ID);

	switch ($column) {
	case 'portrait':
		echo (has_post_thumbnail()) ? the_post_thumbnail(array(64,64)) : '<img width="64" height="64" src="'.get_stylesheet_directory_uri().'/img/default-user.png" class="attachment-64x64 size-64x64 wp-post-image" alt="Default">';
		break;
	case 'subtitle':
		echo $custom['meta_title'][0];
		break;
	}
}
add_action('manage_posts_custom_column',  'ak_contact_custom_columns');

function ak_trainer_edit_columns($columns) {
	$columns = array(
		'cb' => '<input type="checkbox" />',
		'portrait' => '',
		'title' => 'Name',
		'date' => 'Date'
	);
	return $columns;
}
add_filter('manage_edit-trainer_columns', 'ak_trainer_edit_columns');

function ak_contact_edit_columns($columns) {
	$columns = array(
		'cb' => '<input type="checkbox" />',
		'portrait' => '',
		'title' => 'Name',
		'subtitle' => 'Title',
		'date' => 'Date'
	);
	return $columns;
}
add_filter('manage_edit-contact_columns', 'ak_contact_edit_columns');


/**
 * Flush rewrites to init new permalinks
 */

function ak_rewrite_flush() {
	flush_rewrite_rules();
}
add_action('after_switch_theme', 'ak_rewrite_flush');


/**
 * Custom MySQL table
 */
function ak_create_backup_db(){
	global $wpdb;

	$custom_backup_table = $wpdb->prefix.'backup_shop';
	$wpdb->show_errors();
	$sql = '';

	//check if table exsists
	if($wpdb->get_var("show tables like '$custom_backup_table'") !== $custom_backup_table)
	{
		$sql =  "CREATE TABLE ". $custom_backup_table . " (
					id INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
					sid INT NOT NULL,
					name VARCHAR(256),
					subtitle VARCHAR(512),
					eventstartdate DATETIME,
					eventenddate DATETIME,
					additionaldescription VARCHAR(32),
					trainer_firstname VARCHAR(32),
					trainer_lastname VARCHAR(32),
					UNIQUE KEY id (id)) CHARACTER SET utf8;";
	}

	//include the wordpress db functions
	require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

	dbDelta($sql);

	//register the new table with the wpdb object
	if (!isset($wpdb->shop))
	{
		$wpdb->shop = $custom_backup_table;
		//add the shortcut so you can use $wpdb->shop
		$wpdb->tables[] = str_replace($wpdb->prefix, '', $custom_backup_table);
	}
}
add_action('init', 'ak_create_backup_db');


/**
 * ShopAPI request local backup and add to WP cron
 */

add_action('ak_daily_event', 'ak_backup_shop_request');

function ak_cron_init() {
	if ( !wp_next_scheduled( 'ak_daily_event' ) ) {
		wp_schedule_event( current_time( 'timestamp' ), 'daily', 'ak_daily_event');
	}
}
add_action('wp', 'ak_cron_init');

function ak_backup_shop_request() {
	$currentDate = date('Y-m-d');
	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_RETURNTRANSFER => 1,
		CURLOPT_URL => 'http://poodapi.aripaev.ee/v4/Products?%24select=Id%2CName%2CSubTitle%2CEventStartDate%2CEventEndDate%2CAdditionalDescription%2CProductPersons&%24filter=Published+eq+true+and+ProductTemplateId+eq+4+and+(EventStartDate+ge+'.$currentDate.'T08%3A01%3A23.583Z+or+(EventEndDate+ne+null+and+EventEndDate+ge+'.$currentDate.'T08%3A01%3A23.583Z))+and+AvailableEndDateTimeUtc+ge+'.$currentDate.'T08%3A01%3A23.583Z&%24expand=ProductPersons(%24expand%3DPerson(%24select%3DFirstName%2CLastName))&%24orderby=EventStartDate+asc'
	));

	$resp = curl_exec($curl);

	if($resp === false) {
		echo 'Curl error: ' . curl_error($ch);
	} else {
		global $wpdb;
		$resp = json_decode($resp, true);

		foreach ($resp['value'] as $item) {
			$data = [
				'sid' => $item['Id'],
				'name' => $item['Name'],
				'subtitle' => $item['SubTitle'],
				'eventstartdate' => $item['EventStartDate'],
				'eventenddate' => $item['EventEndDate'],
				'additionaldescription' => $item['AdditionalDescription'],
				'trainer_firstname' => ($item['ProductPersons'][0]['FirstName'] != '') ? $item['ProductPersons'][0]['FirstName'] : $item['ProductPersons'][0]['Person']['FirstName'],
				'trainer_lastname' => ($item['ProductPersons'][0]['LastName'] != '') ? $item['ProductPersons'][0]['LastName'] : $item['ProductPersons'][0]['Person']['LastName']
			];

			if ( $wpdb->get_var('SELECT id FROM '.$wpdb->prefix.'backup_shop WHERE sid='.$item['Id']) ) {
				// echo "updated ".$item['Name']."\n";
				$wpdb->update($wpdb->prefix.'backup_shop', $data, array('sid' => $item['Id']));
			} else {
				// echo "inserted ".$item['Name']."\n";
				$wpdb->insert($wpdb->prefix.'backup_shop', $data);
			}
		}
	}

	curl_close($curl);
}
?>
