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
