import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, AfterViewInit {

  @Output() countryHover: EventEmitter<string> = new EventEmitter<string>();
  @Output() idHover: EventEmitter<string> = new EventEmitter<string>();
  @Output() nameHover: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.initializeSVG();
  }

  ngAfterViewInit(): void {
    this.initializeSVG();
  }

  initializeSVG(): void {
    const svgElement = this.elementRef.nativeElement.querySelector('svg');
    const countries = svgElement.querySelectorAll('path');

    countries.forEach((country: any) => {
      const countryID = country.getAttribute('id') || 'N/A';
      const countryName = country.getAttribute('name') || 'N/A';

      this.renderer.listen(country, 'mouseover', () => {
        this.renderer.addClass(country, 'highlighted');
        // emit countryID on mouseover
        this.countryHover.emit(countryID);
        // emit countryName on mouseover
        this.countryHover.emit(countryName);
      });

      this.renderer.listen(country, 'mouseout', () => {
        this.renderer.removeClass(country, 'highlighted');
      });
      
    });
  } // end of initializeSVG

} // end of MapComponent