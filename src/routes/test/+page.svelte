<script>
    let fileInput
    let files
    let imgSource

    function uploadBtn(){
      fileInput.click()
    }

    function uploadOnChange(){
      // console.log(files)
      getBase64(files[0])
    }

    function getBase64(image){
      const reader = new FileReader()
      reader.readAsDataURL(image)
      
      reader.onload = e =>{
        console.log(e)
        console.log(e.target.result)
      }
    }
</script>

<main>
    <div class="mt-5 m-auto card w-96 bg-slate-900 shadow-xl">

        <figure class="px-10 pt-10">
          <!-- input field hidden -->
          <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={uploadOnChange}/>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
        </figure>

        <div class="card-body items-center text-center">
          <div class="card-actions">
            <button class="btn btn-primary" on:click={uploadBtn}>Upload Image</button>
          </div>
        </div>
      </div>
</main>