$(function(){
    const openMobileMenu = ()=>{
        $("#btn-menu").toggleClass("fa-times");
        $("#mobile-nav").toggleClass("active");
    }
    const closeMobileMenu = ()=>{
        $("#btn-menu").addClass("fa-bars");
        $("#btn-menu").removeClass("fa-times");
        $("#mobile-nav").removeClass("active"); 
    }
    $(".fa-bars").click(openMobileMenu);
    $("#mobile-a1, #mobile-a2, #mobile-a3, #mobile-a4, #mobile-a5, .fa-times").click(closeMobileMenu);



    
    $("#btn-basic").click(()=>{
        $("#btn-basic").addClass("selected");
        $("#btn-interm").removeClass("selected");
        $("#btn-advanc").removeClass("selected");
        $(".pack").html(`
        <h2>Paquete <span>Basico</span></h2>
        <p>Ideal para aquellas empresas que acaban de empezar y quieren crecer rápidamente. Darle más vista a tu negocio nunca fue tan <b>económico</b>. </p>
        <h3>Incluye:</h3>
        <div class="includes">
            <ul>
                <li>Hasta 3 secciones</li>
                <li>Secciones a elección </li>
                <li>Posibles revisiones:  1  </li>
                <li>Entrega: 2 a 5 días <i>(hábiles)</i> </li>
            </ul>
            <ul>
                <li><span class="adv">Formato de secciones modificable</span></li>
                <li><span class="adv">Integración de Maps</span></li>
                <li><span class="adv">Carrito y Buscador</span></li>
                <li><span class="adv">Pasarelas de Pago (MercadoPago)</span></li>
            </ul>
        </div>`);
        $(".precio").html("45 a 80");
    });
    $("#btn-interm").click(()=>{
        $("#btn-interm").addClass("selected");
        $("#btn-basic").removeClass("selected");
        $("#btn-advanc").removeClass("selected");
        $(".pack").html( `
        <h2>Paquete <span>Intermedio</span></h2>
        <p> Estas preparado para pasar por arriba a la competencia? Modificamos las secciones a tu gusto y además podrás mostrar tu ubicación en <b>Maps</b>.</p>
        <h3>Incluye:</h3>
        <div class="includes">
            <ul>
                <li>Hasta 5 secciones</li>
                <li>Secciones a elección  </li>
                <li>Posibles revisiones:  3  </li>
                <li>Entrega: 4 a 8 días <i>(hábiles)</i> </li>
            </ul>
            <ul>
                <li>Formato de secciones modificable</li>
                <li>Integración de Maps</li>
                <li><span class="adv">Carrito y Buscador</span></li>
                <li><span class="adv">Pasarelas de Pago (MercadoPago)</span></li>
            </ul>
        </div>`);
        $(".precio").html("80 a 150");
    });
    $("#btn-advanc").click(()=>{
        $("#btn-advanc").addClass("selected");
        $("#btn-interm").removeClass("selected");
        $("#btn-basic").removeClass("selected");
        $(".pack").html( `
        <h2><span>E-Commerce</span></h2>
        <p> Estas dispuesto a llevar tu negocio al siguiente nivel? Empezá a ofrecer tus productos y/o servicio a traves de tu nuevo sitio web de modelo <b>E-Commerce</b>.</p>
        <h3>Incluye:</h3>
        <div class="includes">
            <ul>
                <li>Secciones a elección </li>
                <li>Posibles revisiones:  5  </li>
                <li>Entrega: 5 a 10 días <i>(hábiles)</i> </li>
                <li>Formato de secciones modificable</li>
            </ul>
            <ul>
                <li>Integración de Maps</li>
                <li>Carrito y Buscador</li>
                <li>Pasarelas de Pago (MercadoPago)</li>
                
            </ul>
        </div>`);
        $(".precio").html( "150 a 250");
    });
});








