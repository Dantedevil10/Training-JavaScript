class Animal{
    dislaysituation(){
        console.log(` O Nome Dece Bixo é: ${this.name} `)
    }
    anotherone(){
        if (vivo == true){
        console.log(`Acho Que Ele Está: vivo`)
        }else{
            console.log(`Acho Que Ele Está: morto`)
        }
    }
}
class pinto extends Animal{
    name = "Pinto"
    voa(){
        console.log(`Esse ${this.name} Voa`)
    }
}
class cobra extends Animal{
    name = "Cobra"
    ras(){
        console.log(`Essa ${this.name} Rasteja`)
    }
}
class Dinossauro extends Animal{
    name = "Pitirodactilu"
    voa(){
        console.log(`Esse ${this.name} Voa`)
    }
}
const pinto1 = new pinto();
const cobra1 = new cobra();
const dinossauro1 = new Dinossauro();

pinto1.dislaysituation();
pinto1.anotherone(vivo = true);
pinto1.voa();

cobra1.dislaysituation();
cobra1.anotherone(vivo = true);
cobra1.ras();

dinossauro1.dislaysituation();
dinossauro1.anotherone(vivo = false);
dinossauro1.voa();