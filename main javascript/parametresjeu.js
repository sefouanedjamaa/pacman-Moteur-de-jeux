function Jeu(container, ms)
{
    this.container = $(container).get(0),
    this.ms = ms,
    this.width = this.container.width,
    this.height = this.container.height,
    this.ctx = this.container.getContext("2d"),
    this.play = true,

    this.droiteApp = false,
    this.gaucheApp = false,
    this.hautApp = false,
    this.basApp = false,

    this.init = function()
    {
        this.initCles();
        setInterval(this.mainLoop, this.ms);
    },

    this.initCles = function()
    {
        $(document).keydown(function(e) {
            if (jeu.play === true)
            {
                if (e.keyCode === 39)
                    jeu.droiteApp = true;
                else if (e.keyCode === 37)
                    jeu.gaucheApp = true;
                else if (e.keyCode === 38)
                    jeu.hautApp = true;
                else if (e.keyCode === 40)
                    jeu.basApp = true;
            }
        });

        $(document).keyup(function(e) {
            if (jeu.play === true)
            {
                if (e.keyCode === 39)
                    jeu.droiteApp = false;
                else if (e.keyCode === 37)
                    jeu.gaucheApp = false;
                else if (e.keyCode === 38)
                    jeu.hautApp = false;
                else if (e.keyCode === 40)
                    jeu.basApp = false;
            }
        });
    },

    this.mainLoop = function()
    {
        if (jeu.play === true)
        {
            jeu.ctx.clearRect(0, 0, jeu.width, jeu.height);

            firstLevel.generate();

            pacman.create("./sprites/pacman.png");
            pacman.move();

          yellow.create("./sprites/yellow.png");
            yellow.move(2);

            green.create("./sprites/green.png");
            green.move(3);

            white.create("./sprites/white.png");
            white.move(2);

            violet.create("./sprites/violet.png");
            violet.move(3);

            $("#score").html(pacman.score);

            if (pacman.score >= 134)
            {
                alert("congrats !");
                jeu.play = false;
            }
        }else{
            alert("Game over");
        }
        jeu.keyManager();
    },

    this.keyManager = function()
    {
        if (jeu.droiteApp)
            pacman.direction = 0;
        if (jeu.gaucheApp)
            pacman.direction = 1;
        if (jeu.hautApp)
            pacman.direction = 2;
        if (jeu.basApp)
            pacman.direction = 3;
    };
}

var jeu = new Jeu("canvas", 24),
    pacman = new Pacman(19, 19, 1, 1, "#3498DB"),
    yellow = new Fantome(19, 19, 9, 10, "#FF0000"),
    green = new Fantome(19, 19, 9, 10, "#0000FF"),
    white = new Fantome(19, 19, 9, 10, "#FFFF00"),
    violet = new Fantome(19, 19, 9, 10, "#FF00FF"),
    mange = new Mange(4),
    firstLevel = new Map(firstMap, 19);

jeu.init();
