var arrSlides;

function start() {

    var pos = window.location.href.indexOf("=");

    // Sin parametros
    if (pos == -1) {
        window.location.href = "home.html";
        return;
    }

    var valor = window.location.href.substr(pos + 1);
    valor = parseInt(valor);

    // Indice invalido
    if (isNaN(valor) || (valor > arrEquations.length - 1)) {
        window.location.href = "home.html";
        return;
    }

    console.log(valor);

    arrSlides = arrEquations[valor];
    initialize(arrSlides[0]);
}

var lastSlide = -1;

function checkAnswers (slide) {
    var answers = document.getElementsByTagName("input");

    for (i = 0; i < answers.length; i ++) {
        console.log(answers[i].value.replace(/ /g,'').replace(/\+/g,''));
        if (answers[i].value.replace(/ /g,'').replace(/\+/g,'') != slide.answers[i]) return false;
    }

    return true;
}

function giveAnswers(slide) {
    var answers = document.getElementsByTagName("input");

    for (i = 0; i < answers.length; i ++) {
        answers[i].value = slide.answers[i];
        answers[i].readOnly = true;
    }
}

function initialize(slide) {
    document.body.innerHTML = "";
    document.body.innerHTML = slide.content + modal;

    document.getElementById("salir").addEventListener("click", function () {
        window.location.href = 'home.html';
    });

    document.getElementById("recordatorio").addEventListener("click", function () {
        $('#modal').modal({fadeDuration: 200});
    });

    window.onbeforeunload = function() {
        return "Leaving this page will reset the wizard";
    };

    // Animacion de entrada
    if (slide.num > lastSlide) {
        $("body").addClass("animated bounceInDown");
        lastSlide ++;
    }
    console.log("attempts");
    console.log(slide.attempts);
    if (slide.num < lastSlide || slide.attempts > 3) {
        giveAnswers(slide);
    }

    // Boton de avanzar

    if (document.getElementById("avanzar")) {

        document.getElementById("avanzar").addEventListener("click", function () {
            $('body').removeClass('animated bounceInDown');
            if (slide.num == lastSlide) {
                // Checar respuesta

                //console.log(document.getElementById("answer").value);
                //console.log(slide["answer"]);

                if (checkAnswers(slide)) {

                    if (slide.attempts <= 3) {
                        giveAnswers(slide);
                        document.getElementById("feedback").innerHTML = "¡Correcto!";
                        document.getElementById("feedback").style.color = "green";
                        document.getElementById("avanzar").disabled = true;
                        if(document.getElementById("regresar")!= null){
                           document.getElementById("regresar").disabled = true;
                       }

                        document.getElementById("feedback").style.visibility = "visible";

                        $('#feedback').animateCss('pulse');
                    }

                    setTimeout(function () {
                        console.log("MUEVETEE");
                        $('body').addClass('animated bounceOutDown');
                        $('body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $('body').removeClass('animated bounceOutDown');
                            initialize(arrSlides[slide.num + 1]);
                        });

                    }, ((slide.attempts <= 3) ? 1200 : 0));

                } else if (slide.attempts < 3) {

                    slide.attempts ++;

                    console.log("LOL");

                    document.getElementById("feedback").innerHTML = "¡Respuesta incorrecta!";

                    document.getElementById("feedback").style.visibility = "visible";

                    $('#feedback').animateCss('pulse');

                } else {

                    slide.attempts ++;

                    giveAnswers(slide);

                    document.getElementById("feedback").innerHTML = "Buen intento, sigue practicando";
                    document.getElementById("feedback").style.color = "orange";

                    $('#feedback').animateCss('pulse');

                }
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