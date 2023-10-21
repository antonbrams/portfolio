<section
	class={`
		${$$props.class ?? ''} 
		max-w-[1780px] px mx-auto box-border pb-20 tablet:pb-30 tablet:px-20 desktop:pb-40
	`}
	class:first={$$props.first}
	class:last={$$props.last}
	class:!px-0={$$props.edge}
>
	<slot />
</section>

<style lang="postcss">
	.first {
		@apply pt-10 tablet:pt-20 desktop:pt-30;
	}
	.last {
		@apply pb-30 tablet:pb-40;
	}
</style>
