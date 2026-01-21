
import { router} from "./app/js/routes.js";

router()

// Event to change route changing hash
window.addEventListener("hashchange", router);

// Execute router after page change
window.addEventListener("load", router);