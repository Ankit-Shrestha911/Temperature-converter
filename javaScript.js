const copyright = document.getElementById('copyright');
const header = document.getElementById('header');
const responsive = window.matchMedia("(max-width: 700px)");

function tempCalculator() {
    const data = document.getElementById('temp').value;
    const choose = document.getElementById("selector");
    const temperature_Value = selector.options[choose.selectedIndex];
    const result = document.getElementById("result_Display");

    header.innerHTML = "Temperature Conveter";

    if (data.length != 0) {
        result.innerText = "Loading...";
        if (temperature_Value.value === "celsius") {
            const feh = Math.round((data * 9 / 5) + 32);
        
            setTimeout(()=>{
                result.innerHTML = `= ${feh}°Fahrenheit`;
            },1000);
            
        }
        else {
            const cel = Math.round((data - 32) * 5 / 9);
            
            setTimeout(()=>{
                result.innerHTML = `= ${cel}°Celsius`;
            },1000);

        }
    }
    else {
        alert("Please! Enter number");
        result.innerText = "";
    }

    setTimeout(()=>{
        copyright.innerHTML =  `&copy;Copyright 2021 Ankit Shrestha`;
    },1100);
    



}

function show(){
    copyright.innerHTML="";
    if(responsive.matches){
        header.innerHTML="";
    }


    
}
