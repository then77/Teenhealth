import { animate } from "motion";

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        animate("#title", {
            opacity: [0, 1],
            translateY: [24, 0]
        }, {
            duration: 0.5,
            delay: '0.3',
            ease: "easeOut"
        });
    });
})();
