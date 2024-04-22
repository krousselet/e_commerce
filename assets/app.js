import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.sass';

//jquery import
//const $ = require('jquery')
// see later if I really need it because I do not want to use it.

//bootstrap import
require('bootstrap');

//hideandshow js file import
import "./showAndHidePassword";
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
