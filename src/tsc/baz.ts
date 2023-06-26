export function addBaz(p: HTMLParagraphElement): void {
    const baz = document.createElement('p');
    baz.textContent = "This is a baz. changed.";

    p?.appendChild(baz);
}
