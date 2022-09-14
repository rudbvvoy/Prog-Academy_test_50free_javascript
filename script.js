function calc(){
    const BTC = document.getElementById("inputBTC").value;
    const Doll = document.getElementById("inputDoll").value;
    result = Doll/BTC;
    document.getElementById("suma").innerHTML = result;

    if(isNaN(result) || infinity(result)){
    document.getElementById("suma").innerHTML = "0";
        }
    }
