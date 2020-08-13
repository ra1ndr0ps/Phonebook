(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),l=t.n(o),c=t(2),u=t(14),i=t(3),m=t.n(i),s=function(e){return r.a.createElement(r.a.Fragment,null,"filter shown with ",r.a.createElement("input",{value:e.personFilter,onChange:e.handleFilterChange}))},f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},d=function(e){return r.a.createElement("li",null,e.person.name," ",e.person.number,r.a.createElement("button",{onClick:function(){return e.onClick(e.person)}},"delete"))},h=function(e){return r.a.createElement("li",null,e.country.name,r.a.createElement("button",{onClick:function(){return e.onClick(e.country.name)}},"show"))},g=function(e){return r.a.createElement(r.a.Fragment,null,e.personsToShow.map((function(n){return r.a.createElement(d,{key:n.name,person:n,onClick:e.onClick})})))},E=function(e){if(!e.filter)return r.a.createElement(r.a.Fragment,null);if(1===e.countriesToShow.length){var n=e.countriesToShow[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n.name),r.a.createElement("h3",null,"languages"),n.languages.map((function(e){return r.a.createElement("li",{key:e.name},e.name)})),r.a.createElement("br",null),r.a.createElement("img",{src:n.flag,alt:"flag",height:"100",width:"100"}))}return e.countriesToShow.length>10?r.a.createElement("p",null,"Too many countries, specify another filter"):r.a.createElement(r.a.Fragment,null,e.countriesToShow.map((function(n){return r.a.createElement(h,{key:n.name,country:n,onClick:e.onClick})})))},b="api/persons",p=function(){return m.a.get(b)},v=function(e){return m.a.post(b,e)},C=function(e,n){return m.a.put("".concat(b,"/").concat(e),n)},w=function(e){return m.a.delete("".concat(b,"/").concat(e),e)},k=function(e){var n=e.message;if(null===n)return null;var t={color:n.color,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{className:"error",style:t},n.text)},j=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],l=Object(a.useState)(""),i=Object(c.a)(l,2),d=i[0],h=i[1],b=Object(a.useState)(""),j=Object(c.a)(b,2),O=j[0],S=j[1],y=Object(a.useState)(""),T=Object(c.a)(y,2),F=T[0],N=T[1],x=Object(a.useState)([]),L=Object(c.a)(x,2),P=L[0],A=L[1],B=Object(a.useState)(""),D=Object(c.a)(B,2),J=D[0],z=D[1],I=Object(a.useState)(null),R=Object(c.a)(I,2),q=R[0],G=R[1];Object(a.useEffect)((function(){p().then((function(e){o(e.data)}))}),[]),Object(a.useEffect)((function(){m.a.get("https://restcountries.eu/rest/v2/all").then((function(e){A(e.data)}))}),[]);var H=P.filter((function(e){return e.name.toLowerCase().includes(J.toLowerCase())})),K=t.filter((function(e){return e.name.includes(F)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(k,{message:q}),r.a.createElement(s,{personFilter:F,handleFilterChange:function(e){N(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(f,{addPerson:function(e){e.preventDefault();var n={name:d,number:O};if(t.map((function(e){return e.name})).includes(d)){var a=t.find((function(e){return e.name===d})).id;console.log(a),C(a,n).then((function(e){o(t.map((function(n){return n.name!==d?n:e.data}))),G({text:"Changed '".concat(d,"' number"),color:"green"}),setTimeout((function(){G(null)}),5e3)}))}else v(n).then((function(e){o(t.concat(e.data)),G({text:"Added '".concat(d,"'"),color:"green"}),setTimeout((function(){G(null)}),5e3)}));h(""),S("")},newName:d,handleNameChange:function(e){h(e.target.value)},newNumber:O,handleNumberChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{personsToShow:K,onClick:function(e){window.confirm("Delete ".concat(e.name,"?"))&&w(e.id).then((function(n){o(t.filter((function(n){return n!==e}))),G({text:"".concat(e.name," removed successfully"),color:"green"})})).catch((function(n){G({text:"".concat(e.name," was already removed from server"),color:"red"}),setTimeout((function(){G(null)}),5e3),o(t.filter((function(n){return n!==e})))}))}}),r.a.createElement("h2",null,"Countries"),r.a.createElement("div",null,"find countries: ",r.a.createElement("input",{value:J,onChange:function(e){z(e.target.value)}})),r.a.createElement(E,{countriesToShow:H,filter:J,onClick:function(e){Object(u.a)("filteredCountries"),H=P.filter((function(n){return n.name.toLowerCase()===e.toLowerCase()}))}}))};l.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.39951716.chunk.js.map