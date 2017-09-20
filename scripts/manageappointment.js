$( document ).ready(function() {
    var uid = Cookies.get('uid');
    var refid = Cookies.get('refid');

    if(!uid) { // user not logged in.
        windows.location.href="login.html";
    } else {
        if(!refid) { // there is no booking reference id, so user not supposed to be here.
            windows.location.href = 'bookappointment.html';
        } else {
            console.log("UID: " + uid);
            console.log('Booking refid: ' + refid);
            
        }
    } 

});