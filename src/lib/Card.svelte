<script>
    export let title = "Upload Front Side NID"
    export let img = "https://placeimg.com/400/225/arch"
    export let buttonText = "Upload Front Side of your NID"

    let fileInput
    let files
    let avatar

    function getBase64(image){
      const reader = new FileReader()
      reader.readAsDataURL(image)

      console.log("uploaded image is: ")
      console.log(image)
      reader.onload = e =>{
        avatar = e.target.result
        console.log(avatar)
      }
    }

    function uploadBtn() {
      fileInput.click()
    
    }
    function uploadOnChange() {
      console.log("base64 start")
      getBase64(files[0])
    }

    

    
</script>

<div class="card w-96 bg-slate-900 shadow-xl">
    <figure>
      {#if avatar}
        <img src={avatar} alt="Nid" />  
      {:else}
        <img src={img} alt="NidDefault" />
      {/if}
      
    </figure>
    <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={uploadOnChange}/>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={uploadBtn}>{buttonText}</button>
      </div>
    </div>
    {#if avatar}
      <!-- The button to open modal -->
      <label for="my-modal" class="btn modal-button btn-secondary">Send Data to ML</label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">This is Base64</h3>
          <p class="py-4 overflow-hidden">{avatar}</p>
          <div class="modal-action">
            <label for="my-modal" class="btn btn-secondary">Yay!</label>
          </div>
        </div>
      </div>
    {/if}


    <!-- {#if avatar}
      <div class="w-full px-6 pb-5 m-auto">
        <button class="btn m-auto w-full btn-secondary">Send Data to ML</button>
      </div>
    {/if} -->
</div>