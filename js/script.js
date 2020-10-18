var price , crust_price, topping_price ;
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