<script>
    export let title = "Upload Front Side NID"
    export let img = "https://placeimg.com/400/225/arch"
    export let buttonText = "Upload Front Side of your NID"

    let fileInput
    let files
    let avatar
    let sendData

    function getBase64(image){
      const reader = new FileReader()
      reader.readAsDataURL(image)

      reader.onload = e =>{
        avatar = e.target.result
        sendData = (avatar.substr(avatar.indexOf(',') + 1));
      }
    }

    function uploadBtn() {
      fileInput.click()
    }
    
    function uploadOnChange() {
      getBase64(files[0])
    }

  let data
  async function fetchNow(){
    data = null
    try{
        const response = await fetch('http://192.168.100.130:8080/id_info', {
          method: 'POST',
          Credential: 'same-origin',
          Headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({file: sendData})
        });
        data = await response.json();
        console.log(data)
      }
      catch (error){
        console.error(`Error in load function for /: ${error}`)
      }  
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
      <label for="my-modal" class="btn modal-button btn-secondary" on:click={fetchNow} >Send Data to ML</label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          {#if data}
            <h3 class="font-bold text-lg">Hello {data.NAME}, Here is your data </h3>
            <p class="py-2 overflow-hidden text-3xl">{data.NAME}</p>
            <p class="overflow-hidden text-2xl">{data.NID_NUMBER}</p>
            <p class="overflow-hidden text-xl">{data.DATE_OF_BIRTH}</p>
          {:else}
            <h1 class="font-bold text-lg"> LOADING...</h1>
          {/if}
         
          <div class="modal-action">
            <label for="my-modal"  class="btn btn-secondary">Yay!</label>
          </div>
        </div>
      </div>
    {/if}
</div>