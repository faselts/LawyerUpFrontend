(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"18cd":function(t,e,a){},"1ea0":function(t,e,a){},"2ad2":function(t,e,a){"use strict";a("ea31")},3568:function(t,e,a){"use strict";a("18cd")},"3abd":function(t,e,a){},4833:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd"),a("e792");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("h1",[t._v("We are")]),a("h1",{staticClass:"typing"})])}],c=(a("fb6a"),{name:"Footer",mounted:function(){this.typing()},methods:{typing:function(){var t=["Professional.","","Trustworthy.","","LawyerUp."],e=0,a=0,n="",s="";(function i(){e===t.length&&(e=0),n=t[e],s=n.slice(0,++a),document.querySelector(".typing").textContent=s,s.length===n.length?(e++,a=0,setTimeout(i,1e3)):setTimeout(i,500)})()}}}),l=c,u=(a("ffc0"),a("2877")),d=Object(u["a"])(l,r,o,!1,null,"21e6f0d5",null),v=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar",attrs:{id:"navbar"}},[a("div",{staticClass:"logo"},[a("div",{staticClass:"formAbsolute"},[a("div",{staticClass:"form"},[a("form",{attrs:{id:"form"},on:{submit:function(e){return e.preventDefault(),t.postData.apply(null,arguments)}}},[a("input",{staticClass:"input",attrs:{type:"text",name:"search",autocomplete:"off",required:""}}),a("button",{attrs:{type:"submit"}})]),t._m(0)])])]),a("ul",{staticClass:"nav-links"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),a("li",[a("router-link",{attrs:{to:"/searchresult"}},[t._v("付費搜索")])],1),a("li",[a("router-link",{attrs:{to:"/lawyer"}},[t._v("所有律師資訊")])],1)]),t._m(1)]),a("router-view")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"label-name",attrs:{for:"name",id:"label-name"}},[a("span",{staticClass:"content-name",attrs:{id:"content-name"}},[t._v("輸入律師姓名、案件類型或關鍵字")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"burger"},[a("div",{staticClass:"line1"}),a("div",{staticClass:"line2"}),a("div",{staticClass:"line3"})])}],m=a("1da1"),h=(a("96cf"),a("cffa")),_=a("bc3a"),b=a.n(_),y=a("130e");n["default"].use(y["a"],b.a);var g={name:"NavBar",components:{},computed:{},data:function(){return{resultp:{first:null,second:null,third:null},results:void 0}},mounted:function(){this.clickburger(),this.fullpage(),this.scroll()},methods:{turn:function(){b.a.post("",{}).then((function(){})).catch((function(t){return console.error("There was an error!",t)}))},postData:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.state.query=document.querySelector(".input").value,window.alert("predicting..."),t.$router.push({path:"/searchresult"}),b.a.post("http://140.123.174.200/api/Search",{searchQuery:t.$store.state.query}).then((function(e){console.log(e.data),t.$store.state.results=e.data.data})).catch((function(t){t.response&&(console.log(t.response.status),window.alert("無資料"))})),b.a.post("http://140.123.174.200/api/PredictionModel",{query:t.$store.state.query}).then((function(e){t.$store.state.resultp.first=e.data.first,t.$store.state.resultp.second=e.data.second,t.$store.state.resultp.third=e.data.third,console.log(e),window.alert("finished!")}));case 5:case"end":return e.stop()}}),e)})))()},clickburger:function(){var t=function(){var t=document.querySelector(".burger"),e=document.querySelector(".nav-links");t.addEventListener("click",(function(){e.classList.toggle("nav-active"),t.classList.toggle("toggle")}))};t()},backcolor:function(){var t=document.querySelector(".backcolor");h["a"].fromTo(t,1.4,{x:"-100%"},{x:"0%",ease:h["a"].easeInOut},"+=10")},fullpage:function(){h["a"].fromTo(".navbar",1,{y:"-10vh",opacity:0},{y:"0%",opacity:1,ease:h["a"].easeInOut},"+=0.8")},scroll:function(){var t=0;window.addEventListener("scroll",(function(){var e=window.pageYOffset;document.getElementById("navbar").style.top=t>e?"0px":"-100px",t=e}))}}},C=g,x=(a("3568"),Object(u["a"])(C,f,p,!1,null,"cedbc5bc",null)),w=x.exports,O={name:"App",components:{NavBar:w,Footer:v}},j=O,$=(a("034f"),Object(u["a"])(j,s,i,!1,null,null,null)),k=$.exports,E=(a("15f5"),a("7051"),a("8c4f")),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("Title"),a("Body")],1)},S=[],L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas"},[a("section",{staticClass:"sec-01"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"main-title"},[t._v("如何找律師呢?")]),a("div",{staticClass:"content"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:"https://cdn.chyanweb.com/update/file/2022-5/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202022-05-04%20103942.png",alt:""}})]),a("div",{staticClass:"text-box"},[a("h3",[t._v("找律師")]),a("br"),a("p",[t._v(" 第一步："),a("br"),t._v(" 輸入律師姓名、案件類型或關鍵字。"),a("br"),t._v(" 第二步："),a("br"),t._v(" 查看判決書，選擇推薦律師。 ")])])])])]),a("section",{staticClass:"sec-02"},[a("div",{staticClass:"content"},[a("div",{staticClass:"text-box sec-02-box1"},[a("h4",{staticClass:"info-title"},[t._v("創新、獨家的搜尋方式")]),a("p",[t._v(" 透過關鍵字搜索，將會找到類似的案件，如未搜索到結果，可以點擊右方採用Bert模型訓練出的參考案由進行查找。 ")])]),a("div",{staticClass:"text-box sec-02-box2"},[a("h4",{staticClass:"info-title"},[t._v("詳細的判決書資訊")]),a("p",[t._v(" 網站收錄了近三年嘉義市刑法案件的判決書14,000筆，豐富的判決讓使用者查詢。 ")])]),a("div",{staticClass:"text-box sec-02-box3"},[a("h4",{staticClass:"info-title"},[t._v("豐富的律師資訊")]),a("p",[t._v(" 資料庫含括了11,000筆全台灣的律師資訊，讓找律師變得更簡單。 "),a("br")])])])])])}],q=a("6e55"),T=a("ab11"),A={name:"Body",mounted:function(){Object(T["a"])(document.querySelectorAll(".jarallax"),{speed:.2}),Object(q["a"])({reset:!0,distance:"100px",duration:2500,interval:0,scale:.8}),Object(q["a"])().reveal(".main-title",{delay:100,origin:"left"}),Object(q["a"])().reveal(".sec-01 .image",{delay:100,origin:"bottom"}),Object(q["a"])().reveal(".text-box",{delay:100,origin:"right"}),Object(q["a"])().reveal(".sec-02-box1",{delay:100,origin:"bottom",distance:"100px"}),Object(q["a"])().reveal(".sec-02-box2",{delay:150,origin:"bottom",distance:"200px"}),Object(q["a"])().reveal(".sec-02-box3",{delay:200,origin:"bottom",distance:"300px"}),Object(q["a"])().reveal(".media-info li",{delay:100,origin:"top",interval:200})}},B=A,M=(a("c5ba"),Object(u["a"])(B,L,P,!1,null,"46cbfd54",null)),N=M.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas"},[a("div",{staticClass:"containerOrigin"},[a("h2",[t._v("LawyerUP")]),a("div",{staticClass:"pic"},[a("div",{staticClass:"firstpic"}),a("div",{staticClass:"secondpic"}),a("div",{staticClass:"thirdpic"},[a("video",{attrs:{src:"https://cdn.chyanweb.com/update/file/2022-5/pexels-ekaterina-bolovtsova-6101361.mp4",loop:"",autoplay:"",muted:""},domProps:{muted:!0}})]),a("div",{staticClass:"fourthpic"}),a("div",{staticClass:"fifthpic"},[a("video",{attrs:{src:"https://url.chyanweb.com/a0s",loop:"",autoplay:"",muted:""},domProps:{muted:!0}})]),a("div",{staticClass:"sixthpic"})]),a("div",{staticClass:"vague"})])])},F=[],U=a("1209"),G={name:"Title",mounted:function(){this.title(),Object(q["a"])({reset:!0,distance:"100px",duration:2500,interval:0,scale:.8}),Object(q["a"])().reveal(".firstpic",{delay:200,origin:"left"}),Object(q["a"])().reveal(".secondpic",{delay:250,origin:"bottom"}),Object(q["a"])().reveal(".thirdpic",{delay:300,origin:"top"}),Object(q["a"])().reveal(".fourthpic",{delay:350,origin:"right",distance:"50px"}),Object(q["a"])().reveal(".fifthpic",{delay:350,origin:"bottom",distance:"200px"}),Object(q["a"])().reveal(".sixthpic",{delay:250,origin:"right",distance:"300px"})},methods:{title:function(){(function t(){Object(U["a"])({targets:".block",translateX:function(){return U["a"].random(-700,700)},translateY:function(){return U["a"].random(-500,500)},scale:function(){return U["a"].random(1,5)},endDelay:500,easing:"linear",duration:4e3,delay:U["a"].stagger(20),complete:t})})()}}},I=G,Y=(a("d564"),Object(u["a"])(I,R,F,!1,null,"58cf2086",null)),H=Y.exports,J={name:"Animation",components:{Body:N,Title:H}},Q=J,W=(a("d8da"),Object(u["a"])(Q,D,S,!1,null,"67defa10",null)),X=W.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("div",{staticClass:"blockdisplay"},[a("div",{staticClass:"eventDetail"},[a("div",{staticClass:"informationFirstLine"},[a("div",{staticClass:"year"},[t._v(t._s(t.eventDetail.year))]),a("div",{staticClass:"word"},[t._v(t._s(t.eventDetail.word))]),a("div",{staticClass:"number"},[t._v(t._s(t.eventDetail.number))]),a("div",{staticClass:"classification"},[t._v(t._s(t.eventDetail.classification))]),a("div",{staticClass:"courtCode"},[t._v(t._s(t.eventDetail.courtCode))])]),a("br"),a("div",{staticClass:"beforeMain"},[t._v(t._s(t.eventDetail.beforeMain))]),a("div",{staticClass:"mainContent"},[t._v(t._s(t.eventDetail.mainContent))]),a("div",{staticClass:"factReason"},[t._v(t._s(t.eventDetail.factReason))]),a("div",{staticClass:"judgeDate"},[t._v(t._s(t.eventDetail.judgeDate))])]),a("button",{staticClass:"close",on:{click:t.cancel}})]),a("div",{staticClass:"result"},[a("div",{staticClass:"record"},t._l(t.results,(function(e){return a("div",{key:e.id,staticClass:"data"},[a("div",{staticClass:"information"},[a("div",{staticClass:"space"},[t._v(t._s(e.classification))]),a("div",{staticClass:"space"},[t._v(t._s(e.type))]),a("div",{staticClass:"space"},[t._v(t._s(e.year))]),a("div",{staticClass:"space"},[t._v(t._s(e.judgeDate))])]),a("label",[t._v("經驗律師:")]),a("div",{staticClass:"lawyer"},t._l(e.lawyers,(function(e){return a("div",{key:e.id},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"lawyerbutton",on:{click:function(a){return t.detail(e.id)}}},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"content"},[t._v(" "+t._s(e.mainContent)),a("button",{staticClass:"searchid",on:{click:function(a){return t.showsearchid(e.id)}}},[t._v(" (點擊閱讀更多資料...) ")])])])})),0),a("div",{staticClass:"predict"},[a("h3",[t._v("預測案由")]),a("button",{on:{click:function(e){return t.turn(t.first)}}},[t._v(" "+t._s(this.$store.state.resultp.first)+" ")]),a("button",{on:{click:function(e){return t.turn(t.second)}}},[t._v(" "+t._s(this.$store.state.resultp.second)+" ")]),a("button",{on:{click:function(e){return t.turn(t.third)}}},[t._v(" "+t._s(this.$store.state.resultp.third)+" ")])])]),a("lawyer-modal",{attrs:{id:t.lawyerid}})],1)},K=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{id:"modal-1",title:"律師資料","ok-only":""}},[a("table",{staticClass:"table"},[a("tr",[a("td",[t._v("姓名")]),a("td",[t._v(t._s(t.response.name))])]),a("tr",[a("td",[t._v("律師證號")]),a("td",[t._v(t._s(t.response.now_lic_no))])]),a("tr",[a("td",[t._v("性別")]),a("td",[t._v(t._s(t.response.sex))])]),a("tr",[a("td",[t._v("公會")]),a("td",[t._v(t._s(t.response.guild_name))])]),a("tr",[a("td",[t._v("事務所")]),a("td",[t._v(t._s(t.response.office))])]),a("tr",[a("td",[t._v("Email")]),a("td",[t._v(t._s(t.response.email))])]),a("tr",[a("td",[t._v("電話")]),a("td",[t._v(t._s(t.response.tel))])]),a("tr",[a("td",[t._v("地址")]),a("td",[t._v(t._s(t.response.address))])])])])},Z=[],tt={name:"LawyerModal",props:{id:String},data:function(){return{response:this.getData(this.id)}},watch:{id:{immediate:!0,handler:function(t){this.getData(t)}}},methods:{getData:function(t){var e=this;void 0!=t&&b.a.get("http://140.123.174.200/api/Lawyer/"+t).then((function(t){console.log(t.data),e.response=t.data})).catch((function(t){console.log(t)}))}}},et=tt,at=Object(u["a"])(et,V,Z,!1,null,null,null),nt=at.exports;n["default"].use(y["a"],b.a);var st={name:"SearchResult",components:{LawyerModal:nt},computed:{results:function(){return this.$store.state.results},first:function(){return this.$store.state.resultp.first},second:function(){return this.$store.state.resultp.second},third:function(){return this.$store.state.resultp.third}},data:function(){return{eventDetail:{id:null},lawyerid:null}},methods:{detail:function(t){this.lawyerid=t},cancel:function(){document.querySelector(".blockdisplay").style.display="none"},showsearchid:function(t){var e=this;b.a.get("http://140.123.174.200/api/Search/"+t).then((function(t){e.eventDetail=t.data,console.log(t.data)})),document.querySelector(".blockdisplay").style.display="flex"},turn:function(t){var e=this;console.log(t),b.a.post("http://140.123.174.200/api/Search",{classification:t,searchQuery:this.$store.state.query}).then((function(t){console.log(t.data),e.$store.state.results=t.data.data}))}}},it=st,rt=(a("5d0b"),Object(u["a"])(it,z,K,!1,null,"37c7cbe9",null)),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Unit")},lt=[],ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paginationpage"},[a("div",{staticClass:"lawyercontainer"},[a("div",{staticClass:"text-box"},[a("Pagination",{on:{changeurll:function(e){return t.changeurl(e)}}}),t._l(t.list,(function(e){return a("div",{key:e.id,staticClass:"data"},[a("div",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"information",on:{click:function(a){return t.detail(e.id)}}},[a("div",{staticClass:"space name"},[t._v(t._s(e.name))]),a("div",{staticClass:"space sex"},[t._v(t._s(e.sex))]),a("div",{staticClass:"space guild_name"},[t._v(t._s(e.guild_name))]),a("div",{staticClass:"space email"},[t._v(t._s(e.email))]),a("div",{staticClass:"space tel"},[t._v(t._s(e.tel))])])])})),a("lawyer-modal",{attrs:{id:t.lawyerid}})],2)])])},dt=[],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.input.page,expression:"input.page"}],attrs:{id:"select"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.input,"page",e.target.multiple?a:a[0])},t.GoTo]}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.sex,expression:"input.sex"}],attrs:{type:"checkbox",name:"sex"},domProps:{checked:Array.isArray(t.input.sex)?t._i(t.input.sex,null)>-1:t.input.sex},on:{change:[function(e){var a=t.input.sex,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&t.$set(t.input,"sex",a.concat([i])):r>-1&&t.$set(t.input,"sex",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.input,"sex",s)},t.GoTo]}}),a("label",{attrs:{for:"sex"}},[t._v("Gender")])])},ft=[];n["default"].use(y["a"],b.a);var pt={name:"Pagination",data:function(){return{input:{page:null,sex:null,name:null}}},mounted:function(){var t,e=this;n["default"].axios.get("http://140.123.174.200/api/Lawyer").then((function(a){e.count=a.data.pageCount,t=a.data.pageCount;for(var n=document.getElementById("select"),s=1;s<=t-0;s++){var i=document.createElement("option");i.value=s,i.innerHTML=s,n.appendChild(i)}}))},methods:{GoTo:function(){this.$emit("changeurll",{page:this.input.page,sex:this.input.sex})}}},mt=pt,ht=(a("e15b"),Object(u["a"])(mt,vt,ft,!1,null,"2ba7733c",null)),_t=ht.exports;n["default"].use(y["a"],b.a);var bt={name:"Unit",components:{Pagination:_t,LawyerModal:nt},data:function(){return{list:void 0,detaillist:{name:null},url:"http://140.123.174.200/api/Lawyer/",lawyerid:void 0}},mounted:function(){var t=this;n["default"].axios.get("http://140.123.174.200/api/Lawyer").then((function(e){t.list=e.data.data})),this.parallax()},methods:{changeurl:function(t){var e=this,a=t.page,s=t.sex,i="http://140.123.174.200/api/Lawyer?CurrentPage=",r="";null==a&&(a=1),1==s&&(r="&Sort=sex"),i=i+a+r,n["default"].axios.get(i).then((function(t){e.list=t.data.data,console.log(t)}))},detail:function(t){this.lawyerid=t},parallax:function(){var t=document.querySelector(".container");window.addEventListener("scroll",(function(){var e=window.pageYOffset;t.style.backgroundPositionY=.4*e+"px"}))}}},yt=bt,gt=(a("2ad2"),Object(u["a"])(yt,ut,dt,!1,null,"e922e904",null)),Ct=gt.exports,xt={name:"Lawyer",components:{Unit:Ct}},wt=xt,Ot=Object(u["a"])(wt,ct,lt,!1,null,"57f65dc6",null),jt=Ot.exports,$t=a("2f62");n["default"].use($t["a"]);var kt=new $t["a"].Store({state:{resultp:{first:"",second:"",third:""},results:void 0,query:null},getters:{},mutations:{},actions:{}}),Et=a("5f5b"),Dt=a("b1e0");a("f9e3"),a("2dd8");n["default"].use(Et["a"]),n["default"].use(Dt["a"]),n["default"].use(E["a"]);var St=[{path:"/",name:"Home",component:X},{path:"/searchresult",name:"SearchResult",component:ot},{path:"/lawyer",name:"Lawyer",component:jt}],Lt=new E["a"]({routes:St});n["default"].config.productionTip=!1,new n["default"]({store:kt,router:Lt,render:function(t){return t(k)}}).$mount("#app")},5871:function(t,e,a){},"5d0b":function(t,e,a){"use strict";a("c512")},"85ec":function(t,e,a){},c512:function(t,e,a){},c5ba:function(t,e,a){"use strict";a("5871")},d564:function(t,e,a){"use strict";a("1ea0")},d8da:function(t,e,a){"use strict";a("fd47")},e15b:function(t,e,a){"use strict";a("4833")},ea31:function(t,e,a){},fd47:function(t,e,a){},ffc0:function(t,e,a){"use strict";a("3abd")}});
//# sourceMappingURL=app.744f5937.js.map