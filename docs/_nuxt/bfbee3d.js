(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{250:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},251:function(t,e,n){n(3)({target:"Number",stat:!0},{isFinite:n(252)})},252:function(t,e,n){var r=n(0).isFinite;t.exports=Number.isFinite||function(t){return"number"==typeof t&&r(t)}},253:function(t,e,n){"use strict";var r=n(11),o=n(0),l=n(4),c=n(106),f=n(16),v=n(12),m=n(181),d=n(34),x=n(75),h=n(180),w=n(5),_=n(76).f,C=n(26).f,y=n(15).f,N=n(250),k=n(254).trim,P="Number",S=o.Number,I=S.prototype,E=o.TypeError,V=l("".slice),F=l("".charCodeAt),R=function(t){var e=h(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,n,r,o,l,c,f,code,v=h(t,"number");if(x(v))throw E("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=k(v),43===(e=F(v,0))||45===e){if(88===(n=F(v,2))||120===n)return NaN}else if(48===e){switch(F(v,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+v}for(c=(l=V(v,2)).length,f=0;f<c;f++)if((code=F(l,f))<48||code>o)return NaN;return parseInt(l,r)}return+v};if(c(P,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var O,j=function(t){var e=arguments.length<1?0:S(R(t)),n=this;return d(I,n)&&w((function(){N(n)}))?m(Object(e),n,j):e},T=r?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;T.length>A;A++)v(S,O=T[A])&&!v(j,O)&&y(j,O,C(S,O));j.prototype=I,I.constructor=j,f(o,P,j)}},254:function(t,e,n){var r=n(4),o=n(23),l=n(13),c=n(255),f=r("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),d=RegExp(v+v+"*$"),x=function(t){return function(e){var n=l(o(e));return 1&t&&(n=f(n,m,"")),2&t&&(n=f(n,d,"")),n}};t.exports={start:x(1),end:x(2),trim:x(3)}},255:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},256:function(t,e,n){"use strict";var r=n(3),o=n(0),l=n(4),c=n(43),f=n(250),v=n(182),m=n(5),d=o.RangeError,x=o.String,h=Math.floor,w=l(v),_=l("".slice),C=l(1..toFixed),y=function(t,e,n){return 0===e?n:e%2==1?y(t,e-1,n*t):y(t*t,e/2,n)},N=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=h(r/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=h(n/t),n=n%t*1e7},P=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=x(data[t]);s=""===s?e:s+w("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:m((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!m((function(){C({})}))},{toFixed:function(t){var e,n,r,o,l=f(this),v=c(t),data=[0,0,0,0,0,0],m="",h="0";if(v<0||v>20)throw d("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return x(l);if(l<0&&(m="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*y(2,69,1))-69)<0?l*y(2,-e,1):l/y(2,e,1),n*=4503599627370496,(e=52-e)>0){for(N(data,0,n),r=v;r>=7;)N(data,1e7,0),r-=7;for(N(data,y(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),N(data,1,1),k(data,2),h=P(data)}else N(data,0,n),N(data,1<<-e,0),h=P(data)+w("0",v);return h=v>0?m+((o=h.length)<=v?"0."+w("0",v-o)+h:_(h,0,o-v)+"."+_(h,o-v)):m+h}})},257:function(t,e,n){"use strict";n.r(e);n(251),n(253),n(256);var r=n(2),o=[28.5,15.7,11,8,7.2,5.1,4,3.2,2.8,2.5],l=r.a.extend({data:function(){return{kwMonthlySearchValue:0,targetPosition:1,conversionRate:0,conversionValue:0,monthlySeoPrice:0}},computed:{expectedReturn:function(){return this.kwMonthlySearchValue/100*o[this.targetPosition-1]/this.conversionRate*this.conversionValue},returnOnInvestment:function(){return(this.expectedReturn-this.monthlySeoPrice)/this.monthlySeoPrice*100}},filters:{currency:function(t){return t&&Number.isFinite(t)?t.toFixed(2):"0"},percentage:function(t){return t&&Number.isFinite(t)?t.toFixed(2):"0"}},methods:{checkTargetPosition:function(){this.targetPosition=this.targetPosition>10?1:this.targetPosition<1?10:this.targetPosition}}}),c=n(55),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("div",{staticClass:"w-full flex flex-col items-center bg-effectix-200 text-white"},[n("h2",{staticClass:"text-5xl mt-4 mb-4 text-center"},[t._v("\n      Kalkulačka výnosů a návratnosti SEO\n    ")]),t._v(" "),n("div",{staticClass:"flex flex-col w-4/5 md:w-2/5 p-2"},[n("div",{staticClass:"flex items-center justify-between gap-2 mt-8"},[n("span",{staticClass:"pr-8 text-xl"},[t._v("Hledanost klíčového slova za 1 měsíc")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.kwMonthlySearchValue,expression:"kwMonthlySearchValue"}],staticClass:"w-32 h-12 rounded-md text-black text-left pl-8",attrs:{type:"number"},domProps:{value:t.kwMonthlySearchValue},on:{input:function(e){e.target.composing||(t.kwMonthlySearchValue=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex items-center justify-between gap-2 mt-8"},[n("span",{staticClass:"pr-8 text-xl"},[t._v("Pozice, na kterou cílíme (1.-10.)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.targetPosition,expression:"targetPosition"}],staticClass:"w-32 h-12 rounded-md text-black text-left pl-8",attrs:{type:"number"},domProps:{value:t.targetPosition},on:{change:t.checkTargetPosition,input:function(e){e.target.composing||(t.targetPosition=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex items-center justify-between gap-2 mt-8"},[n("span",{staticClass:"pr-8 text-xl"},[t._v("Konverzní poměr")]),t._v(" "),n("div",{staticClass:"w-32 flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.conversionRate,expression:"conversionRate"}],staticClass:"w-full h-12 rounded-l-md text-black text-left pl-8",attrs:{type:"number"},domProps:{value:t.conversionRate},on:{input:function(e){e.target.composing||(t.conversionRate=e.target.value)}}}),t._v(" "),n("span",{staticClass:"bg-white text-black p-3 rounded-r-md"},[t._v("%")])])]),t._v(" "),n("div",{staticClass:"flex items-center justify-between gap-2 mt-8"},[n("span",{staticClass:"pr-8 text-xl"},[t._v("Hodnota konverze")]),t._v(" "),n("div",{staticClass:"w-32 flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.conversionValue,expression:"conversionValue"}],staticClass:"w-full h-12 rounded-l-md text-black text-left pl-8",attrs:{type:"number"},domProps:{value:t.conversionValue},on:{input:function(e){e.target.composing||(t.conversionValue=e.target.value)}}}),t._v(" "),n("span",{staticClass:"bg-white text-black p-3 rounded-r-md"},[t._v("CZK")])])]),t._v(" "),n("div",{staticClass:"flex items-center justify-between gap-2 mt-8 mb-4"},[n("span",{staticClass:"pr-8 text-xl"},[t._v("Cena SEO za 1 měsíc")]),t._v(" "),n("div",{staticClass:"w-32 flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.monthlySeoPrice,expression:"monthlySeoPrice"}],staticClass:"w-full h-12 rounded-l-md text-black text-left pl-8",attrs:{type:"number"},domProps:{value:t.monthlySeoPrice},on:{input:function(e){e.target.composing||(t.monthlySeoPrice=e.target.value)}}}),t._v(" "),n("span",{staticClass:"bg-white text-black p-3 rounded-r-md"},[t._v("CZK")])])])])]),t._v(" "),n("div",{staticClass:"w-full flex flex-col items-center bg-effectix-100 text-white"},[n("div",{staticClass:"flex flex-col w-4/5 md:w-2/5 p-2"},[n("div",{staticClass:"flex items-center justify-between gap-2 mt-4"},[n("span",{staticClass:"pr-8 text-xl"},[t._v("Očekávaný výnos")]),t._v(" "),n("div",{staticClass:"w-32 flex items-center"},[n("input",{staticClass:"w-full h-12 rounded-l-md text-black text-left pl-8",attrs:{type:"number"},domProps:{value:t._f("currency")(t.expectedReturn)}}),t._v(" "),n("span",{staticClass:"bg-white text-black p-3 rounded-r-md"},[t._v("CZK")])])]),t._v(" "),n("div",{staticClass:"flex items-center justify-between gap-2 mt-8 mb-4"},[n("span",{staticClass:"pr-8 text-xl"},[t._v("Návratnost investice")]),t._v(" "),n("div",{staticClass:"w-32 flex items-center"},[n("input",{staticClass:"w-full h-12 rounded-l-md text-black text-left pl-8",attrs:{type:"number"},domProps:{value:t._f("percentage")(t.returnOnInvestment)}}),t._v(" "),n("span",{staticClass:"bg-white text-black p-3 rounded-r-md"},[t._v("%")])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);