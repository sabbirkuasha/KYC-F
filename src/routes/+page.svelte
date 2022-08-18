<script>
    
    import HeroText from "$lib/HeroText.svelte";
</script>

<main class="w-screen p-5">
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

