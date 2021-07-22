class Battery {
    energy;
    constructor(energy) {
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    decreaseEnergy(){
        if (this.energy > 0){
            this.energy--;
        }
    }
};
let battery = new Battery(10);
battery.getEnergy(battery);