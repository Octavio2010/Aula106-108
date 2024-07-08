//https://teachablemachine.withgoogle.com/models/_PK0--4TH/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_PK0--4TH/model.json", modelLoad)
}
function modelLoad(){
    classifier.classify(gotResult)
}

function gotResult(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        r = Math.floor(Math.random()*255)+1
        b = Math.floor(Math.random()*255)+1
        g = Math.floor(Math.random()*255)+1

        document.getElementById("result_label").innerHTML="posso ouvir - " + results[0].label
        document.getElementById("result_label").style.color="rgb("+r+", "+g+", "+b+")"
        document.getElementById("result_confidence").innerHTML="Precisão - " + (results[0].confidence*100).toFixed(2) + "%"

        img1 = document.getElementById("person1")
        img2 = document.getElementById("person2")
        img3 = document.getElementById("person3")
        img4 = document.getElementById("person4")

        if (results[0].label=="Palmas") {
            img1.src = "spider_gif.webp"
            img2.src = "duende.png"
            img3.src = "venom.png"
            img4.src = "miles.png"
        }
        else if (results[0].label=="Estalo") {
            img1.src = "aranha.png"
            img2.src = "duende_gif.gif"
            img3.src = "venom.png"
            img4.src = "miles.png"
        }
        else if (results[0].label=="Assobio") {
            img1.src = "aranha.png"
            img2.src = "duende.png"
            img3.src = "venom_gif.gif"
            img4.src = "miles.png"
        }
        else{
            img1.src = "aranha.png"
            img2.src = "duende.png"
            img3.src = "venom.png"
            img4.src = "miles_gif.gif"
        }
    }

}