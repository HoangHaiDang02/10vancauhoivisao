const btn = document.querySelector(".btn");
btn.addEventListener('click',(e)=>{
    const values = document.querySelectorAll("input");
    const account = values[0].value;
    const password = values[1].value;
    e.preventDefault();
    fetch("https://62aa8ac53b31438554487103.mockapi.io/account")
    .then(res=>res.json())
    .then(item=>{
        for(let e of item){
            if(e.account===account&&e.password===password)
            {
                window.location.href = "./index.html";
            }
        }
    })
})
