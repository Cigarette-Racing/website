;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    '+tRD': function (e, t, a) {
      'use strict'
      a.r(t)
      var l = a('8o2o'),
        n = a('q1tI'),
        r = a.n(n),
        i = a('9Dj+'),
        c = a('H8eV'),
        o = a('iuhU'),
        m = ['children', 'className', 'website', 'logo', 'theme'],
        s = function (e) {
          e.children
          var t = e.className,
            a = e.website,
            n = e.logo,
            i = e.theme,
            c = void 0 === i ? 'light' : i,
            s = Object(l.a)(e, m)
          return r.a.createElement(
            'section',
            Object.assign(
              {
                className: Object(o.a)(
                  'relative overflow-hidden flex flex-col content-center justify-center items-center py-12 md:min-h-screen',
                  {
                    'bg-gray-0 text-white': 'dark' === c,
                    'bg-gray-4 text-white': 'gray' === c,
                    'bg-darkRed text-white': 'red' === c,
                    'text-white': 'none' === c,
                  },
                  t
                ),
              },
              s,
              { 'data-component': 'Section' }
            ),
            r.a.createElement(
              'a',
              {
                className:
                  'relative w-full flex flex-col items-center content-center',
                target: 'blank',
                href: a,
              },
              r.a.createElement('img', {
                src: n,
                alt: '',
                className: 'w-3/4 md:w-1/2 block',
              })
            )
          )
        }
      t.default = function (e) {
        var t = e.data.craftAPI,
          a = t.bigThunder,
          l = t.lipShip,
          o = t.ultimateMarine,
          m = t.cmg,
          h = t.wiresOnly
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement(c.a, { title: 'Dealers', slug: e.path }),
          r.a.createElement(s, {
            className: 'pt-32',
            theme: 'light',
            logo: a.url,
            website: 'https://www.bigthundermarine.com/',
          }),
          r.a.createElement(s, {
            theme: 'light',
            logo: l.url,
            website: 'http://www.lipship.com/',
          }),
          r.a.createElement(s, {
            theme: 'light',
            logo: m.url,
            website: 'https://chiefmarinegroup.com/',
          }),
          r.a.createElement(s, {
            theme: 'light',
            logo: o.url,
            website: 'https://www.ultimatemarine.com/',
          }),
          r.a.createElement(s, {
            theme: 'light',
            logo: h.url,
            website: 'https://wiresonly.com/',
          })
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-dealers-tsx-a8993696b8ac019c740a.js.map
