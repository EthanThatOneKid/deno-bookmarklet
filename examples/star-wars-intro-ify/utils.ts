function checkElementCanScroll(element: Element): boolean {
  return element.scrollHeight > element.clientHeight;
}

function findScrollableParent(node: Node): Node | null {
  if (checkElementCanScroll(node)) return node;
  if (node.parentNode === null) return null;
  return findScrollableParent(node.parentNode);
}

/**
 * Begins an interval that scrolls the next scrollable parent element.
 * Returns the interval ID.
 */
export function scrollScrollableParent(
  element: Element,
  speed?: number,
): number | null {
  const scrollableParent = findScrollableParent(element);
  if (scrollableParent !== null) {
    const pixelsPerMillisecond = speed !== undefined
      ? innerHeight * speed / 1e3
      : 1;
    return setInterval(() => {
      scrollableParent.scrollBy({ top: pixelsPerMillisecond });
    }, 1);
  }
  return null;
}
