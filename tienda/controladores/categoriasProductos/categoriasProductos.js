const htmlCategorias = `
<div class="categories">
    <!-- Primera fila -->
    <a href="#RELOJES" class="category-box category-1">
        <img src="/img/categorias/imagen1.png" alt="Categoría 1">
        <p>Relojes</p>
    </a>
    <a href="#GAFAS" class="category-box category-2">
        <img src="/img/categorias/imagen2.png" alt="Categoría 2">
        <p>Gafas de Sol</p>
    </a>
    <!-- Segunda fila -->
    <a href="#BRAZALETES" class="category-box category-3">
        <img src="/img/categorias/imagen3.png" alt="Categoría 3">
        <p>Brazaletes</p>
    </a>
    <a href="#COLLARES" class="category-box category-4">
        <img src="/img/categorias/imagen4.png" alt="Categoría 4">
        <p>Collares</p>
    </a>
</div>
`;

export function categoriasProductos() {
    let d = document;
    let seccionCategorias = d.querySelector('.seccionCategorias'); 

    // Insertamos el HTML de las categorías en el contenedor
    if (seccionCategorias) {
        seccionCategorias.innerHTML = htmlCategorias;
    }
}
