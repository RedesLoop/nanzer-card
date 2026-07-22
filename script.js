document.querySelectorAll(".btn").forEach(boton => {

    boton.addEventListener("click", () => {

        if (navigator.vibrate) {
            navigator.vibrate(20);
        }

    });

});