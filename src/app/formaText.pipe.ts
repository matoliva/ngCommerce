
import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "formaText"
})
export class FormaText implements PipeTransform {

    

    transform(value: string) {
        if(!value)
            return null;
        
        let preposition = ['of', 'the'];
        
        let words = value.split(' ');

        for (let i = 0; i < words.length; i++) {  
            if(i > 0 && preposition.includes(words[i])) {
                words[i].toLowerCase();
            } else {
                words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLocaleLowerCase();
            }
        }
        return words.join(' ');

    }
}
