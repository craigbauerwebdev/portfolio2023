<?php

/**
 * Hide admin bar for non-admins
 */
function js_hide_admin_bar( $show ) {
	if ( ! current_user_can( 'administrator' ) ) {
		return false;
	}
	return $show;
}
add_filter( 'show_admin_bar', 'js_hide_admin_bar' );

// Password page
	function custom_login_page() { 
		?> 
		<style type="text/css"> 
      body.login {
        background-color: #0a192f;
        background-image: url(<?php echo get_template_directory_uri(); ?>/images/home-bkg.png);
        background-repeat: repeat; */
      }
      body.login div#login h1 a {
        background-image: url(<?php echo get_template_directory_uri(); ?>/images/cb-logo1.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 300px;
      }
      body.login-password-protected input[type="submit"] {
        background: #5f89ef;
        border: none;
      }
      body.login-password-protected input[type="submit"]:hover {
        background: #5f89ef;
        border: none;
      }
      body.login-password-protected .button-primary {
        float: none;
      }
      body.login form p {
        text-align: left;
      }
      body.login p {
        text-align: center;
      }
      body.login #backtoblog {
        display: none;
      }
      body.login .button-primary {
        background: #1273b9; /* #405363; */
        border: 1px solid #1273b9;
      }
      body.login .button-primary:hover {
        background: #ee3074;
        border: 1px solid #ee3074;
      }
       body.login input[type=text] {
        font-size: 30px;
      }
      body.login input:-webkit-autofill,
      body.login input:-webkit-autofill:hover, 
      body.login input:-webkit-autofill:focus, 
      body.login input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
          -webkit-text-fill-color: #000 !important;
          /*font-size: 90px !important;*/
      }
		</style>
		<?php 
	} 
	add_action( 'login_enqueue_scripts', 'custom_login_page' );
		
	/* 
    function add_message() {
      echo '<p>Enter the password to access Paula & Randy\'s wedding website. Password can be found on the invitation.</p>';		
    }
    add_action( 'password_protected_login_message', 'add_message' );
  */

  //define('JWT_AUTH_SECRET_KEY', ":l]:uiXm{+?<P3n8P>5tU:-s4T<&.@;q.K~ xigrgdc^J>V:@FM(Rv}.kwz[gQ4o");
  //define('JWT_AUTH_CORS_ENABLE', true);

  add_action('wp_enqueue_scripts', 'my_react_app');
  function my_react_app()
  {
    wp_enqueue_script(
      'my_react_app',
      get_stylesheet_directory_uri() . '/build/index.js', // This refer to the built React app
      ['wp-element'], //This dependency indicates that you need React at Frontend
      rand(), // This could be changed to the theme version for production
      true
    );
  }

// Load themes CSS
	function theme_styles() {
    /* Compiled CSS */
    wp_enqueue_style( 'base', get_template_directory_uri() . '/css/index.css' );
		wp_enqueue_style( 'main', get_template_directory_uri() . '/style.css' );
	}

// Load Javascript here
  function theme_js() {
    // Register first then enqueue on certain pages with a conditional
    wp_register_script( 'theme', get_template_directory_uri() . '/js/theme.js', array('jquery'), '', true );
    wp_enqueue_script( 'theme' );

    // or just enque it for all pages
   // wp_enqueue_script( 'theme', get_template_directory_uri() . '/js/theme.js', array('jquery'), '', true );
   }

function current_user_enqueue_scripts() {
    wp_enqueue_script( 'wp12311-scripts', get_template_directory_uri() . '/js/getCurrentUser.js', array( 'jquery' ), false, true );
    wp_localize_script( 'wp12311-scripts', 'getCurrentUser', array(
      'current_user' => wp_get_current_user()//, // come up with better way to get user id from custom api
      //`getCurrentUser2` => "99999999"
    ));
     
} 
add_action( 'wp_enqueue_scripts', 'theme_js' );
add_action( 'wp_enqueue_scripts', 'theme_styles' );
add_action( 'wp_enqueue_scripts', 'current_user_enqueue_scripts' );


//enable custom menues
add_theme_support( 'menus');

function register_my_menus() {
  register_nav_menus(
    array(
      'main' => __( 'Main Menu' ),
      'mobile' => __( 'Mobile Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );

//Enable Featured image
add_theme_support( 'post-thumbnails' );


//Register widgetized areas and sidebars
if (function_exists('register_sidebar')) {  
     register_sidebar(array(  
      'name' => 'Sidebar Widgets',  
      'id'   => 'sidebar-widgets',  
      'description'   => 'Widget Area',  
      'before_widget' => '<div id="sidebar-widget" class="sidebar-widget">',  
      'after_widget'  => '</div>',  
      'before_title'  => '<h2>',  
      'after_title'   => '</h2>'  
     ));  
}


/*.REST API */

add_action('rest_api_init', 'register_rest_images' );
function register_rest_images(){
    register_rest_field( array('code'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}

/* Include all custome fields */
$post_type = "code";
function my_rest_prepare_post($data, $post, $request) {
    $_data = $data->data;
    $fields = get_fields($post->ID);
    foreach ($fields as $key => $value){
        $_data[$key] = get_field($key, $post->ID);
    }
    $data->data = $_data;
    return $data;
}
add_filter("rest_prepare_{$post_type}", 'my_rest_prepare_post', 10, 3);
?>