//onClick Shuffle Event
function shuffleData() {
    //get the parent Div for convenience
    let parentDivs = document.getElementById("myData");
  
    //1. get all rows
    let rowsCollection = parentDivs.querySelectorAll("div");
  
    //2. convert to array
    let rows = Array.from(rowsCollection)
      .slice(1); //skip the header row
  
    console.log('rows',rows);
    //3. shuffle
    shuffleArray(rows);
  
    //4. add back to the DOM
    for (const row of rows) {
        parentDivs.appendChild(row);
    }
}

//Shuffle Array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//onClick Sort Event
function sortData(){
    var list, i, switchcard, b, shouldSwitchcard;
    list = document.getElementById("myData");
    switchcard = true;
    while (switchcard) {
        switchcard = false;
        nodes = list.getElementsByTagName("div");
        for (i = 0; i < (nodes.length - 1); i++) {                        
            shouldSwitchcard = false;
            if (nodes[i].innerHTML.toLowerCase() > nodes[i + 1].innerHTML.toLowerCase()) {
                shouldSwitchcard = true;
                break;
            }
        }
        if (shouldSwitchcard) {
            nodes[i].parentNode.insertBefore(nodes[i + 1], nodes[i]);
            switchcard = true;
        }
    }
}


