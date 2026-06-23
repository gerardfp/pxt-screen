//% block="SuperLED" color="#ea2d29" weight=100 icon="\uf00a"
namespace SuperLED {

    /**
     * Helper to convert imageLiteral string to Image.
     * On hardware, the shim replaces this function body entirely.
     * In the simulator, the cast is sufficient.
     */
    //% shim=images::createImage
    function _createImage(leds: string): Image {
        return <Image><any>leds;
    }

    /**
     * Randomly turns on the specified LEDs.
     * @param leds the LEDs to randomly turn on
     */
    //% blockId=random_on
    //% block="randomly turn on these LEDs"
    //% imageLiteral=1
    //% imageLiteralScale=0.6
    export function setRandom(leds: string): void {
        let im = _createImage(leds);
        
        for (let m = 0; m < 5; m++) {
            for (let n = 0; n < 5; n++) {
                if (im.pixel(m, n) && Math.randomBoolean()) {
                    led.plot(m, n);
                }
            }
        }
    }
}