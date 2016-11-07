arrEquations = [
    // Ecuacion 0
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₃H₇CHO + H₂ &rarr; C₄H₉OHC</h1>
        
                <h2 class="center small_padding">Paso 1: Asignar los números de oxidación de cada molécula</h2>             
                <p class="center"><img src="img/pasos/reaccion1/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo):</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CHO<input id="answer" type="text" class="small_input big_text">
                    H₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "1", "-2"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₃H₇CHO + H₂ &rarr; C₄H₉OHC</h1>
        
                <h2 class="center small_padding">Paso 2: Agregar uno de los hidrógenos a donde está el doble enlace del carbono</h2>
                <p class="center"><img src="img/pasos/reaccion1/paso1.png"></p>
                <p class="center">Ese carbono quedará con un <span style="color: #F95759">enlace simple</span> y con dos <span style="color: #F95759">hidrógenos</span>.</p>
                <p class="center">Escribe la ecuación con el <span style="color: #F95759">hidrógeno agregado</span>:</p>
                
                <div class="center big_text small_padding">
                    CH₃ - CH₂ - CH₂ - <input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["CH2O"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₃H₇CHO + H₂ &rarr; C₄H₉OHC</h1>
        
                <h2 class="center small_padding">Paso 3: Asignar la carga formal de los átomos</h2>
                <p class="center">Escribe la carga formal del <span style="color: #F95759">oxígeno</span>:</p>
                
                <div class="center big_text small_padding">
                    CH₃ - CH₂ - CH₂ - CH₂ - O <input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₃H₇CHO + H₂ &rarr; C₄H₉OHC</h1>
        
                <h2 class="center small_padding">Paso 4: Agregar el otro hidrógeno al oxígeno</h2>
                <p class="center">En este caso tiene un electrón disponible y puede crear <span style="color: #F95759">otro enlace</span>.</p>
                <p class="center">Escribe cómo quedaría el oxígeno <span style="color: #F95759">enlazado</span> al hidrógeno:</p>
                
                <div class="center big_text small_padding">
                    CH₃ - CH₂ - CH₂ - CH₂ - <input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["OH"]
        },
        {
            "num" : 4,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₃H₇CHO + H₂ &rarr; C₄H₉OHC</h1>
        
                <h2 class="center small_padding">Paso 5: Asignar el número de oxidación del producto</h2>
                <p class="center"><img src="img/pasos/reaccion1/paso5.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula:</p>
                
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    OH<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "-2", "0"]
        },
        {
            "num" : 5,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₃H₇CHO + H₂ &rarr; C₄H₉OHC</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion1/paso6.png"></p>
                <p class="center">
                    En este caso la reacción cambia de 1 a 0 (del O al OH) ya que los demás compuestos se quedaron iguales.
                    Como gana un electrón, ocurre una <span style="color: #F95759">reducción</span>.
                </p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
    // Ecuacion 1
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + Cl₂ &rarr; CH₃CHClCHClCH₃</h1>
        
                <h2 class="center small_padding">Paso 1: Asignar los números de oxidación de cada molécula</h2>             
                <p class="center"><img src="img/pasos/reaccion2/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo):</p>
                <p class="center"><span style="color: #F95759">PISTA:</span> En el caso de los halógenos, su número de oxidación será 0 ya que son iones. Cuando están formando una molécula es cuando aplica su número de oxidación.</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH<input id="answer" type="text" class="small_input big_text">
                    CH<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    Cl₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-1", "-1", "-3", "0"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + Cl₂ &rarr; CH₃CHClCHClCH₃</h1>
        
                <h2 class="center small_padding">Paso 2: Agregar los dos cloros a donde están los dos carbonos que comparten el doble enlace</h2>
                <p class="center"><img src="img/pasos/reaccion2/paso1.png"></p>
                <p class="center">Ese carbono quedará con un <span style="color: #F95759">enlace simple</span>, con un hidrógeno y con un cloro.</p>
                <p class="center">Escribe la ecuación con el <span style="color: #F95759">hidrógeno agregado</span>:</p>
                
                <div class="center big_text small_padding">
                    CH₃ - <input id="answer" type="text" class="small_input big_text"> -
                    <input id="answer" type="text" class="small_input big_text"> - CH₃
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["CHCl", "CHCl"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + Cl₂ &rarr; CH₃CHClCHClCH₃</h1>
        
                <h2 class="center small_padding">Paso 3: Asignar los números de oxidación del producto</h2>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula:</p>
                
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CHCl<input id="answer" type="text" class="small_input big_text">
                    CHCl<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "0", "0", "-3"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + Cl₂ &rarr; CH₃CHClCHClCH₃</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion2/paso4.png"></p>
                <p class="center">
                    La reacción pasa de tener los CH en -1 a CHCl en 0 por lo que
                    ocurre una <span style="color: #F95759">oxidación</span>, ya que gana electrones.
                </p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
    // Ecuacion 2
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂0 &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">Paso 1: Asignar los números de oxidación de cada molécula</h2>             
                <p class="center"><img src="img/pasos/reaccion3/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo):</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CHO<input id="answer" type="text" class="small_input big_text">
                    H₂O<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "1", "-1"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂0 &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">Paso 2: Agregar el OH y/o el hidrógeno al carbono que tiene el doble enlace con el oxígeno</h2>
                <p class="center">
                    La molécula de agua se separa en <span style="color: #F95759">H-OH</span>.
                    El átomo de oxígeno se va a unir con el CH que tiene el <span style="color: #F95759">doble enlace</span> con el oxígeno.
                </p>
                <p class="center">
                    Escribe la ecuación con el <span style="color: #F95759">OH</span>
                    y/o <span style="color: #F95759">hidrógeno</span> agregado:
                </p>
                <div class="center big_text small_padding">
                    CH₃ - CH₂ - CH₂ - <input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["COOH"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂0 &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">Paso 3: Asignar los números de oxidación del producto</h2>
                <p class="center"><img src="img/pasos/reaccion3/paso3.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo si el número de oxidación es diferente de 0):</p>
                
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    COOH<input id="answer" type="text" class="small_input big_text">
                    H₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback"></p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "2", "0"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂0 &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion3/paso4.png"></p>
                <p class="center">
                    La reacción paso de tener -7 a -5, es decir, pierde electrones.
                    Por lo tanto, es una <span style="color: #F95759">oxidación</span>.
                </p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
];