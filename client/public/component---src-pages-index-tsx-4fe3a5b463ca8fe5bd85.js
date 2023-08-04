;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    '1Eu0': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return u
      })
      var M = a('8o2o'),
        l = a('q1tI'),
        n = a.n(l),
        i = a('iuhU'),
        c = a('4YxH'),
        N = a('yKdD'),
        r = ['variant', 'children', 'className', 'theme'],
        u = function (e) {
          var t,
            a = e.variant,
            l = void 0 === a ? 'primary' : a,
            u = e.children,
            D = e.className,
            m = e.theme,
            s = Object(M.a)(e, r)
          return n.a.createElement(
            'button',
            Object.assign({}, s, {
              type: 'button',
              className: Object(i.a)(
                'h-10 border-b flex items-center group',
                ((t = {}),
                (t['border-current border-opacity-50'] = 'primary' === l),
                (t['border-transparent'] = 'secondary' === l),
                (t['text-white border-white'] = 'dark' === m),
                (t['text-black border-black'] = 'light' === m),
                t),
                D
              ),
            }),
            n.a.createElement(
              c.a,
              {
                variant: 'e2',
                as: 'span',
                className:
                  'transform transition-transform duration-300 ease-in-out group-hover:translate-x-1',
              },
              u
            ),
            n.a.createElement(N.b, { className: 'ml-6 sm:ml-10' })
          )
        }
    },
    '7Bp7': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return i
      })
      var M = a('q1tI'),
        l = a.n(M),
        n = a('iuhU'),
        i = function (e) {
          var t = e.current,
            a = e.total,
            i = e.variant,
            c = e.onClick,
            N = Object(M.useMemo)(
              function () {
                return Array.from({ length: a })
              },
              [a]
            )
          return l.a.createElement(
            'div',
            {
              className: Object(n.a)('flex', {
                'flex-row space-x-2': 'horizontal' === i,
                'flex-col space-y-2': 'vertical' === i,
              }),
            },
            N.map(function (e, M) {
              var i = M + 1,
                N = i === t
              return l.a.createElement(
                'button',
                {
                  key: M,
                  className: Object(n.a)(
                    'w-6 h-6 border rounded-full border-transparent flex justify-center items-center cursor-default',
                    {
                      'border-red': N,
                      'cursor-pointer pointer-events-auto': !!c,
                    }
                  ),
                  onClick: c
                    ? function () {
                        return c(i)
                      }
                    : void 0,
                  disabled: !c,
                },
                l.a.createElement(
                  'div',
                  { className: 'w-1 h-1 bg-white rounded-full' },
                  l.a.createElement(
                    'span',
                    { className: 'sr-only' },
                    i,
                    ' of ',
                    a
                  )
                )
              )
            })
          )
        }
    },
    '9Gul': function (e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTE5MCIgdmlld0JveD0iMCAwIDEzIDExOTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjUgNTAyLjVMMTEuMjUgNjAzLjVWNjU5LjVMMTEuMjUgOTEyLjVDMTEuMjUgOTIxLjg3OSA5LjY3OTkxIDkyNS45ODIgOC4wODU1NSA5MzAuMTQ5TDguMDMyOTggOTMwLjI4NkM2LjM5MzI2IDkzNC41NzIgNC43NSA5MzguOTc3IDQuNzUgOTQ5QzQuNzUgOTUzLjQwOCA1LjE1OTIzIDk1Ni41MzMgNS43ODA0MyA5NTkuMDI4QzYuMzg4OTcgOTYxLjQ3MiA3LjE5NzU1IDk2My4yOTYgNy45OTM2OCA5NjUuMDkxTDguMDQyODkgOTY1LjIwMkM4LjgwMjY2IDk2Ni45MTUgOS41NDkxMyA5NjguNjE5IDEwLjEzMiA5NzAuODY4QzkuNTU3NTEgOTczLjMwMiA4LjgyNDE0IDk3NS4yMTggOC4wODU1NSA5NzcuMTQ5TDguMDMyOTggOTc3LjI4NkM2LjM5MzI2IDk4MS41NzIgNC43NSA5ODUuOTc3IDQuNzUgOTk2QzQuNzUgMTAwMC40MSA1LjE1OTIzIDEwMDMuNTMgNS43ODA0MyAxMDA2LjAzQzYuMzg4OTcgMTAwOC40NyA3LjE5NzU1IDEwMTAuMyA3Ljk5MzY4IDEwMTIuMDlMOC4wNDI4OSAxMDEyLjJDOC44NTQxNiAxMDE0LjAzIDkuNjUwMjcgMTAxNS44NSAxMC4yNDgyIDEwMTguMzNDMTAuODQ1NyAxMDIwLjgxIDExLjI0ODkgMTAyMy45OCAxMS4yNDk5IDEwMjguNDhDMTEuMjQ5OSAxMDI4LjQ5IDExLjI0OTkgMTAyOC40OSAxMS4yNDk5IDEwMjguNUwxMS4yNDk5IDExNDNWMTE5MEgxMi4yNDk5VjExNDNMMTIuMjQ5OSAxMDI4LjVDMTIuMjQ5OSAxMDI4LjQ5IDEyLjI0OTkgMTAyOC40OSAxMi4yNDk5IDEwMjguNDhMMTIuMjQ5OSA5ODEuNUMxMi4yNSA5NzYuOTI2IDExLjg0MSA5NzMuNjc3IDExLjIyMDQgOTcxLjA5OUMxMS4yMDA5IDk3MS4wMTggMTEuMTgxMSA5NzAuOTM3IDExLjE2MTEgOTcwLjg1N0MxMS44MTExIDk2OC4wMTUgMTIuMjUgOTY0LjQ4MiAxMi4yNSA5NTkuNVY5MTIuNUwxMi4yNSA2NTkuNVY2MDMuNUwxMi4yNSA1MDIuNUMxMi4yNSA1MDIuNDkyIDEyLjI1IDUwMi40ODQgMTIuMjUgNTAyLjQ3N0wxMi4yNSA0NDYuNUMxMi4yNSA0MjQuNjk1IDkuNjE2IDQxNC42MyA2Ljk3OTQ5IDQwNS43MDhDNi44MjYxIDQwNS4xODkgNi42NzI3NCA0MDQuNjc0IDYuNTE5OTUgNDA0LjE2TDYuNTE5NDUgNDA0LjE1OUM2LjI4MzgyIDQwMy4zNjcgNi4wNDk1NCA0MDIuNTggNS44MTg1IDQwMS43OUM1Ljg2NDQ1IDQwMS42MjQgNS45MTA1MiA0MDEuNDU3IDUuOTU2NzEgNDAxLjI5QzYuMjk0NDggNDAwLjA2NyA2LjYzODQ5IDM5OC44MjIgNi45ODI5NyAzOTcuNTM1QzkuNjE3OSAzODcuNjk2IDEyLjI1IDM3NS41NDkgMTIuMjUgMzUzVjI5N0wxMi4yNSA1NlYwSDExLjI1VjU2TDExLjI1IDI5N0MxMS4yNSAzMTkuNDUxIDguNjMyMDcgMzMxLjUxMiA2LjAxNzAxIDM0MS4yNzdDNS42NzQ2MSAzNDIuNTU1IDUuMzMxNzYgMzQzLjc5NiA0Ljk5NDQxIDM0NS4wMTdDMi43NTAzMiAzNTMuMTM3IDAuNzUgMzYwLjM3NiAwLjc1IDM3MkMwLjc1IDM4Ni41NDYgMi42MTk4MiAzOTQuMzc5IDQuNzc4OSA0MDEuNzk3QzIuNjIzODQgNDA5LjYwNyAwLjc1IDQxNi43NSAwLjc1IDQyOEMwLjc1IDQ0NC4yODMgMy4wOTMwOCA0NTIuMTU0IDUuNTYyMTEgNDYwLjQ0OEM1LjcxNDYgNDYwLjk2IDUuODY3NTYgNDYxLjQ3NCA2LjAyMDQ4IDQ2MS45OTFDOC42MzMwMyA0NzAuODMzIDExLjI0ODEgNDgwLjc5OCAxMS4yNSA1MDIuNDc3QzExLjI1IDUwMi40ODQgMTEuMjUgNTAyLjQ5MiAxMS4yNSA1MDIuNVpNMTEuMjUgNDgyLjExN0wxMS4yNSA0NDYuNUMxMS4yNSA0MjQuODA1IDguNjMzOTcgNDE0LjgzNiA2LjAyMDQ4IDQwNS45OTFDNS44Njc1NiA0MDUuNDc0IDUuNzE0NiA0MDQuOTYgNS41NjIxMSA0MDQuNDQ4QzUuNDc5ODcgNDA0LjE3MSA1LjM5Nzc2IDQwMy44OTYgNS4zMTU4NyA0MDMuNjJDMy4zNTQgNDEwLjgxOSAxLjc1IDQxNy42MjggMS43NSA0MjhDMS43NSA0NDQuMTM5IDQuMDYxODQgNDUxLjkwNCA2LjUxOTQ1IDQ2MC4xNTlMNi41MTk5NSA0NjAuMTZDNi42NzI3NCA0NjAuNjc0IDYuODI2MSA0NjEuMTg5IDYuOTc5NDkgNDYxLjcwOEM4LjYxMjMxIDQ2Ny4yMzQgMTAuMjQ0MiA0NzMuMTk4IDExLjI1IDQ4Mi4xMTdaTTUuMjg5NDUgMzk5Ljk0OEM1LjUzMDc4IDM5OS4wNzIgNS43NzQwMSAzOTguMTg0IDYuMDE3MDEgMzk3LjI3N0M4LjYzMjA3IDM4Ny41MTIgMTEuMjUgMzc1LjQ1MSAxMS4yNSAzNTNMMTEuMjUgMzE4LjY4M0MxMC4yNDQ4IDMyOC40NjYgOC42MTQ0MyAzMzUuNDQzIDYuOTgyOTcgMzQxLjUzNUM2LjYzODQ5IDM0Mi44MjIgNi4yOTQ0OCAzNDQuMDY3IDUuOTU2NzEgMzQ1LjI5QzMuNzE1OCAzNTMuNDAyIDEuNzUgMzYwLjUxOCAxLjc1IDM3MkMxLjc1IDM4NS4zOTUgMy4zNDI2OCAzOTMuMDIyIDUuMjg5NDUgMzk5Ljk0OFpNMTEuMjUgOTIzLjQ1OEMxMC42NDE2IDkyNi4yNjcgOS44MjYzOCA5MjguMzk3IDkuMDA5NSA5MzAuNTMyTDguOTY2OTcgOTMwLjY0M0M3LjM1NjcyIDkzNC44NTIgNS43NSA5MzkuMTMzIDUuNzUgOTQ5QzUuNzUgOTUzLjM0NSA2LjE1MzI3IDk1Ni4zODYgNi43NTA4MSA5NTguNzg2QzcuMzM4MTYgOTYxLjE0NiA4LjExNjY0IDk2Mi45MDEgOC45MTUwNCA5NjQuNzAyTDguOTU3MDYgOTY0Ljc5NkM5LjUwNjYxIDk2Ni4wMzYgMTAuMDYzMSA5NjcuMyAxMC41NTc3IDk2OC43ODRDMTAuOTgzMSA5NjYuMzM3IDExLjI1IDk2My4zNjcgMTEuMjUgOTU5LjVMMTEuMjUgOTIzLjQ1OFpNMTAuNTk4OCA5NzMuMDAzQzEwLjExMTkgOTc0LjY1MSA5LjU2MTEgOTc2LjA5IDkuMDA5NSA5NzcuNTMyTDguOTY2OTcgOTc3LjY0M0M3LjM1NjcyIDk4MS44NTIgNS43NSA5ODYuMTMzIDUuNzUgOTk2QzUuNzUgMTAwMC4zNCA2LjE1MzI3IDEwMDMuMzkgNi43NTA4MSAxMDA1Ljc5QzcuMzM4MTYgMTAwOC4xNSA4LjExNjY0IDEwMDkuOSA4LjkxNTA0IDEwMTEuN0w4Ljk1NzA2IDEwMTEuOEM5Ljc3MDc4IDEwMTMuNjMgMTAuNTk5NyAxMDE1LjUyIDExLjIyMDQgMTAxOC4xQzExLjIzMDMgMTAxOC4xNCAxMS4yNDAyIDEwMTguMTggMTEuMjQ5OSAxMDE4LjIyTDExLjI0OTkgOTgxLjVDMTEuMjQ5OSA5NzcuOTM5IDEwLjk5ODcgOTc1LjIxNSAxMC41OTg4IDk3My4wMDNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2LjUiIHkxPSIwIiB4Mj0iNi41IiB5Mj0iMTE5MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQkRCREJEIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JEQkRCRCIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=='
    },
    Kteb: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return N
      })
      var M = a('q1tI'),
        l = a.n(M),
        n = a('iuhU'),
        i = a('yKdD'),
        c = a('4YxH'),
        N = function (e) {
          var t = e.children,
            a = e.className,
            M = e.subtitle
          return l.a.createElement(
            'div',
            { className: Object(n.a)('flex items-center', a) },
            l.a.createElement(i.a, {
              className: 'mr-1 text-red',
              style: { fontSize: '40px' },
            }),
            l.a.createElement(
              'div',
              null,
              !!M &&
                l.a.createElement(
                  c.a,
                  { variant: 'e2', className: 'text-red' },
                  M
                ),
              l.a.createElement(c.a, { variant: 'e2', theme: 'dark' }, t)
            )
          )
        }
    },
    LR6s: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return c
      })
      var M = a('q1tI'),
        l = a.n(M),
        n = a('4YxH'),
        i = a('iuhU'),
        c = function (e) {
          var t = e.children,
            a = e.className
          return l.a.createElement(
            'div',
            {
              className: Object(i.a)(
                'bg-black bg-opacity-25 backdrop-blur-4 p-4 writing-mode-vertical transform rotate-180 pointer-events-none',
                a
              ),
            },
            l.a.createElement(
              n.a,
              { variant: 'e2', theme: 'dark', className: 'whitespace-no-wrap' },
              t
            )
          )
        }
    },
    QeBL: function (e, t, a) {
      'use strict'
      a.r(t)
      var M = a('q1tI'),
        l = a.n(M),
        n = a('iuhU'),
        i = a('nP3w'),
        c = a('Wbzz'),
        N = a('9Dj+'),
        r = a('H8eV'),
        u = a('Kteb'),
        D = a('4YxH'),
        m = a('1Eu0'),
        s = a('yKdD'),
        o = a('+qZG'),
        j = a('7Bp7'),
        g = function (e) {
          Object(o.a)(e)
          var t = Object(M.useState)(),
            a = t[0],
            i = t[1],
            c = Object(M.useState)(1),
            N = c[0],
            r = c[1],
            u = Object(M.useState)(!1),
            D = u[0],
            m = u[1]
          return (
            Object(M.useEffect)(function () {
              if (window.IntersectionObserver) {
                var e = Array.from(
                    document.querySelectorAll('[data-scrollsection]')
                  ),
                  t = new Map(
                    Array.from(e).map(function (e) {
                      return [e, 0]
                    })
                  ),
                  a = new IntersectionObserver(
                    function (a) {
                      a.forEach(function (e) {
                        var a = e.target,
                          M = e.intersectionRatio
                        t.set(a, M)
                      })
                      var M,
                        l,
                        n = (function (e, t) {
                          if (0 !== e.size) {
                            var a = Array.from(e.entries()).reduce(function (
                              e,
                              t
                            ) {
                              return t[1] > e[1] ? t : e
                            })
                            if (!(a[1] < t)) return a[0]
                          }
                        })(t, 0.3)
                      if (n) {
                        var i =
                          ((M = n),
                          void 0 ===
                          (l = e.findIndex(function (e) {
                            return e === M
                          }))
                            ? 0
                            : l + 1)
                        r(i), m(!0)
                      } else m(!1)
                    },
                    { threshold: [0.01, 0.25, 0.75, 1] }
                  )
                return (
                  e.forEach(function (e) {
                    return a.observe(e)
                  }),
                  i(e),
                  function () {
                    return a.disconnect()
                  }
                )
              }
            }, []),
            a
              ? l.a.createElement(
                  'div',
                  {
                    className: Object(
                      n.a
                    )(
                      'fixed right-0 z-30 pointer-events-none h-screen flex items-center pr-1 sm:pr-2 md:pr-3 lg:pr-4 transition-opacity duration-200',
                      { 'opacity-0': !D, 'opacity-100': D }
                    ),
                  },
                  l.a.createElement(j.a, {
                    current: N,
                    total: a.length,
                    variant: 'vertical',
                  })
                )
              : null
          )
        },
        I = a('pSK3'),
        d = a('eSoc'),
        T = a('6oZt'),
        A = function (e) {
          var t = e.backgroundImage,
            a = e.boatImage,
            M = e.contentHeader,
            n = e.subtitle,
            i = e.boatName,
            N = e.url
          return l.a.createElement(
            'div',
            {
              className:
                'bg-cover relative justify-center md:w-1/2 md:min-h-screen bg-black text-white pt-4 md:pt-0',
              style: { backgroundImage: 'url(' + t + '?q=30&w=1500)' },
            },
            l.a.createElement(c.Link, {
              to: '/boats/' + N,
              className: 'absolute inset-0 z-10',
              style: {
                background:
                  'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
              },
            }),
            l.a.createElement(
              'div',
              {
                className:
                  'flex flex-col h-full relative justify-between lg:justify-end pointer-events-none',
              },
              l.a.createElement(
                'div',
                { className: 'relative z-0 h-full' },
                l.a.createElement(
                  'div',
                  {
                    className:
                      'px-2 py-12 md:py-0 md:px-4 flex h-full justify-center',
                  },
                  l.a.createElement('img', {
                    src: a,
                    className: 'w-full self-center max-w-3/4 md:max-w-11/12',
                  })
                )
              ),
              l.a.createElement(
                'div',
                {
                  className:
                    'md:absolute flex flex-col justify-between md:justify-end h-full w-full',
                },
                l.a.createElement(
                  'div',
                  {
                    className:
                      'relative z-20 px-4 md:px order-first md:order-none',
                  },
                  l.a.createElement(
                    u.a,
                    {
                      subtitle: n,
                      className: 'self-start -ml-2 sm:self-auto mb:ml-0',
                    },
                    M
                  )
                ),
                l.a.createElement(
                  'div',
                  { className: 'relative z-20 px-4 md:px-8 pb-6 md:pb-12' },
                  l.a.createElement(
                    D.a,
                    { variant: 'h3', xl: 'h2', className: 'mb-4 md:mb-8' },
                    i
                  ),
                  l.a.createElement(
                    c.Link,
                    { to: '/boats/' + N, className: 'pointer-events-auto' },
                    l.a.createElement(m.a, null, 'Learn More')
                  )
                )
              )
            )
          )
        },
        E = a('7l9Y'),
        x = a.n(E),
        O = a('ZMKu'),
        z = a('tKSW'),
        y = a('Z4UL'),
        L = (a('6y2Z'), a('lSEo')),
        w = a('mMPx'),
        v = a('Z29Q'),
        k = function (e, t) {
          void 0 === e && (e = 1 / 0), void 0 === t && (t = 1 / 0)
          var a = Object(w.a)({
              width: v.a ? window.innerWidth : e,
              height: v.a ? window.innerHeight : t,
            }),
            l = a[0],
            n = a[1]
          return (
            Object(M.useEffect)(function () {
              if (v.a) {
                var e = function () {
                  n({ width: window.innerWidth, height: window.innerHeight })
                }
                return (
                  window.addEventListener('resize', e),
                  function () {
                    window.removeEventListener('resize', e)
                  }
                )
              }
            }, []),
            l
          )
        },
        b = a('MIOh'),
        S = a('WJip'),
        f = function (e) {
          var t = e.image,
            a = e.videoUrl,
            n = Object(M.useState)(!1),
            i = n[0],
            c = n[1]
          return l.a.createElement(
            O.a,
            null,
            l.a.createElement('img', {
              key: 'image',
              src: t + '?q=30&w=2000&fm=jpg',
              className: 'absolute top-0 left-0 h-screen w-full object-cover',
            }),
            l.a.createElement(
              O.b.div,
              { key: 'video', animate: { opacity: i ? 1 : 0 } },
              l.a.createElement(x.a, {
                className: 'absolute top-0 left-0',
                url: a,
                controls: !1,
                muted: !0,
                loop: !0,
                playing: !0,
                onReady: function () {
                  c(!0)
                },
                config: { file: { attributes: { className: 'object-cover' } } },
                width: '100%',
                height: '100%',
              })
            )
          )
        },
        Q =
          ((t.default = function (e) {
            var t,
              a,
              M,
              i,
              o,
              j,
              T,
              E,
              x,
              O,
              z,
              y,
              L,
              w,
              v,
              k,
              b,
              S,
              Q,
              C,
              Y,
              Z,
              G,
              V,
              W,
              P,
              R,
              J,
              B,
              H = e.data,
              F =
                null === (t = H.craftAPI.home) ||
                void 0 === t ||
                null === (a = t.singleMedia) ||
                void 0 === a ||
                null === (M = a[0]) ||
                void 0 === M ||
                null === (i = M.image) ||
                void 0 === i ||
                null === (o = i[0]) ||
                void 0 === o
                  ? void 0
                  : o.url,
              q =
                null === (j = H.craftAPI.home) ||
                void 0 === j ||
                null === (T = j.singleMedia) ||
                void 0 === T ||
                null === (E = T[0]) ||
                void 0 === E
                  ? void 0
                  : E.videoURL,
              K =
                (null === (x = H.craftAPI.home) ||
                void 0 === x ||
                null === (O = x.boatLink) ||
                void 0 === O
                  ? void 0
                  : O[0]) || {},
              X =
                (null === (z = H.craftAPI.home) ||
                void 0 === z ||
                null === (y = z.textBlock) ||
                void 0 === y
                  ? void 0
                  : y[0]) || {},
              _ =
                (null === (L = H.craftAPI.home) || void 0 === L
                  ? void 0
                  : L.home2UpBoats) || [],
              $ =
                (null === (w = H.craftAPI.home) ||
                void 0 === w ||
                null === (v = w.differenceSection) ||
                void 0 === v
                  ? void 0
                  : v[0]) || {},
              ee =
                (null === (k = H.craftAPI.home) ||
                void 0 === k ||
                null === (b = k.connectSection) ||
                void 0 === b
                  ? void 0
                  : b[0]) || {},
              te =
                null === (S = H.craftAPI.home) ||
                void 0 === S ||
                null === (Q = S.connectSectionBackground) ||
                void 0 === Q ||
                null === (C = Q[0]) ||
                void 0 === C
                  ? void 0
                  : C.url,
              ae =
                (null === (Y = H.craftAPI.home) ||
                void 0 === Y ||
                null === (Z = Y.imageObject) ||
                void 0 === Z ||
                null === (G = Z[0]) ||
                void 0 === G ||
                null === (V = G.image) ||
                void 0 === V ||
                null === (W = V[0]) ||
                void 0 === W
                  ? void 0
                  : W.url) || ''
            return l.a.createElement(
              N.a,
              null,
              l.a.createElement(r.a, { image: F }),
              l.a.createElement(g, null),
              l.a.createElement(
                'section',
                {
                  className:
                    'relative min-h-60vh md:min-h-screen flex justify-center items-end text-center bg-cover bg-center',
                  style: {
                    backgroundImage: 'url(' + ae + '?q=30&w=2000)',
                    backgroundColor: 'black',
                  },
                },
                l.a.createElement('div', {
                  className:
                    'absolute top-0 left-0 h-full w-full bg-black opacity-50',
                }),
                l.a.createElement(
                  'div',
                  {
                    className:
                      'relative z-10 max-w-8xl mb-12 px-4 sm:mb-24 text-white text-left md:text-center flex flex-col items-center',
                  },
                  l.a.createElement(
                    'div',
                    { className: Object(n.a)('flex items-center mb-3') },
                    l.a.createElement(s.a, {
                      className: 'mr-1 md:hidden text-red',
                      style: { fontSize: '30px' },
                    }),
                    l.a.createElement(s.a, {
                      className: 'hidden md:block mr-1 text-red',
                      style: { fontSize: '80px' },
                    }),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        D.a,
                        { md: 'h1', variant: 'h4', theme: 'dark' },
                        'Visit the all new'
                      )
                    )
                  ),
                  l.a.createElement(
                    D.a,
                    {
                      className: 'md:hidden text-3xl font-heading',
                      theme: 'dark',
                    },
                    'Cigarette Racing ',
                    l.a.createElement('br', null),
                    'Team Store'
                  ),
                  l.a.createElement(
                    D.a,
                    {
                      className: 'hidden md:block text-8xl font-heading',
                      theme: 'dark',
                    },
                    'Cigarette Racing Team Store'
                  ),
                  l.a.createElement(
                    'a',
                    {
                      href: 'https://shopcigaretteracingteam.com/',
                      className:
                        'inline-flex items-center h-12 px-6 md:px-12 border-red bg-red hover:bg-darkRed rounded-full transition-colors duration-150 ease-in-out  mt-10',
                    },
                    l.a.createElement(
                      D.a,
                      {
                        className:
                          'font-body uppercase text-md md:text-2xl tracking-wider',
                        as: 'span',
                      },
                      'view all products'
                    )
                  )
                )
              ),
              l.a.createElement(
                'section',
                {
                  className:
                    'relative min-h-screen flex justify-center items-end overflow-hidden',
                  'data-scrollsection': !0,
                },
                l.a.createElement(
                  'div',
                  { className: 'absolute top-0 left-0 h-screen w-full' },
                  l.a.createElement(f, { image: F, videoUrl: q })
                ),
                l.a.createElement('div', {
                  className:
                    'absolute top-0 left-0 h-screen w-full pointer-events-none',
                  style: {
                    background:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 51.47%, rgba(0, 0, 0, 0.3) 100%)',
                  },
                }),
                l.a.createElement(I.a, {
                  variant: 'primary',
                  icon: s.n,
                  size: 'lg',
                  className: 'absolute top-2/5 sm:hidden hidden',
                }),
                l.a.createElement(
                  'div',
                  {
                    className:
                      'relative z-10 max-w-6xl mb-12 px-4 sm:mb-24 text-white text-left flex flex-col items-start md:items-center',
                  },
                  l.a.createElement(
                    u.a,
                    { className: 'mb-4 self-start -ml-2 sm:self-auto mb:ml-0' },
                    null === (P = K.boatMetadata) ||
                      void 0 === P ||
                      null === (R = P[0]) ||
                      void 0 === R
                      ? void 0
                      : R.menuName
                  ),
                  l.a.createElement(
                    D.a,
                    { variant: 'h2', md: 'h1', className: 'mb-10 ' },
                    X.header
                  ),
                  l.a.createElement(
                    D.a,
                    {
                      variant: 'p1',
                      className: 'mb-10 max-w-2xl hidden sm:block',
                    },
                    X.copy
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'flex items-center space-x-6' },
                    l.a.createElement(
                      c.Link,
                      { to: '/boats/' + K.slug },
                      l.a.createElement(m.a, null, 'Learn More')
                    )
                  )
                )
              ),
              l.a.createElement(
                'section',
                { className: 'relative md:flex', 'data-scrollsection': !0 },
                _.map(function (e) {
                  var t, a, M, n, i, c, N, r, u, D, m, s, o, j, g, I
                  return l.a.createElement(A, {
                    key:
                      null === (t = e.boatLink) ||
                      void 0 === t ||
                      null === (a = t[0]) ||
                      void 0 === a
                        ? void 0
                        : a.title,
                    backgroundImage:
                      null === (M = e.background) ||
                      void 0 === M ||
                      null === (n = M[0]) ||
                      void 0 === n
                        ? void 0
                        : n.url,
                    boatImage:
                      null === (i = e.boatImage) ||
                      void 0 === i ||
                      null === (c = i[0]) ||
                      void 0 === c ||
                      null === (N = c.image) ||
                      void 0 === N ||
                      null === (r = N[0]) ||
                      void 0 === r
                        ? void 0
                        : r.url,
                    contentHeader:
                      null === (u = e.boatLink) ||
                      void 0 === u ||
                      null === (D = u[0]) ||
                      void 0 === D ||
                      null === (m = D.boatMetadata) ||
                      void 0 === m ||
                      null === (s = m[0]) ||
                      void 0 === s
                        ? void 0
                        : s.menuCategory,
                    subtitle: e.textBlockCopy,
                    boatName:
                      null === (o = e.boatLink) ||
                      void 0 === o ||
                      null === (j = o[0]) ||
                      void 0 === j
                        ? void 0
                        : j.title,
                    url:
                      null === (g = e.boatLink) ||
                      void 0 === g ||
                      null === (I = g[0]) ||
                      void 0 === I
                        ? void 0
                        : I.slug,
                  })
                })
              ),
              l.a.createElement(
                'section',
                {
                  className:
                    'min-h-screen relative flex justify-center items-end',
                  'data-scrollsection': !0,
                },
                l.a.createElement('img', {
                  src:
                    (null === (J = $.backgroundImage) ||
                    void 0 === J ||
                    null === (B = J[0]) ||
                    void 0 === B
                      ? void 0
                      : B.url) + '?q=30&w=2000',
                  className:
                    'absolute top-0 left-0 h-screen w-full object-cover',
                }),
                l.a.createElement('div', {
                  className: 'absolute top-0 left-0 h-screen w-full',
                  style: {
                    background:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)',
                  },
                }),
                l.a.createElement(
                  'div',
                  {
                    className:
                      'relative z-10 max-w-6xl mb-12 px-4 sm:mb-24 text-white text-left sm:text-center flex flex-col items-start sm:items-center',
                  },
                  l.a.createElement(
                    u.a,
                    { className: 'mb-4 self-start -ml-2 sm:self-auto mb:ml-0' },
                    $.subtitle
                  ),
                  l.a.createElement(
                    D.a,
                    { variant: 'h2', md: 'h1', className: 'mb-10' },
                    $.theTitle
                  ),
                  l.a.createElement('div', {
                    className: 'flex items-center space-x-6',
                  })
                )
              ),
              l.a.createElement(U, { newsItems: p(H.craftAPI.news || []) }),

              l.a.createElement(d.b, null),
              l.a.createElement(d.a, null)
            )
          }),
          Object(b.a)(function (e) {
            return { emailAddress: e.emailAddress }
          }))
      function h(e) {
        var t = e.content,
          a = e.successMessage
        return l.a.createElement(i.b, {
          onSubmit: Q,
          render: function (e) {
            var c = e.handleSubmit,
              N = e.submitSucceeded
            return l.a.createElement(
              M.Fragment,
              null,
              !N &&
                l.a.createElement(
                  M.Fragment,
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'flex border-b border-gray-3 mb-10 h-10 items-center',
                    },
                    l.a.createElement(
                      'form',
                      {
                        name: 'stay-connected',
                        method: 'POST',
                        onSubmit: c,
                        'data-netlify': 'true',
                        'netlify-honeypot': 'bot-field',
                        className: 'flex items-center justify-between w-full',
                      },
                      l.a.createElement('input', {
                        type: 'hidden',
                        name: 'bot-field',
                      }),
                      l.a.createElement(i.a, {
                        component: 'input',
                        type: 'hidden',
                        name: 'form-name',
                        initialValue: 'stay-connected',
                      }),
                      l.a.createElement(
                        'label',
                        { htmlFor: 'emailAddress', className: 'sr-only' },
                        'Email Address'
                      ),
                      l.a.createElement(i.a, {
                        id: 'emailAddress',
                        name: 'emailAddress',
                        className:
                          'block w-full py-3 bg-transparent text-white input-placeholder font-body text-sm tracking-wide',
                        placeholder: 'Enter Email Address',
                        validate: T.b,
                        render: function (e) {
                          var t = e.input,
                            a = e.meta
                          return l.a.createElement(
                            M.Fragment,
                            null,
                            l.a.createElement(
                              D.a,
                              {
                                className: Object(n.a)(
                                  'absolute opacity-0 transform -translate-y-4 transition duration-150',
                                  {
                                    'opacity-100 -translate-y-6':
                                      a.invalid && a.touched,
                                  }
                                ),
                                variant: 'p3',
                              },
                              'Please enter a valid email address'
                            ),
                            l.a.createElement(
                              'input',
                              Object.assign({}, t, {
                                autoComplete: 'off',
                                placeholder: 'ENTER EMAIL ADDRESS',
                                className: Object(n.a)(
                                  'font-body text-sm appearance-none bg-transparent outline-none w-full py-3',
                                  {
                                    'placeholder-white':
                                      !a.invalid || !a.touched,
                                  },
                                  { 'placeholder-grey': a.invalid && a.touched }
                                ),
                              })
                            ),
                            l.a.createElement(
                              'button',
                              {
                                type: 'submit',
                                'aria-label': 'Submit',
                                className: Object(n.a)(
                                  'p-4 -mr-4 disabled:opacity-50',
                                  {
                                    'cursor-not-allowed':
                                      a.invalid && a.touched,
                                  }
                                ),
                                disabled: a.invalid && a.touched,
                              },
                              l.a.createElement(s.o, { className: 'w-4 h-4' })
                            )
                          )
                        },
                      })
                    )
                  ),
                  l.a.createElement(
                    D.a,
                    { variant: 'p2', className: 'pb-16' },
                    t
                  )
                ),
              N &&
                l.a.createElement(D.a, { variant: 'p1', className: 'pb-16' }, a)
            )
          },
        })
      }
      var p = function (e) {
        return e.map(function (e) {
          var t, a, M, l
          return {
            content: e.textContent,
            image:
              null === (t = e.imageObject) ||
              void 0 === t ||
              null === (a = t[0]) ||
              void 0 === a ||
              null === (M = a.image) ||
              void 0 === M ||
              null === (l = M[0]) ||
              void 0 === l
                ? void 0
                : l.url,
            siteName: e.siteName,
            title: e.title,
            url: e.urlLink,
          }
        })
      }
      function U(e) {
        var t = e.newsItems,
          a = Object(M.useState)(0),
          i = a[0],
          c = a[1],
          N = Object(M.useState)(!1),
          r = N[0],
          u = N[1],
          m = Object(L.a)('(max-width: 767px)'),
          o = Object(z.o)(0, t.length, i),
          j = Object(z.o)(0, t.length, i + 1),
          g = function () {
            c(function (e) {
              return e + 1
            })
          },
          d = function () {
            c(function (e) {
              return e - 1
            })
          }
        Object(M.useEffect)(function () {
          Object(S.a)(
            t.map(function (e) {
              return e.image + '?q=30&w=1000&fm=jpg'
            })
          )
        }, [])
        var T = k(),
          A = 0.3 * T.width > 421 ? '210' : (0.3 * T.width) / 2
        return l.a.createElement(
          'section',
          {
            className:
              'md:p-4 py-12 md:py-40 bg-white flex sm:block items-center overflow-hidden TEST bd85',
          },
          l.a.createElement(
            'div',
            { className: 'max-w-8xl md:mx-auto md:flex' },
            l.a.createElement(
              'div',
              { className: 'pl-4 md:w-1/2 md:pl-8 lg:pl-16 xl:pl-24' },
              l.a.createElement(
                D.a,
                { variant: 'h3', md: 'h2', className: 'mb-4 md:mb-16' },
                'News ',
                l.a.createElement('br', { className: 'hidden md:block' }),
                '& Press'
              ),
              l.a.createElement(y.c, {
                className: 'mt-10 space-x-4 hidden md:block',
                theme: 'light',
                onClickNext: g,
                onClickPrev: d,
              })
            ),
            l.a.createElement(
              'div',
              { className: 'flex md:w-1/2 space-x-6 relative' },
              l.a.createElement(
                'div',
                { key: t[o].url, className: 'group relative flex-1' },
                E(t[o])
              ),
              l.a.createElement(
                'div',
                {
                  key: t[j].url,
                  className: 'hidden md:block group relative flex-1',
                  onMouseEnter: function () {
                    u(!0)
                  },
                  onMouseLeave: function () {
                    u(!1)
                  },
                },
                E(t[j])
              ),
              l.a.createElement(I.a, {
                className: Object(n.a)(
                  'absolute z-10 opacity-0 bg-white',
                  r && 'opacity-100'
                ),
                style: { top: A + 'px', right: '0' },
                icon: s.b,
                iconClassName: 'text-black',
                variant: 'primary',
                onClick: g,
                onMouseEnter: function () {
                  u(!0)
                },
                'aria-label': 'Next',
              })
            ),
            l.a.createElement(
              'div',
              { className: 'flex justify-start pl-4 md-pl-0' },
              l.a.createElement(y.c, {
                className: 'mt-10 space-x-4 md:hidden',
                theme: 'light',
                onClickNext: g,
                onClickPrev: d,
              })
            )
          )
        )
        function E(e) {
          var t = m ? '100%' : 0.3 * T.width,
            a = m ? '100%' : '421px'
          return l.a.createElement(
            'a',
            {
              href: e.url,
              target: '_blank',
              key: e.url,
              className: 'block w-screen',
              style: { width: t, maxWidth: a, minHeight: T.width / 2 },
            },
            l.a.createElement(
              'div',
              {
                style: { paddingTop: '100%' },
                className: 'relative xs:mx-0 mb-6',
              },
              l.a.createElement('img', {
                src: e.image + '?q=30&w=1000&fm=jpg',
                alt: '',
                className:
                  'absolute top-0 left-0 h-full w-full object-cover object-center',
              }),
              l.a.createElement(
                'div',
                {
                  className:
                    'absolute top-0 mt-6 ml-4 bg-black bg-opacity-25 rounded-full py-2 px-4 flex items-center backdrop-blur-3 text-white',
                },
                l.a.createElement(s.h, { className: 'mr-2' }),
                l.a.createElement(
                  D.a,
                  { variant: 'p3', as: 'span' },
                  e.siteName
                )
              )
            ),
            l.a.createElement(
              D.a,
              { variant: 'h5', md: 'h4', className: 'pl-4 md:pl-0 mb-2' },
              e.title
            ),
            l.a.createElement(
              D.a,
              {
                variant: 'p3',
                md: 'p2',
                className: 'pl-4 md:pl-0 text-gray-2',
              },
              e.content
            )
          )
        }
      }
    },
    WfcA: function (e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTE5MCIgdmlld0JveD0iMCAwIDEzIDExOTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjUgNTAyLjVMMTEuMjUgNjAzLjVWNjU5LjVMMTEuMjUgOTEyLjVDMTEuMjUgOTIxLjg3OSA5LjY3OTkxIDkyNS45ODIgOC4wODU1NSA5MzAuMTQ5TDguMDMyOTggOTMwLjI4NkM2LjM5MzI2IDkzNC41NzIgNC43NSA5MzguOTc3IDQuNzUgOTQ5QzQuNzUgOTUzLjQwOCA1LjE1OTIyIDk1Ni41MzMgNS43ODA0MyA5NTkuMDI4QzYuMzg4OTcgOTYxLjQ3MiA3LjE5NzU1IDk2My4yOTYgNy45OTM2OCA5NjUuMDkxTDguMDQyODkgOTY1LjIwMkM4LjgwMjY2IDk2Ni45MTUgOS41NDkxMyA5NjguNjE5IDEwLjEzMiA5NzAuODY4QzkuNTU3NTEgOTczLjMwMiA4LjgyNDE0IDk3NS4yMTggOC4wODU1NSA5NzcuMTQ5TDguMDMyOTggOTc3LjI4NkM2LjM5MzI2IDk4MS41NzIgNC43NSA5ODUuOTc3IDQuNzUgOTk2QzQuNzUgMTAwMC40MSA1LjE1OTIyIDEwMDMuNTMgNS43ODA0MyAxMDA2LjAzQzYuMzg4OTcgMTAwOC40NyA3LjE5NzU0IDEwMTAuMyA3Ljk5MzY4IDEwMTIuMDlMOC4wNDI4OSAxMDEyLjJDOC44NTQxNiAxMDE0LjAzIDkuNjUwMjcgMTAxNS44NSAxMC4yNDgyIDEwMTguMzNDMTAuODQ1NyAxMDIwLjgxIDExLjI0ODkgMTAyMy45OCAxMS4yNDk5IDEwMjguNDhDMTEuMjQ5OSAxMDI4LjQ5IDExLjI0OTkgMTAyOC40OSAxMS4yNDk5IDEwMjguNUwxMS4yNDk5IDExNDNWMTE5MEgxMi4yNDk5VjExNDNMMTIuMjQ5OSAxMDI4LjVDMTIuMjQ5OSAxMDI4LjQ5IDEyLjI0OTkgMTAyOC40OSAxMi4yNDk5IDEwMjguNDhMMTIuMjQ5OSA5ODEuNUMxMi4yNDk5IDk3Ni45MjYgMTEuODQxIDk3My42NzcgMTEuMjIwNCA5NzEuMDk5QzExLjIwMDkgOTcxLjAxOCAxMS4xODExIDk3MC45MzcgMTEuMTYxMSA5NzAuODU3QzExLjgxMTEgOTY4LjAxNSAxMi4yNSA5NjQuNDgyIDEyLjI1IDk1OS41VjkxMi41TDEyLjI1IDY1OS41VjYwMy41TDEyLjI1IDUwMi41QzEyLjI1IDUwMi40OTIgMTIuMjUgNTAyLjQ4NCAxMi4yNSA1MDIuNDc3TDEyLjI1IDQ0Ni41QzEyLjI1IDQyNC42OTUgOS42MTYgNDE0LjYzIDYuOTc5NDkgNDA1LjcwOEM2LjgyNjA5IDQwNS4xODkgNi42NzI3NCA0MDQuNjc0IDYuNTE5OTUgNDA0LjE2TDYuNTE5NDUgNDA0LjE1OUM2LjI4MzgyIDQwMy4zNjcgNi4wNDk1NCA0MDIuNTggNS44MTg1IDQwMS43OUM1Ljg2NDQ1IDQwMS42MjQgNS45MTA1MiA0MDEuNDU3IDUuOTU2NzEgNDAxLjI5QzYuMjk0NDggNDAwLjA2NyA2LjYzODQ5IDM5OC44MjIgNi45ODI5NyAzOTcuNTM1QzkuNjE3OSAzODcuNjk2IDEyLjI1IDM3NS41NDkgMTIuMjUgMzUzVjI5N0wxMi4yNSA1NlYwSDExLjI1VjU2TDExLjI1IDI5N0MxMS4yNSAzMTkuNDUxIDguNjMyMDcgMzMxLjUxMiA2LjAxNzAxIDM0MS4yNzdDNS42NzQ2MSAzNDIuNTU1IDUuMzMxNzYgMzQzLjc5NiA0Ljk5NDQxIDM0NS4wMTdDMi43NTAzMiAzNTMuMTM3IDAuNzUgMzYwLjM3NiAwLjc1IDM3MkMwLjc1IDM4Ni41NDYgMi42MTk4MiAzOTQuMzc5IDQuNzc4OSA0MDEuNzk3QzIuNjIzODQgNDA5LjYwNyAwLjc1IDQxNi43NSAwLjc1IDQyOEMwLjc1IDQ0NC4yODMgMy4wOTMwOCA0NTIuMTU0IDUuNTYyMTEgNDYwLjQ0OEM1LjcxNDYgNDYwLjk2IDUuODY3NTYgNDYxLjQ3NCA2LjAyMDQ4IDQ2MS45OTFDOC42MzMwMyA0NzAuODMzIDExLjI0ODEgNDgwLjc5OCAxMS4yNSA1MDIuNDc3QzExLjI1IDUwMi40ODQgMTEuMjUgNTAyLjQ5MiAxMS4yNSA1MDIuNVpNMTEuMjUgNDgyLjExN0wxMS4yNSA0NDYuNUMxMS4yNSA0MjQuODA1IDguNjMzOTcgNDE0LjgzNiA2LjAyMDQ4IDQwNS45OTFDNS44Njc1NiA0MDUuNDc0IDUuNzE0NiA0MDQuOTYgNS41NjIxMSA0MDQuNDQ4QzUuNDc5ODcgNDA0LjE3MSA1LjM5Nzc2IDQwMy44OTYgNS4zMTU4NyA0MDMuNjJDMy4zNTQgNDEwLjgxOSAxLjc1IDQxNy42MjggMS43NSA0MjhDMS43NSA0NDQuMTM5IDQuMDYxODMgNDUxLjkwNCA2LjUxOTQ1IDQ2MC4xNTlMNi41MTk5NSA0NjAuMTZDNi42NzI3NCA0NjAuNjc0IDYuODI2MDkgNDYxLjE4OSA2Ljk3OTQ5IDQ2MS43MDhDOC42MTIzMSA0NjcuMjM0IDEwLjI0NDIgNDczLjE5OCAxMS4yNSA0ODIuMTE3Wk01LjI4OTQ1IDM5OS45NDhDNS41MzA3OCAzOTkuMDcyIDUuNzc0MDEgMzk4LjE4NCA2LjAxNzAxIDM5Ny4yNzdDOC42MzIwNyAzODcuNTEyIDExLjI1IDM3NS40NTEgMTEuMjUgMzUzTDExLjI1IDMxOC42ODNDMTAuMjQ0OCAzMjguNDY2IDguNjE0NDMgMzM1LjQ0MyA2Ljk4Mjk3IDM0MS41MzVDNi42Mzg0OSAzNDIuODIyIDYuMjk0NDggMzQ0LjA2NyA1Ljk1NjcxIDM0NS4yOUMzLjcxNTggMzUzLjQwMiAxLjc1IDM2MC41MTggMS43NSAzNzJDMS43NSAzODUuMzk1IDMuMzQyNjggMzkzLjAyMiA1LjI4OTQ1IDM5OS45NDhaTTExLjI1IDkyMy40NThDMTAuNjQxNiA5MjYuMjY3IDkuODI2MzggOTI4LjM5NyA5LjAwOTUgOTMwLjUzMkw4Ljk2Njk3IDkzMC42NDNDNy4zNTY3MiA5MzQuODUyIDUuNzUgOTM5LjEzMyA1Ljc1IDk0OUM1Ljc1IDk1My4zNDUgNi4xNTMyNyA5NTYuMzg2IDYuNzUwODEgOTU4Ljc4NkM3LjMzODE2IDk2MS4xNDYgOC4xMTY2NCA5NjIuOTAxIDguOTE1MDQgOTY0LjcwMkw4Ljk1NzA2IDk2NC43OTZDOS41MDY2MSA5NjYuMDM2IDEwLjA2MzEgOTY3LjMgMTAuNTU3NyA5NjguNzg0QzEwLjk4MzEgOTY2LjMzNyAxMS4yNSA5NjMuMzY3IDExLjI1IDk1OS41TDExLjI1IDkyMy40NThaTTEwLjU5ODggOTczLjAwM0MxMC4xMTE5IDk3NC42NTEgOS41NjExIDk3Ni4wOSA5LjAwOTUgOTc3LjUzMkw4Ljk2Njk3IDk3Ny42NDNDNy4zNTY3MiA5ODEuODUyIDUuNzUgOTg2LjEzMyA1Ljc1IDk5NkM1Ljc1IDEwMDAuMzQgNi4xNTMyNyAxMDAzLjM5IDYuNzUwODEgMTAwNS43OUM3LjMzODE2IDEwMDguMTUgOC4xMTY2NCAxMDA5LjkgOC45MTUwNCAxMDExLjdMOC45NTcwNiAxMDExLjhDOS43NzA3OCAxMDEzLjYzIDEwLjU5OTcgMTAxNS41MiAxMS4yMjA0IDEwMTguMUMxMS4yMzAzIDEwMTguMTQgMTEuMjQwMiAxMDE4LjE4IDExLjI0OTkgMTAxOC4yMkwxMS4yNDk5IDk4MS41QzExLjI0OTkgOTc3LjkzOSAxMC45OTg3IDk3NS4yMTUgMTAuNTk4OCA5NzMuMDAzWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNi41IiB5MT0iMCIgeDI9IjYuNSIgeTI9IjExOTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjAwMjQzMzc1IiBzdG9wLWNvbG9yPSIjNkQ2RDZEIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRGNEY0RiIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=='
    },
    tCiu: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return D
      })
      var M = a('q1tI'),
        l = a.n(M),
        n = a('iuhU'),
        i = a('4YxH'),
        c = a('WfcA'),
        N = a.n(c),
        r = a('9Gul'),
        u = a.n(r),
        D = function (e) {
          var t = e.children,
            a = e.className,
            M = e.theme,
            c = 'dark' === M ? N.a : u.a
          return l.a.createElement(
            'div',
            {
              className: Object(n.a)(
                'writing-mode-vertical transform rotate-180 pointer-events-none text-gray-3 flex',
                { 'text-gray-3': 'dark' === M, 'text-gray-4': 'light' === M },
                a
              ),
            },
            l.a.createElement('img', {
              src: c,
              alt: '',
              className: 'transform rotate-180',
            }),
            l.a.createElement(
              i.a,
              { variant: 'h4', className: 'mt-8 whitespace-no-wrap' },
              t
            )
          )
        }
    },
    wnQI: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return N
      })
      var M = a('q1tI'),
        l = a.n(M),
        n = a('ZMKu'),
        i = a('7l9Y'),
        c = a.n(i),
        N = function (e) {
          var t = e.image,
            a = e.alt,
            i = e.videoUrl,
            N = e.videoOptions,
            r = Object(M.useState)(!1),
            u = r[0],
            D = r[1],
            m = (N || {}).controls,
            s = void 0 === m || m
          return l.a.createElement(
            n.a,
            null,
            l.a.createElement('img', {
              key: 'image',
              src: t + '?q=30&w=2000',
              className: 'absolute h-full w-full object-cover',
              alt: a || '',
            }),
            l.a.createElement(
              n.b.div,
              { key: 'video', animate: { opacity: u ? 1 : 0 } },
              l.a.createElement(c.a, {
                className: 'absolute top-0 left-0',
                url: i,
                controls: s,
                playsinline: !0,
                muted: !0,
                loop: !0,
                playing: !0,
                onReady: function () {
                  D(!0)
                },
                config: { file: { attributes: { className: 'object-cover' } } },
                width: '100%',
                height: '100%',
              })
            )
          )
        }
    },
  },
])
//# sourceMappingURL=component---src-pages-index-tsx-4fe3a5b463ca8fe5bd85.js.map
