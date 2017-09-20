$( document ).ready(function() {
    $(".gotoAppointment").click(function(e){
        if($('#empID').val() !== "" && $('#pwd').val() !== ""){
            e.preventDefault();
            window.location.href = "bookappointment.html";   
        } 
    });
    
    $(".loginbtn").click(function(e){
        window.location.href = "home.html";    
    });

    /* Form Submission Service calls*/
    $( "#login-form" ).submit(function( event ) {
    var formData = $('#login-form').serializeArray().reduce(function(obj, item) {
                    obj[item.name] = item.value;
                    return obj;
                }, {});
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "http://10.144.20.117:8084/service/person/get",
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