function fun(){
    // CALLING ELEMENTS
    var loader = document.getElementById("loader");
    var textValue = document.querySelector("#text-box").value;

    // TEXT + REPLACING FUNCTION
    var NewSTR = textValue.replaceAll(" ","+");
    var googleText = "https://www.google.com/search?q=";

   // var webSTR = document.body.googleText.textContent;
   // console.log(webSTR);

    console.log(googleText+NewSTR);

    //LOADER FUNCTION
    loader.style.display = "block";
    
    setTimeout(() => {
        loader.style.display = "none";
        loader.style.alignContent = "center";
    }, 3000);

    
    // WIKIPEDIA SEARCH 
    // FETCHING FROM WIKIPEDIA API

    let wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch='+NewSTR;
    console.log(wikiURL);

    fetch(wikiURL)
    .then(function(response){
        return(response.json());
    })

    .then(function(data){
        let resultArray = data.query.search;
        finalresult(resultArray);
        console.log(data);
    })

    .catch(function(){
        console.log("ERROR OCCURED . PLS CHECK THE CODE");
    });
}


function finalresult(myArray){
        console.log(myArray);

          // CREATING RESULT ELEMENT
     let resultElement = document.createElement("div");
     document.body.appendChild(resultElement);
     resultElement.id = resultElement;
     
        myArray.forEach(function(item){

            let itemTitle = item.title;
            let itemSnippet = item.snippet;
            let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item.title}`);
            console.log(itemTitle);
            console.log(itemSnippet);
            console.log(itemUrl);

            //RESULT PRINTING START

            // STYLING THE ELEMENTS

           resultElement.style.backgroundColor = "rgb(139, 253, 139)";
           resultElement.style.color = "rgb(0, 0, 92)";
           resultElement.style.fontSize = "20px";
           resultElement.style.lineHeight = "30px";
           resultElement.style.paddingLeft = "20px";
           resultElement.style.marginTop = "30px";
           resultElement.style.paddingRight = "20px";
           resultElement.style.paddingTop = "20px";
           resultElement.style.paddingBottom = "20px";
           resultElement.style.fontFamily = "san-serif";
           resultElement.style.borderRadius = "10px";
           resultElement.style.marginLeft = "20px";
           resultElement.style.marginRight = "20px";

            // REPLACING HTML TAG
            var newSnippet = itemSnippet.replace( /(<([^>]+)>)/ig, '');
            resultElement.innerHTML = itemSnippet;
            // FINAL RESULT PRINTNG
            if(document.getElementById("resultDes").innerHTML != " "){
                document.getElementById("resultDes").innerHTML = " ";
            }else{
                document.getElementById("resultDes").style.visibility = "visible";
                document.getElementById("resultDes").innerHTML = newSnippet;
                console.log(newSnippet);
            }
            
            //   resultElement.innerText = newSnippet;  
        })
}


function loadFun(){
    setTimeout(() => {
        document.getElementById("h4").style.display = "none";
    }, 5000);
}
