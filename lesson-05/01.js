/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

// const game = {
//   resources: {
//     gold: 250,
//     lumber: 100,
//   },
//   addResource(swan, num) {
//     for (const key in game.resources) {
//       if(swan === key && num >= 0) {
//           this.resources[key] += num;
//             console.log(game.resources);
//             return;
//         } console.log('Invalid resource');
//       } 
//     } 
//   }

// game.addResource('gold', 500);

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, num) {
    for (const key in this.resources) {
      if (resource === key && num >= 0) {
        this.resources[key] += num;
        console.log(this.resources);
        return; // чтобы завершить выполнение функции после добавления ресурса
      }
    }
    console.log('Invalid resource');
  }
};

game.addResource('lumber', 100);