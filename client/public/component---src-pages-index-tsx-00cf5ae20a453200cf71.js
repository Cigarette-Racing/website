(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1Eu0":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var M=a("8o2o"),l=a("q1tI"),n=a.n(l),N=a("iuhU"),i=a("4YxH"),c=a("yKdD"),u=["variant","children","className","theme"],r=function(e){var t,a=e.variant,l=void 0===a?"primary":a,r=e.children,D=e.className,j=e.theme,o=Object(M.a)(e,u);return n.a.createElement("button",Object.assign({},o,{type:"button",className:Object(N.a)("h-10 border-b flex items-center group",(t={},t["border-current border-opacity-50"]="primary"===l,t["border-transparent"]="secondary"===l,t["text-white border-white"]="dark"===j,t["text-black border-black"]="light"===j,t),D)}),n.a.createElement(i.a,{variant:"e2",as:"span",className:"transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"},r),n.a.createElement(c.b,{className:"ml-6 sm:ml-10"}))}},"7Bp7":function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var M=a("q1tI"),l=a.n(M),n=a("iuhU"),N=function(e){var t=e.current,a=e.total,N=e.variant,i=e.onClick,c=Object(M.useMemo)((function(){return Array.from({length:a})}),[a]);return l.a.createElement("div",{className:Object(n.a)("flex",{"flex-row space-x-2":"horizontal"===N,"flex-col space-y-2":"vertical"===N})},c.map((function(e,M){var N=M+1,c=N===t;return l.a.createElement("button",{key:M,className:Object(n.a)("w-6 h-6 border rounded-full border-transparent flex justify-center items-center cursor-default",{"border-red":c,"cursor-pointer pointer-events-auto":!!i}),onClick:i?function(){return i(N)}:void 0,disabled:!i},l.a.createElement("div",{className:"w-1 h-1 bg-white rounded-full"},l.a.createElement("span",{className:"sr-only"},N," of ",a)))})))}},"9Gul":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTE5MCIgdmlld0JveD0iMCAwIDEzIDExOTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjUgNTAyLjVMMTEuMjUgNjAzLjVWNjU5LjVMMTEuMjUgOTEyLjVDMTEuMjUgOTIxLjg3OSA5LjY3OTkxIDkyNS45ODIgOC4wODU1NSA5MzAuMTQ5TDguMDMyOTggOTMwLjI4NkM2LjM5MzI2IDkzNC41NzIgNC43NSA5MzguOTc3IDQuNzUgOTQ5QzQuNzUgOTUzLjQwOCA1LjE1OTIzIDk1Ni41MzMgNS43ODA0MyA5NTkuMDI4QzYuMzg4OTcgOTYxLjQ3MiA3LjE5NzU1IDk2My4yOTYgNy45OTM2OCA5NjUuMDkxTDguMDQyODkgOTY1LjIwMkM4LjgwMjY2IDk2Ni45MTUgOS41NDkxMyA5NjguNjE5IDEwLjEzMiA5NzAuODY4QzkuNTU3NTEgOTczLjMwMiA4LjgyNDE0IDk3NS4yMTggOC4wODU1NSA5NzcuMTQ5TDguMDMyOTggOTc3LjI4NkM2LjM5MzI2IDk4MS41NzIgNC43NSA5ODUuOTc3IDQuNzUgOTk2QzQuNzUgMTAwMC40MSA1LjE1OTIzIDEwMDMuNTMgNS43ODA0MyAxMDA2LjAzQzYuMzg4OTcgMTAwOC40NyA3LjE5NzU1IDEwMTAuMyA3Ljk5MzY4IDEwMTIuMDlMOC4wNDI4OSAxMDEyLjJDOC44NTQxNiAxMDE0LjAzIDkuNjUwMjcgMTAxNS44NSAxMC4yNDgyIDEwMTguMzNDMTAuODQ1NyAxMDIwLjgxIDExLjI0ODkgMTAyMy45OCAxMS4yNDk5IDEwMjguNDhDMTEuMjQ5OSAxMDI4LjQ5IDExLjI0OTkgMTAyOC40OSAxMS4yNDk5IDEwMjguNUwxMS4yNDk5IDExNDNWMTE5MEgxMi4yNDk5VjExNDNMMTIuMjQ5OSAxMDI4LjVDMTIuMjQ5OSAxMDI4LjQ5IDEyLjI0OTkgMTAyOC40OSAxMi4yNDk5IDEwMjguNDhMMTIuMjQ5OSA5ODEuNUMxMi4yNSA5NzYuOTI2IDExLjg0MSA5NzMuNjc3IDExLjIyMDQgOTcxLjA5OUMxMS4yMDA5IDk3MS4wMTggMTEuMTgxMSA5NzAuOTM3IDExLjE2MTEgOTcwLjg1N0MxMS44MTExIDk2OC4wMTUgMTIuMjUgOTY0LjQ4MiAxMi4yNSA5NTkuNVY5MTIuNUwxMi4yNSA2NTkuNVY2MDMuNUwxMi4yNSA1MDIuNUMxMi4yNSA1MDIuNDkyIDEyLjI1IDUwMi40ODQgMTIuMjUgNTAyLjQ3N0wxMi4yNSA0NDYuNUMxMi4yNSA0MjQuNjk1IDkuNjE2IDQxNC42MyA2Ljk3OTQ5IDQwNS43MDhDNi44MjYxIDQwNS4xODkgNi42NzI3NCA0MDQuNjc0IDYuNTE5OTUgNDA0LjE2TDYuNTE5NDUgNDA0LjE1OUM2LjI4MzgyIDQwMy4zNjcgNi4wNDk1NCA0MDIuNTggNS44MTg1IDQwMS43OUM1Ljg2NDQ1IDQwMS42MjQgNS45MTA1MiA0MDEuNDU3IDUuOTU2NzEgNDAxLjI5QzYuMjk0NDggNDAwLjA2NyA2LjYzODQ5IDM5OC44MjIgNi45ODI5NyAzOTcuNTM1QzkuNjE3OSAzODcuNjk2IDEyLjI1IDM3NS41NDkgMTIuMjUgMzUzVjI5N0wxMi4yNSA1NlYwSDExLjI1VjU2TDExLjI1IDI5N0MxMS4yNSAzMTkuNDUxIDguNjMyMDcgMzMxLjUxMiA2LjAxNzAxIDM0MS4yNzdDNS42NzQ2MSAzNDIuNTU1IDUuMzMxNzYgMzQzLjc5NiA0Ljk5NDQxIDM0NS4wMTdDMi43NTAzMiAzNTMuMTM3IDAuNzUgMzYwLjM3NiAwLjc1IDM3MkMwLjc1IDM4Ni41NDYgMi42MTk4MiAzOTQuMzc5IDQuNzc4OSA0MDEuNzk3QzIuNjIzODQgNDA5LjYwNyAwLjc1IDQxNi43NSAwLjc1IDQyOEMwLjc1IDQ0NC4yODMgMy4wOTMwOCA0NTIuMTU0IDUuNTYyMTEgNDYwLjQ0OEM1LjcxNDYgNDYwLjk2IDUuODY3NTYgNDYxLjQ3NCA2LjAyMDQ4IDQ2MS45OTFDOC42MzMwMyA0NzAuODMzIDExLjI0ODEgNDgwLjc5OCAxMS4yNSA1MDIuNDc3QzExLjI1IDUwMi40ODQgMTEuMjUgNTAyLjQ5MiAxMS4yNSA1MDIuNVpNMTEuMjUgNDgyLjExN0wxMS4yNSA0NDYuNUMxMS4yNSA0MjQuODA1IDguNjMzOTcgNDE0LjgzNiA2LjAyMDQ4IDQwNS45OTFDNS44Njc1NiA0MDUuNDc0IDUuNzE0NiA0MDQuOTYgNS41NjIxMSA0MDQuNDQ4QzUuNDc5ODcgNDA0LjE3MSA1LjM5Nzc2IDQwMy44OTYgNS4zMTU4NyA0MDMuNjJDMy4zNTQgNDEwLjgxOSAxLjc1IDQxNy42MjggMS43NSA0MjhDMS43NSA0NDQuMTM5IDQuMDYxODQgNDUxLjkwNCA2LjUxOTQ1IDQ2MC4xNTlMNi41MTk5NSA0NjAuMTZDNi42NzI3NCA0NjAuNjc0IDYuODI2MSA0NjEuMTg5IDYuOTc5NDkgNDYxLjcwOEM4LjYxMjMxIDQ2Ny4yMzQgMTAuMjQ0MiA0NzMuMTk4IDExLjI1IDQ4Mi4xMTdaTTUuMjg5NDUgMzk5Ljk0OEM1LjUzMDc4IDM5OS4wNzIgNS43NzQwMSAzOTguMTg0IDYuMDE3MDEgMzk3LjI3N0M4LjYzMjA3IDM4Ny41MTIgMTEuMjUgMzc1LjQ1MSAxMS4yNSAzNTNMMTEuMjUgMzE4LjY4M0MxMC4yNDQ4IDMyOC40NjYgOC42MTQ0MyAzMzUuNDQzIDYuOTgyOTcgMzQxLjUzNUM2LjYzODQ5IDM0Mi44MjIgNi4yOTQ0OCAzNDQuMDY3IDUuOTU2NzEgMzQ1LjI5QzMuNzE1OCAzNTMuNDAyIDEuNzUgMzYwLjUxOCAxLjc1IDM3MkMxLjc1IDM4NS4zOTUgMy4zNDI2OCAzOTMuMDIyIDUuMjg5NDUgMzk5Ljk0OFpNMTEuMjUgOTIzLjQ1OEMxMC42NDE2IDkyNi4yNjcgOS44MjYzOCA5MjguMzk3IDkuMDA5NSA5MzAuNTMyTDguOTY2OTcgOTMwLjY0M0M3LjM1NjcyIDkzNC44NTIgNS43NSA5MzkuMTMzIDUuNzUgOTQ5QzUuNzUgOTUzLjM0NSA2LjE1MzI3IDk1Ni4zODYgNi43NTA4MSA5NTguNzg2QzcuMzM4MTYgOTYxLjE0NiA4LjExNjY0IDk2Mi45MDEgOC45MTUwNCA5NjQuNzAyTDguOTU3MDYgOTY0Ljc5NkM5LjUwNjYxIDk2Ni4wMzYgMTAuMDYzMSA5NjcuMyAxMC41NTc3IDk2OC43ODRDMTAuOTgzMSA5NjYuMzM3IDExLjI1IDk2My4zNjcgMTEuMjUgOTU5LjVMMTEuMjUgOTIzLjQ1OFpNMTAuNTk4OCA5NzMuMDAzQzEwLjExMTkgOTc0LjY1MSA5LjU2MTEgOTc2LjA5IDkuMDA5NSA5NzcuNTMyTDguOTY2OTcgOTc3LjY0M0M3LjM1NjcyIDk4MS44NTIgNS43NSA5ODYuMTMzIDUuNzUgOTk2QzUuNzUgMTAwMC4zNCA2LjE1MzI3IDEwMDMuMzkgNi43NTA4MSAxMDA1Ljc5QzcuMzM4MTYgMTAwOC4xNSA4LjExNjY0IDEwMDkuOSA4LjkxNTA0IDEwMTEuN0w4Ljk1NzA2IDEwMTEuOEM5Ljc3MDc4IDEwMTMuNjMgMTAuNTk5NyAxMDE1LjUyIDExLjIyMDQgMTAxOC4xQzExLjIzMDMgMTAxOC4xNCAxMS4yNDAyIDEwMTguMTggMTEuMjQ5OSAxMDE4LjIyTDExLjI0OTkgOTgxLjVDMTEuMjQ5OSA5NzcuOTM5IDEwLjk5ODcgOTc1LjIxNSAxMC41OTg4IDk3My4wMDNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2LjUiIHkxPSIwIiB4Mj0iNi41IiB5Mj0iMTE5MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQkRCREJEIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JEQkRCRCIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="},Kteb:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var M=a("q1tI"),l=a.n(M),n=a("iuhU"),N=a("yKdD"),i=a("4YxH"),c=function(e){var t=e.children,a=e.className,M=e.subtitle;return l.a.createElement("div",{className:Object(n.a)("flex items-center",a)},l.a.createElement(N.a,{className:"mr-1 text-red",style:{fontSize:"40px"}}),l.a.createElement("div",null,!!M&&l.a.createElement(i.a,{variant:"e2",className:"text-red"},M),l.a.createElement(i.a,{variant:"e2",theme:"dark"},t)))}},LR6s:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var M=a("q1tI"),l=a.n(M),n=a("4YxH"),N=a("iuhU"),i=function(e){var t=e.children,a=e.className;return l.a.createElement("div",{className:Object(N.a)("bg-black bg-opacity-25 backdrop-blur-4 p-4 writing-mode-vertical transform rotate-180 pointer-events-none",a)},l.a.createElement(n.a,{variant:"e2",theme:"dark",className:"whitespace-no-wrap"},t))}},QeBL:function(e,t,a){"use strict";a.r(t);var M=a("q1tI"),l=a.n(M),n=a("iuhU"),N=a("nP3w"),i=a("Wbzz"),c=a("9Dj+"),u=a("H8eV"),r=a("Kteb"),D=a("4YxH"),j=a("1Eu0"),o=a("yKdD"),s=a("+qZG"),m=a("7Bp7"),I=function(e){Object(s.a)(e);var t=Object(M.useState)(),a=t[0],N=t[1],i=Object(M.useState)(1),c=i[0],u=i[1],r=Object(M.useState)(!1),D=r[0],j=r[1];return Object(M.useEffect)((function(){if(window.IntersectionObserver){var e=Array.from(document.querySelectorAll("[data-scrollsection]")),t=new Map(Array.from(e).map((function(e){return[e,0]}))),a=new IntersectionObserver((function(a){a.forEach((function(e){var a=e.target,M=e.intersectionRatio;t.set(a,M)}));var M,l,n=function(e,t){if(0!==e.size){var a=Array.from(e.entries()).reduce((function(e,t){return t[1]>e[1]?t:e}));if(!(a[1]<t))return a[0]}}(t,.3);if(n){var N=(M=n,void 0===(l=e.findIndex((function(e){return e===M})))?0:l+1);u(N),j(!0)}else j(!1)}),{threshold:[.01,.25,.75,1]});return e.forEach((function(e){return a.observe(e)})),N(e),function(){return a.disconnect()}}}),[]),a?l.a.createElement("div",{className:Object(n.a)("fixed right-0 z-30 pointer-events-none h-screen flex items-center pr-1 sm:pr-2 md:pr-3 lg:pr-4 transition-opacity duration-200",{"opacity-0":!D,"opacity-100":D})},l.a.createElement(m.a,{current:c,total:a.length,variant:"vertical"})):null},g=a("pSK3"),d=a("eSoc"),T=a("6oZt"),A=function(e){var t=e.backgroundImage,a=e.boatImage,M=e.contentHeader,n=e.subtitle,N=e.boatName,c=e.url;return l.a.createElement("div",{className:"bg-cover relative justify-center md:w-1/2 md:min-h-screen bg-black text-white pt-4 md:pt-0",style:{backgroundImage:"url("+t+"?q=30&w=1500)"}},l.a.createElement(i.Link,{to:"/boats/"+c,className:"absolute inset-0 z-10",style:{background:"linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)"}}),l.a.createElement("div",{className:"flex flex-col h-full relative justify-between lg:justify-end pointer-events-none"},l.a.createElement("div",{className:"relative z-0 h-full"},l.a.createElement("div",{className:"px-2 py-12 md:py-0 md:px-4 flex h-full justify-center"},l.a.createElement("img",{src:a,className:"w-full self-center max-w-3/4 md:max-w-11/12"}))),l.a.createElement("div",{className:"md:absolute flex flex-col justify-between md:justify-end h-full w-full"},l.a.createElement("div",{className:"relative z-20 px-4 md:px order-first md:order-none"},l.a.createElement(r.a,{subtitle:n,className:"self-start -ml-2 sm:self-auto mb:ml-0"},M)),l.a.createElement("div",{className:"relative z-20 px-4 md:px-8 pb-6 md:pb-12"},l.a.createElement(D.a,{variant:"h3",xl:"h2",className:"mb-4 md:mb-8"},N),l.a.createElement(i.Link,{to:"/boats/"+c,className:"pointer-events-auto"},l.a.createElement(j.a,null,"Learn More"))))))},O=a("7l9Y"),E=a.n(O),x=a("ZMKu"),z=a("tKSW"),y=a("Z4UL"),L=(a("6y2Z"),a("lSEo")),w=a("mMPx"),k=a("Z29Q"),v=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var a=Object(w.a)({width:k.a?window.innerWidth:e,height:k.a?window.innerHeight:t}),l=a[0],n=a[1];return Object(M.useEffect)((function(){if(k.a){var e=function(){n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[]),l},S=a("MIOh"),b=a("WJip"),f=function(e){var t=e.image,a=e.videoUrl,n=Object(M.useState)(!1),N=n[0],i=n[1];return l.a.createElement(x.a,null,l.a.createElement("img",{key:"image",src:t+"?q=30&w=2000&fm=jpg",className:"absolute top-0 left-0 h-screen w-full object-cover"}),l.a.createElement(x.b.div,{key:"video",animate:{opacity:N?1:0}},l.a.createElement(E.a,{className:"absolute top-0 left-0",url:a,controls:!1,muted:!0,loop:!0,playing:!0,onReady:function(){i(!0)},config:{file:{attributes:{className:"object-cover"}}},width:"100%",height:"100%"})))},Q=(t.default=function(e){var t,a,M,n,N,s,m,T,O,E,x,z,y,L,w,k,v,S,b,Q,C,Y,Z,G,W,P,V,R,J,B=e.data,H=null===(t=B.craftAPI.home)||void 0===t||null===(a=t.singleMedia)||void 0===a||null===(M=a[0])||void 0===M||null===(n=M.image)||void 0===n||null===(N=n[0])||void 0===N?void 0:N.url,F=null===(s=B.craftAPI.home)||void 0===s||null===(m=s.singleMedia)||void 0===m||null===(T=m[0])||void 0===T?void 0:T.videoURL,q=(null===(O=B.craftAPI.home)||void 0===O||null===(E=O.boatLink)||void 0===E?void 0:E[0])||{},K=(null===(x=B.craftAPI.home)||void 0===x||null===(z=x.textBlock)||void 0===z?void 0:z[0])||{},X=(null===(y=B.craftAPI.home)||void 0===y?void 0:y.home2UpBoats)||[],_=(null===(L=B.craftAPI.home)||void 0===L||null===(w=L.differenceSection)||void 0===w?void 0:w[0])||{},$=(null===(k=B.craftAPI.home)||void 0===k||null===(v=k.connectSection)||void 0===v?void 0:v[0])||{},ee=null===(S=B.craftAPI.home)||void 0===S||null===(b=S.connectSectionBackground)||void 0===b||null===(Q=b[0])||void 0===Q?void 0:Q.url;null===(C=B.craftAPI.home)||void 0===C||null===(Y=C.imageObject)||void 0===Y||null===(Z=Y[0])||void 0===Z||null===(G=Z.image)||void 0===G||null===(W=G[0])||void 0===W||W.url;return l.a.createElement(c.a,null,l.a.createElement(u.a,{image:H}),l.a.createElement(I,null),l.a.createElement("section",{className:"relative min-h-screen flex justify-center items-end overflow-hidden","data-scrollsection":!0},l.a.createElement("div",{className:"absolute top-0 left-0 h-screen w-full"},l.a.createElement(f,{image:H,videoUrl:F})),l.a.createElement("div",{className:"absolute top-0 left-0 h-screen w-full pointer-events-none",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 51.47%, rgba(0, 0, 0, 0.3) 100%)"}}),l.a.createElement(g.a,{variant:"primary",icon:o.n,size:"lg",className:"absolute top-2/5 sm:hidden hidden"}),l.a.createElement("div",{className:"relative z-10 max-w-6xl mb-12 px-4 sm:mb-24 text-white text-left flex flex-col items-start md:items-center"},l.a.createElement(r.a,{className:"mb-4 self-start -ml-2 sm:self-auto mb:ml-0"},null===(P=q.boatMetadata)||void 0===P||null===(V=P[0])||void 0===V?void 0:V.menuName),l.a.createElement(D.a,{variant:"h2",md:"h1",className:"mb-10 "},K.header),l.a.createElement(D.a,{variant:"p1",className:"mb-10 max-w-2xl hidden sm:block"},K.copy),l.a.createElement("div",{className:"flex items-center space-x-6"},l.a.createElement(i.Link,{to:"/boats/"+q.slug},l.a.createElement(j.a,null,"Learn More"))))),l.a.createElement("section",{className:"relative md:flex","data-scrollsection":!0},X.map((function(e){var t,a,M,n,N,i,c,u,r,D,j,o,s,m,I,g;return l.a.createElement(A,{key:null===(t=e.boatLink)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.title,backgroundImage:null===(M=e.background)||void 0===M||null===(n=M[0])||void 0===n?void 0:n.url,boatImage:null===(N=e.boatImage)||void 0===N||null===(i=N[0])||void 0===i||null===(c=i.image)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.url,contentHeader:null===(r=e.boatLink)||void 0===r||null===(D=r[0])||void 0===D||null===(j=D.boatMetadata)||void 0===j||null===(o=j[0])||void 0===o?void 0:o.menuCategory,subtitle:e.textBlockCopy,boatName:null===(s=e.boatLink)||void 0===s||null===(m=s[0])||void 0===m?void 0:m.title,url:null===(I=e.boatLink)||void 0===I||null===(g=I[0])||void 0===g?void 0:g.slug})}))),l.a.createElement("section",{className:"min-h-screen relative flex justify-center items-end","data-scrollsection":!0},l.a.createElement("img",{src:(null===(R=_.backgroundImage)||void 0===R||null===(J=R[0])||void 0===J?void 0:J.url)+"?q=30&w=2000",className:"absolute top-0 left-0 h-screen w-full object-cover"}),l.a.createElement("div",{className:"absolute top-0 left-0 h-screen w-full",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)"}}),l.a.createElement("div",{className:"relative z-10 max-w-6xl mb-12 px-4 sm:mb-24 text-white text-left sm:text-center flex flex-col items-start sm:items-center"},l.a.createElement(r.a,{className:"mb-4 self-start -ml-2 sm:self-auto mb:ml-0"},_.subtitle),l.a.createElement(D.a,{variant:"h2",md:"h1",className:"mb-10"},_.theTitle),l.a.createElement("div",{className:"flex items-center space-x-6"}))),l.a.createElement(h,{newsItems:p(B.craftAPI.news||[])}),l.a.createElement("section",{className:"relative xl:py-48 py-40 bg-cover bg-center min-h-screen sm:min-h-0 flex sm:block items-center",style:{backgroundImage:"url("+ee+")"}},l.a.createElement("div",{className:"absolute top-0 left-0 h-full w-full bg-black opacity-50"}),l.a.createElement("div",{className:"max-w-8xl sm:mx-auto flex flex-col md:flex-row md:items-center md:justify-around justify-center text-white"},l.a.createElement("div",{className:"relative pb-16 px-4"},l.a.createElement(D.a,{variant:"h2"},$.theTitle)),l.a.createElement("div",{className:"relative px-4 max-w-md"},l.a.createElement(U,{content:$.theContent,successMessage:$.successMessage})))),l.a.createElement(d.b,null),l.a.createElement(d.a,null))},Object(S.a)((function(e){return{emailAddress:e.emailAddress}})));function U(e){var t=e.content,a=e.successMessage;return l.a.createElement(N.b,{onSubmit:Q,render:function(e){var i=e.handleSubmit,c=e.submitSucceeded;return l.a.createElement(M.Fragment,null,!c&&l.a.createElement(M.Fragment,null,l.a.createElement("div",{className:"flex border-b border-gray-3 mb-10 h-10 items-center"},l.a.createElement("form",{name:"stay-connected",method:"POST",onSubmit:i,"data-netlify":"true","netlify-honeypot":"bot-field",className:"flex items-center justify-between w-full"},l.a.createElement("input",{type:"hidden",name:"bot-field"}),l.a.createElement(N.a,{component:"input",type:"hidden",name:"form-name",initialValue:"stay-connected"}),l.a.createElement("label",{htmlFor:"emailAddress",className:"sr-only"},"Email Address"),l.a.createElement(N.a,{id:"emailAddress",name:"emailAddress",className:"block w-full py-3 bg-transparent text-white input-placeholder font-body text-sm tracking-wide",placeholder:"Enter Email Address",validate:T.b,render:function(e){var t=e.input,a=e.meta;return l.a.createElement(M.Fragment,null,l.a.createElement(D.a,{className:Object(n.a)("absolute opacity-0 transform -translate-y-4 transition duration-150",{"opacity-100 -translate-y-6":a.invalid&&a.touched}),variant:"p3"},"Please enter a valid email address"),l.a.createElement("input",Object.assign({},t,{autoComplete:"off",placeholder:"ENTER EMAIL ADDRESS",className:Object(n.a)("font-body text-sm appearance-none bg-transparent outline-none w-full py-3",{"placeholder-white":!a.invalid||!a.touched},{"placeholder-grey":a.invalid&&a.touched})})),l.a.createElement("button",{type:"submit","aria-label":"Submit",className:Object(n.a)("p-4 -mr-4 disabled:opacity-50",{"cursor-not-allowed":a.invalid&&a.touched}),disabled:a.invalid&&a.touched},l.a.createElement(o.o,{className:"w-4 h-4"})))}}))),l.a.createElement(D.a,{variant:"p2",className:"pb-16"},t)),c&&l.a.createElement(D.a,{variant:"p1",className:"pb-16"},a))}})}var p=function(e){return e.map((function(e){var t,a,M,l;return{content:e.textContent,image:null===(t=e.imageObject)||void 0===t||null===(a=t[0])||void 0===a||null===(M=a.image)||void 0===M||null===(l=M[0])||void 0===l?void 0:l.url,siteName:e.siteName,title:e.title,url:e.urlLink}}))};function h(e){var t=e.newsItems,a=Object(M.useState)(0),N=a[0],i=a[1],c=Object(M.useState)(!1),u=c[0],r=c[1],j=Object(L.a)("(max-width: 767px)"),s=Object(z.o)(0,t.length,N),m=Object(z.o)(0,t.length,N+1),I=function(){i((function(e){return e+1}))},d=function(){i((function(e){return e-1}))};Object(M.useEffect)((function(){Object(b.a)(t.map((function(e){return e.image+"?q=30&w=1000&fm=jpg"})))}),[]);var T=v(),A=.3*T.width>421?"210":.3*T.width/2;return l.a.createElement("section",{className:"md:p-4 py-12 md:py-40 bg-white flex sm:block items-center overflow-hidden"},l.a.createElement("div",{className:"max-w-8xl md:mx-auto md:flex"},l.a.createElement("div",{className:"pl-4 md:w-1/2 md:pl-8 lg:pl-16 xl:pl-24"},l.a.createElement(D.a,{variant:"h3",md:"h2",className:"mb-4 md:mb-16"},"News ",l.a.createElement("br",{className:"hidden md:block"}),"& Press"),l.a.createElement(y.c,{className:"mt-10 space-x-4 hidden md:block",theme:"light",onClickNext:I,onClickPrev:d})),l.a.createElement("div",{className:"flex md:w-1/2 space-x-6 relative"},l.a.createElement("div",{key:t[s].url,className:"group relative flex-1"},O(t[s])),l.a.createElement("div",{key:t[m].url,className:"hidden md:block group relative flex-1",onMouseEnter:function(){r(!0)},onMouseLeave:function(){r(!1)}},O(t[m])),l.a.createElement(g.a,{className:Object(n.a)("absolute z-10 opacity-0 bg-white",u&&"opacity-100"),style:{top:A+"px",right:"0"},icon:o.b,iconClassName:"text-black",variant:"primary",onClick:I,onMouseEnter:function(){r(!0)},"aria-label":"Next"})),l.a.createElement("div",{className:"flex justify-start pl-4 md-pl-0"},l.a.createElement(y.c,{className:"mt-10 space-x-4 md:hidden",theme:"light",onClickNext:I,onClickPrev:d}))));function O(e){var t=j?"100%":.3*T.width,a=j?"100%":"421px";return l.a.createElement("a",{href:e.url,target:"_blank",key:e.url,className:"block w-screen",style:{width:t,maxWidth:a,minHeight:T.width/2}},l.a.createElement("div",{style:{paddingTop:"100%"},className:"relative xs:mx-0 mb-6"},l.a.createElement("img",{src:e.image+"?q=30&w=1000&fm=jpg",alt:"",className:"absolute top-0 left-0 h-full w-full object-cover object-center"}),l.a.createElement("div",{className:"absolute top-0 mt-6 ml-4 bg-black bg-opacity-25 rounded-full py-2 px-4 flex items-center backdrop-blur-3 text-white"},l.a.createElement(o.h,{className:"mr-2"}),l.a.createElement(D.a,{variant:"p3",as:"span"},e.siteName))),l.a.createElement(D.a,{variant:"h5",md:"h4",className:"pl-4 md:pl-0 mb-2"},e.title),l.a.createElement(D.a,{variant:"p3",md:"p2",className:"pl-4 md:pl-0 text-gray-2"},e.content))}}},WfcA:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTE5MCIgdmlld0JveD0iMCAwIDEzIDExOTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjUgNTAyLjVMMTEuMjUgNjAzLjVWNjU5LjVMMTEuMjUgOTEyLjVDMTEuMjUgOTIxLjg3OSA5LjY3OTkxIDkyNS45ODIgOC4wODU1NSA5MzAuMTQ5TDguMDMyOTggOTMwLjI4NkM2LjM5MzI2IDkzNC41NzIgNC43NSA5MzguOTc3IDQuNzUgOTQ5QzQuNzUgOTUzLjQwOCA1LjE1OTIyIDk1Ni41MzMgNS43ODA0MyA5NTkuMDI4QzYuMzg4OTcgOTYxLjQ3MiA3LjE5NzU1IDk2My4yOTYgNy45OTM2OCA5NjUuMDkxTDguMDQyODkgOTY1LjIwMkM4LjgwMjY2IDk2Ni45MTUgOS41NDkxMyA5NjguNjE5IDEwLjEzMiA5NzAuODY4QzkuNTU3NTEgOTczLjMwMiA4LjgyNDE0IDk3NS4yMTggOC4wODU1NSA5NzcuMTQ5TDguMDMyOTggOTc3LjI4NkM2LjM5MzI2IDk4MS41NzIgNC43NSA5ODUuOTc3IDQuNzUgOTk2QzQuNzUgMTAwMC40MSA1LjE1OTIyIDEwMDMuNTMgNS43ODA0MyAxMDA2LjAzQzYuMzg4OTcgMTAwOC40NyA3LjE5NzU0IDEwMTAuMyA3Ljk5MzY4IDEwMTIuMDlMOC4wNDI4OSAxMDEyLjJDOC44NTQxNiAxMDE0LjAzIDkuNjUwMjcgMTAxNS44NSAxMC4yNDgyIDEwMTguMzNDMTAuODQ1NyAxMDIwLjgxIDExLjI0ODkgMTAyMy45OCAxMS4yNDk5IDEwMjguNDhDMTEuMjQ5OSAxMDI4LjQ5IDExLjI0OTkgMTAyOC40OSAxMS4yNDk5IDEwMjguNUwxMS4yNDk5IDExNDNWMTE5MEgxMi4yNDk5VjExNDNMMTIuMjQ5OSAxMDI4LjVDMTIuMjQ5OSAxMDI4LjQ5IDEyLjI0OTkgMTAyOC40OSAxMi4yNDk5IDEwMjguNDhMMTIuMjQ5OSA5ODEuNUMxMi4yNDk5IDk3Ni45MjYgMTEuODQxIDk3My42NzcgMTEuMjIwNCA5NzEuMDk5QzExLjIwMDkgOTcxLjAxOCAxMS4xODExIDk3MC45MzcgMTEuMTYxMSA5NzAuODU3QzExLjgxMTEgOTY4LjAxNSAxMi4yNSA5NjQuNDgyIDEyLjI1IDk1OS41VjkxMi41TDEyLjI1IDY1OS41VjYwMy41TDEyLjI1IDUwMi41QzEyLjI1IDUwMi40OTIgMTIuMjUgNTAyLjQ4NCAxMi4yNSA1MDIuNDc3TDEyLjI1IDQ0Ni41QzEyLjI1IDQyNC42OTUgOS42MTYgNDE0LjYzIDYuOTc5NDkgNDA1LjcwOEM2LjgyNjA5IDQwNS4xODkgNi42NzI3NCA0MDQuNjc0IDYuNTE5OTUgNDA0LjE2TDYuNTE5NDUgNDA0LjE1OUM2LjI4MzgyIDQwMy4zNjcgNi4wNDk1NCA0MDIuNTggNS44MTg1IDQwMS43OUM1Ljg2NDQ1IDQwMS42MjQgNS45MTA1MiA0MDEuNDU3IDUuOTU2NzEgNDAxLjI5QzYuMjk0NDggNDAwLjA2NyA2LjYzODQ5IDM5OC44MjIgNi45ODI5NyAzOTcuNTM1QzkuNjE3OSAzODcuNjk2IDEyLjI1IDM3NS41NDkgMTIuMjUgMzUzVjI5N0wxMi4yNSA1NlYwSDExLjI1VjU2TDExLjI1IDI5N0MxMS4yNSAzMTkuNDUxIDguNjMyMDcgMzMxLjUxMiA2LjAxNzAxIDM0MS4yNzdDNS42NzQ2MSAzNDIuNTU1IDUuMzMxNzYgMzQzLjc5NiA0Ljk5NDQxIDM0NS4wMTdDMi43NTAzMiAzNTMuMTM3IDAuNzUgMzYwLjM3NiAwLjc1IDM3MkMwLjc1IDM4Ni41NDYgMi42MTk4MiAzOTQuMzc5IDQuNzc4OSA0MDEuNzk3QzIuNjIzODQgNDA5LjYwNyAwLjc1IDQxNi43NSAwLjc1IDQyOEMwLjc1IDQ0NC4yODMgMy4wOTMwOCA0NTIuMTU0IDUuNTYyMTEgNDYwLjQ0OEM1LjcxNDYgNDYwLjk2IDUuODY3NTYgNDYxLjQ3NCA2LjAyMDQ4IDQ2MS45OTFDOC42MzMwMyA0NzAuODMzIDExLjI0ODEgNDgwLjc5OCAxMS4yNSA1MDIuNDc3QzExLjI1IDUwMi40ODQgMTEuMjUgNTAyLjQ5MiAxMS4yNSA1MDIuNVpNMTEuMjUgNDgyLjExN0wxMS4yNSA0NDYuNUMxMS4yNSA0MjQuODA1IDguNjMzOTcgNDE0LjgzNiA2LjAyMDQ4IDQwNS45OTFDNS44Njc1NiA0MDUuNDc0IDUuNzE0NiA0MDQuOTYgNS41NjIxMSA0MDQuNDQ4QzUuNDc5ODcgNDA0LjE3MSA1LjM5Nzc2IDQwMy44OTYgNS4zMTU4NyA0MDMuNjJDMy4zNTQgNDEwLjgxOSAxLjc1IDQxNy42MjggMS43NSA0MjhDMS43NSA0NDQuMTM5IDQuMDYxODMgNDUxLjkwNCA2LjUxOTQ1IDQ2MC4xNTlMNi41MTk5NSA0NjAuMTZDNi42NzI3NCA0NjAuNjc0IDYuODI2MDkgNDYxLjE4OSA2Ljk3OTQ5IDQ2MS43MDhDOC42MTIzMSA0NjcuMjM0IDEwLjI0NDIgNDczLjE5OCAxMS4yNSA0ODIuMTE3Wk01LjI4OTQ1IDM5OS45NDhDNS41MzA3OCAzOTkuMDcyIDUuNzc0MDEgMzk4LjE4NCA2LjAxNzAxIDM5Ny4yNzdDOC42MzIwNyAzODcuNTEyIDExLjI1IDM3NS40NTEgMTEuMjUgMzUzTDExLjI1IDMxOC42ODNDMTAuMjQ0OCAzMjguNDY2IDguNjE0NDMgMzM1LjQ0MyA2Ljk4Mjk3IDM0MS41MzVDNi42Mzg0OSAzNDIuODIyIDYuMjk0NDggMzQ0LjA2NyA1Ljk1NjcxIDM0NS4yOUMzLjcxNTggMzUzLjQwMiAxLjc1IDM2MC41MTggMS43NSAzNzJDMS43NSAzODUuMzk1IDMuMzQyNjggMzkzLjAyMiA1LjI4OTQ1IDM5OS45NDhaTTExLjI1IDkyMy40NThDMTAuNjQxNiA5MjYuMjY3IDkuODI2MzggOTI4LjM5NyA5LjAwOTUgOTMwLjUzMkw4Ljk2Njk3IDkzMC42NDNDNy4zNTY3MiA5MzQuODUyIDUuNzUgOTM5LjEzMyA1Ljc1IDk0OUM1Ljc1IDk1My4zNDUgNi4xNTMyNyA5NTYuMzg2IDYuNzUwODEgOTU4Ljc4NkM3LjMzODE2IDk2MS4xNDYgOC4xMTY2NCA5NjIuOTAxIDguOTE1MDQgOTY0LjcwMkw4Ljk1NzA2IDk2NC43OTZDOS41MDY2MSA5NjYuMDM2IDEwLjA2MzEgOTY3LjMgMTAuNTU3NyA5NjguNzg0QzEwLjk4MzEgOTY2LjMzNyAxMS4yNSA5NjMuMzY3IDExLjI1IDk1OS41TDExLjI1IDkyMy40NThaTTEwLjU5ODggOTczLjAwM0MxMC4xMTE5IDk3NC42NTEgOS41NjExIDk3Ni4wOSA5LjAwOTUgOTc3LjUzMkw4Ljk2Njk3IDk3Ny42NDNDNy4zNTY3MiA5ODEuODUyIDUuNzUgOTg2LjEzMyA1Ljc1IDk5NkM1Ljc1IDEwMDAuMzQgNi4xNTMyNyAxMDAzLjM5IDYuNzUwODEgMTAwNS43OUM3LjMzODE2IDEwMDguMTUgOC4xMTY2NCAxMDA5LjkgOC45MTUwNCAxMDExLjdMOC45NTcwNiAxMDExLjhDOS43NzA3OCAxMDEzLjYzIDEwLjU5OTcgMTAxNS41MiAxMS4yMjA0IDEwMTguMUMxMS4yMzAzIDEwMTguMTQgMTEuMjQwMiAxMDE4LjE4IDExLjI0OTkgMTAxOC4yMkwxMS4yNDk5IDk4MS41QzExLjI0OTkgOTc3LjkzOSAxMC45OTg3IDk3NS4yMTUgMTAuNTk4OCA5NzMuMDAzWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNi41IiB5MT0iMCIgeDI9IjYuNSIgeTI9IjExOTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjAwMjQzMzc1IiBzdG9wLWNvbG9yPSIjNkQ2RDZEIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRGNEY0RiIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="},tCiu:function(e,t,a){"use strict";a.d(t,"a",(function(){return D}));var M=a("q1tI"),l=a.n(M),n=a("iuhU"),N=a("4YxH"),i=a("WfcA"),c=a.n(i),u=a("9Gul"),r=a.n(u),D=function(e){var t=e.children,a=e.className,M=e.theme,i="dark"===M?c.a:r.a;return l.a.createElement("div",{className:Object(n.a)("writing-mode-vertical transform rotate-180 pointer-events-none text-gray-3 flex",{"text-gray-3":"dark"===M,"text-gray-4":"light"===M},a)},l.a.createElement("img",{src:i,alt:"",className:"transform rotate-180"}),l.a.createElement(N.a,{variant:"h4",className:"mt-8 whitespace-no-wrap"},t))}},wnQI:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var M=a("q1tI"),l=a.n(M),n=a("ZMKu"),N=a("7l9Y"),i=a.n(N),c=function(e){var t=e.image,a=e.alt,N=e.videoUrl,c=e.videoOptions,u=Object(M.useState)(!1),r=u[0],D=u[1],j=(c||{}).controls,o=void 0===j||j;return l.a.createElement(n.a,null,l.a.createElement("img",{key:"image",src:t+"?q=30&w=2000",className:"absolute h-full w-full object-cover",alt:a||""}),l.a.createElement(n.b.div,{key:"video",animate:{opacity:r?1:0}},l.a.createElement(i.a,{className:"absolute top-0 left-0",url:N,controls:o,playsinline:!0,muted:!0,loop:!0,playing:!0,onReady:function(){D(!0)},config:{file:{attributes:{className:"object-cover"}}},width:"100%",height:"100%"})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-00cf5ae20a453200cf71.js.map