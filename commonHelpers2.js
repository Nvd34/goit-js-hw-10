import"./assets/styles-618a3959.js";import{i}from"./assets/vendor-651d7991.js";const s=document.querySelector(".form");document.querySelector("button");s.addEventListener("submit",o=>{o.preventDefault();const t=s.elements.delay.value,r=s.elements.state.value;o.target.reset(),new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(`✅ Fulfilled promise in ${t}ms`):m(`❌ Rejected promise in ${t}ms`)},t)}).then(e=>{i.success({position:"topRight",message:`${e}`})}).catch(e=>{i.error({position:"topRight",message:`${e}`})})});
//# sourceMappingURL=commonHelpers2.js.map
