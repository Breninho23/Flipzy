function sendForm(){
    var jsonData = {};
    jsonData["game"] = "brazilXcroacia";
    jsonData["winBet"] = document.querySelector('input[name="winBet"]:checked').value;
    jsonData["gol1Bet"] = document.querySelector('input[name="gol1Bet"]:checked').value;
    jsonData["gol2Bet"] = document.querySelector('input[name="gol2Bet"]:checked').value;
    jsonData["winner1Bet"] = document.querySelector('input[name="winner1Bet"]:checked').value;
    jsonData["winner2Bet"] = document.querySelector('input[name="winner2Bet"]:checked').value;
    jsonData["valueBet"] = document.getElementById("inputValor").value;
    console.log((jsonData));
    console.log("Valor passado pelo stringify");    
    console.log(JSON.stringify(jsonData));    
    alert("Objeto JSON construído no console");
}