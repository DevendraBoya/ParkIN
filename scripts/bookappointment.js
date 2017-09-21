var firstSeatLabel = 1;

$(document).ready(function() {
    var $cart = $('#selected-seats');
    var $counter = $('#counter');
    var $total = $('#total');
    var layout = [
        '_ppppp__p',
        'p_______p',
        'p_______p',
        'p__p_p__p',
        'p__p_p__p',
        'p__p_p__p',
        'p__p_p__p',
        'p__p_p__p',
        'p_______p',
        'p_______p',
        '_ppppp__p'
    ];
    var sc = $('#seat-map').seatCharts({
        map: layout,
        seats: {
            p: {
                price   : 0,
                classes : 'first-class', //your custom CSS class
                category: 'First Class'
            }
        },
        naming : {
            top : false,
            left: false,
            getLabel : function (character, row, column) {
                return firstSeatLabel++;
            },
            getId: function(character, row, column) {
                return "spot_"+firstSeatLabel;
            }
        },
        click: function () {
            console.log(this.node().text());
            if (this.status() == 'available') {
                
                sc.find('selected').status('available');
                
                return 'selected';
            } else if (this.status() == 'selected') {
                return 'available';
            } else if (this.status() == 'unavailable') {
                return 'unavailable';
            } else {
                return this.style();
            }
        },
        animate: true
});

    //this will handle "[cancel]" link clicks
    $('#selected-seats').on('click', '.cancel-cart-item', function () {
        //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
        sc.get($(this).parents('li:first').data('seatId')).click();
    });

    $('#layoutContainer').css('min-width', (layout[0].length * 50) + 'px');

    //let's pretend some seats have already been booked
    sc.get(['spot_2', 'spot_6', 'spot_7', 'spot_11', 'spot_17', 'spot_21', 'spot_26']).status('unavailable');
});

function recalculateTotal(sc) {
    var total = 0;

    //basically find every selected seat and sum its price
    sc.find('selected').each(function () {
        total += this.data().price;
    });
    
    return total;
}

$(document).ready(function() {
    $('#layoutContainer').hide(); 
    $(".getslots").click(function(e){
        e.preventDefault();
        $('#layoutContainer').show();    
    });
    
    $(".bookAppointment").click(function(e){
            e.preventDefault();
            window.location.href = "manageappointment.html";    
    });
});