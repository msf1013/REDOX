function start() {
    initialize(arrSlides[0]);
}

var lastSlide = -1;

function initialize(slide) {
    console.log(slide.num);
    document.body.innerHTML = "";
    document.body.innerHTML = slide.content;

    // Animacion de entrada
    if (slide.num > lastSlide) {
        $("body").addClass("animated bounceInDown");
        lastSlide ++;
    }

    // Boton de avanzar

    if (document.getElementById("avanzar")) {

        document.getElementById("avanzar").addEventListener("click", function () {
            $('body').removeClass('animated bounceInDown');
            if (slide.num == lastSlide) {
                $('body').addClass('animated bounceOutDown');
                $('body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('body').removeClass('animated bounceOutDown');
                    initialize(arrSlides[slide.num + 1]);
                });
            } else {
                initialize(arrSlides[slide.num + 1]);
            }

        });

    }

    // Boton de regresar
    if (document.getElementById("regresar")) {

        document.getElementById("regresar").addEventListener("click", function () {
            $('body').removeClass('animated bounceInDown');
            console.log("REGRESAR");
            //$('body').addClass('animated bounceOutDown');
            //$('body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            //    $('body').removeClass('animated bounceOutDown');
                initialize(arrSlides[slide.num - 1]);
            //});
        });

    }
}