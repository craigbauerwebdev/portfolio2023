<?php get_header(); ?>

	<?php if ( have_posts() ) : while (have_posts() ) : the_post(); ?>

		<h1 id="main_title">
			<?php the_title(); ?>
		</h1>
		<?php the_content(); ?>

	<?php endwhile; else: ?>
		<p>There are no posts available.</p>
	<?php endif; ?>

<?php get_footer(); ?>