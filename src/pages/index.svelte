<script lang="ts">
    let animate = false;
    let nightBackground = false;

    const startAnimation = () => {
        setTimeout(() => {
            animate = true;
            nightBackground = true;
        }, 0);

        setTimeout(() => {
            animate = false;
            nightBackground = false;
        }, 5000);

        setTimeout(() => {
            startAnimation();
        }, 10000);
    };

    startAnimation();
</script>

<style>
    .animate {
        transform: translateY(200%);
    }

    .transition-medium {
        transition-duration: 2500ms;
    }

    .translate-all {
        transform: translateX(-500px);
    }
</style>

<div id="content" class="h-screen w-screen flex flex-col justify-center items-center">
    <div id="title">
        <h1 class="text-gray-800 text-6xl font-sans font-extrabold">Day N Night</h1>
    </div>

    <div id="box" class="relative mt-10 flex h-96 w-96 bg-blue-400 justify-center items-center overflow-hidden transform transition-colors ease-linear transition-medium"
        class:bg-blue-900={nightBackground}
    >
        {#each Array(20) as _star}
            <div id="star" class="absolute ml-2 h-1 w-1 bg-white rounded-full transform transition-opacity transition-medium opacity-0" style="top: {400 * Math.random()}px; right: {400 * Math.random()}px;"
                class:opacity-100={animate}
            />
        {/each}

        <div id="ufo" class="transition-transform transition-medium transform ease-linear translate-x-full top-20 right-0 absolute flex flex-col items-center"
            class:translate-all={animate}
        >
            <div id="ufo-top" class="h-1 w-3 bg-gray-300 rounded-t" />
            <div id="ufo-base" class="h-2 w-6 bg-gray-500 rounded-full" />
        </div>

        <div id="circle" class="transition-medium transform transition-transform ease-linear h-32 w-32 bg-yellow-200 rounded-full"
            class:animate={animate}
        />
    </div>
</div>
