//Переменные комнат
//beentopreproom = true;


//ИНВЕНТАРЬ
sword = false;
axe = false;
//

//ТЕКУЩАЯ КОМНАТА
currentroom = "preproom";
//


$(document).ready(function() {

  $("#game_field").fadeIn(2000);

  $("form").submit(function() {
    var input = $("#command_line").val();
    var check = false;

    function check() {
      check = true;
    }

    // ПОМОЩЬ
    if (input == "помощь") {
      $("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
      check();
    }
    //

    //ВЗЯТЬ ПРЕДМЕТ
    if (input == "взять меч" && currentroom == "preproom") {
      $("<p>Ты взял меч.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
      check();
    }
    else if (input == "взять меч" && currentroom != "preproom") {
      $("<p>Здесь нет меча!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
      check();
    }
    //

    //ПЕРЕДВИЖЕНИЕ
    if (input == "в бой" && currentroom == "preproom") {
      currentroom = "arena";
      $("<p>Ты вошел на Арену.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
      check();
    }
    else if (input == "в бой" && currentroom != "preproom") {
      $("<p>Ты уже на Арене.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
      check();
    }

    if (input == "идти в зал ожидания" && currentroom == "arena") {
      currentroom = "preproom";
      $("<p>Ты вернулся в Зал Ожидания.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
      check();
    }

    //

    //ОШИБОЧНАЯ КОМАНДА
    else if(check == false) {
      $("<p>Твоя просьба " + input + " непонятна.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    //

    //СБРОС ТЕКСТА
    $("#command_line").val("");
    //

  });
});
