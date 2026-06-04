const contenedor = document.getElementById("noticias");

function cargarNoticias(){

    contenedor.innerHTML = "<h3>Cargando noticias...</h3>";

    fetch("https://gnews.io/api/v4/top-headlines?lang=es&country=mx&max=10&apikey=7855ae2b27f11bd7d233e2e3db59d482")

    .then(respuesta => respuesta.json())

    .then(datos => {

        contenedor.innerHTML = "";

        datos.articles.forEach(noticia => {

            contenedor.innerHTML += `

            <div class="noticia">

                <h2>${noticia.title}</h2>

                <p>${noticia.description}</p>

                <a href="${noticia.url}" target="_blank">
                    Leer noticia completa
                </a>

            </div>

            `;

        });

    })

    .catch(error => {

        contenedor.innerHTML =
        "<h3>Error al cargar noticias.</h3>";

        console.log(error);

    });

}

cargarNoticias();