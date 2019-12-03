import {ParkCars} from "./assets/Classes/ParkCars";
import {CreatorBMW, CreatorMercedes} from "./assets/Classes/CreatorCar";
import {Autopilot, Parktronic} from "./assets/Classes/DecoratorCar";
import {Body, Build, Engine, Tools} from "./assets/Classes/Composite";

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

//Поиск машины по модели
// console.log(park.getCar('M3'));

//Добавляем автопилот на BMW и парктроник на Мерседес
let car1 = park.getCar("M3");
let car2 = park.getCar("Benz S Class")
park.addCar(new Autopilot(car1));
park.addCar(new Parktronic(car2));

console.log("После модернизации:");
park.getInfoCars();

//Делаем сборки запчастей для бмв
let build = new Build();
build.add(new Engine());
build.add(new Body());
build.add(new Tools());

console.log("Стоимость сбоки запчестей: " + build.getCost());