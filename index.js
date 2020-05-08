$(document).ready(function() {

    let tourList = $('.col-sm-7 ul a:eq(1)');
    let chooseTourBtn = $('.main_btna');
    let getConsultationBtn = $('.main_btn');
    let overlay = $('.overlay');
    let modalWindow = $('.modal');
    let closeBtn = $('.close');

    let showModal = () => {
        overlay.css('display', 'block');
        overlay.animate({opacity: '1'}, 200);
        modalWindow.slideDown(200);
    };

    tourList.click(() => {
        showModal();
    });

    chooseTourBtn.click(() => {
        showModal();
    });

    getConsultationBtn.click(() => {
        showModal();
    });

    closeBtn.click(() => {
        console.log(4444);
        overlay.animate({opacity: '0'}, 200);
        overlay.css('display', 'none');
        modalWindow.slideUp(200);
    });

});


