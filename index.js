/**
 * @file mofron-comp-spinner/index.js
 * @brief spinner component for mofron
 * @license MIT
 */
const Rotate = require('mofron-effect-rotate');
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) string: message text
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Spinner");
	    
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();

            this.style({
                'border':        '0.15rem solid',
                'border-radius': '50%',
                'border-top':    '0.15rem solid',
            });
            this.effect(new Rotate(50));

            this.baseColor('#EAF0F6');
            this.mainColor('#FF7A59');
            this.size('0.5rem','0.5rem');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    mainColor (prm,opt) {
        try {
            return cmputl.color(this, "border-top-color", prm, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    baseColor (prm,opt) {
        try {
            return cmputl.color(this, "border-color", prm, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

}
/* end of file */
