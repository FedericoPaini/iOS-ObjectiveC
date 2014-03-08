/*!CK:75816608!*//*1393927602,178183213*/

if (self.CavalryLogger) { CavalryLogger.start_js(["u\/3u+"]); }

__d("BulkTagLoader",["AsyncRequest","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i){var j=false;function k(){}h(k,{loadForSet:function(l){if(!j){j=true;new g('/ajax/photos/sets/tags_fetch.php').setHandler(i).setData({set:l}).send();}},loadForAlbum:function(l){if(!j){j=true;new g('/ajax/photos/album/tags_fetch.php').setHandler(i).setData({fbid:l}).send();}},reset:function(){j=false;}});e.exports=k;});
__d("legacy:UsernameGrabPagesUI",["UsernameGrabPagesUI"],function(a,b,c,d){a.UsernameGrabPagesUI=b('UsernameGrabPagesUI');},3);