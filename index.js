const asyncCards = async function () {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/books", {
            method: "GET",
        })
        if (res.ok) {


            let data = await res.json()
            let cardsList = document.getElementById("cardsList");
            data.forEach(element => {
                cardsList.innerHTML += '<div class="card" style="width: 22%; height:550px; float:left; margin: 15px 15px 15px 15px;"><img src="'+element.img+'" class="card-img-top" alt="..." style="width:100%; height:auto"><div class="card-body"><h5 class="card-title" >'+element.title+'</h5><p class="card-text">Price: '+element.price+'</p>  </div></div>'

            });
        }
    } catch (error) {
        console.log(error)
    }
}
asyncCards();