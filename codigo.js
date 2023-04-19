$(function () {
	const openMobileMenu = () => {
		$("#mobile-nav").toggleClass("active");
	};
	const closeMobileMenu = () => {
		$("#mobile-nav").removeClass("active");
	};
	$(".fa-bars").click(openMobileMenu);
	$(
		"#mobile-a1, #mobile-a2, #mobile-a3, #mobile-a4, #mobile-a5, #close-mobile-nav"
	).click(closeMobileMenu);

	$("#btn-basic").click(() => {
		$("#btn-basic").addClass("selected");
		$("#btn-interm").removeClass("selected");
		$("#btn-advanc").removeClass("selected");
		$(".pack").html(`
        <h2>Paquete <span>Basico</span></h2>
        <p>Ideal para aquellas empresas que acaban de empezar y quieren crecer rápidamente. Elegí una de nuestras plantillas y obtene tu sitio en tan solo 5 días.</p>
        <h3>Incluye:</h3>
        <div class="includes">
            <ul>
                <li>Carga de información </li>
                <li>Infinitas revisiones</li>
                <li>Entrega: 5 días hábiles </li>
                <li>Integración redes sociales</li>
            </ul>
            <ul>
                
                <li>Integración de Maps</li>
                <li>Hosting Privado</li>
                <li><span class="adv">Carrito y Buscador</span></li>
                <li><span class="adv">Pasarelas de Pago (MercadoPago)</span></li>
            </ul>
        </div>`);
	});
	$("#btn-interm").click(() => {
		$("#btn-interm").addClass("selected");
		$("#btn-basic").removeClass("selected");
		$("#btn-advanc").removeClass("selected");
		$(".pack").html(`
        <h2>Paquete <span>Personalizado</span></h2>
        <p> Tenes una idea para tu sitio web y no sabes como armarlo? Nosotros te lo creamos totalmente personalizado a tu manera.</p>
        <h3>Incluye:</h3>
        <div class="includes">
            <ul>
                <li>Secciones a elección  </li>
                <li>Infinitas revisiones</li>
                <li>Entrega: 5 días hábiles </li>
                <li>Integración redes sociales</li>
            </ul>
            <ul>
                
                <li>Integración de Maps</li>
                <li>Hosting Privado</li>
                <li><span class="adv">Carrito y Buscador</span></li>
                <li><span class="adv">Pasarelas de Pago (MercadoPago)</span></li>
            </ul>
        </div>`);
	});
	$("#btn-advanc").click(() => {
		$("#btn-advanc").addClass("selected");
		$("#btn-interm").removeClass("selected");
		$("#btn-basic").removeClass("selected");
		$(".pack").html(`
        <h2>Modelo <span>E-Commerce</span></h2>
        <p> Estas dispuesto a llevar tu negocio al siguiente nivel? Empezá a ofrecer tus productos y/o servicio a traves de tu nuevo sitio web de modelo <b>E-Commerce</b>.</p>
        <h3>Incluye:</h3>
        <div class="includes">
            <ul>
                <li>Secciones a elección </li>
                <li>Infinitas revisiones </li>
                <li>Entrega: 5 a 10 días <i>(hábiles)</i> </li>
                <li>Integración redes sociales</li>
            </ul>
            <ul>
                <li>Integración de Maps</li>
                <li>Hosting Privado</li>
                <li>Carrito y Buscador</li>
                <li>Pasarelas de Pago (MercadoPago)</li>
                
            </ul>
        </div>`);
	});
});
