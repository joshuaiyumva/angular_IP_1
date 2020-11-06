import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes('Josue', '', 'Josue', '7/November/2020'),
    new Quotes('Emile', '', 'Josue', '7/November/2020'),
    new Quotes('Eliane', '', 'Josue', '7/November/2020'),
    new Quotes('Emma', '', 'Josue', '7/November/2020'),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
