(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{255:function(M,t,n){var content=n(263);"string"==typeof content&&(content=[[M.i,content,""]]),content.locals&&(M.exports=content.locals);(0,n(53).default)("3c768ded",content,!0,{sourceMap:!1})},256:function(M,t,n){var content=n(293);"string"==typeof content&&(content=[[M.i,content,""]]),content.locals&&(M.exports=content.locals);(0,n(53).default)("1bca0118",content,!0,{sourceMap:!1})},257:function(M,t,n){"use strict";var e=n(264),c=n.n(e),I=n(265),r=n.n(I),o=n(266),j=n.n(o),N=n(267),D=n.n(N),z=n(268),y=n.n(z),A=n(269),l=n.n(A),T=n(270),d=n.n(T),x=n(271),L=n.n(x),O=n(272),m=n.n(O),w=n(273),E=n.n(w),f=n(274),k=n.n(f),h=n(275),S=n.n(h),C=n(276),v=n.n(C),Y=n(277),Q=n.n(Y),U=n(278),Z=n.n(U),G=n(279),W=n.n(G),P=n(280),_=n.n(P),H=n(281),B=n.n(H),J=n(282),V=n.n(J),R=n(283),F=n.n(R),K=n(284),X=n.n(K),$=n(285),MM=n.n($),tM=n(286),iM=n.n(tM),nM=n(287),eM=n.n(nM),sM=n(288),aM=n.n(sM),uM=n(289),cM=n.n(uM),gM=n(290),IM=n.n(gM),rM=n(291),oM=n.n(rM),jM={props:{isActive:{type:Boolean,default:!1},icon:{type:String,required:!0},size:{type:String,default:"medium"}},computed:{iconLink:function(){if(this.isActive)switch(this.icon){case"arrow":return Z.a;case"artboard":return W.a;case"close":return _.a;case"draw":return B.a;case"eraser":return V.a;case"export":return F.a;case"link":return X.a;case"locked":return MM.a;case"select":return iM.a;case"shape":return eM.a;case"sticky-note":return aM.a;case"stopwatch":return cM.a;case"text":return IM.a;case"unlocked":return oM.a;default:throw new Error("Unknown icon: ".concat(this.icon))}else switch(this.icon){case"arrow":return c.a;case"artboard":return r.a;case"close":return j.a;case"draw":return D.a;case"eraser":return y.a;case"export":return l.a;case"link":return d.a;case"locked":return L.a;case"select":return m.a;case"shape":return E.a;case"sticky-note":return k.a;case"stopwatch":return S.a;case"text":return v.a;case"unlocked":return Q.a;default:throw new Error("Unknown icon: ".concat(this.icon))}},cssClass:function(){return"icon icon--".concat(this.size)}}},NM=(n(292),n(29)),component=Object(NM.a)(jM,(function(){var M=this.$createElement,t=this._self._c||M;return t("span",{class:this.cssClass},[t("img",{attrs:{src:this.iconLink}})])}),[],!1,null,null,null);t.a=component.exports},258:function(M,t,n){"use strict";var e=n(3),c=n(23),I=n(32),r=n(155),o=n(73),j=n(15),N=n(54).f,D=n(74).f,z=n(14).f,y=n(259).trim,A=e.Number,l=A,T=A.prototype,d="Number"==I(n(94)(T)),x="trim"in String.prototype,L=function(M){var t=o(M,!1);if("string"==typeof t&&t.length>2){var n,e,c,I=(t=x?t.trim():y(t,3)).charCodeAt(0);if(43===I||45===I){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===I){switch(t.charCodeAt(1)){case 66:case 98:e=2,c=49;break;case 79:case 111:e=8,c=55;break;default:return+t}for(var code,r=t.slice(2),i=0,j=r.length;i<j;i++)if((code=r.charCodeAt(i))<48||code>c)return NaN;return parseInt(r,e)}}return+t};if(!A(" 0o1")||!A("0b1")||A("+0x1")){A=function(M){var t=arguments.length<1?0:M,n=this;return n instanceof A&&(d?j((function(){T.valueOf.call(n)})):"Number"!=I(n))?r(new l(L(t)),n,A):L(t)};for(var O,m=n(11)?N(l):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;m.length>w;w++)c(l,O=m[w])&&!c(A,O)&&z(A,O,D(l,O));A.prototype=T,T.constructor=A,n(16)(e,"Number",A)}},259:function(M,t,n){var e=n(7),c=n(30),I=n(15),r=n(260),o="["+r+"]",j=RegExp("^"+o+o+"*"),N=RegExp(o+o+"*$"),D=function(M,t,n){var c={},o=I((function(){return!!r[M]()||"​"!="​"[M]()})),j=c[M]=o?t(z):r[M];n&&(c[n]=j),e(e.P+e.F*o,"String",c)},z=D.trim=function(M,t){return M=String(c(M)),1&t&&(M=M.replace(j,"")),2&t&&(M=M.replace(N,"")),M};M.exports=D},260:function(M,t){M.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},261:function(M,t,n){var content=n(311);"string"==typeof content&&(content=[[M.i,content,""]]),content.locals&&(M.exports=content.locals);(0,n(53).default)("3f49d5a2",content,!0,{sourceMap:!1})},262:function(M,t,n){"use strict";var e=n(255);n.n(e).a},263:function(M,t,n){(t=n(52)(!1)).push([M.i,".page-section{width:100%;height:100vh;display:flex;align-items:center;justify-items:center;justify-content:center;flex-direction:column;position:absolute}",""]),M.exports=t},264:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjgxODcgMjVDMTUuNDU2MSAyNSAxNS4wOTM1IDI0LjgxMSAxNC45MTIyIDI0LjYyMkwwLjQwNzkzMiA5LjUwMzk0Qy0wLjEzNTk3NyA4LjkzNzAxIC0wLjEzNTk3NyA3Ljk5MjEzIDAuNDA3OTMyIDcuNDI1MkMwLjk1MTg0MSA2Ljg1ODI3IDEuODU4MzYgNi44NTgyNyAyLjQwMjI3IDcuNDI1MkwxNiAyMS41OTg0TDI5LjU5NzcgNy40MjUyQzMwLjE0MTYgNi44NTgyNyAzMS4wNDgyIDYuODU4MjcgMzEuNTkyMSA3LjQyNTJDMzIuMTM2IDcuOTkyMTMgMzIuMTM2IDguOTM3MDEgMzEuNTkyMSA5LjUwMzk0TDE3LjA4NzggMjQuNjIyQzE2LjM2MjYgMjQuODExIDE2IDI1IDE1LjgxODcgMjVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},265:function(M,t,n){M.exports=n.p+"img/3446acd.svg"},266:function(M,t,n){M.exports=n.p+"img/957144b.svg"},267:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1LjIyODggMC4wMzg4OTI2QzI0Ljg5MjUgLTAuMDYwMDgzMyAyNC41MjgyIDAuMDMzMjkwMSAyNC4yODE2IDAuMjc5Nzk5TDEuMjgzMjEgMjMuMjc0M1YyMy4yNzYxQzEuMTM1NjIgMjMuNDIzNyAxLjA0MDMzIDIzLjYxNiAxLjAxMjMxIDIzLjgyMTRMMC4wMDkwMjgwMyAzMC45MTQxVjMwLjkxNkMtMC4wMzIwNzM2IDMxLjIxMTEgMC4wNjg4MTI1IDMxLjUwOCAwLjI3ODA1OCAzMS43MTlDMC40ODkxNzQgMzEuOTMwMSAwLjc4NjIyNyAzMi4wMzA5IDEuMDgxNDIgMzEuOTkxN0w4LjE5MDAzIDMwLjk4N0M4LjM5MzY3IDMwLjk1NzEgOC41ODIzNyAzMC44NiA4LjcyNjIzIDMwLjcxNDNMMzEuNzI2NSA3LjcxNzk0QzMyLjA5NDYgNy4zNDI1NyAzMi4wOTA4IDYuNzQxMjMgMzEuNzE3MiA2LjM2OTYyTDI1LjY0MTYgMC4yODg5ODVDMjUuNTI3NyAwLjE3MTMzNSAyNS4zODU3IDAuMDg1NDI5MSAyNS4yMjg3IDAuMDM4NzQwM0wyNS4yMjg4IDAuMDM4ODkyNlpNMjQuOTU3OSAyLjMxNzIxTDI5LjY5MjEgNy4wNDkzOUwyOC4zMzk1IDguNDAzMjlMMjMuNjA1MyAzLjY3MTEyTDI0Ljk1NzkgMi4zMTcyMVpNMjIuMjUwOCA1LjAyNTA3TDI2Ljk4NDkgOS43NTcyNUw4LjM4NDMxIDI4LjM0NjJMMy42NTAxNCAyMy42MTQxTDIyLjI1MDggNS4wMjUwN1pNMi43MjU2MyAyNS4zOTM1TDYuNjA0MTYgMjkuMjc3OEwyLjA4Mjk4IDI5LjkyMjFMMi43MjU2OCAyNS4zOTE2TDIuNzI1NjMgMjUuMzkzNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},268:function(M,t,n){M.exports=n.p+"img/fbff460.svg"},269:function(M,t,n){M.exports=n.p+"img/9873d80.svg"},270:function(M,t,n){M.exports=n.p+"img/a635d5c.svg"},271:function(M,t,n){M.exports=n.p+"img/a10ac76.svg"},272:function(M,t,n){M.exports=n.p+"img/9f0bc6b.svg"},273:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9InBhdGgtMi1pbnNpZGUtMSIgZmlsbD0id2hpdGUiPgo8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIyIi8+CjwvbWFzaz4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSI0LjQiIG1hc2s9InVybCgjcGF0aC0yLWluc2lkZS0xKSIvPgo8L3N2Zz4K"},274:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMS40MTQyIDE5LjU4NThMMjUuNSAyNS41TDIwLjA5MzkgMzEuMzU2NkMxOS43MTUzIDMxLjc2NjcgMTkuMTgyNSAzMiAxOC42MjQzIDMySDJDMC44OTU0MyAzMiAwIDMxLjEwNDYgMCAzMFYyQzAgMC44OTU0MzEgMC44OTU0MzEgMCAyIDBIMzBDMzEuMTA0NiAwIDMyIDAuODk1NDMxIDMyIDJWMTguMTcxNkMzMiAxOC43MDIgMzEuNzg5MyAxOS4yMTA3IDMxLjQxNDIgMTkuNTg1OFpNMjMuOTEzMyAyMy45NzU1TDE5LjEgMjkuMTg5OFYyMEMxOS4xIDE5LjUwMjkgMTkuNTAyOSAxOS4xIDIwIDE5LjFIMjguNzg4N0wyMy45MTMzIDIzLjk3NTVaTTI5LjggMTYuOUgyMEMxOC4yODc5IDE2LjkgMTYuOSAxOC4yODc5IDE2LjkgMjBWMjkuOEgyLjJWMi4ySDI5LjhWMTYuOVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},275:function(M,t,n){M.exports=n.p+"img/f8b6405.svg"},276:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiA0LjY5NjZWNi4wODk4MUMzMiA2LjQzODExIDMxLjY1MTcgNi43ODY0MSAzMS4zMDM0IDYuNzg2NDFIMjMuNjQwOEgyMy4yOTI1VjcuMTM0NzFWMjYuOTg3OUMyMy4yOTI1IDI3LjMzNjIgMjIuOTQ0MiAyNy42ODQ1IDIyLjU5NTkgMjcuNjg0NUgyMS4yMDI3QzIwLjg1NDMgMjcuNjg0NSAyMC41MDYxIDI3LjMzNjIgMjAuNTA2MSAyNi45ODc5VjcuMTM0NzFWNi43ODY0MUgyMC4xNTc3SDEyLjQ5NTFDMTIuMTQ2OCA2Ljc4NjQxIDExLjc5ODUgNi40MzgxMSAxMS43OTg1IDYuMDg5ODFWNC42OTY2QzExLjc5ODUgNC4zNDgzIDEyLjE0NjggNCAxMi40OTUxIDRIMzEuMzAzNEMzMS42NTE3IDQgMzIgNC4zNDgzIDMyIDQuNjk2NlpNMTYuNzE4NSAxMS42NjI2VjEzLjA1NThDMTYuNzE4NSAxMy40MDQxIDE2LjM3MDIgMTMuNzUyNCAxNi4wMjE5IDEzLjc1MjRIMTAuMTAwN0g5Ljc1MjQ0VjE0LjEwMDdWMjYuOTg3OUM5Ljc1MjQ0IDI3LjMzNjIgOS40MDQxNCAyNy42ODQ1IDkuMDU1ODQgMjcuNjg0NUg3LjY2MjYzQzcuMzE0MzMgMjcuNjg0NSA2Ljk2NjAzIDI3LjMzNjIgNi45NjYwMyAyNi45ODc5VjE0LjEwMDdWMTMuNzUyNEg2LjYxNzczSDAuNjk2NjAzQzAuMzQ4MzAyIDEzLjc1MjQgMCAxMy40MDQxIDAgMTMuMDU1OFYxMS42NjI2QzAgMTEuMzE0MyAwLjM0ODMwMiAxMC45NjYgMC42OTY2MDMgMTAuOTY2SDE2LjAyMTlDMTYuMzcwMiAxMC45NjYgMTYuNzE4NSAxMS4zMTQzIDE2LjcxODUgMTEuNjYyNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},277:function(M,t,n){M.exports=n.p+"img/bf65dd3.svg"},278:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjgxODcgMjVDMTUuNDU2MSAyNSAxNS4wOTM1IDI0LjgxMSAxNC45MTIyIDI0LjYyMkwwLjQwNzkzMiA5LjUwMzk0Qy0wLjEzNTk3NyA4LjkzNzAxIC0wLjEzNTk3NyA3Ljk5MjEzIDAuNDA3OTMyIDcuNDI1MkMwLjk1MTg0MSA2Ljg1ODI3IDEuODU4MzYgNi44NTgyNyAyLjQwMjI3IDcuNDI1MkwxNiAyMS41OTg0TDI5LjU5NzcgNy40MjUyQzMwLjE0MTYgNi44NTgyNyAzMS4wNDgyIDYuODU4MjcgMzEuNTkyMSA3LjQyNTJDMzIuMTM2IDcuOTkyMTMgMzIuMTM2IDguOTM3MDEgMzEuNTkyMSA5LjUwMzk0TDE3LjA4NzggMjQuNjIyQzE2LjM2MjYgMjQuODExIDE2IDI1IDE1LjgxODcgMjVaIiBmaWxsPSIjMzk4NUY3Ii8+Cjwvc3ZnPgo="},279:function(M,t,n){M.exports=n.p+"img/7f1877e.svg"},280:function(M,t,n){M.exports=n.p+"img/672f92a.svg"},281:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1LjIyODggMC4wMzg4OTI2QzI0Ljg5MjUgLTAuMDYwMDgzMyAyNC41MjgyIDAuMDMzMjkwMSAyNC4yODE2IDAuMjc5Nzk5TDEuMjgzMjEgMjMuMjc0M1YyMy4yNzYxQzEuMTM1NjIgMjMuNDIzNyAxLjA0MDMzIDIzLjYxNiAxLjAxMjMxIDIzLjgyMTRMMC4wMDkwMjgwMyAzMC45MTQxVjMwLjkxNkMtMC4wMzIwNzM2IDMxLjIxMTEgMC4wNjg4MTI1IDMxLjUwOCAwLjI3ODA1OCAzMS43MTlDMC40ODkxNzQgMzEuOTMwMSAwLjc4NjIyNyAzMi4wMzA5IDEuMDgxNDIgMzEuOTkxN0w4LjE5MDAzIDMwLjk4N0M4LjM5MzY3IDMwLjk1NzEgOC41ODIzNyAzMC44NiA4LjcyNjIzIDMwLjcxNDNMMzEuNzI2NSA3LjcxNzk0QzMyLjA5NDYgNy4zNDI1NyAzMi4wOTA4IDYuNzQxMjMgMzEuNzE3MiA2LjM2OTYyTDI1LjY0MTYgMC4yODg5ODVDMjUuNTI3NyAwLjE3MTMzNSAyNS4zODU3IDAuMDg1NDI5MSAyNS4yMjg3IDAuMDM4NzQwM0wyNS4yMjg4IDAuMDM4ODkyNlpNMjQuOTU3OSAyLjMxNzIxTDI5LjY5MjEgNy4wNDkzOUwyOC4zMzk1IDguNDAzMjlMMjMuNjA1MyAzLjY3MTEyTDI0Ljk1NzkgMi4zMTcyMVpNMjIuMjUwOCA1LjAyNTA3TDI2Ljk4NDkgOS43NTcyNUw4LjM4NDMxIDI4LjM0NjJMMy42NTAxNCAyMy42MTQxTDIyLjI1MDggNS4wMjUwN1pNMi43MjU2MyAyNS4zOTM1TDYuNjA0MTYgMjkuMjc3OEwyLjA4Mjk4IDI5LjkyMjFMMi43MjU2OCAyNS4zOTE2TDIuNzI1NjMgMjUuMzkzNVoiIGZpbGw9IiMzOTg1RjciLz4KPC9zdmc+Cg=="},282:function(M,t,n){M.exports=n.p+"img/6928dfc.svg"},283:function(M,t,n){M.exports=n.p+"img/8db50b5.svg"},284:function(M,t,n){M.exports=n.p+"img/799a306.svg"},285:function(M,t,n){M.exports=n.p+"img/67166fe.svg"},286:function(M,t,n){M.exports=n.p+"img/a8a1c8d.svg"},287:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9InBhdGgtMi1pbnNpZGUtMSIgZmlsbD0id2hpdGUiPgo8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIyIi8+CjwvbWFzaz4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMiIgc3Ryb2tlPSIjMzk4NUY3IiBzdHJva2Utd2lkdGg9IjQuNCIgbWFzaz0idXJsKCNwYXRoLTItaW5zaWRlLTEpIi8+Cjwvc3ZnPgo="},288:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMS40MTQyIDE5LjU4NThMMjUuNSAyNS41TDIwLjA5MzkgMzEuMzU2NkMxOS43MTUzIDMxLjc2NjcgMTkuMTgyNSAzMiAxOC42MjQzIDMySDJDMC44OTU0MyAzMiAwIDMxLjEwNDYgMCAzMFYyQzAgMC44OTU0MzEgMC44OTU0MzEgMCAyIDBIMzBDMzEuMTA0NiAwIDMyIDAuODk1NDMxIDMyIDJWMTguMTcxNkMzMiAxOC43MDIgMzEuNzg5MyAxOS4yMTA3IDMxLjQxNDIgMTkuNTg1OFpNMjMuOTEzMyAyMy45NzU1TDE5LjEgMjkuMTg5OFYyMEMxOS4xIDE5LjUwMjkgMTkuNTAyOSAxOS4xIDIwIDE5LjFIMjguNzg4N0wyMy45MTMzIDIzLjk3NTVaTTI5LjggMTYuOUgyMEMxOC4yODc5IDE2LjkgMTYuOSAxOC4yODc5IDE2LjkgMjBWMjkuOEgyLjJWMi4ySDI5LjhWMTYuOVoiIGZpbGw9IiMzOTg1RjciLz4KPC9zdmc+Cg=="},289:function(M,t,n){M.exports=n.p+"img/2b833cc.svg"},290:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiA0LjY5NjZWNi4wODk4MUMzMiA2LjQzODExIDMxLjY1MTcgNi43ODY0MSAzMS4zMDM0IDYuNzg2NDFIMjMuNjQwOEgyMy4yOTI1VjcuMTM0NzFWMjYuOTg3OUMyMy4yOTI1IDI3LjMzNjIgMjIuOTQ0MiAyNy42ODQ1IDIyLjU5NTkgMjcuNjg0NUgyMS4yMDI3QzIwLjg1NDMgMjcuNjg0NSAyMC41MDYxIDI3LjMzNjIgMjAuNTA2MSAyNi45ODc5VjcuMTM0NzFWNi43ODY0MUgyMC4xNTc3SDEyLjQ5NTFDMTIuMTQ2OCA2Ljc4NjQxIDExLjc5ODUgNi40MzgxMSAxMS43OTg1IDYuMDg5ODFWNC42OTY2QzExLjc5ODUgNC4zNDgzIDEyLjE0NjggNCAxMi40OTUxIDRIMzEuMzAzNEMzMS42NTE3IDQgMzIgNC4zNDgzIDMyIDQuNjk2NlpNMTYuNzE4NSAxMS42NjI2VjEzLjA1NThDMTYuNzE4NSAxMy40MDQxIDE2LjM3MDIgMTMuNzUyNCAxNi4wMjE5IDEzLjc1MjRIMTAuMTAwN0g5Ljc1MjQ0VjE0LjEwMDdWMjYuOTg3OUM5Ljc1MjQ0IDI3LjMzNjIgOS40MDQxNCAyNy42ODQ1IDkuMDU1ODQgMjcuNjg0NUg3LjY2MjYzQzcuMzE0MzMgMjcuNjg0NSA2Ljk2NjAzIDI3LjMzNjIgNi45NjYwMyAyNi45ODc5VjE0LjEwMDdWMTMuNzUyNEg2LjYxNzczSDAuNjk2NjAzQzAuMzQ4MzAyIDEzLjc1MjQgMCAxMy40MDQxIDAgMTMuMDU1OFYxMS42NjI2QzAgMTEuMzE0MyAwLjM0ODMwMiAxMC45NjYgMC42OTY2MDMgMTAuOTY2SDE2LjAyMTlDMTYuMzcwMiAxMC45NjYgMTYuNzE4NSAxMS4zMTQzIDE2LjcxODUgMTEuNjYyNloiIGZpbGw9IiMzOTg1RjciLz4KPC9zdmc+Cg=="},291:function(M,t,n){M.exports=n.p+"img/9ca0cd8.svg"},292:function(M,t,n){"use strict";var e=n(256);n.n(e).a},293:function(M,t,n){(t=n(52)(!1)).push([M.i,".icon.icon--small,.icon.icon--small img{width:14px;height:14px}.icon.icon--medium,.icon.icon--medium img{width:20px;height:20px}.icon.icon--large,.icon.icon--large img{width:26px;height:26px}.icon.icon--xl,.icon.icon--xl img{width:32px;height:32px}",""]),M.exports=t},294:function(M,t,n){var content=n(315);"string"==typeof content&&(content=[[M.i,content,""]]),content.locals&&(M.exports=content.locals);(0,n(53).default)("2da5cec2",content,!0,{sourceMap:!1})},295:function(M,t,n){var content=n(317);"string"==typeof content&&(content=[[M.i,content,""]]),content.locals&&(M.exports=content.locals);(0,n(53).default)("31a05646",content,!0,{sourceMap:!1})},307:function(M,t,n){"use strict";n(262);var e=n(29),component=Object(e.a)({},(function(){var M=this.$createElement;return(this._self._c||M)("section",{staticClass:"page-section"},[this._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},310:function(M,t,n){"use strict";var e=n(261);n.n(e).a},311:function(M,t,n){(t=n(52)(!1)).push([M.i,".progress-bar{height:20px;background-color:#3985f7;transition:width 1s}",""]),M.exports=t},312:function(M,t,n){"use strict";n(313)("link",(function(M){return function(t){return M(this,"a","href",t)}}))},313:function(M,t,n){var e=n(7),c=n(15),I=n(30),r=/"/g,o=function(M,t,n,e){var c=String(I(M)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(e).replace(r,"&quot;")+'"'),o+">"+c+"</"+t+">"};M.exports=function(M,t){var n={};n[M]=t(o),e(e.P+e.F*c((function(){var t=""[M]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},314:function(M,t,n){"use strict";var e=n(294);n.n(e).a},315:function(M,t,n){(t=n(52)(!1)).push([M.i,".link-container{background-color:#f8f8fc;display:flex;justify-content:center;align-items:center;width:650px;padding:20px;margin-bottom:20px;box-shadow:0 3px 8px -4px rgba(0,0,0,.75)}.link-container button,.link-container p{margin:0}.link-container p{flex:1 0;margin-left:20px;margin-right:20px}",""]),M.exports=t},316:function(M,t,n){"use strict";var e=n(295);n.n(e).a},317:function(M,t,n){(t=n(52)(!1)).push([M.i,".page-progress{position:absolute}.lead{margin-bottom:40px}.done-button{margin-top:40px;width:100px}",""]),M.exports=t},345:function(M,t,n){"use strict";n.r(t);n(31),n(12),n(13),n(6),n(22);var e=n(10),c=n(75),I="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",r=function(){for(var M="",i=0;i<8;i++)M+=I.charAt(Math.floor(Math.random()*I.length));return M},o=(n(258),{props:{amount:{type:Number,default:.5}},computed:{width:function(){return"width: ".concat(100*this.amount,"%")}}}),j=(n(310),n(29)),N=Object(j.a)(o,(function(){var M=this.$createElement;return(this._self._c||M)("div",{staticClass:"progress-bar",style:this.width})}),[],!1,null,null,null).exports,D=n(307),z=(n(312),n(42),n(5)),y={components:{Icon:n(257).a},props:{link:{type:String,required:!0}},methods:{copyLink:function(){var M=this;return Object(z.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.$copyText(M.link);case 3:M.$toast.success("Copied",{duration:3e3}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},A=(n(314),Object(j.a)(y,(function(){var M=this.$createElement,t=this._self._c||M;return t("div",{staticClass:"link-container"},[t("icon",{attrs:{"is-active":!0,icon:"link",size:"medium"}}),this._v(" "),t("p",[this._v("\n    "+this._s(this.link)+"\n  ")]),this._v(" "),t("button",{staticClass:"text-button",on:{click:this.copyLink}},[this._v("\n    Copy link\n  ")])],1)}),[],!1,null,null,null).exports);function l(object,M){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);M&&(n=n.filter((function(M){return Object.getOwnPropertyDescriptor(object,M).enumerable}))),t.push.apply(t,n)}return t}function T(M){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(e.a)(M,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(M,t,Object.getOwnPropertyDescriptor(source,t))}))}return M}var d=Object(c.a)("me"),x=d.mapState,L=d.mapActions,O={components:{ProgressBar:N,PageSection:D.a,LinkContainer:A},transition:{name:"slide-fade",mode:"out-in"},data:function(){return{step:1,sessionName:"",uuid:r(),admin:r()}},computed:T({},x(["name"]),{progress:function(){return this.step/3}}),methods:T({},L(["updateName"]),{persistSettings:function(){this.$store.dispatch("sessions/addSession",{uuid:this.uuid,name:this.sessionName,admin:this.admin}),this.step++}})},m=(n(316),Object(j.a)(O,(function(){var M=this,t=M.$createElement,n=M._self._c||t;return n("div",{staticClass:"page-section-container"},[n("progress-bar",{staticClass:"page-progress",attrs:{amount:M.progress}}),M._v(" "),n("transition",{attrs:{name:"slide",mode:"out-in"}},[1===M.step?n("page-section",[n("h1",{staticClass:"bold"},[M._v("\n        Let's get to know each other\n      ")]),M._v(" "),n("p",{staticClass:"h2 lead"},[M._v("\n        👋 Start right now, but first of all: What's your name?\n      ")]),M._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:M.name,expression:"name"}],attrs:{placeholder:"NAME"},domProps:{value:M.name},on:{change:function(t){return M.updateName(t.target.value)},input:function(t){t.target.composing||(M.name=t.target.value)}}}),M._v(" "),n("button",{staticClass:"button button--primary",on:{click:function(t){M.step++}}},[M._v("Submit")])]):M._e()],1),M._v(" "),n("transition",{attrs:{name:"slide",mode:"out-in"}},[2===M.step?n("page-section",[n("h1",{staticClass:"bold"},[M._v("\n        Name this session\n      ")]),M._v(" "),n("p",{staticClass:"h2 lead"},[M._v("\n        ✍️ Let the participants know what they are working on.\n      ")]),M._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:M.sessionName,expression:"sessionName"}],attrs:{placeholder:""},domProps:{value:M.sessionName},on:{input:function(t){t.target.composing||(M.sessionName=t.target.value)}}}),M._v(" "),n("button",{staticClass:"button button--primary",on:{click:M.persistSettings}},[M._v("\n        Almost complete\n      ")])]):M._e()],1),M._v(" "),n("transition",{attrs:{name:"slide",mode:"out-in"}},[3===M.step?n("page-section",[n("h1",{staticClass:"bold"},[M._v("Invite people")]),M._v(" "),n("p",{staticClass:"h2 lead"},[M._v("\n        🚀 Create your crew\n      ")]),M._v(" "),n("div",[n("h2",{staticClass:"h5 bold"},[M._v("Send link to invite more administrators")]),M._v(" "),n("p",[M._v("\n          Administrators host and moderate the session.\n        ")]),M._v(" "),n("link-container",{attrs:{link:"https://signers-koffer.github.io/koffer/board/"+M.uuid+"/"+M.admin}})],1),M._v(" "),n("div",[n("h2",{staticClass:"h5 bold"},[M._v("Send link to invite participants")]),M._v(" "),n("link-container",{attrs:{link:"https://signers-koffer.github.io/koffer/board/"+M.uuid}})],1),M._v(" "),n("div",[n("nuxt-link",{staticClass:"button button--primary done-button",attrs:{to:"/board/"+M.uuid,tag:"button"}},[M._v("\n          Done\n        ")])],1)]):M._e()],1)],1)}),[],!1,null,null,null));t.default=m.exports}}]);