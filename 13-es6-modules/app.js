import {uniq} from "lodash";
import insane from "insane";
import jsonp from "jsonp";
import { apiKey, showSmiley}   from './src/config';
import User, { createURL,gravatar } from "./src/user";

const usr = new User('Vel', 'vel@yahoo.com', 'welcome.com');
console.log(usr);
const profile = createURL(usr.name);
console.log(profile);
const img = gravatar(usr.email);
console.log(img);

