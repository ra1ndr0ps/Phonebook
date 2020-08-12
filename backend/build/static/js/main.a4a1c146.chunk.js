(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),c=t.n(l),o=t(2),u=t(3),i=t.n(u),m=function(e){return r.a.createElement(r.a.Fragment,null,"filter shown with ",r.a.createElement("input",{value:e.personFilter,onChange:e.handleFilterChange}))},s=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},f=function(e){return r.a.createElement("li",null,e.person.name," ",e.person.number,r.a.createElement("button",{onClick:function(){return e.onClick(e.person)}},"delete"))},h=function(e){return r.a.createElement("li",null,e.country.name,r.a.createElement("button",{onClick:function(){return e.onClick(e.country.name)}},"show"))},d=function(e){return r.a.createElement(r.a.Fragment,null,e.personsToShow.map((function(n){return r.a.createElement(f,{key:n.name,person:n,onClick:e.onClick})})))},E=function(e){if(!e.filter)return r.a.createElement(r.a.Fragment,null);if(1===e.countriesToShow.length){var n=e.countriesToShow[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n.name),r.a.createElement("h3",null,"languages"),n.languages.map((function(e){return r.a.createElement("li",{key:e.name},e.name)})),r.a.createElement("br",null),r.a.createElement("img",{src:n.flag,alt:"flag",height:"100",width:"100"}))}return e.countriesToShow.length>10?r.a.createElement("p",null,"Too many countries, specify another filter"):r.a.createElement(r.a.Fragment,null,e.countriesToShow.map((function(n){return r.a.createElement(h,{key:n.name,country:n,onClick:e.onClick})})))},g="api/persons",b=function(){return i.a.get(g)},p=function(e){return i.a.post(g,e)},v=function(e){return i.a.delete("".concat(g,"/").concat(e),e)},w=function(e){var n=e.message;if(null===n)return null;var t={color:n.color,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{className:"error",style:t},n.text)},C=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)(""),u=Object(o.a)(c,2),f=u[0],h=u[1],g=Object(a.useState)(""),C=Object(o.a)(g,2),k=C[0],S=C[1],j=Object(a.useState)(""),O=Object(o.a)(j,2),y=O[0],F=O[1],N=Object(a.useState)([]),T=Object(o.a)(N,2),x=T[0],P=T[1],A=Object(a.useState)(""),B=Object(o.a)(A,2),D=B[0],J=B[1],L=Object(a.useState)(null),z=Object(o.a)(L,2),I=z[0],R=z[1];Object(a.useEffect)((function(){b().then((function(e){l(e.data)}))}),[]),Object(a.useEffect)((function(){i.a.get("https://restcountries.eu/rest/v2/all").then((function(e){P(e.data)}))}),[]);var q=x.filter((function(e){return e.name.toLowerCase().includes(D.toLowerCase())})),G=t.filter((function(e){return e.name.includes(y)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:I}),r.a.createElement(m,{personFilter:y,handleFilterChange:function(e){F(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(s,{addPerson:function(e){e.preventDefault(),p({name:f,number:k}).then((function(e){l(t.concat(e.data)),R({text:"Added '".concat(f,"'"),color:"green"}),setTimeout((function(){R(null)}),5e3)})),h(""),S("")},newName:f,handleNameChange:function(e){h(e.target.value)},newNumber:k,handleNumberChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{personsToShow:G,onClick:function(e){window.confirm("Delete ".concat(e.name,"?"))&&v(e.id).then((function(n){l(t.filter((function(n){return n!==e}))),R({text:"".concat(e.name," removed successfully"),color:"green"})})).catch((function(n){R({text:"".concat(e.name," was already removed from server"),color:"red"}),setTimeout((function(){R(null)}),5e3),l(t.filter((function(n){return n!==e})))}))}}),r.a.createElement("h2",null,"Countries"),r.a.createElement("div",null,"find countries: ",r.a.createElement("input",{value:D,onChange:function(e){J(e.target.value)}})),r.a.createElement(E,{countriesToShow:q,filter:D,onClick:function(e){J(e)}}))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a4a1c146.chunk.js.map