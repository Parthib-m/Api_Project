let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

let btn = document.querySelector("button");
btn.addEventListener("click",async () => {
    let res = await randomJokes();
    let p = document.querySelector("p");
    if(res===undefined){
        p.style.backgroundColor = "red";
        p.style.color ="white";
        p.style.padding = "5px";
        p.style.borderRadius = "5px"
        p.innerText ="No joke avalaible";
    }else{
        p.style.backgroundColor="green";
        p.style.color ="white";
        p.style.padding = "5px";
        p.style.borderRadius = "5px"
        p.innerText = res;
    }
})

async function randomJokes(){
    try{
        let res = await axios.get(url);
        console.log(res.data.joke);
        return res.data.joke;
    }catch(err){
        console.log("error: ",err);
        return err;
    }
}

 