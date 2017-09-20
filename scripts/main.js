$( document ).ready(function() {
    $(".gotoAppointment").click(function(e){
        if($('#empID').val() !== "" && $('#pwd').val() !== ""){
            e.preventDefault();
            window.location.href = "bookappointment.html";   
        } 
    });
    
    $(".bookAppointment").click(function(e){
         e.preventDefault();
         window.location.href = "manageappointment.html";    
    });
    $(".loginbtn").click(function(e){
        window.location.href = "home.html";    
    });
    $(".registerbtn").click(function(e){
        window.location.href = "register.html";    
    });

    $('.notregistered').change(function(){
        if($(this).is(":checked")) {
            $('.register').removeClass("disabled");
        } else {
            $('.register').addClass("disabled");
        }
    });

    $('.addAnother').click(function(){
        var anotherMarkup = '<div class="row extravehicle"><div class="input-group col-sm-4"><input type="text" class="form-control"><span class="input-group-btn"><button class="btn btn-danger btn-default glyphicon glyphicon-remove remove-vehicle" type="button"></button></span></div></div>';
        $('.vehicledetails').after(anotherMarkup);
    });

    $(document).on('click','.remove-vehicle', function(){
        $(this).parents('.extravehicle').remove();
    });


    /* Form Submission Service calls*/
    $( "#login-form" ).submit(function( event ) {
    var formData = $('#login-form').serializeArray().reduce(function(obj, item) {
                    obj[item.name] = item.value;
                    return obj;
                }, {});
    //alert(JSON.stringify(data));
    event.preventDefault();
    $.ajax({
        type: "POST",
        //url: "http://10.144.20.117:8084/service/person/get",
        // The key needs to match your method's input parameter (case-sensitive).
        data: formData,
        headers: { 'Access-Control-Allow-Origin': '*' },
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: function(data){
            alert(data);
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
    });
});