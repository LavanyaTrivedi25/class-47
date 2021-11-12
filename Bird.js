class Bird {

    constructor(){

        this.body = createSprite(200,300)
        this.body.addImage(birdImage)
        this.body.scale = 0.1
        this.body.debug = true
        this.body.setCollider("rectangle", 0,0,200,500)

    }
}