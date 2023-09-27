const photo = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", france);
buttonTwo.addEventListener("click", germany);

function france() {
    photo.setAttribute("src", "https://images.unsplash.com/photo-1586448911804-9fc613f60e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    text.innerHTML = "Which city in France would you pick?";
    buttonOne.innerHTML = "Paris";
    buttonTwo.innerHTML = "Nice";

    buttonOne.addEventListener("click", cityParis);
    buttonTwo.addEventListener("click", cityNice);

}

function cityParis() {
    photo.setAttribute("src", "https://images.unsplash.com/photo-1583265266785-aab9e443ee68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
    text.innerHTML = "Paris is global center for art, fashion, gastronomy and culture!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

}

function cityNice() {
    photo.setAttribute("src", "https://images.unsplash.com/photo-1521309033026-f3438b7c4264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80");
    text.innerHTML = "nice is a beautiful city in Côte d'Azur!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function germany() {
    photo.setAttribute("src", "https://images.unsplash.com/photo-1586449480584-34302e933441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    text.innerHTML = "Which city in France would you pick?";
    buttonOne.innerHTML = "Berlin";
    buttonTwo.innerHTML = "Munich";

    buttonOne.addEventListener("click", cityBerlin);
    buttonTwo.addEventListener("click", cityMunich);
}

function cityBerlin() {
    photo.setAttribute("src", "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    text.innerHTML = "Berlin is famous for its many museums!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function cityMunich() {
    photo.setAttribute("src", "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    text.innerHTML = "Munich is known for its annual Oktoberfest celebration!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

