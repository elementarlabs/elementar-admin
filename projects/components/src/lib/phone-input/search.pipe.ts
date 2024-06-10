import { Pipe, PipeTransform } from '@angular/core'

import { Country } from './model/country.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(countries: Country[], searchCriteria?: string): Country[] {
    if (!searchCriteria || searchCriteria === '') {
      return countries;
    }

    return countries.filter((country) => {
      return `${country.name}+${country.dialCode}${
          country.areaCodes ? country.areaCodes.join(',') : ''
        }`
        .toLowerCase()
        .includes(searchCriteria.toLowerCase())
      ;
    });
  }
}
