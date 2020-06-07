function turnOnOff(){

    if (switchIsOn == false){
        changeElementSrc('switch', 'img/switch_on.png');
        switchIsOn = true
    } else {
        changeElementSrc('switch', 'img/switch_off.png');
        switchIsOn = false
    }

    if (isBroken == false){
        if (lightIsOn == false){
            changeElementSrc('light-bulb', 'img/on_light_bulb.png');
            lightIsOn = true;
        } else {
            changeElementSrc('switch', 'img/switch_off.png');
            changeElementSrc('light-bulb', 'img/off_light_bulb.png');
            lightIsOn = false;
        }
    }
}