var itemTotalArr = [];


$(document).ready(function() {
	$('#addbutton').click(function() {
        var newestItem = $('#newitem');
        var itemQuantity = parseFloat($('#qty').val());
        var itemCost = parseFloat($('#cost').val());
        var itemTotal =(itemQuantity * itemCost);

        itemTotalArr.push(itemTotal);
        
        var finalTotal = 0;
            for(var i in itemTotalArr) { 
                finalTotal += itemTotalArr[i];
            };

        $(this).closest('div').find('.shoppinglist').append('<li class="listitem"><div class="remove"></div>' + '<span class="strong">'+newestItem.val()+'</span>' + ':      ' + '<span class="small">'+ itemQuantity + ' at $' + itemCost.toFixed(2) + ' each</span><span class="hiddencost">'+itemTotal+'</span></li>');
        newestItem.val('');
        $(this).closest('div').find('#total').val('$' + finalTotal.toFixed(2));
        $(this).parent().find('#qty').val('');
        $(this).parent().find('#cost').val('');
 
    });
    $('.shoppinglist').on("click","li", function(){
    $(this).removeClass('listitem');
    $(this).addClass('completed-item');
});
});



$(document).on("click", ".remove", function(){
    var removedCost = parseFloat($(this).siblings('.hiddencost').text());
    
    var currentTotal = 0;
            for(var i in itemTotalArr) { 
                currentTotal += itemTotalArr[i];
            };

    removeItem(itemTotalArr, removedCost);
    
    var upDatedCost = ((currentTotal-removedCost).toFixed(2));

    $(this).closest('div.main-content').find('#total').val('$'+ upDatedCost);
    $(this).closest('li').fadeOut(200);
});




removeItem = function(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
            };
    };
};