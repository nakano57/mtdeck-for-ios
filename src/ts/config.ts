import { safeHtml } from "./utils";
export class Config {
  private $el: HTMLDivElement;

  private addButton() {
    var footer: HTMLInputElement = <HTMLInputElement>(
      document.querySelector("mtdeck-config-footer")
    );

    footer.appendChild(
      safeHtml(`
        <button id="mtdeck-config-quit">${"configQuitLabel"}</button>
    `)
    );

    document
      .querySelector("#mtdeck-config-quit")
      .addEventListener("click", () => {
        this.quite();
        location.reload();
      });
  }

  private quite() {}
}
