var price , crustPrice, toppingPrice ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

$("button.proceed").click(function(event){
  let pname = $(".name option:selected").val();
  let psize = $("#size option:selected").val();
  let pcrust = $("#crust option:selected").val();
  let ptopping = [];
  $.each($("input[name='toppings']:checked"), function(){            
      ptopping.push($(this).val());
  });
  console.log(ptopping.join(", "));

  switch(psize){
    case "0":
      price =0;
    break;
    case "deluxe":
       price = 1100;
       console.log(price);
     break;
     case "medium":
       price = 800;
       console.log("Your price is "+price);
     break;
     case "small":
       price = 500;
       console.log(price);
     default:
       console.log("err"); 
   }
   switch(pcrust){
      case "0":
        crustPrice = 0;
      break;
      case "Crispy":
        crustPrice = 200;
      break;
      case "Stuffed":
        crustPrice = 100;
      break;
      case "Gluten":
        crustPrice = 150;
      break;
      default:
        console.log("Price null"); 
    }

    let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);
    total = price + crust_price + topping_value;
    console.log(total);

    checkoutTotal = checkoutTotal + total;
    console.log(checkoutTotal);
  
  var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

  $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
  console.log(newOrder);
});



$("button#checkout").click(function(){ 
  $("button#checkout").hide();
  $("button.addPizza").hide();
  $("button.deliver").slideDown(1000);
  $("#addedprice").slideDown(1000);
  console.log("Your is Ksh. "+checkoutTotal);
  $("#pizzatotal").append("Your bill is Ksh. "+checkoutTotal);
});

$("button.deliver").click(function(){
  $(".pizzatable").hide();
  $(".choise h2").hide();
  $(".delivery").slideDown(1000);
  $("#addedprice").hide();
  $("button.deliver").hide();
  $("#pizzatotal").hide();
  let deliceryamount= checkoutTotal+150;
  console.log("Please pay Ksh. "+deliceryamount+" on delivery");
  $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
});
