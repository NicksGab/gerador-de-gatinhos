let generate_kitty = document.querySelector('.generate_kitty, Gerar');

generate_kitty.addEventListener('click', fetchPics);

function fetchPics() {
    let gatinhosImgDiv = document.querySelector("gatinhos")

    fetch('https://api.thecatapi.com/v1/images/search') 
    .then(response => response.json())
    .then(data => { let gatinhosImgUrl = data[0].url

        let gatinhosImgEl = document.createElement("img")

        gatinhosImgEl.setAttribute('src', `${gatinhosImgUrl}`)
        gatinhosImgEl.classList.add("gatinhos");

        let gatinhosImgDiv = document.querySelector(".gatinhos");
        gatinhosImgDiv.replaceChildren(gatinhosImgEl);
     })

    .catch((err) = console.log(error))
}