fetch("https://62aa8ac53b31438554487103.mockapi.io/question")
.then(res=>res.json())
.then(item=>{
    let ranDom = ()=>{ return Math.floor(Math.random()*item.length)};
    const btRandom = document.querySelector(".btn-rd");

    btRandom.addEventListener('click',(e)=>{
            e.preventDefault();
            const paraQS = document.querySelector(".content-1");
            const paraQS2 = document.querySelector(".content-2");
            let i= ranDom();
            paraQS.innerHTML=item[i].question;
            paraQS2.innerHTML=item[i].answer;
        })

    const btnOUT = document.querySelector(".bt-out");
    btnOUT.addEventListener('click',e=>{
        e.preventDefault();
        window.location.href="./login.html";
    })
})