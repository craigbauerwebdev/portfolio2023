<?php
  // Login Page Styles
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
      }
		</style>
		<?php 
	} 
	add_action( 'login_enqueue_scripts', 'custom_login_page' );
		
	/* 
    // To add message to front end password plugin
    function add_message() {
      echo '<p>Enter the password to access Paula & Randy\'s wedding website. Password can be found on the invitation.</p>';		
    }
    add_action( 'password_protected_login_message', 'add_message' );
  */

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
    wp_enqueue_style( 'base', get_template_directory_uri() . '/css/index.css' ); // compiled css
		wp_enqueue_style( 'main', get_template_directory_uri() . '/style.css' ); // for theme activation
	}
  add_action( 'wp_enqueue_scripts', 'theme_styles' );

?>