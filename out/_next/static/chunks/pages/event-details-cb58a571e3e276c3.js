(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{7775:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/event-details",function(){return s(334)}])},8418:function(e,n,s){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var s=0,r=new Array(n);s<n;s++)r[s]=e[s];return r}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var r,t,i=[],a=!0,l=!1;try{for(s=s.call(e);!(a=(r=s.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(c){l=!0,t=c}finally{try{a||null==s.return||s.return()}finally{if(l)throw t}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var i,a=(i=s(7294))&&i.__esModule?i:{default:i},l=s(6273),c=s(387),o=s(7190);var d={};function u(e,n,s,r){if(e&&l.isLocalURL(n)){e.prefetch(n,s,r).catch((function(e){0}));var t=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;d[n+"%"+s+(t?"%"+t:"")]=!0}}var h=function(e){var n,s=!1!==e.prefetch,r=c.useRouter(),i=a.default.useMemo((function(){var n=t(l.resolveHref(r,e.href,!0),2),s=n[0],i=n[1];return{href:s,as:e.as?l.resolveHref(r,e.as):i||s}}),[r,e.href,e.as]),h=i.href,f=i.as,m=e.children,x=e.replace,j=e.shallow,p=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var b=(n=a.default.Children.only(m))&&"object"===typeof n&&n.ref,g=t(o.useIntersection({rootMargin:"200px"}),2),y=g[0],N=g[1],w=a.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);a.default.useEffect((function(){var e=N&&s&&l.isLocalURL(h),n="undefined"!==typeof v?v:r&&r.locale,t=d[h+"%"+f+(n?"%"+n:"")];e&&!t&&u(r,h,f,{locale:n})}),[f,h,N,v,s,r]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,s,r,t,i,a,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(s))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[t?"replace":"push"](s,r,{shallow:i,locale:c,scroll:a}))}(e,r,h,f,x,j,p,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(h)&&u(r,h,f,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof v?v:r&&r.locale,S=r&&r.isLocaleDomain&&l.getDomainLocale(f,E,r&&r.locales,r&&r.domainLocales);k.href=S||l.addBasePath(l.addLocale(f,E,r&&r.defaultLocale))}return a.default.cloneElement(n,k)};n.default=h},7190:function(e,n,s){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var s=0,r=new Array(n);s<n;s++)r[s]=e[s];return r}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var r,t,i=[],a=!0,l=!1;try{for(s=s.call(e);!(a=(r=s.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(c){l=!0,t=c}finally{try{a||null==s.return||s.return()}finally{if(l)throw t}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,s=e.rootMargin,r=e.disabled||!l,o=i.useRef(),d=t(i.useState(!1),2),u=d[0],h=d[1],f=t(i.useState(n?n.current:null),2),m=f[0],x=f[1],j=i.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||u||e&&e.tagName&&(o.current=function(e,n,s){var r=function(e){var n=e.rootMargin||"",s=c.get(n);if(s)return s;var r=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;n&&s&&n(s)}))}),e);return c.set(n,s={id:n,observer:t,elements:r}),s}(s),t=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(t))}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:s}))}),[r,m,s,u]);return i.useEffect((function(){if(!l&&!u){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),i.useEffect((function(){n&&x(n.current)}),[n]),[j,u]};var i=s(7294),a=s(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},4339:function(e,n,s){"use strict";var r=s(5893),t=s(1664);s(7294);n.Z=function(e){var n=e.breadcrumbTitle,s=e.breadcrumbSubTitle;return(0,r.jsx)("div",{className:"hero-arera course-item-height",style:{background:"url(assets/img/slider/course-slider.jpg)"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-xl-12",children:[(0,r.jsx)("div",{className:"hero-course-1-text",children:(0,r.jsx)("h2",{children:n})}),(0,r.jsx)("div",{className:"course-title-breadcrumb",children:(0,r.jsx)("nav",{children:(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(t.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})}),(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)("span",{children:s})})]})})})]})})})})}},334:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var r=s(5893),t=s(9008),i=(s(7294),s(1664)),a=s(4339),l=function(){return(0,r.jsxs)("div",{className:"sidebar-widget-wrapper",children:[(0,r.jsxs)("div",{className:"event-speaker-wrapper mb-30",children:[(0,r.jsx)("div",{className:"event-speaker-info",children:(0,r.jsx)("h4",{children:"Speaker"})}),(0,r.jsx)("div",{className:"event-sidebar-thumb w-img",children:(0,r.jsx)(i.default,{href:"/instructor",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"assets/img/event/speaker.png",alt:"Speaker"})})})}),(0,r.jsxs)("div",{className:"event-speaker-content text-center",children:[(0,r.jsx)("span",{children:(0,r.jsx)(i.default,{href:"/instructor",children:(0,r.jsx)("a",{children:"Crish Denial"})})}),(0,r.jsx)("p",{children:"Motivational Speaker"})]})]}),(0,r.jsxs)("div",{className:"event-information-wrapper mb-30",children:[(0,r.jsxs)("div",{className:"event-price-info",children:[(0,r.jsx)("div",{className:"event-ticket-cost",children:(0,r.jsx)("span",{children:"Ticket Costs:"})}),(0,r.jsxs)("div",{className:"event-price",children:[(0,r.jsx)("span",{children:"$24.00"}),(0,r.jsx)("div",{className:"old-price",children:(0,r.jsx)("del",{children:"$48.00"})})]})]}),(0,r.jsx)("div",{className:"event-information-list",children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{className:"information-list",children:[(0,r.jsx)("i",{className:"flaticon-calendar"}),(0,r.jsx)("span",{children:"Date"})]}),(0,r.jsx)("div",{className:"information-list",children:(0,r.jsx)("span",{children:"10 Jan 2022"})})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{className:"information-list",children:[(0,r.jsx)("i",{className:"flaticon-clock"}),(0,r.jsx)("span",{children:"Schedule"})]}),(0,r.jsx)("div",{className:"information-list",children:(0,r.jsx)("span",{children:"10 AM - 12 PM"})})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{className:"information-list",children:[(0,r.jsx)("i",{className:"flaticon-place"}),(0,r.jsx)("span",{children:"Location"})]}),(0,r.jsx)("div",{className:"information-list",children:(0,r.jsx)("span",{children:"New York, TX 82760, US"})})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{className:"information-list",children:[(0,r.jsx)("i",{className:"flaticon-menu-2"}),(0,r.jsx)("span",{children:"Category"})]}),(0,r.jsx)("div",{className:"information-list",children:(0,r.jsx)("span",{children:"Business"})})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{className:"information-list",children:[(0,r.jsx)("i",{className:"flaticon-global"}),(0,r.jsx)("span",{children:"Laguage"})]}),(0,r.jsx)("div",{className:"information-list",children:(0,r.jsx)("span",{children:"English"})})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{className:"information-list",children:[(0,r.jsx)("i",{className:"flaticon-bookmark-white"}),(0,r.jsx)("span",{children:"Estimated Seat"})]}),(0,r.jsx)("div",{className:"information-list",children:(0,r.jsx)("span",{children:"470 Seats"})})]})]})}),(0,r.jsx)(i.default,{href:"/contact",children:(0,r.jsx)("a",{className:"event-btn",children:"Join this Event"})})]}),(0,r.jsxs)("div",{className:"event-sponsor-wrapper mb-30",children:[(0,r.jsx)("div",{className:"sopnsor-tittle",children:(0,r.jsx)("h4",{children:"Sponsor by"})}),(0,r.jsxs)("div",{className:"sponsor-thumb",children:[(0,r.jsxs)("a",{href:"#",children:[" ",(0,r.jsx)("img",{src:"assets/img/logo/sopnsor-logo-1.png",alt:"sponsor-logo"})]}),(0,r.jsxs)("a",{href:"#",children:[" ",(0,r.jsx)("img",{src:"assets/img/logo/sopnsor-logo-2.png",alt:"sponsor-logo"})]})]})]})]})},c=function(){return(0,r.jsx)("div",{className:"google-map-area event-map pt-45",children:(0,r.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25621.6685132309!2d-73.76450733964063!3d40.741031946556575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1646544624845!5m2!1sen!2sbd"})})},o=function(){return(0,r.jsxs)("main",{children:[(0,r.jsx)(a.Z,{breadcrumbTitle:"Event Details",breadcrumbSubTitle:"Education Autumn Tour Conference"}),(0,r.jsx)("div",{className:"event-detalis-area pt-120 pb-90",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xl-8 col-lg-12",children:(0,r.jsxs)("div",{className:"event-main-wrapper mb-30",children:[(0,r.jsxs)("div",{className:"course-detelis-meta mb-30",children:[(0,r.jsxs)("div",{className:"course-meta-wrapper border-line-meta",children:[(0,r.jsx)("div",{className:"course-meta-img",children:(0,r.jsx)(i.default,{href:"/instructor-profile",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"assets/img/course/course-meta.png",alt:"course-meta"})})})}),(0,r.jsxs)("div",{className:"course-meta-text",children:[(0,r.jsx)("span",{children:"Hosted by"}),(0,r.jsx)("h6",{children:(0,r.jsx)(i.default,{href:"/instructor-profile",children:(0,r.jsx)("a",{children:"David Allberto"})})})]})]}),(0,r.jsxs)("div",{className:"course-Enroll border-line-meta",children:[(0,r.jsx)("p",{children:"Total Joined"}),(0,r.jsx)("span",{children:"25 Audiences"})]}),(0,r.jsxs)("div",{className:"course-update border-line-meta",children:[(0,r.jsx)("p",{children:"Estimated Seat"}),(0,r.jsx)("span",{children:"240 Seats"})]}),(0,r.jsxs)("div",{className:"course-category",children:[(0,r.jsx)("p",{children:"Category"}),(0,r.jsx)("span",{children:(0,r.jsx)(i.default,{href:"/event",children:(0,r.jsx)("a",{children:"Business Management"})})})]})]}),(0,r.jsx)("div",{className:"event-details-thumb w-img mb-20",children:(0,r.jsx)("img",{src:"assets/img/event/event-details-img.jpg",alt:"event-img"})}),(0,r.jsx)("div",{className:"event-contact-info",children:(0,r.jsx)("h2",{children:"General Ideas of Land Management System"})}),(0,r.jsx)("div",{className:"event-introduction",children:(0,r.jsxs)("div",{className:"introduction-info mb-40",children:[(0,r.jsx)("h4",{children:"Introduction :"}),(0,r.jsx)("p",{children:"There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links and sending better emails, Slava Shestopalov has a few tips on how to improve your websites experience while accessibility in mind. The participants will get general ideas of the land management system of business."}),(0,r.jsx)("p",{children:"Everyone must work, but for many of us that job is not just a paycheck, it is an opportunity to express ourselves and make something better. Entrepreneurs and go-getters often feel as if they carry the weight of an entire organization on their backs, and therefore could always use a little extra motivation."})]})}),(0,r.jsx)("div",{className:"even-point-tittle",children:(0,r.jsx)("h4",{children:"Points of Speaking"})}),(0,r.jsx)("div",{className:"event-point-info",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"\u2022 HR Audit: Concept"}),(0,r.jsx)("li",{children:"\u2022 Objectives and Purpose of HR Audit"}),(0,r.jsx)("li",{children:"\u2022 Principles of Effective HR Auditing"}),(0,r.jsx)("li",{children:"\u2022 Knowledge, Skills and Attitude of an HR Auditor"}),(0,r.jsx)("li",{children:"\u2022 Tasks of an HR Auditor"}),(0,r.jsx)("li",{children:"\u2022 Types of HR Audit"})]})}),(0,r.jsx)(c,{})]})}),(0,r.jsx)("div",{className:"col-xl-4 col-lg-8 col-md-8",children:(0,r.jsx)(l,{})})]})})})]})},d=s(8671),u=s(7255);function h(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.default,{children:[(0,r.jsx)("title",{children:"Eduman - Education And Online Courses React, NextJs Template"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(o,{}),(0,r.jsx)(d.Z,{})]})}},1664:function(e,n,s){e.exports=s(8418)},1163:function(e,n,s){e.exports=s(387)}},function(e){e.O(0,[65,671,255,774,888,179],(function(){return n=7775,e(e.s=n);var n}));var n=e.O();_N_E=n}]);