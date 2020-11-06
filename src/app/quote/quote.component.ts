import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes('Nelson Mandela', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Josue', '7/November/2020'),
    new Quotes('Walt Disney', 'The way to get started is to quit talking and begin doing.', 'Eliane', '7/November/2020'),
    new Quotes('Steve Jobs', 'Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma – which is living with the results of other peoples thinking.', 'Emile', '7/November/2020'),
    new Quotes('Oprah Winfrey', 'If you look at what you have in life, you will always have more.If you look at what you do not have in life, you will never have enough.', 'Emma', '7/November/2020'),
    new Quotes('James Cameron', 'If you set your goals ridiculously high and it is a failure, you will fail above everyone else success.','Josue','5/november/2020'),
    new Quotes('John Lennon', 'Life is what happens when you are busy making other plans','Josue','7/November/2020')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
