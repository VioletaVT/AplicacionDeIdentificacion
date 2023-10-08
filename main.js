function IniciarClasificacion(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier(
        "https://teachablemachine.withgoogle.com/models/665f26lSG/model.json",modelReady
        );
}

function modelReady(){
    classifier.classify(GotResult);
}

function GotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result-label").innerHTML= "Escucho- "+ results[0].label;
        document.getElementById("result-confidence").innerHTML= "Precision- "+ (results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result-label").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result-confidence").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById("alien1");
        img2= document.getElementById("alien2");
        img3= document.getElementById("alien3");
        img4= document.getElementById("alien4");
        
        if(results[0].label=="aplausos"){
            img.src="aliens-01.gif";
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }
        else if(results[0].label=="metronomo"){
            img.src="aliens-01.png";
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }
        else if(results[0].label=="campana"){
            img.src="aliens-01.png";
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }
        else if(results[0].label=="Ruido de fondo"){
            img.src="aliens-01.png";
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }
    }
}
