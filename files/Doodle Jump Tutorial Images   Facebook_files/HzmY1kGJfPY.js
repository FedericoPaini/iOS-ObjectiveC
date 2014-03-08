/*!CK:3855401418!*//*1393816609,178134569*/

if (self.CavalryLogger) { CavalryLogger.start_js(["cGol\/"]); }

__d("DetectBrokenProxyCache",["AsyncSignal","Cookie","URI"],function(a,b,c,d,e,f,g,h,i){function j(k,l){var m=h.get(l);if((m!=k)&&(m!=null)&&(k!='0')){var n={c:'si_detect_broken_proxy_cache',m:l+' '+k+' '+m},o=new i('/common/scribe_endpoint.php').getQualifiedURI().toString();new g(o,n).send();}}e.exports={run:j};});
__d("AsyncDOM",["CSS","DOM"],function(a,b,c,d,e,f,g,h){var i={invoke:function(j,k){for(var l=0;l<j.length;++l){var m=j[l],n=m[0],o=m[1],p=m[2],q=m[3],r=(p&&k)||null;if(o)r=h.scry(r||document.documentElement,o)[0];switch(n){case 'eval':(new Function(q)).apply(r);break;case 'hide':g.hide(r);break;case 'show':g.show(r);break;case 'setContent':h.setContent(r,q);break;case 'appendContent':h.appendContent(r,q);break;case 'prependContent':h.prependContent(r,q);break;case 'insertAfter':h.insertAfter(r,q);break;case 'insertBefore':h.insertBefore(r,q);break;case 'remove':h.remove(r);break;case 'replace':h.replace(r,q);break;default:}}}};e.exports=i;});
__d("DimensionLogging",["BanzaiNectar","DOMDimensions"],function(a,b,c,d,e,f,g,h){var i=h.getViewportDimensions();g.log('browser_dimension','homeload',{x:i.width,y:i.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft});});
__d("DimensionTracking",["Cookie","DOMDimensions","Event","debounce","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){var m=h.getViewportDimensions();g.set('wd',m.width+'x'+m.height);}if(!k()){setTimeout(l,100);i.listen(window,'resize',j(l,250));i.listen(window,'focus',l);}});
__d("HighContrastMode",["AccessibilityLogger","CSS","CurrentUser","DOM","Style","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={init:function(n){if(window.top!==window.self)return;var o=j.create('div');j.appendContent(document.body,o);o.style.cssText='border: 1px solid;'+'border-color: red green;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+n.spacerImage+');';var p=k.get(o,'background-image'),q=k.get(o,'border-top-color'),r=k.get(o,'border-right-color'),s=q==r&&(p&&(p=='none'||p=='url(invalid-url:)'));if(s!==n.isHCM){h.conditionClass(document.documentElement,'highContrast',s);if(i.getID())g.logHCM(s);}j.remove(o);m.init=l;}};e.exports=m;});
__d("Live",["Arbiter","AsyncDOM","AsyncSignal","ChannelConstants","DataStore","DOM","ServerJS","createArrayFrom","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(r,s){s=JSON.parse(JSON.stringify(s));new m().setRelativeTo(r).handle(s);}var q={logAll:false,startup:function(r){q.logAll=r;q.startup=o;g.subscribe(j.getArbiterType('live'),q.handleMessage.bind(q));},lookupLiveNode:function(r,s){var t=l.scry(document.body,'.live_'+r+'_'+s);t.forEach(function(u){if(k.get(u,'seqnum')===undefined){var v=JSON.parse(u.getAttribute('data-live'));k.set(u,'seqnum',v.seq);}});return t;},handleMessage:function(r,s){var t=s.obj,u=t.fbid,v=t.assoc,w=this.lookupLiveNode(u,v);if(!w)return false;w.forEach(function(x){h.invoke(t.updates,x);if(t.js)p(x,t.js);});},log:function(){if(q.logAll){var r=n(arguments).join(':');new i('/common/scribe_endpoint.php',{c:'live_sequence',m:r}).send();}}};e.exports=q;});
__d("TimezoneAutoset",["AsyncRequest","emptyFunction"],function(a,b,c,d,e,f,g,h){var i=false;function j(m){var n=new Date(),o=n.getTimezoneOffset()/30,p=n.getTime()/1000,q=Math.round((m-p)/1800),r=Math.round(o+q)%48;if(r==0){return 0;}else if(r>24){r-=Math.ceil(r/48)*48;}else if(r<-28)r+=Math.ceil(r/-48)*48;return r*30;}function k(m,n,o){if(!m||undefined==n)return;if(i)return;i=true;var p=-j(m);if(o||p!=n){var q='/ajax/timezone/update.php';new g().setURI(q).setData({gmt_off:p,is_forced:o}).setErrorHandler(h).setTransportErrorHandler(h).setOption('suppressErrorAlerts',true).send();}}var l={setInputValue:function(m,n){m.value=j(n);},setTimezone:k};e.exports=l;});
__d("UFITracking",["Bootloader"],function(a,b,c,d,e,f,g){function h(j){g.loadModules(["DOM","collectDataAttributes"],function(k,l){j.forEach(function(m){var n=k.scry(document.body,m);if(!n||n.link_data)return;var o=l(n,['ft']).ft;if(Object.keys(o).length){var p=k.create('input',{type:'hidden',name:'link_data',value:JSON.stringify(o)});n.appendChild(p);}});});}var i={addAllLinkData:function(){h(['form.commentable_item']);},addAllLinkDataForQuestion:function(){h(['form.fbEigenpollForm','form.fbQuestionPollForm']);}};e.exports=i;});