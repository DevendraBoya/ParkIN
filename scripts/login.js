$(document).ready(function () {
    var uid = Cookies.get('uid');
    if(uid && uid !== '') {
        console.log(Cookies.get('uid'));
        // uid cookie already available, redirect user to booking page.
        window.location.href="bookappointment.html";
    }

    // $(".gotoAppointment").click(function (e) {
    //     if ($('#empID').val() !== "" && $('#pwd').val() !== "") {
    //         e.preventDefault();
    //         window.location.href = "bookappointment.html";
    //     }
    // });

    $(".loginbtn").click(function (e) {
        window.location.href = "home.html";
    });

    /* Form Submission Service calls*/
    $("#login-form").submit(function (event) {
        var formData = $('#login-form').serializeArray().reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        event.preventDefault();

        loginUser($('#empID').val(), $('#pwd').val())
            .then(
                function (data) {
                    console.log('Data response: ' + data);
                    Cookies.set('uid', data.uid);
                    window.location.href="bookappointment.html";
                }
            )
            .catch(
                function (err) {
                    console.log('Error response: ' + err);
                    Cookies.remove('uid');
                }
            );
        // $.ajax({
        //     type: "POST",
        //     url: "http://10.144.20.117:8084/service/person/get",
        //     // The key needs to match your method's input parameter (case-sensitive).
        //     data: formData,
        //     headers: { 'Access-Control-Allow-Origin': '*' },
        //     contentType: "application/json; charset=utf-8",
        //     crossDomain: true,
        //     dataType: "json",
        //     success: function (data) {
        //         alert(data);
        //     },
        //     failure: function (errMsg) {
        //         alert(errMsg);
        //     }
        // });
    });

    function loginUser(email, password) {
        // mocking service response using a promise for now
        // [TBD]
        var loginPromise = new Promise(
            function (resolve, reject) {
                var resp = {
                    'uid': 'afdfja923497asdfkj349123',
                    'email': email,
                    'firstName': 'Naga Chaitanya',
                    'lastName': 'Konada',
                    'carNumbers': [
                        'AP05DA8058',
                        'TS34QD8823',
                        'TN03LM1103'
                    ]
                }
                resolve(resp);
            }
        );

        return loginPromise;


    }
});