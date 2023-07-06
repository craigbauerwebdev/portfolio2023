<?php
/*
	Template Name: Home Page
*/
?>

<?php get_header(); ?>
	
	<div id="root" class="root"></div>

	<!-- <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
	<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script> -->

	<!-- Load our React component. -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script>
		(function() {
		  if (navigator.userAgent.match(/IEMobile\/9\.0/)) {
		    var msViewportStyle = document.createElement("style");
		    msViewportStyle.appendChild(
		      document.createTextNode("@-ms-viewport{width:auto!important}")
		    );
		    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
		  }
		})();

		//For react scripts - no longer neaded - using wp-element
		// Use this for headless CMS when wp is hosted sepearatly or in a seperate folder
		$(document).ready(function() {
			$.getJSON("<?php echo get_template_directory_uri(); ?>/build/asset-manifest.json", function (json) {
				//console.log(json.entrypoints);
				var ep = json.entrypoints;
				
				$.each(ep, function (index, point) {
					//console.log("Point: ", point);
					var
						bundle = document.createElement('script');
						bundle.setAttribute('type', "text/javascript");
						bundle.setAttribute('src', "<?php echo get_template_directory_uri(); ?>/build/" + point);
						document.body.appendChild(bundle);
				});
			})
		});
	</script>
	

<?php get_footer(); ?>

