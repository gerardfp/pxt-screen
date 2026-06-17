//% block="UScreen" color="#ea2d29" weight=100 icon="\uf00a"
namespace UScreen {

     /**
     * Compares the image on the screen with another image.
     * @param i the Image to compare to
     */
    //% blockId=screen_is_on_screen
    //% block="is on screen"
    //% imageLiteral=1
    export function isOnScreen(i: string): boolean {

        let im = <Image><any>i;
        if (im.pixel(0, 0) != led.point(0, 0)) return false;
        if (im.pixel(1, 0) != led.point(1, 0)) return false;
        if (im.pixel(2, 0) != led.point(2, 0)) return false;
        if (im.pixel(3, 0) != led.point(3, 0)) return false;
        if (im.pixel(4, 0) != led.point(4, 0)) return false;

        if (im.pixel(0, 1) != led.point(0, 1)) return false;
        if (im.pixel(1, 1) != led.point(1, 1)) return false;
        if (im.pixel(2, 1) != led.point(2, 1)) return false;
        if (im.pixel(3, 1) != led.point(3, 1)) return false;
        if (im.pixel(4, 1) != led.point(4, 1)) return false;

        if (im.pixel(0, 2) != led.point(0, 2)) return false;
        if (im.pixel(1, 2) != led.point(1, 2)) return false;
        if (im.pixel(2, 2) != led.point(2, 2)) return false;
        if (im.pixel(3, 2) != led.point(3, 2)) return false;
        if (im.pixel(4, 2) != led.point(4, 2)) return false;

        if (im.pixel(0, 3) != led.point(0, 3)) return false;
        if (im.pixel(1, 3) != led.point(1, 3)) return false;
        if (im.pixel(2, 3) != led.point(2, 3)) return false;
        if (im.pixel(3, 3) != led.point(3, 3)) return false;
        if (im.pixel(4, 3) != led.point(4, 3)) return false;

        if (im.pixel(0, 4) != led.point(0, 4)) return false;
        if (im.pixel(1, 4) != led.point(1, 4)) return false;
        if (im.pixel(2, 4) != led.point(2, 4)) return false;
        if (im.pixel(3, 4) != led.point(3, 4)) return false;
        if (im.pixel(4, 4) != led.point(4, 4)) return false;

        return true;
    }
}
