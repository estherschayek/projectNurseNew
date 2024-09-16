import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-EV2FZNR4.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  isPlatformBrowser
} from "./chunk-IZFMUV3D.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __decorate,
  __metadata,
  animationFrameScheduler,
  combineLatest,
  distinctUntilChanged,
  filter,
  forwardRef,
  fromEvent,
  inject,
  isDevMode,
  map,
  merge,
  observeOn,
  of,
  queueScheduler,
  scan,
  setClassMetadata,
  take,
  takeUntil,
  timer,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-OWWDFJ6S.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WKYGNSYM.js";

// node_modules/ngx-bootstrap/chronos/fesm2022/ngx-bootstrap-chronos.mjs
function mod(n, x) {
  return (n % x + x) % x;
}
function absFloor(num) {
  return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
}
function isString(str) {
  return typeof str === "string";
}
function isDate(value) {
  return value instanceof Date || Object.prototype.toString.call(value) === "[object Date]";
}
function isDateValid(date) {
  return date && date.getTime && !isNaN(date.getTime());
}
function isFunction(fn) {
  return fn instanceof Function || Object.prototype.toString.call(fn) === "[object Function]";
}
function isNumber(value) {
  return typeof value === "number" || Object.prototype.toString.call(value) === "[object Number]";
}
function isArray(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
}
function hasOwnProp(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
function isObject(input) {
  return input != null && Object.prototype.toString.call(input) === "[object Object]";
}
function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  }
  let k;
  for (k in obj) {
    if (obj.hasOwnProperty(k)) {
      return false;
    }
  }
  return true;
}
function isUndefined(input) {
  return input === void 0;
}
function toInt(argumentForCoercion) {
  const coercedNumber = +argumentForCoercion;
  let value = 0;
  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value = absFloor(coercedNumber);
  }
  return value;
}
var aliases = {};
var _mapUnits = {
  date: "day",
  hour: "hours",
  minute: "minutes",
  second: "seconds",
  millisecond: "milliseconds"
};
function addUnitAlias(unit, shorthand) {
  const lowerCase = unit.toLowerCase();
  let _unit = unit;
  if (lowerCase in _mapUnits) {
    _unit = _mapUnits[lowerCase];
  }
  aliases[lowerCase] = aliases[`${lowerCase}s`] = aliases[shorthand] = _unit;
}
function normalizeUnits(units2) {
  return isString(units2) ? aliases[units2] || aliases[units2.toLowerCase()] : void 0;
}
function normalizeObjectUnits(inputObject) {
  const normalizedInput = {};
  let normalizedProp;
  let prop;
  for (prop in inputObject) {
    if (hasOwnProp(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);
      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }
  return normalizedInput;
}
var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;
function zeroFill(num, targetLength, forceSign) {
  const absNumber = `${Math.abs(num)}`;
  const zerosToFill = targetLength - absNumber.length;
  const sign = num >= 0;
  const _sign = sign ? forceSign ? "+" : "" : "-";
  const _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
  return _sign + _zeros + absNumber;
}
var formatFunctions = {};
var formatTokenFunctions = {};
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
function addFormatToken(token, padded, ordinal, callback) {
  if (token) {
    formatTokenFunctions[token] = callback;
  }
  if (padded) {
    formatTokenFunctions[padded[0]] = function() {
      return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
    };
  }
  if (ordinal) {
    formatTokenFunctions[ordinal] = function(date, opts) {
      return opts.locale.ordinal(callback.apply(null, arguments), token);
    };
  }
}
function makeFormatFunction(format) {
  const array = format.match(formattingTokens);
  const length = array.length;
  const formatArr = new Array(length);
  for (let i = 0; i < length; i++) {
    formatArr[i] = formatTokenFunctions[array[i]] ? formatTokenFunctions[array[i]] : removeFormattingTokens(array[i]);
  }
  return function(date, locale, isUTC, offset = 0) {
    let output = "";
    for (let j = 0; j < length; j++) {
      output += isFunction(formatArr[j]) ? formatArr[j].call(null, date, { format, locale, isUTC, offset }) : formatArr[j];
    }
    return output;
  };
}
function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, "");
  }
  return input.replace(/\\/g, "");
}
function createUTCDate(y, m, d) {
  const date = new Date(Date.UTC.apply(null, arguments));
  if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
    date.setUTCFullYear(y);
  }
  return date;
}
function createDate(y, m = 0, d = 1, h = 0, M = 0, s = 0, ms = 0) {
  const date = new Date(y, m, d, h, M, s, ms);
  if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
    date.setFullYear(y);
  }
  return date;
}
function getHours(date, isUTC = false) {
  return isUTC ? date.getUTCHours() : date.getHours();
}
function getMinutes(date, isUTC = false) {
  return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
function getSeconds(date, isUTC = false) {
  return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
function getMilliseconds(date, isUTC = false) {
  return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
}
function getTime(date) {
  return date.getTime();
}
function getDay(date, isUTC = false) {
  return isUTC ? date.getUTCDay() : date.getDay();
}
function getDate(date, isUTC = false) {
  return isUTC ? date.getUTCDate() : date.getDate();
}
function getMonth(date, isUTC = false) {
  return isUTC ? date.getUTCMonth() : date.getMonth();
}
function getFullYear(date, isUTC = false) {
  return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
function unix(date) {
  return Math.floor(date.valueOf() / 1e3);
}
function getFirstDayOfMonth(date) {
  return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
function isFirstDayOfWeek(date, firstDayOfWeek) {
  return date.getDay() === Number(firstDayOfWeek);
}
function isSameMonth(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
}
function isSameYear(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  return getFullYear(date1) === getFullYear(date2);
}
function isSameDay$1(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  return isSameYear(date1, date2) && isSameMonth(date1, date2) && getDate(date1) === getDate(date2);
}
var match1 = /\d/;
var match2 = /\d\d/;
var match3 = /\d{3}/;
var match4 = /\d{4}/;
var match6 = /[+-]?\d{6}/;
var match1to2 = /\d\d?/;
var match3to4 = /\d\d\d\d?/;
var match5to6 = /\d\d\d\d\d\d?/;
var match1to3 = /\d{1,3}/;
var match1to4 = /\d{1,4}/;
var match1to6 = /[+-]?\d{1,6}/;
var matchUnsigned = /\d+/;
var matchSigned = /[+-]?\d+/;
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var regexes = {};
function addRegexToken(token, regex, strictRegex) {
  if (isFunction(regex)) {
    regexes[token] = regex;
    return;
  }
  regexes[token] = function(isStrict, locale) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}
function getParseRegexForToken(token, locale) {
  const _strict = false;
  if (!hasOwnProp(regexes, token)) {
    return new RegExp(unescapeFormat(token));
  }
  return regexes[token](_strict, locale);
}
function unescapeFormat(str) {
  return regexEscape(str.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (matched, p1, p2, p3, p4) => p1 || p2 || p3 || p4));
}
function regexEscape(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var tokens = {};
function addParseToken(token, callback) {
  const _token = isString(token) ? [token] : token;
  let func = callback;
  if (isNumber(callback)) {
    func = function(input, array, config) {
      array[callback] = toInt(input);
      return config;
    };
  }
  if (isArray(_token) && isFunction(func)) {
    let i;
    for (i = 0; i < _token.length; i++) {
      tokens[_token[i]] = func;
    }
  }
}
function addWeekParseToken(token, callback) {
  addParseToken(token, function(input, array, config, _token) {
    config._w = config._w || {};
    return callback(input, config._w, config, _token);
  });
}
function addTimeToArrayFromToken(token, input, config) {
  if (input != null && hasOwnProp(tokens, token)) {
    tokens[token](input, config._a, config, token);
  }
  return config;
}
var priorities = {};
function addUnitPriority(unit, priority) {
  priorities[unit] = priority;
}
function initDayOfMonth() {
  addFormatToken("D", ["DD", 2, false], "Do", function(date, opts) {
    return getDate(date, opts.isUTC).toString(10);
  });
  addUnitAlias("date", "D");
  addUnitPriority("date", 9);
  addRegexToken("D", match1to2);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function(isStrict, locale) {
    return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function(input, array, config) {
    array[DATE] = toInt(input.match(match1to2)[0]);
    return config;
  });
}
function defaultParsingFlags() {
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}
function getParsingFlags(config) {
  if (config._pf == null) {
    config._pf = defaultParsingFlags();
  }
  return config._pf;
}
function getYear(date, opts) {
  if (opts.locale.getFullYear) {
    return opts.locale.getFullYear(date, opts.isUTC).toString();
  }
  return getFullYear(date, opts.isUTC).toString();
}
function initYear() {
  addFormatToken("Y", null, null, function(date, opts) {
    const y = getFullYear(date, opts.isUTC);
    return y <= 9999 ? y.toString(10) : `+${y}`;
  });
  addFormatToken(null, ["YY", 2, false], null, function(date, opts) {
    return (getFullYear(date, opts.isUTC) % 100).toString(10);
  });
  addFormatToken(null, ["YYYY", 4, false], null, getYear);
  addFormatToken(null, ["YYYYY", 5, false], null, getYear);
  addFormatToken(null, ["YYYYYY", 6, true], null, getYear);
  addUnitAlias("year", "y");
  addUnitPriority("year", 1);
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function(input, array, config) {
    array[YEAR] = input.length === 2 ? parseTwoDigitYear(input) : toInt(input);
    return config;
  });
  addParseToken("YY", function(input, array, config) {
    array[YEAR] = parseTwoDigitYear(input);
    return config;
  });
  addParseToken("Y", function(input, array, config) {
    array[YEAR] = parseInt(input, 10);
    return config;
  });
}
function parseTwoDigitYear(input) {
  return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }
  const modMonth = mod(month, 12);
  const _year = year + (month - modMonth) / 12;
  return modMonth === 1 ? isLeapYear(_year) ? 29 : 28 : 31 - modMonth % 7 % 2;
}
function initMonth() {
  addFormatToken("M", ["MM", 2, false], "Mo", function(date, opts) {
    return (getMonth(date, opts.isUTC) + 1).toString(10);
  });
  addFormatToken("MMM", null, null, function(date, opts) {
    return opts.locale.monthsShort(date, opts.format, opts.isUTC);
  });
  addFormatToken("MMMM", null, null, function(date, opts) {
    return opts.locale.months(date, opts.format, opts.isUTC);
  });
  addUnitAlias("month", "M");
  addUnitPriority("month", 8);
  addRegexToken("M", match1to2);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", function(isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken("MMMM", function(isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(["M", "MM"], function(input, array, config) {
    array[MONTH] = toInt(input) - 1;
    return config;
  });
  addParseToken(["MMM", "MMMM"], function(input, array, config, token) {
    const month = config._locale.monthsParse(input, token, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = !!input;
    }
    return config;
  });
}
var defaultTimeUnit = {
  year: 0,
  month: 0,
  day: 0,
  hour: 0,
  minute: 0,
  seconds: 0
};
function shiftDate(date, unit) {
  const _unit = Object.assign({}, defaultTimeUnit, unit);
  const year = date.getFullYear() + (_unit.year || 0);
  const month = date.getMonth() + (_unit.month || 0);
  let day = date.getDate() + (_unit.day || 0);
  if (_unit.month && !_unit.day) {
    day = Math.min(day, daysInMonth(year, month));
  }
  return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
}
function setFullDate(date, unit) {
  return createDate(
    getNum(date.getFullYear(), unit.year),
    getNum(date.getMonth(), unit.month),
    1,
    // day, to avoid issue with wrong months selection at the end of current month (#5371)
    getNum(date.getHours(), unit.hour),
    getNum(date.getMinutes(), unit.minute),
    getNum(date.getSeconds(), unit.seconds),
    getNum(date.getMilliseconds(), unit.milliseconds)
  );
}
function getNum(def, num) {
  return isNumber(num) ? num : def;
}
function setMonth(date, value, isUTC) {
  const dayOfMonth = Math.min(getDate(date), daysInMonth(getFullYear(date), value));
  isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
  return date;
}
function setHours(date, value, isUTC) {
  isUTC ? date.setUTCHours(value) : date.setHours(value);
  return date;
}
function setMinutes(date, value, isUTC) {
  isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
  return date;
}
function setSeconds(date, value, isUTC) {
  isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
  return date;
}
function setMilliseconds(date, value, isUTC) {
  isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
  return date;
}
function setDate(date, value, isUTC) {
  isUTC ? date.setUTCDate(value) : date.setDate(value);
  return date;
}
function setTime(date, value) {
  date.setTime(value);
  return date;
}
function cloneDate(date) {
  return new Date(date.getTime());
}
function startOf(date, unit, isUTC) {
  const _date = cloneDate(date);
  switch (unit) {
    case "year":
      setMonth(_date, 0, isUTC);
    case "quarter":
    case "month":
      setDate(_date, 1, isUTC);
    case "week":
    case "isoWeek":
    case "day":
    case "date":
      setHours(_date, 0, isUTC);
    case "hours":
      setMinutes(_date, 0, isUTC);
    case "minutes":
      setSeconds(_date, 0, isUTC);
    case "seconds":
      setMilliseconds(_date, 0, isUTC);
  }
  if (unit === "week") {
    setLocaleDayOfWeek(_date, 0, { isUTC });
  }
  if (unit === "isoWeek") {
    setISODayOfWeek(_date, 1);
  }
  if (unit === "quarter") {
    setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
  }
  return _date;
}
function endOf(date, unit, isUTC) {
  let _unit = unit;
  if (_unit === "date") {
    _unit = "day";
  }
  const start = startOf(date, _unit, isUTC);
  const _step = add(start, 1, _unit === "isoWeek" ? "week" : _unit, isUTC);
  const res = subtract(_step, 1, "milliseconds", isUTC);
  return res;
}
function initDayOfYear() {
  addFormatToken("DDD", ["DDDD", 3, false], "DDDo", function(date) {
    return getDayOfYear(date).toString(10);
  });
  addUnitAlias("dayOfYear", "DDD");
  addUnitPriority("dayOfYear", 4);
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function(input, array, config) {
    config._dayOfYear = toInt(input);
    return config;
  });
}
function getDayOfYear(date, isUTC) {
  const date1 = +startOf(date, "day", isUTC);
  const date2 = +startOf(date, "year", isUTC);
  const someDate = date1 - date2;
  const oneDay = 1e3 * 60 * 60 * 24;
  return Math.round(someDate / oneDay) + 1;
}
function firstWeekOffset(year, dow, doy) {
  const fwd = dow - doy + 7;
  const fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
  return -fwdlw + fwd - 1;
}
function dayOfYearFromWeeks(year, week2, weekday, dow, doy) {
  const localWeekday = (7 + weekday - dow) % 7;
  const weekOffset = firstWeekOffset(year, dow, doy);
  const dayOfYear = 1 + 7 * (week2 - 1) + localWeekday + weekOffset;
  let resYear;
  let resDayOfYear;
  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - daysInYear(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }
  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}
function weekOfYear(date, dow, doy, isUTC) {
  const weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
  const week2 = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
  let resWeek;
  let resYear;
  if (week2 < 1) {
    resYear = getFullYear(date, isUTC) - 1;
    resWeek = week2 + weeksInYear(resYear, dow, doy);
  } else if (week2 > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
    resWeek = week2 - weeksInYear(getFullYear(date, isUTC), dow, doy);
    resYear = getFullYear(date, isUTC) + 1;
  } else {
    resYear = getFullYear(date, isUTC);
    resWeek = week2;
  }
  return {
    week: resWeek,
    year: resYear
  };
}
function weeksInYear(year, dow, doy) {
  const weekOffset = firstWeekOffset(year, dow, doy);
  const weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
var defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
var defaultLongDateFormat = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
var defaultOrdinal = "%d";
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
var defaultMonthsShortRegex = matchWord;
var defaultMonthsRegex = matchWord;
var Locale = class {
  constructor(config) {
    if (config) {
      this.set(config);
    }
  }
  set(config) {
    let confKey;
    for (confKey in config) {
      if (!config.hasOwnProperty(confKey)) {
        continue;
      }
      const prop = config[confKey];
      const key = isFunction(prop) ? confKey : `_${confKey}`;
      this[key] = prop;
    }
    this._config = config;
  }
  calendar(key, date, now) {
    const output = this._calendar[key] || this._calendar["sameElse"];
    return isFunction(output) ? output.call(null, date, now) : output;
  }
  longDateFormat(key) {
    const format = this._longDateFormat[key];
    const formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }
  get invalidDate() {
    return this._invalidDate;
  }
  set invalidDate(val) {
    this._invalidDate = val;
  }
  ordinal(num, token) {
    return this._ordinal.replace("%d", num.toString(10));
  }
  preparse(str, format) {
    return str;
  }
  getFullYear(date, isUTC = false) {
    return getFullYear(date, isUTC);
  }
  postformat(str) {
    return str;
  }
  relativeTime(num, withoutSuffix, str, isFuture) {
    const output = this._relativeTime[str];
    return isFunction(output) ? output(num, withoutSuffix, str, isFuture) : output.replace(/%d/i, num.toString(10));
  }
  pastFuture(diff, output) {
    const format = this._relativeTime[diff > 0 ? "future" : "past"];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }
  months(date, format, isUTC = false) {
    if (!date) {
      return isArray(this._months) ? this._months : this._months.standalone;
    }
    if (isArray(this._months)) {
      return this._months[getMonth(date, isUTC)];
    }
    const key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? "format" : "standalone";
    return this._months[key][getMonth(date, isUTC)];
  }
  monthsShort(date, format, isUTC = false) {
    if (!date) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }
    if (isArray(this._monthsShort)) {
      return this._monthsShort[getMonth(date, isUTC)];
    }
    const key = MONTHS_IN_FORMAT.test(format) ? "format" : "standalone";
    return this._monthsShort[key][getMonth(date, isUTC)];
  }
  monthsParse(monthName, format, strict) {
    let date;
    let regex;
    if (this._monthsParseExact) {
      return this.handleMonthStrictParse(monthName, format, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    let i;
    for (i = 0; i < 12; i++) {
      date = new Date(Date.UTC(2e3, i));
      if (strict && !this._longMonthsParse[i]) {
        const _months = this.months(date, "", true).replace(".", "");
        const _shortMonths = this.monthsShort(date, "", true).replace(".", "");
        this._longMonthsParse[i] = new RegExp(`^${_months}$`, "i");
        this._shortMonthsParse[i] = new RegExp(`^${_shortMonths}$`, "i");
      }
      if (!strict && !this._monthsParse[i]) {
        regex = `^${this.months(date, "", true)}|^${this.monthsShort(date, "", true)}`;
        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
        return i;
      }
      if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
        return i;
      }
      if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this.computeMonthsParse();
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      }
      return this._monthsRegex;
    }
    if (!hasOwnProp(this, "_monthsRegex")) {
      this._monthsRegex = defaultMonthsRegex;
    }
    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
  monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this.computeMonthsParse();
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      }
      return this._monthsShortRegex;
    }
    if (!hasOwnProp(this, "_monthsShortRegex")) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }
    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
  /** Week */
  week(date, isUTC) {
    return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
  }
  firstDayOfWeek() {
    return this._week.dow;
  }
  firstDayOfYear() {
    return this._week.doy;
  }
  weekdays(date, format, isUTC) {
    if (!date) {
      return isArray(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }
    if (isArray(this._weekdays)) {
      return this._weekdays[getDay(date, isUTC)];
    }
    const _key = this._weekdays.isFormat.test(format) ? "format" : "standalone";
    return this._weekdays[_key][getDay(date, isUTC)];
  }
  weekdaysMin(date, format, isUTC) {
    return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
  }
  weekdaysShort(date, format, isUTC) {
    return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
  }
  // proto.weekdaysParse  =        localeWeekdaysParse;
  weekdaysParse(weekdayName, format, strict) {
    let i;
    let regex;
    if (this._weekdaysParseExact) {
      return this.handleWeekStrictParse(weekdayName, format, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      const date = setDayOfWeek(new Date(Date.UTC(2e3, 1)), i, null, true);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp(`^${this.weekdays(date, "", true).replace(".", ".?")}$`, "i");
        this._shortWeekdaysParse[i] = new RegExp(`^${this.weekdaysShort(date, "", true).replace(".", ".?")}$`, "i");
        this._minWeekdaysParse[i] = new RegExp(`^${this.weekdaysMin(date, "", true).replace(".", ".?")}$`, "i");
      }
      if (!this._weekdaysParse[i]) {
        regex = `^${this.weekdays(date, "", true)}|^${this.weekdaysShort(date, "", true)}|^${this.weekdaysMin(date, "", true)}`;
        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (!isArray(this._fullWeekdaysParse) || !isArray(this._shortWeekdaysParse) || !isArray(this._minWeekdaysParse) || !isArray(this._weekdaysParse)) {
        return;
      }
      if (strict && format === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  // proto.weekdaysRegex       =        weekdaysRegex;
  weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this.computeWeekdaysParse();
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this._weekdaysRegex = matchWord;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  // proto.weekdaysShortRegex  =        weekdaysShortRegex;
  // proto.weekdaysMinRegex    =        weekdaysMinRegex;
  weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this.computeWeekdaysParse();
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = matchWord;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this.computeWeekdaysParse();
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = matchWord;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  isPM(input) {
    return input.toLowerCase().charAt(0) === "p";
  }
  meridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? "pm" : "PM";
    }
    return isLower ? "am" : "AM";
  }
  formatLongDate(key) {
    this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
    const format = this._longDateFormat[key];
    const formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, (val) => {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }
  handleMonthStrictParse(monthName, format, strict) {
    const llc = monthName.toLocaleLowerCase();
    let i;
    let ii;
    let mom;
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = new Date(2e3, i);
        this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === "MMM") {
        ii = this._shortMonthsParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      }
      ii = this._longMonthsParse.indexOf(llc);
      return ii !== -1 ? ii : null;
    }
    if (format === "MMM") {
      ii = this._shortMonthsParse.indexOf(llc);
      if (ii !== -1) {
        return ii;
      }
      ii = this._longMonthsParse.indexOf(llc);
      return ii !== -1 ? ii : null;
    }
    ii = this._longMonthsParse.indexOf(llc);
    if (ii !== -1) {
      return ii;
    }
    ii = this._shortMonthsParse.indexOf(llc);
    return ii !== -1 ? ii : null;
  }
  handleWeekStrictParse(weekdayName, format, strict) {
    let ii;
    const llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      let i;
      for (i = 0; i < 7; ++i) {
        const date = setDayOfWeek(new Date(Date.UTC(2e3, 1)), i, null, true);
        this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(date, "").toLocaleLowerCase();
      }
    }
    if (!isArray(this._weekdaysParse) || !isArray(this._shortWeekdaysParse) || !isArray(this._minWeekdaysParse)) {
      return;
    }
    if (strict) {
      if (format === "dddd") {
        ii = this._weekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      } else if (format === "ddd") {
        ii = this._shortWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = this._minWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === "dddd") {
        ii = this._weekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._shortWeekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._minWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      } else if (format === "ddd") {
        ii = this._shortWeekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._weekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._minWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = this._minWeekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._weekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._shortWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  computeMonthsParse() {
    const shortPieces = [];
    const longPieces = [];
    const mixedPieces = [];
    let date;
    let i;
    for (i = 0; i < 12; i++) {
      date = new Date(2e3, i);
      shortPieces.push(this.monthsShort(date, ""));
      longPieces.push(this.months(date, ""));
      mixedPieces.push(this.months(date, ""));
      mixedPieces.push(this.monthsShort(date, ""));
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp(`^(${mixedPieces.join("|")})`, "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(`^(${longPieces.join("|")})`, "i");
    this._monthsShortStrictRegex = new RegExp(`^(${shortPieces.join("|")})`, "i");
  }
  computeWeekdaysParse() {
    const minPieces = [];
    const shortPieces = [];
    const longPieces = [];
    const mixedPieces = [];
    let i;
    for (i = 0; i < 7; i++) {
      const date = setDayOfWeek(new Date(Date.UTC(2e3, 1)), i, null, true);
      const minp = this.weekdaysMin(date);
      const shortp = this.weekdaysShort(date);
      const longp = this.weekdays(date);
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._weekdaysRegex = new RegExp(`^(${mixedPieces.join("|")})`, "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp(`^(${longPieces.join("|")})`, "i");
    this._weekdaysShortStrictRegex = new RegExp(`^(${shortPieces.join("|")})`, "i");
    this._weekdaysMinStrictRegex = new RegExp(`^(${minPieces.join("|")})`, "i");
  }
};
function cmpLenRev(a, b) {
  return b.length - a.length;
}
var defaultCalendar = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
var defaultInvalidDate = "Invalid date";
var defaultLocaleWeek = {
  dow: 0,
  doy: 6
  // The week that contains Jan 1st is the first week of the year.
};
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
var defaultRelativeTime = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
};
function compareArrays(array1, array2, dontConvert) {
  const len = Math.min(array1.length, array2.length);
  const lengthDiff = Math.abs(array1.length - array2.length);
  let diffs = 0;
  let i;
  for (i = 0; i < len; i++) {
    if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
      diffs++;
    }
  }
  return diffs + lengthDiff;
}
function initWeek() {
  addFormatToken("w", ["ww", 2, false], "wo", function(date, opts) {
    return getWeek(date, opts.locale).toString(10);
  });
  addFormatToken("W", ["WW", 2, false], "Wo", function(date) {
    return getISOWeek(date).toString(10);
  });
  addUnitAlias("week", "w");
  addUnitAlias("isoWeek", "W");
  addUnitPriority("week", 5);
  addUnitPriority("isoWeek", 5);
  addRegexToken("w", match1to2);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(["w", "ww", "W", "WW"], function(input, week2, config, token) {
    week2[token.substr(0, 1)] = toInt(input);
    return config;
  });
}
function getWeek(date, locale = getLocale(), isUTC) {
  return locale.week(date, isUTC);
}
function getISOWeek(date, isUTC) {
  return weekOfYear(date, 1, 4, isUTC).week;
}
function initWeekYear() {
  addFormatToken(null, ["gg", 2, false], null, function(date, opts) {
    return (getWeekYear(date, opts.locale) % 100).toString();
  });
  addFormatToken(null, ["GG", 2, false], null, function(date) {
    return (getISOWeekYear(date) % 100).toString();
  });
  addWeekYearFormatToken("gggg", _getWeekYearFormatCb);
  addWeekYearFormatToken("ggggg", _getWeekYearFormatCb);
  addWeekYearFormatToken("GGGG", _getISOWeekYearFormatCb);
  addWeekYearFormatToken("GGGGG", _getISOWeekYearFormatCb);
  addUnitAlias("weekYear", "gg");
  addUnitAlias("isoWeekYear", "GG");
  addUnitPriority("weekYear", 1);
  addUnitPriority("isoWeekYear", 1);
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week2, config, token) {
    week2[token.substr(0, 2)] = toInt(input);
    return config;
  });
  addWeekParseToken(["gg", "GG"], function(input, week2, config, token) {
    week2[token] = parseTwoDigitYear(input);
    return config;
  });
}
function addWeekYearFormatToken(token, getter) {
  addFormatToken(null, [token, token.length, false], null, getter);
}
function _getWeekYearFormatCb(date, opts) {
  return getWeekYear(date, opts.locale).toString();
}
function _getISOWeekYearFormatCb(date) {
  return getISOWeekYear(date).toString();
}
function getWeekYear(date, locale = getLocale(), isUTC) {
  return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
}
function getISOWeekYear(date, isUTC) {
  return weekOfYear(date, 1, 4, isUTC).year;
}
function initTimezone() {
  addFormatToken("z", null, null, function(date, opts) {
    return opts.isUTC ? "UTC" : "";
  });
  addFormatToken("zz", null, null, function(date, opts) {
    return opts.isUTC ? "Coordinated Universal Time" : "";
  });
}
function initTimestamp() {
  addFormatToken("X", null, null, function(date) {
    return unix(date).toString(10);
  });
  addFormatToken("x", null, null, function(date) {
    return date.valueOf().toString(10);
  });
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function(input, array, config) {
    config._d = new Date(parseFloat(input) * 1e3);
    return config;
  });
  addParseToken("x", function(input, array, config) {
    config._d = new Date(toInt(input));
    return config;
  });
}
function initSecond() {
  addFormatToken("s", ["ss", 2, false], null, function(date, opts) {
    return getSeconds(date, opts.isUTC).toString(10);
  });
  addUnitAlias("second", "s");
  addUnitPriority("second", 15);
  addRegexToken("s", match1to2);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
}
function initQuarter() {
  addFormatToken("Q", null, "Qo", function(date, opts) {
    return getQuarter(date, opts.isUTC).toString(10);
  });
  addUnitAlias("quarter", "Q");
  addUnitPriority("quarter", 7);
  addRegexToken("Q", match1);
  addParseToken("Q", function(input, array, config) {
    array[MONTH] = (toInt(input) - 1) * 3;
    return config;
  });
}
function getQuarter(date, isUTC = false) {
  return Math.ceil((getMonth(date, isUTC) + 1) / 3);
}
function addOffsetFormatToken(token, separator) {
  addFormatToken(token, null, null, function(date, config) {
    let offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
    let sign = "+";
    if (offset < 0) {
      offset = -offset;
      sign = "-";
    }
    return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
  });
}
function initOffset() {
  addOffsetFormatToken("Z", ":");
  addOffsetFormatToken("ZZ", "");
  addRegexToken("Z", matchShortOffset);
  addRegexToken("ZZ", matchShortOffset);
  addParseToken(["Z", "ZZ"], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
    return config;
  });
}
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, str) {
  const matches = (str || "").match(matcher);
  if (matches === null) {
    return null;
  }
  const chunk = matches[matches.length - 1];
  const parts = chunk.match(chunkOffset) || ["-", "0", "0"];
  const minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
  const _min = parts[0] === "+" ? minutes : -minutes;
  return minutes === 0 ? 0 : _min;
}
function cloneWithOffset(input, date, config = {}) {
  if (!config._isUTC) {
    return input;
  }
  const res = cloneDate(date);
  const offsetDiff = (config._offset || 0) * 6e4;
  const diff = input.valueOf() - res.valueOf() + offsetDiff;
  res.setTime(res.valueOf() + diff);
  return res;
}
function getDateOffset(date) {
  return -Math.round(date.getTimezoneOffset() / 15) * 15;
}
function getUTCOffset(date, config = {}) {
  const _offset = config._offset || 0;
  return config._isUTC ? _offset : getDateOffset(date);
}
function initMinute() {
  addFormatToken("m", ["mm", 2, false], null, function(date, opts) {
    return getMinutes(date, opts.isUTC).toString(10);
  });
  addUnitAlias("minute", "m");
  addUnitPriority("minute", 14);
  addRegexToken("m", match1to2);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
}
function initMillisecond() {
  addFormatToken("S", null, null, function(date, opts) {
    return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
  });
  addFormatToken(null, ["SS", 2, false], null, function(date, opts) {
    return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
  });
  addFormatToken(null, ["SSS", 3, false], null, function(date, opts) {
    return getMilliseconds(date, opts.isUTC).toString(10);
  });
  addFormatToken(null, ["SSSS", 4, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
  });
  addFormatToken(null, ["SSSSS", 5, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
  });
  addFormatToken(null, ["SSSSSS", 6, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 1e3).toString(10);
  });
  addFormatToken(null, ["SSSSSSS", 7, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 1e4).toString(10);
  });
  addFormatToken(null, ["SSSSSSSS", 8, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 1e5).toString(10);
  });
  addFormatToken(null, ["SSSSSSSSS", 9, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 1e6).toString(10);
  });
  addUnitAlias("millisecond", "ms");
  addUnitPriority("millisecond", 16);
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  let token;
  for (token = "SSSS"; token.length <= 9; token += "S") {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array, config) {
    array[MILLISECOND] = toInt(parseFloat(`0.${input}`) * 1e3);
    return config;
  }
  for (token = "S"; token.length <= 9; token += "S") {
    addParseToken(token, parseMs);
  }
}
function initHour() {
  function hFormat(date, isUTC) {
    return getHours(date, isUTC) % 12 || 12;
  }
  function kFormat(date, isUTC) {
    return getHours(date, isUTC) || 24;
  }
  addFormatToken("H", ["HH", 2, false], null, function(date, opts) {
    return getHours(date, opts.isUTC).toString(10);
  });
  addFormatToken("h", ["hh", 2, false], null, function(date, opts) {
    return hFormat(date, opts.isUTC).toString(10);
  });
  addFormatToken("k", ["kk", 2, false], null, function(date, opts) {
    return kFormat(date, opts.isUTC).toString(10);
  });
  addFormatToken("hmm", null, null, function(date, opts) {
    const _h = hFormat(date, opts.isUTC);
    const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    return `${_h}${_mm}`;
  });
  addFormatToken("hmmss", null, null, function(date, opts) {
    const _h = hFormat(date, opts.isUTC);
    const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    const _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
    return `${_h}${_mm}${_ss}`;
  });
  addFormatToken("Hmm", null, null, function(date, opts) {
    const _H = getHours(date, opts.isUTC);
    const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    return `${_H}${_mm}`;
  });
  addFormatToken("Hmmss", null, null, function(date, opts) {
    const _H = getHours(date, opts.isUTC);
    const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    const _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
    return `${_H}${_mm}${_ss}`;
  });
  function meridiem(token, lowercase) {
    addFormatToken(token, null, null, function(date, opts) {
      return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  addUnitAlias("hour", "h");
  addUnitPriority("hour", 13);
  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2);
  addRegexToken("h", match1to2);
  addRegexToken("k", match1to2);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addRegexToken("kk", match1to2, match2);
  addRegexToken("hmm", match3to4);
  addRegexToken("hmmss", match5to6);
  addRegexToken("Hmm", match3to4);
  addRegexToken("Hmmss", match5to6);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["k", "kk"], function(input, array, config) {
    const kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
    return config;
  });
  addParseToken(["a", "A"], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
    return config;
  });
  addParseToken(["h", "hh"], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
    return config;
  });
  addParseToken("hmm", function(input, array, config) {
    const pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
    return config;
  });
  addParseToken("hmmss", function(input, array, config) {
    const pos1 = input.length - 4;
    const pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
    return config;
  });
  addParseToken("Hmm", function(input, array, config) {
    const pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    return config;
  });
  addParseToken("Hmmss", function(input, array, config) {
    const pos1 = input.length - 4;
    const pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    return config;
  });
}
var locales = {};
var localeFamilies = {};
var globalLocale;
function normalizeLocale(key) {
  return key ? key.toLowerCase().replace("_", "-") : key;
}
function chooseLocale(names) {
  let next;
  let locale;
  let i = 0;
  while (i < names.length) {
    const split = normalizeLocale(names[i]).split("-");
    let j = split.length;
    next = normalizeLocale(names[i + 1]);
    next = next ? next.split("-") : null;
    while (j > 0) {
      locale = loadLocale(split.slice(0, j).join("-"));
      if (locale) {
        return locale;
      }
      if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
        break;
      }
      j--;
    }
    i++;
  }
  return null;
}
function mergeConfigs(parentConfig, childConfig) {
  const res = Object.assign({}, parentConfig);
  for (const childProp in childConfig) {
    if (!hasOwnProp(childConfig, childProp)) {
      continue;
    }
    if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
      res[childProp] = {};
      Object.assign(res[childProp], parentConfig[childProp]);
      Object.assign(res[childProp], childConfig[childProp]);
    } else if (childConfig[childProp] != null) {
      res[childProp] = childConfig[childProp];
    } else {
      delete res[childProp];
    }
  }
  for (const parentProp in parentConfig) {
    if (hasOwnProp(parentConfig, parentProp) && !hasOwnProp(childConfig, parentProp) && isObject(parentConfig[parentProp])) {
      res[parentProp] = Object.assign({}, res[parentProp]);
    }
  }
  return res;
}
function loadLocale(name) {
  if (!locales[name]) {
    console.error(`Khronos locale error: please load locale "${name}" before using it`);
  }
  return locales[name];
}
function getSetGlobalLocale(key, values) {
  let data;
  if (key) {
    if (isUndefined(values)) {
      data = getLocale(key);
    } else if (isString(key)) {
      data = defineLocale(key, values);
    }
    if (data) {
      globalLocale = data;
    }
  }
  return globalLocale && globalLocale._abbr;
}
function defineLocale(name, config) {
  if (config === null) {
    delete locales[name];
    globalLocale = getLocale("en");
    return null;
  }
  if (!config) {
    return;
  }
  let parentConfig = baseConfig;
  config.abbr = name;
  if (config.parentLocale != null) {
    if (locales[config.parentLocale] != null) {
      parentConfig = locales[config.parentLocale]._config;
    } else {
      if (!localeFamilies[config.parentLocale]) {
        localeFamilies[config.parentLocale] = [];
      }
      localeFamilies[config.parentLocale].push({ name, config });
      return null;
    }
  }
  locales[name] = new Locale(mergeConfigs(parentConfig, config));
  if (localeFamilies[name]) {
    localeFamilies[name].forEach(function(x) {
      defineLocale(x.name, x.config);
    });
  }
  getSetGlobalLocale(name);
  return locales[name];
}
function getLocale(key) {
  setDefaultLocale();
  if (!key) {
    return globalLocale;
  }
  const _key = isArray(key) ? key : [key];
  return chooseLocale(_key);
}
function setDefaultLocale() {
  if (locales[`en`]) {
    return void 0;
  }
  getSetGlobalLocale("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal(num) {
      const b = num % 10;
      const output = toInt(num % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return num + output;
    }
  });
  initWeek();
  initWeekYear();
  initYear();
  initTimezone();
  initTimestamp();
  initSecond();
  initQuarter();
  initOffset();
  initMonth();
  initMinute();
  initMillisecond();
  initHour();
  initDayOfYear();
  initDayOfWeek();
  initDayOfMonth();
}
var ordering = ["year", "quarter", "month", "week", "day", "hours", "minutes", "seconds", "milliseconds"];
var orderingHash = ordering.reduce((mem, order) => {
  mem[order] = true;
  return mem;
}, {});
function isDurationValid(duration) {
  const durationKeys = Object.keys(duration);
  if (durationKeys.some((key) => {
    return key in orderingHash && duration[key] === null || isNaN(duration[key]);
  })) {
    return false;
  }
  let unitHasDecimal = false;
  for (let i = 0; i < ordering.length; ++i) {
    if (duration[ordering[i]]) {
      if (unitHasDecimal) {
        return false;
      }
      if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
        unitHasDecimal = true;
      }
    }
  }
  return true;
}
function absCeil(number) {
  return number < 0 ? Math.floor(number) : Math.ceil(number);
}
function bubble(dur) {
  let milliseconds = dur._milliseconds;
  let days = dur._days;
  let months2 = dur._months;
  const data = dur._data;
  if (!(milliseconds >= 0 && days >= 0 && months2 >= 0 || milliseconds <= 0 && days <= 0 && months2 <= 0)) {
    milliseconds += absCeil(monthsToDays(months2) + days) * 864e5;
    days = 0;
    months2 = 0;
  }
  data.milliseconds = milliseconds % 1e3;
  const seconds = absFloor(milliseconds / 1e3);
  data.seconds = seconds % 60;
  const minutes = absFloor(seconds / 60);
  data.minutes = minutes % 60;
  const hours = absFloor(minutes / 60);
  data.hours = hours % 24;
  days += absFloor(hours / 24);
  const monthsFromDays = absFloor(daysToMonths(days));
  months2 += monthsFromDays;
  days -= absCeil(monthsToDays(monthsFromDays));
  const years = absFloor(months2 / 12);
  months2 %= 12;
  data.day = days;
  data.month = months2;
  data.year = years;
  return dur;
}
function daysToMonths(day) {
  return day * 4800 / 146097;
}
function monthsToDays(month) {
  return month * 146097 / 4800;
}
var round = Math.round;
var thresholds = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  M: 11
  // months to year
};
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
  return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
function relativeTime(posNegDuration, withoutSuffix, locale) {
  const duration = createDuration(posNegDuration).abs();
  const seconds = round(duration.as("s"));
  const minutes = round(duration.as("m"));
  const hours = round(duration.as("h"));
  const days = round(duration.as("d"));
  const months2 = round(duration.as("M"));
  const years = round(duration.as("y"));
  const a = seconds <= thresholds["ss"] && ["s", seconds] || seconds < thresholds["s"] && ["ss", seconds] || minutes <= 1 && ["m"] || minutes < thresholds["m"] && ["mm", minutes] || hours <= 1 && ["h"] || hours < thresholds["h"] && ["hh", hours] || days <= 1 && ["d"] || days < thresholds["d"] && ["dd", days] || months2 <= 1 && ["M"] || months2 < thresholds["M"] && ["MM", months2] || years <= 1 && ["y"] || ["yy", years];
  const b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
  return substituteTimeAgo.apply(null, b);
}
var Duration = class {
  constructor(duration, config = {}) {
    this._data = {};
    this._locale = getLocale();
    this._locale = config && config._locale || getLocale();
    const normalizedInput = duration;
    const years = normalizedInput.year || 0;
    const quarters = normalizedInput.quarter || 0;
    const months2 = normalizedInput.month || 0;
    const weeks = normalizedInput.week || 0;
    const days = normalizedInput.day || 0;
    const hours = normalizedInput.hours || 0;
    const minutes = normalizedInput.minutes || 0;
    const seconds = normalizedInput.seconds || 0;
    const milliseconds = normalizedInput.milliseconds || 0;
    this._isValid = isDurationValid(normalizedInput);
    this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 60 * 1e3 + // 1000 * 60
    hours * 1e3 * 60 * 60;
    this._days = +days + weeks * 7;
    this._months = +months2 + quarters * 3 + years * 12;
    return bubble(this);
  }
  isValid() {
    return this._isValid;
  }
  humanize(withSuffix) {
    if (!this.isValid()) {
      return this.localeData().invalidDate;
    }
    const locale = this.localeData();
    let output = relativeTime(this, !withSuffix, locale);
    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }
    return locale.postformat(output);
  }
  localeData() {
    return this._locale;
  }
  locale(localeKey) {
    if (!localeKey) {
      return this._locale._abbr;
    }
    this._locale = getLocale(localeKey) || this._locale;
    return this;
  }
  abs() {
    const mathAbs = Math.abs;
    const data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.month = mathAbs(data.month);
    data.year = mathAbs(data.year);
    return this;
  }
  as(_units) {
    if (!this.isValid()) {
      return NaN;
    }
    let days;
    let months2;
    const milliseconds = this._milliseconds;
    const units2 = normalizeUnits(_units);
    if (units2 === "month" || units2 === "year") {
      days = this._days + milliseconds / 864e5;
      months2 = this._months + daysToMonths(days);
      return units2 === "month" ? months2 : months2 / 12;
    }
    days = this._days + Math.round(monthsToDays(this._months));
    switch (units2) {
      case "week":
        return days / 7 + milliseconds / 6048e5;
      case "day":
        return days + milliseconds / 864e5;
      case "hours":
        return days * 24 + milliseconds / 36e5;
      case "minutes":
        return days * 1440 + milliseconds / 6e4;
      case "seconds":
        return days * 86400 + milliseconds / 1e3;
      case "milliseconds":
        return Math.floor(days * 864e5) + milliseconds;
      default:
        throw new Error(`Unknown unit ${units2}`);
    }
  }
  valueOf() {
    if (!this.isValid()) {
      return NaN;
    }
    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }
};
function isDuration(obj) {
  return obj instanceof Duration;
}
function isValid(config) {
  if (config._isValid == null) {
    const flags = getParsingFlags(config);
    const parsedParts = Array.prototype.some.call(flags.parsedDateParts, function(i) {
      return i != null;
    });
    let isNowValid = !isNaN(config._d && config._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
    if (config._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
    }
    if (Object.isFrozen == null || !Object.isFrozen(config)) {
      config._isValid = isNowValid;
    } else {
      return isNowValid;
    }
  }
  return config._isValid;
}
function createInvalid(config, flags) {
  config._d = /* @__PURE__ */ new Date(NaN);
  Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
  return config;
}
function markInvalid(config) {
  config._isValid = false;
  return config;
}
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
var isoDates = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/, true],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/, true],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/, true],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
  ["YYYY-DDD", /\d{4}-\d{3}/, true],
  ["YYYY-MM", /\d{4}-\d\d/, false],
  ["YYYYYYMMDD", /[+-]\d{10}/, true],
  ["YYYYMMDD", /\d{8}/, true],
  // YYYYMM is NOT allowed by the standard
  ["GGGG[W]WWE", /\d{4}W\d{3}/, true],
  ["GGGG[W]WW", /\d{4}W\d{2}/, false],
  ["YYYYDDD", /\d{7}/, true]
];
var isoTimes = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
];
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
var obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function configFromISO(config) {
  if (!isString(config._i)) {
    return config;
  }
  const input = config._i;
  const match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
  let allowTime;
  let dateFormat;
  let timeFormat;
  let tzFormat;
  if (!match) {
    config._isValid = false;
    return config;
  }
  let i;
  let l;
  for (i = 0, l = isoDates.length; i < l; i++) {
    if (isoDates[i][1].exec(match[1])) {
      dateFormat = isoDates[i][0];
      allowTime = isoDates[i][2] !== false;
      break;
    }
  }
  if (dateFormat == null) {
    config._isValid = false;
    return config;
  }
  if (match[3]) {
    for (i = 0, l = isoTimes.length; i < l; i++) {
      if (isoTimes[i][1].exec(match[3])) {
        timeFormat = (match[2] || " ") + isoTimes[i][0];
        break;
      }
    }
    if (timeFormat == null) {
      config._isValid = false;
      return config;
    }
  }
  if (!allowTime && timeFormat != null) {
    config._isValid = false;
    return config;
  }
  if (match[4]) {
    if (tzRegex.exec(match[4])) {
      tzFormat = "Z";
    } else {
      config._isValid = false;
      return config;
    }
  }
  config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
  return configFromStringAndFormat(config);
}
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)
  ];
  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }
  return result;
}
function untruncateYear(yearStr) {
  const year = parseInt(yearStr, 10);
  return year <= 49 ? year + 2e3 : year;
}
function preprocessRFC2822(str) {
  return str.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    const weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
    const weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
    if (weekdayProvided !== weekdayActual) {
      getParsingFlags(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }
  return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    return 0;
  } else {
    const hm = parseInt(numOffset, 10);
    const m = hm % 100;
    const h = (hm - m) / 100;
    return h * 60 + m;
  }
}
function configFromRFC2822(config) {
  if (!isString(config._i)) {
    return config;
  }
  const match = rfc2822.exec(preprocessRFC2822(config._i));
  if (!match) {
    return markInvalid(config);
  }
  const parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
  if (!checkWeekday(match[1], parsedArray, config)) {
    return config;
  }
  config._a = parsedArray;
  config._tzm = calculateOffset(match[8], match[9], match[10]);
  config._d = createUTCDate.apply(null, config._a);
  config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  getParsingFlags(config).rfc2822 = true;
  return config;
}
function configFromString(config) {
  if (!isString(config._i)) {
    return config;
  }
  const matched = aspNetJsonRegex.exec(config._i);
  if (matched !== null) {
    config._d = /* @__PURE__ */ new Date(+matched[1]);
    return config;
  }
  configFromISO(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return config;
  }
  configFromRFC2822(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return config;
  }
  return createInvalid(config);
}
function formatDate(date, format, locale, isUTC, offset = 0) {
  const _locale = getLocale(locale || "en");
  if (!_locale) {
    throw new Error(`Locale "${locale}" is not defined, please add it with "defineLocale(...)"`);
  }
  const _format = format || (isUTC ? "YYYY-MM-DDTHH:mm:ss[Z]" : "YYYY-MM-DDTHH:mm:ssZ");
  const output = formatMoment(date, _format, _locale, isUTC, offset);
  if (!output) {
    return output;
  }
  return _locale.postformat(output);
}
function formatMoment(date, _format, locale, isUTC, offset = 0) {
  if (!isDateValid(date)) {
    return locale.invalidDate;
  }
  const format = expandFormat(_format, locale);
  formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
  return formatFunctions[format](date, locale, isUTC, offset);
}
function expandFormat(_format, locale) {
  let format = _format;
  let i = 5;
  const localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  const replaceLongDateFormatTokens = (input) => {
    return locale.formatLongDate(input) || input;
  };
  localFormattingTokens.lastIndex = 0;
  while (i >= 0 && localFormattingTokens.test(format)) {
    format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
    localFormattingTokens.lastIndex = 0;
    i -= 1;
  }
  return format;
}
function defaults(a, b, c) {
  if (a != null) {
    return a;
  }
  if (b != null) {
    return b;
  }
  return c;
}
function currentDateArray(config) {
  const nowValue = /* @__PURE__ */ new Date();
  if (config._useUTC) {
    return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
  }
  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
function configFromArray(config) {
  const input = [];
  let i;
  let date;
  let yearToUse;
  if (config._d) {
    return config;
  }
  const currentDate = currentDateArray(config);
  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  }
  if (config._dayOfYear != null) {
    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
    if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
      getParsingFlags(config)._overflowDayOfYear = true;
    }
    date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
    config._a[MONTH] = date.getUTCMonth();
    config._a[DATE] = date.getUTCDate();
  }
  for (i = 0; i < 3 && config._a[i] == null; ++i) {
    config._a[i] = input[i] = currentDate[i];
  }
  for (; i < 7; i++) {
    config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
  }
  if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[HOUR] = 0;
  }
  config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
  const expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }
  if (config._nextDay) {
    config._a[HOUR] = 24;
  }
  if (config._w && typeof config._w["d"] !== "undefined" && config._w["d"] !== expectedWeekday) {
    getParsingFlags(config).weekdayMismatch = true;
  }
  return config;
}
function dayOfYearFromWeekInfo(config) {
  let weekYear, week2, weekday, dow, doy, temp, weekdayOverflow;
  const w = config._w;
  if (w["GG"] != null || w["W"] != null || w["E"] != null) {
    dow = 1;
    doy = 4;
    weekYear = defaults(w["GG"], config._a[YEAR], weekOfYear(/* @__PURE__ */ new Date(), 1, 4).year);
    week2 = defaults(w["W"], 1);
    weekday = defaults(w["E"], 1);
    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    const curWeek = weekOfYear(/* @__PURE__ */ new Date(), dow, doy);
    weekYear = defaults(w["gg"], config._a[YEAR], curWeek.year);
    week2 = defaults(w["w"], curWeek.week);
    if (w["d"] != null) {
      weekday = w["d"];
      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w["e"] != null) {
      weekday = w["e"] + dow;
      if (w["e"] < 0 || w["e"] > 6) {
        weekdayOverflow = true;
      }
    } else {
      weekday = dow;
    }
  }
  if (week2 < 1 || week2 > weeksInYear(weekYear, dow, doy)) {
    getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    getParsingFlags(config)._overflowWeekday = true;
  } else {
    temp = dayOfYearFromWeeks(weekYear, week2, weekday, dow, doy);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
  return config;
}
function checkOverflow(config) {
  let overflow;
  const a = config._a;
  if (a && getParsingFlags(config).overflow === -2) {
    overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
    if (getParsingFlags(config)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
      overflow = DATE;
    }
    if (getParsingFlags(config)._overflowWeeks && overflow === -1) {
      overflow = WEEK;
    }
    if (getParsingFlags(config)._overflowWeekday && overflow === -1) {
      overflow = WEEKDAY;
    }
    getParsingFlags(config).overflow = overflow;
  }
  return config;
}
var ISO_8601 = "ISO_8601";
var RFC_2822 = "RFC_2822";
function configFromStringAndFormat(config) {
  if (config._f === ISO_8601) {
    return configFromISO(config);
  }
  if (config._f === RFC_2822) {
    return configFromRFC2822(config);
  }
  config._a = [];
  getParsingFlags(config).empty = true;
  if (isArray(config._f) || !config._i && config._i !== 0) {
    return config;
  }
  let input = config._i.toString();
  let totalParsedInputLength = 0;
  const inputLength = input.length;
  const tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
  let i;
  let token;
  let parsedInput;
  let skipped;
  for (i = 0; i < tokens2.length; i++) {
    token = tokens2[i];
    parsedInput = (input.match(getParseRegexForToken(token, config._locale)) || [])[0];
    if (parsedInput) {
      skipped = input.substr(0, input.indexOf(parsedInput));
      if (skipped.length > 0) {
        getParsingFlags(config).unusedInput.push(skipped);
      }
      input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
      totalParsedInputLength += parsedInput.length;
    }
    if (formatTokenFunctions[token]) {
      if (parsedInput) {
        getParsingFlags(config).empty = false;
      } else {
        getParsingFlags(config).unusedTokens.push(token);
      }
      addTimeToArrayFromToken(token, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      getParsingFlags(config).unusedTokens.push(token);
    }
  }
  getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;
  if (input.length > 0) {
    getParsingFlags(config).unusedInput.push(input);
  }
  if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
    getParsingFlags(config).bigHour = void 0;
  }
  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem;
  config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
  configFromArray(config);
  return checkOverflow(config);
}
function meridiemFixWrap(locale, _hour, meridiem) {
  let hour = _hour;
  if (meridiem == null) {
    return hour;
  }
  if (locale.meridiemHour != null) {
    return locale.meridiemHour(hour, meridiem);
  }
  if (locale.isPM == null) {
    return hour;
  }
  const isPm = locale.isPM(meridiem);
  if (isPm && hour < 12) {
    hour += 12;
  }
  if (!isPm && hour === 12) {
    hour = 0;
  }
  return hour;
}
function configFromStringAndArray(config) {
  let tempConfig;
  let bestMoment;
  let scoreToBeat;
  let currentScore;
  if (!config._f || config._f.length === 0) {
    getParsingFlags(config).invalidFormat = true;
    return createInvalid(config);
  }
  let i;
  for (i = 0; i < config._f.length; i++) {
    currentScore = 0;
    tempConfig = Object.assign({}, config);
    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }
    tempConfig._f = config._f[i];
    configFromStringAndFormat(tempConfig);
    if (!isValid(tempConfig)) {
      continue;
    }
    currentScore += getParsingFlags(tempConfig).charsLeftOver;
    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
    getParsingFlags(tempConfig).score = currentScore;
    if (scoreToBeat == null || currentScore < scoreToBeat) {
      scoreToBeat = currentScore;
      bestMoment = tempConfig;
    }
  }
  return Object.assign(config, bestMoment || tempConfig);
}
function configFromObject(config) {
  if (config._d) {
    return config;
  }
  const input = config._i;
  if (isObject(input)) {
    const i = normalizeObjectUnits(input);
    config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds].map((obj) => isString(obj) ? parseInt(obj, 10) : obj);
  }
  return configFromArray(config);
}
function createFromConfig(config) {
  const res = checkOverflow(prepareConfig(config));
  res._d = new Date(res._d != null ? res._d.getTime() : NaN);
  if (!isValid(Object.assign({}, res, { _isValid: null }))) {
    res._d = /* @__PURE__ */ new Date(NaN);
  }
  return res;
}
function prepareConfig(config) {
  let input = config._i;
  const format = config._f;
  config._locale = config._locale || getLocale(config._l);
  if (input === null || format === void 0 && input === "") {
    return createInvalid(config, { nullInput: true });
  }
  if (isString(input)) {
    config._i = input = config._locale.preparse(input, format);
  }
  if (isDate(input)) {
    config._d = cloneDate(input);
    return config;
  }
  if (isArray(format)) {
    configFromStringAndArray(config);
  } else if (format) {
    configFromStringAndFormat(config);
  } else {
    configFromInput(config);
  }
  if (!isValid(config)) {
    config._d = null;
  }
  return config;
}
function configFromInput(config) {
  const input = config._i;
  if (isUndefined(input)) {
    config._d = /* @__PURE__ */ new Date();
  } else if (isDate(input)) {
    config._d = cloneDate(input);
  } else if (isString(input)) {
    configFromString(config);
  } else if (isArray(input) && input.length) {
    const _arr = input.slice(0);
    config._a = _arr.map((obj) => isString(obj) ? parseInt(obj, 10) : obj);
    configFromArray(config);
  } else if (isObject(input)) {
    configFromObject(config);
  } else if (isNumber(input)) {
    config._d = new Date(input);
  } else {
    return createInvalid(config);
  }
  return config;
}
function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
  const config = {};
  let _input = input;
  if (isObject(_input) && isObjectEmpty(_input) || isArray(_input) && _input.length === 0) {
    _input = void 0;
  }
  config._useUTC = config._isUTC = isUTC;
  config._l = localeKey;
  config._i = _input;
  config._f = format;
  config._strict = strict;
  return createFromConfig(config);
}
function parseDate(input, format, localeKey, strict, isUTC) {
  if (isDate(input)) {
    return input;
  }
  const config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
  return config._d;
}
function utcAsLocal(date) {
  if (!(date instanceof Date)) {
    return null;
  }
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
}
function absRound(num) {
  return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
}
function isAfter(date1, date2, units2 = "milliseconds") {
  if (!date1 || !date2) {
    return false;
  }
  if (units2 === "milliseconds") {
    return date1.valueOf() > date2.valueOf();
  }
  return date2.valueOf() < startOf(date1, units2).valueOf();
}
function isBefore(date1, date2, units2 = "milliseconds") {
  if (!date1 || !date2) {
    return false;
  }
  if (units2 === "milliseconds") {
    return date1.valueOf() < date2.valueOf();
  }
  return endOf(date1, units2).valueOf() < date2.valueOf();
}
function isDisabledDay(date, daysDisabled) {
  if (typeof daysDisabled === "undefined" || !daysDisabled || !daysDisabled.length) {
    return false;
  }
  return daysDisabled.some((day) => day === date.getDay());
}
function isSame(date1, date2, units2 = "milliseconds") {
  if (!date1 || !date2) {
    return false;
  }
  if (units2 === "milliseconds") {
    return date1.valueOf() === date2.valueOf();
  }
  const inputMs = date2.valueOf();
  return startOf(date1, units2).valueOf() <= inputMs && inputMs <= endOf(date1, units2).valueOf();
}
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key, config = {}) {
  const duration = convertDuration(input, key);
  return new Duration(duration, config);
}
function convertDuration(input, key) {
  if (input == null) {
    return {};
  }
  if (isDuration(input)) {
    return {
      milliseconds: input._milliseconds,
      day: input._days,
      month: input._months
    };
  }
  if (isNumber(input)) {
    return key ? { [key]: input } : { milliseconds: input };
  }
  if (isString(input)) {
    let match = aspNetRegex.exec(input);
    if (match) {
      const sign = match[1] === "-" ? -1 : 1;
      return {
        year: 0,
        day: toInt(match[DATE]) * sign,
        hours: toInt(match[HOUR]) * sign,
        minutes: toInt(match[MINUTE]) * sign,
        seconds: toInt(match[SECOND]) * sign,
        // the millisecond decimal point is included in the match
        milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1e3)) * sign
      };
    }
    match = isoRegex.exec(input);
    if (match) {
      const sign = match[1] === "-" ? -1 : match[1] === "+" ? 1 : 1;
      return {
        year: parseIso(match[2], sign),
        month: parseIso(match[3], sign),
        week: parseIso(match[4], sign),
        day: parseIso(match[5], sign),
        hours: parseIso(match[6], sign),
        minutes: parseIso(match[7], sign),
        seconds: parseIso(match[8], sign)
      };
    }
  }
  if (isObject(input) && ("from" in input || "to" in input)) {
    const diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
    return {
      milliseconds: diffRes.milliseconds,
      month: diffRes.months
    };
  }
  return input;
}
function parseIso(inp, sign) {
  const res = inp && parseFloat(inp.replace(",", "."));
  return (isNaN(res) ? 0 : res) * sign;
}
function positiveMomentsDifference(base, other) {
  const res = { milliseconds: 0, months: 0 };
  res.months = getMonth(other) - getMonth(base) + (getFullYear(other) - getFullYear(base)) * 12;
  const _basePlus = add(cloneDate(base), res.months, "month");
  if (isAfter(_basePlus, other)) {
    --res.months;
  }
  res.milliseconds = +other - +add(cloneDate(base), res.months, "month");
  return res;
}
function momentsDifference(base, other) {
  if (!(isDateValid(base) && isDateValid(other))) {
    return { milliseconds: 0, months: 0 };
  }
  let res;
  const _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
  if (isBefore(base, _other)) {
    res = positiveMomentsDifference(base, _other);
  } else {
    res = positiveMomentsDifference(_other, base);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }
  return res;
}
function add(date, val, period, isUTC) {
  const dur = createDuration(val, period);
  return addSubtract(date, dur, 1, isUTC);
}
function subtract(date, val, period, isUTC) {
  const dur = createDuration(val, period);
  return addSubtract(date, dur, -1, isUTC);
}
function addSubtract(date, duration, isAdding, isUTC) {
  const milliseconds = duration._milliseconds;
  const days = absRound(duration._days);
  const months2 = absRound(duration._months);
  if (months2) {
    setMonth(date, getMonth(date, isUTC) + months2 * isAdding, isUTC);
  }
  if (days) {
    setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
  }
  if (milliseconds) {
    setTime(date, getTime(date) + milliseconds * isAdding);
  }
  return cloneDate(date);
}
function initDayOfWeek() {
  addFormatToken("d", null, "do", function(date, opts) {
    return getDay(date, opts.isUTC).toString(10);
  });
  addFormatToken("dd", null, null, function(date, opts) {
    return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
  });
  addFormatToken("ddd", null, null, function(date, opts) {
    return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
  });
  addFormatToken("dddd", null, null, function(date, opts) {
    return opts.locale.weekdays(date, opts.format, opts.isUTC);
  });
  addFormatToken("e", null, null, function(date, opts) {
    return getLocaleDayOfWeek(date, opts.locale, opts.isUTC).toString(10);
  });
  addFormatToken("E", null, null, function(date, opts) {
    return getISODayOfWeek(date, opts.isUTC).toString(10);
  });
  addUnitAlias("day", "d");
  addUnitAlias("weekday", "e");
  addUnitAlias("isoWeekday", "E");
  addUnitPriority("day", 11);
  addUnitPriority("weekday", 11);
  addUnitPriority("isoWeekday", 11);
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", function(isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken("ddd", function(isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken("dddd", function(isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });
  addWeekParseToken(["dd", "ddd", "dddd"], function(input, week2, config, token) {
    const weekday = config._locale.weekdaysParse(input, token, config._strict);
    if (weekday != null) {
      week2["d"] = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = !!input;
    }
    return config;
  });
  addWeekParseToken(["d", "e", "E"], function(input, week2, config, token) {
    week2[token] = toInt(input);
    return config;
  });
}
function parseWeekday(input, locale) {
  if (!isString(input)) {
    return input;
  }
  const _num = parseInt(input, 10);
  if (!isNaN(_num)) {
    return _num;
  }
  const _weekDay = locale.weekdaysParse(input);
  if (isNumber(_weekDay)) {
    return _weekDay;
  }
  return null;
}
function parseIsoWeekday(input, locale = getLocale()) {
  if (isString(input)) {
    return locale.weekdaysParse(input) % 7 || 7;
  }
  return isNumber(input) && isNaN(input) ? null : input;
}
function setDayOfWeek(date, input, locale = getLocale(), isUTC) {
  const day = getDay(date, isUTC);
  const _input = parseWeekday(input, locale);
  return add(date, _input - day, "day");
}
function getDayOfWeek(date, isUTC) {
  return getDay(date, isUTC);
}
function getLocaleDayOfWeek(date, locale = getLocale(), isUTC) {
  return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
function setLocaleDayOfWeek(date, input, opts = {}) {
  const weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
  return add(date, input - weekday, "day");
}
function getISODayOfWeek(date, isUTC) {
  return getDay(date, isUTC) || 7;
}
function setISODayOfWeek(date, input, opts = {}) {
  const weekday = parseIsoWeekday(input, opts.locale);
  return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}
var symbolMap$1 = {
  1: "١",
  2: "٢",
  3: "٣",
  4: "٤",
  5: "٥",
  6: "٦",
  7: "٧",
  8: "٨",
  9: "٩",
  0: "٠"
};
var numberMap$1 = {
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
  "٠": "0"
};
var pluralForm = function(num) {
  return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
};
var plurals = {
  s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
  m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
  h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
  d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
  M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
  y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
};
var pluralize = function(u) {
  return function(num, withoutSuffix) {
    const f = pluralForm(num);
    let str = plurals[u][pluralForm(num)];
    if (f === 2) {
      str = str[withoutSuffix ? 0 : 1];
    }
    return str.replace(/%d/i, num.toString());
  };
};
var months$2 = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر"
];
var arLocale = {
  abbr: "ar",
  months: months$2,
  monthsShort: months$2,
  weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
  weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
  weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "D/‏M/‏YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  meridiemParse: /ص|م/,
  isPM(input) {
    return "م" === input;
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return "ص";
    } else {
      return "م";
    }
  },
  calendar: {
    sameDay: "[اليوم عند الساعة] LT",
    nextDay: "[غدًا عند الساعة] LT",
    nextWeek: "dddd [عند الساعة] LT",
    lastDay: "[أمس عند الساعة] LT",
    lastWeek: "dddd [عند الساعة] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "بعد %s",
    past: "منذ %s",
    s: pluralize("s"),
    ss: pluralize("s"),
    m: pluralize("m"),
    mm: pluralize("m"),
    h: pluralize("h"),
    hh: pluralize("h"),
    d: pluralize("d"),
    dd: pluralize("d"),
    M: pluralize("M"),
    MM: pluralize("M"),
    y: pluralize("y"),
    yy: pluralize("y")
  },
  preparse(str) {
    return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(match) {
      return numberMap$1[match];
    }).replace(/،/g, ",");
  },
  postformat(str) {
    return str.replace(/\d/g, function(match) {
      return symbolMap$1[match];
    }).replace(/,/g, "،");
  },
  week: {
    dow: 6,
    doy: 12
    // The week that contains Jan 1st is the first week of the year.
  }
};
var bgLocale = {
  abbr: "bg",
  months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
  monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
  weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
  weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
  weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "D.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY H:mm",
    LLLL: "dddd, D MMMM YYYY H:mm"
  },
  calendar: {
    sameDay: "[Днес в] LT",
    nextDay: "[Утре в] LT",
    nextWeek: "dddd [в] LT",
    lastDay: "[Вчера в] LT",
    lastWeek: function(d) {
      switch (d) {
        case 0:
        case 3:
        case 6:
          return "[В изминалата] dddd [в] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[В изминалия] dddd [в] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "след %s",
    past: "преди %s",
    s: "няколко секунди",
    ss: "%d секунди",
    m: "минута",
    mm: "%d минути",
    h: "час",
    hh: "%d часа",
    d: "ден",
    dd: "%d дни",
    M: "месец",
    MM: "%d месеца",
    y: "година",
    yy: "%d години"
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
  ordinal: function(_num) {
    const number = Number(_num);
    let lastDigit = number % 10, last2Digits = number % 100;
    if (number === 0) {
      return number + "-ев";
    } else if (last2Digits === 0) {
      return number + "-ен";
    } else if (last2Digits > 10 && last2Digits < 20) {
      return number + "-ти";
    } else if (lastDigit === 1) {
      return number + "-ви";
    } else if (lastDigit === 2) {
      return number + "-ри";
    } else if (lastDigit === 7 || lastDigit === 8) {
      return number + "-ми";
    } else {
      return number + "-ти";
    }
  },
  week: {
    dow: 1,
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
var monthsShortDot$5 = "gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.".split("_");
var monthsShort$7 = "ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des".split("_");
var monthsParse$6 = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
var monthsRegex$5 = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
var caLocale = {
  abbr: "ca",
  months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$5;
    }
    if (/-MMM-/.test(format)) {
      return monthsShort$7[getMonth(date, isUTC)];
    }
    return monthsShortDot$5[getMonth(date, isUTC)];
  },
  monthsRegex: monthsRegex$5,
  monthsShortRegex: monthsRegex$5,
  monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
  monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
  monthsParse: monthsParse$6,
  longMonthsParse: monthsParse$6,
  shortMonthsParse: monthsParse$6,
  weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
  weekdaysShort: "diu._dil._dim._dix._dij._div._dis.".split("_"),
  weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
  },
  calendar: {
    sameDay(date) {
      return "[avui a " + ("la" + (getHours(date) !== 1) ? "les" : "") + "] LT";
    },
    nextDay(date) {
      return "[dema a " + ("la" + (getHours(date) !== 1) ? "les" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a " + ("la" + (getHours(date) !== 1) ? "les" : "") + "] LT";
    },
    lastDay(date) {
      return "[ahir a " + ("la" + (getHours(date) !== 1) ? "les" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [" + ("passada la " + (getHours(date) !== 1) ? "passades les" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "fa %s",
    s: "uns segons",
    ss: "%d segons",
    m: "un minut",
    mm: "%d minuts",
    h: "una hora",
    hh: "%d hores",
    d: "un dia",
    dd: "%d dies",
    M: "un mes",
    MM: "%d mesos",
    y: "un any",
    yy: "%d anys"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
  ordinal(_num) {
    const num = Number(_num);
    const output = num > 4 ? "é" : num === 1 || num === 3 ? "r" : num === 2 ? "n" : num === 4 ? "t" : "é";
    return num + output;
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var months$1 = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_");
var monthsShort$6 = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
function plural$4(num) {
  return num > 1 && num < 5 && ~~(num / 10) !== 1;
}
function translate$6(num, withoutSuffix, key, isFuture) {
  const result = num + " ";
  switch (key) {
    case "s":
      return withoutSuffix || isFuture ? "pár sekund" : "pár sekundami";
    case "ss":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "sekundy" : "sekund");
      } else {
        return result + "sekundami";
      }
    case "m":
      return withoutSuffix ? "minuta" : isFuture ? "minutu" : "minutou";
    case "mm":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "minuty" : "minut");
      } else {
        return result + "minutami";
      }
    case "h":
      return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";
    case "hh":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "hodiny" : "hodin");
      } else {
        return result + "hodinami";
      }
    case "d":
      return withoutSuffix || isFuture ? "den" : "dnem";
    case "dd":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "dny" : "dní");
      } else {
        return result + "dny";
      }
    case "M":
      return withoutSuffix || isFuture ? "měsíc" : "měsícem";
    case "MM":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "měsíce" : "měsíců");
      } else {
        return result + "měsíci";
      }
    case "y":
      return withoutSuffix || isFuture ? "rok" : "rokem";
    case "yy":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "roky" : "let");
      } else {
        return result + "lety";
      }
  }
}
var csLocale = {
  abbr: "cs",
  months: months$1,
  monthsShort: monthsShort$6,
  monthsParse: function(months2, monthsShort2) {
    let i, _monthsParse = [];
    for (i = 0; i < 12; i++) {
      _monthsParse[i] = new RegExp("^" + months2[i] + "$|^" + monthsShort2[i] + "$", "i");
    }
    return _monthsParse;
  }(months$1, monthsShort$6),
  shortMonthsParse: function(monthsShort2) {
    let i, _shortMonthsParse = [];
    for (i = 0; i < 12; i++) {
      _shortMonthsParse[i] = new RegExp("^" + monthsShort2[i] + "$", "i");
    }
    return _shortMonthsParse;
  }(monthsShort$6),
  longMonthsParse: function(months2) {
    let i, _longMonthsParse = [];
    for (i = 0; i < 12; i++) {
      _longMonthsParse[i] = new RegExp("^" + months2[i] + "$", "i");
    }
    return _longMonthsParse;
  }(months$1),
  weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
  weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
  weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd D. MMMM YYYY H:mm",
    l: "D. M. YYYY"
  },
  calendar: {
    sameDay: "[dnes v] LT",
    nextDay: "[zítra v] LT",
    nextWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[v neděli v] LT";
        case 1:
        case 2:
          return "[v] dddd [v] LT";
        case 3:
          return "[ve středu v] LT";
        case 4:
          return "[ve čtvrtek v] LT";
        case 5:
          return "[v pátek v] LT";
        case 6:
          return "[v sobotu v] LT";
      }
    },
    lastDay: "[včera v] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[minulou neděli v] LT";
        case 1:
        case 2:
          return "[minulé] dddd [v] LT";
        case 3:
          return "[minulou středu v] LT";
        case 4:
        case 5:
          return "[minulý] dddd [v] LT";
        case 6:
          return "[minulou sobotu v] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "za %s",
    past: "před %s",
    s: translate$6,
    ss: translate$6,
    m: translate$6,
    mm: translate$6,
    h: translate$6,
    hh: translate$6,
    d: translate$6,
    dd: translate$6,
    M: translate$6,
    MM: translate$6,
    y: translate$6,
    yy: translate$6
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var daLocale = {
  abbr: "da",
  months: "Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_"),
  weekdays: "Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag".split("_"),
  weekdaysShort: "Søn_Man_Tir_Ons_Tor_Fre_Lør".split("_"),
  weekdaysMin: "Sø_Ma_Ti_On_To_Fr_Lø".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY HH:mm",
    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
  },
  calendar: {
    sameDay: "[i dag kl.] LT",
    nextDay: "[i morgen kl.] LT",
    nextWeek: "på dddd [kl.] LT",
    lastDay: "[i går kl.] LT",
    lastWeek: "[i] dddd[s kl.] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "få sekunder",
    m: "et minut",
    mm: "%d minutter",
    h: "en time",
    hh: "%d timer",
    d: "en dag",
    dd: "%d dage",
    M: "en måned",
    MM: "%d måneder",
    y: "et år",
    yy: "%d år"
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
function processRelativeTime$2(num, withoutSuffix, key, isFuture) {
  const format = {
    "m": ["eine Minute", "einer Minute"],
    "h": ["eine Stunde", "einer Stunde"],
    "d": ["ein Tag", "einem Tag"],
    "dd": [num + " Tage", num + " Tagen"],
    "M": ["ein Monat", "einem Monat"],
    "MM": [num + " Monate", num + " Monaten"],
    "y": ["ein Jahr", "einem Jahr"],
    "yy": [num + " Jahre", num + " Jahren"]
  };
  return withoutSuffix ? format[key][0] : format[key][1];
}
var deLocale = {
  abbr: "de",
  months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
  monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
  monthsParseExact: true,
  weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
  weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
  weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY HH:mm",
    LLLL: "dddd, D. MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[heute um] LT [Uhr]",
    sameElse: "L",
    nextDay: "[morgen um] LT [Uhr]",
    nextWeek: "dddd [um] LT [Uhr]",
    lastDay: "[gestern um] LT [Uhr]",
    lastWeek: "[letzten] dddd [um] LT [Uhr]"
  },
  relativeTime: {
    future: "in %s",
    past: "vor %s",
    s: "ein paar Sekunden",
    ss: "%d Sekunden",
    m: processRelativeTime$2,
    mm: "%d Minuten",
    h: processRelativeTime$2,
    hh: "%d Stunden",
    d: processRelativeTime$2,
    dd: processRelativeTime$2,
    M: processRelativeTime$2,
    MM: processRelativeTime$2,
    y: processRelativeTime$2,
    yy: processRelativeTime$2
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var enGbLocale = {
  abbr: "en-gb",
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal(_num) {
    const num = Number(_num);
    const b = num % 10, output = ~~(num % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
    return num + output;
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var monthsShortDot$4 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
var monthsShort$5 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
var monthsParse$5 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
var monthsRegex$4 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var esDoLocale = {
  abbr: "es-do",
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$4;
    } else if (/-MMM-/.test(format)) {
      return monthsShort$5[getMonth(date, isUTC)];
    } else {
      return monthsShortDot$4[getMonth(date, isUTC)];
    }
  },
  monthsRegex: monthsRegex$4,
  monthsShortRegex: monthsRegex$4,
  monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  monthsParse: monthsParse$5,
  longMonthsParse: monthsParse$5,
  shortMonthsParse: monthsParse$5,
  weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
  weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY h:mm A",
    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
  },
  calendar: {
    sameDay(date) {
      return "[hoy a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[mañana a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[ayer a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [pasado a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un día",
    dd: "%d días",
    M: "un mes",
    MM: "%d meses",
    y: "un año",
    yy: "%d años"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var monthsShortDot$3 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
var monthsShort$4 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
var monthsParse$4 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
var monthsRegex$3 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var esLocale = {
  abbr: "es",
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$3;
    }
    if (/-MMM-/.test(format)) {
      return monthsShort$4[getMonth(date, isUTC)];
    }
    return monthsShortDot$3[getMonth(date, isUTC)];
  },
  monthsRegex: monthsRegex$3,
  monthsShortRegex: monthsRegex$3,
  monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  monthsParse: monthsParse$4,
  longMonthsParse: monthsParse$4,
  shortMonthsParse: monthsParse$4,
  weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
  weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
  },
  calendar: {
    sameDay(date) {
      return "[hoy a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[mañana a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[ayer a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [pasado a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un día",
    dd: "%d días",
    M: "un mes",
    MM: "%d meses",
    y: "un año",
    yy: "%d años"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var monthsShortDot$2 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
var monthsShort$3 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
var esPrLocale = {
  abbr: "es-pr",
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$2;
    } else if (/-MMM-/.test(format)) {
      return monthsShort$3[getMonth(date, isUTC)];
    } else {
      return monthsShortDot$2[getMonth(date, isUTC)];
    }
  },
  monthsParseExact: true,
  weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
  weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "MM/DD/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY h:mm A",
    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
  },
  calendar: {
    sameDay(date) {
      return "[hoy a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[mañana a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[ayer a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [pasado a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un día",
    dd: "%d días",
    M: "un mes",
    MM: "%d meses",
    y: "un año",
    yy: "%d años"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº",
  week: {
    dow: 0,
    doy: 6
    // The week that contains Jan 1st is the first week of the year.
  }
};
var monthsShortDot$1 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
var monthsShort$2 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
var esUsLocale = {
  abbr: "es-us",
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$1;
    } else if (/-MMM-/.test(format)) {
      return monthsShort$2[getMonth(date, isUTC)];
    } else {
      return monthsShortDot$1[getMonth(date, isUTC)];
    }
  },
  monthsParseExact: true,
  weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
  weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "MM/DD/YYYY",
    LL: "MMMM [de] D [de] YYYY",
    LLL: "MMMM [de] D [de] YYYY h:mm A",
    LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
  },
  calendar: {
    sameDay(date) {
      return "[hoy a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[mañana a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[ayer a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [pasado a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un día",
    dd: "%d días",
    M: "un mes",
    MM: "%d meses",
    y: "un año",
    yy: "%d años"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº",
  week: {
    dow: 0,
    doy: 6
    // The week that contains Jan 1st is the first week of the year.
  }
};
var processRelativeTime$1 = function(num, withoutSuffix, key, isFuture) {
  const format = {
    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
    ss: [num + "sekundi", num + "sekundit"],
    m: ["ühe minuti", "üks minut"],
    mm: [num + " minuti", num + " minutit"],
    h: ["ühe tunni", "tund aega", "üks tund"],
    hh: [num + " tunni", num + " tundi"],
    d: ["ühe päeva", "üks päev"],
    M: ["kuu aja", "kuu aega", "üks kuu"],
    MM: [num + " kuu", num + " kuud"],
    y: ["ühe aasta", "aasta", "üks aasta"],
    yy: [num + " aasta", num + " aastat"]
  };
  if (withoutSuffix) {
    return format[key][2] ? format[key][2] : format[key][1];
  }
  return isFuture ? format[key][0] : format[key][1];
};
var etLocale = {
  abbr: "et",
  months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
  monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
  weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
  weekdaysShort: "P_E_T_K_N_R_L".split("_"),
  weekdaysMin: "P_E_T_K_N_R_L".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm"
  },
  calendar: {
    sameDay: "[Täna,] LT",
    nextDay: "[Homme,] LT",
    nextWeek: "[Järgmine] dddd LT",
    lastDay: "[Eile,] LT",
    lastWeek: "[Eelmine] dddd LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s pärast",
    past: "%s tagasi",
    s: processRelativeTime$1,
    ss: processRelativeTime$1,
    m: processRelativeTime$1,
    mm: processRelativeTime$1,
    h: processRelativeTime$1,
    hh: processRelativeTime$1,
    d: processRelativeTime$1,
    dd: "%d päeva",
    M: processRelativeTime$1,
    MM: processRelativeTime$1,
    y: processRelativeTime$1,
    yy: processRelativeTime$1
  },
  dayOfMonthOrdinalParse: /\d{1,2}./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var numbersPast = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ");
var numbersFuture = [
  "nolla",
  "yhden",
  "kahden",
  "kolmen",
  "neljän",
  "viiden",
  "kuuden",
  numbersPast[7],
  numbersPast[8],
  numbersPast[9]
];
function translate$5(num, withoutSuffix, key, isFuture) {
  var result = "";
  switch (key) {
    case "s":
      return isFuture ? "muutaman sekunnin" : "muutama sekunti";
    case "ss":
      return isFuture ? "sekunnin" : "sekuntia";
    case "m":
      return isFuture ? "minuutin" : "minuutti";
    case "mm":
      result = isFuture ? "minuutin" : "minuuttia";
      break;
    case "h":
      return isFuture ? "tunnin" : "tunti";
    case "hh":
      result = isFuture ? "tunnin" : "tuntia";
      break;
    case "d":
      return isFuture ? "päivän" : "päivä";
    case "dd":
      result = isFuture ? "päivän" : "päivää";
      break;
    case "M":
      return isFuture ? "kuukauden" : "kuukausi";
    case "MM":
      result = isFuture ? "kuukauden" : "kuukautta";
      break;
    case "y":
      return isFuture ? "vuoden" : "vuosi";
    case "yy":
      result = isFuture ? "vuoden" : "vuotta";
      break;
  }
  result = verbalNumber(num, isFuture) + " " + result;
  return result;
}
function verbalNumber(num, isFuture) {
  return num < 10 ? isFuture ? numbersFuture[num] : numbersPast[num] : num;
}
var fiLocale = {
  abbr: "fi",
  months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
  monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
  weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
  weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
  weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
  longDateFormat: {
    LT: "HH.mm",
    LTS: "HH.mm.ss",
    L: "DD.MM.YYYY",
    LL: "Do MMMM[ta] YYYY",
    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
    l: "D.M.YYYY",
    ll: "Do MMM YYYY",
    lll: "Do MMM YYYY, [klo] HH.mm",
    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
  },
  calendar: {
    sameDay: "[tänään] [klo] LT",
    nextDay: "[huomenna] [klo] LT",
    nextWeek: "dddd [klo] LT",
    lastDay: "[eilen] [klo] LT",
    lastWeek: "[viime] dddd[na] [klo] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s päästä",
    past: "%s sitten",
    s: translate$5,
    ss: translate$5,
    m: translate$5,
    mm: translate$5,
    h: translate$5,
    hh: translate$5,
    d: translate$5,
    dd: translate$5,
    M: translate$5,
    MM: translate$5,
    y: translate$5,
    yy: translate$5
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var frLocale = {
  abbr: "fr",
  months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
  monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
  monthsParseExact: true,
  weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Aujourd’hui à] LT",
    nextDay: "[Demain à] LT",
    nextWeek: "dddd [à] LT",
    lastDay: "[Hier à] LT",
    lastWeek: "dddd [dernier à] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    ss: "%d secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "un an",
    yy: "%d ans"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
  ordinal(_num, period) {
    const num = Number(_num);
    switch (period) {
      case "D":
        return num + (num === 1 ? "er" : "");
      default:
      case "M":
      case "Q":
      case "DDD":
      case "d":
        return num + (num === 1 ? "er" : "e");
      case "w":
      case "W":
        return num + (num === 1 ? "re" : "e");
    }
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var monthsShortDot = "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_");
var monthsShort$1 = "xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec".split("_");
var monthsParse$3 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
var monthsRegex$2 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
var glLocale = {
  abbr: "gl",
  months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot;
    }
    if (/-MMM-/.test(format)) {
      return monthsShort$1[getMonth(date, isUTC)];
    }
    return monthsShortDot[getMonth(date, isUTC)];
  },
  monthsRegex: monthsRegex$2,
  monthsShortRegex: monthsRegex$2,
  monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
  monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
  monthsParse: monthsParse$3,
  longMonthsParse: monthsParse$3,
  shortMonthsParse: monthsParse$3,
  weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
  weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
  weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
  },
  calendar: {
    sameDay(date) {
      return "[hoxe á" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[mañan á" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [á" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[onte á" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[o] dddd [pasado á" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "fai %s",
    s: "uns segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "unha hora",
    hh: "%d horas",
    d: "un día",
    dd: "%d días",
    M: "un mes",
    MM: "%d meses",
    y: "un ano",
    yy: "%d anos"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var heLocale = {
  abbr: "he",
  months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
  monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
  weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
  weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
  weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [ב]MMMM YYYY",
    LLL: "D [ב]MMMM YYYY HH:mm",
    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
    l: "D/M/YYYY",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd, D MMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[היום ב־]LT",
    nextDay: "[מחר ב־]LT",
    nextWeek: "dddd [בשעה] LT",
    lastDay: "[אתמול ב־]LT",
    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "בעוד %s",
    past: "לפני %s",
    s: "מספר שניות",
    ss: "%d שניות",
    m: "דקה",
    mm: "%d דקות",
    h: "שעה",
    hh(num) {
      if (num === 2) {
        return "שעתיים";
      }
      return num + " שעות";
    },
    d: "יום",
    dd(num) {
      if (num === 2) {
        return "יומיים";
      }
      return num + " ימים";
    },
    M: "חודש",
    MM(num) {
      if (num === 2) {
        return "חודשיים";
      }
      return num + " חודשים";
    },
    y: "שנה",
    yy(num) {
      if (num === 2) {
        return "שנתיים";
      } else if (num % 10 === 0 && num !== 10) {
        return num + " שנה";
      }
      return num + " שנים";
    }
  },
  meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
  isPM(input) {
    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
  },
  meridiem(hour, minute, isLower) {
    if (hour < 5) {
      return "לפנות בוקר";
    } else if (hour < 10) {
      return "בבוקר";
    } else if (hour < 12) {
      return isLower ? 'לפנה"צ' : "לפני הצהריים";
    } else if (hour < 18) {
      return isLower ? 'אחה"צ' : "אחרי הצהריים";
    } else {
      return "בערב";
    }
  }
};
var symbolMap = {
  1: "१",
  2: "२",
  3: "३",
  4: "४",
  5: "५",
  6: "६",
  7: "७",
  8: "८",
  9: "९",
  0: "०"
};
var numberMap = {
  "१": "1",
  "२": "2",
  "३": "3",
  "४": "4",
  "५": "5",
  "६": "6",
  "७": "7",
  "८": "8",
  "९": "9",
  "०": "0"
};
var hiLocale = {
  abbr: "hi",
  months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
  monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
  monthsParseExact: true,
  weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
  weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
  weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
  longDateFormat: {
    LT: "A h:mm बजे",
    LTS: "A h:mm:ss बजे",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY, A h:mm बजे",
    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
  },
  calendar: {
    sameDay: "[आज] LT",
    nextDay: "[कल] LT",
    nextWeek: "dddd, LT",
    lastDay: "[कल] LT",
    lastWeek: "[पिछले] dddd, LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s में",
    past: "%s पहले",
    s: "कुछ ही क्षण",
    ss: "%d सेकंड",
    m: "एक मिनट",
    mm: "%d मिनट",
    h: "एक घंटा",
    hh: "%d घंटे",
    d: "एक दिन",
    dd: "%d दिन",
    M: "एक महीने",
    MM: "%d महीने",
    y: "एक वर्ष",
    yy: "%d वर्ष"
  },
  preparse(str) {
    return str.replace(/[१२३४५६७८९०]/g, function(match) {
      return numberMap[match];
    });
  },
  postformat(str) {
    return str.replace(/\d/g, function(match) {
      return symbolMap[match];
    });
  },
  // Hindi notation for meridiems are quite fuzzy in practice. While there exists
  // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
  meridiemParse: /रात|सुबह|दोपहर|शाम/,
  meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "रात") {
      return hour < 4 ? hour : hour + 12;
    } else if (meridiem === "सुबह") {
      return hour;
    } else if (meridiem === "दोपहर") {
      return hour >= 10 ? hour : hour + 12;
    } else if (meridiem === "शाम") {
      return hour + 12;
    }
  },
  meridiem(hour, minute, isLower) {
    if (hour < 4) {
      return "रात";
    } else if (hour < 10) {
      return "सुबह";
    } else if (hour < 17) {
      return "दोपहर";
    } else if (hour < 20) {
      return "शाम";
    } else {
      return "रात";
    }
  },
  week: {
    dow: 0,
    doy: 6
    // The week that contains Jan 1st is the first week of the year.
  }
};
var weekEndings = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
function translate$4(num, withoutSuffix, key, isFuture) {
  switch (key) {
    case "s":
      return isFuture || withoutSuffix ? "néhány másodperc" : "néhány másodperce";
    case "ss":
      return num + (isFuture || withoutSuffix ? " másodperc" : " másodperce");
    case "m":
      return "egy" + (isFuture || withoutSuffix ? " perc" : " perce");
    case "mm":
      return num + (isFuture || withoutSuffix ? " perc" : " perce");
    case "h":
      return "egy" + (isFuture || withoutSuffix ? " óra" : " órája");
    case "hh":
      return num + (isFuture || withoutSuffix ? " óra" : " órája");
    case "d":
      return "egy" + (isFuture || withoutSuffix ? " nap" : " napja");
    case "dd":
      return num + (isFuture || withoutSuffix ? " nap" : " napja");
    case "M":
      return "egy" + (isFuture || withoutSuffix ? " hónap" : " hónapja");
    case "MM":
      return num + (isFuture || withoutSuffix ? " hónap" : " hónapja");
    case "y":
      return "egy" + (isFuture || withoutSuffix ? " év" : " éve");
    case "yy":
      return num + (isFuture || withoutSuffix ? " év" : " éve");
  }
  return "";
}
function week(date, isFuture) {
  return (isFuture ? "" : "[múlt] ") + "[" + weekEndings[getDayOfWeek(date)] + "] LT[-kor]";
}
var huLocale = {
  abbr: "hu",
  months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
  monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
  weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
  weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
  weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "YYYY.MM.DD.",
    LL: "YYYY. MMMM D.",
    LLL: "YYYY. MMMM D. H:mm",
    LLLL: "YYYY. MMMM D., dddd H:mm"
  },
  meridiemParse: /de|du/i,
  isPM(input) {
    return input.charAt(1).toLowerCase() === "u";
  },
  meridiem(hours, minutes, isLower) {
    if (hours < 12) {
      return isLower === true ? "de" : "DE";
    } else {
      return isLower === true ? "du" : "DU";
    }
  },
  calendar: {
    sameDay: "[ma] LT[-kor]",
    nextDay: "[holnap] LT[-kor]",
    nextWeek(date) {
      return week(date, true);
    },
    lastDay: "[tegnap] LT[-kor]",
    lastWeek(date) {
      return week(date, false);
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "%s múlva",
    past: "%s",
    s: translate$4,
    ss: translate$4,
    m: translate$4,
    mm: translate$4,
    h: translate$4,
    hh: translate$4,
    d: translate$4,
    dd: translate$4,
    M: translate$4,
    MM: translate$4,
    y: translate$4,
    yy: translate$4
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var hrLocale = {
  abbr: "hr",
  months: "Siječanj_Veljača_Ožujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac".split("_"),
  monthsShort: "Sij_Velj_Ožu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro".split("_"),
  weekdays: "Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota".split("_"),
  weekdaysShort: "Ned_Pon_Uto_Sri_Čet_Pet_Sub".split("_"),
  weekdaysMin: "Ne_Po_Ut_Sr_Če_Pe_Su".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Danas u] LT",
    nextDay: "[Sutra u] LT",
    nextWeek: "dddd [u] LT",
    lastDay: "[Jučer u] LT",
    lastWeek: "[Zadnji] dddd [u] LT",
    sameElse: "L"
  },
  invalidDate: "Neispravan datum",
  relativeTime: {
    future: "za %s",
    past: "%s prije",
    s: "nekoliko sekundi",
    ss: "%d sekundi",
    m: "minuta",
    mm: "%d minuta",
    h: "sat",
    hh: "%d sati",
    d: "dan",
    dd: "%d dana",
    M: "mjesec",
    MM: "%d mjeseci",
    y: "godina",
    yy: "%d godina"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal(_num) {
    const num = Number(_num);
    const b = num % 10, output = ~~(num % 100 / 10) === 1 ? "." : b === 1 ? "." : b === 2 ? "." : b === 3 ? "." : ".";
    return num + output;
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var idLocale = {
  abbr: "id",
  months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
  weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
  weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
  weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
  longDateFormat: {
    LT: "HH.mm",
    LTS: "HH.mm.ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY [pukul] HH.mm",
    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
  },
  meridiemParse: /pagi|siang|sore|malam/,
  meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "pagi") {
      return hour;
    } else if (meridiem === "siang") {
      return hour >= 11 ? hour : hour + 12;
    } else if (meridiem === "sore" || meridiem === "malam") {
      return hour + 12;
    }
  },
  meridiem(hours, minutes, isLower) {
    if (hours < 11) {
      return "pagi";
    } else if (hours < 15) {
      return "siang";
    } else if (hours < 19) {
      return "sore";
    } else {
      return "malam";
    }
  },
  calendar: {
    sameDay: "[Hari ini pukul] LT",
    nextDay: "[Besok pukul] LT",
    nextWeek: "dddd [pukul] LT",
    lastDay: "[Kemarin pukul] LT",
    lastWeek: "dddd [lalu pukul] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "dalam %s",
    past: "%s yang lalu",
    s: "beberapa detik",
    ss: "%d detik",
    m: "semenit",
    mm: "%d menit",
    h: "sejam",
    hh: "%d jam",
    d: "sehari",
    dd: "%d hari",
    M: "sebulan",
    MM: "%d bulan",
    y: "setahun",
    yy: "%d tahun"
  },
  week: {
    dow: 1,
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
var itLocale = {
  abbr: "it",
  months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
  monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
  weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
  weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
  weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Oggi alle] LT",
    nextDay: "[Domani alle] LT",
    nextWeek: "dddd [alle] LT",
    lastDay: "[Ieri alle] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[la scorsa] dddd [alle] LT";
        default:
          return "[lo scorso] dddd [alle] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future(num) {
      return (/^[0-9].+$/.test(num.toString(10)) ? "tra" : "in") + " " + num;
    },
    past: "%s fa",
    s: "alcuni secondi",
    ss: "%d secondi",
    m: "un minuto",
    mm: "%d minuti",
    h: "un'ora",
    hh: "%d ore",
    d: "un giorno",
    dd: "%d giorni",
    M: "un mese",
    MM: "%d mesi",
    y: "un anno",
    yy: "%d anni"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var jaLocale = {
  abbr: "ja",
  months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
  weekdaysShort: "日_月_火_水_木_金_土".split("_"),
  weekdaysMin: "日_月_火_水_木_金_土".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY年M月D日",
    LLL: "YYYY年M月D日 HH:mm",
    LLLL: "YYYY年M月D日 HH:mm dddd",
    l: "YYYY/MM/DD",
    ll: "YYYY年M月D日",
    lll: "YYYY年M月D日 HH:mm",
    llll: "YYYY年M月D日 HH:mm dddd"
  },
  meridiemParse: /午前|午後/i,
  isPM(input) {
    return input === "午後";
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return "午前";
    } else {
      return "午後";
    }
  },
  calendar: {
    sameDay: "[今日] LT",
    nextDay: "[明日] LT",
    nextWeek: "[来週]dddd LT",
    lastDay: "[昨日] LT",
    lastWeek: "[前週]dddd LT",
    sameElse: "L"
  },
  dayOfMonthOrdinalParse: /\d{1,2}日/,
  ordinal(num, period) {
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return num + "日";
      default:
        return num.toString(10);
    }
  },
  relativeTime: {
    future: "%s後",
    past: "%s前",
    s: "数秒",
    ss: "%d秒",
    m: "1分",
    mm: "%d分",
    h: "1時間",
    hh: "%d時間",
    d: "1日",
    dd: "%d日",
    M: "1ヶ月",
    MM: "%dヶ月",
    y: "1年",
    yy: "%d年"
  }
};
var kaLocale = {
  abbr: "ka",
  months: {
    format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_"),
    standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_")
  },
  monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
  weekdays: {
    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
    isFormat: /(წინა|შემდეგ)/
  },
  weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
  weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY h:mm A",
    LLLL: "dddd, D MMMM YYYY h:mm A"
  },
  calendar: {
    sameDay: "[დღეს] LT[-ზე]",
    nextDay: "[ხვალ] LT[-ზე]",
    lastDay: "[გუშინ] LT[-ზე]",
    nextWeek: "[შემდეგ] dddd LT[-ზე]",
    lastWeek: "[წინა] dddd LT-ზე",
    sameElse: "L"
  },
  relativeTime: {
    future(s) {
      var st = s.toString();
      return /(წამი|წუთი|საათი|წელი)/.test(st) ? st.replace(/ი$/, "ში") : st + "ში";
    },
    past(s) {
      var st = s.toString();
      if (/(წამი|წუთი|საათი|დღე|თვე)/.test(st)) {
        return st.replace(/(ი|ე)$/, "ის წინ");
      }
      if (/წელი/.test(st)) {
        return st.replace(/წელი$/, "წლის წინ");
      }
    },
    s: "რამდენიმე წამი",
    ss: "%d წამი",
    m: "წუთი",
    mm: "%d წუთი",
    h: "საათი",
    hh: "%d საათი",
    d: "დღე",
    dd: "%d დღე",
    M: "თვე",
    MM: "%d თვე",
    y: "წელი",
    yy: "%d წელი"
  },
  dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
  ordinal(_num, _period) {
    const num = Number(_num);
    if (num === 0) {
      return num.toString();
    }
    if (num === 1) {
      return num + "-ლი";
    }
    if (num < 20 || num <= 100 && num % 20 === 0 || num % 100 === 0) {
      return "მე-" + num;
    }
    return num + "-ე";
  },
  week: {
    dow: 1,
    doy: 4
  }
};
var suffixes$1 = {
  0: "-ші",
  1: "-ші",
  2: "-ші",
  3: "-ші",
  4: "-ші",
  5: "-ші",
  6: "-шы",
  7: "-ші",
  8: "-ші",
  9: "-шы",
  10: "-шы",
  20: "-шы",
  30: "-шы",
  40: "-шы",
  50: "-ші",
  60: "-шы",
  70: "-ші",
  80: "-ші",
  90: "-шы",
  100: "-ші"
};
var kkLocale = {
  abbr: "kk",
  months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
  monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
  weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
  weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
  weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Бүгін сағат] LT",
    nextDay: "[Ертең сағат] LT",
    nextWeek: "dddd [сағат] LT",
    lastDay: "[Кеше сағат] LT",
    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s ішінде",
    past: "%s бұрын",
    s: "бірнеше секунд",
    ss: "%d секунд",
    m: "бір минут",
    mm: "%d минут",
    h: "бір сағат",
    hh: "%d сағат",
    d: "бір күн",
    dd: "%d күн",
    M: "бір ай",
    MM: "%d ай",
    y: "бір жыл",
    yy: "%d жыл"
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
  ordinal(_num) {
    const a = _num % 10;
    const b = _num >= 100 ? 100 : null;
    return _num + (suffixes$1[_num] || suffixes$1[a] || suffixes$1[b]);
  },
  week: {
    dow: 1,
    doy: 7
    // The week that contains Jan 7th is the first week of the year.
  }
};
var koLocale = {
  abbr: "ko",
  months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
  monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
  weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
  weekdaysShort: "일_월_화_수_목_금_토".split("_"),
  weekdaysMin: "일_월_화_수_목_금_토".split("_"),
  longDateFormat: {
    LT: "A h:mm",
    LTS: "A h:mm:ss",
    L: "YYYY.MM.DD",
    LL: "YYYY년 MMMM D일",
    LLL: "YYYY년 MMMM D일 A h:mm",
    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
    l: "YYYY.MM.DD",
    ll: "YYYY년 MMMM D일",
    lll: "YYYY년 MMMM D일 A h:mm",
    llll: "YYYY년 MMMM D일 dddd A h:mm"
  },
  calendar: {
    sameDay: "오늘 LT",
    nextDay: "내일 LT",
    nextWeek: "dddd LT",
    lastDay: "어제 LT",
    lastWeek: "지난주 dddd LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s 후",
    past: "%s 전",
    s: "몇 초",
    ss: "%d초",
    m: "1분",
    mm: "%d분",
    h: "한 시간",
    hh: "%d시간",
    d: "하루",
    dd: "%d일",
    M: "한 달",
    MM: "%d달",
    y: "일 년",
    yy: "%d년"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
  ordinal: function(num, period) {
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return num + "일";
      case "M":
        return num + "월";
      case "w":
      case "W":
        return num + "주";
      default:
        return num.toString(10);
    }
  },
  meridiemParse: /오전|오후/,
  isPM: function(token) {
    return token === "오후";
  },
  meridiem: function(hour, minute, isUpper) {
    return hour < 12 ? "오전" : "오후";
  }
};
var units = {
  ss: "sekundė_sekundžių_sekundes",
  m: "minutė_minutės_minutę",
  mm: "minutės_minučių_minutes",
  h: "valanda_valandos_valandą",
  hh: "valandos_valandų_valandas",
  d: "diena_dienos_dieną",
  dd: "dienos_dienų_dienas",
  M: "mėnuo_mėnesio_mėnesį",
  MM: "mėnesiai_mėnesių_mėnesius",
  y: "metai_metų_metus",
  yy: "metai_metų_metus"
};
function translateSeconds(num, withoutSuffix, key, isFuture) {
  if (withoutSuffix) {
    return "kelios sekundės";
  } else {
    return isFuture ? "kelių sekundžių" : "kelias sekundes";
  }
}
function translateSingular(num, withoutSuffix, key, isFuture) {
  return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
}
function special(num) {
  return num % 10 === 0 || num > 10 && num < 20;
}
function forms(key) {
  return units[key].split("_");
}
function translate$3(num, withoutSuffix, key, isFuture) {
  let result = num + " ";
  if (num === 1) {
    return result + translateSingular(num, withoutSuffix, key[0], isFuture);
  } else if (withoutSuffix) {
    return result + (special(num) ? forms(key)[1] : forms(key)[0]);
  } else {
    if (isFuture) {
      return result + forms(key)[1];
    } else {
      return result + (special(num) ? forms(key)[1] : forms(key)[2]);
    }
  }
}
var ltLocale = {
  abbr: "lt",
  months: {
    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
  },
  monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
  weekdays: {
    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
    isFormat: /dddd HH:mm/
  },
  weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
  weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "YYYY [m.] MMMM D [d.]",
    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
    l: "YYYY-MM-DD",
    ll: "YYYY [m.] MMMM D [d.]",
    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
  },
  calendar: {
    sameDay: "[Šiandien] LT",
    nextDay: "[Rytoj] LT",
    nextWeek: "dddd LT",
    lastDay: "[Vakar] LT",
    lastWeek: "[Praėjusį] dddd LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "po %s",
    past: "prieš %s",
    s: translateSeconds,
    ss: translate$3,
    m: translateSingular,
    mm: translate$3,
    h: translateSingular,
    hh: translate$3,
    d: translateSingular,
    dd: translate$3,
    M: translateSingular,
    MM: translate$3,
    y: translateSingular,
    yy: translate$3
  },
  dayOfMonthOrdinalParse: /\d{1,2}-oji/,
  ordinal(num) {
    return num + "-oji";
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var lvLocale = {
  abbr: "lv",
  months: "Janvāris_Februāris_Marts_Aprīlis_Maijs_Jūnijs_Jūlijs_Augusts_Septembris_Oktobris_Novembris_Decembris".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_Mai_Jūn_Jūl_Aug_Sep_Okt_Nov_Dec".split("_"),
  weekdays: "Svētdiena_Pirmdiena_Otrdiena_Trešdiena_Ceturtdiena_Piektdiena_Sestdiena".split("_"),
  weekdaysShort: "Svētd_Pirmd_Otrd_Trešd_Ceturtd_Piektd_Sestd".split("_"),
  weekdaysMin: "Sv_Pi_Ot_Tr_Ce_Pk_Se".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "pēc %s",
    past: "pirms %s",
    s: "dažām sekundēm",
    ss: "%d sekundēm",
    m: "minūtes",
    mm: "%d minūtēm",
    h: "stundas",
    hh: "%d stundām",
    d: "dienas",
    dd: "%d dienām",
    M: "mēneša",
    MM: "%d mēnešiem",
    y: "gada",
    yy: "%d gadiem"
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal(num) {
    return num + ".";
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
function translate$2(num, withoutSuffix, key, isFuture) {
  switch (key) {
    case "s":
      return withoutSuffix ? "хэдхэн секунд" : "хэдхэн секундын";
    case "ss":
      return num + (withoutSuffix ? " секунд" : " секундын");
    case "m":
    case "mm":
      return num + (withoutSuffix ? " минут" : " минутын");
    case "h":
    case "hh":
      return num + (withoutSuffix ? " цаг" : " цагийн");
    case "d":
    case "dd":
      return num + (withoutSuffix ? " өдөр" : " өдрийн");
    case "M":
    case "MM":
      return num + (withoutSuffix ? " сар" : " сарын");
    case "y":
    case "yy":
      return num + (withoutSuffix ? " жил" : " жилийн");
    default:
      return num.toString(10);
  }
}
var mnLocale = {
  abbr: "mn",
  months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
  monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
  monthsParseExact: true,
  weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
  weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
  weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "YYYY оны MMMMын D",
    LLL: "YYYY оны MMMMын D HH:mm",
    LLLL: "dddd, YYYY оны MMMMын D HH:mm"
  },
  meridiemParse: /ҮӨ|ҮХ/i,
  isPM: function(input) {
    return input === "ҮХ";
  },
  meridiem: function(hour, minute, isLower) {
    if (hour < 12) {
      return "ҮӨ";
    } else {
      return "ҮХ";
    }
  },
  calendar: {
    sameDay: "[Өнөөдөр] LT",
    nextDay: "[Маргааш] LT",
    nextWeek: "[Ирэх] dddd LT",
    lastDay: "[Өчигдөр] LT",
    lastWeek: "[Өнгөрсөн] dddd LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s дараа",
    past: "%s өмнө",
    s: translate$2,
    ss: translate$2,
    m: translate$2,
    mm: translate$2,
    h: translate$2,
    hh: translate$2,
    d: translate$2,
    dd: translate$2,
    M: translate$2,
    MM: translate$2,
    y: translate$2,
    yy: translate$2
  },
  dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
  ordinal: function(num, period) {
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return num + " өдөр";
      default:
        return num.toString(10);
    }
  }
};
var nbLocale = {
  abbr: "nb",
  months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
  monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
  monthsParseExact: true,
  weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
  weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
  weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
  },
  calendar: {
    sameDay: "[i dag kl.] LT",
    nextDay: "[i morgen kl.] LT",
    nextWeek: "dddd [kl.] LT",
    lastDay: "[i går kl.] LT",
    lastWeek: "[forrige] dddd [kl.] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "noen sekunder",
    ss: "%d sekunder",
    m: "ett minutt",
    mm: "%d minutter",
    h: "en time",
    hh: "%d timer",
    d: "en dag",
    dd: "%d dager",
    M: "en måned",
    MM: "%d måneder",
    y: "ett år",
    yy: "%d år"
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var monthsShortWithDots$1 = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
var monthsShortWithoutDots$1 = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
var monthsParse$2 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex$1 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var nlBeLocale = {
  abbr: "nl-be",
  months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortWithDots$1;
    } else if (/-MMM-/.test(format)) {
      return monthsShortWithoutDots$1[getMonth(date, isUTC)];
    } else {
      return monthsShortWithDots$1[getMonth(date, isUTC)];
    }
  },
  monthsRegex: monthsRegex$1,
  monthsShortRegex: monthsRegex$1,
  monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
  monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
  monthsParse: monthsParse$2,
  longMonthsParse: monthsParse$2,
  shortMonthsParse: monthsParse$2,
  weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
  weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
  weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[vandaag om] LT",
    nextDay: "[morgen om] LT",
    nextWeek: "dddd [om] LT",
    lastDay: "[gisteren om] LT",
    lastWeek: "[afgelopen] dddd [om] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "over %s",
    past: "%s geleden",
    s: "een paar seconden",
    ss: "%d seconden",
    m: "één minuut",
    mm: "%d minuten",
    h: "één uur",
    hh: "%d uur",
    d: "één dag",
    dd: "%d dagen",
    M: "één maand",
    MM: "%d maanden",
    y: "één jaar",
    yy: "%d jaar"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
  ordinal(_num) {
    const num = Number(_num);
    return num + (num === 1 || num === 8 || num >= 20 ? "ste" : "de");
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var monthsShortWithDots = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
var monthsShortWithoutDots = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
var monthsParse$1 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var nlLocale = {
  abbr: "nl",
  months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortWithDots;
    } else if (/-MMM-/.test(format)) {
      return monthsShortWithoutDots[getMonth(date, isUTC)];
    } else {
      return monthsShortWithDots[getMonth(date, isUTC)];
    }
  },
  monthsRegex,
  monthsShortRegex: monthsRegex,
  monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
  monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
  monthsParse: monthsParse$1,
  longMonthsParse: monthsParse$1,
  shortMonthsParse: monthsParse$1,
  weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
  weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
  weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD-MM-YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[vandaag om] LT",
    nextDay: "[morgen om] LT",
    nextWeek: "dddd [om] LT",
    lastDay: "[gisteren om] LT",
    lastWeek: "[afgelopen] dddd [om] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "over %s",
    past: "%s geleden",
    s: "een paar seconden",
    ss: "%d seconden",
    m: "één minuut",
    mm: "%d minuten",
    h: "één uur",
    hh: "%d uur",
    d: "één dag",
    dd: "%d dagen",
    M: "één maand",
    MM: "%d maanden",
    y: "één jaar",
    yy: "%d jaar"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
  ordinal(_num) {
    const num = Number(_num);
    return num + (num === 1 || num === 8 || num >= 20 ? "ste" : "de");
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var monthsNominative = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_");
var monthsSubjective = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
function plural$3(num) {
  return num % 10 < 5 && num % 10 > 1 && ~~(num / 10) % 10 !== 1;
}
function translate$1(num, withoutSuffix, key) {
  let result = num + " ";
  switch (key) {
    case "ss":
      return result + (plural$3(num) ? "sekundy" : "sekund");
    case "m":
      return withoutSuffix ? "minuta" : "minutę";
    case "mm":
      return result + (plural$3(num) ? "minuty" : "minut");
    case "h":
      return withoutSuffix ? "godzina" : "godzinę";
    case "hh":
      return result + (plural$3(num) ? "godziny" : "godzin");
    case "MM":
      return result + (plural$3(num) ? "miesiące" : "miesięcy");
    case "yy":
      return result + (plural$3(num) ? "lata" : "lat");
  }
}
var plLocale = {
  abbr: "pl",
  months(date, format, isUTC) {
    if (!date) {
      return monthsNominative;
    } else if (format === "") {
      return "(" + monthsSubjective[getMonth(date, isUTC)] + "|" + monthsNominative[getMonth(date, isUTC)] + ")";
    } else if (/D MMMM/.test(format)) {
      return monthsSubjective[getMonth(date, isUTC)];
    } else {
      return monthsNominative[getMonth(date, isUTC)];
    }
  },
  monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
  weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
  weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
  weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Dziś o] LT",
    nextDay: "[Jutro o] LT",
    nextWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[W niedzielę o] LT";
        case 2:
          return "[We wtorek o] LT";
        case 3:
          return "[W środę o] LT";
        case 5:
          return "[W piątek o] LT";
        case 6:
          return "[W sobotę o] LT";
        default:
          return "[W] dddd [o] LT";
      }
    },
    lastDay: "[Wczoraj o] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[W zeszłą niedzielę o] LT";
        case 3:
          return "[W zeszłą środę o] LT";
        case 4:
          return "[W zeszłą czwartek o] LT";
        case 5:
          return "[W zeszłą piątek o] LT";
        case 6:
          return "[W zeszłą sobotę o] LT";
        default:
          return "[W zeszły] dddd [o] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "za %s",
    past: "%s temu",
    s: "kilka sekund",
    ss: translate$1,
    m: translate$1,
    mm: translate$1,
    h: translate$1,
    hh: translate$1,
    d: "1 dzień",
    dd: "%d dni",
    M: "miesiąc",
    MM: translate$1,
    y: "rok",
    yy: translate$1
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var ptBrLocale = {
  abbr: "pt-br",
  months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
  monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
  weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
  weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
  weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
  },
  calendar: {
    sameDay: "[Hoje às] LT",
    nextDay: "[Amanhã às] LT",
    nextWeek: "dddd [às] LT",
    lastDay: "[Ontem às] LT",
    lastWeek(date) {
      return getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6 ? "[Último] dddd [às] LT" : (
        // Saturday + Sunday
        "[Última] dddd [às] LT"
      );
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "em %s",
    past: "%s atrás",
    s: "poucos segundos",
    ss: "%d segundos",
    m: "um minuto",
    mm: "%d minutos",
    h: "uma hora",
    hh: "%d horas",
    d: "um dia",
    dd: "%d dias",
    M: "um mês",
    MM: "%d meses",
    y: "um ano",
    yy: "%d anos"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº"
};
function relativeTimeWithPlural$2(num, withoutSuffix, key) {
  let format = {
    ss: "secunde",
    mm: "minute",
    hh: "ore",
    dd: "zile",
    MM: "luni",
    yy: "ani"
  };
  let separator = " ";
  if (num % 100 >= 20 || num >= 100 && num % 100 === 0) {
    separator = " de ";
  }
  return num + separator + format[key];
}
var roLocale = {
  abbr: "ro",
  months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
  monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
  monthsParseExact: true,
  weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
  weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
  weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY H:mm",
    LLLL: "dddd, D MMMM YYYY H:mm"
  },
  calendar: {
    sameDay: "[azi la] LT",
    nextDay: "[mâine la] LT",
    nextWeek: "dddd [la] LT",
    lastDay: "[ieri la] LT",
    lastWeek: "[fosta] dddd [la] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "peste %s",
    past: "%s în urmă",
    s: "câteva secunde",
    ss: relativeTimeWithPlural$2,
    m: "un minut",
    mm: relativeTimeWithPlural$2,
    h: "o oră",
    hh: relativeTimeWithPlural$2,
    d: "o zi",
    dd: relativeTimeWithPlural$2,
    M: "o lună",
    MM: relativeTimeWithPlural$2,
    y: "un an",
    yy: relativeTimeWithPlural$2
  },
  week: {
    dow: 1,
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
function plural$2(word, num) {
  let forms2 = word.split("_");
  return num % 10 === 1 && num % 100 !== 11 ? forms2[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms2[1] : forms2[2];
}
function relativeTimeWithPlural$1(num, withoutSuffix, key) {
  let format = {
    ss: withoutSuffix ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
    mm: withoutSuffix ? "минута_минуты_минут" : "минуту_минуты_минут",
    hh: "час_часа_часов",
    dd: "день_дня_дней",
    MM: "месяц_месяца_месяцев",
    yy: "год_года_лет"
  };
  if (key === "m") {
    return withoutSuffix ? "минута" : "минуту";
  }
  return num + " " + plural$2(format[key], +num);
}
var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
var ruLocale = {
  abbr: "ru",
  months: {
    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
  },
  monthsShort: {
    // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
  },
  weekdays: {
    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
  },
  weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
  weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
  monthsParse,
  longMonthsParse: monthsParse,
  shortMonthsParse: monthsParse,
  // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
  monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
  // копия предыдущего
  monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
  // полные названия с падежами
  monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
  // Выражение, которое соотвествует только сокращённым формам
  monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY г.",
    LLL: "D MMMM YYYY г., H:mm",
    LLLL: "dddd, D MMMM YYYY г., H:mm"
  },
  calendar: {
    sameDay: "[Сегодня в] LT",
    nextDay: "[Завтра в] LT",
    lastDay: "[Вчера в] LT",
    nextWeek(date, now) {
      if (getWeek(now) !== getWeek(date)) {
        switch (getDayOfWeek(date)) {
          case 0:
            return "[В следующее] dddd [в] LT";
          case 1:
          case 2:
          case 4:
            return "[В следующий] dddd [в] LT";
          case 3:
          case 5:
          case 6:
            return "[В следующую] dddd [в] LT";
        }
      } else {
        if (getDayOfWeek(date) === 2) {
          return "[Во] dddd [в] LT";
        } else {
          return "[В] dddd [в] LT";
        }
      }
    },
    lastWeek(date, now) {
      if (getWeek(now) !== getWeek(date)) {
        switch (getDayOfWeek(date)) {
          case 0:
            return "[В прошлое] dddd [в] LT";
          case 1:
          case 2:
          case 4:
            return "[В прошлый] dddd [в] LT";
          case 3:
          case 5:
          case 6:
            return "[В прошлую] dddd [в] LT";
        }
      } else {
        if (getDayOfWeek(date) === 2) {
          return "[Во] dddd [в] LT";
        } else {
          return "[В] dddd [в] LT";
        }
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "через %s",
    past: "%s назад",
    s: "несколько секунд",
    ss: relativeTimeWithPlural$1,
    m: relativeTimeWithPlural$1,
    mm: relativeTimeWithPlural$1,
    h: "час",
    hh: relativeTimeWithPlural$1,
    d: "день",
    dd: relativeTimeWithPlural$1,
    M: "месяц",
    MM: relativeTimeWithPlural$1,
    y: "год",
    yy: relativeTimeWithPlural$1
  },
  meridiemParse: /ночи|утра|дня|вечера/i,
  isPM(input) {
    return /^(дня|вечера)$/.test(input);
  },
  meridiem(hour, minute, isLower) {
    if (hour < 4) {
      return "ночи";
    } else if (hour < 12) {
      return "утра";
    } else if (hour < 17) {
      return "дня";
    } else {
      return "вечера";
    }
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
  ordinal(_num, period) {
    const num = Number(_num);
    switch (period) {
      case "M":
      case "d":
      case "DDD":
        return num + "-й";
      case "D":
        return num + "-го";
      case "w":
      case "W":
        return num + "-я";
      default:
        return num.toString(10);
    }
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var months = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_");
var monthsShort = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
function plural$1(num) {
  return num > 1 && num < 5 && ~~(num / 10) !== 1;
}
function translate(num, withoutSuffix, key, isFuture) {
  const result = num + " ";
  switch (key) {
    case "s":
      return withoutSuffix || isFuture ? "pár sekúnd" : "pár sekundami";
    case "ss":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "sekundy" : "sekúnd");
      } else {
        return result + "sekundami";
      }
    case "m":
      return withoutSuffix ? "minúta" : isFuture ? "minútu" : "minútou";
    case "mm":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "minúty" : "minút");
      } else {
        return result + "minútami";
      }
    case "h":
      return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";
    case "hh":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "hodiny" : "hodín");
      } else {
        return result + "hodinami";
      }
    case "d":
      return withoutSuffix || isFuture ? "deň" : "dňom";
    case "dd":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "dni" : "dní");
      } else {
        return result + "dňami";
      }
    case "M":
      return withoutSuffix || isFuture ? "mesiac" : "mesiacom";
    case "MM":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "mesiace" : "mesiacov");
      } else {
        return result + "mesiacmi";
      }
    case "y":
      return withoutSuffix || isFuture ? "rok" : "rokom";
    case "yy":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "roky" : "rokov");
      } else {
        return result + "rokmi";
      }
  }
}
var skLocale = {
  abbr: "sk",
  months,
  monthsShort,
  weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
  weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
  weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd D. MMMM YYYY H:mm",
    l: "D. M. YYYY"
  },
  calendar: {
    sameDay: "[dnes o] LT",
    nextDay: "[zajtra o] LT",
    nextWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[v nedeľu o] LT";
        case 1:
        case 2:
          return "[v] dddd [o] LT";
        case 3:
          return "[v stredu o] LT";
        case 4:
          return "[vo štvrtok o] LT";
        case 5:
          return "[v piatok o] LT";
        case 6:
          return "[v sobotu o] LT";
      }
    },
    lastDay: "[včera o] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[minulú nedeľu o] LT";
        case 1:
        case 2:
          return "[minulý] dddd [o] LT";
        case 3:
          return "[minulú stredu o] LT";
        case 4:
        case 5:
          return "[minulý] dddd [o] LT";
        case 6:
          return "[minulú sobotu o] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "o %s",
    past: "pred %s",
    s: translate,
    ss: translate,
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: translate,
    dd: translate,
    M: translate,
    MM: translate,
    y: translate,
    yy: translate
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
function processRelativeTime(number, withoutSuffix, key, isFuture) {
  var result = number + " ";
  switch (key) {
    case "s":
      return withoutSuffix || isFuture ? "nekaj sekund" : "nekaj sekundami";
    case "ss":
      if (number === 1) {
        result += withoutSuffix ? "sekundo" : "sekundi";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "sekundi" : "sekundah";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "sekunde" : "sekundah";
      } else {
        result += withoutSuffix || isFuture ? "sekund" : "sekund";
      }
      return result;
    case "m":
      return withoutSuffix ? "ena minuta" : "eno minuto";
    case "mm":
      if (number === 1) {
        result += withoutSuffix ? "minuta" : "minuto";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "minuti" : "minutama";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "minute" : "minutami";
      } else {
        result += withoutSuffix || isFuture ? "minut" : "minutami";
      }
      return result;
    case "h":
      return withoutSuffix ? "ena ura" : "eno uro";
    case "hh":
      if (number === 1) {
        result += withoutSuffix ? "ura" : "uro";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "uri" : "urama";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "ure" : "urami";
      } else {
        result += withoutSuffix || isFuture ? "ur" : "urami";
      }
      return result;
    case "d":
      return withoutSuffix || isFuture ? "en dan" : "enim dnem";
    case "dd":
      if (number === 1) {
        result += withoutSuffix || isFuture ? "dan" : "dnem";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "dni" : "dnevoma";
      } else {
        result += withoutSuffix || isFuture ? "dni" : "dnevi";
      }
      return result;
    case "M":
      return withoutSuffix || isFuture ? "en mesec" : "enim mesecem";
    case "MM":
      if (number === 1) {
        result += withoutSuffix || isFuture ? "mesec" : "mesecem";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "meseca" : "mesecema";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "mesece" : "meseci";
      } else {
        result += withoutSuffix || isFuture ? "mesecev" : "meseci";
      }
      return result;
    case "y":
      return withoutSuffix || isFuture ? "eno leto" : "enim letom";
    case "yy":
      if (number === 1) {
        result += withoutSuffix || isFuture ? "leto" : "letom";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "leti" : "letoma";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "leta" : "leti";
      } else {
        result += withoutSuffix || isFuture ? "let" : "leti";
      }
      return result;
  }
}
var slLocale = {
  abbr: "sl",
  months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
  monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
  monthsParseExact: true,
  weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
  weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
  weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm"
  },
  calendar: {
    sameDay: "[danes ob] LT",
    nextDay: "[jutri ob] LT",
    nextWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[v] [nedeljo] [ob] LT";
        case 3:
          return "[v] [sredo] [ob] LT";
        case 6:
          return "[v] [soboto] [ob] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[v] dddd [ob] LT";
      }
    },
    lastDay: "[včeraj ob] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[prejšnjo] [nedeljo] [ob] LT";
        case 3:
          return "[prejšnjo] [sredo] [ob] LT";
        case 6:
          return "[prejšnjo] [soboto] [ob] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[prejšnji] dddd [ob] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "čez %s",
    past: "pred %s",
    s: processRelativeTime,
    ss: processRelativeTime,
    m: processRelativeTime,
    mm: processRelativeTime,
    h: processRelativeTime,
    hh: processRelativeTime,
    d: processRelativeTime,
    dd: processRelativeTime,
    M: processRelativeTime,
    MM: processRelativeTime,
    y: processRelativeTime,
    yy: processRelativeTime
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
var sqLocale = {
  abbr: "sq",
  months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
  monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
  weekdays: "E Dielë_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
  weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
  weekdaysMin: "Di_He_Ma_Me_En_Pr_Sh".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Sot në] LT",
    nextDay: "[Nesër në] LT",
    nextWeek: "dddd [në] LT",
    lastDay: "[Dje në] LT",
    lastWeek: "dddd [e kaluar në] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "në %s",
    past: "para %sve",
    s: "disa sekonda",
    ss: "%d sekonda",
    m: "një minut",
    mm: "%d minuta",
    h: "një orë",
    hh: "%d orë",
    d: "një ditë",
    dd: "%d ditë",
    M: "një muaj",
    MM: "%d muaj",
    y: "një vit",
    yy: "%d vite"
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var svLocale = {
  abbr: "sv",
  months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
  monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
  weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
  weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
  weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd D MMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Idag] LT",
    nextDay: "[Imorgon] LT",
    lastDay: "[Igår] LT",
    nextWeek: "[På] dddd LT",
    lastWeek: "[I] dddd[s] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "om %s",
    past: "för %s sedan",
    s: "några sekunder",
    ss: "%d sekunder",
    m: "en minut",
    mm: "%d minuter",
    h: "en timme",
    hh: "%d timmar",
    d: "en dag",
    dd: "%d dagar",
    M: "en månad",
    MM: "%d månader",
    y: "ett år",
    yy: "%d år"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
  ordinal(_num) {
    const num = Number(_num);
    let b = num % 10, output = ~~(num % 100 / 10) === 1 ? "e" : b === 1 ? "a" : b === 2 ? "a" : b === 3 ? "e" : "e";
    return num + output;
  },
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var thLocale = {
  abbr: "th",
  months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
  monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
  monthsParseExact: true,
  weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
  weekdaysShort: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
  weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY เวลา H:mm",
    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
  },
  meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
  isPM(input) {
    return input === "หลังเที่ยง";
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return "ก่อนเที่ยง";
    } else {
      return "หลังเที่ยง";
    }
  },
  calendar: {
    sameDay: "[วันนี้ เวลา] LT",
    nextDay: "[พรุ่งนี้ เวลา] LT",
    nextWeek: "dddd[หน้า เวลา] LT",
    lastDay: "[เมื่อวานนี้ เวลา] LT",
    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "อีก %s",
    past: "%sที่แล้ว",
    s: "ไม่กี่วินาที",
    ss: "%d วินาที",
    m: "1 นาที",
    mm: "%d นาที",
    h: "1 ชั่วโมง",
    hh: "%d ชั่วโมง",
    d: "1 วัน",
    dd: "%d วัน",
    M: "1 เดือน",
    MM: "%d เดือน",
    y: "1 ปี",
    yy: "%d ปี"
  }
};
var thBeLocale = {
  abbr: "th-be",
  months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
  monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
  monthsParseExact: true,
  weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
  weekdaysShort: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
  weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY เวลา H:mm",
    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
  },
  meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
  isPM(input) {
    return input === "หลังเที่ยง";
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return "ก่อนเที่ยง";
    } else {
      return "หลังเที่ยง";
    }
  },
  calendar: {
    sameDay: "[วันนี้ เวลา] LT",
    nextDay: "[พรุ่งนี้ เวลา] LT",
    nextWeek: "dddd[หน้า เวลา] LT",
    lastDay: "[เมื่อวานนี้ เวลา] LT",
    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "อีก %s",
    past: "%sที่แล้ว",
    s: "ไม่กี่วินาที",
    ss: "%d วินาที",
    m: "1 นาที",
    mm: "%d นาที",
    h: "1 ชั่วโมง",
    hh: "%d ชั่วโมง",
    d: "1 วัน",
    dd: "%d วัน",
    M: "1 เดือน",
    MM: "%d เดือน",
    y: "1 ปี",
    yy: "%d ปี"
  },
  preparse(str, format) {
    const _format = thBeLocale.longDateFormat[format] ? thBeLocale.longDateFormat[format] : format;
    if (_format.indexOf("YYYY", _format.length - "YYYY".length) !== -1) {
      const ddMM = str.substr(0, str.length - 4);
      const yyyy = parseInt(str.substr(str.length - 4), 10) - 543;
      return ddMM + yyyy;
    }
    return str;
  },
  getFullYear(date, isUTC = false) {
    return 543 + (isUTC ? date.getUTCFullYear() : date.getFullYear());
  }
};
var suffixes = {
  1: "'inci",
  5: "'inci",
  8: "'inci",
  70: "'inci",
  80: "'inci",
  2: "'nci",
  7: "'nci",
  20: "'nci",
  50: "'nci",
  3: "'üncü",
  4: "'üncü",
  100: "'üncü",
  6: "'ncı",
  9: "'uncu",
  10: "'uncu",
  30: "'uncu",
  60: "'ıncı",
  90: "'ıncı"
};
var trLocale = {
  abbr: "tr",
  months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
  monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
  weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
  weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
  weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[bugün saat] LT",
    nextDay: "[yarın saat] LT",
    nextWeek: "[gelecek] dddd [saat] LT",
    lastDay: "[dün] LT",
    lastWeek: "[geçen] dddd [saat] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s sonra",
    past: "%s önce",
    s: "birkaç saniye",
    ss: "%d saniye",
    m: "bir dakika",
    mm: "%d dakika",
    h: "bir saat",
    hh: "%d saat",
    d: "bir gün",
    dd: "%d gün",
    M: "bir ay",
    MM: "%d ay",
    y: "bir yıl",
    yy: "%d yıl"
  },
  dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
  ordinal(_num) {
    const num = Number(_num);
    if (num === 0) {
      return num + "'ıncı";
    }
    let a = num % 10, b = num % 100 - a, c = num >= 100 ? 100 : null;
    return num + (suffixes[a] || suffixes[b] || suffixes[c]);
  },
  week: {
    dow: 1,
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
function plural(word, num) {
  let forms2 = word.split("_");
  return num % 10 === 1 && num % 100 !== 11 ? forms2[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms2[1] : forms2[2];
}
function relativeTimeWithPlural(num, withoutSuffix, key) {
  let format = {
    ss: withoutSuffix ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
    mm: withoutSuffix ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
    hh: withoutSuffix ? "година_години_годин" : "годину_години_годин",
    dd: "день_дні_днів",
    MM: "місяць_місяці_місяців",
    yy: "рік_роки_років"
  };
  if (key === "m") {
    return withoutSuffix ? "хвилина" : "хвилину";
  }
  if (key === "h") {
    return withoutSuffix ? "година" : "годину";
  }
  return num + " " + plural(format[key], +num);
}
function weekdaysCaseReplace(date, format, isUTC) {
  let weekdays = {
    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
  };
  if (!date) {
    return weekdays.nominative;
  }
  let nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? "genitive" : "nominative";
  return weekdays[nounCase][getDayOfWeek(date, isUTC)];
}
function processHoursFunction(str) {
  return function(date) {
    return str + "о" + (getHours(date) === 11 ? "б" : "") + "] LT";
  };
}
var ukLocale = {
  abbr: "uk",
  months: {
    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
  },
  monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
  weekdays: weekdaysCaseReplace,
  weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
  weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY р.",
    LLL: "D MMMM YYYY р., HH:mm",
    LLLL: "dddd, D MMMM YYYY р., HH:mm"
  },
  calendar: {
    sameDay: processHoursFunction("[Сьогодні "),
    nextDay: processHoursFunction("[Завтра "),
    lastDay: processHoursFunction("[Вчора "),
    nextWeek: processHoursFunction("[У] dddd ["),
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
        case 3:
        case 5:
        case 6:
          return processHoursFunction("[Минулої] dddd [")(date);
        case 1:
        case 2:
        case 4:
          return processHoursFunction("[Минулого] dddd [")(date);
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "за %s",
    past: "%s тому",
    s: "декілька секунд",
    ss: relativeTimeWithPlural,
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: "годину",
    hh: relativeTimeWithPlural,
    d: "день",
    dd: relativeTimeWithPlural,
    M: "місяць",
    MM: relativeTimeWithPlural,
    y: "рік",
    yy: relativeTimeWithPlural
  },
  // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
  meridiemParse: /ночі|ранку|дня|вечора/,
  isPM(input) {
    return /^(дня|вечора)$/.test(input);
  },
  meridiem(hour, minute, isLower) {
    if (hour < 4) {
      return "ночі";
    } else if (hour < 12) {
      return "ранку";
    } else if (hour < 17) {
      return "дня";
    } else {
      return "вечора";
    }
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
  ordinal(_num, period) {
    const num = Number(_num);
    switch (period) {
      case "M":
      case "d":
      case "DDD":
      case "w":
      case "W":
        return num + "-й";
      case "D":
        return num + "-го";
      default:
        return num.toString();
    }
  },
  week: {
    dow: 1,
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
var viLocale = {
  abbr: "vi",
  months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
  monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
  monthsParseExact: true,
  weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
  weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysParseExact: true,
  meridiemParse: /sa|ch/i,
  isPM(input) {
    return /^ch$/i.test(input);
  },
  meridiem(hours, minutes, isLower) {
    if (hours < 12) {
      return isLower ? "sa" : "SA";
    } else {
      return isLower ? "ch" : "CH";
    }
  },
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM [năm] YYYY",
    LLL: "D MMMM [năm] YYYY HH:mm",
    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
    l: "DD/M/YYYY",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd, D MMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Hôm nay lúc] LT",
    nextDay: "[Ngày mai lúc] LT",
    nextWeek: "dddd [tuần tới lúc] LT",
    lastDay: "[Hôm qua lúc] LT",
    lastWeek: "dddd [tuần trước lúc] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s tới",
    past: "%s trước",
    s: "vài giây",
    ss: "%d giây",
    m: "một phút",
    mm: "%d phút",
    h: "một giờ",
    hh: "%d giờ",
    d: "một ngày",
    dd: "%d ngày",
    M: "một tháng",
    MM: "%d tháng",
    y: "một năm",
    yy: "%d năm"
  },
  dayOfMonthOrdinalParse: /\d{1,2}/,
  ordinal(_num) {
    return "" + _num;
  },
  week: {
    dow: 1,
    doy: 4
    // Tuần chứa ngày 4 tháng 1 là tuần đầu tiên trong năm.
  }
};
var zhCnLocale = {
  abbr: "zh-cn",
  months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
  monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
  weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
  weekdaysMin: "日_一_二_三_四_五_六".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY年M月D日",
    LLL: "YYYY年M月D日Ah点mm分",
    LLLL: "YYYY年M月D日ddddAh点mm分",
    l: "YYYY/M/D",
    ll: "YYYY年M月D日",
    lll: "YYYY年M月D日 HH:mm",
    llll: "YYYY年M月D日dddd HH:mm"
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
      return hour;
    } else if (meridiem === "下午" || meridiem === "晚上") {
      return hour + 12;
    } else {
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem(hour, minute, isLower) {
    let hm = hour * 100 + minute;
    if (hm < 600) {
      return "凌晨";
    } else if (hm < 900) {
      return "早上";
    } else if (hm < 1130) {
      return "上午";
    } else if (hm < 1230) {
      return "中午";
    } else if (hm < 1800) {
      return "下午";
    } else {
      return "晚上";
    }
  },
  calendar: {
    sameDay: "[今天]LT",
    nextDay: "[明天]LT",
    nextWeek: "[下]ddddLT",
    lastDay: "[昨天]LT",
    lastWeek: "[上]ddddLT",
    sameElse: "L"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
  ordinal(_num, period) {
    const num = Number(_num);
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return num + "日";
      case "M":
        return num + "月";
      case "w":
      case "W":
        return num + "周";
      default:
        return num.toString();
    }
  },
  relativeTime: {
    future: "%s内",
    past: "%s前",
    s: "几秒",
    ss: "%d 秒",
    m: "1 分钟",
    mm: "%d 分钟",
    h: "1 小时",
    hh: "%d 小时",
    d: "1 天",
    dd: "%d 天",
    M: "1 个月",
    MM: "%d 个月",
    y: "1 年",
    yy: "%d 年"
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};

// node_modules/ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs
var Trigger = class {
  constructor(open, close) {
    this.open = open;
    this.close = close || open;
  }
  isManual() {
    return this.open === "manual" || this.close === "manual";
  }
};
var DEFAULT_ALIASES = {
  hover: ["mouseover", "mouseout"],
  focus: ["focusin", "focusout"]
};
function parseTriggers(triggers, aliases2 = DEFAULT_ALIASES) {
  const trimmedTriggers = (triggers || "").trim();
  if (trimmedTriggers.length === 0) {
    return [];
  }
  const parsedTriggers = trimmedTriggers.split(/\s+/).map((trigger2) => trigger2.split(":")).map((triggerPair) => {
    const alias = aliases2[triggerPair[0]] || triggerPair;
    return new Trigger(alias[0], alias[1]);
  });
  const manualTriggers = parsedTriggers.filter((triggerPair) => triggerPair.isManual());
  if (manualTriggers.length > 1) {
    throw new Error("Triggers parse error: only one manual trigger is allowed");
  }
  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers");
  }
  return parsedTriggers;
}
function listenToTriggersV2(renderer, options) {
  const parsedTriggers = parseTriggers(options.triggers);
  const target = options.target;
  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return Function.prototype;
  }
  const listeners = [];
  const _registerHide = [];
  const registerHide = () => {
    _registerHide.forEach((fn) => listeners.push(fn()));
    _registerHide.length = 0;
  };
  parsedTriggers.forEach((trigger2) => {
    const useToggle = trigger2.open === trigger2.close;
    const showFn = useToggle ? options.toggle : options.show;
    if (!useToggle && trigger2.close && options.hide) {
      const triggerClose = trigger2.close;
      const optionsHide = options.hide;
      const _hide = () => renderer.listen(target, triggerClose, optionsHide);
      _registerHide.push(_hide);
    }
    if (showFn) {
      listeners.push(renderer.listen(target, trigger2.open, () => showFn(registerHide)));
    }
  });
  return () => {
    listeners.forEach((unsubscribeFn) => unsubscribeFn());
  };
}
function registerOutsideClick(renderer, options) {
  if (!options.outsideClick) {
    return Function.prototype;
  }
  return renderer.listen("document", "click", (event) => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some((target) => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}
function registerEscClick(renderer, options) {
  if (!options.outsideEsc) {
    return Function.prototype;
  }
  return renderer.listen("document", "keyup.esc", (event) => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some((target) => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}
var win = typeof window !== "undefined" && window || {};
var document2 = win.document;
var location = win.location;
var gc = win.gc ? () => win.gc() : () => null;
var performance = win.performance ? win.performance : null;
var Event = win.Event;
var MouseEvent = win.MouseEvent;
var KeyboardEvent = win.KeyboardEvent;
var EventTarget = win.EventTarget;
var History = win.History;
var Location = win.Location;
var EventListener = win.EventListener;
var BsVerions;
(function(BsVerions2) {
  BsVerions2["isBs4"] = "bs4";
  BsVerions2["isBs5"] = "bs5";
})(BsVerions || (BsVerions = {}));
var guessedVersion;
function _guessBsVersion() {
  const spanEl = win.document.createElement("span");
  spanEl.innerText = "testing bs version";
  spanEl.classList.add("d-none");
  spanEl.classList.add("pl-1");
  win.document.head.appendChild(spanEl);
  const checkPadding = win.getComputedStyle(spanEl).paddingLeft;
  if (checkPadding && parseFloat(checkPadding)) {
    win.document.head.removeChild(spanEl);
    return "bs4";
  }
  win.document.head.removeChild(spanEl);
  return "bs5";
}
function isBs4() {
  if (guessedVersion)
    return guessedVersion === "bs4";
  guessedVersion = _guessBsVersion();
  return guessedVersion === "bs4";
}
function isBs5() {
  if (guessedVersion)
    return guessedVersion === "bs5";
  guessedVersion = _guessBsVersion();
  return guessedVersion === "bs5";
}
function getBsVer() {
  return {
    isBs4: isBs4(),
    isBs5: isBs5()
  };
}
function OnChange() {
  const sufix = "Change";
  return function OnChangeHandler(target, propertyKey) {
    const _key = ` __${propertyKey}Value`;
    Object.defineProperty(target, propertyKey, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get() {
        return this[_key];
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(value) {
        const prevValue = this[_key];
        this[_key] = value;
        if (prevValue !== value && this[propertyKey + sufix]) {
          this[propertyKey + sufix].emit(value);
        }
      }
    });
  };
}
var _messagesHash = {};
var _hideMsg = typeof console === "undefined" || !("warn" in console);
function warnOnce(msg) {
  if (!isDevMode() || _hideMsg || msg in _messagesHash) {
    return;
  }
  _messagesHash[msg] = true;
  console.warn(msg);
}

// node_modules/ngx-bootstrap/positioning/fesm2022/ngx-bootstrap-positioning.mjs
var MapPlacementInToRL;
(function(MapPlacementInToRL2) {
  MapPlacementInToRL2["top"] = "top";
  MapPlacementInToRL2["bottom"] = "bottom";
  MapPlacementInToRL2["left"] = "left";
  MapPlacementInToRL2["right"] = "right";
  MapPlacementInToRL2["auto"] = "auto";
  MapPlacementInToRL2["end"] = "right";
  MapPlacementInToRL2["start"] = "left";
  MapPlacementInToRL2["top left"] = "top left";
  MapPlacementInToRL2["top right"] = "top right";
  MapPlacementInToRL2["right top"] = "right top";
  MapPlacementInToRL2["right bottom"] = "right bottom";
  MapPlacementInToRL2["bottom right"] = "bottom right";
  MapPlacementInToRL2["bottom left"] = "bottom left";
  MapPlacementInToRL2["left bottom"] = "left bottom";
  MapPlacementInToRL2["left top"] = "left top";
  MapPlacementInToRL2["top start"] = "top left";
  MapPlacementInToRL2["top end"] = "top right";
  MapPlacementInToRL2["end top"] = "right top";
  MapPlacementInToRL2["end bottom"] = "right bottom";
  MapPlacementInToRL2["bottom end"] = "bottom right";
  MapPlacementInToRL2["bottom start"] = "bottom left";
  MapPlacementInToRL2["start bottom"] = "start bottom";
  MapPlacementInToRL2["start top"] = "left top";
})(MapPlacementInToRL || (MapPlacementInToRL = {}));
var PlacementForBs5;
(function(PlacementForBs52) {
  PlacementForBs52["top"] = "top";
  PlacementForBs52["bottom"] = "bottom";
  PlacementForBs52["left"] = "start";
  PlacementForBs52["right"] = "end";
  PlacementForBs52["auto"] = "auto";
  PlacementForBs52["end"] = "end";
  PlacementForBs52["start"] = "start";
  PlacementForBs52["top left"] = "top start";
  PlacementForBs52["top right"] = "top end";
  PlacementForBs52["right top"] = "end top";
  PlacementForBs52["right bottom"] = "end bottom";
  PlacementForBs52["bottom right"] = "bottom end";
  PlacementForBs52["bottom left"] = "bottom start";
  PlacementForBs52["left bottom"] = "start bottom";
  PlacementForBs52["left top"] = "start top";
  PlacementForBs52["top start"] = "top start";
  PlacementForBs52["top end"] = "top end";
  PlacementForBs52["end top"] = "end top";
  PlacementForBs52["end bottom"] = "end bottom";
  PlacementForBs52["bottom end"] = "bottom end";
  PlacementForBs52["bottom start"] = "bottom start";
  PlacementForBs52["start bottom"] = "start bottom";
  PlacementForBs52["start top"] = "start top";
})(PlacementForBs5 || (PlacementForBs5 = {}));
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  const window2 = element.ownerDocument.defaultView;
  const css = window2?.getComputedStyle(element, null);
  return property ? css && css[property] : css;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  const noOffsetParent = null;
  let offsetParent = element?.offsetParent;
  let sibling = void 0;
  while (offsetParent === noOffsetParent && element.nextElementSibling && sibling !== element.nextElementSibling) {
    sibling = element.nextElementSibling;
    offsetParent = sibling.offsetParent;
  }
  const nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
  }
  if (offsetParent && ["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  const {
    nodeName
  } = element;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  const order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  const start = order ? element1 : element2;
  const end = order ? element2 : element1;
  const range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  const commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  const element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement) {
    return document.documentElement;
  }
  let el = element.parentElement;
  while (el?.parentElement && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}
function getBordersSize(styles, axis) {
  const sideA = axis === "x" ? "Left" : "Top";
  const sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles[`border${sideA}Width`]) + parseFloat(styles[`border${sideB}Width`]);
}
function getSize(axis, body, html) {
  const _body = body;
  const _html = html;
  return Math.max(_body[`offset${axis}`], _body[`scroll${axis}`], _html[`client${axis}`], _html[`offset${axis}`], _html[`scroll${axis}`], 0);
}
function getWindowSizes(document3) {
  const body = document3.body;
  const html = document3.documentElement;
  return {
    height: getSize("Height", body, html),
    width: getSize("Width", body, html)
  };
}
function getClientRect(offsets) {
  return __spreadProps(__spreadValues({}, offsets), {
    right: (offsets.left || 0) + offsets.width,
    bottom: (offsets.top || 0) + offsets.height
  });
}
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(Number(n));
}
function isNumber2(value) {
  return typeof value === "number" || Object.prototype.toString.call(value) === "[object Number]";
}
function getBoundingClientRect(element) {
  const rect = element.getBoundingClientRect();
  if (!(rect && isNumber2(rect.top) && isNumber2(rect.left) && isNumber2(rect.bottom) && isNumber2(rect.right))) {
    return rect;
  }
  const result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  const sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : void 0;
  const width2 = sizes?.width || element.clientWidth || isNumber2(rect.right) && isNumber2(result.left) && rect.right - result.left || 0;
  const height2 = sizes?.height || element.clientHeight || isNumber2(rect.bottom) && isNumber2(result.top) && rect.bottom - result.top || 0;
  let horizScrollbar = element.offsetWidth - width2;
  let vertScrollbar = element.offsetHeight - height2;
  if (horizScrollbar || vertScrollbar) {
    const styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, "x");
    vertScrollbar -= getBordersSize(styles, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
  const isHTML = parent.nodeName === "HTML";
  const childrenRect = getBoundingClientRect(children);
  const parentRect = getBoundingClientRect(parent);
  const styles = getStyleComputedProperty(parent);
  const borderTopWidth = parseFloat(styles.borderTopWidth);
  const borderLeftWidth = parseFloat(styles.borderLeftWidth);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top ?? 0, 0);
    parentRect.left = Math.max(parentRect.left ?? 0, 0);
  }
  const offsets = getClientRect({
    top: (childrenRect.top ?? 0) - (parentRect.top ?? 0) - borderTopWidth,
    left: (childrenRect.left ?? 0) - (parentRect.left ?? 0) - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (isHTML) {
    const marginTop = parseFloat(styles.marginTop);
    const marginLeft = parseFloat(styles.marginLeft);
    if (isNumber2(offsets.top)) {
      offsets.top -= borderTopWidth - marginTop;
    }
    if (isNumber2(offsets.bottom)) {
      offsets.bottom -= borderTopWidth - marginTop;
    }
    if (isNumber2(offsets.left)) {
      offsets.left -= borderLeftWidth - marginLeft;
    }
    if (isNumber2(offsets.right)) {
      offsets.right -= borderLeftWidth - marginLeft;
    }
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  return offsets;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
    default:
  }
  const {
    overflow,
    overflowX,
    overflowY
  } = getStyleComputedProperty(element);
  if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
function getScroll(element, side = "top") {
  const upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  const nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    const html = element.ownerDocument.documentElement;
    const scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
  const html = element.ownerDocument.documentElement;
  const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  const width2 = Math.max(html.clientWidth, window.innerWidth || 0);
  const height2 = Math.max(html.clientHeight, window.innerHeight || 0);
  const scrollTop = !excludeScroll ? getScroll(html) : 0;
  const scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  const offset = {
    top: scrollTop - Number(relativeOffset?.top) + Number(relativeOffset?.marginTop),
    left: scrollLeft - Number(relativeOffset?.left) + Number(relativeOffset?.marginLeft),
    width: width2,
    height: height2
  };
  return getClientRect(offset);
}
function isFixed(element) {
  const nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  return isFixed(getParentNode(element));
}
function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
  let boundaries = {
    top: 0,
    left: 0
  };
  const offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    let boundariesNode;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(host));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = target.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = target.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    const offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (offsets && boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      const {
        height: height2,
        width: width2
      } = getWindowSizes(target.ownerDocument);
      if (isNumber2(boundaries.top) && isNumber2(offsets.top) && isNumber2(offsets.marginTop)) {
        boundaries.top += offsets.top - offsets.marginTop;
      }
      if (isNumber2(boundaries.top)) {
        boundaries.bottom = Number(height2) + Number(offsets.top);
      }
      if (isNumber2(boundaries.left) && isNumber2(offsets.left) && isNumber2(offsets.marginLeft)) {
        boundaries.left += offsets.left - offsets.marginLeft;
      }
      if (isNumber2(boundaries.top)) {
        boundaries.right = Number(width2) + Number(offsets.left);
      }
    } else if (offsets) {
      boundaries = offsets;
    }
  }
  if (isNumber2(boundaries.left)) {
    boundaries.left += padding;
  }
  if (isNumber2(boundaries.top)) {
    boundaries.top += padding;
  }
  if (isNumber2(boundaries.right)) {
    boundaries.right -= padding;
  }
  if (isNumber2(boundaries.bottom)) {
    boundaries.bottom -= padding;
  }
  return boundaries;
}
function getArea({
  width: width2,
  height: height2
}) {
  return width2 * height2;
}
function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ["top", "bottom", "right", "left"], boundariesElement = "viewport", padding = 0) {
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  const boundaries = getBoundaries(target, host, padding, boundariesElement);
  const rects = {
    top: {
      width: boundaries?.width ?? 0,
      height: (refRect?.top ?? 0) - (boundaries?.top ?? 0)
    },
    right: {
      width: (boundaries?.right ?? 0) - (refRect?.right ?? 0),
      height: boundaries?.height ?? 0
    },
    bottom: {
      width: boundaries?.width ?? 0,
      height: (boundaries?.bottom ?? 0) - (refRect?.bottom ?? 0)
    },
    left: {
      width: (refRect.left ?? 0) - (boundaries?.left ?? 0),
      height: boundaries?.height ?? 0
    }
  };
  const sortedAreas = Object.keys(rects).map((key) => __spreadProps(__spreadValues({
    position: key
  }, rects[key]), {
    area: getArea(rects[key])
  })).sort((a, b) => b.area - a.area);
  let filteredAreas = sortedAreas.filter(({
    width: width2,
    height: height2
  }) => {
    return width2 >= target.clientWidth && height2 >= target.clientHeight;
  });
  filteredAreas = filteredAreas.filter(({
    position
  }) => {
    return allowedPositions.some((allowedPosition) => {
      return allowedPosition === position;
    });
  });
  const computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].position : sortedAreas[0].position;
  const variation = placement.split(" ")[1];
  target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${getBsVer().isBs5 ? PlacementForBs5[computedPlacement] : computedPlacement}`);
  return computedPlacement + (variation ? `-${variation}` : "");
}
function getOffsets(data) {
  return {
    width: data.offsets.target.width,
    height: data.offsets.target.height,
    left: Math.floor(data.offsets.target.left ?? 0),
    top: Math.round(data.offsets.target.top ?? 0),
    bottom: Math.round(data.offsets.target.bottom ?? 0),
    right: Math.floor(data.offsets.target.right ?? 0)
  };
}
function getOppositePlacement(placement) {
  const hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  return placement.replace(/left|right|bottom|top/g, (matched) => hash[matched]);
}
function getOppositeVariation(variation) {
  if (variation === "right") {
    return "left";
  } else if (variation === "left") {
    return "right";
  }
  return variation;
}
var parse = (value, def = 0) => value ? parseFloat(value) : def;
function getOuterSizes(element) {
  const window2 = element.ownerDocument.defaultView;
  const styles = window2?.getComputedStyle(element);
  const x = parse(styles?.marginTop) + parse(styles?.marginBottom);
  const y = parse(styles?.marginLeft) + parse(styles?.marginRight);
  return {
    width: Number(element.offsetWidth) + y,
    height: Number(element.offsetHeight) + x
  };
}
function getReferenceOffsets(target, host, fixedPosition) {
  const commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
  return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}
function getTargetOffsets(target, hostOffsets, position) {
  const placement = position.split(" ")[0];
  const targetRect = getOuterSizes(target);
  const targetOffsets = {
    width: targetRect.width,
    height: targetRect.height
  };
  const isHoriz = ["right", "left"].indexOf(placement) !== -1;
  const mainSide = isHoriz ? "top" : "left";
  const secondarySide = isHoriz ? "left" : "top";
  const measurement = isHoriz ? "height" : "width";
  const secondaryMeasurement = !isHoriz ? "height" : "width";
  targetOffsets[mainSide] = (hostOffsets[mainSide] ?? 0) + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;
  targetOffsets[secondarySide] = placement === secondarySide ? (hostOffsets[secondarySide] ?? 0) - targetRect[secondaryMeasurement] : hostOffsets[getOppositePlacement(secondarySide)] ?? 0;
  return targetOffsets;
}
function isModifierEnabled(options, modifierName) {
  return !!options.modifiers[modifierName]?.enabled;
}
var availablePositions = {
  top: ["top", "top start", "top end"],
  bottom: ["bottom", "bottom start", "bottom end"],
  start: ["start", "start top", "start bottom"],
  end: ["end", "end top", "end bottom"]
};
function checkPopoverMargin(placement, checkPosition) {
  if (!getBsVer().isBs5) {
    return false;
  }
  return availablePositions[checkPosition].includes(placement);
}
function checkMargins(placement) {
  if (!getBsVer().isBs5) {
    return "";
  }
  if (checkPopoverMargin(placement, "end")) {
    return "ms-2";
  }
  if (checkPopoverMargin(placement, "start")) {
    return "me-2";
  }
  if (checkPopoverMargin(placement, "top")) {
    return "mb-2";
  }
  if (checkPopoverMargin(placement, "bottom")) {
    return "mt-2";
  }
  return "";
}
function updateContainerClass(data, renderer) {
  const target = data.instance.target;
  let containerClass = target.className;
  const dataPlacement = getBsVer().isBs5 ? PlacementForBs5[data.placement] : data.placement;
  if (data.placementAuto) {
    containerClass = containerClass.replace(/bs-popover-auto/g, `bs-popover-${dataPlacement}`);
    containerClass = containerClass.replace(/ms-2|me-2|mb-2|mt-2/g, "");
    containerClass = containerClass.replace(/bs-tooltip-auto/g, `bs-tooltip-${dataPlacement}`);
    containerClass = containerClass.replace(/\sauto/g, ` ${dataPlacement}`);
    if (containerClass.indexOf("popover") !== -1) {
      containerClass = containerClass + " " + checkMargins(dataPlacement);
    }
    if (containerClass.indexOf("popover") !== -1 && containerClass.indexOf("popover-auto") === -1) {
      containerClass += " popover-auto";
    }
    if (containerClass.indexOf("tooltip") !== -1 && containerClass.indexOf("tooltip-auto") === -1) {
      containerClass += " tooltip-auto";
    }
  }
  containerClass = containerClass.replace(/left|right|top|bottom|end|start/g, `${dataPlacement.split(" ")[0]}`);
  if (renderer) {
    renderer.setAttribute(target, "class", containerClass);
    return;
  }
  target.className = containerClass;
}
function setStyles(element, styles, renderer) {
  if (!element || !styles) {
    return;
  }
  Object.keys(styles).forEach((prop) => {
    let unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = "px";
    }
    if (renderer) {
      renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
      return;
    }
    element.style[prop] = String(styles[prop]) + unit;
  });
}
function arrow(data) {
  let targetOffsets = data.offsets.target;
  const arrowElement = data.instance.target.querySelector(".arrow");
  if (!arrowElement) {
    return data;
  }
  const isVertical = ["left", "right"].indexOf(data.placement.split(" ")[0]) !== -1;
  const len = isVertical ? "height" : "width";
  const sideCapitalized = isVertical ? "Top" : "Left";
  const side = sideCapitalized.toLowerCase();
  const altSide = isVertical ? "left" : "top";
  const opSide = isVertical ? "bottom" : "right";
  const arrowElementSize = getOuterSizes(arrowElement)[len];
  const placementVariation = data.placement.split(" ")[1];
  if ((data.offsets.host[opSide] ?? 0) - arrowElementSize < (targetOffsets[side] ?? 0)) {
    targetOffsets[side] -= (targetOffsets[side] ?? 0) - ((data.offsets.host[opSide] ?? 0) - arrowElementSize);
  }
  if (Number(data.offsets.host[side]) + Number(arrowElementSize) > (targetOffsets[opSide] ?? 0)) {
    targetOffsets[side] += Number(data.offsets.host[side]) + Number(arrowElementSize) - Number(targetOffsets[opSide]);
  }
  targetOffsets = getClientRect(targetOffsets);
  const css = getStyleComputedProperty(data.instance.target);
  const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]) || 0;
  const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]) || 0;
  let center;
  if (!placementVariation) {
    center = Number(data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
  } else {
    const targetBorderRadius = parseFloat(css["borderRadius"]) || 0;
    const targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
    center = side === placementVariation ? Number(data.offsets.host[side]) + targetSideArrowOffset : Number(data.offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
  }
  let sideValue = center - (targetOffsets[side] ?? 0) - targetMarginSide - targetBorderSide;
  sideValue = Math.max(Math.min(targetOffsets[len] - (arrowElementSize + 5), sideValue), 0);
  data.offsets.arrow = {
    [side]: Math.round(sideValue),
    [altSide]: ""
    // make sure to unset any eventual altSide value from the DOM node
  };
  data.instance.arrow = arrowElement;
  return data;
}
function flip(data) {
  data.offsets.target = getClientRect(data.offsets.target);
  if (!isModifierEnabled(data.options, "flip")) {
    data.offsets.target = __spreadValues(__spreadValues({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
    return data;
  }
  const boundaries = getBoundaries(
    data.instance.target,
    data.instance.host,
    0,
    // padding
    "viewport",
    false
    // positionFixed
  );
  let placement = data.placement.split(" ")[0];
  let variation = data.placement.split(" ")[1] || "";
  const offsetsHost = data.offsets.host;
  const target = data.instance.target;
  const host = data.instance.host;
  const adaptivePosition = computeAutoPlacement("auto", offsetsHost, target, host, data.options.allowedPositions);
  const flipOrder = [placement, adaptivePosition];
  flipOrder.forEach((step, index) => {
    if (placement !== step || flipOrder.length === index + 1) {
      return;
    }
    placement = data.placement.split(" ")[0];
    const overlapsRef = placement === "left" && Math.floor(data.offsets.target.right ?? 0) > Math.floor(data.offsets.host.left ?? 0) || placement === "right" && Math.floor(data.offsets.target.left ?? 0) < Math.floor(data.offsets.host.right ?? 0) || placement === "top" && Math.floor(data.offsets.target.bottom ?? 0) > Math.floor(data.offsets.host.top ?? 0) || placement === "bottom" && Math.floor(data.offsets.target.top ?? 0) < Math.floor(data.offsets.host.bottom ?? 0);
    const overflowsLeft = Math.floor(data.offsets.target.left ?? 0) < Math.floor(boundaries.left ?? 0);
    const overflowsRight = Math.floor(data.offsets.target.right ?? 0) > Math.floor(boundaries.right ?? 0);
    const overflowsTop = Math.floor(data.offsets.target.top ?? 0) < Math.floor(boundaries.top ?? 0);
    const overflowsBottom = Math.floor(data.offsets.target.bottom ?? 0) > Math.floor(boundaries.bottom ?? 0);
    const overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    const isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    const flippedVariation = isVertical && variation === "left" && overflowsLeft || isVertical && variation === "right" && overflowsRight || !isVertical && variation === "left" && overflowsTop || !isVertical && variation === "right" && overflowsBottom;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? ` ${variation}` : "");
      data.offsets.target = __spreadValues(__spreadValues({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
    }
  });
  return data;
}
function initData(targetElement, hostElement, position, options) {
  if (!targetElement || !hostElement) {
    return;
  }
  const hostElPosition = getReferenceOffsets(targetElement, hostElement);
  if (!position.match(/^(auto)*\s*(left|right|top|bottom|start|end)*$/) && !position.match(/^(left|right|top|bottom|start|end)*(?: (left|right|top|bottom|start|end))*$/)) {
    position = "auto";
  }
  const placementAuto = !!position.match(/auto/g);
  let placement = position.match(/auto\s(left|right|top|bottom|start|end)/) ? position.split(" ")[1] || "auto" : position;
  const matches = placement.match(/^(left|right|top|bottom|start|end)* ?(?!\1)(left|right|top|bottom|start|end)?/);
  if (matches) {
    placement = matches[1] + (matches[2] ? ` ${matches[2]}` : "");
  }
  if (["left right", "right left", "top bottom", "bottom top"].indexOf(placement) !== -1) {
    placement = "auto";
  }
  placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : void 0);
  const targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
  return {
    options: options || {
      modifiers: {}
    },
    instance: {
      target: targetElement,
      host: hostElement,
      arrow: void 0
    },
    offsets: {
      target: targetOffset,
      host: hostElPosition,
      arrow: void 0
    },
    positionFixed: false,
    placement,
    placementAuto
  };
}
function preventOverflow(data) {
  if (!isModifierEnabled(data.options, "preventOverflow")) {
    return data;
  }
  const transformProp = "transform";
  const targetStyles = data.instance.target.style;
  const {
    top,
    left,
    [transformProp]: transform
  } = targetStyles;
  targetStyles.top = "";
  targetStyles.left = "";
  targetStyles[transformProp] = "";
  const boundaries = getBoundaries(
    data.instance.target,
    data.instance.host,
    0,
    // padding
    data.options.modifiers.preventOverflow?.boundariesElement || "scrollParent",
    false
    // positionFixed
  );
  targetStyles.top = top;
  targetStyles.left = left;
  targetStyles[transformProp] = transform;
  const order = ["left", "right", "top", "bottom"];
  const check = {
    primary(placement) {
      let value = data.offsets.target[placement];
      if ((data.offsets.target[placement] ?? 0) < (boundaries[placement] ?? 0)) {
        value = Math.max(data.offsets.target[placement] ?? 0, boundaries[placement] ?? 0);
      }
      return {
        [placement]: value
      };
    },
    secondary(placement) {
      const isPlacementHorizontal = placement === "right";
      const mainSide = isPlacementHorizontal ? "left" : "top";
      const measurement = isPlacementHorizontal ? "width" : "height";
      let value = data.offsets.target[mainSide];
      if ((data.offsets.target[placement] ?? 0) > (boundaries[placement] ?? 0)) {
        value = Math.min(data.offsets.target[mainSide] ?? 0, (boundaries[placement] ?? 0) - data.offsets.target[measurement]);
      }
      return {
        [mainSide]: value
      };
    }
  };
  order.forEach((placement) => {
    const side = ["left", "top", "start"].indexOf(placement) !== -1 ? check["primary"] : check["secondary"];
    data.offsets.target = __spreadValues(__spreadValues({}, data.offsets.target), side(placement));
  });
  return data;
}
function shift(data) {
  const placement = data.placement;
  const basePlacement = placement.split(" ")[0];
  const shiftVariation = placement.split(" ")[1];
  if (shiftVariation) {
    const {
      host,
      target
    } = data.offsets;
    const isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    const side = isVertical ? "left" : "top";
    const measurement = isVertical ? "width" : "height";
    const shiftOffsets = {
      start: {
        [side]: host[side]
      },
      end: {
        [side]: (host[side] ?? 0) + host[measurement] - target[measurement]
      }
    };
    data.offsets.target = __spreadValues(__spreadValues({}, target), {
      [side]: side === shiftVariation ? shiftOffsets.start[side] : shiftOffsets.end[side]
    });
  }
  return data;
}
var Positioning = class {
  position(hostElement, targetElement) {
    return this.offset(
      hostElement,
      targetElement
      /*, false*/
    );
  }
  offset(hostElement, targetElement) {
    return getReferenceOffsets(targetElement, hostElement);
  }
  positionElements(hostElement, targetElement, position, appendToBody, options) {
    const chainOfModifiers = [flip, shift, preventOverflow, arrow];
    const _position = MapPlacementInToRL[position];
    const data = initData(targetElement, hostElement, _position, options);
    if (!data) {
      return;
    }
    return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), data);
  }
};
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
  const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
  if (!data) {
    return;
  }
  const offsets = getOffsets(data);
  setStyles(targetElement, {
    "will-change": "transform",
    top: "0px",
    left: "0px",
    transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
  }, renderer);
  if (data.instance.arrow) {
    setStyles(data.instance.arrow, data.offsets.arrow, renderer);
  }
  updateContainerClass(data, renderer);
}
var _PositioningService = class _PositioningService {
  constructor(ngZone, rendererFactory, platformId) {
    this.update$$ = new Subject();
    this.positionElements = /* @__PURE__ */ new Map();
    this.isDisabled = false;
    if (isPlatformBrowser(platformId)) {
      ngZone.runOutsideAngular(() => {
        this.triggerEvent$ = merge(fromEvent(window, "scroll", {
          passive: true
        }), fromEvent(window, "resize", {
          passive: true
        }), of(0, animationFrameScheduler), this.update$$);
        this.triggerEvent$.subscribe(() => {
          if (this.isDisabled) {
            return;
          }
          this.positionElements.forEach((positionElement) => {
            positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
          });
        });
      });
    }
  }
  position(options) {
    this.addPositionElement(options);
  }
  get event$() {
    return this.triggerEvent$;
  }
  disable() {
    this.isDisabled = true;
  }
  enable() {
    this.isDisabled = false;
  }
  addPositionElement(options) {
    this.positionElements.set(_getHtmlElement(options.element), options);
  }
  calcPosition() {
    this.update$$.next(null);
  }
  deletePositionElement(elRef) {
    this.positionElements.delete(_getHtmlElement(elRef));
  }
  setOptions(options) {
    this.options = options;
  }
};
_PositioningService.ɵfac = function PositioningService_Factory(t) {
  return new (t || _PositioningService)(ɵɵinject(NgZone), ɵɵinject(RendererFactory2), ɵɵinject(PLATFORM_ID));
};
_PositioningService.ɵprov = ɵɵdefineInjectable({
  token: _PositioningService,
  factory: _PositioningService.ɵfac,
  providedIn: "root"
});
var PositioningService = _PositioningService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositioningService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: RendererFactory2
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
function _getHtmlElement(element) {
  if (typeof element === "string") {
    return document.querySelector(element);
  }
  if (element instanceof ElementRef) {
    return element.nativeElement;
  }
  return element ?? null;
}

// node_modules/ngx-bootstrap/mini-ngrx/fesm2022/ngx-bootstrap-mini-ngrx.mjs
var MiniState = class extends BehaviorSubject {
  constructor(_initialState, actionsDispatcher$, reducer) {
    super(_initialState);
    const actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
    const state$ = actionInQueue$.pipe(scan((state2, action) => {
      if (!action) {
        return state2;
      }
      return reducer(state2, action);
    }, _initialState));
    state$.subscribe((value) => this.next(value));
  }
};
var MiniStore = class _MiniStore extends Observable {
  constructor(_dispatcher, _reducer, state$) {
    super();
    this._dispatcher = _dispatcher;
    this._reducer = _reducer;
    this.source = state$;
  }
  select(pathOrMapFn) {
    const mapped$ = this.source?.pipe(map(pathOrMapFn)) || new Observable().pipe(map(pathOrMapFn));
    return mapped$.pipe(distinctUntilChanged());
  }
  lift(operator) {
    const store = new _MiniStore(this._dispatcher, this._reducer, this);
    store.operator = operator;
    return store;
  }
  dispatch(action) {
    this._dispatcher.next(action);
  }
  next(action) {
    this._dispatcher.next(action);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(err) {
    this._dispatcher.error(err);
  }
  complete() {
  }
};

// node_modules/ngx-bootstrap/timepicker/fesm2022/ngx-bootstrap-timepicker.mjs
function TimepickerComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "a", 1);
    ɵɵlistener("click", function TimepickerComponent_td_7_Template_a_click_1_listener() {
      ɵɵrestoreView(_r19);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.changeMinutes(ctx_r18.minuteStep));
    });
    ɵɵelement(2, "span", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_td_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "a", 1);
    ɵɵlistener("click", function TimepickerComponent_td_9_Template_a_click_1_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.changeSeconds(ctx_r20.secondsStep));
    });
    ɵɵelement(2, "span", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r3.canIncrementSeconds || !ctx_r3.isEditable);
  }
}
function TimepickerComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
function TimepickerComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, " : ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 4)(1, "input", 5);
    ɵɵlistener("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r22 = ɵɵnextContext();
      ctx_r22.prevDef($event);
      return ɵɵresetView(ctx_r22.changeMinutes(ctx_r22.minuteStep * ctx_r22.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() {
      ɵɵrestoreView(_r23);
      const ctx_r24 = ɵɵnextContext();
      return ɵɵresetView(ctx_r24.changeMinutes(ctx_r24.minuteStep, "key"));
    })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() {
      ɵɵrestoreView(_r23);
      const ctx_r25 = ɵɵnextContext();
      return ɵɵresetView(ctx_r25.changeMinutes(-ctx_r25.minuteStep, "key"));
    })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26.updateMinutes($event.target));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵclassProp("has-error", ctx_r7.invalidMinutes);
    ɵɵadvance();
    ɵɵclassProp("is-invalid", ctx_r7.invalidMinutes);
    ɵɵproperty("placeholder", ctx_r7.minutesPlaceholder)("readonly", ctx_r7.readonlyInput)("disabled", ctx_r7.disabled)("value", ctx_r7.minutes);
    ɵɵattribute("aria-label", ctx_r7.labelMinutes);
  }
}
function TimepickerComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, " : ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 4)(1, "input", 5);
    ɵɵlistener("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r27 = ɵɵnextContext();
      ctx_r27.prevDef($event);
      return ɵɵresetView(ctx_r27.changeSeconds(ctx_r27.secondsStep * ctx_r27.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() {
      ɵɵrestoreView(_r28);
      const ctx_r29 = ɵɵnextContext();
      return ɵɵresetView(ctx_r29.changeSeconds(ctx_r29.secondsStep, "key"));
    })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() {
      ɵɵrestoreView(_r28);
      const ctx_r30 = ɵɵnextContext();
      return ɵɵresetView(ctx_r30.changeSeconds(-ctx_r30.secondsStep, "key"));
    })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r31 = ɵɵnextContext();
      return ɵɵresetView(ctx_r31.updateSeconds($event.target));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵclassProp("has-error", ctx_r9.invalidSeconds);
    ɵɵadvance();
    ɵɵclassProp("is-invalid", ctx_r9.invalidSeconds);
    ɵɵproperty("placeholder", ctx_r9.secondsPlaceholder)("readonly", ctx_r9.readonlyInput)("disabled", ctx_r9.disabled)("value", ctx_r9.seconds);
    ɵɵattribute("aria-label", ctx_r9.labelSeconds);
  }
}
function TimepickerComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "button", 8);
    ɵɵlistener("click", function TimepickerComponent_td_20_Template_button_click_1_listener() {
      ɵɵrestoreView(_r33);
      const ctx_r32 = ɵɵnextContext();
      return ɵɵresetView(ctx_r32.toggleMeridian());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    ɵɵproperty("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    ɵɵadvance();
    ɵɵtextInterpolate1("", ctx_r11.meridian, " ");
  }
}
function TimepickerComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "a", 1);
    ɵɵlistener("click", function TimepickerComponent_td_26_Template_a_click_1_listener() {
      ɵɵrestoreView(_r35);
      const ctx_r34 = ɵɵnextContext();
      return ɵɵresetView(ctx_r34.changeMinutes(-ctx_r34.minuteStep));
    });
    ɵɵelement(2, "span", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r13.canDecrementMinutes || !ctx_r13.isEditable);
  }
}
function TimepickerComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "a", 1);
    ɵɵlistener("click", function TimepickerComponent_td_28_Template_a_click_1_listener() {
      ɵɵrestoreView(_r37);
      const ctx_r36 = ɵɵnextContext();
      return ɵɵresetView(ctx_r36.changeSeconds(-ctx_r36.secondsStep));
    });
    ɵɵelement(2, "span", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r15.canDecrementSeconds || !ctx_r15.isEditable);
  }
}
function TimepickerComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
var _TimepickerActions = class _TimepickerActions {
  writeValue(value) {
    return {
      type: _TimepickerActions.WRITE_VALUE,
      payload: value
    };
  }
  changeHours(event) {
    return {
      type: _TimepickerActions.CHANGE_HOURS,
      payload: event
    };
  }
  changeMinutes(event) {
    return {
      type: _TimepickerActions.CHANGE_MINUTES,
      payload: event
    };
  }
  changeSeconds(event) {
    return {
      type: _TimepickerActions.CHANGE_SECONDS,
      payload: event
    };
  }
  setTime(value) {
    return {
      type: _TimepickerActions.SET_TIME_UNIT,
      payload: value
    };
  }
  updateControls(value) {
    return {
      type: _TimepickerActions.UPDATE_CONTROLS,
      payload: value
    };
  }
};
_TimepickerActions.WRITE_VALUE = "[timepicker] write value from ng model";
_TimepickerActions.CHANGE_HOURS = "[timepicker] change hours";
_TimepickerActions.CHANGE_MINUTES = "[timepicker] change minutes";
_TimepickerActions.CHANGE_SECONDS = "[timepicker] change seconds";
_TimepickerActions.SET_TIME_UNIT = "[timepicker] set time unit";
_TimepickerActions.UPDATE_CONTROLS = "[timepicker] update controls";
_TimepickerActions.ɵfac = function TimepickerActions_Factory(t) {
  return new (t || _TimepickerActions)();
};
_TimepickerActions.ɵprov = ɵɵdefineInjectable({
  token: _TimepickerActions,
  factory: _TimepickerActions.ɵfac,
  providedIn: "platform"
});
var TimepickerActions = _TimepickerActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerActions, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var dex = 10;
var hoursPerDay = 24;
var hoursPerDayHalf = 12;
var minutesPerHour = 60;
var secondsPerMinute = 60;
function isValidDate(value) {
  if (!value) {
    return false;
  }
  if (value instanceof Date && isNaN(value.getHours())) {
    return false;
  }
  if (typeof value === "string") {
    return isValidDate(new Date(value));
  }
  return true;
}
function isValidLimit(controls, newDate) {
  if (controls.min && newDate < controls.min) {
    return false;
  }
  if (controls.max && newDate > controls.max) {
    return false;
  }
  return true;
}
function toNumber(value) {
  if (typeof value === "undefined") {
    return NaN;
  }
  if (typeof value === "number") {
    return value;
  }
  return parseInt(value, dex);
}
function parseHours(value, isPM = false) {
  const hour = toNumber(value);
  if (isNaN(hour) || hour < 0 || hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
    return NaN;
  }
  return hour;
}
function parseMinutes(value) {
  const minute = toNumber(value);
  if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
    return NaN;
  }
  return minute;
}
function parseSeconds(value) {
  const seconds = toNumber(value);
  if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
    return NaN;
  }
  return seconds;
}
function parseTime(value) {
  if (typeof value === "string") {
    return new Date(value);
  }
  return value;
}
function changeTime(value, diff) {
  if (!value) {
    return changeTime(createDate2(/* @__PURE__ */ new Date(), 0, 0, 0), diff);
  }
  if (!diff) {
    return value;
  }
  let hour = value.getHours();
  let minutes = value.getMinutes();
  let seconds = value.getSeconds();
  if (diff.hour) {
    hour = hour + toNumber(diff.hour);
  }
  if (diff.minute) {
    minutes = minutes + toNumber(diff.minute);
  }
  if (diff.seconds) {
    seconds = seconds + toNumber(diff.seconds);
  }
  return createDate2(value, hour, minutes, seconds);
}
function setTime2(value, opts) {
  let hour = parseHours(opts.hour);
  const minute = parseMinutes(opts.minute);
  const seconds = parseSeconds(opts.seconds) || 0;
  if (opts.isPM && hour !== 12) {
    hour += hoursPerDayHalf;
  }
  if (!value) {
    if (!isNaN(hour) && !isNaN(minute)) {
      return createDate2(/* @__PURE__ */ new Date(), hour, minute, seconds);
    }
    return value;
  }
  if (isNaN(hour) || isNaN(minute)) {
    return value;
  }
  return createDate2(value, hour, minute, seconds);
}
function createDate2(value, hours, minutes, seconds) {
  const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
  newValue.setFullYear(value.getFullYear());
  newValue.setMonth(value.getMonth());
  newValue.setDate(value.getDate());
  return newValue;
}
function padNumber(value) {
  const _value = value.toString();
  if (_value.length > 1) {
    return _value;
  }
  return `0${_value}`;
}
function isHourInputValid(hours, isPM) {
  return !isNaN(parseHours(hours, isPM));
}
function isMinuteInputValid(minutes) {
  return !isNaN(parseMinutes(minutes));
}
function isSecondInputValid(seconds) {
  return !isNaN(parseSeconds(seconds));
}
function isInputLimitValid(diff, max, min) {
  const newDate = setTime2(/* @__PURE__ */ new Date(), diff);
  if (!newDate) {
    return false;
  }
  if (max && newDate > max) {
    return false;
  }
  if (min && newDate < min) {
    return false;
  }
  return true;
}
function isOneOfDatesEmpty(hours, minutes, seconds) {
  return hours.length === 0 || minutes.length === 0 || seconds.length === 0;
}
function isInputValid(hours, minutes = "0", seconds = "0", isPM) {
  return isHourInputValid(hours, isPM) && isMinuteInputValid(minutes) && isSecondInputValid(seconds);
}
function canChangeValue(state2, event) {
  if (state2.readonlyInput || state2.disabled) {
    return false;
  }
  if (event) {
    if (event.source === "wheel" && !state2.mousewheel) {
      return false;
    }
    if (event.source === "key" && !state2.arrowkeys) {
      return false;
    }
  }
  return true;
}
function canChangeHours(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementHours) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementHours) {
    return false;
  }
  return true;
}
function canChangeMinutes(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementMinutes) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementMinutes) {
    return false;
  }
  return true;
}
function canChangeSeconds(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementSeconds) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementSeconds) {
    return false;
  }
  return true;
}
function getControlsValue(state2) {
  const {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  } = state2;
  return {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  };
}
function timepickerControls(value, state2) {
  const hoursPerDay2 = 24;
  const hoursPerDayHalf2 = 12;
  const {
    min,
    max,
    hourStep,
    minuteStep,
    secondsStep,
    showSeconds
  } = state2;
  const res = {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  };
  if (!value) {
    return res;
  }
  if (max) {
    const _newHour = changeTime(value, {
      hour: hourStep
    });
    res.canIncrementHours = max > _newHour && value.getHours() + hourStep < hoursPerDay2;
    if (!res.canIncrementHours) {
      const _newMinutes = changeTime(value, {
        minute: minuteStep
      });
      res.canIncrementMinutes = showSeconds ? max > _newMinutes : max >= _newMinutes;
    }
    if (!res.canIncrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: secondsStep
      });
      res.canIncrementSeconds = max >= _newSeconds;
    }
    if (value.getHours() < hoursPerDayHalf2) {
      res.canToggleMeridian = changeTime(value, {
        hour: hoursPerDayHalf2
      }) < max;
    }
  }
  if (min) {
    const _newHour = changeTime(value, {
      hour: -hourStep
    });
    res.canDecrementHours = min < _newHour;
    if (!res.canDecrementHours) {
      const _newMinutes = changeTime(value, {
        minute: -minuteStep
      });
      res.canDecrementMinutes = showSeconds ? min < _newMinutes : min <= _newMinutes;
    }
    if (!res.canDecrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: -secondsStep
      });
      res.canDecrementSeconds = min <= _newSeconds;
    }
    if (value.getHours() >= hoursPerDayHalf2) {
      res.canToggleMeridian = changeTime(value, {
        hour: -hoursPerDayHalf2
      }) > min;
    }
  }
  return res;
}
var _TimepickerConfig = class _TimepickerConfig {
  constructor() {
    this.hourStep = 1;
    this.minuteStep = 5;
    this.secondsStep = 10;
    this.showMeridian = true;
    this.meridians = ["AM", "PM"];
    this.readonlyInput = false;
    this.disabled = false;
    this.allowEmptyTime = false;
    this.mousewheel = true;
    this.arrowkeys = true;
    this.showSpinners = true;
    this.showSeconds = false;
    this.showMinutes = true;
    this.hoursPlaceholder = "HH";
    this.minutesPlaceholder = "MM";
    this.secondsPlaceholder = "SS";
    this.ariaLabelHours = "hours";
    this.ariaLabelMinutes = "minutes";
    this.ariaLabelSeconds = "seconds";
  }
};
_TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) {
  return new (t || _TimepickerConfig)();
};
_TimepickerConfig.ɵprov = ɵɵdefineInjectable({
  token: _TimepickerConfig,
  factory: _TimepickerConfig.ɵfac,
  providedIn: "root"
});
var TimepickerConfig = _TimepickerConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var initialState = {
  value: void 0,
  config: new TimepickerConfig(),
  controls: {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  }
};
function timepickerReducer(state2 = initialState, action) {
  switch (action.type) {
    case TimepickerActions.WRITE_VALUE: {
      return Object.assign({}, state2, {
        value: action.payload
      });
    }
    case TimepickerActions.CHANGE_HOURS: {
      if (!canChangeValue(state2.config, action.payload) || !canChangeHours(action.payload, state2.controls)) {
        return state2;
      }
      const _newTime = changeTime(state2.value, {
        hour: action.payload.step
      });
      if ((state2.config.max || state2.config.min) && !isValidLimit(state2.config, _newTime)) {
        return state2;
      }
      return Object.assign({}, state2, {
        value: _newTime
      });
    }
    case TimepickerActions.CHANGE_MINUTES: {
      if (!canChangeValue(state2.config, action.payload) || !canChangeMinutes(action.payload, state2.controls)) {
        return state2;
      }
      const _newTime = changeTime(state2.value, {
        minute: action.payload.step
      });
      if ((state2.config.max || state2.config.min) && !isValidLimit(state2.config, _newTime)) {
        return state2;
      }
      return Object.assign({}, state2, {
        value: _newTime
      });
    }
    case TimepickerActions.CHANGE_SECONDS: {
      if (!canChangeValue(state2.config, action.payload) || !canChangeSeconds(action.payload, state2.controls)) {
        return state2;
      }
      const _newTime = changeTime(state2.value, {
        seconds: action.payload.step
      });
      if ((state2.config.max || state2.config.min) && !isValidLimit(state2.config, _newTime)) {
        return state2;
      }
      return Object.assign({}, state2, {
        value: _newTime
      });
    }
    case TimepickerActions.SET_TIME_UNIT: {
      if (!canChangeValue(state2.config)) {
        return state2;
      }
      const _newTime = setTime2(state2.value, action.payload);
      return Object.assign({}, state2, {
        value: _newTime
      });
    }
    case TimepickerActions.UPDATE_CONTROLS: {
      const _newControlsState = timepickerControls(state2.value, action.payload);
      const _newState = {
        value: state2.value,
        config: action.payload,
        controls: _newControlsState
      };
      if (state2.config.showMeridian !== _newState.config.showMeridian) {
        if (state2.value) {
          _newState.value = new Date(state2.value);
        }
      }
      return Object.assign({}, state2, _newState);
    }
    default:
      return state2;
  }
}
var _TimepickerStore = class _TimepickerStore extends MiniStore {
  constructor() {
    const _dispatcher = new BehaviorSubject({
      type: "[mini-ngrx] dispatcher init"
    });
    const state2 = new MiniState(initialState, _dispatcher, timepickerReducer);
    super(_dispatcher, timepickerReducer, state2);
  }
};
_TimepickerStore.ɵfac = function TimepickerStore_Factory(t) {
  return new (t || _TimepickerStore)();
};
_TimepickerStore.ɵprov = ɵɵdefineInjectable({
  token: _TimepickerStore,
  factory: _TimepickerStore.ɵfac,
  providedIn: "platform"
});
var TimepickerStore = _TimepickerStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerStore, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [], null);
})();
var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimepickerComponent),
  multi: true
};
var _TimepickerComponent = class _TimepickerComponent {
  constructor(_config, _cd, _store, _timepickerActions) {
    this._cd = _cd;
    this._store = _store;
    this._timepickerActions = _timepickerActions;
    this.hourStep = 1;
    this.minuteStep = 5;
    this.secondsStep = 10;
    this.readonlyInput = false;
    this.disabled = false;
    this.mousewheel = true;
    this.arrowkeys = true;
    this.showSpinners = true;
    this.showMeridian = true;
    this.showMinutes = true;
    this.showSeconds = false;
    this.meridians = ["AM", "PM"];
    this.hoursPlaceholder = "HH";
    this.minutesPlaceholder = "MM";
    this.secondsPlaceholder = "SS";
    this.isValid = new EventEmitter();
    this.meridianChange = new EventEmitter();
    this.hours = "";
    this.minutes = "";
    this.seconds = "";
    this.meridian = "";
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
    this.labelHours = "hours";
    this.labelMinutes = "minutes";
    this.labelSeconds = "seconds";
    this.canIncrementHours = true;
    this.canIncrementMinutes = true;
    this.canIncrementSeconds = true;
    this.canDecrementHours = true;
    this.canDecrementMinutes = true;
    this.canDecrementSeconds = true;
    this.canToggleMeridian = true;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.config = _config;
    Object.assign(this, this.config);
    this.timepickerSub = _store.select((state2) => state2.value).subscribe((value) => {
      this._renderTime(value);
      this.onChange(value);
      this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    });
    _store.select((state2) => state2.controls).subscribe((controlsState) => {
      const isTimepickerInputValid = isInputValid(this.hours, this.minutes, this.seconds, this.isPM());
      const isValid2 = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
      this.isValid.emit(isValid2);
      Object.assign(this, controlsState);
      _cd.markForCheck();
    });
  }
  /** @deprecated - please use `isEditable` instead */
  get isSpinnersVisible() {
    return this.showSpinners && !this.readonlyInput;
  }
  get isEditable() {
    return !(this.readonlyInput || this.disabled);
  }
  resetValidation() {
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
  }
  isPM() {
    return this.showMeridian && this.meridian === this.meridians[1];
  }
  prevDef($event) {
    $event.preventDefault();
  }
  wheelSign($event) {
    return Math.sign($event.deltaY || 0) * -1;
  }
  ngOnChanges() {
    this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
  }
  changeHours(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeHours({
      step,
      source
    }));
  }
  changeMinutes(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeMinutes({
      step,
      source
    }));
  }
  changeSeconds(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeSeconds({
      step,
      source
    }));
  }
  updateHours(target) {
    this.resetValidation();
    this.hours = target.value;
    const isTimepickerInputValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
    const isValid2 = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid2) {
      this.invalidHours = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateMinutes(target) {
    this.resetValidation();
    this.minutes = target.value;
    const isTimepickerInputValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
    const isValid2 = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid2) {
      this.invalidMinutes = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateSeconds(target) {
    this.resetValidation();
    this.seconds = target.value;
    const isTimepickerInputValid = isSecondInputValid(this.seconds) && this.isValidLimit();
    const isValid2 = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid2) {
      this.invalidSeconds = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  isValidLimit() {
    return isInputLimitValid({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }, this.max, this.min);
  }
  isOneOfDatesIsEmpty() {
    return isOneOfDatesEmpty(this.hours, this.minutes, this.seconds);
  }
  _updateTime() {
    const _seconds = this.showSeconds ? this.seconds : void 0;
    const _minutes = this.showMinutes ? this.minutes : void 0;
    const isTimepickerInputValid = isInputValid(this.hours, _minutes, _seconds, this.isPM());
    const isValid2 = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid2) {
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._store.dispatch(this._timepickerActions.setTime({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }));
  }
  toggleMeridian() {
    if (!this.showMeridian || !this.isEditable) {
      return;
    }
    const _hoursPerDayHalf = 12;
    this._store.dispatch(this._timepickerActions.changeHours({
      step: _hoursPerDayHalf,
      source: ""
    }));
  }
  /**
   * Write a new value to the element.
   */
  writeValue(obj) {
    if (isValidDate(obj)) {
      this.resetValidation();
      this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
    } else if (obj == null) {
      this._store.dispatch(this._timepickerActions.writeValue());
    }
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * This function is called when the control status changes to or from "disabled".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._cd.markForCheck();
  }
  ngOnDestroy() {
    this.timepickerSub?.unsubscribe();
  }
  _renderTime(value) {
    if (!value || !isValidDate(value)) {
      this.hours = "";
      this.minutes = "";
      this.seconds = "";
      this.meridian = this.meridians[0];
      this.meridianChange.emit(this.meridian);
      return;
    }
    const _value = parseTime(value);
    if (!_value) {
      return;
    }
    const _hoursPerDayHalf = 12;
    let _hours = _value.getHours();
    if (this.showMeridian) {
      this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
      this.meridianChange.emit(this.meridian);
      _hours = _hours % _hoursPerDayHalf;
      if (_hours === 0) {
        _hours = _hoursPerDayHalf;
      }
    }
    this.hours = padNumber(_hours);
    this.minutes = padNumber(_value.getMinutes());
    this.seconds = padNumber(_value.getUTCSeconds());
  }
};
_TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) {
  return new (t || _TimepickerComponent)(ɵɵdirectiveInject(TimepickerConfig), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TimepickerStore), ɵɵdirectiveInject(TimepickerActions));
};
_TimepickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _TimepickerComponent,
  selectors: [["timepicker"]],
  inputs: {
    hourStep: "hourStep",
    minuteStep: "minuteStep",
    secondsStep: "secondsStep",
    readonlyInput: "readonlyInput",
    disabled: "disabled",
    mousewheel: "mousewheel",
    arrowkeys: "arrowkeys",
    showSpinners: "showSpinners",
    showMeridian: "showMeridian",
    showMinutes: "showMinutes",
    showSeconds: "showSeconds",
    meridians: "meridians",
    min: "min",
    max: "max",
    hoursPlaceholder: "hoursPlaceholder",
    minutesPlaceholder: "minutesPlaceholder",
    secondsPlaceholder: "secondsPlaceholder"
  },
  outputs: {
    isValid: "isValid",
    meridianChange: "meridianChange"
  },
  features: [ɵɵProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), ɵɵNgOnChangesFeature],
  decls: 31,
  vars: 33,
  consts: [[1, "text-center", 3, "hidden"], ["href", "javascript:void(0);", 1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group", "mb-3"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group mb-3", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]],
  template: function TimepickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table")(1, "tbody")(2, "tr", 0)(3, "td")(4, "a", 1);
      ɵɵlistener("click", function TimepickerComponent_Template_a_click_4_listener() {
        return ctx.changeHours(ctx.hourStep);
      });
      ɵɵelement(5, "span", 2);
      ɵɵelementEnd()();
      ɵɵtemplate(6, TimepickerComponent_td_6_Template, 2, 0, "td", 3)(7, TimepickerComponent_td_7_Template, 3, 2, "td", 3)(8, TimepickerComponent_td_8_Template, 2, 0, "td", 3)(9, TimepickerComponent_td_9_Template, 3, 2, "td", 3)(10, TimepickerComponent_td_10_Template, 2, 0, "td", 3)(11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
      ɵɵelementEnd();
      ɵɵelementStart(12, "tr")(13, "td", 4)(14, "input", 5);
      ɵɵlistener("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) {
        ctx.prevDef($event);
        return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel");
      })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() {
        return ctx.changeHours(ctx.hourStep, "key");
      })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() {
        return ctx.changeHours(-ctx.hourStep, "key");
      })("change", function TimepickerComponent_Template_input_change_14_listener($event) {
        return ctx.updateHours($event.target);
      });
      ɵɵelementEnd()();
      ɵɵtemplate(15, TimepickerComponent_td_15_Template, 2, 0, "td", 3)(16, TimepickerComponent_td_16_Template, 2, 9, "td", 6)(17, TimepickerComponent_td_17_Template, 2, 0, "td", 3)(18, TimepickerComponent_td_18_Template, 2, 9, "td", 6)(19, TimepickerComponent_td_19_Template, 2, 0, "td", 3)(20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
      ɵɵelementEnd();
      ɵɵelementStart(21, "tr", 0)(22, "td")(23, "a", 1);
      ɵɵlistener("click", function TimepickerComponent_Template_a_click_23_listener() {
        return ctx.changeHours(-ctx.hourStep);
      });
      ɵɵelement(24, "span", 7);
      ɵɵelementEnd()();
      ɵɵtemplate(25, TimepickerComponent_td_25_Template, 2, 0, "td", 3)(26, TimepickerComponent_td_26_Template, 3, 2, "td", 3)(27, TimepickerComponent_td_27_Template, 2, 0, "td", 3)(28, TimepickerComponent_td_28_Template, 3, 2, "td", 3)(29, TimepickerComponent_td_29_Template, 2, 0, "td", 3)(30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("hidden", !ctx.showSpinners);
      ɵɵadvance(2);
      ɵɵclassProp("disabled", !ctx.canIncrementHours || !ctx.isEditable);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance(2);
      ɵɵclassProp("has-error", ctx.invalidHours);
      ɵɵadvance();
      ɵɵclassProp("is-invalid", ctx.invalidHours);
      ɵɵproperty("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
      ɵɵattribute("aria-label", ctx.labelHours);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance();
      ɵɵproperty("hidden", !ctx.showSpinners);
      ɵɵadvance(2);
      ɵɵclassProp("disabled", !ctx.canDecrementHours || !ctx.isEditable);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
    }
  },
  dependencies: [NgIf],
  styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TimepickerComponent = _TimepickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerComponent, [{
    type: Component,
    args: [{
      selector: "timepicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
      encapsulation: ViewEncapsulation$1.None,
      template: `<table>
  <tbody>
  <tr class="text-center" [hidden]="!showSpinners">
    <!-- increment hours button-->
    <td>
      <a class="btn btn-link" [class.disabled]="!canIncrementHours || !isEditable"
         (click)="changeHours(hourStep)"
         href="javascript:void(0);"
      ><span class="bs-chevron bs-chevron-up"></span></a>
    </td>
    <!-- divider -->
    <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>
    <!-- increment minutes button -->
    <td *ngIf="showMinutes">
      <a class="btn btn-link" [class.disabled]="!canIncrementMinutes || !isEditable"
         (click)="changeMinutes(minuteStep)"
         href="javascript:void(0);"
      ><span class="bs-chevron bs-chevron-up"></span></a>
    </td>
    <!-- divider -->
    <td *ngIf="showSeconds">&nbsp;</td>
    <!-- increment seconds button -->
    <td *ngIf="showSeconds">
      <a class="btn btn-link" [class.disabled]="!canIncrementSeconds || !isEditable"
         (click)="changeSeconds(secondsStep)"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-up"></span>
      </a>
    </td>
    <!-- space between -->
    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>
    <!-- meridian placeholder-->
    <td *ngIf="showMeridian"></td>
  </tr>
  <tr>
    <!-- hours -->
    <td class="form-group mb-3" [class.has-error]="invalidHours">
      <input type="text" [class.is-invalid]="invalidHours"
             class="form-control text-center bs-timepicker-field"
             [placeholder]="hoursPlaceholder"
             maxlength="2"
             [readonly]="readonlyInput"
             [disabled]="disabled"
             [value]="hours"
             (wheel)="prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')"
             (keydown.ArrowUp)="changeHours(hourStep, 'key')"
             (keydown.ArrowDown)="changeHours(-hourStep, 'key')"
             (change)="updateHours($event.target)" [attr.aria-label]="labelHours"></td>
    <!-- divider -->
    <td *ngIf="showMinutes">&nbsp;:&nbsp;</td>
    <!-- minutes -->
    <td class="form-group mb-3" *ngIf="showMinutes" [class.has-error]="invalidMinutes">
      <input type="text" [class.is-invalid]="invalidMinutes"
             class="form-control text-center bs-timepicker-field"
             [placeholder]="minutesPlaceholder"
             maxlength="2"
             [readonly]="readonlyInput"
             [disabled]="disabled"
             [value]="minutes"
             (wheel)="prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')"
             (keydown.ArrowUp)="changeMinutes(minuteStep, 'key')"
             (keydown.ArrowDown)="changeMinutes(-minuteStep, 'key')"
             (change)="updateMinutes($event.target)" [attr.aria-label]="labelMinutes">
    </td>
    <!-- divider -->
    <td *ngIf="showSeconds">&nbsp;:&nbsp;</td>
    <!-- seconds -->
    <td class="form-group mb-3" *ngIf="showSeconds" [class.has-error]="invalidSeconds">
      <input type="text" [class.is-invalid]="invalidSeconds"
             class="form-control text-center bs-timepicker-field"
             [placeholder]="secondsPlaceholder"
             maxlength="2"
             [readonly]="readonlyInput"
             [disabled]="disabled"
             [value]="seconds"
             (wheel)="prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')"
             (keydown.ArrowUp)="changeSeconds(secondsStep, 'key')"
             (keydown.ArrowDown)="changeSeconds(-secondsStep, 'key')"
             (change)="updateSeconds($event.target)" [attr.aria-label]="labelSeconds">
    </td>
    <!-- space between -->
    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>
    <!-- meridian -->
    <td *ngIf="showMeridian">
      <button type="button" class="btn btn-default text-center"
              [disabled]="!isEditable || !canToggleMeridian"
              [class.disabled]="!isEditable || !canToggleMeridian"
              (click)="toggleMeridian()"
      >{{ meridian }}
      </button>
    </td>
  </tr>
  <tr class="text-center" [hidden]="!showSpinners">
    <!-- decrement hours button-->
    <td>
      <a class="btn btn-link" [class.disabled]="!canDecrementHours || !isEditable"
         (click)="changeHours(-hourStep)"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-down"></span>
      </a>
    </td>
    <!-- divider -->
    <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>
    <!-- decrement minutes button-->
    <td *ngIf="showMinutes">
      <a class="btn btn-link" [class.disabled]="!canDecrementMinutes || !isEditable"
         (click)="changeMinutes(-minuteStep)"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-down"></span>
      </a>
    </td>
    <!-- divider -->
    <td *ngIf="showSeconds">&nbsp;</td>
    <!-- decrement seconds button-->
    <td *ngIf="showSeconds">
      <a class="btn btn-link" [class.disabled]="!canDecrementSeconds || !isEditable"
         (click)="changeSeconds(-secondsStep)"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-down"></span>
      </a>
    </td>
    <!-- space between -->
    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>
    <!-- meridian placeholder-->
    <td *ngIf="showMeridian"></td>
  </tr>
  </tbody>
</table>
`,
      styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"]
    }]
  }], () => [{
    type: TimepickerConfig
  }, {
    type: ChangeDetectorRef
  }, {
    type: TimepickerStore
  }, {
    type: TimepickerActions
  }], {
    hourStep: [{
      type: Input
    }],
    minuteStep: [{
      type: Input
    }],
    secondsStep: [{
      type: Input
    }],
    readonlyInput: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mousewheel: [{
      type: Input
    }],
    arrowkeys: [{
      type: Input
    }],
    showSpinners: [{
      type: Input
    }],
    showMeridian: [{
      type: Input
    }],
    showMinutes: [{
      type: Input
    }],
    showSeconds: [{
      type: Input
    }],
    meridians: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    hoursPlaceholder: [{
      type: Input
    }],
    minutesPlaceholder: [{
      type: Input
    }],
    secondsPlaceholder: [{
      type: Input
    }],
    isValid: [{
      type: Output
    }],
    meridianChange: [{
      type: Output
    }]
  });
})();
var _TimepickerModule = class _TimepickerModule {
  static forRoot() {
    return {
      ngModule: _TimepickerModule,
      providers: [TimepickerActions, TimepickerStore]
    };
  }
};
_TimepickerModule.ɵfac = function TimepickerModule_Factory(t) {
  return new (t || _TimepickerModule)();
};
_TimepickerModule.ɵmod = ɵɵdefineNgModule({
  type: _TimepickerModule,
  declarations: [TimepickerComponent],
  imports: [CommonModule],
  exports: [TimepickerComponent]
});
_TimepickerModule.ɵinj = ɵɵdefineInjector({
  providers: [TimepickerStore],
  imports: [CommonModule]
});
var TimepickerModule = _TimepickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TimepickerComponent],
      exports: [TimepickerComponent],
      providers: [TimepickerStore]
    }]
  }], null, null);
})();

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
function trigger(name, definitions) {
  return {
    type: AnimationMetadataType.Trigger,
    name,
    definitions,
    options: {}
  };
}
function animate(timings, styles = null) {
  return {
    type: AnimationMetadataType.Animate,
    styles,
    timings
  };
}
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens2) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens2,
    offset: null
  };
}
function state(name, styles, options) {
  return {
    type: AnimationMetadataType.State,
    name,
    styles,
    options
  };
}
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: AnimationMetadataType.Transition,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
var _AnimationBuilder = class _AnimationBuilder {
};
_AnimationBuilder.ɵfac = function AnimationBuilder_Factory(t) {
  return new (t || _AnimationBuilder)();
};
_AnimationBuilder.ɵprov = ɵɵdefineInjectable({
  token: _AnimationBuilder,
  factory: () => (() => inject(BrowserAnimationBuilder))(),
  providedIn: "root"
});
var AnimationBuilder = _AnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var _BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  constructor(rootRenderer, doc) {
    super();
    this.animationModuleType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._nextAnimationId = 0;
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation$1.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation) {
    const id2 = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation) ? sequence(animation) : animation;
    issueAnimationCommand(this._renderer, null, id2, "register", [entry]);
    return new BrowserAnimationFactory(id2, this._renderer);
  }
};
_BrowserAnimationBuilder.ɵfac = function BrowserAnimationBuilder_Factory(t) {
  return new (t || _BrowserAnimationBuilder)(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT));
};
_BrowserAnimationBuilder.ɵprov = ɵɵdefineInjectable({
  token: _BrowserAnimationBuilder,
  factory: _BrowserAnimationBuilder.ɵfac,
  providedIn: "root"
});
var BrowserAnimationBuilder = _BrowserAnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  constructor(id2, element, options, _renderer) {
    this.id = id2;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
};
function issueAnimationCommand(renderer, element, id2, command, args) {
  renderer.setProperty(element, `@@${id2}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  return type === 0 || type === 1;
}

// node_modules/ngx-bootstrap/component-loader/fesm2022/ngx-bootstrap-component-loader.mjs
var ContentRef = class {
  constructor(nodes, viewRef, componentRef) {
    this.nodes = nodes;
    this.viewRef = viewRef;
    this.componentRef = componentRef;
  }
};
var ComponentLoader = class {
  /**
   * Do not use this directly, it should be instanced via
   * `ComponentLoadFactory.attach`
   * @internal
   */
  constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService, _document) {
    this._viewContainerRef = _viewContainerRef;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._injector = _injector;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._ngZone = _ngZone;
    this._applicationRef = _applicationRef;
    this._posService = _posService;
    this._document = _document;
    this.onBeforeShow = new EventEmitter();
    this.onShown = new EventEmitter();
    this.onBeforeHide = new EventEmitter();
    this.onHidden = new EventEmitter();
    this._providers = [];
    this._isHiding = false;
    this.containerDefaultSelector = "body";
    this._listenOpts = {};
    this._globalListener = Function.prototype;
  }
  get isShown() {
    if (this._isHiding) {
      return false;
    }
    return !!this._componentRef;
  }
  attach(compType) {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
    return this;
  }
  // todo: add behaviour: to target element, `body`, custom element
  to(container) {
    this.container = container || this.container;
    return this;
  }
  position(opts) {
    if (!opts) {
      return this;
    }
    this.attachment = opts.attachment || this.attachment;
    this._elementRef = opts.target || this._elementRef;
    return this;
  }
  provide(provider) {
    this._providers.push(provider);
    return this;
  }
  // todo: appendChild to element or document.querySelector(this.container)
  show(opts = {}) {
    this._subscribePositioning();
    this._innerComponent = void 0;
    if (!this._componentRef) {
      this.onBeforeShow.emit();
      this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
      const injector = Injector.create({
        providers: this._providers,
        parent: this._injector
      });
      if (!this._componentFactory) {
        return;
      }
      this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
      this._applicationRef.attachView(this._componentRef.hostView);
      this.instance = this._componentRef.instance;
      Object.assign(this._componentRef.instance, opts);
      if (this.container instanceof ElementRef) {
        this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (typeof this.container === "string" && typeof this._document !== "undefined") {
        const selectedElement = this._document.querySelector(this.container) || this._document.querySelector(this.containerDefaultSelector);
        if (!selectedElement) {
          return;
        }
        selectedElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
        this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (this._contentRef.componentRef) {
        this._innerComponent = this._contentRef.componentRef.instance;
        this._contentRef.componentRef.changeDetectorRef.markForCheck();
        this._contentRef.componentRef.changeDetectorRef.detectChanges();
      }
      this._componentRef.changeDetectorRef.markForCheck();
      this._componentRef.changeDetectorRef.detectChanges();
      this.onShown.emit(opts.id ? {
        id: opts.id
      } : this._componentRef.instance);
    }
    this._registerOutsideClick();
    return this._componentRef;
  }
  hide(id2) {
    if (!this._componentRef) {
      return this;
    }
    this._posService.deletePositionElement(this._componentRef.location);
    this.onBeforeHide.emit(this._componentRef.instance);
    const componentEl = this._componentRef.location.nativeElement;
    componentEl.parentNode?.removeChild(componentEl);
    this._contentRef?.componentRef?.destroy();
    if (this._viewContainerRef && this._contentRef?.viewRef) {
      this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
    }
    this._contentRef?.viewRef?.destroy();
    this._contentRef = void 0;
    this._componentRef = void 0;
    this._removeGlobalListener();
    this.onHidden.emit(id2 ? {
      id: id2
    } : null);
    return this;
  }
  toggle() {
    if (this.isShown) {
      this.hide();
      return;
    }
    this.show();
  }
  dispose() {
    if (this.isShown) {
      this.hide();
    }
    this._unsubscribePositioning();
    if (this._unregisterListenersFn) {
      this._unregisterListenersFn();
    }
  }
  listen(listenOpts) {
    this.triggers = listenOpts.triggers || this.triggers;
    this._listenOpts.outsideClick = listenOpts.outsideClick;
    this._listenOpts.outsideEsc = listenOpts.outsideEsc;
    listenOpts.target = listenOpts.target || this._elementRef?.nativeElement;
    const hide = this._listenOpts.hide = () => listenOpts.hide ? listenOpts.hide() : void this.hide();
    const show = this._listenOpts.show = (registerHide) => {
      listenOpts.show ? listenOpts.show(registerHide) : this.show(registerHide);
      registerHide();
    };
    const toggle = (registerHide) => {
      this.isShown ? hide() : show(registerHide);
    };
    if (this._renderer) {
      this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
        target: listenOpts.target,
        triggers: listenOpts.triggers,
        show,
        hide,
        toggle
      });
    }
    return this;
  }
  _removeGlobalListener() {
    if (this._globalListener) {
      this._globalListener();
      this._globalListener = Function.prototype;
    }
  }
  attachInline(vRef, template) {
    if (vRef && template) {
      this._inlineViewRef = vRef.createEmbeddedView(template);
    }
    return this;
  }
  _registerOutsideClick() {
    if (!this._componentRef || !this._componentRef.location) {
      return;
    }
    if (this._listenOpts.outsideClick) {
      const target = this._componentRef.location.nativeElement;
      setTimeout(() => {
        if (this._renderer && this._elementRef) {
          this._globalListener = registerOutsideClick(this._renderer, {
            targets: [target, this._elementRef.nativeElement],
            outsideClick: this._listenOpts.outsideClick,
            hide: () => this._listenOpts.hide && this._listenOpts.hide()
          });
        }
      });
    }
    if (this._listenOpts.outsideEsc && this._renderer && this._elementRef) {
      const target = this._componentRef.location.nativeElement;
      this._globalListener = registerEscClick(this._renderer, {
        targets: [target, this._elementRef.nativeElement],
        outsideEsc: this._listenOpts.outsideEsc,
        hide: () => this._listenOpts.hide && this._listenOpts.hide()
      });
    }
  }
  getInnerComponent() {
    return this._innerComponent;
  }
  _subscribePositioning() {
    if (this._zoneSubscription || !this.attachment) {
      return;
    }
    this.onShown.subscribe(() => {
      this._posService.position({
        element: this._componentRef?.location,
        target: this._elementRef,
        attachment: this.attachment,
        appendToBody: this.container === "body"
      });
    });
    this._zoneSubscription = this._ngZone.onStable.subscribe(() => {
      if (!this._componentRef) {
        return;
      }
      this._posService.calcPosition();
    });
  }
  _unsubscribePositioning() {
    if (!this._zoneSubscription) {
      return;
    }
    this._zoneSubscription.unsubscribe();
    this._zoneSubscription = void 0;
  }
  _getContentRef(content, context, initialState2) {
    if (!content) {
      return new ContentRef([]);
    }
    if (content instanceof TemplateRef) {
      if (this._viewContainerRef) {
        const _viewRef = this._viewContainerRef.createEmbeddedView(content, context);
        _viewRef.markForCheck();
        return new ContentRef([_viewRef.rootNodes], _viewRef);
      }
      const viewRef = content.createEmbeddedView({});
      this._applicationRef.attachView(viewRef);
      return new ContentRef([viewRef.rootNodes], viewRef);
    }
    if (typeof content === "function") {
      const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
      const modalContentInjector = Injector.create({
        providers: this._providers,
        parent: this._injector
      });
      const componentRef = contentCmptFactory.create(modalContentInjector);
      Object.assign(componentRef.instance, initialState2);
      this._applicationRef.attachView(componentRef.hostView);
      return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
    }
    const nodes = this._renderer ? [this._renderer.createText(`${content}`)] : [];
    return new ContentRef([nodes]);
  }
};
var _ComponentLoaderFactory = class _ComponentLoaderFactory {
  constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef, _document) {
    this._componentFactoryResolver = _componentFactoryResolver;
    this._ngZone = _ngZone;
    this._injector = _injector;
    this._posService = _posService;
    this._applicationRef = _applicationRef;
    this._document = _document;
  }
  /**
   *
   * @param _elementRef
   * @param _viewContainerRef
   * @param _renderer
   */
  createLoader(_elementRef, _viewContainerRef, _renderer) {
    return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService, this._document);
  }
};
_ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) {
  return new (t || _ComponentLoaderFactory)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(NgZone), ɵɵinject(Injector), ɵɵinject(PositioningService), ɵɵinject(ApplicationRef), ɵɵinject(DOCUMENT));
};
_ComponentLoaderFactory.ɵprov = ɵɵdefineInjectable({
  token: _ComponentLoaderFactory,
  factory: _ComponentLoaderFactory.ɵfac,
  providedIn: "root"
});
var ComponentLoaderFactory = _ComponentLoaderFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentLoaderFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: NgZone
  }, {
    type: Injector
  }, {
    type: PositioningService
  }, {
    type: ApplicationRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();

// node_modules/ngx-bootstrap/tooltip/fesm2022/ngx-bootstrap-tooltip.mjs
var _c0 = ["*"];
var _TooltipConfig = class _TooltipConfig {
  constructor() {
    this.adaptivePosition = true;
    this.placement = "top";
    this.triggers = "hover focus";
    this.delay = 0;
  }
};
_TooltipConfig.ɵfac = function TooltipConfig_Factory(t) {
  return new (t || _TooltipConfig)();
};
_TooltipConfig.ɵprov = ɵɵdefineInjectable({
  token: _TooltipConfig,
  factory: _TooltipConfig.ɵfac,
  providedIn: "root"
});
var TooltipConfig = _TooltipConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TooltipContainerComponent = class _TooltipContainerComponent {
  get _bsVersions() {
    return getBsVer();
  }
  constructor(config) {
    Object.assign(this, config);
  }
  ngAfterViewInit() {
    this.classMap = {
      in: false,
      fade: false
    };
    if (this.placement) {
      if (this._bsVersions.isBs5) {
        this.placement = PlacementForBs5[this.placement];
      }
      this.classMap[this.placement] = true;
    }
    this.classMap[`tooltip-${this.placement}`] = true;
    this.classMap["in"] = true;
    if (this.animation) {
      this.classMap["fade"] = true;
    }
    if (this.containerClass) {
      this.classMap[this.containerClass] = true;
    }
  }
};
_TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) {
  return new (t || _TooltipContainerComponent)(ɵɵdirectiveInject(TooltipConfig));
};
_TooltipContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _TooltipContainerComponent,
  selectors: [["bs-tooltip-container"]],
  hostAttrs: ["role", "tooltip"],
  hostVars: 3,
  hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id);
      ɵɵclassMap("show tooltip in tooltip-" + ctx.placement + " bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
    }
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]],
  template: function TooltipContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelement(0, "div", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
  },
  styles: [".tooltip[_nghost-%COMP%]{display:block;pointer-events:none;position:absolute}.tooltip[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{position:absolute}"],
  changeDetection: 0
});
var TooltipContainerComponent = _TooltipContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-tooltip-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": '"show tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
        "[attr.id]": "this.id",
        role: "tooltip"
      },
      template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
      styles: [":host.tooltip{display:block;pointer-events:none;position:absolute}:host.tooltip .tooltip-arrow{position:absolute}\n"]
    }]
  }], () => [{
    type: TooltipConfig
  }], null);
})();
var id = 0;
var _TooltipDirective = class _TooltipDirective {
  /**
   * Returns whether or not the tooltip is currently being shown
   */
  get isOpen() {
    return this._tooltip.isShown;
  }
  set isOpen(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  /** @deprecated - please use `tooltip` instead */
  set htmlContent(value) {
    warnOnce("tooltipHtml was deprecated, please use `tooltip` instead");
    this.tooltip = value;
  }
  /** @deprecated - please use `placement` instead */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  set _placement(value) {
    warnOnce("tooltipPlacement was deprecated, please use `placement` instead");
    this.placement = value;
  }
  /** @deprecated - please use `isOpen` instead */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  set _isOpen(value) {
    warnOnce("tooltipIsOpen was deprecated, please use `isOpen` instead");
    this.isOpen = value;
  }
  get _isOpen() {
    warnOnce("tooltipIsOpen was deprecated, please use `isOpen` instead");
    return this.isOpen;
  }
  /** @deprecated - please use `isDisabled` instead */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  set _enable(value) {
    warnOnce("tooltipEnable was deprecated, please use `isDisabled` instead");
    this.isDisabled = !value;
  }
  get _enable() {
    warnOnce("tooltipEnable was deprecated, please use `isDisabled` instead");
    return this.isDisabled;
  }
  /** @deprecated - please use `container="body"` instead */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  set _appendToBody(value) {
    warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
    this.container = value ? "body" : this.container;
  }
  get _appendToBody() {
    warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
    return this.container === "body";
  }
  /** @deprecated - will replaced with customClass */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  set _popupClass(value) {
    warnOnce("tooltipClass deprecated");
  }
  /** @deprecated - removed */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  set _tooltipContext(value) {
    warnOnce("tooltipContext deprecated");
  }
  /** @deprecated */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  set _tooltipPopupDelay(value) {
    warnOnce("tooltipPopupDelay is deprecated, use `delay` instead");
    this.delay = value;
  }
  /** @deprecated -  please use `triggers` instead */
  get _tooltipTrigger() {
    warnOnce("tooltipTrigger was deprecated, please use `triggers` instead");
    return this.triggers;
  }
  set _tooltipTrigger(value) {
    warnOnce("tooltipTrigger was deprecated, please use `triggers` instead");
    this.triggers = (value || "").toString();
  }
  constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._positionService = _positionService;
    this.tooltipId = id++;
    this.adaptivePosition = true;
    this.tooltipChange = new EventEmitter();
    this.placement = "top";
    this.triggers = "hover focus";
    this.containerClass = "";
    this.isDisabled = false;
    this.delay = 0;
    this.tooltipAnimation = true;
    this.tooltipFadeDuration = 150;
    this.tooltipStateChanged = new EventEmitter();
    this._tooltip = cis.createLoader(this._elementRef, _viewContainerRef, this._renderer).provide({
      provide: TooltipConfig,
      useValue: config
    });
    Object.assign(this, config);
    this.onShown = this._tooltip.onShown;
    this.onHidden = this._tooltip.onHidden;
  }
  ngOnInit() {
    this._tooltip.listen({
      triggers: this.triggers,
      show: () => this.show()
    });
    this.tooltipChange.subscribe((value) => {
      if (!value) {
        this._tooltip.hide();
      }
    });
    this.onShown.subscribe(() => {
      this.setAriaDescribedBy();
    });
    this.onHidden.subscribe(() => {
      this.setAriaDescribedBy();
    });
  }
  setAriaDescribedBy() {
    this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : void 0;
    if (this._ariaDescribedby) {
      this._renderer.setAttribute(this._elementRef.nativeElement, "aria-describedby", this._ariaDescribedby);
    } else {
      this._renderer.removeAttribute(this._elementRef.nativeElement, "aria-describedby");
    }
  }
  /**
   * Toggles an element’s tooltip. This is considered a “manual” triggering of
   * the tooltip.
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  /**
   * Opens an element’s tooltip. This is considered a “manual” triggering of
   * the tooltip.
   */
  show() {
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this.adaptivePosition
        },
        preventOverflow: {
          enabled: this.adaptivePosition,
          boundariesElement: this.boundariesElement || "scrollParent"
        }
      }
    });
    if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
      return;
    }
    const showTooltip = () => {
      if (this._delayTimeoutId) {
        this._delayTimeoutId = void 0;
      }
      this._tooltip.attach(TooltipContainerComponent).to(this.container).position({
        attachment: this.placement
      }).show({
        content: this.tooltip,
        placement: this.placement,
        containerClass: this.containerClass,
        id: `tooltip-${this.tooltipId}`
      });
    };
    const cancelDelayedTooltipShowing = () => {
      if (this._tooltipCancelShowFn) {
        this._tooltipCancelShowFn();
      }
    };
    if (this.delay) {
      if (this._delaySubscription) {
        this._delaySubscription.unsubscribe();
      }
      this._delaySubscription = timer(this.delay).subscribe(() => {
        showTooltip();
        cancelDelayedTooltipShowing();
      });
      if (this.triggers) {
        parseTriggers(this.triggers).forEach((trigger2) => {
          if (!trigger2.close) {
            return;
          }
          this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger2.close, () => {
            this._delaySubscription?.unsubscribe();
            cancelDelayedTooltipShowing();
          });
        });
      }
    } else {
      showTooltip();
    }
  }
  /**
   * Closes an element’s tooltip. This is considered a “manual” triggering of
   * the tooltip.
   */
  hide() {
    if (this._delayTimeoutId) {
      clearTimeout(this._delayTimeoutId);
      this._delayTimeoutId = void 0;
    }
    if (!this._tooltip.isShown) {
      return;
    }
    if (this._tooltip.instance?.classMap) {
      this._tooltip.instance.classMap["in"] = false;
    }
    setTimeout(() => {
      this._tooltip.hide();
    }, this.tooltipFadeDuration);
  }
  ngOnDestroy() {
    this._tooltip.dispose();
    this.tooltipChange.unsubscribe();
    if (this._delaySubscription) {
      this._delaySubscription.unsubscribe();
    }
    this.onShown.unsubscribe();
    this.onHidden.unsubscribe();
  }
};
_TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
  return new (t || _TooltipDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory), ɵɵdirectiveInject(TooltipConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PositioningService));
};
_TooltipDirective.ɵdir = ɵɵdefineDirective({
  type: _TooltipDirective,
  selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]],
  inputs: {
    adaptivePosition: "adaptivePosition",
    tooltip: "tooltip",
    placement: "placement",
    triggers: "triggers",
    container: "container",
    containerClass: "containerClass",
    boundariesElement: "boundariesElement",
    isOpen: "isOpen",
    isDisabled: "isDisabled",
    delay: "delay",
    htmlContent: [InputFlags.None, "tooltipHtml", "htmlContent"],
    _placement: [InputFlags.None, "tooltipPlacement", "_placement"],
    _isOpen: [InputFlags.None, "tooltipIsOpen", "_isOpen"],
    _enable: [InputFlags.None, "tooltipEnable", "_enable"],
    _appendToBody: [InputFlags.None, "tooltipAppendToBody", "_appendToBody"],
    tooltipAnimation: "tooltipAnimation",
    _popupClass: [InputFlags.None, "tooltipClass", "_popupClass"],
    _tooltipContext: [InputFlags.None, "tooltipContext", "_tooltipContext"],
    _tooltipPopupDelay: [InputFlags.None, "tooltipPopupDelay", "_tooltipPopupDelay"],
    tooltipFadeDuration: "tooltipFadeDuration",
    _tooltipTrigger: [InputFlags.None, "tooltipTrigger", "_tooltipTrigger"]
  },
  outputs: {
    tooltipChange: "tooltipChange",
    onShown: "onShown",
    onHidden: "onHidden",
    tooltipStateChanged: "tooltipStateChanged"
  },
  exportAs: ["bs-tooltip"]
});
var TooltipDirective = _TooltipDirective;
__decorate([OnChange(), __metadata("design:type", Object)], TooltipDirective.prototype, "tooltip", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[tooltip], [tooltipHtml]",
      exportAs: "bs-tooltip"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }, {
    type: TooltipConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: PositioningService
  }], {
    adaptivePosition: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipChange: [{
      type: Output
    }],
    placement: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    containerClass: [{
      type: Input
    }],
    boundariesElement: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    onShown: [{
      type: Output
    }],
    onHidden: [{
      type: Output
    }],
    htmlContent: [{
      type: Input,
      args: ["tooltipHtml"]
    }],
    _placement: [{
      type: Input,
      args: ["tooltipPlacement"]
    }],
    _isOpen: [{
      type: Input,
      args: ["tooltipIsOpen"]
    }],
    _enable: [{
      type: Input,
      args: ["tooltipEnable"]
    }],
    _appendToBody: [{
      type: Input,
      args: ["tooltipAppendToBody"]
    }],
    tooltipAnimation: [{
      type: Input
    }],
    _popupClass: [{
      type: Input,
      args: ["tooltipClass"]
    }],
    _tooltipContext: [{
      type: Input,
      args: ["tooltipContext"]
    }],
    _tooltipPopupDelay: [{
      type: Input,
      args: ["tooltipPopupDelay"]
    }],
    tooltipFadeDuration: [{
      type: Input
    }],
    _tooltipTrigger: [{
      type: Input,
      args: ["tooltipTrigger"]
    }],
    tooltipStateChanged: [{
      type: Output
    }]
  });
})();
var _TooltipModule = class _TooltipModule {
  static forRoot() {
    return {
      ngModule: _TooltipModule,
      providers: [ComponentLoaderFactory, PositioningService]
    };
  }
};
_TooltipModule.ɵfac = function TooltipModule_Factory(t) {
  return new (t || _TooltipModule)();
};
_TooltipModule.ɵmod = ɵɵdefineNgModule({
  type: _TooltipModule,
  declarations: [TooltipDirective, TooltipContainerComponent],
  imports: [CommonModule],
  exports: [TooltipDirective]
});
_TooltipModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var TooltipModule = _TooltipModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TooltipDirective, TooltipContainerComponent],
      exports: [TooltipDirective]
    }]
  }], null, null);
})();

// node_modules/ngx-bootstrap/datepicker/fesm2022/ngx-bootstrap-datepicker.mjs
function BsCustomDatesViewComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function BsCustomDatesViewComponent_button_1_Template_button_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r3);
      const range_r1 = restoredCtx.$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectFromRanges(range_r1));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("selected", range_r1.value === ctx_r0.selectedRange);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", range_r1.label, " ");
  }
}
function BsCalendarLayoutComponent_bs_current_date_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "bs-current-date", 4);
  }
}
function BsCalendarLayoutComponent_bs_timepicker_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "bs-timepicker");
  }
}
var _c02 = [[["bs-datepicker-navigation-view"]], "*"];
var _c1 = ["bs-datepicker-navigation-view", "*"];
var _c2 = ["bsDatepickerDayDecorator", ""];
function BsDatepickerNavigationViewComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵtext(1, " ​ ");
    ɵɵelementStart(2, "button", 2);
    ɵɵlistener("click", function BsDatepickerNavigationViewComponent_ng_container_3_Template_button_click_2_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.view("month"));
    });
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r0.isDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.calendar.monthTitle);
  }
}
function BsDaysCalendarViewComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th");
  }
}
function BsDaysCalendarViewComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("", ctx_r1.calendar.weekdays[i_r4], " ");
  }
}
function BsDaysCalendarViewComponent_tr_8_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 11);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_1_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r13);
      const week_r5 = ɵɵnextContext(2).$implicit;
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.selectWeek(week_r5));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r6 = ɵɵnextContext(2).index;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r9.calendar.weekNumbers[i_r6]);
  }
}
function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 12);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r17);
      const week_r5 = ɵɵnextContext(2).$implicit;
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.selectWeek(week_r5));
    })("mouseenter", function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template_span_mouseenter_0_listener() {
      ɵɵrestoreView(_r17);
      const week_r5 = ɵɵnextContext(2).$implicit;
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.weekHoverHandler(week_r5, true));
    })("mouseleave", function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template_span_mouseleave_0_listener() {
      ɵɵrestoreView(_r17);
      const week_r5 = ɵɵnextContext(2).$implicit;
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.weekHoverHandler(week_r5, false));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r6 = ɵɵnextContext(2).index;
    const ctx_r10 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r10.calendar.weekNumbers[i_r6]);
  }
}
function BsDaysCalendarViewComponent_tr_8_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 8);
    ɵɵtemplate(1, BsDaysCalendarViewComponent_tr_8_td_1_span_1_Template, 2, 1, "span", 9)(2, BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template, 2, 1, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵclassProp("active-week", ctx_r7.isWeekHovered);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.isiOS);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r7.isiOS);
  }
}
function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 17);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r29);
      const day_r23 = ɵɵnextContext().$implicit;
      const ctx_r27 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r27.selectDay(day_r23));
    })("mouseenter", function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template_span_mouseenter_0_listener() {
      ɵɵrestoreView(_r29);
      const day_r23 = ɵɵnextContext().$implicit;
      const ctx_r30 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r30.hoverDay(day_r23, true));
    })("mouseleave", function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template_span_mouseleave_0_listener() {
      ɵɵrestoreView(_r29);
      const day_r23 = ɵɵnextContext().$implicit;
      const ctx_r32 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r32.hoverDay(day_r23, false));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r23 = ɵɵnextContext().$implicit;
    ɵɵpropertyInterpolate("tooltip", day_r23.tooltipText);
    ɵɵproperty("day", day_r23);
    ɵɵadvance();
    ɵɵtextInterpolate1("", day_r23.label, " 3");
  }
}
function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 18);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r37);
      const day_r23 = ɵɵnextContext().$implicit;
      const ctx_r35 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r35.selectDay(day_r23));
    })("mouseenter", function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template_span_mouseenter_0_listener() {
      ɵɵrestoreView(_r37);
      const day_r23 = ɵɵnextContext().$implicit;
      const ctx_r38 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r38.hoverDay(day_r23, true));
    })("mouseleave", function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template_span_mouseleave_0_listener() {
      ɵɵrestoreView(_r37);
      const day_r23 = ɵɵnextContext().$implicit;
      const ctx_r40 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r40.hoverDay(day_r23, false));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r23 = ɵɵnextContext().$implicit;
    ɵɵproperty("day", day_r23);
    ɵɵadvance();
    ɵɵtextInterpolate1("", day_r23.label, " 2");
  }
}
function BsDaysCalendarViewComponent_tr_8_td_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 19);
    ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_2_span_3_Template_span_click_0_listener() {
      ɵɵrestoreView(_r45);
      const day_r23 = ɵɵnextContext().$implicit;
      const ctx_r43 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r43.selectDay(day_r23));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r23 = ɵɵnextContext().$implicit;
    ɵɵproperty("day", day_r23);
    ɵɵadvance();
    ɵɵtextInterpolate1("", day_r23.label, " 1");
  }
}
function BsDaysCalendarViewComponent_tr_8_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtemplate(1, BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template, 2, 3, "span", 14)(2, BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template, 2, 2, "span", 15)(3, BsDaysCalendarViewComponent_tr_8_td_2_span_3_Template, 2, 2, "span", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r8.isiOS && ctx_r8.isShowTooltip);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r8.isiOS && !ctx_r8.isShowTooltip);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r8.isiOS);
  }
}
function BsDaysCalendarViewComponent_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, BsDaysCalendarViewComponent_tr_8_td_1_Template, 3, 4, "td", 6)(2, BsDaysCalendarViewComponent_tr_8_td_2_Template, 4, 3, "td", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.options && ctx_r2.options.showWeekNumbers);
    ɵɵadvance();
    ɵɵproperty("ngForOf", week_r5.days);
  }
}
function BsMonthCalendarViewComponent_tr_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 4);
    ɵɵlistener("click", function BsMonthCalendarViewComponent_tr_4_td_1_Template_td_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const month_r3 = restoredCtx.$implicit;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.viewMonth(month_r3));
    })("mouseenter", function BsMonthCalendarViewComponent_tr_4_td_1_Template_td_mouseenter_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const month_r3 = restoredCtx.$implicit;
      const ctx_r6 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r6.hoverMonth(month_r3, true));
    })("mouseleave", function BsMonthCalendarViewComponent_tr_4_td_1_Template_td_mouseleave_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const month_r3 = restoredCtx.$implicit;
      const ctx_r7 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r7.hoverMonth(month_r3, false));
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const month_r3 = ctx.$implicit;
    ɵɵclassProp("disabled", month_r3.isDisabled)("is-highlighted", month_r3.isHovered);
    ɵɵadvance();
    ɵɵclassProp("selected", month_r3.isSelected);
    ɵɵadvance();
    ɵɵtextInterpolate(month_r3.label);
  }
}
function BsMonthCalendarViewComponent_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, BsMonthCalendarViewComponent_tr_4_td_1_Template, 3, 7, "td", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", row_r1);
  }
}
function BsYearsCalendarViewComponent_tr_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 4);
    ɵɵlistener("click", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const year_r3 = restoredCtx.$implicit;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.viewYear(year_r3));
    })("mouseenter", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_mouseenter_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const year_r3 = restoredCtx.$implicit;
      const ctx_r6 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r6.hoverYear(year_r3, true));
    })("mouseleave", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_mouseleave_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const year_r3 = restoredCtx.$implicit;
      const ctx_r7 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r7.hoverYear(year_r3, false));
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    ɵɵclassProp("disabled", year_r3.isDisabled)("is-highlighted", year_r3.isHovered);
    ɵɵadvance();
    ɵɵclassProp("selected", year_r3.isSelected);
    ɵɵadvance();
    ɵɵtextInterpolate(year_r3.label);
  }
}
function BsYearsCalendarViewComponent_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, BsYearsCalendarViewComponent_tr_4_td_1_Template, 3, 7, "td", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", row_r1);
  }
}
var _c3 = ["startTP"];
function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-days-calendar-view", 11);
    ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r10.navigateTo($event));
    })("onViewMode", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r12 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r12.setViewMode($event));
    })("onHover", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r13 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r13.dayHoverHandler($event));
    })("onHoverWeek", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r14 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r14.weekHoverHandler($event));
    })("onSelect", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r15 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r15.daySelectHandler($event));
    });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r9 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
    ɵɵproperty("calendar", calendar_r9)("isDisabled", ctx_r7.isDatePickerDisabled)("options", ɵɵpipeBind1(1, 5, ctx_r7.options$));
  }
}
function BsDatepickerContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "timepicker", 13, 16);
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ctx_r17.isDatePickerDisabled);
  }
}
function BsDatepickerContainerComponent_div_0_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "timepicker", 13, 14);
    ɵɵtemplate(3, BsDatepickerContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template, 2, 1, "timepicker", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r8.isDatePickerDisabled);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r8.isRangePicker);
  }
}
function BsDatepickerContainerComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8);
    ɵɵtemplate(2, BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template, 2, 7, "bs-days-calendar-view", 9);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵtemplate(4, BsDatepickerContainerComponent_div_0_ng_container_4_div_4_Template, 4, 2, "div", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 2, ctx_r1.daysCalendar$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.withTimepicker);
  }
}
function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-month-calendar-view", 18);
    ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r21 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r21.navigateTo($event));
    })("onViewMode", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r23 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r23.setViewMode($event));
    })("onHover", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r24 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r24.monthHoverHandler($event));
    })("onSelect", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r25 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r25.monthSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r20 = ctx.$implicit;
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r19.multipleCalendars);
    ɵɵproperty("calendar", calendar_r20);
  }
}
function BsDatepickerContainerComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
  }
}
function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-years-calendar-view", 18);
    ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r28 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r28.navigateTo($event));
    })("onViewMode", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r30 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r30.setViewMode($event));
    })("onHover", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r31 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r31.yearHoverHandler($event));
    })("onSelect", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r32 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r32.yearSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r27 = ctx.$implicit;
    const ctx_r26 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r26.multipleCalendars);
    ɵɵproperty("calendar", calendar_r27);
  }
}
function BsDatepickerContainerComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
  }
}
function BsDatepickerContainerComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "button", 20);
    ɵɵtext(2, "Apply");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 21);
    ɵɵtext(4, "Cancel");
    ɵɵelementEnd()();
  }
}
function BsDatepickerContainerComponent_div_0_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24)(1, "button", 25);
    ɵɵlistener("click", function BsDatepickerContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r36);
      const ctx_r35 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r35.setToday());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(3);
    ɵɵclassProp("today-left", ctx_r33.todayPos === "left")("today-right", ctx_r33.todayPos === "right")("today-center", ctx_r33.todayPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r33.todayBtnLbl);
  }
}
function BsDatepickerContainerComponent_div_0_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26)(1, "button", 25);
    ɵɵlistener("click", function BsDatepickerContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r37.clearDate());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(3);
    ɵɵclassProp("clear-left", ctx_r34.clearPos === "left")("clear-right", ctx_r34.clearPos === "right")("clear-center", ctx_r34.clearPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r34.clearBtnLbl);
  }
}
function BsDatepickerContainerComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 22)(2, BsDatepickerContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.showClearBtn);
  }
}
function BsDatepickerContainerComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "bs-custom-date-view", 28);
    ɵɵlistener("onSelect", function BsDatepickerContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      ɵɵrestoreView(_r40);
      const ctx_r39 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r39.setRangeOnCalendar($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
  }
}
function BsDatepickerContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "div", 2);
    ɵɵlistener("@datepickerAnimation.done", function BsDatepickerContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() {
      ɵɵrestoreView(_r42);
      const ctx_r41 = ɵɵnextContext();
      return ɵɵresetView(ctx_r41.positionServiceEnable());
    });
    ɵɵelementStart(2, "div", 3);
    ɵɵpipe(3, "async");
    ɵɵtemplate(4, BsDatepickerContainerComponent_div_0_ng_container_4_Template, 5, 4, "ng-container", 4)(5, BsDatepickerContainerComponent_div_0_div_5_Template, 3, 3, "div", 5)(6, BsDatepickerContainerComponent_div_0_div_6_Template, 3, 3, "div", 5);
    ɵɵelementEnd();
    ɵɵtemplate(7, BsDatepickerContainerComponent_div_0_div_7_Template, 5, 0, "div", 6)(8, BsDatepickerContainerComponent_div_0_div_8_Template, 3, 2, "div", 6);
    ɵɵelementEnd();
    ɵɵtemplate(9, BsDatepickerContainerComponent_div_0_div_9_Template, 2, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.containerClass);
    ɵɵadvance();
    ɵɵproperty("@datepickerAnimation", ctx_r0.animationState);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", ɵɵpipeBind1(3, 9, ctx_r0.viewMode));
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "day");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "month");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "year");
    ɵɵadvance();
    ɵɵproperty("ngIf", false);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showTodayBtn || ctx_r0.showClearBtn);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.customRanges && ctx_r0.customRanges.length > 0);
  }
}
function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-days-calendar-view", 11);
    ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r10.navigateTo($event));
    })("onViewMode", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r12 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r12.setViewMode($event));
    })("onHover", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r13 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r13.dayHoverHandler($event));
    })("onHoverWeek", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r14 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r14.weekHoverHandler($event));
    })("onSelect", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r15 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r15.daySelectHandler($event));
    });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r9 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
    ɵɵproperty("calendar", calendar_r9)("isDisabled", ctx_r7.isDatePickerDisabled)("options", ɵɵpipeBind1(1, 5, ctx_r7.options$));
  }
}
function BsDatepickerInlineContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "timepicker", 13, 16);
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ctx_r17.isDatePickerDisabled);
  }
}
function BsDatepickerInlineContainerComponent_div_0_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "timepicker", 13, 14);
    ɵɵtemplate(3, BsDatepickerInlineContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template, 2, 1, "timepicker", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r8.isDatePickerDisabled);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r8.isRangePicker);
  }
}
function BsDatepickerInlineContainerComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8);
    ɵɵtemplate(2, BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template, 2, 7, "bs-days-calendar-view", 9);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵtemplate(4, BsDatepickerInlineContainerComponent_div_0_ng_container_4_div_4_Template, 4, 2, "div", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 2, ctx_r1.daysCalendar$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.withTimepicker);
  }
}
function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-month-calendar-view", 18);
    ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r21 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r21.navigateTo($event));
    })("onViewMode", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r23 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r23.setViewMode($event));
    })("onHover", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r24 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r24.monthHoverHandler($event));
    })("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r25 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r25.monthSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r20 = ctx.$implicit;
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r19.multipleCalendars);
    ɵɵproperty("calendar", calendar_r20);
  }
}
function BsDatepickerInlineContainerComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
  }
}
function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-years-calendar-view", 18);
    ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r28 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r28.navigateTo($event));
    })("onViewMode", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r30 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r30.setViewMode($event));
    })("onHover", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r31 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r31.yearHoverHandler($event));
    })("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r32 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r32.yearSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r27 = ctx.$implicit;
    const ctx_r26 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r26.multipleCalendars);
    ɵɵproperty("calendar", calendar_r27);
  }
}
function BsDatepickerInlineContainerComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
  }
}
function BsDatepickerInlineContainerComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "button", 20);
    ɵɵtext(2, "Apply");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 21);
    ɵɵtext(4, "Cancel");
    ɵɵelementEnd()();
  }
}
function BsDatepickerInlineContainerComponent_div_0_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24)(1, "button", 25);
    ɵɵlistener("click", function BsDatepickerInlineContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r36);
      const ctx_r35 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r35.setToday());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(3);
    ɵɵclassProp("today-left", ctx_r33.todayPos === "left")("today-right", ctx_r33.todayPos === "right")("today-center", ctx_r33.todayPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r33.todayBtnLbl);
  }
}
function BsDatepickerInlineContainerComponent_div_0_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26)(1, "button", 25);
    ɵɵlistener("click", function BsDatepickerInlineContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r37.clearDate());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(3);
    ɵɵclassProp("clear-left", ctx_r34.clearPos === "left")("clear-right", ctx_r34.clearPos === "right")("clear-center", ctx_r34.clearPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r34.clearBtnLbl);
  }
}
function BsDatepickerInlineContainerComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 22)(2, BsDatepickerInlineContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.showClearBtn);
  }
}
function BsDatepickerInlineContainerComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "bs-custom-date-view", 28);
    ɵɵlistener("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      ɵɵrestoreView(_r40);
      const ctx_r39 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r39.setRangeOnCalendar($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
  }
}
function BsDatepickerInlineContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "div", 2);
    ɵɵlistener("@datepickerAnimation.done", function BsDatepickerInlineContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() {
      ɵɵrestoreView(_r42);
      const ctx_r41 = ɵɵnextContext();
      return ɵɵresetView(ctx_r41.positionServiceEnable());
    });
    ɵɵelementStart(2, "div", 3);
    ɵɵpipe(3, "async");
    ɵɵtemplate(4, BsDatepickerInlineContainerComponent_div_0_ng_container_4_Template, 5, 4, "ng-container", 4)(5, BsDatepickerInlineContainerComponent_div_0_div_5_Template, 3, 3, "div", 5)(6, BsDatepickerInlineContainerComponent_div_0_div_6_Template, 3, 3, "div", 5);
    ɵɵelementEnd();
    ɵɵtemplate(7, BsDatepickerInlineContainerComponent_div_0_div_7_Template, 5, 0, "div", 6)(8, BsDatepickerInlineContainerComponent_div_0_div_8_Template, 3, 2, "div", 6);
    ɵɵelementEnd();
    ɵɵtemplate(9, BsDatepickerInlineContainerComponent_div_0_div_9_Template, 2, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.containerClass);
    ɵɵadvance();
    ɵɵproperty("@datepickerAnimation", ctx_r0.animationState);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", ɵɵpipeBind1(3, 9, ctx_r0.viewMode));
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "day");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "month");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "year");
    ɵɵadvance();
    ɵɵproperty("ngIf", false);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showTodayBtn || ctx_r0.showClearBtn);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.customRanges && ctx_r0.customRanges.length > 0);
  }
}
var _c4 = ["endTP"];
function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-days-calendar-view", 11);
    ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r10.navigateTo($event));
    })("onViewMode", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r12 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r12.setViewMode($event));
    })("onHover", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r13 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r13.dayHoverHandler($event));
    })("onHoverWeek", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r14 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r14.weekHoverHandler($event));
    })("onSelect", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r15 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r15.daySelectHandler($event));
    });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r9 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
    ɵɵproperty("calendar", calendar_r9)("isDisabled", ctx_r7.isDatePickerDisabled)("options", ɵɵpipeBind1(1, 5, ctx_r7.options$));
  }
}
function BsDaterangepickerContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "timepicker", 13, 16);
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ctx_r17.isDatePickerDisabled);
  }
}
function BsDaterangepickerContainerComponent_div_0_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "timepicker", 13, 14);
    ɵɵtemplate(3, BsDaterangepickerContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template, 2, 1, "timepicker", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r8.isDatePickerDisabled);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r8.isRangePicker);
  }
}
function BsDaterangepickerContainerComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8);
    ɵɵtemplate(2, BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template, 2, 7, "bs-days-calendar-view", 9);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵtemplate(4, BsDaterangepickerContainerComponent_div_0_ng_container_4_div_4_Template, 4, 2, "div", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 2, ctx_r1.daysCalendar$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.withTimepicker);
  }
}
function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-month-calendar-view", 18);
    ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r21 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r21.navigateTo($event));
    })("onViewMode", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r23 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r23.setViewMode($event));
    })("onHover", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r24 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r24.monthHoverHandler($event));
    })("onSelect", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r25 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r25.monthSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r20 = ctx.$implicit;
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r19.multipleCalendars);
    ɵɵproperty("calendar", calendar_r20);
  }
}
function BsDaterangepickerContainerComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
  }
}
function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-years-calendar-view", 18);
    ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r28 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r28.navigateTo($event));
    })("onViewMode", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r30 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r30.setViewMode($event));
    })("onHover", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r31 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r31.yearHoverHandler($event));
    })("onSelect", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r32 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r32.yearSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r27 = ctx.$implicit;
    const ctx_r26 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r26.multipleCalendars);
    ɵɵproperty("calendar", calendar_r27);
  }
}
function BsDaterangepickerContainerComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
  }
}
function BsDaterangepickerContainerComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "button", 20);
    ɵɵtext(2, "Apply");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 21);
    ɵɵtext(4, "Cancel");
    ɵɵelementEnd()();
  }
}
function BsDaterangepickerContainerComponent_div_0_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24)(1, "button", 25);
    ɵɵlistener("click", function BsDaterangepickerContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r36);
      const ctx_r35 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r35.setToday());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(3);
    ɵɵclassProp("today-left", ctx_r33.todayPos === "left")("today-right", ctx_r33.todayPos === "right")("today-center", ctx_r33.todayPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r33.todayBtnLbl);
  }
}
function BsDaterangepickerContainerComponent_div_0_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26)(1, "button", 25);
    ɵɵlistener("click", function BsDaterangepickerContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r37.clearDate());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(3);
    ɵɵclassProp("clear-left", ctx_r34.clearPos === "left")("clear-right", ctx_r34.clearPos === "right")("clear-center", ctx_r34.clearPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r34.clearBtnLbl);
  }
}
function BsDaterangepickerContainerComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 22)(2, BsDaterangepickerContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.showClearBtn);
  }
}
function BsDaterangepickerContainerComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "bs-custom-date-view", 28);
    ɵɵlistener("onSelect", function BsDaterangepickerContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      ɵɵrestoreView(_r40);
      const ctx_r39 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r39.setRangeOnCalendar($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
  }
}
function BsDaterangepickerContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "div", 2);
    ɵɵlistener("@datepickerAnimation.done", function BsDaterangepickerContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() {
      ɵɵrestoreView(_r42);
      const ctx_r41 = ɵɵnextContext();
      return ɵɵresetView(ctx_r41.positionServiceEnable());
    });
    ɵɵelementStart(2, "div", 3);
    ɵɵpipe(3, "async");
    ɵɵtemplate(4, BsDaterangepickerContainerComponent_div_0_ng_container_4_Template, 5, 4, "ng-container", 4)(5, BsDaterangepickerContainerComponent_div_0_div_5_Template, 3, 3, "div", 5)(6, BsDaterangepickerContainerComponent_div_0_div_6_Template, 3, 3, "div", 5);
    ɵɵelementEnd();
    ɵɵtemplate(7, BsDaterangepickerContainerComponent_div_0_div_7_Template, 5, 0, "div", 6)(8, BsDaterangepickerContainerComponent_div_0_div_8_Template, 3, 2, "div", 6);
    ɵɵelementEnd();
    ɵɵtemplate(9, BsDaterangepickerContainerComponent_div_0_div_9_Template, 2, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.containerClass);
    ɵɵadvance();
    ɵɵproperty("@datepickerAnimation", ctx_r0.animationState);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", ɵɵpipeBind1(3, 9, ctx_r0.viewMode));
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "day");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "month");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "year");
    ɵɵadvance();
    ɵɵproperty("ngIf", false);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showTodayBtn || ctx_r0.showClearBtn);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.customRanges && ctx_r0.customRanges.length > 0);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-days-calendar-view", 11);
    ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r10.navigateTo($event));
    })("onViewMode", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r12 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r12.setViewMode($event));
    })("onHover", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r13 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r13.dayHoverHandler($event));
    })("onHoverWeek", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r14 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r14.weekHoverHandler($event));
    })("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r15 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r15.daySelectHandler($event));
    });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r9 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
    ɵɵproperty("calendar", calendar_r9)("isDisabled", ctx_r7.isDatePickerDisabled)("options", ɵɵpipeBind1(1, 5, ctx_r7.options$));
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "timepicker", 13, 16);
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ctx_r17.isDatePickerDisabled);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "timepicker", 13, 14);
    ɵɵtemplate(3, BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template, 2, 1, "timepicker", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r8.isDatePickerDisabled);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r8.isRangePicker);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8);
    ɵɵtemplate(2, BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template, 2, 7, "bs-days-calendar-view", 9);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵtemplate(4, BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_div_4_Template, 4, 2, "div", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 2, ctx_r1.daysCalendar$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.withTimepicker);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-month-calendar-view", 18);
    ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r21 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r21.navigateTo($event));
    })("onViewMode", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r23 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r23.setViewMode($event));
    })("onHover", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r24 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r24.monthHoverHandler($event));
    })("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r25 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r25.monthSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r20 = ctx.$implicit;
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r19.multipleCalendars);
    ɵɵproperty("calendar", calendar_r20);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bs-years-calendar-view", 18);
    ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r28 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r28.navigateTo($event));
    })("onViewMode", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r30 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r30.setViewMode($event));
    })("onHover", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r31 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r31.yearHoverHandler($event));
    })("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r32 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r32.yearSelectHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const calendar_r27 = ctx.$implicit;
    const ctx_r26 = ɵɵnextContext(3);
    ɵɵclassProp("bs-datepicker-multiple", ctx_r26.multipleCalendars);
    ɵɵproperty("calendar", calendar_r27);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "button", 20);
    ɵɵtext(2, "Apply");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 21);
    ɵɵtext(4, "Cancel");
    ɵɵelementEnd()();
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24)(1, "button", 25);
    ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r36);
      const ctx_r35 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r35.setToday());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(3);
    ɵɵclassProp("today-left", ctx_r33.todayPos === "left")("today-right", ctx_r33.todayPos === "right")("today-center", ctx_r33.todayPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r33.todayBtnLbl);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26)(1, "button", 25);
    ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r37.clearDate());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(3);
    ɵɵclassProp("clear-left", ctx_r34.clearPos === "left")("clear-right", ctx_r34.clearPos === "right")("clear-center", ctx_r34.clearPos === "center");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r34.clearBtnLbl);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 22)(2, BsDaterangepickerInlineContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.showClearBtn);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "bs-custom-date-view", 28);
    ɵɵlistener("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      ɵɵrestoreView(_r40);
      const ctx_r39 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r39.setRangeOnCalendar($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
  }
}
function BsDaterangepickerInlineContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "div", 2);
    ɵɵlistener("@datepickerAnimation.done", function BsDaterangepickerInlineContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() {
      ɵɵrestoreView(_r42);
      const ctx_r41 = ɵɵnextContext();
      return ɵɵresetView(ctx_r41.positionServiceEnable());
    });
    ɵɵelementStart(2, "div", 3);
    ɵɵpipe(3, "async");
    ɵɵtemplate(4, BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_Template, 5, 4, "ng-container", 4)(5, BsDaterangepickerInlineContainerComponent_div_0_div_5_Template, 3, 3, "div", 5)(6, BsDaterangepickerInlineContainerComponent_div_0_div_6_Template, 3, 3, "div", 5);
    ɵɵelementEnd();
    ɵɵtemplate(7, BsDaterangepickerInlineContainerComponent_div_0_div_7_Template, 5, 0, "div", 6)(8, BsDaterangepickerInlineContainerComponent_div_0_div_8_Template, 3, 2, "div", 6);
    ɵɵelementEnd();
    ɵɵtemplate(9, BsDaterangepickerInlineContainerComponent_div_0_div_9_Template, 2, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.containerClass);
    ɵɵadvance();
    ɵɵproperty("@datepickerAnimation", ctx_r0.animationState);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", ɵɵpipeBind1(3, 9, ctx_r0.viewMode));
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "day");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "month");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "year");
    ɵɵadvance();
    ɵɵproperty("ngIf", false);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showTodayBtn || ctx_r0.showClearBtn);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.customRanges && ctx_r0.customRanges.length > 0);
  }
}
var _BsDatepickerConfig = class _BsDatepickerConfig {
  constructor() {
    this.adaptivePosition = false;
    this.useUtc = false;
    this.isAnimated = false;
    this.startView = "day";
    this.returnFocusToInput = false;
    this.containerClass = "theme-green";
    this.displayMonths = 1;
    this.showWeekNumbers = true;
    this.dateInputFormat = "L";
    this.rangeSeparator = " - ";
    this.rangeInputFormat = "L";
    this.monthTitle = "MMMM";
    this.yearTitle = "YYYY";
    this.dayLabel = "D";
    this.monthLabel = "MMMM";
    this.yearLabel = "YYYY";
    this.weekNumbers = "w";
    this.showTodayButton = false;
    this.showClearButton = false;
    this.todayPosition = "center";
    this.clearPosition = "right";
    this.todayButtonLabel = "Today";
    this.clearButtonLabel = "Clear";
    this.customRangeButtonLabel = "Custom Range";
    this.withTimepicker = false;
    this.allowedPositions = ["top", "bottom"];
    this.keepDatepickerOpened = false;
    this.keepDatesOutOfRules = false;
  }
};
_BsDatepickerConfig.ɵfac = function BsDatepickerConfig_Factory(t) {
  return new (t || _BsDatepickerConfig)();
};
_BsDatepickerConfig.ɵprov = ɵɵdefineInjectable({
  token: _BsDatepickerConfig,
  factory: _BsDatepickerConfig.ɵfac,
  providedIn: "root"
});
var BsDatepickerConfig = _BsDatepickerConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DATEPICKER_ANIMATION_TIMING = "220ms cubic-bezier(0, 0, 0.2, 1)";
var datepickerAnimation = trigger("datepickerAnimation", [state("animated-down", style({
  height: "*",
  overflow: "hidden"
})), transition("* => animated-down", [style({
  height: 0,
  overflow: "hidden"
}), animate(DATEPICKER_ANIMATION_TIMING)]), state("animated-up", style({
  height: "*",
  overflow: "hidden"
})), transition("* => animated-up", [style({
  height: "*",
  overflow: "hidden"
}), animate(DATEPICKER_ANIMATION_TIMING)]), transition("* => unanimated", animate("0s"))]);
var BsDatepickerAbstractComponent = class {
  constructor() {
    this.containerClass = "";
    this.customRanges = [];
    this.chosenRange = [];
    this._daysCalendarSub = new Subscription();
    this.selectedTimeSub = new Subscription();
  }
  set minDate(value) {
    this._effects?.setMinDate(value);
  }
  set maxDate(value) {
    this._effects?.setMaxDate(value);
  }
  set daysDisabled(value) {
    this._effects?.setDaysDisabled(value);
  }
  set datesDisabled(value) {
    this._effects?.setDatesDisabled(value);
  }
  set datesEnabled(value) {
    this._effects?.setDatesEnabled(value);
  }
  set isDisabled(value) {
    this._effects?.setDisabled(value);
  }
  set dateCustomClasses(value) {
    this._effects?.setDateCustomClasses(value);
  }
  set dateTooltipTexts(value) {
    this._effects?.setDateTooltipTexts(value);
  }
  set daysCalendar$(value) {
    this._daysCalendar$ = value;
    this._daysCalendarSub.unsubscribe();
    this._daysCalendarSub.add(this._daysCalendar$.subscribe((value2) => {
      this.multipleCalendars = !!value2 && value2.length > 1;
    }));
  }
  get daysCalendar$() {
    return this._daysCalendar$;
  }
  // todo: valorkin fix
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  setViewMode(event) {
  }
  // eslint-disable-next-line
  navigateTo(event) {
  }
  // eslint-disable-next-line
  dayHoverHandler(event) {
  }
  // eslint-disable-next-line
  weekHoverHandler(event) {
  }
  // eslint-disable-next-line
  monthHoverHandler(event) {
  }
  // eslint-disable-next-line
  yearHoverHandler(event) {
  }
  // eslint-disable-next-line
  timeSelectHandler(date, index) {
  }
  // eslint-disable-next-line
  daySelectHandler(day) {
  }
  // eslint-disable-next-line
  monthSelectHandler(event) {
  }
  // eslint-disable-next-line
  yearSelectHandler(event) {
  }
  // eslint-disable-next-line
  setRangeOnCalendar(dates) {
  }
  // eslint-disable-next-line
  setToday() {
  }
  // eslint-disable-next-line
  clearDate() {
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _stopPropagation(event) {
    event.stopPropagation();
  }
};
var _BsDatepickerActions = class _BsDatepickerActions {
  calculate() {
    return {
      type: _BsDatepickerActions.CALCULATE
    };
  }
  format() {
    return {
      type: _BsDatepickerActions.FORMAT
    };
  }
  flag() {
    return {
      type: _BsDatepickerActions.FLAG
    };
  }
  select(date) {
    return {
      type: _BsDatepickerActions.SELECT,
      payload: date
    };
  }
  selectTime(date, index) {
    return {
      type: _BsDatepickerActions.SELECT_TIME,
      payload: {
        date,
        index
      }
    };
  }
  changeViewMode(event) {
    return {
      type: _BsDatepickerActions.CHANGE_VIEWMODE,
      payload: event
    };
  }
  navigateTo(event) {
    return {
      type: _BsDatepickerActions.NAVIGATE_TO,
      payload: event
    };
  }
  navigateStep(step) {
    return {
      type: _BsDatepickerActions.NAVIGATE_OFFSET,
      payload: step
    };
  }
  setOptions(options) {
    return {
      type: _BsDatepickerActions.SET_OPTIONS,
      payload: options
    };
  }
  // date range picker
  selectRange(value) {
    return {
      type: _BsDatepickerActions.SELECT_RANGE,
      payload: value
    };
  }
  hoverDay(event) {
    return {
      type: _BsDatepickerActions.HOVER,
      payload: event.isHovered ? event.cell.date : null
    };
  }
  minDate(date) {
    return {
      type: _BsDatepickerActions.SET_MIN_DATE,
      payload: date
    };
  }
  maxDate(date) {
    return {
      type: _BsDatepickerActions.SET_MAX_DATE,
      payload: date
    };
  }
  daysDisabled(days) {
    return {
      type: _BsDatepickerActions.SET_DAYSDISABLED,
      payload: days
    };
  }
  datesDisabled(dates) {
    return {
      type: _BsDatepickerActions.SET_DATESDISABLED,
      payload: dates
    };
  }
  datesEnabled(dates) {
    return {
      type: _BsDatepickerActions.SET_DATESENABLED,
      payload: dates
    };
  }
  isDisabled(value) {
    return {
      type: _BsDatepickerActions.SET_IS_DISABLED,
      payload: value
    };
  }
  setDateCustomClasses(value) {
    return {
      type: _BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
      payload: value
    };
  }
  setDateTooltipTexts(value) {
    return {
      type: _BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS,
      payload: value
    };
  }
  setLocale(locale) {
    return {
      type: _BsDatepickerActions.SET_LOCALE,
      payload: locale
    };
  }
};
_BsDatepickerActions.CALCULATE = "[datepicker] calculate dates matrix";
_BsDatepickerActions.FORMAT = "[datepicker] format datepicker values";
_BsDatepickerActions.FLAG = "[datepicker] set flags";
_BsDatepickerActions.SELECT = "[datepicker] select date";
_BsDatepickerActions.NAVIGATE_OFFSET = "[datepicker] shift view date";
_BsDatepickerActions.NAVIGATE_TO = "[datepicker] change view date";
_BsDatepickerActions.SET_OPTIONS = "[datepicker] update render options";
_BsDatepickerActions.HOVER = "[datepicker] hover date";
_BsDatepickerActions.CHANGE_VIEWMODE = "[datepicker] switch view mode";
_BsDatepickerActions.SET_MIN_DATE = "[datepicker] set min date";
_BsDatepickerActions.SET_MAX_DATE = "[datepicker] set max date";
_BsDatepickerActions.SET_DAYSDISABLED = "[datepicker] set days disabled";
_BsDatepickerActions.SET_DATESDISABLED = "[datepicker] set dates disabled";
_BsDatepickerActions.SET_DATESENABLED = "[datepicker] set dates enabled";
_BsDatepickerActions.SET_IS_DISABLED = "[datepicker] set is disabled";
_BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = "[datepicker] set date custom classes";
_BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS = "[datepicker] set date tooltip texts";
_BsDatepickerActions.SET_LOCALE = "[datepicker] set datepicker locale";
_BsDatepickerActions.SELECT_TIME = "[datepicker] select time";
_BsDatepickerActions.SELECT_RANGE = "[daterangepicker] select dates range";
_BsDatepickerActions.ɵfac = function BsDatepickerActions_Factory(t) {
  return new (t || _BsDatepickerActions)();
};
_BsDatepickerActions.ɵprov = ɵɵdefineInjectable({
  token: _BsDatepickerActions,
  factory: _BsDatepickerActions.ɵfac,
  providedIn: "platform"
});
var BsDatepickerActions = _BsDatepickerActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerActions, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var _BsLocaleService = class _BsLocaleService {
  constructor() {
    this._defaultLocale = "en";
    this._locale = new BehaviorSubject(this._defaultLocale);
    this._localeChange = this._locale.asObservable();
  }
  get locale() {
    return this._locale;
  }
  get localeChange() {
    return this._localeChange;
  }
  get currentLocale() {
    return this._locale.getValue();
  }
  use(locale) {
    if (locale === this.currentLocale) {
      return;
    }
    this._locale.next(locale);
  }
};
_BsLocaleService.ɵfac = function BsLocaleService_Factory(t) {
  return new (t || _BsLocaleService)();
};
_BsLocaleService.ɵprov = ɵɵdefineInjectable({
  token: _BsLocaleService,
  factory: _BsLocaleService.ɵfac,
  providedIn: "platform"
});
var BsLocaleService = _BsLocaleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsLocaleService, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var _BsDatepickerEffects = class _BsDatepickerEffects {
  constructor(_actions, _localeService) {
    this._actions = _actions;
    this._localeService = _localeService;
    this._subs = [];
  }
  init(_bsDatepickerStore) {
    this._store = _bsDatepickerStore;
    return this;
  }
  /** setters */
  setValue(value) {
    this._store?.dispatch(this._actions.select(value));
  }
  setRangeValue(value) {
    this._store?.dispatch(this._actions.selectRange(value));
  }
  setMinDate(value) {
    this._store?.dispatch(this._actions.minDate(value));
    return this;
  }
  setMaxDate(value) {
    this._store?.dispatch(this._actions.maxDate(value));
    return this;
  }
  setDaysDisabled(value) {
    this._store?.dispatch(this._actions.daysDisabled(value));
    return this;
  }
  setDatesDisabled(value) {
    this._store?.dispatch(this._actions.datesDisabled(value));
    return this;
  }
  setDatesEnabled(value) {
    this._store?.dispatch(this._actions.datesEnabled(value));
    return this;
  }
  setDisabled(value) {
    this._store?.dispatch(this._actions.isDisabled(value));
    return this;
  }
  setDateCustomClasses(value) {
    this._store?.dispatch(this._actions.setDateCustomClasses(value));
    return this;
  }
  setDateTooltipTexts(value) {
    this._store?.dispatch(this._actions.setDateTooltipTexts(value));
    return this;
  }
  /* Set rendering options */
  setOptions(_config) {
    const _options = Object.assign({
      locale: this._localeService.currentLocale
    }, _config);
    this._store?.dispatch(this._actions.setOptions(_options));
    return this;
  }
  /** view to mode bindings */
  setBindings(container) {
    if (!this._store) {
      return this;
    }
    container.selectedTime = this._store.select((state2) => state2.selectedTime).pipe(filter((times) => !!times));
    container.daysCalendar$ = this._store.select((state2) => state2.flaggedMonths).pipe(filter((months2) => !!months2));
    container.monthsCalendar = this._store.select((state2) => state2.flaggedMonthsCalendar).pipe(filter((months2) => !!months2));
    container.yearsCalendar = this._store.select((state2) => state2.yearsCalendarFlagged).pipe(filter((years) => !!years));
    container.viewMode = this._store.select((state2) => state2.view?.mode);
    container.options$ = combineLatest([this._store.select((state2) => state2.showWeekNumbers), this._store.select((state2) => state2.displayMonths)]).pipe(map((latest) => ({
      showWeekNumbers: latest[0],
      displayMonths: latest[1]
    })));
    return this;
  }
  /** event handlers */
  setEventHandlers(container) {
    container.setViewMode = (event) => {
      this._store?.dispatch(this._actions.changeViewMode(event));
    };
    container.navigateTo = (event) => {
      this._store?.dispatch(this._actions.navigateStep(event.step));
    };
    container.dayHoverHandler = (event) => {
      const _cell = event.cell;
      if (_cell.isOtherMonth || _cell.isDisabled) {
        return;
      }
      this._store?.dispatch(this._actions.hoverDay(event));
      _cell.isHovered = event.isHovered;
    };
    container.monthHoverHandler = (event) => {
      event.cell.isHovered = event.isHovered;
    };
    container.yearHoverHandler = (event) => {
      event.cell.isHovered = event.isHovered;
    };
    return this;
  }
  registerDatepickerSideEffects() {
    if (!this._store) {
      return this;
    }
    this._subs.push(this._store.select((state2) => state2.view).subscribe(() => {
      this._store?.dispatch(this._actions.calculate());
    }));
    this._subs.push(this._store.select((state2) => state2.monthsModel).pipe(filter((monthModel) => !!monthModel)).subscribe(() => this._store?.dispatch(this._actions.format())));
    this._subs.push(this._store.select((state2) => state2.formattedMonths).pipe(filter((month) => !!month)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.selectedDate).pipe(filter((selectedDate) => !!selectedDate)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.selectedRange).pipe(filter((selectedRange) => !!selectedRange)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.monthsCalendar).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.yearsCalendarModel).pipe(filter((state2) => !!state2)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.hoveredDate).pipe(filter((hoveredDate) => !!hoveredDate)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.dateCustomClasses).pipe(filter((dateCustomClasses) => !!dateCustomClasses)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.dateTooltipTexts).pipe(filter((dateTooltipTexts) => !!dateTooltipTexts)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._localeService.localeChange.subscribe((locale) => this._store?.dispatch(this._actions.setLocale(locale))));
    return this;
  }
  destroy() {
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
  }
};
_BsDatepickerEffects.ɵfac = function BsDatepickerEffects_Factory(t) {
  return new (t || _BsDatepickerEffects)(ɵɵinject(BsDatepickerActions), ɵɵinject(BsLocaleService));
};
_BsDatepickerEffects.ɵprov = ɵɵdefineInjectable({
  token: _BsDatepickerEffects,
  factory: _BsDatepickerEffects.ɵfac,
  providedIn: "platform"
});
var BsDatepickerEffects = _BsDatepickerEffects;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerEffects, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [{
    type: BsDatepickerActions
  }, {
    type: BsLocaleService
  }], null);
})();
var defaultMonthOptions = {
  width: 7,
  height: 6
};
var dayInMilliseconds = 24 * 60 * 60 * 1e3;
var _initialView = {
  date: /* @__PURE__ */ new Date(),
  mode: "day"
};
var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
  locale: "en",
  view: _initialView,
  selectedRange: [],
  selectedTime: [],
  monthViewOptions: defaultMonthOptions
});
function getStartingDayOfCalendar(date, options) {
  if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
    return date;
  }
  const weekDay = getDay(date);
  const offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
  return shiftDate(date, {
    day: -offset
  });
}
function calculateDateOffset(weekday, startingDayOffset) {
  const _startingDayOffset = Number(startingDayOffset);
  if (isNaN(_startingDayOffset)) {
    return 0;
  }
  if (_startingDayOffset === 0) {
    return weekday;
  }
  const offset = weekday - _startingDayOffset % 7;
  return offset < 0 ? offset + 7 : offset;
}
function isMonthDisabled(date, min, max) {
  const minBound = min && isBefore(endOf(date, "month"), min, "day");
  const maxBound = max && isAfter(startOf(date, "month"), max, "day");
  return minBound || maxBound || false;
}
function isYearDisabled(date, min, max) {
  const minBound = min && isBefore(endOf(date, "year"), min, "day");
  const maxBound = max && isAfter(startOf(date, "year"), max, "day");
  return minBound || maxBound || false;
}
function isDisabledDate(date, datesDisabled, unit) {
  if (!datesDisabled || !isArray(datesDisabled) || !datesDisabled.length) {
    return false;
  }
  if (unit && unit === "year" && !datesDisabled[0].getDate()) {
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, "year"));
  }
  return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, "date"));
}
function isEnabledDate(date, datesEnabled, unit) {
  if (!datesEnabled || !isArray(datesEnabled) || !datesEnabled.length) {
    return false;
  }
  return !datesEnabled.some((enabledDate) => isSame(date, enabledDate, unit || "date"));
}
function getYearsCalendarInitialDate(state2, calendarIndex = 0) {
  const model = state2 && state2.yearsCalendarModel && state2.yearsCalendarModel[calendarIndex];
  return model?.years[0] && model.years[0][0] && model.years[0][0].date;
}
function checkRangesWithMaxDate(ranges, maxDate) {
  if (!ranges)
    return ranges;
  if (!maxDate)
    return ranges;
  if (!ranges.length && !ranges[0].value)
    return ranges;
  ranges.forEach((item) => {
    if (!item || !item.value)
      return ranges;
    if (item.value instanceof Date)
      return ranges;
    if (!(item.value instanceof Array && item.value.length))
      return ranges;
    item.value = compareDateWithMaxDateHelper(item.value, maxDate);
    return ranges;
  });
  return ranges;
}
function checkBsValue(date, maxDate) {
  if (!date)
    return date;
  if (!maxDate)
    return date;
  if (date instanceof Array && !date.length)
    return date;
  if (date instanceof Date)
    return date;
  return compareDateWithMaxDateHelper(date, maxDate);
}
function compareDateWithMaxDateHelper(date, maxDate) {
  if (date instanceof Array) {
    const editedValues = date.map((item) => {
      if (!item)
        return item;
      if (isAfter(item, maxDate, "date"))
        item = maxDate;
      return item;
    });
    return editedValues;
  }
  return date;
}
function setCurrentTimeOnDateSelect(value) {
  if (!value)
    return value;
  return setCurrentTimeHelper(value);
}
function setDateRangesCurrentTimeOnDateSelect(value) {
  if (!value?.length)
    return value;
  value.map((date) => {
    if (!date) {
      return date;
    }
    return setCurrentTimeHelper(date);
  });
  return value;
}
function setCurrentTimeHelper(date) {
  const now = /* @__PURE__ */ new Date();
  date.setMilliseconds(now.getMilliseconds());
  date.setSeconds(now.getSeconds());
  date.setMinutes(now.getMinutes());
  date.setHours(now.getHours());
  return date;
}
function createMatrix(options, fn) {
  let prevValue = options.initialDate;
  const matrix = new Array(options.height);
  for (let i = 0; i < options.height; i++) {
    matrix[i] = new Array(options.width);
    for (let j = 0; j < options.width; j++) {
      matrix[i][j] = fn(prevValue);
      prevValue = shiftDate(prevValue, options.shift);
    }
  }
  return matrix;
}
function calcDaysCalendar(startingDate, options) {
  const firstDay = getFirstDayOfMonth(startingDate);
  const initialDate = getStartingDayOfCalendar(firstDay, options);
  const matrixOptions = {
    width: options.width || 0,
    height: options.height || 0,
    initialDate,
    shift: {
      day: 1
    }
  };
  const daysMatrix = createMatrix(matrixOptions, (date) => date);
  return {
    daysMatrix,
    month: firstDay
  };
}
function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
  return {
    month: daysCalendar.month,
    monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
    yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
    weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
    weekdays: getShiftedWeekdays(formatOptions.locale),
    weeks: daysCalendar.daysMatrix.map((week2, weekIndex) => ({
      days: week2.map((date, dayIndex) => ({
        date,
        label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
        monthIndex,
        weekIndex,
        dayIndex
      }))
    })),
    hideLeftArrow: false,
    hideRightArrow: false,
    disableLeftArrow: false,
    disableRightArrow: false
  };
}
function getWeekNumbers(daysMatrix, format, locale) {
  return daysMatrix.map((days) => days[0] ? formatDate(days[0], format, locale) : "");
}
function getShiftedWeekdays(locale) {
  const _locale = getLocale(locale);
  const weekdays = _locale.weekdaysShort();
  const firstDayOfWeek = _locale.firstDayOfWeek();
  return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
}
function flagDaysCalendar(formattedMonth, options) {
  formattedMonth.weeks.forEach((week2) => {
    week2.days.forEach((day, dayIndex) => {
      const isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
      const isHovered = !isOtherMonth && isSameDay$1(day.date, options.hoveredDate);
      const isSelectionStart = !isOtherMonth && options.selectedRange && isSameDay$1(day.date, options.selectedRange[0]);
      const isSelectionEnd = !isOtherMonth && options.selectedRange && isSameDay$1(day.date, options.selectedRange[1]);
      const isSelected = !isOtherMonth && isSameDay$1(day.date, options.selectedDate) || isSelectionStart || isSelectionEnd;
      const isInRange = !isOtherMonth && options.selectedRange && isDateInRange(day.date, options.selectedRange, options.hoveredDate);
      const isDisabled = options.isDisabled || isBefore(day.date, options.minDate, "day") || isAfter(day.date, options.maxDate, "day") || isDisabledDay(day.date, options.daysDisabled) || isDisabledDate(day.date, options.datesDisabled) || isEnabledDate(day.date, options.datesEnabled);
      const currentDate = /* @__PURE__ */ new Date();
      const isToday = !isOtherMonth && isSameDay$1(day.date, currentDate);
      const customClasses = options.dateCustomClasses && options.dateCustomClasses.map((dcc) => isSameDay$1(day.date, dcc.date) ? dcc.classes : []).reduce((previousValue, currentValue) => previousValue.concat(currentValue), []).join(" ") || "";
      const tooltipText = options.dateTooltipTexts && options.dateTooltipTexts.map((tt) => isSameDay$1(day.date, tt.date) ? tt.tooltipText : "").reduce((previousValue, currentValue) => {
        previousValue.push(currentValue);
        return previousValue;
      }, []).join(" ") || "";
      const newDay = Object.assign({}, day, {
        isOtherMonth,
        isHovered,
        isSelected,
        isSelectionStart,
        isSelectionEnd,
        isInRange,
        isDisabled,
        isToday,
        customClasses,
        tooltipText
      });
      if (day.isOtherMonth !== newDay.isOtherMonth || day.isHovered !== newDay.isHovered || day.isSelected !== newDay.isSelected || day.isSelectionStart !== newDay.isSelectionStart || day.isSelectionEnd !== newDay.isSelectionEnd || day.isDisabled !== newDay.isDisabled || day.isInRange !== newDay.isInRange || day.customClasses !== newDay.customClasses || day.tooltipText !== newDay.tooltipText) {
        week2.days[dayIndex] = newDay;
      }
    });
  });
  formattedMonth.hideLeftArrow = options.isDisabled || !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
  formattedMonth.hideRightArrow = options.isDisabled || (!!options.monthIndex || options.monthIndex === 0) && !!options.displayMonths && options.monthIndex < options.displayMonths && options.monthIndex + 1 !== options.displayMonths;
  formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, {
    month: -1
  }), options.minDate, options.maxDate);
  formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, {
    month: 1
  }), options.minDate, options.maxDate);
  return formattedMonth;
}
function isDateInRange(date, selectedRange, hoveredDate) {
  if (!date || !selectedRange || !selectedRange[0]) {
    return false;
  }
  if (selectedRange[1]) {
    return date > selectedRange[0] && date <= selectedRange[1];
  }
  if (hoveredDate) {
    return date > selectedRange[0] && date <= hoveredDate;
  }
  return false;
}
function canSwitchMode(mode, minMode) {
  return minMode ? mode >= minMode : true;
}
var height$1 = 4;
var width$1 = 3;
var shift$1 = {
  month: 1
};
function formatMonthsCalendar(viewDate, formatOptions) {
  const initialDate = startOf(viewDate, "year");
  const matrixOptions = {
    width: width$1,
    height: height$1,
    initialDate,
    shift: shift$1
  };
  const monthMatrix = createMatrix(matrixOptions, (date) => ({
    date,
    label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
  }));
  return {
    months: monthMatrix,
    monthTitle: "",
    yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale),
    hideRightArrow: false,
    hideLeftArrow: false,
    disableRightArrow: false,
    disableLeftArrow: false
  };
}
function flagMonthsCalendar(monthCalendar, options) {
  monthCalendar.months.forEach((months2, rowIndex) => {
    months2.forEach((month, monthIndex) => {
      let isSelected;
      const isHovered = isSameMonth(month.date, options.hoveredMonth);
      const isDisabled = options.isDisabled || isDisabledDate(month.date, options.datesDisabled) || isEnabledDate(month.date, options.datesEnabled, "month") || isMonthDisabled(month.date, options.minDate, options.maxDate);
      if (!options.selectedDate && options.selectedRange) {
        isSelected = isSameMonth(month.date, options.selectedRange[0]);
        if (!isSelected) {
          isSelected = isSameMonth(month.date, options.selectedRange[1]);
        }
      } else {
        isSelected = isSameMonth(month.date, options.selectedDate);
      }
      const newMonth = Object.assign(
        /*{},*/
        month,
        {
          isHovered,
          isDisabled,
          isSelected
        }
      );
      if (month.isHovered !== newMonth.isHovered || month.isDisabled !== newMonth.isDisabled || month.isSelected !== newMonth.isSelected) {
        monthCalendar.months[rowIndex][monthIndex] = newMonth;
      }
    });
  });
  monthCalendar.hideLeftArrow = !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
  monthCalendar.hideRightArrow = (!!options.monthIndex || options.monthIndex === 0) && (!!options.displayMonths || options.displayMonths === 0) && options.monthIndex < options.displayMonths && options.monthIndex + 1 !== options.displayMonths;
  monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, {
    year: -1
  }), options.minDate, options.maxDate);
  monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, {
    year: 1
  }), options.minDate, options.maxDate);
  return monthCalendar;
}
var height = 4;
var width = 4;
var yearsPerCalendar = height * width;
var initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
var shift2 = {
  year: 1
};
function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
  const initialDate = calculateInitialDate(viewDate, previousInitialDate);
  const matrixOptions = {
    width,
    height,
    initialDate,
    shift: shift2
  };
  const yearsMatrix = createMatrix(matrixOptions, (date) => ({
    date,
    label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
  }));
  const yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
  return {
    years: yearsMatrix,
    monthTitle: "",
    yearTitle,
    hideLeftArrow: false,
    hideRightArrow: false,
    disableLeftArrow: false,
    disableRightArrow: false
  };
}
function calculateInitialDate(viewDate, previousInitialDate) {
  if (previousInitialDate && viewDate.getFullYear() >= previousInitialDate.getFullYear() && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
    return previousInitialDate;
  }
  return shiftDate(viewDate, {
    year: initialYearShift
  });
}
function formatYearRangeTitle(yearsMatrix, formatOptions) {
  const from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
  const to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
  return `${from} - ${to}`;
}
function flagYearsCalendar(yearsCalendar, options) {
  yearsCalendar.years.forEach((years, rowIndex) => {
    years.forEach((year, yearIndex) => {
      let isSelected;
      const isHovered = isSameYear(year.date, options.hoveredYear);
      const isDisabled = options.isDisabled || isDisabledDate(year.date, options.datesDisabled, "year") || isEnabledDate(year.date, options.datesEnabled, "year") || isYearDisabled(year.date, options.minDate, options.maxDate);
      if (!options.selectedDate && options.selectedRange) {
        isSelected = isSameYear(year.date, options.selectedRange[0]);
        if (!isSelected) {
          isSelected = isSameYear(year.date, options.selectedRange[1]);
        }
      } else {
        isSelected = isSameYear(year.date, options.selectedDate);
      }
      const newMonth = Object.assign(
        /*{},*/
        year,
        {
          isHovered,
          isDisabled,
          isSelected
        }
      );
      if (year.isHovered !== newMonth.isHovered || year.isDisabled !== newMonth.isDisabled || year.isSelected !== newMonth.isSelected) {
        yearsCalendar.years[rowIndex][yearIndex] = newMonth;
      }
    });
  });
  yearsCalendar.hideLeftArrow = !!options.yearIndex && options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
  yearsCalendar.hideRightArrow = !!options.yearIndex && !!options.displayMonths && options.yearIndex < options.displayMonths && options.yearIndex + 1 !== options.displayMonths;
  yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, {
    year: -1
  }), options.minDate, options.maxDate);
  const i = yearsCalendar.years.length - 1;
  const j = yearsCalendar.years[i].length - 1;
  yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, {
    year: 1
  }), options.minDate, options.maxDate);
  return yearsCalendar;
}
function copyTime(sourceDate, time) {
  if (!sourceDate || !isNaN(sourceDate.getTime())) {
    return;
  }
  sourceDate.setHours(time.getHours());
  sourceDate.setMinutes(time.getMinutes());
  sourceDate.setSeconds(time.getSeconds());
  sourceDate.setMilliseconds(time.getMilliseconds());
}
function bsDatepickerReducer(state2 = initialDatepickerState, action) {
  switch (action.type) {
    case BsDatepickerActions.CALCULATE: {
      return calculateReducer(state2);
    }
    case BsDatepickerActions.FORMAT: {
      return formatReducer(state2);
    }
    case BsDatepickerActions.FLAG: {
      return flagReducer(state2);
    }
    case BsDatepickerActions.NAVIGATE_OFFSET: {
      return navigateOffsetReducer(state2, action);
    }
    case BsDatepickerActions.NAVIGATE_TO: {
      const payload = action.payload;
      if (!state2.view || !payload.unit) {
        return state2;
      }
      const date = setFullDate(state2.view.date, payload.unit);
      let newState;
      let mode;
      if (canSwitchMode(payload.viewMode, state2.minMode)) {
        mode = payload.viewMode;
        newState = {
          view: {
            date,
            mode
          }
        };
      } else {
        mode = state2.view.mode;
        newState = {
          selectedDate: date,
          view: {
            date,
            mode
          }
        };
      }
      return Object.assign({}, state2, newState);
    }
    case BsDatepickerActions.CHANGE_VIEWMODE: {
      if (!canSwitchMode(action.payload, state2.minMode) || !state2.view) {
        return state2;
      }
      const date = state2.view.date;
      const mode = action.payload;
      const newState = {
        view: {
          date,
          mode
        }
      };
      return Object.assign({}, state2, newState);
    }
    case BsDatepickerActions.HOVER: {
      return Object.assign({}, state2, {
        hoveredDate: action.payload
      });
    }
    case BsDatepickerActions.SELECT: {
      if (!state2.view) {
        return state2;
      }
      const newState = {
        selectedDate: action.payload,
        view: state2.view
      };
      if (Array.isArray(state2.selectedTime)) {
        const _time = state2.selectedTime[0];
        if (newState.selectedDate && _time) {
          copyTime(newState.selectedDate, _time);
        }
      }
      const mode = state2.view.mode;
      const _date = action.payload || state2.view.date;
      const date = getViewDate(_date, state2.minDate, state2.maxDate);
      newState.view = {
        mode,
        date
      };
      return Object.assign({}, state2, newState);
    }
    case BsDatepickerActions.SELECT_TIME: {
      const {
        date,
        index
      } = action.payload;
      const selectedTime = state2.selectedTime ? [...state2.selectedTime] : [];
      selectedTime[index] = date;
      return Object.assign({}, state2, {
        selectedTime
      });
    }
    case BsDatepickerActions.SET_OPTIONS: {
      if (!state2.view) {
        return state2;
      }
      const newState = action.payload;
      const mode = newState.minMode ? newState.minMode : state2.view.mode;
      const _viewDate = isDateValid(newState.value) && newState.value || isArray(newState.value) && isDateValid(newState.value[0]) && newState.value[0] || state2.view.date;
      const date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
      newState.view = {
        mode,
        date
      };
      if (newState.value) {
        if (isArray(newState.value)) {
          newState.selectedRange = newState.value;
          newState.selectedTime = newState.value.map((i) => i);
        }
        if (newState.value instanceof Date) {
          newState.selectedDate = newState.value;
          newState.selectedTime = [newState.value];
        }
      }
      return Object.assign({}, state2, newState);
    }
    case BsDatepickerActions.SELECT_RANGE: {
      if (!state2.view) {
        return state2;
      }
      const newState = {
        selectedRange: action.payload,
        view: state2.view
      };
      newState.selectedRange?.forEach((dte, index) => {
        if (Array.isArray(state2.selectedTime)) {
          const _time = state2.selectedTime[index];
          if (_time) {
            copyTime(dte, _time);
          }
        }
      });
      const mode = state2.view.mode;
      const _date = action.payload && action.payload[0] || state2.view.date;
      const date = getViewDate(_date, state2.minDate, state2.maxDate);
      newState.view = {
        mode,
        date
      };
      return Object.assign({}, state2, newState);
    }
    case BsDatepickerActions.SET_MIN_DATE: {
      return Object.assign({}, state2, {
        minDate: action.payload
      });
    }
    case BsDatepickerActions.SET_MAX_DATE: {
      return Object.assign({}, state2, {
        maxDate: action.payload
      });
    }
    case BsDatepickerActions.SET_IS_DISABLED: {
      return Object.assign({}, state2, {
        isDisabled: action.payload
      });
    }
    case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES: {
      return Object.assign({}, state2, {
        dateCustomClasses: action.payload
      });
    }
    case BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS: {
      return Object.assign({}, state2, {
        dateTooltipTexts: action.payload
      });
    }
    default:
      return state2;
  }
}
function calculateReducer(state2) {
  if (!state2.view) {
    return state2;
  }
  let displayMonths;
  if (state2.displayOneMonthRange && isDisplayOneMonth(state2.view.date, state2.minDate, state2.maxDate)) {
    displayMonths = 1;
  } else {
    displayMonths = state2.displayMonths || 1;
  }
  let viewDate = state2.view.date;
  if (state2.view.mode === "day" && state2.monthViewOptions) {
    if (state2.showPreviousMonth && state2.selectedRange && state2.selectedRange.length === 0) {
      viewDate = shiftDate(viewDate, {
        month: -1
      });
    }
    state2.monthViewOptions.firstDayOfWeek = getLocale(state2.locale).firstDayOfWeek();
    let monthsModel = new Array(displayMonths);
    for (let monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
      monthsModel[monthIndex] = calcDaysCalendar(viewDate, state2.monthViewOptions);
      viewDate = shiftDate(viewDate, {
        month: 1
      });
    }
    if (state2.preventChangeToNextMonth && state2.flaggedMonths && state2.hoveredDate) {
      const viewMonth = calcDaysCalendar(state2.view.date, state2.monthViewOptions);
      if (state2.flaggedMonths.length && state2.flaggedMonths[1].month.getMonth() === viewMonth.month.getMonth()) {
        monthsModel = state2.flaggedMonths.map((item) => {
          if (state2.monthViewOptions) {
            return calcDaysCalendar(item.month, state2.monthViewOptions);
          }
          return null;
        }).filter((item) => item !== null);
      }
    }
    return Object.assign({}, state2, {
      monthsModel
    });
  }
  if (state2.view.mode === "month") {
    const monthsCalendar = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state2));
      viewDate = shiftDate(viewDate, {
        year: 1
      });
    }
    return Object.assign({}, state2, {
      monthsCalendar
    });
  }
  if (state2.view.mode === "year") {
    const yearsCalendarModel = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state2), state2.minMode === "year" ? getYearsCalendarInitialDate(state2, calendarIndex) : void 0);
      viewDate = shiftDate(viewDate, {
        year: yearsPerCalendar
      });
    }
    return Object.assign({}, state2, {
      yearsCalendarModel
    });
  }
  return state2;
}
function formatReducer(state2) {
  if (!state2.view) {
    return state2;
  }
  if (state2.view.mode === "day" && state2.monthsModel) {
    const formattedMonths = state2.monthsModel.map((month, monthIndex) => formatDaysCalendar(month, getFormatOptions(state2), monthIndex));
    return Object.assign({}, state2, {
      formattedMonths
    });
  }
  const displayMonths = state2.displayMonths || 1;
  let viewDate = state2.view.date;
  if (state2.view.mode === "month") {
    const monthsCalendar = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state2));
      viewDate = shiftDate(viewDate, {
        year: 1
      });
    }
    return Object.assign({}, state2, {
      monthsCalendar
    });
  }
  if (state2.view.mode === "year") {
    const yearsCalendarModel = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state2));
      viewDate = shiftDate(viewDate, {
        year: 16
      });
    }
    return Object.assign({}, state2, {
      yearsCalendarModel
    });
  }
  return state2;
}
function flagReducer(state2) {
  if (!state2.view) {
    return state2;
  }
  const displayMonths = isDisplayOneMonth(state2.view.date, state2.minDate, state2.maxDate) ? 1 : state2.displayMonths;
  if (state2.formattedMonths && state2.view.mode === "day") {
    const flaggedMonths = state2.formattedMonths.map((formattedMonth, monthIndex) => flagDaysCalendar(formattedMonth, {
      isDisabled: state2.isDisabled,
      minDate: state2.minDate,
      maxDate: state2.maxDate,
      daysDisabled: state2.daysDisabled,
      datesDisabled: state2.datesDisabled,
      datesEnabled: state2.datesEnabled,
      hoveredDate: state2.hoveredDate,
      selectedDate: state2.selectedDate,
      selectedRange: state2.selectedRange,
      displayMonths,
      dateCustomClasses: state2.dateCustomClasses,
      dateTooltipTexts: state2.dateTooltipTexts,
      monthIndex
    }));
    return Object.assign({}, state2, {
      flaggedMonths
    });
  }
  if (state2.view.mode === "month" && state2.monthsCalendar) {
    const flaggedMonthsCalendar = state2.monthsCalendar.map((formattedMonth, monthIndex) => flagMonthsCalendar(formattedMonth, {
      isDisabled: state2.isDisabled,
      minDate: state2.minDate,
      maxDate: state2.maxDate,
      hoveredMonth: state2.hoveredMonth,
      selectedDate: state2.selectedDate,
      datesDisabled: state2.datesDisabled,
      datesEnabled: state2.datesEnabled,
      selectedRange: state2.selectedRange,
      displayMonths,
      monthIndex
    }));
    return Object.assign({}, state2, {
      flaggedMonthsCalendar
    });
  }
  if (state2.view.mode === "year" && state2.yearsCalendarModel) {
    const yearsCalendarFlagged = state2.yearsCalendarModel.map((formattedMonth, yearIndex) => flagYearsCalendar(formattedMonth, {
      isDisabled: state2.isDisabled,
      minDate: state2.minDate,
      maxDate: state2.maxDate,
      hoveredYear: state2.hoveredYear,
      selectedDate: state2.selectedDate,
      datesDisabled: state2.datesDisabled,
      datesEnabled: state2.datesEnabled,
      selectedRange: state2.selectedRange,
      displayMonths,
      yearIndex
    }));
    return Object.assign({}, state2, {
      yearsCalendarFlagged
    });
  }
  return state2;
}
function navigateOffsetReducer(state2, action) {
  if (!state2.view) {
    return state2;
  }
  const date = shiftViewDate(state2, action);
  if (!date) {
    return state2;
  }
  const newState = {
    view: {
      mode: state2.view.mode,
      date
    }
  };
  return Object.assign({}, state2, newState);
}
function shiftViewDate(state2, action) {
  if (!state2.view) {
    return void 0;
  }
  if (state2.view.mode === "year" && state2.minMode === "year") {
    const initialDate = getYearsCalendarInitialDate(state2, 0);
    if (initialDate) {
      const middleDate = shiftDate(initialDate, {
        year: -initialYearShift
      });
      return shiftDate(middleDate, action.payload);
    }
  }
  return shiftDate(startOf(state2.view.date, "month"), action.payload);
}
function getFormatOptions(state2) {
  return {
    locale: state2.locale,
    monthTitle: state2.monthTitle,
    yearTitle: state2.yearTitle,
    dayLabel: state2.dayLabel,
    monthLabel: state2.monthLabel,
    yearLabel: state2.yearLabel,
    weekNumbers: state2.weekNumbers
  };
}
function getViewDate(viewDate, minDate, maxDate) {
  const _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
  if (minDate && isAfter(minDate, _date, "day")) {
    return minDate;
  }
  if (maxDate && isBefore(maxDate, _date, "day")) {
    return maxDate;
  }
  return _date;
}
function isDisplayOneMonth(viewDate, minDate, maxDate) {
  if (maxDate && isSame(maxDate, viewDate, "day")) {
    return true;
  }
  return minDate && maxDate && minDate.getMonth() === maxDate.getMonth();
}
var _BsDatepickerStore = class _BsDatepickerStore extends MiniStore {
  constructor() {
    const _dispatcher = new BehaviorSubject({
      type: "[datepicker] dispatcher init"
    });
    const state2 = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
    super(_dispatcher, bsDatepickerReducer, state2);
  }
};
_BsDatepickerStore.ɵfac = function BsDatepickerStore_Factory(t) {
  return new (t || _BsDatepickerStore)();
};
_BsDatepickerStore.ɵprov = ɵɵdefineInjectable({
  token: _BsDatepickerStore,
  factory: _BsDatepickerStore.ɵfac,
  providedIn: "platform"
});
var BsDatepickerStore = _BsDatepickerStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerStore, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [], null);
})();
var _BsCustomDatesViewComponent = class _BsCustomDatesViewComponent {
  constructor() {
    this.onSelect = new EventEmitter();
  }
  selectFromRanges(range) {
    this.onSelect.emit(range);
  }
};
_BsCustomDatesViewComponent.ɵfac = function BsCustomDatesViewComponent_Factory(t) {
  return new (t || _BsCustomDatesViewComponent)();
};
_BsCustomDatesViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsCustomDatesViewComponent,
  selectors: [["bs-custom-date-view"]],
  inputs: {
    ranges: "ranges",
    selectedRange: "selectedRange",
    customRangeLabel: "customRangeLabel"
  },
  outputs: {
    onSelect: "onSelect"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "bs-datepicker-predefined-btns"], ["type", "button", "class", "btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"]],
  template: function BsCustomDatesViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, BsCustomDatesViewComponent_button_1_Template, 2, 3, "button", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.ranges);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var BsCustomDatesViewComponent = _BsCustomDatesViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsCustomDatesViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-custom-date-view",
      template: `
    <div class="bs-datepicker-predefined-btns">
      <button *ngFor="let range of ranges"
        type="button"
        class="btn"
        (click)="selectFromRanges(range)"
        [class.selected]="range.value === selectedRange">
        {{ range.label }}
      </button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    ranges: [{
      type: Input
    }],
    selectedRange: [{
      type: Input
    }],
    customRangeLabel: [{
      type: Input
    }],
    onSelect: [{
      type: Output
    }]
  });
})();
var BsNavigationDirection;
(function(BsNavigationDirection2) {
  BsNavigationDirection2[BsNavigationDirection2["UP"] = 0] = "UP";
  BsNavigationDirection2[BsNavigationDirection2["DOWN"] = 1] = "DOWN";
})(BsNavigationDirection || (BsNavigationDirection = {}));
var _BsCurrentDateViewComponent = class _BsCurrentDateViewComponent {
};
_BsCurrentDateViewComponent.ɵfac = function BsCurrentDateViewComponent_Factory(t) {
  return new (t || _BsCurrentDateViewComponent)();
};
_BsCurrentDateViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsCurrentDateViewComponent,
  selectors: [["bs-current-date"]],
  inputs: {
    title: "title"
  },
  decls: 3,
  vars: 1,
  consts: [[1, "current-timedate"]],
  template: function BsCurrentDateViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "span");
      ɵɵtext(2);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.title);
    }
  },
  encapsulation: 2
});
var BsCurrentDateViewComponent = _BsCurrentDateViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsCurrentDateViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-current-date",
      template: `<div class="current-timedate"><span>{{ title }}</span></div>`
    }]
  }], null, {
    title: [{
      type: Input
    }]
  });
})();
var _BsTimepickerViewComponent = class _BsTimepickerViewComponent {
  constructor() {
    this.ampm = "ok";
    this.hours = 0;
    this.minutes = 0;
  }
};
_BsTimepickerViewComponent.ɵfac = function BsTimepickerViewComponent_Factory(t) {
  return new (t || _BsTimepickerViewComponent)();
};
_BsTimepickerViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsTimepickerViewComponent,
  selectors: [["bs-timepicker"]],
  decls: 16,
  vars: 3,
  consts: [[1, "bs-timepicker-container"], [1, "bs-timepicker-controls"], ["type", "button", 1, "bs-decrease"], ["type", "text", "placeholder", "00", 3, "value"], ["type", "button", 1, "bs-increase"], ["type", "button", 1, "switch-time-format"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==", "alt", ""]],
  template: function BsTimepickerViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      ɵɵtext(3, "-");
      ɵɵelementEnd();
      ɵɵelement(4, "input", 3);
      ɵɵelementStart(5, "button", 4);
      ɵɵtext(6, "+");
      ɵɵelementEnd()();
      ɵɵelementStart(7, "div", 1)(8, "button", 2);
      ɵɵtext(9, "-");
      ɵɵelementEnd();
      ɵɵelement(10, "input", 3);
      ɵɵelementStart(11, "button", 4);
      ɵɵtext(12, "+");
      ɵɵelementEnd()();
      ɵɵelementStart(13, "button", 5);
      ɵɵtext(14);
      ɵɵelement(15, "img", 6);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(4);
      ɵɵproperty("value", ctx.hours);
      ɵɵadvance(6);
      ɵɵproperty("value", ctx.minutes);
      ɵɵadvance(4);
      ɵɵtextInterpolate1("", ctx.ampm, " ");
    }
  },
  encapsulation: 2
});
var BsTimepickerViewComponent = _BsTimepickerViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsTimepickerViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-timepicker",
      template: `
    <div class="bs-timepicker-container">
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="hours" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="minutes" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <button class="switch-time-format" type="button">{{ ampm }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg=="
          alt="">
      </button>
    </div>
  `
    }]
  }], null, null);
})();
var _BsCalendarLayoutComponent = class _BsCalendarLayoutComponent {
};
_BsCalendarLayoutComponent.ɵfac = function BsCalendarLayoutComponent_Factory(t) {
  return new (t || _BsCalendarLayoutComponent)();
};
_BsCalendarLayoutComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsCalendarLayoutComponent,
  selectors: [["bs-calendar-layout"]],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 2,
  consts: [["title", "hey there", 4, "ngIf"], [1, "bs-datepicker-head"], [1, "bs-datepicker-body"], [4, "ngIf"], ["title", "hey there"]],
  template: function BsCalendarLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c02);
      ɵɵtemplate(0, BsCalendarLayoutComponent_bs_current_date_0_Template, 1, 0, "bs-current-date", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 2);
      ɵɵprojection(4, 1);
      ɵɵelementEnd();
      ɵɵtemplate(5, BsCalendarLayoutComponent_bs_timepicker_5_Template, 1, 0, "bs-timepicker", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", false);
      ɵɵadvance(5);
      ɵɵproperty("ngIf", false);
    }
  },
  dependencies: [NgIf, BsCurrentDateViewComponent, BsTimepickerViewComponent],
  encapsulation: 2
});
var BsCalendarLayoutComponent = _BsCalendarLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsCalendarLayoutComponent, [{
    type: Component,
    args: [{
      selector: "bs-calendar-layout",
      template: `
    <!-- current date, will be added in nearest releases -->
    <bs-current-date title="hey there" *ngIf="false"></bs-current-date>

    <!--navigation-->
    <div class="bs-datepicker-head">
      <ng-content select="bs-datepicker-navigation-view"></ng-content>
    </div>

    <div class="bs-datepicker-body">
      <ng-content></ng-content>
    </div>

    <!--timepicker-->
    <bs-timepicker *ngIf="false"></bs-timepicker>
  `
    }]
  }], null, null);
})();
var _BsDatepickerDayDecoratorComponent = class _BsDatepickerDayDecoratorComponent {
  constructor(_config, _elRef, _renderer) {
    this._config = _config;
    this._elRef = _elRef;
    this._renderer = _renderer;
    this.day = {
      date: /* @__PURE__ */ new Date(),
      label: ""
    };
  }
  ngOnInit() {
    if (this.day?.isToday && this._config && this._config.customTodayClass) {
      this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
    }
    if (typeof this.day?.customClasses === "string") {
      this.day?.customClasses.split(" ").filter((className) => className).forEach((className) => {
        this._renderer.addClass(this._elRef.nativeElement, className);
      });
    }
  }
};
_BsDatepickerDayDecoratorComponent.ɵfac = function BsDatepickerDayDecoratorComponent_Factory(t) {
  return new (t || _BsDatepickerDayDecoratorComponent)(ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_BsDatepickerDayDecoratorComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsDatepickerDayDecoratorComponent,
  selectors: [["", "bsDatepickerDayDecorator", ""]],
  hostVars: 16,
  hostBindings: function BsDatepickerDayDecoratorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("disabled", ctx.day.isDisabled)("is-highlighted", ctx.day.isHovered)("is-other-month", ctx.day.isOtherMonth)("is-active-other-month", ctx.day.isOtherMonthHovered)("in-range", ctx.day.isInRange)("select-start", ctx.day.isSelectionStart)("select-end", ctx.day.isSelectionEnd)("selected", ctx.day.isSelected);
    }
  },
  inputs: {
    day: "day"
  },
  attrs: _c2,
  decls: 1,
  vars: 1,
  template: function BsDatepickerDayDecoratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtext(0);
    }
    if (rf & 2) {
      ɵɵtextInterpolate(ctx.day && ctx.day.label || "");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var BsDatepickerDayDecoratorComponent = _BsDatepickerDayDecoratorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerDayDecoratorComponent, [{
    type: Component,
    args: [{
      selector: "[bsDatepickerDayDecorator]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.disabled]": "day.isDisabled",
        "[class.is-highlighted]": "day.isHovered",
        "[class.is-other-month]": "day.isOtherMonth",
        "[class.is-active-other-month]": "day.isOtherMonthHovered",
        "[class.in-range]": "day.isInRange",
        "[class.select-start]": "day.isSelectionStart",
        "[class.select-end]": "day.isSelectionEnd",
        "[class.selected]": "day.isSelected"
      },
      template: `{{ day && day.label || '' }}`
    }]
  }], () => [{
    type: BsDatepickerConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    day: [{
      type: Input
    }]
  });
})();
var _BsDatepickerNavigationViewComponent = class _BsDatepickerNavigationViewComponent {
  constructor() {
    this.isDisabled = false;
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
  }
  navTo(down) {
    this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
  }
  view(viewMode) {
    if (this.isDisabled) {
      return;
    }
    this.onViewMode.emit(viewMode);
  }
};
_BsDatepickerNavigationViewComponent.ɵfac = function BsDatepickerNavigationViewComponent_Factory(t) {
  return new (t || _BsDatepickerNavigationViewComponent)();
};
_BsDatepickerNavigationViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsDatepickerNavigationViewComponent,
  selectors: [["bs-datepicker-navigation-view"]],
  inputs: {
    calendar: "calendar",
    isDisabled: "isDisabled"
  },
  outputs: {
    onNavigate: "onNavigate",
    onViewMode: "onViewMode"
  },
  decls: 12,
  vars: 9,
  consts: [["type", "button", 1, "previous", 3, "disabled", "click"], [4, "ngIf"], ["type", "button", 1, "current", 3, "disabled", "click"], ["type", "button", 1, "next", 3, "disabled", "click"]],
  template: function BsDatepickerNavigationViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_0_listener() {
        return ctx.navTo(true);
      });
      ɵɵelementStart(1, "span");
      ɵɵtext(2, "‹");
      ɵɵelementEnd()();
      ɵɵtemplate(3, BsDatepickerNavigationViewComponent_ng_container_3_Template, 5, 2, "ng-container", 1);
      ɵɵtext(4, " ​ ");
      ɵɵelementStart(5, "button", 2);
      ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_5_listener() {
        return ctx.view("year");
      });
      ɵɵelementStart(6, "span");
      ɵɵtext(7);
      ɵɵelementEnd()();
      ɵɵtext(8, " ​ ");
      ɵɵelementStart(9, "button", 3);
      ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_9_listener() {
        return ctx.navTo(false);
      });
      ɵɵelementStart(10, "span");
      ɵɵtext(11, "›");
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵstyleProp("visibility", ctx.calendar.hideLeftArrow ? "hidden" : "visible");
      ɵɵproperty("disabled", ctx.calendar.disableLeftArrow);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.calendar && ctx.calendar.monthTitle);
      ɵɵadvance(2);
      ɵɵproperty("disabled", ctx.isDisabled);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.calendar.yearTitle);
      ɵɵadvance(2);
      ɵɵstyleProp("visibility", ctx.calendar.hideRightArrow ? "hidden" : "visible");
      ɵɵproperty("disabled", ctx.calendar.disableRightArrow);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var BsDatepickerNavigationViewComponent = _BsDatepickerNavigationViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerNavigationViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-datepicker-navigation-view",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <button class="previous"
            [disabled]="calendar.disableLeftArrow"
            [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(true)">
      <span>&lsaquo;</span>
    </button>

    <ng-container *ngIf="calendar && calendar.monthTitle">
      &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

      <button class="current"
            type="button"
              (click)="view('month')"
              [disabled]="isDisabled"
      ><span>{{ calendar.monthTitle }}</span>
      </button>
    </ng-container>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button
      class="current"
      (click)="view('year')"
      type="button"
      [disabled]="isDisabled"
    >
      <span>{{ calendar.yearTitle }}</span>
    </button>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button class="next"
            [disabled]="calendar.disableRightArrow"
            [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(false)"><span>&rsaquo;</span>
    </button>
  `
    }]
  }], null, {
    calendar: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }]
  });
})();
var _BsDaysCalendarViewComponent = class _BsDaysCalendarViewComponent {
  constructor(_config) {
    this._config = _config;
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onHover = new EventEmitter();
    this.onHoverWeek = new EventEmitter();
    this.isiOS = /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    if (this._config.dateTooltipTexts && this._config.dateTooltipTexts.length > 0) {
      this.isShowTooltip = true;
    }
  }
  navigateTo(event) {
    const step = BsNavigationDirection.DOWN === event ? -1 : 1;
    this.onNavigate.emit({
      step: {
        month: step
      }
    });
  }
  changeViewMode(event) {
    this.onViewMode.emit(event);
  }
  selectDay(event) {
    this.onSelect.emit(event);
  }
  selectWeek(week2) {
    if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
      return;
    }
    if (week2.days.length === 0) {
      return;
    }
    if (this._config.selectWeek && week2.days[0] && !week2.days[0].isDisabled && this._config.selectFromOtherMonth) {
      this.onSelect.emit(week2.days[0]);
      return;
    }
    const selectedDay = week2.days.find((day) => {
      return this._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
    });
    this.onSelect.emit(selectedDay);
    if (this._config.selectWeekDateRange) {
      const days = week2.days.slice(0);
      const lastDayOfRange = days.reverse().find((day) => {
        return this._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
      });
      this.onSelect.emit(lastDayOfRange);
    }
  }
  weekHoverHandler(cell, isHovered) {
    if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
      return;
    }
    const hasActiveDays = cell.days.find((day) => {
      return this._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
    });
    if (hasActiveDays) {
      cell.isHovered = isHovered;
      this.isWeekHovered = isHovered;
      this.onHoverWeek.emit(cell);
    }
  }
  hoverDay(cell, isHovered) {
    if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
      cell.isOtherMonthHovered = isHovered;
    }
    if (this._config.dateTooltipTexts) {
      cell.tooltipText = "";
      this._config.dateTooltipTexts.forEach((dateData) => {
        if (isSameDay$1(dateData.date, cell.date)) {
          cell.tooltipText = dateData.tooltipText;
          return;
        }
      });
    }
    this.onHover.emit({
      cell,
      isHovered
    });
  }
};
_BsDaysCalendarViewComponent.ɵfac = function BsDaysCalendarViewComponent_Factory(t) {
  return new (t || _BsDaysCalendarViewComponent)(ɵɵdirectiveInject(BsDatepickerConfig));
};
_BsDaysCalendarViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsDaysCalendarViewComponent,
  selectors: [["bs-days-calendar-view"]],
  inputs: {
    calendar: "calendar",
    options: "options",
    isDisabled: "isDisabled"
  },
  outputs: {
    onNavigate: "onNavigate",
    onViewMode: "onViewMode",
    onSelect: "onSelect",
    onHover: "onHover",
    onHoverWeek: "onHoverWeek"
  },
  decls: 9,
  vars: 5,
  consts: [[3, "calendar", "isDisabled", "onNavigate", "onViewMode"], ["role", "grid", 1, "days", "weeks"], [4, "ngIf"], ["aria-label", "weekday", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["aria-label", "weekday"], ["class", "week", 3, "active-week", 4, "ngIf"], ["role", "gridcell", 4, "ngFor", "ngForOf"], [1, "week"], [3, "click", 4, "ngIf"], [3, "click", "mouseenter", "mouseleave", 4, "ngIf"], [3, "click"], [3, "click", "mouseenter", "mouseleave"], ["role", "gridcell"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "click", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip", "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "click"]],
  template: function BsDaysCalendarViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
      ɵɵlistener("onNavigate", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) {
        return ctx.navigateTo($event);
      })("onViewMode", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) {
        return ctx.changeViewMode($event);
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "table", 1)(3, "thead")(4, "tr");
      ɵɵtemplate(5, BsDaysCalendarViewComponent_th_5_Template, 1, 0, "th", 2)(6, BsDaysCalendarViewComponent_th_6_Template, 2, 1, "th", 3);
      ɵɵelementEnd()();
      ɵɵelementStart(7, "tbody");
      ɵɵtemplate(8, BsDaysCalendarViewComponent_tr_8_Template, 3, 2, "tr", 4);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("calendar", ctx.calendar)("isDisabled", !!ctx.isDisabled);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", ctx.options && ctx.options.showWeekNumbers);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.calendar.weekdays);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.calendar.weeks);
    }
  },
  dependencies: [NgForOf, NgIf, TooltipDirective, BsCalendarLayoutComponent, BsDatepickerDayDecoratorComponent, BsDatepickerNavigationViewComponent],
  encapsulation: 2
});
var BsDaysCalendarViewComponent = _BsDaysCalendarViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaysCalendarViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-days-calendar-view",
      // changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        [isDisabled]="!!isDisabled"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>
      <!--days matrix-->
      <table role="grid" class="days weeks">
        <thead>
        <tr>
          <!--if show weeks-->
          <th *ngIf="options && options.showWeekNumbers"></th>
          <th *ngFor="let weekday of calendar.weekdays; let i = index"
              aria-label="weekday">{{ calendar.weekdays[i] }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let week of calendar.weeks; let i = index">
          <td class="week" [class.active-week]="isWeekHovered"  *ngIf="options && options.showWeekNumbers">
            <span *ngIf="isiOS" (click)="selectWeek(week)">{{ calendar.weekNumbers[i] }}</span>
            <span *ngIf="!isiOS"
                (click)="selectWeek(week)"
                (mouseenter)="weekHoverHandler(week, true)"
                (mouseleave)="weekHoverHandler(week, false)">{{ calendar.weekNumbers[i] }}</span>
          </td>
          <td *ngFor="let day of week.days" role="gridcell">

            <!-- When we want to show tooltips for dates -->
            <span *ngIf="!isiOS && isShowTooltip" bsDatepickerDayDecorator
                [day]="day"
                (click)="selectDay(day)"
                tooltip="{{day.tooltipText}}"
                (mouseenter)="hoverDay(day, true)"
                (mouseleave)="hoverDay(day, false)">{{ day.label }} 3</span>
            <!-- When tooltips for dates are disabled -->
            <span *ngIf="!isiOS && !isShowTooltip" bsDatepickerDayDecorator
                  [day]="day"
                  (click)="selectDay(day)"
                  (mouseenter)="hoverDay(day, true)"
                  (mouseleave)="hoverDay(day, false)">{{ day.label }} 2</span>

            <!-- For mobile iOS view, tooltips are not needed -->
            <span *ngIf="isiOS" bsDatepickerDayDecorator
                  [day]="day"
                  (click)="selectDay(day)">{{ day.label }} 1</span>
          </td>
        </tr>
        </tbody>
      </table>

    </bs-calendar-layout>
  `
    }]
  }], () => [{
    type: BsDatepickerConfig
  }], {
    calendar: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onHover: [{
      type: Output
    }],
    onHoverWeek: [{
      type: Output
    }]
  });
})();
var _BsMonthCalendarViewComponent = class _BsMonthCalendarViewComponent {
  constructor() {
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onHover = new EventEmitter();
  }
  navigateTo(event) {
    const step = BsNavigationDirection.DOWN === event ? -1 : 1;
    this.onNavigate.emit({
      step: {
        year: step
      }
    });
  }
  viewMonth(month) {
    this.onSelect.emit(month);
  }
  hoverMonth(cell, isHovered) {
    this.onHover.emit({
      cell,
      isHovered
    });
  }
  changeViewMode(event) {
    this.onViewMode.emit(event);
  }
};
_BsMonthCalendarViewComponent.ɵfac = function BsMonthCalendarViewComponent_Factory(t) {
  return new (t || _BsMonthCalendarViewComponent)();
};
_BsMonthCalendarViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsMonthCalendarViewComponent,
  selectors: [["bs-month-calendar-view"]],
  inputs: {
    calendar: "calendar"
  },
  outputs: {
    onNavigate: "onNavigate",
    onViewMode: "onViewMode",
    onSelect: "onSelect",
    onHover: "onHover"
  },
  decls: 5,
  vars: 2,
  consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "months"], [4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "disabled", "is-highlighted", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]],
  template: function BsMonthCalendarViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
      ɵɵlistener("onNavigate", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) {
        return ctx.navigateTo($event);
      })("onViewMode", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) {
        return ctx.changeViewMode($event);
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "table", 1)(3, "tbody");
      ɵɵtemplate(4, BsMonthCalendarViewComponent_tr_4_Template, 2, 1, "tr", 2);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("calendar", ctx.calendar);
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.calendar == null ? null : ctx.calendar.months);
    }
  },
  dependencies: [NgForOf, BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent],
  encapsulation: 2
});
var BsMonthCalendarViewComponent = _BsMonthCalendarViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsMonthCalendarViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-month-calendar-view",
      template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="months">
        <tbody>
        <tr *ngFor="let row of calendar?.months">
          <td *ngFor="let month of row" role="gridcell"
              (click)="viewMonth(month)"
              (mouseenter)="hoverMonth(month, true)"
              (mouseleave)="hoverMonth(month, false)"
              [class.disabled]="month.isDisabled"
              [class.is-highlighted]="month.isHovered">
            <span [class.selected]="month.isSelected">{{ month.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
    }]
  }], null, {
    calendar: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onHover: [{
      type: Output
    }]
  });
})();
var _BsYearsCalendarViewComponent = class _BsYearsCalendarViewComponent {
  constructor() {
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onHover = new EventEmitter();
  }
  navigateTo(event) {
    const step = BsNavigationDirection.DOWN === event ? -1 : 1;
    this.onNavigate.emit({
      step: {
        year: step * yearsPerCalendar
      }
    });
  }
  viewYear(year) {
    this.onSelect.emit(year);
  }
  hoverYear(cell, isHovered) {
    this.onHover.emit({
      cell,
      isHovered
    });
  }
  changeViewMode(event) {
    this.onViewMode.emit(event);
  }
};
_BsYearsCalendarViewComponent.ɵfac = function BsYearsCalendarViewComponent_Factory(t) {
  return new (t || _BsYearsCalendarViewComponent)();
};
_BsYearsCalendarViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsYearsCalendarViewComponent,
  selectors: [["bs-years-calendar-view"]],
  inputs: {
    calendar: "calendar"
  },
  outputs: {
    onNavigate: "onNavigate",
    onViewMode: "onViewMode",
    onSelect: "onSelect",
    onHover: "onHover"
  },
  decls: 5,
  vars: 2,
  consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "years"], [4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "disabled", "is-highlighted", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]],
  template: function BsYearsCalendarViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
      ɵɵlistener("onNavigate", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) {
        return ctx.navigateTo($event);
      })("onViewMode", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) {
        return ctx.changeViewMode($event);
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "table", 1)(3, "tbody");
      ɵɵtemplate(4, BsYearsCalendarViewComponent_tr_4_Template, 2, 1, "tr", 2);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("calendar", ctx.calendar);
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.calendar == null ? null : ctx.calendar.years);
    }
  },
  dependencies: [NgForOf, BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent],
  encapsulation: 2
});
var BsYearsCalendarViewComponent = _BsYearsCalendarViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsYearsCalendarViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-years-calendar-view",
      template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="years">
        <tbody>
        <tr *ngFor="let row of calendar?.years">
          <td *ngFor="let year of row" role="gridcell"
              (click)="viewYear(year)"
              (mouseenter)="hoverYear(year, true)"
              (mouseleave)="hoverYear(year, false)"
              [class.disabled]="year.isDisabled"
              [class.is-highlighted]="year.isHovered">
            <span [class.selected]="year.isSelected">{{ year.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
    }]
  }], null, {
    calendar: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onHover: [{
      type: Output
    }]
  });
})();
var _BsDatepickerContainerComponent = class _BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
  set value(value) {
    this._effects?.setValue(value);
  }
  get isDatePickerDisabled() {
    return !!this._config.isDisabled;
  }
  get isDatepickerDisabled() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get isDatepickerReadonly() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
    super();
    this._config = _config;
    this._store = _store;
    this._element = _element;
    this._actions = _actions;
    this._positionService = _positionService;
    this.valueChange = new EventEmitter();
    this.animationState = "void";
    this.isRangePicker = false;
    this._subs = [];
    this._effects = _effects;
    _renderer.setStyle(_element.nativeElement, "display", "block");
    _renderer.setStyle(_element.nativeElement, "position", "absolute");
  }
  ngOnInit() {
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this._config.adaptivePosition
        },
        preventOverflow: {
          enabled: this._config.adaptivePosition
        }
      },
      allowedPositions: this._config.allowedPositions
    });
    this._positionService.event$?.pipe(take(1)).subscribe(() => {
      this._positionService.disable();
      if (this._config.isAnimated) {
        this.animationState = this.isTopPosition ? "animated-up" : "animated-down";
        return;
      }
      this.animationState = "unanimated";
    });
    this.isOtherMonthsActive = this._config.selectFromOtherMonth;
    this.containerClass = this._config.containerClass;
    this.showTodayBtn = this._config.showTodayButton;
    this.todayBtnLbl = this._config.todayButtonLabel;
    this.todayPos = this._config.todayPosition;
    this.showClearBtn = this._config.showClearButton;
    this.clearBtnLbl = this._config.clearButtonLabel;
    this.clearPos = this._config.clearPosition;
    this.customRangeBtnLbl = this._config.customRangeButtonLabel;
    this.withTimepicker = this._config.withTimepicker;
    this._effects?.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
    let currentDate;
    this._subs.push(this._store.select((state2) => state2.selectedDate).subscribe((date) => {
      currentDate = date;
      this.valueChange.emit(date);
    }));
    this._subs.push(this._store.select((state2) => state2.selectedTime).subscribe((time) => {
      if (!time || !time[0] || !(time[0] instanceof Date) || time[0] === currentDate) {
        return;
      }
      this.valueChange.emit(time[0]);
    }));
    this._store.dispatch(this._actions.changeViewMode(this._config.startView));
  }
  ngAfterViewInit() {
    this.selectedTimeSub.add(this.selectedTime?.subscribe((val) => {
      if (Array.isArray(val) && val.length >= 1) {
        this.startTimepicker?.writeValue(val[0]);
      }
    }));
    this.startTimepicker?.registerOnChange((val) => {
      this.timeSelectHandler(val, 0);
    });
  }
  get isTopPosition() {
    return this._element.nativeElement.classList.contains("top");
  }
  positionServiceEnable() {
    this._positionService.enable();
  }
  timeSelectHandler(date, index) {
    this._store.dispatch(this._actions.selectTime(date, index));
  }
  daySelectHandler(day) {
    if (!day) {
      return;
    }
    const isDisabled = this.isOtherMonthsActive ? day.isDisabled : day.isOtherMonth || day.isDisabled;
    if (isDisabled) {
      return;
    }
    this._store.dispatch(this._actions.select(day.date));
  }
  monthSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    this._store.dispatch(this._actions.navigateTo({
      unit: {
        month: getMonth(day.date),
        year: getFullYear(day.date)
      },
      viewMode: "day"
    }));
  }
  yearSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    this._store.dispatch(this._actions.navigateTo({
      unit: {
        year: getFullYear(day.date)
      },
      viewMode: "month"
    }));
  }
  setToday() {
    this._store.dispatch(this._actions.select(/* @__PURE__ */ new Date()));
  }
  clearDate() {
    this._store.dispatch(this._actions.select(void 0));
  }
  ngOnDestroy() {
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    this.selectedTimeSub.unsubscribe();
    this._effects?.destroy();
  }
};
_BsDatepickerContainerComponent.ɵfac = function BsDatepickerContainerComponent_Factory(t) {
  return new (t || _BsDatepickerContainerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(BsDatepickerStore), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BsDatepickerActions), ɵɵdirectiveInject(BsDatepickerEffects), ɵɵdirectiveInject(PositioningService));
};
_BsDatepickerContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsDatepickerContainerComponent,
  selectors: [["bs-datepicker-container"]],
  viewQuery: function BsDatepickerContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTimepicker = _t.first);
    }
  },
  hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
  hostVars: 2,
  hostBindings: function BsDatepickerContainerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function BsDatepickerContainerComponent_click_HostBindingHandler($event) {
        return ctx._stopPropagation($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.isDatepickerDisabled)("readonly", ctx.isDatepickerReadonly);
    }
  },
  features: [ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 3,
  consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "isDisabled", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], [3, "disabled"], ["startTP", ""], [3, "disabled", 4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]],
  template: function BsDatepickerContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, BsDatepickerContainerComponent_div_0_Template, 10, 11, "div", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.viewMode));
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, TimepickerComponent, BsCustomDatesViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, AsyncPipe],
  encapsulation: 2,
  data: {
    animation: [datepickerAnimation]
  }
});
var BsDatepickerContainerComponent = _BsDatepickerContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-datepicker-container",
      providers: [BsDatepickerStore, BsDatepickerEffects],
      host: {
        class: "bottom",
        "(click)": "_stopPropagation($event)",
        role: "dialog",
        "aria-label": "calendar"
      },
      animations: [datepickerAnimation],
      template: `<!-- days calendar view mode -->
<div class="bs-datepicker" [ngClass]="containerClass" *ngIf="viewMode | async">
  <div class="bs-datepicker-container"
    [@datepickerAnimation]="animationState"
    (@datepickerAnimation.done)="positionServiceEnable()">
    <!--calendars-->
    <div class="bs-calendar-container" [ngSwitch]="viewMode | async" role="application">
      <!--days calendar-->
      <ng-container *ngSwitchCase="'day'">
        <div class="bs-media-container">
          <bs-days-calendar-view
            *ngFor="let calendar of daysCalendar$ | async"
            [class.bs-datepicker-multiple]="multipleCalendars"
            [calendar]="calendar"
            [isDisabled]="isDatePickerDisabled"
            [options]="options$ | async"
            (onNavigate)="navigateTo($event)"
            (onViewMode)="setViewMode($event)"
            (onHover)="dayHoverHandler($event)"
            (onHoverWeek)="weekHoverHandler($event)"
            (onSelect)="daySelectHandler($event)">
          </bs-days-calendar-view>
        </div>
        <div *ngIf="withTimepicker" class="bs-timepicker-in-datepicker-container">
          <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
          <timepicker #endTP *ngIf="isRangePicker" [disabled]="isDatePickerDisabled"></timepicker>
        </div>
      </ng-container>

      <!--months calendar-->
      <div *ngSwitchCase="'month'" class="bs-media-container">
        <bs-month-calendar-view
          *ngFor="let calendar of monthsCalendar | async"
          [class.bs-datepicker-multiple]="multipleCalendars"
          [calendar]="calendar"
          (onNavigate)="navigateTo($event)"
          (onViewMode)="setViewMode($event)"
          (onHover)="monthHoverHandler($event)"
          (onSelect)="monthSelectHandler($event)">
        </bs-month-calendar-view>
      </div>

      <!--years calendar-->
      <div *ngSwitchCase="'year'" class="bs-media-container">
        <bs-years-calendar-view
          *ngFor="let calendar of yearsCalendar | async"
          [class.bs-datepicker-multiple]="multipleCalendars"
          [calendar]="calendar"
          (onNavigate)="navigateTo($event)"
          (onViewMode)="setViewMode($event)"
          (onHover)="yearHoverHandler($event)"
          (onSelect)="yearSelectHandler($event)">
        </bs-years-calendar-view>
      </div>
    </div>

    <!--applycancel buttons-->
    <div class="bs-datepicker-buttons" *ngIf="false">
      <button class="btn btn-success" type="button">Apply</button>
      <button class="btn btn-default" type="button">Cancel</button>
    </div>

    <div class="bs-datepicker-buttons" *ngIf="showTodayBtn || showClearBtn">
      <div class="btn-today-wrapper"
           [class.today-left]="todayPos === 'left'"
           [class.today-right]="todayPos === 'right'"
           [class.today-center]="todayPos === 'center'"
           *ngIf="showTodayBtn">
        <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
      </div>

        <div class="btn-clear-wrapper"
        [class.clear-left]="clearPos === 'left'"
        [class.clear-right]="clearPos === 'right'"
        [class.clear-center]="clearPos === 'center'"
        *ngIf="showClearBtn">
          <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
        </div>
    </div>

  </div>

  <!--custom dates or date ranges picker-->
  <div class="bs-datepicker-custom-range" *ngIf="customRanges && customRanges.length > 0">
    <bs-custom-date-view
      [selectedRange]="chosenRange"
      [ranges]="customRanges"
      [customRangeLabel]="customRangeBtnLbl"
      (onSelect)="setRangeOnCalendar($event)">
    </bs-custom-date-view>
  </div>
</div>
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    startTimepicker: [{
      type: ViewChild,
      args: ["startTP"]
    }],
    isDatepickerDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    isDatepickerReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var previousDate$1;
var _BsDatepickerDirective = class _BsDatepickerDirective {
  get readonlyValue() {
    return this.isDisabled ? "" : null;
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.placement = "bottom";
    this.triggers = "click";
    this.outsideClick = true;
    this.container = "body";
    this.outsideEsc = true;
    this.isDestroy$ = new Subject();
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    this._dateInputFormat$ = new Subject();
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    this.onShown = this._datepicker.onShown;
    this.onHidden = this._datepicker.onHidden;
    this.isOpen$ = new BehaviorSubject(this.isOpen);
  }
  /**
   * Returns whether or not the datepicker is currently being shown
   */
  get isOpen() {
    return this._datepicker.isShown;
  }
  set isOpen(value) {
    this.isOpen$.next(value);
  }
  /**
   * Initial value of datepicker
   */
  set bsValue(value) {
    if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
      return;
    }
    if (!this._bsValue && value && !this._config.withTimepicker) {
      const now = /* @__PURE__ */ new Date();
      copyTime(value, now);
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setCurrentTimeOnDateSelect(value);
    }
    this.initPreviousValue();
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  get dateInputFormat$() {
    return this._dateInputFormat$;
  }
  ngOnInit() {
    this._datepicker.listen({
      outsideClick: this.outsideClick,
      outsideEsc: this.outsideEsc,
      triggers: this.triggers,
      show: () => this.show()
    });
    this.setConfig();
    this.initPreviousValue();
  }
  initPreviousValue() {
    previousDate$1 = this._bsValue;
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this.initPreviousValue();
        this._bsValue = setCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
      this.setConfig();
      this._dateInputFormat$.next(this.bsConfig && this.bsConfig.dateInputFormat);
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["daysDisabled"]) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
    if (changes["dateTooltipTexts"]) {
      this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
    }
  }
  initSubscribes() {
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
        this.initPreviousValue();
        this.bsValue = value;
        if (this.keepDatepickerModalOpened()) {
          return;
        }
        this.hide();
      }));
    }
  }
  keepDatepickerModalOpened() {
    if (!previousDate$1 || !this.bsConfig?.keepDatepickerOpened || !this._config.withTimepicker) {
      return false;
    }
    return this.isDateSame();
  }
  isDateSame() {
    return previousDate$1 instanceof Date && this._bsValue?.getDate() === previousDate$1?.getDate() && this._bsValue?.getMonth() === previousDate$1?.getMonth() && this._bsValue?.getFullYear() === previousDate$1?.getFullYear();
  }
  ngAfterViewInit() {
    this.isOpen$.pipe(filter((isOpen) => isOpen !== this.isOpen), takeUntil(this.isDestroy$)).subscribe(() => this.toggle());
  }
  /**
   * Opens an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  show() {
    if (this._datepicker.isShown) {
      return;
    }
    this.setConfig();
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDatepickerContainerComponent).to(this.container).position({
      attachment: this.placement
    }).show({
      placement: this.placement
    });
    this.initSubscribes();
  }
  /**
   * Closes an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  hide() {
    if (this.isOpen) {
      this._datepicker.hide();
    }
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    if (this._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
    }
  }
  /**
   * Toggles an element’s datepicker. This is considered a “manual” triggering
   * of the datepicker.
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  /**
   * Set config for datepicker
   */
  setConfig() {
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: this._config.keepDatesOutOfRules ? this._bsValue : checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      minMode: this.minMode || this.bsConfig && this.bsConfig.minMode,
      initCurrentTime: this.bsConfig?.initCurrentTime,
      keepDatepickerOpened: this.bsConfig?.keepDatepickerOpened,
      keepDatesOutOfRules: this.bsConfig?.keepDatesOutOfRules
    });
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.isOpen$.next(false);
    if (this.isDestroy$) {
      this.isDestroy$.next(null);
      this.isDestroy$.complete();
    }
    this.unsubscribeSubscriptions();
  }
};
_BsDatepickerDirective.ɵfac = function BsDatepickerDirective_Factory(t) {
  return new (t || _BsDatepickerDirective)(ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory));
};
_BsDatepickerDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDatepickerDirective,
  selectors: [["", "bsDatepicker", ""]],
  hostVars: 1,
  hostBindings: function BsDatepickerDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("readonly", ctx.readonlyValue);
    }
  },
  inputs: {
    placement: "placement",
    triggers: "triggers",
    outsideClick: "outsideClick",
    container: "container",
    outsideEsc: "outsideEsc",
    isDisabled: "isDisabled",
    minDate: "minDate",
    maxDate: "maxDate",
    minMode: "minMode",
    daysDisabled: "daysDisabled",
    datesDisabled: "datesDisabled",
    datesEnabled: "datesEnabled",
    dateCustomClasses: "dateCustomClasses",
    dateTooltipTexts: "dateTooltipTexts",
    isOpen: "isOpen",
    bsValue: "bsValue",
    bsConfig: "bsConfig"
  },
  outputs: {
    onShown: "onShown",
    onHidden: "onHidden",
    bsValueChange: "bsValueChange"
  },
  exportAs: ["bsDatepicker"],
  features: [ɵɵNgOnChangesFeature]
});
var BsDatepickerDirective = _BsDatepickerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDatepicker]",
      exportAs: "bsDatepicker"
    }]
  }], () => [{
    type: BsDatepickerConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    placement: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    outsideClick: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    outsideEsc: [{
      type: Input
    }],
    onShown: [{
      type: Output
    }],
    onHidden: [{
      type: Output
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minMode: [{
      type: Input
    }],
    daysDisabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    dateTooltipTexts: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }],
    readonlyValue: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }],
    isOpen: [{
      type: Input
    }],
    bsValue: [{
      type: Input
    }],
    bsConfig: [{
      type: Input
    }]
  });
})();
var _BsDatepickerInlineConfig = class _BsDatepickerInlineConfig extends BsDatepickerConfig {
};
_BsDatepickerInlineConfig.ɵfac = /* @__PURE__ */ (() => {
  let ɵBsDatepickerInlineConfig_BaseFactory;
  return function BsDatepickerInlineConfig_Factory(t) {
    return (ɵBsDatepickerInlineConfig_BaseFactory || (ɵBsDatepickerInlineConfig_BaseFactory = ɵɵgetInheritedFactory(_BsDatepickerInlineConfig)))(t || _BsDatepickerInlineConfig);
  };
})();
_BsDatepickerInlineConfig.ɵprov = ɵɵdefineInjectable({
  token: _BsDatepickerInlineConfig,
  factory: _BsDatepickerInlineConfig.ɵfac,
  providedIn: "root"
});
var BsDatepickerInlineConfig = _BsDatepickerInlineConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInlineConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _BsDatepickerInlineContainerComponent = class _BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent {
  get disabledValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get readonlyValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
    super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
    _renderer.setStyle(_element.nativeElement, "display", "inline-block");
    _renderer.setStyle(_element.nativeElement, "position", "static");
  }
};
_BsDatepickerInlineContainerComponent.ɵfac = function BsDatepickerInlineContainerComponent_Factory(t) {
  return new (t || _BsDatepickerInlineContainerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(BsDatepickerStore), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BsDatepickerActions), ɵɵdirectiveInject(BsDatepickerEffects), ɵɵdirectiveInject(PositioningService));
};
_BsDatepickerInlineContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsDatepickerInlineContainerComponent,
  selectors: [["bs-datepicker-inline-container"]],
  hostVars: 2,
  hostBindings: function BsDatepickerInlineContainerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function BsDatepickerInlineContainerComponent_click_HostBindingHandler($event) {
        return ctx._stopPropagation($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.disabledValue)("readonly", ctx.readonlyValue);
    }
  },
  features: [ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 3,
  consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "isDisabled", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], [3, "disabled"], ["startTP", ""], [3, "disabled", 4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]],
  template: function BsDatepickerInlineContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, BsDatepickerInlineContainerComponent_div_0_Template, 10, 11, "div", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.viewMode));
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, TimepickerComponent, BsCustomDatesViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, AsyncPipe],
  encapsulation: 2,
  data: {
    animation: [datepickerAnimation]
  }
});
var BsDatepickerInlineContainerComponent = _BsDatepickerInlineContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInlineContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-datepicker-inline-container",
      providers: [BsDatepickerStore, BsDatepickerEffects],
      host: {
        "(click)": "_stopPropagation($event)"
      },
      animations: [datepickerAnimation],
      template: `<!-- days calendar view mode -->
<div class="bs-datepicker" [ngClass]="containerClass" *ngIf="viewMode | async">
  <div class="bs-datepicker-container"
    [@datepickerAnimation]="animationState"
    (@datepickerAnimation.done)="positionServiceEnable()">
    <!--calendars-->
    <div class="bs-calendar-container" [ngSwitch]="viewMode | async" role="application">
      <!--days calendar-->
      <ng-container *ngSwitchCase="'day'">
        <div class="bs-media-container">
          <bs-days-calendar-view
            *ngFor="let calendar of daysCalendar$ | async"
            [class.bs-datepicker-multiple]="multipleCalendars"
            [calendar]="calendar"
            [isDisabled]="isDatePickerDisabled"
            [options]="options$ | async"
            (onNavigate)="navigateTo($event)"
            (onViewMode)="setViewMode($event)"
            (onHover)="dayHoverHandler($event)"
            (onHoverWeek)="weekHoverHandler($event)"
            (onSelect)="daySelectHandler($event)">
          </bs-days-calendar-view>
        </div>
        <div *ngIf="withTimepicker" class="bs-timepicker-in-datepicker-container">
          <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
          <timepicker #endTP *ngIf="isRangePicker" [disabled]="isDatePickerDisabled"></timepicker>
        </div>
      </ng-container>

      <!--months calendar-->
      <div *ngSwitchCase="'month'" class="bs-media-container">
        <bs-month-calendar-view
          *ngFor="let calendar of monthsCalendar | async"
          [class.bs-datepicker-multiple]="multipleCalendars"
          [calendar]="calendar"
          (onNavigate)="navigateTo($event)"
          (onViewMode)="setViewMode($event)"
          (onHover)="monthHoverHandler($event)"
          (onSelect)="monthSelectHandler($event)">
        </bs-month-calendar-view>
      </div>

      <!--years calendar-->
      <div *ngSwitchCase="'year'" class="bs-media-container">
        <bs-years-calendar-view
          *ngFor="let calendar of yearsCalendar | async"
          [class.bs-datepicker-multiple]="multipleCalendars"
          [calendar]="calendar"
          (onNavigate)="navigateTo($event)"
          (onViewMode)="setViewMode($event)"
          (onHover)="yearHoverHandler($event)"
          (onSelect)="yearSelectHandler($event)">
        </bs-years-calendar-view>
      </div>
    </div>

    <!--applycancel buttons-->
    <div class="bs-datepicker-buttons" *ngIf="false">
      <button class="btn btn-success" type="button">Apply</button>
      <button class="btn btn-default" type="button">Cancel</button>
    </div>

    <div class="bs-datepicker-buttons" *ngIf="showTodayBtn || showClearBtn">
      <div class="btn-today-wrapper"
           [class.today-left]="todayPos === 'left'"
           [class.today-right]="todayPos === 'right'"
           [class.today-center]="todayPos === 'center'"
           *ngIf="showTodayBtn">
        <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
      </div>

        <div class="btn-clear-wrapper"
        [class.clear-left]="clearPos === 'left'"
        [class.clear-right]="clearPos === 'right'"
        [class.clear-center]="clearPos === 'center'"
        *ngIf="showClearBtn">
          <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
        </div>
    </div>

  </div>

  <!--custom dates or date ranges picker-->
  <div class="bs-datepicker-custom-range" *ngIf="customRanges && customRanges.length > 0">
    <bs-custom-date-view
      [selectedRange]="chosenRange"
      [ranges]="customRanges"
      [customRangeLabel]="customRangeBtnLbl"
      (onSelect)="setRangeOnCalendar($event)">
    </bs-custom-date-view>
  </div>
</div>
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    disabledValue: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    readonlyValue: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var _BsDatepickerInlineDirective = class _BsDatepickerInlineDirective {
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
  }
  /**
   * Initial value of datepicker
   */
  set bsValue(value) {
    if (this._bsValue === value) {
      return;
    }
    if (!this._bsValue && value && !this._config.withTimepicker) {
      const now = /* @__PURE__ */ new Date();
      copyTime(value, now);
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setCurrentTimeOnDateSelect(value);
    }
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  ngOnInit() {
    this.setConfig();
    this.initSubscribes();
  }
  initSubscribes() {
    this.unsubscribeSubscriptions();
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
        this.bsValue = value;
      }));
    }
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this._bsValue = setCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
      this._datepickerRef.instance.value = this._bsValue;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
    if (changes["dateTooltipTexts"]) {
      this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
    }
    this.setConfig();
  }
  /**
   * Set config for datepicker
   */
  setConfig() {
    if (this._datepicker) {
      this._datepicker.hide();
    }
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      initCurrentTime: this.bsConfig?.initCurrentTime
    });
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDatepickerInlineContainerComponent).to(this._elementRef).show();
    this.initSubscribes();
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.unsubscribeSubscriptions();
  }
};
_BsDatepickerInlineDirective.ɵfac = function BsDatepickerInlineDirective_Factory(t) {
  return new (t || _BsDatepickerInlineDirective)(ɵɵdirectiveInject(BsDatepickerInlineConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory));
};
_BsDatepickerInlineDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDatepickerInlineDirective,
  selectors: [["bs-datepicker-inline"]],
  inputs: {
    bsConfig: "bsConfig",
    isDisabled: "isDisabled",
    minDate: "minDate",
    maxDate: "maxDate",
    dateCustomClasses: "dateCustomClasses",
    dateTooltipTexts: "dateTooltipTexts",
    datesEnabled: "datesEnabled",
    datesDisabled: "datesDisabled",
    bsValue: "bsValue"
  },
  outputs: {
    bsValueChange: "bsValueChange"
  },
  exportAs: ["bsDatepickerInline"],
  features: [ɵɵNgOnChangesFeature]
});
var BsDatepickerInlineDirective = _BsDatepickerInlineDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInlineDirective, [{
    type: Directive,
    args: [{
      selector: "bs-datepicker-inline",
      exportAs: "bsDatepickerInline"
    }]
  }], () => [{
    type: BsDatepickerInlineConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    bsConfig: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    dateTooltipTexts: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }],
    bsValue: [{
      type: Input
    }]
  });
})();
var _BsDaterangepickerInlineConfig = class _BsDaterangepickerInlineConfig extends BsDatepickerConfig {
  constructor() {
    super(...arguments);
    this.displayMonths = 2;
    this.isAnimated = false;
  }
};
_BsDaterangepickerInlineConfig.ɵfac = /* @__PURE__ */ (() => {
  let ɵBsDaterangepickerInlineConfig_BaseFactory;
  return function BsDaterangepickerInlineConfig_Factory(t) {
    return (ɵBsDaterangepickerInlineConfig_BaseFactory || (ɵBsDaterangepickerInlineConfig_BaseFactory = ɵɵgetInheritedFactory(_BsDaterangepickerInlineConfig)))(t || _BsDaterangepickerInlineConfig);
  };
})();
_BsDaterangepickerInlineConfig.ɵprov = ɵɵdefineInjectable({
  token: _BsDaterangepickerInlineConfig,
  factory: _BsDaterangepickerInlineConfig.ɵfac,
  providedIn: "root"
});
var BsDaterangepickerInlineConfig = _BsDaterangepickerInlineConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInlineConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _BsDaterangepickerContainerComponent = class _BsDaterangepickerContainerComponent extends BsDatepickerAbstractComponent {
  set value(value) {
    this._effects?.setRangeValue(value);
  }
  get isDatePickerDisabled() {
    return !!this._config.isDisabled;
  }
  get isDatepickerDisabled() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get isDatepickerReadonly() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
    super();
    this._config = _config;
    this._store = _store;
    this._element = _element;
    this._actions = _actions;
    this._positionService = _positionService;
    this.valueChange = new EventEmitter();
    this.animationState = "void";
    this._rangeStack = [];
    this.chosenRange = [];
    this._subs = [];
    this.isRangePicker = true;
    this._effects = _effects;
    this.customRanges = this._config.ranges || [];
    this.customRangeBtnLbl = this._config.customRangeButtonLabel;
    _renderer.setStyle(_element.nativeElement, "display", "block");
    _renderer.setStyle(_element.nativeElement, "position", "absolute");
  }
  ngOnInit() {
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this._config.adaptivePosition
        },
        preventOverflow: {
          enabled: this._config.adaptivePosition
        }
      },
      allowedPositions: this._config.allowedPositions
    });
    this._positionService.event$?.pipe(take(1)).subscribe(() => {
      this._positionService.disable();
      if (this._config.isAnimated) {
        this.animationState = this.isTopPosition ? "animated-up" : "animated-down";
        return;
      }
      this.animationState = "unanimated";
    });
    this.containerClass = this._config.containerClass;
    this.isOtherMonthsActive = this._config.selectFromOtherMonth;
    this.withTimepicker = this._config.withTimepicker;
    this._effects?.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
    let currentDate;
    this._subs.push(this._store.select((state2) => state2.selectedRange).subscribe((dateRange) => {
      currentDate = dateRange;
      this.valueChange.emit(dateRange);
      this.chosenRange = dateRange || [];
    }));
    this._subs.push(this._store.select((state2) => state2.selectedTime).subscribe((time) => {
      if (!time || !time[0] || !time[1] || !(time[0] instanceof Date) || !(time[1] instanceof Date) || currentDate && time[0] === currentDate[0] && time[1] === currentDate[1]) {
        return;
      }
      this.valueChange.emit(time);
      this.chosenRange = time || [];
    }));
  }
  ngAfterViewInit() {
    this.selectedTimeSub.add(this.selectedTime?.subscribe((val) => {
      if (Array.isArray(val) && val.length >= 2) {
        this.startTimepicker?.writeValue(val[0]);
        this.endTimepicker?.writeValue(val[1]);
      }
    }));
    this.startTimepicker?.registerOnChange((val) => {
      this.timeSelectHandler(val, 0);
    });
    this.endTimepicker?.registerOnChange((val) => {
      this.timeSelectHandler(val, 1);
    });
  }
  get isTopPosition() {
    return this._element.nativeElement.classList.contains("top");
  }
  positionServiceEnable() {
    this._positionService.enable();
  }
  timeSelectHandler(date, index) {
    this._store.dispatch(this._actions.selectTime(date, index));
  }
  daySelectHandler(day) {
    if (!day) {
      return;
    }
    const isDisabled = this.isOtherMonthsActive ? day.isDisabled : day.isOtherMonth || day.isDisabled;
    if (isDisabled) {
      return;
    }
    this.rangesProcessing(day);
  }
  monthSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    day.isSelected = true;
    if (this._config.minMode !== "month") {
      if (day.isDisabled) {
        return;
      }
      this._store.dispatch(this._actions.navigateTo({
        unit: {
          month: getMonth(day.date),
          year: getFullYear(day.date)
        },
        viewMode: "day"
      }));
      return;
    }
    this.rangesProcessing(day);
  }
  yearSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    day.isSelected = true;
    if (this._config.minMode !== "year") {
      if (day.isDisabled) {
        return;
      }
      this._store.dispatch(this._actions.navigateTo({
        unit: {
          year: getFullYear(day.date)
        },
        viewMode: "month"
      }));
      return;
    }
    this.rangesProcessing(day);
  }
  rangesProcessing(day) {
    if (this._rangeStack.length === 1) {
      this._rangeStack = day.date >= this._rangeStack[0] ? [this._rangeStack[0], day.date] : [day.date];
    }
    if (this._config.maxDateRange) {
      this.setMaxDateRangeOnCalendar(day.date);
    }
    if (this._rangeStack.length === 0) {
      this._rangeStack = [day.date];
      if (this._config.maxDateRange) {
        this.setMaxDateRangeOnCalendar(day.date);
      }
    }
    this._store.dispatch(this._actions.selectRange(this._rangeStack));
    if (this._rangeStack.length === 2) {
      this._rangeStack = [];
    }
  }
  ngOnDestroy() {
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    this.selectedTimeSub.unsubscribe();
    this._effects?.destroy();
  }
  setRangeOnCalendar(dates) {
    if (dates) {
      this._rangeStack = dates.value instanceof Date ? [dates.value] : dates.value;
    }
    this._store.dispatch(this._actions.selectRange(this._rangeStack));
  }
  setMaxDateRangeOnCalendar(currentSelection) {
    let maxDateRange = new Date(currentSelection);
    if (this._config.maxDate) {
      const maxDateValueInMilliseconds = this._config.maxDate.getTime();
      const maxDateRangeInMilliseconds = currentSelection.getTime() + (this._config.maxDateRange || 0) * dayInMilliseconds;
      maxDateRange = maxDateRangeInMilliseconds > maxDateValueInMilliseconds ? new Date(this._config.maxDate) : new Date(maxDateRangeInMilliseconds);
    } else {
      maxDateRange.setDate(currentSelection.getDate() + (this._config.maxDateRange || 0));
    }
    this._effects?.setMaxDate(maxDateRange);
  }
};
_BsDaterangepickerContainerComponent.ɵfac = function BsDaterangepickerContainerComponent_Factory(t) {
  return new (t || _BsDaterangepickerContainerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(BsDatepickerStore), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BsDatepickerActions), ɵɵdirectiveInject(BsDatepickerEffects), ɵɵdirectiveInject(PositioningService));
};
_BsDaterangepickerContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsDaterangepickerContainerComponent,
  selectors: [["bs-daterangepicker-container"]],
  viewQuery: function BsDaterangepickerContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTimepicker = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.endTimepicker = _t.first);
    }
  },
  hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
  hostVars: 2,
  hostBindings: function BsDaterangepickerContainerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function BsDaterangepickerContainerComponent_click_HostBindingHandler($event) {
        return ctx._stopPropagation($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.isDatepickerDisabled)("readonly", ctx.isDatepickerReadonly);
    }
  },
  features: [ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 3,
  consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "isDisabled", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], [3, "disabled"], ["startTP", ""], [3, "disabled", 4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]],
  template: function BsDaterangepickerContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, BsDaterangepickerContainerComponent_div_0_Template, 10, 11, "div", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.viewMode));
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, TimepickerComponent, BsCustomDatesViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, AsyncPipe],
  encapsulation: 2,
  data: {
    animation: [datepickerAnimation]
  }
});
var BsDaterangepickerContainerComponent = _BsDaterangepickerContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-daterangepicker-container",
      providers: [BsDatepickerStore, BsDatepickerEffects],
      host: {
        class: "bottom",
        "(click)": "_stopPropagation($event)",
        role: "dialog",
        "aria-label": "calendar"
      },
      animations: [datepickerAnimation],
      template: `<!-- days calendar view mode -->
<div class="bs-datepicker" [ngClass]="containerClass" *ngIf="viewMode | async">
  <div class="bs-datepicker-container"
    [@datepickerAnimation]="animationState"
    (@datepickerAnimation.done)="positionServiceEnable()">
    <!--calendars-->
    <div class="bs-calendar-container" [ngSwitch]="viewMode | async" role="application">
      <!--days calendar-->
      <ng-container *ngSwitchCase="'day'">
        <div class="bs-media-container">
          <bs-days-calendar-view
            *ngFor="let calendar of daysCalendar$ | async"
            [class.bs-datepicker-multiple]="multipleCalendars"
            [calendar]="calendar"
            [isDisabled]="isDatePickerDisabled"
            [options]="options$ | async"
            (onNavigate)="navigateTo($event)"
            (onViewMode)="setViewMode($event)"
            (onHover)="dayHoverHandler($event)"
            (onHoverWeek)="weekHoverHandler($event)"
            (onSelect)="daySelectHandler($event)">
          </bs-days-calendar-view>
        </div>
        <div *ngIf="withTimepicker" class="bs-timepicker-in-datepicker-container">
          <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
          <timepicker #endTP *ngIf="isRangePicker" [disabled]="isDatePickerDisabled"></timepicker>
        </div>
      </ng-container>

      <!--months calendar-->
      <div *ngSwitchCase="'month'" class="bs-media-container">
        <bs-month-calendar-view
          *ngFor="let calendar of monthsCalendar | async"
          [class.bs-datepicker-multiple]="multipleCalendars"
          [calendar]="calendar"
          (onNavigate)="navigateTo($event)"
          (onViewMode)="setViewMode($event)"
          (onHover)="monthHoverHandler($event)"
          (onSelect)="monthSelectHandler($event)">
        </bs-month-calendar-view>
      </div>

      <!--years calendar-->
      <div *ngSwitchCase="'year'" class="bs-media-container">
        <bs-years-calendar-view
          *ngFor="let calendar of yearsCalendar | async"
          [class.bs-datepicker-multiple]="multipleCalendars"
          [calendar]="calendar"
          (onNavigate)="navigateTo($event)"
          (onViewMode)="setViewMode($event)"
          (onHover)="yearHoverHandler($event)"
          (onSelect)="yearSelectHandler($event)">
        </bs-years-calendar-view>
      </div>
    </div>

    <!--applycancel buttons-->
    <div class="bs-datepicker-buttons" *ngIf="false">
      <button class="btn btn-success" type="button">Apply</button>
      <button class="btn btn-default" type="button">Cancel</button>
    </div>

    <div class="bs-datepicker-buttons" *ngIf="showTodayBtn || showClearBtn">
      <div class="btn-today-wrapper"
           [class.today-left]="todayPos === 'left'"
           [class.today-right]="todayPos === 'right'"
           [class.today-center]="todayPos === 'center'"
           *ngIf="showTodayBtn">
        <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
      </div>

        <div class="btn-clear-wrapper"
        [class.clear-left]="clearPos === 'left'"
        [class.clear-right]="clearPos === 'right'"
        [class.clear-center]="clearPos === 'center'"
        *ngIf="showClearBtn">
          <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
        </div>
    </div>

  </div>

  <!--custom dates or date ranges picker-->
  <div class="bs-datepicker-custom-range" *ngIf="customRanges && customRanges.length > 0">
    <bs-custom-date-view
      [selectedRange]="chosenRange"
      [ranges]="customRanges"
      [customRangeLabel]="customRangeBtnLbl"
      (onSelect)="setRangeOnCalendar($event)">
    </bs-custom-date-view>
  </div>
</div>
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    startTimepicker: [{
      type: ViewChild,
      args: ["startTP"]
    }],
    endTimepicker: [{
      type: ViewChild,
      args: ["endTP"]
    }],
    isDatepickerDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    isDatepickerReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var _BsDaterangepickerInlineContainerComponent = class _BsDaterangepickerInlineContainerComponent extends BsDaterangepickerContainerComponent {
  get disabledValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get readonlyValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
    super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
    _renderer.setStyle(_element.nativeElement, "display", "inline-block");
    _renderer.setStyle(_element.nativeElement, "position", "static");
  }
};
_BsDaterangepickerInlineContainerComponent.ɵfac = function BsDaterangepickerInlineContainerComponent_Factory(t) {
  return new (t || _BsDaterangepickerInlineContainerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDatepickerConfig), ɵɵdirectiveInject(BsDatepickerStore), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BsDatepickerActions), ɵɵdirectiveInject(BsDatepickerEffects), ɵɵdirectiveInject(PositioningService));
};
_BsDaterangepickerInlineContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsDaterangepickerInlineContainerComponent,
  selectors: [["bs-daterangepicker-inline-container"]],
  hostVars: 2,
  hostBindings: function BsDaterangepickerInlineContainerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_click_HostBindingHandler($event) {
        return ctx._stopPropagation($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.disabledValue)("readonly", ctx.readonlyValue);
    }
  },
  features: [ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 3,
  consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "isDisabled", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], [3, "disabled"], ["startTP", ""], [3, "disabled", 4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]],
  template: function BsDaterangepickerInlineContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, BsDaterangepickerInlineContainerComponent_div_0_Template, 10, 11, "div", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.viewMode));
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, TimepickerComponent, BsCustomDatesViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, AsyncPipe],
  encapsulation: 2,
  data: {
    animation: [datepickerAnimation]
  }
});
var BsDaterangepickerInlineContainerComponent = _BsDaterangepickerInlineContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInlineContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-daterangepicker-inline-container",
      providers: [BsDatepickerStore, BsDatepickerEffects],
      host: {
        "(click)": "_stopPropagation($event)"
      },
      animations: [datepickerAnimation],
      template: `<!-- days calendar view mode -->
<div class="bs-datepicker" [ngClass]="containerClass" *ngIf="viewMode | async">
  <div class="bs-datepicker-container"
    [@datepickerAnimation]="animationState"
    (@datepickerAnimation.done)="positionServiceEnable()">
    <!--calendars-->
    <div class="bs-calendar-container" [ngSwitch]="viewMode | async" role="application">
      <!--days calendar-->
      <ng-container *ngSwitchCase="'day'">
        <div class="bs-media-container">
          <bs-days-calendar-view
            *ngFor="let calendar of daysCalendar$ | async"
            [class.bs-datepicker-multiple]="multipleCalendars"
            [calendar]="calendar"
            [isDisabled]="isDatePickerDisabled"
            [options]="options$ | async"
            (onNavigate)="navigateTo($event)"
            (onViewMode)="setViewMode($event)"
            (onHover)="dayHoverHandler($event)"
            (onHoverWeek)="weekHoverHandler($event)"
            (onSelect)="daySelectHandler($event)">
          </bs-days-calendar-view>
        </div>
        <div *ngIf="withTimepicker" class="bs-timepicker-in-datepicker-container">
          <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
          <timepicker #endTP *ngIf="isRangePicker" [disabled]="isDatePickerDisabled"></timepicker>
        </div>
      </ng-container>

      <!--months calendar-->
      <div *ngSwitchCase="'month'" class="bs-media-container">
        <bs-month-calendar-view
          *ngFor="let calendar of monthsCalendar | async"
          [class.bs-datepicker-multiple]="multipleCalendars"
          [calendar]="calendar"
          (onNavigate)="navigateTo($event)"
          (onViewMode)="setViewMode($event)"
          (onHover)="monthHoverHandler($event)"
          (onSelect)="monthSelectHandler($event)">
        </bs-month-calendar-view>
      </div>

      <!--years calendar-->
      <div *ngSwitchCase="'year'" class="bs-media-container">
        <bs-years-calendar-view
          *ngFor="let calendar of yearsCalendar | async"
          [class.bs-datepicker-multiple]="multipleCalendars"
          [calendar]="calendar"
          (onNavigate)="navigateTo($event)"
          (onViewMode)="setViewMode($event)"
          (onHover)="yearHoverHandler($event)"
          (onSelect)="yearSelectHandler($event)">
        </bs-years-calendar-view>
      </div>
    </div>

    <!--applycancel buttons-->
    <div class="bs-datepicker-buttons" *ngIf="false">
      <button class="btn btn-success" type="button">Apply</button>
      <button class="btn btn-default" type="button">Cancel</button>
    </div>

    <div class="bs-datepicker-buttons" *ngIf="showTodayBtn || showClearBtn">
      <div class="btn-today-wrapper"
           [class.today-left]="todayPos === 'left'"
           [class.today-right]="todayPos === 'right'"
           [class.today-center]="todayPos === 'center'"
           *ngIf="showTodayBtn">
        <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
      </div>

        <div class="btn-clear-wrapper"
        [class.clear-left]="clearPos === 'left'"
        [class.clear-right]="clearPos === 'right'"
        [class.clear-center]="clearPos === 'center'"
        *ngIf="showClearBtn">
          <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
        </div>
    </div>

  </div>

  <!--custom dates or date ranges picker-->
  <div class="bs-datepicker-custom-range" *ngIf="customRanges && customRanges.length > 0">
    <bs-custom-date-view
      [selectedRange]="chosenRange"
      [ranges]="customRanges"
      [customRangeLabel]="customRangeBtnLbl"
      (onSelect)="setRangeOnCalendar($event)">
    </bs-custom-date-view>
  </div>
</div>
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    disabledValue: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    readonlyValue: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var _BsDaterangepickerInlineDirective = class _BsDaterangepickerInlineDirective {
  /**
   * Initial value of datepicker
   */
  set bsValue(value) {
    if (this._bsValue === value) {
      return;
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setDateRangesCurrentTimeOnDateSelect(value);
    }
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
  }
  ngOnInit() {
    this.setConfig();
    this.initSubscribes();
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue.initCurrentTime && changes["bsConfig"].currentValue.initCurrentTime !== changes["bsConfig"].previousValue.initCurrentTime && this._bsValue) {
        this._bsValue = setDateRangesCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
      this._datepickerRef.instance.value = this._bsValue;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["daysDisabled"]) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
    this.setConfig();
  }
  /**
   * Set config for datepicker
   */
  setConfig() {
    if (this._datepicker) {
      this._datepicker.hide();
    }
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
      initCurrentTime: this.bsConfig?.initCurrentTime
    });
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDaterangepickerInlineContainerComponent).to(this._elementRef).show();
    this.initSubscribes();
  }
  initSubscribes() {
    this.unsubscribeSubscriptions();
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.pipe(filter((range) => range && range[0] && !!range[1])).subscribe((value) => {
        this.bsValue = value;
      }));
    }
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.unsubscribeSubscriptions();
  }
};
_BsDaterangepickerInlineDirective.ɵfac = function BsDaterangepickerInlineDirective_Factory(t) {
  return new (t || _BsDaterangepickerInlineDirective)(ɵɵdirectiveInject(BsDaterangepickerInlineConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory));
};
_BsDaterangepickerInlineDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDaterangepickerInlineDirective,
  selectors: [["bs-daterangepicker-inline"]],
  inputs: {
    bsValue: "bsValue",
    bsConfig: "bsConfig",
    isDisabled: "isDisabled",
    minDate: "minDate",
    maxDate: "maxDate",
    dateCustomClasses: "dateCustomClasses",
    daysDisabled: "daysDisabled",
    datesDisabled: "datesDisabled",
    datesEnabled: "datesEnabled"
  },
  outputs: {
    bsValueChange: "bsValueChange"
  },
  exportAs: ["bsDaterangepickerInline"],
  features: [ɵɵNgOnChangesFeature]
});
var BsDaterangepickerInlineDirective = _BsDaterangepickerInlineDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInlineDirective, [{
    type: Directive,
    args: [{
      selector: "bs-daterangepicker-inline",
      exportAs: "bsDaterangepickerInline"
    }]
  }], () => [{
    type: BsDaterangepickerInlineConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    bsValue: [{
      type: Input
    }],
    bsConfig: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    daysDisabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }]
  });
})();
var BS_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsDatepickerInputDirective),
  multi: true
};
var BS_DATEPICKER_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsDatepickerInputDirective),
  multi: true
};
var _BsDatepickerInputDirective = class _BsDatepickerInputDirective {
  constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
    this._picker = _picker;
    this._localeService = _localeService;
    this._renderer = _renderer;
    this._elRef = _elRef;
    this.changeDetection = changeDetection;
    this._onChange = Function.prototype;
    this._onTouched = Function.prototype;
    this._validatorChange = Function.prototype;
    this._subs = new Subscription();
  }
  onChange(event) {
    this.writeValue(event.target.value);
    this._onChange(this._value);
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
    this._onTouched();
  }
  onBlur() {
    this._onTouched();
  }
  hide() {
    this._picker.hide();
    this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
  }
  ngOnInit() {
    const setBsValue = (value) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    };
    if (this._picker._bsValue) {
      setBsValue(this._picker._bsValue);
    }
    this._subs.add(this._picker.bsValueChange.subscribe(setBsValue));
    this._subs.add(this._localeService.localeChange.subscribe(() => {
      this._setInputValue(this._value);
    }));
    this._subs.add(this._picker.dateInputFormat$.pipe(distinctUntilChanged()).subscribe(() => {
      this._setInputValue(this._value);
    }));
  }
  ngOnDestroy() {
    this._subs.unsubscribe();
  }
  _setInputValue(value) {
    const initialDate = !value ? "" : formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
    this._renderer.setProperty(this._elRef.nativeElement, "value", initialDate);
  }
  validate(c) {
    const _value = c.value;
    if (_value === null || _value === void 0 || _value === "") {
      return null;
    }
    if (isDate(_value)) {
      const _isDateValid = isDateValid(_value);
      if (!_isDateValid) {
        return {
          bsDate: {
            invalid: _value
          }
        };
      }
      if (this._picker && this._picker.minDate && isBefore(_value, this._picker.minDate, "date")) {
        this.writeValue(this._picker.minDate);
        return {
          bsDate: {
            minDate: this._picker.minDate
          }
        };
      }
      if (this._picker && this._picker.maxDate && isAfter(_value, this._picker.maxDate, "date")) {
        this.writeValue(this._picker.maxDate);
        return {
          bsDate: {
            maxDate: this._picker.maxDate
          }
        };
      }
    }
    return null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChange = fn;
  }
  writeValue(value) {
    if (!value) {
      this._value = void 0;
    } else {
      const _localeKey = this._localeService.currentLocale;
      const _locale = getLocale(_localeKey);
      if (!_locale) {
        throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
      }
      this._value = parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
      if (this._picker._config.useUtc) {
        const utcValue = utcAsLocal(this._value);
        this._value = utcValue === null ? void 0 : utcValue;
      }
    }
    this._picker.bsValue = this._value;
  }
  setDisabledState(isDisabled) {
    this._picker.isDisabled = isDisabled;
    if (isDisabled) {
      this._renderer.setAttribute(this._elRef.nativeElement, "disabled", "disabled");
      return;
    }
    this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
};
_BsDatepickerInputDirective.ɵfac = function BsDatepickerInputDirective_Factory(t) {
  return new (t || _BsDatepickerInputDirective)(ɵɵdirectiveInject(BsDatepickerDirective, 1), ɵɵdirectiveInject(BsLocaleService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_BsDatepickerInputDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDatepickerInputDirective,
  selectors: [["input", "bsDatepicker", ""]],
  hostBindings: function BsDatepickerInputDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function BsDatepickerInputDirective_change_HostBindingHandler($event) {
        return ctx.onChange($event);
      })("blur", function BsDatepickerInputDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("keyup.esc", function BsDatepickerInputDirective_keyup_esc_HostBindingHandler() {
        return ctx.hide();
      })("keydown.enter", function BsDatepickerInputDirective_keydown_enter_HostBindingHandler() {
        return ctx.hide();
      });
    }
  },
  features: [ɵɵProvidersFeature([BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR])]
});
var BsDatepickerInputDirective = _BsDatepickerInputDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInputDirective, [{
    type: Directive,
    args: [{
      selector: `input[bsDatepicker]`,
      providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
    }]
  }], () => [{
    type: BsDatepickerDirective,
    decorators: [{
      type: Host
    }]
  }, {
    type: BsLocaleService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    onChange: [{
      type: HostListener,
      args: ["change", ["$event"]]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    hide: [{
      type: HostListener,
      args: ["keyup.esc"]
    }, {
      type: HostListener,
      args: ["keydown.enter"]
    }]
  });
})();
var _BsDaterangepickerConfig = class _BsDaterangepickerConfig extends BsDatepickerConfig {
  constructor() {
    super(...arguments);
    this.displayMonths = 2;
  }
};
_BsDaterangepickerConfig.ɵfac = /* @__PURE__ */ (() => {
  let ɵBsDaterangepickerConfig_BaseFactory;
  return function BsDaterangepickerConfig_Factory(t) {
    return (ɵBsDaterangepickerConfig_BaseFactory || (ɵBsDaterangepickerConfig_BaseFactory = ɵɵgetInheritedFactory(_BsDaterangepickerConfig)))(t || _BsDaterangepickerConfig);
  };
})();
_BsDaterangepickerConfig.ɵprov = ɵɵdefineInjectable({
  token: _BsDaterangepickerConfig,
  factory: _BsDaterangepickerConfig.ɵfac,
  providedIn: "root"
});
var BsDaterangepickerConfig = _BsDaterangepickerConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var previousDate;
var _BsDaterangepickerDirective = class _BsDaterangepickerDirective {
  /**
   * Returns whether or not the daterangepicker is currently being shown
   */
  get isOpen() {
    return this._datepicker.isShown;
  }
  set isOpen(value) {
    this.isOpen$.next(value);
  }
  /**
   * Initial value of daterangepicker
   */
  set bsValue(value) {
    if (this._bsValue === value) {
      return;
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setDateRangesCurrentTimeOnDateSelect(value);
    }
    this.initPreviousValue();
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  get isDatepickerReadonly() {
    return this.isDisabled ? "" : null;
  }
  get rangeInputFormat$() {
    return this._rangeInputFormat$;
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.placement = "bottom";
    this.triggers = "click";
    this.outsideClick = true;
    this.container = "body";
    this.outsideEsc = true;
    this.isDestroy$ = new Subject();
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    this._rangeInputFormat$ = new Subject();
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    Object.assign(this, _config);
    this.onShown = this._datepicker.onShown;
    this.onHidden = this._datepicker.onHidden;
    this.isOpen$ = new BehaviorSubject(this.isOpen);
  }
  ngOnInit() {
    this.isDestroy$ = new Subject();
    this._datepicker.listen({
      outsideClick: this.outsideClick,
      outsideEsc: this.outsideEsc,
      triggers: this.triggers,
      show: () => this.show()
    });
    this.initPreviousValue();
    this.setConfig();
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this.initPreviousValue();
        this._bsValue = setDateRangesCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
      this.setConfig();
      this._rangeInputFormat$.next(changes["bsConfig"].currentValue && changes["bsConfig"].currentValue.rangeInputFormat);
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
    }
    if (changes["daysDisabled"]) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
  }
  ngAfterViewInit() {
    this.isOpen$.pipe(filter((isOpen) => isOpen !== this.isOpen), takeUntil(this.isDestroy$)).subscribe(() => this.toggle());
  }
  /**
   * Opens an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  show() {
    if (this._datepicker.isShown) {
      return;
    }
    this.setConfig();
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDaterangepickerContainerComponent).to(this.container).position({
      attachment: this.placement
    }).show({
      placement: this.placement
    });
    this.initSubscribes();
  }
  initSubscribes() {
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.pipe(filter((range) => range && range[0] && !!range[1])).subscribe((value) => {
        this.initPreviousValue();
        this.bsValue = value;
        if (this.keepDatepickerModalOpened()) {
          return;
        }
        this.hide();
      }));
    }
  }
  initPreviousValue() {
    previousDate = this._bsValue;
  }
  keepDatepickerModalOpened() {
    if (!previousDate || !this.bsConfig?.keepDatepickerOpened || !this._config.withTimepicker) {
      return false;
    }
    return this.isDateSame();
  }
  isDateSame() {
    return this._bsValue?.[0]?.getDate() === previousDate?.[0]?.getDate() && this._bsValue?.[0]?.getMonth() === previousDate?.[0]?.getMonth() && this._bsValue?.[0]?.getFullYear() === previousDate?.[0]?.getFullYear() && this._bsValue?.[1]?.getDate() === previousDate?.[1]?.getDate() && this._bsValue?.[1]?.getMonth() === previousDate?.[1]?.getMonth() && this._bsValue?.[1]?.getFullYear() === previousDate?.[1]?.getFullYear();
  }
  /**
   * Set config for daterangepicker
   */
  setConfig() {
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: this.bsConfig?.keepDatesOutOfRules ? this._bsValue : checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
      initCurrentTime: this.bsConfig?.initCurrentTime,
      keepDatepickerOpened: this.bsConfig?.keepDatepickerOpened,
      keepDatesOutOfRules: this.bsConfig?.keepDatesOutOfRules
    });
  }
  /**
   * Closes an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  hide() {
    if (this.isOpen) {
      this._datepicker.hide();
    }
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    if (this._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
    }
  }
  /**
   * Toggles an element’s datepicker. This is considered a “manual” triggering
   * of the datepicker.
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.isOpen$.next(false);
    if (this.isDestroy$) {
      this.isDestroy$.next(null);
      this.isDestroy$.complete();
    }
    this.unsubscribeSubscriptions();
  }
};
_BsDaterangepickerDirective.ɵfac = function BsDaterangepickerDirective_Factory(t) {
  return new (t || _BsDaterangepickerDirective)(ɵɵdirectiveInject(BsDaterangepickerConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory));
};
_BsDaterangepickerDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDaterangepickerDirective,
  selectors: [["", "bsDaterangepicker", ""]],
  hostVars: 1,
  hostBindings: function BsDaterangepickerDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("readonly", ctx.isDatepickerReadonly);
    }
  },
  inputs: {
    placement: "placement",
    triggers: "triggers",
    outsideClick: "outsideClick",
    container: "container",
    outsideEsc: "outsideEsc",
    isOpen: "isOpen",
    bsValue: "bsValue",
    bsConfig: "bsConfig",
    isDisabled: "isDisabled",
    minDate: "minDate",
    maxDate: "maxDate",
    dateCustomClasses: "dateCustomClasses",
    daysDisabled: "daysDisabled",
    datesDisabled: "datesDisabled",
    datesEnabled: "datesEnabled"
  },
  outputs: {
    onShown: "onShown",
    onHidden: "onHidden",
    bsValueChange: "bsValueChange"
  },
  exportAs: ["bsDaterangepicker"],
  features: [ɵɵNgOnChangesFeature]
});
var BsDaterangepickerDirective = _BsDaterangepickerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDaterangepicker]",
      exportAs: "bsDaterangepicker"
    }]
  }], () => [{
    type: BsDaterangepickerConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    placement: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    outsideClick: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    outsideEsc: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    onShown: [{
      type: Output
    }],
    onHidden: [{
      type: Output
    }],
    bsValue: [{
      type: Input
    }],
    bsConfig: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    daysDisabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }],
    isDatepickerReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsDaterangepickerInputDirective),
  multi: true
};
var BS_DATERANGEPICKER_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsDaterangepickerInputDirective),
  multi: true
};
var _BsDaterangepickerInputDirective = class _BsDaterangepickerInputDirective {
  constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
    this._picker = _picker;
    this._localeService = _localeService;
    this._renderer = _renderer;
    this._elRef = _elRef;
    this.changeDetection = changeDetection;
    this._onChange = Function.prototype;
    this._onTouched = Function.prototype;
    this._validatorChange = Function.prototype;
    this._subs = new Subscription();
  }
  ngOnInit() {
    const setBsValue = (value) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    };
    if (this._picker._bsValue) {
      setBsValue(this._picker._bsValue);
    }
    this._subs.add(this._picker.bsValueChange.subscribe((value) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    }));
    this._subs.add(this._localeService.localeChange.subscribe(() => {
      this._setInputValue(this._value);
    }));
    this._subs.add(
      // update input value on format change
      this._picker.rangeInputFormat$.pipe(distinctUntilChanged()).subscribe(() => {
        this._setInputValue(this._value);
      })
    );
  }
  ngOnDestroy() {
    this._subs.unsubscribe();
  }
  onKeydownEvent(event) {
    if (event.keyCode === 13 || event.code === "Enter") {
      this.hide();
    }
  }
  _setInputValue(date) {
    let range = "";
    if (date) {
      const start = !date[0] ? "" : formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
      const end = !date[1] ? "" : formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
      range = start && end ? start + this._picker._config.rangeSeparator + end : "";
    }
    this._renderer.setProperty(this._elRef.nativeElement, "value", range);
  }
  onChange(event) {
    this.writeValue(event.target.value);
    this._onChange(this._value);
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
    this._onTouched();
  }
  validate(c) {
    let _value = c.value;
    const errors = [];
    if (_value === null || _value === void 0 || !isArray(_value)) {
      return null;
    }
    _value = _value.slice().sort((a, b) => a.getTime() - b.getTime());
    const _isFirstDateValid = isDateValid(_value[0]);
    const _isSecondDateValid = isDateValid(_value[1]);
    if (!_isFirstDateValid) {
      return {
        bsDate: {
          invalid: _value[0]
        }
      };
    }
    if (!_isSecondDateValid) {
      return {
        bsDate: {
          invalid: _value[1]
        }
      };
    }
    if (this._picker && this._picker.minDate && isBefore(_value[0], this._picker.minDate, "date")) {
      _value[0] = this._picker.minDate;
      errors.push({
        bsDate: {
          minDate: this._picker.minDate
        }
      });
    }
    if (this._picker && this._picker.maxDate && isAfter(_value[1], this._picker.maxDate, "date")) {
      _value[1] = this._picker.maxDate;
      errors.push({
        bsDate: {
          maxDate: this._picker.maxDate
        }
      });
    }
    if (errors.length > 0) {
      this.writeValue(_value);
      return errors;
    }
    return null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChange = fn;
  }
  writeValue(value) {
    if (!value) {
      this._value = void 0;
    } else {
      const _localeKey = this._localeService.currentLocale;
      const _locale = getLocale(_localeKey);
      if (!_locale) {
        throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
      }
      let _input = [];
      if (typeof value === "string") {
        const trimmedSeparator = this._picker._config.rangeSeparator.trim();
        if (value.replace(/[^-]/g, "").length > 1) {
          _input = value.split(this._picker._config.rangeSeparator);
        } else {
          _input = value.split(trimmedSeparator.length > 0 ? trimmedSeparator : this._picker._config.rangeSeparator).map((_val) => _val.trim());
        }
      }
      if (Array.isArray(value)) {
        _input = value;
      }
      this._value = _input.map((_val) => {
        if (this._picker._config.useUtc) {
          return utcAsLocal(parseDate(_val, this._picker._config.rangeInputFormat, this._localeService.currentLocale));
        }
        return parseDate(_val, this._picker._config.rangeInputFormat, this._localeService.currentLocale);
      }).map((date) => isNaN(date.valueOf()) ? void 0 : date);
    }
    this._picker.bsValue = this._value;
  }
  setDisabledState(isDisabled) {
    this._picker.isDisabled = isDisabled;
    if (isDisabled) {
      this._renderer.setAttribute(this._elRef.nativeElement, "disabled", "disabled");
      return;
    }
    this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  onBlur() {
    this._onTouched();
  }
  hide() {
    this._picker.hide();
    this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
  }
};
_BsDaterangepickerInputDirective.ɵfac = function BsDaterangepickerInputDirective_Factory(t) {
  return new (t || _BsDaterangepickerInputDirective)(ɵɵdirectiveInject(BsDaterangepickerDirective, 1), ɵɵdirectiveInject(BsLocaleService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_BsDaterangepickerInputDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDaterangepickerInputDirective,
  selectors: [["input", "bsDaterangepicker", ""]],
  hostBindings: function BsDaterangepickerInputDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function BsDaterangepickerInputDirective_change_HostBindingHandler($event) {
        return ctx.onChange($event);
      })("keyup.esc", function BsDaterangepickerInputDirective_keyup_esc_HostBindingHandler() {
        return ctx.hide();
      })("keydown", function BsDaterangepickerInputDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeydownEvent($event);
      })("blur", function BsDaterangepickerInputDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
  },
  features: [ɵɵProvidersFeature([BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR])]
});
var BsDaterangepickerInputDirective = _BsDaterangepickerInputDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInputDirective, [{
    type: Directive,
    args: [{
      selector: `input[bsDaterangepicker]`,
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "(change)": "onChange($event)",
        "(keyup.esc)": "hide()",
        "(keydown)": "onKeydownEvent($event)",
        "(blur)": "onBlur()"
      },
      providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
    }]
  }], () => [{
    type: BsDaterangepickerDirective,
    decorators: [{
      type: Host
    }]
  }, {
    type: BsLocaleService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var _BsDatepickerModule = class _BsDatepickerModule {
  static forRoot() {
    return {
      ngModule: _BsDatepickerModule,
      providers: [ComponentLoaderFactory, PositioningService, BsDatepickerStore, BsDatepickerActions, BsDatepickerEffects, BsLocaleService, TimepickerActions]
    };
  }
};
_BsDatepickerModule.ɵfac = function BsDatepickerModule_Factory(t) {
  return new (t || _BsDatepickerModule)();
};
_BsDatepickerModule.ɵmod = ɵɵdefineNgModule({
  type: _BsDatepickerModule,
  declarations: [BsCalendarLayoutComponent, BsCurrentDateViewComponent, BsCustomDatesViewComponent, BsDatepickerDayDecoratorComponent, BsDatepickerNavigationViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsTimepickerViewComponent, BsYearsCalendarViewComponent, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective],
  imports: [CommonModule, TooltipModule, TimepickerModule],
  exports: [BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective]
});
_BsDatepickerModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, TooltipModule, TimepickerModule]
});
var BsDatepickerModule = _BsDatepickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TooltipModule, TimepickerModule],
      declarations: [BsCalendarLayoutComponent, BsCurrentDateViewComponent, BsCustomDatesViewComponent, BsDatepickerDayDecoratorComponent, BsDatepickerNavigationViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsTimepickerViewComponent, BsYearsCalendarViewComponent, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective],
      exports: [BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective]
    }]
  }], null, null);
})();
export {
  BsDatepickerConfig,
  BsDatepickerContainerComponent,
  BsDatepickerDirective,
  BsDatepickerInlineConfig,
  BsDatepickerInlineContainerComponent,
  BsDatepickerInlineDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule,
  BsDaterangepickerConfig,
  BsDaterangepickerContainerComponent,
  BsDaterangepickerDirective,
  BsDaterangepickerInlineConfig,
  BsDaterangepickerInlineContainerComponent,
  BsDaterangepickerInlineDirective,
  BsDaterangepickerInputDirective,
  BsLocaleService
};
/*! Bundled license information:

ngx-bootstrap/chronos/fesm2022/ngx-bootstrap-chronos.mjs:
  (*! moment.js locale configuration *)
  (*! locale : Arabic [ar] *)
  (*! author : Abdel Said: https://github.com/abdelsaid *)
  (*! author : Ahmed Elkhatib *)
  (*! author : forabi https://github.com/forabi *)
  (*! locale : Bulgarian [bg] *)
  (*! author : Iskren Ivov Chernev : https://github.com/ichernev *)
  (*! author : Kunal Marwaha : https://github.com/marwahaha *)
  (*! author : Matt Grande : https://github.com/mattgrande *)
  (*! author : Isaac Cambron : https://github.com/icambron *)
  (*! author : Venelin Manchev : https://github.com/vmanchev *)
  (*! locale : Catalan [ca] *)
  (*! author : Xavier Arbat : https://github.com/XavisaurusRex *)
  (*! locale : Czech [cs] *)
  (*! author : petrbela : https://github.com/petrbela *)
  (*! locale : Danish (Denmark) [da] *)
  (*! author : Per Hansen : https://github.com/perhp *)
  (*! locale : German [de] *)
  (*! author : lluchs : https://github.com/lluchs *)
  (*! author: Menelion Elensúle: https://github.com/Oire *)
  (*! author : Mikolaj Dadela : https://github.com/mik01aj *)
  (*! locale : English (United Kingdom) [en-gb] *)
  (*! author : Chris Gedrim : https://github.com/chrisgedrim *)
  (*! locale : Spanish (Dominican Republic) [es-do] *)
  (*! locale : Spanish [es] *)
  (*! author : Julio Napurí : https://github.com/julionc *)
  (*! locale : Spanish (Puerto Rico) [es-pr] *)
  (*! locale : Spanish (United States) [es-us] *)
  (*! author : bustta : https://github.com/bustta *)
  (*! locale : Estonian [et] *)
  (*! author : Chris Gedrim : https://github.com/a90machado *)
  (*! locale : French [fr] *)
  (*! author : John Fischer : https://github.com/jfroffice *)
  (*! locale : Galician [gl] *)
  (*! author : Darío Beiró : https://github.com/quinobravo *)
  (*! locale : Hebrew [he] *)
  (*! author : Tomer Cohen : https://github.com/tomer *)
  (*! author : Moshe Simantov : https://github.com/DevelopmentIL *)
  (*! author : Tal Ater : https://github.com/TalAter *)
  (*! locale : Hindi [hi] *)
  (*! author : Mayank Singhal : https://github.com/mayanksinghal *)
  (*! locale : Hungarian [hu] *)
  (*! author : Adam Brunner : https://github.com/adambrunner *)
  (*! locale : Croatian [hr] *)
  (*! author : Danijel Grmec : https://github.com/cobaltsis *)
  (*! locale : Indonesia [id] *)
  (*! author : Romy Kusuma : https://github.com/rkusuma *)
  (*! reference: https://github.com/moment/moment/blob/develop/locale/id.js *)
  (*! locale : Italian [it] *)
  (*! author : Lorenzo : https://github.com/aliem *)
  (*! author: Mattia Larentis: https://github.com/nostalgiaz *)
  (*! locale : Japanese [ja] *)
  (*! author : LI Long : https://github.com/baryon *)
  (*! locale : Georgian [ka] *)
  (*! author : Irakli Janiashvili : https://github.com/irakli-janiashvili *)
  (*! author : Levan Tskipuri : https://github.com/tskipa *)
  (*! locale : Korean [ko] *)
  (*! author : Kyungwook, Park : https://github.com/kyungw00k *)
  (*! author : Jeeeyul Lee <jeeeyul@gmail.com> *)
  (*! locale : Lithuanian [lt] *)
  (*! author : Stanislavas Guk : https://github.com/ixoster *)
  (*! locale : Latvian [lv] *)
  (*! author : Matiss Janis Aboltins : https://github.com/matissjanis *)
  (*! locale : Mongolian [mn] *)
  (*! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7 *)
  (*! locale : Norwegian Bokmål [nb] *)
  (*! authors : Espen Hovlandsdal : https://github.com/rexxars *)
  (*!           Sigurd Gartmann : https://github.com/sigurdga *)
  (*! locale : Dutch (Belgium) [nl-be] *)
  (*! author : Joris Röling : https://github.com/jorisroling *)
  (*! author : Jacob Middag : https://github.com/middagj *)
  (*! locale : Dutch [nl] *)
  (*! locale : Polish [pl] *)
  (*! author : Rafal Hirsz : https://github.com/evoL *)
  (*! locale : Portuguese (Brazil) [pt-br] *)
  (*! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira *)
  (*! author : Vlad Gurdiga : https://github.com/gurdiga *)
  (*! author : Valentin Agachi : https://github.com/avaly *)
  (*! locale : Russian [ru] *)
  (*! author : Viktorminator : https://github.com/Viktorminator *)
  (*! Author : Menelion Elensúle : https://github.com/Oire *)
  (*! author : Коренберг Марк : https://github.com/socketpair *)
  (*! locale : Slovak [sk] *)
  (*! author : Jozef Pažin : https://github.com/atiris *)
  (*! locale : Slovenian [sl] *)
  (*! author : mihan : https://github.com/mihan *)
  (*! locale : Albanian [sq] *)
  (*! author : Agon Cecelia : https://github.com/agoncecelia *)
  (*! locale : Swedish [sv] *)
  (*! author : Jens Alm : https://github.com/ulmus *)
  (*! locale : Turkish [tr] *)
  (*! authors : Erhan Gundogan : https://github.com/erhangundogan, *)
  (*!           Burak Yiğit Kaya: https://github.com/BYK *)
  (*! locale : Ukrainian [uk] *)
  (*! author : zemlanin : https://github.com/zemlanin *)
  (*! locale : Việt Nam [vi] *)
  (*! locale : Chinese (China) [zh-cn] *)
  (*! author : suupic : https://github.com/suupic *)
  (*! author : Zeno Zeng : https://github.com/zenozeng *)

ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs:
  (**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v17.2.2
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=ngx-bootstrap_datepicker.js.map
