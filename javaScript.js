const copyright = document.getElementById('copyright');

function tempCalculator() {
    const data = document.getElementById('temp').value;
    const choose = document.getElementById("selector");
    const temperature_Value = selector.options[choose.selectedIndex];
    const result = document.getElementById("result_Display");

    result.innerText = "Loading...";
    
    if (data.length != 0) {
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
    
}
