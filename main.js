$(document).ready(

    function () {

        $('.prev').click(prevImage);
        $('.next').click(nextImage);


        $('.nav i').click(function () {

        $('.nav i.active').removeClass('active'); 
        $(this).addClass('active');
        var indexClick = $(this).index();
        var imgActive = $('.images img').eq(indexClick);
        $('.images img').removeClass('active');
        imgActive.addClass('active');
        
        });

        //function previmage
        function prevImage() {

            var activeImg = $('.images img.active');
            var cercAttivo = $('.nav i.active');

            activeImg.removeClass('active');
            cercAttivo.removeClass('active');

            if (activeImg.hasClass('first')) {
                $('.images img.last').addClass('active');
                $('.nav i.last').addClass('active');
            } else {
                activeImg.prev().addClass('active');
                cercAttivo.prev().addClass('active');
            }
        }

        //function nextimage
        function nextImage() {

            var activeImg = $('.images img.active');
            var cercAttivo = $('.nav i.active');

            cercAttivo.removeClass('active')
            activeImg.removeClass('active');

            if (activeImg.hasClass('last')) {
                $('.images img.first').addClass('active');
                $('.nav i.first').addClass('active');
            } else {
                activeImg.next().addClass('active');
                cercAttivo.next().addClass('active');
            }
        }

    });



