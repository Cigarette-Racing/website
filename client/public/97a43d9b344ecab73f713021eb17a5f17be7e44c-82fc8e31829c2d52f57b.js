;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '/183': function (e, a, t) {
      'use strict'
      t.d(a, 'r', function () {
        return s
      }),
        t.d(a, 'q', function () {
          return d
        }),
        t.d(a, 'd', function () {
          return T
        }),
        t.d(a, 'g', function () {
          return x
        }),
        t.d(a, 'f', function () {
          return O
        }),
        t.d(a, 'j', function () {
          return E
        }),
        t.d(a, 'a', function () {
          return A
        }),
        t.d(a, 'b', function () {
          return y
        }),
        t.d(a, 'c', function () {
          return z
        }),
        t.d(a, 'o', function () {
          return L
        }),
        t.d(a, 'i', function () {
          return w
        }),
        t.d(a, 'h', function () {
          return k
        }),
        t.d(a, 'm', function () {
          return v
        }),
        t.d(a, 'e', function () {
          return S
        }),
        t.d(a, 'n', function () {
          return b
        }),
        t.d(a, 'l', function () {
          return Q
        }),
        t.d(a, 'k', function () {
          return U
        }),
        t.d(a, 'p', function () {
          return f
        })
      var l = t('8o2o'),
        M = t('q1tI'),
        N = t.n(M),
        i = t('Wbzz'),
        c = t('4YxH'),
        r = t('iuhU'),
        n = t('yKdD'),
        u = (t('H8eV'), t('pSK3'), t('6fqw')),
        D = t('tCiu'),
        m = t('LR6s'),
        g = t('wnQI'),
        j = t('1Eu0'),
        o = (t('Cs6D'), t('FCdT'), ['children', 'className', 'theme']),
        I = ['imgClassName', 'label', 'ratio', 'src', 'alt'],
        s = function (e) {
          var a = {
            oneColumnTextBlock: 'one-column-text',
            oneColumnImageTextBlock: 'one-column-image-text',
            twoColumnImageTextBlock: 'two-column-image-text',
            twoColumnImagesBlock: 'two-column-images',
            threeColumnImagesBlock: 'three-column-images',
            sliderBlock: 'slider',
            carousel: 'carousel',
            fullBleedImage: 'full-bleed-image',
            fullWidthCarousel: 'full-width-carousel',
            horizontalImageText: 'horizontal-image-text',
            powertrainOptions: 'powertrain',
            moreDetails: 'more-details',
          }
          return e.flexibleSections.map(function (t) {
            var l = t.blocks.map(function (e, t, l) {
              return Object.assign({}, e, {
                source: 'craft',
                blockPosition:
                  0 === t ? 'first' : t === l.length - 1 ? 'last' : 'middle',
                type:
                  'carousel' === (null == e ? void 0 : e.typeHandle) &&
                  e.fullWidth
                    ? 'full-width-carousel'
                    : a[null == e ? void 0 : e.typeHandle],
              })
            })
            return {
              id: null == e ? void 0 : e.id,
              type: 'flexible',
              title: t.title,
              theme: t.theme,
              bleedDirection: t.bleedDirection,
              headerImage: !!t.headerImage.length && t.headerImage[0].url,
              blocks: l,
              moreDetails: [],
            }
          })
        },
        d = function (e) {
          return e.map(function (e) {
            var a, t, l, M, N, i, c, r, n
            return {
              content: {
                copy:
                  null === (a = e.textBlock) || void 0 === a
                    ? void 0
                    : a[0].copy,
                header:
                  null === (t = e.textBlock) || void 0 === t
                    ? void 0
                    : t[0].header,
              },
              media: {
                image:
                  null === (l = e.singleMedia) ||
                  void 0 === l ||
                  null === (M = l[0].image) ||
                  void 0 === M ||
                  null === (N = M[0]) ||
                  void 0 === N
                    ? void 0
                    : N.url,
                videoUrl:
                  null === (i = e.singleMedia) ||
                  void 0 === i ||
                  null === (c = i[0]) ||
                  void 0 === c
                    ? void 0
                    : c.videoURL,
                autoplayVideo:
                  null === (r = e.singleMedia) ||
                  void 0 === r ||
                  null === (n = r[0]) ||
                  void 0 === n
                    ? void 0
                    : n.autoplayVideo,
              },
            }
          })
        },
        T = function (e) {
          var a = e.children,
            t = e.className,
            M = e.theme,
            i = void 0 === M ? 'light' : M,
            c = Object(l.a)(e, o)
          return N.a.createElement(
            'section',
            Object.assign(
              {
                className: Object(r.a)(
                  'relative overflow-hidden',
                  { 'bg-gray-0 text-white': 'dark' === i },
                  t
                ),
              },
              c
            ),
            a
          )
        },
        x = function (e) {
          var a = e.children,
            t = e.className
          return N.a.createElement(
            'div',
            { className: 'px-4' },
            N.a.createElement(
              c.a,
              {
                variant: 'h4',
                className: Object(r.a)(
                  'text-center px-4 text-gray-4 mb-8 md:hidden',
                  t
                ),
              },
              a
            )
          )
        },
        O = function (e) {
          var a = e.imgClassName,
            t = e.label,
            M = e.ratio,
            i = e.src,
            c = e.alt,
            n = Object(l.a)(e, I)
          return N.a.createElement(
            u.a,
            Object.assign({ ratio: M }, n),
            N.a.createElement('img', {
              src: i + '?q=30&w=1000',
              className: Object(r.a)('h-full w-full object-cover', a),
              alt: c || '',
              style: { position: 'absolute' },
            }),
            t &&
              N.a.createElement(
                m.a,
                { className: 'absolute bottom-0 left-0' },
                t
              )
          )
        },
        E = function (e) {
          var a = e.className,
            t = e.imgClassName,
            l = e.media,
            M = e.ratio,
            i = void 0 === M ? '3:2' : M,
            c = e.side,
            n = e.size,
            D = void 0 === n ? 'default' : n
          return N.a.createElement(
            'div',
            { className: Object(r.a)(a), 'data-block-type': 'SideBleedImage' },
            N.a.createElement(
              'div',
              {
                className: Object(r.a)(
                  'w-full md:w-11/12 lg:w-10/12 xl:w-9/12',
                  {
                    'ml-auto': 'right' === c,
                    'mr-auto': 'left' === c,
                    'xl:w-9/12': 'default' === D,
                  }
                ),
              },
              N.a.createElement(
                u.a,
                { ratio: i },
                N.a.createElement('img', {
                  src: l + '?q=30&w=2000',
                  alt: '',
                  className: Object(r.a)('h-full w-full object-cover', t),
                  style: { position: 'absolute' },
                })
              )
            )
          )
        },
        A = function (e) {
          var a = e.categories,
            t = void 0 === a ? [] : a,
            l = e.className,
            M = void 0 === l ? '' : l,
            i = e.align
          return N.a.createElement(
            'div',
            { className: 'categories ' + M },
            t.length > 1 &&
              N.a.createElement(
                'div',
                {
                  className:
                    'flex ' +
                    ('left' === i
                      ? 'justify-start'
                      : 'justify-center md:justify-start'),
                },
                N.a.createElement(n.a, {
                  className: 'text-red',
                  style: { fontSize: '32px' },
                }),
                t.map(function (e, a) {
                  return N.a.createElement(
                    c.a,
                    { key: e.title + '-' + a, variant: 'e3' },
                    e.title
                  )
                })
              ),
            1 === t.length &&
              N.a.createElement(
                'div',
                {
                  className:
                    'flex items-center ' +
                    ('left' === i ? 'justify-start' : 'justify-center'),
                },
                N.a.createElement(n.a, {
                  className: 'text-red',
                  style: { fontSize: '32px' },
                }),
                N.a.createElement(c.a, { variant: 'e3' }, t[0].title)
              )
          )
        },
        y = function (e) {
          var a,
            t,
            l,
            n,
            D,
            m,
            g,
            o,
            I = e.entry,
            s = e.entryType,
            d = e.index,
            T = e.hierarchy,
            x = e.className,
            O = e.theme,
            E = void 0 === O ? 'light' : O,
            y = 'primary' === T,
            z = 'secondary' === T,
            L = 'tertiary' === T,
            w = new Date(I.dateCreated)
          return N.a.createElement(
            M.Fragment,
            null,
            y &&
              N.a.createElement(
                i.Link,
                {
                  to: '' + I.slug,
                  className: Object(r.a)(
                    'primary block border-solid border-t md:pt-16 w-full md:px-4',
                    { 'border-gray-1': 'dark' === E },
                    { 'border-gray-5': 'light' === E },
                    x
                  ),
                },
                N.a.createElement(
                  'div',
                  { className: 'md:flex pt-5 flex-col md:mb-24' },
                  N.a.createElement(
                    'div',
                    { className: 'w-full mb-10 md:order-2' },
                    !!(null == I || null === (a = I.image) || void 0 === a
                      ? void 0
                      : a[0]) &&
                      N.a.createElement(
                        u.a,
                        { ratio: '1:1', md: '16:9', className: '' },
                        N.a.createElement('img', {
                          className: 'absolute h-full w-full object-cover',
                          src:
                            (null === (t = I.image[0]) || void 0 === t
                              ? void 0
                              : t.url) + '?q=30&w=2400',
                          alt: '',
                        })
                      )
                  ),
                  N.a.createElement(
                    'div',
                    { className: Object(r.a)('w-full md:order-1') },
                    N.a.createElement(A, {
                      className: 'mb-3',
                      categories: I.articleCategories,
                    }),
                    N.a.createElement(
                      'div',
                      { className: 'text-center px-3' },
                      N.a.createElement(
                        c.a,
                        {
                          className: 'mb-4 max-w-5xl m-auto',
                          variant: 'h4',
                          sm: 'h3',
                          md: 'h1',
                        },
                        I.title
                      ),
                      N.a.createElement(
                        c.a,
                        {
                          className: 'max-w-screen-sm m-auto mb-8 text-gray-3',
                          variant: 'p3',
                        },
                        I.articleExcerpt
                      ),
                      !!I.dateCreated &&
                        N.a.createElement(
                          c.a,
                          { variant: 'e3', className: 'date text-gray-4 mb-8' },
                          w.getMonth() +
                            1 +
                            '.' +
                            w.getDate() +
                            '.' +
                            w.getFullYear()
                        ),
                      N.a.createElement(
                        j.a,
                        { className: 'm-auto md:mb-8' },
                        'Read Story'
                      )
                    )
                  )
                )
              ),
            z &&
              N.a.createElement(
                i.Link,
                {
                  to: '' + I.slug,
                  className: Object(r.a)(
                    'secondary block border-solid border-t',
                    { 'border-gray-1': 'dark' === E },
                    { 'border-gray-5': 'light' === E }
                  ),
                },
                N.a.createElement(
                  'div',
                  { className: 'mb-12 md:mb-24 md:flex pt-5' },
                  N.a.createElement(
                    'div',
                    {
                      className: Object(r.a)(
                        'md:w-1/2 mb-10',
                        ((l = {}), (l['md:order-2'] = d % 2 == 0), l)
                      ),
                    },
                    (
                      null == I || null === (n = I.image) || void 0 === n
                        ? void 0
                        : n[0]
                    )
                      ? N.a.createElement(
                          u.a,
                          { ratio: '1:1', md: '16:9', className: '' },
                          N.a.createElement('img', {
                            className: 'absolute h-full w-full object-cover',
                            src:
                              (null === (D = I.image[0]) || void 0 === D
                                ? void 0
                                : D.url) + '?q=30&w=2400',
                            alt: '',
                          })
                        )
                      : N.a.createElement(
                          u.a,
                          { ratio: '1:1', md: '16:9', className: '' },
                          N.a.createElement('img', {
                            className: 'absolute h-full w-full object-cover',
                            src: 'https://via.placeholder.com/1000x1000',
                            alt: '',
                          })
                        )
                  ),
                  N.a.createElement(
                    'div',
                    {
                      className: Object(r.a)(
                        'md:w-1/2',
                        ((m = {}),
                        (m['md:order-1'] = d % 2 == 0),
                        (m['md:ml-6'] = d % 2 != 0),
                        m)
                      ),
                    },
                    N.a.createElement(A, {
                      align: 'left',
                      className:
                        'mb-3 flex justify-center md:justify-start md:pl-1',
                      categories: I.articleCategories,
                    }),
                    N.a.createElement(
                      'div',
                      { className: 'text-center md:text-left px-3' },
                      N.a.createElement(
                        c.a,
                        {
                          className: 'mb-4',
                          variant: 'h4',
                          sm: 'h3',
                          md: 'h2',
                        },
                        I.title
                      ),
                      N.a.createElement(
                        c.a,
                        {
                          className: 'max-w-screen-sm m-auto mb-8 text-gray-3',
                          variant: 'p3',
                        },
                        I.articleExcerpt
                      ),
                      N.a.createElement(
                        c.a,
                        { variant: 'e3', className: 'date text-gray-4' },
                        w.getMonth() +
                          1 +
                          '.' +
                          w.getDate() +
                          '.' +
                          w.getFullYear()
                      )
                    )
                  )
                )
              ),
            L &&
              N.a.createElement(
                i.Link,
                {
                  to: '/' + s + '/' + I.slug,
                  className: Object(r.a)('tertiary block', x),
                  'data-type': 'tertiary link',
                },
                N.a.createElement(
                  'div',
                  { className: 'pt-5 flex flex-col h-full' },
                  N.a.createElement(
                    'div',
                    { className: 'mb-10' },
                    (
                      null == I || null === (g = I.image) || void 0 === g
                        ? void 0
                        : g[0]
                    )
                      ? N.a.createElement(
                          u.a,
                          { ratio: '1:1', md: '16:9', className: '' },
                          N.a.createElement('img', {
                            className: 'absolute h-full w-full object-cover',
                            src:
                              (null === (o = I.image[0]) || void 0 === o
                                ? void 0
                                : o.url) + '?q=30&w=2400',
                            alt: '',
                          })
                        )
                      : N.a.createElement(
                          u.a,
                          { ratio: '1:1', md: '16:9', className: '' },
                          N.a.createElement('img', {
                            className: 'absolute h-full w-full object-cover',
                            src: 'https://via.placeholder.com/1000x1000',
                            alt: '',
                          })
                        )
                  ),
                  N.a.createElement(
                    'div',
                    { className: 'h-full' },
                    N.a.createElement(
                      'div',
                      {
                        className:
                          'flex justify-between content-between flex-col h-full',
                      },
                      N.a.createElement(
                        'div',
                        null,
                        N.a.createElement(A, {
                          align: 'left',
                          className: 'mb-3 transform -translate-x-2',
                          categories: I.articleCategories,
                        }),
                        N.a.createElement(
                          c.a,
                          { className: 'mb-10', variant: 'h5', md: 'h4' },
                          I.title
                        ),
                        N.a.createElement(
                          c.a,
                          {
                            className:
                              'hidden md:block max-w-screen-sm m-auto mb-8 text-gray-3',
                            variant: 'p3',
                            md: 'p1',
                          },
                          I.articleExcerpt
                        )
                      ),
                      N.a.createElement(
                        'div',
                        null,
                        N.a.createElement(
                          c.a,
                          { variant: 'e3', className: 'date text-gray-4' },
                          w.getMonth() +
                            1 +
                            '.' +
                            w.getDate() +
                            '.' +
                            w.getFullYear()
                        )
                      )
                    )
                  )
                )
              )
          )
        },
        z = function (e) {
          var a = e.entries,
            t = e.entryType,
            l = e.theme,
            i = void 0 === l ? 'light' : l
          return N.a.createElement(
            M.Fragment,
            null,
            !!a.length &&
              a.map(function (e, a) {
                return N.a.createElement(y, {
                  entryType: t,
                  key: '' + e.id,
                  index: a,
                  entry: e,
                  hierarchy: 'secondary',
                  theme: i,
                })
              })
          )
        },
        L = function (e) {
          var a = e.entries,
            t = e.entryType,
            l = e.theme,
            i = void 0 === l ? 'light' : l,
            c = a.slice(1, 3),
            n = a.slice(3)
          return N.a.createElement(
            M.Fragment,
            null,
            N.a.createElement(y, {
              entryType: t,
              key: '' + a[0].id,
              entry: a[0],
              hierarchy: 'primary',
              theme: i,
            }),
            !!c.length &&
              N.a.createElement(
                'div',
                { className: 'nextTwo' },
                c.map(function (e, a) {
                  return N.a.createElement(y, {
                    entryType: t,
                    hierarchy: 'secondary',
                    key: '' + e.id,
                    index: a,
                    entry: e,
                    theme: i,
                  })
                })
              ),
            !!n.length &&
              N.a.createElement(
                'div',
                {
                  className: Object(r.a)(
                    'remaining grid grid-cols-2 col-gap-4 lg:grid-cols-3 lg:col-gap-6 border-solid border-t',
                    { 'border-gray-1': 'dark' === i },
                    { 'border-gray-5': 'light' === i }
                  ),
                },
                n.map(function (e, a) {
                  return N.a.createElement(y, {
                    entryType: t,
                    hierarchy: 'tertiary',
                    key: '' + e.id,
                    index: a,
                    entry: e,
                  })
                })
              )
          )
        },
        w = function (e) {
          var a = e.align,
            t = void 0 === a ? 'left' : a,
            l = e.header,
            M = e.copy
          return N.a.createElement(
            'div',
            {
              className: 'my-12 px-4 xl:pl-0 mb-32 max-w-5xl mx-auto',
              'data-block-type': 'OneColumnTextBlockComponent',
            },
            N.a.createElement(U, {
              className: Object(r.a)({
                'max-w-xl mr-auto text-left': 'left' === t,
                'max-w-2xl mx-auto text-center': 'center' === t,
                'max-w-xl ml-auto text-right': 'right' === t,
              }),
              header: l,
              copy: M,
            })
          )
        },
        k = function (e) {
          var a = e.content,
            t = e.media
          return N.a.createElement(
            'div',
            {
              className: 'max-w-7xl mx-auto',
              'data-block-type': 'OneColumnImageTextBlockComponent',
            },
            N.a.createElement(
              u.a,
              { ratio: '3:2', className: 'overflow-hidden' },
              (null == t ? void 0 : t.videoURL)
                ? N.a.createElement(g.a, {
                    image: null == t ? void 0 : t.image,
                    alt: null == t ? void 0 : t.alt,
                    videoUrl: null == t ? void 0 : t.videoURL,
                    videoOptions: { controls: !1 },
                  })
                : N.a.createElement(
                    M.Fragment,
                    null,
                    N.a.createElement('img', {
                      src: (null == t ? void 0 : t.image) + '?q=30&w=2000',
                      alt: '',
                      className: 'h-full w-full object-cover',
                      style: { position: 'absolute' },
                    })
                  )
            ),
            N.a.createElement(
              'div',
              {
                className:
                  'md:flex justify-center my-8 md:my-16 mb-20 md:mb-24 px-4 xl:px-0 ',
              },
              N.a.createElement(
                U,
                Object.assign(
                  { className: 'md:w-3/4 text-center max-w-6xl' },
                  a
                )
              )
            )
          )
        },
        v = function (e) {
          var a,
            t,
            l,
            M,
            i,
            c,
            r,
            n,
            u,
            D,
            m,
            g,
            j,
            o = e.children
          return N.a.createElement(
            'div',
            {
              className: 'md:flex md:mb-24 md:px-12 lg:px-16 max-w-7xl mx-auto',
              'data-block-type': 'TwoColumnImageTextBlockComponent',
            },
            N.a.createElement(
              'div',
              { className: 'md:w-1/2 lg:pr-12' },
              N.a.createElement(U, {
                className: 'my-12 px-4 lg:px-0 lg:ml-12 md:mb-32 lg:mb-48',
                header:
                  null == o || null === (a = o[0].textBlock) || void 0 === a
                    ? void 0
                    : a[0].header,
                copy:
                  null == o || null === (t = o[0].textBlock) || void 0 === t
                    ? void 0
                    : t[0].copy,
              }),
              N.a.createElement(
                'div',
                { className: 'px-4 lg:px-0 mb-12 md:mb-0' },
                N.a.createElement(O, {
                  ratio: '3:4',
                  src:
                    null === (l = o[0].singleMedia) ||
                    void 0 === l ||
                    null === (M = l[0].image) ||
                    void 0 === M
                      ? void 0
                      : M[0].url,
                  alt:
                    null === (i = o[0].singleMedia) || void 0 === i
                      ? void 0
                      : i[0].alt,
                  label:
                    null === (c = o[0].singleMedia) || void 0 === c
                      ? void 0
                      : c[0].label,
                })
              )
            ),
            N.a.createElement(
              'div',
              { className: 'md:w-1/2 lg:pl-12' },
              N.a.createElement(
                'div',
                { className: 'px-4 lg:px-0 lg:pr-16' },
                null === (r = o[1].singleMedia) || void 0 === r
                  ? void 0
                  : r.alt,
                N.a.createElement(O, {
                  ratio: '3:4',
                  src:
                    null == o ||
                    null === (n = o[1].singleMedia) ||
                    void 0 === n ||
                    null === (u = n[0].image) ||
                    void 0 === u
                      ? void 0
                      : u[0].url,
                  alt:
                    null === (D = o[1].singleMedia) || void 0 === D
                      ? void 0
                      : D[0].alt,
                  label:
                    null === (m = o[1].singleMedia) || void 0 === m
                      ? void 0
                      : m[0].label,
                })
              ),
              N.a.createElement(U, {
                className: 'my-10 md:my-16 px-4 lg:px-0 lg:pr-16',
                header:
                  null == o || null === (g = o[1].textBlock) || void 0 === g
                    ? void 0
                    : g[0].header,
                copy:
                  null == o || null === (j = o[1].textBlock) || void 0 === j
                    ? void 0
                    : j[0].copy,
              })
            )
          )
        },
        S = function (e) {
          var a,
            t,
            l = e.content,
            M = e.layout,
            i = e.media,
            c = N.a.createElement('img', {
              src: i.image.publicURL + '?q=30&w=2000',
            }),
            n = N.a.createElement(
              'div',
              { className: 'px-4 md:px-0 md:w-3/4 lg:w-2/3' },
              N.a.createElement(U, l)
            )
          return N.a.createElement(
            'div',
            {
              className:
                'flex flex-col md:flex-row max-w-7xl mx-auto pb-16 md:pb-32',
              'data-block-type': 'HorizontalImageTextBlockComponent',
            },
            N.a.createElement(
              'div',
              {
                className: Object(r.a)(
                  'md:w-1/2 flex flex-col justify-center items-center mb-12 md:mb-0',
                  ((a = {}),
                  (a['order-2 md:order-none'] = 'imageOnRight' === M),
                  a)
                ),
              },
              'imageOnLeft' === M ? c : n
            ),
            N.a.createElement(
              'div',
              {
                className: Object(r.a)(
                  'md:w-1/2 flex flex-col justify-center items-center',
                  ((t = {}),
                  (t['order-1 mb-12 md:mb-auto md:order-none'] =
                    'imageOnRight' === M),
                  t)
                ),
              },
              'imageOnLeft' === M ? n : c
            )
          )
        },
        b = function (e) {
          var a,
            t,
            l,
            M,
            i = e.className,
            c = e.images
          return N.a.createElement(
            'div',
            {
              className: Object(r.a)('max-w-7xl mx-auto sm:flex', i),
              'data-block-type': 'TwoUpImageBlock',
            },
            N.a.createElement(
              'div',
              { className: 'sm:first:pr-4 mb-16 md:mb-0 flex-1' },
              N.a.createElement(
                u.a,
                { ratio: '3:4' },
                N.a.createElement('img', {
                  src:
                    (null === (a = c[0].singleMedia) ||
                    void 0 === a ||
                    null === (t = a[0].image) ||
                    void 0 === t
                      ? void 0
                      : t[0].url) + '?q=30&w=1000',
                  alt: '',
                  className: 'h-full w-full object-cover',
                  style: { position: 'absolute' },
                })
              )
            ),
            N.a.createElement(
              'div',
              { className: 'sm:last:pl-4 mb-16 md:mb-0 flex-1' },
              N.a.createElement(
                u.a,
                { ratio: '3:4' },
                N.a.createElement('img', {
                  src:
                    '' +
                    (null === (l = c[1].singleMedia) ||
                    void 0 === l ||
                    null === (M = l[0].image) ||
                    void 0 === M
                      ? void 0
                      : M[0].url),
                  alt: '',
                  className: 'h-full w-full object-cover',
                  style: { position: 'absolute' },
                })
              )
            )
          )
        },
        Q = function (e) {
          var a = e.className,
            t = e.images
          return N.a.createElement(
            'div',
            {
              className: Object(r.a)('sm:flex max-w-7xl mx-auto', a),
              'data-block-type': 'ThreeUpImageBlock',
            },
            !!t &&
              !!t.length &&
              t.map(function (e, a) {
                var t, l, M, i, c
                return N.a.createElement(
                  'div',
                  {
                    key:
                      (null == e ||
                      null === (t = e.singleMedia) ||
                      void 0 === t ||
                      null === (l = t[0].image) ||
                      void 0 === l
                        ? void 0
                        : l[0].url) +
                      '-' +
                      a,
                    className: 'px-4 mb-16 sm:w-1/3',
                  },
                  N.a.createElement(O, {
                    ratio: '3:4',
                    src:
                      (null == e ||
                      null === (M = e.singleMedia) ||
                      void 0 === M ||
                      null === (i = M[0].image) ||
                      void 0 === i
                        ? void 0
                        : i[0].url) + '?q=30&w=1000',
                    alt: e.alt || '',
                    label:
                      null == e || null === (c = e.singleMedia) || void 0 === c
                        ? void 0
                        : c[0].label,
                  })
                )
              })
          )
        },
        U = function (e) {
          var a,
            t = e.className,
            l = void 0 === t ? '' : t,
            M = e.copy,
            i = e.header,
            r = e.headerClassname,
            n = void 0 === r ? '' : r
          return N.a.createElement(
            'div',
            { className: l, 'data-block-type': 'TextBlockComponent' },
            N.a.createElement(
              c.a,
              { variant: 'e2', className: 'mb-4 ' + n },
              i
            ),
            null == M || null === (a = M.split('\n')) || void 0 === a
              ? void 0
              : a.filter(Boolean).map(function (e) {
                  return N.a.createElement(
                    c.a,
                    {
                      className: 'mb-4 last:mb-0',
                      key: e,
                      variant: 'p2',
                      md: 'p2',
                    },
                    e
                  )
                })
          )
        },
        f = function (e) {
          var a = e.className,
            t = e.label,
            l = e.side,
            M = e.theme
          return N.a.createElement(
            'div',
            {
              className: Object(r.a)(
                'max-w-7xl 3xl:max-w-10xl mx-auto relative md:mt-16',
                a
              ),
            },
            N.a.createElement(
              'div',
              {
                className: Object(r.a)('hidden md:block absolute top-0', {
                  'left-0': 'left' === l,
                  'right-0': 'right' === l,
                }),
              },
              N.a.createElement(
                D.a,
                {
                  theme: M,
                  className: Object(r.a)({
                    'ml-4': 'left' === l,
                    'mr-4': 'right' === l,
                  }),
                },
                t
              )
            )
          )
        }
    },
    '1Eu0': function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return u
      })
      var l = t('8o2o'),
        M = t('q1tI'),
        N = t.n(M),
        i = t('iuhU'),
        c = t('4YxH'),
        r = t('yKdD'),
        n = ['variant', 'children', 'className', 'theme'],
        u = function (e) {
          var a,
            t = e.variant,
            M = void 0 === t ? 'primary' : t,
            u = e.children,
            D = e.className,
            m = e.theme,
            g = Object(l.a)(e, n)
          return N.a.createElement(
            'button',
            Object.assign({}, g, {
              type: 'button',
              className: Object(i.a)(
                'h-10 border-b flex items-center group',
                ((a = {}),
                (a['border-current border-opacity-50'] = 'primary' === M),
                (a['border-transparent'] = 'secondary' === M),
                (a['text-white border-white'] = 'dark' === m),
                (a['text-black border-black'] = 'light' === m),
                a),
                D
              ),
            }),
            N.a.createElement(
              c.a,
              {
                variant: 'e2',
                as: 'span',
                className:
                  'transform transition-transform duration-300 ease-in-out group-hover:translate-x-1',
              },
              u
            ),
            N.a.createElement(r.b, { className: 'ml-6 sm:ml-10' })
          )
        }
    },
    '9Gul': function (e, a) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTE5MCIgdmlld0JveD0iMCAwIDEzIDExOTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjUgNTAyLjVMMTEuMjUgNjAzLjVWNjU5LjVMMTEuMjUgOTEyLjVDMTEuMjUgOTIxLjg3OSA5LjY3OTkxIDkyNS45ODIgOC4wODU1NSA5MzAuMTQ5TDguMDMyOTggOTMwLjI4NkM2LjM5MzI2IDkzNC41NzIgNC43NSA5MzguOTc3IDQuNzUgOTQ5QzQuNzUgOTUzLjQwOCA1LjE1OTIzIDk1Ni41MzMgNS43ODA0MyA5NTkuMDI4QzYuMzg4OTcgOTYxLjQ3MiA3LjE5NzU1IDk2My4yOTYgNy45OTM2OCA5NjUuMDkxTDguMDQyODkgOTY1LjIwMkM4LjgwMjY2IDk2Ni45MTUgOS41NDkxMyA5NjguNjE5IDEwLjEzMiA5NzAuODY4QzkuNTU3NTEgOTczLjMwMiA4LjgyNDE0IDk3NS4yMTggOC4wODU1NSA5NzcuMTQ5TDguMDMyOTggOTc3LjI4NkM2LjM5MzI2IDk4MS41NzIgNC43NSA5ODUuOTc3IDQuNzUgOTk2QzQuNzUgMTAwMC40MSA1LjE1OTIzIDEwMDMuNTMgNS43ODA0MyAxMDA2LjAzQzYuMzg4OTcgMTAwOC40NyA3LjE5NzU1IDEwMTAuMyA3Ljk5MzY4IDEwMTIuMDlMOC4wNDI4OSAxMDEyLjJDOC44NTQxNiAxMDE0LjAzIDkuNjUwMjcgMTAxNS44NSAxMC4yNDgyIDEwMTguMzNDMTAuODQ1NyAxMDIwLjgxIDExLjI0ODkgMTAyMy45OCAxMS4yNDk5IDEwMjguNDhDMTEuMjQ5OSAxMDI4LjQ5IDExLjI0OTkgMTAyOC40OSAxMS4yNDk5IDEwMjguNUwxMS4yNDk5IDExNDNWMTE5MEgxMi4yNDk5VjExNDNMMTIuMjQ5OSAxMDI4LjVDMTIuMjQ5OSAxMDI4LjQ5IDEyLjI0OTkgMTAyOC40OSAxMi4yNDk5IDEwMjguNDhMMTIuMjQ5OSA5ODEuNUMxMi4yNSA5NzYuOTI2IDExLjg0MSA5NzMuNjc3IDExLjIyMDQgOTcxLjA5OUMxMS4yMDA5IDk3MS4wMTggMTEuMTgxMSA5NzAuOTM3IDExLjE2MTEgOTcwLjg1N0MxMS44MTExIDk2OC4wMTUgMTIuMjUgOTY0LjQ4MiAxMi4yNSA5NTkuNVY5MTIuNUwxMi4yNSA2NTkuNVY2MDMuNUwxMi4yNSA1MDIuNUMxMi4yNSA1MDIuNDkyIDEyLjI1IDUwMi40ODQgMTIuMjUgNTAyLjQ3N0wxMi4yNSA0NDYuNUMxMi4yNSA0MjQuNjk1IDkuNjE2IDQxNC42MyA2Ljk3OTQ5IDQwNS43MDhDNi44MjYxIDQwNS4xODkgNi42NzI3NCA0MDQuNjc0IDYuNTE5OTUgNDA0LjE2TDYuNTE5NDUgNDA0LjE1OUM2LjI4MzgyIDQwMy4zNjcgNi4wNDk1NCA0MDIuNTggNS44MTg1IDQwMS43OUM1Ljg2NDQ1IDQwMS42MjQgNS45MTA1MiA0MDEuNDU3IDUuOTU2NzEgNDAxLjI5QzYuMjk0NDggNDAwLjA2NyA2LjYzODQ5IDM5OC44MjIgNi45ODI5NyAzOTcuNTM1QzkuNjE3OSAzODcuNjk2IDEyLjI1IDM3NS41NDkgMTIuMjUgMzUzVjI5N0wxMi4yNSA1NlYwSDExLjI1VjU2TDExLjI1IDI5N0MxMS4yNSAzMTkuNDUxIDguNjMyMDcgMzMxLjUxMiA2LjAxNzAxIDM0MS4yNzdDNS42NzQ2MSAzNDIuNTU1IDUuMzMxNzYgMzQzLjc5NiA0Ljk5NDQxIDM0NS4wMTdDMi43NTAzMiAzNTMuMTM3IDAuNzUgMzYwLjM3NiAwLjc1IDM3MkMwLjc1IDM4Ni41NDYgMi42MTk4MiAzOTQuMzc5IDQuNzc4OSA0MDEuNzk3QzIuNjIzODQgNDA5LjYwNyAwLjc1IDQxNi43NSAwLjc1IDQyOEMwLjc1IDQ0NC4yODMgMy4wOTMwOCA0NTIuMTU0IDUuNTYyMTEgNDYwLjQ0OEM1LjcxNDYgNDYwLjk2IDUuODY3NTYgNDYxLjQ3NCA2LjAyMDQ4IDQ2MS45OTFDOC42MzMwMyA0NzAuODMzIDExLjI0ODEgNDgwLjc5OCAxMS4yNSA1MDIuNDc3QzExLjI1IDUwMi40ODQgMTEuMjUgNTAyLjQ5MiAxMS4yNSA1MDIuNVpNMTEuMjUgNDgyLjExN0wxMS4yNSA0NDYuNUMxMS4yNSA0MjQuODA1IDguNjMzOTcgNDE0LjgzNiA2LjAyMDQ4IDQwNS45OTFDNS44Njc1NiA0MDUuNDc0IDUuNzE0NiA0MDQuOTYgNS41NjIxMSA0MDQuNDQ4QzUuNDc5ODcgNDA0LjE3MSA1LjM5Nzc2IDQwMy44OTYgNS4zMTU4NyA0MDMuNjJDMy4zNTQgNDEwLjgxOSAxLjc1IDQxNy42MjggMS43NSA0MjhDMS43NSA0NDQuMTM5IDQuMDYxODQgNDUxLjkwNCA2LjUxOTQ1IDQ2MC4xNTlMNi41MTk5NSA0NjAuMTZDNi42NzI3NCA0NjAuNjc0IDYuODI2MSA0NjEuMTg5IDYuOTc5NDkgNDYxLjcwOEM4LjYxMjMxIDQ2Ny4yMzQgMTAuMjQ0MiA0NzMuMTk4IDExLjI1IDQ4Mi4xMTdaTTUuMjg5NDUgMzk5Ljk0OEM1LjUzMDc4IDM5OS4wNzIgNS43NzQwMSAzOTguMTg0IDYuMDE3MDEgMzk3LjI3N0M4LjYzMjA3IDM4Ny41MTIgMTEuMjUgMzc1LjQ1MSAxMS4yNSAzNTNMMTEuMjUgMzE4LjY4M0MxMC4yNDQ4IDMyOC40NjYgOC42MTQ0MyAzMzUuNDQzIDYuOTgyOTcgMzQxLjUzNUM2LjYzODQ5IDM0Mi44MjIgNi4yOTQ0OCAzNDQuMDY3IDUuOTU2NzEgMzQ1LjI5QzMuNzE1OCAzNTMuNDAyIDEuNzUgMzYwLjUxOCAxLjc1IDM3MkMxLjc1IDM4NS4zOTUgMy4zNDI2OCAzOTMuMDIyIDUuMjg5NDUgMzk5Ljk0OFpNMTEuMjUgOTIzLjQ1OEMxMC42NDE2IDkyNi4yNjcgOS44MjYzOCA5MjguMzk3IDkuMDA5NSA5MzAuNTMyTDguOTY2OTcgOTMwLjY0M0M3LjM1NjcyIDkzNC44NTIgNS43NSA5MzkuMTMzIDUuNzUgOTQ5QzUuNzUgOTUzLjM0NSA2LjE1MzI3IDk1Ni4zODYgNi43NTA4MSA5NTguNzg2QzcuMzM4MTYgOTYxLjE0NiA4LjExNjY0IDk2Mi45MDEgOC45MTUwNCA5NjQuNzAyTDguOTU3MDYgOTY0Ljc5NkM5LjUwNjYxIDk2Ni4wMzYgMTAuMDYzMSA5NjcuMyAxMC41NTc3IDk2OC43ODRDMTAuOTgzMSA5NjYuMzM3IDExLjI1IDk2My4zNjcgMTEuMjUgOTU5LjVMMTEuMjUgOTIzLjQ1OFpNMTAuNTk4OCA5NzMuMDAzQzEwLjExMTkgOTc0LjY1MSA5LjU2MTEgOTc2LjA5IDkuMDA5NSA5NzcuNTMyTDguOTY2OTcgOTc3LjY0M0M3LjM1NjcyIDk4MS44NTIgNS43NSA5ODYuMTMzIDUuNzUgOTk2QzUuNzUgMTAwMC4zNCA2LjE1MzI3IDEwMDMuMzkgNi43NTA4MSAxMDA1Ljc5QzcuMzM4MTYgMTAwOC4xNSA4LjExNjY0IDEwMDkuOSA4LjkxNTA0IDEwMTEuN0w4Ljk1NzA2IDEwMTEuOEM5Ljc3MDc4IDEwMTMuNjMgMTAuNTk5NyAxMDE1LjUyIDExLjIyMDQgMTAxOC4xQzExLjIzMDMgMTAxOC4xNCAxMS4yNDAyIDEwMTguMTggMTEuMjQ5OSAxMDE4LjIyTDExLjI0OTkgOTgxLjVDMTEuMjQ5OSA5NzcuOTM5IDEwLjk5ODcgOTc1LjIxNSAxMC41OTg4IDk3My4wMDNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2LjUiIHkxPSIwIiB4Mj0iNi41IiB5Mj0iMTE5MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQkRCREJEIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JEQkRCRCIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=='
    },
    LR6s: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return c
      })
      var l = t('q1tI'),
        M = t.n(l),
        N = t('4YxH'),
        i = t('iuhU'),
        c = function (e) {
          var a = e.children,
            t = e.className
          return M.a.createElement(
            'div',
            {
              className: Object(i.a)(
                'bg-black bg-opacity-25 backdrop-blur-4 p-4 writing-mode-vertical transform rotate-180 pointer-events-none',
                t
              ),
            },
            M.a.createElement(
              N.a,
              { variant: 'e2', theme: 'dark', className: 'whitespace-no-wrap' },
              a
            )
          )
        }
    },
    WfcA: function (e, a) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTE5MCIgdmlld0JveD0iMCAwIDEzIDExOTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjUgNTAyLjVMMTEuMjUgNjAzLjVWNjU5LjVMMTEuMjUgOTEyLjVDMTEuMjUgOTIxLjg3OSA5LjY3OTkxIDkyNS45ODIgOC4wODU1NSA5MzAuMTQ5TDguMDMyOTggOTMwLjI4NkM2LjM5MzI2IDkzNC41NzIgNC43NSA5MzguOTc3IDQuNzUgOTQ5QzQuNzUgOTUzLjQwOCA1LjE1OTIyIDk1Ni41MzMgNS43ODA0MyA5NTkuMDI4QzYuMzg4OTcgOTYxLjQ3MiA3LjE5NzU1IDk2My4yOTYgNy45OTM2OCA5NjUuMDkxTDguMDQyODkgOTY1LjIwMkM4LjgwMjY2IDk2Ni45MTUgOS41NDkxMyA5NjguNjE5IDEwLjEzMiA5NzAuODY4QzkuNTU3NTEgOTczLjMwMiA4LjgyNDE0IDk3NS4yMTggOC4wODU1NSA5NzcuMTQ5TDguMDMyOTggOTc3LjI4NkM2LjM5MzI2IDk4MS41NzIgNC43NSA5ODUuOTc3IDQuNzUgOTk2QzQuNzUgMTAwMC40MSA1LjE1OTIyIDEwMDMuNTMgNS43ODA0MyAxMDA2LjAzQzYuMzg4OTcgMTAwOC40NyA3LjE5NzU0IDEwMTAuMyA3Ljk5MzY4IDEwMTIuMDlMOC4wNDI4OSAxMDEyLjJDOC44NTQxNiAxMDE0LjAzIDkuNjUwMjcgMTAxNS44NSAxMC4yNDgyIDEwMTguMzNDMTAuODQ1NyAxMDIwLjgxIDExLjI0ODkgMTAyMy45OCAxMS4yNDk5IDEwMjguNDhDMTEuMjQ5OSAxMDI4LjQ5IDExLjI0OTkgMTAyOC40OSAxMS4yNDk5IDEwMjguNUwxMS4yNDk5IDExNDNWMTE5MEgxMi4yNDk5VjExNDNMMTIuMjQ5OSAxMDI4LjVDMTIuMjQ5OSAxMDI4LjQ5IDEyLjI0OTkgMTAyOC40OSAxMi4yNDk5IDEwMjguNDhMMTIuMjQ5OSA5ODEuNUMxMi4yNDk5IDk3Ni45MjYgMTEuODQxIDk3My42NzcgMTEuMjIwNCA5NzEuMDk5QzExLjIwMDkgOTcxLjAxOCAxMS4xODExIDk3MC45MzcgMTEuMTYxMSA5NzAuODU3QzExLjgxMTEgOTY4LjAxNSAxMi4yNSA5NjQuNDgyIDEyLjI1IDk1OS41VjkxMi41TDEyLjI1IDY1OS41VjYwMy41TDEyLjI1IDUwMi41QzEyLjI1IDUwMi40OTIgMTIuMjUgNTAyLjQ4NCAxMi4yNSA1MDIuNDc3TDEyLjI1IDQ0Ni41QzEyLjI1IDQyNC42OTUgOS42MTYgNDE0LjYzIDYuOTc5NDkgNDA1LjcwOEM2LjgyNjA5IDQwNS4xODkgNi42NzI3NCA0MDQuNjc0IDYuNTE5OTUgNDA0LjE2TDYuNTE5NDUgNDA0LjE1OUM2LjI4MzgyIDQwMy4zNjcgNi4wNDk1NCA0MDIuNTggNS44MTg1IDQwMS43OUM1Ljg2NDQ1IDQwMS42MjQgNS45MTA1MiA0MDEuNDU3IDUuOTU2NzEgNDAxLjI5QzYuMjk0NDggNDAwLjA2NyA2LjYzODQ5IDM5OC44MjIgNi45ODI5NyAzOTcuNTM1QzkuNjE3OSAzODcuNjk2IDEyLjI1IDM3NS41NDkgMTIuMjUgMzUzVjI5N0wxMi4yNSA1NlYwSDExLjI1VjU2TDExLjI1IDI5N0MxMS4yNSAzMTkuNDUxIDguNjMyMDcgMzMxLjUxMiA2LjAxNzAxIDM0MS4yNzdDNS42NzQ2MSAzNDIuNTU1IDUuMzMxNzYgMzQzLjc5NiA0Ljk5NDQxIDM0NS4wMTdDMi43NTAzMiAzNTMuMTM3IDAuNzUgMzYwLjM3NiAwLjc1IDM3MkMwLjc1IDM4Ni41NDYgMi42MTk4MiAzOTQuMzc5IDQuNzc4OSA0MDEuNzk3QzIuNjIzODQgNDA5LjYwNyAwLjc1IDQxNi43NSAwLjc1IDQyOEMwLjc1IDQ0NC4yODMgMy4wOTMwOCA0NTIuMTU0IDUuNTYyMTEgNDYwLjQ0OEM1LjcxNDYgNDYwLjk2IDUuODY3NTYgNDYxLjQ3NCA2LjAyMDQ4IDQ2MS45OTFDOC42MzMwMyA0NzAuODMzIDExLjI0ODEgNDgwLjc5OCAxMS4yNSA1MDIuNDc3QzExLjI1IDUwMi40ODQgMTEuMjUgNTAyLjQ5MiAxMS4yNSA1MDIuNVpNMTEuMjUgNDgyLjExN0wxMS4yNSA0NDYuNUMxMS4yNSA0MjQuODA1IDguNjMzOTcgNDE0LjgzNiA2LjAyMDQ4IDQwNS45OTFDNS44Njc1NiA0MDUuNDc0IDUuNzE0NiA0MDQuOTYgNS41NjIxMSA0MDQuNDQ4QzUuNDc5ODcgNDA0LjE3MSA1LjM5Nzc2IDQwMy44OTYgNS4zMTU4NyA0MDMuNjJDMy4zNTQgNDEwLjgxOSAxLjc1IDQxNy42MjggMS43NSA0MjhDMS43NSA0NDQuMTM5IDQuMDYxODMgNDUxLjkwNCA2LjUxOTQ1IDQ2MC4xNTlMNi41MTk5NSA0NjAuMTZDNi42NzI3NCA0NjAuNjc0IDYuODI2MDkgNDYxLjE4OSA2Ljk3OTQ5IDQ2MS43MDhDOC42MTIzMSA0NjcuMjM0IDEwLjI0NDIgNDczLjE5OCAxMS4yNSA0ODIuMTE3Wk01LjI4OTQ1IDM5OS45NDhDNS41MzA3OCAzOTkuMDcyIDUuNzc0MDEgMzk4LjE4NCA2LjAxNzAxIDM5Ny4yNzdDOC42MzIwNyAzODcuNTEyIDExLjI1IDM3NS40NTEgMTEuMjUgMzUzTDExLjI1IDMxOC42ODNDMTAuMjQ0OCAzMjguNDY2IDguNjE0NDMgMzM1LjQ0MyA2Ljk4Mjk3IDM0MS41MzVDNi42Mzg0OSAzNDIuODIyIDYuMjk0NDggMzQ0LjA2NyA1Ljk1NjcxIDM0NS4yOUMzLjcxNTggMzUzLjQwMiAxLjc1IDM2MC41MTggMS43NSAzNzJDMS43NSAzODUuMzk1IDMuMzQyNjggMzkzLjAyMiA1LjI4OTQ1IDM5OS45NDhaTTExLjI1IDkyMy40NThDMTAuNjQxNiA5MjYuMjY3IDkuODI2MzggOTI4LjM5NyA5LjAwOTUgOTMwLjUzMkw4Ljk2Njk3IDkzMC42NDNDNy4zNTY3MiA5MzQuODUyIDUuNzUgOTM5LjEzMyA1Ljc1IDk0OUM1Ljc1IDk1My4zNDUgNi4xNTMyNyA5NTYuMzg2IDYuNzUwODEgOTU4Ljc4NkM3LjMzODE2IDk2MS4xNDYgOC4xMTY2NCA5NjIuOTAxIDguOTE1MDQgOTY0LjcwMkw4Ljk1NzA2IDk2NC43OTZDOS41MDY2MSA5NjYuMDM2IDEwLjA2MzEgOTY3LjMgMTAuNTU3NyA5NjguNzg0QzEwLjk4MzEgOTY2LjMzNyAxMS4yNSA5NjMuMzY3IDExLjI1IDk1OS41TDExLjI1IDkyMy40NThaTTEwLjU5ODggOTczLjAwM0MxMC4xMTE5IDk3NC42NTEgOS41NjExIDk3Ni4wOSA5LjAwOTUgOTc3LjUzMkw4Ljk2Njk3IDk3Ny42NDNDNy4zNTY3MiA5ODEuODUyIDUuNzUgOTg2LjEzMyA1Ljc1IDk5NkM1Ljc1IDEwMDAuMzQgNi4xNTMyNyAxMDAzLjM5IDYuNzUwODEgMTAwNS43OUM3LjMzODE2IDEwMDguMTUgOC4xMTY2NCAxMDA5LjkgOC45MTUwNCAxMDExLjdMOC45NTcwNiAxMDExLjhDOS43NzA3OCAxMDEzLjYzIDEwLjU5OTcgMTAxNS41MiAxMS4yMjA0IDEwMTguMUMxMS4yMzAzIDEwMTguMTQgMTEuMjQwMiAxMDE4LjE4IDExLjI0OTkgMTAxOC4yMkwxMS4yNDk5IDk4MS41QzExLjI0OTkgOTc3LjkzOSAxMC45OTg3IDk3NS4yMTUgMTAuNTk4OCA5NzMuMDAzWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNi41IiB5MT0iMCIgeDI9IjYuNSIgeTI9IjExOTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjAwMjQzMzc1IiBzdG9wLWNvbG9yPSIjNkQ2RDZEIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRGNEY0RiIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=='
    },
    tCiu: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return D
      })
      var l = t('q1tI'),
        M = t.n(l),
        N = t('iuhU'),
        i = t('4YxH'),
        c = t('WfcA'),
        r = t.n(c),
        n = t('9Gul'),
        u = t.n(n),
        D = function (e) {
          var a = e.children,
            t = e.className,
            l = e.theme,
            c = 'dark' === l ? r.a : u.a
          return M.a.createElement(
            'div',
            {
              className: Object(N.a)(
                'writing-mode-vertical transform rotate-180 pointer-events-none text-gray-3 flex',
                { 'text-gray-3': 'dark' === l, 'text-gray-4': 'light' === l },
                t
              ),
            },
            M.a.createElement('img', {
              src: c,
              alt: '',
              className: 'transform rotate-180',
            }),
            M.a.createElement(
              i.a,
              { variant: 'h4', className: 'mt-8 whitespace-no-wrap' },
              a
            )
          )
        }
    },
    wnQI: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return r
      })
      var l = t('q1tI'),
        M = t.n(l),
        N = t('ZMKu'),
        i = t('7l9Y'),
        c = t.n(i),
        r = function (e) {
          var a = e.image,
            t = e.alt,
            i = e.videoUrl,
            r = e.videoOptions,
            n = Object(l.useState)(!1),
            u = n[0],
            D = n[1],
            m = (r || {}).controls,
            g = void 0 === m || m
          return M.a.createElement(
            N.a,
            null,
            M.a.createElement('img', {
              key: 'image',
              src: a + '?q=30&w=2000',
              className: 'absolute h-full w-full object-cover',
              alt: t || '',
            }),
            M.a.createElement(
              N.b.div,
              { key: 'video', animate: { opacity: u ? 1 : 0 } },
              M.a.createElement(c.a, {
                className: 'absolute top-0 left-0',
                url: i,
                controls: g,
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
//# sourceMappingURL=97a43d9b344ecab73f713021eb17a5f17be7e44c-82fc8e31829c2d52f57b.js.map
