;(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    '1TsT': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var i = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      )
      var o = void 0
      function r() {
        return (
          void 0 === o &&
            (o = (function () {
              if (!i) return !1
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1
              var e = !1
              try {
                var t = Object.defineProperty({}, 'passive', {
                    get: function () {
                      e = !0
                    },
                  }),
                  n = function () {}
                window.addEventListener('testPassiveEventSupport', n, t),
                  window.removeEventListener('testPassiveEventSupport', n, t)
              } catch (o) {}
              return e
            })()),
          o
        )
      }
      function a(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice())
      }
      function s(e) {
        ;(this.target = e), (this.events = {})
      }
      ;(s.prototype.getEventHandlers = function (e, t) {
        var n,
          i =
            String(e) +
            ' ' +
            String(
              (n = t)
                ? !0 === n
                  ? 100
                  : (n.capture << 0) + (n.passive << 1) + (n.once << 2)
                : 0
            )
        return (
          this.events[i] ||
            ((this.events[i] = { handlers: [], handleEvent: void 0 }),
            (this.events[i].nextHandlers = this.events[i].handlers)),
          this.events[i]
        )
      }),
        (s.prototype.handleEvent = function (e, t, n) {
          var i = this.getEventHandlers(e, t)
          ;(i.handlers = i.nextHandlers),
            i.handlers.forEach(function (e) {
              e && e(n)
            })
        }),
        (s.prototype.add = function (e, t, n) {
          var i = this,
            o = this.getEventHandlers(e, n)
          a(o),
            0 === o.nextHandlers.length &&
              ((o.handleEvent = this.handleEvent.bind(this, e, n)),
              this.target.addEventListener(e, o.handleEvent, n)),
            o.nextHandlers.push(t)
          var r = !0
          return function () {
            if (r) {
              ;(r = !1), a(o)
              var s = o.nextHandlers.indexOf(t)
              o.nextHandlers.splice(s, 1),
                0 === o.nextHandlers.length &&
                  (i.target &&
                    i.target.removeEventListener(e, o.handleEvent, n),
                  (o.handleEvent = void 0))
            }
          }
        })
      function l(e, t, n, i) {
        e.__consolidated_events_handlers__ ||
          (e.__consolidated_events_handlers__ = new s(e))
        var o = (function (e) {
          if (e) return r() ? e : !!e.capture
        })(i)
        return e.__consolidated_events_handlers__.add(t, n, o)
      }
    },
    '4KSP': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      var i = n('q1tI'),
        o = n.n(i),
        r = n('ZMKu'),
        a = n('tKSW'),
        s = n('6fqw'),
        l = n('7Bp7'),
        c = n('lcRF'),
        u = n('wnQI'),
        d = n('iuhU'),
        h = n('Z4UL'),
        v = n('WJip'),
        f = {
          initial: { opacity: 0 },
          animate: { zIndex: 1, opacity: 1 },
          exit: { zIndex: 0, opacity: 0.5 },
          transition: { opacity: { duration: 0.6 } },
        },
        y = function (e) {
          var t = e.items,
            n = e.blockPosition,
            y = Object(i.useState)(0),
            p = y[0],
            g = y[1],
            m = Object(a.o)(0, t.length, p),
            b = function (e) {
              g(e - 1)
            },
            k = t[m].media
          return (
            Object(i.useEffect)(function () {
              Object(v.a)(
                t.map(function (e) {
                  var t
                  return (
                    (null == e || null === (t = e.media) || void 0 === t
                      ? void 0
                      : t.image) + '?q=30&w=1500'
                  )
                })
              )
            }, []),
            o.a.createElement(
              'div',
              {
                className: Object(d.a)('relative mx-auto', {
                  'md:-mt-32 first': 'first' === n,
                  'mb-32 lg:mb-48 middle': 'middle' === n,
                  '-mb-12 last': 'last' === n,
                }),
                'data-component': 'FullWidthCarousel',
              },
              o.a.createElement(
                s.a,
                { ratio: '2:1' },
                o.a.createElement(
                  r.a,
                  null,
                  o.a.createElement(
                    r.b.div,
                    Object.assign({ key: p }, f, {
                      drag: 'x',
                      dragConstraints: { left: 0, right: 0 },
                      dragElastic: 0,
                      onDragEnd: function (e, t) {
                        var n = t.offset,
                          i = t.velocity
                        Object(c.a)({
                          offset: n.x,
                          velocity: i.x,
                          onSwipeLeft: function () {
                            return b(p + 2)
                          },
                          onSwipeRight: function () {
                            return b(p)
                          },
                        })
                      },
                      className: 'absolute h-full w-full object-cover',
                    }),
                    (null == k ? void 0 : k.videoUrl)
                      ? o.a.createElement(u.a, {
                          alt: k.alt,
                          image: k.image,
                          videoUrl: k.videoUrl,
                          videoOptions: { controls: !1 },
                        })
                      : o.a.createElement('img', {
                          src: (null == k ? void 0 : k.image) + '?q=30&w=2000',
                          className:
                            'pointer-events-none h-full w-full object-cover',
                        })
                  )
                )
              ),
              t.length > 1 &&
                o.a.createElement(
                  i.Fragment,
                  null,
                  o.a.createElement('div', {
                    className: 'absolute inset-0 z-10 pointer-events-none',
                    style: {
                      background:
                        'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 47.5%)',
                    },
                  }),
                  o.a.createElement(
                    'div',
                    {
                      className:
                        'absolute pb-4 bottom-0 left-1/2 transform -translate-x-1/2 z-10',
                    },
                    o.a.createElement(l.a, {
                      current: m + 1,
                      total: t.length,
                      variant: 'horizontal',
                      onClick: b,
                    })
                  ),
                  o.a.createElement(h.c, {
                    className:
                      'hidden absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:flex justify-between w-full px-4',
                    onClickNext: function () {
                      b(p + 2)
                    },
                    onClickPrev: function () {
                      b(p)
                    },
                  })
                )
            )
          )
        }
    },
    '5IOR': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'HotKeys', function () {
          return $e
        }),
        n.d(t, 'GlobalHotKeys', function () {
          return tt
        }),
        n.d(t, 'IgnoreKeys', function () {
          return ot
        }),
        n.d(t, 'ObserveKeys', function () {
          return rt
        }),
        n.d(t, 'withHotKeys', function () {
          return Xe
        }),
        n.d(t, 'withIgnoreKeys', function () {
          return at
        }),
        n.d(t, 'withObserveKeys', function () {
          return st
        }),
        n.d(t, 'configure', function () {
          return lt
        }),
        n.d(t, 'getApplicationKeyMap', function () {
          return ct
        }),
        n.d(t, 'recordKeyCombination', function () {
          return ut
        })
      var i = n('17x9'),
        o = n.n(i),
        r = n('q1tI'),
        a = n.n(r)
      function s(e) {
        return (s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      function u(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), e
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n)
          'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            i.forEach(function (t) {
              d(e, t, n[t])
            })
        }
        return e
      }
      function f(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && p(e, t)
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function g() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' == typeof Proxy) return !0
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          )
        } catch (e) {
          return !1
        }
      }
      function m(e, t, n) {
        return (m = g()
          ? Reflect.construct
          : function (e, t, n) {
              var i = [null]
              i.push.apply(i, t)
              var o = new (Function.bind.apply(e, i))()
              return n && p(o, n.prototype), o
            }).apply(null, arguments)
      }
      function b(e) {
        var t = 'function' == typeof Map ? new Map() : void 0
        return (b = function (e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))
          )
            return e
          var n
          if ('function' != typeof e)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e)
            t.set(e, i)
          }
          function i() {
            return m(e, arguments, y(this).constructor)
          }
          return (
            (i.prototype = Object.create(e.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            p(i, e)
          )
        })(e)
      }
      function k(e, t) {
        if (null == e) return {}
        var n,
          i,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              i,
              o = {},
              r = Object.keys(e)
            for (i = 0; i < r.length; i++)
              (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          for (i = 0; i < r.length; i++)
            (n = r[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      function E(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function _(e, t) {
        return !t || ('object' != typeof t && 'function' != typeof t) ? E(e) : t
      }
      function w(e, t, n) {
        return (w =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var i = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = y(e));

                  );
                  return e
                })(e, t)
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t)
                  return o.get ? o.get.call(n) : o.value
                }
              })(e, t, n || e)
      }
      function C(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t]
              return n
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            )
          })()
        )
      }
      function x(e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
        return e.reduce(function (e, n) {
          return (e[n] = t || { value: n }), e
        }, {})
      }
      var K = {
          logLevel: 'warn',
          defaultKeyEvent: 'keydown',
          defaultComponent: 'div',
          defaultTabIndex: '-1',
          ignoreTags: ['input', 'select', 'textarea'],
          enableHardSequences: !1,
          ignoreKeymapAndHandlerChangesByDefault: !0,
          ignoreEventsCondition: function (e) {
            var t = e.target
            if (t && t.tagName) {
              var n = t.tagName.toLowerCase()
              return O.option('_ignoreTagsDict')[n] || t.isContentEditable
            }
            return !1
          },
          ignoreRepeatedEventsWhenKeyHeldDown: !0,
          simulateMissingKeyPressEvents: !0,
          stopEventPropagationAfterHandling: !0,
          stopEventPropagationAfterIgnoring: !0,
          allowCombinationSubmatches: !1,
          customKeyCodes: {},
        },
        S = v({}, K)
      S._ignoreTagsDict = x(S.ignoreTags, !0)
      var O = (function () {
          function e() {
            l(this, e)
          }
          return (
            u(e, null, [
              {
                key: 'init',
                value: function (e) {
                  var t = this,
                    n = e.ignoreTags,
                    i = e.customKeyCodes
                  n && (e._ignoreTagsDict = x(e.ignoreTags)),
                    i &&
                      (e._customKeyNamesDict = x(
                        Object.values(e.customKeyCodes)
                      )),
                    -1 !== ['verbose', 'debug', 'info'].indexOf(e.logLevel) &&
                      console.warn(
                        "React HotKeys: You have requested log level '".concat(
                          e.logLevel,
                          "' but for performance reasons, logging below severity level 'warning' is disabled in production. Please use the development build for complete logs."
                        )
                      ),
                    Object.keys(e).forEach(function (n) {
                      t.set(n, e[n])
                    })
                },
              },
              {
                key: 'set',
                value: function (e, t) {
                  S[e] = t
                },
              },
              {
                key: 'reset',
                value: function (e) {
                  S[e] = K[e]
                },
              },
              {
                key: 'option',
                value: function (e) {
                  return S[e]
                },
              },
            ]),
            e
          )
        })(),
        I = (function () {
          function e() {
            var t = this,
              n =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'warn'
            l(this, e),
              d(this, 'verbose', this.noop),
              d(this, 'debug', this.noop),
              d(this, 'info', this.noop),
              d(this, 'warn', this.noop),
              d(this, 'error', this.noop),
              (this.logLevel = this.constructor.levels[n]),
              this.logLevel >= this.constructor.levels.error &&
                ((this.error = console.error),
                this.logLevel >= this.constructor.levels.warn &&
                  ((this.warn = console.warn),
                  ['info', 'debug', 'verbose'].some(function (e) {
                    return !(
                      t.logLevel >= t.constructor.levels[e] &&
                      ((t[e] = console.log), 1)
                    )
                  })))
          }
          return u(e, [{ key: 'noop', value: function () {} }]), e
        })()
      d(I, 'logIcons', ['📕', '📗', '📘', '📙']),
        d(I, 'componentIcons', ['🔺', '⭐️', '🔷', '🔶', '⬛️']),
        d(I, 'eventIcons', ['❤️', '💚', '💙', '💛', '💜', '🧡']),
        d(I, 'levels', {
          none: 0,
          error: 1,
          warn: 2,
          info: 3,
          debug: 4,
          verbose: 5,
        })
      var P = { keydown: 0, keypress: 1, keyup: 2 },
        N = {
          Shift: ['shiftKey'],
          Meta: ['metaKey'],
          Control: ['ctrlKey'],
          Alt: ['altKey'],
        },
        T = {
          '`': ['~'],
          1: ['!'],
          2: ['@', '"'],
          3: ['#', '£'],
          4: ['$'],
          5: ['%'],
          6: ['^'],
          7: ['&'],
          8: ['*'],
          9: ['('],
          0: [')'],
          '-': ['_'],
          '=': ['plus'],
          ';': [':'],
          "'": ['"', '@'],
          ',': ['<'],
          '.': ['>'],
          '/': ['?'],
          '\\': ['|'],
          '[': ['{'],
          ']': ['}'],
          '#': ['~'],
        }
      function M(e) {
        return T[e] || [1 === e.length ? e.toUpperCase() : e]
      }
      function j(e, t) {
        return e.hasOwnProperty(t)
      }
      function L(e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        return Object.keys(e).reduce(function (n, i) {
          var o = e[i]
          return (
            o.forEach(function (e) {
              j(n, e) || (n[e] = []), n[e].push(i)
            }),
            t.includeOriginal &&
              (!j(n, i) && (n[i] = []), (n[i] = [].concat(C(n[i]), C(o)))),
            n
          )
        }, {})
      }
      var A = L(T)
      function H(e) {
        return A[e] || [1 === e.length ? e.toLowerCase() : e]
      }
      var D = L({}, { includeOriginal: !0 })
      function R(e) {
        return 'string' == typeof e
      }
      function B(e) {
        return R(e) ? e.trim().replace(/\s+/g, ' ') : e
      }
      var U = {
          tab: 'Tab',
          capslock: 'CapsLock',
          shift: 'Shift',
          meta: 'Meta',
          alt: 'Alt',
          ctrl: 'Control',
          space: ' ',
          spacebar: ' ',
          escape: 'Escape',
          esc: 'Escape',
          left: 'ArrowLeft',
          right: 'ArrowRight',
          up: 'ArrowUp',
          down: 'ArrowDown',
          return: 'Enter',
          del: 'Delete',
          command: 'Meta',
          option: 'Alt',
          enter: 'Enter',
          backspace: 'Backspace',
          ins: 'Insert',
          pageup: 'PageUp',
          pagedown: 'PageDown',
          end: 'End',
          home: 'Home',
          contextmenu: 'ContextMenu',
          numlock: 'Clear',
        },
        F = { cmd: 'Meta' }
      function q(e) {
        var t = e.toLowerCase()
        return U[t] || F[t] || (e.match(/^f\d+$/) ? e.toUpperCase() : e)
      }
      var z = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta',
        },
        G = x(Object.values(z), !0)
      function Z(e) {
        return !!G[e]
      }
      function W(e) {
        return (
          Z(e) ||
          String.fromCharCode(e.charCodeAt(0)) === e ||
          (function (e) {
            return O.option('_customKeyNamesDict')[e]
          })(e)
        )
      }
      var V = (function (e) {
        function t() {
          var e, n
          l(this, t)
          for (var i = arguments.length, o = Array(i), r = 0; r < i; r++)
            o[r] = arguments[r]
          return (
            d(
              E(E((n = _(this, (e = y(t)).call.apply(e, [this].concat(o)))))),
              'name',
              'InvalidKeyNameError'
            ),
            n
          )
        }
        return f(t, e), t
      })(b(Error))
      function J(e) {
        return e.sort().join('+')
      }
      var Y = (function () {
        function e() {
          l(this, e)
        }
        return (
          u(e, null, [
            {
              key: 'parse',
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = B(e),
                  i = n.split(' ')
                try {
                  var o = i.slice(0, i.length - 1),
                    r = i[i.length - 1],
                    a = o
                      .map(function (e) {
                        var n = Q(e, t)
                        return J(Object.keys(n))
                      })
                      .join(' '),
                    s = Q(r, t),
                    l = J(Object.keys(s)),
                    c = {
                      id: l,
                      keyDictionary: s,
                      keyEventType: t.keyEventType,
                      size: Object.keys(s).length,
                    }
                  return {
                    sequence: { prefix: a, size: o.length + 1 },
                    combination: c,
                  }
                } catch (e) {
                  return { sequence: null, combination: null }
                }
              },
            },
          ]),
          e
        )
      })()
      function Q(e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        return e
          .replace(/^\+|(\s|[^+]\+)\+/, '$1plus')
          .split('+')
          .reduce(function (e, n) {
            var i = q(n)
            if (t.ensureValidKeys && !W(i)) throw new V()
            return (e[i] = !0), e
          }, {})
      }
      var X = {
          '`': ['`'],
          1: ['¡'],
          2: ['™'],
          3: ['£'],
          4: ['¢'],
          5: ['∞'],
          6: ['§'],
          7: ['¶'],
          8: ['•'],
          9: ['ª'],
          0: ['º'],
          '-': ['–'],
          '=': ['≠'],
          a: ['å'],
          b: ['∫'],
          c: ['ç'],
          d: ['∂'],
          e: ['´'],
          f: ['ƒ'],
          g: ['©'],
          h: ['˙'],
          i: ['ˆ'],
          j: ['∆'],
          k: ['˚'],
          l: ['¬'],
          m: ['µ'],
          n: ['˜'],
          o: ['ø'],
          p: ['π'],
          q: ['œ'],
          r: ['®'],
          s: ['ß'],
          t: ['†'],
          u: ['¨'],
          v: ['√'],
          w: ['∑'],
          x: ['≈'],
          y: ['¥'],
          z: ['Ω'],
          '[': ['“'],
          ']': ['‘'],
          '\\': ['«'],
          "'": ['æ'],
          ';': ['…'],
          ',': ['≤'],
          '.': ['≥'],
          '/': ['÷'],
        },
        $ = L(X)
      function ee(e) {
        return $[e] || [e]
      }
      function te(e) {
        return X[e] || [e]
      }
      var ne = {
          '`': ['`'],
          1: ['⁄'],
          2: ['€'],
          3: ['‹'],
          4: ['›'],
          5: ['ﬁ'],
          6: ['ﬂ'],
          7: ['‡'],
          8: ['°'],
          9: ['·'],
          0: ['‚'],
          '-': ['—'],
          '=': ['±'],
          a: ['Å'],
          b: ['ı'],
          c: ['Ç'],
          d: ['Î'],
          e: ['´'],
          f: ['Ï'],
          g: ['˝'],
          h: ['Ó'],
          i: ['ˆ'],
          j: ['Ô'],
          k: [''],
          l: ['Ò'],
          m: ['Â'],
          n: ['˜'],
          o: ['Ø'],
          p: ['π'],
          q: ['Œ'],
          r: ['‰'],
          s: ['Í'],
          t: ['Î'],
          u: ['¨'],
          v: ['◊'],
          w: ['„'],
          x: ['˛'],
          y: ['Á'],
          z: ['¸'],
          '[': ['”'],
          ']': ['’'],
          '\\': ['»'],
          "'": ['Æ'],
          ';': ['Ú'],
          ',': ['¯'],
          '.': ['˘'],
        },
        ie = L(ne)
      function oe(e) {
        return ie[e] || H(e)
      }
      function re(e) {
        return ne[e] || [e]
      }
      var ae = (function () {
          function e() {
            l(this, e)
          }
          return (
            u(e, null, [
              {
                key: 'serialize',
                value: function (e) {
                  var t = e.Shift,
                    n = e.Alt,
                    i = {}
                  return (
                    Object.keys(e)
                      .sort()
                      .forEach(function (e) {
                        var o = []
                        if (t)
                          if (n) {
                            var r = oe(e),
                              a = re(e)
                            o = [].concat(C(o), [e], C(r), C(a))
                          } else {
                            var s = H(e),
                              l = M(e)
                            o = [].concat(C(o), [e], C(s), C(l))
                          }
                        else if (n) {
                          var c = ee(e),
                            u = te(e)
                          o = [].concat(C(o), [e], C(c), C(u))
                        } else {
                          o.push(e)
                          var h = D[e]
                          h && (o = [].concat(C(o), C(h)))
                        }
                        var f = Object.keys(i)
                        0 < f.length
                          ? f.forEach(function (e) {
                              o.forEach(function (t) {
                                i[e + '+'.concat(t)] = v({}, i[e], d({}, t, !0))
                              }),
                                delete i[e]
                            })
                          : o.forEach(function (e) {
                              i[e] = d({}, e, !0)
                            })
                      }),
                    Object.values(i).map(function (e) {
                      return Object.keys(e).sort().join('+')
                    })
                  )
                },
              },
              {
                key: 'isValidKeySerialization',
                value: function (e) {
                  return (
                    !!(0 < e.length) &&
                    !!Y.parse(e, { ensureValidKeys: !0 }).combination
                  )
                },
              },
            ]),
            e
          )
        })(),
        se = 0,
        le = 1
      function ce(e) {
        return void 0 === e
      }
      var ue = 0,
        de = 1,
        he = 2,
        ve = (function () {
          function e() {
            l(this, e)
          }
          return (
            u(e, null, [
              {
                key: 'newRecord',
                value: function (e, t) {
                  var n = [ue, ue, ue]
                  if (!ce(e)) for (var i = 0; i <= e; i++) n[i] = t
                  return n
                },
              },
              {
                key: 'setBit',
                value: function (e, t, n) {
                  return (e[t] = n), e
                },
              },
              {
                key: 'clone',
                value: function (e) {
                  for (var t = this.newRecord(), n = 0; n < e.length; n++)
                    t[n] = e[n]
                  return t
                },
              },
            ]),
            e
          )
        })()
      function fe(e) {
        return !Array.isArray(e) && 'object' === s(e) && null !== e
      }
      function ye(e) {
        return fe(e) ? 0 === Object.keys(e).length : !e || 0 === e.length
      }
      function pe(e) {
        return fe(e) ? Object.keys(e).length : e.length
      }
      var ge = (function () {
        function e() {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          l(this, e),
            (this._keys = t),
            (this._includesKeyUp = !1),
            this._update()
        }
        return (
          u(e, [
            {
              key: 'getIds',
              value: function () {
                return this._ids
              },
            },
            {
              key: 'getKeyAliases',
              value: function () {
                return this._keyAliases
              },
            },
            {
              key: 'getNormalizedKeyName',
              value: function (e) {
                if (this._keys[e]) return e
                var t = this._keyAliases[e]
                return t || e
              },
            },
            {
              key: 'getNumberOfKeys',
              value: function () {
                return pe(this._keys)
              },
            },
            {
              key: 'any',
              value: function () {
                return 0 < Object.keys(this._getKeyStates()).length
              },
            },
            {
              key: 'isEnding',
              value: function () {
                return this._includesKeyUp
              },
            },
            {
              key: 'hasEnded',
              value: function () {
                return ye(this.keysStillPressedDict())
              },
            },
            {
              key: 'addKey',
              value: function (e, t) {
                this._setKeyState(e, [
                  ve.newRecord(),
                  ve.newRecord(P.keydown, t),
                ])
              },
            },
            {
              key: 'setKeyState',
              value: function (e, t, n) {
                var i = this._getKeyState(e)
                if (this.isKeyIncluded(e)) {
                  var o = ve.clone(i[1]),
                    r = ve.clone(o)
                  ve.setBit(r, t, n), this._setKeyState(e, [o, r])
                } else this.addKey(e, n)
                t === P.keyup && (this._includesKeyUp = !0)
              },
            },
            {
              key: 'forEachKey',
              value: function (e) {
                return Object.keys(this._keys).forEach(e)
              },
            },
            {
              key: 'some',
              value: function (e) {
                return Object.keys(this._keys).some(e)
              },
            },
            {
              key: 'getKeyDictionary',
              value: function () {
                return x(Object.keys(this._getKeyStates()), !0)
              },
            },
            {
              key: 'keysStillPressedDict',
              value: function () {
                var e = this
                return Object.keys(this._keys).reduce(function (t, n) {
                  return e.isKeyStillPressed(n) && (t[n] = e._getKeyState(n)), t
                }, {})
              },
            },
            {
              key: 'isKeyIncluded',
              value: function (e) {
                return !!this._getKeyState(e)
              },
            },
            {
              key: 'isKeyStillPressed',
              value: function (e) {
                return (
                  this.isEventTriggered(e, P.keypress) && !this.isKeyReleased(e)
                )
              },
            },
            {
              key: 'isKeyReleased',
              value: function (e) {
                return this.isEventTriggered(e, P.keyup)
              },
            },
            {
              key: 'isEventTriggered',
              value: function (e, t) {
                return this._getKeyStateType(e, le, t)
              },
            },
            {
              key: 'wasEventPreviouslyTriggered',
              value: function (e, t) {
                return this._getKeyStateType(e, se, t)
              },
            },
            {
              key: 'isKeyPressSimulated',
              value: function (e) {
                return this._isKeyEventSimulated(e, P.keypress)
              },
            },
            {
              key: 'isKeyUpSimulated',
              value: function (e) {
                return this._isKeyEventSimulated(e, P.keyup)
              },
            },
            {
              key: 'describe',
              value: function () {
                return this.getIds()[0]
              },
            },
            {
              key: 'toJSON',
              value: function () {
                return {
                  keys: this._getKeyStates(),
                  ids: this.getIds(),
                  keyAliases: this.getKeyAliases(),
                }
              },
            },
            {
              key: '_getKeyStateType',
              value: function (e, t, n) {
                var i = this._getKeyState(e)
                return i && i[t][n]
              },
            },
            {
              key: '_update',
              value: function () {
                ;(this._ids = ae.serialize(this._keys)),
                  (this._keyAliases = (function (e) {
                    return Object.keys(e).reduce(function (t, n) {
                      return (
                        (function (e) {
                          return D[e] || [e]
                        })(n).forEach(function (i) {
                          ;(function (e) {
                            if (e.Shift) return e.Alt ? [re, oe] : [M, H]
                            if (e.Alt) return [te, ee]
                            var t = function (e) {
                              return [e]
                            }
                            return [t, t]
                          })(e).forEach(function (e) {
                            e(i).forEach(function (e) {
                              ;(e !== n || n !== i) && (t[e] = n)
                            })
                          })
                        }),
                        t
                      )
                    }, {})
                  })(this._keys))
              },
            },
            {
              key: '_isKeyEventSimulated',
              value: function (e, t) {
                return this.isEventTriggered(e, t) === he
              },
            },
            {
              key: '_getKeyStates',
              value: function () {
                return this._keys
              },
            },
            {
              key: '_getKeyState',
              value: function (e) {
                var t = this._keys[e]
                if (t) return t
                var n = this._keyAliases[e]
                return n ? this._keys[n] : void 0
              },
            },
            {
              key: '_setKeyState',
              value: function (e, t) {
                var n = this.getNormalizedKeyName(e)
                ;(this._keys[n] = t), this._update()
              },
            },
          ]),
          e
        )
      })()
      var me = (function () {
        function e(t) {
          var n = t.maxLength,
            i =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : null
          l(this, e),
            (this._records = []),
            (this._maxLength = n),
            i ? this._push(i) : this._push(new ge())
        }
        return (
          u(e, [
            {
              key: 'getMostRecentCombinations',
              value: function (e) {
                return this._records.slice(-e, -1)
              },
            },
            {
              key: 'any',
              value: function () {
                return this._records.some(function (e) {
                  return e.any()
                })
              },
            },
            {
              key: 'getLength',
              value: function () {
                return this._records.length
              },
            },
            {
              key: 'getCurrentCombination',
              value: function () {
                return this._records[this.getLength() - 1]
              },
            },
            {
              key: 'addKeyToCurrentCombination',
              value: function (e, t, n) {
                this._ensureInitialKeyCombination(),
                  this.getCurrentCombination().setKeyState(e, t, n)
              },
            },
            {
              key: 'setMaxLength',
              value: function (e) {
                ;(this._maxLength = e), this._trimHistory()
              },
            },
            {
              key: 'startNewKeyCombination',
              value: function (e, t) {
                this._ensureInitialKeyCombination()
                var n = new ge(
                  this.getCurrentCombination().keysStillPressedDict()
                )
                n.addKey(e, t), this._push(n)
              },
            },
            {
              key: 'toJSON',
              value: function () {
                return this._records.map(function (e) {
                  return e.toJSON()
                })
              },
            },
            {
              key: '_ensureInitialKeyCombination',
              value: function () {
                0 === this.getLength() && this._push(new ge())
              },
            },
            {
              key: '_push',
              value: function (e) {
                this._trimHistory(), this._records.push(e)
              },
            },
            {
              key: '_trimHistory',
              value: function () {
                for (; this.getLength() > this._maxLength; ) this._shift()
              },
            },
            {
              key: '_shift',
              value: function () {
                this._records.shift()
              },
            },
          ]),
          e
        )
      })()
      function be(e) {
        return Array.isArray(e) ? e : e ? [e] : []
      }
      var ke = (function (e) {
        function t() {
          return l(this, t), _(this, y(t).apply(this, arguments))
        }
        return (
          f(t, e),
          u(t, [
            {
              key: 'add',
              value: function (e, n) {
                w(y(t.prototype), 'set', this).call(this, e, {
                  childIds: [],
                  parentId: null,
                  keyMap: n,
                })
              },
            },
            {
              key: 'update',
              value: function (e, n) {
                var i = w(y(t.prototype), 'get', this).call(this, e)
                w(y(t.prototype), 'set', this).call(
                  this,
                  e,
                  v({}, i, { keyMap: n })
                )
              },
            },
            {
              key: 'setParent',
              value: function (e, t) {
                ;(this.get(e).parentId = t), this._addChildId(t, e)
              },
            },
            {
              key: 'remove',
              value: function (e) {
                var n = this._getParentId(e)
                this._removeChildId(n, e),
                  w(y(t.prototype), 'remove', this).call(this, e)
              },
            },
            {
              key: '_getParentId',
              value: function (e) {
                var t = this.get(e)
                return t && t.parentId
              },
            },
            {
              key: '_addChildId',
              value: function (e, t) {
                this.get(e).childIds.push(t)
              },
            },
            {
              key: '_removeChildId',
              value: function (e, t) {
                var n = this.get(e)
                n &&
                  (n.childIds = (function (e) {
                    var t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      n =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : {},
                      i = x(be(t))
                    return Array.isArray(e)
                      ? e.reduce(function (e, t) {
                          return (
                            (i[t] && (n.stringifyFirst || i[t].value === t)) ||
                              e.push(t),
                            e
                          )
                        }, [])
                      : fe(e)
                      ? Object.keys(e).reduce(function (t, n) {
                          return i[n] || (t[n] = e[n]), t
                        }, {})
                      : e
                  })(n.childIds, t))
              },
            },
          ]),
          t
        )
      })(
        (function () {
          function e() {
            l(this, e), (this._registry = {})
          }
          return (
            u(e, [
              {
                key: 'get',
                value: function (e) {
                  return this._registry[e]
                },
              },
              {
                key: 'set',
                value: function (e, t) {
                  this._registry[e] = t
                },
              },
              {
                key: 'remove',
                value: function (e) {
                  delete this._registry[e]
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this._registry
                },
              },
            ]),
            e
          )
        })()
      )
      var Ee = (function () {
          function e(t) {
            l(this, e), (this._list = t), (this._position = -1)
          }
          return (
            u(e, [
              {
                key: 'getPosition',
                value: function () {
                  return this._position
                },
              },
              {
                key: 'getComponent',
                value: function () {
                  return this._list.getAtPosition(this.getPosition())
                },
              },
              {
                key: 'next',
                value: function () {
                  return this.getPosition() + 1 < this._list.getLength()
                    ? (this._position++, this.getComponent())
                    : null
                },
              },
            ]),
            e
          )
        })(),
        _e = (function () {
          function e() {
            l(this, e),
              (this._list = []),
              (this._idToIndex = {}),
              (this._longestSequence = 1),
              (this._longestSequenceComponentId = null),
              (this._keyMapEventRecord = ve.newRecord())
          }
          return (
            u(e, [
              {
                key: 'getNewIterator',
                value: function () {
                  return new Ee(this)
                },
              },
              {
                key: 'add',
                value: function (e, t, n, i) {
                  if (this.containsId(e)) return this.update(e, t, n, i)
                  var o = this._build(e, t, n, i)
                  this._list.push(o)
                  var r = this._getLastIndex()
                  return (this._idToIndex[e] = r)
                },
              },
              {
                key: 'containsId',
                value: function (e) {
                  return !!this.get(e)
                },
              },
              {
                key: 'get',
                value: function (e) {
                  return this.getAtPosition(this.getIndexById(e))
                },
              },
              {
                key: 'getIndexById',
                value: function (e) {
                  return this._idToIndex[e]
                },
              },
              {
                key: 'update',
                value: function (e, t, n, i) {
                  var o = this._isUpdatingComponentWithLongestSequence(e),
                    r = this.getLongestSequence(),
                    a = this._build(e, t, n, i)
                  o &&
                    a.sequenceLength !== r &&
                    (a.sequenceLength > r
                      ? (this._longestSequence = a.sequenceLength)
                      : this._recalculateLongestSequence()),
                    (this._list[this.getIndexById(e)] = a)
                },
              },
              {
                key: 'remove',
                value: function (e) {
                  var t = this._isUpdatingComponentWithLongestSequence(e)
                  this.removeAtPosition(this.getIndexById(e)),
                    t && this._recalculateLongestSequence()
                },
              },
              {
                key: 'any',
                value: function () {
                  return 0 !== this.getLength()
                },
              },
              {
                key: 'isRoot',
                value: function (e) {
                  return this.getIndexById(e) >= this.getLength() - 1
                },
              },
              {
                key: 'getLongestSequence',
                value: function () {
                  return this._longestSequence
                },
              },
              {
                key: 'anyActionsForEventType',
                value: function (e) {
                  return !!this._keyMapEventRecord[e]
                },
              },
              {
                key: 'getLength',
                value: function () {
                  return this._list.length
                },
              },
              {
                key: 'getAtPosition',
                value: function (e) {
                  return this._list[e]
                },
              },
              {
                key: 'removeAtPosition',
                value: function (e) {
                  this._list = (function (e, t) {
                    return [].concat(C(e.slice(0, t)), C(e.slice(t + 1)))
                  })(this._list, e)
                  for (var t = e; t < this.getLength(); )
                    (this._idToIndex[this.getAtPosition(t).componentId] = t),
                      t++
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this._list
                },
              },
              {
                key: '_getLastIndex',
                value: function () {
                  return this.getLength() - 1
                },
              },
              {
                key: '_build',
                value: function (e, t, n, i) {
                  var o = this._applyHardSequences(t, n),
                    r = o.keyMap,
                    a = o.handlers
                  return {
                    actions: this._buildActionDictionary(v({}, t, r), i, e),
                    handlers: a,
                    componentId: e,
                    options: i,
                  }
                },
              },
              {
                key: '_isUpdatingComponentWithLongestSequence',
                value: function (e) {
                  return e === this._getLongestSequenceComponentId()
                },
              },
              {
                key: '_getLongestSequenceComponentId',
                value: function () {
                  return this._longestSequenceComponentId
                },
              },
              {
                key: '_recalculateLongestSequence',
                value: function () {
                  for (var e = this.getNewIterator(); e.next(); ) {
                    var t = e.getComponent(),
                      n = t.longestSequence,
                      i = t.componentId
                    n > this.getLongestSequence() &&
                      ((this._longestSequenceComponentId = i),
                      (this._longestSequence = n))
                  }
                },
              },
              {
                key: '_applyHardSequences',
                value: function (e, t) {
                  return O.option('enableHardSequences')
                    ? Object.keys(t).reduce(
                        function (n, i) {
                          return (
                            !!!e[i] &&
                              ae.isValidKeySerialization(i) &&
                              (n.keyMap[i] = i),
                            (n.handlers[i] = t[i]),
                            n
                          )
                        },
                        { keyMap: {}, handlers: {} }
                      )
                    : { keyMap: e, handlers: t }
                },
              },
              {
                key: '_buildActionDictionary',
                value: function (e, t, n) {
                  var i = this
                  return Object.keys(e).reduce(function (o, r) {
                    var a = e[r]
                    return (
                      (fe(a) && j(a, 'sequences')
                        ? be(a.sequences)
                        : be(a)
                      ).forEach(function (e) {
                        var a = (function (e, t) {
                            if (fe(e)) {
                              var n = e.sequence,
                                i = e.action
                              return {
                                keySequence: n,
                                keyEventType: ce(i)
                                  ? P[t.defaultKeyEvent]
                                  : P[i],
                              }
                            }
                            return {
                              keySequence: e,
                              keyEventType: P[t.defaultKeyEvent],
                            }
                          })(e, t),
                          s = a.keySequence,
                          l = a.keyEventType
                        i._addActionOptions(o, n, r, s, l)
                      }),
                      o
                    )
                  }, {})
                },
              },
              {
                key: '_addActionOptions',
                value: function (e, t, n, i, o) {
                  var r = Y.parse(i, { keyEventType: o }),
                    a = r.sequence,
                    s = r.combination
                  a.size > this.getLongestSequence() &&
                    ((this._longestSequence = a.size),
                    (this._longestSequenceComponentId = t)),
                    (this._keyMapEventRecord[o] = de),
                    e[n] || (e[n] = []),
                    e[n].push(
                      v(
                        {
                          prefix: a.prefix,
                          actionName: n,
                          sequenceLength: a.size,
                        },
                        s
                      )
                    )
                },
              },
            ]),
            e
          )
        })()
      function we(e, t) {
        return e[e.length - (t + 1)]
      }
      for (
        var Ce = {
            Enter: !0,
            Backspace: !0,
            ArrowRight: !0,
            ArrowLeft: !0,
            ArrowUp: !0,
            ArrowDown: !0,
            CapsLock: !0,
          },
          xe = 1;
        13 > xe;
        xe++
      )
        Ce['F'.concat(xe)] = !0
      function Ke(e) {
        return 1 === e.length || j(Ce, e)
      }
      var Se = (function () {
        function e() {
          l(this, e), (this._actionConfigs = {}), (this._order = null)
        }
        return (
          u(e, [
            {
              key: 'addMatch',
              value: function (e, t) {
                if (this._includesMatcherForCombination(e.id)) {
                  var n = e.keyEventType,
                    i = e.actionName,
                    o = e.id
                  this._addHandlerToActionConfig(o, {
                    keyEventType: n,
                    actionName: i,
                    handler: t,
                  })
                } else this._addNewActionConfig(e, t)
              },
            },
            {
              key: 'findMatch',
              value: function (e, t, n) {
                this._order || this._setOrder()
                var i = !0,
                  o = !1,
                  r = void 0
                try {
                  for (
                    var a, s = this._order[Symbol.iterator]();
                    !(i = (a = s.next()).done);
                    i = !0
                  ) {
                    var l = a.value,
                      c = this._actionConfigs[l]
                    if (this._matchesActionConfig(e, t, n, c)) return c
                  }
                } catch (e) {
                  ;(o = !0), (r = e)
                } finally {
                  try {
                    i || null == s.return || s.return()
                  } finally {
                    if (o) throw r
                  }
                }
                return null
              },
            },
            {
              key: 'toJSON',
              value: function () {
                return {
                  actionConfigs: this._actionConfigs,
                  order: this._order,
                }
              },
            },
            {
              key: '_matchesActionConfig',
              value: function (e, t, n, i) {
                if (
                  !(function (e, t) {
                    var n = pe(t.keyDictionary)
                    return O.option('allowCombinationSubmatches') ||
                      (function (e) {
                        return (
                          !!e.isKeyStillPressed('Meta') &&
                          e.some(function (e) {
                            return Ke(e)
                          })
                        )
                      })(e)
                      ? e.getNumberOfKeys() >= n
                      : e.getNumberOfKeys() === n
                  })(e, i)
                )
                  return !1
                if (!i.events[n]) return !1
                var o = !1
                return (
                  Object.keys(i.keyDictionary).every(function (i) {
                    return (
                      !!e.isEventTriggered(i, n) &&
                      (t &&
                        t === e.getNormalizedKeyName(i) &&
                        (o = !e.wasEventPreviouslyTriggered(i, n)),
                      !0)
                    )
                  }) && o
                )
              },
            },
            {
              key: '_setOrder',
              value: function () {
                var e = Object.values(this._actionConfigs).reduce(function (
                  e,
                  t
                ) {
                  var n = t.id,
                    i = t.size
                  return e[i] || (e[i] = []), e[i].push(n), e
                },
                {})
                this._order = Object.keys(e)
                  .sort(function (e, t) {
                    return t - e
                  })
                  .reduce(function (t, n) {
                    return t.concat(e[n])
                  }, [])
              },
            },
            {
              key: '_addNewActionConfig',
              value: function (e, t) {
                var n = e.prefix,
                  i = e.sequenceLength,
                  o = e.id,
                  r = e.keyDictionary,
                  a = e.size,
                  s = e.keyEventType,
                  l = e.actionName
                this._setCombinationMatcher(o, {
                  prefix: n,
                  sequenceLength: i,
                  id: o,
                  keyDictionary: r,
                  size: a,
                  events: {},
                }),
                  this._addHandlerToActionConfig(o, {
                    keyEventType: s,
                    actionName: l,
                    handler: t,
                  })
              },
            },
            {
              key: '_addHandlerToActionConfig',
              value: function (e, t) {
                var n = t.keyEventType,
                  i = t.actionName,
                  o = t.handler,
                  r = this._getCombinationMatcher(e)
                this._setCombinationMatcher(
                  e,
                  v({}, r, {
                    events: v(
                      {},
                      r.events,
                      d({}, n, { actionName: i, handler: o })
                    ),
                  })
                )
              },
            },
            {
              key: '_setCombinationMatcher',
              value: function (e, t) {
                this._actionConfigs[e] = t
              },
            },
            {
              key: '_getCombinationMatcher',
              value: function (e) {
                return this._actionConfigs[e]
              },
            },
            {
              key: '_includesMatcherForCombination',
              value: function (e) {
                return !!this._getCombinationMatcher(e)
              },
            },
          ]),
          e
        )
      })()
      var Oe = (function () {
          function e() {
            l(this, e),
              (this._combinationMatchers = {}),
              (this._eventRecord = ve.newRecord())
          }
          return (
            u(e, [
              {
                key: 'addMatch',
                value: function (e, t) {
                  this._getOrCreateCombinationMatcher(e.prefix).addMatch(e, t),
                    ve.setBit(this._eventRecord, e.keyEventType, de),
                    (!this._longestSequence ||
                      this._longestSequence < e.sequenceLength) &&
                      (this._longestSequence = e.sequenceLength)
                },
              },
              {
                key: 'findMatch',
                value: function (e, t, n) {
                  var i = this._findCombinationMatcher(e)
                  return i
                    ? i.findMatch(
                        e.getCurrentCombination(),
                        e.getCurrentCombination().getNormalizedKeyName(t),
                        n
                      )
                    : null
                },
              },
              {
                key: 'hasMatchesForEventType',
                value: function (e) {
                  return !!this._eventRecord[e]
                },
              },
              {
                key: 'getLongestSequence',
                value: function () {
                  return this._longestSequence
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  var e = this
                  return Object.keys(this._combinationMatchers).reduce(
                    function (t, n) {
                      var i = e._combinationMatchers[n]
                      return (t[n] = i.toJSON()), t
                    },
                    {}
                  )
                },
              },
              {
                key: '_getOrCreateCombinationMatcher',
                value: function (e) {
                  return (
                    this._combinationMatchers[e] ||
                      (this._combinationMatchers[e] = new Se()),
                    this._combinationMatchers[e]
                  )
                },
              },
              {
                key: '_findCombinationMatcher',
                value: function (e) {
                  var t = e.getMostRecentCombinations(this.getLongestSequence())
                  if (0 === t.length) return this._combinationMatchers['']
                  for (
                    var n = t.map(function (e) {
                        return e.getIds()
                      }),
                      i = n.map(function (e) {
                        return e.length
                      }),
                      o = Array(n.length).fill(0),
                      r = !1;
                    !r;

                  ) {
                    var a = o
                      .map(function (e, t) {
                        return n[t][e]
                      })
                      .join(' ')
                    if (this._combinationMatchers[a])
                      return this._combinationMatchers[a]
                    for (var s = 0, l = !0; l && s < o.length; ) {
                      var c = (we(o, s) + 1) % (we(i, s) || 1)
                      ;(o[o.length - (s + 1)] = c), (l = 0 == c) && s++
                    }
                    r = s === o.length
                  }
                },
              },
            ]),
            e
          )
        })(),
        Ie = (function () {
          function e(t) {
            l(this, e),
              (this._keyMapMatchers = []),
              (this._unmatchedHandlerStatus = []),
              (this._handlersDictionary = {}),
              (this._keySequencesDictionary = {})
            for (var n = t.getNewIterator(); n.next(); ) {
              var i = n.getComponent().handlers
              this._unmatchedHandlerStatus.push([Object.keys(i).length, {}]),
                this._keyMapMatchers.push(new Oe())
            }
            ;(this._componentList = t),
              (this._componentListIterator = t.getNewIterator())
          }
          return (
            u(e, [
              {
                key: 'getKeyHistoryMatcher',
                value: function (e) {
                  if (this._componentHasUnmatchedHandlers(e))
                    for (; this._componentListIterator.next(); )
                      this._addHandlersFromComponent(),
                        this._addActionsFromComponent()
                  return this._getKeyHistoryMatcher(e)
                },
              },
              {
                key: 'componentHasActionsBoundToEventType',
                value: function (e, t) {
                  return this.getKeyHistoryMatcher(e).hasMatchesForEventType(t)
                },
              },
              {
                key: 'findMatchingKeySequenceInComponent',
                value: function (e, t, n, i) {
                  return this.componentHasActionsBoundToEventType(e, i)
                    ? this.getKeyHistoryMatcher(e).findMatch(t, n, i)
                    : null
                },
              },
              {
                key: '_getKeyHistoryMatcher',
                value: function (e) {
                  return this._keyMapMatchers[e]
                },
              },
              {
                key: '_addActionsFromComponent',
                value: function () {
                  var e = this,
                    t = this._componentListIterator.getComponent().actions
                  Object.keys(t).forEach(function (n) {
                    var i = e._getHandlers(n)
                    if (i) {
                      var o = i[0],
                        r = e._componentList.getAtPosition(o).handlers[n],
                        a = e._getKeyHistoryMatcher(o)
                      t[n].forEach(function (t) {
                        var n = [t.prefix, t.id].join(' ')
                        e._isClosestHandlerFound(n, t) ||
                          (a.addMatch(t, r),
                          e._addKeySequence(n, [o, t.keyEventType]))
                      }),
                        i.forEach(function (t) {
                          var i = e._getUnmatchedHandlerStatus(t)
                          i[1][n] || ((i[1][n] = !0), i[0]--)
                        })
                    }
                  })
                },
              },
              {
                key: '_getHandlers',
                value: function (e) {
                  return this._handlersDictionary[e]
                },
              },
              {
                key: '_addHandlersFromComponent',
                value: function () {
                  var e = this,
                    t = this._componentListIterator.getComponent().handlers
                  Object.keys(t).forEach(function (t) {
                    e._addHandler(t)
                  })
                },
              },
              {
                key: '_addHandler',
                value: function (e) {
                  this._handlersDictionary[e] ||
                    (this._handlersDictionary[e] = []),
                    this._handlersDictionary[e].push(
                      this._componentListIterator.getPosition()
                    )
                },
              },
              {
                key: '_addKeySequence',
                value: function (e, t) {
                  this._keySequencesDictionary[e] ||
                    (this._keySequencesDictionary[e] = []),
                    this._keySequencesDictionary[e].push(t)
                },
              },
              {
                key: '_componentHasUnmatchedHandlers',
                value: function (e) {
                  return 0 < this._getUnmatchedHandlerStatus(e)[0]
                },
              },
              {
                key: '_getUnmatchedHandlerStatus',
                value: function (e) {
                  return this._unmatchedHandlerStatus[e]
                },
              },
              {
                key: '_isClosestHandlerFound',
                value: function (e, t) {
                  return (
                    this._keySequencesDictionary[e] &&
                    this._keySequencesDictionary[e].some(function (e) {
                      return e[1] === t.keyEventType
                    })
                  )
                },
              },
            ]),
            e
          )
        })()
      function Pe(e, t, n) {
        return (
          n.forEach(function (n) {
            j(e, n) && (t[n] = e[n])
          }),
          t
        )
      }
      function Ne(e) {
        switch (parseInt(e, 10)) {
          case 0:
            return 'keydown'
          case 1:
            return 'keypress'
          default:
            return 'keyup'
        }
      }
      function Te(e) {
        return e.simulated ? he : de
      }
      var Me = ['sequence', 'action'],
        je = ['name', 'description', 'group'],
        Le = (function () {
          function e() {
            var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = 1 < arguments.length ? arguments[1] : void 0
            l(this, e),
              (this.logger = t.logger || new I('warn')),
              (this.componentId = -1),
              (this.keyEventManager = n),
              (this._componentTree = new ke()),
              (this.rootComponentId = null),
              this._reset(),
              this.resetKeyHistory()
          }
          return (
            u(e, [
              {
                key: '_reset',
                value: function () {
                  ;(this.componentList = new _e()),
                    this._initHandlerResolutionState()
                },
              },
              {
                key: '_newKeyHistory',
                value: function () {
                  return new me({
                    maxLength: this.componentList.getLongestSequence(),
                  })
                },
              },
              {
                key: 'getKeyHistory',
                value: function () {
                  return (
                    this._keyHistory ||
                      (this._keyHistory = this._newKeyHistory()),
                    this._keyHistory
                  )
                },
              },
              {
                key: '_initHandlerResolutionState',
                value: function () {
                  this._actionResolver = null
                },
              },
              {
                key: 'resetKeyHistory',
                value: function () {
                  var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  ;(this.keypressEventsToSimulate = []),
                    (this.keyupEventsToSimulate = []),
                    (this._keyHistory =
                      this.getKeyHistory().any() && !e.force
                        ? new me(
                            {
                              maxLength: this.componentList.getLongestSequence(),
                            },
                            new ge(
                              this.getCurrentCombination().keysStillPressedDict()
                            )
                          )
                        : this._newKeyHistory())
                },
              },
              {
                key: 'getApplicationKeyMap',
                value: function () {
                  return null === this.rootComponentId
                    ? {}
                    : this._buildApplicationKeyMap([this.rootComponentId], {})
                },
              },
              {
                key: '_buildApplicationKeyMap',
                value: function (e, t) {
                  var n = this
                  return (
                    e.forEach(function (e) {
                      var i = n._componentTree.get(e),
                        o = i.childIds,
                        r = i.keyMap
                      r &&
                        Object.keys(r).forEach(function (e) {
                          var i = r[e]
                          ;(t[e] = {}),
                            fe(i)
                              ? j(i, 'sequences')
                                ? (Pe(i, t[e], je),
                                  (t[e].sequences = n._createSequenceFromConfig(
                                    i.sequences
                                  )))
                                : (Pe(i, t[e], je),
                                  (t[e].sequences = [Pe(i, {}, Me)]))
                              : (t[e].sequences = n._createSequenceFromConfig(
                                  i
                                ))
                        }),
                        n._buildApplicationKeyMap(o, t)
                    }),
                    t
                  )
                },
              },
              {
                key: '_createSequenceFromConfig',
                value: function (e) {
                  return be(e).map(function (e) {
                    return fe(e) ? Pe(e, {}, Me) : { sequence: e }
                  })
                },
              },
              {
                key: 'registerKeyMap',
                value: function (e) {
                  return (
                    (this.componentId += 1),
                    this._componentTree.add(this.componentId, e),
                    this.componentId
                  )
                },
              },
              {
                key: 'reregisterKeyMap',
                value: function (e, t) {
                  this._componentTree.update(e, t)
                },
              },
              {
                key: 'registerComponentMount',
                value: function (e, t) {
                  ce(t)
                    ? (this.rootComponentId = e)
                    : this._componentTree.setParent(e, t)
                },
              },
              {
                key: 'deregisterKeyMap',
                value: function (e) {
                  this._componentTree.remove(e),
                    e === this.rootComponentId && (this.rootComponentId = null)
                },
              },
              {
                key: '_addComponent',
                value: function (e) {
                  var t =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    i = 3 < arguments.length ? arguments[3] : void 0
                  this.componentList.add(e, t, n, i),
                    this.getKeyHistory().setMaxLength(
                      this.componentList.getLongestSequence()
                    )
                },
              },
              {
                key: '_allKeysAreReleased',
                value: function () {
                  return this.getCurrentCombination().hasEnded()
                },
              },
              {
                key: 'getCurrentCombination',
                value: function () {
                  return this.getKeyHistory().getCurrentCombination()
                },
              },
              {
                key: '_shouldSimulate',
                value: function (e, t) {
                  var n = (function (e) {
                      return !Z(e)
                    })(t),
                    i = this.getCurrentCombination()
                  return e === P.keypress
                    ? !n || (n && i.isKeyStillPressed('Meta'))
                    : e === P.keyup && Ke(t) && i.isKeyReleased('Meta')
                },
              },
              {
                key: '_cloneAndMergeEvent',
                value: function (e, t) {
                  return v(
                    {},
                    Object.keys(N).reduce(function (t, n) {
                      return (t[n] = e[n]), t
                    }, {}),
                    t
                  )
                },
              },
              {
                key: '_callClosestMatchingHandler',
                value: function (e, t, n, i, o) {
                  for (
                    this._actionResolver ||
                    (this._actionResolver = new Ie(this.componentList));
                    o <= i;

                  ) {
                    this._actionResolver.getKeyHistoryMatcher(o)
                    var r = this._actionResolver.findMatchingKeySequenceInComponent(
                      o,
                      this.getKeyHistory(),
                      t,
                      n
                    )
                    this.getCurrentCombination()
                    if (r) {
                      var a = r.events[n]
                      if (O.option('allowCombinationSubmatches'))
                        ae.serialize(r.keyDictionary)
                      return (
                        a.handler(e),
                        this._stopEventPropagationAfterHandlingIfEnabled(e, o),
                        !0
                      )
                    }
                    this._actionResolver.componentHasActionsBoundToEventType(
                      o,
                      n
                    ),
                      o++
                  }
                },
              },
              {
                key: '_stopEventPropagationAfterHandlingIfEnabled',
                value: function (e, t) {
                  return (
                    !!O.option('stopEventPropagationAfterHandling') &&
                    (this._stopEventPropagation(e, t), !0)
                  )
                },
              },
              {
                key: '_stopEventPropagation',
                value: function () {
                  throw new Error(
                    '_stopEventPropagation must be overridden by a subclass'
                  )
                },
              },
              {
                key: '_checkForModifierFlagDiscrepancies',
                value: function (e, t, n) {
                  var i = this
                  Object.keys(N).forEach(function (o) {
                    if (t !== o || n !== P.keyup) {
                      var r = i.getCurrentCombination(),
                        a = r.isKeyStillPressed(o)
                      N[o].forEach(function (t) {
                        !1 === e[t] && a && r.setKeyState(o, P.keyup, Te(e))
                      })
                    }
                  })
                },
              },
              { key: '_logPrefix', value: function () {} },
            ]),
            e
          )
        })(),
        Ae = (function () {
          function e() {
            l(this, e)
          }
          return (
            u(e, null, [
              {
                key: 'getId',
                value: function () {
                  return ce(this._id) && (this._id = 0), this._id
                },
              },
              {
                key: 'incrementId',
                value: function () {
                  this._id = this.getId() + 1
                },
              },
            ]),
            e
          )
        })()
      var He = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      }
      function De(e) {
        var t = (function () {
          var t = O.option('customKeyCodes'),
            n = e.keyCode || e.charCode
          return j(t, n)
            ? t[n]
            : e.nativeEvent
            ? e.key
            : (function (e) {
                if (e.key) {
                  var t = He[e.key] || e.key
                  if ('Unidentified' !== t) return t
                }
                if ('keypress' === e.type) {
                  var n = (function (e) {
                    var t,
                      n = e.keyCode
                    return (
                      'charCode' in e
                        ? 0 === (t = e.charCode) && 13 === n && (t = 13)
                        : (t = n),
                      10 === t && (t = 13),
                      32 <= t || 13 === t ? t : 0
                    )
                  })(e)
                  return 13 === n ? 'Enter' : String.fromCharCode(n)
                }
                return 'keydown' === e.type || 'keyup' === e.type
                  ? z[e.keyCode] || 'Unidentified'
                  : ''
              })(e)
        })()
        return '+' === t ? 'plus' : t
      }
      function Re(e) {
        return 'Meta' === e
      }
      var Be = 0,
        Ue = 1,
        Fe = 2,
        qe = 4,
        ze = (function () {
          function e(t, n) {
            var i = n.logger,
              o = n.logPrefix
            l(this, e),
              (this._componentList = t),
              (this._previousPropagation = null),
              (this.logger = i),
              (this._logPrefix = o),
              this._reset()
          }
          return (
            u(e, [
              {
                key: '_reset',
                value: function () {
                  ;(this._previousPosition = -1),
                    (this._position = -1),
                    (this._actionHandled = !1),
                    (this._ignoreEvent = !1),
                    (this._observeIgnoredEvents = !1),
                    (this._stopping = !1),
                    (this._componentId = null),
                    (this._key = null),
                    (this._type = null)
                },
              },
              {
                key: 'isFirstPropagationStep',
                value: function () {
                  var e = this.getPreviousPosition()
                  return -1 === e || e >= this._position
                },
              },
              {
                key: 'isForKey',
                value: function (e) {
                  return this._key === e
                },
              },
              {
                key: 'isForEventType',
                value: function (e) {
                  return this._type === e
                },
              },
              {
                key: 'startNewPropagationStep',
                value: function (e, t, n, i) {
                  return (
                    (this._position = this._componentList.getIndexById(e)),
                    (this._componentId = e),
                    this.isFirstPropagationStep() &&
                      (Ae.incrementId(), (this._key = t.key), (this._type = i)),
                    !(
                      t.repeat &&
                      O.option('ignoreRepeatedEventsWhenKeyHeldDown') &&
                      (this.ignoreEvent(t), 1)
                    )
                  )
                },
              },
              {
                key: 'finishPropagationStep',
                value: function () {
                  this.isStopped() ||
                  this._componentList.isRoot(this._componentId)
                    ? ((this._previousPropagation = this._clone()),
                      this._reset())
                    : (this._previousPosition = this._position)
                },
              },
              {
                key: 'getPreviousPropagation',
                value: function () {
                  return (
                    this._previousPropagation ||
                      (this._previousPropagation = this._clone({
                        copyState: !1,
                      })),
                    this._previousPropagation
                  )
                },
              },
              {
                key: 'getPreviousPosition',
                value: function () {
                  return this._previousPosition
                },
              },
              {
                key: 'observeIgnoredEvents',
                value: function () {
                  this._observeIgnoredEvents = !0
                },
              },
              {
                key: 'ignoreEvent',
                value: function (e) {
                  return (
                    this.setIgnoreEvent(!0),
                    !(
                      !this.isIgnoringEvent() ||
                      !O.option('stopEventPropagationAfterIgnoring') ||
                      (this.stop(e), this.finishPropagationStep(), 0)
                    )
                  )
                },
              },
              {
                key: 'setIgnoreEvent',
                value: function (e) {
                  this._ignoreEvent = e
                },
              },
              {
                key: 'isIgnoringEvent',
                value: function () {
                  return !this._observeIgnoredEvents && this._ignoreEvent
                },
              },
              {
                key: 'isStopped',
                value: function () {
                  return this._stopping
                },
              },
              {
                key: 'stop',
                value: function (e) {
                  return (
                    !this.isStopped() &&
                    ((this._stopping = !0),
                    e.simulated || e.stopPropagation(),
                    !0)
                  )
                },
              },
              {
                key: 'isPendingPropagation',
                value: function () {
                  var e = this.getPreviousPosition()
                  return -1 !== e && e + 1 < this._position
                },
              },
              {
                key: 'isHandled',
                value: function () {
                  return this._actionHandled
                },
              },
              {
                key: 'setHandled',
                value: function () {
                  this._actionHandled = !0
                },
              },
              {
                key: '_clone',
                value: function () {
                  var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = t.copyState,
                    i = new e(this._componentList, {
                      logger: this.logger,
                      logPrefix: this._logPrefix,
                    })
                  return (void 0 === n || n) && Object.assign(i, this), i
                },
              },
            ]),
            e
          )
        })(),
        Ge = (function (e) {
          function t() {
            var e,
              n =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = 1 < arguments.length ? arguments[1] : void 0
            return (
              l(this, t),
              ((e = _(this, y(t).call(this, n, i))).focusTreeId = 0),
              e
            )
          }
          return (
            f(t, e),
            u(t, [
              {
                key: '_reset',
                value: function () {
                  w(y(t.prototype), '_reset', this).call(this),
                    (this.keypressEventsToSimulate = []),
                    (this.focusTreeId += 1),
                    (this.eventPropagator = new ze(this.componentList, {
                      logger: this.logger,
                      logPrefix: this._logPrefix.bind(this),
                    }))
                },
              },
              {
                key: 'enableHotKeys',
                value: function (e) {
                  var t =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    i = 3 < arguments.length ? arguments[3] : void 0
                  if (
                    (this.resetOnNextFocus &&
                      (this._reset(), (this.resetOnNextFocus = !1)),
                    !this.componentList.containsId(e))
                  )
                    return this._addComponent(e, t, n, i), this.focusTreeId
                },
              },
              {
                key: 'updateEnabledHotKeys',
                value: function (e, t) {
                  var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    i =
                      3 < arguments.length && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o = 4 < arguments.length ? arguments[4] : void 0
                  e === this.focusTreeId &&
                    this.componentList.containsId(t) &&
                    (this.componentList.update(t, n, i, o),
                    this.getKeyHistory().setMaxLength(
                      this.componentList.getLongestSequence()
                    ),
                    this._initHandlerResolutionState())
                },
              },
              {
                key: 'disableHotKeys',
                value: function (e, t) {
                  return (
                    this.resetOnNextFocus || (this.resetOnNextFocus = !0),
                    this.eventPropagator.isPendingPropagation()
                  )
                },
              },
              {
                key: 'handleKeydown',
                value: function (e, t, n) {
                  var i =
                      3 < arguments.length && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o = De(e)
                  if (t !== this.focusTreeId)
                    return this.eventPropagator.ignoreEvent(e), !0
                  var r = this.eventPropagator.startNewPropagationStep(
                    n,
                    e,
                    o,
                    P.keydown
                  )
                  if (r) {
                    var a = this._howToHandleKeyEvent(e, t, n, o, i, P.keydown)
                    if (a === qe) {
                      var s = Te(e),
                        l = this.getCurrentCombination()
                      l.isKeyIncluded(o) || l.isEnding()
                        ? this._startAndLogNewKeyCombination(o, t, n, s)
                        : this._addToAndLogCurrentKeyCombination(
                            o,
                            P.keydown,
                            t,
                            n,
                            s
                          ),
                        this._callHandlerIfActionNotHandled(
                          e,
                          o,
                          P.keydown,
                          n,
                          t
                        )
                    }
                    return (
                      this._simulateKeyPressForNonPrintableKeys(e, o, t, n, i),
                      this.eventPropagator.finishPropagationStep(),
                      !1
                    )
                  }
                },
              },
              {
                key: '_howToHandleKeyEvent',
                value: function (e, t, n, i, o, r) {
                  if (this.eventPropagator.isFirstPropagationStep()) {
                    if (
                      o.ignoreEventsCondition(e) &&
                      this.eventPropagator.ignoreEvent(e)
                    )
                      return this._eventIsToBeIgnored(e, n, i, r)
                    this._checkForModifierFlagDiscrepancies(e, i, r)
                  } else if (this.eventPropagator.isIgnoringEvent())
                    return this._eventIsToBeIgnored(e, n, i, r)
                  return qe
                },
              },
              {
                key: '_eventIsToBeIgnored',
                value: function (e, t, n, i) {
                  return Ue
                },
              },
              {
                key: 'handleKeyPress',
                value: function (e, t, n, i) {
                  var o = De(e),
                    r = this.getCurrentCombination()
                  if (r.isKeyPressSimulated(o))
                    return this.eventPropagator.ignoreEvent(e), !0
                  if (
                    this.eventPropagator.startNewPropagationStep(
                      n,
                      e,
                      o,
                      P.keypress
                    )
                  ) {
                    var a = t !== this.focusTreeId,
                      s = this._howToHandleKeyEvent(e, t, n, o, i, P.keypress)
                    return (
                      this.eventPropagator.isFirstPropagationStep(n) &&
                        r.isKeyIncluded(o) &&
                        this._addToAndLogCurrentKeyCombination(
                          o,
                          P.keypress,
                          t,
                          n,
                          Te(e)
                        ),
                      s === qe &&
                        this._callHandlerIfActionNotHandled(
                          e,
                          o,
                          P.keypress,
                          n,
                          t
                        ),
                      this.eventPropagator.finishPropagationStep(),
                      a
                    )
                  }
                },
              },
              {
                key: 'handleKeyUp',
                value: function (e, t, n, i) {
                  var o = De(e),
                    r = this.getCurrentCombination()
                  if (r.isKeyUpSimulated(o))
                    return this.eventPropagator.ignoreEvent(e), !0
                  if (
                    this.eventPropagator.startNewPropagationStep(
                      n,
                      e,
                      o,
                      P.keyup
                    )
                  ) {
                    var a = t !== this.focusTreeId,
                      s = this._howToHandleKeyEvent(e, t, n, o, i, P.keyup)
                    return (
                      this.eventPropagator.isFirstPropagationStep(n) &&
                        r.isKeyIncluded(o) &&
                        this._addToAndLogCurrentKeyCombination(
                          o,
                          P.keyup,
                          t,
                          n,
                          Te(e)
                        ),
                      s === qe &&
                        this._callHandlerIfActionNotHandled(
                          e,
                          o,
                          P.keyup,
                          n,
                          t
                        ),
                      this._simulateKeyUpEventsHiddenByCmd(e, o, t, n, i),
                      this.eventPropagator.finishPropagationStep(),
                      a
                    )
                  }
                },
              },
              {
                key: 'closeHangingKeyCombination',
                value: function (e, t) {
                  var n = this.getCurrentCombination()
                  n.isKeyIncluded(e) &&
                    !n.isEventTriggered(e, t) &&
                    n.setKeyState(e, t, he)
                },
              },
              {
                key: '_simulateKeyPressForNonPrintableKeys',
                value: function (e, t, n, i, o) {
                  this._handleEventSimulation(
                    'keypressEventsToSimulate',
                    'simulatePendingKeyPressEvents',
                    this._shouldSimulate(P.keypress, t),
                    {
                      event: e,
                      key: t,
                      focusTreeId: n,
                      componentId: i,
                      options: o,
                    }
                  )
                },
              },
              {
                key: '_simulateKeyUpEventsHiddenByCmd',
                value: function (e, t, n, i, o) {
                  var r = this
                  Re(t) &&
                    this.getCurrentCombination().forEachKey(function (t) {
                      Re(t) ||
                        r._handleEventSimulation(
                          'keyupEventsToSimulate',
                          'simulatePendingKeyUpEvents',
                          r._shouldSimulate(P.keyup, t),
                          {
                            event: e,
                            key: t,
                            focusTreeId: n,
                            componentId: i,
                            options: o,
                          }
                        )
                    })
                },
              },
              {
                key: '_stopEventPropagation',
                value: function (e, t) {
                  this.eventPropagator.stop(e)
                },
              },
              {
                key: 'getEventPropagator',
                value: function () {
                  return this.eventPropagator
                },
              },
              {
                key: '_startAndLogNewKeyCombination',
                value: function (e, t, n, i) {
                  this.getKeyHistory().startNewKeyCombination(e, i)
                },
              },
              {
                key: '_addToAndLogCurrentKeyCombination',
                value: function (e, t, n, i, o) {
                  this.getKeyHistory().addKeyToCurrentCombination(e, t, o)
                },
              },
              {
                key: '_handleEventSimulation',
                value: function (e, t, n, i) {
                  var o = i.event,
                    r = i.key,
                    a = i.focusTreeId,
                    s = i.componentId,
                    l = i.options
                  if (n && O.option('simulateMissingKeyPressEvents')) {
                    var c = this._cloneAndMergeEvent(o, {
                      key: r,
                      simulated: !0,
                    })
                    this[e].push({
                      event: c,
                      focusTreeId: a,
                      componentId: s,
                      options: l,
                    })
                  }
                  ;(this.componentList.isRoot(s) ||
                    this.eventPropagator.isStopped()) &&
                    !this.keyEventManager.isGlobalListenersBound() &&
                    this[t]()
                },
              },
              {
                key: 'simulatePendingKeyPressEvents',
                value: function () {
                  this._simulatePendingKeyEvents(
                    'keypressEventsToSimulate',
                    'handleKeyPress'
                  )
                },
              },
              {
                key: 'simulatePendingKeyUpEvents',
                value: function () {
                  this._simulatePendingKeyEvents(
                    'keyupEventsToSimulate',
                    'handleKeyUp'
                  )
                },
              },
              {
                key: '_simulatePendingKeyEvents',
                value: function (e, t) {
                  var n = this
                  0 < this[e].length && Ae.incrementId(),
                    this[e].forEach(function (e) {
                      var i = e.event,
                        o = e.focusTreeId,
                        r = e.componentId,
                        a = e.options
                      n[t](i, o, r, a)
                    }),
                    (this[e] = [])
                },
              },
              {
                key: '_callHandlerIfActionNotHandled',
                value: function (e, t, n, i, o) {
                  this.getCurrentCombination().describe()
                  if (this.componentList.anyActionsForEventType(n))
                    if (this.eventPropagator.isHandled());
                    else {
                      var r = this.eventPropagator.getPreviousPosition(),
                        a = this.componentList.getIndexById(i)
                      this._callClosestMatchingHandler(
                        e,
                        t,
                        n,
                        a,
                        -1 === r ? 0 : r
                      ) && this.eventPropagator.setHandled()
                    }
                },
              },
              {
                key: '_logPrefix',
                value: function (e) {
                  var t =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = I.logIcons,
                    i = I.eventIcons,
                    o = I.componentIcons,
                    r = 'HotKeys ('
                  if (!1 !== t.focusTreeId) {
                    var a = ce(t.focusTreeId) ? this.focusTreeId : t.focusTreeId
                    r += 'F'.concat(a).concat(n[a % n.length], '-')
                  }
                  if (!1 !== t.eventId) {
                    var s = ce(t.eventId) ? Ae.getId() : t.eventId
                    r += 'E'.concat(s).concat(i[s % i.length], '-')
                  }
                  r += 'C'.concat(e).concat(o[e % o.length])
                  var l = this.componentList.getIndexById(e)
                  return (
                    ce(l) || (r += '-P'.concat(l).concat(o[l % o.length], ':')),
                    ''.concat(r, ')')
                  )
                },
              },
            ]),
            t
          )
        })(Le)
      function Ze(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
        return Array.isArray(e) || R(e)
          ? n.stringifyFirst
            ? !ce(
                e.find(function (e) {
                  return e.toString() === t.toString()
                })
              )
            : -1 !== e.indexOf(t)
          : fe(e)
          ? j(e, t)
          : n.stringifyFirst
          ? e.toString() === t.toString()
          : e === t
      }
      function We(e) {
        return e.replace(/\b\w/g, function (e) {
          return e.toUpperCase()
        })
      }
      var Ve = (function (e) {
        function t() {
          var e,
            n =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = 1 < arguments.length ? arguments[1] : void 0
          return (
            l(this, t),
            ((e = _(this, y(t).call(this, n, i))).listenersBound = !1),
            (e.eventOptions = {
              ignoreEventsCondition: O.option('ignoreEventsCondition'),
            }),
            (e.listeners = {}),
            e
          )
        }
        return (
          f(t, e),
          u(t, [
            {
              key: 'enableHotKeys',
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = 3 < arguments.length ? arguments[3] : void 0,
                  o = 4 < arguments.length ? arguments[4] : void 0
                ;(this.eventOptions = o),
                  this._addComponent(e, t, n, i),
                  this._updateDocumentHandlers(),
                  this._initHandlerResolutionState()
              },
            },
            {
              key: 'updateEnabledHotKeys',
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = 3 < arguments.length ? arguments[3] : void 0,
                  o = 4 < arguments.length ? arguments[4] : void 0
                ;(this.eventOptions = o),
                  this.componentList.update(e, t, n, i),
                  this.getKeyHistory().setMaxLength(
                    this.componentList.getLongestSequence()
                  ),
                  this._updateDocumentHandlers(),
                  this._initHandlerResolutionState()
              },
            },
            {
              key: 'disableHotKeys',
              value: function (e) {
                this.componentList.remove(e),
                  this.getKeyHistory().setMaxLength(
                    this.componentList.getLongestSequence()
                  ),
                  this._updateDocumentHandlers(),
                  this._initHandlerResolutionState()
              },
            },
            {
              key: '_updateDocumentHandlers',
              value: function () {
                var e = this,
                  t = this._listenersShouldBeBound()
                !this.listenersBound && t
                  ? (Object.values(P).forEach(function (t) {
                      var n = Ne(t)
                      document['on'.concat(n)] = function (t) {
                        e.keyEventManager[
                          'handleGlobal'.concat(
                            (function (e) {
                              return ''
                                .concat(We(e.slice(0, 3)))
                                .concat(We(e.slice(3)))
                            })(n)
                          )
                        ](t)
                      }
                    }),
                    (this.listenersBound = !0))
                  : this.listenersBound &&
                    !t &&
                    (Object.values(P).forEach(function (e) {
                      var t = Ne(e)
                      delete document['on'.concat(t)]
                    }),
                    (this.listenersBound = !1))
              },
            },
            {
              key: '_listenersShouldBeBound',
              value: function () {
                return this.componentList.any() || this.listeners.keyCombination
              },
            },
            {
              key: 'handleKeydown',
              value: function (e) {
                var t = De(e)
                if (e.repeat && O.option('ignoreRepeatedEventsWhenKeyHeldDown'))
                  return !0
                this._checkForModifierFlagDiscrepancies(e, t, P.keydown)
                var n = this._howReactAppRespondedTo(e, t, P.keydown)
                if (n !== Be || !this.eventOptions.ignoreEventsCondition(e)) {
                  if (n !== Ue) {
                    var i = Te(e),
                      o = this.getCurrentCombination()
                    o.isKeyIncluded(t) || o.isEnding()
                      ? this._startAndLogNewKeyCombination(t, i)
                      : this._addToAndLogCurrentKeyCombination(t, P.keydown, i)
                  }
                  Ze([Ue, qe], n) || this._callHandlerIfExists(e, t, P.keydown),
                    this._simulateKeyPressForNonPrintableKeys(e, t)
                }
              },
            },
            {
              key: '_howReactAppRespondedTo',
              value: function (e, t, n) {
                var i = this.keyEventManager.reactAppHistoryWithEvent(t, n)
                return i === qe || i === Ue || i === Fe || Ae.incrementId(), i
              },
            },
            {
              key: 'handleKeyPress',
              value: function (e) {
                var t = De(e)
                if (e.repeat && O.option('ignoreRepeatedEventsWhenKeyHeldDown'))
                  return !0
                var n = this.getCurrentCombination()
                if (n.isKeyPressSimulated(t)) return !0
                var i = this._howReactAppRespondedTo(e, t, P.keypress)
                return (
                  n.isKeyIncluded(t) &&
                    this._addToAndLogCurrentKeyCombination(
                      t,
                      P.keypress,
                      Te(e)
                    ),
                  i === Be &&
                  (this.keyEventManager.closeHangingKeyCombination(
                    t,
                    P.keypress
                  ),
                  this.eventOptions.ignoreEventsCondition(e))
                    ? void 0
                    : void (
                        !Ze([Ue, qe], i) &&
                        this._callHandlerIfExists(e, t, P.keypress)
                      )
                )
              },
            },
            {
              key: 'handleKeyUp',
              value: function (e) {
                var t = De(e),
                  n = this.getCurrentCombination()
                if (n.isKeyUpSimulated(t)) return !0
                var i = this._howReactAppRespondedTo(e, t, P.keyup)
                n.isKeyIncluded(t) &&
                  this._addToAndLogCurrentKeyCombination(t, P.keyup, Te(e)),
                  i === Be
                    ? (this.keyEventManager.closeHangingKeyCombination(
                        t,
                        P.keyup
                      ),
                      this.eventOptions.ignoreEventsCondition(e) ||
                        (!Ze([Ue, qe], i) &&
                          this._callHandlerIfExists(e, t, P.keyup)))
                    : !Ze([Ue, qe], i) &&
                      this._callHandlerIfExists(e, t, P.keyup),
                  this._simulateKeyUpEventsHiddenByCmd(e, t),
                  this.listeners.keyCombination &&
                    this._allKeysAreReleased() &&
                    this.listeners.keyCombination({
                      keys: n.getKeyDictionary(),
                      id: n.describe(),
                    })
              },
            },
            {
              key: '_simulateKeyPressForNonPrintableKeys',
              value: function (e, t) {
                this.keyEventManager.simulatePendingKeyPressEvents(),
                  this._handleEventSimulation(
                    'handleKeyPress',
                    this._shouldSimulate(P.keypress, t),
                    { event: e, key: t }
                  )
              },
            },
            {
              key: '_simulateKeyUpEventsHiddenByCmd',
              value: function (e, t) {
                var n = this
                Re(t) &&
                  (this.keyEventManager.simulatePendingKeyUpEvents(),
                  this.getCurrentCombination().forEachKey(function (t) {
                    Re(t) ||
                      n._handleEventSimulation(
                        'handleKeyUp',
                        n._shouldSimulate(P.keyup, t),
                        { event: e, key: t }
                      )
                  }))
              },
            },
            {
              key: '_startAndLogNewKeyCombination',
              value: function (e, t) {
                this.getKeyHistory().startNewKeyCombination(e, t)
              },
            },
            {
              key: '_addToAndLogCurrentKeyCombination',
              value: function (e, t, n) {
                this.getKeyHistory().addKeyToCurrentCombination(e, t, n)
              },
            },
            {
              key: '_handleEventSimulation',
              value: function (e, t, n) {
                var i = n.event,
                  o = n.key
                if (t && O.option('simulateMissingKeyPressEvents')) {
                  var r = this._cloneAndMergeEvent(i, { key: o, simulated: !0 })
                  this[e](r)
                }
              },
            },
            {
              key: '_callHandlerIfExists',
              value: function (e, t, n) {
                this.getCurrentCombination().describe()
                return this.componentList.anyActionsForEventType(n)
                  ? void this._callClosestMatchingHandler(e, t, n)
                  : void 0
              },
            },
            {
              key: '_callClosestMatchingHandler',
              value: function (e, n, i) {
                for (var o = this.componentList.getNewIterator(); o.next(); )
                  if (
                    w(y(t.prototype), '_callClosestMatchingHandler', this).call(
                      this,
                      e,
                      n,
                      i,
                      o.getPosition(),
                      0
                    )
                  )
                    return
              },
            },
            {
              key: '_stopEventPropagation',
              value: function (e, t) {
                e.simulated || e.stopPropagation()
              },
            },
            {
              key: 'addKeyCombinationListener',
              value: function (e) {
                var t = this,
                  n = function () {
                    delete t.listeners.keyCombination
                  }
                return (
                  (this.listeners.keyCombination = function (t) {
                    e(t), n()
                  }),
                  this._updateDocumentHandlers(),
                  n
                )
              },
            },
            {
              key: '_logPrefix',
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = I.eventIcons,
                  i = I.componentIcons,
                  o = 'HotKeys (GLOBAL'
                if (!1 !== t.eventId) {
                  var r = ce(t.eventId) ? Ae.getId() : t.eventId
                  o = ''
                    .concat(o, '-E')
                    .concat(r)
                    .concat(n[r % n.length])
                }
                return ce(e)
                  ? ''.concat(o, '):')
                  : ''
                      .concat(o, '-C')
                      .concat(e)
                      .concat(i[e % i.length], '):')
              },
            },
          ]),
          t
        )
      })(Le)
      function Je(e) {
        return !ce(e)
      }
      var Ye = (function () {
        function e() {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          l(this, e),
            (this.logger = t.logger || new I(O.option('logLevel'))),
            (this._focusOnlyEventStrategy = new Ge(
              { configuration: t, logger: this.logger },
              this
            )),
            (this._globalEventStrategy = new Ve(
              { configuration: t, logger: this.logger },
              this
            )),
            (this.mountedComponentsCount = 0)
        }
        return (
          u(e, null, [
            {
              key: 'getInstance',
              value: function () {
                var t =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                return (
                  this.instance || (this.instance = new e(t)), this.instance
                )
              },
            },
            {
              key: 'clear',
              value: function () {
                delete this.instance
              },
            },
          ]),
          u(e, [
            {
              key: 'getApplicationKeyMap',
              value: function () {
                return Object.assign(
                  this._globalEventStrategy.getApplicationKeyMap(),
                  this._focusOnlyEventStrategy.getApplicationKeyMap()
                )
              },
            },
            {
              key: 'registerKeyMap',
              value: function () {
                var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                return this._focusOnlyEventStrategy.registerKeyMap(e)
              },
            },
            {
              key: 'reregisterKeyMap',
              value: function (e) {
                var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                this._focusOnlyEventStrategy.reregisterKeyMap(e, t)
              },
            },
            {
              key: 'deregisterKeyMap',
              value: function (e) {
                this._focusOnlyEventStrategy.deregisterKeyMap(e)
              },
            },
            {
              key: 'registerComponentMount',
              value: function (e, t) {
                return (
                  this._incrementComponentCount(),
                  this._focusOnlyEventStrategy.registerComponentMount(e, t)
                )
              },
            },
            {
              key: 'registerComponentUnmount',
              value: function () {
                this._decrementComponentCount()
              },
            },
            {
              key: '_incrementComponentCount',
              value: function () {
                var e = this,
                  t = this.mountedComponentsCount
                ;(this.mountedComponentsCount += 1),
                  0 === t &&
                    1 === this.mountedComponentsCount &&
                    (window.onblur = function () {
                      return e._clearKeyHistory()
                    })
              },
            },
            {
              key: '_decrementComponentCount',
              value: function () {
                var e = this.mountedComponentsCount
                ;(this.mountedComponentsCount -= 1),
                  1 === e &&
                    0 === this.mountedComponentsCount &&
                    delete window.onblur
              },
            },
            {
              key: '_clearKeyHistory',
              value: function () {
                this._focusOnlyEventStrategy.resetKeyHistory({ force: !0 }),
                  this._globalEventStrategy.resetKeyHistory({ force: !0 })
              },
            },
            {
              key: 'registerGlobalKeyMap',
              value: function () {
                var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                return this._globalEventStrategy.registerKeyMap(e)
              },
            },
            {
              key: 'registerGlobalComponentUnmount',
              value: function () {
                this._decrementComponentCount()
              },
            },
            {
              key: 'registerGlobalComponentMount',
              value: function (e, t) {
                return (
                  this._incrementComponentCount(),
                  this._globalEventStrategy.registerComponentMount(e, t)
                )
              },
            },
            {
              key: 'reregisterGlobalKeyMap',
              value: function (e, t) {
                this._globalEventStrategy.reregisterKeyMap(e, t)
              },
            },
            {
              key: 'deregisterGlobalKeyMap',
              value: function (e) {
                this._globalEventStrategy.deregisterKeyMap(e)
              },
            },
            {
              key: 'addKeyCombinationListener',
              value: function (e) {
                return this._globalEventStrategy.addKeyCombinationListener(e)
              },
            },
            {
              key: 'enableHotKeys',
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = 3 < arguments.length ? arguments[3] : void 0
                return this._focusOnlyEventStrategy.enableHotKeys(e, t, n, i)
              },
            },
            {
              key: 'updateEnabledHotKeys',
              value: function (e, t) {
                var n =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i =
                    3 < arguments.length && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  o = 4 < arguments.length ? arguments[4] : void 0
                return this._focusOnlyEventStrategy.updateEnabledHotKeys(
                  e,
                  t,
                  n,
                  i,
                  o
                )
              },
            },
            {
              key: 'disableHotKeys',
              value: function (e, t) {
                return this._focusOnlyEventStrategy.disableHotKeys(e, t)
              },
            },
            {
              key: 'handleKeydown',
              value: function (e, t, n, i) {
                if (Je(t))
                  return this._focusOnlyEventStrategy.handleKeydown(e, t, n, i)
              },
            },
            {
              key: 'handleKeyPress',
              value: function (e, t, n, i) {
                if (Je(t))
                  return this._focusOnlyEventStrategy.handleKeyPress(e, t, n, i)
              },
            },
            {
              key: 'handleKeyUp',
              value: function (e, t, n, i) {
                if (Je(t))
                  return this._focusOnlyEventStrategy.handleKeyUp(e, t, n, i)
              },
            },
            {
              key: 'enableGlobalHotKeys',
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = 3 < arguments.length ? arguments[3] : void 0,
                  o = 4 < arguments.length ? arguments[4] : void 0
                return this._globalEventStrategy.enableHotKeys(e, t, n, i, o)
              },
            },
            {
              key: 'updateEnabledGlobalHotKeys',
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = 3 < arguments.length ? arguments[3] : void 0,
                  o = 4 < arguments.length ? arguments[4] : void 0
                return this._globalEventStrategy.updateEnabledHotKeys(
                  e,
                  t,
                  n,
                  i,
                  o
                )
              },
            },
            {
              key: 'disableGlobalHotKeys',
              value: function (e) {
                return this._globalEventStrategy.disableHotKeys(e)
              },
            },
            {
              key: 'handleGlobalKeyDown',
              value: function (e) {
                return this._globalEventStrategy.handleKeydown(e)
              },
            },
            {
              key: 'handleGlobalKeyPress',
              value: function (e) {
                return this._globalEventStrategy.handleKeyPress(e)
              },
            },
            {
              key: 'handleGlobalKeyUp',
              value: function (e) {
                return this._globalEventStrategy.handleKeyUp(e)
              },
            },
            {
              key: 'ignoreEvent',
              value: function (e) {
                this._focusOnlyEventStrategy.getEventPropagator().ignoreEvent(e)
              },
            },
            {
              key: 'observeIgnoredEvents',
              value: function (e) {
                this._focusOnlyEventStrategy
                  .getEventPropagator()
                  .observeIgnoredEvents(e)
              },
            },
            {
              key: 'closeHangingKeyCombination',
              value: function (e, t) {
                this._focusOnlyEventStrategy.closeHangingKeyCombination(e, t)
              },
            },
            {
              key: 'reactAppHistoryWithEvent',
              value: function (e, t) {
                var n = this._focusOnlyEventStrategy.eventPropagator.getPreviousPropagation()
                return n.isForKey(e) && n.isForEventType(t)
                  ? n.isHandled()
                    ? qe
                    : n.isIgnoringEvent()
                    ? Ue
                    : Fe
                  : Be
              },
            },
            {
              key: 'simulatePendingKeyPressEvents',
              value: function () {
                this._focusOnlyEventStrategy.simulatePendingKeyPressEvents()
              },
            },
            {
              key: 'simulatePendingKeyUpEvents',
              value: function () {
                this._focusOnlyEventStrategy.simulatePendingKeyUpEvents()
              },
            },
            {
              key: 'isGlobalListenersBound',
              value: function () {
                return this._globalEventStrategy.listenersBound
              },
            },
          ]),
          e
        )
      })()
      function Qe(e, t) {
        var n = t.deprecatedAPI,
          i = n.contextTypes,
          o = n.childContextTypes,
          r = t.newAPI.contextType
        if (void 0 === a.a.createContext)
          (e.contextTypes = i),
            (e.childContextTypes = o),
            (e.prototype.getChildContext = function () {
              return this._childContext
            })
        else {
          var s = a.a.createContext(r)
          ;(e.contextType = s),
            (e.prototype._originalRender = e.prototype.render),
            (e.prototype.render = function () {
              var e = this._originalRender()
              return e
                ? a.a.createElement(
                    s.Provider,
                    { value: this._childContext },
                    e
                  )
                : null
            })
        }
        return e
      }
      function Xe(e) {
        function t(e, t) {
          return v({}, s[e] || {}, t[e] || {})
        }
        function n(e) {
          return t('handlers', e)
        }
        function i(e) {
          return t('keyMap', e)
        }
        var s =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          c = (function (t) {
            function o(e) {
              var t
              return (
                l(this, o),
                ((t = _(
                  this,
                  y(o).call(this, e)
                ))._handleFocus = t._handleFocus.bind(E(E(t)))),
                (t._handleBlur = t._handleBlur.bind(E(E(t)))),
                (t._handleKeyDown = t._handleKeyDown.bind(E(E(t)))),
                (t._handleKeyPress = t._handleKeyPress.bind(E(E(t)))),
                (t._handleKeyUp = t._handleKeyUp.bind(E(E(t)))),
                (t._componentIsFocused = t._componentIsFocused.bind(E(E(t)))),
                (t._id = Ye.getInstance().registerKeyMap(e.keyMap)),
                (t._childContext = { hotKeysParentId: t._id }),
                t
              )
            }
            return (
              f(o, t),
              u(o, [
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      n =
                        (t.keyMap,
                        t.handlers,
                        t.allowChanges,
                        t.root,
                        k(t, ['keyMap', 'handlers', 'allowChanges', 'root'])),
                      i = {
                        onFocus: this._wrapFunction(
                          'onFocus',
                          this._handleFocus
                        ),
                        onBlur: this._wrapFunction('onBlur', this._handleBlur),
                        tabIndex: O.option('defaultTabIndex'),
                      }
                    return (
                      this._shouldBindKeyListeners() &&
                        ((i.onKeyDown = this._handleKeyDown),
                        (i.onKeyPress = this._handleKeyPress),
                        (i.onKeyUp = this._handleKeyUp)),
                      a.a.createElement(e, h({ hotKeys: i }, n))
                    )
                  },
                },
                {
                  key: '_shouldBindKeyListeners',
                  value: function () {
                    var e = i(this.props)
                    return (
                      !ye(e) ||
                      this.props.root ||
                      (O.option('enableHardSequences') &&
                        this._handlersIncludeHardSequences(e, n(this.props)))
                    )
                  },
                },
                {
                  key: '_handlersIncludeHardSequences',
                  value: function (e, t) {
                    return Object.keys(t).some(function (t) {
                      return !e[t] && ae.isValidKeySerialization(t)
                    })
                  },
                },
                {
                  key: '_wrapFunction',
                  value: function (e, t) {
                    var n = this
                    return 'function' == typeof this.props[e]
                      ? function (i) {
                          n.props[e](i), t(i)
                        }
                      : t
                  },
                },
                {
                  key: '_focusTreeIdsPush',
                  value: function (e) {
                    this._focusTreeIds || (this._focusTreeIds = []),
                      this._focusTreeIds.push(e)
                  },
                },
                {
                  key: '_focusTreeIdsShift',
                  value: function () {
                    this._focusTreeIds && this._focusTreeIds.shift()
                  },
                },
                {
                  key: '_getFocusTreeId',
                  value: function () {
                    if (this._focusTreeIds) return this._focusTreeIds[0]
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var e = Ye.getInstance()
                    if (
                      (e.reregisterKeyMap(this._id, this.props.keyMap),
                      this._componentIsFocused() &&
                        (this.props.allowChanges ||
                          !O.option('ignoreKeymapAndHandlerChangesByDefault')))
                    ) {
                      var t = this.props,
                        n = t.keyMap,
                        i = t.handlers
                      e.updateEnabledHotKeys(
                        this._getFocusTreeId(),
                        this._id,
                        n,
                        i,
                        this._getComponentOptions()
                      )
                    }
                  },
                },
                {
                  key: '_componentIsFocused',
                  value: function () {
                    return !0 === this._focused
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = Ye.getInstance(),
                      t = this.context.hotKeysParentId
                    e.registerComponentMount(this._id, t)
                  },
                },
                {
                  key: '_handleFocus',
                  value: function () {
                    var e
                    this.props.onFocus &&
                      (e = this.props).onFocus.apply(e, arguments)
                    var t = Ye.getInstance().enableHotKeys(
                      this._id,
                      i(this.props),
                      n(this.props),
                      this._getComponentOptions()
                    )
                    ce(t) || this._focusTreeIdsPush(t), (this._focused = !0)
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    var e = Ye.getInstance()
                    e.deregisterKeyMap(this._id),
                      e.registerComponentUnmount(),
                      this._handleBlur()
                  },
                },
                {
                  key: '_handleBlur',
                  value: function () {
                    var e
                    this.props.onBlur &&
                      (e = this.props).onBlur.apply(e, arguments)
                    var t = Ye.getInstance().disableHotKeys(
                      this._getFocusTreeId(),
                      this._id
                    )
                    t || this._focusTreeIdsShift(), (this._focused = !1)
                  },
                },
                {
                  key: '_handleKeyDown',
                  value: function (e) {
                    Ye.getInstance().handleKeydown(
                      e,
                      this._getFocusTreeId(),
                      this._id,
                      this._getEventOptions()
                    ) && this._focusTreeIdsShift()
                  },
                },
                {
                  key: '_handleKeyPress',
                  value: function (e) {
                    Ye.getInstance().handleKeyPress(
                      e,
                      this._getFocusTreeId(),
                      this._id,
                      this._getEventOptions()
                    ) && this._focusTreeIdsShift()
                  },
                },
                {
                  key: '_handleKeyUp',
                  value: function (e) {
                    Ye.getInstance().handleKeyUp(
                      e,
                      this._getFocusTreeId(),
                      this._id,
                      this._getEventOptions()
                    ) && this._focusTreeIdsShift()
                  },
                },
                {
                  key: '_getComponentOptions',
                  value: function () {
                    return { defaultKeyEvent: O.option('defaultKeyEvent') }
                  },
                },
                {
                  key: '_getEventOptions',
                  value: function () {
                    return {
                      ignoreEventsCondition: O.option('ignoreEventsCondition'),
                    }
                  },
                },
              ]),
              o
            )
          })(r.PureComponent)
        return (
          d(c, 'propTypes', {
            keyMap: o.a.object,
            handlers: o.a.object,
            onFocus: o.a.func,
            onBlur: o.a.func,
            allowChanges: o.a.bool,
            root: o.a.bool,
          }),
          Qe(c, {
            deprecatedAPI: {
              contextTypes: { hotKeysParentId: o.a.number },
              childContextTypes: { hotKeysParentId: o.a.number },
            },
            newAPI: { contextType: { hotKeysParentId: void 0 } },
          })
        )
      }
      var $e = Xe(
        (function (e) {
          function t() {
            return l(this, t), _(this, y(t).apply(this, arguments))
          }
          return (
            f(t, e),
            u(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hotKeys,
                    n = e.innerRef,
                    i = e.component,
                    o = k(e, ['hotKeys', 'innerRef', 'component']),
                    r = i || O.option('defaultComponent')
                  return a.a.createElement(r, v({}, t, { ref: n }, o))
                },
              },
            ]),
            t
          )
        })(r.Component)
      )
      $e.propTypes = { innerRef: o.a.oneOfType([o.a.object, o.a.func]) }
      var et = (function (e) {
        function t(e) {
          var n
          return (
            l(this, t),
            ((n = _(
              this,
              y(t).call(this, e)
            ))._id = Ye.getInstance().registerGlobalKeyMap(e.keyMap)),
            (n._childContext = { globalHotKeysParentId: n._id }),
            n
          )
        }
        return (
          f(t, e),
          u(t, [
            {
              key: 'render',
              value: function () {
                return this.props.children || null
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                var e = Ye.getInstance()
                if (
                  (e.reregisterGlobalKeyMap(this._id, this.props.keyMap),
                  this.props.allowChanges ||
                    !O.option('ignoreKeymapAndHandlerChangesByDefault'))
                ) {
                  var t = this.props,
                    n = t.keyMap,
                    i = t.handlers
                  e.updateEnabledGlobalHotKeys(
                    this._id,
                    n,
                    i,
                    this._getComponentOptions(),
                    this._getEventOptions()
                  )
                }
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var e = this.props,
                  t = e.keyMap,
                  n = e.handlers,
                  i = this.context.globalHotKeysParentId,
                  o = Ye.getInstance()
                o.registerGlobalComponentMount(this._id, i),
                  o.enableGlobalHotKeys(
                    this._id,
                    t,
                    n,
                    this._getComponentOptions(),
                    this._getEventOptions()
                  )
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                var e = Ye.getInstance()
                e.deregisterGlobalKeyMap(this._id),
                  e.disableGlobalHotKeys(this._id),
                  e.registerGlobalComponentUnmount()
              },
            },
            {
              key: '_getComponentOptions',
              value: function () {
                return { defaultKeyEvent: O.option('defaultKeyEvent') }
              },
            },
            {
              key: '_getEventOptions',
              value: function () {
                return {
                  ignoreEventsCondition: O.option('ignoreEventsCondition'),
                }
              },
            },
          ]),
          t
        )
      })(r.Component)
      d(et, 'propTypes', {
        keyMap: o.a.object,
        handlers: o.a.object,
        allowChanges: o.a.bool,
      })
      var tt = Qe(et, {
        deprecatedAPI: {
          contextTypes: { globalHotKeysParentId: o.a.number },
          childContextTypes: { globalHotKeysParentId: o.a.number },
        },
        newAPI: { contextType: { globalHotKeysParentId: void 0 } },
      })
      function nt(e) {
        var t,
          n,
          i =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : { only: [], except: [] },
          s = 2 < arguments.length ? arguments[2] : void 0
        return (
          (n = t = (function (t) {
            function n(e) {
              var t
              return (
                l(this, n),
                ((t = _(
                  this,
                  y(n).call(this, e)
                ))._handleKeyEvent = t._handleKeyEvent.bind(E(E(t)))),
                (t._reloadDictionaries = t._reloadDictionaries.bind(E(E(t)))),
                t
              )
            }
            return (
              f(n, t),
              u(n, [
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      n = (t.only, t.except, k(t, ['only', 'except'])),
                      i = {
                        onKeyDown: this._handleKeyEvent,
                        onKeyPress: this._handleKeyEvent,
                        onKeyUp: this._handleKeyEvent,
                        onFocus: this._reloadDictionaries,
                      }
                    return a.a.createElement(e, h({ hotKeys: i }, n))
                  },
                },
                {
                  key: '_reloadDictionaries',
                  value: function () {
                    var e = this.props,
                      t = e.only,
                      n = e.except
                    ;(this._onlyDict = it(t)), (this._exceptDict = it(n))
                  },
                },
                {
                  key: '_shouldIgnoreEvent',
                  value: function (e) {
                    var t = e.key
                    return ye(this._onlyDict)
                      ? !!ye(this._exceptDict) || !j(this._exceptDict, t)
                      : ye(this._exceptDict)
                      ? j(this._onlyDict, t)
                      : j(this._onlyDict, t) && !j(this._exceptDict, t)
                  },
                },
                {
                  key: '_handleKeyEvent',
                  value: function (e) {
                    this._shouldIgnoreEvent(e) && Ye.getInstance()[s](e)
                  },
                },
              ]),
              n
            )
          })(r.PureComponent)),
          d(t, 'propTypes', {
            only: o.a.oneOfType([o.a.string, o.a.arrayOf(o.a.string)]),
            except: o.a.oneOfType([o.a.string, o.a.arrayOf(o.a.string)]),
          }),
          d(t, 'defaultProps', i),
          n
        )
      }
      function it(e) {
        return be(e).reduce(function (e, t) {
          var n = q(t)
          if (!W(n)) throw new V(t)
          return (
            [re, oe, M, H, te, ee].forEach(function (t) {
              e[t(n)] = !0
            }),
            e
          )
        }, {})
      }
      var ot = nt(
          (function (e) {
            function t() {
              return l(this, t), _(this, y(t).apply(this, arguments))
            }
            return (
              f(t, e),
              u(t, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.hotKeys,
                      n = k(e, ['hotKeys']),
                      i = n.component || O.option('defaultComponent')
                    return a.a.createElement(i, v({}, t, n))
                  },
                },
              ]),
              t
            )
          })(r.Component),
          {},
          'ignoreEvent'
        ),
        rt = nt(
          (function (e) {
            function t() {
              return l(this, t), _(this, y(t).apply(this, arguments))
            }
            return (
              f(t, e),
              u(t, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.hotKeys,
                      n = k(e, ['hotKeys']),
                      i = n.component || O.option('defaultComponent')
                    return a.a.createElement(i, v({}, t, n))
                  },
                },
              ]),
              t
            )
          })(r.Component),
          {},
          'observeIgnoredEvents'
        )
      function at(e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : { only: [], except: [] }
        return nt(e, t, 'ignoreEvent')
      }
      function st(e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : { only: [], except: [] }
        return nt(e, t, 'observeIgnoredEvents')
      }
      function lt() {
        var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        O.init(e)
      }
      function ct() {
        return Ye.getInstance().getApplicationKeyMap()
      }
      function ut(e) {
        return Ye.getInstance().addKeyCombinationListener(e)
      }
    },
    '7Bp7': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var i = n('q1tI'),
        o = n.n(i),
        r = n('iuhU'),
        a = function (e) {
          var t = e.current,
            n = e.total,
            a = e.variant,
            s = e.onClick,
            l = Object(i.useMemo)(
              function () {
                return Array.from({ length: n })
              },
              [n]
            )
          return o.a.createElement(
            'div',
            {
              className: Object(r.a)('flex', {
                'flex-row space-x-2': 'horizontal' === a,
                'flex-col space-y-2': 'vertical' === a,
              }),
            },
            l.map(function (e, i) {
              var a = i + 1,
                l = a === t
              return o.a.createElement(
                'button',
                {
                  key: i,
                  className: Object(
                    r.a
                  )(
                    'w-6 h-6 border rounded-full border-transparent flex justify-center items-center cursor-default',
                    {
                      'border-red': l,
                      'cursor-pointer pointer-events-auto': !!s,
                    }
                  ),
                  onClick: s
                    ? function () {
                        return s(a)
                      }
                    : void 0,
                  disabled: !s,
                },
                o.a.createElement(
                  'div',
                  { className: 'w-1 h-1 bg-white rounded-full' },
                  o.a.createElement(
                    'span',
                    { className: 'sr-only' },
                    a,
                    ' of ',
                    n
                  )
                )
              )
            })
          )
        }
    },
    K7k0: function (e, t, n) {},
    KjeQ: function (e, t, n) {
      e.exports =
        n.p + 'static/specsAndFeaturesBg-70a2b02c9c8ae7f737ba02f971abd769.jpg'
    },
    LO4L: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('q1tI'),
        o = n.n(i),
        r = n('9Dj+'),
        a = n('H8eV'),
        s = n('JMfE'),
        l = n('Z4UL'),
        c = n('/183'),
        u = n('lSEo'),
        d = n('OS56'),
        h = n.n(d),
        v = (n('tyWD'), n('K7k0'), n('yKdD')),
        f = n('pSK3'),
        y = n('4YxH'),
        p = n('6fqw'),
        g = n('QROx'),
        m = function (e) {
          e.className, e.style
          var t = e.onClick
          return o.a.createElement(f.a, {
            icon: v.b,
            variant: 'secondary',
            iconClassName: 'transform rotate-180',
            onClick: t,
            'aria-label': 'Previous',
          })
        },
        b = function (e) {
          e.className, e.style
          var t = e.onClick
          return o.a.createElement(f.a, {
            icon: v.b,
            variant: 'secondary',
            iconClassName: 'transform rotate-180',
            onClick: t,
            'aria-label': 'Previous',
          })
        },
        k = function (e) {
          var t = e.title,
            n = e.subtitle,
            r = e.backgroundImage,
            a = e.options,
            c = Object(g.a)().customizationSection,
            d = Object(i.useState)(0),
            p = d[0],
            k = d[1],
            _ = Object(u.a)('(max-width: 767px)'),
            w = Object(i.useRef)(),
            C = {
              ref: w,
              slidesToShow: 3,
              arrows: !1,
              touchThreshold: 10,
              nextArrow: o.a.createElement(b, null),
              prevArrow: o.a.createElement(m, null),
              onInit: function () {},
              beforeChange: function (e, t) {},
              afterChange: function (e) {
                k(e)
              },
              responsive: [
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 3, slidesToScroll: 3 },
                },
                {
                  breakpoint: 768,
                  settings: { slidesToShow: 2, slidesToScroll: 1 },
                },
              ],
            },
            x = _ ? 'calc(100% + 180px)' : 'calc(100% + 280px)'
          return o.a.createElement(
            l.b,
            { theme: 'dark', className: 'py-24 sm:pb-16' },
            o.a.createElement(s.a, { title: t }),
            o.a.createElement('img', {
              src: (r || c) + '?q=30&w=2000',
              alt: '',
              className: 'absolute top-0 h-full w-full object-cover',
            }),
            o.a.createElement('div', {
              className: 'absolute inset-0',
              style: {
                background:
                  'linear-gradient(360deg, #000000 46.14%, rgba(0, 0, 0, 0) 100%)',
              },
            }),
            o.a.createElement(
              'div',
              { className: 'relative text-center mb-24 sm:mt-20 sm:mb-48' },
              o.a.createElement(
                y.a,
                { variant: 'h3', sm: 'h2', lg: 'h1', className: 'mb-4' },
                t
              ),
              o.a.createElement(
                y.a,
                { variant: 'e2', md: 'e1', className: 'text-gray-4' },
                n
              )
            ),
            o.a.createElement(
              'div',
              {
                className: 'relative overflow-hidden lg:pl-16 md:-mt-16',
                style: { width: x },
              },
              o.a.createElement(
                'div',
                { className: 'slider-wrapper' },
                o.a.createElement(
                  h.a,
                  C,
                  a.map(function (e, t) {
                    return o.a.createElement(E, {
                      index: t,
                      sliderIndex: p,
                      key: 'bespoke-option-' + t,
                      media: e.media,
                      header: e.content.header,
                      copy: e.content.copy,
                    })
                  })
                )
              )
            ),
            o.a.createElement(
              'div',
              {
                className:
                  'relative flex lg:justify-end pl-4 lg:px-12 mt-10 lg:mt-20',
              },
              o.a.createElement(f.a, {
                className: 'mr-4',
                icon: v.b,
                variant: 'secondary',
                iconClassName: 'transform rotate-180',
                onClick: function () {
                  w.current.slickPrev()
                },
                'aria-label': 'Previous',
              }),
              o.a.createElement(f.a, {
                icon: v.b,
                variant: 'secondary',
                onClick: function () {
                  w.current.slickNext()
                },
                'aria-label': 'Next',
              })
            )
          )
        },
        E = function (e) {
          var t = e.index,
            n = (e.sliderIndex, e.media),
            i = e.header,
            r = e.copy
          return o.a.createElement(
            'div',
            {
              'data-index': t,
              className: 'sm:max-w-full sm:w-auto lg:max-w-10xl px-2',
            },
            o.a.createElement(
              p.a,
              {
                ratio: '16:9',
                className:
                  'relative sm:max-w-full sm:w-auto lg:max-w-10xl mb-6',
              },
              o.a.createElement('img', {
                src: n.image + '?q=30&w=1000',
                alt: n.image.alt || '',
                className: 'h-full w-full object-cover',
                style: { position: 'absolute' },
              }),
              o.a.createElement('div', {
                className: 'absolute inset-0',
                style: {
                  background:
                    'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
                },
              })
            ),
            o.a.createElement(y.a, { variant: 'h4', className: 'mb-4' }, i),
            o.a.createElement(y.a, { variant: 'p3', sm: 'p2' }, r)
          )
        },
        _ = n('+qZG'),
        w = n('ZMKu')
      function C(e) {
        var t = e || window.event
        return (
          t.touches.length > 1 || (t.preventDefault && t.preventDefault(), !1)
        )
      }
      var x,
        K,
        S,
        O,
        I,
        P =
          'undefined' != typeof window &&
          window.navigator &&
          window.navigator.platform &&
          /iP(ad|hone|od)/.test(window.navigator.platform),
        N = new Map(),
        T = 'object' == typeof document ? document : void 0,
        M = !1,
        j = T
          ? function (e, t) {
              void 0 === e && (e = !0),
                (t = t || Object(i.useRef)(T.body)),
                Object(i.useEffect)(
                  function () {
                    var n = (function e(t) {
                      if (!t) return null
                      if ('BODY' === t.tagName) return t
                      if ('IFRAME' === t.tagName) {
                        var n = t.contentDocument
                        return n ? n.body : null
                      }
                      return t.offsetParent ? e(t.offsetParent) : null
                    })(t.current)
                    if (n) {
                      var i = N.get(n)
                      e
                        ? i
                          ? N.set(n, {
                              counter: i.counter + 1,
                              initialOverflow: i.initialOverflow,
                            })
                          : (N.set(n, {
                              counter: 1,
                              initialOverflow: n.style.overflow,
                            }),
                            P
                              ? M ||
                                (document.addEventListener('touchmove', C, {
                                  passive: !1,
                                }),
                                (M = !0))
                              : (n.style.overflow = 'hidden'))
                        : i &&
                          (1 === i.counter
                            ? (N.delete(n),
                              P
                                ? ((n.ontouchmove = null),
                                  M &&
                                    (document.removeEventListener(
                                      'touchmove',
                                      C
                                    ),
                                    (M = !1)))
                                : (n.style.overflow = i.initialOverflow))
                            : N.set(n, {
                                counter: i.counter - 1,
                                initialOverflow: i.initialOverflow,
                              }))
                    }
                  },
                  [e, t.current]
                )
            }
          : function (e, t) {
              void 0 === e && (e = !0)
            },
        L = n('7l9Y'),
        A = n.n(L),
        H = n('uuth'),
        D = n('9rZX'),
        R = n.n(D),
        B = n('tCiu'),
        U = n('o5kj'),
        F = n.n(U),
        q = function (e) {
          var t = e.copy,
            n = e.header,
            r = e.media,
            a = e.sectionTitle,
            c = e.disableBackground,
            u = void 0 !== c && c,
            d = Object(g.a)().discoverSection
          return o.a.createElement(
            l.b,
            {
              theme: 'dark',
              className: 'pb-24 overflow-hidden',
              'data-section-type': 'Discover',
            },
            o.a.createElement(s.a, { title: a }),
            u
              ? o.a.createElement('div', {
                  className: 'absolute inset-0',
                  style: {
                    background:
                      'radial-gradient(63.57% 82.14% at 50% 39.57%, #212121 0.12%, #000000 100%)',
                  },
                })
              : o.a.createElement(
                  i.Fragment,
                  null,
                  o.a.createElement('img', {
                    src: d + '?q=30&w=3000',
                    alt: '',
                    className:
                      'absolute top-0 left-0 h-full w-full object-cover filter-grayscale z-auto',
                  }),
                  o.a.createElement('div', {
                    className: 'absolute inset-0',
                    style: {
                      background:
                        'linear-gradient(360deg, #000000 46.14%, rgba(0, 0, 0, 0) 100%)',
                    },
                  })
                ),
            o.a.createElement(
              'div',
              {
                className:
                  'md:px-12 lg:px-20 relative max-w-7xl 3xl:max-w-10xl mx-auto',
              },
              o.a.createElement(
                'div',
                { className: 'hidden md:block absolute right-0 top-0' },
                o.a.createElement(B.a, { theme: 'dark', className: 'mr-4' }, a)
              ),
              o.a.createElement(
                'div',
                { className: 'px-4 mb-16 lg:mb-20 md:mt-8 lg:mt-16' },
                o.a.createElement(z, { media: r })
              ),
              o.a.createElement(l.h, {
                className: 'text-center px-4 max-w-2xl mx-auto lg:mb-8',
                header: n,
                copy: t,
              })
            )
          )
        },
        z = function (e) {
          var t = e.media,
            n = Object(i.useState)(!1),
            r = n[0],
            a = n[1],
            s = Object(i.useState)(!1),
            l = s[0],
            c = s[1],
            u = Object(i.useState)(!1)
          if ((Object(_.a)(u), j(r), !t.image)) return null
          return o.a.createElement(
            i.Fragment,
            null,
            o.a.createElement(
              R.a,
              {
                style: {
                  overlay: { background: 'transparent', zIndex: 50 },
                  content: {
                    background: 'transparent',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: 0,
                    border: 'none',
                    borderRadius: 0,
                    overflow: 'hidden',
                  },
                },
                isOpen: r,
                contentLabel: 'onRequestClose Example',
                onRequestClose: function () {
                  a(!1)
                },
              },
              o.a.createElement(
                'div',
                { style: { cursor: 'url(' + F.a + ') 28 28, auto' } },
                o.a.createElement(A.a, {
                  className: 'absolute top-0 left-0',
                  url: t.videoUrl,
                  controls: !0,
                  onClick: function (e) {
                    e.preventDefault(), e.stopPropagation(), a(!1)
                  },
                  playing: r,
                  config: {
                    file: { attributes: { className: 'object-cover' } },
                  },
                  width: '100%',
                  height: '100%',
                })
              )
            ),
            o.a.createElement(
              H.a,
              {
                onEnter: function () {
                  c(!0)
                },
                onLeave: function () {
                  c(!1)
                },
                bottomOffset: 100,
              },
              o.a.createElement(
                'div',
                { className: 'waypoint' },
                o.a.createElement(
                  p.a,
                  { ratio: '21:9' },
                  o.a.createElement('img', {
                    src: t.image + '?q=50&w=3000',
                    alt: '',
                    className: 'h-full w-full object-cover',
                    style: { position: 'absolute' },
                  }),
                  o.a.createElement(
                    w.a,
                    null,
                    o.a.createElement(
                      w.b.div,
                      {
                        key: 'video',
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                      },
                      t.videoUrl &&
                        o.a.createElement(f.a, {
                          onClick: function () {
                            return a(!0)
                          },
                          icon: v.n,
                          size: 'lg',
                          className:
                            'z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                        }),
                      o.a.createElement(A.a, {
                        className: 'absolute top-0 left-0',
                        url: t.videoUrl,
                        controls: !1,
                        playsinline: !0,
                        muted: !0,
                        playing: l,
                        config: {
                          file: { attributes: { className: 'object-cover' } },
                        },
                        width: '100%',
                        height: '100%',
                      })
                    )
                  )
                )
              )
            )
          )
        },
        G = n('8o2o'),
        Z = n('iuhU'),
        W = n('29EZ'),
        V = function (e) {
          e.options
          var t = e.className,
            n = e.selectedCategory,
            i = e.onCategoryClick,
            r = 'specifications' === n ? 'primary' : 'secondary',
            a = 'features' === n ? 'primary' : 'secondary'
          return o.a.createElement(
            'div',
            { className: t + ' flex justify-center py-6 px-4 sm:p-0' },
            o.a.createElement(
              W.a,
              {
                onClick: function () {
                  i('specifications')
                },
                className: Object(Z.a)(
                  'mr-6',
                  'specifications' === n
                    ? 'selected'
                    : 'text-white border-white hover:border-red'
                ),
                variant: r,
              },
              'Specifications'
            ),
            o.a.createElement(
              W.a,
              {
                onClick: function () {
                  i('features')
                },
                className: Object(Z.a)(
                  'features' === n
                    ? 'selected'
                    : 'text-white border-white hover:border-red'
                ),
                variant: a,
              },
              'Features'
            )
          )
        },
        J = function (e) {
          var t = e.isToggled,
            n = e.onToggle,
            i = e.choices
          return o.a.createElement(
            'div',
            {
              className:
                'flex justify-center sm:align-middle sm:items-center py-12 sm:py-0',
            },
            o.a.createElement(
              y.a,
              { className: 'mr-3 sm:mr-4', variant: 'p3', theme: 'dark' },
              i[0]
            ),
            o.a.createElement(
              'label',
              { className: 'toggle-switch inline-block relative' },
              o.a.createElement('input', {
                className: 'hidden',
                type: 'checkbox',
                checked: t,
                onChange: n,
              }),
              o.a.createElement('span', {
                className:
                  'switch absolute top-0 left-0 bottom-0 right-0 transition-colors',
              })
            ),
            o.a.createElement(
              y.a,
              {
                className: Object(Z.a)('ml-3 sm:ml-4 transition-transform'),
                variant: 'p3',
                theme: 'dark',
              },
              i[1]
            )
          )
        },
        Y = function (e) {
          var t = e.name,
            n = e.values,
            i = e.unitToggle
          return o.a.createElement(
            'div',
            {
              className:
                'py-6 border-gray-2 border-solid border-b first:border-t last:border-b-0 sm:border-none',
            },
            o.a.createElement(
              y.a,
              { className: 'text-center mb-3 sm:text-left', variant: 'e3' },
              t
            ),
            o.a.createElement(
              w.a,
              { exitBeforeEnter: !0 },
              !i &&
                o.a.createElement(
                  Q,
                  { valueKey: 'us' },
                  n.usValues.map(function (e, t) {
                    return o.a.createElement(
                      y.a,
                      { key: e + '-' + t, variant: 'p2' },
                      e
                    )
                  })
                ),
              i &&
                o.a.createElement(
                  Q,
                  { valueKey: 'metric' },
                  n.metricValues.map(function (e) {
                    return o.a.createElement(y.a, { variant: 'p2' }, e)
                  })
                )
            )
          )
        },
        Q = function (e) {
          var t = e.children,
            n = e.valueKey
          return o.a.createElement(
            w.b.div,
            {
              key: n,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.25 },
              className: 'text-center sm:text-left w-full',
            },
            t
          )
        },
        X = function (e) {
          var t = e.specificationsCategories,
            n = (e.title, e.unitToggle)
          return t.length
            ? o.a.createElement(
                'div',
                {
                  className:
                    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 max-w-screen-xl m-auto lg:px-0',
                },
                t.map(function (e, t) {
                  return o.a.createElement(
                    Y,
                    Object.assign({ key: e.name + '-' + t, unitToggle: n }, e)
                  )
                })
              )
            : o.a.createElement(
                'div',
                { className: 'max-w-screen-xl m-auto' },
                'Specifications coming soon!'
              )
        },
        $ = n('AcpX'),
        ee = n('vOnD'),
        te = ee.a.div(
          x ||
            (x = Object($.a)([
              '\n  position: absolute;\n  height: 2px;\n  top: 40%;\n  background: red;\n  width: 100%;\n  transition: transform 0.5s ease;\n  transform: translate3d(-101%, 0, 0);\n\n  &.open {\n    transform: translate3d(0, 0, 0);\n  }\n',
            ]))
        ),
        ne = ee.a.div(
          K ||
            (K = Object($.a)([
              "\n  transition: opacity 0.5s ease;\n\n  &.open {\n    opacity: 0;\n  }\n\n  height: 1px;\n  /* background-color: #fff; */\n  margin-top: 10px;\n  position: relative;\n  overflow: hidden;\n  &:after {\n    content: '';\n    height: 1px;\n    background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 1) 30%,\n      rgba(255, 255, 255, 0) 40%,\n      rgba(255, 255, 255, 1) 52%,\n      rgba(255, 255, 255, 1) 100%\n    );\n    width: 400%;\n    display: block;\n    transition: transform 1s ease;\n    transform: translate3d(-60%, 0, 0);\n  }\n",
            ]))
        ),
        ie = ee.a.header(
          S ||
            (S = Object($.a)([
              '\n  &:hover {\n    ',
              ' {\n      &:after {\n        transform: translate3d(0, 0, 0);\n      }\n    }\n  }\n',
            ])),
          ne
        ),
        oe = ee.a.div(
          O ||
            (O = Object($.a)([
              '\n  background-color: rgba(255, 255, 255, 0.5);\n  height: 48px;\n  width: 48px;\n  position: absolute;\n  top: 19px;\n  right: 19px;\n  border-radius: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.5s ease;\n',
            ]))
        ),
        re = ee.a.li(
          I ||
            (I = Object($.a)([
              "\n  div::before {\n    display: inline-block;\n    color: red;\n    height: 5px;\n    width: 5px;\n    border-radius: 5px;\n    background-color: red;\n    content: '';\n    vertical-align: middle;\n    margin-right: 7px;\n  }\n",
            ]))
        ),
        ae = function (e) {
          var t = e.isOpen
          return o.a.createElement(
            oe,
            {
              as: w.b.div,
              isOpen: t,
              initial: { x: 0 },
              animate: { rotate: t ? -45 : 0 },
              className: 'group-hover:bg-red',
            },
            o.a.createElement(
              'svg',
              { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none' },
              o.a.createElement('line', {
                x1: '8.41675',
                x2: '8.41675',
                y2: '16',
                stroke: 'white',
                strokeWidth: '1.5',
              }),
              o.a.createElement('line', {
                y1: '7.58301',
                x2: '16',
                y2: '7.58301',
                stroke: 'white',
                strokeWidth: '1.5',
              })
            )
          )
        },
        se = function (e) {
          e.title
          var t = e.featureCategories
          if (!t.length)
            return o.a.createElement(
              'div',
              { className: 'max-w-screen-xl m-auto' },
              'Features coming soon!'
            )
          var n = Object(i.useState)(!1),
            r = n[0],
            a = n[1]
          return o.a.createElement(
            'div',
            { className: 'relative px-6 max-w-screen-xl m-auto lg:px-0' },
            o.a.createElement(
              'div',
              { className: 'w-full flex flex-col items-center' },
              t.map(function (e, t) {
                var n = t === r
                return o.a.createElement(
                  'div',
                  {
                    key: e + '-' + t,
                    className:
                      'feature w-full border-solid border-gray-1 border mb-6',
                  },
                  o.a.createElement(
                    ie,
                    {
                      className:
                        'relative p-12 md:py-24 text-center flex items-center content-center justify-center cursor-pointer group',
                      onClick: function () {
                        return a(!n && t)
                      },
                    },
                    o.a.createElement(ae, { isOpen: n }),
                    o.a.createElement(
                      y.a,
                      { className: 'relative overflow-hidden', variant: 'h3' },
                      o.a.createElement(te, {
                        className: n ? 'open' : 'closed',
                      }),
                      e.name,
                      o.a.createElement(ne, {
                        className: n ? 'open' : 'closed',
                      })
                    )
                  ),
                  o.a.createElement(
                    w.b.div,
                    {
                      initial: { height: 0 },
                      animate: { height: n ? 'auto' : 0 },
                      exit: { height: 0 },
                      transition: { ease: [0.45, 0, 0.55, 1] },
                      className: 'overflow-hidden feature-body px-6',
                    },
                    o.a.createElement(
                      'div',
                      {
                        className:
                          'lg:grid-cols-2 lg:px-32 lg:grid lg:col-gap-10 pb-10',
                      },
                      0 === e.features.length &&
                        o.a.createElement(
                          'div',
                          {
                            key: 'no features',
                            className:
                              'border-b border-solid border-gray-2 lg:border-none',
                          },
                          o.a.createElement(
                            y.a,
                            { variant: 'e2', className: 'mb-10 text-center' },
                            'Details Coming Soon!'
                          )
                        ),
                      e.features.map(function (e, t) {
                        return o.a.createElement(
                          'div',
                          {
                            key: e.name + '-' + t,
                            className:
                              'pt-10 border-b border-solid border-gray-2 last:border-b-0 lg:border-none',
                          },
                          o.a.createElement(
                            y.a,
                            { variant: 'e2', className: 'mb-6' },
                            e.name
                          ),
                          !!e.descriptions.length &&
                            o.a.createElement(
                              'ul',
                              { className: 'mb-10' },
                              e.descriptions.map(function (e) {
                                return o.a.createElement(
                                  re,
                                  { key: e, className: 'mb-6' },
                                  o.a.createElement(y.a, { variant: 'p3' }, e)
                                )
                              })
                            )
                        )
                      })
                    )
                  )
                )
              })
            )
          )
        },
        le = n('6y2Z'),
        ce = n('KjeQ'),
        ue = n.n(ce),
        de = function (e) {
          var t = e.specifications,
            n = e.features,
            r = Object(le.a)(!1),
            a = r[0],
            c = r[1],
            u = Object(i.useState)('specifications'),
            d = u[0],
            h = u[1],
            v = 'specifications' === d,
            f = !!t.specificationsCategories.length,
            y = !!n.featureCategories.length
          return f || y
            ? o.a.createElement(
                l.b,
                {
                  theme: 'dark',
                  className:
                    'pb-10 sm:pb-24 overflow-hidden bg-no-repeat bg-cover',
                  'data-section-type': 'Specs And Features',
                  style: {
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(245, 246, 252, 0) 75%, rgba(0,0,0,1)), url(' +
                      ue.a +
                      ')',
                    backgroundSize: '100vw',
                  },
                },
                o.a.createElement(s.a, { title: 'specs' }),
                o.a.createElement(
                  'div',
                  {
                    className:
                      'sm:flex justify-between align-middle content-center px-6 lg:px-0 sm:mb-10 max-w-screen-xl lg:mx-auto',
                  },
                  o.a.createElement(V, {
                    options: ['Specifications', 'Features'],
                    className: 'toggleButtons',
                    selectedCategory: d,
                    onCategoryClick: h,
                  }),
                  o.a.createElement(
                    w.a,
                    { initial: !1 },
                    v &&
                      o.a.createElement(
                        w.b.div,
                        {
                          initial: { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: 'auto' },
                          exit: { opacity: 0, height: 0 },
                        },
                        o.a.createElement(J, {
                          isToggled: a,
                          onToggle: c,
                          choices: ['US', 'Metric'],
                        })
                      )
                  )
                ),
                o.a.createElement(
                  w.a,
                  { exitBeforeEnter: !0, initial: !1 },
                  'specifications' === d &&
                    o.a.createElement(
                      w.b.div,
                      {
                        key: 'specifications',
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 50 },
                        transition: { ease: [0.45, 0, 0.5, 0.1] },
                      },
                      o.a.createElement(X, Object.assign({ unitToggle: a }, t))
                    ),
                  'features' === d &&
                    o.a.createElement(
                      w.b.div,
                      {
                        key: 'features',
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 50 },
                        transition: { ease: [0.45, 0, 0.5, 0.1] },
                      },
                      o.a.createElement(se, n)
                    )
                )
              )
            : null
        }
      var he = n('iStZ'),
        ve = n('elIq'),
        fe = n('4KSP'),
        ye = n('hyb/'),
        pe = n('b5o8'),
        ge = n('WJip'),
        me = n('lGOm'),
        be = ['children', 'disabled', 'selected'],
        ke = {
          initial: 'hidden',
          animate: 'visible',
          exit: 'hidden',
          variants: {
            hidden: {
              transition: { when: 'afterChildren', staggerChildren: 0.05 },
            },
            visible: {
              transition: { when: 'beforeChildren', staggerChildren: 0.05 },
            },
          },
        },
        Ee = {
          variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
          transition: { duration: 0.3 },
        },
        _e = function (e) {
          e.source
          var t = e.title,
            n = e.gallery,
            r = Object(u.a)('(min-width: 720px)'),
            a = Object(i.useState)(),
            c = a[0],
            d = a[1],
            h = Object(i.useState)(1),
            v = h[0],
            f = h[1],
            y = Object(i.useState)('all'),
            p = y[0],
            g = y[1]
          j(void 0 !== c)
          var m = n.map(function (e) {
              return {
                thumbnail: e.thumbnail,
                image: e.image,
                videoUrl: e.videoUrl,
              }
            }),
            b = m.filter(function (e) {
              return 'photos' === p
                ? !e.videoUrl
                : 'videos' !== p || !!e.videoUrl
            }),
            k = r ? 8 : 4,
            E = Math.ceil(b.length / k)
          Object(i.useEffect)(
            function () {
              v > E && f(E)
            },
            [p]
          ),
            Object(i.useEffect)(
              function () {
                Object(ge.a)(
                  Se(b, v + 1, k).map(function (e) {
                    return e.thumbnail + '?q=30&w=750'
                  })
                )
              },
              [v, k]
            ),
            Object(i.useEffect)(
              function () {
                if (void 0 !== c) {
                  var e = b[Math.max(c - 1, 0)].image,
                    t = b[Math.min(c + 1, b.length - 1)].image
                  Object(ge.a)([e, t])
                }
              },
              [c]
            )
          var _ = void 0 !== c ? b[c] : void 0
          return o.a.createElement(
            l.b,
            { theme: 'dark', className: 'sm:py-32' },
            o.a.createElement(s.a, { title: t }),
            o.a.createElement(l.d, { className: 'sm:hidden' }, t),
            o.a.createElement(
              'div',
              { className: 'relative max-w-7xl mx-auto sm:pl-16' },
              o.a.createElement(
                B.a,
                { theme: 'dark', className: 'absolute -ml-12 xl:-ml-16 mt-12' },
                t
              ),
              o.a.createElement(
                'div',
                { className: 'px-4 flex space-x-6 mb-6' },
                o.a.createElement(
                  Ke,
                  {
                    onClick: function () {
                      return g('all')
                    },
                    selected: 'all' === p,
                  },
                  'All'
                ),
                o.a.createElement(
                  Ke,
                  {
                    onClick: function () {
                      return g('photos')
                    },
                    selected: 'photos' === p,
                    disabled: !Pe(m),
                  },
                  'Photos'
                ),
                o.a.createElement(
                  Ke,
                  {
                    onClick: function () {
                      return g('videos')
                    },
                    selected: 'videos' === p,
                    disabled: !Ie(m),
                  },
                  'Videos'
                )
              ),
              o.a.createElement(
                w.a,
                { exitBeforeEnter: !0, initial: !1 },
                o.a.createElement(
                  w.b.div,
                  Object.assign({ key: v + '-' + k }, ke, {
                    className:
                      'grid grid-cols-2 sm:grid-cols-none sm:grid-flow-col-dense sm:grid-rows-2 gap-6 px-4 mb-16',
                  }),
                  Se(b, v, k).map(function (e, t) {
                    return o.a.createElement(
                      w.b.div,
                      Object.assign(
                        { key: v + '-' + k + '-' + e.thumbnail },
                        Ee
                      ),
                      o.a.createElement(xe, {
                        key: t,
                        media: e,
                        hasVideo: !!e.videoUrl,
                        onClick: function () {
                          return d(b.indexOf(e))
                        },
                      })
                    )
                  })
                )
              ),
              o.a.createElement(
                'div',
                { className: 'flex sm:justify-between items-center px-4' },
                o.a.createElement(
                  'div',
                  {
                    className:
                      'hidden sm:block w-full max-w-xs md:max-w-sm lg:max-w-md',
                  },
                  o.a.createElement(pe.a, { percentage: Oe(v, E) })
                ),
                o.a.createElement(l.c, {
                  className: 'mb-4',
                  onClickNext: function () {
                    f(function (e) {
                      return e === E ? e : e + 1
                    })
                  },
                  onClickPrev: function () {
                    f(function (e) {
                      return 1 === e ? e : e - 1
                    })
                  },
                  disabledNext: v === E,
                  disabledPrev: 1 === v,
                })
              )
            ),
            o.a.createElement(Ce, {
              isOpen: !!_,
              onClose: function () {
                return d(void 0)
              },
              media: _,
              goNext: function () {
                d(function (e) {
                  return void 0 === e && (e = -1), Math.min(e + 1, b.length - 1)
                })
              },
              goPrev: function () {
                d(function (e) {
                  return void 0 === e && (e = -1), Math.max(e - 1, 0)
                })
              },
              disabledNext: c === b.length - 1,
              disabledPrev: 0 === c,
            })
          )
        },
        we = {
          overlay: { background: 'transparent', zIndex: 50 },
          content: {
            background: 'transparent',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            border: 'none',
            borderRadius: 0,
            overflow: 'hidden',
          },
        },
        Ce = function (e) {
          var t = e.disabledNext,
            n = e.disabledPrev,
            i = e.goNext,
            r = e.goPrev,
            a = e.isOpen,
            s = e.media,
            c = e.onClose
          return o.a.createElement(
            me.HotKeys,
            {
              keyMap: { NEXT: 'right', PREV: 'left' },
              handlers: { NEXT: i, PREV: r },
            },
            o.a.createElement(
              R.a,
              { isOpen: a, style: we, closeTimeoutMS: 300, onRequestClose: c },
              o.a.createElement(
                w.a,
                null,
                a &&
                  o.a.createElement(
                    w.b.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.3 },
                      className:
                        'relative min-h-full bg-black bg-opacity-75 flex justify-center items-center',
                      onClick: c,
                    },
                    o.a.createElement(
                      'div',
                      {
                        className: 'w-5/6 flex justify-center items-center',
                        style: { width: '90vw', height: '90vh' },
                      },
                      s.videoUrl
                        ? o.a.createElement(A.a, {
                            className: '',
                            url: s.videoUrl,
                            controls: !0,
                            playing: !0,
                            config: {
                              file: {
                                attributes: { className: 'object-cover' },
                              },
                            },
                            width: '100%',
                            height: '100%',
                          })
                        : o.a.createElement(w.b.img, {
                            src: s.image + '?q=30&w=1500',
                            className: 'max-h-full max-w-full',
                          })
                    ),
                    o.a.createElement(l.c, {
                      className: 'absolute px-4 w-full justify-between',
                      onClickNext: function (e) {
                        e.stopPropagation(), i()
                      },
                      onClickPrev: function (e) {
                        e.stopPropagation(), r()
                      },
                      disabledNext: t,
                      disabledPrev: n,
                    })
                  )
              )
            )
          )
        },
        xe = function (e) {
          var t = e.className,
            n = void 0 === t ? '' : t,
            i = e.hasVideo,
            r = e.media,
            a = e.onClick
          return o.a.createElement(
            'div',
            { className: 'max-w-xs ' + n, role: 'button', onClick: a },
            o.a.createElement(
              p.a,
              { ratio: '1:1', className: 'relative group' },
              o.a.createElement('img', {
                src: r.thumbnail + '?q=30&w=750',
                alt: r.alt || 'Gallery image',
                className:
                  'h-full w-full object-cover group-hover:filter-none transition duration-150 ease-in-out',
                style: { position: 'absolute' },
              }),
              o.a.createElement('div', {
                className:
                  'absolute inset-0 bg-black transform bg-opacity-25 group-hover:bg-opacity-0 transition duration-150 ease-in-out',
              }),
              o.a.createElement(
                w.b.div,
                Object.assign({}, Ee, {
                  className: 'absolute right-0 bottom-0 mb-4 mr-4',
                }),
                o.a.createElement(f.a, {
                  icon: i ? v.n : v.g,
                  size: 'sm',
                  className: 'group-hover:bg-white group-hover:text-red',
                })
              )
            )
          )
        }
      function Ke(e) {
        var t = e.children,
          n = e.disabled,
          i = e.selected,
          r = Object(G.a)(e, be)
        return o.a.createElement(
          'button',
          Object.assign({}, r, {
            disabled: n,
            type: 'button',
            className: 'text-white',
          }),
          o.a.createElement(
            y.a,
            {
              variant: 'e2',
              className: Object(Z.a)({
                'text-red': i,
                'text-gray-3 cursor-default': n,
              }),
            },
            t
          )
        )
      }
      var Se = function (e, t, n) {
          var i = (t - 1) * n,
            o = i + n
          return e.slice(i, o)
        },
        Oe = function (e, t) {
          return Math.round((e / t) * 100)
        },
        Ie = function (e) {
          return e.some(function (e) {
            return !!e.embedUrl || !!e.videoUrl
          })
        },
        Pe = function (e) {
          return e.some(function (e) {
            return !e.embedUrl && !e.videoUrl
          })
        },
        Ne = n('eSoc')
      t.default = function (e) {
        var t,
          n = e.data.craftAPI.entry
        if (!n)
          return o.a.createElement(
            'div',
            { className: 'text-white' },
            e.pageContext.craftSlug
          )
        var i = (function (e) {
            var t,
              n,
              i = []
            return (
              (null == e || null === (t = e.discoverSection) || void 0 === t
                ? void 0
                : t[0]) && i.push(['Discover', '']),
              null == e ||
                null === (n = e.flexibleSections) ||
                void 0 === n ||
                n.forEach(function (e) {
                  i.push([e.title, e.shortTitle || ''])
                }),
              (null == e ? void 0 : e.boatSpecs) && i.push(['Specs', '']),
              (null == e ? void 0 : e.gallery) && i.push(['Gallery', '']),
              i.push([
                (null == e ? void 0 : e.orderSectionTitle) || 'Order Today',
                (null == e ? void 0 : e.orderSectionShortTitle) || 'Order',
              ]),
              i
            )
          })(n),
          u = (function (e) {
            var t, n, i, o, r
            return {
              image:
                null === (t = e.singleMedia[0]) ||
                void 0 === t ||
                null === (n = t.image[0]) ||
                void 0 === n
                  ? void 0
                  : n.url,
              alt:
                null === (i = e.singleMedia[0]) || void 0 === i
                  ? void 0
                  : i.alt,
              videoUrl:
                null === (o = e.singleMedia[0]) || void 0 === o
                  ? void 0
                  : o.videoURL,
              boatNameLong: e.boatNameLong,
              eyebrow: e.eyebrow,
              headline: e.headline,
              stats: e.boatStats,
              boatLogo:
                null === (r = e.boatLogo[0]) || void 0 === r ? void 0 : r.url,
              boatName: e.title,
              ctaText: e.ctaText,
            }
          })(n),
          d = (function (e) {
            var t, n, i, o, r, a, s, l, c, u
            return {
              title: 'discover',
              disableBackground:
                null === (t = e.discoverSection[0]) || void 0 === t
                  ? void 0
                  : t.disableBackground,
              content: {
                header:
                  null === (n = e.discoverSection[0]) ||
                  void 0 === n ||
                  null === (i = n.textBlock[0]) ||
                  void 0 === i
                    ? void 0
                    : i.header,
                copy:
                  null === (o = e.discoverSection[0]) ||
                  void 0 === o ||
                  null === (r = o.textBlock[0]) ||
                  void 0 === r
                    ? void 0
                    : r.copy,
              },
              media: {
                image:
                  null === (a = e.discoverSection[0]) ||
                  void 0 === a ||
                  null === (s = a.singleMedia[0]) ||
                  void 0 === s ||
                  null === (l = s.image[0]) ||
                  void 0 === l
                    ? void 0
                    : l.url,
                videoUrl:
                  null === (c = e.discoverSection[0]) ||
                  void 0 === c ||
                  null === (u = c.singleMedia[0]) ||
                  void 0 === u
                    ? void 0
                    : u.videoURL,
              },
            }
          })(n),
          h = Object(he.a)(Object(c.r)(n)),
          v =
            ((function (e) {
              var t
              null == e ||
                null === (t = e.boatSpecs) ||
                void 0 === t ||
                t.map(function (e) {
                  var t,
                    n =
                      null == e || null === (t = e.children) || void 0 === t
                        ? void 0
                        : t.map(function (e) {
                            var t,
                              n =
                                null == e ||
                                null === (t = e.children) ||
                                void 0 === t
                                  ? void 0
                                  : t.map(function (e) {
                                      return null == e
                                        ? void 0
                                        : e.boatSpecDescription
                                    })
                            return {
                              name: null == e ? void 0 : e.boatSpecName,
                              descriptions: n,
                            }
                          })
                  return { name: e.boatSpecCategory, specs: n }
                })
            })(n),
            (function (e) {
              var t, n
              return {
                specifications: {
                  title: 'Specifications',
                  specificationsCategories:
                    null == e ||
                    null === (n = e.boatSpecifications) ||
                    void 0 === n
                      ? void 0
                      : n.map(function (e) {
                          var t,
                            n = [],
                            i = []
                          return (
                            null == e ||
                              null === (t = e.children) ||
                              void 0 === t ||
                              t.map(function (e) {
                                n.push(e.specificationValueMetric),
                                  i.push(e.specificationValueUS)
                              }),
                            {
                              name: null == e ? void 0 : e.specificationLabel,
                              values: { metricValues: n, usValues: i },
                            }
                          )
                        }),
                },
                features: {
                  title: 'Features',
                  featureCategories:
                    null == e || null === (t = e.boatFeatures) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t,
                            n =
                              null == e ||
                              null === (t = e.children) ||
                              void 0 === t
                                ? void 0
                                : t.map(function (e) {
                                    var t,
                                      n =
                                        null == e ||
                                        null === (t = e.children) ||
                                        void 0 === t
                                          ? void 0
                                          : t.map(function (e) {
                                              return e.boatFeatureDescription
                                            })
                                    return {
                                      name: e.boatFeatureName,
                                      descriptions: n,
                                    }
                                  })
                          return { name: e.boatFeatureCategory, features: n }
                        }),
                },
              }
            })(n)),
          f = (function (e) {
            return {
              source: 'craft',
              type: 'gallery',
              title: 'Media Gallery',
              shortTitle: 'Gallery',
              gallery:
                null == e
                  ? void 0
                  : e.gallery.map(function (e) {
                      var t, n
                      return {
                        thumbnail:
                          null == e || null === (t = e.image) || void 0 === t
                            ? void 0
                            : t[0].thumbnail,
                        image:
                          null == e || null === (n = e.image) || void 0 === n
                            ? void 0
                            : n[0].full,
                        videoUrl: null == e ? void 0 : e.videoURL,
                      }
                    }),
            }
          })(n),
          y = (function (e) {
            var t,
              n,
              i,
              o =
                null == e || null === (t = e.bespokeOptions) || void 0 === t
                  ? void 0
                  : t.map(function (e) {
                      var t, n, i, o, r, a
                      return {
                        media: {
                          image:
                            null === (t = e.singleMedia) ||
                            void 0 === t ||
                            null === (n = t[0].image) ||
                            void 0 === n
                              ? void 0
                              : n[0].url,
                        },
                        content: {
                          header:
                            null === (i = e.textBlock) ||
                            void 0 === i ||
                            null === (o = i[0]) ||
                            void 0 === o
                              ? void 0
                              : o.header,
                          copy:
                            null === (r = e.textBlock) ||
                            void 0 === r ||
                            null === (a = r[0]) ||
                            void 0 === a
                              ? void 0
                              : a.copy,
                        },
                      }
                    })
            return {
              title: e.bespokeSectionCustomTitle || 'Make it Yours',
              subtitle:
                e.bespokeSectionCustomSubtitle || 'Bespoke Possibilities',
              backgroundImage:
                null === (n = e.bespokeBackgroundImage) ||
                void 0 === n ||
                null === (i = n[0]) ||
                void 0 === i
                  ? void 0
                  : i.url,
              options: o,
            }
          })(n),
          p = (function (e) {
            var t
            return {
              boatNameLong: e.boatNameLong,
              title: e.orderSectionTitle || 'Order Today',
              media:
                null === (t = e.orderSectionBackground[0]) || void 0 === t
                  ? void 0
                  : t.url,
            }
          })(n),
          g = (function (e) {
            var t,
              n,
              i,
              o,
              r =
                null == e ||
                null === (t = e.powertrainMoreDetails) ||
                void 0 === t ||
                null === (n = t[0]) ||
                void 0 === n
                  ? void 0
                  : n.children.map(function (e) {
                      var t, n, i, o, r, a, s
                      return {
                        layout: e.horizontalLayout,
                        header:
                          null === (t = e.textBlock) ||
                          void 0 === t ||
                          null === (n = t[0]) ||
                          void 0 === n
                            ? void 0
                            : n.header,
                        copy:
                          null === (i = e.textBlock) ||
                          void 0 === i ||
                          null === (o = i[0]) ||
                          void 0 === o
                            ? void 0
                            : o.copy,
                        image:
                          null === (r = e.singleMedia) ||
                          void 0 === r ||
                          null === (a = r[0].image) ||
                          void 0 === a ||
                          null === (s = a[0]) ||
                          void 0 === s
                            ? void 0
                            : s.url,
                      }
                    }),
              a = e.powertrainOptions.map(function (e) {
                var t = e.children.map(function (e) {
                  return { name: e.textBlockHeader, info: e.textBlockCopy }
                })
                return { name: e.textBlockHeader, details: t }
              })
            return {
              heroImage: e.powertrainOptionsHeader,
              options: a,
              moreDetails: {
                buttonText:
                  null == e ||
                  null === (i = e.powertrainMoreDetails) ||
                  void 0 === i ||
                  null === (o = i[0]) ||
                  void 0 === o
                    ? void 0
                    : o.textBlockHeader,
                details: r,
              },
            }
          })(n),
          m = Object(Ne.c)()[1]
        return o.a.createElement(
          r.a,
          null,
          o.a.createElement(a.a, {
            title: u.boatName,
            slug: e.path,
            image: u.image,
          }),
          !u && o.a.createElement('div', null, 'Enter Some boat data'),
          u &&
            o.a.createElement(l.a, {
              image: u.image + '?q=30&w=2800',
              alt: u.alt,
              videoUrl: u.videoUrl,
              boatLogo: u.boatLogo,
              boatNameLong: u.boatNameLong,
              eyebrow: u.eyebrow,
              headline: u.headline,
              stats: u.stats,
              onClickCta: m,
              ctaText: u.ctaText,
            }),
          o.a.createElement(s.b, {
            boatName: u.boatName,
            titles: i,
            onClickInquire: m,
          }),
          d &&
            o.a.createElement(q, {
              sectionTitle: d.title,
              media: d.media,
              header: d.content.header,
              copy: d.content.copy,
              disableBackground: d.disableBackground,
            }),
          h.map(function (e) {
            var t = e.title,
              n = e.theme,
              i = e.bleedDirection,
              r = e.headerImage,
              a = e.blocks
            return o.a.createElement(
              l.b,
              { key: t, theme: n },
              o.a.createElement(s.a, { title: t }),
              o.a.createElement(c.g, null, t),
              !!r &&
                o.a.createElement(c.p, {
                  label: t,
                  side: 'left' === i ? 'right' : 'left',
                  theme: n,
                  className: 'lg:mt-32',
                }),
              r
                ? o.a.createElement(c.j, {
                    media: r,
                    side: i,
                    className:
                      'relative mx-auto md:mt-16 lg:mt-32 mb-20 md:mb-32',
                    size: 'large',
                  })
                : o.a.createElement('div', { className: 'md:pt-20' }),
              !!a &&
                a.map(function (e, t) {
                  if (Object(he.i)(e))
                    return o.a.createElement(c.m, Object.assign({ key: t }, e))
                  var i
                  if (Object(he.f)(e))
                    return (
                      e.textBlock &&
                        ((e.copy = e.textBlock[0].copy),
                        (e.header = e.textBlock[0].header)),
                      o.a.createElement(
                        c.i,
                        Object.assign({ key: t }, e, {
                          align:
                            null !== (i = e.align) && void 0 !== i ? i : void 0,
                        })
                      )
                    )
                  if (Object(he.e)(e)) {
                    var r, a, s, u, d
                    if (e.textBlock)
                      (e.content = {
                        copy: e.textBlock[0].copy,
                        header: e.textBlock[0].header,
                      }),
                        (e.media = {
                          image:
                            null === (r = e.singleMedia) ||
                            void 0 === r ||
                            null === (a = r[0].image) ||
                            void 0 === a ||
                            null === (s = a[0]) ||
                            void 0 === s
                              ? void 0
                              : s.url,
                          videoURL:
                            null === (u = e.singleMedia) || void 0 === u
                              ? void 0
                              : u[0].videoURL,
                          autoplayVideo:
                            null === (d = e.singleMedia) || void 0 === d
                              ? void 0
                              : d[0].autoplayVideo,
                        })
                    return o.a.createElement(c.h, Object.assign({ key: t }, e))
                  }
                  if (Object(he.b)(e)) {
                    if ('craft' === (null == e ? void 0 : e.source)) {
                      var h = Object(c.q)(e.children)
                      e.items = h
                    }
                    return o.a.createElement(
                      ve.a,
                      Object.assign({ key: t }, e, { theme: n })
                    )
                  }
                  if (Object(he.g)(e)) {
                    if ('craft' === (null == e ? void 0 : e.source)) {
                      var v = Object(c.q)(e.children)
                      e.items = v
                    }
                    return o.a.createElement(
                      ye.a,
                      Object.assign({ key: t }, e, { theme: n })
                    )
                  }
                  if (Object(he.h)(e))
                    return o.a.createElement(c.l, {
                      key: t,
                      className: 'mb-32',
                      images: e.children,
                    })
                  if (Object(he.j)(e))
                    return o.a.createElement(c.n, {
                      key: t,
                      className: 'mb-32',
                      images: e.images || e.children,
                    })
                  if (Object(he.d)(e)) {
                    var f,
                      y = {
                        type: 'horizontal-image-text',
                        layout: e.layout,
                        content: {
                          header: e.textBlock[0].header,
                          copy: e.textBlock[0].copy,
                        },
                        media: {
                          image: {
                            publicURL:
                              null === (f = e.singleMedia[0].image[0]) ||
                              void 0 === f
                                ? void 0
                                : f.url,
                          },
                        },
                      }
                    return o.a.createElement(c.e, Object.assign({ key: t }, y))
                  }
                  if (Object(he.c)(e)) {
                    if ('craft' === (null == e ? void 0 : e.source)) {
                      var p = Object(c.q)(e.children)
                      e.items = p
                    }
                    return o.a.createElement(fe.a, Object.assign({ key: t }, e))
                  }
                  if (
                    (function (e) {
                      return 'powertrain' === e.type
                    })(e)
                  ) {
                    var g = e.children.map(function (e) {
                        var t = e.children.map(function (e) {
                          return {
                            name: e.textBlockHeader,
                            info: e.textBlockCopy,
                          }
                        })
                        return { name: e.textBlockHeader, details: t }
                      }),
                      m = {
                        heroImage: null == e ? void 0 : e.image,
                        options: g,
                      }
                    return o.a.createElement(
                      l.g,
                      Object.assign({ key: 'powertrain-section' }, m)
                    )
                  }
                  if (
                    (function (e) {
                      return 'more-details' === e.type
                    })(e)
                  ) {
                    var b = {
                      buttonText: e.textBlockHeader,
                      details: e.children.map(function (e) {
                        var t, n, i, o, r, a, s
                        return {
                          layout: e.horizontalLayout,
                          header:
                            null === (t = e.textBlock) ||
                            void 0 === t ||
                            null === (n = t[0]) ||
                            void 0 === n
                              ? void 0
                              : n.header,
                          copy:
                            null === (i = e.textBlock) ||
                            void 0 === i ||
                            null === (o = i[0]) ||
                            void 0 === o
                              ? void 0
                              : o.copy,
                          image:
                            null === (r = e.singleMedia) ||
                            void 0 === r ||
                            null === (a = r[0].image) ||
                            void 0 === a ||
                            null === (s = a[0]) ||
                            void 0 === s
                              ? void 0
                              : s.url,
                        }
                      }),
                    }
                    return o.a.createElement(
                      l.e,
                      Object.assign(
                        { key: 'more-details ' + e.textBlockHeader },
                        b
                      )
                    )
                  }
                  return null
                })
            )
          }),
          !!v && o.a.createElement(de, v),
          !!(null == g || null === (t = g.options) || void 0 === t
            ? void 0
            : t.length) && o.a.createElement(l.g, g),
          f && !!f.gallery.length && o.a.createElement(_e, f),
          y && y.options.length > 0 && o.a.createElement(k, y),
          p && o.a.createElement(l.f, Object.assign({ onClickCta: m }, p)),
          o.a.createElement(Ne.b, null)
        )
      }
    },
    UCmN: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var i = {
        initial: { opacity: 0 },
        animate: { zIndex: 1, opacity: 1 },
        exit: { zIndex: 0, opacity: 0 },
        transition: { opacity: { duration: 0.4 } },
      }
    },
    elIq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var i = n('q1tI'),
        o = n.n(i),
        r = n('ZMKu'),
        a = n('tKSW'),
        s = n('6fqw'),
        l = n('Z4UL'),
        c = n('lcRF'),
        u = n('UCmN'),
        d = n('WJip'),
        h = function (e) {
          var t,
            n,
            h = e.items,
            v = e.theme
          if (!(null == h ? void 0 : h.length)) return null
          var f = Object(i.useState)(0),
            y = f[0],
            p = f[1],
            g = Object(a.o)(0, null == h ? void 0 : h.length, y),
            m = function () {
              p(y + 1)
            },
            b = function () {
              p(y - 1)
            }
          return (
            Object(i.useEffect)(function () {
              Object(d.a)(
                null == h
                  ? void 0
                  : h.map(function (e) {
                      var t
                      return (
                        (null == e || null === (t = e.media) || void 0 === t
                          ? void 0
                          : t.image) + '?q=30&w=1500&fm=jpg'
                      )
                    })
              )
            }, []),
            o.a.createElement(
              'div',
              { className: 'max-w-7xl mx-auto', 'data-block-type': 'Carousel' },
              o.a.createElement(
                s.a,
                { ratio: '3:2', className: 'overflow-hidden' },
                o.a.createElement(
                  r.a,
                  { initial: !1 },
                  o.a.createElement(
                    r.b.img,
                    Object.assign(
                      {
                        key: y,
                        src:
                          (null == h ||
                          null === (t = h[g]) ||
                          void 0 === t ||
                          null === (n = t.media) ||
                          void 0 === n
                            ? void 0
                            : n.image) + '?q=30&w=2000&fm=jpg',
                      },
                      u.a,
                      {
                        drag: 'x',
                        dragConstraints: { left: 0, right: 0 },
                        dragElastic: 0,
                        onDragEnd: function (e, t) {
                          var n = t.offset,
                            i = t.velocity
                          Object(c.a)({
                            offset: n.x,
                            velocity: i.x,
                            onSwipeLeft: m,
                            onSwipeRight: b,
                          })
                        },
                        className: 'absolute h-full w-full object-cover',
                      }
                    )
                  )
                ),
                o.a.createElement(l.c, {
                  className: 'absolute bottom-0 pb-4 w-full md:hidden z-10',
                  onClickNext: m,
                  onClickPrev: b,
                  theme: v,
                })
              ),
              o.a.createElement(
                'div',
                {
                  className:
                    'md:flex justify-between my-8 mb-20 md:mb-24 px-4 xl:px-0 ',
                },
                o.a.createElement(
                  r.a,
                  { initial: !1 },
                  o.a.createElement(
                    r.b.div,
                    u.a,
                    o.a.createElement(l.h, {
                      key: y,
                      className: 'md:w-7/12',
                      header: null == h ? void 0 : h[g].content.header,
                      copy: null == h ? void 0 : h[g].content.copy,
                    })
                  )
                ),
                o.a.createElement(l.c, {
                  className: 'hidden md:flex items-start',
                  onClickNext: m,
                  onClickPrev: b,
                  theme: v,
                })
              )
            )
          )
        }
    },
    'hyb/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      var i,
        o = n('q1tI'),
        r = n.n(o),
        a = n('ZMKu'),
        s = n('tKSW'),
        l = n('6fqw'),
        c = n('Z4UL'),
        u = n('lcRF'),
        d = n('UCmN'),
        h = n('WJip')
      !(function (e) {
        ;(e[(e.Next = 1)] = 'Next'), (e[(e.Prev = -1)] = 'Prev')
      })(i || (i = {}))
      var v = {
          enter: { opacity: 0 },
          center: { zIndex: 1, opacity: 1 },
          exit: { zIndex: 0, opacity: 0 },
        },
        f = {
          enter: { opacity: 0, scale: 0.8 },
          center: { opacity: 0.35, scale: 0.85 },
          exit: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } },
        },
        y = function (e) {
          var t,
            n,
            y,
            p,
            g,
            m,
            b,
            k,
            E = e.items,
            _ = e.theme
          if (!(null == E ? void 0 : E.length)) return null
          var w = Object(o.useState)([0, 0]),
            C = w[0][0],
            x = w[1],
            K = Object(s.o)(0, null == E ? void 0 : E.length, C),
            S = Object(s.o)(0, null == E ? void 0 : E.length, C + 1),
            O = function () {
              x([C + 1, i.Next])
            },
            I = function () {
              x([C - 1, i.Prev])
            }
          return (
            Object(o.useEffect)(function () {
              Object(h.a)(
                null == E
                  ? void 0
                  : E.map(function (e) {
                      var t
                      return (
                        (null == e || null === (t = e.media) || void 0 === t
                          ? void 0
                          : t.image) + '?q=30&w=2000&fm=jpg'
                      )
                    })
              )
            }, []),
            r.a.createElement(
              'div',
              { className: 'max-w-7xl mx-auto', 'data-block-type': 'Slider' },
              r.a.createElement(
                'div',
                { className: 'md:w-9/12' },
                r.a.createElement(
                  l.a,
                  { ratio: '3:2' },
                  r.a.createElement(
                    a.a,
                    { initial: !1 },
                    r.a.createElement(a.b.img, {
                      key: C,
                      src:
                        (null == E ||
                        null === (t = E[K]) ||
                        void 0 === t ||
                        null === (n = t.media) ||
                        void 0 === n
                          ? void 0
                          : n.image) + '?q=30&w=2000&fm=jpg',
                      variants: v,
                      initial: 'enter',
                      animate: 'center',
                      exit: 'exit',
                      transition: {
                        x: { type: 'spring', stiffness: 300, damping: 200 },
                        opacity: { duration: 0.4 },
                      },
                      drag: 'x',
                      dragConstraints: { left: 0, right: 0 },
                      dragElastic: 1,
                      onDragEnd: function (e, t) {
                        var n = t.offset,
                          i = t.velocity
                        Object(u.a)({
                          offset: n.x,
                          velocity: i.x,
                          onSwipeLeft: O,
                          onSwipeRight: I,
                        })
                      },
                      className: 'absolute h-full w-full object-cover',
                    }),
                    r.a.createElement(
                      a.b.div,
                      {
                        key: 'secondary' + C,
                        variants: f,
                        initial: 'enter',
                        animate: 'center',
                        exit: 'exit',
                        transition: {
                          x: { type: 'spring', stiffness: 300, damping: 200 },
                          opacity: { duration: 0.4 },
                        },
                        className:
                          'absolute h-full w-full object-cover cursor-pointer',
                        style: { left: 'calc(100% + 0px)' },
                        onClick: O,
                      },
                      r.a.createElement('img', {
                        src:
                          null == E ||
                          null === (y = E[S]) ||
                          void 0 === y ||
                          null === (p = y.media) ||
                          void 0 === p
                            ? void 0
                            : p.image,
                      }),
                      r.a.createElement('div', {
                        className: 'absolute inset-0',
                        style: {
                          background:
                            'dark' === _
                              ? 'linear-gradient(to right, transparent, black 45%)'
                              : 'linear-gradient(to right, transparent, white 45%)',
                        },
                      })
                    )
                  ),
                  r.a.createElement(c.c, {
                    className: 'absolute bottom-0 pb-4 w-full z-10 md:hidden',
                    onClickNext: O,
                    onClickPrev: I,
                    theme: _,
                  })
                ),
                r.a.createElement(
                  'div',
                  {
                    className:
                      'md:flex justify-between items-start md:mt-10 md:mb-40',
                  },
                  r.a.createElement(
                    a.a,
                    { initial: !1 },
                    r.a.createElement(
                      a.b.div,
                      d.a,
                      r.a.createElement(c.h, {
                        key: C,
                        className: 'my-8 md:my-0 px-4 mb-20 md:w-10/12',
                        header:
                          null == E ||
                          null === (g = E[K]) ||
                          void 0 === g ||
                          null === (m = g.content) ||
                          void 0 === m
                            ? void 0
                            : m.header,
                        copy:
                          null == E ||
                          null === (b = E[K]) ||
                          void 0 === b ||
                          null === (k = b.content) ||
                          void 0 === k
                            ? void 0
                            : k.copy,
                      })
                    )
                  ),
                  r.a.createElement(c.c, {
                    className: 'hidden md:flex',
                    onClickNext: O,
                    onClickPrev: I,
                    theme: _,
                  })
                )
              )
            )
          )
        }
    },
    iStZ: function (e, t, n) {
      'use strict'
      function i(e) {
        return 'flexible' === e.type
      }
      function o(e) {
        return e.filter(i)
      }
      function r(e) {
        return 'one-column-text' === e.type
      }
      function a(e) {
        return 'one-column-image-text' === e.type
      }
      function s(e) {
        return 'two-column-image-text' === e.type
      }
      function l(e) {
        return 'two-column-images' === e.type
      }
      function c(e) {
        return 'three-column-images' === e.type
      }
      function u(e) {
        return 'slider' === e.type
      }
      function d(e) {
        return 'carousel' === e.type
      }
      function h(e) {
        return 'full-width-carousel' === e.type
      }
      function v(e) {
        return 'horizontal-image-text' === e.type
      }
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'f', function () {
          return r
        }),
        n.d(t, 'e', function () {
          return a
        }),
        n.d(t, 'i', function () {
          return s
        }),
        n.d(t, 'j', function () {
          return l
        }),
        n.d(t, 'h', function () {
          return c
        }),
        n.d(t, 'g', function () {
          return u
        }),
        n.d(t, 'b', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return v
        })
    },
    lGOm: function (e, t, n) {
      'use strict'
      e.exports = n('5IOR')
    },
    lcRF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var i = function (e) {
        var t = e.offset,
          n = e.velocity,
          i = e.onSwipeLeft,
          o = e.onSwipeRight,
          r = (function (e, t) {
            return Math.abs(e) * t
          })(t, n)
        r < -1e4 ? i() : r > 1e4 && o()
      }
    },
    o5kj: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzM0MTMyRjlEQ0RCMTFFQTk1ODJCMTkxNzE4MTg2NzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzM0MTMyRkFEQ0RCMTFFQTk1ODJCMTkxNzE4MTg2NzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMzQxMzJGN0RDREIxMUVBOTU4MkIxOTE3MTgxODY3NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMzQxMzJGOERDREIxMUVBOTU4MkIxOTE3MTgxODY3NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsmWQSoAAAe2SURBVHja1JrPb1tZFcfPudeJnWkrXoEVQoqDNMMvaWpQFwUh5aUS0mgUOm7FSAObpBuWJNM/YBxnBZtQr1iOwwqNBrBKNZpV8joaRBZV+8Jmyg/JDhIIoSxc2k4c+9175pzbxHVaB/969thHcuzEL3734++558e9FyFm87NZDyLIWAUXCFUGDWWIyEOFaSACQHz6RFAhhAq/qvJ7gbVm9+PbpSDu8WCMUD4hrvDYM/wnj9yHU4WfQ35ZRVR77mJrwcp7qGaZNE1AnuIvgoSar+N3AgYufXTrd5ufO6CAWatWAGiVx+exOFUe/SYPOtAJCIJSqdrpM9bW1vjC0DNnwefRZMHivFOb1eXPDBra5ndKpcpIAR1YBCvsYqsM5LEcAUPl43Axf3kZov2qj4jL/OsSP9gxMF9XdrMf0J4B/cVs1iC+C+TAio0Gf8Mf9v8Nn3ofVhbCMG0MrDHiEkOW+X75Xl0Xe1LNQI4IV3luhTyP3h5GUGgLuhPOGY1b7DFpJPqVfgLr7P/V2AAZLs0u+QcJIGRt4eMPbq3CiI3HAFHEagLmGLRsNF3uxmWxGzjTgG12D46MdHUUqp1mi4s/g4f436sciDck0ZipzpDYCa7BcIovaxhaGMZc63NuzhmDWzxNqJOS6rQ3LjnlcFspNTZwYoEAZjJlzWDKEmoGlbH2pKDvZz1zBu7z/4Ox4wPXTsnIqHtgqZx4QpfbBZ62CjJcjgNKGhVdH0e4ppKeVwZS1zg+fMecU++0u04//4fvv55dZl1/wVWJJO4ijLFVwhC+eeHbe43IeuyMK7OvfGv3n3/75MGpLnrptWxaIW1zUoU/fVCagwmxH155Cw9s/R7PqC9MPbLfbXXVEy6qlJWKIW0sLMAEWeOLKZ5R9gbPxbnorFptq6CopxWV+U9FVu86TJj5iz/BBtTe5fFfmXpsv3asYlNBRLsmLQurl4dJtItfJxNRnqU8X29RsQUQ56V4Hteo2U1UTZ2b4v4TudLCn0uqawK6yMlpgbvqTZhkO3OGNOA6q+jVX0rMP1NQwRtMXdn58HYwyXxBsQhPFaSHpGDlGSCBz9EmNjhZg+n1en6k47i3nZEfxJ5IGXFT9YPXsr40r0xeiglOJniZnzM9fBnbR4+B7UsH5wm0uiNMtbOJjDIa3ILP9Kd0JyYBS08Xj2C7E2QLnFwXS/S+ePErkNTGeSMZm+HCBeY5gobddsgdG0xEicILnSCfg7vO/xdLWSiLWKDOyL33tMJXFUojS1SNc7J3ghwW3LHVOcJwCRNyg57hloq4/sTYc99pkMOGE5tuROKeD3kUnuLomea8sTeMsN0G0h82nLNEkpTWcu+0GnZueh5y6HDH6cJaV2krGk0Orh49jl+HQ7+j6rAmE3PSP1bu7W5TSByEnNsdoLjQ7AjgxC1vdpNCBrboULaw0jw/KhJkqmTh/Ajgir3kyYFsJpIbye5VRfFc3CWFF1yCHDJcr8VA3x3+oZb44nER81CRVjLh07KFNQq4YUOKUE9UTfYnL3AcvaPQWBfRDpI4Pyq4YULevftvmDFa9hplMzlUtZQraapKx7LQ1HOeawM5UNv0GB6xZ8Ib/LnVndvvByoslapIKNthS7L5OKAV+kniLZB5HLBsPJiW9ADz1tg7zTxogQoyKWv/qfoDVi3FfisUATtKI/2vrLFAWD/k5h1nUetSE7CehIDERRByfozRdOS2z/kPaQll+eXWe5tNQOemgAX+Gv1aGKYnkU2EqSUOeOy41Lr80izVatP2JskpiYbKxTAXR293/4pgdE6CudWN9RcAj4JNgavwZZ6LC5OnnivNlniarbduiJ4otkVFOc1ASm187803cWII//J3BNvY4gK0DCoqtmkqnqlIpG5ILrOPzcYkuKqfXYZadJgDwlkC/cKhoRf2B//1j08efPXlb3iEuHp4cPDRKz99q1IJgrGEk0MJj6h6FVH9GokKO398/5entIUn7XCa8hxu72tSv+eoOjeOqUPGtJ/43xyglhMX5WTCtF12PHWeyXYaF+JbLgcbezl1KVMOxgTUBZXwwRxYu6UQyeLhqSct/m8gaUJya4zTDOl5ZVn/Hxc4lPpe1fs7RiImW2minmsUGmqrtv94wc9+foFHgh7DLXATe88dO1VqsINATSWzrCQDcgqZ47o1/9L0TB5efZlG6bIubdVwg0e8yuO4bxGv7ZR+27Ew7zrXZbJZLxlhDkGt8Le3R9pcTkUzFdlZHSaoU22/tqDAbnBkz3CdcjOZaOS7OYvaE2BTzR9dYx9FOZMipzCKoM26A/1ykuKcn0dzLQ3GrnGdLBVKGSzd+PPt93raBeurWnFHp6IE9yb0DkkAIgZF/E1qOhlA3cJZOEeyy9PPOo87EFut+caYHKL2Zd+ElSukVO1mt6oNDNgaZSGhcyQ7VHIM2ZJsAQRo4VYyaYKGTVWnkgYgkZA1EbfGHDx3tsgdaQ5D71CWGUj5PLeWOPLJ0odUVYVUoj+wWABPwL5+bZlTyhUOuNJwugUsVnbXdSiKKlxK7Z0I3kizaN0RzQz/4lo06Um5Igk5iBSSuh4MAhY74AnYxR/7shTJEPP49Ew3AxyvtUiAd88VFPfTELJSIVqzm0pEYRxQrfaZAAMA+M8lQ3doztYAAAAASUVORK5CYII='
    },
    tyWD: function (e, t, n) {},
    uuth: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return m
        })
        var i = n('1TsT'),
          o = n('q1tI'),
          r = n.n(o),
          a = n('TOwV')
        function s(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        function l(e) {
          return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              })(e)
        }
        function c(e, t) {
          return (c =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        function u(e, t) {
          return !t || ('object' != typeof t && 'function' != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  )
                return e
              })(e)
            : t
        }
        function d(e) {
          var t = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          })()
          return function () {
            var n,
              i = l(e)
            if (t) {
              var o = l(this).constructor
              n = Reflect.construct(i, arguments, o)
            } else n = i.apply(this, arguments)
            return u(this, n)
          }
        }
        function h(e, t) {
          var n,
            i =
              ((n = e),
              !isNaN(parseFloat(n)) && isFinite(n)
                ? parseFloat(n)
                : 'px' === n.slice(-2)
                ? parseFloat(n.slice(0, -2))
                : void 0)
          if ('number' == typeof i) return i
          var o = (function (e) {
            if ('%' === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100
          })(e)
          return 'number' == typeof o ? o * t : void 0
        }
        function v(e) {
          return 'string' == typeof e.type
        }
        var f
        var y = []
        function p(e) {
          y.push(e),
            f ||
              (f = setTimeout(function () {
                var e
                for (f = null; (e = y.shift()); ) e()
              }, 0))
          var t = !0
          return function () {
            if (t) {
              t = !1
              var n = y.indexOf(e)
              ;-1 !== n &&
                (y.splice(n, 1),
                !y.length && f && (clearTimeout(f), (f = null)))
            }
          }
        }
        var g = {
            debug: !1,
            scrollableAncestor: void 0,
            children: void 0,
            topOffset: '0px',
            bottomOffset: '0px',
            horizontal: !1,
            onEnter: function () {},
            onLeave: function () {},
            onPositionChange: function () {},
            fireOnRapidScroll: !0,
          },
          m = (function (t) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && c(e, t)
            })(f, t)
            var n,
              o,
              l,
              u = d(f)
            function f(e) {
              var t
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function')
                })(this, f),
                ((t = u.call(this, e)).refElement = function (e) {
                  t._ref = e
                }),
                t
              )
            }
            return (
              (n = f),
              (o = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this
                    f.getWindow() &&
                      (this.cancelOnNextTick = p(function () {
                        e.cancelOnNextTick = null
                        var t = e.props,
                          n = t.children
                        t.debug,
                          (function (e, t) {
                            if (e && !v(e) && !t)
                              throw new Error(
                                '<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.'
                              )
                          })(n, e._ref),
                          (e._handleScroll = e._handleScroll.bind(e)),
                          (e.scrollableAncestor = e._findScrollableAncestor()),
                          (e.scrollEventListenerUnsubscribe = Object(
                            i.a
                          )(e.scrollableAncestor, 'scroll', e._handleScroll, {
                            passive: !0,
                          })),
                          (e.resizeEventListenerUnsubscribe = Object(
                            i.a
                          )(window, 'resize', e._handleScroll, {
                            passive: !0,
                          })),
                          e._handleScroll(null)
                      }))
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var e = this
                    f.getWindow() &&
                      this.scrollableAncestor &&
                      (this.cancelOnNextTick ||
                        (this.cancelOnNextTick = p(function () {
                          ;(e.cancelOnNextTick = null), e._handleScroll(null)
                        })))
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    f.getWindow() &&
                      (this.scrollEventListenerUnsubscribe &&
                        this.scrollEventListenerUnsubscribe(),
                      this.resizeEventListenerUnsubscribe &&
                        this.resizeEventListenerUnsubscribe(),
                      this.cancelOnNextTick && this.cancelOnNextTick())
                  },
                },
                {
                  key: '_findScrollableAncestor',
                  value: function () {
                    var t = this.props,
                      n = t.horizontal,
                      i = t.scrollableAncestor
                    if (i)
                      return (function (t) {
                        return 'window' === t ? e.window : t
                      })(i)
                    for (var o = this._ref; o.parentNode; ) {
                      if ((o = o.parentNode) === document.body) return window
                      var r = window.getComputedStyle(o),
                        a =
                          (n
                            ? r.getPropertyValue('overflow-x')
                            : r.getPropertyValue('overflow-y')) ||
                          r.getPropertyValue('overflow')
                      if ('auto' === a || 'scroll' === a || 'overlay' === a)
                        return o
                    }
                    return window
                  },
                },
                {
                  key: '_handleScroll',
                  value: function (e) {
                    if (this._ref) {
                      var t = this._getBounds(),
                        n = (function (e) {
                          return e.viewportBottom - e.viewportTop == 0
                            ? 'invisible'
                            : (e.viewportTop <= e.waypointTop &&
                                e.waypointTop <= e.viewportBottom) ||
                              (e.viewportTop <= e.waypointBottom &&
                                e.waypointBottom <= e.viewportBottom) ||
                              (e.waypointTop <= e.viewportTop &&
                                e.viewportBottom <= e.waypointBottom)
                            ? 'inside'
                            : e.viewportBottom < e.waypointTop
                            ? 'below'
                            : e.waypointTop < e.viewportTop
                            ? 'above'
                            : 'invisible'
                        })(t),
                        i = this._previousPosition,
                        o = this.props,
                        r = (o.debug, o.onPositionChange),
                        a = o.onEnter,
                        s = o.onLeave,
                        l = o.fireOnRapidScroll
                      if (((this._previousPosition = n), i !== n)) {
                        var c = {
                          currentPosition: n,
                          previousPosition: i,
                          event: e,
                          waypointTop: t.waypointTop,
                          waypointBottom: t.waypointBottom,
                          viewportTop: t.viewportTop,
                          viewportBottom: t.viewportBottom,
                        }
                        r.call(this, c),
                          'inside' === n
                            ? a.call(this, c)
                            : 'inside' === i && s.call(this, c),
                          l &&
                            (('below' === i && 'above' === n) ||
                              ('above' === i && 'below' === n)) &&
                            (a.call(this, {
                              currentPosition: 'inside',
                              previousPosition: i,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }),
                            s.call(this, {
                              currentPosition: n,
                              previousPosition: 'inside',
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }))
                      }
                    }
                  },
                },
                {
                  key: '_getBounds',
                  value: function () {
                    var e,
                      t,
                      n = this.props,
                      i = n.horizontal,
                      o = (n.debug, this._ref.getBoundingClientRect()),
                      r = o.left,
                      a = o.top,
                      s = o.right,
                      l = o.bottom,
                      c = i ? r : a,
                      u = i ? s : l
                    this.scrollableAncestor === window
                      ? ((e = i ? window.innerWidth : window.innerHeight),
                        (t = 0))
                      : ((e = i
                          ? this.scrollableAncestor.offsetWidth
                          : this.scrollableAncestor.offsetHeight),
                        (t = i
                          ? this.scrollableAncestor.getBoundingClientRect().left
                          : this.scrollableAncestor.getBoundingClientRect()
                              .top))
                    var d = this.props,
                      v = d.bottomOffset
                    return {
                      waypointTop: c,
                      waypointBottom: u,
                      viewportTop: t + h(d.topOffset, e),
                      viewportBottom: t + e - h(v, e),
                    }
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = this.props.children
                    return t
                      ? v(t) || Object(a.isForwardRef)(t)
                        ? r.a.cloneElement(t, {
                            ref: function (n) {
                              e.refElement(n),
                                t.ref &&
                                  ('function' == typeof t.ref
                                    ? t.ref(n)
                                    : (t.ref.current = n))
                            },
                          })
                        : r.a.cloneElement(t, { innerRef: this.refElement })
                      : r.a.createElement('span', {
                          ref: this.refElement,
                          style: { fontSize: 0 },
                        })
                  },
                },
              ]) && s(n.prototype, o),
              l && s(n, l),
              f
            )
          })(r.a.PureComponent)
        ;(m.above = 'above'),
          (m.below = 'below'),
          (m.inside = 'inside'),
          (m.invisible = 'invisible'),
          (m.getWindow = function () {
            if ('undefined' != typeof window) return window
          }),
          (m.defaultProps = g),
          (m.displayName = 'Waypoint')
      }.call(this, n('yLpj')))
    },
  },
])
//# sourceMappingURL=component---src-templates-boat-tsx-73c5b17d9f72b35698d4.js.map
