if (function(t, e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
      if (!t.document)
          throw new Error("jQuery requires a window with a document");
      return e(t)
  }
  : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
  function n(t) {
      var e = t.length
        , n = J.type(t);
      return "function" !== n && !J.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
  }
  function i(t, e, n) {
      if (J.isFunction(e))
          return J.grep(t, function(t, i) {
              return !!e.call(t, i, t) !== n
          });
      if (e.nodeType)
          return J.grep(t, function(t) {
              return t === e !== n
          });
      if ("string" == typeof e) {
          if (at.test(e))
              return J.filter(e, t, n);
          e = J.filter(e, t)
      }
      return J.grep(t, function(t) {
          return V.call(e, t) >= 0 !== n
      })
  }
  function o(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; )
          ;
      return t
  }
  function r(t) {
      var e = ht[t] = {};
      return J.each(t.match(dt) || [], function(t, n) {
          e[n] = !0
      }),
      e
  }
  function s() {
      Z.removeEventListener("DOMContentLoaded", s, !1),
      t.removeEventListener("load", s, !1),
      J.ready()
  }
  function a() {
      Object.defineProperty(this.cache = {}, 0, {
          get: function() {
              return {}
          }
      }),
      this.expando = J.expando + a.uid++
  }
  function l(t, e, n) {
      var i;
      if (void 0 === n && 1 === t.nodeType)
          if (i = "data-" + e.replace(xt, "-$1").toLowerCase(),
          n = t.getAttribute(i),
          "string" == typeof n) {
              try {
                  n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : bt.test(n) ? J.parseJSON(n) : n)
              } catch (o) {}
              yt.set(t, e, n)
          } else
              n = void 0;
      return n
  }
  function u() {
      return !0
  }
  function c() {
      return !1
  }
  function f() {
      try {
          return Z.activeElement
      } catch (t) {}
  }
  function p(t, e) {
      return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
  }
  function d(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
      t
  }
  function h(t) {
      var e = qt.exec(t.type);
      return e ? t.type = e[1] : t.removeAttribute("type"),
      t
  }
  function g(t, e) {
      for (var n = 0, i = t.length; n < i; n++)
          vt.set(t[n], "globalEval", !e || vt.get(e[n], "globalEval"))
  }
  function m(t, e) {
      var n, i, o, r, s, a, l, u;
      if (1 === e.nodeType) {
          if (vt.hasData(t) && (r = vt.access(t),
          s = vt.set(e, r),
          u = r.events)) {
              delete s.handle,
              s.events = {};
              for (o in u)
                  for (n = 0,
                  i = u[o].length; n < i; n++)
                      J.event.add(e, o, u[o][n])
          }
          yt.hasData(t) && (a = yt.access(t),
          l = J.extend({}, a),
          yt.set(e, l))
      }
  }
  function v(t, e) {
      var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
      return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], n) : n
  }
  function y(t, e) {
      var n = e.nodeName.toLowerCase();
      "input" === n && kt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
  }
  function b(e, n) {
      var i, o = J(n.createElement(e)).appendTo(n.body), r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : J.css(o[0], "display");
      return o.detach(),
      r
  }
  function x(t) {
      var e = Z
        , n = Ut[t];
      return n || (n = b(t, e),
      "none" !== n && n || (Ft = (Ft || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
      e = Ft[0].contentDocument,
      e.write(),
      e.close(),
      n = b(t, e),
      Ft.detach()),
      Ut[t] = n),
      n
  }
  function w(t, e, n) {
      var i, o, r, s, a = t.style;
      return n = n || Bt(t),
      n && (s = n.getPropertyValue(e) || n[e]),
      n && ("" !== s || J.contains(t.ownerDocument, t) || (s = J.style(t, e)),
      Mt.test(s) && Wt.test(e) && (i = a.width,
      o = a.minWidth,
      r = a.maxWidth,
      a.minWidth = a.maxWidth = a.width = s,
      s = n.width,
      a.width = i,
      a.minWidth = o,
      a.maxWidth = r)),
      void 0 !== s ? s + "" : s
  }
  function T(t, e) {
      return {
          get: function() {
              return t() ? void delete this.get : (this.get = e).apply(this, arguments)
          }
      }
  }
  function C(t, e) {
      if (e in t)
          return e;
      for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Qt.length; o--; )
          if (e = Qt[o] + n,
          e in t)
              return e;
      return i
  }
  function k(t, e, n) {
      var i = zt.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
  }
  function E(t, e, n, i, o) {
      for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2)
          "margin" === n && (s += J.css(t, n + Tt[r], !0, o)),
          i ? ("content" === n && (s -= J.css(t, "padding" + Tt[r], !0, o)),
          "margin" !== n && (s -= J.css(t, "border" + Tt[r] + "Width", !0, o))) : (s += J.css(t, "padding" + Tt[r], !0, o),
          "padding" !== n && (s += J.css(t, "border" + Tt[r] + "Width", !0, o)));
      return s
  }
  function S(t, e, n) {
      var i = !0
        , o = "width" === e ? t.offsetWidth : t.offsetHeight
        , r = Bt(t)
        , s = "border-box" === J.css(t, "boxSizing", !1, r);
      if (o <= 0 || null == o) {
          if (o = w(t, e, r),
          (o < 0 || null == o) && (o = t.style[e]),
          Mt.test(o))
              return o;
          i = s && (G.boxSizingReliable() || o === t.style[e]),
          o = parseFloat(o) || 0
      }
      return o + E(t, e, n || (s ? "border" : "content"), i, r) + "px"
  }
  function N(t, e) {
      for (var n, i, o, r = [], s = 0, a = t.length; s < a; s++)
          i = t[s],
          i.style && (r[s] = vt.get(i, "olddisplay"),
          n = i.style.display,
          e ? (r[s] || "none" !== n || (i.style.display = ""),
          "" === i.style.display && Ct(i) && (r[s] = vt.access(i, "olddisplay", x(i.nodeName)))) : (o = Ct(i),
          "none" === n && o || vt.set(i, "olddisplay", o ? n : J.css(i, "display"))));
      for (s = 0; s < a; s++)
          i = t[s],
          i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
      return t
  }
  function $(t, e, n, i, o) {
      return new $.prototype.init(t,e,n,i,o)
  }
  function A() {
      return setTimeout(function() {
          Gt = void 0
      }),
      Gt = J.now()
  }
  function D(t, e) {
      var n, i = 0, o = {
          height: t
      };
      for (e = e ? 1 : 0; i < 4; i += 2 - e)
          n = Tt[i],
          o["margin" + n] = o["padding" + n] = t;
      return e && (o.opacity = o.width = t),
      o
  }
  function j(t, e, n) {
      for (var i, o = (ne[e] || []).concat(ne["*"]), r = 0, s = o.length; r < s; r++)
          if (i = o[r].call(n, e, t))
              return i
  }
  function O(t, e, n) {
      var i, o, r, s, a, l, u, c, f = this, p = {}, d = t.style, h = t.nodeType && Ct(t), g = vt.get(t, "fxshow");
      n.queue || (a = J._queueHooks(t, "fx"),
      null == a.unqueued && (a.unqueued = 0,
      l = a.empty.fire,
      a.empty.fire = function() {
          a.unqueued || l()
      }
      ),
      a.unqueued++,
      f.always(function() {
          f.always(function() {
              a.unqueued--,
              J.queue(t, "fx").length || a.empty.fire()
          })
      })),
      1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
      u = J.css(t, "display"),
      c = "none" === u ? vt.get(t, "olddisplay") || x(t.nodeName) : u,
      "inline" === c && "none" === J.css(t, "float") && (d.display = "inline-block")),
      n.overflow && (d.overflow = "hidden",
      f.always(function() {
          d.overflow = n.overflow[0],
          d.overflowX = n.overflow[1],
          d.overflowY = n.overflow[2]
      }));
      for (i in e)
          if (o = e[i],
          Kt.exec(o)) {
              if (delete e[i],
              r = r || "toggle" === o,
              o === (h ? "hide" : "show")) {
                  if ("show" !== o || !g || void 0 === g[i])
                      continue;
                  h = !0
              }
              p[i] = g && g[i] || J.style(t, i)
          } else
              u = void 0;
      if (J.isEmptyObject(p))
          "inline" === ("none" === u ? x(t.nodeName) : u) && (d.display = u);
      else {
          g ? "hidden"in g && (h = g.hidden) : g = vt.access(t, "fxshow", {}),
          r && (g.hidden = !h),
          h ? J(t).show() : f.done(function() {
              J(t).hide()
          }),
          f.done(function() {
              var e;
              vt.remove(t, "fxshow");
              for (e in p)
                  J.style(t, e, p[e])
          });
          for (i in p)
              s = j(h ? g[i] : 0, i, f),
              i in g || (g[i] = s.start,
              h && (s.end = s.start,
              s.start = "width" === i || "height" === i ? 1 : 0))
      }
  }
  function I(t, e) {
      var n, i, o, r, s;
      for (n in t)
          if (i = J.camelCase(n),
          o = e[i],
          r = t[n],
          J.isArray(r) && (o = r[1],
          r = t[n] = r[0]),
          n !== i && (t[i] = r,
          delete t[n]),
          s = J.cssHooks[i],
          s && "expand"in s) {
              r = s.expand(r),
              delete t[i];
              for (n in r)
                  n in t || (t[n] = r[n],
                  e[n] = o)
          } else
              e[i] = o
  }
  function R(t, e, n) {
      var i, o, r = 0, s = ee.length, a = J.Deferred().always(function() {
          delete l.elem
      }), l = function() {
          if (o)
              return !1;
          for (var e = Gt || A(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; s < l; s++)
              u.tweens[s].run(r);
          return a.notifyWith(t, [u, r, n]),
          r < 1 && l ? n : (a.resolveWith(t, [u]),
          !1)
      }, u = a.promise({
          elem: t,
          props: J.extend({}, e),
          opts: J.extend(!0, {
              specialEasing: {}
          }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: Gt || A(),
          duration: n.duration,
          tweens: [],
          createTween: function(e, n) {
              var i = J.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
              return u.tweens.push(i),
              i
          },
          stop: function(e) {
              var n = 0
                , i = e ? u.tweens.length : 0;
              if (o)
                  return this;
              for (o = !0; n < i; n++)
                  u.tweens[n].run(1);
              return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]),
              this
          }
      }), c = u.props;
      for (I(c, u.opts.specialEasing); r < s; r++)
          if (i = ee[r].call(u, t, c, u.opts))
              return i;
      return J.map(c, j, u),
      J.isFunction(u.opts.start) && u.opts.start.call(t, u),
      J.fx.timer(J.extend(l, {
          elem: t,
          anim: u,
          queue: u.opts.queue
      })),
      u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
  }
  function L(t) {
      return function(e, n) {
          "string" != typeof e && (n = e,
          e = "*");
          var i, o = 0, r = e.toLowerCase().match(dt) || [];
          if (J.isFunction(n))
              for (; i = r[o++]; )
                  "+" === i[0] ? (i = i.slice(1) || "*",
                  (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
      }
  }
  function q(t, e, n, i) {
      function o(a) {
          var l;
          return r[a] = !0,
          J.each(t[a] || [], function(t, a) {
              var u = a(e, n, i);
              return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u),
              o(u),
              !1)
          }),
          l
      }
      var r = {}
        , s = t === be;
      return o(e.dataTypes[0]) || !r["*"] && o("*")
  }
  function H(t, e) {
      var n, i, o = J.ajaxSettings.flatOptions || {};
      for (n in e)
          void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
      return i && J.extend(!0, t, i),
      t
  }
  function P(t, e, n) {
      for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
          l.shift(),
          void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
      if (i)
          for (o in a)
              if (a[o] && a[o].test(i)) {
                  l.unshift(o);
                  break
              }
      if (l[0]in n)
          r = l[0];
      else {
          for (o in n) {
              if (!l[0] || t.converters[o + " " + l[0]]) {
                  r = o;
                  break
              }
              s || (s = o)
          }
          r = r || s
      }
      if (r)
          return r !== l[0] && l.unshift(r),
          n[r]
  }
  function F(t, e, n, i) {
      var o, r, s, a, l, u = {}, c = t.dataTypes.slice();
      if (c[1])
          for (s in t.converters)
              u[s.toLowerCase()] = t.converters[s];
      for (r = c.shift(); r; )
          if (t.responseFields[r] && (n[t.responseFields[r]] = e),
          !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
          l = r,
          r = c.shift())
              if ("*" === r)
                  r = l;
              else if ("*" !== l && l !== r) {
                  if (s = u[l + " " + r] || u["* " + r],
                  !s)
                      for (o in u)
                          if (a = o.split(" "),
                          a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                              s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0],
                              c.unshift(a[1]));
                              break
                          }
                  if (s !== !0)
                      if (s && t["throws"])
                          e = s(e);
                      else
                          try {
                              e = s(e)
                          } catch (f) {
                              return {
                                  state: "parsererror",
                                  error: s ? f : "No conversion from " + l + " to " + r
                              }
                          }
              }
      return {
          state: "success",
          data: e
      }
  }
  function U(t, e, n, i) {
      var o;
      if (J.isArray(e))
          J.each(e, function(e, o) {
              n || ke.test(t) ? i(t, o) : U(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
          });
      else if (n || "object" !== J.type(e))
          i(t, e);
      else
          for (o in e)
              U(t + "[" + o + "]", e[o], n, i)
  }
  function W(t) {
      return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
  }
  var M = []
    , B = M.slice
    , _ = M.concat
    , z = M.push
    , V = M.indexOf
    , Y = {}
    , X = Y.toString
    , Q = Y.hasOwnProperty
    , G = {}
    , Z = t.document
    , K = "2.1.3"
    , J = function(t, e) {
      return new J.fn.init(t,e)
  }
    , tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    , et = /^-ms-/
    , nt = /-([\da-z])/gi
    , it = function(t, e) {
      return e.toUpperCase()
  };
  J.fn = J.prototype = {
      jquery: K,
      constructor: J,
      selector: "",
      length: 0,
      toArray: function() {
          return B.call(this)
      },
      get: function(t) {
          return null != t ? t < 0 ? this[t + this.length] : this[t] : B.call(this)
      },
      pushStack: function(t) {
          var e = J.merge(this.constructor(), t);
          return e.prevObject = this,
          e.context = this.context,
          e
      },
      each: function(t, e) {
          return J.each(this, t, e)
      },
      map: function(t) {
          return this.pushStack(J.map(this, function(e, n) {
              return t.call(e, n, e)
          }))
      },
      slice: function() {
          return this.pushStack(B.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(t) {
          var e = this.length
            , n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor(null)
      },
      push: z,
      sort: M.sort,
      splice: M.splice
  },
  J.extend = J.fn.extend = function() {
      var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
      for ("boolean" == typeof s && (u = s,
      s = arguments[a] || {},
      a++),
      "object" == typeof s || J.isFunction(s) || (s = {}),
      a === l && (s = this,
      a--); a < l; a++)
          if (null != (t = arguments[a]))
              for (e in t)
                  n = s[e],
                  i = t[e],
                  s !== i && (u && i && (J.isPlainObject(i) || (o = J.isArray(i))) ? (o ? (o = !1,
                  r = n && J.isArray(n) ? n : []) : r = n && J.isPlainObject(n) ? n : {},
                  s[e] = J.extend(u, r, i)) : void 0 !== i && (s[e] = i));
      return s
  }
  ,
  J.extend({
      expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(t) {
          throw new Error(t)
      },
      noop: function() {},
      isFunction: function(t) {
          return "function" === J.type(t)
      },
      isArray: Array.isArray,
      isWindow: function(t) {
          return null != t && t === t.window
      },
      isNumeric: function(t) {
          return !J.isArray(t) && t - parseFloat(t) + 1 >= 0
      },
      isPlainObject: function(t) {
          return "object" === J.type(t) && !t.nodeType && !J.isWindow(t) && !(t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf"))
      },
      isEmptyObject: function(t) {
          var e;
          for (e in t)
              return !1;
          return !0
      },
      type: function(t) {
          return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[X.call(t)] || "object" : typeof t
      },
      globalEval: function(t) {
          var e, n = eval;
          t = J.trim(t),
          t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"),
          e.text = t,
          Z.head.appendChild(e).parentNode.removeChild(e)) : n(t))
      },
      camelCase: function(t) {
          return t.replace(et, "ms-").replace(nt, it)
      },
      nodeName: function(t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      },
      each: function(t, e, i) {
          var o, r = 0, s = t.length, a = n(t);
          if (i) {
              if (a)
                  for (; r < s && (o = e.apply(t[r], i),
                  o !== !1); r++)
                      ;
              else
                  for (r in t)
                      if (o = e.apply(t[r], i),
                      o === !1)
                          break
          } else if (a)
              for (; r < s && (o = e.call(t[r], r, t[r]),
              o !== !1); r++)
                  ;
          else
              for (r in t)
                  if (o = e.call(t[r], r, t[r]),
                  o === !1)
                      break;
          return t
      },
      trim: function(t) {
          return null == t ? "" : (t + "").replace(tt, "")
      },
      makeArray: function(t, e) {
          var i = e || [];
          return null != t && (n(Object(t)) ? J.merge(i, "string" == typeof t ? [t] : t) : z.call(i, t)),
          i
      },
      inArray: function(t, e, n) {
          return null == e ? -1 : V.call(e, t, n)
      },
      merge: function(t, e) {
          for (var n = +e.length, i = 0, o = t.length; i < n; i++)
              t[o++] = e[i];
          return t.length = o,
          t
      },
      grep: function(t, e, n) {
          for (var i, o = [], r = 0, s = t.length, a = !n; r < s; r++)
              i = !e(t[r], r),
              i !== a && o.push(t[r]);
          return o
      },
      map: function(t, e, i) {
          var o, r = 0, s = t.length, a = n(t), l = [];
          if (a)
              for (; r < s; r++)
                  o = e(t[r], r, i),
                  null != o && l.push(o);
          else
              for (r in t)
                  o = e(t[r], r, i),
                  null != o && l.push(o);
          return _.apply([], l)
      },
      guid: 1,
      proxy: function(t, e) {
          var n, i, o;
          if ("string" == typeof e && (n = t[e],
          e = t,
          t = n),
          J.isFunction(t))
              return i = B.call(arguments, 2),
              o = function() {
                  return t.apply(e || this, i.concat(B.call(arguments)))
              }
              ,
              o.guid = t.guid = t.guid || J.guid++,
              o
      },
      now: Date.now,
      support: G
  }),
  J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
      Y["[object " + e + "]"] = e.toLowerCase()
  });
  var ot = function(t) {
      function e(t, e, n, i) {
          var o, r, s, a, l, u, f, d, h, g;
          if ((e ? e.ownerDocument || e : U) !== O && j(e),
          e = e || O,
          n = n || [],
          a = e.nodeType,
          "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)
              return n;
          if (!i && R) {
              if (11 !== a && (o = yt.exec(t)))
                  if (s = o[1]) {
                      if (9 === a) {
                          if (r = e.getElementById(s),
                          !r || !r.parentNode)
                              return n;
                          if (r.id === s)
                              return n.push(r),
                              n
                      } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && P(e, r) && r.id === s)
                          return n.push(r),
                          n
                  } else {
                      if (o[2])
                          return K.apply(n, e.getElementsByTagName(t)),
                          n;
                      if ((s = o[3]) && w.getElementsByClassName)
                          return K.apply(n, e.getElementsByClassName(s)),
                          n
                  }
              if (w.qsa && (!L || !L.test(t))) {
                  if (d = f = F,
                  h = e,
                  g = 1 !== a && t,
                  1 === a && "object" !== e.nodeName.toLowerCase()) {
                      for (u = E(t),
                      (f = e.getAttribute("id")) ? d = f.replace(xt, "\\$&") : e.setAttribute("id", d),
                      d = "[id='" + d + "'] ",
                      l = u.length; l--; )
                          u[l] = d + p(u[l]);
                      h = bt.test(t) && c(e.parentNode) || e,
                      g = u.join(",")
                  }
                  if (g)
                      try {
                          return K.apply(n, h.querySelectorAll(g)),
                          n
                      } catch (m) {} finally {
                          f || e.removeAttribute("id")
                      }
              }
          }
          return N(t.replace(lt, "$1"), e, n, i)
      }
      function n() {
          function t(n, i) {
              return e.push(n + " ") > T.cacheLength && delete t[e.shift()],
              t[n + " "] = i
          }
          var e = [];
          return t
      }
      function i(t) {
          return t[F] = !0,
          t
      }
      function o(t) {
          var e = O.createElement("div");
          try {
              return !!t(e)
          } catch (n) {
              return !1
          } finally {
              e.parentNode && e.parentNode.removeChild(e),
              e = null
          }
      }
      function r(t, e) {
          for (var n = t.split("|"), i = t.length; i--; )
              T.attrHandle[n[i]] = e
      }
      function s(t, e) {
          var n = e && t
            , i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
          if (i)
              return i;
          if (n)
              for (; n = n.nextSibling; )
                  if (n === e)
                      return -1;
          return t ? 1 : -1
      }
      function a(t) {
          return function(e) {
              var n = e.nodeName.toLowerCase();
              return "input" === n && e.type === t
          }
      }
      function l(t) {
          return function(e) {
              var n = e.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && e.type === t
          }
      }
      function u(t) {
          return i(function(e) {
              return e = +e,
              i(function(n, i) {
                  for (var o, r = t([], n.length, e), s = r.length; s--; )
                      n[o = r[s]] && (n[o] = !(i[o] = n[o]))
              })
          })
      }
      function c(t) {
          return t && "undefined" != typeof t.getElementsByTagName && t
      }
      function f() {}
      function p(t) {
          for (var e = 0, n = t.length, i = ""; e < n; e++)
              i += t[e].value;
          return i
      }
      function d(t, e, n) {
          var i = e.dir
            , o = n && "parentNode" === i
            , r = M++;
          return e.first ? function(e, n, r) {
              for (; e = e[i]; )
                  if (1 === e.nodeType || o)
                      return t(e, n, r)
          }
          : function(e, n, s) {
              var a, l, u = [W, r];
              if (s) {
                  for (; e = e[i]; )
                      if ((1 === e.nodeType || o) && t(e, n, s))
                          return !0
              } else
                  for (; e = e[i]; )
                      if (1 === e.nodeType || o) {
                          if (l = e[F] || (e[F] = {}),
                          (a = l[i]) && a[0] === W && a[1] === r)
                              return u[2] = a[2];
                          if (l[i] = u,
                          u[2] = t(e, n, s))
                              return !0
                      }
          }
      }
      function h(t) {
          return t.length > 1 ? function(e, n, i) {
              for (var o = t.length; o--; )
                  if (!t[o](e, n, i))
                      return !1;
              return !0
          }
          : t[0]
      }
      function g(t, n, i) {
          for (var o = 0, r = n.length; o < r; o++)
              e(t, n[o], i);
          return i
      }
      function m(t, e, n, i, o) {
          for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
              (r = t[a]) && (n && !n(r, i, o) || (s.push(r),
              u && e.push(a)));
          return s
      }
      function v(t, e, n, o, r, s) {
          return o && !o[F] && (o = v(o)),
          r && !r[F] && (r = v(r, s)),
          i(function(i, s, a, l) {
              var u, c, f, p = [], d = [], h = s.length, v = i || g(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : m(v, p, t, a, l), b = n ? r || (i ? t : h || o) ? [] : s : y;
              if (n && n(y, b, a, l),
              o)
                  for (u = m(b, d),
                  o(u, [], a, l),
                  c = u.length; c--; )
                      (f = u[c]) && (b[d[c]] = !(y[d[c]] = f));
              if (i) {
                  if (r || t) {
                      if (r) {
                          for (u = [],
                          c = b.length; c--; )
                              (f = b[c]) && u.push(y[c] = f);
                          r(null, b = [], u, l)
                      }
                      for (c = b.length; c--; )
                          (f = b[c]) && (u = r ? tt(i, f) : p[c]) > -1 && (i[u] = !(s[u] = f))
                  }
              } else
                  b = m(b === s ? b.splice(h, b.length) : b),
                  r ? r(null, s, b, l) : K.apply(s, b)
          })
      }
      function y(t) {
          for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = d(function(t) {
              return t === e
          }, s, !0), u = d(function(t) {
              return tt(e, t) > -1
          }, s, !0), c = [function(t, n, i) {
              var o = !r && (i || n !== $) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
              return e = null,
              o
          }
          ]; a < o; a++)
              if (n = T.relative[t[a].type])
                  c = [d(h(c), n)];
              else {
                  if (n = T.filter[t[a].type].apply(null, t[a].matches),
                  n[F]) {
                      for (i = ++a; i < o && !T.relative[t[i].type]; i++)
                          ;
                      return v(a > 1 && h(c), a > 1 && p(t.slice(0, a - 1).concat({
                          value: " " === t[a - 2].type ? "*" : ""
                      })).replace(lt, "$1"), n, a < i && y(t.slice(a, i)), i < o && y(t = t.slice(i)), i < o && p(t))
                  }
                  c.push(n)
              }
          return h(c)
      }
      function b(t, n) {
          var o = n.length > 0
            , r = t.length > 0
            , s = function(i, s, a, l, u) {
              var c, f, p, d = 0, h = "0", g = i && [], v = [], y = $, b = i || r && T.find.TAG("*", u), x = W += null == y ? 1 : Math.random() || .1, w = b.length;
              for (u && ($ = s !== O && s); h !== w && null != (c = b[h]); h++) {
                  if (r && c) {
                      for (f = 0; p = t[f++]; )
                          if (p(c, s, a)) {
                              l.push(c);
                              break
                          }
                      u && (W = x)
                  }
                  o && ((c = !p && c) && d--,
                  i && g.push(c))
              }
              if (d += h,
              o && h !== d) {
                  for (f = 0; p = n[f++]; )
                      p(g, v, s, a);
                  if (i) {
                      if (d > 0)
                          for (; h--; )
                              g[h] || v[h] || (v[h] = G.call(l));
                      v = m(v)
                  }
                  K.apply(l, v),
                  u && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(l)
              }
              return u && (W = x,
              $ = y),
              g
          };
          return o ? i(s) : s
      }
      var x, w, T, C, k, E, S, N, $, A, D, j, O, I, R, L, q, H, P, F = "sizzle" + 1 * new Date, U = t.document, W = 0, M = 0, B = n(), _ = n(), z = n(), V = function(t, e) {
          return t === e && (D = !0),
          0
      }, Y = 1 << 31, X = {}.hasOwnProperty, Q = [], G = Q.pop, Z = Q.push, K = Q.push, J = Q.slice, tt = function(t, e) {
          for (var n = 0, i = t.length; n < i; n++)
              if (t[n] === e)
                  return n;
          return -1
      }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = it.replace("w", "w#"), rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]", st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", at = new RegExp(nt + "+","g"), lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), ut = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), pt = new RegExp(st), dt = new RegExp("^" + ot + "$"), ht = {
          ID: new RegExp("^#(" + it + ")"),
          CLASS: new RegExp("^\\.(" + it + ")"),
          TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + rt),
          PSEUDO: new RegExp("^" + st),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
          bool: new RegExp("^(?:" + et + ")$","i"),
          needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
      }, gt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), Tt = function(t, e, n) {
          var i = "0x" + e - 65536;
          return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }, Ct = function() {
          j()
      };
      try {
          K.apply(Q = J.call(U.childNodes), U.childNodes),
          Q[U.childNodes.length].nodeType
      } catch (kt) {
          K = {
              apply: Q.length ? function(t, e) {
                  Z.apply(t, J.call(e))
              }
              : function(t, e) {
                  for (var n = t.length, i = 0; t[n++] = e[i++]; )
                      ;
                  t.length = n - 1
              }
          }
      }
      w = e.support = {},
      k = e.isXML = function(t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName
      }
      ,
      j = e.setDocument = function(t) {
          var e, n, i = t ? t.ownerDocument || t : U;
          return i !== O && 9 === i.nodeType && i.documentElement ? (O = i,
          I = i.documentElement,
          n = i.defaultView,
          n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)),
          R = !k(i),
          w.attributes = o(function(t) {
              return t.className = "i",
              !t.getAttribute("className")
          }),
          w.getElementsByTagName = o(function(t) {
              return t.appendChild(i.createComment("")),
              !t.getElementsByTagName("*").length
          }),
          w.getElementsByClassName = vt.test(i.getElementsByClassName),
          w.getById = o(function(t) {
              return I.appendChild(t).id = F,
              !i.getElementsByName || !i.getElementsByName(F).length
          }),
          w.getById ? (T.find.ID = function(t, e) {
              if ("undefined" != typeof e.getElementById && R) {
                  var n = e.getElementById(t);
                  return n && n.parentNode ? [n] : []
              }
          }
          ,
          T.filter.ID = function(t) {
              var e = t.replace(wt, Tt);
              return function(t) {
                  return t.getAttribute("id") === e
              }
          }
          ) : (delete T.find.ID,
          T.filter.ID = function(t) {
              var e = t.replace(wt, Tt);
              return function(t) {
                  var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                  return n && n.value === e
              }
          }
          ),
          T.find.TAG = w.getElementsByTagName ? function(t, e) {
              return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
          }
          : function(t, e) {
              var n, i = [], o = 0, r = e.getElementsByTagName(t);
              if ("*" === t) {
                  for (; n = r[o++]; )
                      1 === n.nodeType && i.push(n);
                  return i
              }
              return r
          }
          ,
          T.find.CLASS = w.getElementsByClassName && function(t, e) {
              if (R)
                  return e.getElementsByClassName(t)
          }
          ,
          q = [],
          L = [],
          (w.qsa = vt.test(i.querySelectorAll)) && (o(function(t) {
              I.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>",
              t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"),
              t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"),
              t.querySelectorAll("[id~=" + F + "-]").length || L.push("~="),
              t.querySelectorAll(":checked").length || L.push(":checked"),
              t.querySelectorAll("a#" + F + "+*").length || L.push(".#.+[+~]")
          }),
          o(function(t) {
              var e = i.createElement("input");
              e.setAttribute("type", "hidden"),
              t.appendChild(e).setAttribute("name", "D"),
              t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="),
              t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
              t.querySelectorAll("*,:x"),
              L.push(",.*:")
          })),
          (w.matchesSelector = vt.test(H = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(t) {
              w.disconnectedMatch = H.call(t, "div"),
              H.call(t, "[s!='']:x"),
              q.push("!=", st)
          }),
          L = L.length && new RegExp(L.join("|")),
          q = q.length && new RegExp(q.join("|")),
          e = vt.test(I.compareDocumentPosition),
          P = e || vt.test(I.contains) ? function(t, e) {
              var n = 9 === t.nodeType ? t.documentElement : t
                , i = e && e.parentNode;
              return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
          }
          : function(t, e) {
              if (e)
                  for (; e = e.parentNode; )
                      if (e === t)
                          return !0;
              return !1
          }
          ,
          V = e ? function(t, e) {
              if (t === e)
                  return D = !0,
                  0;
              var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
              return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
              1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === U && P(U, t) ? -1 : e === i || e.ownerDocument === U && P(U, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
          }
          : function(t, e) {
              if (t === e)
                  return D = !0,
                  0;
              var n, o = 0, r = t.parentNode, a = e.parentNode, l = [t], u = [e];
              if (!r || !a)
                  return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : A ? tt(A, t) - tt(A, e) : 0;
              if (r === a)
                  return s(t, e);
              for (n = t; n = n.parentNode; )
                  l.unshift(n);
              for (n = e; n = n.parentNode; )
                  u.unshift(n);
              for (; l[o] === u[o]; )
                  o++;
              return o ? s(l[o], u[o]) : l[o] === U ? -1 : u[o] === U ? 1 : 0
          }
          ,
          i) : O
      }
      ,
      e.matches = function(t, n) {
          return e(t, null, null, n)
      }
      ,
      e.matchesSelector = function(t, n) {
          if ((t.ownerDocument || t) !== O && j(t),
          n = n.replace(ft, "='$1']"),
          w.matchesSelector && R && (!q || !q.test(n)) && (!L || !L.test(n)))
              try {
                  var i = H.call(t, n);
                  if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                      return i
              } catch (o) {}
          return e(n, O, null, [t]).length > 0
      }
      ,
      e.contains = function(t, e) {
          return (t.ownerDocument || t) !== O && j(t),
          P(t, e)
      }
      ,
      e.attr = function(t, e) {
          (t.ownerDocument || t) !== O && j(t);
          var n = T.attrHandle[e.toLowerCase()]
            , i = n && X.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0;
          return void 0 !== i ? i : w.attributes || !R ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }
      ,
      e.error = function(t) {
          throw new Error("Syntax error, unrecognized expression: " + t)
      }
      ,
      e.uniqueSort = function(t) {
          var e, n = [], i = 0, o = 0;
          if (D = !w.detectDuplicates,
          A = !w.sortStable && t.slice(0),
          t.sort(V),
          D) {
              for (; e = t[o++]; )
                  e === t[o] && (i = n.push(o));
              for (; i--; )
                  t.splice(n[i], 1)
          }
          return A = null,
          t
      }
      ,
      C = e.getText = function(t) {
          var e, n = "", i = 0, o = t.nodeType;
          if (o) {
              if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof t.textContent)
                      return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling)
                      n += C(t)
              } else if (3 === o || 4 === o)
                  return t.nodeValue
          } else
              for (; e = t[i++]; )
                  n += C(e);
          return n
      }
      ,
      T = e.selectors = {
          cacheLength: 50,
          createPseudo: i,
          match: ht,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(t) {
                  return t[1] = t[1].replace(wt, Tt),
                  t[3] = (t[3] || t[4] || t[5] || "").replace(wt, Tt),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
              },
              CHILD: function(t) {
                  return t[1] = t[1].toLowerCase(),
                  "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                  t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                  t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                  t
              },
              PSEUDO: function(t) {
                  var e, n = !t[6] && t[2];
                  return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                  t[2] = n.slice(0, e)),
                  t.slice(0, 3))
              }
          },
          filter: {
              TAG: function(t) {
                  var e = t.replace(wt, Tt).toLowerCase();
                  return "*" === t ? function() {
                      return !0
                  }
                  : function(t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e
                  }
              },
              CLASS: function(t) {
                  var e = B[t + " "];
                  return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                      return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                  })
              },
              ATTR: function(t, n, i) {
                  return function(o) {
                      var r = e.attr(o, t);
                      return null == r ? "!=" === n : !n || (r += "",
                      "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                  }
              },
              CHILD: function(t, e, n, i, o) {
                  var r = "nth" !== t.slice(0, 3)
                    , s = "last" !== t.slice(-4)
                    , a = "of-type" === e;
                  return 1 === i && 0 === o ? function(t) {
                      return !!t.parentNode
                  }
                  : function(e, n, l) {
                      var u, c, f, p, d, h, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                      if (m) {
                          if (r) {
                              for (; g; ) {
                                  for (f = e; f = f[g]; )
                                      if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                          return !1;
                                  h = g = "only" === t && !h && "nextSibling"
                              }
                              return !0
                          }
                          if (h = [s ? m.firstChild : m.lastChild],
                          s && y) {
                              for (c = m[F] || (m[F] = {}),
                              u = c[t] || [],
                              d = u[0] === W && u[1],
                              p = u[0] === W && u[2],
                              f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop(); )
                                  if (1 === f.nodeType && ++p && f === e) {
                                      c[t] = [W, d, p];
                                      break
                                  }
                          } else if (y && (u = (e[F] || (e[F] = {}))[t]) && u[0] === W)
                              p = u[1];
                          else
                              for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[F] || (f[F] = {}))[t] = [W, p]),
                              f !== e)); )
                                  ;
                          return p -= o,
                          p === i || p % i === 0 && p / i >= 0
                      }
                  }
              },
              PSEUDO: function(t, n) {
                  var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                  return r[F] ? r(n) : r.length > 1 ? (o = [t, t, "", n],
                  T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                      for (var i, o = r(t, n), s = o.length; s--; )
                          i = tt(t, o[s]),
                          t[i] = !(e[i] = o[s])
                  }) : function(t) {
                      return r(t, 0, o)
                  }
                  ) : r
              }
          },
          pseudos: {
              not: i(function(t) {
                  var e = []
                    , n = []
                    , o = S(t.replace(lt, "$1"));
                  return o[F] ? i(function(t, e, n, i) {
                      for (var r, s = o(t, null, i, []), a = t.length; a--; )
                          (r = s[a]) && (t[a] = !(e[a] = r))
                  }) : function(t, i, r) {
                      return e[0] = t,
                      o(e, null, r, n),
                      e[0] = null,
                      !n.pop()
                  }
              }),
              has: i(function(t) {
                  return function(n) {
                      return e(t, n).length > 0
                  }
              }),
              contains: i(function(t) {
                  return t = t.replace(wt, Tt),
                  function(e) {
                      return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                  }
              }),
              lang: i(function(t) {
                  return dt.test(t || "") || e.error("unsupported lang: " + t),
                  t = t.replace(wt, Tt).toLowerCase(),
                  function(e) {
                      var n;
                      do
                          if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                              return n = n.toLowerCase(),
                              n === t || 0 === n.indexOf(t + "-");
                      while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1
                  }
              }),
              target: function(e) {
                  var n = t.location && t.location.hash;
                  return n && n.slice(1) === e.id
              },
              root: function(t) {
                  return t === I
              },
              focus: function(t) {
                  return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
              },
              enabled: function(t) {
                  return t.disabled === !1
              },
              disabled: function(t) {
                  return t.disabled === !0
              },
              checked: function(t) {
                  var e = t.nodeName.toLowerCase();
                  return "input" === e && !!t.checked || "option" === e && !!t.selected
              },
              selected: function(t) {
                  return t.parentNode && t.parentNode.selectedIndex,
                  t.selected === !0
              },
              empty: function(t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                      if (t.nodeType < 6)
                          return !1;
                  return !0
              },
              parent: function(t) {
                  return !T.pseudos.empty(t)
              },
              header: function(t) {
                  return mt.test(t.nodeName)
              },
              input: function(t) {
                  return gt.test(t.nodeName)
              },
              button: function(t) {
                  var e = t.nodeName.toLowerCase();
                  return "input" === e && "button" === t.type || "button" === e
              },
              text: function(t) {
                  var e;
                  return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
              },
              first: u(function() {
                  return [0]
              }),
              last: u(function(t, e) {
                  return [e - 1]
              }),
              eq: u(function(t, e, n) {
                  return [n < 0 ? n + e : n]
              }),
              even: u(function(t, e) {
                  for (var n = 0; n < e; n += 2)
                      t.push(n);
                  return t
              }),
              odd: u(function(t, e) {
                  for (var n = 1; n < e; n += 2)
                      t.push(n);
                  return t
              }),
              lt: u(function(t, e, n) {
                  for (var i = n < 0 ? n + e : n; --i >= 0; )
                      t.push(i);
                  return t
              }),
              gt: u(function(t, e, n) {
                  for (var i = n < 0 ? n + e : n; ++i < e; )
                      t.push(i);
                  return t
              })
          }
      },
      T.pseudos.nth = T.pseudos.eq;
      for (x in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      })
          T.pseudos[x] = a(x);
      for (x in {
          submit: !0,
          reset: !0
      })
          T.pseudos[x] = l(x);
      return f.prototype = T.filters = T.pseudos,
      T.setFilters = new f,
      E = e.tokenize = function(t, n) {
          var i, o, r, s, a, l, u, c = _[t + " "];
          if (c)
              return n ? 0 : c.slice(0);
          for (a = t,
          l = [],
          u = T.preFilter; a; ) {
              i && !(o = ut.exec(a)) || (o && (a = a.slice(o[0].length) || a),
              l.push(r = [])),
              i = !1,
              (o = ct.exec(a)) && (i = o.shift(),
              r.push({
                  value: i,
                  type: o[0].replace(lt, " ")
              }),
              a = a.slice(i.length));
              for (s in T.filter)
                  !(o = ht[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(),
                  r.push({
                      value: i,
                      type: s,
                      matches: o
                  }),
                  a = a.slice(i.length));
              if (!i)
                  break
          }
          return n ? a.length : a ? e.error(t) : _(t, l).slice(0)
      }
      ,
      S = e.compile = function(t, e) {
          var n, i = [], o = [], r = z[t + " "];
          if (!r) {
              for (e || (e = E(t)),
              n = e.length; n--; )
                  r = y(e[n]),
                  r[F] ? i.push(r) : o.push(r);
              r = z(t, b(o, i)),
              r.selector = t
          }
          return r
      }
      ,
      N = e.select = function(t, e, n, i) {
          var o, r, s, a, l, u = "function" == typeof t && t, f = !i && E(t = u.selector || t);
          if (n = n || [],
          1 === f.length) {
              if (r = f[0] = f[0].slice(0),
              r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && R && T.relative[r[1].type]) {
                  if (e = (T.find.ID(s.matches[0].replace(wt, Tt), e) || [])[0],
                  !e)
                      return n;
                  u && (e = e.parentNode),
                  t = t.slice(r.shift().value.length)
              }
              for (o = ht.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o],
              !T.relative[a = s.type]); )
                  if ((l = T.find[a]) && (i = l(s.matches[0].replace(wt, Tt), bt.test(r[0].type) && c(e.parentNode) || e))) {
                      if (r.splice(o, 1),
                      t = i.length && p(r),
                      !t)
                          return K.apply(n, i),
                          n;
                      break
                  }
          }
          return (u || S(t, f))(i, e, !R, n, bt.test(t) && c(e.parentNode) || e),
          n
      }
      ,
      w.sortStable = F.split("").sort(V).join("") === F,
      w.detectDuplicates = !!D,
      j(),
      w.sortDetached = o(function(t) {
          return 1 & t.compareDocumentPosition(O.createElement("div"))
      }),
      o(function(t) {
          return t.innerHTML = "<a href='#'></a>",
          "#" === t.firstChild.getAttribute("href")
      }) || r("type|href|height|width", function(t, e, n) {
          if (!n)
              return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }),
      w.attributes && o(function(t) {
          return t.innerHTML = "<input/>",
          t.firstChild.setAttribute("value", ""),
          "" === t.firstChild.getAttribute("value")
      }) || r("value", function(t, e, n) {
          if (!n && "input" === t.nodeName.toLowerCase())
              return t.defaultValue
      }),
      o(function(t) {
          return null == t.getAttribute("disabled")
      }) || r(et, function(t, e, n) {
          var i;
          if (!n)
              return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }),
      e
  }(t);
  J.find = ot,
  J.expr = ot.selectors,
  J.expr[":"] = J.expr.pseudos,
  J.unique = ot.uniqueSort,
  J.text = ot.getText,
  J.isXMLDoc = ot.isXML,
  J.contains = ot.contains;
  var rt = J.expr.match.needsContext
    , st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
    , at = /^.[^:#\[\.,]*$/;
  J.filter = function(t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType ? J.find.matchesSelector(i, t) ? [i] : [] : J.find.matches(t, J.grep(e, function(t) {
          return 1 === t.nodeType
      }))
  }
  ,
  J.fn.extend({
      find: function(t) {
          var e, n = this.length, i = [], o = this;
          if ("string" != typeof t)
              return this.pushStack(J(t).filter(function() {
                  for (e = 0; e < n; e++)
                      if (J.contains(o[e], this))
                          return !0
              }));
          for (e = 0; e < n; e++)
              J.find(t, o[e], i);
          return i = this.pushStack(n > 1 ? J.unique(i) : i),
          i.selector = this.selector ? this.selector + " " + t : t,
          i
      },
      filter: function(t) {
          return this.pushStack(i(this, t || [], !1))
      },
      not: function(t) {
          return this.pushStack(i(this, t || [], !0))
      },
      is: function(t) {
          return !!i(this, "string" == typeof t && rt.test(t) ? J(t) : t || [], !1).length
      }
  });
  var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = J.fn.init = function(t, e) {
      var n, i;
      if (!t)
          return this;
      if ("string" == typeof t) {
          if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t),
          !n || !n[1] && e)
              return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
          if (n[1]) {
              if (e = e instanceof J ? e[0] : e,
              J.merge(this, J.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)),
              st.test(n[1]) && J.isPlainObject(e))
                  for (n in e)
                      J.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
              return this
          }
          return i = Z.getElementById(n[2]),
          i && i.parentNode && (this.length = 1,
          this[0] = i),
          this.context = Z,
          this.selector = t,
          this
      }
      return t.nodeType ? (this.context = this[0] = t,
      this.length = 1,
      this) : J.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector,
      this.context = t.context),
      J.makeArray(t, this))
  }
  ;
  ct.prototype = J.fn,
  lt = J(Z);
  var ft = /^(?:parents|prev(?:Until|All))/
    , pt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
  };
  J.extend({
      dir: function(t, e, n) {
          for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
              if (1 === t.nodeType) {
                  if (o && J(t).is(n))
                      break;
                  i.push(t)
              }
          return i
      },
      sibling: function(t, e) {
          for (var n = []; t; t = t.nextSibling)
              1 === t.nodeType && t !== e && n.push(t);
          return n
      }
  }),
  J.fn.extend({
      has: function(t) {
          var e = J(t, this)
            , n = e.length;
          return this.filter(function() {
              for (var t = 0; t < n; t++)
                  if (J.contains(this, e[t]))
                      return !0
          })
      },
      closest: function(t, e) {
          for (var n, i = 0, o = this.length, r = [], s = rt.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; i < o; i++)
              for (n = this[i]; n && n !== e; n = n.parentNode)
                  if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, t))) {
                      r.push(n);
                      break
                  }
          return this.pushStack(r.length > 1 ? J.unique(r) : r)
      },
      index: function(t) {
          return t ? "string" == typeof t ? V.call(J(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(t, e) {
          return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
      },
      addBack: function(t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
  }),
  J.each({
      parent: function(t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null
      },
      parents: function(t) {
          return J.dir(t, "parentNode")
      },
      parentsUntil: function(t, e, n) {
          return J.dir(t, "parentNode", n)
      },
      next: function(t) {
          return o(t, "nextSibling")
      },
      prev: function(t) {
          return o(t, "previousSibling")
      },
      nextAll: function(t) {
          return J.dir(t, "nextSibling")
      },
      prevAll: function(t) {
          return J.dir(t, "previousSibling")
      },
      nextUntil: function(t, e, n) {
          return J.dir(t, "nextSibling", n)
      },
      prevUntil: function(t, e, n) {
          return J.dir(t, "previousSibling", n)
      },
      siblings: function(t) {
          return J.sibling((t.parentNode || {}).firstChild, t)
      },
      children: function(t) {
          return J.sibling(t.firstChild)
      },
      contents: function(t) {
          return t.contentDocument || J.merge([], t.childNodes)
      }
  }, function(t, e) {
      J.fn[t] = function(n, i) {
          var o = J.map(this, e, n);
          return "Until" !== t.slice(-5) && (i = n),
          i && "string" == typeof i && (o = J.filter(i, o)),
          this.length > 1 && (pt[t] || J.unique(o),
          ft.test(t) && o.reverse()),
          this.pushStack(o)
      }
  });
  var dt = /\S+/g
    , ht = {};
  J.Callbacks = function(t) {
      t = "string" == typeof t ? ht[t] || r(t) : J.extend({}, t);
      var e, n, i, o, s, a, l = [], u = !t.once && [], c = function(r) {
          for (e = t.memory && r,
          n = !0,
          a = o || 0,
          o = 0,
          s = l.length,
          i = !0; l && a < s; a++)
              if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                  e = !1;
                  break
              }
          i = !1,
          l && (u ? u.length && c(u.shift()) : e ? l = [] : f.disable())
      }, f = {
          add: function() {
              if (l) {
                  var n = l.length;
                  !function r(e) {
                      J.each(e, function(e, n) {
                          var i = J.type(n);
                          "function" === i ? t.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                      })
                  }(arguments),
                  i ? s = l.length : e && (o = n,
                  c(e))
              }
              return this
          },
          remove: function() {
              return l && J.each(arguments, function(t, e) {
                  for (var n; (n = J.inArray(e, l, n)) > -1; )
                      l.splice(n, 1),
                      i && (n <= s && s--,
                      n <= a && a--)
              }),
              this
          },
          has: function(t) {
              return t ? J.inArray(t, l) > -1 : !(!l || !l.length)
          },
          empty: function() {
              return l = [],
              s = 0,
              this
          },
          disable: function() {
              return l = u = e = void 0,
              this
          },
          disabled: function() {
              return !l
          },
          lock: function() {
              return u = void 0,
              e || f.disable(),
              this
          },
          locked: function() {
              return !u
          },
          fireWith: function(t, e) {
              return !l || n && !u || (e = e || [],
              e = [t, e.slice ? e.slice() : e],
              i ? u.push(e) : c(e)),
              this
          },
          fire: function() {
              return f.fireWith(this, arguments),
              this
          },
          fired: function() {
              return !!n
          }
      };
      return f
  }
  ,
  J.extend({
      Deferred: function(t) {
          var e = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]]
            , n = "pending"
            , i = {
              state: function() {
                  return n
              },
              always: function() {
                  return o.done(arguments).fail(arguments),
                  this
              },
              then: function() {
                  var t = arguments;
                  return J.Deferred(function(n) {
                      J.each(e, function(e, r) {
                          var s = J.isFunction(t[e]) && t[e];
                          o[r[1]](function() {
                              var t = s && s.apply(this, arguments);
                              t && J.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                          })
                      }),
                      t = null
                  }).promise()
              },
              promise: function(t) {
                  return null != t ? J.extend(t, i) : i
              }
          }
            , o = {};
          return i.pipe = i.then,
          J.each(e, function(t, r) {
              var s = r[2]
                , a = r[3];
              i[r[1]] = s.add,
              a && s.add(function() {
                  n = a
              }, e[1 ^ t][2].disable, e[2][2].lock),
              o[r[0]] = function() {
                  return o[r[0] + "With"](this === o ? i : this, arguments),
                  this
              }
              ,
              o[r[0] + "With"] = s.fireWith
          }),
          i.promise(o),
          t && t.call(o, o),
          o
      },
      when: function(t) {
          var e, n, i, o = 0, r = B.call(arguments), s = r.length, a = 1 !== s || t && J.isFunction(t.promise) ? s : 0, l = 1 === a ? t : J.Deferred(), u = function(t, n, i) {
              return function(o) {
                  n[t] = this,
                  i[t] = arguments.length > 1 ? B.call(arguments) : o,
                  i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
              }
          };
          if (s > 1)
              for (e = new Array(s),
              n = new Array(s),
              i = new Array(s); o < s; o++)
                  r[o] && J.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --a;
          return a || l.resolveWith(i, r),
          l.promise()
      }
  });
  var gt;
  J.fn.ready = function(t) {
      return J.ready.promise().done(t),
      this
  }
  ,
  J.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(t) {
          t ? J.readyWait++ : J.ready(!0)
      },
      ready: function(t) {
          (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0,
          t !== !0 && --J.readyWait > 0 || (gt.resolveWith(Z, [J]),
          J.fn.triggerHandler && (J(Z).triggerHandler("ready"),
          J(Z).off("ready"))))
      }
  }),
  J.ready.promise = function(e) {
      return gt || (gt = J.Deferred(),
      "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", s, !1),
      t.addEventListener("load", s, !1))),
      gt.promise(e)
  }
  ,
  J.ready.promise();
  var mt = J.access = function(t, e, n, i, o, r, s) {
      var a = 0
        , l = t.length
        , u = null == n;
      if ("object" === J.type(n)) {
          o = !0;
          for (a in n)
              J.access(t, e, a, n[a], !0, r, s)
      } else if (void 0 !== i && (o = !0,
      J.isFunction(i) || (s = !0),
      u && (s ? (e.call(t, i),
      e = null) : (u = e,
      e = function(t, e, n) {
          return u.call(J(t), n)
      }
      )),
      e))
          for (; a < l; a++)
              e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
      return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
  }
  ;
  J.acceptData = function(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
  }
  ,
  a.uid = 1,
  a.accepts = J.acceptData,
  a.prototype = {
      key: function(t) {
          if (!a.accepts(t))
              return 0;
          var e = {}
            , n = t[this.expando];
          if (!n) {
              n = a.uid++;
              try {
                  e[this.expando] = {
                      value: n
                  },
                  Object.defineProperties(t, e)
              } catch (i) {
                  e[this.expando] = n,
                  J.extend(t, e)
              }
          }
          return this.cache[n] || (this.cache[n] = {}),
          n
      },
      set: function(t, e, n) {
          var i, o = this.key(t), r = this.cache[o];
          if ("string" == typeof e)
              r[e] = n;
          else if (J.isEmptyObject(r))
              J.extend(this.cache[o], e);
          else
              for (i in e)
                  r[i] = e[i];
          return r
      },
      get: function(t, e) {
          var n = this.cache[this.key(t)];
          return void 0 === e ? n : n[e]
      },
      access: function(t, e, n) {
          var i;
          return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e),
          void 0 !== i ? i : this.get(t, J.camelCase(e))) : (this.set(t, e, n),
          void 0 !== n ? n : e)
      },
      remove: function(t, e) {
          var n, i, o, r = this.key(t), s = this.cache[r];
          if (void 0 === e)
              this.cache[r] = {};
          else {
              J.isArray(e) ? i = e.concat(e.map(J.camelCase)) : (o = J.camelCase(e),
              e in s ? i = [e, o] : (i = o,
              i = i in s ? [i] : i.match(dt) || [])),
              n = i.length;
              for (; n--; )
                  delete s[i[n]]
          }
      },
      hasData: function(t) {
          return !J.isEmptyObject(this.cache[t[this.expando]] || {})
      },
      discard: function(t) {
          t[this.expando] && delete this.cache[t[this.expando]]
      }
  };
  var vt = new a
    , yt = new a
    , bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , xt = /([A-Z])/g;
  J.extend({
      hasData: function(t) {
          return yt.hasData(t) || vt.hasData(t)
      },
      data: function(t, e, n) {
          return yt.access(t, e, n)
      },
      removeData: function(t, e) {
          yt.remove(t, e)
      },
      _data: function(t, e, n) {
          return vt.access(t, e, n)
      },
      _removeData: function(t, e) {
          vt.remove(t, e)
      }
  }),
  J.fn.extend({
      data: function(t, e) {
          var n, i, o, r = this[0], s = r && r.attributes;
          if (void 0 === t) {
              if (this.length && (o = yt.get(r),
              1 === r.nodeType && !vt.get(r, "hasDataAttrs"))) {
                  for (n = s.length; n--; )
                      s[n] && (i = s[n].name,
                      0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)),
                      l(r, i, o[i])));
                  vt.set(r, "hasDataAttrs", !0)
              }
              return o
          }
          return "object" == typeof t ? this.each(function() {
              yt.set(this, t)
          }) : mt(this, function(e) {
              var n, i = J.camelCase(t);
              if (r && void 0 === e) {
                  if (n = yt.get(r, t),
                  void 0 !== n)
                      return n;
                  if (n = yt.get(r, i),
                  void 0 !== n)
                      return n;
                  if (n = l(r, i, void 0),
                  void 0 !== n)
                      return n
              } else
                  this.each(function() {
                      var n = yt.get(this, i);
                      yt.set(this, i, e),
                      t.indexOf("-") !== -1 && void 0 !== n && yt.set(this, t, e)
                  })
          }, null, e, arguments.length > 1, null, !0)
      },
      removeData: function(t) {
          return this.each(function() {
              yt.remove(this, t)
          })
      }
  }),
  J.extend({
      queue: function(t, e, n) {
          var i;
          if (t)
              return e = (e || "fx") + "queue",
              i = vt.get(t, e),
              n && (!i || J.isArray(n) ? i = vt.access(t, e, J.makeArray(n)) : i.push(n)),
              i || []
      },
      dequeue: function(t, e) {
          e = e || "fx";
          var n = J.queue(t, e)
            , i = n.length
            , o = n.shift()
            , r = J._queueHooks(t, e)
            , s = function() {
              J.dequeue(t, e)
          };
          "inprogress" === o && (o = n.shift(),
          i--),
          o && ("fx" === e && n.unshift("inprogress"),
          delete r.stop,
          o.call(t, s, r)),
          !i && r && r.empty.fire()
      },
      _queueHooks: function(t, e) {
          var n = e + "queueHooks";
          return vt.get(t, n) || vt.access(t, n, {
              empty: J.Callbacks("once memory").add(function() {
                  vt.remove(t, [e + "queue", n])
              })
          })
      }
  }),
  J.fn.extend({
      queue: function(t, e) {
          var n = 2;
          return "string" != typeof t && (e = t,
          t = "fx",
          n--),
          arguments.length < n ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
              var n = J.queue(this, t, e);
              J._queueHooks(this, t),
              "fx" === t && "inprogress" !== n[0] && J.dequeue(this, t)
          })
      },
      dequeue: function(t) {
          return this.each(function() {
              J.dequeue(this, t)
          })
      },
      clearQueue: function(t) {
          return this.queue(t || "fx", [])
      },
      promise: function(t, e) {
          var n, i = 1, o = J.Deferred(), r = this, s = this.length, a = function() {
              --i || o.resolveWith(r, [r])
          };
          for ("string" != typeof t && (e = t,
          t = void 0),
          t = t || "fx"; s--; )
              n = vt.get(r[s], t + "queueHooks"),
              n && n.empty && (i++,
              n.empty.add(a));
          return a(),
          o.promise(e)
      }
  });
  var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , Tt = ["Top", "Right", "Bottom", "Left"]
    , Ct = function(t, e) {
      return t = e || t,
      "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
  }
    , kt = /^(?:checkbox|radio)$/i;
  !function() {
      var t = Z.createDocumentFragment()
        , e = t.appendChild(Z.createElement("div"))
        , n = Z.createElement("input");
      n.setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      e.appendChild(n),
      G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
      e.innerHTML = "<textarea>x</textarea>",
      G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var Et = "undefined";
  G.focusinBubbles = "onfocusin"in t;
  var St = /^key/
    , Nt = /^(?:mouse|pointer|contextmenu)|click/
    , $t = /^(?:focusinfocus|focusoutblur)$/
    , At = /^([^.]*)(?:\.(.+)|)$/;
  J.event = {
      global: {},
      add: function(t, e, n, i, o) {
          var r, s, a, l, u, c, f, p, d, h, g, m = vt.get(t);
          if (m)
              for (n.handler && (r = n,
              n = r.handler,
              o = r.selector),
              n.guid || (n.guid = J.guid++),
              (l = m.events) || (l = m.events = {}),
              (s = m.handle) || (s = m.handle = function(e) {
                  return typeof J !== Et && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
              }
              ),
              e = (e || "").match(dt) || [""],
              u = e.length; u--; )
                  a = At.exec(e[u]) || [],
                  d = g = a[1],
                  h = (a[2] || "").split(".").sort(),
                  d && (f = J.event.special[d] || {},
                  d = (o ? f.delegateType : f.bindType) || d,
                  f = J.event.special[d] || {},
                  c = J.extend({
                      type: d,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && J.expr.match.needsContext.test(o),
                      namespace: h.join(".")
                  }, r),
                  (p = l[d]) || (p = l[d] = [],
                  p.delegateCount = 0,
                  f.setup && f.setup.call(t, i, h, s) !== !1 || t.addEventListener && t.addEventListener(d, s, !1)),
                  f.add && (f.add.call(t, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                  o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                  J.event.global[d] = !0)
      },
      remove: function(t, e, n, i, o) {
          var r, s, a, l, u, c, f, p, d, h, g, m = vt.hasData(t) && vt.get(t);
          if (m && (l = m.events)) {
              for (e = (e || "").match(dt) || [""],
              u = e.length; u--; )
                  if (a = At.exec(e[u]) || [],
                  d = g = a[1],
                  h = (a[2] || "").split(".").sort(),
                  d) {
                      for (f = J.event.special[d] || {},
                      d = (i ? f.delegateType : f.bindType) || d,
                      p = l[d] || [],
                      a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      s = r = p.length; r--; )
                          c = p[r],
                          !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1),
                          c.selector && p.delegateCount--,
                          f.remove && f.remove.call(t, c));
                      s && !p.length && (f.teardown && f.teardown.call(t, h, m.handle) !== !1 || J.removeEvent(t, d, m.handle),
                      delete l[d])
                  } else
                      for (d in l)
                          J.event.remove(t, d + e[u], n, i, !0);
              J.isEmptyObject(l) && (delete m.handle,
              vt.remove(t, "events"))
          }
      },
      trigger: function(e, n, i, o) {
          var r, s, a, l, u, c, f, p = [i || Z], d = Q.call(e, "type") ? e.type : e, h = Q.call(e, "namespace") ? e.namespace.split(".") : [];
          if (s = a = i = i || Z,
          3 !== i.nodeType && 8 !== i.nodeType && !$t.test(d + J.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."),
          d = h.shift(),
          h.sort()),
          u = d.indexOf(":") < 0 && "on" + d,
          e = e[J.expando] ? e : new J.Event(d,"object" == typeof e && e),
          e.isTrigger = o ? 2 : 3,
          e.namespace = h.join("."),
          e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
          e.result = void 0,
          e.target || (e.target = i),
          n = null == n ? [e] : J.makeArray(n, [e]),
          f = J.event.special[d] || {},
          o || !f.trigger || f.trigger.apply(i, n) !== !1)) {
              if (!o && !f.noBubble && !J.isWindow(i)) {
                  for (l = f.delegateType || d,
                  $t.test(l + d) || (s = s.parentNode); s; s = s.parentNode)
                      p.push(s),
                      a = s;
                  a === (i.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || t)
              }
              for (r = 0; (s = p[r++]) && !e.isPropagationStopped(); )
                  e.type = r > 1 ? l : f.bindType || d,
                  c = (vt.get(s, "events") || {})[e.type] && vt.get(s, "handle"),
                  c && c.apply(s, n),
                  c = u && s[u],
                  c && c.apply && J.acceptData(s) && (e.result = c.apply(s, n),
                  e.result === !1 && e.preventDefault());
              return e.type = d,
              o || e.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !J.acceptData(i) || u && J.isFunction(i[d]) && !J.isWindow(i) && (a = i[u],
              a && (i[u] = null),
              J.event.triggered = d,
              i[d](),
              J.event.triggered = void 0,
              a && (i[u] = a)),
              e.result
          }
      },
      dispatch: function(t) {
          t = J.event.fix(t);
          var e, n, i, o, r, s = [], a = B.call(arguments), l = (vt.get(this, "events") || {})[t.type] || [], u = J.event.special[t.type] || {};
          if (a[0] = t,
          t.delegateTarget = this,
          !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
              for (s = J.event.handlers.call(this, t, l),
              e = 0; (o = s[e++]) && !t.isPropagationStopped(); )
                  for (t.currentTarget = o.elem,
                  n = 0; (r = o.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                      t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r,
                      t.data = r.data,
                      i = ((J.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a),
                      void 0 !== i && (t.result = i) === !1 && (t.preventDefault(),
                      t.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, t),
              t.result
          }
      },
      handlers: function(t, e) {
          var n, i, o, r, s = [], a = e.delegateCount, l = t.target;
          if (a && l.nodeType && (!t.button || "click" !== t.type))
              for (; l !== this; l = l.parentNode || this)
                  if (l.disabled !== !0 || "click" !== t.type) {
                      for (i = [],
                      n = 0; n < a; n++)
                          r = e[n],
                          o = r.selector + " ",
                          void 0 === i[o] && (i[o] = r.needsContext ? J(o, this).index(l) >= 0 : J.find(o, this, null, [l]).length),
                          i[o] && i.push(r);
                      i.length && s.push({
                          elem: l,
                          handlers: i
                      })
                  }
          return a < e.length && s.push({
              elem: this,
              handlers: e.slice(a)
          }),
          s
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(t, e) {
              return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
              t
          }
      },
      mouseHooks: {
          props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function(t, e) {
              var n, i, o, r = e.button;
              return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Z,
              i = n.documentElement,
              o = n.body,
              t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0),
              t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
              t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
              t
          }
      },
      fix: function(t) {
          if (t[J.expando])
              return t;
          var e, n, i, o = t.type, r = t, s = this.fixHooks[o];
          for (s || (this.fixHooks[o] = s = Nt.test(o) ? this.mouseHooks : St.test(o) ? this.keyHooks : {}),
          i = s.props ? this.props.concat(s.props) : this.props,
          t = new J.Event(r),
          e = i.length; e--; )
              n = i[e],
              t[n] = r[n];
          return t.target || (t.target = Z),
          3 === t.target.nodeType && (t.target = t.target.parentNode),
          s.filter ? s.filter(t, r) : t
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== f() && this.focus)
                      return this.focus(),
                      !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === f() && this.blur)
                      return this.blur(),
                      !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && J.nodeName(this, "input"))
                      return this.click(),
                      !1
              },
              _default: function(t) {
                  return J.nodeName(t.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(t) {
                  void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
              }
          }
      },
      simulate: function(t, e, n, i) {
          var o = J.extend(new J.Event, n, {
              type: t,
              isSimulated: !0,
              originalEvent: {}
          });
          i ? J.event.trigger(o, null, e) : J.event.dispatch.call(e, o),
          o.isDefaultPrevented() && n.preventDefault()
      }
  },
  J.removeEvent = function(t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n, !1)
  }
  ,
  J.Event = function(t, e) {
      return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t,
      this.type = t.type,
      this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : c) : this.type = t,
      e && J.extend(this, e),
      this.timeStamp = t && t.timeStamp || J.now(),
      void (this[J.expando] = !0)) : new J.Event(t,e)
  }
  ,
  J.Event.prototype = {
      isDefaultPrevented: c,
      isPropagationStopped: c,
      isImmediatePropagationStopped: c,
      preventDefault: function() {
          var t = this.originalEvent;
          this.isDefaultPrevented = u,
          t && t.preventDefault && t.preventDefault()
      },
      stopPropagation: function() {
          var t = this.originalEvent;
          this.isPropagationStopped = u,
          t && t.stopPropagation && t.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var t = this.originalEvent;
          this.isImmediatePropagationStopped = u,
          t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
          this.stopPropagation()
      }
  },
  J.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(t, e) {
      J.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function(t) {
              var n, i = this, o = t.relatedTarget, r = t.handleObj;
              return o && (o === i || J.contains(i, o)) || (t.type = r.origType,
              n = r.handler.apply(this, arguments),
              t.type = e),
              n
          }
      }
  }),
  G.focusinBubbles || J.each({
      focus: "focusin",
      blur: "focusout"
  }, function(t, e) {
      var n = function(t) {
          J.event.simulate(e, t.target, J.event.fix(t), !0)
      };
      J.event.special[e] = {
          setup: function() {
              var i = this.ownerDocument || this
                , o = vt.access(i, e);
              o || i.addEventListener(t, n, !0),
              vt.access(i, e, (o || 0) + 1)
          },
          teardown: function() {
              var i = this.ownerDocument || this
                , o = vt.access(i, e) - 1;
              o ? vt.access(i, e, o) : (i.removeEventListener(t, n, !0),
              vt.remove(i, e))
          }
      }
  }),
  J.fn.extend({
      on: function(t, e, n, i, o) {
          var r, s;
          if ("object" == typeof t) {
              "string" != typeof e && (n = n || e,
              e = void 0);
              for (s in t)
                  this.on(s, e, n, t[s], o);
              return this
          }
          if (null == n && null == i ? (i = e,
          n = e = void 0) : null == i && ("string" == typeof e ? (i = n,
          n = void 0) : (i = n,
          n = e,
          e = void 0)),
          i === !1)
              i = c;
          else if (!i)
              return this;
          return 1 === o && (r = i,
          i = function(t) {
              return J().off(t),
              r.apply(this, arguments)
          }
          ,
          i.guid = r.guid || (r.guid = J.guid++)),
          this.each(function() {
              J.event.add(this, t, i, n, e)
          })
      },
      one: function(t, e, n, i) {
          return this.on(t, e, n, i, 1)
      },
      off: function(t, e, n) {
          var i, o;
          if (t && t.preventDefault && t.handleObj)
              return i = t.handleObj,
              J(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
              this;
          if ("object" == typeof t) {
              for (o in t)
                  this.off(o, e, t[o]);
              return this
          }
          return e !== !1 && "function" != typeof e || (n = e,
          e = void 0),
          n === !1 && (n = c),
          this.each(function() {
              J.event.remove(this, t, n, e)
          })
      },
      trigger: function(t, e) {
          return this.each(function() {
              J.event.trigger(t, e, this)
          })
      },
      triggerHandler: function(t, e) {
          var n = this[0];
          if (n)
              return J.event.trigger(t, e, n, !0)
      }
  });
  var Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
    , jt = /<([\w:]+)/
    , Ot = /<|&#?\w+;/
    , It = /<(?:script|style|link)/i
    , Rt = /checked\s*(?:[^=]|=\s*.checked.)/i
    , Lt = /^$|\/(?:java|ecma)script/i
    , qt = /^true\/(.*)/
    , Ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
    , Pt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
  };
  Pt.optgroup = Pt.option,
  Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead,
  Pt.th = Pt.td,
  J.extend({
      clone: function(t, e, n) {
          var i, o, r, s, a = t.cloneNode(!0), l = J.contains(t.ownerDocument, t);
          if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
              for (s = v(a),
              r = v(t),
              i = 0,
              o = r.length; i < o; i++)
                  y(r[i], s[i]);
          if (e)
              if (n)
                  for (r = r || v(t),
                  s = s || v(a),
                  i = 0,
                  o = r.length; i < o; i++)
                      m(r[i], s[i]);
              else
                  m(t, a);
          return s = v(a, "script"),
          s.length > 0 && g(s, !l && v(t, "script")),
          a
      },
      buildFragment: function(t, e, n, i) {
          for (var o, r, s, a, l, u, c = e.createDocumentFragment(), f = [], p = 0, d = t.length; p < d; p++)
              if (o = t[p],
              o || 0 === o)
                  if ("object" === J.type(o))
                      J.merge(f, o.nodeType ? [o] : o);
                  else if (Ot.test(o)) {
                      for (r = r || c.appendChild(e.createElement("div")),
                      s = (jt.exec(o) || ["", ""])[1].toLowerCase(),
                      a = Pt[s] || Pt._default,
                      r.innerHTML = a[1] + o.replace(Dt, "<$1></$2>") + a[2],
                      u = a[0]; u--; )
                          r = r.lastChild;
                      J.merge(f, r.childNodes),
                      r = c.firstChild,
                      r.textContent = ""
                  } else
                      f.push(e.createTextNode(o));
          for (c.textContent = "",
          p = 0; o = f[p++]; )
              if ((!i || J.inArray(o, i) === -1) && (l = J.contains(o.ownerDocument, o),
              r = v(c.appendChild(o), "script"),
              l && g(r),
              n))
                  for (u = 0; o = r[u++]; )
                      Lt.test(o.type || "") && n.push(o);
          return c
      },
      cleanData: function(t) {
          for (var e, n, i, o, r = J.event.special, s = 0; void 0 !== (n = t[s]); s++) {
              if (J.acceptData(n) && (o = n[vt.expando],
              o && (e = vt.cache[o]))) {
                  if (e.events)
                      for (i in e.events)
                          r[i] ? J.event.remove(n, i) : J.removeEvent(n, i, e.handle);
                  vt.cache[o] && delete vt.cache[o]
              }
              delete yt.cache[n[yt.expando]]
          }
      }
  }),
  J.fn.extend({
      text: function(t) {
          return mt(this, function(t) {
              return void 0 === t ? J.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
              })
          }, null, t, arguments.length)
      },
      append: function() {
          return this.domManip(arguments, function(t) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var e = p(this, t);
                  e.appendChild(t)
              }
          })
      },
      prepend: function() {
          return this.domManip(arguments, function(t) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var e = p(this, t);
                  e.insertBefore(t, e.firstChild)
              }
          })
      },
      before: function() {
          return this.domManip(arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this)
          })
      },
      after: function() {
          return this.domManip(arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
          })
      },
      remove: function(t, e) {
          for (var n, i = t ? J.filter(t, this) : this, o = 0; null != (n = i[o]); o++)
              e || 1 !== n.nodeType || J.cleanData(v(n)),
              n.parentNode && (e && J.contains(n.ownerDocument, n) && g(v(n, "script")),
              n.parentNode.removeChild(n));
          return this
      },
      empty: function() {
          for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType && (J.cleanData(v(t, !1)),
              t.textContent = "");
          return this
      },
      clone: function(t, e) {
          return t = null != t && t,
          e = null == e ? t : e,
          this.map(function() {
              return J.clone(this, t, e)
          })
      },
      html: function(t) {
          return mt(this, function(t) {
              var e = this[0] || {}
                , n = 0
                , i = this.length;
              if (void 0 === t && 1 === e.nodeType)
                  return e.innerHTML;
              if ("string" == typeof t && !It.test(t) && !Pt[(jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                  t = t.replace(Dt, "<$1></$2>");
                  try {
                      for (; n < i; n++)
                          e = this[n] || {},
                          1 === e.nodeType && (J.cleanData(v(e, !1)),
                          e.innerHTML = t);
                      e = 0
                  } catch (o) {}
              }
              e && this.empty().append(t)
          }, null, t, arguments.length)
      },
      replaceWith: function() {
          var t = arguments[0];
          return this.domManip(arguments, function(e) {
              t = this.parentNode,
              J.cleanData(v(this)),
              t && t.replaceChild(e, this)
          }),
          t && (t.length || t.nodeType) ? this : this.remove()
      },
      detach: function(t) {
          return this.remove(t, !0)
      },
      domManip: function(t, e) {
          t = _.apply([], t);
          var n, i, o, r, s, a, l = 0, u = this.length, c = this, f = u - 1, p = t[0], g = J.isFunction(p);
          if (g || u > 1 && "string" == typeof p && !G.checkClone && Rt.test(p))
              return this.each(function(n) {
                  var i = c.eq(n);
                  g && (t[0] = p.call(this, n, i.html())),
                  i.domManip(t, e)
              });
          if (u && (n = J.buildFragment(t, this[0].ownerDocument, !1, this),
          i = n.firstChild,
          1 === n.childNodes.length && (n = i),
          i)) {
              for (o = J.map(v(n, "script"), d),
              r = o.length; l < u; l++)
                  s = n,
                  l !== f && (s = J.clone(s, !0, !0),
                  r && J.merge(o, v(s, "script"))),
                  e.call(this[l], s, l);
              if (r)
                  for (a = o[o.length - 1].ownerDocument,
                  J.map(o, h),
                  l = 0; l < r; l++)
                      s = o[l],
                      Lt.test(s.type || "") && !vt.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Ht, "")))
          }
          return this
      }
  }),
  J.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(t, e) {
      J.fn[t] = function(t) {
          for (var n, i = [], o = J(t), r = o.length - 1, s = 0; s <= r; s++)
              n = s === r ? this : this.clone(!0),
              J(o[s])[e](n),
              z.apply(i, n.get());
          return this.pushStack(i)
      }
  });
  var Ft, Ut = {}, Wt = /^margin/, Mt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$","i"), Bt = function(e) {
      return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
  };
  !function() {
      function e() {
          s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
          s.innerHTML = "",
          o.appendChild(r);
          var e = t.getComputedStyle(s, null);
          n = "1%" !== e.top,
          i = "4px" === e.width,
          o.removeChild(r)
      }
      var n, i, o = Z.documentElement, r = Z.createElement("div"), s = Z.createElement("div");
      s.style && (s.style.backgroundClip = "content-box",
      s.cloneNode(!0).style.backgroundClip = "",
      G.clearCloneStyle = "content-box" === s.style.backgroundClip,
      r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
      r.appendChild(s),
      t.getComputedStyle && J.extend(G, {
          pixelPosition: function() {
              return e(),
              n
          },
          boxSizingReliable: function() {
              return null == i && e(),
              i
          },
          reliableMarginRight: function() {
              var e, n = s.appendChild(Z.createElement("div"));
              return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
              n.style.marginRight = n.style.width = "0",
              s.style.width = "1px",
              o.appendChild(r),
              e = !parseFloat(t.getComputedStyle(n, null).marginRight),
              o.removeChild(r),
              s.removeChild(n),
              e
          }
      }))
  }(),
  J.swap = function(t, e, n, i) {
      var o, r, s = {};
      for (r in e)
          s[r] = t.style[r],
          t.style[r] = e[r];
      o = n.apply(t, i || []);
      for (r in e)
          t.style[r] = s[r];
      return o
  }
  ;
  var _t = /^(none|table(?!-c[ea]).+)/
    , zt = new RegExp("^(" + wt + ")(.*)$","i")
    , Vt = new RegExp("^([+-])=(" + wt + ")","i")
    , Yt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
  }
    , Xt = {
      letterSpacing: "0",
      fontWeight: "400"
  }
    , Qt = ["Webkit", "O", "Moz", "ms"];
  J.extend({
      cssHooks: {
          opacity: {
              get: function(t, e) {
                  if (e) {
                      var n = w(t, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          "float": "cssFloat"
      },
      style: function(t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var o, r, s, a = J.camelCase(e), l = t.style;
              return e = J.cssProps[a] || (J.cssProps[a] = C(l, a)),
              s = J.cssHooks[e] || J.cssHooks[a],
              void 0 === n ? s && "get"in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : (r = typeof n,
              "string" === r && (o = Vt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(J.css(t, e)),
              r = "number"),
              null != n && n === n && ("number" !== r || J.cssNumber[a] || (n += "px"),
              G.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
              s && "set"in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n)),
              void 0)
          }
      },
      css: function(t, e, n, i) {
          var o, r, s, a = J.camelCase(e);
          return e = J.cssProps[a] || (J.cssProps[a] = C(t.style, a)),
          s = J.cssHooks[e] || J.cssHooks[a],
          s && "get"in s && (o = s.get(t, !0, n)),
          void 0 === o && (o = w(t, e, i)),
          "normal" === o && e in Xt && (o = Xt[e]),
          "" === n || n ? (r = parseFloat(o),
          n === !0 || J.isNumeric(r) ? r || 0 : o) : o
      }
  }),
  J.each(["height", "width"], function(t, e) {
      J.cssHooks[e] = {
          get: function(t, n, i) {
              if (n)
                  return _t.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Yt, function() {
                      return S(t, e, i)
                  }) : S(t, e, i)
          },
          set: function(t, n, i) {
              var o = i && Bt(t);
              return k(t, n, i ? E(t, e, i, "border-box" === J.css(t, "boxSizing", !1, o), o) : 0)
          }
      }
  }),
  J.cssHooks.marginRight = T(G.reliableMarginRight, function(t, e) {
      if (e)
          return J.swap(t, {
              display: "inline-block"
          }, w, [t, "marginRight"])
  }),
  J.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(t, e) {
      J.cssHooks[t + e] = {
          expand: function(n) {
              for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                  o[t + Tt[i] + e] = r[i] || r[i - 2] || r[0];
              return o
          }
      },
      Wt.test(t) || (J.cssHooks[t + e].set = k)
  }),
  J.fn.extend({
      css: function(t, e) {
          return mt(this, function(t, e, n) {
              var i, o, r = {}, s = 0;
              if (J.isArray(e)) {
                  for (i = Bt(t),
                  o = e.length; s < o; s++)
                      r[e[s]] = J.css(t, e[s], !1, i);
                  return r
              }
              return void 0 !== n ? J.style(t, e, n) : J.css(t, e)
          }, t, e, arguments.length > 1)
      },
      show: function() {
          return N(this, !0)
      },
      hide: function() {
          return N(this)
      },
      toggle: function(t) {
          return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
              Ct(this) ? J(this).show() : J(this).hide()
          })
      }
  }),
  J.Tween = $,
  $.prototype = {
      constructor: $,
      init: function(t, e, n, i, o, r) {
          this.elem = t,
          this.prop = n,
          this.easing = o || "swing",
          this.options = e,
          this.start = this.now = this.cur(),
          this.end = i,
          this.unit = r || (J.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var t = $.propHooks[this.prop];
          return t && t.get ? t.get(this) : $.propHooks._default.get(this)
      },
      run: function(t) {
          var e, n = $.propHooks[this.prop];
          return this.options.duration ? this.pos = e = J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
          this.now = (this.end - this.start) * e + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : $.propHooks._default.set(this),
          this
      }
  },
  $.prototype.init.prototype = $.prototype,
  $.propHooks = {
      _default: {
          get: function(t) {
              var e;
              return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""),
              e && "auto" !== e ? e : 0) : t.elem[t.prop]
          },
          set: function(t) {
              J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
          }
      }
  },
  $.propHooks.scrollTop = $.propHooks.scrollLeft = {
      set: function(t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
  },
  J.easing = {
      linear: function(t) {
          return t
      },
      swing: function(t) {
          return .5 - Math.cos(t * Math.PI) / 2
      }
  },
  J.fx = $.prototype.init,
  J.fx.step = {};
  var Gt, Zt, Kt = /^(?:toggle|show|hide)$/, Jt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$","i"), te = /queueHooks$/, ee = [O], ne = {
      "*": [function(t, e) {
          var n = this.createTween(t, e)
            , i = n.cur()
            , o = Jt.exec(e)
            , r = o && o[3] || (J.cssNumber[t] ? "" : "px")
            , s = (J.cssNumber[t] || "px" !== r && +i) && Jt.exec(J.css(n.elem, t))
            , a = 1
            , l = 20;
          if (s && s[3] !== r) {
              r = r || s[3],
              o = o || [],
              s = +i || 1;
              do
                  a = a || ".5",
                  s /= a,
                  J.style(n.elem, t, s + r);
              while (a !== (a = n.cur() / i) && 1 !== a && --l)
          }
          return o && (s = n.start = +s || +i || 0,
          n.unit = r,
          n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]),
          n
      }
      ]
  };
  J.Animation = J.extend(R, {
      tweener: function(t, e) {
          J.isFunction(t) ? (e = t,
          t = ["*"]) : t = t.split(" ");
          for (var n, i = 0, o = t.length; i < o; i++)
              n = t[i],
              ne[n] = ne[n] || [],
              ne[n].unshift(e)
      },
      prefilter: function(t, e) {
          e ? ee.unshift(t) : ee.push(t)
      }
  }),
  J.speed = function(t, e, n) {
      var i = t && "object" == typeof t ? J.extend({}, t) : {
          complete: n || !n && e || J.isFunction(t) && t,
          duration: t,
          easing: n && e || e && !J.isFunction(e) && e
      };
      return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default,
      null != i.queue && i.queue !== !0 || (i.queue = "fx"),
      i.old = i.complete,
      i.complete = function() {
          J.isFunction(i.old) && i.old.call(this),
          i.queue && J.dequeue(this, i.queue)
      }
      ,
      i
  }
  ,
  J.fn.extend({
      fadeTo: function(t, e, n, i) {
          return this.filter(Ct).css("opacity", 0).show().end().animate({
              opacity: e
          }, t, n, i)
      },
      animate: function(t, e, n, i) {
          var o = J.isEmptyObject(t)
            , r = J.speed(e, n, i)
            , s = function() {
              var e = R(this, J.extend({}, t), r);
              (o || vt.get(this, "finish")) && e.stop(!0)
          };
          return s.finish = s,
          o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
      },
      stop: function(t, e, n) {
          var i = function(t) {
              var e = t.stop;
              delete t.stop,
              e(n)
          };
          return "string" != typeof t && (n = e,
          e = t,
          t = void 0),
          e && t !== !1 && this.queue(t || "fx", []),
          this.each(function() {
              var e = !0
                , o = null != t && t + "queueHooks"
                , r = J.timers
                , s = vt.get(this);
              if (o)
                  s[o] && s[o].stop && i(s[o]);
              else
                  for (o in s)
                      s[o] && s[o].stop && te.test(o) && i(s[o]);
              for (o = r.length; o--; )
                  r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n),
                  e = !1,
                  r.splice(o, 1));
              !e && n || J.dequeue(this, t)
          })
      },
      finish: function(t) {
          return t !== !1 && (t = t || "fx"),
          this.each(function() {
              var e, n = vt.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = J.timers, s = i ? i.length : 0;
              for (n.finish = !0,
              J.queue(this, t, []),
              o && o.stop && o.stop.call(this, !0),
              e = r.length; e--; )
                  r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                  r.splice(e, 1));
              for (e = 0; e < s; e++)
                  i[e] && i[e].finish && i[e].finish.call(this);
              delete n.finish
          })
      }
  }),
  J.each(["toggle", "show", "hide"], function(t, e) {
      var n = J.fn[e];
      J.fn[e] = function(t, i, o) {
          return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(D(e, !0), t, i, o)
      }
  }),
  J.each({
      slideDown: D("show"),
      slideUp: D("hide"),
      slideToggle: D("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(t, e) {
      J.fn[t] = function(t, n, i) {
          return this.animate(e, t, n, i)
      }
  }),
  J.timers = [],
  J.fx.tick = function() {
      var t, e = 0, n = J.timers;
      for (Gt = J.now(); e < n.length; e++)
          t = n[e],
          t() || n[e] !== t || n.splice(e--, 1);
      n.length || J.fx.stop(),
      Gt = void 0
  }
  ,
  J.fx.timer = function(t) {
      J.timers.push(t),
      t() ? J.fx.start() : J.timers.pop()
  }
  ,
  J.fx.interval = 13,
  J.fx.start = function() {
      Zt || (Zt = setInterval(J.fx.tick, J.fx.interval))
  }
  ,
  J.fx.stop = function() {
      clearInterval(Zt),
      Zt = null
  }
  ,
  J.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  },
  J.fn.delay = function(t, e) {
      return t = J.fx ? J.fx.speeds[t] || t : t,
      e = e || "fx",
      this.queue(e, function(e, n) {
          var i = setTimeout(e, t);
          n.stop = function() {
              clearTimeout(i)
          }
      })
  }
  ,
  function() {
      var t = Z.createElement("input")
        , e = Z.createElement("select")
        , n = e.appendChild(Z.createElement("option"));
      t.type = "checkbox",
      G.checkOn = "" !== t.value,
      G.optSelected = n.selected,
      e.disabled = !0,
      G.optDisabled = !n.disabled,
      t = Z.createElement("input"),
      t.value = "t",
      t.type = "radio",
      G.radioValue = "t" === t.value
  }();
  var ie, oe, re = J.expr.attrHandle;
  J.fn.extend({
      attr: function(t, e) {
          return mt(this, J.attr, t, e, arguments.length > 1)
      },
      removeAttr: function(t) {
          return this.each(function() {
              J.removeAttr(this, t)
          })
      }
  }),
  J.extend({
      attr: function(t, e, n) {
          var i, o, r = t.nodeType;
          if (t && 3 !== r && 8 !== r && 2 !== r)
              return typeof t.getAttribute === Et ? J.prop(t, e, n) : (1 === r && J.isXMLDoc(t) || (e = e.toLowerCase(),
              i = J.attrHooks[e] || (J.expr.match.bool.test(e) ? oe : ie)),
              void 0 === n ? i && "get"in i && null !== (o = i.get(t, e)) ? o : (o = J.find.attr(t, e),
              null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""),
              n) : void J.removeAttr(t, e))
      },
      removeAttr: function(t, e) {
          var n, i, o = 0, r = e && e.match(dt);
          if (r && 1 === t.nodeType)
              for (; n = r[o++]; )
                  i = J.propFix[n] || n,
                  J.expr.match.bool.test(n) && (t[i] = !1),
                  t.removeAttribute(n)
      },
      attrHooks: {
          type: {
              set: function(t, e) {
                  if (!G.radioValue && "radio" === e && J.nodeName(t, "input")) {
                      var n = t.value;
                      return t.setAttribute("type", e),
                      n && (t.value = n),
                      e
                  }
              }
          }
      }
  }),
  oe = {
      set: function(t, e, n) {
          return e === !1 ? J.removeAttr(t, n) : t.setAttribute(n, n),
          n
      }
  },
  J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var n = re[e] || J.find.attr;
      re[e] = function(t, e, i) {
          var o, r;
          return i || (r = re[e],
          re[e] = o,
          o = null != n(t, e, i) ? e.toLowerCase() : null,
          re[e] = r),
          o
      }
  });
  var se = /^(?:input|select|textarea|button)$/i;
  J.fn.extend({
      prop: function(t, e) {
          return mt(this, J.prop, t, e, arguments.length > 1)
      },
      removeProp: function(t) {
          return this.each(function() {
              delete this[J.propFix[t] || t]
          })
      }
  }),
  J.extend({
      propFix: {
          "for": "htmlFor",
          "class": "className"
      },
      prop: function(t, e, n) {
          var i, o, r, s = t.nodeType;
          if (t && 3 !== s && 8 !== s && 2 !== s)
              return r = 1 !== s || !J.isXMLDoc(t),
              r && (e = J.propFix[e] || e,
              o = J.propHooks[e]),
              void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
      },
      propHooks: {
          tabIndex: {
              get: function(t) {
                  return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
              }
          }
      }
  }),
  G.optSelected || (J.propHooks.selected = {
      get: function(t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex,
          null
      }
  }),
  J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      J.propFix[this.toLowerCase()] = this
  });
  var ae = /[\t\r\n\f]/g;
  J.fn.extend({
      addClass: function(t) {
          var e, n, i, o, r, s, a = "string" == typeof t && t, l = 0, u = this.length;
          if (J.isFunction(t))
              return this.each(function(e) {
                  J(this).addClass(t.call(this, e, this.className))
              });
          if (a)
              for (e = (t || "").match(dt) || []; l < u; l++)
                  if (n = this[l],
                  i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : " ")) {
                      for (r = 0; o = e[r++]; )
                          i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      s = J.trim(i),
                      n.className !== s && (n.className = s)
                  }
          return this
      },
      removeClass: function(t) {
          var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t, l = 0, u = this.length;
          if (J.isFunction(t))
              return this.each(function(e) {
                  J(this).removeClass(t.call(this, e, this.className))
              });
          if (a)
              for (e = (t || "").match(dt) || []; l < u; l++)
                  if (n = this[l],
                  i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : "")) {
                      for (r = 0; o = e[r++]; )
                          for (; i.indexOf(" " + o + " ") >= 0; )
                              i = i.replace(" " + o + " ", " ");
                      s = t ? J.trim(i) : "",
                      n.className !== s && (n.className = s)
                  }
          return this
      },
      toggleClass: function(t, e) {
          var n = typeof t;
          return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : J.isFunction(t) ? this.each(function(n) {
              J(this).toggleClass(t.call(this, n, this.className, e), e)
          }) : this.each(function() {
              if ("string" === n)
                  for (var e, i = 0, o = J(this), r = t.match(dt) || []; e = r[i++]; )
                      o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else
                  n !== Et && "boolean" !== n || (this.className && vt.set(this, "__className__", this.className),
                  this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
          })
      },
      hasClass: function(t) {
          for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
              if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ae, " ").indexOf(e) >= 0)
                  return !0;
          return !1
      }
  });
  var le = /\r/g;
  J.fn.extend({
      val: function(t) {
          var e, n, i, o = this[0];
          {
              if (arguments.length)
                  return i = J.isFunction(t),
                  this.each(function(n) {
                      var o;
                      1 === this.nodeType && (o = i ? t.call(this, n, J(this).val()) : t,
                      null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(t) {
                          return null == t ? "" : t + ""
                      })),
                      e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()],
                      e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                  });
              if (o)
                  return e = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()],
                  e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value,
                  "string" == typeof n ? n.replace(le, "") : null == n ? "" : n)
          }
      }
  }),
  J.extend({
      valHooks: {
          option: {
              get: function(t) {
                  var e = J.find.attr(t, "value");
                  return null != e ? e : J.trim(J.text(t))
              }
          },
          select: {
              get: function(t) {
                  for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                      if (n = i[l],
                      (n.selected || l === o) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !J.nodeName(n.parentNode, "optgroup"))) {
                          if (e = J(n).val(),
                          r)
                              return e;
                          s.push(e)
                      }
                  return s
              },
              set: function(t, e) {
                  for (var n, i, o = t.options, r = J.makeArray(e), s = o.length; s--; )
                      i = o[s],
                      (i.selected = J.inArray(i.value, r) >= 0) && (n = !0);
                  return n || (t.selectedIndex = -1),
                  r
              }
          }
      }
  }),
  J.each(["radio", "checkbox"], function() {
      J.valHooks[this] = {
          set: function(t, e) {
              if (J.isArray(e))
                  return t.checked = J.inArray(J(t).val(), e) >= 0
          }
      },
      G.checkOn || (J.valHooks[this].get = function(t) {
          return null === t.getAttribute("value") ? "on" : t.value
      }
      )
  }),
  J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
      J.fn[e] = function(t, n) {
          return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
      }
  }),
  J.fn.extend({
      hover: function(t, e) {
          return this.mouseenter(t).mouseleave(e || t)
      },
      bind: function(t, e, n) {
          return this.on(t, null, e, n)
      },
      unbind: function(t, e) {
          return this.off(t, null, e)
      },
      delegate: function(t, e, n, i) {
          return this.on(e, t, n, i)
      },
      undelegate: function(t, e, n) {
          return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
      }
  });
  var ue = J.now()
    , ce = /\?/;
  J.parseJSON = function(t) {
      return JSON.parse(t + "")
  }
  ,
  J.parseXML = function(t) {
      var e, n;
      if (!t || "string" != typeof t)
          return null;
      try {
          n = new DOMParser,
          e = n.parseFromString(t, "text/xml")
      } catch (i) {
          e = void 0
      }
      return e && !e.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + t),
      e
  }
  ;
  var fe = /#.*$/
    , pe = /([?&])_=[^&]*/
    , de = /^(.*?):[ \t]*([^\r\n]*)$/gm
    , he = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
    , ge = /^(?:GET|HEAD)$/
    , me = /^\/\//
    , ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
    , ye = {}
    , be = {}
    , xe = "*/".concat("*")
    , we = t.location.href
    , Te = ve.exec(we.toLowerCase()) || [];
  J.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: we,
          type: "GET",
          isLocal: he.test(Te[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": xe,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": J.parseJSON,
              "text xml": J.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(t, e) {
          return e ? H(H(t, J.ajaxSettings), e) : H(J.ajaxSettings, t)
      },
      ajaxPrefilter: L(ye),
      ajaxTransport: L(be),
      ajax: function(t, e) {
          function n(t, e, n, s) {
              var l, c, v, y, x, T = e;
              2 !== b && (b = 2,
              a && clearTimeout(a),
              i = void 0,
              r = s || "",
              w.readyState = t > 0 ? 4 : 0,
              l = t >= 200 && t < 300 || 304 === t,
              n && (y = P(f, w, n)),
              y = F(f, y, w, l),
              l ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"),
              x && (J.lastModified[o] = x),
              x = w.getResponseHeader("etag"),
              x && (J.etag[o] = x)),
              204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state,
              c = y.data,
              v = y.error,
              l = !v)) : (v = T,
              !t && T || (T = "error",
              t < 0 && (t = 0))),
              w.status = t,
              w.statusText = (e || T) + "",
              l ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]),
              w.statusCode(m),
              m = void 0,
              u && d.trigger(l ? "ajaxSuccess" : "ajaxError", [w, f, l ? c : v]),
              g.fireWith(p, [w, T]),
              u && (d.trigger("ajaxComplete", [w, f]),
              --J.active || J.event.trigger("ajaxStop")))
          }
          "object" == typeof t && (e = t,
          t = void 0),
          e = e || {};
          var i, o, r, s, a, l, u, c, f = J.ajaxSetup({}, e), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? J(p) : J.event, h = J.Deferred(), g = J.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
              readyState: 0,
              getResponseHeader: function(t) {
                  var e;
                  if (2 === b) {
                      if (!s)
                          for (s = {}; e = de.exec(r); )
                              s[e[1].toLowerCase()] = e[2];
                      e = s[t.toLowerCase()]
                  }
                  return null == e ? null : e
              },
              getAllResponseHeaders: function() {
                  return 2 === b ? r : null
              },
              setRequestHeader: function(t, e) {
                  var n = t.toLowerCase();
                  return b || (t = y[n] = y[n] || t,
                  v[t] = e),
                  this
              },
              overrideMimeType: function(t) {
                  return b || (f.mimeType = t),
                  this
              },
              statusCode: function(t) {
                  var e;
                  if (t)
                      if (b < 2)
                          for (e in t)
                              m[e] = [m[e], t[e]];
                      else
                          w.always(t[w.status]);
                  return this
              },
              abort: function(t) {
                  var e = t || x;
                  return i && i.abort(e),
                  n(0, e),
                  this
              }
          };
          if (h.promise(w).complete = g.add,
          w.success = w.done,
          w.error = w.fail,
          f.url = ((t || f.url || we) + "").replace(fe, "").replace(me, Te[1] + "//"),
          f.type = e.method || e.type || f.method || f.type,
          f.dataTypes = J.trim(f.dataType || "*").toLowerCase().match(dt) || [""],
          null == f.crossDomain && (l = ve.exec(f.url.toLowerCase()),
          f.crossDomain = !(!l || l[1] === Te[1] && l[2] === Te[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Te[3] || ("http:" === Te[1] ? "80" : "443")))),
          f.data && f.processData && "string" != typeof f.data && (f.data = J.param(f.data, f.traditional)),
          q(ye, f, e, w),
          2 === b)
              return w;
          u = J.event && f.global,
          u && 0 === J.active++ && J.event.trigger("ajaxStart"),
          f.type = f.type.toUpperCase(),
          f.hasContent = !ge.test(f.type),
          o = f.url,
          f.hasContent || (f.data && (o = f.url += (ce.test(o) ? "&" : "?") + f.data,
          delete f.data),
          f.cache === !1 && (f.url = pe.test(o) ? o.replace(pe, "$1_=" + ue++) : o + (ce.test(o) ? "&" : "?") + "_=" + ue++)),
          f.ifModified && (J.lastModified[o] && w.setRequestHeader("If-Modified-Since", J.lastModified[o]),
          J.etag[o] && w.setRequestHeader("If-None-Match", J.etag[o])),
          (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", f.contentType),
          w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xe + "; q=0.01" : "") : f.accepts["*"]);
          for (c in f.headers)
              w.setRequestHeader(c, f.headers[c]);
          if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === b))
              return w.abort();
          x = "abort";
          for (c in {
              success: 1,
              error: 1,
              complete: 1
          })
              w[c](f[c]);
          if (i = q(be, f, e, w)) {
              w.readyState = 1,
              u && d.trigger("ajaxSend", [w, f]),
              f.async && f.timeout > 0 && (a = setTimeout(function() {
                  w.abort("timeout")
              }, f.timeout));
              try {
                  b = 1,
                  i.send(v, n)
              } catch (T) {
                  if (!(b < 2))
                      throw T;
                  n(-1, T)
              }
          } else
              n(-1, "No Transport");
          return w
      },
      getJSON: function(t, e, n) {
          return J.get(t, e, n, "json")
      },
      getScript: function(t, e) {
          return J.get(t, void 0, e, "script")
      }
  }),
  J.each(["get", "post"], function(t, e) {
      J[e] = function(t, n, i, o) {
          return J.isFunction(n) && (o = o || i,
          i = n,
          n = void 0),
          J.ajax({
              url: t,
              type: e,
              dataType: o,
              data: n,
              success: i
          })
      }
  }),
  J._evalUrl = function(t) {
      return J.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          "throws": !0
      })
  }
  ,
  J.fn.extend({
      wrapAll: function(t) {
          var e;
          return J.isFunction(t) ? this.each(function(e) {
              J(this).wrapAll(t.call(this, e))
          }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0),
          this[0].parentNode && e.insertBefore(this[0]),
          e.map(function() {
              for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
              return t
          }).append(this)),
          this)
      },
      wrapInner: function(t) {
          return J.isFunction(t) ? this.each(function(e) {
              J(this).wrapInner(t.call(this, e))
          }) : this.each(function() {
              var e = J(this)
                , n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t)
          })
      },
      wrap: function(t) {
          var e = J.isFunction(t);
          return this.each(function(n) {
              J(this).wrapAll(e ? t.call(this, n) : t)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
          }).end()
      }
  }),
  J.expr.filters.hidden = function(t) {
      return t.offsetWidth <= 0 && t.offsetHeight <= 0
  }
  ,
  J.expr.filters.visible = function(t) {
      return !J.expr.filters.hidden(t)
  }
  ;
  var Ce = /%20/g
    , ke = /\[\]$/
    , Ee = /\r?\n/g
    , Se = /^(?:submit|button|image|reset|file)$/i
    , Ne = /^(?:input|select|textarea|keygen)/i;
  J.param = function(t, e) {
      var n, i = [], o = function(t, e) {
          e = J.isFunction(e) ? e() : null == e ? "" : e,
          i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
      };
      if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional),
      J.isArray(t) || t.jquery && !J.isPlainObject(t))
          J.each(t, function() {
              o(this.name, this.value)
          });
      else
          for (n in t)
              U(n, t[n], e, o);
      return i.join("&").replace(Ce, "+")
  }
  ,
  J.fn.extend({
      serialize: function() {
          return J.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var t = J.prop(this, "elements");
              return t ? J.makeArray(t) : this
          }).filter(function() {
              var t = this.type;
              return this.name && !J(this).is(":disabled") && Ne.test(this.nodeName) && !Se.test(t) && (this.checked || !kt.test(t))
          }).map(function(t, e) {
              var n = J(this).val();
              return null == n ? null : J.isArray(n) ? J.map(n, function(t) {
                  return {
                      name: e.name,
                      value: t.replace(Ee, "\r\n")
                  }
              }) : {
                  name: e.name,
                  value: n.replace(Ee, "\r\n")
              }
          }).get()
      }
  }),
  J.ajaxSettings.xhr = function() {
      try {
          return new XMLHttpRequest
      } catch (t) {}
  }
  ;
  var $e = 0
    , Ae = {}
    , De = {
      0: 200,
      1223: 204
  }
    , je = J.ajaxSettings.xhr();
  t.attachEvent && t.attachEvent("onunload", function() {
      for (var t in Ae)
          Ae[t]()
  }),
  G.cors = !!je && "withCredentials"in je,
  G.ajax = je = !!je,
  J.ajaxTransport(function(t) {
      var e;
      if (G.cors || je && !t.crossDomain)
          return {
              send: function(n, i) {
                  var o, r = t.xhr(), s = ++$e;
                  if (r.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                      for (o in t.xhrFields)
                          r[o] = t.xhrFields[o];
                  t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType),
                  t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                  for (o in n)
                      r.setRequestHeader(o, n[o]);
                  e = function(t) {
                      return function() {
                          e && (delete Ae[s],
                          e = r.onload = r.onerror = null,
                          "abort" === t ? r.abort() : "error" === t ? i(r.status, r.statusText) : i(De[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                              text: r.responseText
                          } : void 0, r.getAllResponseHeaders()))
                      }
                  }
                  ,
                  r.onload = e(),
                  r.onerror = e("error"),
                  e = Ae[s] = e("abort");
                  try {
                      r.send(t.hasContent && t.data || null)
                  } catch (a) {
                      if (e)
                          throw a
                  }
              },
              abort: function() {
                  e && e()
              }
          }
  }),
  J.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /(?:java|ecma)script/
      },
      converters: {
          "text script": function(t) {
              return J.globalEval(t),
              t
          }
      }
  }),
  J.ajaxPrefilter("script", function(t) {
      void 0 === t.cache && (t.cache = !1),
      t.crossDomain && (t.type = "GET")
  }),
  J.ajaxTransport("script", function(t) {
      if (t.crossDomain) {
          var e, n;
          return {
              send: function(i, o) {
                  e = J("<script>").prop({
                      async: !0,
                      charset: t.scriptCharset,
                      src: t.url
                  }).on("load error", n = function(t) {
                      e.remove(),
                      n = null,
                      t && o("error" === t.type ? 404 : 200, t.type)
                  }
                  ),
                  Z.head.appendChild(e[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }
  });
  var Oe = []
    , Ie = /(=)\?(?=&|$)|\?\?/;
  J.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var t = Oe.pop() || J.expando + "_" + ue++;
          return this[t] = !0,
          t
      }
  }),
  J.ajaxPrefilter("json jsonp", function(e, n, i) {
      var o, r, s, a = e.jsonp !== !1 && (Ie.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0])
          return o = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
          a ? e[a] = e[a].replace(Ie, "$1" + o) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
          e.converters["script json"] = function() {
              return s || J.error(o + " was not called"),
              s[0]
          }
          ,
          e.dataTypes[0] = "json",
          r = t[o],
          t[o] = function() {
              s = arguments
          }
          ,
          i.always(function() {
              t[o] = r,
              e[o] && (e.jsonpCallback = n.jsonpCallback,
              Oe.push(o)),
              s && J.isFunction(r) && r(s[0]),
              s = r = void 0
          }),
          "script"
  }),
  J.parseHTML = function(t, e, n) {
      if (!t || "string" != typeof t)
          return null;
      "boolean" == typeof e && (n = e,
      e = !1),
      e = e || Z;
      var i = st.exec(t)
        , o = !n && [];
      return i ? [e.createElement(i[1])] : (i = J.buildFragment([t], e, o),
      o && o.length && J(o).remove(),
      J.merge([], i.childNodes))
  }
  ;
  var Re = J.fn.load;
  J.fn.load = function(t, e, n) {
      if ("string" != typeof t && Re)
          return Re.apply(this, arguments);
      var i, o, r, s = this, a = t.indexOf(" ");
      return a >= 0 && (i = J.trim(t.slice(a)),
      t = t.slice(0, a)),
      J.isFunction(e) ? (n = e,
      e = void 0) : e && "object" == typeof e && (o = "POST"),
      s.length > 0 && J.ajax({
          url: t,
          type: o,
          dataType: "html",
          data: e
      }).done(function(t) {
          r = arguments,
          s.html(i ? J("<div>").append(J.parseHTML(t)).find(i) : t)
      }).complete(n && function(t, e) {
          s.each(n, r || [t.responseText, e, t])
      }
      ),
      this
  }
  ,
  J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
      J.fn[e] = function(t) {
          return this.on(e, t)
      }
  }),
  J.expr.filters.animated = function(t) {
      return J.grep(J.timers, function(e) {
          return t === e.elem
      }).length
  }
  ;
  var Le = t.document.documentElement;
  J.offset = {
      setOffset: function(t, e, n) {
          var i, o, r, s, a, l, u, c = J.css(t, "position"), f = J(t), p = {};
          "static" === c && (t.style.position = "relative"),
          a = f.offset(),
          r = J.css(t, "top"),
          l = J.css(t, "left"),
          u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1,
          u ? (i = f.position(),
          s = i.top,
          o = i.left) : (s = parseFloat(r) || 0,
          o = parseFloat(l) || 0),
          J.isFunction(e) && (e = e.call(t, n, a)),
          null != e.top && (p.top = e.top - a.top + s),
          null != e.left && (p.left = e.left - a.left + o),
          "using"in e ? e.using.call(t, p) : f.css(p)
      }
  },
  J.fn.extend({
      offset: function(t) {
          if (arguments.length)
              return void 0 === t ? this : this.each(function(e) {
                  J.offset.setOffset(this, t, e)
              });
          var e, n, i = this[0], o = {
              top: 0,
              left: 0
          }, r = i && i.ownerDocument;
          if (r)
              return e = r.documentElement,
              J.contains(e, i) ? (typeof i.getBoundingClientRect !== Et && (o = i.getBoundingClientRect()),
              n = W(r),
              {
                  top: o.top + n.pageYOffset - e.clientTop,
                  left: o.left + n.pageXOffset - e.clientLeft
              }) : o
      },
      position: function() {
          if (this[0]) {
              var t, e, n = this[0], i = {
                  top: 0,
                  left: 0
              };
              return "fixed" === J.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
              e = this.offset(),
              J.nodeName(t[0], "html") || (i = t.offset()),
              i.top += J.css(t[0], "borderTopWidth", !0),
              i.left += J.css(t[0], "borderLeftWidth", !0)),
              {
                  top: e.top - i.top - J.css(n, "marginTop", !0),
                  left: e.left - i.left - J.css(n, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var t = this.offsetParent || Le; t && !J.nodeName(t, "html") && "static" === J.css(t, "position"); )
                  t = t.offsetParent;
              return t || Le
          })
      }
  }),
  J.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, n) {
      var i = "pageYOffset" === n;
      J.fn[e] = function(o) {
          return mt(this, function(e, o, r) {
              var s = W(e);
              return void 0 === r ? s ? s[n] : e[o] : void (s ? s.scrollTo(i ? t.pageXOffset : r, i ? r : t.pageYOffset) : e[o] = r)
          }, e, o, arguments.length, null)
      }
  }),
  J.each(["top", "left"], function(t, e) {
      J.cssHooks[e] = T(G.pixelPosition, function(t, n) {
          if (n)
              return n = w(t, e),
              Mt.test(n) ? J(t).position()[e] + "px" : n
      })
  }),
  J.each({
      Height: "height",
      Width: "width"
  }, function(t, e) {
      J.each({
          padding: "inner" + t,
          content: e,
          "": "outer" + t
      }, function(n, i) {
          J.fn[i] = function(i, o) {
              var r = arguments.length && (n || "boolean" != typeof i)
                , s = n || (i === !0 || o === !0 ? "margin" : "border");
              return mt(this, function(e, n, i) {
                  var o;
                  return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                  Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? J.css(e, n, s) : J.style(e, n, i, s)
              }, e, r ? i : void 0, r, null)
          }
      })
  }),
  J.fn.size = function() {
      return this.length
  }
  ,
  J.fn.andSelf = J.fn.addBack,
  "function" == typeof define && define.amd && define("jquery", [], function() {
      return J
  });
  var qe = t.jQuery
    , He = t.$;
  return J.noConflict = function(e) {
      return t.$ === J && (t.$ = He),
      e && t.jQuery === J && (t.jQuery = qe),
      J
  }
  ,
  typeof e === Et && (t.jQuery = t.$ = J),
  J
}),
"undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
      throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
+function(t) {
  "use strict";
  function e() {
      var t = document.createElement("bootstrap")
        , e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
      };
      for (var n in e)
          if (void 0 !== t.style[n])
              return {
                  end: e[n]
              };
      return !1
  }
  t.fn.emulateTransitionEnd = function(e) {
      var n = !1
        , i = this;
      t(this).one("bsTransitionEnd", function() {
          n = !0
      });
      var o = function() {
          n || t(i).trigger(t.support.transition.end)
      };
      return setTimeout(o, e),
      this
  }
  ,
  t(function() {
      t.support.transition = e(),
      t.support.transition && (t.event.special.bsTransitionEnd = {
          bindType: t.support.transition.end,
          delegateType: t.support.transition.end,
          handle: function(e) {
              if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments)
          }
      })
  })
}(jQuery),
+function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var n = t(this)
            , o = n.data("bs.alert");
          o || n.data("bs.alert", o = new i(this)),
          "string" == typeof e && o[e].call(n)
      })
  }
  var n = '[data-dismiss="alert"]'
    , i = function(e) {
      t(e).on("click", n, this.close)
  };
  i.VERSION = "3.3.4",
  i.TRANSITION_DURATION = 150,
  i.prototype.close = function(e) {
      function n() {
          s.detach().trigger("closed.bs.alert").remove()
      }
      var o = t(this)
        , r = o.attr("data-target");
      r || (r = o.attr("href"),
      r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
      var s = t(r);
      e && e.preventDefault(),
      s.length || (s = o.closest(".alert")),
      s.trigger(e = t.Event("close.bs.alert")),
      e.isDefaultPrevented() || (s.removeClass("in"),
      t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
  }
  ;
  var o = t.fn.alert;
  t.fn.alert = e,
  t.fn.alert.Constructor = i,
  t.fn.alert.noConflict = function() {
      return t.fn.alert = o,
      this
  }
  ,
  t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
+function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , o = i.data("bs.button")
            , r = "object" == typeof e && e;
          o || i.data("bs.button", o = new n(this,r)),
          "toggle" == e ? o.toggle() : e && o.setState(e)
      })
  }
  var n = function(e, i) {
      this.$element = t(e),
      this.options = t.extend({}, n.DEFAULTS, i),
      this.isLoading = !1
  };
  n.VERSION = "3.3.4",
  n.DEFAULTS = {
      loadingText: "loading..."
  },
  n.prototype.setState = function(e) {
      var n = "disabled"
        , i = this.$element
        , o = i.is("input") ? "val" : "html"
        , r = i.data();
      e += "Text",
      null == r.resetText && i.data("resetText", i[o]()),
      setTimeout(t.proxy(function() {
          i[o](null == r[e] ? this.options[e] : r[e]),
          "loadingText" == e ? (this.isLoading = !0,
          i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1,
          i.removeClass(n).removeAttr(n))
      }, this), 0)
  }
  ,
  n.prototype.toggle = function() {
      var t = !0
        , e = this.$element.closest('[data-toggle="buttons"]');
      if (e.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")),
          t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
      } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
      t && this.$element.toggleClass("active")
  }
  ;
  var i = t.fn.button;
  t.fn.button = e,
  t.fn.button.Constructor = n,
  t.fn.button.noConflict = function() {
      return t.fn.button = i,
      this
  }
  ,
  t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
      var i = t(n.target);
      i.hasClass("btn") || (i = i.closest(".btn")),
      e.call(i, "toggle"),
      n.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
      t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
  })
}(jQuery),
+function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , o = i.data("bs.carousel")
            , r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e)
            , s = "string" == typeof e ? e : r.slide;
          o || i.data("bs.carousel", o = new n(this,r)),
          "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
      })
  }
  var n = function(e, n) {
      this.$element = t(e),
      this.$indicators = this.$element.find(".carousel-indicators"),
      this.options = n,
      this.paused = null,
      this.sliding = null,
      this.interval = null,
      this.$active = null,
      this.$items = null,
      this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
      "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  n.VERSION = "3.3.4",
  n.TRANSITION_DURATION = 600,
  n.DEFAULTS = {
      interval: 5e3,
      pause: "hover",
      wrap: !0,
      keyboard: !0
  },
  n.prototype.keydown = function(t) {
      if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
          case 37:
              this.prev();
              break;
          case 39:
              this.next();
              break;
          default:
              return
          }
          t.preventDefault()
      }
  }
  ,
  n.prototype.cycle = function(e) {
      return e || (this.paused = !1),
      this.interval && clearInterval(this.interval),
      this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
      this
  }
  ,
  n.prototype.getItemIndex = function(t) {
      return this.$items = t.parent().children(".item"),
      this.$items.index(t || this.$active)
  }
  ,
  n.prototype.getItemForDirection = function(t, e) {
      var n = this.getItemIndex(e)
        , i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
      if (i && !this.options.wrap)
          return e;
      var o = "prev" == t ? -1 : 1
        , r = (n + o) % this.$items.length;
      return this.$items.eq(r)
  }
  ,
  n.prototype.to = function(t) {
      var e = this
        , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
      if (!(t > this.$items.length - 1 || t < 0))
          return this.sliding ? this.$element.one("slid.bs.carousel", function() {
              e.to(t)
          }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
  }
  ,
  n.prototype.pause = function(e) {
      return e || (this.paused = !0),
      this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
      this.cycle(!0)),
      this.interval = clearInterval(this.interval),
      this
  }
  ,
  n.prototype.next = function() {
      if (!this.sliding)
          return this.slide("next")
  }
  ,
  n.prototype.prev = function() {
      if (!this.sliding)
          return this.slide("prev")
  }
  ,
  n.prototype.slide = function(e, i) {
      var o = this.$element.find(".item.active")
        , r = i || this.getItemForDirection(e, o)
        , s = this.interval
        , a = "next" == e ? "left" : "right"
        , l = this;
      if (r.hasClass("active"))
          return this.sliding = !1;
      var u = r[0]
        , c = t.Event("slide.bs.carousel", {
          relatedTarget: u,
          direction: a
      });
      if (this.$element.trigger(c),
      !c.isDefaultPrevented()) {
          if (this.sliding = !0,
          s && this.pause(),
          this.$indicators.length) {
              this.$indicators.find(".active").removeClass("active");
              var f = t(this.$indicators.children()[this.getItemIndex(r)]);
              f && f.addClass("active")
          }
          var p = t.Event("slid.bs.carousel", {
              relatedTarget: u,
              direction: a
          });
          return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e),
          r[0].offsetWidth,
          o.addClass(a),
          r.addClass(a),
          o.one("bsTransitionEnd", function() {
              r.removeClass([e, a].join(" ")).addClass("active"),
              o.removeClass(["active", a].join(" ")),
              l.sliding = !1,
              setTimeout(function() {
                  l.$element.trigger(p)
              }, 0)
          }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"),
          r.addClass("active"),
          this.sliding = !1,
          this.$element.trigger(p)),
          s && this.cycle(),
          this
      }
  }
  ;
  var i = t.fn.carousel;
  t.fn.carousel = e,
  t.fn.carousel.Constructor = n,
  t.fn.carousel.noConflict = function() {
      return t.fn.carousel = i,
      this
  }
  ;
  var o = function(n) {
      var i, o = t(this), r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      if (r.hasClass("carousel")) {
          var s = t.extend({}, r.data(), o.data())
            , a = o.attr("data-slide-to");
          a && (s.interval = !1),
          e.call(r, s),
          a && r.data("bs.carousel").to(a),
          n.preventDefault()
      }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
  t(window).on("load", function() {
      t('[data-ride="carousel"]').each(function() {
          var n = t(this);
          e.call(n, n.data())
      })
  })
}(jQuery),
+function(t) {
  "use strict";
  function e(e) {
      var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
      return t(i)
  }
  function n(e) {
      return this.each(function() {
          var n = t(this)
            , o = n.data("bs.collapse")
            , r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
          !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
          o || n.data("bs.collapse", o = new i(this,r)),
          "string" == typeof e && o[e]()
      })
  }
  var i = function(e, n) {
      this.$element = t(e),
      this.options = t.extend({}, i.DEFAULTS, n),
      this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
      this.transitioning = null,
      this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
      this.options.toggle && this.toggle()
  };
  i.VERSION = "3.3.4",
  i.TRANSITION_DURATION = 350,
  i.DEFAULTS = {
      toggle: !0
  },
  i.prototype.dimension = function() {
      var t = this.$element.hasClass("width");
      return t ? "width" : "height"
  }
  ,
  i.prototype.show = function() {
      if (!this.transitioning && !this.$element.hasClass("in")) {
          var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
          if (!(o && o.length && (e = o.data("bs.collapse"),
          e && e.transitioning))) {
              var r = t.Event("show.bs.collapse");
              if (this.$element.trigger(r),
              !r.isDefaultPrevented()) {
                  o && o.length && (n.call(o, "hide"),
                  e || o.data("bs.collapse", null));
                  var s = this.dimension();
                  this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                  this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                  this.transitioning = 1;
                  var a = function() {
                      this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                      this.transitioning = 0,
                      this.$element.trigger("shown.bs.collapse")
                  };
                  if (!t.support.transition)
                      return a.call(this);
                  var l = t.camelCase(["scroll", s].join("-"));
                  this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
              }
          }
      }
  }
  ,
  i.prototype.hide = function() {
      if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if (this.$element.trigger(e),
          !e.isDefaultPrevented()) {
              var n = this.dimension();
              this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              this.transitioning = 1;
              var o = function() {
                  this.transitioning = 0,
                  this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
              };
              return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
          }
      }
  }
  ,
  i.prototype.toggle = function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
  }
  ,
  i.prototype.getParent = function() {
      return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
          var o = t(i);
          this.addAriaAndCollapsedClass(e(o), o)
      }, this)).end()
  }
  ,
  i.prototype.addAriaAndCollapsedClass = function(t, e) {
      var n = t.hasClass("in");
      t.attr("aria-expanded", n),
      e.toggleClass("collapsed", !n).attr("aria-expanded", n)
  }
  ;
  var o = t.fn.collapse;
  t.fn.collapse = n,
  t.fn.collapse.Constructor = i,
  t.fn.collapse.noConflict = function() {
      return t.fn.collapse = o,
      this
  }
  ,
  t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
      var o = t(this);
      o.attr("data-target") || i.preventDefault();
      var r = e(o)
        , s = r.data("bs.collapse")
        , a = s ? "toggle" : o.data();
      n.call(r, a)
  })
}(jQuery),
+function(t) {
  "use strict";
  function e(e) {
      e && 3 === e.which || (t(o).remove(),
      t(r).each(function() {
          var i = t(this)
            , o = n(i)
            , r = {
              relatedTarget: this
          };
          o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", r)),
          e.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
          o.removeClass("open").trigger("hidden.bs.dropdown", r)))
      }))
  }
  function n(e) {
      var n = e.attr("data-target");
      n || (n = e.attr("href"),
      n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
      var i = n && t(n);
      return i && i.length ? i : e.parent()
  }
  function i(e) {
      return this.each(function() {
          var n = t(this)
            , i = n.data("bs.dropdown");
          i || n.data("bs.dropdown", i = new s(this)),
          "string" == typeof e && i[e].call(n)
      })
  }
  var o = ".dropdown-backdrop"
    , r = '[data-toggle="dropdown"]'
    , s = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
  };
  s.VERSION = "3.3.4",
  s.prototype.toggle = function(i) {
      var o = t(this);
      if (!o.is(".disabled, :disabled")) {
          var r = n(o)
            , s = r.hasClass("open");
          if (e(),
          !s) {
              "ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
              var a = {
                  relatedTarget: this
              };
              if (r.trigger(i = t.Event("show.bs.dropdown", a)),
              i.isDefaultPrevented())
                  return;
              o.trigger("focus").attr("aria-expanded", "true"),
              r.toggleClass("open").trigger("shown.bs.dropdown", a)
          }
          return !1
      }
  }
  ,
  s.prototype.keydown = function(e) {
      if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
          var i = t(this);
          if (e.preventDefault(),
          e.stopPropagation(),
          !i.is(".disabled, :disabled")) {
              var o = n(i)
                , s = o.hasClass("open");
              if (!s && 27 != e.which || s && 27 == e.which)
                  return 27 == e.which && o.find(r).trigger("focus"),
                  i.trigger("click");
              var a = " li:not(.disabled):visible a"
                , l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
              if (l.length) {
                  var u = l.index(e.target);
                  38 == e.which && u > 0 && u--,
                  40 == e.which && u < l.length - 1 && u++,
                  ~u || (u = 0),
                  l.eq(u).trigger("focus")
              }
          }
      }
  }
  ;
  var a = t.fn.dropdown;
  t.fn.dropdown = i,
  t.fn.dropdown.Constructor = s,
  t.fn.dropdown.noConflict = function() {
      return t.fn.dropdown = a,
      this
  }
  ,
  t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
      t.stopPropagation()
  }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown)
}(jQuery),
+function(t) {
  "use strict";
  function e(e, i) {
      return this.each(function() {
          var o = t(this)
            , r = o.data("bs.modal")
            , s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
          r || o.data("bs.modal", r = new n(this,s)),
          "string" == typeof e ? r[e](i) : s.show && r.show(i)
      })
  }
  var n = function(e, n) {
      this.options = n,
      this.$body = t(document.body),
      this.$element = t(e),
      this.$dialog = this.$element.find(".modal-dialog"),
      this.$backdrop = null,
      this.isShown = null,
      this.originalBodyPad = null,
      this.scrollbarWidth = 0,
      this.ignoreBackdropClick = !1,
      this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
          this.$element.trigger("loaded.bs.modal")
      }, this))
  };
  n.VERSION = "3.3.4",
  n.TRANSITION_DURATION = 300,
  n.BACKDROP_TRANSITION_DURATION = 150,
  n.DEFAULTS = {
      backdrop: !0,
      keyboard: !0,
      show: !0
  },
  n.prototype.toggle = function(t) {
      return this.isShown ? this.hide() : this.show(t)
  }
  ,
  n.prototype.show = function(e) {
      var i = this
        , o = t.Event("show.bs.modal", {
          relatedTarget: e
      });
      this.$element.trigger(o),
      this.isShown || o.isDefaultPrevented() || (this.isShown = !0,
      this.checkScrollbar(),
      this.setScrollbar(),
      this.$body.addClass("modal-open"),
      this.escape(),
      this.resize(),
      this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
      this.$dialog.on("mousedown.dismiss.bs.modal", function() {
          i.$element.one("mouseup.dismiss.bs.modal", function(e) {
              t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
          })
      }),
      this.backdrop(function() {
          var o = t.support.transition && i.$element.hasClass("fade");
          i.$element.parent().length || i.$element.appendTo(i.$body),
          i.$element.show().scrollTop(0),
          i.adjustDialog(),
          o && i.$element[0].offsetWidth,
          i.$element.addClass("in").attr("aria-hidden", !1),
          i.enforceFocus();
          var r = t.Event("shown.bs.modal", {
              relatedTarget: e
          });
          o ? i.$dialog.one("bsTransitionEnd", function() {
              i.$element.trigger("focus").trigger(r)
          }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
      }))
  }
  ,
  n.prototype.hide = function(e) {
      e && e.preventDefault(),
      e = t.Event("hide.bs.modal"),
      this.$element.trigger(e),
      this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
      this.escape(),
      this.resize(),
      t(document).off("focusin.bs.modal"),
      this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
      this.$dialog.off("mousedown.dismiss.bs.modal"),
      t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
  }
  ,
  n.prototype.enforceFocus = function() {
      t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
          this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
      }, this))
  }
  ,
  n.prototype.escape = function() {
      this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
          27 == t.which && this.hide()
      }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }
  ,
  n.prototype.resize = function() {
      this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
  }
  ,
  n.prototype.hideModal = function() {
      var t = this;
      this.$element.hide(),
      this.backdrop(function() {
          t.$body.removeClass("modal-open"),
          t.resetAdjustments(),
          t.resetScrollbar(),
          t.$element.trigger("hidden.bs.modal")
      })
  }
  ,
  n.prototype.removeBackdrop = function() {
      this.$backdrop && this.$backdrop.remove(),
      this.$backdrop = null
  }
  ,
  n.prototype.backdrop = function(e) {
      var i = this
        , o = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
          var r = t.support.transition && o;
          if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body),
          this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
              return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
          }, this)),
          r && this.$backdrop[0].offsetWidth,
          this.$backdrop.addClass("in"),
          !e)
              return;
          r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
      } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var s = function() {
              i.removeBackdrop(),
              e && e()
          };
          t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
      } else
          e && e()
  }
  ,
  n.prototype.handleUpdate = function() {
      this.adjustDialog()
  }
  ,
  n.prototype.adjustDialog = function() {
      var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
      this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
      })
  }
  ,
  n.prototype.resetAdjustments = function() {
      this.$element.css({
          paddingLeft: "",
          paddingRight: ""
      })
  }
  ,
  n.prototype.checkScrollbar = function() {
      var t = window.innerWidth;
      if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left)
      }
      this.bodyIsOverflowing = document.body.clientWidth < t,
      this.scrollbarWidth = this.measureScrollbar()
  }
  ,
  n.prototype.setScrollbar = function() {
      var t = parseInt(this.$body.css("padding-right") || 0, 10);
      this.originalBodyPad = document.body.style.paddingRight || "",
      this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
  }
  ,
  n.prototype.resetScrollbar = function() {
      this.$body.css("padding-right", this.originalBodyPad)
  }
  ,
  n.prototype.measureScrollbar = function() {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure",
      this.$body.append(t);
      var e = t.offsetWidth - t.clientWidth;
      return this.$body[0].removeChild(t),
      e
  }
  ;
  var i = t.fn.modal;
  t.fn.modal = e,
  t.fn.modal.Constructor = n,
  t.fn.modal.noConflict = function() {
      return t.fn.modal = i,
      this
  }
  ,
  t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
      var i = t(this)
        , o = i.attr("href")
        , r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""))
        , s = r.data("bs.modal") ? "toggle" : t.extend({
          remote: !/#/.test(o) && o
      }, r.data(), i.data());
      i.is("a") && n.preventDefault(),
      r.one("show.bs.modal", function(t) {
          t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
              i.is(":visible") && i.trigger("focus")
          })
      }),
      e.call(r, s, this)
  })
}(jQuery),
+function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , o = i.data("bs.tooltip")
            , r = "object" == typeof e && e;
          !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this,r)),
          "string" == typeof e && o[e]())
      })
  }
  var n = function(t, e) {
      this.type = null,
      this.options = null,
      this.enabled = null,
      this.timeout = null,
      this.hoverState = null,
      this.$element = null,
      this.init("tooltip", t, e)
  };
  n.VERSION = "3.3.4",
  n.TRANSITION_DURATION = 150,
  n.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1,
      viewport: {
          selector: "body",
          padding: 0
      }
  },
  n.prototype.init = function(e, n, i) {
      if (this.enabled = !0,
      this.type = e,
      this.$element = t(n),
      this.options = this.getOptions(i),
      this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport),
      this.$element[0]instanceof document.constructor && !this.options.selector)
          throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
      for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
          var s = o[r];
          if ("click" == s)
              this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
          else if ("manual" != s) {
              var a = "hover" == s ? "mouseenter" : "focusin"
                , l = "hover" == s ? "mouseleave" : "focusout";
              this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
              this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
          }
      }
      this.options.selector ? this._options = t.extend({}, this.options, {
          trigger: "manual",
          selector: ""
      }) : this.fixTitle()
  }
  ,
  n.prototype.getDefaults = function() {
      return n.DEFAULTS
  }
  ,
  n.prototype.getOptions = function(e) {
      return e = t.extend({}, this.getDefaults(), this.$element.data(), e),
      e.delay && "number" == typeof e.delay && (e.delay = {
          show: e.delay,
          hide: e.delay
      }),
      e
  }
  ,
  n.prototype.getDelegateOptions = function() {
      var e = {}
        , n = this.getDefaults();
      return this._options && t.each(this._options, function(t, i) {
          n[t] != i && (e[t] = i)
      }),
      e
  }
  ,
  n.prototype.enter = function(e) {
      var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
      return n && n.$tip && n.$tip.is(":visible") ? void (n.hoverState = "in") : (n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
      t(e.currentTarget).data("bs." + this.type, n)),
      clearTimeout(n.timeout),
      n.hoverState = "in",
      n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
          "in" == n.hoverState && n.show()
      }, n.options.delay.show)) : n.show())
  }
  ,
  n.prototype.leave = function(e) {
      var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
      return n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
      t(e.currentTarget).data("bs." + this.type, n)),
      clearTimeout(n.timeout),
      n.hoverState = "out",
      n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
          "out" == n.hoverState && n.hide()
      }, n.options.delay.hide)) : n.hide()
  }
  ,
  n.prototype.show = function() {
      var e = t.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
          if (e.isDefaultPrevented() || !i)
              return;
          var o = this
            , r = this.tip()
            , s = this.getUID(this.type);
          this.setContent(),
          r.attr("id", s),
          this.$element.attr("aria-describedby", s),
          this.options.animation && r.addClass("fade");
          var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement
            , l = /\s?auto?\s?/i
            , u = l.test(a);
          u && (a = a.replace(l, "") || "top"),
          r.detach().css({
              top: 0,
              left: 0,
              display: "block"
          }).addClass(a).data("bs." + this.type, this),
          this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
          var c = this.getPosition()
            , f = r[0].offsetWidth
            , p = r[0].offsetHeight;
          if (u) {
              var d = a
                , h = this.options.container ? t(this.options.container) : this.$element.parent()
                , g = this.getPosition(h);
              a = "bottom" == a && c.bottom + p > g.bottom ? "top" : "top" == a && c.top - p < g.top ? "bottom" : "right" == a && c.right + f > g.width ? "left" : "left" == a && c.left - f < g.left ? "right" : a,
              r.removeClass(d).addClass(a)
          }
          var m = this.getCalculatedOffset(a, c, f, p);
          this.applyPlacement(m, a);
          var v = function() {
              var t = o.hoverState;
              o.$element.trigger("shown.bs." + o.type),
              o.hoverState = null,
              "out" == t && o.leave(o)
          };
          t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
      }
  }
  ,
  n.prototype.applyPlacement = function(e, n) {
      var i = this.tip()
        , o = i[0].offsetWidth
        , r = i[0].offsetHeight
        , s = parseInt(i.css("margin-top"), 10)
        , a = parseInt(i.css("margin-left"), 10);
      isNaN(s) && (s = 0),
      isNaN(a) && (a = 0),
      e.top = e.top + s,
      e.left = e.left + a,
      t.offset.setOffset(i[0], t.extend({
          using: function(t) {
              i.css({
                  top: Math.round(t.top),
                  left: Math.round(t.left)
              })
          }
      }, e), 0),
      i.addClass("in");
      var l = i[0].offsetWidth
        , u = i[0].offsetHeight;
      "top" == n && u != r && (e.top = e.top + r - u);
      var c = this.getViewportAdjustedDelta(n, e, l, u);
      c.left ? e.left += c.left : e.top += c.top;
      var f = /top|bottom/.test(n)
        , p = f ? 2 * c.left - o + l : 2 * c.top - r + u
        , d = f ? "offsetWidth" : "offsetHeight";
      i.offset(e),
      this.replaceArrow(p, i[0][d], f)
  }
  ,
  n.prototype.replaceArrow = function(t, e, n) {
      this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
  }
  ,
  n.prototype.setContent = function() {
      var t = this.tip()
        , e = this.getTitle();
      t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
      t.removeClass("fade in top bottom left right")
  }
  ,
  n.prototype.hide = function(e) {
      function i() {
          "in" != o.hoverState && r.detach(),
          o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type),
          e && e()
      }
      var o = this
        , r = t(this.$tip)
        , s = t.Event("hide.bs." + this.type);
      if (this.$element.trigger(s),
      !s.isDefaultPrevented())
          return r.removeClass("in"),
          t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(),
          this.hoverState = null,
          this
  }
  ,
  n.prototype.fixTitle = function() {
      var t = this.$element;
      (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }
  ,
  n.prototype.hasContent = function() {
      return this.getTitle()
  }
  ,
  n.prototype.getPosition = function(e) {
      e = e || this.$element;
      var n = e[0]
        , i = "BODY" == n.tagName
        , o = n.getBoundingClientRect();
      null == o.width && (o = t.extend({}, o, {
          width: o.right - o.left,
          height: o.bottom - o.top
      }));
      var r = i ? {
          top: 0,
          left: 0
      } : e.offset()
        , s = {
          scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
      }
        , a = i ? {
          width: t(window).width(),
          height: t(window).height()
      } : null;
      return t.extend({}, o, s, a, r)
  }
  ,
  n.prototype.getCalculatedOffset = function(t, e, n, i) {
      return "bottom" == t ? {
          top: e.top + e.height,
          left: e.left + e.width / 2 - n / 2
      } : "top" == t ? {
          top: e.top - i,
          left: e.left + e.width / 2 - n / 2
      } : "left" == t ? {
          top: e.top + e.height / 2 - i / 2,
          left: e.left - n
      } : {
          top: e.top + e.height / 2 - i / 2,
          left: e.left + e.width
      }
  }
  ,
  n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
      var o = {
          top: 0,
          left: 0
      };
      if (!this.$viewport)
          return o;
      var r = this.options.viewport && this.options.viewport.padding || 0
        , s = this.getPosition(this.$viewport);
      if (/right|left/.test(t)) {
          var a = e.top - r - s.scroll
            , l = e.top + r - s.scroll + i;
          a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
      } else {
          var u = e.left - r
            , c = e.left + r + n;
          u < s.left ? o.left = s.left - u : c > s.width && (o.left = s.left + s.width - c)
      }
      return o
  }
  ,
  n.prototype.getTitle = function() {
      var t, e = this.$element, n = this.options;
      return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
  }
  ,
  n.prototype.getUID = function(t) {
      do
          t += ~~(1e6 * Math.random());
      while (document.getElementById(t));
      return t
  }
  ,
  n.prototype.tip = function() {
      return this.$tip = this.$tip || t(this.options.template)
  }
  ,
  n.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }
  ,
  n.prototype.enable = function() {
      this.enabled = !0
  }
  ,
  n.prototype.disable = function() {
      this.enabled = !1
  }
  ,
  n.prototype.toggleEnabled = function() {
      this.enabled = !this.enabled
  }
  ,
  n.prototype.toggle = function(e) {
      var n = this;
      e && (n = t(e.currentTarget).data("bs." + this.type),
      n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
      t(e.currentTarget).data("bs." + this.type, n))),
      n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
  }
  ,
  n.prototype.destroy = function() {
      var t = this;
      clearTimeout(this.timeout),
      this.hide(function() {
          t.$element.off("." + t.type).removeData("bs." + t.type)
      })
  }
  ;
  var i = t.fn.tooltip;
  t.fn.tooltip = e,
  t.fn.tooltip.Constructor = n,
  t.fn.tooltip.noConflict = function() {
      return t.fn.tooltip = i,
      this
  }
}(jQuery),
+function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , o = i.data("bs.popover")
            , r = "object" == typeof e && e;
          !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this,r)),
          "string" == typeof e && o[e]())
      })
  }
  var n = function(t, e) {
      this.init("popover", t, e)
  };
  if (!t.fn.tooltip)
      throw new Error("Popover requires tooltip.js");
  n.VERSION = "3.3.4",
  n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }),
  n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
  n.prototype.constructor = n,
  n.prototype.getDefaults = function() {
      return n.DEFAULTS
  }
  ,
  n.prototype.setContent = function() {
      var t = this.tip()
        , e = this.getTitle()
        , n = this.getContent();
      t.find(".popover-title")[this.options.html ? "html" : "text"](e),
      t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
      t.removeClass("fade top bottom left right in"),
      t.find(".popover-title").html() || t.find(".popover-title").hide()
  }
  ,
  n.prototype.hasContent = function() {
      return this.getTitle() || this.getContent()
  }
  ,
  n.prototype.getContent = function() {
      var t = this.$element
        , e = this.options;
      return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }
  ,
  n.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".arrow")
  }
  ;
  var i = t.fn.popover;
  t.fn.popover = e,
  t.fn.popover.Constructor = n,
  t.fn.popover.noConflict = function() {
      return t.fn.popover = i,
      this
  }
}(jQuery),
+function(t) {
  "use strict";
  function e(n, i) {
      this.$body = t(document.body),
      this.$scrollElement = t(t(n).is(document.body) ? window : n),
      this.options = t.extend({}, e.DEFAULTS, i),
      this.selector = (this.options.target || "") + " .nav li > a",
      this.offsets = [],
      this.targets = [],
      this.activeTarget = null,
      this.scrollHeight = 0,
      this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
      this.refresh(),
      this.process()
  }
  function n(n) {
      return this.each(function() {
          var i = t(this)
            , o = i.data("bs.scrollspy")
            , r = "object" == typeof n && n;
          o || i.data("bs.scrollspy", o = new e(this,r)),
          "string" == typeof n && o[n]()
      })
  }
  e.VERSION = "3.3.4",
  e.DEFAULTS = {
      offset: 10
  },
  e.prototype.getScrollHeight = function() {
      return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }
  ,
  e.prototype.refresh = function() {
      var e = this
        , n = "offset"
        , i = 0;
      this.offsets = [],
      this.targets = [],
      this.scrollHeight = this.getScrollHeight(),
      t.isWindow(this.$scrollElement[0]) || (n = "position",
      i = this.$scrollElement.scrollTop()),
      this.$body.find(this.selector).map(function() {
          var e = t(this)
            , o = e.data("target") || e.attr("href")
            , r = /^#./.test(o) && t(o);
          return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
      }).sort(function(t, e) {
          return t[0] - e[0]
      }).each(function() {
          e.offsets.push(this[0]),
          e.targets.push(this[1])
      })
  }
  ,
  e.prototype.process = function() {
      var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, s = this.activeTarget;
      if (this.scrollHeight != n && this.refresh(),
      e >= i)
          return s != (t = r[r.length - 1]) && this.activate(t);
      if (s && e < o[0])
          return this.activeTarget = null,
          this.clear();
      for (t = o.length; t--; )
          s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
  }
  ,
  e.prototype.activate = function(e) {
      this.activeTarget = e,
      this.clear();
      var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
        , i = t(n).parents("li").addClass("active");
      i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
      i.trigger("activate.bs.scrollspy")
  }
  ,
  e.prototype.clear = function() {
      t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  }
  ;
  var i = t.fn.scrollspy;
  t.fn.scrollspy = n,
  t.fn.scrollspy.Constructor = e,
  t.fn.scrollspy.noConflict = function() {
      return t.fn.scrollspy = i,
      this
  }
  ,
  t(window).on("load.bs.scrollspy.data-api", function() {
      t('[data-spy="scroll"]').each(function() {
          var e = t(this);
          n.call(e, e.data())
      })
  })
}(jQuery),
+function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , o = i.data("bs.tab");
          o || i.data("bs.tab", o = new n(this)),
          "string" == typeof e && o[e]()
      })
  }
  var n = function(e) {
      this.element = t(e)
  };
  n.VERSION = "3.3.4",
  n.TRANSITION_DURATION = 150,
  n.prototype.show = function() {
      var e = this.element
        , n = e.closest("ul:not(.dropdown-menu)")
        , i = e.data("target");
      if (i || (i = e.attr("href"),
      i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
      !e.parent("li").hasClass("active")) {
          var o = n.find(".active:last a")
            , r = t.Event("hide.bs.tab", {
              relatedTarget: e[0]
          })
            , s = t.Event("show.bs.tab", {
              relatedTarget: o[0]
          });
          if (o.trigger(r),
          e.trigger(s),
          !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
              var a = t(i);
              this.activate(e.closest("li"), n),
              this.activate(a, a.parent(), function() {
                  o.trigger({
                      type: "hidden.bs.tab",
                      relatedTarget: e[0]
                  }),
                  e.trigger({
                      type: "shown.bs.tab",
                      relatedTarget: o[0]
                  })
              })
          }
      }
  }
  ,
  n.prototype.activate = function(e, i, o) {
      function r() {
          s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
          e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
          a ? (e[0].offsetWidth,
          e.addClass("in")) : e.removeClass("fade"),
          e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
          o && o()
      }
      var s = i.find("> .active")
        , a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
      s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(),
      s.removeClass("in")
  }
  ;
  var i = t.fn.tab;
  t.fn.tab = e,
  t.fn.tab.Constructor = n,
  t.fn.tab.noConflict = function() {
      return t.fn.tab = i,
      this
  }
  ;
  var o = function(n) {
      n.preventDefault(),
      e.call(t(this), "show")
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
+function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , o = i.data("bs.affix")
            , r = "object" == typeof e && e;
          o || i.data("bs.affix", o = new n(this,r)),
          "string" == typeof e && o[e]()
      })
  }
  var n = function(e, i) {
      this.options = t.extend({}, n.DEFAULTS, i),
      this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
      this.$element = t(e),
      this.affixed = null,
      this.unpin = null,
      this.pinnedOffset = null,
      this.checkPosition()
  };
  n.VERSION = "3.3.4",
  n.RESET = "affix affix-top affix-bottom",
  n.DEFAULTS = {
      offset: 0,
      target: window
  },
  n.prototype.getState = function(t, e, n, i) {
      var o = this.$target.scrollTop()
        , r = this.$element.offset()
        , s = this.$target.height();
      if (null != n && "top" == this.affixed)
          return o < n && "top";
      if ("bottom" == this.affixed)
          return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
      var a = null == this.affixed
        , l = a ? o : r.top
        , u = a ? s : e;
      return null != n && o <= n ? "top" : null != i && l + u >= t - i && "bottom"
  }
  ,
  n.prototype.getPinnedOffset = function() {
      if (this.pinnedOffset)
          return this.pinnedOffset;
      this.$element.removeClass(n.RESET).addClass("affix");
      var t = this.$target.scrollTop()
        , e = this.$element.offset();
      return this.pinnedOffset = e.top - t
  }
  ,
  n.prototype.checkPositionWithEventLoop = function() {
      setTimeout(t.proxy(this.checkPosition, this), 1)
  }
  ,
  n.prototype.checkPosition = function() {
      if (this.$element.is(":visible")) {
          var e = this.$element.height()
            , i = this.options.offset
            , o = i.top
            , r = i.bottom
            , s = t(document.body).height();
          "object" != typeof i && (r = o = i),
          "function" == typeof o && (o = i.top(this.$element)),
          "function" == typeof r && (r = i.bottom(this.$element));
          var a = this.getState(s, e, o, r);
          if (this.affixed != a) {
              null != this.unpin && this.$element.css("top", "");
              var l = "affix" + (a ? "-" + a : "")
                , u = t.Event(l + ".bs.affix");
              if (this.$element.trigger(u),
              u.isDefaultPrevented())
                  return;
              this.affixed = a,
              this.unpin = "bottom" == a ? this.getPinnedOffset() : null,
              this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
          }
          "bottom" == a && this.$element.offset({
              top: s - e - r
          })
      }
  }
  ;
  var i = t.fn.affix;
  t.fn.affix = e,
  t.fn.affix.Constructor = n,
  t.fn.affix.noConflict = function() {
      return t.fn.affix = i,
      this
  }
  ,
  t(window).on("load", function() {
      t('[data-spy="affix"]').each(function() {
          var n = t(this)
            , i = n.data();
          i.offset = i.offset || {},
          null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
          null != i.offsetTop && (i.offset.top = i.offsetTop),
          e.call(n, i)
      })
  })
}(jQuery),
function(t) {
  "use strict";
  var e = function(t, e) {
      var n, c, f, p, d, h, g, m = "object" == typeof e && e.maintainCase || !1, v = "object" == typeof e && "object" == typeof e.custom && e.custom ? e.custom : {}, y = "object" == typeof e && e.separator || "-", b = "object" == typeof e && +e.truncate > 1 && e.truncate || !1, x = "object" == typeof e && e.uric || !1, w = "object" == typeof e && e.uricNoSlash || !1, T = "object" == typeof e && e.mark || !1, C = "object" == typeof e && e.lang && u[e.lang] ? u[e.lang] : "object" != typeof e || e.lang !== !1 && e.lang !== !0 ? u.en : {}, k = "object" == typeof e && e.lang && l[e.lang] ? l[e.lang] : "object" != typeof e || e.lang !== !1 && e.lang !== !0 ? l.en : {}, E = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"], S = [";", "?", ":", "@", "&", "=", "+", "$", ","], N = [".", "!", "~", "*", "'", "(", ")"], $ = "", A = "", D = y;
      if ("object" == typeof e && e.titleCase && "number" == typeof e.titleCase.length && Array.prototype.toString.call(e.titleCase) ? (e.titleCase.forEach(function(t) {
          v[t + ""] = t + ""
      }),
      n = !0) : n = "object" == typeof e && !!e.titleCase,
      "object" == typeof e && e.custom && "number" == typeof e.custom.length && Array.prototype.toString.call(e.custom) && e.custom.forEach(function(t) {
          v[t + ""] = t + ""
      }),
      "string" != typeof t)
          return "";
      "string" == typeof e ? y = e : "object" == typeof e && (x && (D += E.join("")),
      w && (D += S.join("")),
      T && (D += N.join(""))),
      Object.keys(v).forEach(function(e) {
          var n;
          n = e.length > 1 ? new RegExp("\\b" + i(e) + "\\b","gi") : new RegExp(i(e),"gi"),
          t = t.replace(n, v[e])
      });
      for (p in v)
          D += p;
      for (n && (t = t.replace(/(\w)(\S*)/g, function(t, e, n) {
          var i = e.toUpperCase() + (null !== n ? n : "");
          return Object.keys(v).indexOf(i.toLowerCase()) < 0 ? i : i.toLowerCase()
      })),
      D = i(D),
      t = t.replace(/(^\s+|\s+$)/g, ""),
      h = !1,
      g = !1,
      f = 0,
      d = t.length; f < d; f++)
          p = t[f],
          o(p, v) ? h = !1 : k[p] ? (p = h && k[p].match(/[A-Za-z0-9]/) ? " " + k[p] : k[p],
          h = !1) : p in r ? (f + 1 < d && s.indexOf(t[f + 1]) >= 0 ? (A += p,
          p = "") : g === !0 ? (p = a[A] + r[p],
          A = "") : p = h && r[p].match(/[A-Za-z0-9]/) ? " " + r[p] : r[p],
          h = !1,
          g = !1) : p in a ? (A += p,
          p = "",
          f === d - 1 && (p = a[A]),
          g = !0) : !C[p] || x && E.join("").indexOf(p) !== -1 || w && S.join("").indexOf(p) !== -1 || T && N.join("").indexOf(p) !== -1 ? (g === !0 ? (p = a[A] + p,
          A = "",
          g = !1) : h && (/[A-Za-z0-9]/.test(p) || $.substr(-1).match(/A-Za-z0-9]/)) && (p = " " + p),
          h = !1) : (p = h || $.substr(-1).match(/[A-Za-z0-9]/) ? y + C[p] : C[p],
          p += void 0 !== t[f + 1] && t[f + 1].match(/[A-Za-z0-9]/) ? y : "",
          h = !0),
          $ += p.replace(new RegExp("[^\\w\\s" + D + "_-]","g"), y);
      return $ = $.replace(/\s+/g, y).replace(new RegExp("\\" + y + "+","g"), y).replace(new RegExp("(^\\" + y + "+|\\" + y + "+$)","g"), ""),
      b && $.length > b && (c = $.charAt(b) === y,
      $ = $.slice(0, b),
      c || ($ = $.slice(0, $.lastIndexOf(y)))),
      m || n || ($ = $.toLowerCase()),
      $
  }
    , n = function(t) {
      return function(n) {
          return e(n, t)
      }
  }
    , i = function(t) {
      return t.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&")
  }
    , o = function(t, e) {
      for (var n in e)
          if (e[n] === t)
              return !0
  }
    , r = {
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "Ae",
      "Å": "A",
      "Æ": "AE",
      "Ç": "C",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "Ð": "D",
      "Ñ": "N",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "Oe",
      "Ő": "O",
      "Ø": "O",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "Ue",
      "Ű": "U",
      "Ý": "Y",
      "Þ": "TH",
      "ß": "ss",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "ae",
      "å": "a",
      "æ": "ae",
      "ç": "c",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "ð": "d",
      "ñ": "n",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "oe",
      "ő": "o",
      "ø": "o",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "ue",
      "ű": "u",
      "ý": "y",
      "þ": "th",
      "ÿ": "y",
      "ẞ": "SS",
      "α": "a",
      "β": "v",
      "γ": "g",
      "δ": "d",
      "ε": "e",
      "ζ": "z",
      "η": "i",
      "θ": "th",
      "ι": "i",
      "κ": "k",
      "λ": "l",
      "μ": "m",
      "ν": "n",
      "ξ": "ks",
      "ο": "o",
      "π": "p",
      "ρ": "r",
      "σ": "s",
      "τ": "t",
      "υ": "y",
      "φ": "f",
      "χ": "x",
      "ψ": "ps",
      "ω": "o",
      "ά": "a",
      "έ": "e",
      "ί": "i",
      "ό": "o",
      "ύ": "y",
      "ή": "i",
      "ώ": "o",
      "ς": "s",
      "ϊ": "i",
      "ΰ": "y",
      "ϋ": "y",
      "ΐ": "i",
      "Α": "A",
      "Β": "B",
      "Γ": "G",
      "Δ": "D",
      "Ε": "E",
      "Ζ": "Z",
      "Η": "I",
      "Θ": "TH",
      "Ι": "I",
      "Κ": "K",
      "Λ": "L",
      "Μ": "M",
      "Ν": "N",
      "Ξ": "KS",
      "Ο": "O",
      "Π": "P",
      "Ρ": "R",
      "Σ": "S",
      "Τ": "T",
      "Υ": "Y",
      "Φ": "F",
      "Χ": "X",
      "Ψ": "PS",
      "Ω": "W",
      "Ά": "A",
      "Έ": "E",
      "Ί": "I",
      "Ό": "O",
      "Ύ": "Y",
      "Ή": "I",
      "Ώ": "O",
      "Ϊ": "I",
      "Ϋ": "Y",
      "ş": "s",
      "Ş": "S",
      "ı": "i",
      "İ": "I",
      "ğ": "g",
      "Ğ": "G",
      "Ќ": "Kj",
      "ќ": "kj",
      "Љ": "Lj",
      "љ": "lj",
      "Њ": "Nj",
      "њ": "nj",
      "Тс": "Ts",
      "тс": "ts",
      "а": "a",
      "б": "b",
      "в": "v",
      "г": "g",
      "д": "d",
      "е": "e",
      "ё": "yo",
      "ж": "zh",
      "з": "z",
      "и": "i",
      "й": "j",
      "к": "k",
      "л": "l",
      "м": "m",
      "н": "n",
      "о": "o",
      "п": "p",
      "р": "r",
      "с": "s",
      "т": "t",
      "у": "u",
      "ф": "f",
      "х": "h",
      "ц": "c",
      "ч": "ch",
      "ш": "sh",
      "щ": "sh",
      "ъ": "",
      "ы": "y",
      "ь": "",
      "э": "e",
      "ю": "yu",
      "я": "ya",
      "А": "A",
      "Б": "B",
      "В": "V",
      "Г": "G",
      "Д": "D",
      "Е": "E",
      "Ё": "Yo",
      "Ж": "Zh",
      "З": "Z",
      "И": "I",
      "Й": "J",
      "К": "K",
      "Л": "L",
      "М": "M",
      "Н": "N",
      "О": "O",
      "П": "P",
      "Р": "R",
      "С": "S",
      "Т": "T",
      "У": "U",
      "Ф": "F",
      "Х": "H",
      "Ц": "C",
      "Ч": "Ch",
      "Ш": "Sh",
      "Щ": "Sh",
      "Ъ": "",
      "Ы": "Y",
      "Ь": "",
      "Э": "E",
      "Ю": "Yu",
      "Я": "Ya",
      "Є": "Ye",
      "І": "I",
      "Ї": "Yi",
      "Ґ": "G",
      "є": "ye",
      "і": "i",
      "ї": "yi",
      "ґ": "g",
      "č": "c",
      "ď": "d",
      "ě": "e",
      "ň": "n",
      "ř": "r",
      "š": "s",
      "ť": "t",
      "ů": "u",
      "ž": "z",
      "Č": "C",
      "Ď": "D",
      "Ě": "E",
      "Ň": "N",
      "Ř": "R",
      "Š": "S",
      "Ť": "T",
      "Ů": "U",
      "Ž": "Z",
      "ľ": "l",
      "ĺ": "l",
      "ŕ": "r",
      "Ľ": "L",
      "Ĺ": "L",
      "Ŕ": "R",
      "ą": "a",
      "ć": "c",
      "ę": "e",
      "ł": "l",
      "ń": "n",
      "ś": "s",
      "ź": "z",
      "ż": "z",
      "Ą": "A",
      "Ć": "C",
      "Ę": "E",
      "Ł": "L",
      "Ń": "N",
      "Ś": "S",
      "Ź": "Z",
      "Ż": "Z",
      "ā": "a",
      "ē": "e",
      "ģ": "g",
      "ī": "i",
      "ķ": "k",
      "ļ": "l",
      "ņ": "n",
      "ū": "u",
      "Ā": "A",
      "Ē": "E",
      "Ģ": "G",
      "Ī": "I",
      "Ķ": "k",
      "Ļ": "L",
      "Ņ": "N",
      "Ū": "U",
      "ا": "a",
      "أ": "a",
      "إ": "i",
      "آ": "aa",
      "ؤ": "u",
      "ئ": "e",
      "ء": "a",
      "ب": "b",
      "ت": "t",
      "ث": "th",
      "ج": "j",
      "ح": "h",
      "خ": "kh",
      "د": "d",
      "ذ": "th",
      "ر": "r",
      "ز": "z",
      "س": "s",
      "ش": "sh",
      "ص": "s",
      "ض": "dh",
      "ط": "t",
      "ظ": "z",
      "ع": "a",
      "غ": "gh",
      "ف": "f",
      "ق": "q",
      "ك": "k",
      "ل": "l",
      "م": "m",
      "ن": "n",
      "ه": "h",
      "و": "w",
      "ي": "y",
      "ى": "a",
      "ة": "h",
      "ﻻ": "la",
      "ﻷ": "laa",
      "ﻹ": "lai",
      "ﻵ": "laa",
      "َ": "a",
      "ً": "an",
      "ِ": "e",
      "ٍ": "en",
      "ُ": "u",
      "ٌ": "on",
      "ْ": "",
      "٠": "0",
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "“": '"',
      "”": '"',
      "‘": "'",
      "’": "'",
      "∂": "d",
      "ƒ": "f",
      "™": "(TM)",
      "©": "(C)",
      "œ": "oe",
      "Œ": "OE",
      "®": "(R)",
      "†": "+",
      "℠": "(SM)",
      "…": "...",
      "˚": "o",
      "º": "o",
      "ª": "a",
      "•": "*",
      "၊": ",",
      "။": ".",
      $: "USD",
      "€": "EUR",
      "₢": "BRN",
      "₣": "FRF",
      "£": "GBP",
      "₤": "ITL",
      "₦": "NGN",
      "₧": "ESP",
      "₩": "KRW",
      "₪": "ILS",
      "₫": "VND",
      "₭": "LAK",
      "₮": "MNT",
      "₯": "GRD",
      "₱": "ARS",
      "₲": "PYG",
      "₳": "ARA",
      "₴": "UAH",
      "₵": "GHS",
      "¢": "cent",
      "¥": "CNY",
      "元": "CNY",
      "円": "YEN",
      "﷼": "IRR",
      "₠": "EWE",
      "฿": "THB",
      "₨": "INR",
      "₹": "INR",
      "₰": "PF",
      "đ": "d",
      "Đ": "D",
      "ẹ": "e",
      "Ẹ": "E",
      "ẽ": "e",
      "Ẽ": "E",
      "ế": "e",
      "Ế": "E",
      "ề": "e",
      "Ề": "E",
      "ệ": "e",
      "Ệ": "E",
      "ễ": "e",
      "Ễ": "E",
      "ọ": "o",
      "Ọ": "o",
      "ố": "o",
      "Ố": "O",
      "ồ": "o",
      "Ồ": "O",
      "ộ": "o",
      "Ộ": "O",
      "ỗ": "o",
      "Ỗ": "O",
      "ơ": "o",
      "Ơ": "O",
      "ớ": "o",
      "Ớ": "O",
      "ờ": "o",
      "Ờ": "O",
      "ợ": "o",
      "Ợ": "O",
      "ỡ": "o",
      "Ỡ": "O",
      "ị": "i",
      "Ị": "I",
      "ĩ": "i",
      "Ĩ": "I",
      "ụ": "u",
      "Ụ": "U",
      "ũ": "u",
      "Ũ": "U",
      "ư": "u",
      "Ư": "U",
      "ứ": "u",
      "Ứ": "U",
      "ừ": "u",
      "Ừ": "U",
      "ự": "u",
      "Ự": "U",
      "ữ": "u",
      "Ữ": "U",
      "ỳ": "y",
      "Ỳ": "Y",
      "ỵ": "y",
      "Ỵ": "Y",
      "ỹ": "y",
      "Ỹ": "Y",
      "ạ": "a",
      "Ạ": "A",
      "ấ": "a",
      "Ấ": "A",
      "ầ": "a",
      "Ầ": "A",
      "ậ": "a",
      "Ậ": "A",
      "ẫ": "a",
      "Ẫ": "A",
      "ă": "a",
      "Ă": "A",
      "ắ": "a",
      "Ắ": "A",
      "ằ": "a",
      "Ằ": "A",
      "ặ": "a",
      "Ặ": "A",
      "ẵ": "a",
      "Ẵ": "A",
      "က": "k",
      "ခ": "kh",
      "ဂ": "g",
      "ဃ": "ga",
      "င": "ng",
      "စ": "s",
      "ဆ": "sa",
      "ဇ": "z",
      "စျ": "za",
      "ည": "ny",
      "ဋ": "t",
      "ဌ": "ta",
      "ဍ": "d",
      "ဎ": "da",
      "ဏ": "na",
      "တ": "t",
      "ထ": "ta",
      "ဒ": "d",
      "ဓ": "da",
      "န": "n",
      "ပ": "p",
      "ဖ": "pa",
      "ဗ": "b",
      "ဘ": "ba",
      "မ": "m",
      "ယ": "y",
      "ရ": "ya",
      "လ": "l",
      "ဝ": "w",
      "သ": "th",
      "ဟ": "h",
      "ဠ": "la",
      "အ": "a",
      "ြ": "y",
      "ျ": "ya",
      "ွ": "w",
      "ြွ": "yw",
      "ျွ": "ywa",
      "ှ": "h",
      "ဧ": "e",
      "၏": "-e",
      "ဣ": "i",
      "ဤ": "-i",
      "ဉ": "u",
      "ဦ": "-u",
      "ဩ": "aw",
      "သြော": "aw",
      "ဪ": "aw",
      "၀": "0",
      "၁": "1",
      "၂": "2",
      "၃": "3",
      "၄": "4",
      "၅": "5",
      "၆": "6",
      "၇": "7",
      "၈": "8",
      "၉": "9",
      "္": "",
      "့": "",
      "း": ""
  }
    , s = ["်"]
    , a = {
      "ာ": "a",
      "ါ": "a",
      "ေ": "e",
      "ဲ": "e",
      "ိ": "i",
      "ီ": "i",
      "ို": "o",
      "ု": "u",
      "ူ": "u",
      "ေါင်": "aung",
      "ော": "aw",
      "ော်": "aw",
      "ေါ": "aw",
      "ေါ်": "aw",
      "်": "်",
      "က်": "et",
      "ိုက်": "aik",
      "ောက်": "auk",
      "င်": "in",
      "ိုင်": "aing",
      "ောင်": "aung",
      "စ်": "it",
      "ည်": "i",
      "တ်": "at",
      "ိတ်": "eik",
      "ုတ်": "ok",
      "ွတ်": "ut",
      "ေတ်": "it",
      "ဒ်": "d",
      "ိုဒ်": "ok",
      "ုဒ်": "ait",
      "န်": "an",
      "ာန်": "an",
      "ိန်": "ein",
      "ုန်": "on",
      "ွန်": "un",
      "ပ်": "at",
      "ိပ်": "eik",
      "ုပ်": "ok",
      "ွပ်": "ut",
      "န်ုပ်": "nub",
      "မ်": "an",
      "ိမ်": "ein",
      "ုမ်": "on",
      "ွမ်": "un",
      "ယ်": "e",
      "ိုလ်": "ol",
      "ဉ်": "in",
      "ံ": "an",
      "ိံ": "ein",
      "ုံ": "on"
  }
    , l = {
      en: {},
      hu: {
          "ä": "a",
          "Ä": "A",
          "ö": "o",
          "Ö": "O",
          "ü": "u",
          "Ü": "U",
          "ű": "u",
          "Ű": "U"
      },
      sk: {
          "ä": "a",
          "Ä": "A"
      },
      tr: {
          "Ü": "U",
          "Ö": "O",
          "ü": "u",
          "ö": "o"
      }
  }
    , u = {
      ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
      },
      cz: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mene jako",
          ">": "vice jako",
          "∑": "soucet",
          "¤": "mena"
      },
      de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
      },
      en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
      },
      es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
      },
      fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
      },
      hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
      },
      my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
      },
      nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
      },
      it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
      },
      pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
      },
      ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
      },
      sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
      },
      tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
      },
      vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
      }
  };
  if ("undefined" != typeof module && module.exports)
      module.exports = e,
      module.exports.createSlug = n;
  else if ("undefined" != typeof define && define.amd)
      define([], function() {
          return e
      });
  else
      try {
          if (t.getSlug || t.createSlug)
              throw "speakingurl: globals exists /(getSlug|createSlug)/";
          t.getSlug = e,
          t.createSlug = n
      } catch (c) {}
}(this),
function(t) {
  t.fn.slugify = function(e, n) {
      return this.each(function() {
          var i = t(this)
            , o = t(e);
          i.on("keyup change", function() {
              "" !== i.val() && void 0 !== i.val() ? i.data("locked", !0) : i.data("locked", !1)
          }),
          o.on("keyup change", function() {
              !0 !== i.data("locked") && (i.is("input") || i.is("textarea") ? i.val(t.slugify(o.val(), n)) : i.text(t.slugify(o.val(), n)))
          })
      })
  }
  ,
  t.slugify = function(e, n) {
      return n = t.extend({}, t.slugify.options, n),
      n.lang = n.lang || t("html").prop("lang"),
      "function" == typeof n.preSlug && (e = n.preSlug(e)),
      e = n.slugFunc(e, n),
      "function" == typeof n.postSlug && (e = n.postSlug(e)),
      e
  }
  ,
  t.slugify.options = {
      preSlug: null,
      postSlug: null,
      slugFunc: function(t, e) {
          return window.getSlug(t, e)
      }
  }
}(jQuery);
