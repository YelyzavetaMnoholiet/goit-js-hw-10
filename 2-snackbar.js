import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",m);function m(e){e.preventDefault();const t=e.target.elements.delay.value,i=e.target.elements.state.value,s=parseInt(t,10);n(s,i).then(o=>{r.success({timeout:5e3,position:"topRight",message:`👍 Fulfilled promise in ${o}ms`})}).catch(o=>{r.error({timeout:5e3,position:"topRight",message:`👎 Rejected promise in ${o}ms`})})}function n(e,t){return new Promise((i,s)=>{setTimeout(()=>{t==="fulfilled"?i(e):s(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map