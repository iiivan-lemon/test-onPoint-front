import router from "Routing/router.ts";
import HomeViewClass from "./views/homeViewClass";
router.register("/", HomeViewClass);
router.start();