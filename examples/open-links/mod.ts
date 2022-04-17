const LINKS = prompt("Enter a list of links separated by line breaks...");

if (LINKS != null) {
  LINKS.split("\n").forEach((link: string) => {
    try {
      window.open(new URL(link.trim()), "_blank");
    } catch {}
  });
}
