"use strict";

const script = document.createElement('script'); // Создал конст. script, куда поместил значение, (тэг script).
script.src = 'js/test1.js'; // Указал атрибут для тега script из конст. script, путём src.
script.defer = true; // Добавляю артибут для defer для тега script.
document.body.append(script); // Добавляю тег script в body (в самый конец).