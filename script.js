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
    }, 2000);

    
    // WIKIPEDIA SEARCH 
    // FETCHING FROM WIKIPEDIA API

    let wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch='+NewSTR;
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
           resultElement.style.color = " rgb(60, 60, 60)";
           resultElement.style.fontSize = "20px";
           resultElement.style.lineHeight = "30px";
           resultElement.style.paddingLeft = "4a0px";

            // REPLACING HTML TAG
            var newSnippet = itemSnippet.replace( /(<([^>]+)>)/ig, '');
            resultElement.innerHTML = itemSnippet;
            // FINAL RESULT PRINTNG
            document.getElementById("resultDes").style.visibility = "visible";
            document.getElementById("resultDes").innerHTML = newSnippet;
            console.log(newSnippet);
         //   resultElement.innerText = newSnippet;
            
        })

       
        


}
