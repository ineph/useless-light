isBroken = false;
lightIsOn = false;
switchIsOn = false;

function broke(){
    document.getElementById('light-bulb').src='img/broke_light_bulb.png';
    document.getElementById('light-bulb').alt='broken light bulb';
    isBroken = true;
}

function turnOnOff(){

    if (switchIsOn == false){
        document.getElementById('switch').src='img/switch_on.png';
        switchIsOn = true
    } else {
        document.getElementById('switch').src='img/switch_off.png';
        switchIsOn = false
    }

    if (isBroken == false){
        if (lightIsOn == false){
            document.getElementById('light-bulb').src='img/on_light_bulb.png';
            lightIsOn = true;
        } else {
            document.getElementById('switch').src='img/switch_off.png';
            document.getElementById('light-bulb').src='img/off_light_bulb.png';
            lightIsOn = false;
        }
    }
}