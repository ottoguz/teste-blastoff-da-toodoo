var chocolate_ice_cream = "";


function capture() {
    chocolate_ice_cream = document.getElementById("chocolate").value.toLocaleLowerCase();
    if(chocolate_ice_cream == "chocolate") {
        alert("I REALLY LOVE CHOCOLATE ICE CREAM <3")

    }
    else {
        alert("I prefer other flavors!!!")
    }

}


