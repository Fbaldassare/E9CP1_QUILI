$('.images__image').on('click', function () {
    alert($(this).attr('alt'));
})
/*El javascript obstrusivo en este archivo dificulta la lectura del código y repite una misma sentencia muchas veces. Modifícalo para lograr que el evento click se gatille en todas las imágenes desde una misma función y, de esa forma, permitir que el código sea más legible y permita encontrar los errores de forma más sencilla.

Recuerda que no solo puedes escribir el código JS antes que cierre el body si no que también puede ser en un archivo externo.*/