class FlashLamp {
    battery;
    constructor(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    light(){
        if (this.status){
            document.write("Lighting");
        }
        else {
            document.write("Not lighting");
        }
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
let flashLamp = new FlashLamp(battery);
flashLamp.getBatteryInfo();
for (let i = 10; i >= 0 ; i--) {
    if (i==0){
        alert("Het pin");
        break;
    }
    else {
        document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br>");
        flashLamp.light();
        document.write("Turn on" + "<br>");
        battery.decreaseEnergy();
        flashLamp.turnOn();
        flashLamp.light();
        document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br>");
        document.write("Turn off" + "<br>");
        flashLamp.turnOff();
        flashLamp.light();
    }
}
