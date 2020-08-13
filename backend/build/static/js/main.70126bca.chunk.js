(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),c=t.n(l),o=t(3),u=t(2),i=t.n(u),m=function(e){return r.a.createElement(r.a.Fragment,null,"filter shown with ",r.a.createElement("input",{value:e.personFilter,onChange:e.handleFilterChange}))},s=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},f=function(e){return r.a.createElement("li",null,e.person.name," ",e.person.number,r.a.createElement("button",{onClick:function(){return e.onClick(e.person)}},"delete"))},d=function(e){return r.a.createElement("li",null,e.country.name,r.a.createElement("button",{onClick:function(){return e.onClick(e.country.name)}},"show"))},h=function(e){return r.a.createElement(r.a.Fragment,null,e.personsToShow.map((function(n){return r.a.createElement(f,{key:n.name,person:n,onClick:e.onClick})})))},g=function(e){if(!e.filter)return r.a.createElement(r.a.Fragment,null);if(1===e.countriesToShow.length){var n=e.countriesToShow[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n.name),r.a.createElement("h3",null,"languages"),n.languages.map((function(e){return r.a.createElement("li",{key:e.name},e.name)})),r.a.createElement("br",null),r.a.createElement("img",{src:n.flag,alt:"flag",height:"100",width:"100"}))}return e.countriesToShow.length>10?r.a.createElement("p",null,"Too many countries, specify another filter"):r.a.createElement(r.a.Fragment,null,e.countriesToShow.map((function(n){return r.a.createElement(d,{key:n.name,country:n,onClick:e.onClick})})))},E="api/persons",b={getAll:function(){return i.a.get(E)},create:function(e){return i.a.post(E,e)},update:function(e,n){return i.a.put("".concat(E,"/").concat(e),n)},remove:function(e){return i.a.delete("".concat(E,"/").concat(e),e)}},p=function(e){var n=e.message;if(null===n)return null;var t={color:n.color,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{className:"error",style:t},n.text)},v=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)(""),u=Object(o.a)(c,2),f=u[0],d=u[1],E=Object(a.useState)(""),v=Object(o.a)(E,2),C=v[0],w=v[1],k=Object(a.useState)(""),S=Object(o.a)(k,2),j=S[0],O=S[1],y=Object(a.useState)([]),T=Object(o.a)(y,2),F=T[0],N=T[1],x=Object(a.useState)(""),A=Object(o.a)(x,2),P=A[0],B=A[1],D=Object(a.useState)(null),J=Object(o.a)(D,2),L=J[0],z=J[1];Object(a.useEffect)((function(){b.getAll().then((function(e){l(e.data)}))}),[]),Object(a.useEffect)((function(){i.a.get("https://restcountries.eu/rest/v2/all").then((function(e){N(e.data)}))}),[]);var I=F.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())})),R=t.filter((function(e){return e.name.includes(j)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:L}),r.a.createElement(m,{personFilter:j,handleFilterChange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(s,{addPerson:function(e){e.preventDefault();var n={name:f,number:C};t.map((function(e){return e.name})).includes(f)?b.edit(n).then((function(e){l(t.concat(e.data)),z({text:"Changed '".concat(f,"' number"),color:"green"}),setTimeout((function(){z(null)}),5e3)})):b.create(n).then((function(e){l(t.concat(e.data)),z({text:"Added '".concat(f,"'"),color:"green"}),setTimeout((function(){z(null)}),5e3)})),d(""),w("")},newName:f,handleNameChange:function(e){d(e.target.value)},newNumber:C,handleNumberChange:function(e){w(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(h,{personsToShow:R,onClick:function(e){window.confirm("Delete ".concat(e.name,"?"))&&b.remove(e.id).then((function(n){l(t.filter((function(n){return n!==e}))),z({text:"".concat(e.name," removed successfully"),color:"green"})})).catch((function(n){z({text:"".concat(e.name," was already removed from server"),color:"red"}),setTimeout((function(){z(null)}),5e3),l(t.filter((function(n){return n!==e})))}))}}),r.a.createElement("h2",null,"Countries"),r.a.createElement("div",null,"find countries: ",r.a.createElement("input",{value:P,onChange:function(e){B(e.target.value)}})),r.a.createElement(g,{countriesToShow:I,filter:P,onClick:function(e){B(e)}}))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.70126bca.chunk.js.map