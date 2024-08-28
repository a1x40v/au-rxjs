import { Component, OnInit } from "@angular/core";

import { createHttpObservable } from "../common/util";
import { map } from "rxjs/operators";
import { concat, interval, of } from "rxjs";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const static$ = of(11, 22, 33);
    const interval$ = interval(1000);
    const concat$ = concat(static$, interval$);

    concat$.subscribe(console.log);
  }
}
