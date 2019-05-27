import {Pipe,PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name:'eventNameFilter'
})

export class EventFilters implements PipeTransform{

transform(array :any[],query:string):any{
    if(query){
          return _.filter(array, row=>row.name.indexOf(query) > -1);
    }

}
    
}