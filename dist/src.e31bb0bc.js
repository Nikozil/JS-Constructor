// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = row;
exports.col = col;
exports.css = css;
exports.block = block;
exports.button = button;

function row(id, content) {
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return "<div id=\"".concat(id, "\" class = \"row\" style='").concat(styles, "'>").concat(content, "</div>");
}

function col(content) {
  return "<div class = \"col-sm\">".concat(content, "</div>");
}

function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (typeof styles === 'string') return styles;

  var toString = function toString(key) {
    return "".concat(key, ":").concat(styles[key]);
  };

  return Object.keys(styles).map(toString).join(';');
}

function block(type) {
  return "\n  <form name=\"".concat(type, "\">\n  <h5>").concat(type, "</h5>\n  <div class=\"form-group mb-2\">\n    <input\n      class=\"form-control form-control-sm\"\n      name=\"value\"\n      placeholder=\"value\"\n    />\n  </div>\n  <div class=\"form-group mb-2 \">\n    <textarea\n      class=\" form-control\"\n      style=\"height: 50px\"\n      name=\"styles\"\n      placeholder=\"styles\"\n    /></textarea>\n  </div>\n  <button type=\"submit\" class=\"btm btn-primary btn-sm\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n</form>\n<hr />\n  ");
}

function button(type) {
  return "\n  <button type=\"button\" id=\"".concat(type, "\" class=\"btm btn-primary btn-sm\">").concat(type, "</button>\n  \n  <hr />");
}
},{}],"classes/blocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBlock = exports.ColumnsBlock = exports.ImageBlock = exports.TitleBlock = void 0;

var _utils = require("../utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(type, id, value, options) {
    _classCallCheck(this, Block);

    this.type = type;
    this.value = value;
    this.options = options;
    this.id = id;
  }

  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('Метод toHTML должен быть реализован');
    }
  }]);

  return Block;
}();

var TitleBlock = /*#__PURE__*/function (_Block) {
  _inherits(TitleBlock, _Block);

  var _super = _createSuper(TitleBlock);

  function TitleBlock(id, value, options) {
    _classCallCheck(this, TitleBlock);

    return _super.call(this, 'title', id, value, options);
  }

  _createClass(TitleBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options = this.options,
          _this$options$tag = _this$options.tag,
          tag = _this$options$tag === void 0 ? 'h1' : _this$options$tag,
          styles = _this$options.styles;
      return (0, _utils.row)(this.id, (0, _utils.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), (0, _utils.css)(styles));
    }
  }]);

  return TitleBlock;
}(Block);

exports.TitleBlock = TitleBlock;

var ImageBlock = /*#__PURE__*/function (_Block2) {
  _inherits(ImageBlock, _Block2);

  var _super2 = _createSuper(ImageBlock);

  function ImageBlock(id, value, options) {
    _classCallCheck(this, ImageBlock);

    return _super2.call(this, 'image', id, value, options);
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
          is = _this$options2.imageStyles,
          _this$options2$alt = _this$options2.alt,
          alt = _this$options2$alt === void 0 ? '' : _this$options2$alt,
          styles = _this$options2.styles;
      return (0, _utils.row)(this.id, "<img src=\"".concat(this.value, "\" alt=\"").concat(alt, "\" style=\"").concat((0, _utils.css)(is), "\">"), (0, _utils.css)(styles));
    }
  }]);

  return ImageBlock;
}(Block);

exports.ImageBlock = ImageBlock;

var ColumnsBlock = /*#__PURE__*/function (_Block3) {
  _inherits(ColumnsBlock, _Block3);

  var _super3 = _createSuper(ColumnsBlock);

  function ColumnsBlock(id, value, options) {
    _classCallCheck(this, ColumnsBlock);

    return _super3.call(this, 'columns', id, value, options);
  }

  _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var html = this.value.map(_utils.col).join('');
      return (0, _utils.row)(this.id, html, (0, _utils.css)(this.options.styles));
    }
  }]);

  return ColumnsBlock;
}(Block);

exports.ColumnsBlock = ColumnsBlock;

var TextBlock = /*#__PURE__*/function (_Block4) {
  _inherits(TextBlock, _Block4);

  var _super4 = _createSuper(TextBlock);

  function TextBlock(id, value, options) {
    _classCallCheck(this, TextBlock);

    return _super4.call(this, 'text', id, value, options);
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)(this.id, (0, _utils.col)("<p>".concat(this.value, "</p>")), (0, _utils.css)(this.options.styles));
    }
  }]);

  return TextBlock;
}(Block);

exports.TextBlock = TextBlock;
},{"../utils":"utils.js"}],"classes/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _utils = require("../utils");

var _blocks = require("./blocks");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(selector, siteSelector, updateCallback, deleteElemCallback) {
    _classCallCheck(this, Sidebar);

    this.$el = document.querySelector(selector);
    this.$site = document.querySelector(siteSelector);
    this.update = updateCallback;
    this.deleteElem = deleteElemCallback;
    this.init();
    this.stringModel = null;
    this.id = 10;
    this.deleteMode = false;
  }

  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.$el.insertAdjacentHTML('afterbegin', this.template);
      this.$el.addEventListener('click', this.click.bind(this));
      this.$el.addEventListener('submit', this.add.bind(this));
      this.$site.addEventListener('click', this.delete.bind(this));
    }
  }, {
    key: "template",
    get: function get() {
      return [(0, _utils.block)('text'), (0, _utils.block)('title'), (0, _utils.block)('column'), (0, _utils.block)('image'), (0, _utils.button)('download'), (0, _utils.button)('delete')].join('');
    }
  }, {
    key: "click",
    value: function click(event) {
      if (event.type != 'click') return;
      console.log(event.type);
      var type = event.target.id;

      if (type == 'download') {
        event.preventDefault();
        var link = document.createElement('a');
        link.download = 'site.html';
        var blob = new Blob([this.stringModel], {
          type: 'text/html'
        });
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
      } else if (type == 'delete') {
        event.preventDefault();
        this.deleteMode = true;
      }
    }
  }, {
    key: "add",
    value: function add(event) {
      if (event.type != 'submit') return;
      console.log(event.type);
      event.preventDefault();
      var type = event.target.name;
      var value = event.target.value.value;
      var styles = event.target.styles.value;
      var newBlock;

      switch (type) {
        case 'text':
          newBlock = new _blocks.TextBlock(this.id++, value, {
            styles: styles
          });
          break;

        case 'title':
          newBlock = new _blocks.TitleBlock(this.id++, value, {
            styles: styles
          });
          break;

        case 'column':
          newBlock = new _blocks.ColumnsBlock(this.id++, value.split(';'), {
            styles: styles
          });
          break;

        case 'image':
          newBlock = new _blocks.ImageBlock(this.id++, value, {
            styles: styles
          });
          break;

        default:
          break;
      }

      this.stringModel = this.update(newBlock);
      event.target.value.value = '';
      event.target.styles.value = '';
    }
  }, {
    key: "delete",
    value: function _delete(event) {
      if (event.type != 'click') return;

      if (this.deleteMode) {
        var id = event.target.id || event.target.parentNode.id || event.target.parentNode.parentNode.id || event.target.parentNode.parentNode.parentNode.id;
        this.deleteElem(id);
        this.deleteMode = false;
      }
    }
  }]);

  return Sidebar;
}();

exports.Sidebar = Sidebar;
},{"../utils":"utils.js","./blocks":"classes/blocks.js"}],"classes/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);

    this.$el = document.querySelector(selector);
  }

  _createClass(Site, [{
    key: "render",
    value: function render(model) {
      var _this = this;

      this.$el.innerHTML = '';
      model.forEach(function (block) {
        _this.$el.insertAdjacentHTML('beforeend', block.toHTML());
      });
    }
  }, {
    key: "string",
    value: function string(model) {
      var str = "<!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <title>JavaScript Constructor</title>\n        <link\n          href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css\"\n          rel=\"stylesheet\"\n          integrity=\"sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6\"\n          crossorigin=\"anonymous\"\n        />\n      </head>\n      <body>";
      model.forEach(function (block) {
        str += block.toHTML();
      });
      str += "</body>\n    </html>";
      return str;
    }
  }]);

  return Site;
}();

exports.Site = Site;
},{}],"classes/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _sidebar = require("./sidebar");

var _site = require("./site");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(model) {
    _classCallCheck(this, App);

    this.model = model;
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      var site = new _site.Site('#site');
      site.render(this.model);
      new _sidebar.Sidebar('#panel', '#site', function (newBlock) {
        _this.model.push(newBlock);

        site.render(_this.model);
        return site.string(_this.model);
      }, function (id) {
        _this.model = _this.model.filter(function (elem) {
          return elem.id != +id;
        });
        site.render(_this.model);
        return site.string(_this.model);
      });
    }
  }]);

  return App;
}();

exports.App = App;
},{"./sidebar":"classes/sidebar.js","./site":"classes/site.js"}],"assets/image.png":[function(require,module,exports) {
module.exports = "/image.90ac9039.png";
},{}],"model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _image = _interopRequireDefault(require("./assets/image.png"));

var _blocks = require("./classes/blocks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = [new _blocks.TitleBlock(1, 'Конструктор сайтов', {
  tag: 'h2',
  styles: {
    background: 'linear-gradient(to right,#ff0099,#493240)',
    color: '#fff',
    'text-align': 'center',
    padding: '1.5rem'
  }
}), new _blocks.ImageBlock(2, _image.default, {
  styles: {
    background: 'linear-gradient(to left,#f2994a,#f2c94c)',
    padding: '2rem 0',
    display: 'flex',
    'justify-content': 'center'
  },
  imageStyles: {
    width: '500px',
    height: 'auto'
  },
  alt: 'Picture'
}), new _blocks.ColumnsBlock(3, ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae laudantium sed nostrum impedit sapiente facere eligendi ducimus nulla quis, debitis, earum expedita nihil, perferendis cum placeat ipsa necessitatibus at.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae laudantium sed nostrum impedit sapiente facere eligendi ducimus nulla quis, debitis, earum expedita nihil, perferendis cum placeat ipsa necessitatibus at.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae laudantium sed nostrum impedit sapiente facere eligendi ducimus nulla quis, debitis, earum expedita nihil, perferendis cum placeat ipsa necessitatibus at.'], {
  styles: {
    background: 'linear-gradient(to bottom,#8e2de2,#4a00e0)',
    padding: '2rem',
    color: '#fff',
    'font-weight': 'bold'
  }
}), new _blocks.TextBlock(4, 'here we go with some text', {
  styles: {
    background: 'linear-gradient(to left,#f2994a,#f2c94c)',
    padding: '1rem',
    'font-weight': 'bold'
  }
})];
exports.model = model;
},{"./assets/image.png":"assets/image.png","./classes/blocks":"classes/blocks.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _app = require("./classes/app");

var _model = require("./model");

require("./styles/main.css");

var app = new _app.App(_model.model);
app.init();
},{"./classes/app":"classes/app.js","./model":"model.js","./styles/main.css":"styles/main.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "8234" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map