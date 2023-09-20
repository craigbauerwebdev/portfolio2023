<!DOCTYPE html lang="en">
<html>
	<head>
		<!--[if IE]>
		  <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<title>
			<?php wp_title('|',true,'right'); ?> <?php bloginfo('name'); ?>
		</title>

		<!-- Mobile Device Support -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- <link rel="preconnect" href="https://fonts.gstatic.com"> -->
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet" />
		<link href="<?php echo get_template_directory_uri(); ?>/css/index.css?ver=<?php echo rand(111,999)?>" rel="stylesheet" />
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
		<!-- <link href="./build/css/styles.css" rel="stylesheet" /> -->
		
		
		<?php wp_head(); ?>
	</head>
	<body>