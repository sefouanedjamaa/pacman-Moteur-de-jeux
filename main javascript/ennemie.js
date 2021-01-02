function Fantome(hauteur, largeur, posX, posY, couleur)
{
    this.hauteur = hauteur,
    this.largeur = largeur,
    this.echelle = 19,
    this.posX = posX * this.echelle,
    this.posY = posY * this.echelle,
    this.couleur = couleur,
    this.image = null,
    this.rapidite = 1.5,
    this.direction = 2,

    this.create = function(chemin)
    {
        chemin = chemin || false;

        if (chemin === false)
        {
            jeu.ctx.fillStyle = this.couleur;
            jeu.ctx.fillRect(this.posX, this.posY, this.hauteur, this.largeur);
        }
        else
        {
            this.image = new Image();
            this.image.src = chemin;

            jeu.ctx.drawImage(this.image, 0, 0, this.echelle, this.echelle, this.posX, this.posY, this.echelle, this.echelle);
        }
    },

    this.move = function(direction)
    {
        this.aDroite = firstMap[Math.floor((this.posY + (this.echelle / 2)) / this.echelle)][Math.floor((this.posX + this.echelle) / this.echelle)],
        this.aGauche = firstMap[Math.floor((this.posY + (this.echelle / 2)) / this.echelle)][Math.floor((this.posX - 1) / this.echelle)],
        this.enHaut = firstMap[Math.floor((this.posY - 1) / this.echelle)][Math.floor((this.posX + (this.echelle / 2)) / this.echelle)],
        this.enBas = firstMap[Math.floor((this.posY + this.echelle) / this.echelle)][Math.floor((this.posX + (this.echelle / 2)) / this.echelle)];

        if (Math.floor(this.posX / this.echelle) > Math.floor(jeu.hauteur / this.echelle))
            this.posX = 0;
        else if (Math.floor(this.posX / this.echelle) < 0)
            this.posX = jeu.hauteur;

        if (Math.floor(pacman.posX / this.echelle) == Math.floor(this.posX / this.echelle) &&
            Math.floor(pacman.posY / this.echelle) == Math.floor(this.posY / this.echelle))
            jeu.play = false;

        if (this.direction === 0)
        {
            jeu.ctx.drawImage(this.image, 0, 0, this.echelle, this.echelle, this.posX, this.posY, this.echelle, this.echelle);

            if (this.aDroite === 1)
            {
                this.direction = Math.floor(Math.random() * 4);
                return 0;
            }
            this.posX += this.rapidite;
        }
        else if (this.direction === 1)
        {
            jeu.ctx.drawImage(this.image, 0, this.echelle, this.echelle, this.echelle, this.posX, this.posY, this.echelle, this.echelle);

            if (this.aGauche === 1)
            {
                this.direction = Math.floor(Math.random() * 4);
                return 0;
            }
            this.posX -= this.rapidite;
        }
        else if (this.direction === 2)
        {
            jeu.ctx.drawImage(this.image, this.echelle, this.echelle, this.echelle, this.echelle, this.posX, this.posY, this.echelle, this.echelle);

            if (this.enHaut === 1)
            {
                this.direction = Math.floor(Math.random() * 4);
                return 0;
            }
            this.posY -= this.rapidite;
        }
        else if (this.direction === 3)
        {
            jeu.ctx.drawImage(this.image, this.echelle, 0, this.echelle, this.echelle, this.posX, this.posY, this.echelle, this.echelle);

            if (this.enBas === 1)
            {
                this.direction = Math.floor(Math.random() * 4);
                return 0;
            }
            this.posY += this.rapidite;
        }
    };
}