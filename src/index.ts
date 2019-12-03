import {ParkCars} from "./assets/Classes/ParkCars";
import {CreatorBMW, CreatorMercedes} from "./assets/Classes/CreatorCar";

document.body.innerHTML = `
  <div class="container">
    Cars
  </div>`;

let park = new ParkCars();

//Создаем машины
park.addCar(new CreatorBMW().create("M3"));
park.addCar(new CreatorMercedes().create("Benz S Class"));

//Выводим что у нас в парке
park.getInfoCars();