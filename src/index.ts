import {ParkCars} from "./assets/Classes/ParkCars";
import {CreatorBMW, CreatorMercedes} from "./assets/Classes/CreatorCar";
import {Autopilot, Parktronic} from "./assets/Classes/DecoratorCar";
import {Body, Build, Engine, Tools} from "./assets/Classes/Composite";
import {Caretaker, Originator} from "./assets/Classes/Memento";

document.body.innerHTML = `<div class="container">Cars</div>`;

let park = new ParkCars();
const caretaker = new Caretaker();
const originator = new Originator();

//Создаем машины
park.addCar(new CreatorBMW().create("M3"));
park.addCar(new CreatorMercedes().create("Benz S Class"));

//Сохраняем состояние парка
caretaker.addMemento(originator.save(park.clone()));

//Выводим что у нас в парке
park.getInfoCars();

//Поиск машины по модели
// console.log(park.getCar('M3'));

//Добавляем автопилот на BMW и парктроник на Мерседес
let car1 = park.getCar("M3");
let car2 = park.getCar("Benz S Class")
park.addCar(new Autopilot(car1));
park.addCar(new Parktronic(car2));

//Сохраняем состояние парка
caretaker.addMemento(originator.save(park.clone()));

console.log("");
console.log("После модернизации:");

park.getInfoCars();

console.log("");
console.log("Откат изменений:");

park = originator.restore(caretaker.getMemento(0));
park.getInfoCars();

//Делаем сборки запчастей для бмв
let build = new Build();
build.add(new Engine());
build.add(new Body());
build.add(new Tools());

console.log("");
console.log("Стоимость сбоки запчестей: " + build.getCost());