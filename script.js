$(document).ready(function () {
    /*
     * Main variables
     */
    var content = [{
        title: "¡Feliz Aniversario vida mía!",
        desc: ""
    }, {
        title: "Loca Hermosa",
        desc: "El día de hoy cumplimos un año de relación, estoy muy pero muy feliz de que sigas siendo tú a la que escoge mi corazón, no tienes idea de que manera te amo, aún recuerdo cuando todo empezó, ese día no estaba seguro de lo que estaba haciendo, pero se volví lo mejor que hice en toda mi vida, y no me arrepiento, te amo tanto que te entrego mi vida entera, solo te pido que sigas haciendo el esfuerzo de soportarme, he sido muy insoportable, y, cada que hago algo de mis bromas, te amo más y más, ya que me doy cuenta que estoy con una persona que si me tolera, cosa que no muchos hicieron, eres la mejor mujer del mundo."
    }, {
       title: "",
       desc: "Nuestra relación puede ser muy complicada, pero mientras siga siendo contigo no dejaré de amarla, no importa la intencidad de los problemas, permite solucionar todo a tu lado por favor. Me di cuenta que es amar verdaderamente y gracias a ti, todo lo que tengo te lo quiero entregar, quizás no sean los detalles más grandes pero son con mucho amor, sabes que a mi se me hace complicado entregar detalles, pero por ti no importa, las haré con todo el amor."
    }, {
        title: "",
        desc: "Sabes amor... Durante todo el tiempo que nos encontramos alejados, no hay día en el que no piense una vida a tu lado, tengo una imaginación muy grande, y eso me dí cuenta hace poco, todo por tí. Me imagino la vida más hermosa a tu lado, algo que quiero a futuro, y también pienso cositas en el presente, como secuestrarte de tu casa y traerte conmigo (pero tú no quieres), bueno amor, nunca dudes del inmenso amor que te tengo, porque te aseguro de la manera que yo te amo nunca nadie lo hace en esta vida."
    }, {
        title: "",
        desc: "Un poco de nuestra historia, es que yo tenía pensado que solo me habías hablado para poder conversar sobre TdC, no se si fue como excusa para hablar, pero me gustaba, aunque tuve problemas por eso, pero no importaba, sabes como soy, bueno yo nunca me había hecho la idea de intentar algo nuevamente contigo porque no quería que tengas problemas con tu familia, porque eso era lo que había pasado el anterior año. Me gustaba pasar tiempo conversando, recuerdo que llegaba el día de la madre y todos nos íbamos a nuestras casas, llegué un día lunes y en la noche al encontrarme contigo te lo pedí, no había estado seguro de hacerlo, pero dije 'que chucha, al final ni verguenza me va dar si me rechazan'. Empezó nuestra relación y yo estaba muy contento con eso, te hice un presente por tu cumpleaños, fue mi primera vez haciendo un detalle, comencé hacerlo apenas y empezaba el día y lo terminé en la noche, como es no, me tome un día entero haciendo algo pequeño, ahí se ve mi falta de habilidad para las manuealidadad, luego llegaban las celebraciones de nuestros meses cumplidos, la primera vez que te peiné, nuestras primeras fotos, tantos momentos felices, tan felices que me llevaron a presentarte a mi familia a la distancia, nunca lo había hecho, sabía que mamá y toda mi familia iba a aceptarlo, lo único era que verse en persona. Eres la mujer que deseo eternamente en esta vida y en otras más, si dicen que soy gato, te amo en mis 7 vidas."
    },{
        title: "Tú eres mi loca",
        desc: "Feliz Aniversario, te desea tu hombre:)"
 }];
    var currentPage = 0;
    //generate content
    for (var i = 0; i < content.length; i++) {
        //split content letters to array
        for (var obj in content[i]) {
            //if string
            if (typeof content[i][obj] === "string") {
                content[i][obj] = content[i][obj].split("");
                continue;
            }
            //if array (grouped text)
            else if (typeof content[i][obj] === "object") {
                var toPush = [];
                for (var j = 0; j < content[i][obj].length; j++) {
                    for (var k = 0; k < content[i][obj][j].length; k++) {
                        toPush.push(content[i][obj][j][k]);
                    }
                }
                content[i][obj] = toPush;
            }
        }
        //set text to 
        $("#segments").append("<div class=\"letters-wrap mutable\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
        //clone to data
        $("#segments").append("<div class=\"letters-wrap position-data\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
    }
    //initial arrangement
    arrangeCurrentPage();
    scrambleOthers();
    /*
     * Event handlers
     */
    $(window).resize(function () {
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-prev").hide();
    $("#soup-prev").click(function () {
        $("#soup-next").show();
        currentPage--;
        if (currentPage === 0) {
            $("#soup-prev").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-next").click(function () {
        $("#soup-prev").show();
        currentPage++;
        if (currentPage === content.length - 1) {
            $("#soup-next").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    /*
     * Functions
     */
    function arrangeCurrentPage() {
        for (var i = 0; i < content[currentPage].title.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-title > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
        for (var i = 0; i < content[currentPage].desc.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
    }

    function setText() {
        var j;
        for (j = 0; j < content[i].title.length; j++) {
            $(".soup-title").last().append("<span class=\"letter\">" + content[i].title[j] + "</span>");
        }
        for (j = 0; j < content[i].desc.length; j++) {
            $(".soup-desc").last().append("<span class=\"letter\">" + content[i].desc[j] + "</span>");
        }
    }

    function scrambleOthers() {
        for (var i = 0; i < content.length; i++) {
            //don't scramble currentPage
            if (currentPage === i)
                continue;
            var parts = [
                ["title", ".soup-title"],
                ["desc", ".soup-desc"]
            ];
            //apply to .title h1s and .desc ps
            for (var j = 0; j < parts.length; j++) {
                for (var k = 0; k < content[i][parts[j][0]].length; k++) {
                    //define random position on screen
                    var randLeft = Math.floor(Math.random() * $(window).width());
                    var randTop = Math.floor(Math.random() * $(window).height());
                    //defining boundaries
                    var offset = $(".position-data").eq(currentPage).offset();
                    var bounds = {
                        left: offset.left,
                        top: offset.top,
                        right: $(window).width() - offset.left,
                        bottom: $(window).height() - offset.top
                    };
                    var middleX = bounds.left + $(".position-data").eq(currentPage).width() / 2;
                    var middleY = bounds.top + $(".position-data").eq(currentPage).height() / 2;
                    //finally, apply all the scrambles
                    $(".mutable:eq(" + i + ") > " + parts[j][1] + " > .letter").eq(k).css({
                        left: randLeft,
                        top: randTop,
                        color: "#DDD",
                        zIndex: "initial"
                    });
                }
            }
        }
    }
});