/**
 * Created by AI on 3/31/2017.
 */
//        <li><input type="checkbox"><span>Write My Wish</span></li>

    /**
    * Function for add New Items
     * reason we use argument is because
     * we can use it with another Id
    * @param list
    */
    function addNewItem(list) {
       //using create element with li to make our list
        var listItem = document.createElement("li");
        //put Text on our list
        listItem.innerText= "Hello";
        //append text and list to our function argue
        list.appendChild(listItem);
    }
    //this var take ID From Our Form button
    var btnNew = document.getElementById("btnAdd");
/**
 * using onclick function to when user Click
 * run addNewItem function and pass our list Id
 */
btnNew.onclick = function () {
    addNewItem(document.getElementById("todoList"));
    };

