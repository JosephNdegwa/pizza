var price , crustPrice, toppingPrice ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

$(document).ready(function(){

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

    let toppingValue = ptopping.length*50;
    console.log("toppings value" + toppingValue);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      alert("Please select a pizza size and crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crustPrice + toppingValue;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    
// Add pizza button
    $("button.addPizza").click(function(){
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
           console.log("The price is "+price);
         break;
         case "small":
           price = 500;
           console.log(price);
         default:
           console.log("error"); 
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
            console.log("No price"); 
        }
        let toppingValue = ptopping.length*80;
        console.log("toppins value" + toppingValue);
        total = price + crustPrice + toppingValue;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // constractor function
      var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your bills is Ksh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is Ksh. "+checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount= checkoutTotal+100;
      console.log("You will pay Ksh. "+deliceryamount+" on delivery");
      $("#totalbill").append("Your total price and delivery fee is: "+deliceryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount= checkoutTotal+100;
      console.log("Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person + ", We have recieved your order and it will be delivered to you at "+location+ ". Prepare Ksh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});