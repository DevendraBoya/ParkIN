$( document ).ready(function() {

    $('.addAnother').click(function(){
        var anotherMarkup = '<div class="row extravehicle"><div class="input-group col-sm-4"><input type="text" class="form-control"><span class="input-group-btn"><button class="btn btn-danger btn-default glyphicon glyphicon-remove remove-vehicle" type="button"></button></span></div></div>';
        $('.vehicledetails').after(anotherMarkup);
    });

    $(document).on('click','.remove-vehicle', function(){
        $(this).parents('.extravehicle').remove();
    });
});