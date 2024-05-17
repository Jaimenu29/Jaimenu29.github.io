var main = ()=>{

    let stars = [];
    let pid = 0;
    let num_stars = 300;

    for(let i = 0; i < num_stars; i++)
        stars.push(new Star());
    
    function update(){
        for(let i = 0; i < num_stars; i++)
            stars[i].update();

        pid = window.requestAnimationFrame(update);
    }

    pid = window.requestAnimationFrame(update);
}

window.onload = (()=>{
    main();
})();
