//% block="SuperLED" color="#ea2d29" weight=100 icon="\uf00a"
namespace SuperLED {

     /**
     * Compares the image on the screen with another image.
     * @param i the Image to compare to
     */
    //% blockId=screen_is_on_screen
    //% block="is on screen"
    //% imageLiteral=1
    export function isOnScreen(i: string): boolean {

        let im = <Image><any>i;
        for (let k = 0; k < 5; k++){
            for (let l = 0; l < 5; l++) {
                if (im.pixel(k, l) != led.point(k, l)) return false;
            }
        }
        return true;
    }
}
