function btnAddMoney(){ // событие для ADD MONEY

    var inputMoney = document.getElementById('money'); // деньги клиента
    var cash = document.getElementById("cash"); // вводимая сумма
    
    if(inputMoney.value === 'No Money'){
        inputMoney.value = cash.value + "$";
    }
    else{
        var resCash = parseInt(inputMoney.value, 10); // парсим число из денег клиента
        var resCashinput = parseInt(cash.value, 10);// парсим число из вводимых денег
        inputMoney.value = resCash + resCashinput; // при добавление, добавляем в клиентские деньги)
        inputMoney.value += "$";
    }
}

function btnGetDrink(){ // событие для GET DRINK
    var cash = document.getElementById("money"); // деньги клиента
    var resCash = cash.value.replace(/\D/g, ""); // парсим только число
    var radios = document.querySelector('input[type="radio"]:checked'); // выбор напитка
    var inputMoney2 = document.getElementById('outdrink'); // сообщение для клиента
    if(radios.value <= resCash) // проверяю если хватает денег
    {   
      if(resCash === 0){ // если ноль
          cash.value = 'No Money';
      }
      else{
        var parseClientCash = parseInt(radios.value, 10);
        cash.value =  resCash - parseClientCash;
        cash.value += "$";
      }  
      inputMoney2.value = "Your - " + radios.className + " Bon appetit:)";// получаем напиток)
    }
}