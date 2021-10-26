menu_list_array = ["Veg Margherita Pizza","Mushroom Pizza","Chicken Pizza","Paneer Pizza","Tandoori pizza"];
toppings_list_array = ["Veg Margherita Pizza", "Mushroom Pizza","Chicken Pizza","Paneer Pizza","Tandoori pizza"
];
function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    toppings_list_array.sort();
    var item=document.getElementById("toppings_list_array").value;
    menu_list_array.push(item);
	add_top();
}
