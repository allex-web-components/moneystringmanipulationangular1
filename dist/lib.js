(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
angular.module ('allex__web_moneystringmanipulationcomponent', []);

(function (allexlib, moneystringmanipulation, module) {
  module.filter ('allex_moneystringmanipulation_toMoney', function () {
    return function (input, decimals) {
      if (!allexlib.isInteger(decimals)) throw new Error('Decimals must be a number');
      return moneystringmanipulation.toMoney(input, decimals);
    };
  });

  module.filter('allex_moneystringmanipulation_fromMoney', function () {
    return function (input, decimals) {
      if (!allexlib.isNumber(decimals)) throw new Error('decimals must be a number: '+decimals);
      if (!allexlib.isInteger(input)) return input;
      return moneystringmanipulation.fromMoney (parseInt (input, 10), decimals);
    };
  });

})(ALLEX.lib, ALLEX.LOW_LEVEL_LIBS['allex_moneystringmanipulationlowlevellib'], angular.module ('allex__web_moneystringmanipulationcomponent'));

},{}]},{},[1]);
