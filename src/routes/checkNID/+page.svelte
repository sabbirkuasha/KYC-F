<script>
    import Card from "$lib/Card.svelte";
</script>

<main class="w-screen p-5">
    <div>
        <h1 class="text-2xl pb-5 text-center"> Upload front side of your NID</h1>
    </div>
    <div class="flex flex-col w-full lg:flex-row justify-center">
        <div class="w-auto lg:w-2/6 flex flex-col justify-center justify-items-center">
            <!-- <h1 class=" text-center p-2">Front NID</h1> -->
            <div class="mt-2 w-full flex justify-center">
                <Card 
                    img = "https://placeimg.com/400/225/paper"/>
            </div>
            
        </div>
        
        <!-- <div class="divider lg:divider-horizontal px-4">
            <span class="text-2xl">&</span> 
        </div> 

        <div class="w-auto lg:w-2/6 flex flex-col">
            <h1 class="rounded text-center p-2 ring-2">Back NID</h1>
            <div class="mt-2 w-full flex justify-center items-start">
                <Card   title="Upload Back Side NID"
                    img = "https://placeimg.com/400/225/paper"
                    buttonText = "Upload Back Side of your NID"/>
            </div>
            
        </div> -->
        
    </div>

    
</main>