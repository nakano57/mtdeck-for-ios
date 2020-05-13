import { safeHtml, _ } from "./utils";
export class Config {
  private $el: HTMLDivElement;

  public init() {
    this.addButton();
  }

  private addButton() {
    var footer: HTMLInputElement = <HTMLInputElement>(
      document.querySelector(".mtdeck-config-footer")
    );

    footer.appendChild(
      safeHtml(`
        <button id="mtdeck-config-quit">${_("configQuitLabel")}</button>
    `)
    );

    document
      .querySelector("#mtdeck-config-quit")
      .addEventListener("click", () => {
        this.quite();
        //location.reload();
      });
  }

  private quite() {
    location.href = "https://example.com/?quit_token=S3dgz3ECu3";
  }
}
