document.querySelector("button").addEventListener("click", function () {
    const API = "https://api.quotable.io/random";
    
    var xhr = new XMLHttpRequest();
    
   xhr.open("GET", API);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
            
            var divTag = document.createElement("div");
            divTag.className = "col-xl-3 text-center";

            var pTag = document.createElement("p"); 
            var p1Tag = document.createElement("p");

            pTag.innerText = `- ${result.author}`;
            p1Tag.innerText = `"${result.content}"`;

            divTag.append(p1Tag, pTag);
            document.querySelector(".row").innerHTML = ""; 
            document.querySelector(".row").append(divTag);
        }
    };
    xhr.send();     
});