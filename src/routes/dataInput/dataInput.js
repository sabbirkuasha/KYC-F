export const post = async(request) =>{

    const name = request.body.get('name')
    const email = request.body.get('email')

    const res = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfEeVLEV7jNdvMONvTgUF_c0hQcuQnZebSVeBpkc_Iqyh9QxA/viewform?usp=pp_url&entry.1973963659=${name}+&entry.869788069=${email}`)
    
    console.log(res)
    return{

    }
}