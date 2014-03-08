/*!CK:3953987243!*//*1393816509,178183447*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ghXB0"]); }

__d("FeedTrackingAsync",["Arbiter","collectDataAttributes","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(){g.subscribe('AsyncRequest/send',function(k,l){var m=l.request,n=m.getRelativeTo();if(n){var o=m.getData(),p=h(n,['ft']);i(o,p);}});}e.exports={init:j};});
__d("DynamicIconSelector",["Button","CSS","DOM","SelectorDeprecated"],function(a,b,c,d,e,f,g,h,i,j){var k={swapIcon:function(l){var m=j.getSelectedOptions(l)[0],n=m&&i.scry(m,'.itemIcon')[0],o=j.getSelectorButton(l);if(n){g.setIcon(o,n.cloneNode(true));}else{var p=i.scry(o,'.img')[0];p&&i.remove(p);}h.conditionClass(o,'uiSelectorChevronOnly',!n);}};j.subscribe('change',function(l,m){var n=m.selector;if(h.hasClass(n,'dynamicIconSelector'))k.swapIcon(n);});e.exports=k;});
__d("ParameterizedPopover",["Arbiter","ArbiterMixin","CSS","DataStore","Event","Focus","Keys","KeyStatus","LayerHideOnEscape","Toggler","copyProperties","curry","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){p.subscribe(['show','hide'],function(x,y){var z=j.get(y.getActive(),'Popover');if(z)if(x==='show'){z.showLayer();}else z.hideLayer();});var t=s(h);for(var u in t)if(t.hasOwnProperty(u))w[u]=t[u];var v=t===null?null:t.prototype;w.prototype=Object.create(v);w.prototype.constructor=w;w.__superConstructor__=t;function w(x,y,z,aa){"use strict";this._root=x;this._triggerElem=y;this._behaviors=z;this._config=aa||{};this._disabled=!!this._config.disabled;this._listeners=[];if(!this._disabled&&(y.nodeName!=='A'||y.rel!=='toggle'))this._setupClickListener();this._setupKeyListener();y.setAttribute('role','button');j.set(x,'Popover',this);}w.prototype.ensureInit=function(){"use strict";if(!this._layer)this._init();};w.prototype.showLayer=function(){"use strict";this.ensureInit();this._layer.show();p.show(this._root);i.addClass(this._root,'selected');this.inform('show');this._triggerElem.setAttribute('aria-expanded','true');};w.prototype.getLayer=function(){"use strict";return this._layer;};w.prototype.hideLayer=function(){"use strict";this._layer.hide();this._triggerElem.setAttribute('aria-expanded','false');};w.prototype.isShown=function(){"use strict";return this._layer&&this._layer.isShown();};w.prototype.setLayerContent=function(x){"use strict";this.ensureInit();this._layer.setContent(x);};w.prototype._init=function(){"use strict";var x=this._config.layer;x.enableBehaviors([o]);p.createInstance(x.getRoot()).setSticky(false);x.subscribe('hide',this._onLayerHide.bind(this));this._behaviors&&x.enableBehaviors(this._behaviors);this._layer=x;this.inform('init',null,g.BEHAVIOR_PERSISTENT);};w.prototype._onLayerHide=function(){"use strict";p.hide(this._root);i.removeClass(this._root,'selected');this.inform('hide');if(n.getKeyDownCode()===m.ESC)l.set(this._triggerElem);};w.prototype.enable=function(){"use strict";if(!this._disabled)return;this._setupClickListener();this._setupKeyListener();this._disabled=false;};w.prototype.disable=function(){"use strict";if(this._disabled)return;if(this.isShown())this.hideLayer();while(this._listeners.length)this._listeners.pop().remove();if(this._triggerElem.getAttribute('rel')==='toggle')this._triggerElem.removeAttribute('rel');this._disabled=true;};w.prototype._setupClickListener=function(){"use strict";this._listeners.push(k.listen(this._triggerElem,'click',r(p.bootstrap,this._triggerElem)));};w.prototype._setupKeyListener=function(){"use strict";this._listeners.push(k.listen(this._triggerElem,'keydown',this._handleKeyEvent.bind(this)));};w.prototype._handleKeyEvent=function(event){"use strict";if(event.getModifiers().any)return;var x=k.getKeyCode(event);switch(x){case m.SPACE:case m.DOWN:case m.UP:if(x===m.SPACE||!this.isShown())p.bootstrap(this._triggerElem);break;default:return;}event.prevent();};w.prototype.destroy=function(){"use strict";j.remove(this._root,'Popover');};q(w.prototype,{_layer:null});e.exports=w;});
__d("Popover",["ContextualLayer","ContextualLayerHideOnScroll","DOM","ParameterizedPopover"],function(a,b,c,d,e,f,g,h,i,j){for(var k in j)if(j.hasOwnProperty(k))m[k]=j[k];var l=j===null?null:j.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=j;function m(){"use strict";if(j!==null)j.apply(this,arguments);}m.prototype._init=function(){"use strict";var n=new g({context:this._triggerElem,position:'below',arrowDimensions:{offset:12,length:22}},i.create('div'));n.enableBehaviors([h]);this._config.layer=n;if(this._config.alignh)n.setAlignment(this._config.alignh);if(this._config.layer_content)n.setContent(this._config.layer_content);l._init.call(this);};e.exports=m;});
__d("PopoverMenu",["Arbiter","ArbiterMixin","ARIA","BehaviorsMixin","Event","Focus","Keys","KeyStatus","copyProperties","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=p(h,j);for(var r in q)if(q.hasOwnProperty(r))t[r]=q[r];var s=q===null?null:q.prototype;t.prototype=Object.create(s);t.prototype.constructor=t;t.__superConstructor__=q;function t(u,v,w,x){"use strict";this._popover=u;this._triggerElem=v;this._initialMenu=w;u.subscribe('init',this._onLayerInit.bind(this));u.subscribe('show',this._onPopoverShow.bind(this));u.subscribe('hide',this._onPopoverHide.bind(this));k.listen(this._triggerElem,'keydown',this._handleKeyEventOnTrigger.bind(this));x&&this.enableBehaviors(x);}t.prototype.setMenu=function(u){"use strict";this._menu=u;var v=u.getRoot();this._popover.setLayerContent(v);u.subscribe('done',this._onMenuDone.bind(this));if(this._popoverShown)this._menu.onShow();i.owns(this._triggerElem,v);this.inform('setMenu',null,g.BEHAVIOR_PERSISTENT);};t.prototype.getPopover=function(){"use strict";return this._popover;};t.prototype.getTriggerElem=function(){"use strict";return this._triggerElem;};t.prototype.getMenu=function(){"use strict";return this._menu;};t.prototype._onLayerInit=function(){"use strict";this.setMenu(this._initialMenu);this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));};t.prototype._onPopoverShow=function(){"use strict";if(this._menu)this._menu.onShow();this._popoverShown=true;};t.prototype._onPopoverHide=function(){"use strict";if(this._menu)this._menu.onHide();this._popoverShown=false;};t.prototype._handleKeyEvent=function(u,v){"use strict";var w=k.getKeyCode(v);if(w===m.TAB){this._popover.hideLayer();l.set(this._triggerElem);return;}if(v.getModifiers().any)return;switch(w){case m.RETURN:if(this._menu.handleKeydown(w,v))break;return;default:if(this._menu.handleKeydown(w,v)===false){this._menu.blur();this._menu.handleKeydown(w,v);}break;}v.prevent();};t.prototype._handleKeyEventOnTrigger=function(u){"use strict";var v=k.getKeyCode(u);switch(v){case m.DOWN:case m.UP:if(this._menu.handleKeydown(v,u))u.stop();break;default:var w=String.fromCharCode(v).toLowerCase();if(/^\w$/.test(w)){this._popover.showLayer();this._menu.blur();if(this._menu.handleKeydown(v,u)===false){this._popover.hideLayer();l.set(this._triggerElem);}}}};t.prototype._onMenuDone=function(u){"use strict";setTimeout(this._popover.hideLayer.bind(this._popover),0);if(n.isKeyDown())l.set(this._triggerElem);};t.prototype.enable=function(){"use strict";this._popover.enable();};t.prototype.disable=function(){"use strict";this._popover.disable();};o(t.prototype,{_popoverShown:false});e.exports=t;});
__d("PopoverMenuInterface",["ArbiterMixin","copyProperties","emptyFunction","mixin"],function(a,b,c,d,e,f,g,h,i,j){var k=j(g);for(var l in k)if(k.hasOwnProperty(l))n[l]=k[l];var m=k===null?null:k.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=k;function n(){"use strict";}n.prototype.done=function(){"use strict";this.inform('done');};h(n.prototype,{getRoot:i,onShow:i,onHide:i,focusAnItem:i.thatReturnsFalse,blur:i,handleKeydown:i.thatReturnsFalse});e.exports=n;});
__d("LikeConfirmer",["AsyncDialog","AsyncRequest"],function(a,b,c,d,e,f,g,h){var i=false,j=false,k={likeContent:function(){},like:function(l,m){this.likeContent=l;if(j)return;if(i){this.likeContent();}else{var n=new h().setURI('/like/confirm_like.php').setRelativeTo(m);g.send(n,function(o){j=true;o.subscribe('confirm',this.onCloseLikeConfirmDialog.bind(this));o.subscribe('cancel',this.onCloseLikeConfirmDialog.bind(this));o.setCausalElement(m);}.bind(this));}return false;},isShowingConfirmation:function(){return j;},onCloseLikeConfirmDialog:function(){j=false;},likeSkipConfirmation:function(l){i=l;this.likeContent();}};e.exports=k;});
__d("Menu",["CSS","DataStore","DOM","Event","Keys","Parent","PopoverMenuInterface","ScrollableArea","Style","copyProperties","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){for(var r in m)if(m.hasOwnProperty(r))t[r]=m[r];var s=m===null?null:m.prototype;t.prototype=Object.create(s);t.prototype.constructor=t;t.__superConstructor__=m;function t(u,v){"use strict";m.call(this);this._items=[];for(var w=0;w<u.length;w++)this._items[w]=new u[w].ctor(u[w]);this._config=v||{};this._theme=v.theme||{};}t.prototype.addItem=function(u){"use strict";this._addItem(u);};t.prototype.addItemBefore=function(u,v){"use strict";this._addItem(u,v,false);};t.prototype.addItemAfter=function(u,v){"use strict";this._addItem(u,v,true);};t.prototype._addItem=function(u,v,w){"use strict";var x=this._items.indexOf(u);if(x>=0){var y=w?-1:1;if(this._items[x+y]==v)return;this._items.splice(x,1);}if(v){x=this._items.indexOf(v);if(x<0)throw new Error('reference item must already be in the menu');if(w)x++;this._items.splice(x,0,u);}else this._items.push(u);if(this._root)this._insertItem(u,v,w);};t.prototype.removeItem=function(u){"use strict";var v=this._items.indexOf(u);if(v<0)return;this._items.splice(v,1);this._root&&i.remove(u.getRoot());};t.prototype.forEachItem=function(u){"use strict";this._items.forEach(u);};t.prototype.getFocusedItem=function(){"use strict";return this._focused;};t.prototype.getItemAt=function(u){"use strict";return this._items[u]||null;};t.prototype.getRoot=function(){"use strict";if(!this._root)this._render();return this._root;};t.prototype.onShow=function(){"use strict";if(this._config.maxheight)if(!this._scrollableArea){this._scrollableArea=n.fromNative(this._scrollableElems.root,{fade:true});}else this._scrollableArea.resize();};t.prototype.onHide=function(){"use strict";this.blur();};t.prototype.focusAnItem=function(u){"use strict";return this._attemptFocus(u||0,1);};t.prototype.blur=function(){"use strict";if(this._focused){var u=this._focused;this._focused.blur();this._focused=null;this.inform('blur',{item:u});}};t.prototype.handleKeydown=function(u,v){"use strict";var w=this._items.indexOf(this._focused);switch(u){case k.UP:case k.DOWN:var x=u===k.UP?-1:1;if(w!==-1){return this._attemptFocus(w+x,x);}else if(u===k.UP){return this._attemptFocus(this._items.length-1,-1);}else return this._attemptFocus(0,1);break;case k.RETURN:case k.SPACE:if(this._items.indexOf(this._focused)!==-1){this._handleItemClick(this._focused,v);return true;}return false;default:var y=String.fromCharCode(u).toLowerCase(),z;for(var aa=w+1;aa<this._items.length;aa++){z=this._items[aa].getAccessKey();if(z&&z.charAt(0).toLowerCase()===y)if(this._focusItem(this._items[aa]))return true;}return false;}};t.prototype._render=function(){"use strict";this._ul=i.create('ul',{className:"_54nf"});this._ul.setAttribute('role','menu');this._items.forEach(function(w){this._insertItem(w,null);}.bind(this));j.listen(this._ul,'click',this._handleClick.bind(this));j.listen(this._ul,'mouseover',this._handleMouseOver.bind(this));j.listen(this._ul,'mouseout',this._handleMouseOut.bind(this));var u=this._ul;if(this._config.maxheight){this._scrollableElems=n.renderDOM();i.setContent(this._scrollableElems.content,this._ul);u=this._scrollableElems.root;o.set(this._scrollableElems.wrap,'max-height',this._config.maxheight+'px');}var v="_54nq"+(this._config.className?' '+this._config.className:'')+(this._theme.className?' '+this._theme.className:'');this._root=i.create('div',{className:v},i.create('div',{className:"_54ng"},u));this._config.id&&this._root.setAttribute('id',this._config.id);this.inform('rendered',this._root);};t.prototype._needsDefaultBehavior=function(u){"use strict";if(u.isDefaultRequested&&u.isDefaultRequested()){var v=l.byTag(u.getTarget(),'a'),w=v&&v.getAttribute('href');return w&&w[0]!=='#';}return false;};t.prototype._handleClick=function(u){"use strict";if(!this._needsDefaultBehavior(u)){var v=this._getItemInstance(u.getTarget());if(v)return this._handleItemClick(v,u);}};t.prototype._handleItemClick=function(u,v){"use strict";this.inform('itemclick',{item:u,event:v});if(u.hasAction())this.done();return u.handleClick();};t.prototype._handleMouseOver=function(u){"use strict";var v=this._getItemInstance(u.getTarget());v&&this._focusItem(v,true);};t.prototype._handleMouseOut=function(u){"use strict";var v=this._getItemInstance(u.getTarget());if(v&&this._focused===v)this.blur();};t.prototype._insertItem=function(u,v,w){"use strict";var x=u.getRoot();g.addClass(x,'__MenuItem');h.set(x,'MenuItem',u);if(v){var y=w?i.insertAfter:i.insertBefore;y(v.getRoot(),x);}else i.appendContent(this._ul,x);};t.prototype._attemptFocus=function(u,v){"use strict";var w=this.getItemAt(u);if(w)if(this._focusItem(w)){return true;}else return this._attemptFocus(u+v,v);return false;};t.prototype._focusItem=function(u,v){"use strict";if(u.focus(v)!==false){if(this._focused!==u){this.blur();this._focused=u;this.inform('focus',{item:u,from_mouse_over:v});}return true;}return false;};t.prototype._getItemInstance=function(u){"use strict";var v=l.byClass(u,'__MenuItem');return v?h.get(v,'MenuItem'):null;};t.prototype.destroy=function(){"use strict";this._items.forEach(function(u){var v=u.getRoot();h.remove(v,'MenuItem');u.destroy();});};p(t.prototype,{_focused:null,_root:null});e.exports=t;});
__d("MenuItemInterface",["copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h){function i(){"use strict";}i.prototype.getRoot=function(){"use strict";if(!this._root)this._root=this.render();return this._root;};g(i.prototype,{_root:null,render:h,getAccessKey:h,hasAction:h.thatReturnsFalse,focus:h.thatReturnsFalse,blur:h.thatReturnsFalse,handleClick:h.thatReturnsFalse,destruct:h});e.exports=i;});
__d("MenuItemBase",["DOM","HTML","MenuItemInterface","cx"],function(a,b,c,d,e,f,g,h,i,j){for(var k in i)if(i.hasOwnProperty(k))m[k]=i[k];var l=i===null?null:i.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=i;function m(n){"use strict";i.call(this);this._data=n;}m.prototype.render=function(){"use strict";var n="_54ni";if(this._data.className)n+=' '+this._data.className;var o={className:n,'aria-selected':'false'};for(var p in this._data)if(p.indexOf('data-')===0)o[p]=this._data[p];return g.create('li',o,this._renderItemContent());};m.prototype._renderItemContent=function(){"use strict";return h(this._data.markup).getNodes();};e.exports=m;});
__d("MenuItem",["CSS","DOM","MenuItemBase","React","cloneWithProps","copyProperties","cx","emptyFunction","startsWith"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=['href','rel','ajaxify','target'];function q(v,w){var x={};p.forEach(function(y){if(w[y])x[y]=w[y];});h.setAttributes(v,x);}function r(v){p.forEach(function(w){v.removeAttribute(w);});}for(var s in i)if(i.hasOwnProperty(s))u[s]=i[s];var t=i===null?null:i.prototype;u.prototype=Object.create(t);u.prototype.constructor=u;u.__superConstructor__=i;function u(v){"use strict";i.call(this,v);this._disabled=!!this._data.disabled;this._onclickHandler=this._data.onclick;}u.prototype.getValue=function(){"use strict";return this._data.value;};u.prototype.getLabel=function(){"use strict";return this._data.label;};u.prototype.getAccessKey=function(){"use strict";return this._data.label&&this._data.label.charAt(0);};u.prototype.focus=function(v){"use strict";if(this.isDisabled()||!this._root.offsetParent)return false;g.addClass(this._root,"_54ne");g.addClass(this._root,'selected');this._root.setAttribute('aria-selected','true');v||this._anchor.focus();};u.prototype.blur=function(){"use strict";g.removeClass(this._root,"_54ne");g.removeClass(this._root,'selected');this._root.setAttribute('aria-selected','false');};u.prototype.handleClick=function(){"use strict";if(this.isDisabled())return false;if(typeof this._onclickHandler==='function')return this._onclickHandler();return true;};u.prototype.setOnClickHandler=function(v){"use strict";this._onclickHandler=v;};u.prototype._renderItemContent=function(){"use strict";this._anchor=h.create('a',{className:(("_54nc")+(this._data.icon?' '+"_54nu":'')),tabIndex:this.isDisabled()?-1:0});if(this._data.reactChildren){var v=null;if(this._data.icon)v=k(this._data.icon,{className:'mrs'});j.renderComponent(j.DOM.span(null,v,j.DOM.span({className:"_54nh"},this._data.reactChildren)),this._anchor);this._data.label=this._anchor.innerText||this._anchor.textContent;}else{var w=h.create('span',null,h.create('span',{className:"_54nh"},this._data.markup||this._data.label));if(this._data.icon)h.prependContent(w,this._data.icon);h.setContent(this._anchor,w);}if(!this.isDisabled())q(this._anchor,this._data);for(var x in this._data)if(typeof x==='string'&&o(x,'data-'))this._anchor.setAttribute(x,this._data[x]);this._anchor.setAttribute('role','menuitem');var y=this._data.title;y&&this._anchor.setAttribute('title',y);return this._anchor;};u.prototype.isDisabled=function(){"use strict";return this._disabled;};u.prototype.enable=function(){"use strict";q(this._anchor,this._data);this._anchor.tabIndex=0;g.removeClass(this._root,"_5arm");this._disabled=false;};u.prototype.disable=function(){"use strict";r(this._anchor);this._anchor.tabIndex=-1;g.addClass(this._root,"_5arm");this._disabled=true;};u.prototype.render=function(){"use strict";var v=t.render.call(this);if(this._data.disabled)g.addClass(v,"_5arm");return v;};u.prototype.destroy=function(){"use strict";if(this._anchor)j.unmountComponentAtNode(this._anchor);};l(u.prototype,{hasAction:n.thatReturnsTrue});e.exports=u;});
__d("MenuSelectableItem",["CSS","MenuItem","copyProperties","cx"],function(a,b,c,d,e,f,g,h,i,j){for(var k in h)if(h.hasOwnProperty(k))m[k]=h[k];var l=h===null?null:h.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=h;function m(n){"use strict";h.call(this,n);this._selected=!!this._data.selected;}m.prototype.getLabel=function(){"use strict";return this._data.label;};m.prototype.getIcon=function(){"use strict";return this._data.icon;};m.prototype.isSelected=function(){"use strict";return this._selected;};m.prototype.select=function(){"use strict";if(this.isDisabled())return false;g.addClass(this._root,"_54nd");this._selected=true;};m.prototype.deselect=function(){"use strict";g.removeClass(this._root,"_54nd");this._selected=false;};m.prototype.render=function(){"use strict";var n=l.render.call(this);if(this._data.selected)g.addClass(n,"_54nd");return n;};i(m.prototype,{_selected:false});e.exports=m;});
__d("MenuSeparator",["DOM","MenuItemInterface","cx"],function(a,b,c,d,e,f,g,h,i){for(var j in h)if(h.hasOwnProperty(j))l[j]=h[j];var k=h===null?null:h.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=h;function l(m){"use strict";h.call(this,m);this._data=m;}l.prototype.render=function(){"use strict";var m="_54ak";if(this._data.className)m+=' '+this._data.className;var n=this._data.label||'';return g.create('li',{className:m,role:'separator'},n);};e.exports=l;});
__d("SelectableMenu",["Menu","arrayContains","createArrayFrom"],function(a,b,c,d,e,f,g,h,i){for(var j in g)if(g.hasOwnProperty(j))l[j]=g[j];var k=g===null?null:g.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=g;function l(){"use strict";if(g!==null)g.apply(this,arguments);}l.prototype.focusAnItem=function(){"use strict";for(var o=0;o<this._items.length;o++)if(n(this._items[o]))if(this._focusItem(this._items[o])!==false)return true;return k.focusAnItem.call(this);};l.prototype.setValue=function(o){"use strict";if(!this._root)this._render();var p=i(o);this._items.forEach(function(q){if(m(q))if(h(p,q.getValue())){q.select();}else if(n(q))q.deselect();});this.inform('change',this._getSelection());};l.prototype._handleItemClick=function(o,p){"use strict";if(!m(o))return k._handleItemClick.call(this,o,p);var q=this.inform('itemclick',{item:o,event:p});if(q)return;if(this._config.multiple){var r=n(o)?o.deselect():o.select();if(r!==false)this.inform('change',this._getSelection());}else{if(!n(o))if(o.select()!==false){this._items.forEach(function(s){if(n(s)&&s!==o)s.deselect();});this.inform('change',this._getSelection());}this.done();}return o.handleClick();};l.prototype._getSelection=function(){"use strict";var o=[];this._items.forEach(function(p){if(n(p))o.push({label:p.getLabel(),value:p.getValue(),item:p});});if(!this._config.multiple)o=o[0];return o;};function m(o){return o.select&&o.deselect&&o.isSelected;}function n(o){return m(o)&&o.isSelected();}e.exports=l;});
__d("XUIMenuTheme",["cx"],function(a,b,c,d,e,f,g){e.exports={className:"_558b"};});
__d("MenuTheme",["cx"],function(a,b,c,d,e,f,g){e.exports={className:"_569t"};});