class Star {
    constructor() {
        this.x3d = Math.random() * 1800 - 900;
        this.y3d = Math.random() * 1800 - 900;

        this.x = this.x3d + window.innerWidth / 2; // Centra horizontalmente en relación con la ventana
        this.y = this.y3d + window.innerHeight / 2; // Centra verticalmente en relación con la ventana

        this.z = Math.random() * 1000;
        this.FOV = 250;
        this.scale = this.FOV / (this.z + this.FOV);
        this.w = 1;
        this.h = 1;
        this.speed = 2;
        this.id = "r" + this.x + this.y;

        this.insertDOM();
    }

    insertDOM() {
        let div = document.createElement("div");
        let display = document.body; // Cambia para agregar al cuerpo de la página

        div.style.position = "absolute";
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        div.style.width = this.w + "px";
        div.style.height = this.h + "px";
        div.style.backgroundColor = "transparent";
        div.style.backgroundImage = "url('star.png')"
        div.style.backgroundSize = "cover";
        div.style.opacity = "0.0";

        div.id = this.id;

        display.appendChild(div);
    }

    update() {
        this.z -= this.speed;

        this.scale = this.FOV / (this.z + this.FOV);

        let x3d = this.x3d * this.scale;
        let y3d = this.y3d * this.scale;

        this.x = x3d + window.innerWidth / 2;
        this.y = y3d + window.innerHeight / 2;

        let opacity = this.scale > 1.0 ? 1.0 : this.scale;

        let m = document.getElementById(this.id);
        m.style.left = this.x + "px";
        m.style.top = this.y + "px";
        m.style.width = (4 * this.scale) + "px";
        m.style.height = (4 * this.scale) + "px";
        m.style.opacity = opacity;

        if (this.x < -this.w || this.x > (window.innerWidth + this.w) || this.y < -this.h || this.y > (window.innerHeight + this.h)) {
            this.x3d = Math.random() * 1800 - 900;
            this.y3d = Math.random() * 1800 - 900;
            this.z = 1000;
        }
    }
}

function main() {
    let stars = [];
    let num_stars = 300;

    for (let i = 0; i < num_stars; i++)
        stars.push(new Star());

    function update() {
        for (let i = 0; i < num_stars; i++)
            stars[i].update();

        requestAnimationFrame(update);
    }

    update();
}

window.onload = main;
