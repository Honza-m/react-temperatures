(this.webpackJsonpreact_temperatures=this.webpackJsonpreact_temperatures||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(14),r=a.n(n),i=(a(20),a(21),a(15)),l=a(9),j=a(10),d=a(4),u=a(12),h=a(11),o=(a(22),a(8)),b=a(3),m=a(0);var p=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"unit",children:e.unit}),Object(m.jsx)("div",{className:"value",children:e.val})]})},O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onClick=s.onClick.bind(Object(d.a)(s)),s.temps=[-18,0,21,30,37],s.labels=["Inside a freezer","Water freezes","Room temp","Hot day","Body temperature"],s.state={selected:1},s}return Object(j.a)(a,[{key:"onClick",value:function(e){e.preventDefault();var t=Number(e.target.getAttribute("data-i"));this.setState({selected:t});var a=this.temps[t];this.props.updateTemp(a,"c")}},{key:"render",value:function(){var e=this,t=this.temps.map((function(t,a){return Object(m.jsx)("span",{"data-i":a,className:e.state.selected===a?"selected":"",onClick:e.onClick},a)}));return Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(o.a,{className:"scale",children:[Object(m.jsx)(b.a,{className:"text-left",children:"Cold"}),Object(m.jsx)(b.a,{className:"text-right",children:"Warm"})]}),Object(m.jsx)("div",{className:"line-through"}),Object(m.jsx)("div",{className:"circles",children:t}),Object(m.jsx)("div",{className:"temp-name",children:this.labels[this.state.selected]})]})}}]),a}(c.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={f:32,c:0},s.updateTemp=s.updateTemp.bind(Object(d.a)(s)),s}return Object(j.a)(a,[{key:"cToF",value:function(e){var t=1.8*e+32;return t=Math.round(t)}},{key:"fToC",value:function(e){var t=5/9*(e-32);return t=Math.round(t)}},{key:"updateTemp",value:function(e,t){var a,s;switch(t){case"c":a=e,s=this.cToF(e);break;case"f":s=e,a=this.fToC(e)}this.setState({c:a,f:s})}},{key:"render",value:function(){return Object(m.jsx)(o.a,{className:"align-items-center h-100",children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(b.a,{xs:6,lg:4,className:"side-panel",children:Object(m.jsx)(p,{unit:"Celsius",val:this.state.c})}),Object(m.jsx)(b.a,{xs:{span:12,order:3},lg:{span:4,order:0},className:"center-panel",children:Object(m.jsx)(o.a,{className:"h-100 align-items-center",children:Object(m.jsx)(O,{c:this.state.c,f:this.state.f,updateTemp:this.updateTemp})})}),Object(m.jsx)(b.a,{xs:6,lg:4,className:"side-panel",children:Object(m.jsx)(p,{unit:"Fahrenheit",val:this.state.f})})]})})})}}]),a}(c.a.Component);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(v,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6b8c3a9e.chunk.js.map