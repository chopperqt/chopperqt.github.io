function btnDeleteTicketClick(id) {
    $("#cart-offer-"+id).slideToggle();
    setTimeout(function () {
        $("#cart-offer-"+id).remove();
    },1500);
}