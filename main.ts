//% block="SuperLED" color="#ea2d29" weight=100 icon="\uf00a"
namespace SuperLED {

    /**
     * Randomly turns on the specified LEDs.
     * @param leds the LEDs to randomly turn on
     */
    //% blockId=random_on
    //% block="randomly turn on these LEDs"
    //% imageLiteral=1
    //% imageLiteralScale=0.6
    //% shim=images::createImage
    export function setRandom(leds: string): void {
        let im = <Image><any>leds;
        
        for (let m = 0; m < 5; m++) {
            for (let n = 0; n < 5; n++) {
                if (im.pixel(m, n) && Math.randomBoolean()) {
                    led.plot(m, n);
                }
            }
        }
    }
}