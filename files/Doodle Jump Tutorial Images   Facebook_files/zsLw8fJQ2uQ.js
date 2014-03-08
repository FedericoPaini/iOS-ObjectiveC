/*!CK:1054580445!*//*1392693797,178127439*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CGRqy"]); }

__d("TimeSpentLoggerDebug",["UserActivity","copyProperties","Banzai","pageID","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k){var l={},m=0,n={active:0,tos_id:j,ms_into_session:0},o,p,q=Math.random()*600,r=Math.ceil(q)*1000;function s(v){m=v;}var t={delay:0,retry:true};function u(){var v=Date.now(),w=v-m;if(w<1000)n.active=1;n.ms_into_session=v-p;if(i.isEnabled('time_spent_debug'))i.post('time_spent_debug',h({},n),t);g.unsubscribe(o);}if(!k()){o=g.subscribe(function(v,w){s(w.last_inform);});window.setTimeout(u,r);p=Date.now();}e.exports=l;});