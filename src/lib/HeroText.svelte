<script>
    import {goto} from '$app/navigation'

    export let mainText = "main Text"
    export let paragraphText = "paragraph Text paragraph Text paragraph Text"
    export let mainBtnText = "main Btn Text"
    export let mainBtnUrl = "/dataInput"

    const buttonRoute = ()=>{
        // console.log(`${mainBtnUrl}`)
        goto(`${mainBtnUrl}`) 
    }
</script>
<main>
    <div class="grid p-5 flex-grow card bg-base-300 rounded-box place-items-center">
        <h1 class="text-5xl font-bold">{mainText}</h1>
        <p class="py-6 text-center">{paragraphText}</p>
        <button on:click={buttonRoute} class="btn btn-primary">{mainBtnText}</button>
    </div>
</main>
