document.addEventListener("DOMContentLoaded" , () =>{

    let imgSection = document.querySelector(".imgSection");
    let button = document.querySelector(".imgButton");

    let exec = (e) => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then( (res) => { return res.json()})
        .then( (data) => {
            console.log(data.message);
            imgSection.src = data.message;
        })
    }

    exec();

    button.onclick = exec;

})

