const btnEL = document.getElementById("btn");
const jokeEl = document.getElementById("joke")


const apikey="55+C65HTaC5bsI5890Fq5Q==lgvTYOIeJiiwx5F5";

const options={
    method: "GET",
    headers: {
        "X-Api-Key":apikey
    },
};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){

    try {
        jokeEl.innerText ="updating...";
    btnEL.disabled =true;
    btnEL.innerText ="Loading...";
    const response = await fetch(apiURL,options);
    const data= await response.json()

    btnEL.disabled =false;
    btnEL.innerText ="Tell me a joke ";

    jokeEl.innerText =data[0].joke;
    } catch (error) {
        jokeEl.innerText="An error happened,try again later";
        btnEL.disabled =false;
        btnEL.innerText ="Tell me a joke";
        console.log(error);
    }
    
}
btnEL.addEventListener("click",getjoke);