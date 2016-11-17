// Funcion para moverse al link de las reacciones paso a paso
function moveToTutorial(offset) {
    var equations = document.getElementById("equations");
    var selectedIndex = equations.selectedIndex;
    window.location.href = "reacciones.html?ecuacion=" + (selectedIndex + offset);
}

// Funcion para moverse al link de las reacciones de quiz
function moveToTutorial2(offset) {
    var equations = document.getElementById("equations2");
    var selectedIndex = equations.selectedIndex;
    window.location.href = "reacciones.html?ecuacion=" + (selectedIndex + offset);
}

// Funcion para moverse al link de aplicaciones/ejemplos
function moveToApplications() {
    window.location.href = "aplicaciones.html";
}

// Funcion para animar un elemento de HTML
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

// String que almacena el modal con informacion de recordatorio
var modal = "\n    <div class=\"modal\" id=\"modal\" style=\"display:none;\">\n        <p class=\"small_font\">\n            El <span style=\"color: #F95759\">estado de oxidaci\xF3n</span> para cada \xE1tomo de carbono en una mol\xE9cula org\xE1nica\n            se obtiene agregando cada uno de los siguientes valores para cada uno de sus cuatros enlaces:\n        </p>\n\n        <table class=\"small_font\" style=\"text-align: center; margin-right: auto; margin-left: auto\">\n            <tr>\n                <th>Para cada enlace con:</th>\n                <th>N\xFAmero de oxidaci\xF3n</th>\n            </tr>\n            <tr>\n                <td>H o metales</td>\n                <td>-1</td>\n            </tr>\n            <tr>\n                <td>C</td>\n                <td>0</td>\n            </tr>\n            <tr>\n                <td>Hetereo\xE1tomos (N, X, O, S)</td>\n                <td>+1</td>\n            </tr>\n        </table>\n\n        <ul>\n            <li class=\"small_font\"><span style=\"color: #F95759\">Oxidaci\xF3n</span> en una mol\xE9cula org\xE1nica ocurre cuando son removidos hidr\xF3genos o se a\xF1aden ox\xEDgenos o hetero\xE1tomos.</li>\n            <li class=\"small_font\"><span style=\"color: #F95759\">Reducci\xF3n</span> (ganancia de electrones) en una mol\xE9cula ocurre al a\xF1adir hidr\xF3genos o remover ox\xEDgenos.</li>\n            <li class=\"small_font\">La adici\xF3n de otros hetero\xE1tomos sobre una mol\xE9cula es tambi\xE9n <span style=\"color: #F95759\">oxidaci\xF3n</span> (a menos que el hidr\xF3geno tambi\xE9n se agregue) y remover hetero\xE1tomos es <span style=\"color: #F95759\">reducci\xF3n</span> (sin remover hidr\xF3genos).</li>\n        </ul>\n    </div>\n";

