import{A as q,S as g,N as b,K as L,i as O,a as k}from"./assets/vendor-cRKnTd4S.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const x=document.querySelector(".js-dropdown-toggle"),h=document.querySelector(".js-dropdown-menu"),B=document.querySelectorAll(".js-header-menu-link");x.addEventListener("click",function(){h.classList.toggle("show")});B.forEach(e=>{e.addEventListener("click",function(){h.classList.remove("show")})});window.addEventListener("click",function(e){document.querySelector(".hero-dropdown").contains(e.target)||h.classList.remove("show")});(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".js-header-link"),t=()=>{const s=e.classList.contains("is-open");o.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),s?document.body.classList.remove("no-scroll"):document.body.classList.add("no-scroll")};r.forEach(s=>s.addEventListener("click",t)),o.addEventListener("click",t),n.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),document.body.classList.remove("no-scroll"))})})();new q(".accordion-container",{duration:400,showMultiple:!0,elementClass:"acc-about-item",triggerClass:"ac-about-trigger",panelClass:"ac-about-panel",activeClass:"is-about-active",openOnInit:[0],onOpen:e=>{const o=e.querySelector(".acc-about-icon");o&&(o.style.transform="rotate(180deg)")},onClose:e=>{const o=e.querySelector(".acc-about-icon");o&&(o.style.transform="rotate(0deg)")}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".accordion-container .acc-about-item");if(e&&e.classList.contains("is-about-active")){const o=e.querySelector(".acc-about-icon");o&&(o.style.transform="rotate(180deg)")}});new g(".about-container",{grabCursor:!0,direction:"horizontal",loop:!0,speed:400,slidesPerView:2,spaceBetween:0,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},modules:[b,L],navigation:{nextEl:".about-skill-icon"},keyboard:{enabled:!0}});new g(".project-swiper-container",{grabCursor:!0,direction:"horizontal",speed:300,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:1,spaceBetween:16},1440:{slidesPerView:1,spaceBetween:20}},modules:[b,L],navigation:{nextEl:".carousel-button.next",prevEl:".carousel-button.prev"}});new q(document.querySelector(".faq-accordion-container"),{duration:400,showMultiple:!0,elementClass:"faq-accordion-item",panelClass:"faq-panel",triggerClass:"faq-trigger",activeClass:"is-faq-active",onOpen:function(e){const o=e.querySelector(".faq-arrow");o&&(o.style.transform="rotate(180deg)")},onClose:e=>{const o=e.querySelector(".faq-arrow");o&&(o.style.transform="rotate(0deg)")}});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers-section"),o=()=>{document.querySelectorAll(".marquee__line").forEach(s=>{s.style.animationPlayState="running"})},n=()=>{document.querySelectorAll(".marquee__line").forEach(s=>{s.style.animationPlayState="paused"})};new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting?o():n()})},{threshold:.1}).observe(e)});const m={swiper:document.querySelector(".reviews-container"),swiperNext:document.querySelector(".review-button-next"),swiperPrev:document.querySelector(".review-button-prev"),reviewsList:document.querySelector(".reviews-list")};document.addEventListener("DOMContentLoaded",I);new g(m.swiper,{grabCursor:!0,direction:"horizontal",autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4,keyboard:{enabled:!0,onlyInViewport:!0}}},modules:[b,L],navigation:{nextEl:m.swiperNext,prevEl:m.swiperPrev},keyboard:{enabled:!0}});async function A(){return(await k.get("https://portfolio-js.b.goit.study/api/reviews")).data}async function I(){try{const o=(await A()).map(({author:n,avatar_url:r,review:t})=>`          <li class="reviews-list-item swiper-slide">
              <img class="reviewers-avatar"  loading="lazy" src="${r}" alt="reviewer avatar" name="reviewers-avatar"/>
              <p class="reviewers-name">${n}</p>
              <p class="reviws-text">${t}</p>
          </li>`).join("");m.reviewsList.insertAdjacentHTML("beforeend",o)}catch{m.reviewsList.insertAdjacentHTML("beforeend",'<li class="error-mock"><p>SORRY, NOTHING TO SHOW HERE</p></li>'),O.info({message:"We`re sorry, but reviews list is currently unavailable",position:"bottomRight",timeout:2e3,icon:""})}}const v=document.getElementById("work-form"),i=document.getElementById("email-input"),c=document.getElementById("email-error"),d=document.getElementById("email-success"),l=document.getElementById("comments-input"),y=document.getElementById("comments-warning"),a=document.querySelector(".work-modal-overlay"),S=document.querySelector(".work-modal-info"),P=document.querySelector(".work-modal-title"),V=document.querySelector(".modal-close-btn"),f=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function T(e){S.textContent=e,P.textContent="Thank you for your interest in cooperation!",a.style.opacity="1",a.style.pointerEvents="auto",a.style.visibility="visible",document.body.classList.add("no-scroll-work")}function u(e){S.textContent=e,P.textContent="Something went wrong",a.style.opacity="1",a.style.pointerEvents="auto",a.style.visibility="visible",document.body.classList.add("no-scroll-work")}function E(){a.style.opacity="0",a.style.pointerEvents="none",a.style.visibility="hidden",document.body.classList.remove("no-scroll-work")}function C(){const e=i.value.trim();e===""?(i.classList.remove("invalid"),i.classList.remove("valid"),c.style.display="none",d.style.display="none"):e.match(f)?(i.classList.remove("invalid"),i.classList.add("valid"),c.style.display="none",d.style.display="block"):(i.classList.add("invalid"),i.classList.remove("valid"),c.style.display="block",d.style.display="none")}function M(){const e=l.value.trim();e===""?(l.classList.remove("valid"),l.classList.remove("invalid"),y.style.display="none"):e.length>=4?(l.classList.add("valid"),l.classList.remove("invalid"),y.style.display="none"):(l.classList.add("invalid"),l.classList.remove("valid"),y.style.display="block")}i.addEventListener("input",C);l.addEventListener("input",M);v.addEventListener("submit",async function(e){e.preventDefault();const o=new FormData(v),n=o.get("email")?o.get("email").trim():"",r=o.get("comments")?o.get("comments").trim():"";if(!n||!r||r.length<4){n.match(f)?(i.classList.remove("invalid"),c.style.display="none",d.style.display="block"):(i.classList.add("invalid"),c.style.display="block",d.style.display="none"),r.length<4?(l.classList.add("invalid"),y.style.display="block"):(l.classList.remove("invalid"),y.style.display="none"),u("Please fill in both fields correctly.");return}n.match(f)&&(i.classList.remove("invalid"),c.style.display="none",d.style.display="block");try{const t=await k.post("https://portfolio-js.b.goit.study/api/requests",{email:n,comment:r});t.status===201?(T("The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch."),v.reset(),C(),M()):u(`Error: ${t.data.message||"Unknown error occurred."}`)}catch(t){t.response?u(`Error: ${t.response.data.message||"An unexpected error occurred."}`):t.request?u("No response received from server. Please try again later."):u("An error occurred while setting up the request. Please try again.")}});V.addEventListener("click",E);a.addEventListener("click",function(e){e.target===a&&E()});document.addEventListener("keydown",function(e){e.key==="Escape"&&E()});const w=document.getElementById("scrollToTopBtn");window.addEventListener("scroll",()=>{window.scrollY>200?w.classList.add("up-btn-show"):w.classList.remove("up-btn-show")});w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
