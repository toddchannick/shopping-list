$(document).ready(function() {
	$('#addbutton').click(function() {
        var newestItem = $('#newitem');
        var itemQuantity = parseInt($('#qty').val());
        var itemCost = parseInt($('#cost').val());
        var itemTotal =(itemQuantity * itemCost);
        $(this).closest('div').find('.shoppinglist').append('<li><div class="remove"></div>' + newestItem.val() + '</li>');
        newestItem.val('');
        $(this).closest('div').find('#total').val(finalTotal);
    });
});




$(document).on("click", ".remove", function(){
    $(this).closest('li').fadeOut(200);
});



var itemTotalArr = [];

var newestItem = $('#newitem');
var itemQuantity = parseInt($('#qty').val());
var itemCost = parseInt($('#cost').val());
var itemTotal =(itemQuantity * itemCost);

var finalTotal = 0;
    for(var i in itemTotalList) { 
        total += itemTotalArr[i]; 
    };


