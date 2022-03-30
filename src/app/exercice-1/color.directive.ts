import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  public elementHtml: ElementRef;
  @HostListener("window:keyup", ["$event"]) windowOnKeyUp($event) {
    console.log($event);
    switch ($event.code) {
      case "ArrowLeft":
        this.elementHtml.nativeElement.style.color = "red";
        break;
      case "ArrowUp":
        this.elementHtml.nativeElement.style.color = "green";
        break;
      case "ArrowRight":
        this.elementHtml.nativeElement.style.color = "blue";
        break;
      case "ArrowDown":
        this.elementHtml.nativeElement.style.color = "pink";
        break;
      default:
        this.elementHtml.nativeElement.style.color = "black";
        break;
    }
  }
  constructor(el: ElementRef) {
    this.elementHtml = el;
  }
}
