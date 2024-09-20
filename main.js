$(document).ready(function () {
    
    // Slider
    if (window.location.href.indexOf('index') > -1) {
        
        $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: false,
        randomStart: false,
        preloadImages: 'all',
        speed: 500
        });
    }


    function getRandomDate() {
        const randomDay = Math.floor(Math.random() * 31) + 1; // Días del 1 al 31
        const randomMonth = Math.floor(Math.random() * 12); // Meses del 0 al 11 (0 = enero, 11 = diciembre)
        return moment().month(randomMonth).date(randomDay);
    }
    const randomDate = getRandomDate();
    const randomDate1 = getRandomDate();
    const randomDate2 = getRandomDate();
    const randomDate3 = getRandomDate();
    const randomDate4 = getRandomDate();
    const randomDate5 = getRandomDate();


    //Posts
    
    if (window.location.href.indexOf('index') > -1) {

            var posts= [

        {
            title: 'Tortugas Gigantes de Aldabra',
            date: 'Publicado el' + " " + randomDate.format("dddd Do MMMM YYYY"),
            content: "Al llegar al atolón de Aldabra, nos encontramos con las majestuosas Tortugas Gigantes de Aldabra. Estas criaturas imponentes, algunas de más de 100 años, se movían lentamente entre la vegetación. Con un peso que puede alcanzar los 250 kg, su presencia es impresionante. En el artículo, exploraremos su hábitat, dieta y la importancia de su conservación para asegurar su supervivencia."

        },
        {
            title: 'Buscando reptilianos en Komodo',
            date: 'Publicado el' + " " + randomDate1.format("dddd Do MMMM YYYY"),
            content: "Explorar la isla de Komodo en busca de reptilianos es una experiencia fascinante. Al adentrarnos en su hábitat natural, encontramos los famosos dragones de Komodo, criaturas imponentes y únicas en el mundo. En el artículo, detallo nuestras aventuras, los desafíos enfrentados y la increíble biodiversidad de la isla. Además, resalto la importancia de la conservación de estos magníficos reptiles y su entorno."
        },
        {
            title: 'Patas rojas en el corazón del Amazonas',
            date: 'Publicado el' + " " + randomDate2.format("dddd Do MMMM YYYY"),
            content: "Adentrarse en el corazón del Amazonas para encontrar las tortugas de patas rojas es una experiencia única. Estas tortugas, con sus distintivas manchas rojas, se esconden entre la densa vegetación tropical. En el artículo, relato nuestras observaciones sobre su comportamiento, los desafíos de su hábitat y la crucial necesidad de proteger estas especies para mantener el equilibrio ecológico de la región."
        },
        {
            title: 'Caparazón blando en las profundidades del Yangtze',
            date: 'Publicado el' + " " + randomDate3.format("dddd Do MMMM YYYY"),
            content: "Explorar las profundidades del río Yangtze en busca de la tortuga de caparazón blando es una aventura llena de descubrimientos. Estas tortugas, conocidas científicamente como Rafetus swinhoei, son una de las especies más raras y en peligro crítico de extinción. En el artículo, detallo nuestro encuentro con estos fascinantes reptiles, su hábitat acuático y los esfuerzos de conservación necesarios para evitar su extinción."
        },
        {
            title: 'Travesía Pacífica: Tortuga Verde',
            date: 'Publicado el' + " " + randomDate4.format("dddd Do MMMM YYYY"),
            content: "Navegar por el vasto Pacífico en busca de la Tortuga Verde es una travesía desafiante. Estas tortugas, con sus distintivos caparazones verdes, son verdaderas viajeras del océano, recorriendo miles de kilómetros en sus migraciones. En el artículo, comparto nuestras experiencias al observarlas en su hábitat natural, los desafíos que enfrentan debido a la contaminación y la pesca, y la importancia de las iniciativas de conservación para proteger estas increíbles criaturas marinas."
        },
        {
            title: 'Mesoclemmys Zuliae: Habitante del Catatumbo',
            date: 'Publicado el' + " " + randomDate5.format("dddd Do MMMM YYYY"),
            content: "Adentrarse en el Catatumbo para encontrar a la Mesoclemmys zuliae es como descubrir un secreto bien guardado de la naturaleza. Esta tortuga, única de la cuenca del Lago de Maracaibo, se caracteriza por su gran cabeza y su peculiar manera de plegarla lateralmente. En el artículo, narro nuestras observaciones sobre su comportamiento, el singular entorno que habita y los esfuerzos de conservación necesarios para proteger esta especie vulnerable. La biodiversidad del Catatumbo es un tesoro invaluable que merece ser preservado."
        },

        ];

        posts.forEach((item, index) => {
            var post =`
            <article class = "post">
            <h2>${item.title}</h2> 
            <span class = "date"> ${item.date}</span>
            <p>
            ${item.content} 
            </p> 
            <a href ="#" class = "button-more" > Leer mas </a> 
            </article>
            `;
            $("#posts").append(post);
        });

    };

    // Selector de tema

    var theme= $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "green.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "blue.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "red.css");
    });

    // Scroll hacia arriba de la web 

    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
           scrollTop: 0 
        }, 500);

        return false;
    });

    // Login falso (incompleto)

    $('#login form').submit(function(){
        var form_name= $('#form_name').val();

        localStorage.setItem('form_name', form_name);

    });

    var form_name= localStorage.getItem('form_name');

    if (form_name != null && form_name != 'undefined') {
        var about_parrafo= $('#about p')
        about_parrafo.html('<br><strong>Bienvenido, '+form_name+'</strong><br>');
        about_parrafo.append('<a href="#" id="logout">Cerrar sesion</a>');
        
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    };
    
    // Acordeon

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion({
            animate:500
        });
    }
    
    // Reloj

    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(() => {
            var reloj= moment().format("h:mm:ss");
            $('#reloj').html(reloj);
        },1000);
       
    }
    
    // Validacion de formulario

    if (window.location.href.indexOf('contact') > -1) {
    
        $("form input[name='date']").datepicker({
            dateFormat: 'yy/mm/dd'
        });
    
        $.validate({
        lang: 'es',
        errorMessagePosition: 'top', //mensajes de error al validar formularios
        scrollToTopOnError: true
        });
    };

});
