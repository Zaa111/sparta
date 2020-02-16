/* stylelint-disable */
// 1. Данные и какие-то действия
//     а. Хранить данные => переменные
//     б. Действия => использование api и собственные функции, которые агрегируют несколько вызовов разных api
//         1. Функции => повторяется что-то, много кода и мы хотим спрятать реализацию, динамическое что-то
// 2. Структуры данных - удобная организация данных, чтобы проще было работать
// 3. Асинхронное программирование


// ;

// const createImg = (class, width, height, src) => {
//     const img = document.createElement('img');
//     img.classList.add(class);
//     img.style.width = width;
//     img.style.height = height;
//     img.src = src;

//     return img;
// };

// const image = createImg('image', '350px', '400px', 'img/logo.svg');


// fetch(url)
    // .then((data) => {

    // });
// createImg();

const greet = function () {
    console.log(this === global)
    return 'Hello ' + this;

}
const robot = {
    name: 'Anton', // свойство
    material: 'ferum',
    weight: 100,
    // greet() { // метод
    //     return 'Hello' + this.name; // контекст исполнения, ссылка на тот обхект, на котром был исполнен метод
    // }
    // greet: greet,
};

robot.material
robot.weight.units
// console.log(global.greet());

class Robot {
    constructor(name, material, weight) {
        console.log(this);
        this.name = name;
        this.material = material;
        this.weight = weight;
    }

    greet() {
        return 'Hello' + this.name; 
    }
}

const anton = new Robot('Anton', 'ferum', 100);
const artem = new Robot('artem', 'ferum', 100);
console.log(anton.greet())
console.log(artem.greet())