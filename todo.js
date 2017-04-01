/**
 * Created by AI on 3/31/2017.
 */
//        <li><input type="checkbox"><span>Write My Wish</span></li>

    function addNewItem(list) {
        var listItem = document.createElement("li");

        listItem.innerText= "Hello";
        list.appendChild(listItem);
    }
var btnNew = document.getElementById("btnAdd");
//we should not give our addNewItem function () because its not call onclick
btnNew.onclick = function () {
    addNewItem(document.getElementById("todoList"));
};

