import {uniq} from "lodash";
import insane from "insane";
import jsonp from "jsonp";
import { apiKey, showSmiley}   from './src/config';
console.log('🤹‍♂️', apiKey);

showSmiley('Heelooooo');

const ages = [1,3,12,45,33,66,89,65,22];
console.log(uniq(ages));

