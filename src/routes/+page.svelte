<script>

    import HeroText from "$lib/HeroText.svelte";
    import {fade, fly} from 'svelte/transition'
    import {cubicIn, elasticIn, elasticOut, expoInOut, quadOut, quintIn} from 'svelte/easing'

    let show = true

    function toggle(){
        show = !show
    }
</script>

<main class="w-screen p-5">

    <!-- {#if show}
        <div transition:fade class="w-auto h-20 bg-slate-900 mb-6 ">
            <h1 transition:fly class="text-center text-3xl border">Hey How are you?</h1>
        </div>
    {:else}
        <div transition:fade class="w-auto h-20 bg-red-900 mb-6 ">
            Nothing here
        </div>
    {/if}
    
    <button on:click={toggle} class="btn btn-primary">
        Toggle
    </button> -->

    <div class="flex flex-col w-full lg:flex-row justify-center ">
        <div class="w-auto lg:w-2/6">
            <HeroText   mainText="Check NID"
                    paragraphText= "Take a snap of NID and match with the database"
                    mainBtnText="Start Checking NID"
                    mainBtnUrl="/checkNID"/>
        </div>
        
        <div class="divider lg:divider-horizontal px-4">
            <span class="text-2xl">OR</span> 
        </div> 

        <div class="w-auto lg:w-2/6">
            <HeroText   mainText="Input DATA"
                        paragraphText= "Input user data to match it with NID"
                        mainBtnText="Start Data Input"
                        mainBtnUrl="/dataInput"/>
        </div>
        
    </div>

</main>

