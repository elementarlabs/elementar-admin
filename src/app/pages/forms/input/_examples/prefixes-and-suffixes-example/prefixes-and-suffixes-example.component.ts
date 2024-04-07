import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-prefixes-and-suffixes-example',
  standalone: true,
  imports: [
    MatLabel,
    MatIcon,
    MatSuffix,
    MatPrefix,
    MatInput,
    MatFormField,
    MatIconButton
  ],
  templateUrl: './prefixes-and-suffixes-example.component.html',
  styleUrl: './prefixes-and-suffixes-example.component.scss'
})
export class PrefixesAndSuffixesExampleComponent {

}
