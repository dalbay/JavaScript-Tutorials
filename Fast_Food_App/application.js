var customerOrder;
var customerOrderList = [];
const menu = {
  Tuna_Sandwich: 10,
  Beef_Sandwich: 10,
  Bean_Taco: 10,
  Garden_Salad: 10,
  Pastrami_Sandwich: 10,
  Salami_Sandwich: 10,
  Turkey_Sandwich: 10
};

document.querySelector("#btnOrder").addEventListener("click", getOrder);
var order = document.getElementById("txtOrder");

function checkOrder() {
  for (var key in menu) {
    let menu = key; //+ menu[key];
  }
}
checkOrder();

function fillMenu() {
  let list = document.querySelector("div#menuList ol");

  for (var key in menu) {
    li = document.createElement("li");

    let menuItem = key; //+ menu[key];
    li.innerText = menuItem.replace("_", " ") + " - " + menu[key];
    list.appendChild(li);
  }
}
fillMenu();

// Get Input-Order
function getOrder(e) {
  e.preventDefault();

  customerOrder = order.value;
  if (checkInventoryOnHand(customerOrder)) {
    for (var key in menu) {
      let menuItem = key.replace("_", " ");
      if (menuItem === customerOrder) {
        console.log(customerOrder);

        customerOrderList.push(customerOrder);
        createOrderHeader();
        createInventoryList();
        clearInput();
        deleteFromInventory(customerOrder);
      }
    }
  }
}
// Check if the inventory is not 0
function checkInventoryOnHand(order) {
  for (var key in menu) {
    let menuItem = key.replace("_", " ");
    if (menuItem === order) {
      if (menu[key] !== 0) {
        return true;
      } else return false;
    }
  }
}
checkInventoryOnHand("Tuna Sandwich");

// subtract for inventory:
function deleteFromInventory(product) {
  for (var key in menu) {
    let menuItem = key.replace("_", " ");
    if (menuItem === product) {
      updateProductValue(product);
    }
  }
}
//deleteFromInventory("Tuna Sandwich");

function updateProductValue(product) {
  var newMenu = {};
  var value;
  Object.keys(menu).forEach(function(key) {
    value = key;
    if (value === product.replace(" ", "_")) {
      newMenu[value] = menu[key] - 1;
    } else {
      newMenu[value] = menu[key];
    }
  });
  // fill the menu with new content:
  for (var key in newMenu) {
    menu[key] = newMenu[key];
  }
  clearMenu();
  fillMenu();
}

// Delete the menu for new update
function clearMenu() {
  let list = document.querySelector("div#menuList ol");
  if (list.hasChildNodes) {
    while (list.childNodes[1]) {
      list.removeChild(list.childNodes[1]);
    }
  }
}

function createOrderHeader() {
  let header = document.querySelector("div#orderList h4");
  header.innerText = "Here is Your Order:";
}

function clearInput() {
  order.value = "";
}

// display order list
function createInventoryList() {
  if (order.value.length !== 0) {
    let list = document.querySelector("div#orderList ol");
    li = document.createElement("li");
    li.innerText = customerOrderList[customerOrderList.length - 1];
    list.appendChild(li);
  }
}
