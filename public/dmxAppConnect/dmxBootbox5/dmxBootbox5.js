/*!
 DMXzone Bootbox (bs5)
 Version: 1.0.0
 (c) 2022 Wappler.io
 @build 2022-04-21 14:17:01
 */
dmx.getModboxOptions=(t,e)=>{const o={backdrop:"static"};return e.message&&(o.body=e.message),e.title&&(o.title=e.title),null!=e.backdrop&&(o.backdrop=e.backdrop),!1===e.animate&&(o.fade=!1),!1===e.closeButton&&(o.showHeaderClose=!1),e.swapButtonOrder&&(o.swapButtonOrder=!0),e.centerVertical&&(o.center=!0),!0!==e.scrollable&&(o.scrollable=!1),"alert"==t?e.buttons&&e.buttons.ok&&(o.closeButton={},e.buttons.ok.label&&(o.closeButton.label=e.buttons.ok.label),e.buttons.ok.className&&(o.closeButton.style=e.buttons.ok.className.replace("btn-",""))):"confirm"==t?(e.buttons&&e.buttons.confirm&&(o.okButton={},e.buttons.confirm.label&&(o.okButton.label=e.buttons.confirm.label),e.buttons.confirm.className&&(o.okButton.styel=e.buttons.confirm.className.replace("btn-",""))),e.buttons&&e.buttons.cancel&&(o.closeButton={},e.buttons.cancel.label&&(o.closeButton.label=e.buttons.cancel.label),e.buttons.cancel.className&&(o.closeButton.style=e.buttons.cancel.className.replace("btn-","")))):"prompt"==t&&(e.buttons&&e.buttons.confirm&&(o.okButton={},e.buttons.confirm.label&&(o.okButton.label=e.buttons.confirm.label),e.buttons.confirm.className&&(o.okButton.style=e.buttons.confirm.className.replace("btn-",""))),e.buttons&&e.buttons.cancel&&(o.closeButton={},e.buttons.cancel.label&&(o.closeButton.label=e.buttons.cancel.label),e.buttons.cancel.className&&(o.closeButton.style=e.buttons.cancel.className.replace("btn-",""))),"select"==e.inputType?o.input=`<select\n          class="form-select"\n          ${e.multiple?"multiple":""}\n          ${e.required?"required":""}\n        >\n          ${e.inputOptions.map((t=>`\n            <option\n              value="${t.value||""}"\n              ${e.value==t.value?"selected":""}\n            >${t.text||t.value}</option>\n          `)).join("")}\n        </select>`:"checkbox"==e.inputType||"radio"==e.inputType?o.input=e.inputOptions.map(((t,o)=>`<div class="form-check">\n            <input\n              id="modbox-input-${o}"\n              type="${e.inputType}"\n              name="modbox-input-name"\n              value="${t.value||""}"\n              ${e.value==t.value?"checked":""}\n            >\n            <label class="form-check-label" for="modbox-input-${o}">\n              ${t.text||t.value}\n            </label>\n          </div>`)).join(""):"textarea"==e.inputType?o.input=`<textarea\n          class="form-control"\n          ${e.rows?`rows="${e.rows}"`:""}\n          ${e.placeholder?`placeholder="${e.placeholder}"`:""}\n          ${e.autocomplete?`autocomplete="${e.autocomplete}"`:""}\n          ${e.minlength?`minlength="${e.minlength}"`:""}\n          ${e.maxlength?`maxlength="${e.maxlength}"`:""}\n          ${e.required?"required":""}\n        >${e.value||""}</textarea>`:o.input=`<input\n          type="${e.inputType}"\n          class="${"range"==e.inputType?"form-range":"form-control"}"\n          value="${e.value||""}"\n          ${e.placeholder?`placeholder="${e.placeholder}"`:""}\n          ${e.autocomplete?`autocomplete="${e.autocomplete}"`:""}\n          ${e.minlength?`minlength="${e.minlength}"`:""}\n          ${e.maxlength?`maxlength="${e.maxlength}"`:""}\n          ${e.min?`min="${e.min}"`:""}\n          ${e.max?`max="${e.max}"`:""}\n          ${e.step?`step="${e.step}"`:""}\n          ${e.pattern?`pattern="${e.pattern}"`:""}\n          ${e.required?"required":""}\n        >`,o.body=`\n      ${e.message?`<p>${e.message}</p>`:""}\n      ${o.input}\n    `.trim()),o},dmx.Actions({"bootbox.alert":function(t){return modbox.alert(dmx.getModboxOptions("alert",this.parse(t)))},"bootbox.info":function(t){return modbox.info(dmx.getModboxOptions("alert",this.parse(t)))},"bootbox.success":function(t){return modbox.success(dmx.getModboxOptions("alert",this.parse(t)))},"bootbox.warning":function(t){return modbox.warning(dmx.getModboxOptions("alert",this.parse(t)))},"bootbox.danger":function(t){return modbox.danger(dmx.getModboxOptions("alert",this.parse(t)))},"bootbox.confirm":function(t){const e={then:(t=Object.assign({},t)).then,else:t.else};return delete t.then,delete t.else,modbox.confirm(dmx.getModboxOptions("confirm",this.parse(t))).then((()=>!e.then||this._exec(e.then).then((()=>!0)))).catch((()=>!!e.else&&this._exec(e.else).then((()=>!1))))},"bootbox.prompt":function(t){const e=dmx.extend(!0,{okButton:{label:"OK",style:"primary"},closeButton:{label:"Close",style:"secondary"}},dmx.getModboxOptions("prompt",this.parse(t)),{destroyOnClose:!0,defaultButton:!1,buttons:[]});return new Promise((t=>{const o=new modbox(e),n=o.modalEl.querySelector("input,select,textarea");"radio"==n.type&&(n.checked=!0),e.okButton.close=!1,e.okButton.callback=()=>{if(!n||n.reportValidity()){if("SELECT"==n.nodeName&&n.multiple)t(Array.from(n.selectedOptions).map((t=>t.value)));else if("checkbox"==n.type){const e=o.modalEl.querySelectorAll("input:checked");t(Array.from(e).map((t=>t.value)))}else if("radio"==n.type){const e=o.modalEl.querySelector("input:checked");t(e.value)}else t(n.value);o.hide()}};const l=o.addButton(e.okButton);o.addButton(e.closeButton);n&&"INPUT"==n.nodeName&&n.addEventListener("keyup",(t=>{"Enter"===t.key&&l.click()})),o.addEvent("hide",(()=>{t(null)})),o.show()}))}}),dmx.Component("bootbox",{methods:{alert:function(t){return modbox.alert(dmx.getModboxOptions("alert",t))},info:function(t){return modbox.info(dmx.getModboxOptions("alert",t))},success:function(t){return modbox.success(dmx.getModboxOptions("alert",t))},warning:function(t){return modbox.warning(dmx.getModboxOptions("alert",t))},danger:function(t){return modbox.danger(dmx.getModboxOptions("alert",t))}}});
//# sourceMappingURL=../maps/dmxBootbox5.js.map