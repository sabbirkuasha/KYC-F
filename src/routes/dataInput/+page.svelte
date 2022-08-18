<script>
    const submitForm = (data)=>{
        console.log("hello")
        console.log(data)
        const formData = new FormData(data.currentTarget)
        console.log(formData.get('name'))
        console.log(formData.get('email'))

        const res = fetch('dataInput.json',{
            method: "POST",
            body: formData
        })
        // debugger
    }
</script>

<main class="p-5">

    <div class="w-auto flex justify-center">
        <form   class="w-1/2"
                on:submit|preventDefault={submitForm}>
            <div class="form-control">
                <!-- Name -->
                <label for="" class="label">
                <span class="label-text">Your Name</span>
                </label>
                <label class="input-group shadow">
                <span>Name</span>
                <input type="text" placeholder="Karim" name="name" 
                        class="input input-bordered w-full focus:border-info focus:shadow-2xl" />
                </label>
                
                <!-- Email -->
                <label for="" class="label mt-2 ">
                <span class="label-text">Your Email</span>
                </label>
                <label class="input-group shadow">
                <span>Email</span>
                <input type="text" placeholder="something@some.com" name="email" 
                        class="input input-bordered w-full focus:border-info focus:shadow-2xl" />
                </label>

                <!-- <button class="mt-6 btn btn-primary">Submit My Information</button> -->
                <input class="mt-6 btn btn-primary" type="submit">
            </div>
        </form>
    </div>
    
</main>
