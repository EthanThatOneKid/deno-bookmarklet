// import { FLAGS } from "./FLAGS.ts";
import { scrollScrollableParent } from "./utils.ts";

const speed = 1; //FLAGS.s ?? FLAGS.spd ?? FLAGS.speed ?? undefined;
let latestIntervalId: number;
document.querySelectorAll("*").forEach((clickableElement: Element) =>
  clickableElement.addEventListener(
    "click",
    (event: MouseEvent) => {
      if (latestIntervalId !== undefined) clearInterval(latestIntervalId);
      latestIntervalId = scrollScrollableParent(event.currentTarget, speed);
    },
  )
);
