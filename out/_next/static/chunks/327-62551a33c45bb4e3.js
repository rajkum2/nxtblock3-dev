(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(i){c=!0,a=i}finally{try{l||null==t.return||t.return()}finally{if(c)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,l=(o=t(7294))&&o.__esModule?o:{default:o},c=t(6273),i=t(387),s=t(7190);var u={};function f(e,r,t,n){if(e&&c.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=i.useRouter(),o=l.default.useMemo((function(){var r=a(c.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?c.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),d=o.href,h=o.as,p=e.children,v=e.replace,m=e.shallow,b=e.scroll,y=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var j=(r=l.default.Children.only(p))&&"object"===typeof r&&r.ref,x=a(s.useIntersection({rootMargin:"200px"}),2),g=x[0],w=x[1],N=l.default.useCallback((function(e){g(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,g]);l.default.useEffect((function(){var e=w&&t&&c.isLocalURL(d),r="undefined"!==typeof y?y:n&&n.locale,a=u[d+"%"+h+(r?"%"+r:"")];e&&!a&&f(n,d,h,{locale:r})}),[h,d,w,y,t,n]);var E={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,l,i){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),r[a?"replace":"push"](t,n,{shallow:o,locale:i,scroll:l}))}(e,n,d,h,v,m,b,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var M="undefined"!==typeof y?y:n&&n.locale,S=n&&n.isLocaleDomain&&c.getDomainLocale(h,M,n&&n.locales,n&&n.domainLocales);E.href=S||c.addBasePath(c.addLocale(h,M,n&&n.defaultLocale))}return l.default.cloneElement(r,E)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(i){c=!0,a=i}finally{try{l||null==t.return||t.return()}finally{if(c)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!c,s=o.useRef(),u=a(o.useState(!1),2),f=u[0],d=u[1],h=a(o.useState(r?r.current:null),2),p=h[0],v=h[1],m=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=i.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,o=n.observer,l=n.elements;return l.set(e,r),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:t}))}),[n,p,t,f]);return o.useEffect((function(){if(!c&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){r&&v(r.current)}),[r]),[m,f]};var o=t(7294),l=t(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},5341:function(e,r,t){"use strict";var n=t(5893),a=(t(7294),t(1664));r.Z=function(e){var r=e.breadcrumbTitleTwo,t=e.breadcrumbSubTitleTwo;return(0,n.jsxs)("div",{className:"banner-area faq position-relative",children:[(0,n.jsx)("div",{className:"banner-img",children:(0,n.jsx)("img",{src:"assets/img/banner/banner.png",alt:"image not found"})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row justify-content-center",children:[(0,n.jsx)("div",{className:"course-title-breadcrumb breadcrumb-top",children:(0,n.jsx)("nav",{children:(0,n.jsxs)("ol",{className:"breadcrumb",children:[(0,n.jsx)("li",{className:"breadcrumb-item white-color",children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})})}),(0,n.jsx)("li",{className:"breadcrumb-item white-color",children:(0,n.jsx)(a.default,{href:"/faq-page",children:(0,n.jsx)("a",{children:t})})})]})})}),(0,n.jsx)("div",{className:"col-xl-8",children:(0,n.jsxs)("div",{className:"banner-tiitle-wrapper text-center",children:[(0,n.jsx)("div",{className:"banner-tittle",children:(0,n.jsx)("h2",{children:r})}),(0,n.jsx)("div",{className:"banner-search-box",children:(0,n.jsx)("form",{action:"#",children:(0,n.jsxs)("div",{className:"slider-faq-search",children:[(0,n.jsx)("input",{type:"text",placeholder:"Search courses..."}),(0,n.jsx)("button",{type:"submit",children:(0,n.jsx)("i",{className:"fal fa-search"})})]})})})]})})]})})]})}},1664:function(e,r,t){e.exports=t(8418)},1163:function(e,r,t){e.exports=t(387)}}]);