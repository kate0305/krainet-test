(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const s=document.querySelector(".promo__menu-icon"),a=document.querySelector(".menu"),i=document.querySelector(".menu__navigation"),u=document.querySelector(".overlay"),d=()=>{s.addEventListener("click",()=>{s.classList.add("promo__menu-icon_hidden"),i.classList.add("menu__navigation_open"),u.classList.add("overlay_visible")})},m=()=>{a.addEventListener("click",o=>{o.target!==i&&!o.target.matches(".menu__list")&&(s.classList.remove("promo__menu-icon_hidden"),i.classList.remove("menu__navigation_open"),u.classList.remove("overlay_visible"))})};d();m();
