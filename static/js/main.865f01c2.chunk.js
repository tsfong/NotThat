(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(16),r=n.n(s),i=(n(23),n(13)),u=n(4),l=(n(24),n(6)),j=n(3),o=n(1);function d(e){var t=e.value.cuisines[0].name.split(/[ ,]+/).map((function(e){return Object(o.jsx)("li",{children:e})}));return Object(o.jsxs)("div",{class:"place-card",children:[Object(o.jsx)("div",{className:"restaurant-name",children:e.value.name}),Object(o.jsx)("div",{className:"location",children:e.value.zipcode}),Object(o.jsx)("div",{class:"flexible",children:Object(o.jsxs)("ul",{className:"cuisine-list",children:[" ",t," "]})})]})}n(26);var b=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],s=n[1];function r(){var t=[];return function n(){var a,c=(a=e.currentRestaurants)[Math.floor(Math.random()*a.length)];if(-1===t.indexOf(c))t.push(c),n();else{if(!(t.length<1))return t.length>1&&t.pop(),t;n()}return t}(),t}Object(a.useEffect)((function(){var e=r();s(e)}),[]);var i=c.map((function(e){return Object(o.jsx)(d,{value:e})}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{class:"place-card__wrap--outer",children:Object(o.jsx)("div",{class:"place-card__wrap--inner",children:i})}),Object(o.jsx)("button",{onClick:function(){for(var e=r();e.length>1;)e.pop();s(e)},className:"submit-button submit",children:"Refresh"})]})},h=(n(27),n(17)),O=n.n(h);n(32);function p(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),c=n[0];n[1];return Object(o.jsx)(O.a,{opposite:!0,when:c,duration:500,children:Object(o.jsxs)("button",{onClick:function(t){e.triggerRemove(t.target.innerHTML.replace(/\s/g,""))},className:"category-button",children:[" ",e.context," "]})})}function x(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)([]),i=Object(u.a)(r,2),j=i[0],d=i[1],b=e.generateCategories();function h(e){b=function(e,t){for(var n=0;n<e.length;)e[n]===t?e.splice(n,1):++n;return e}(b,e);var t=b.map((function(e,t){return Object(o.jsx)(p,{triggerRemove:h,context:e})}));s(t),d(b)}return Object(a.useEffect)((function(){e.getRestaurants(),s(e.generateCategories().map((function(e,t){return Object(o.jsx)(p,{triggerRemove:h,context:e})}))),d(e.generateCategories())}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Click on what you know you don't want."}),Object(o.jsx)("div",{className:"categories",children:c}),Object(o.jsx)(l.b,{to:"/options",children:Object(o.jsx)("button",{onClick:function(){var t=[],n=[];j.forEach((function(n){(function(t){var n=[];return e.restaurantData.forEach((function(e){for(var a=e.cuisines[0].name.split(/[ ,]+/),c=0;c<a.length;c++)a[c]===t&&-1===n.indexOf(e._id)&&n.push(e._id)})),n})(n).forEach((function(e){-1===t.indexOf(e)&&t.push(e)}))})),t.forEach((function(t){n.push(function(t){for(var n=e.restaurantData,a=0;a<n.length;a++)if(n[a]._id===t)return n[a]}(t))})),console.log(n),e.setCurrentRestaurants(n)},className:"submit-button submit",children:"Submit"})})]})}var f=n(8),m=n.n(f),v=n(10),g=(n(34),function(e){return e?e.split(/[ ,]+/):[]}),R=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)({name:"",zipcode:""}),i=Object(u.a)(r,2),l=i[0],j=i[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),h=b[0],O=b[1],p=e.value._id,x=function(){s(!c)},f=function(){var t=Object(v.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a={name:l.name,zipcode:l.zipcode,cuisines:[{name:h}]},x(),e.handleUpdate(),e.putRestaurant(p,a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(e){var t=e.target.value,n=e.target.name,a=Object.assign({},l);a[n]=t,j(a)},C=g(e.value.cuisines[0].name).map((function(e){return Object(o.jsx)("li",{children:e})}));return Object(a.useEffect)((function(){j({name:e.value.name,zipcode:e.value.zipcode}),O(e.value.cuisines[0].name)}),[]),Object(o.jsxs)("div",{class:"place-card",children:[Object(o.jsx)("p",{className:"hide-me",children:e.value._id}),c?Object(o.jsxs)("form",{onSubmit:f,children:[Object(o.jsx)("input",{className:"place-card-input-field",onChange:R,name:"name",value:l.name,type:"text",placeholder:"Restaurant"}),Object(o.jsx)("input",{className:"place-card-input-field",onChange:R,name:"zipcode",value:l.zipcode,type:"text",placeholder:"Location"}),Object(o.jsx)("input",{className:"place-card-input-field",onChange:function(e){var t=e.target.value;g(t);console.log(t),""===t&&" "===t||O(t)},name:"cuisines",value:h,type:"text",placeholder:"Cuisines"}),Object(o.jsx)("button",{type:"submit",children:"Save"})]}):"",c?"":Object(o.jsx)("div",{className:"restaurant-name",children:e.value.name}),c?"":Object(o.jsx)("div",{className:"location",children:e.value.zipcode}),c?Object(o.jsx)("div",{class:"flexible"}):Object(o.jsx)("div",{className:"flexible",children:Object(o.jsxs)("ul",{className:"cuisine-list",children:[C," "]})}),Object(o.jsxs)("div",{children:[c?"":Object(o.jsx)("button",{className:"update-button",onClick:x,children:"Update"})," ",Object(o.jsx)("button",{onClick:e.handleDelete,children:"Delete"})]})]})},C=function(e){var t=function(){var t=Object(v.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=(a=n.target.parentNode.parentNode.children[0].innerHTML).replace(/ /g," "),e.deleteRestaurant(a);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(){console.log("updated")},c=e.restaurantData.map((function(a){return Object(o.jsx)(R,{getRestaurants:e.getRestaurants,putRestaurant:e.putRestaurant,value:a,handleDelete:t,handleUpdate:n})}));return Object(a.useEffect)((function(){e.getRestaurants()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"Here are your favorites.  Feel free to make any changes."}),Object(o.jsx)("div",{class:"place-card__wrap--outer",children:Object(o.jsx)("div",{class:"place-card__wrap--inner",children:c})})]})},N=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(C,{restaurantData:e.restaurantData,setRestaurantData:e.setRestaurantData,getRestaurants:e.getRestaurants,putRestaurant:e.putRestaurant,deleteRestaurant:e.deleteRestaurant})})},y=(n(35),function(e){var t=Object(a.useState)({name:"",zipcode:""}),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),l=i[0],j=i[1],d=function(e){var t=e.target.value,n=e.target.name,a=Object.assign({},c);a[n]=t,s(a)};return Object(o.jsx)("div",{className:"restaurant-container",children:Object(o.jsx)("div",{className:"restaurant-form",children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={name:c.name,zipcode:c.zipcode,cuisines:[{name:l}]};""!==l&&""!==c.name&&""!==c.zipcode&&(e.postRestaurant(n,s),j(""))},children:[Object(o.jsx)("input",{className:"input-field",onChange:d,type:"text",name:"name",placeholder:"Restaurant",value:c.name}),Object(o.jsx)("input",{className:"input-field",onChange:d,type:"text",name:"zipcode",placeholder:"Location",value:c.zipcode}),Object(o.jsx)("input",{className:"input-field",onChange:function(e){var t=e.target.value;t.split(/[ ,]+/);j(t)},type:"text",name:"cuisines",placeholder:"Cuisines",value:l}),Object(o.jsx)("button",{className:"submit-button",type:"submit",children:"Submit"})]})})})}),D=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"Tell us about your favorite restaurant "}),Object(o.jsx)(y,{restaurantData:e.restaurantData,setRestaurantData:e.setRestaurantData,getRestaurants:e.getRestaurants,postRestaurant:e.postRestaurant})]})},S=n.p+"static/media/DV.e9e729a2.jpeg",E=n.p+"static/media/TF.75b22981.jpg",T=n.p+"static/media/TR.fcad464e.jpg",w=n.p+"static/media/MS.5a106654.jpg";n(36);var z=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Developer Team"}),Object(o.jsxs)("div",{className:"team-container",children:[Object(o.jsxs)("div",{className:"team-card",children:[Object(o.jsx)("img",{src:E,alt:"pic"}),Object(o.jsx)("h2",{children:"Tiffany Fong"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("h3",{children:"Passions"}),Object(o.jsx)("li",{children:" Cardio  "}),Object(o.jsx)("li",{children:"Cooking"}),Object(o.jsx)("h3",{children:"Contribution"}),Object(o.jsx)("li",{children:"Back-End"}),Object(o.jsx)("li",{children:"Concept"})]})]}),Object(o.jsxs)("div",{className:"team-card",children:[Object(o.jsx)("img",{src:w,alt:"pic"}),Object(o.jsx)("h2",{children:"Marco Silva"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("h3",{children:"Passions"}),Object(o.jsx)("li",{children:"Motorcycles"}),Object(o.jsx)("li",{children:"Crypto"}),Object(o.jsx)("h3",{children:"Contribution"}),Object(o.jsx)("li",{children:"Front-End Structure"})]})]}),Object(o.jsxs)("div",{className:"team-card",children:[Object(o.jsx)("img",{src:S,alt:"pic"}),Object(o.jsx)("h2",{children:"Diana Villada"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("h3",{children:"Passions"}),Object(o.jsx)("li",{children:"Yoga"}),Object(o.jsx)("li",{children:"Traveling"}),Object(o.jsx)("h3",{children:"Contribution"}),Object(o.jsx)("li",{children:"CSS Styling"}),Object(o.jsx)("li",{children:"Front-End Components"})]})]}),Object(o.jsxs)("div",{className:"team-card",children:[Object(o.jsx)("img",{src:T,alt:"pic"}),Object(o.jsx)("h2",{children:"Trendon Robinson"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("h3",{children:"Passions"}),Object(o.jsx)("li",{children:"Programming"}),Object(o.jsx)("li",{children:"Reading"}),Object(o.jsx)("h3",{children:"Contribution"}),Object(o.jsx)("li",{children:"Front-End Functionality"})]})]})]})]})},k="https://immense-badlands-54158.herokuapp.com",F="http://localhost:4000",_="localhost"===window.location.hostname?F:k,P=n(11),M=n(18);function L(e,t){for(var n=0;n<e.length;n++){if(t===e[n])return!0}return!1}var J=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(),r=Object(u.a)(s,2),d=r[0],h=r[1],O=function(){fetch("".concat(_,"/restaurants"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){c(e)}))},p=function(e,t){fetch("".concat(_,"/restaurants"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({name:"",zipcode:""})})).then((function(e){O()}))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Not That"}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"navbar",children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)(P.c,{})})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/favorites",children:Object(o.jsx)(P.b,{})})}),Object(o.jsxs)("li",{children:[Object(o.jsx)(l.b,{to:"/categories",children:Object(o.jsx)(P.a,{})})," "]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(l.b,{to:"/team",children:Object(o.jsx)(M.a,{})})," "]})]})}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",element:Object(o.jsx)(D,{restaurantData:n,setRestaurantData:c,getRestaurants:O,postRestaurant:p})}),Object(o.jsx)(j.a,{exact:!0,path:"/favorites",element:Object(o.jsx)(N,{restaurantData:n,setRestaurantData:c,getRestaurants:O,postRestaurant:p,putRestaurant:function(e,t){fetch("".concat(_,"/restaurants/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){O()}))},deleteRestaurant:function(e){fetch("".concat(_,"/restaurants/").concat(e),{method:"DELETE"}).then((function(e){O()}))}})}),Object(o.jsx)(j.a,{exact:!0,path:"/categories",element:Object(o.jsx)(x,{getRestaurants:O,restaurantData:n,foundDuplicate:L,generateCategories:function(){var e=[],t=[];return n.forEach((function(t){var n=t.cuisines[0].name.split(/[ ,]+/);e=[].concat(Object(i.a)(e),Object(i.a)(n))})),e.forEach((function(e,n){L(t,e)||t.push(e)})),t.map((function(e,t){return Object(o.jsx)("li",{children:e})}))},setCurrentRestaurants:h})}),Object(o.jsx)(j.a,{exact:!0,path:"/team",element:Object(o.jsx)(z,{})}),Object(o.jsx)(j.a,{exact:!0,path:"/options",element:Object(o.jsx)(b,{currentRestaurants:d})})]})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(J,{})})}),document.getElementById("root")),U()}},[[37,1,2]]]);
//# sourceMappingURL=main.865f01c2.chunk.js.map