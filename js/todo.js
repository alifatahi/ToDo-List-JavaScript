/**
 * Created by AI on 3/31/2017.
 */
//        <li><input type="checkbox"><span>Write My Wish</span></li>


/**
 * function for update Status
 */
function updateItemStatus() {
    //with replace we replace id character like: cb_2 with only 2
        var cbId = this.id.replace("cb_","");
    //add concat item_ with ID we get from ITem we Have
        var itemText = document.getElementById("item_" + cbId);
    if (this.checked){
        //style Done Item also the Way We Access to CSS in JS is not
        //text-decoration its textDecoration
        itemText.className = "checked";

    }else {
        itemText.className = "";


    }

}

/**
 * function for Rename Item
 * @returns {boolean}
 */
function renameItem() {
    var newText = prompt("What Should this Item Rename to?");
    if(!newText || newText == ""){
        return false;
    }
    this.innerText = newText;
}
/**
 * function to Remove Item
 */
function removeItem() {
    this.style.display = "none";
}
    /**
    * Function for add New Items
     * reason we use argument is because
     * we can use it with another Id
    * @param list
    */
    function addNewItem(list,itemText) {
        var date = new Date();
        /**
         * instead of having id like id++ we create special date and time
         * this way we avoid Global var
         * @type {string}
         */
        var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
       //using create element with li to make our list
        var listItem = document.createElement("li");
        listItem.id = "li_" + id;
        //function for Remove Item
        listItem.ondblclick = removeItem;
        //create Element for Input
        var checkBox = document.createElement("input");
        //declare type
        checkBox.type = "checkbox";
        //Check Box Id
        checkBox.id = "cb_" + id;
        //Update Status when click
        checkBox.onclick = updateItemStatus;
        //create another Element (span)
        var span = document.createElement("span");
        //Id item when Create
        span.id = "item_" + id;
        //concat item Text to put in span
        span.innerText = itemText;
        //using function to rename Item
        span.onclick = renameItem;
        //append both element
        listItem.appendChild(checkBox);
        listItem.appendChild(span);

        //append text and list to our function argue
        list.appendChild(listItem);
    }
    //Get Id and Value from Input
    var inItemText = document.getElementById("inItemText");
    //focus function is focus on field when browser load
    inItemText.focus();


/**
 * using onkeyup function to when user Click key its run
 */
inItemText.onkeyup = function (event) {
    /**
     * prompt is Browser JS function and when we run it it
     * ask question and place it into our List
     *
     * but because its Ugly we Don't use it
     */
    // var itemText = prompt("What Should We name This New Item?");

    //event.which(13) means enter so when user click on another key its not send
    if(event.which == 13){
        // var x =  " x ";
//Concat value from inItemText
        var itemText = inItemText.value;

        //Validation For My Field
        if(!itemText || itemText == ""){
            return false;
        }
        addNewItem(document.getElementById("todoList"),itemText);
        //after Create We Focus on Input and
        // also Select All for if want to add new Item
        inItemText.focus();
        inItemText.select();
    }

    };

