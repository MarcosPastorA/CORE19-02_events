
// Importar Later.js:
const later = require('later');
const EventEmitter = require('./events');



class Programador extends EventEmitter {


constructor(conf){

super();
later.date.localTime();
if (config instanceof Array){
      for(var i=0; i<conf.lenght;i++){
        var h =conf[i];
        //hora -> e.hora
        //temperatura -> e.temperaturaIdeal
        console.log("Hora"+ h.hora + "temperaturaIdeal")
        later.setInterval(
          () => this.emit('ideal', e.temperatura),
          later.parse.text ('at' + e.hora)
        );
      }
    }



// Crear planificación para todos los dias a las 18:00
const sched = later.parse.text('at 18:00');
// Crear un temporizador que escriba indefinidamente "hola"
// en los instantes planificados anteriormente:
later.setInterval(() => console.log('hola'), sched);

   }
}

exports = module.exports = Programador;