<script>
	// n
</script>

<header>
	<div class="supercontainer">
		<nav>
			<p>Doc. Josepe Sierra</p>
			<div>
				<a class="hover-underline-animation">Productos</a>
				<span>·</span>
				<a class="hover-underline-animation">Servicios</a>
				<span>·</span>
				<a class="hover-underline-animation">Contacto</a>
			</div>
		</nav>
	</div>
</header>

<style>
	:global(body) {
		margin: 0px;
		background-color: #232323;
		overflow: hidden;
	}

	.supercontainer {
		max-width: 920px;
		width: 100%;
		margin: 0 auto;
	}
	
	header {
		height: 100vh;
		width: 100%;

		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
	}
	header:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background-image: url($lib/assets/handvshand.png);
		background-size: cover;
		background-position: center;
		filter: blur(5px);
		opacity: 0.25; /* Set the opacity to 50% */
		z-index: -1;
	}

	nav {
		box-sizing: border-box;
		padding: 1em;
		font-size: 23px;
		font-weight: bold;
		color: antiquewhite;
		text-shadow: 0px 0px 10px black;
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		align-items: baseline;
		justify-content: space-between;
	}

	a {
		box-sizing: border-box;
		padding: 6px;
		text-decoration: none;
		color: antiquewhite;
	}

	.hover-underline-animation {
		display: inline-block;
		position: relative;
	}

	.hover-underline-animation::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleY(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: antiquewhite;
		transform-origin: bottom right;
		transition: transform 0.25s ease-in-out;
	}

	.hover-underline-animation:hover::after {
		transform: scaleY(1);
		transform-origin: bottom left;
	}
</style>
