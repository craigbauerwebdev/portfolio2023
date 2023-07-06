<?php get_header(); ?>

	<?php if ( have_posts() ) : while (have_posts() ) : the_post(); ?>
		<div class="inner center">
			<h1 id="main_title">
				<?php the_title(); ?>
			</h1>
			<?php the_content(); ?>
		</div>
	<?php endwhile; else: ?>
		<p>There are no posts available.</p>
	<?php endif; ?>

		<!-- <?php
			if (is_page('about')) { ?>
				<div style="">
					<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('About Page') ) : ?> 
	     				<?php endif; ?> 					
				</div>
				
		<?php } ?> -->

<?php get_footer(); ?>