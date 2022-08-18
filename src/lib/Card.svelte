<script>
    export let title = "Upload Front Side NID"
    export let img = "https://placeimg.com/400/225/arch"
    export let buttonText = "Upload Front Side of your NID"
</script>

<div class="card w-96 bg-slate-900 shadow-xl ">
    <figure><img src={img} alt="Nid" /></figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">{buttonText}</button>
      </div>
    </div>
</div>