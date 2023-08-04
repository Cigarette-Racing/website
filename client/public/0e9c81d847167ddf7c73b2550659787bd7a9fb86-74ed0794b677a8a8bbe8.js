;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    JMfE: function (e, a, t) {
      'use strict'
      t.d(a, 'b', function () {
        return f
      }),
        t.d(a, 'a', function () {
          return b
        })
      var n = t('q1tI'),
        l = t.n(n),
        r = t('iuhU'),
        c = t('4YxH'),
        i = t('yKdD'),
        m = t('9rZX'),
        o = t.n(m),
        s = t('6y2Z'),
        d = t('lSEo'),
        u = t('eSoc'),
        v = function (e) {
          return e
            ? e.toLowerCase().replace(/\W/g, '_').replace(/_+/, '_')
            : 'undefined'
        },
        f = function (e) {
          var a = e.boatName,
            t = e.titles,
            m = (e.onClickInquire, Object(n.useState)('')),
            o = m[0],
            v = m[1],
            f = Object(s.a)(!1),
            b = f[0],
            E = f[1],
            h = Object(d.a)('(max-width: 1023px)'),
            N = Object(u.c)()[1]
          Object(n.useEffect)(function () {
            if (window.IntersectionObserver) {
              console.log('from in page nav')
              var e = Array.from(
                  document.querySelectorAll('[data-in-page-nav]')
                ),
                a = new Map(
                  Array.from(e).map(function (e) {
                    return [e, 0]
                  })
                ),
                t = new IntersectionObserver(
                  function (e) {
                    e.forEach(function (e) {
                      var t = e.target,
                        n = e.intersectionRatio
                      a.set(t, n)
                    })
                    var t = (function (e) {
                      if (0 !== e.size)
                        return Array.from(e.keys()).find(function (a) {
                          return e.get(a) > 0
                        })
                    })(a)
                    t && v(t.dataset.inPageNav || '')
                  },
                  { threshold: [0, 1] }
                )
              return (
                e.forEach(function (e) {
                  return t.observe(e)
                }),
                function () {
                  return t.disconnect()
                }
              )
            }
          }, [])
          var g = b ? i.d : i.c
          return l.a.createElement(
            n.Fragment,
            null,
            l.a.createElement(
              'div',
              {
                className: Object(r.a)(
                  'inpagenav sticky top-0 left-0 w-full z-30 text-white transform duration-200 ease-in-out'
                ),
              },
              l.a.createElement(
                'div',
                { className: 'h-12 bg-gray-0 px-4' },
                l.a.createElement(
                  'div',
                  {
                    className: Object(
                      r.a
                    )(
                      'h-full flex justify-between items-center border-b border-transparent border-opacity-25 max-w-8xl mx-auto',
                      { 'border-white': !h && b }
                    ),
                  },
                  l.a.createElement(
                    'button',
                    {
                      onClick: function () {
                        return E()
                      },
                      type: 'button',
                      className: 'flex items-center',
                    },
                    l.a.createElement(g, { className: 'text-red mr-4' }),
                    l.a.createElement(
                      'div',
                      { className: 'md:hidden' },
                      l.a.createElement(
                        c.a,
                        { variant: 'e2', as: 'span' },
                        t.length && o === t[0][0] ? a : o
                      )
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'hidden md:flex items-center' },
                      l.a.createElement(c.a, { variant: 'e2', as: 'span' }, a),
                      !!t.length &&
                        o !== t[0][0] &&
                        l.a.createElement(
                          n.Fragment,
                          null,
                          l.a.createElement(i.a, { className: 'h-6 mx-4' }),
                          l.a.createElement(
                            c.a,
                            { variant: 'e2', as: 'span' },
                            o
                          )
                        )
                    )
                  ),
                  l.a.createElement(
                    'button',
                    {
                      onClick: function () {
                        N(!0)
                      },
                    },
                    l.a.createElement(
                      c.a,
                      { variant: 'e2' },
                      'Request Information'
                    )
                  )
                )
              ),
              !h &&
                b &&
                l.a.createElement(p, {
                  current: o,
                  titles: t,
                  toggleIsMenuOpen: E,
                })
            ),
            l.a.createElement(x, {
              boatName: a,
              current: o,
              isMenuOpen: h && b,
              titles: t,
              toggleIsMenuOpen: E,
            })
          )
        },
        b = function (e) {
          var a = e.title
          return l.a.createElement('a', {
            className: 'absolute inset-0 -z-index-1 mt-px',
            id: v(a),
            'data-in-page-nav': a,
          })
        }
      function p(e) {
        var a = e.current,
          t = e.titles,
          n = e.toggleIsMenuOpen
        return l.a.createElement(
          'div',
          {
            className:
              'flex justify-center items-center bg-gray-0 h-10 -mb-10 space-x-6',
          },
          t.map(function (e) {
            var t = e[0],
              i = e[1]
            return l.a.createElement(
              'a',
              {
                key: 'dropdownNavItem-' + i,
                href: '#' + v(t),
                onClick: function () {
                  return n(!1)
                },
              },
              l.a.createElement(
                c.a,
                {
                  variant: 'e2',
                  as: 'span',
                  className: Object(r.a)('whitespace-no-wrap', {
                    'text-red': t === a,
                  }),
                },
                i || t
              )
            )
          })
        )
      }
      function x(e) {
        var a = e.boatName,
          t = e.current,
          n = e.isMenuOpen,
          m = e.titles,
          s = e.toggleIsMenuOpen
        return l.a.createElement(
          o.a,
          {
            isOpen: n,
            className: {
              base: 'absolute inset-0',
              afterOpen: '',
              beforeClose: '',
            },
            overlayClassName: 'fixed inset-0 z-40',
            onRequestClose: function () {
              return s(!1)
            },
          },
          l.a.createElement(
            'div',
            {
              className: Object(
                r.a
              )(
                'relative z-50 min-h-screen bg-black flex flex-col px-4 text-white',
                { hidden: !n, block: !!n }
              ),
              role: 'dialog',
              'aria-modal': 'true',
            },
            l.a.createElement(
              'button',
              {
                onClick: function () {
                  return s(!1)
                },
                className: 'h-20 flex items-center',
              },
              l.a.createElement(i.d, { className: 'text-red mr-4' }),
              l.a.createElement(c.a, { variant: 'e2' }, a)
            ),
            l.a.createElement(
              'div',
              { className: 'mt-10 flex flex-col items-start' },
              m.map(function (e) {
                var a = e[0]
                return l.a.createElement(
                  'div',
                  { key: a, className: 'relative mb-6' },
                  l.a.createElement(
                    'a',
                    {
                      href: '#' + v(a),
                      onClick: function () {
                        return s(!1)
                      },
                    },
                    l.a.createElement(
                      c.a,
                      { variant: 'h5', sm: 'h4', as: 'span' },
                      a
                    )
                  ),
                  a === t &&
                    l.a.createElement('div', {
                      className:
                        'absolute border-b border-t border-red w-full top-1/2',
                    })
                )
              })
            )
          )
        )
      }
    },
    Z4UL: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return g
      }),
        t.d(a, 'b', function () {
          return w
        }),
        t.d(a, 'd', function () {
          return y
        }),
        t.d(a, 'c', function () {
          return k
        }),
        t.d(a, 'g', function () {
          return O
        }),
        t.d(a, 'f', function () {
          return C
        }),
        t.d(a, 'e', function () {
          return q
        }),
        t.d(a, 'h', function () {
          return L
        })
      var n = t('8o2o'),
        l = t('q1tI'),
        r = t.n(l),
        c = t('4YxH'),
        i = t('29EZ'),
        m = t('/BuC'),
        o = t('iuhU'),
        s = t('yKdD'),
        d = t('pSK3'),
        u = t('6fqw'),
        v = t('JMfE'),
        f = (t('tCiu'), t('mwDC'))
      t('LR6s')
      var b = t('ZMKu'),
        p = t('6y2Z'),
        x = t('wnQI'),
        E = t('eSoc'),
        h = ['children', 'className', 'theme'],
        N = ['active', 'as', 'className', 'children'],
        g = function (e) {
          console.log(e, 'bbe8', '337')
          var a = e.image,
            t = e.alt,
            n = e.videoUrl,
            o = e.boatLogo,
            s = e.boatNameLong,
            d = e.eyebrow,
            v = e.ctaText,
            p = (e.onClickCta, e.headline),
            E = e.stats,
            h = Object(l.useState)(!1),
            N = h[0],
            g = h[1]
          return (
            Object(b.c)().scrollY.onChange(function (e) {
              g(e > 10)
            }),
            Object(l.useEffect)(function () {
              g(!1)
            }, []),
            r.a.createElement(
              'section',
              {
                className:
                  'bg-black text-white pt-32 pb-4 md:min-h-screen md:flex flex-col justify-between relative',
              },
              r.a.createElement('div', null),
              r.a.createElement(
                'div',
                { className: 'relative z-10' },
                r.a.createElement(
                  c.a,
                  {
                    variant: 'e2',
                    md: 'e2',
                    className: 'text-center mb-8 md:mb-4',
                  },
                  d || s
                ),
                r.a.createElement(
                  c.a,
                  {
                    variant: 'h4',
                    md: 'h3',
                    lg: 'h2',
                    xl: 'h1',
                    className:
                      'text-center mb-8 md:mb-10 max-w-2xl lg:max-w-3xl mx-auto',
                  },
                  p
                ),
                r.a.createElement(
                  'div',
                  { className: 'relative mb-4 justify-center hidden md:flex' },
                  r.a.createElement(
                    i.a,
                    {
                      onClick: function () {
                        var e,
                          a = document.getElementById('discover'),
                          t =
                            null == a ||
                            null === (e = a.offsetParent) ||
                            void 0 === e
                              ? void 0
                              : e.offsetTop
                        window.scroll({ top: t, behavior: 'smooth' })
                      },
                      href: '#discover',
                    },
                    v || 'Explore more'
                  )
                )
              ),
              r.a.createElement(
                'div',
                { className: 'mb-8 md:absolute md:h-full md:top-0 w-full' },
                n
                  ? r.a.createElement(
                      u.a,
                      { ratio: '16:9', md: 'none', className: 'md:h-full' },
                      r.a.createElement(x.a, {
                        image: a,
                        alt: t,
                        videoUrl: n,
                        videoOptions: { controls: !1 },
                      })
                    )
                  : r.a.createElement(
                      l.Fragment,
                      null,
                      r.a.createElement('img', {
                        src: '' + a,
                        className: 'h-full w-full object-cover',
                      })
                    )
              ),
              r.a.createElement('div', {
                className:
                  'hidden bg-black bg-opacity-10 absolute inset-0 md:block',
              }),
              r.a.createElement(
                'div',
                { className: 'relative z-10' },
                r.a.createElement(
                  'div',
                  { className: 'relative flex justify-center mb-8 md:mb-10' },
                  !!o &&
                    r.a.createElement('img', {
                      src: o,
                      alt: s,
                      className: 'max-w-xs',
                    })
                ),
                r.a.createElement(
                  'div',
                  {
                    className:
                      'relative flex px-4 space-x-6 mb-10 md:mb-6 max-w-2xl mx-auto',
                  },
                  E.map(function (e) {
                    return r.a.createElement(
                      'div',
                      { key: e.label || e.statLabel, className: 'flex-1' },
                      r.a.createElement(m.a, {
                        label: e.label || e.statLabel,
                        percentage: e.percentage || e.statPercentage,
                        text: e.text || e.statText,
                      })
                    )
                  })
                )
              ),
              r.a.createElement(
                'div',
                { className: 'relative mb-4 flex justify-center hidden' },
                r.a.createElement(
                  i.a,
                  { href: '/contact', link: !0 },
                  'Request Information'
                )
              ),
              r.a.createElement(
                'div',
                {
                  className:
                    'hidden md:block fixed bottom-0 left-0 w-full mb-8 pointer-events-none',
                },
                r.a.createElement(
                  'div',
                  { className: 'max-w-7xl mx-auto' },
                  r.a.createElement(
                    b.b.div,
                    { animate: { opacity: N ? 0 : 1 } },
                    r.a.createElement(f.b, null)
                  )
                )
              )
            )
          )
        },
        w = function (e) {
          var a = e.children,
            t = e.className,
            l = e.theme,
            c = void 0 === l ? 'light' : l,
            i = Object(n.a)(e, h)
          return r.a.createElement(
            'section',
            Object.assign(
              {
                className: Object(o.a)(
                  'relative py-12 overflow-hidden',
                  { 'bg-black text-white': 'dark' === c },
                  t
                ),
              },
              i
            ),
            a
          )
        },
        y = function (e) {
          var a = e.children,
            t = e.className
          return r.a.createElement(
            'div',
            { className: 'px-4' },
            r.a.createElement(
              c.a,
              {
                variant: 'h4',
                className: Object(o.a)(
                  'text-center px-4 text-gray-4 mb-8 md:hidden',
                  t
                ),
              },
              a
            )
          )
        },
        k = function (e) {
          var a = e.className,
            t = e.theme,
            n = void 0 === t ? 'dark' : t,
            l = e.disabledNext,
            c = void 0 !== l && l,
            i = e.disabledPrev,
            m = void 0 !== i && i,
            u = e.onClickNext,
            v = e.onClickPrev
          return r.a.createElement(
            'div',
            { className: Object(o.a)('flex justify-center space-x-4', a) },
            r.a.createElement(d.a, {
              icon: s.b,
              theme: n,
              variant: 'secondary',
              iconClassName: 'transform rotate-180',
              onClick: v,
              disabled: m,
              'aria-label': 'Previous',
            }),
            r.a.createElement(d.a, {
              icon: s.b,
              theme: n,
              variant: 'secondary',
              onClick: u,
              disabled: c,
              'aria-label': 'Next',
            })
          )
        },
        O = function (e) {
          var a,
            t,
            n,
            i,
            m,
            s = e.heroImage,
            d = e.options,
            u = e.moreDetails,
            f = Object(l.useState)(
              null == d || null === (a = d[0]) || void 0 === a ? void 0 : a.name
            ),
            b = f[0],
            p = f[1]
          return r.a.createElement(
            w,
            {
              className: Object(o.a)('overflow-hidden', {
                'pb-0':
                  null == u || null === (t = u.details) || void 0 === t
                    ? void 0
                    : t.length,
                'pb-24': !(null == u || null === (n = u.details) || void 0 === n
                  ? void 0
                  : n.length),
              }),
              'data-section-type': 'Powertrain Section',
            },
            r.a.createElement(v.a, { title: 'Powertrain Options' }),
            r.a.createElement(
              'div',
              {
                className:
                  'relative max-w-7xl mx-auto flex flex-col items-center',
              },
              r.a.createElement(
                'div',
                { className: 'px-4 md:mb-12 md:mt-8 lg:mt-16' },
                r.a.createElement('img', {
                  src:
                    (null == s || null === (i = s[0]) || void 0 === i
                      ? void 0
                      : i.url) + '?q=30&w=2000',
                  alt: '',
                })
              ),
              r.a.createElement(
                'div',
                { className: 'md:flex max-w-5xl w-full px-4' },
                r.a.createElement(
                  'div',
                  {
                    className:
                      'md:hidden flex flex-no-wrap p-4 space-x-4 my-14 overflow-x-auto',
                  },
                  !!d.length &&
                    d.map(function (e) {
                      var a = e.name
                      return r.a.createElement(
                        j,
                        {
                          key: a || Math.random(),
                          className: 'whitespace-no-wrap',
                          active: a === b,
                          onClick: function () {
                            return p(a)
                          },
                        },
                        a
                      )
                    })
                ),
                r.a.createElement(
                  'div',
                  { className: 'hidden md:block md:flex-1 space-y-4' },
                  !!d.length &&
                    d.map(function (e) {
                      var a = e.name
                      return r.a.createElement(
                        j,
                        {
                          key: a,
                          className: 'whitespace-no-wrap',
                          active: a === b,
                          onClick: function () {
                            return p(a)
                          },
                        },
                        a
                      )
                    })
                ),
                r.a.createElement(
                  'div',
                  { className: 'flex-1 space-y-4 mt-2 pl-4 md:pl-12' },
                  !!d.length &&
                    d
                      .find(function (e) {
                        return (null == e ? void 0 : e.name) === b
                      })
                      .details.map(function (e) {
                        return r.a.createElement(
                          'ul',
                          { key: null == e ? void 0 : e.name },
                          r.a.createElement(
                            'li',
                            null,
                            r.a.createElement(
                              c.a,
                              { variant: 'e3' },
                              null == e ? void 0 : e.name
                            ),
                            r.a.createElement(
                              c.a,
                              { variant: 'p3' },
                              null == e ? void 0 : e.info
                            )
                          )
                        )
                      })
                )
              )
            ),
            !!(null == u || null === (m = u.details) || void 0 === m
              ? void 0
              : m.length) &&
              r.a.createElement(
                'div',
                { className: 'pt-10' },
                r.a.createElement(q, u)
              )
          )
        },
        j = function (e) {
          var a = e.active,
            t = e.as,
            l = void 0 === t ? 'button' : t,
            i = e.className,
            m = e.children,
            s = Object(n.a)(e, N)
          return r.a.createElement(
            l,
            Object.assign({}, s, {
              className: Object(o.a)(
                'block py-px border-b border-transparent hover:text-red',
                i,
                {
                  'text-red border-red': a,
                }
              ),
            }),
            r.a.createElement(
              c.a,
              { variant: 'h5', md: 'h4', as: 'span', className: 'normal-case' },
              m
            )
          )
        },
        C = function (e) {
          console.log(e, '729 bbe8')
          var a = e.boatNameLong,
            t = e.title,
            n = e.media,
            l = (e.onClickCta, Object(E.c)()[1])
          return r.a.createElement(
            w,
            {
              className: 'pb-48 sm:py-48 AHHHHH',
              'data-section-type': 'OrderSectionComponent',
            },
            r.a.createElement(v.a, { title: t }),
            r.a.createElement('img', {
              src: n + '?q=30&w=2400',
              alt: '',
              className: 'h-full w-full object-cover top-0',
              style: { position: 'absolute' },
            }),
            r.a.createElement('div', {
              className: 'absolute inset-0 bg-black bg-opacity-10',
            }),
            r.a.createElement(
              'div',
              {
                className:
                  'relative px-4 text-white text-center mb-48 sm:mb-0 max-w-7xl mx-auto',
              },
              r.a.createElement(
                'div',
                {
                  className:
                    'bg-black bg-opacity-75 py-16 sm:py-20 px-4 max-w-md',
                },
                r.a.createElement(
                  c.a,
                  { variant: 'h3', sm: 'h2', className: 'mb-6' },
                  t
                ),
                r.a.createElement(
                  c.a,
                  { variant: 'e2', className: 'mb-12' },
                  a
                ),
                r.a.createElement(
                  'div',
                  { className: 'flex justify-center' },
                  r.a.createElement(
                    i.a,
                    {
                      onClick: function () {
                        l(!0)
                      },
                    },
                    'Request Information'
                  )
                )
              )
            )
          )
        },
        I = function (e) {
          var a,
            t,
            n = e.content,
            l = e.layout,
            c = e.media,
            i = r.a.createElement('img', {
              src: c.image.publicURL + '?q=30&w=2000',
            }),
            m = r.a.createElement(
              'div',
              { className: 'px-4 md:px-0 md:w-3/4 lg:w-2/3' },
              r.a.createElement(L, n)
            )
          return r.a.createElement(
            'div',
            {
              className:
                'flex flex-col md:flex-row max-w-7xl mx-auto pb-16 md:pb-32',
              'data-block-type': 'HorizontalImageTextBlockComponent',
            },
            r.a.createElement(
              'div',
              {
                className: Object(o.a)(
                  'md:w-1/2 flex flex-col justify-center items-center mb-12 md:mb-0',
                  ((a = {}),
                  (a['order-2 md:order-none'] = 'imageOnRight' === l),
                  a)
                ),
              },
              'imageOnLeft' === l ? i : m
            ),
            r.a.createElement(
              'div',
              {
                className: Object(o.a)(
                  'md:w-1/2 flex flex-col justify-center items-center',
                  ((t = {}),
                  (t['order-1 mb-12 md:mb-auto md:order-none'] =
                    'imageOnRight' === l),
                  t)
                ),
              },
              'imageOnLeft' === l ? m : i
            )
          )
        },
        q = function (e) {
          var a = e.buttonText,
            t = e.details,
            n = Object(p.a)(!1),
            l = n[0],
            c = n[1]
          return r.a.createElement(
            'div',
            { 'data-block-type': 'MoreDetailsBlockComponent' },
            r.a.createElement(
              'div',
              {
                className:
                  'moreDetailsBlock flex justify-center mb-10 md:mb-20',
              },
              r.a.createElement(
                i.a,
                {
                  variant: 'secondary',
                  onClick: function () {
                    c()
                  },
                },
                r.a.createElement(
                  'span',
                  { className: 'flex items-center group' },
                  l
                    ? r.a.createElement(s.d, {
                        className:
                          'inline-block text-red mr-2 text-lg group-hover:text-white',
                      })
                    : r.a.createElement(s.c, {
                        className:
                          'inline-block text-red mr-2 text-lg group-hover:text-white',
                      }),
                  r.a.createElement('span', null, a)
                )
              )
            ),
            r.a.createElement(
              'div',
              { className: 'overflow-hidden mb-10' },
              r.a.createElement(
                b.a,
                { initial: !1 },
                l &&
                  r.a.createElement(
                    b.b.div,
                    {
                      key: 'descriptions',
                      initial: 'collapsed',
                      animate: 'open',
                      exit: 'collapsed',
                      variants: {
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      },
                      transition: { duration: 0.5, ease: 'easeInOut' },
                    },
                    r.a.createElement(
                      'div',
                      null,
                      t.map(function (e, a) {
                        var t = {
                          type: 'horizontal-image-text',
                          layout: e.layout,
                          content: { header: e.header, copy: e.copy },
                          media: { image: { publicURL: e.image } },
                        }
                        return r.a.createElement(
                          I,
                          Object.assign({ key: e.header + ' - ' + a }, t)
                        )
                      })
                    )
                  )
              )
            )
          )
        },
        L = function (e) {
          var a,
            t = e.className,
            n = void 0 === t ? '' : t,
            l = e.copy,
            i = e.header
          return r.a.createElement(
            'div',
            { className: n, 'data-block-type': 'TextBlockComponent' },
            r.a.createElement(c.a, { variant: 'e2', className: 'mb-4' }, i),
            null == l || null === (a = l.split('\n')) || void 0 === a
              ? void 0
              : a.filter(Boolean).map(function (e) {
                  return r.a.createElement(
                    c.a,
                    { className: 'mb-4 last:mb-0', key: e, variant: 'p2' },
                    e
                  )
                })
          )
        }
    },
  },
])
//# sourceMappingURL=0e9c81d847167ddf7c73b2550659787bd7a9fb86-74ed0794b677a8a8bbe8.js.map
