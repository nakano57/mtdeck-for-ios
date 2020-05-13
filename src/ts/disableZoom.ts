export class disableZoom {
  public apply(): void {
    this.lockZoom();
  }

  private lockZoom() {
    var zoomLevel = 1.0;
    var tag: HTMLInputElement = <HTMLInputElement>(
      document.querySelector("meta[name=viewport]")
    );
    if (!tag) {
      // Create tag
      const tag: HTMLMetaElement = <HTMLMetaElement>(
        document.createElement("meta")
      );
      tag.name = "viewport";
      document.querySelector("head").appendChild(tag);
    }

    tag.setAttribute(
      "content",
      "width=device-width, initial-scale=" +
        zoomLevel +
        ", maximum-scale=" +
        zoomLevel +
        " user-scalable=no"
    );
    console.log("Hello!");
  }
}
