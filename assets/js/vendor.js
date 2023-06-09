"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// @fancyapps/ui/Fancybox v4.0.27
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).window = t.window || {});
}(void 0, function (t) {
  "use strict";

  function e(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), i.push.apply(i, n);
    }
    return i;
  }
  function i(t) {
    for (var i = 1; i < arguments.length; i++) {
      var n = null != arguments[i] ? arguments[i] : {};
      i % 2 ? e(Object(n), !0).forEach(function (e) {
        r(t, e, n[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }
    return t;
  }
  function n(t) {
    return n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    }, n(t);
  }
  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function a(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }
  function s(t, e, i) {
    return e && a(t.prototype, e), i && a(t, i), Object.defineProperty(t, "prototype", {
      writable: !1
    }), t;
  }
  function r(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = i, t;
  }
  function l(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && h(t, e);
  }
  function c(t) {
    return c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, c(t);
  }
  function h(t, e) {
    return h = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    }, h(t, e);
  }
  function d(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function u(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return d(t);
  }
  function f(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();
    return function () {
      var i,
        n = c(t);
      if (e) {
        var o = c(this).constructor;
        i = Reflect.construct(n, arguments, o);
      } else i = n.apply(this, arguments);
      return u(this, i);
    };
  }
  function v(t, e) {
    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
    return t;
  }
  function p() {
    return p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
      var n = v(t, e);
      if (n) {
        var o = Object.getOwnPropertyDescriptor(n, e);
        return o.get ? o.get.call(arguments.length < 3 ? t : i) : o.value;
      }
    }, p.apply(this, arguments);
  }
  function g(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null == i) return;
      var n,
        o,
        a = [],
        s = !0,
        r = !1;
      try {
        for (i = i.call(t); !(s = (n = i.next()).done) && (a.push(n.value), !e || a.length !== e); s = !0);
      } catch (t) {
        r = !0, o = t;
      } finally {
        try {
          s || null == i.return || i.return();
        } finally {
          if (r) throw o;
        }
      }
      return a;
    }(t, e) || y(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function m(t) {
    return function (t) {
      if (Array.isArray(t)) return b(t);
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || y(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function y(t, e) {
    if (t) {
      if ("string" == typeof t) return b(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? b(t, e) : void 0;
    }
  }
  function b(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
  }
  function x(t, e) {
    var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!i) {
      if (Array.isArray(t) || (i = y(t)) || e && t && "number" == typeof t.length) {
        i && (t = i);
        var _n = 0,
          o = function o() {};
        return {
          s: o,
          n: function n() {
            return _n >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[_n++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a,
      s = !0,
      r = !1;
    return {
      s: function s() {
        i = i.call(t);
      },
      n: function n() {
        var t = i.next();
        return s = t.done, t;
      },
      e: function e(t) {
        r = !0, a = t;
      },
      f: function f() {
        try {
          s || null == i.return || i.return();
        } finally {
          if (r) throw a;
        }
      }
    };
  }
  var w = function w(t) {
      return "object" === n(t) && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t);
    },
    k = function t() {
      for (var e = !1, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
      "boolean" == typeof o[0] && (e = o.shift());
      var s = o[0];
      if (!s || "object" !== n(s)) throw new Error("extendee must be an object");
      for (var r = o.slice(1), l = r.length, c = 0; c < l; c++) {
        var h = r[c];
        for (var d in h) if (h.hasOwnProperty(d)) {
          var u = h[d];
          if (e && (Array.isArray(u) || w(u))) {
            var f = Array.isArray(u) ? [] : {};
            s[d] = t(!0, s.hasOwnProperty(d) ? s[d] : f, u);
          } else s[d] = u;
        }
      }
      return s;
    },
    S = function S(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
      return t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e;
    },
    C = function t(e) {
      return !!(e && "object" === n(e) && e instanceof Element && e !== document.body) && !e.__Panzoom && (function (t) {
        var e = getComputedStyle(t)["overflow-y"],
          i = getComputedStyle(t)["overflow-x"],
          n = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
          o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
        return n || o;
      }(e) ? e : t(e.parentNode));
    },
    $ = "undefined" != typeof window && window.ResizeObserver || function () {
      function t(e) {
        o(this, t), this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = e;
      }
      return s(t, [{
        key: "observe",
        value: function value(t) {
          if (!this.observables.some(function (e) {
            return e.el === t;
          })) {
            var e = {
              el: t,
              size: {
                height: t.clientHeight,
                width: t.clientWidth
              }
            };
            this.observables.push(e);
          }
        }
      }, {
        key: "unobserve",
        value: function value(t) {
          this.observables = this.observables.filter(function (e) {
            return e.el !== t;
          });
        }
      }, {
        key: "disconnect",
        value: function value() {
          this.observables = [];
        }
      }, {
        key: "check",
        value: function value() {
          var t = this.observables.filter(function (t) {
            var e = t.el.clientHeight,
              i = t.el.clientWidth;
            if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0;
          }).map(function (t) {
            return t.el;
          });
          t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck);
        }
      }]), t;
    }(),
    E = s(function t(e) {
      o(this, t), this.id = self.Touch && e instanceof Touch ? e.identifier : -1, this.pageX = e.pageX, this.pageY = e.pageY, this.clientX = e.clientX, this.clientY = e.clientY;
    }),
    P = function P(t, e) {
      return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
    },
    T = function T(t, e) {
      return e ? {
        clientX: (t.clientX + e.clientX) / 2,
        clientY: (t.clientY + e.clientY) / 2
      } : t;
    },
    L = function L(t) {
      return "changedTouches" in t;
    },
    _ = function () {
      function t(e) {
        var i = this,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = n.start,
          s = void 0 === a ? function () {
            return !0;
          } : a,
          r = n.move,
          l = void 0 === r ? function () {} : r,
          c = n.end,
          h = void 0 === c ? function () {} : c;
        o(this, t), this._element = e, this.startPointers = [], this.currentPointers = [], this._pointerStart = function (t) {
          if (!(t.buttons > 0 && 0 !== t.button)) {
            var e = new E(t);
            i.currentPointers.some(function (t) {
              return t.id === e.id;
            }) || i._triggerPointerStart(e, t) && (window.addEventListener("mousemove", i._move), window.addEventListener("mouseup", i._pointerEnd));
          }
        }, this._touchStart = function (t) {
          for (var e = 0, n = Array.from(t.changedTouches || []); e < n.length; e++) {
            var o = n[e];
            i._triggerPointerStart(new E(o), t);
          }
        }, this._move = function (t) {
          var e,
            n = i.currentPointers.slice(),
            o = L(t) ? Array.from(t.changedTouches).map(function (t) {
              return new E(t);
            }) : [new E(t)],
            a = [],
            s = x(o);
          try {
            var r = function r() {
              var t = e.value,
                n = i.currentPointers.findIndex(function (e) {
                  return e.id === t.id;
                });
              if (n < 0) return "continue";
              a.push(t), i.currentPointers[n] = t;
            };
            for (s.s(); !(e = s.n()).done;) r();
          } catch (t) {
            s.e(t);
          } finally {
            s.f();
          }
          i._moveCallback(n, i.currentPointers.slice(), t);
        }, this._triggerPointerEnd = function (t, e) {
          var n = i.currentPointers.findIndex(function (e) {
            return e.id === t.id;
          });
          return !(n < 0) && (i.currentPointers.splice(n, 1), i.startPointers.splice(n, 1), i._endCallback(t, e), !0);
        }, this._pointerEnd = function (t) {
          t.buttons > 0 && 0 !== t.button || i._triggerPointerEnd(new E(t), t) && (window.removeEventListener("mousemove", i._move, {
            passive: !1
          }), window.removeEventListener("mouseup", i._pointerEnd, {
            passive: !1
          }));
        }, this._touchEnd = function (t) {
          for (var e = 0, n = Array.from(t.changedTouches || []); e < n.length; e++) {
            var o = n[e];
            i._triggerPointerEnd(new E(o), t);
          }
        }, this._startCallback = s, this._moveCallback = l, this._endCallback = h, this._element.addEventListener("mousedown", this._pointerStart, {
          passive: !1
        }), this._element.addEventListener("touchstart", this._touchStart, {
          passive: !1
        }), this._element.addEventListener("touchmove", this._move, {
          passive: !1
        }), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd);
      }
      return s(t, [{
        key: "stop",
        value: function value() {
          this._element.removeEventListener("mousedown", this._pointerStart, {
            passive: !1
          }), this._element.removeEventListener("touchstart", this._touchStart, {
            passive: !1
          }), this._element.removeEventListener("touchmove", this._move, {
            passive: !1
          }), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd);
        }
      }, {
        key: "_triggerPointerStart",
        value: function value(t, e) {
          return !!this._startCallback(t, e) && (this.currentPointers.push(t), this.startPointers.push(t), !0);
        }
      }]), t;
    }(),
    A = function A(t, e) {
      return t.split(".").reduce(function (t, e) {
        return t && t[e];
      }, e);
    },
    O = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(this, t), this.options = k(!0, {}, e), this.plugins = [], this.events = {};
        for (var i = 0, n = ["on", "once"]; i < n.length; i++) for (var a = n[i], s = 0, r = Object.entries(this.options[a] || {}); s < r.length; s++) {
          var l = r[s];
          this[a].apply(this, m(l));
        }
      }
      return s(t, [{
        key: "option",
        value: function value(t, e) {
          t = String(t);
          var i = A(t, this.options);
          if ("function" == typeof i) {
            for (var n, o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++) a[s - 2] = arguments[s];
            i = (n = i).call.apply(n, [this, this].concat(a));
          }
          return void 0 === i ? e : i;
        }
      }, {
        key: "localize",
        value: function value(t) {
          var e = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return t = (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, function (t, n, o) {
            var a = "";
            o ? a = e.option("".concat(n[0] + n.toLowerCase().substring(1), ".l10n.").concat(o)) : n && (a = e.option("l10n.".concat(n))), a || (a = t);
            for (var s = 0; s < i.length; s++) a = a.split(i[s][0]).join(i[s][1]);
            return a;
          })).replace(/\{\{(.*)\}\}/, function (t, e) {
            return e;
          });
        }
      }, {
        key: "on",
        value: function value(t, e) {
          var i = this;
          if (w(t)) {
            for (var n = 0, o = Object.entries(t); n < o.length; n++) {
              var a = o[n];
              this.on.apply(this, m(a));
            }
            return this;
          }
          return String(t).split(" ").forEach(function (t) {
            var n = i.events[t] = i.events[t] || [];
            -1 == n.indexOf(e) && n.push(e);
          }), this;
        }
      }, {
        key: "once",
        value: function value(t, e) {
          var i = this;
          if (w(t)) {
            for (var n = 0, o = Object.entries(t); n < o.length; n++) {
              var a = o[n];
              this.once.apply(this, m(a));
            }
            return this;
          }
          return String(t).split(" ").forEach(function (t) {
            var n = function n() {
              i.off(t, n);
              for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
              e.call.apply(e, [i, i].concat(a));
            };
            n._ = e, i.on(t, n);
          }), this;
        }
      }, {
        key: "off",
        value: function value(t, e) {
          var i = this;
          if (!w(t)) return t.split(" ").forEach(function (t) {
            var n = i.events[t];
            if (!n || !n.length) return i;
            for (var o = -1, a = 0, s = n.length; a < s; a++) {
              var r = n[a];
              if (r && (r === e || r._ === e)) {
                o = a;
                break;
              }
            }
            -1 != o && n.splice(o, 1);
          }), this;
          for (var n = 0, o = Object.entries(t); n < o.length; n++) {
            var a = o[n];
            this.off.apply(this, m(a));
          }
        }
      }, {
        key: "trigger",
        value: function value(t) {
          for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
          var o,
            a = x(m(this.events[t] || []).slice());
          try {
            for (a.s(); !(o = a.n()).done;) {
              var s = o.value;
              if (s && !1 === s.call.apply(s, [this, this].concat(i))) return !1;
            }
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }
          var r,
            l = x(m(this.events["*"] || []).slice());
          try {
            for (l.s(); !(r = l.n()).done;) {
              var c = r.value;
              if (c && !1 === c.call.apply(c, [this, t, this].concat(i))) return !1;
            }
          } catch (t) {
            l.e(t);
          } finally {
            l.f();
          }
          return !0;
        }
      }, {
        key: "attachPlugins",
        value: function value(t) {
          for (var e = {}, i = 0, n = Object.entries(t || {}); i < n.length; i++) {
            var o = g(n[i], 2),
              a = o[0],
              s = o[1];
            !1 === this.options[a] || this.plugins[a] || (this.options[a] = k({}, s.defaults || {}, this.options[a]), e[a] = new s(this));
          }
          for (var r = 0, l = Object.entries(e); r < l.length; r++) {
            var c = g(l[r], 2);
            c[0], c[1].attach(this);
          }
          return this.plugins = Object.assign({}, this.plugins, e), this;
        }
      }, {
        key: "detachPlugins",
        value: function value() {
          for (var t in this.plugins) {
            var e = void 0;
            (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this);
          }
          return this.plugins = {}, this;
        }
      }]), t;
    }(),
    z = {
      touch: !0,
      zoom: !0,
      pinchToZoom: !0,
      panOnlyZoomed: !1,
      lockAxis: !1,
      friction: .64,
      decelFriction: .88,
      zoomFriction: .74,
      bounceForce: .2,
      baseScale: 1,
      minScale: 1,
      maxScale: 2,
      step: .5,
      textSelection: !1,
      click: "toggleZoom",
      wheel: "zoom",
      wheelFactor: 42,
      wheelLimit: 5,
      draggableClass: "is-draggable",
      draggingClass: "is-dragging",
      ratio: 1
    },
    M = function (t) {
      l(n, t);
      var e = f(n);
      function n(t) {
        var i,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o(this, n), (i = e.call(this, k(!0, {}, z, a))).state = "init", i.$container = t;
        for (var s = 0, r = ["onLoad", "onWheel", "onClick"]; s < r.length; s++) {
          var l = r[s];
          i[l] = i[l].bind(d(i));
        }
        return i.initLayout(), i.resetValues(), i.attachPlugins(n.Plugins), i.trigger("init"), i.updateMetrics(), i.attachEvents(), i.trigger("ready"), !1 === i.option("centerOnStart") ? i.state = "ready" : i.panTo({
          friction: 0
        }), t.__Panzoom = d(i), i;
      }
      return s(n, [{
        key: "initLayout",
        value: function value() {
          var t = this.$container;
          if (!(t instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
          var e = this.option("content") || t.querySelector(".panzoom__content");
          if (!e) throw new Error("Panzoom: Content not found");
          this.$content = e;
          var i,
            n = this.option("viewport") || t.querySelector(".panzoom__viewport");
          n || !1 === this.option("wrapInner") || ((n = document.createElement("div")).classList.add("panzoom__viewport"), (i = n).append.apply(i, m(t.childNodes)), t.appendChild(n));
          this.$viewport = n || e.parentNode;
        }
      }, {
        key: "resetValues",
        value: function value() {
          this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {
            width: 0,
            height: 0
          }, this.viewport = {
            width: 0,
            height: 0
          }, this.content = {
            origWidth: 0,
            origHeight: 0,
            width: 0,
            height: 0,
            x: this.option("x", 0),
            y: this.option("y", 0),
            scale: this.option("baseScale")
          }, this.transform = {
            x: 0,
            y: 0,
            scale: 1
          }, this.resetDragPosition();
        }
      }, {
        key: "onLoad",
        value: function value(t) {
          this.updateMetrics(), this.panTo({
            scale: this.option("baseScale"),
            friction: 0
          }), this.trigger("load", t);
        }
      }, {
        key: "onClick",
        value: function value(t) {
          if (!t.defaultPrevented) if (this.option("textSelection") && window.getSelection().toString().length) t.stopPropagation();else {
            var e = this.$content.getClientRects()[0];
            if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), void t.stopPropagation();
            !1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t));
          }
        }
      }, {
        key: "onWheel",
        value: function value(t) {
          !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t);
        }
      }, {
        key: "zoomWithWheel",
        value: function value(t) {
          void 0 === this.changedDelta && (this.changedDelta = 0);
          var e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)),
            i = this.content.scale,
            n = i * (100 + e * this.option("wheelFactor")) / 100;
          if (e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e), n = i) : (this.changedDelta = 0, n = Math.max(Math.min(n, this.option("maxScale")), this.option("minScale"))), !(this.changedDelta > this.option("wheelLimit")) && (t.preventDefault(), n !== i)) {
            var o = this.$content.getBoundingClientRect(),
              a = t.clientX - o.left,
              s = t.clientY - o.top;
            this.zoomTo(n, {
              x: a,
              y: s
            });
          }
        }
      }, {
        key: "zoomWithClick",
        value: function value(t) {
          var e = this.$content.getClientRects()[0],
            i = t.clientX - e.left,
            n = t.clientY - e.top;
          this.toggleZoom({
            x: i,
            y: n
          });
        }
      }, {
        key: "attachEvents",
        value: function value() {
          var t = this;
          this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {
            passive: !1
          }), this.$container.addEventListener("click", this.onClick, {
            passive: !1
          }), this.initObserver();
          var e = new _(this.$container, {
            start: function start(i, n) {
              if (!t.option("touch")) return !1;
              if (t.velocity.scale < 0) return !1;
              var o = n.composedPath()[0];
              if (!e.currentPointers.length) {
                if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(o.nodeName)) return !1;
                if (t.option("textSelection") && function (t, e, i) {
                  for (var n = t.childNodes, o = document.createRange(), a = 0; a < n.length; a++) {
                    var s = n[a];
                    if (s.nodeType === Node.TEXT_NODE) {
                      o.selectNodeContents(s);
                      var r = o.getBoundingClientRect();
                      if (e >= r.left && i >= r.top && e <= r.right && i <= r.bottom) return s;
                    }
                  }
                  return !1;
                }(o, i.clientX, i.clientY)) return !1;
              }
              return !C(o) && !1 !== t.trigger("touchStart", n) && ("mousedown" === n.type && n.preventDefault(), t.state = "pointerdown", t.resetDragPosition(), t.dragPosition.midPoint = null, t.dragPosition.time = Date.now(), !0);
            },
            move: function move(i, n, o) {
              if ("pointerdown" === t.state) if (!1 !== t.trigger("touchMove", o)) {
                if (!(n.length < 2 && !0 === t.option("panOnlyZoomed") && t.content.width <= t.viewport.width && t.content.height <= t.viewport.height && t.transform.scale <= t.option("baseScale")) && (!(n.length > 1) || t.option("zoom") && !1 !== t.option("pinchToZoom"))) {
                  var a = T(i[0], i[1]),
                    s = T(n[0], n[1]),
                    r = s.clientX - a.clientX,
                    l = s.clientY - a.clientY,
                    c = P(i[0], i[1]),
                    h = P(n[0], n[1]),
                    d = c && h ? h / c : 1;
                  t.dragOffset.x += r, t.dragOffset.y += l, t.dragOffset.scale *= d, t.dragOffset.time = Date.now() - t.dragPosition.time;
                  var u = 1 === t.dragStart.scale && t.option("lockAxis");
                  if (u && !t.lockAxis) {
                    if (Math.abs(t.dragOffset.x) < 6 && Math.abs(t.dragOffset.y) < 6) return void o.preventDefault();
                    var f = Math.abs(180 * Math.atan2(t.dragOffset.y, t.dragOffset.x) / Math.PI);
                    t.lockAxis = f > 45 && f < 135 ? "y" : "x";
                  }
                  if ("xy" === u || "y" !== t.lockAxis) {
                    if (o.preventDefault(), o.stopPropagation(), o.stopImmediatePropagation(), t.lockAxis && (t.dragOffset["x" === t.lockAxis ? "y" : "x"] = 0), t.$container.classList.add(t.option("draggingClass")), t.transform.scale === t.option("baseScale") && "y" === t.lockAxis || (t.dragPosition.x = t.dragStart.x + t.dragOffset.x), t.transform.scale === t.option("baseScale") && "x" === t.lockAxis || (t.dragPosition.y = t.dragStart.y + t.dragOffset.y), t.dragPosition.scale = t.dragStart.scale * t.dragOffset.scale, n.length > 1) {
                      var v = T(e.startPointers[0], e.startPointers[1]),
                        p = v.clientX - t.dragStart.rect.x,
                        g = v.clientY - t.dragStart.rect.y,
                        m = t.getZoomDelta(t.content.scale * t.dragOffset.scale, p, g),
                        y = m.deltaX,
                        b = m.deltaY;
                      t.dragPosition.x -= y, t.dragPosition.y -= b, t.dragPosition.midPoint = s;
                    } else t.setDragResistance();
                    t.transform = {
                      x: t.dragPosition.x,
                      y: t.dragPosition.y,
                      scale: t.dragPosition.scale
                    }, t.startAnimation();
                  }
                }
              } else o.preventDefault();
            },
            end: function end(n, o) {
              if ("pointerdown" === t.state) if (t._dragOffset = i({}, t.dragOffset), e.currentPointers.length) t.resetDragPosition();else if (t.state = "decel", t.friction = t.option("decelFriction"), t.recalculateTransform(), t.$container.classList.remove(t.option("draggingClass")), !1 !== t.trigger("touchEnd", o) && "decel" === t.state) {
                var a = t.option("minScale");
                if (t.transform.scale < a) t.zoomTo(a, {
                  friction: .64
                });else {
                  var s = t.option("maxScale");
                  if (t.transform.scale - s > .01) {
                    var r = t.dragPosition.midPoint || n,
                      l = t.$content.getClientRects()[0];
                    t.zoomTo(s, {
                      friction: .64,
                      x: r.clientX - l.left,
                      y: r.clientY - l.top
                    });
                  } else ;
                }
              }
            }
          });
          this.pointerTracker = e;
        }
      }, {
        key: "initObserver",
        value: function value() {
          var t = this;
          this.resizeObserver || (this.resizeObserver = new $(function () {
            t.updateTimer || (t.updateTimer = setTimeout(function () {
              var e = t.$container.getBoundingClientRect();
              e.width && e.height ? ((Math.abs(e.width - t.container.width) > 1 || Math.abs(e.height - t.container.height) > 1) && (t.isAnimating() && t.endAnimation(!0), t.updateMetrics(), t.panTo({
                x: t.content.x,
                y: t.content.y,
                scale: t.option("baseScale"),
                friction: 0
              })), t.updateTimer = null) : t.updateTimer = null;
            }, t.updateRate));
          }), this.resizeObserver.observe(this.$container));
        }
      }, {
        key: "resetDragPosition",
        value: function value() {
          this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {
            x: 0,
            y: 0,
            scale: 0
          };
          var t = this.content,
            e = t.x,
            n = t.y,
            o = t.scale;
          this.dragStart = {
            rect: this.$content.getBoundingClientRect(),
            x: e,
            y: n,
            scale: o
          }, this.dragPosition = i(i({}, this.dragPosition), {}, {
            x: e,
            y: n,
            scale: o
          }), this.dragOffset = {
            x: 0,
            y: 0,
            scale: 1,
            time: 0
          };
        }
      }, {
        key: "updateMetrics",
        value: function value(t) {
          !0 !== t && this.trigger("beforeUpdate");
          var e,
            n = this.$container,
            o = this.$content,
            a = this.$viewport,
            s = o instanceof HTMLImageElement,
            r = this.option("zoom"),
            l = this.option("resizeParent", r),
            c = this.option("width"),
            h = this.option("height"),
            d = c || (e = o, Math.max(parseFloat(e.naturalWidth || 0), parseFloat(e.width && e.width.baseVal && e.width.baseVal.value || 0), parseFloat(e.offsetWidth || 0), parseFloat(e.scrollWidth || 0))),
            u = h || function (t) {
              return Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0));
            }(o);
          Object.assign(o.style, {
            width: c ? "".concat(c, "px") : "",
            height: h ? "".concat(h, "px") : "",
            maxWidth: "",
            maxHeight: ""
          }), l && Object.assign(a.style, {
            width: "",
            height: ""
          });
          var f = this.option("ratio");
          c = d = S(d * f), h = u = S(u * f);
          var v = o.getBoundingClientRect(),
            p = a.getBoundingClientRect(),
            g = a == n ? p : n.getBoundingClientRect(),
            m = Math.max(a.offsetWidth, S(p.width)),
            y = Math.max(a.offsetHeight, S(p.height)),
            b = window.getComputedStyle(a);
          if (m -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight), y -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom), this.viewport.width = m, this.viewport.height = y, r) {
            if (Math.abs(d - v.width) > .1 || Math.abs(u - v.height) > .1) {
              var x = function (t, e, i, n) {
                var o = Math.min(i / t || 0, n / e);
                return {
                  width: t * o || 0,
                  height: e * o || 0
                };
              }(d, u, Math.min(d, v.width), Math.min(u, v.height));
              c = S(x.width), h = S(x.height);
            }
            Object.assign(o.style, {
              width: "".concat(c, "px"),
              height: "".concat(h, "px"),
              transform: ""
            });
          }
          if (l && (Object.assign(a.style, {
            width: "".concat(c, "px"),
            height: "".concat(h, "px")
          }), this.viewport = i(i({}, this.viewport), {}, {
            width: c,
            height: h
          })), s && r && "function" != typeof this.options.maxScale) {
            var w = this.option("maxScale");
            this.options.maxScale = function () {
              return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : w;
            };
          }
          this.content = i(i({}, this.content), {}, {
            origWidth: d,
            origHeight: u,
            fitWidth: c,
            fitHeight: h,
            width: c,
            height: h,
            scale: 1,
            isZoomable: r
          }), this.container = {
            width: g.width,
            height: g.height
          }, !0 !== t && this.trigger("afterUpdate");
        }
      }, {
        key: "zoomIn",
        value: function value(t) {
          this.zoomTo(this.content.scale + (t || this.option("step")));
        }
      }, {
        key: "zoomOut",
        value: function value(t) {
          this.zoomTo(this.content.scale - (t || this.option("step")));
        }
      }, {
        key: "toggleZoom",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = this.option("maxScale"),
            i = this.option("baseScale"),
            n = this.content.scale > i + .5 * (e - i) ? i : e;
          this.zoomTo(n, t);
        }
      }, {
        key: "zoomTo",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.option("baseScale"),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = e.x,
            n = void 0 === i ? null : i,
            o = e.y,
            a = void 0 === o ? null : o;
          t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
          var s = S(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
          null === n && (n = this.content.width * s * .5), null === a && (a = this.content.height * s * .5);
          var r = this.getZoomDelta(t, n, a),
            l = r.deltaX,
            c = r.deltaY;
          n = this.content.x - l, a = this.content.y - c, this.panTo({
            x: n,
            y: a,
            scale: t,
            friction: this.option("zoomFriction")
          });
        }
      }, {
        key: "getZoomDelta",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = this.content.fitWidth * this.content.scale,
            o = this.content.fitHeight * this.content.scale,
            a = e > 0 && n ? e / n : 0,
            s = i > 0 && o ? i / o : 0,
            r = this.content.fitWidth * t,
            l = this.content.fitHeight * t,
            c = (r - n) * a,
            h = (l - o) * s;
          return {
            deltaX: c,
            deltaY: h
          };
        }
      }, {
        key: "panTo",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.x,
            n = void 0 === e ? this.content.x : e,
            o = t.y,
            a = void 0 === o ? this.content.y : o,
            s = t.scale,
            r = t.friction,
            l = void 0 === r ? this.option("friction") : r,
            c = t.ignoreBounds,
            h = void 0 !== c && c;
          if (s = s || this.content.scale || 1, !h) {
            var d = this.getBounds(s),
              u = d.boundX,
              f = d.boundY;
            u && (n = Math.max(Math.min(n, u.to), u.from)), f && (a = Math.max(Math.min(a, f.to), f.from));
          }
          this.friction = l, this.transform = i(i({}, this.transform), {}, {
            x: n,
            y: a,
            scale: s
          }), l ? (this.state = "panning", this.velocity = {
            x: (1 / this.friction - 1) * (n - this.content.x),
            y: (1 / this.friction - 1) * (a - this.content.y),
            scale: (1 / this.friction - 1) * (s - this.content.scale)
          }, this.startAnimation()) : this.endAnimation();
        }
      }, {
        key: "startAnimation",
        value: function value() {
          var t = this;
          this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(function () {
            return t.animate();
          });
        }
      }, {
        key: "animate",
        value: function value() {
          var t = this;
          if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform();else if ("pointerdown" !== this.state) return void this.endAnimation();
          this.rAF = requestAnimationFrame(function () {
            return t.animate();
          });
        }
      }, {
        key: "getBounds",
        value: function value(t) {
          var e = this.boundX,
            i = this.boundY;
          if (void 0 !== e && void 0 !== i) return {
            boundX: e,
            boundY: i
          };
          e = {
            from: 0,
            to: 0
          }, i = {
            from: 0,
            to: 0
          }, t = t || this.transform.scale;
          var n = this.content.fitWidth * t,
            o = this.content.fitHeight * t,
            a = this.viewport.width,
            s = this.viewport.height;
          if (n < a) {
            var r = S(.5 * (a - n));
            e.from = r, e.to = r;
          } else e.from = S(a - n);
          if (o < s) {
            var l = .5 * (s - o);
            i.from = l, i.to = l;
          } else i.from = S(s - o);
          return {
            boundX: e,
            boundY: i
          };
        }
      }, {
        key: "setEdgeForce",
        value: function value() {
          if ("decel" === this.state) {
            var t,
              e,
              i,
              n,
              o = this.option("bounceForce"),
              a = this.getBounds(Math.max(this.transform.scale, this.content.scale)),
              s = a.boundX,
              r = a.boundY;
            if (s && (t = this.content.x < s.from, e = this.content.x > s.to), r && (i = this.content.y < r.from, n = this.content.y > r.to), t || e) {
              var l = ((t ? s.from : s.to) - this.content.x) * o,
                c = this.content.x + (this.velocity.x + l) / this.friction;
              c >= s.from && c <= s.to && (l += this.velocity.x), this.velocity.x = l, this.recalculateTransform();
            }
            if (i || n) {
              var h = ((i ? r.from : r.to) - this.content.y) * o,
                d = this.content.y + (h + this.velocity.y) / this.friction;
              d >= r.from && d <= r.to && (h += this.velocity.y), this.velocity.y = h, this.recalculateTransform();
            }
          }
        }
      }, {
        key: "setDragResistance",
        value: function value() {
          if ("pointerdown" === this.state) {
            var t,
              e,
              i,
              n,
              o = this.getBounds(this.dragPosition.scale),
              a = o.boundX,
              s = o.boundY;
            if (a && (t = this.dragPosition.x < a.from, e = this.dragPosition.x > a.to), s && (i = this.dragPosition.y < s.from, n = this.dragPosition.y > s.to), (t || e) && (!t || !e)) {
              var r = t ? a.from : a.to,
                l = r - this.dragPosition.x;
              this.dragPosition.x = r - .3 * l;
            }
            if ((i || n) && (!i || !n)) {
              var c = i ? s.from : s.to,
                h = c - this.dragPosition.y;
              this.dragPosition.y = c - .3 * h;
            }
          }
        }
      }, {
        key: "setDragForce",
        value: function value() {
          "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
        }
      }, {
        key: "recalculateTransform",
        value: function value() {
          this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
        }
      }, {
        key: "isAnimating",
        value: function value() {
          return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05));
        }
      }, {
        key: "setTransform",
        value: function value(t) {
          var e, n, o, a, s;
          (t ? (e = S(this.transform.x), n = S(this.transform.y), o = this.transform.scale, this.content = i(i({}, this.content), {}, {
            x: e,
            y: n,
            scale: o
          })) : (e = S(this.content.x), n = S(this.content.y), o = this.content.scale / (this.content.width / this.content.fitWidth), this.content = i(i({}, this.content), {}, {
            x: e,
            y: n
          })), this.trigger("beforeTransform"), e = S(this.content.x), n = S(this.content.y), t && this.option("zoom")) ? (a = S(this.content.fitWidth * o), s = S(this.content.fitHeight * o), this.content.width = a, this.content.height = s, this.transform = i(i({}, this.transform), {}, {
            width: a,
            height: s,
            scale: o
          }), Object.assign(this.$content.style, {
            width: "".concat(a, "px"),
            height: "".concat(s, "px"),
            maxWidth: "none",
            maxHeight: "none",
            transform: "translate3d(".concat(e, "px, ").concat(n, "px, 0) scale(1)")
          })) : this.$content.style.transform = "translate3d(".concat(e, "px, ").concat(n, "px, 0) scale(").concat(o, ")");
          this.trigger("afterTransform");
        }
      }, {
        key: "endAnimation",
        value: function value(t) {
          cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
            x: 0,
            y: 0,
            scale: 0
          }, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== t && this.trigger("endAnimation");
        }
      }, {
        key: "handleCursor",
        value: function value() {
          var t = this.option("draggableClass");
          t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t));
        }
      }, {
        key: "detachEvents",
        value: function value() {
          this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {
            passive: !1
          }), this.$container.removeEventListener("click", this.onClick, {
            passive: !1
          }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
        }
      }, {
        key: "destroy",
        value: function value() {
          "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition());
        }
      }]), n;
    }(O);
  M.version = "4.0.27", M.Plugins = {};
  var I = function I(t, e) {
      var i = 0;
      return function () {
        var n = new Date().getTime();
        if (!(n - i < e)) return i = n, t.apply(void 0, arguments);
      };
    },
    R = function () {
      function t(e) {
        o(this, t), this.$container = null, this.$prev = null, this.$next = null, this.carousel = e, this.onRefresh = this.onRefresh.bind(this);
      }
      return s(t, [{
        key: "option",
        value: function value(t) {
          return this.carousel.option("Navigation.".concat(t));
        }
      }, {
        key: "createButton",
        value: function value(t) {
          var e,
            i = this,
            n = document.createElement("button");
          n.setAttribute("title", this.carousel.localize("{{".concat(t.toUpperCase(), "}}")));
          var o = this.option("classNames.button") + " " + this.option("classNames.".concat(t));
          return (e = n.classList).add.apply(e, m(o.split(" "))), n.setAttribute("tabindex", "0"), n.innerHTML = this.carousel.localize(this.option("".concat(t, "Tpl"))), n.addEventListener("click", function (e) {
            e.preventDefault(), e.stopPropagation(), i.carousel["slide".concat("next" === t ? "Next" : "Prev")]();
          }), n;
        }
      }, {
        key: "build",
        value: function value() {
          var t;
          this.$container || (this.$container = document.createElement("div"), (t = this.$container.classList).add.apply(t, m(this.option("classNames.main").split(" "))), this.carousel.$container.appendChild(this.$container));
          this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
        }
      }, {
        key: "onRefresh",
        value: function value() {
          var t = this.carousel.pages.length;
          t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")));
        }
      }, {
        key: "cleanup",
        value: function value() {
          this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null;
        }
      }, {
        key: "attach",
        value: function value() {
          this.carousel.on("refresh change", this.onRefresh);
        }
      }, {
        key: "detach",
        value: function value() {
          this.carousel.off("refresh change", this.onRefresh), this.cleanup();
        }
      }]), t;
    }();
  R.defaults = {
    prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
    nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
    classNames: {
      main: "carousel__nav",
      button: "carousel__button",
      next: "is-next",
      prev: "is-prev"
    }
  };
  var F = function () {
      function t(e) {
        o(this, t), this.carousel = e, this.$list = null, this.events = {
          change: this.onChange.bind(this),
          refresh: this.onRefresh.bind(this)
        };
      }
      return s(t, [{
        key: "buildList",
        value: function value() {
          var t = this;
          if (!(this.carousel.pages.length < this.carousel.option("Dots.minSlideCount"))) {
            var e = document.createElement("ol");
            return e.classList.add("carousel__dots"), e.addEventListener("click", function (e) {
              if ("page" in e.target.dataset) {
                e.preventDefault(), e.stopPropagation();
                var i = parseInt(e.target.dataset.page, 10),
                  n = t.carousel;
                i !== n.page && (n.pages.length < 3 && n.option("infinite") ? n[0 == i ? "slidePrev" : "slideNext"]() : n.slideTo(i));
              }
            }), this.$list = e, this.carousel.$container.appendChild(e), this.carousel.$container.classList.add("has-dots"), e;
          }
        }
      }, {
        key: "removeList",
        value: function value() {
          this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots");
        }
      }, {
        key: "rebuildDots",
        value: function value() {
          var t = this,
            e = this.$list,
            i = !!e,
            n = this.carousel.pages.length;
          if (n < 2) i && this.removeList();else {
            i || (e = this.buildList());
            var o = this.$list.children.length;
            if (o > n) for (var a = n; a < o; a++) this.$list.removeChild(this.$list.lastChild);else {
              for (var s = function s(e) {
                  var i = document.createElement("li");
                  i.classList.add("carousel__dot"), i.dataset.page = e, i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.setAttribute("title", t.carousel.localize("{{GOTO}}", [["%d", e + 1]])), i.addEventListener("keydown", function (t) {
                    var e,
                      n = t.code;
                    "Enter" === n || "NumpadEnter" === n ? e = i : "ArrowRight" === n ? e = i.nextSibling : "ArrowLeft" === n && (e = i.previousSibling), e && e.click();
                  }), t.$list.appendChild(i);
                }, r = o; r < n; r++) s(r);
              this.setActiveDot();
            }
          }
        }
      }, {
        key: "setActiveDot",
        value: function value() {
          if (this.$list) {
            this.$list.childNodes.forEach(function (t) {
              t.classList.remove("is-selected");
            });
            var t = this.$list.childNodes[this.carousel.page];
            t && t.classList.add("is-selected");
          }
        }
      }, {
        key: "onChange",
        value: function value() {
          this.setActiveDot();
        }
      }, {
        key: "onRefresh",
        value: function value() {
          this.rebuildDots();
        }
      }, {
        key: "attach",
        value: function value() {
          this.carousel.on(this.events);
        }
      }, {
        key: "detach",
        value: function value() {
          this.removeList(), this.carousel.off(this.events), this.carousel = null;
        }
      }]), t;
    }(),
    N = function () {
      function t(e) {
        o(this, t), this.carousel = e, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this);
      }
      return s(t, [{
        key: "addAsTargetFor",
        value: function value(t) {
          this.target = this.carousel, this.nav = t, this.attachEvents();
        }
      }, {
        key: "addAsNavFor",
        value: function value(t) {
          this.target = t, this.nav = this.carousel, this.attachEvents();
        }
      }, {
        key: "attachEvents",
        value: function value() {
          this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
        }
      }, {
        key: "onNavReady",
        value: function value() {
          this.onTargetChange(!0);
        }
      }, {
        key: "onNavClick",
        value: function value(t, e, i) {
          var n = i.target.closest(".carousel__slide");
          if (n) {
            i.stopPropagation();
            var o = parseInt(n.dataset.index, 10),
              a = this.target.findPageForSlide(o);
            this.target.page !== a && this.target.slideTo(a, {
              friction: this.friction
            }), this.markSelectedSlide(o);
          }
        }
      }, {
        key: "onNavCreateSlide",
        value: function value(t, e) {
          e.index === this.selectedIndex && this.markSelectedSlide(e.index);
        }
      }, {
        key: "onTargetChange",
        value: function value() {
          var t = this.target.pages[this.target.page].indexes[0],
            e = this.nav.findPageForSlide(t);
          this.nav.slideTo(e), this.markSelectedSlide(t);
        }
      }, {
        key: "markSelectedSlide",
        value: function value(t) {
          this.selectedIndex = t, m(this.nav.slides).filter(function (t) {
            return t.$el && t.$el.classList.remove("is-nav-selected");
          });
          var e = this.nav.slides[t];
          e && e.$el && e.$el.classList.add("is-nav-selected");
        }
      }, {
        key: "attach",
        value: function value(t) {
          var e = t.options.Sync;
          (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), this.friction = e.friction);
        }
      }, {
        key: "detach",
        value: function value() {
          this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange));
        }
      }]), t;
    }();
  N.defaults = {
    friction: .92
  };
  var D = {
      Navigation: R,
      Dots: F,
      Sync: N
    },
    B = {
      slides: [],
      preload: 0,
      slidesPerPage: "auto",
      initialPage: null,
      initialSlide: null,
      friction: .92,
      center: !0,
      infinite: !0,
      fill: !0,
      dragFree: !1,
      prefix: "",
      classNames: {
        viewport: "carousel__viewport",
        track: "carousel__track",
        slide: "carousel__slide",
        slideSelected: "is-selected"
      },
      l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d"
      }
    },
    H = function (t) {
      l(n, t);
      var e = f(n);
      function n(t) {
        var i,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (o(this, n), a = k(!0, {}, B, a), (i = e.call(this, a)).state = "init", i.$container = t, !(i.$container instanceof HTMLElement)) throw new Error("No root element provided");
        return i.slideNext = I(i.slideNext.bind(d(i)), 250), i.slidePrev = I(i.slidePrev.bind(d(i)), 250), i.init(), t.__Carousel = d(i), i;
      }
      return s(n, [{
        key: "init",
        value: function value() {
          this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(n.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = "translate3d(".concat(-1 * this.pages[this.page].left, "px, 0px, 0) scale(1)")), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
        }
      }, {
        key: "initLayout",
        value: function value() {
          var t,
            e,
            i,
            n,
            o = this.option("prefix"),
            a = this.option("classNames");
          (this.$viewport = this.option("viewport") || this.$container.querySelector(".".concat(o).concat(a.viewport)), this.$viewport) || (this.$viewport = document.createElement("div"), (t = this.$viewport.classList).add.apply(t, m((o + a.viewport).split(" "))), (e = this.$viewport).append.apply(e, m(this.$container.childNodes)), this.$container.appendChild(this.$viewport));
          (this.$track = this.option("track") || this.$container.querySelector(".".concat(o).concat(a.track)), this.$track) || (this.$track = document.createElement("div"), (i = this.$track.classList).add.apply(i, m((o + a.track).split(" "))), (n = this.$track).append.apply(n, m(this.$viewport.childNodes)), this.$viewport.appendChild(this.$track));
        }
      }, {
        key: "initSlides",
        value: function value() {
          var t = this;
          this.slides = [], this.$viewport.querySelectorAll(".".concat(this.option("prefix")).concat(this.option("classNames.slide"))).forEach(function (e) {
            var i = {
              $el: e,
              isDom: !0
            };
            t.slides.push(i), t.trigger("createSlide", i, t.slides.length);
          }), Array.isArray(this.options.slides) && (this.slides = k(!0, m(this.slides), this.options.slides));
        }
      }, {
        key: "updateMetrics",
        value: function value() {
          var t,
            e = this,
            n = 0,
            o = [];
          this.slides.forEach(function (i, a) {
            var s = i.$el,
              r = i.isDom || !t ? e.getSlideMetrics(s) : t;
            i.index = a, i.width = r, i.left = n, t = r, n += r, o.push(a);
          });
          var a = Math.max(this.$track.offsetWidth, S(this.$track.getBoundingClientRect().width)),
            s = getComputedStyle(this.$track);
          a -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight), this.contentWidth = n, this.viewportWidth = a;
          var r = [],
            l = this.option("slidesPerPage");
          if (Number.isInteger(l) && n > a) for (var c = 0; c < this.slides.length; c += l) r.push({
            indexes: o.slice(c, c + l),
            slides: this.slides.slice(c, c + l)
          });else for (var h = 0, d = 0, u = 0; u < this.slides.length; u += 1) {
            var f = this.slides[u];
            (!r.length || d + f.width > a) && (r.push({
              indexes: [],
              slides: []
            }), h = r.length - 1, d = 0), d += f.width, r[h].indexes.push(u), r[h].slides.push(f);
          }
          var v = this.option("center"),
            p = this.option("fill");
          r.forEach(function (t, i) {
            t.index = i, t.width = t.slides.reduce(function (t, e) {
              return t + e.width;
            }, 0), t.left = t.slides[0].left, v && (t.left += .5 * (a - t.width) * -1), p && !e.option("infiniteX", e.option("infinite")) && n > a && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, n - a));
          });
          var g,
            y = [];
          r.forEach(function (t) {
            var e = i({}, t);
            g && e.left === g.left ? (g.width += e.width, g.slides = [].concat(m(g.slides), m(e.slides)), g.indexes = [].concat(m(g.indexes), m(e.indexes))) : (e.index = y.length, g = e, y.push(e));
          }), this.pages = y;
          var b = this.page;
          if (null === b) {
            var x = this.option("initialSlide");
            b = null !== x ? this.findPageForSlide(x) : parseInt(this.option("initialPage", 0), 10) || 0, y[b] || (b = y.length && b > y.length ? y[y.length - 1].index : 0), this.page = b, this.pageIndex = b;
          }
          this.updatePanzoom(), this.trigger("refresh");
        }
      }, {
        key: "getSlideMetrics",
        value: function value(t) {
          if (!t) {
            var e,
              i,
              n = this.slides[0];
            if ((t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", (e = t.classList).add.apply(e, m((this.option("prefix") + this.option("classNames.slide")).split(" "))), n.customClass) (i = t.classList).add.apply(i, m(n.customClass.split(" ")));
            this.$track.prepend(t);
          }
          var o = Math.max(t.offsetWidth, S(t.getBoundingClientRect().width)),
            a = t.currentStyle || window.getComputedStyle(t);
          return o = o + (parseFloat(a.marginLeft) || 0) + (parseFloat(a.marginRight) || 0), t.dataset.isTestEl && t.remove(), o;
        }
      }, {
        key: "findPageForSlide",
        value: function value(t) {
          t = parseInt(t, 10) || 0;
          var e = this.pages.find(function (e) {
            return e.indexes.indexOf(t) > -1;
          });
          return e ? e.index : null;
        }
      }, {
        key: "slideNext",
        value: function value() {
          this.slideTo(this.pageIndex + 1);
        }
      }, {
        key: "slidePrev",
        value: function value() {
          this.slideTo(this.pageIndex - 1);
        }
      }, {
        key: "slideTo",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = e.x,
            n = void 0 === i ? -1 * this.setPage(t, !0) : i,
            o = e.y,
            a = void 0 === o ? 0 : o,
            s = e.friction,
            r = void 0 === s ? this.option("friction") : s;
          this.Panzoom.content.x === n && !this.Panzoom.velocity.x && r || (this.Panzoom.panTo({
            x: n,
            y: a,
            friction: r,
            ignoreBounds: !0
          }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"));
        }
      }, {
        key: "initPanzoom",
        value: function value() {
          var t = this;
          this.Panzoom && this.Panzoom.destroy();
          var e = k(!0, {}, {
            content: this.$track,
            wrapInner: !1,
            resizeParent: !1,
            zoom: !1,
            click: !1,
            lockAxis: "x",
            x: this.pages.length ? -1 * this.pages[this.page].left : 0,
            centerOnStart: !1,
            textSelection: function textSelection() {
              return t.option("textSelection", !1);
            },
            panOnlyZoomed: function panOnlyZoomed() {
              return this.content.width <= this.viewport.width;
            }
          }, this.option("Panzoom"));
          this.Panzoom = new M(this.$container, e), this.Panzoom.on({
            "*": function _(e) {
              for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
              return t.trigger.apply(t, ["Panzoom.".concat(e)].concat(n));
            },
            afterUpdate: function afterUpdate() {
              t.updatePage();
            },
            beforeTransform: this.onBeforeTransform.bind(this),
            touchEnd: this.onTouchEnd.bind(this),
            endAnimation: function endAnimation() {
              t.trigger("settle");
            }
          }), this.updateMetrics(), this.manageSlideVisiblity();
        }
      }, {
        key: "updatePanzoom",
        value: function value() {
          this.Panzoom && (this.Panzoom.content = i(i({}, this.Panzoom.content), {}, {
            fitWidth: this.contentWidth,
            origWidth: this.contentWidth,
            width: this.contentWidth
          }), this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
            from: -1 * this.pages[this.pages.length - 1].left,
            to: -1 * this.pages[0].left
          }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
            from: 0,
            to: 0
          }, this.Panzoom.handleCursor());
        }
      }, {
        key: "manageSlideVisiblity",
        value: function value() {
          var t = this,
            e = this.contentWidth,
            i = this.viewportWidth,
            n = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0,
            o = this.option("preload"),
            a = this.option("infiniteX", this.option("infinite")),
            s = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
            r = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
          this.slides.forEach(function (l) {
            var c,
              h,
              d = 0;
            c = n - s, h = n + i + r, c -= o * (i + s + r), h += o * (i + s + r);
            var u = l.left + l.width > c && l.left < h;
            c = n + e - s, h = n + e + i + r, c -= o * (i + s + r);
            var f = a && l.left + l.width > c && l.left < h;
            c = n - e - s, h = n - e + i + r, c -= o * (i + s + r);
            var v = a && l.left + l.width > c && l.left < h;
            f || u || v ? (t.createSlideEl(l), u && (d = 0), f && (d = -1), v && (d = 1), l.left + l.width > n && l.left <= n + i + r && (d = 0)) : t.removeSlideEl(l), l.hasDiff = d;
          });
          var l = 0,
            c = 0;
          this.slides.forEach(function (t, i) {
            var n = 0;
            t.$el ? (i !== l || t.hasDiff ? n = c + t.hasDiff * e : c = 0, t.$el.style.left = Math.abs(n) > .1 ? "".concat(c + t.hasDiff * e, "px") : "", l++) : c += t.width;
          }), this.markSelectedSlides();
        }
      }, {
        key: "createSlideEl",
        value: function value(t) {
          var e;
          if (t) {
            if (!t.$el) {
              var i,
                n = document.createElement("div");
              if (n.dataset.index = t.index, (e = n.classList).add.apply(e, m((this.option("prefix") + this.option("classNames.slide")).split(" "))), t.customClass) (i = n.classList).add.apply(i, m(t.customClass.split(" ")));
              t.html && (n.innerHTML = t.html);
              var o = [];
              this.slides.forEach(function (t, e) {
                t.$el && o.push(e);
              });
              var a = t.index,
                s = null;
              if (o.length) {
                var r = o.reduce(function (t, e) {
                  return Math.abs(e - a) < Math.abs(t - a) ? e : t;
                });
                s = this.slides[r];
              }
              return this.$track.insertBefore(n, s && s.$el ? s.index < t.index ? s.$el.nextSibling : s.$el : null), t.$el = n, this.trigger("createSlide", t, a), t;
            }
            var l,
              c = t.$el.dataset.index;
            c && parseInt(c, 10) === t.index || (t.$el.dataset.index = t.index, t.$el.querySelectorAll("[data-lazy-srcset]").forEach(function (t) {
              t.srcset = t.dataset.lazySrcset;
            }), t.$el.querySelectorAll("[data-lazy-src]").forEach(function (t) {
              var e = t.dataset.lazySrc;
              t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = "url('".concat(e, "')");
            }), (l = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = "url('".concat(l, "')")), t.state = "ready");
          }
        }
      }, {
        key: "removeSlideEl",
        value: function value(t) {
          t.$el && !t.isDom && (this.trigger("removeSlide", t), t.$el.remove(), t.$el = null);
        }
      }, {
        key: "markSelectedSlides",
        value: function value() {
          var t = this,
            e = this.option("classNames.slideSelected"),
            i = "aria-hidden";
          this.slides.forEach(function (n, o) {
            var a = n.$el;
            if (a) {
              var s = t.pages[t.page];
              s && s.indexes && s.indexes.indexOf(o) > -1 ? (e && !a.classList.contains(e) && (a.classList.add(e), t.trigger("selectSlide", n)), a.removeAttribute(i)) : (e && a.classList.contains(e) && (a.classList.remove(e), t.trigger("unselectSlide", n)), a.setAttribute(i, !0));
            }
          });
        }
      }, {
        key: "updatePage",
        value: function value() {
          this.updateMetrics(), this.slideTo(this.page, {
            friction: 0
          });
        }
      }, {
        key: "onBeforeTransform",
        value: function value() {
          this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity();
        }
      }, {
        key: "manageInfiniteTrack",
        value: function value() {
          var t = this.contentWidth,
            e = this.viewportWidth;
          if (!(!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e)) {
            var i = this.Panzoom,
              n = !1;
            return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, n = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, n = !0), n && "pointerdown" === i.state && i.resetDragPosition(), n;
          }
        }
      }, {
        key: "onTouchEnd",
        value: function value(t, e) {
          var i = this.option("dragFree");
          if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();else if (i) {
            var n = g(this.getPageFromPosition(-1 * t.transform.x), 2)[1];
            this.setPage(n);
          } else this.slideToClosest();
        }
      }, {
        key: "slideToClosest",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = this.getPageFromPosition(-1 * this.Panzoom.content.x),
            i = g(e, 2),
            n = i[1];
          this.slideTo(n, t);
        }
      }, {
        key: "getPageFromPosition",
        value: function value(t) {
          var e = this.pages.length;
          this.option("center") && (t += .5 * this.viewportWidth);
          var i = Math.floor(t / this.contentWidth);
          t -= i * this.contentWidth;
          var n = this.slides.find(function (e) {
            return e.left <= t && e.left + e.width > t;
          });
          if (n) {
            var o = this.findPageForSlide(n.index);
            return [o, o + i * e];
          }
          return [0, 0];
        }
      }, {
        key: "setPage",
        value: function value(t, e) {
          var i = 0,
            n = parseInt(t, 10) || 0,
            o = this.page,
            a = this.pageIndex,
            s = this.pages.length,
            r = this.contentWidth,
            l = this.viewportWidth;
          if (t = (n % s + s) % s, this.option("infiniteX", this.option("infinite")) && r > l) {
            var c = Math.floor(n / s) || 0,
              h = r;
            if (i = this.pages[t].left + c * h, !0 === e && s > 2) {
              var d = -1 * this.Panzoom.content.x,
                u = i - h,
                f = i + h,
                v = Math.abs(d - i),
                p = Math.abs(d - u),
                g = Math.abs(d - f);
              g < v && g <= p ? (i = f, n += s) : p < v && p < g && (i = u, n -= s);
            }
          } else t = n = Math.max(0, Math.min(n, s - 1)), i = this.pages.length ? this.pages[t].left : 0;
          return this.page = t, this.pageIndex = n, null !== o && t !== o && (this.prevPage = o, this.prevPageIndex = a, this.trigger("change", t, o)), i;
        }
      }, {
        key: "destroy",
        value: function value() {
          var t = this;
          this.state = "destroy", this.slides.forEach(function (e) {
            t.removeSlideEl(e);
          }), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
        }
      }]), n;
    }(O);
  H.version = "4.0.27", H.Plugins = D;
  var W = !("undefined" == typeof window || !window.document || !window.document.createElement),
    j = null,
    X = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'],
    q = function q(t) {
      if (t && W) {
        null === j && document.createElement("div").focus({
          get preventScroll() {
            return j = !0, !1;
          }
        });
        try {
          if (t.setActive) t.setActive();else if (j) t.focus({
            preventScroll: !0
          });else {
            var e = window.pageXOffset || document.body.scrollTop,
              i = window.pageYOffset || document.body.scrollLeft;
            t.focus(), document.body.scrollTo({
              top: e,
              left: i,
              behavior: "auto"
            });
          }
        } catch (t) {}
      }
    },
    U = function () {
      function t(e) {
        o(this, t), this.fancybox = e, this.viewport = null, this.pendingUpdate = null;
        for (var i = 0, n = ["onReady", "onResize", "onTouchstart", "onTouchmove"]; i < n.length; i++) {
          var a = n[i];
          this[a] = this[a].bind(this);
        }
      }
      return s(t, [{
        key: "onReady",
        value: function value() {
          var t = window.visualViewport;
          t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
            passive: !1
          }), window.addEventListener("touchmove", this.onTouchmove, {
            passive: !1
          }), window.addEventListener("wheel", this.onWheel, {
            passive: !1
          });
        }
      }, {
        key: "onResize",
        value: function value() {
          this.updateViewport();
        }
      }, {
        key: "updateViewport",
        value: function value() {
          var t = this.fancybox,
            e = this.viewport,
            i = e.scale || 1,
            n = t.$container;
          if (n) {
            var o = "",
              a = "",
              s = "";
            i - 1 > .1 && (o = "".concat(e.width * i, "px"), a = "".concat(e.height * i, "px"), s = "translate3d(".concat(e.offsetLeft, "px, ").concat(e.offsetTop, "px, 0) scale(").concat(1 / i, ")")), n.style.width = o, n.style.height = a, n.style.transform = s;
          }
        }
      }, {
        key: "onTouchstart",
        value: function value(t) {
          this.startY = t.touches ? t.touches[0].screenY : t.screenY;
        }
      }, {
        key: "onTouchmove",
        value: function value(t) {
          var e = this.startY,
            i = window.innerWidth / window.document.documentElement.clientWidth;
          if (t.cancelable && !(t.touches.length > 1 || 1 !== i)) {
            var n = C(t.composedPath()[0]);
            if (n) {
              var o = window.getComputedStyle(n),
                a = parseInt(o.getPropertyValue("height"), 10),
                s = t.touches ? t.touches[0].screenY : t.screenY,
                r = e <= s && 0 === n.scrollTop,
                l = e >= s && n.scrollHeight - n.scrollTop === a;
              (r || l) && t.preventDefault();
            } else t.preventDefault();
          }
        }
      }, {
        key: "onWheel",
        value: function value(t) {
          C(t.composedPath()[0]) || t.preventDefault();
        }
      }, {
        key: "cleanup",
        value: function value() {
          this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
          var t = this.viewport;
          t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1), window.removeEventListener("wheel", this.onWheel, {
            passive: !1
          });
        }
      }, {
        key: "attach",
        value: function value() {
          this.fancybox.on("initLayout", this.onReady);
        }
      }, {
        key: "detach",
        value: function value() {
          this.fancybox.off("initLayout", this.onReady), this.cleanup();
        }
      }]), t;
    }(),
    Y = function () {
      function t(e) {
        o(this, t), this.fancybox = e, this.$container = null, this.state = "init";
        for (var i = 0, n = ["onPrepare", "onClosing", "onKeydown"]; i < n.length; i++) {
          var a = n[i];
          this[a] = this[a].bind(this);
        }
        this.events = {
          prepare: this.onPrepare,
          closing: this.onClosing,
          keydown: this.onKeydown
        };
      }
      return s(t, [{
        key: "onPrepare",
        value: function value() {
          this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
        }
      }, {
        key: "onClosing",
        value: function value() {
          this.Carousel && this.Carousel.Panzoom.detachEvents();
        }
      }, {
        key: "onKeydown",
        value: function value(t, e) {
          e === t.option("Thumbs.key") && this.toggle();
        }
      }, {
        key: "build",
        value: function value() {
          var t = this;
          if (!this.$container) {
            var e = document.createElement("div");
            e.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel.nextSibling), this.Carousel = new H(e, k(!0, {
              Dots: !1,
              Navigation: !1,
              Sync: {
                friction: 0
              },
              infinite: !1,
              center: !0,
              fill: !0,
              dragFree: !0,
              slidesPerPage: 1,
              preload: 1
            }, this.fancybox.option("Thumbs.Carousel"), {
              Sync: {
                target: this.fancybox.Carousel
              },
              slides: this.getSlides()
            })), this.Carousel.Panzoom.on("wheel", function (e, i) {
              i.preventDefault(), t.fancybox[i.deltaY < 0 ? "prev" : "next"]();
            }), this.$container = e, this.state = "visible";
          }
        }
      }, {
        key: "getSlides",
        value: function value() {
          var t,
            e = [],
            i = x(this.fancybox.items);
          try {
            for (i.s(); !(t = i.n()).done;) {
              var n = t.value,
                o = n.thumb;
              o && e.push({
                html: '<div class="fancybox__thumb" style="background-image:url(\''.concat(o, "')\"></div>"),
                customClass: "has-thumb has-".concat(n.type || "image")
              });
            }
          } catch (t) {
            i.e(t);
          } finally {
            i.f();
          }
          return e;
        }
      }, {
        key: "toggle",
        value: function value() {
          "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build();
        }
      }, {
        key: "show",
        value: function value() {
          "hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible");
        }
      }, {
        key: "hide",
        value: function value() {
          "visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden");
        }
      }, {
        key: "cleanup",
        value: function value() {
          this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init";
        }
      }, {
        key: "attach",
        value: function value() {
          this.fancybox.on(this.events);
        }
      }, {
        key: "detach",
        value: function value() {
          this.fancybox.off(this.events), this.cleanup();
        }
      }]), t;
    }();
  Y.defaults = {
    minSlideCount: 2,
    minScreenHeight: 500,
    autoStart: !0,
    key: "t",
    Carousel: {}
  };
  var V = function V(t, e) {
      for (var i = new URL(t), n = new URLSearchParams(i.search), o = new URLSearchParams(), a = 0, s = [].concat(m(n), m(Object.entries(e))); a < s.length; a++) {
        var r = g(s[a], 2),
          l = r[0],
          c = r[1];
        "t" === l ? o.set("start", parseInt(c)) : o.set(l, c);
      }
      o = o.toString();
      var h = t.match(/#t=((.*)?\d+s)/);
      return h && (o += "#t=".concat(h[1])), o;
    },
    Z = {
      video: {
        autoplay: !0,
        ratio: 16 / 9
      },
      youtube: {
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      vimeo: {
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      html5video: {
        tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
        format: ""
      }
    },
    G = function () {
      function t(e) {
        o(this, t), this.fancybox = e;
        for (var i = 0, n = ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]; i < n.length; i++) {
          var a = n[i];
          this[a] = this[a].bind(this);
        }
        this.events = {
          init: this.onInit,
          ready: this.onReady,
          "Carousel.createSlide": this.onCreateSlide,
          "Carousel.removeSlide": this.onRemoveSlide,
          "Carousel.selectSlide": this.onSelectSlide,
          "Carousel.unselectSlide": this.onUnselectSlide,
          "Carousel.refresh": this.onRefresh
        };
      }
      return s(t, [{
        key: "onInit",
        value: function value() {
          var t,
            e = x(this.fancybox.items);
          try {
            for (e.s(); !(t = e.n()).done;) {
              var i = t.value;
              this.processType(i);
            }
          } catch (t) {
            e.e(t);
          } finally {
            e.f();
          }
        }
      }, {
        key: "processType",
        value: function value(t) {
          if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
          var e = t.src || "",
            i = t.type || this.fancybox.options.type,
            n = null;
          if (!e || "string" == typeof e) {
            if (n = e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
              var o = V(e, this.fancybox.option("Html.youtube")),
                a = encodeURIComponent(n[1]);
              t.videoId = a, t.src = "https://www.youtube-nocookie.com/embed/".concat(a, "?").concat(o), t.thumb = t.thumb || "https://i.ytimg.com/vi/".concat(a, "/mqdefault.jpg"), t.vendor = "youtube", i = "video";
            } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
              var s = V(e, this.fancybox.option("Html.vimeo")),
                r = encodeURIComponent(n[1]);
              t.videoId = r, t.src = "https://player.vimeo.com/video/".concat(r, "?").concat(s), t.vendor = "vimeo", i = "video";
            } else (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "//maps.google.".concat(n[1], "/?ll=").concat((n[2] ? n[2] + "&z=" + Math.floor(n[3]) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&"), "&output=").concat(n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"), i = "map") : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "//maps.google.".concat(n[1], "/maps?q=").concat(n[2].replace("query=", "q=").replace("api=1", ""), "&output=embed"), i = "map");
            i || ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "html5video", t.format = t.format || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), t.type = i || this.fancybox.option("defaultType", "image"), "html5video" !== i && "video" !== i || (t.video = k({}, this.fancybox.option("Html.video"), t.video), t._width && t._height ? t.ratio = parseFloat(t._width) / parseFloat(t._height) : t.ratio = t.ratio || t.video.ratio || Z.video.ratio);
          }
        }
      }, {
        key: "onReady",
        value: function value() {
          var t = this;
          this.fancybox.Carousel.slides.forEach(function (e) {
            e.$el && (t.setContent(e), e.index === t.fancybox.getSlide().index && t.playVideo(e));
          });
        }
      }, {
        key: "onCreateSlide",
        value: function value(t, e, i) {
          "ready" === this.fancybox.state && this.setContent(i);
        }
      }, {
        key: "loadInlineContent",
        value: function value(t) {
          var e;
          if (t.src instanceof HTMLElement) e = t.src;else if ("string" == typeof t.src) {
            var i = t.src.split("#", 2),
              n = 2 === i.length && "" === i[0] ? i[1] : i[0];
            e = document.getElementById(n);
          }
          if (e) {
            if ("clone" === t.type || e.$placeHolder) {
              var o = (e = e.cloneNode(!0)).getAttribute("id");
              o = o ? "".concat(o, "--clone") : "clone-".concat(this.fancybox.id, "-").concat(t.index), e.setAttribute("id", o);
            } else {
              var a = document.createElement("div");
              a.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(a, e), e.$placeHolder = a;
            }
            this.fancybox.setContent(t, e);
          } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
        }
      }, {
        key: "loadAjaxContent",
        value: function value(t) {
          var e = this.fancybox,
            i = new XMLHttpRequest();
          e.showLoading(t), i.onreadystatechange = function () {
            i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
          };
          var n = t.ajax || null;
          i.open(n ? "POST" : "GET", t.src), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(n), t.xhr = i;
        }
      }, {
        key: "loadIframeContent",
        value: function value(t) {
          var e = this,
            i = this.fancybox,
            n = document.createElement("iframe");
          if (n.className = "fancybox__iframe", n.setAttribute("id", "fancybox__iframe_".concat(i.id, "_").concat(t.index)), n.setAttribute("allow", "autoplay; fullscreen"), n.setAttribute("scrolling", "auto"), t.$iframe = n, "iframe" !== t.type || !1 === t.preload) return n.setAttribute("src", t.src), this.fancybox.setContent(t, n), void this.resizeIframe(t);
          i.showLoading(t);
          var o = document.createElement("div");
          o.style.visibility = "hidden", this.fancybox.setContent(t, o), o.appendChild(n), n.onerror = function () {
            i.setError(t, "{{IFRAME_ERROR}}");
          }, n.onload = function () {
            i.hideLoading(t);
            var o = !1;
            n.isReady || (n.isReady = !0, o = !0), n.src.length && (n.parentNode.style.visibility = "", e.resizeIframe(t), o && i.revealContent(t));
          }, n.setAttribute("src", t.src);
        }
      }, {
        key: "setAspectRatio",
        value: function value(t) {
          var e = t.$content,
            i = t.ratio;
          if (e) {
            var n = t._width,
              o = t._height;
            if (i || n && o) {
              Object.assign(e.style, {
                width: n && o ? "100%" : "",
                height: n && o ? "100%" : "",
                maxWidth: "",
                maxHeight: ""
              });
              var a = e.offsetWidth,
                s = e.offsetHeight;
              if (o = o || s, (n = n || a) > a || o > s) {
                var r = Math.min(a / n, s / o);
                n *= r, o *= r;
              }
              Math.abs(n / o - i) > .01 && (i < n / o ? n = o * i : o = n / i), Object.assign(e.style, {
                width: "".concat(n, "px"),
                height: "".concat(o, "px")
              });
            }
          }
        }
      }, {
        key: "resizeIframe",
        value: function value(t) {
          var e = t.$iframe;
          if (e) {
            var i = t._width || 0,
              n = t._height || 0;
            i && n && (t.autoSize = !1);
            var o = e.parentNode,
              a = o && o.style;
            if (!1 !== t.preload && !1 !== t.autoSize && a) try {
              var s = window.getComputedStyle(o),
                r = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight),
                l = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom),
                c = e.contentWindow.document,
                h = c.getElementsByTagName("html")[0],
                d = c.body;
              a.width = "", d.style.overflow = "hidden", i = i || h.scrollWidth + r, a.width = "".concat(i, "px"), d.style.overflow = "", a.flex = "0 0 auto", a.height = "".concat(d.scrollHeight, "px"), n = h.scrollHeight + l;
            } catch (t) {}
            if (i || n) {
              var u = {
                flex: "0 1 auto"
              };
              i && (u.width = "".concat(i, "px")), n && (u.height = "".concat(n, "px")), Object.assign(a, u);
            }
          }
        }
      }, {
        key: "onRefresh",
        value: function value(t, e) {
          var i = this;
          e.slides.forEach(function (t) {
            t.$el && (t.$iframe && i.resizeIframe(t), t.ratio && i.setAspectRatio(t));
          });
        }
      }, {
        key: "setContent",
        value: function value(t) {
          if (t && !t.isDom) {
            switch (t.type) {
              case "html":
                this.fancybox.setContent(t, t.src);
                break;
              case "html5video":
                this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.poster || t.thumb || ""));
                break;
              case "inline":
              case "clone":
                this.loadInlineContent(t);
                break;
              case "ajax":
                this.loadAjaxContent(t);
                break;
              case "pdf":
              case "video":
              case "map":
                t.preload = !1;
              case "iframe":
                this.loadIframeContent(t);
            }
            t.ratio && this.setAspectRatio(t);
          }
        }
      }, {
        key: "onSelectSlide",
        value: function value(t, e, i) {
          "ready" === t.state && this.playVideo(i);
        }
      }, {
        key: "playVideo",
        value: function value(t) {
          if ("html5video" === t.type && t.video.autoplay) try {
            var e = t.$el.querySelector("video");
            if (e) {
              var i = e.play();
              void 0 !== i && i.then(function () {}).catch(function (t) {
                e.muted = !0, e.play();
              });
            }
          } catch (t) {}
          if ("video" === t.type && t.$iframe && t.$iframe.contentWindow) {
            !function e() {
              if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
                var i;
                if (t.$iframe.isReady) return t.video && t.video.autoplay && (i = "youtube" == t.vendor ? {
                  event: "command",
                  func: "playVideo"
                } : {
                  method: "play",
                  value: "true"
                }), void (i && t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"));
                "youtube" === t.vendor && (i = {
                  event: "listening",
                  id: t.$iframe.getAttribute("id")
                }, t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"));
              }
              t.poller = setTimeout(e, 250);
            }();
          }
        }
      }, {
        key: "onUnselectSlide",
        value: function value(t, e, i) {
          if ("html5video" !== i.type) {
            var n = !1;
            "vimeo" == i.vendor ? n = {
              method: "pause",
              value: "true"
            } : "youtube" === i.vendor && (n = {
              event: "command",
              func: "pauseVideo"
            }), n && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(n), "*"), clearTimeout(i.poller);
          } else try {
            i.$el.querySelector("video").pause();
          } catch (t) {}
        }
      }, {
        key: "onRemoveSlide",
        value: function value(t, e, i) {
          i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = "//about:blank", i.$iframe = null);
          var n = i.$content;
          "inline" === i.type && n && (n.classList.remove("fancybox__content"), "none" !== n.style.display && (n.style.display = "none")), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null);
          var o = n && n.$placeHolder;
          o && (o.parentNode.insertBefore(n, o), o.remove(), n.$placeHolder = null);
        }
      }, {
        key: "onMessage",
        value: function value(t) {
          try {
            var e = JSON.parse(t.data);
            if ("https://player.vimeo.com" === t.origin) {
              if ("ready" === e.event) {
                var i,
                  n = x(document.getElementsByClassName("fancybox__iframe"));
                try {
                  for (n.s(); !(i = n.n()).done;) {
                    var o = i.value;
                    o.contentWindow === t.source && (o.isReady = 1);
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
              }
            } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1);
          } catch (t) {}
        }
      }, {
        key: "attach",
        value: function value() {
          this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1);
        }
      }, {
        key: "detach",
        value: function value() {
          this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1);
        }
      }]), t;
    }();
  G.defaults = Z;
  var K = function () {
    function t(e) {
      o(this, t), this.fancybox = e;
      for (var i = 0, n = ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"]; i < n.length; i++) {
        var a = n[i];
        this[a] = this[a].bind(this);
      }
      this.events = {
        ready: this.onReady,
        closing: this.onClosing,
        done: this.onDone,
        "Carousel.change": this.onPageChange,
        "Carousel.createSlide": this.onCreateSlide,
        "Carousel.removeSlide": this.onRemoveSlide
      };
    }
    return s(t, [{
      key: "onReady",
      value: function value() {
        var t = this;
        this.fancybox.Carousel.slides.forEach(function (e) {
          e.$el && t.setContent(e);
        });
      }
    }, {
      key: "onDone",
      value: function value(t, e) {
        this.handleCursor(e);
      }
    }, {
      key: "onClosing",
      value: function value(t) {
        clearTimeout(this.clickTimer), this.clickTimer = null, t.Carousel.slides.forEach(function (t) {
          t.$image && (t.state = "destroy"), t.Panzoom && t.Panzoom.detachEvents();
        }), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut();
      }
    }, {
      key: "onCreateSlide",
      value: function value(t, e, i) {
        "ready" === this.fancybox.state && this.setContent(i);
      }
    }, {
      key: "onRemoveSlide",
      value: function value(t, e, i) {
        i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
      }
    }, {
      key: "setContent",
      value: function value(t) {
        var e = this;
        if (!(t.isDom || t.html || t.type && "image" !== t.type || t.$image)) {
          t.type = "image", t.state = "loading";
          var i = document.createElement("div");
          i.style.visibility = "hidden";
          var n = document.createElement("img");
          n.addEventListener("load", function (i) {
            i.stopImmediatePropagation(), e.onImageStatusChange(t);
          }), n.addEventListener("error", function () {
            e.onImageStatusChange(t);
          }), n.src = t.src, n.alt = "", n.draggable = !1, n.classList.add("fancybox__image"), t.srcset && n.setAttribute("srcset", t.srcset), t.sizes && n.setAttribute("sizes", t.sizes), t.$image = n;
          var o = this.fancybox.option("Image.wrap");
          if (o) {
            var a = document.createElement("div");
            a.classList.add("string" == typeof o ? o : "fancybox__image-wrap"), a.appendChild(n), i.appendChild(a), t.$wrap = a;
          } else i.appendChild(n);
          t.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t, i), n.complete || n.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t);
        }
      }
    }, {
      key: "onImageStatusChange",
      value: function value(t) {
        var e = this,
          i = t.$image;
        i && "loading" === t.state && (i.complete && i.naturalWidth && i.naturalHeight ? (this.fancybox.hideLoading(t), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t), t.$el.addEventListener("wheel", function (i) {
          return e.onWheel(t, i);
        }, {
          passive: !1
        }), t.$content.addEventListener("click", function (i) {
          return e.onClick(t, i);
        }, {
          passive: !1
        }), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
      }
    }, {
      key: "initSlidePanzoom",
      value: function value(t) {
        var e = this;
        t.Panzoom || (t.Panzoom = new M(t.$el, k(!0, this.fancybox.option("Image.Panzoom", {}), {
          viewport: t.$wrap,
          content: t.$image,
          width: t._width,
          height: t._height,
          wrapInner: !1,
          textSelection: !0,
          touch: this.fancybox.option("Image.touch"),
          panOnlyZoomed: !0,
          click: !1,
          wheel: !1
        })), t.Panzoom.on("startAnimation", function () {
          e.fancybox.trigger("Image.startAnimation", t);
        }), t.Panzoom.on("endAnimation", function () {
          "zoomIn" === t.state && e.fancybox.done(t), e.handleCursor(t), e.fancybox.trigger("Image.endAnimation", t);
        }), t.Panzoom.on("afterUpdate", function () {
          e.handleCursor(t), e.fancybox.trigger("Image.afterUpdate", t);
        }));
      }
    }, {
      key: "revealContent",
      value: function value(t) {
        null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t);
      }
    }, {
      key: "getZoomInfo",
      value: function value(t) {
        var e = t.$thumb.getBoundingClientRect(),
          i = e.width,
          n = e.height,
          o = t.$content.getBoundingClientRect(),
          a = o.width,
          s = o.height,
          r = o.top - e.top,
          l = o.left - e.left,
          c = this.fancybox.option("Image.zoomOpacity");
        return "auto" === c && (c = Math.abs(i / n - a / s) > .1), {
          top: r,
          left: l,
          scale: a && i ? i / a : 1,
          opacity: c
        };
      }
    }, {
      key: "canZoom",
      value: function value(t) {
        var e = this.fancybox,
          i = e.$container;
        if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
        if (t.Panzoom && !t.Panzoom.content.width) return !1;
        if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit")) return !1;
        var n = t.$thumb;
        if (!n || "loading" === t.state) return !1;
        i.classList.add("fancybox__no-click");
        var o,
          a = n.getBoundingClientRect();
        if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
          var s = document.elementFromPoint(a.left + 1, a.top + 1) === n,
            r = document.elementFromPoint(a.right - 1, a.bottom - 1) === n;
          o = s && r;
        } else o = document.elementFromPoint(a.left + .5 * a.width, a.top + .5 * a.height) === n;
        return i.classList.remove("fancybox__no-click"), o;
      }
    }, {
      key: "zoomIn",
      value: function value() {
        var t = this.fancybox,
          e = t.getSlide(),
          i = e.Panzoom,
          n = this.getZoomInfo(e),
          o = n.top,
          a = n.left,
          s = n.scale,
          r = n.opacity;
        t.trigger("reveal", e), i.panTo({
          x: -1 * a,
          y: -1 * o,
          scale: s,
          friction: 0,
          ignoreBounds: !0
        }), e.$content.style.visibility = "", e.state = "zoomIn", !0 === r && i.on("afterTransform", function (t) {
          "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - s)));
        }), i.panTo({
          x: 0,
          y: 0,
          scale: 1,
          friction: this.fancybox.option("Image.zoomFriction")
        });
      }
    }, {
      key: "zoomOut",
      value: function value() {
        var t = this,
          e = this.fancybox,
          i = e.getSlide(),
          n = i.Panzoom;
        if (n) {
          i.state = "zoomOut", e.state = "customClosing", i.$caption && (i.$caption.style.visibility = "hidden");
          var o = this.fancybox.option("Image.zoomFriction"),
            a = function a(e) {
              var a = t.getZoomInfo(i),
                s = a.top,
                r = a.left,
                l = a.scale,
                c = a.opacity;
              e || c || (o *= .82), n.panTo({
                x: -1 * r,
                y: -1 * s,
                scale: l,
                friction: o,
                ignoreBounds: !0
              }), o *= .98;
            };
          window.addEventListener("scroll", a), n.once("endAnimation", function () {
            window.removeEventListener("scroll", a), e.destroy();
          }), a();
        }
      }
    }, {
      key: "handleCursor",
      value: function value(t) {
        if ("image" === t.type && t.$el) {
          var e = t.Panzoom,
            i = this.fancybox.option("Image.click", !1, t),
            n = this.fancybox.option("Image.touch"),
            o = t.$el.classList,
            a = this.fancybox.option("Image.canZoomInClass"),
            s = this.fancybox.option("Image.canZoomOutClass");
          if (o.remove(s), o.remove(a), e && "toggleZoom" === i) e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? o.add(a) : e.content.scale > 1 && !n && o.add(s);else "close" === i && o.add(s);
        }
      }
    }, {
      key: "onWheel",
      value: function value(t, e) {
        if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e)) switch (this.fancybox.option("Image.wheel")) {
          case "zoom":
            "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
            break;
          case "close":
            this.fancybox.close();
            break;
          case "slide":
            this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
        }
      }
    }, {
      key: "onClick",
      value: function value(t, e) {
        var i = this;
        if ("ready" === this.fancybox.state) {
          var n = t.Panzoom;
          if (!n || !n.dragPosition.midPoint && 0 === n.dragOffset.x && 0 === n.dragOffset.y && 1 === n.dragOffset.scale) {
            if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
            var o = function o(n) {
                switch (n) {
                  case "toggleZoom":
                    e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
                    break;
                  case "close":
                    i.fancybox.close();
                    break;
                  case "next":
                    e.stopPropagation(), i.fancybox.next();
                }
              },
              a = this.fancybox.option("Image.click"),
              s = this.fancybox.option("Image.doubleClick");
            s ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, o(s)) : this.clickTimer = setTimeout(function () {
              i.clickTimer = null, o(a);
            }, 300) : o(a);
          }
        }
      }
    }, {
      key: "onPageChange",
      value: function value(t, e) {
        var i = t.getSlide();
        e.slides.forEach(function (t) {
          t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({
            x: 0,
            y: 0,
            scale: 1,
            friction: .8
          });
        });
      }
    }, {
      key: "attach",
      value: function value() {
        this.fancybox.on(this.events);
      }
    }, {
      key: "detach",
      value: function value() {
        this.fancybox.off(this.events);
      }
    }]), t;
  }();
  K.defaults = {
    canZoomInClass: "can-zoom_in",
    canZoomOutClass: "can-zoom_out",
    zoom: !0,
    zoomOpacity: "auto",
    zoomFriction: .82,
    ignoreCoveredThumbnail: !1,
    touch: !0,
    click: "toggleZoom",
    doubleClick: null,
    wheel: "zoom",
    fit: "contain",
    wrap: !1,
    Panzoom: {
      ratio: 1
    }
  };
  var J = function () {
      function t(e) {
        o(this, t), this.fancybox = e;
        for (var i = 0, n = ["onChange", "onClosing"]; i < n.length; i++) {
          var a = n[i];
          this[a] = this[a].bind(this);
        }
        this.events = {
          initCarousel: this.onChange,
          "Carousel.change": this.onChange,
          closing: this.onClosing
        }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null;
      }
      return s(t, [{
        key: "onChange",
        value: function value(t) {
          var e = this,
            i = t.Carousel;
          this.timer && clearTimeout(this.timer);
          var n = null === i.prevPage,
            o = t.getSlide(),
            a = new URL(document.URL).hash,
            s = !1;
          if (o.slug) s = "#" + o.slug;else {
            var r = o.$trigger && o.$trigger.dataset,
              l = t.option("slug") || r && r.fancybox;
            l && l.length && "true" !== l && (s = "#" + l + (i.slides.length > 1 ? "-" + (o.index + 1) : ""));
          }
          n && (this.origHash = a !== s ? a : ""), s && a !== s && (this.timer = setTimeout(function () {
            try {
              window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + s), n && (e.hasCreatedHistory = !0);
            } catch (t) {}
          }, 300));
        }
      }, {
        key: "onClosing",
        value: function value() {
          if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {
            return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
          } catch (t) {}
        }
      }, {
        key: "attach",
        value: function value(t) {
          t.on(this.events);
        }
      }, {
        key: "detach",
        value: function value(t) {
          t.off(this.events);
        }
      }], [{
        key: "startFromUrl",
        value: function value() {
          var e = t.Fancybox;
          if (e && !e.getInstance() && !1 !== e.defaults.Hash) {
            var i = t.getParsedURL(),
              n = i.hash,
              o = i.slug,
              a = i.index;
            if (o) {
              var s = document.querySelector('[data-slug="'.concat(n, '"]'));
              if (s && s.dispatchEvent(new CustomEvent("click", {
                bubbles: !0,
                cancelable: !0
              })), !e.getInstance()) {
                var r = document.querySelectorAll('[data-fancybox="'.concat(o, '"]'));
                r.length && (null === a && 1 === r.length ? s = r[0] : a && (s = r[a - 1]), s && s.dispatchEvent(new CustomEvent("click", {
                  bubbles: !0,
                  cancelable: !0
                })));
              }
            }
          }
        }
      }, {
        key: "onHashChange",
        value: function value() {
          var e = t.getParsedURL(),
            i = e.slug,
            n = e.index,
            o = t.Fancybox,
            a = o && o.getInstance();
          if (a && a.plugins.Hash) {
            if (i) {
              var s = a.Carousel;
              if (i === a.option("slug")) return s.slideTo(n - 1);
              var r,
                l = x(s.slides);
              try {
                for (l.s(); !(r = l.n()).done;) {
                  var c = r.value;
                  if (c.slug && c.slug === i) return s.slideTo(c.index);
                }
              } catch (t) {
                l.e(t);
              } finally {
                l.f();
              }
              var h = a.getSlide(),
                d = h.$trigger && h.$trigger.dataset;
              if (d && d.fancybox === i) return s.slideTo(n - 1);
            }
            a.plugins.Hash.hasSilentClose = !0, a.close();
          }
          t.startFromUrl();
        }
      }, {
        key: "create",
        value: function value(e) {
          function i() {
            window.addEventListener("hashchange", t.onHashChange, !1), t.startFromUrl();
          }
          t.Fancybox = e, W && window.requestAnimationFrame(function () {
            /complete|interactive|loaded/.test(document.readyState) ? i() : document.addEventListener("DOMContentLoaded", i);
          });
        }
      }, {
        key: "destroy",
        value: function value() {
          window.removeEventListener("hashchange", t.onHashChange, !1);
        }
      }, {
        key: "getParsedURL",
        value: function value() {
          var t = window.location.hash.substr(1),
            e = t.split("-"),
            i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
          return {
            hash: t,
            slug: e.join("-"),
            index: i
          };
        }
      }]), t;
    }(),
    Q = {
      pageXOffset: 0,
      pageYOffset: 0,
      element: function element() {
        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
      },
      activate: function activate(t) {
        Q.pageXOffset = window.pageXOffset, Q.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
      },
      deactivate: function deactivate() {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
      }
    },
    tt = function () {
      function t(e) {
        o(this, t), this.fancybox = e, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
      }
      return s(t, [{
        key: "isActive",
        value: function value() {
          return this.active;
        }
      }, {
        key: "setTimer",
        value: function value() {
          var t = this;
          if (this.active && !this.timer) {
            var e = this.fancybox.option("slideshow.delay", 3e3);
            this.timer = setTimeout(function () {
              t.timer = null, t.fancybox.option("infinite") || t.fancybox.getSlide().index !== t.fancybox.Carousel.slides.length - 1 ? t.fancybox.next() : t.fancybox.jumpTo(0, {
                friction: 0
              });
            }, e);
            var i = this.$progress;
            i || ((i = document.createElement("div")).classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(i, this.fancybox.$carousel), this.$progress = i, i.offsetHeight), i.style.transitionDuration = "".concat(e, "ms"), i.style.transform = "scaleX(1)";
          }
        }
      }, {
        key: "clearTimer",
        value: function value() {
          clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight);
        }
      }, {
        key: "activate",
        value: function value() {
          this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1));
        }
      }, {
        key: "handleVisibilityChange",
        value: function value() {
          this.deactivate();
        }
      }, {
        key: "deactivate",
        value: function value() {
          this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1);
        }
      }, {
        key: "toggle",
        value: function value() {
          this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
        }
      }]), t;
    }(),
    et = {
      display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"],
      autoEnable: !0,
      items: {
        counter: {
          position: "left",
          type: "div",
          class: "fancybox__counter",
          html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
          attr: {
            tabindex: -1
          }
        },
        prev: {
          type: "button",
          class: "fancybox__button--prev",
          label: "PREV",
          html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
          attr: {
            "data-fancybox-prev": ""
          }
        },
        next: {
          type: "button",
          class: "fancybox__button--next",
          label: "NEXT",
          html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
          attr: {
            "data-fancybox-next": ""
          }
        },
        fullscreen: {
          type: "button",
          class: "fancybox__button--fullscreen",
          label: "TOGGLE_FULLSCREEN",
          html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
          click: function click(t) {
            t.preventDefault(), Q.element() ? Q.deactivate() : Q.activate(this.fancybox.$container);
          }
        },
        slideshow: {
          type: "button",
          class: "fancybox__button--slideshow",
          label: "TOGGLE_SLIDESHOW",
          html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
          click: function click(t) {
            t.preventDefault(), this.Slideshow.toggle();
          }
        },
        zoom: {
          type: "button",
          class: "fancybox__button--zoom",
          label: "TOGGLE_ZOOM",
          html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
          click: function click(t) {
            t.preventDefault();
            var e = this.fancybox.getSlide().Panzoom;
            e && e.toggleZoom();
          }
        },
        download: {
          type: "link",
          label: "DOWNLOAD",
          class: "fancybox__button--download",
          html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
          click: function click(t) {
            t.stopPropagation();
          }
        },
        thumbs: {
          type: "button",
          label: "TOGGLE_THUMBS",
          class: "fancybox__button--thumbs",
          html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
          click: function click(t) {
            t.stopPropagation();
            var e = this.fancybox.plugins.Thumbs;
            e && e.toggle();
          }
        },
        close: {
          type: "button",
          label: "CLOSE",
          class: "fancybox__button--close",
          html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
          attr: {
            "data-fancybox-close": "",
            tabindex: 0
          }
        }
      }
    },
    it = function () {
      function t(e) {
        var i = this;
        o(this, t), this.fancybox = e, this.$container = null, this.state = "init";
        for (var n = 0, a = ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"]; n < a.length; n++) {
          var s = a[n];
          this[s] = this[s].bind(this);
        }
        this.events = {
          init: this.onInit,
          prepare: this.onPrepare,
          done: this.onDone,
          keydown: this.onKeydown,
          closing: this.onClosing,
          "Carousel.change": this.onChange,
          "Carousel.settle": this.onSettle,
          "Carousel.Panzoom.touchStart": function CarouselPanzoomTouchStart() {
            return i.onRefresh();
          },
          "Image.startAnimation": function ImageStartAnimation(t, e) {
            return i.onRefresh(e);
          },
          "Image.afterUpdate": function ImageAfterUpdate(t, e) {
            return i.onRefresh(e);
          }
        };
      }
      return s(t, [{
        key: "onInit",
        value: function value() {
          if (this.fancybox.option("Toolbar.autoEnable")) {
            var t,
              e = !1,
              i = x(this.fancybox.items);
            try {
              for (i.s(); !(t = i.n()).done;) {
                if ("image" === t.value.type) {
                  e = !0;
                  break;
                }
              }
            } catch (t) {
              i.e(t);
            } finally {
              i.f();
            }
            if (!e) return void (this.state = "disabled");
          }
          var n,
            o = x(this.fancybox.option("Toolbar.display"));
          try {
            for (o.s(); !(n = o.n()).done;) {
              var a = n.value;
              if ("close" === (w(a) ? a.id : a)) {
                this.fancybox.options.closeButton = !1;
                break;
              }
            }
          } catch (t) {
            o.e(t);
          } finally {
            o.f();
          }
        }
      }, {
        key: "onPrepare",
        value: function value() {
          var t = this.fancybox;
          if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new tt(t), !t.Carousel.prevPage && (t.option("slideshow.autoStart") && this.Slideshow.activate(), t.option("fullscreen.autoStart") && !Q.element()))) try {
            Q.activate(t.$container);
          } catch (t) {}
        }
      }, {
        key: "onFsChange",
        value: function value() {
          window.scrollTo(Q.pageXOffset, Q.pageYOffset);
        }
      }, {
        key: "onSettle",
        value: function value() {
          var t = this.fancybox,
            e = this.Slideshow;
          e && e.isActive() && (t.getSlide().index !== t.Carousel.slides.length - 1 || t.option("infinite") ? "done" === t.getSlide().state && e.setTimer() : e.deactivate());
        }
      }, {
        key: "onChange",
        value: function value() {
          this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
        }
      }, {
        key: "onDone",
        value: function value(t, e) {
          var i = this.Slideshow;
          e.index === t.getSlide().index && (this.update(), i && i.isActive() && (t.option("infinite") || e.index !== t.Carousel.slides.length - 1 ? i.setTimer() : i.deactivate()));
        }
      }, {
        key: "onRefresh",
        value: function value(t) {
          t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate());
        }
      }, {
        key: "onKeydown",
        value: function value(t, e, i) {
          " " === e && this.Slideshow && (this.Slideshow.toggle(), i.preventDefault());
        }
      }, {
        key: "onClosing",
        value: function value() {
          this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
        }
      }, {
        key: "createElement",
        value: function value(t) {
          var e, i;
          ("div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button")).classList.add("carousel__button"), e.innerHTML = t.html, e.setAttribute("tabindex", t.tabindex || 0), t.class) && (i = e.classList).add.apply(i, m(t.class.split(" ")));
          for (var n in t.attr) e.setAttribute(n, t.attr[n]);
          t.label && e.setAttribute("title", this.fancybox.localize("{{".concat(t.label, "}}"))), t.click && e.addEventListener("click", t.click.bind(this)), "prev" === t.id && e.setAttribute("data-fancybox-prev", ""), "next" === t.id && e.setAttribute("data-fancybox-next", "");
          var o = e.querySelector("svg");
          return o && (o.setAttribute("role", "img"), o.setAttribute("tabindex", "-1"), o.setAttribute("xmlns", "http://www.w3.org/2000/svg")), e;
        }
      }, {
        key: "build",
        value: function value() {
          var t = this;
          this.cleanup();
          var e,
            i = this.fancybox.option("Toolbar.items"),
            n = [{
              position: "left",
              items: []
            }, {
              position: "center",
              items: []
            }, {
              position: "right",
              items: []
            }],
            o = this.fancybox.plugins.Thumbs,
            a = x(this.fancybox.option("Toolbar.display"));
          try {
            var s = function s() {
              var a = e.value,
                s = void 0,
                r = void 0;
              if (w(a) ? (s = a.id, r = k({}, i[s], a)) : r = i[s = a], ["counter", "next", "prev", "slideshow"].includes(s) && t.fancybox.items.length < 2) return "continue";
              if ("fullscreen" === s) {
                if (!document.fullscreenEnabled || window.fullScreen) return "continue";
                document.addEventListener("fullscreenchange", t.onFsChange);
              }
              if ("thumbs" === s && (!o || "disabled" === o.state)) return "continue";
              if (!r) return "continue";
              var l = r.position || "right",
                c = n.find(function (t) {
                  return t.position === l;
                });
              c && c.items.push(r);
            };
            for (a.s(); !(e = a.n()).done;) s();
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }
          var r = document.createElement("div");
          r.classList.add("fancybox__toolbar");
          for (var l = 0, c = n; l < c.length; l++) {
            var h = c[l];
            if (h.items.length) {
              var d = document.createElement("div");
              d.classList.add("fancybox__toolbar__items"), d.classList.add("fancybox__toolbar__items--".concat(h.position));
              var u,
                f = x(h.items);
              try {
                for (f.s(); !(u = f.n()).done;) {
                  var v = u.value;
                  d.appendChild(this.createElement(v));
                }
              } catch (t) {
                f.e(t);
              } finally {
                f.f();
              }
              r.appendChild(d);
            }
          }
          this.fancybox.$carousel.parentNode.insertBefore(r, this.fancybox.$carousel), this.$container = r;
        }
      }, {
        key: "update",
        value: function value() {
          var t,
            e = this.fancybox.getSlide(),
            i = e.index,
            n = this.fancybox.items.length,
            o = e.downloadSrc || ("image" !== e.type || e.error ? null : e.src),
            a = x(this.fancybox.$container.querySelectorAll("a.fancybox__button--download"));
          try {
            for (a.s(); !(t = a.n()).done;) {
              var s = t.value;
              o ? (s.removeAttribute("disabled"), s.removeAttribute("tabindex"), s.setAttribute("href", o), s.setAttribute("download", o), s.setAttribute("target", "_blank")) : (s.setAttribute("disabled", ""), s.setAttribute("tabindex", -1), s.removeAttribute("href"), s.removeAttribute("download"));
            }
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }
          var r,
            l = e.Panzoom,
            c = l && l.option("maxScale") > l.option("baseScale"),
            h = x(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"));
          try {
            for (h.s(); !(r = h.n()).done;) {
              var d = r.value;
              c ? d.removeAttribute("disabled") : d.setAttribute("disabled", "");
            }
          } catch (t) {
            h.e(t);
          } finally {
            h.f();
          }
          var u,
            f = x(this.fancybox.$container.querySelectorAll("[data-fancybox-index]"));
          try {
            for (f.s(); !(u = f.n()).done;) {
              u.value.innerHTML = e.index + 1;
            }
          } catch (t) {
            f.e(t);
          } finally {
            f.f();
          }
          var v,
            p = x(this.fancybox.$container.querySelectorAll("[data-fancybox-count]"));
          try {
            for (p.s(); !(v = p.n()).done;) {
              v.value.innerHTML = n;
            }
          } catch (t) {
            p.e(t);
          } finally {
            p.f();
          }
          if (!this.fancybox.option("infinite")) {
            var g,
              m = x(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"));
            try {
              for (m.s(); !(g = m.n()).done;) {
                var y = g.value;
                0 === i ? y.setAttribute("disabled", "") : y.removeAttribute("disabled");
              }
            } catch (t) {
              m.e(t);
            } finally {
              m.f();
            }
            var b,
              w = x(this.fancybox.$container.querySelectorAll("[data-fancybox-next]"));
            try {
              for (w.s(); !(b = w.n()).done;) {
                var k = b.value;
                i === n - 1 ? k.setAttribute("disabled", "") : k.removeAttribute("disabled");
              }
            } catch (t) {
              w.e(t);
            } finally {
              w.f();
            }
          }
        }
      }, {
        key: "cleanup",
        value: function value() {
          this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null;
        }
      }, {
        key: "attach",
        value: function value() {
          this.fancybox.on(this.events);
        }
      }, {
        key: "detach",
        value: function value() {
          this.fancybox.off(this.events), this.cleanup();
        }
      }]), t;
    }();
  it.defaults = et;
  var nt = {
      ScrollLock: U,
      Thumbs: Y,
      Html: G,
      Toolbar: it,
      Image: K,
      Hash: J
    },
    ot = {
      startIndex: 0,
      preload: 1,
      infinite: !0,
      showClass: "fancybox-zoomInUp",
      hideClass: "fancybox-fadeOut",
      animated: !0,
      hideScrollbar: !0,
      parentEl: null,
      mainClass: null,
      autoFocus: !0,
      trapFocus: !0,
      placeFocusBack: !0,
      click: "close",
      closeButton: "inside",
      dragToClose: !0,
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev"
      },
      template: {
        closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
        spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
        main: null
      },
      l10n: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download"
      }
    },
    at = new Map(),
    st = 0,
    rt = function (t) {
      l(i, t);
      var e = f(i);
      function i(t) {
        var n,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return o(this, i), t = t.map(function (t) {
          return t.width && (t._width = t.width), t.height && (t._height = t.height), t;
        }), (n = e.call(this, k(!0, {}, ot, a))).bindHandlers(), n.state = "init", n.setItems(t), n.attachPlugins(i.Plugins), n.trigger("init"), !0 === n.option("hideScrollbar") && n.hideScrollbar(), n.initLayout(), n.initCarousel(), n.attachEvents(), at.set(n.id, d(n)), n.trigger("prepare"), n.state = "ready", n.trigger("ready"), n.$container.setAttribute("aria-hidden", "false"), n.option("trapFocus") && n.focus(), n;
      }
      return s(i, [{
        key: "option",
        value: function value(t) {
          for (var e, n = this.getSlide(), o = n ? n[t] : void 0, a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) s[r - 1] = arguments[r];
          if (void 0 !== o) {
            var l;
            if ("function" == typeof o) o = (l = o).call.apply(l, [this, this].concat(s));
            return o;
          }
          return (e = p(c(i.prototype), "option", this)).call.apply(e, [this, t].concat(s));
        }
      }, {
        key: "bindHandlers",
        value: function value() {
          for (var t = 0, e = ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"]; t < e.length; t++) {
            var i = e[t];
            this[i] = this[i].bind(this);
          }
        }
      }, {
        key: "attachEvents",
        value: function value() {
          document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), this.$container.addEventListener("click", this.onClick);
        }
      }, {
        key: "detachEvents",
        value: function value() {
          document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick);
        }
      }, {
        key: "initLayout",
        value: function value() {
          var t = this;
          this.$root = this.option("parentEl") || document.body;
          var e = this.option("template.main");
          e && (this.$root.insertAdjacentHTML("beforeend", this.localize(e)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = function () {
            return t.$container.scrollLeft = 0, !1;
          }, Object.entries({
            class: "fancybox__container",
            role: "dialog",
            tabIndex: "-1",
            "aria-modal": "true",
            "aria-hidden": "true",
            "aria-label": this.localize("{{MODAL}}")
          }).forEach(function (e) {
            var i;
            return (i = t.$container).setAttribute.apply(i, m(e));
          }), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++st, this.$container.setAttribute("id", "fancybox-" + this.id));
          var i,
            n = this.option("mainClass");
          n && (i = this.$container.classList).add.apply(i, m(n.split(" ")));
          return document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this;
        }
      }, {
        key: "setItems",
        value: function value(t) {
          var e,
            i = [],
            n = x(t);
          try {
            for (n.s(); !(e = n.n()).done;) {
              var o = e.value,
                a = o.$trigger;
              if (a) {
                var s = a.dataset || {};
                o.src = s.src || a.getAttribute("href") || o.src, o.type = s.type || o.type, !o.src && a instanceof HTMLImageElement && (o.src = a.currentSrc || o.$trigger.src);
              }
              var r = o.$thumb;
              if (!r) {
                var l = o.$trigger && o.$trigger.origTarget;
                l && (r = l instanceof HTMLImageElement ? l : l.querySelector("img:not([aria-hidden])")), !r && o.$trigger && (r = o.$trigger instanceof HTMLImageElement ? o.$trigger : o.$trigger.querySelector("img:not([aria-hidden])"));
              }
              o.$thumb = r || null;
              var c = o.thumb;
              !c && r && !(c = r.currentSrc || r.src) && r.dataset && (c = r.dataset.lazySrc || r.dataset.src), c || "image" !== o.type || (c = o.src), o.thumb = c || null, o.caption = o.caption || "", i.push(o);
            }
          } catch (t) {
            n.e(t);
          } finally {
            n.f();
          }
          this.items = i;
        }
      }, {
        key: "initCarousel",
        value: function value() {
          var t = this;
          return this.Carousel = new H(this.$carousel, k(!0, {}, {
            prefix: "",
            classNames: {
              viewport: "fancybox__viewport",
              track: "fancybox__track",
              slide: "fancybox__slide"
            },
            textSelection: !0,
            preload: this.option("preload"),
            friction: .88,
            slides: this.items,
            initialPage: this.options.startIndex,
            slidesPerPage: 1,
            infiniteX: this.option("infinite"),
            infiniteY: !0,
            l10n: this.option("l10n"),
            Dots: !1,
            Navigation: {
              classNames: {
                main: "fancybox__nav",
                button: "carousel__button",
                next: "is-next",
                prev: "is-prev"
              }
            },
            Panzoom: {
              textSelection: !0,
              panOnlyZoomed: function panOnlyZoomed() {
                return t.Carousel && t.Carousel.pages && t.Carousel.pages.length < 2 && !t.option("dragToClose");
              },
              lockAxis: function lockAxis() {
                if (t.Carousel) {
                  var e = "x";
                  return t.option("dragToClose") && (e += "y"), e;
                }
              }
            },
            on: {
              "*": function _(e) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                return t.trigger.apply(t, ["Carousel.".concat(e)].concat(n));
              },
              init: function init(e) {
                return t.Carousel = e;
              },
              createSlide: this.onCreateSlide,
              settle: this.onSettle
            }
          }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
            touchMove: this.onTouchMove,
            afterTransform: this.onTransform,
            touchEnd: this.onTouchEnd
          }), this.trigger("initCarousel"), this;
        }
      }, {
        key: "onCreateSlide",
        value: function value(t, e) {
          var i = e.caption || "";
          if ("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), "string" == typeof i && i.length) {
            var n = document.createElement("div"),
              o = "fancybox__caption_".concat(this.id, "_").concat(e.index);
            n.className = "fancybox__caption", n.innerHTML = i, n.setAttribute("id", o), e.$caption = e.$el.appendChild(n), e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", o);
          }
        }
      }, {
        key: "onSettle",
        value: function value() {
          this.option("autoFocus") && this.focus();
        }
      }, {
        key: "onFocus",
        value: function value(t) {
          this.focus(t);
        }
      }, {
        key: "onClick",
        value: function value(t) {
          if (!t.defaultPrevented) {
            var e = t.composedPath()[0];
            if (e.matches("[data-fancybox-close]")) return t.preventDefault(), void i.close(!1, t);
            if (e.matches("[data-fancybox-next]")) return t.preventDefault(), void i.next();
            if (e.matches("[data-fancybox-prev]")) return t.preventDefault(), void i.prev();
            if (e.matches(X) || document.activeElement.blur(), !e.closest(".fancybox__content")) if (!getSelection().toString().length) if (!1 !== this.trigger("click", t)) switch (this.option("click")) {
              case "close":
                this.close();
                break;
              case "next":
                this.next();
            }
          }
        }
      }, {
        key: "onTouchMove",
        value: function value() {
          var t = this.getSlide().Panzoom;
          return !t || 1 === t.content.scale;
        }
      }, {
        key: "onTouchEnd",
        value: function value(t) {
          var e = t.dragOffset.y;
          Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut".concat(t.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === t.lockAxis && t.panTo({
            y: 0
          });
        }
      }, {
        key: "onTransform",
        value: function value(t) {
          if (this.$backdrop) {
            var e = Math.abs(t.content.y),
              i = e < 1 ? "" : Math.max(.33, Math.min(1, 1 - e / t.content.fitHeight * 1.5));
            this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i);
          }
        }
      }, {
        key: "onMousedown",
        value: function value() {
          "ready" === this.state && document.body.classList.add("is-using-mouse");
        }
      }, {
        key: "onKeydown",
        value: function value(t) {
          if (i.getInstance().id === this.id) {
            document.body.classList.remove("is-using-mouse");
            var e = t.key,
              n = this.option("keyboard");
            if (n && !t.ctrlKey && !t.altKey && !t.shiftKey) {
              var o = t.composedPath()[0],
                a = document.activeElement && document.activeElement.classList,
                s = a && a.contains("carousel__button");
              if ("Escape" !== e && !s) if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(o.nodeName)) return;
              if (!1 !== this.trigger("keydown", e, t)) {
                var r = n[e];
                "function" == typeof this[r] && this[r]();
              }
            }
          }
        }
      }, {
        key: "getSlide",
        value: function value() {
          var t = this.Carousel;
          if (!t) return null;
          var e = null === t.page ? t.option("initialPage") : t.page,
            i = t.pages || [];
          return i.length && i[e] ? i[e].slides[0] : null;
        }
      }, {
        key: "focus",
        value: function value(t) {
          if (!(i.ignoreFocusChange || ["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1)) {
            var e = this.$container,
              n = this.getSlide(),
              o = "done" === n.state ? n.$el : null;
            if (!o || !o.contains(document.activeElement)) {
              t && t.preventDefault(), i.ignoreFocusChange = !0;
              for (var a, s = [], r = 0, l = Array.from(e.querySelectorAll(X)); r < l.length; r++) {
                var c = l[r],
                  h = c.offsetParent,
                  d = o && o.contains(c),
                  u = !this.Carousel.$viewport.contains(c);
                h && (d || u) ? (s.push(c), void 0 !== c.dataset.origTabindex && (c.tabIndex = c.dataset.origTabindex, c.removeAttribute("data-orig-tabindex")), (c.hasAttribute("autoFocus") || !a && d && !c.classList.contains("carousel__button")) && (a = c)) : (c.dataset.origTabindex = void 0 === c.dataset.origTabindex ? c.getAttribute("tabindex") : c.dataset.origTabindex, c.tabIndex = -1);
              }
              t ? s.indexOf(t.target) > -1 ? this.lastFocus = t.target : this.lastFocus === e ? q(s[s.length - 1]) : q(e) : this.option("autoFocus") && a ? q(a) : s.indexOf(document.activeElement) < 0 && q(e), this.lastFocus = document.activeElement, i.ignoreFocusChange = !1;
            }
          }
        }
      }, {
        key: "hideScrollbar",
        value: function value() {
          if (W) {
            var t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
              e = "fancybox-style-noscroll",
              i = document.getElementById(e);
            i || t > 0 && ((i = document.createElement("style")).id = e, i.type = "text/css", i.innerHTML = ".compensate-for-scrollbar {padding-right: ".concat(t, "px;}"), document.getElementsByTagName("head")[0].appendChild(i), document.body.classList.add("compensate-for-scrollbar"));
          }
        }
      }, {
        key: "revealScrollbar",
        value: function value() {
          document.body.classList.remove("compensate-for-scrollbar");
          var t = document.getElementById("fancybox-style-noscroll");
          t && t.remove();
        }
      }, {
        key: "clearContent",
        value: function value(t) {
          this.Carousel.trigger("removeSlide", t), t.$content && (t.$content.remove(), t.$content = null), t.$closeButton && (t.$closeButton.remove(), t.$closeButton = null), t._className && t.$el.classList.remove(t._className);
        }
      }, {
        key: "setContent",
        value: function value(t, e) {
          var i,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o = t.$el;
          if (e instanceof HTMLElement) ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (i = document.createElement("div")).appendChild(e) : i = e;else {
            var a = document.createRange().createContextualFragment(e);
            (i = document.createElement("div")).appendChild(a);
          }
          if (t.filter && !t.error && (i = i.querySelector(t.filter)), i instanceof Element) return t._className = "has-".concat(n.suffix || t.type || "unknown"), o.classList.add(t._className), i.classList.add("fancybox__content"), "none" !== i.style.display && "none" !== getComputedStyle(i).getPropertyValue("display") || (i.style.display = t.display || this.option("defaultDisplay") || "flex"), t.id && i.setAttribute("id", t.id), t.$content = i, o.prepend(i), this.manageCloseButton(t), "loading" !== t.state && this.revealContent(t), i;
          this.setError(t, "{{ELEMENT_NOT_FOUND}}");
        }
      }, {
        key: "manageCloseButton",
        value: function value(t) {
          var e = this,
            i = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
          if (i && ("top" !== i || !this.$closeButton)) {
            var n = document.createElement("button");
            n.classList.add("carousel__button", "is-close"), n.setAttribute("title", this.options.l10n.CLOSE), n.innerHTML = this.option("template.closeButton"), n.addEventListener("click", function (t) {
              return e.close(t);
            }), "inside" === i ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(n)) : this.$closeButton = this.$container.insertBefore(n, this.$container.firstChild);
          }
        }
      }, {
        key: "revealContent",
        value: function value(t) {
          var e = this;
          this.trigger("reveal", t), t.$content.style.visibility = "";
          var i = !1;
          t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (i = void 0 === t.showClass ? this.option("showClass") : t.showClass), i ? (t.state = "animating", this.animateCSS(t.$content, i, function () {
            e.done(t);
          })) : this.done(t);
        }
      }, {
        key: "animateCSS",
        value: function value(t, e, i) {
          if (t && t.dispatchEvent(new CustomEvent("animationend", {
            bubbles: !0,
            cancelable: !0
          })), t && e) {
            t.addEventListener("animationend", function n(o) {
              o.currentTarget === this && (t.removeEventListener("animationend", n), i && i(), t.classList.remove(e));
            }), t.classList.add(e);
          } else "function" == typeof i && i();
        }
      }, {
        key: "done",
        value: function value(t) {
          t.state = "done", this.trigger("done", t);
          var e = this.getSlide();
          e && t.index === e.index && this.option("autoFocus") && this.focus();
        }
      }, {
        key: "setError",
        value: function value(t, e) {
          t.error = e, this.hideLoading(t), this.clearContent(t);
          var i = document.createElement("div");
          i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i, {
            suffix: "error"
          });
        }
      }, {
        key: "showLoading",
        value: function value(t) {
          var e = this;
          t.state = "loading", t.$el.classList.add("is-loading");
          var i = t.$el.querySelector(".fancybox__spinner");
          i || ((i = document.createElement("div")).classList.add("fancybox__spinner"), i.innerHTML = this.option("template.spinner"), i.addEventListener("click", function () {
            e.Carousel.Panzoom.velocity || e.close();
          }), t.$el.prepend(i));
        }
      }, {
        key: "hideLoading",
        value: function value(t) {
          var e = t.$el && t.$el.querySelector(".fancybox__spinner");
          e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (this.trigger("load", t), t.state = "ready");
        }
      }, {
        key: "next",
        value: function value() {
          var t = this.Carousel;
          t && t.pages.length > 1 && t.slideNext();
        }
      }, {
        key: "prev",
        value: function value() {
          var t = this.Carousel;
          t && t.pages.length > 1 && t.slidePrev();
        }
      }, {
        key: "jumpTo",
        value: function value() {
          var t;
          this.Carousel && (t = this.Carousel).slideTo.apply(t, arguments);
        }
      }, {
        key: "close",
        value: function value(t) {
          var e = this;
          if (t && t.preventDefault(), !["closing", "customClosing", "destroy"].includes(this.state) && !1 !== this.trigger("shouldClose", t) && (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), "destroy" !== this.state)) {
            this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
            var i = this.getSlide();
            if (this.Carousel.slides.forEach(function (t) {
              t.$content && t.index !== i.index && e.Carousel.trigger("removeSlide", t);
            }), "closing" === this.state) {
              var n = void 0 === i.hideClass ? this.option("hideClass") : i.hideClass;
              this.animateCSS(i.$content, n, function () {
                e.destroy();
              }, !0);
            }
          }
        }
      }, {
        key: "destroy",
        value: function value() {
          if ("destroy" !== this.state) {
            this.state = "destroy", this.trigger("destroy");
            var t = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
            this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t && q(t), at.delete(this.id);
            var e = i.getInstance();
            e ? e.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar());
          }
        }
      }], [{
        key: "show",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new i(t, e);
        }
      }, {
        key: "fromEvent",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!t.defaultPrevented && !(t.button && 0 !== t.button || t.ctrlKey || t.metaKey || t.shiftKey)) {
            var n,
              o,
              a,
              s = t.composedPath()[0],
              r = s;
            if ((r.matches("[data-fancybox-trigger]") || (r = r.closest("[data-fancybox-trigger]"))) && (n = r && r.dataset && r.dataset.fancyboxTrigger), n) {
              var l = document.querySelectorAll('[data-fancybox="'.concat(n, '"]')),
                c = parseInt(r.dataset.fancyboxIndex, 10) || 0;
              r = l.length ? l[c] : r;
            }
            r || (r = s), Array.from(i.openers.keys()).reverse().some(function (e) {
              a = r;
              var i = !1;
              try {
                a instanceof Element && ("string" == typeof e || e instanceof String) && (i = a.matches(e) || (a = a.closest(e)));
              } catch (t) {}
              return !!i && (t.preventDefault(), o = e, !0);
            });
            var h = !1;
            if (o) {
              e.event = t, e.target = a, a.origTarget = s, h = i.fromOpener(o, e);
              var d = i.getInstance();
              d && "ready" === d.state && t.detail && document.body.classList.add("is-using-mouse");
            }
            return h;
          }
        }
      }, {
        key: "fromOpener",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = function n(t) {
              for (var e = ["false", "0", "no", "null", "undefined"], i = ["true", "1", "yes"], n = Object.assign({}, t.dataset), o = {}, a = 0, s = Object.entries(n); a < s.length; a++) {
                var r = g(s[a], 2),
                  l = r[0],
                  c = r[1];
                if ("fancybox" !== l) if ("width" === l || "height" === l) o["_".concat(l)] = c;else if ("string" == typeof c || c instanceof String) {
                  if (e.indexOf(c) > -1) o[l] = !1;else if (i.indexOf(o[l]) > -1) o[l] = !0;else try {
                    o[l] = JSON.parse(c);
                  } catch (t) {
                    o[l] = c;
                  }
                } else o[l] = c;
              }
              return t instanceof Element && (o.$trigger = t), o;
            },
            o = [],
            a = e.startIndex || 0,
            s = e.target || null,
            r = void 0 !== (e = k({}, e, i.openers.get(t))).groupAll && e.groupAll,
            l = void 0 === e.groupAttr ? "data-fancybox" : e.groupAttr,
            c = l && s ? s.getAttribute("".concat(l)) : "";
          if (!s || c || r) {
            var h = e.root || (s ? s.getRootNode() : document.body);
            o = [].slice.call(h.querySelectorAll(t));
          }
          if (s && !r && (o = c ? o.filter(function (t) {
            return t.getAttribute("".concat(l)) === c;
          }) : [s]), !o.length) return !1;
          var d = i.getInstance();
          return !(d && o.indexOf(d.options.$trigger) > -1) && (a = s ? o.indexOf(s) : a, new i(o = o.map(n), k({}, e, {
            startIndex: a,
            $trigger: s
          })));
        }
      }, {
        key: "bind",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          function n() {
            document.body.addEventListener("click", i.fromEvent, !1);
          }
          W && (i.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? n() : document.addEventListener("DOMContentLoaded", n)), i.openers.set(t, e));
        }
      }, {
        key: "unbind",
        value: function value(t) {
          i.openers.delete(t), i.openers.size || i.destroy();
        }
      }, {
        key: "destroy",
        value: function value() {
          for (var t; t = i.getInstance();) t.destroy();
          i.openers = new Map(), document.body.removeEventListener("click", i.fromEvent, !1);
        }
      }, {
        key: "getInstance",
        value: function value(t) {
          return t ? at.get(t) : Array.from(at.values()).reverse().find(function (t) {
            return !["closing", "customClosing", "destroy"].includes(t.state) && t;
          }) || null;
        }
      }, {
        key: "close",
        value: function value() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            e = arguments.length > 1 ? arguments[1] : void 0;
          if (t) {
            var n,
              o = x(at.values());
            try {
              for (o.s(); !(n = o.n()).done;) {
                var a = n.value;
                a.close(e);
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
          } else {
            var s = i.getInstance();
            s && s.close(e);
          }
        }
      }, {
        key: "next",
        value: function value() {
          var t = i.getInstance();
          t && t.next();
        }
      }, {
        key: "prev",
        value: function value() {
          var t = i.getInstance();
          t && t.prev();
        }
      }]), i;
    }(O);
  rt.version = "4.0.27", rt.defaults = ot, rt.openers = new Map(), rt.Plugins = nt, rt.bind("[data-fancybox]");
  for (var lt = 0, ct = Object.entries(rt.Plugins || {}); lt < ct.length; lt++) {
    var ht = g(ct[lt], 2);
    ht[0];
    var dt = ht[1];
    "function" == typeof dt.create && dt.create(rt);
  }
  t.Carousel = H, t.Fancybox = rt, t.Panzoom = M;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * Flickity PACKAGED v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
      return i(e, t);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = i(e, require("jquery"));
  } else {
    e.jQueryBridget = i(e, e.jQuery);
  }
})(window, function t(e, r) {
  "use strict";

  var o = Array.prototype.slice;
  var i = e.console;
  var u = typeof i == "undefined" ? function () {} : function (t) {
    i.error(t);
  };
  function n(h, s, c) {
    c = c || r || e.jQuery;
    if (!c) {
      return;
    }
    if (!s.prototype.option) {
      s.prototype.option = function (t) {
        if (!c.isPlainObject(t)) {
          return;
        }
        this.options = c.extend(true, this.options, t);
      };
    }
    c.fn[h] = function (t) {
      if (typeof t == "string") {
        var e = o.call(arguments, 1);
        return i(this, t, e);
      }
      n(this, t);
      return this;
    };
    function i(t, r, o) {
      var a;
      var l = "$()." + h + '("' + r + '")';
      t.each(function (t, e) {
        var i = c.data(e, h);
        if (!i) {
          u(h + " not initialized. Cannot call methods, i.e. " + l);
          return;
        }
        var n = i[r];
        if (!n || r.charAt(0) == "_") {
          u(l + " is not a valid method");
          return;
        }
        var s = n.apply(i, o);
        a = a === undefined ? s : a;
      });
      return a !== undefined ? a : t;
    }
    function n(t, n) {
      t.each(function (t, e) {
        var i = c.data(e, h);
        if (i) {
          i.option(n);
          i._init();
        } else {
          i = new s(e, n);
          c.data(e, h, i);
        }
      });
    }
    a(c);
  }
  function a(t) {
    if (!t || t && t.bridget) {
      return;
    }
    t.bridget = n;
  }
  a(r || e.jQuery);
  return n;
});
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("ev-emitter/ev-emitter", e);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = e();
  } else {
    t.EvEmitter = e();
  }
})(typeof window != "undefined" ? window : void 0, function () {
  function t() {}
  var e = t.prototype;
  e.on = function (t, e) {
    if (!t || !e) {
      return;
    }
    var i = this._events = this._events || {};
    var n = i[t] = i[t] || [];
    if (n.indexOf(e) == -1) {
      n.push(e);
    }
    return this;
  };
  e.once = function (t, e) {
    if (!t || !e) {
      return;
    }
    this.on(t, e);
    var i = this._onceEvents = this._onceEvents || {};
    var n = i[t] = i[t] || {};
    n[e] = true;
    return this;
  };
  e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (!i || !i.length) {
      return;
    }
    var n = i.indexOf(e);
    if (n != -1) {
      i.splice(n, 1);
    }
    return this;
  };
  e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (!i || !i.length) {
      return;
    }
    i = i.slice(0);
    e = e || [];
    var n = this._onceEvents && this._onceEvents[t];
    for (var s = 0; s < i.length; s++) {
      var r = i[s];
      var o = n && n[r];
      if (o) {
        this.off(t, r);
        delete n[r];
      }
      r.apply(this, e);
    }
    return this;
  };
  e.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };
  return t;
});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("get-size/get-size", e);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = e();
  } else {
    t.getSize = e();
  }
})(window, function t() {
  "use strict";

  function m(t) {
    var e = parseFloat(t);
    var i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e;
  }
  function e() {}
  var i = typeof console == "undefined" ? e : function (t) {
    console.error(t);
  };
  var y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  var b = y.length;
  function E() {
    var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };
    for (var e = 0; e < b; e++) {
      var i = y[e];
      t[i] = 0;
    }
    return t;
  }
  function S(t) {
    var e = getComputedStyle(t);
    if (!e) {
      i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1");
    }
    return e;
  }
  var n = false;
  var C;
  function x() {
    if (n) {
      return;
    }
    n = true;
    var t = document.createElement("div");
    t.style.width = "200px";
    t.style.padding = "1px 2px 3px 4px";
    t.style.borderStyle = "solid";
    t.style.borderWidth = "1px 2px 3px 4px";
    t.style.boxSizing = "border-box";
    var e = document.body || document.documentElement;
    e.appendChild(t);
    var i = S(t);
    C = Math.round(m(i.width)) == 200;
    s.isBoxSizeOuter = C;
    e.removeChild(t);
  }
  function s(t) {
    x();
    if (typeof t == "string") {
      t = document.querySelector(t);
    }
    if (!t || _typeof(t) != "object" || !t.nodeType) {
      return;
    }
    var e = S(t);
    if (e.display == "none") {
      return E();
    }
    var i = {};
    i.width = t.offsetWidth;
    i.height = t.offsetHeight;
    var n = i.isBorderBox = e.boxSizing == "border-box";
    for (var s = 0; s < b; s++) {
      var r = y[s];
      var o = e[r];
      var a = parseFloat(o);
      i[r] = !isNaN(a) ? a : 0;
    }
    var l = i.paddingLeft + i.paddingRight;
    var h = i.paddingTop + i.paddingBottom;
    var c = i.marginLeft + i.marginRight;
    var u = i.marginTop + i.marginBottom;
    var d = i.borderLeftWidth + i.borderRightWidth;
    var f = i.borderTopWidth + i.borderBottomWidth;
    var p = n && C;
    var v = m(e.width);
    if (v !== false) {
      i.width = v + (p ? 0 : l + d);
    }
    var g = m(e.height);
    if (g !== false) {
      i.height = g + (p ? 0 : h + f);
    }
    i.innerWidth = i.width - (l + d);
    i.innerHeight = i.height - (h + f);
    i.outerWidth = i.width + c;
    i.outerHeight = i.height + u;
    return i;
  }
  return s;
});
(function (t, e) {
  "use strict";

  if (typeof define == "function" && define.amd) {
    define("desandro-matches-selector/matches-selector", e);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = e();
  } else {
    t.matchesSelector = e();
  }
})(window, function t() {
  "use strict";

  var n = function () {
    var t = window.Element.prototype;
    if (t.matches) {
      return "matches";
    }
    if (t.matchesSelector) {
      return "matchesSelector";
    }
    var e = ["webkit", "moz", "ms", "o"];
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      var s = n + "MatchesSelector";
      if (t[s]) {
        return s;
      }
    }
  }();
  return function t(e, i) {
    return e[n](i);
  };
});
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
      return i(e, t);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = i(e, require("desandro-matches-selector"));
  } else {
    e.fizzyUIUtils = i(e, e.matchesSelector);
  }
})(window, function t(h, r) {
  var c = {};
  c.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }
    return t;
  };
  c.modulo = function (t, e) {
    return (t % e + e) % e;
  };
  var i = Array.prototype.slice;
  c.makeArray = function (t) {
    if (Array.isArray(t)) {
      return t;
    }
    if (t === null || t === undefined) {
      return [];
    }
    var e = _typeof(t) == "object" && typeof t.length == "number";
    if (e) {
      return i.call(t);
    }
    return [t];
  };
  c.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    if (i != -1) {
      t.splice(i, 1);
    }
  };
  c.getParent = function (t, e) {
    while (t.parentNode && t != document.body) {
      t = t.parentNode;
      if (r(t, e)) {
        return t;
      }
    }
  };
  c.getQueryElement = function (t) {
    if (typeof t == "string") {
      return document.querySelector(t);
    }
    return t;
  };
  c.handleEvent = function (t) {
    var e = "on" + t.type;
    if (this[e]) {
      this[e](t);
    }
  };
  c.filterFindElements = function (t, n) {
    t = c.makeArray(t);
    var s = [];
    t.forEach(function (t) {
      if (!(t instanceof HTMLElement)) {
        return;
      }
      if (!n) {
        s.push(t);
        return;
      }
      if (r(t, n)) {
        s.push(t);
      }
      var e = t.querySelectorAll(n);
      for (var i = 0; i < e.length; i++) {
        s.push(e[i]);
      }
    });
    return s;
  };
  c.debounceMethod = function (t, e, n) {
    n = n || 100;
    var s = t.prototype[e];
    var r = e + "Timeout";
    t.prototype[e] = function () {
      var t = this[r];
      clearTimeout(t);
      var e = arguments;
      var i = this;
      this[r] = setTimeout(function () {
        s.apply(i, e);
        delete i[r];
      }, n);
    };
  };
  c.docReady = function (t) {
    var e = document.readyState;
    if (e == "complete" || e == "interactive") {
      setTimeout(t);
    } else {
      document.addEventListener("DOMContentLoaded", t);
    }
  };
  c.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };
  var u = h.console;
  c.htmlInit = function (a, l) {
    c.docReady(function () {
      var t = c.toDashed(l);
      var s = "data-" + t;
      var e = document.querySelectorAll("[" + s + "]");
      var i = document.querySelectorAll(".js-" + t);
      var n = c.makeArray(e).concat(c.makeArray(i));
      var r = s + "-options";
      var o = h.jQuery;
      n.forEach(function (e) {
        var t = e.getAttribute(s) || e.getAttribute(r);
        var i;
        try {
          i = t && JSON.parse(t);
        } catch (t) {
          if (u) {
            u.error("Error parsing " + s + " on " + e.className + ": " + t);
          }
          return;
        }
        var n = new a(e, i);
        if (o) {
          o.data(e, l, n);
        }
      });
    });
  };
  return c;
});
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/cell", ["get-size/get-size"], function (t) {
      return i(e, t);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = i(e, require("get-size"));
  } else {
    e.Flickity = e.Flickity || {};
    e.Flickity.Cell = i(e, e.getSize);
  }
})(window, function t(e, i) {
  function n(t, e) {
    this.element = t;
    this.parent = e;
    this.create();
  }
  var s = n.prototype;
  s.create = function () {
    this.element.style.position = "absolute";
    this.element.setAttribute("aria-hidden", "true");
    this.x = 0;
    this.shift = 0;
    this.element.style[this.parent.originSide] = 0;
  };
  s.destroy = function () {
    this.unselect();
    this.element.style.position = "";
    var t = this.parent.originSide;
    this.element.style[t] = "";
    this.element.style.transform = "";
    this.element.removeAttribute("aria-hidden");
  };
  s.getSize = function () {
    this.size = i(this.element);
  };
  s.setPosition = function (t) {
    this.x = t;
    this.updateTarget();
    this.renderPosition(t);
  };
  s.updateTarget = s.setDefaultTarget = function () {
    var t = this.parent.originSide == "left" ? "marginLeft" : "marginRight";
    this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
  };
  s.renderPosition = function (t) {
    var e = this.parent.originSide === "left" ? 1 : -1;
    var i = this.parent.options.percentPosition ? t * e * (this.parent.size.innerWidth / this.size.width) : t * e;
    this.element.style.transform = "translateX(" + this.parent.getPositionValue(i) + ")";
  };
  s.select = function () {
    this.element.classList.add("is-selected");
    this.element.removeAttribute("aria-hidden");
  };
  s.unselect = function () {
    this.element.classList.remove("is-selected");
    this.element.setAttribute("aria-hidden", "true");
  };
  s.wrapShift = function (t) {
    this.shift = t;
    this.renderPosition(this.x + this.parent.slideableWidth * t);
  };
  s.remove = function () {
    this.element.parentNode.removeChild(this.element);
  };
  return n;
});
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/slide", e);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = e();
  } else {
    t.Flickity = t.Flickity || {};
    t.Flickity.Slide = e();
  }
})(window, function t() {
  "use strict";

  function e(t) {
    this.parent = t;
    this.isOriginLeft = t.originSide == "left";
    this.cells = [];
    this.outerWidth = 0;
    this.height = 0;
  }
  var i = e.prototype;
  i.addCell = function (t) {
    this.cells.push(t);
    this.outerWidth += t.size.outerWidth;
    this.height = Math.max(t.size.outerHeight, this.height);
    if (this.cells.length == 1) {
      this.x = t.x;
      var e = this.isOriginLeft ? "marginLeft" : "marginRight";
      this.firstMargin = t.size[e];
    }
  };
  i.updateTarget = function () {
    var t = this.isOriginLeft ? "marginRight" : "marginLeft";
    var e = this.getLastCell();
    var i = e ? e.size[t] : 0;
    var n = this.outerWidth - (this.firstMargin + i);
    this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
  };
  i.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };
  i.select = function () {
    this.cells.forEach(function (t) {
      t.select();
    });
  };
  i.unselect = function () {
    this.cells.forEach(function (t) {
      t.unselect();
    });
  };
  i.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  };
  return e;
});
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
      return i(e, t);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = i(e, require("fizzy-ui-utils"));
  } else {
    e.Flickity = e.Flickity || {};
    e.Flickity.animatePrototype = i(e, e.fizzyUIUtils);
  }
})(window, function t(e, i) {
  var n = {};
  n.startAnimation = function () {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;
    this.restingFrames = 0;
    this.animate();
  };
  n.animate = function () {
    this.applyDragForce();
    this.applySelectedAttraction();
    var t = this.x;
    this.integratePhysics();
    this.positionSlider();
    this.settle(t);
    if (this.isAnimating) {
      var e = this;
      requestAnimationFrame(function t() {
        e.animate();
      });
    }
  };
  n.positionSlider = function () {
    var t = this.x;
    if (this.options.wrapAround && this.cells.length > 1) {
      t = i.modulo(t, this.slideableWidth);
      t -= this.slideableWidth;
      this.shiftWrapCells(t);
    }
    this.setTranslateX(t, this.isAnimating);
    this.dispatchScrollEvent();
  };
  n.setTranslateX = function (t, e) {
    t += this.cursorPosition;
    t = this.options.rightToLeft ? -t : t;
    var i = this.getPositionValue(t);
    this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
  };
  n.dispatchScrollEvent = function () {
    var t = this.slides[0];
    if (!t) {
      return;
    }
    var e = -this.x - t.target;
    var i = e / this.slidesWidth;
    this.dispatchEvent("scroll", null, [i, e]);
  };
  n.positionSliderAtSelected = function () {
    if (!this.cells.length) {
      return;
    }
    this.x = -this.selectedSlide.target;
    this.velocity = 0;
    this.positionSlider();
  };
  n.getPositionValue = function (t) {
    if (this.options.percentPosition) {
      return Math.round(t / this.size.innerWidth * 1e4) * .01 + "%";
    } else {
      return Math.round(t) + "px";
    }
  };
  n.settle = function (t) {
    var e = !this.isPointerDown && Math.round(this.x * 100) == Math.round(t * 100);
    if (e) {
      this.restingFrames++;
    }
    if (this.restingFrames > 2) {
      this.isAnimating = false;
      delete this.isFreeScrolling;
      this.positionSlider();
      this.dispatchEvent("settle", null, [this.selectedIndex]);
    }
  };
  n.shiftWrapCells = function (t) {
    var e = this.cursorPosition + t;
    this._shiftCells(this.beforeShiftCells, e, -1);
    var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
    this._shiftCells(this.afterShiftCells, i, 1);
  };
  n._shiftCells = function (t, e, i) {
    for (var n = 0; n < t.length; n++) {
      var s = t[n];
      var r = e > 0 ? i : 0;
      s.wrapShift(r);
      e -= s.size.outerWidth;
    }
  };
  n._unshiftCells = function (t) {
    if (!t || !t.length) {
      return;
    }
    for (var e = 0; e < t.length; e++) {
      t[e].wrapShift(0);
    }
  };
  n.integratePhysics = function () {
    this.x += this.velocity;
    this.velocity *= this.getFrictionFactor();
  };
  n.applyForce = function (t) {
    this.velocity += t;
  };
  n.getFrictionFactor = function () {
    return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
  };
  n.getRestingPosition = function () {
    return this.x + this.velocity / (1 - this.getFrictionFactor());
  };
  n.applyDragForce = function () {
    if (!this.isDraggable || !this.isPointerDown) {
      return;
    }
    var t = this.dragX - this.x;
    var e = t - this.velocity;
    this.applyForce(e);
  };
  n.applySelectedAttraction = function () {
    var t = this.isDraggable && this.isPointerDown;
    if (t || this.isFreeScrolling || !this.slides.length) {
      return;
    }
    var e = this.selectedSlide.target * -1 - this.x;
    var i = e * this.options.selectedAttraction;
    this.applyForce(i);
  };
  return n;
});
(function (o, a) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (t, e, i, n, s, r) {
      return a(o, t, e, i, n, s, r);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = a(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
  } else {
    var t = o.Flickity;
    o.Flickity = a(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype);
  }
})(window, function t(n, e, i, a, s, o, r) {
  var l = n.jQuery;
  var h = n.getComputedStyle;
  var c = n.console;
  function u(t, e) {
    t = a.makeArray(t);
    while (t.length) {
      e.appendChild(t.shift());
    }
  }
  var d = 0;
  var f = {};
  function p(t, e) {
    var i = a.getQueryElement(t);
    if (!i) {
      if (c) {
        c.error("Bad element for Flickity: " + (i || t));
      }
      return;
    }
    this.element = i;
    if (this.element.flickityGUID) {
      var n = f[this.element.flickityGUID];
      if (n) n.option(e);
      return n;
    }
    if (l) {
      this.$element = l(this.element);
    }
    this.options = a.extend({}, this.constructor.defaults);
    this.option(e);
    this._create();
  }
  p.defaults = {
    accessibility: true,
    cellAlign: "center",
    freeScrollFriction: .075,
    friction: .28,
    namespaceJQueryEvents: true,
    percentPosition: true,
    resize: true,
    selectedAttraction: .025,
    setGallerySize: true
  };
  p.createMethods = [];
  var v = p.prototype;
  a.extend(v, e.prototype);
  v._create = function () {
    var t = this.guid = ++d;
    this.element.flickityGUID = t;
    f[t] = this;
    this.selectedIndex = 0;
    this.restingFrames = 0;
    this.x = 0;
    this.velocity = 0;
    this.originSide = this.options.rightToLeft ? "right" : "left";
    this.viewport = document.createElement("div");
    this.viewport.className = "flickity-viewport";
    this._createSlider();
    if (this.options.resize || this.options.watchCSS) {
      n.addEventListener("resize", this);
    }
    for (var e in this.options.on) {
      var i = this.options.on[e];
      this.on(e, i);
    }
    p.createMethods.forEach(function (t) {
      this[t]();
    }, this);
    if (this.options.watchCSS) {
      this.watchCSS();
    } else {
      this.activate();
    }
  };
  v.option = function (t) {
    a.extend(this.options, t);
  };
  v.activate = function () {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.element.classList.add("flickity-enabled");
    if (this.options.rightToLeft) {
      this.element.classList.add("flickity-rtl");
    }
    this.getSize();
    var t = this._filterFindCellElements(this.element.children);
    u(t, this.slider);
    this.viewport.appendChild(this.slider);
    this.element.appendChild(this.viewport);
    this.reloadCells();
    if (this.options.accessibility) {
      this.element.tabIndex = 0;
      this.element.addEventListener("keydown", this);
    }
    this.emitEvent("activate");
    this.selectInitialIndex();
    this.isInitActivated = true;
    this.dispatchEvent("ready");
  };
  v._createSlider = function () {
    var t = document.createElement("div");
    t.className = "flickity-slider";
    t.style[this.originSide] = 0;
    this.slider = t;
  };
  v._filterFindCellElements = function (t) {
    return a.filterFindElements(t, this.options.cellSelector);
  };
  v.reloadCells = function () {
    this.cells = this._makeCells(this.slider.children);
    this.positionCells();
    this._getWrapShiftCells();
    this.setGallerySize();
  };
  v._makeCells = function (t) {
    var e = this._filterFindCellElements(t);
    var i = e.map(function (t) {
      return new s(t, this);
    }, this);
    return i;
  };
  v.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };
  v.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  };
  v.positionCells = function () {
    this._sizeCells(this.cells);
    this._positionCells(0);
  };
  v._positionCells = function (t) {
    t = t || 0;
    this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
    var e = 0;
    if (t > 0) {
      var i = this.cells[t - 1];
      e = i.x + i.size.outerWidth;
    }
    var n = this.cells.length;
    for (var s = t; s < n; s++) {
      var r = this.cells[s];
      r.setPosition(e);
      e += r.size.outerWidth;
      this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight);
    }
    this.slideableWidth = e;
    this.updateSlides();
    this._containSlides();
    this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0;
  };
  v._sizeCells = function (t) {
    t.forEach(function (t) {
      t.getSize();
    });
  };
  v.updateSlides = function () {
    this.slides = [];
    if (!this.cells.length) {
      return;
    }
    var n = new o(this);
    this.slides.push(n);
    var t = this.originSide == "left";
    var s = t ? "marginRight" : "marginLeft";
    var r = this._getCanCellFit();
    this.cells.forEach(function (t, e) {
      if (!n.cells.length) {
        n.addCell(t);
        return;
      }
      var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
      if (r.call(this, e, i)) {
        n.addCell(t);
      } else {
        n.updateTarget();
        n = new o(this);
        this.slides.push(n);
        n.addCell(t);
      }
    }, this);
    n.updateTarget();
    this.updateSelectedSlide();
  };
  v._getCanCellFit = function () {
    var t = this.options.groupCells;
    if (!t) {
      return function () {
        return false;
      };
    } else if (typeof t == "number") {
      var e = parseInt(t, 10);
      return function (t) {
        return t % e !== 0;
      };
    }
    var i = typeof t == "string" && t.match(/^(\d+)%$/);
    var n = i ? parseInt(i[1], 10) / 100 : 1;
    return function (t, e) {
      return e <= (this.size.innerWidth + 1) * n;
    };
  };
  v._init = v.reposition = function () {
    this.positionCells();
    this.positionSliderAtSelected();
  };
  v.getSize = function () {
    this.size = i(this.element);
    this.setCellAlign();
    this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };
  var g = {
    center: {
      left: .5,
      right: .5
    },
    left: {
      left: 0,
      right: 1
    },
    right: {
      right: 0,
      left: 1
    }
  };
  v.setCellAlign = function () {
    var t = g[this.options.cellAlign];
    this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
  };
  v.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
      this.viewport.style.height = t + "px";
    }
  };
  v._getWrapShiftCells = function () {
    if (!this.options.wrapAround) {
      return;
    }
    this._unshiftCells(this.beforeShiftCells);
    this._unshiftCells(this.afterShiftCells);
    var t = this.cursorPosition;
    var e = this.cells.length - 1;
    this.beforeShiftCells = this._getGapCells(t, e, -1);
    t = this.size.innerWidth - this.cursorPosition;
    this.afterShiftCells = this._getGapCells(t, 0, 1);
  };
  v._getGapCells = function (t, e, i) {
    var n = [];
    while (t > 0) {
      var s = this.cells[e];
      if (!s) {
        break;
      }
      n.push(s);
      e += i;
      t -= s.size.outerWidth;
    }
    return n;
  };
  v._containSlides = function () {
    if (!this.options.contain || this.options.wrapAround || !this.cells.length) {
      return;
    }
    var t = this.options.rightToLeft;
    var e = t ? "marginRight" : "marginLeft";
    var i = t ? "marginLeft" : "marginRight";
    var n = this.slideableWidth - this.getLastCell().size[i];
    var s = n < this.size.innerWidth;
    var r = this.cursorPosition + this.cells[0].size[e];
    var o = n - this.size.innerWidth * (1 - this.cellAlign);
    this.slides.forEach(function (t) {
      if (s) {
        t.target = n * this.cellAlign;
      } else {
        t.target = Math.max(t.target, r);
        t.target = Math.min(t.target, o);
      }
    }, this);
  };
  v.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;
    this.emitEvent(t, n);
    if (l && this.$element) {
      t += this.options.namespaceJQueryEvents ? ".flickity" : "";
      var s = t;
      if (e) {
        var r = new l.Event(e);
        r.type = t;
        s = r;
      }
      this.$element.trigger(s, i);
    }
  };
  v.select = function (t, e, i) {
    if (!this.isActive) {
      return;
    }
    t = parseInt(t, 10);
    this._wrapSelect(t);
    if (this.options.wrapAround || e) {
      t = a.modulo(t, this.slides.length);
    }
    if (!this.slides[t]) {
      return;
    }
    var n = this.selectedIndex;
    this.selectedIndex = t;
    this.updateSelectedSlide();
    if (i) {
      this.positionSliderAtSelected();
    } else {
      this.startAnimation();
    }
    if (this.options.adaptiveHeight) {
      this.setGallerySize();
    }
    this.dispatchEvent("select", null, [t]);
    if (t != n) {
      this.dispatchEvent("change", null, [t]);
    }
    this.dispatchEvent("cellSelect");
  };
  v._wrapSelect = function (t) {
    var e = this.slides.length;
    var i = this.options.wrapAround && e > 1;
    if (!i) {
      return t;
    }
    var n = a.modulo(t, e);
    var s = Math.abs(n - this.selectedIndex);
    var r = Math.abs(n + e - this.selectedIndex);
    var o = Math.abs(n - e - this.selectedIndex);
    if (!this.isDragSelect && r < s) {
      t += e;
    } else if (!this.isDragSelect && o < s) {
      t -= e;
    }
    if (t < 0) {
      this.x -= this.slideableWidth;
    } else if (t >= e) {
      this.x += this.slideableWidth;
    }
  };
  v.previous = function (t, e) {
    this.select(this.selectedIndex - 1, t, e);
  };
  v.next = function (t, e) {
    this.select(this.selectedIndex + 1, t, e);
  };
  v.updateSelectedSlide = function () {
    var t = this.slides[this.selectedIndex];
    if (!t) {
      return;
    }
    this.unselectSelectedSlide();
    this.selectedSlide = t;
    t.select();
    this.selectedCells = t.cells;
    this.selectedElements = t.getCellElements();
    this.selectedCell = t.cells[0];
    this.selectedElement = this.selectedElements[0];
  };
  v.unselectSelectedSlide = function () {
    if (this.selectedSlide) {
      this.selectedSlide.unselect();
    }
  };
  v.selectInitialIndex = function () {
    var t = this.options.initialIndex;
    if (this.isInitActivated) {
      this.select(this.selectedIndex, false, true);
      return;
    }
    if (t && typeof t == "string") {
      var e = this.queryCell(t);
      if (e) {
        this.selectCell(t, false, true);
        return;
      }
    }
    var i = 0;
    if (t && this.slides[t]) {
      i = t;
    }
    this.select(i, false, true);
  };
  v.selectCell = function (t, e, i) {
    var n = this.queryCell(t);
    if (!n) {
      return;
    }
    var s = this.getCellSlideIndex(n);
    this.select(s, e, i);
  };
  v.getCellSlideIndex = function (t) {
    for (var e = 0; e < this.slides.length; e++) {
      var i = this.slides[e];
      var n = i.cells.indexOf(t);
      if (n != -1) {
        return e;
      }
    }
  };
  v.getCell = function (t) {
    for (var e = 0; e < this.cells.length; e++) {
      var i = this.cells[e];
      if (i.element == t) {
        return i;
      }
    }
  };
  v.getCells = function (t) {
    t = a.makeArray(t);
    var i = [];
    t.forEach(function (t) {
      var e = this.getCell(t);
      if (e) {
        i.push(e);
      }
    }, this);
    return i;
  };
  v.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  };
  v.getParentCell = function (t) {
    var e = this.getCell(t);
    if (e) {
      return e;
    }
    t = a.getParent(t, ".flickity-slider > *");
    return this.getCell(t);
  };
  v.getAdjacentCellElements = function (t, e) {
    if (!t) {
      return this.selectedSlide.getCellElements();
    }
    e = e === undefined ? this.selectedIndex : e;
    var i = this.slides.length;
    if (1 + t * 2 >= i) {
      return this.getCellElements();
    }
    var n = [];
    for (var s = e - t; s <= e + t; s++) {
      var r = this.options.wrapAround ? a.modulo(s, i) : s;
      var o = this.slides[r];
      if (o) {
        n = n.concat(o.getCellElements());
      }
    }
    return n;
  };
  v.queryCell = function (t) {
    if (typeof t == "number") {
      return this.cells[t];
    }
    if (typeof t == "string") {
      if (t.match(/^[#.]?[\d/]/)) {
        return;
      }
      t = this.element.querySelector(t);
    }
    return this.getCell(t);
  };
  v.uiChange = function () {
    this.emitEvent("uiChange");
  };
  v.childUIPointerDown = function (t) {
    if (t.type != "touchstart") {
      t.preventDefault();
    }
    this.focus();
  };
  v.onresize = function () {
    this.watchCSS();
    this.resize();
  };
  a.debounceMethod(p, "onresize", 150);
  v.resize = function () {
    if (!this.isActive || this.isAnimating || this.isDragging) {
      return;
    }
    this.getSize();
    if (this.options.wrapAround) {
      this.x = a.modulo(this.x, this.slideableWidth);
    }
    this.positionCells();
    this._getWrapShiftCells();
    this.setGallerySize();
    this.emitEvent("resize");
    var t = this.selectedElements && this.selectedElements[0];
    this.selectCell(t, false, true);
  };
  v.watchCSS = function () {
    var t = this.options.watchCSS;
    if (!t) {
      return;
    }
    var e = h(this.element, ":after").content;
    if (e.indexOf("flickity") != -1) {
      this.activate();
    } else {
      this.deactivate();
    }
  };
  v.onkeydown = function (t) {
    var e = document.activeElement && document.activeElement != this.element;
    if (!this.options.accessibility || e) {
      return;
    }
    var i = p.keyboardHandlers[t.keyCode];
    if (i) {
      i.call(this);
    }
  };
  p.keyboardHandlers = {
    37: function _() {
      var t = this.options.rightToLeft ? "next" : "previous";
      this.uiChange();
      this[t]();
    },
    39: function _() {
      var t = this.options.rightToLeft ? "previous" : "next";
      this.uiChange();
      this[t]();
    }
  };
  v.focus = function () {
    var t = n.pageYOffset;
    this.element.focus({
      preventScroll: true
    });
    if (n.pageYOffset != t) {
      n.scrollTo(n.pageXOffset, t);
    }
  };
  v.deactivate = function () {
    if (!this.isActive) {
      return;
    }
    this.element.classList.remove("flickity-enabled");
    this.element.classList.remove("flickity-rtl");
    this.unselectSelectedSlide();
    this.cells.forEach(function (t) {
      t.destroy();
    });
    this.element.removeChild(this.viewport);
    u(this.slider.children, this.element);
    if (this.options.accessibility) {
      this.element.removeAttribute("tabIndex");
      this.element.removeEventListener("keydown", this);
    }
    this.isActive = false;
    this.emitEvent("deactivate");
  };
  v.destroy = function () {
    this.deactivate();
    n.removeEventListener("resize", this);
    this.allOff();
    this.emitEvent("destroy");
    if (l && this.$element) {
      l.removeData(this.element, "flickity");
    }
    delete this.element.flickityGUID;
    delete f[this.guid];
  };
  a.extend(v, r);
  p.data = function (t) {
    t = a.getQueryElement(t);
    var e = t && t.flickityGUID;
    return e && f[e];
  };
  a.htmlInit(p, "flickity");
  if (l && l.bridget) {
    l.bridget("flickity", p);
  }
  p.setJQuery = function (t) {
    l = t;
  };
  p.Cell = s;
  p.Slide = o;
  return p;
});
/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (t) {
      return i(e, t);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = i(e, require("ev-emitter"));
  } else {
    e.Unipointer = i(e, e.EvEmitter);
  }
})(window, function t(s, e) {
  function i() {}
  function n() {}
  var r = n.prototype = Object.create(e.prototype);
  r.bindStartEvent = function (t) {
    this._bindStartEvent(t, true);
  };
  r.unbindStartEvent = function (t) {
    this._bindStartEvent(t, false);
  };
  r._bindStartEvent = function (t, e) {
    e = e === undefined ? true : e;
    var i = e ? "addEventListener" : "removeEventListener";
    var n = "mousedown";
    if ("ontouchstart" in s) {
      n = "touchstart";
    } else if (s.PointerEvent) {
      n = "pointerdown";
    }
    t[i](n, this);
  };
  r.handleEvent = function (t) {
    var e = "on" + t.type;
    if (this[e]) {
      this[e](t);
    }
  };
  r.getTouch = function (t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      if (i.identifier == this.pointerIdentifier) {
        return i;
      }
    }
  };
  r.onmousedown = function (t) {
    var e = t.button;
    if (e && e !== 0 && e !== 1) {
      return;
    }
    this._pointerDown(t, t);
  };
  r.ontouchstart = function (t) {
    this._pointerDown(t, t.changedTouches[0]);
  };
  r.onpointerdown = function (t) {
    this._pointerDown(t, t);
  };
  r._pointerDown = function (t, e) {
    if (t.button || this.isPointerDown) {
      return;
    }
    this.isPointerDown = true;
    this.pointerIdentifier = e.pointerId !== undefined ? e.pointerId : e.identifier;
    this.pointerDown(t, e);
  };
  r.pointerDown = function (t, e) {
    this._bindPostStartEvents(t);
    this.emitEvent("pointerDown", [t, e]);
  };
  var o = {
    mousedown: ["mousemove", "mouseup"],
    touchstart: ["touchmove", "touchend", "touchcancel"],
    pointerdown: ["pointermove", "pointerup", "pointercancel"]
  };
  r._bindPostStartEvents = function (t) {
    if (!t) {
      return;
    }
    var e = o[t.type];
    e.forEach(function (t) {
      s.addEventListener(t, this);
    }, this);
    this._boundPointerEvents = e;
  };
  r._unbindPostStartEvents = function () {
    if (!this._boundPointerEvents) {
      return;
    }
    this._boundPointerEvents.forEach(function (t) {
      s.removeEventListener(t, this);
    }, this);
    delete this._boundPointerEvents;
  };
  r.onmousemove = function (t) {
    this._pointerMove(t, t);
  };
  r.onpointermove = function (t) {
    if (t.pointerId == this.pointerIdentifier) {
      this._pointerMove(t, t);
    }
  };
  r.ontouchmove = function (t) {
    var e = this.getTouch(t.changedTouches);
    if (e) {
      this._pointerMove(t, e);
    }
  };
  r._pointerMove = function (t, e) {
    this.pointerMove(t, e);
  };
  r.pointerMove = function (t, e) {
    this.emitEvent("pointerMove", [t, e]);
  };
  r.onmouseup = function (t) {
    this._pointerUp(t, t);
  };
  r.onpointerup = function (t) {
    if (t.pointerId == this.pointerIdentifier) {
      this._pointerUp(t, t);
    }
  };
  r.ontouchend = function (t) {
    var e = this.getTouch(t.changedTouches);
    if (e) {
      this._pointerUp(t, e);
    }
  };
  r._pointerUp = function (t, e) {
    this._pointerDone();
    this.pointerUp(t, e);
  };
  r.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]);
  };
  r._pointerDone = function () {
    this._pointerReset();
    this._unbindPostStartEvents();
    this.pointerDone();
  };
  r._pointerReset = function () {
    this.isPointerDown = false;
    delete this.pointerIdentifier;
  };
  r.pointerDone = i;
  r.onpointercancel = function (t) {
    if (t.pointerId == this.pointerIdentifier) {
      this._pointerCancel(t, t);
    }
  };
  r.ontouchcancel = function (t) {
    var e = this.getTouch(t.changedTouches);
    if (e) {
      this._pointerCancel(t, e);
    }
  };
  r._pointerCancel = function (t, e) {
    this._pointerDone();
    this.pointerCancel(t, e);
  };
  r.pointerCancel = function (t, e) {
    this.emitEvent("pointerCancel", [t, e]);
  };
  n.getPointerPoint = function (t) {
    return {
      x: t.pageX,
      y: t.pageY
    };
  };
  return n;
});
/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("unidragger/unidragger", ["unipointer/unipointer"], function (t) {
      return i(e, t);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = i(e, require("unipointer"));
  } else {
    e.Unidragger = i(e, e.Unipointer);
  }
})(window, function t(r, e) {
  function i() {}
  var n = i.prototype = Object.create(e.prototype);
  n.bindHandles = function () {
    this._bindHandles(true);
  };
  n.unbindHandles = function () {
    this._bindHandles(false);
  };
  n._bindHandles = function (t) {
    t = t === undefined ? true : t;
    var e = t ? "addEventListener" : "removeEventListener";
    var i = t ? this._touchActionValue : "";
    for (var n = 0; n < this.handles.length; n++) {
      var s = this.handles[n];
      this._bindStartEvent(s, t);
      s[e]("click", this);
      if (r.PointerEvent) {
        s.style.touchAction = i;
      }
    }
  };
  n._touchActionValue = "none";
  n.pointerDown = function (t, e) {
    var i = this.okayPointerDown(t);
    if (!i) {
      return;
    }
    this.pointerDownPointer = {
      pageX: e.pageX,
      pageY: e.pageY
    };
    t.preventDefault();
    this.pointerDownBlur();
    this._bindPostStartEvents(t);
    this.emitEvent("pointerDown", [t, e]);
  };
  var s = {
    TEXTAREA: true,
    INPUT: true,
    SELECT: true,
    OPTION: true
  };
  var o = {
    radio: true,
    checkbox: true,
    button: true,
    submit: true,
    image: true,
    file: true
  };
  n.okayPointerDown = function (t) {
    var e = s[t.target.nodeName];
    var i = o[t.target.type];
    var n = !e || i;
    if (!n) {
      this._pointerReset();
    }
    return n;
  };
  n.pointerDownBlur = function () {
    var t = document.activeElement;
    var e = t && t.blur && t != document.body;
    if (e) {
      t.blur();
    }
  };
  n.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);
    this.emitEvent("pointerMove", [t, e, i]);
    this._dragMove(t, e, i);
  };
  n._dragPointerMove = function (t, e) {
    var i = {
      x: e.pageX - this.pointerDownPointer.pageX,
      y: e.pageY - this.pointerDownPointer.pageY
    };
    if (!this.isDragging && this.hasDragStarted(i)) {
      this._dragStart(t, e);
    }
    return i;
  };
  n.hasDragStarted = function (t) {
    return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
  };
  n.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]);
    this._dragPointerUp(t, e);
  };
  n._dragPointerUp = function (t, e) {
    if (this.isDragging) {
      this._dragEnd(t, e);
    } else {
      this._staticClick(t, e);
    }
  };
  n._dragStart = function (t, e) {
    this.isDragging = true;
    this.isPreventingClicks = true;
    this.dragStart(t, e);
  };
  n.dragStart = function (t, e) {
    this.emitEvent("dragStart", [t, e]);
  };
  n._dragMove = function (t, e, i) {
    if (!this.isDragging) {
      return;
    }
    this.dragMove(t, e, i);
  };
  n.dragMove = function (t, e, i) {
    t.preventDefault();
    this.emitEvent("dragMove", [t, e, i]);
  };
  n._dragEnd = function (t, e) {
    this.isDragging = false;
    setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this));
    this.dragEnd(t, e);
  };
  n.dragEnd = function (t, e) {
    this.emitEvent("dragEnd", [t, e]);
  };
  n.onclick = function (t) {
    if (this.isPreventingClicks) {
      t.preventDefault();
    }
  };
  n._staticClick = function (t, e) {
    if (this.isIgnoringMouseUp && t.type == "mouseup") {
      return;
    }
    this.staticClick(t, e);
    if (t.type != "mouseup") {
      this.isIgnoringMouseUp = true;
      setTimeout(function () {
        delete this.isIgnoringMouseUp;
      }.bind(this), 400);
    }
  };
  n.staticClick = function (t, e) {
    this.emitEvent("staticClick", [t, e]);
  };
  i.getPointerPoint = e.getPointerPoint;
  return i;
});
(function (n, s) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (t, e, i) {
      return s(n, t, e, i);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = s(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils"));
  } else {
    n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils);
  }
})(window, function t(n, e, i, a) {
  a.extend(e.defaults, {
    draggable: ">1",
    dragThreshold: 3
  });
  e.createMethods.push("_createDrag");
  var s = e.prototype;
  a.extend(s, i.prototype);
  s._touchActionValue = "pan-y";
  s._createDrag = function () {
    this.on("activate", this.onActivateDrag);
    this.on("uiChange", this._uiChangeDrag);
    this.on("deactivate", this.onDeactivateDrag);
    this.on("cellChange", this.updateDraggable);
  };
  s.onActivateDrag = function () {
    this.handles = [this.viewport];
    this.bindHandles();
    this.updateDraggable();
  };
  s.onDeactivateDrag = function () {
    this.unbindHandles();
    this.element.classList.remove("is-draggable");
  };
  s.updateDraggable = function () {
    if (this.options.draggable == ">1") {
      this.isDraggable = this.slides.length > 1;
    } else {
      this.isDraggable = this.options.draggable;
    }
    if (this.isDraggable) {
      this.element.classList.add("is-draggable");
    } else {
      this.element.classList.remove("is-draggable");
    }
  };
  s.bindDrag = function () {
    this.options.draggable = true;
    this.updateDraggable();
  };
  s.unbindDrag = function () {
    this.options.draggable = false;
    this.updateDraggable();
  };
  s._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  };
  s.pointerDown = function (t, e) {
    if (!this.isDraggable) {
      this._pointerDownDefault(t, e);
      return;
    }
    var i = this.okayPointerDown(t);
    if (!i) {
      return;
    }
    this._pointerDownPreventDefault(t);
    this.pointerDownFocus(t);
    if (document.activeElement != this.element) {
      this.pointerDownBlur();
    }
    this.dragX = this.x;
    this.viewport.classList.add("is-pointer-down");
    this.pointerDownScroll = o();
    n.addEventListener("scroll", this);
    this._pointerDownDefault(t, e);
  };
  s._pointerDownDefault = function (t, e) {
    this.pointerDownPointer = {
      pageX: e.pageX,
      pageY: e.pageY
    };
    this._bindPostStartEvents(t);
    this.dispatchEvent("pointerDown", t, [e]);
  };
  var r = {
    INPUT: true,
    TEXTAREA: true,
    SELECT: true
  };
  s.pointerDownFocus = function (t) {
    var e = r[t.target.nodeName];
    if (!e) {
      this.focus();
    }
  };
  s._pointerDownPreventDefault = function (t) {
    var e = t.type == "touchstart";
    var i = t.pointerType == "touch";
    var n = r[t.target.nodeName];
    if (!e && !i && !n) {
      t.preventDefault();
    }
  };
  s.hasDragStarted = function (t) {
    return Math.abs(t.x) > this.options.dragThreshold;
  };
  s.pointerUp = function (t, e) {
    delete this.isTouchScrolling;
    this.viewport.classList.remove("is-pointer-down");
    this.dispatchEvent("pointerUp", t, [e]);
    this._dragPointerUp(t, e);
  };
  s.pointerDone = function () {
    n.removeEventListener("scroll", this);
    delete this.pointerDownScroll;
  };
  s.dragStart = function (t, e) {
    if (!this.isDraggable) {
      return;
    }
    this.dragStartPosition = this.x;
    this.startAnimation();
    n.removeEventListener("scroll", this);
    this.dispatchEvent("dragStart", t, [e]);
  };
  s.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);
    this.dispatchEvent("pointerMove", t, [e, i]);
    this._dragMove(t, e, i);
  };
  s.dragMove = function (t, e, i) {
    if (!this.isDraggable) {
      return;
    }
    t.preventDefault();
    this.previousDragX = this.dragX;
    var n = this.options.rightToLeft ? -1 : 1;
    if (this.options.wrapAround) {
      i.x %= this.slideableWidth;
    }
    var s = this.dragStartPosition + i.x * n;
    if (!this.options.wrapAround && this.slides.length) {
      var r = Math.max(-this.slides[0].target, this.dragStartPosition);
      s = s > r ? (s + r) * .5 : s;
      var o = Math.min(-this.getLastSlide().target, this.dragStartPosition);
      s = s < o ? (s + o) * .5 : s;
    }
    this.dragX = s;
    this.dragMoveTime = new Date();
    this.dispatchEvent("dragMove", t, [e, i]);
  };
  s.dragEnd = function (t, e) {
    if (!this.isDraggable) {
      return;
    }
    if (this.options.freeScroll) {
      this.isFreeScrolling = true;
    }
    var i = this.dragEndRestingSelect();
    if (this.options.freeScroll && !this.options.wrapAround) {
      var n = this.getRestingPosition();
      this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
    } else if (!this.options.freeScroll && i == this.selectedIndex) {
      i += this.dragEndBoostSelect();
    }
    delete this.previousDragX;
    this.isDragSelect = this.options.wrapAround;
    this.select(i);
    delete this.isDragSelect;
    this.dispatchEvent("dragEnd", t, [e]);
  };
  s.dragEndRestingSelect = function () {
    var t = this.getRestingPosition();
    var e = Math.abs(this.getSlideDistance(-t, this.selectedIndex));
    var i = this._getClosestResting(t, e, 1);
    var n = this._getClosestResting(t, e, -1);
    var s = i.distance < n.distance ? i.index : n.index;
    return s;
  };
  s._getClosestResting = function (t, e, i) {
    var n = this.selectedIndex;
    var s = Infinity;
    var r = this.options.contain && !this.options.wrapAround ? function (t, e) {
      return t <= e;
    } : function (t, e) {
      return t < e;
    };
    while (r(e, s)) {
      n += i;
      s = e;
      e = this.getSlideDistance(-t, n);
      if (e === null) {
        break;
      }
      e = Math.abs(e);
    }
    return {
      distance: s,
      index: n - i
    };
  };
  s.getSlideDistance = function (t, e) {
    var i = this.slides.length;
    var n = this.options.wrapAround && i > 1;
    var s = n ? a.modulo(e, i) : e;
    var r = this.slides[s];
    if (!r) {
      return null;
    }
    var o = n ? this.slideableWidth * Math.floor(e / i) : 0;
    return t - (r.target + o);
  };
  s.dragEndBoostSelect = function () {
    if (this.previousDragX === undefined || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) {
      return 0;
    }
    var t = this.getSlideDistance(-this.dragX, this.selectedIndex);
    var e = this.previousDragX - this.dragX;
    if (t > 0 && e > 0) {
      return 1;
    } else if (t < 0 && e < 0) {
      return -1;
    }
    return 0;
  };
  s.staticClick = function (t, e) {
    var i = this.getParentCell(t.target);
    var n = i && i.element;
    var s = i && this.cells.indexOf(i);
    this.dispatchEvent("staticClick", t, [e, n, s]);
  };
  s.onscroll = function () {
    var t = o();
    var e = this.pointerDownScroll.x - t.x;
    var i = this.pointerDownScroll.y - t.y;
    if (Math.abs(e) > 3 || Math.abs(i) > 3) {
      this._pointerDone();
    }
  };
  function o() {
    return {
      x: n.pageXOffset,
      y: n.pageYOffset
    };
  }
  return e;
});
(function (n, s) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
      return s(n, t, e, i);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils"));
  } else {
    s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  }
})(window, function t(e, i, n, s) {
  "use strict";

  var r = "http://www.w3.org/2000/svg";
  function o(t, e) {
    this.direction = t;
    this.parent = e;
    this._create();
  }
  o.prototype = Object.create(n.prototype);
  o.prototype._create = function () {
    this.isEnabled = true;
    this.isPrevious = this.direction == -1;
    var t = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == t;
    var e = this.element = document.createElement("button");
    e.className = "flickity-button flickity-prev-next-button";
    e.className += this.isPrevious ? " previous" : " next";
    e.setAttribute("type", "button");
    this.disable();
    e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
    var i = this.createSVG();
    e.appendChild(i);
    this.parent.on("select", this.update.bind(this));
    this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  };
  o.prototype.activate = function () {
    this.bindStartEvent(this.element);
    this.element.addEventListener("click", this);
    this.parent.element.appendChild(this.element);
  };
  o.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element);
    this.unbindStartEvent(this.element);
    this.element.removeEventListener("click", this);
  };
  o.prototype.createSVG = function () {
    var t = document.createElementNS(r, "svg");
    t.setAttribute("class", "flickity-button-icon");
    t.setAttribute("viewBox", "0 0 100 100");
    var e = document.createElementNS(r, "path");
    var i = a(this.parent.options.arrowShape);
    e.setAttribute("d", i);
    e.setAttribute("class", "arrow");
    if (!this.isLeft) {
      e.setAttribute("transform", "translate(100, 100) rotate(180) ");
    }
    t.appendChild(e);
    return t;
  };
  function a(t) {
    if (typeof t == "string") {
      return t;
    }
    return "M " + t.x0 + ",50" + " L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50 " + " L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
  }
  o.prototype.handleEvent = s.handleEvent;
  o.prototype.onclick = function () {
    if (!this.isEnabled) {
      return;
    }
    this.parent.uiChange();
    var t = this.isPrevious ? "previous" : "next";
    this.parent[t]();
  };
  o.prototype.enable = function () {
    if (this.isEnabled) {
      return;
    }
    this.element.disabled = false;
    this.isEnabled = true;
  };
  o.prototype.disable = function () {
    if (!this.isEnabled) {
      return;
    }
    this.element.disabled = true;
    this.isEnabled = false;
  };
  o.prototype.update = function () {
    var t = this.parent.slides;
    if (this.parent.options.wrapAround && t.length > 1) {
      this.enable();
      return;
    }
    var e = t.length ? t.length - 1 : 0;
    var i = this.isPrevious ? 0 : e;
    var n = this.parent.selectedIndex == i ? "disable" : "enable";
    this[n]();
  };
  o.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  };
  s.extend(i.defaults, {
    prevNextButtons: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 70,
      y2: 40,
      x3: 30
    }
  });
  i.createMethods.push("_createPrevNextButtons");
  var l = i.prototype;
  l._createPrevNextButtons = function () {
    if (!this.options.prevNextButtons) {
      return;
    }
    this.prevButton = new o(-1, this);
    this.nextButton = new o(1, this);
    this.on("activate", this.activatePrevNextButtons);
  };
  l.activatePrevNextButtons = function () {
    this.prevButton.activate();
    this.nextButton.activate();
    this.on("deactivate", this.deactivatePrevNextButtons);
  };
  l.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate();
    this.nextButton.deactivate();
    this.off("deactivate", this.deactivatePrevNextButtons);
  };
  i.PrevNextButton = o;
  return i;
});
(function (n, s) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
      return s(n, t, e, i);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils"));
  } else {
    s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  }
})(window, function t(e, i, n, s) {
  function r(t) {
    this.parent = t;
    this._create();
  }
  r.prototype = Object.create(n.prototype);
  r.prototype._create = function () {
    this.holder = document.createElement("ol");
    this.holder.className = "flickity-page-dots";
    this.dots = [];
    this.handleClick = this.onClick.bind(this);
    this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  };
  r.prototype.activate = function () {
    this.setDots();
    this.holder.addEventListener("click", this.handleClick);
    this.bindStartEvent(this.holder);
    this.parent.element.appendChild(this.holder);
  };
  r.prototype.deactivate = function () {
    this.holder.removeEventListener("click", this.handleClick);
    this.unbindStartEvent(this.holder);
    this.parent.element.removeChild(this.holder);
  };
  r.prototype.setDots = function () {
    var t = this.parent.slides.length - this.dots.length;
    if (t > 0) {
      this.addDots(t);
    } else if (t < 0) {
      this.removeDots(-t);
    }
  };
  r.prototype.addDots = function (t) {
    var e = document.createDocumentFragment();
    var i = [];
    var n = this.dots.length;
    var s = n + t;
    for (var r = n; r < s; r++) {
      var o = document.createElement("li");
      o.className = "dot";
      o.setAttribute("aria-label", "Page dot " + (r + 1));
      e.appendChild(o);
      i.push(o);
    }
    this.holder.appendChild(e);
    this.dots = this.dots.concat(i);
  };
  r.prototype.removeDots = function (t) {
    var e = this.dots.splice(this.dots.length - t, t);
    e.forEach(function (t) {
      this.holder.removeChild(t);
    }, this);
  };
  r.prototype.updateSelected = function () {
    if (this.selectedDot) {
      this.selectedDot.className = "dot";
      this.selectedDot.removeAttribute("aria-current");
    }
    if (!this.dots.length) {
      return;
    }
    this.selectedDot = this.dots[this.parent.selectedIndex];
    this.selectedDot.className = "dot is-selected";
    this.selectedDot.setAttribute("aria-current", "step");
  };
  r.prototype.onTap = r.prototype.onClick = function (t) {
    var e = t.target;
    if (e.nodeName != "LI") {
      return;
    }
    this.parent.uiChange();
    var i = this.dots.indexOf(e);
    this.parent.select(i);
  };
  r.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  };
  i.PageDots = r;
  s.extend(i.defaults, {
    pageDots: true
  });
  i.createMethods.push("_createPageDots");
  var o = i.prototype;
  o._createPageDots = function () {
    if (!this.options.pageDots) {
      return;
    }
    this.pageDots = new r(this);
    this.on("activate", this.activatePageDots);
    this.on("select", this.updateSelectedPageDots);
    this.on("cellChange", this.updatePageDots);
    this.on("resize", this.updatePageDots);
    this.on("deactivate", this.deactivatePageDots);
  };
  o.activatePageDots = function () {
    this.pageDots.activate();
  };
  o.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  };
  o.updatePageDots = function () {
    this.pageDots.setDots();
  };
  o.deactivatePageDots = function () {
    this.pageDots.deactivate();
  };
  i.PageDots = r;
  return i;
});
(function (t, n) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, e, i) {
      return n(t, e, i);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity"));
  } else {
    n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  }
})(window, function t(e, i, n) {
  function s(t) {
    this.parent = t;
    this.state = "stopped";
    this.onVisibilityChange = this.visibilityChange.bind(this);
    this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }
  s.prototype = Object.create(e.prototype);
  s.prototype.play = function () {
    if (this.state == "playing") {
      return;
    }
    var t = document.hidden;
    if (t) {
      document.addEventListener("visibilitychange", this.onVisibilityPlay);
      return;
    }
    this.state = "playing";
    document.addEventListener("visibilitychange", this.onVisibilityChange);
    this.tick();
  };
  s.prototype.tick = function () {
    if (this.state != "playing") {
      return;
    }
    var t = this.parent.options.autoPlay;
    t = typeof t == "number" ? t : 3e3;
    var e = this;
    this.clear();
    this.timeout = setTimeout(function () {
      e.parent.next(true);
      e.tick();
    }, t);
  };
  s.prototype.stop = function () {
    this.state = "stopped";
    this.clear();
    document.removeEventListener("visibilitychange", this.onVisibilityChange);
  };
  s.prototype.clear = function () {
    clearTimeout(this.timeout);
  };
  s.prototype.pause = function () {
    if (this.state == "playing") {
      this.state = "paused";
      this.clear();
    }
  };
  s.prototype.unpause = function () {
    if (this.state == "paused") {
      this.play();
    }
  };
  s.prototype.visibilityChange = function () {
    var t = document.hidden;
    this[t ? "pause" : "unpause"]();
  };
  s.prototype.visibilityPlay = function () {
    this.play();
    document.removeEventListener("visibilitychange", this.onVisibilityPlay);
  };
  i.extend(n.defaults, {
    pauseAutoPlayOnHover: true
  });
  n.createMethods.push("_createPlayer");
  var r = n.prototype;
  r._createPlayer = function () {
    this.player = new s(this);
    this.on("activate", this.activatePlayer);
    this.on("uiChange", this.stopPlayer);
    this.on("pointerDown", this.stopPlayer);
    this.on("deactivate", this.deactivatePlayer);
  };
  r.activatePlayer = function () {
    if (!this.options.autoPlay) {
      return;
    }
    this.player.play();
    this.element.addEventListener("mouseenter", this);
  };
  r.playPlayer = function () {
    this.player.play();
  };
  r.stopPlayer = function () {
    this.player.stop();
  };
  r.pausePlayer = function () {
    this.player.pause();
  };
  r.unpausePlayer = function () {
    this.player.unpause();
  };
  r.deactivatePlayer = function () {
    this.player.stop();
    this.element.removeEventListener("mouseenter", this);
  };
  r.onmouseenter = function () {
    if (!this.options.pauseAutoPlayOnHover) {
      return;
    }
    this.player.pause();
    this.element.addEventListener("mouseleave", this);
  };
  r.onmouseleave = function () {
    this.player.unpause();
    this.element.removeEventListener("mouseleave", this);
  };
  n.Player = s;
  return n;
});
(function (i, n) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
      return n(i, t, e);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = n(i, require("./flickity"), require("fizzy-ui-utils"));
  } else {
    n(i, i.Flickity, i.fizzyUIUtils);
  }
})(window, function t(e, i, n) {
  function l(t) {
    var e = document.createDocumentFragment();
    t.forEach(function (t) {
      e.appendChild(t.element);
    });
    return e;
  }
  var s = i.prototype;
  s.insert = function (t, e) {
    var i = this._makeCells(t);
    if (!i || !i.length) {
      return;
    }
    var n = this.cells.length;
    e = e === undefined ? n : e;
    var s = l(i);
    var r = e == n;
    if (r) {
      this.slider.appendChild(s);
    } else {
      var o = this.cells[e].element;
      this.slider.insertBefore(s, o);
    }
    if (e === 0) {
      this.cells = i.concat(this.cells);
    } else if (r) {
      this.cells = this.cells.concat(i);
    } else {
      var a = this.cells.splice(e, n - e);
      this.cells = this.cells.concat(i).concat(a);
    }
    this._sizeCells(i);
    this.cellChange(e, true);
  };
  s.append = function (t) {
    this.insert(t, this.cells.length);
  };
  s.prepend = function (t) {
    this.insert(t, 0);
  };
  s.remove = function (t) {
    var e = this.getCells(t);
    if (!e || !e.length) {
      return;
    }
    var i = this.cells.length - 1;
    e.forEach(function (t) {
      t.remove();
      var e = this.cells.indexOf(t);
      i = Math.min(e, i);
      n.removeFrom(this.cells, t);
    }, this);
    this.cellChange(i, true);
  };
  s.cellSizeChange = function (t) {
    var e = this.getCell(t);
    if (!e) {
      return;
    }
    e.getSize();
    var i = this.cells.indexOf(e);
    this.cellChange(i);
  };
  s.cellChange = function (t, e) {
    var i = this.selectedElement;
    this._positionCells(t);
    this._getWrapShiftCells();
    this.setGallerySize();
    var n = this.getCell(i);
    if (n) {
      this.selectedIndex = this.getCellSlideIndex(n);
    }
    this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
    this.emitEvent("cellChange", [t]);
    this.select(this.selectedIndex);
    if (e) {
      this.positionSliderAtSelected();
    }
  };
  return i;
});
(function (i, n) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
      return n(i, t, e);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = n(i, require("./flickity"), require("fizzy-ui-utils"));
  } else {
    n(i, i.Flickity, i.fizzyUIUtils);
  }
})(window, function t(e, i, o) {
  "use strict";

  i.createMethods.push("_createLazyload");
  var n = i.prototype;
  n._createLazyload = function () {
    this.on("select", this.lazyLoad);
  };
  n.lazyLoad = function () {
    var t = this.options.lazyLoad;
    if (!t) {
      return;
    }
    var e = typeof t == "number" ? t : 0;
    var i = this.getAdjacentCellElements(e);
    var n = [];
    i.forEach(function (t) {
      var e = s(t);
      n = n.concat(e);
    });
    n.forEach(function (t) {
      new r(t, this);
    }, this);
  };
  function s(t) {
    if (t.nodeName == "IMG") {
      var e = t.getAttribute("data-flickity-lazyload");
      var i = t.getAttribute("data-flickity-lazyload-src");
      var n = t.getAttribute("data-flickity-lazyload-srcset");
      if (e || i || n) {
        return [t];
      }
    }
    var s = "img[data-flickity-lazyload], " + "img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";
    var r = t.querySelectorAll(s);
    return o.makeArray(r);
  }
  function r(t, e) {
    this.img = t;
    this.flickity = e;
    this.load();
  }
  r.prototype.handleEvent = o.handleEvent;
  r.prototype.load = function () {
    this.img.addEventListener("load", this);
    this.img.addEventListener("error", this);
    var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src");
    var e = this.img.getAttribute("data-flickity-lazyload-srcset");
    this.img.src = t;
    if (e) {
      this.img.setAttribute("srcset", e);
    }
    this.img.removeAttribute("data-flickity-lazyload");
    this.img.removeAttribute("data-flickity-lazyload-src");
    this.img.removeAttribute("data-flickity-lazyload-srcset");
  };
  r.prototype.onload = function (t) {
    this.complete(t, "flickity-lazyloaded");
  };
  r.prototype.onerror = function (t) {
    this.complete(t, "flickity-lazyerror");
  };
  r.prototype.complete = function (t, e) {
    this.img.removeEventListener("load", this);
    this.img.removeEventListener("error", this);
    var i = this.flickity.getParentCell(this.img);
    var n = i && i.element;
    this.flickity.cellSizeChange(n);
    this.img.classList.add(e);
    this.flickity.dispatchEvent("lazyLoad", t, n);
  };
  i.LazyLoader = r;
  return i;
});
/*!
 * Flickity v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload"));
  }
})(window, function t(e) {
  return e;
});
/*!
 * Flickity asNavFor v2.0.2
 * enable asNavFor for Flickity
 */
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = e(require("flickity"), require("fizzy-ui-utils"));
  } else {
    t.Flickity = e(t.Flickity, t.fizzyUIUtils);
  }
})(window, function t(n, s) {
  n.createMethods.push("_createAsNavFor");
  var e = n.prototype;
  e._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor);
    this.on("deactivate", this.deactivateAsNavFor);
    this.on("destroy", this.destroyAsNavFor);
    var e = this.options.asNavFor;
    if (!e) {
      return;
    }
    var i = this;
    setTimeout(function t() {
      i.setNavCompanion(e);
    });
  };
  e.setNavCompanion = function (t) {
    t = s.getQueryElement(t);
    var e = n.data(t);
    if (!e || e == this) {
      return;
    }
    this.navCompanion = e;
    var i = this;
    this.onNavCompanionSelect = function () {
      i.navCompanionSelect();
    };
    e.on("select", this.onNavCompanionSelect);
    this.on("staticClick", this.onNavStaticClick);
    this.navCompanionSelect(true);
  };
  e.navCompanionSelect = function (t) {
    var e = this.navCompanion && this.navCompanion.selectedCells;
    if (!e) {
      return;
    }
    var i = e[0];
    var n = this.navCompanion.cells.indexOf(i);
    var s = n + e.length - 1;
    var r = Math.floor(a(n, s, this.navCompanion.cellAlign));
    this.selectCell(r, false, t);
    this.removeNavSelectedElements();
    if (r >= this.cells.length) {
      return;
    }
    var o = this.cells.slice(n, s + 1);
    this.navSelectedElements = o.map(function (t) {
      return t.element;
    });
    this.changeNavSelectedClass("add");
  };
  function a(t, e, i) {
    return (e - t) * i + t;
  }
  e.changeNavSelectedClass = function (e) {
    this.navSelectedElements.forEach(function (t) {
      t.classList[e]("is-nav-selected");
    });
  };
  e.activateAsNavFor = function () {
    this.navCompanionSelect(true);
  };
  e.removeNavSelectedElements = function () {
    if (!this.navSelectedElements) {
      return;
    }
    this.changeNavSelectedClass("remove");
    delete this.navSelectedElements;
  };
  e.onNavStaticClick = function (t, e, i, n) {
    if (typeof n == "number") {
      this.navCompanion.selectCell(n);
    }
  };
  e.deactivateAsNavFor = function () {
    this.removeNavSelectedElements();
  };
  e.destroyAsNavFor = function () {
    if (!this.navCompanion) {
      return;
    }
    this.navCompanion.off("select", this.onNavCompanionSelect);
    this.off("staticClick", this.onNavStaticClick);
    delete this.navCompanion;
  };
  return n;
});
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function (e, i) {
  "use strict";

  if (typeof define == "function" && define.amd) {
    define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (t) {
      return i(e, t);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = i(e, require("ev-emitter"));
  } else {
    e.imagesLoaded = i(e, e.EvEmitter);
  }
})(typeof window !== "undefined" ? window : void 0, function t(e, i) {
  var s = e.jQuery;
  var r = e.console;
  function o(t, e) {
    for (var i in e) {
      t[i] = e[i];
    }
    return t;
  }
  var n = Array.prototype.slice;
  function a(t) {
    if (Array.isArray(t)) {
      return t;
    }
    var e = _typeof(t) == "object" && typeof t.length == "number";
    if (e) {
      return n.call(t);
    }
    return [t];
  }
  function l(t, e, i) {
    if (!(this instanceof l)) {
      return new l(t, e, i);
    }
    var n = t;
    if (typeof t == "string") {
      n = document.querySelectorAll(t);
    }
    if (!n) {
      r.error("Bad element for imagesLoaded " + (n || t));
      return;
    }
    this.elements = a(n);
    this.options = o({}, this.options);
    if (typeof e == "function") {
      i = e;
    } else {
      o(this.options, e);
    }
    if (i) {
      this.on("always", i);
    }
    this.getImages();
    if (s) {
      this.jqDeferred = new s.Deferred();
    }
    setTimeout(this.check.bind(this));
  }
  l.prototype = Object.create(i.prototype);
  l.prototype.options = {};
  l.prototype.getImages = function () {
    this.images = [];
    this.elements.forEach(this.addElementImages, this);
  };
  l.prototype.addElementImages = function (t) {
    if (t.nodeName == "IMG") {
      this.addImage(t);
    }
    if (this.options.background === true) {
      this.addElementBackgroundImages(t);
    }
    var e = t.nodeType;
    if (!e || !h[e]) {
      return;
    }
    var i = t.querySelectorAll("img");
    for (var n = 0; n < i.length; n++) {
      var s = i[n];
      this.addImage(s);
    }
    if (typeof this.options.background == "string") {
      var r = t.querySelectorAll(this.options.background);
      for (n = 0; n < r.length; n++) {
        var o = r[n];
        this.addElementBackgroundImages(o);
      }
    }
  };
  var h = {
    1: true,
    9: true,
    11: true
  };
  l.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (!e) {
      return;
    }
    var i = /url\((['"])?(.*?)\1\)/gi;
    var n = i.exec(e.backgroundImage);
    while (n !== null) {
      var s = n && n[2];
      if (s) {
        this.addBackground(s, t);
      }
      n = i.exec(e.backgroundImage);
    }
  };
  l.prototype.addImage = function (t) {
    var e = new c(t);
    this.images.push(e);
  };
  l.prototype.addBackground = function (t, e) {
    var i = new u(t, e);
    this.images.push(i);
  };
  l.prototype.check = function () {
    var n = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    if (!this.images.length) {
      this.complete();
      return;
    }
    function e(t, e, i) {
      setTimeout(function () {
        n.progress(t, e, i);
      });
    }
    this.images.forEach(function (t) {
      t.once("progress", e);
      t.check();
    });
  };
  l.prototype.progress = function (t, e, i) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
    this.emitEvent("progress", [this, t, e]);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, t);
    }
    if (this.progressedCount == this.images.length) {
      this.complete();
    }
    if (this.options.debug && r) {
      r.log("progress: " + i, t, e);
    }
  };
  l.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";
    this.isComplete = true;
    this.emitEvent(t, [this]);
    this.emitEvent("always", [this]);
    if (this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this);
    }
  };
  function c(t) {
    this.img = t;
  }
  c.prototype = Object.create(i.prototype);
  c.prototype.check = function () {
    var t = this.getIsImageComplete();
    if (t) {
      this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
      return;
    }
    this.proxyImage = new Image();
    this.proxyImage.addEventListener("load", this);
    this.proxyImage.addEventListener("error", this);
    this.img.addEventListener("load", this);
    this.img.addEventListener("error", this);
    this.proxyImage.src = this.img.src;
  };
  c.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  };
  c.prototype.confirm = function (t, e) {
    this.isLoaded = t;
    this.emitEvent("progress", [this, this.img, e]);
  };
  c.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    if (this[e]) {
      this[e](t);
    }
  };
  c.prototype.onload = function () {
    this.confirm(true, "onload");
    this.unbindEvents();
  };
  c.prototype.onerror = function () {
    this.confirm(false, "onerror");
    this.unbindEvents();
  };
  c.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this);
    this.proxyImage.removeEventListener("error", this);
    this.img.removeEventListener("load", this);
    this.img.removeEventListener("error", this);
  };
  function u(t, e) {
    this.url = t;
    this.element = e;
    this.img = new Image();
  }
  u.prototype = Object.create(c.prototype);
  u.prototype.check = function () {
    this.img.addEventListener("load", this);
    this.img.addEventListener("error", this);
    this.img.src = this.url;
    var t = this.getIsImageComplete();
    if (t) {
      this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
      this.unbindEvents();
    }
  };
  u.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this);
    this.img.removeEventListener("error", this);
  };
  u.prototype.confirm = function (t, e) {
    this.isLoaded = t;
    this.emitEvent("progress", [this, this.element, e]);
  };
  l.makeJQueryPlugin = function (t) {
    t = t || e.jQuery;
    if (!t) {
      return;
    }
    s = t;
    s.fn.imagesLoaded = function (t, e) {
      var i = new l(this, t, e);
      return i.jqDeferred.promise(s(this));
    };
  };
  l.makeJQueryPlugin();
  return l;
});
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */
(function (i, n) {
  if (typeof define == "function" && define.amd) {
    define(["flickity/js/index", "imagesloaded/imagesloaded"], function (t, e) {
      return n(i, t, e);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module.exports) {
    module.exports = n(i, require("flickity"), require("imagesloaded"));
  } else {
    i.Flickity = n(i, i.Flickity, i.imagesLoaded);
  }
})(window, function t(e, i, s) {
  "use strict";

  i.createMethods.push("_createImagesLoaded");
  var n = i.prototype;
  n._createImagesLoaded = function () {
    this.on("activate", this.imagesLoaded);
  };
  n.imagesLoaded = function () {
    if (!this.options.imagesLoaded) {
      return;
    }
    var n = this;
    function t(t, e) {
      var i = n.getParentCell(e.img);
      n.cellSizeChange(i && i.element);
      if (!n.options.freeScroll) {
        n.positionSliderAtSelected();
      }
    }
    s(this.slider).on("progress", t);
  };
  return i;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
      s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
      t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
      t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
      e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
      t,
      o = this;
    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
      e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");
        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }
          d.appendChild(a);
        }
        o.appendChild(d);
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = !1,
      d = r.$slider.width(),
      a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = i(e.currentTarget);
    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;
      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;
      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }
      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
      e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
      t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
      e = 0,
      t = 0,
      o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
      t,
      o,
      s,
      n = this,
      r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
      e = this,
      t = 0,
      o = 0,
      s = [];
    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
      t,
      o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
      t = Math.ceil(e.slideCount / e.options.slidesToShow),
      o = e.getNavigableIndexes().filter(function (i) {
        return i >= 0 && i < e.slideCount;
      });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
          t = i(this).attr("data-lazy"),
          o = i(this).attr("data-srcset"),
          s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
          r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }
    var t,
      o,
      s,
      n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
      o,
      s,
      n,
      r,
      l = this,
      d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
      o,
      s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
      t,
      o,
      s = this,
      n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
      }
      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
      t,
      o = this,
      s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
      t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
      t,
      o,
      s,
      n,
      r = this,
      l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
      e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
      t,
      o,
      s,
      n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
      t,
      o,
      s = this;
    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
      o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
      s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
      s,
      n,
      r,
      l,
      d = null,
      a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
      e,
      t,
      o,
      s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
      t,
      o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }
      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;
      case "move":
        e.swipeMove(i);
        break;
      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
      t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
      t,
      o = this,
      s = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      r = o.length;
    for (i = 0; i < r; i++) if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    return o;
  };
});