//% block="SuperLED" color="#ea2d29" weight=100 icon="\uf5bd"
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
     * Compares the image on the screen with another image.
     * @param leds the image to compare to
     */
    //% blockId=image_is_on_screen
    //% block="is on screen"
    //% imageLiteral=1
    export function isOnScreen(leds: string): boolean {
        let im = _createImage(leds);
        for (let k = 0; k < 5; k++) {
            for (let l = 0; l < 5; l++) {
                if (im.pixel(k, l) != led.point(k, l)) return false;
            }
        }
        return true;
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

    /**
     * Turns on the specified LEDs.
     * @param leds the LEDs to turn on
     */
    //% blockId=turn_on
    //% block="turn on these LEDs"
    //% imageLiteral=1
    export function turnOn(leds: string): void {
        let im = _createImage(leds);
        for (let m = 0; m < 5; m++) {
            for (let n = 0; n < 5; n++) {
                if (im.pixel(m, n)) {
                    led.plot(m, n);
                }
            }
        }
    }

    /**
     * Turns off the specified LEDs.
     * @param leds the LEDs to turn off
     */
    //% blockId=turn_off
    //% block="turn off these LEDs"
    //% imageLiteral=1
    export function turnOff(leds: string): void {
        let im = _createImage(leds);
        for (let m = 0; m < 5; m++) {
            for (let n = 0; n < 5; n++) {
                if (im.pixel(m, n)) {
                    led.unplot(m, n);
                }
            }
        }
    }

    /**
     * Checks if all the specified LEDs are turned on.
     * @param leds the LEDs to check
     */
    //% blockId=are_on
    //% block="are turned on these LEDs"
    //% imageLiteral=1
    export function areOn(leds: string): boolean {
        let im = _createImage(leds);
        for (let m = 0; m < 5; m++) {
            for (let n = 0; n < 5; n++) {
                if (im.pixel(m, n) && !led.point(m, n)) {
                    return false;
                }
            }
        }
        return true
    }

    /**
     * Checks if all the specified LEDs are turned off.
     * @param leds the LEDs to check
     */
    //% blockId=are_off
    //% block="are turned off these LEDs"
    //% imageLiteral=1
    export function areOff(leds: string): boolean {
        let im = _createImage(leds);
        for (let m = 0; m < 5; m++) {
            for (let n = 0; n < 5; n++) {
                if (im.pixel(m, n) && led.point(m, n)) {
                    return false;
                }
            }
        }
        return true
    }

    /**
     * Toggles the specified LEDs.
     * @param leds the LEDs to toggle
     */
    //% blockId=toggle
    //% block="toggle these LEDs"
    //% imageLiteral=1
    export function toggle(leds: string): void {
        let im = _createImage(leds);
        for (let m = 0; m < 5; m++) {
            for (let n = 0; n < 5; n++) {
                if (im.pixel(m, n)) {
                    if (led.point(m, n)) {
                        led.unplot(m, n)
                    } else {
                        led.plot(m, n)
                    }
                }
            }
        }
    }
}
