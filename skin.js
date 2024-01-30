// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ???? ?? ??.ggsk
// Generated 2024-01-30T19:56:31

function pano2vrSkin(player,base) {
	player.addVariable('vis_sidemenu', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_leftmenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_traffic', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 1, defaultValue: false } });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._logo=document.createElement('div');
		el.ggId="logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._logo.ggCurrentLogicStateSize != newLogicStateSize) {
				me._logo.ggCurrentLogicStateSize = newLogicStateSize;
				me._logo.style.transition='width 0s, height 0s';
				if (me._logo.ggCurrentLogicStateSize == 0) {
					me._logo.style.width='180px';
					me._logo.style.height='47px';
					skin.updateSize(me._logo);
				}
				else {
					me._logo.style.width='220px';
					me._logo.style.height='58px';
					skin.updateSize(me._logo);
				}
			}
		}
		me._logo.logicBlock_size();
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #201e1d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 35px 35px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 120%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._image_1);
		me._logo.appendChild(me._rectangle_1);
		me.divSkin.appendChild(me._logo);
		el=me.__19=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 500px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__19.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__19.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__19.ggCurrentLogicStateSize = newLogicStateSize;
				me.__19.style.transition='width 0s, height 0s';
				if (me.__19.ggCurrentLogicStateSize == 0) {
					me.__19.style.width='90px';
					me.__19.style.height='500px';
					skin.updateSize(me.__19);
				}
				else {
					me.__19.style.width='110px';
					me.__19.style.height='500px';
					skin.updateSize(me.__19);
				}
			}
		}
		me.__19.logicBlock_size();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 35px 35px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -100%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_leftmenu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__20.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__20.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__20.style.transition='left 800ms ease 0ms, top 800ms ease 0ms';
				if (me.__20.ggCurrentLogicStatePosition == 0) {
					me.__20.style.left='0%';
					me.__20.style.top='0px';
				}
				else {
					me.__20.style.left='-100%';
					me.__20.style.top='0px';
				}
			}
		}
		me.__20.logicBlock_position();
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
		el.ggId="\uc790\uc5f0\ud658\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12.5%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 82.06%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		els=me.__41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc790\uc5f0\ud658\uacbd \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 15%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 27%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__41.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc5f0\ud658\uacbd\n\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__41.ggUpdateText();
		el.appendChild(els);
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me.__41);
		el=me.__40=document.createElement('div');
		el.ggId="\uc790\uc5f0\ud658\uacbd \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f5bc62;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.onclick=function (e) {
			player.setMediaVisibility("\uc790\uc5f0","2",0);
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me._image_9);
		me.__39.appendChild(me.__40);
		me.__20.appendChild(me.__39);
		el=me.__36=document.createElement('div');
		el.ggId="\uc0dd\ud65c\ud3b8\uc758\uc2dc\uc124";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12.5%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 69.36%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		els=me.__38__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0dd\ud65c\ud3b8\uc758\uc2dc\uc124 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 15%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 27%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__38.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0dd\ud65c\ud3b8\uc758\uc2dc\uc124\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__38.ggUpdateText();
		el.appendChild(els);
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me.__38);
		el=me.__37=document.createElement('div');
		el.ggId="\uc0dd\ud65c\ud3b8\uc758\uc2dc\uc124 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f57ba2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.onclick=function (e) {
			player.setMediaVisibility("\uc0dd\ud65c","2",0);
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAET0lEQVR4nO2cT4iVVRTAf/PHsUbRgvnjmLlRkQhBMAiibYskiCRXBeIiXYUL1wptxZUbN24sdWGLIKIQI1q1EBGSFhpooKE5BeU4jX9Qp8U3H7y+d57z3vfuPe+cz/OD2Rzm3XuH35x77rnfe29ocXGRwA7Dg15A8H9CiDFCiDFCiDFCiDFCiDFCiDFCiDFCiDFCiDFCiDFCiDFCiDFCiDFCiDFCiDFCiDE8CxkDdgIngMvAv8A94BJwHHgXGBnY6moy5PAR7hCwB/gM2LjM7/4GHAJO515UKrwJWQN8Drzf4+vOAJ8AC8lXlBhPQsaBH4A3a77+J+AdjEvxVENOUV8GwFvAyURryYYXIXuAD4T4U+AssAvYBm'+
			'wHPgK+6TDOh8DHGdaXDA9b1ovAdWBdJb5AIeJch9ftBr4AVlbis8AmYD7hGpPhIUP20S4DYC+dZQB8CewX4lMd4ibwkCG/AK9XYt9R9CDd8C1FT9LKVeA1wNwfbz1DttEuA+BID2McFmJbgTdqrSgz1oVIWfAz8GMPY1wELgjx9+osKDfWhbwtxL6uMc5XXY49cKwL2SHEvq8xznkhZnLLslzUV1NcFrbyBFgFPOxxrOGlscYr8Rngj1qry4TlDNksxK7TuwwoGsgrQnxLjbGyYlmI1Htc62O8X4XYK32MlwXtLesocFBzwsQcAI7lnEA7QyaV50vNcs9f+kZbyIzyfKnZkHsCbSHTyvOlpnEZ4l3Iq7kn0CzqI8Aj2v8J1gJzWovogZeAvyuxJ8ALwONck2pmyIQw331sygD4h/bGdITMR2VNIVJBN9UlC9wUYlkL'+
			'u6aQKSE2qzh/HSQhWQv7oDPktuL8dZCEZC3skSHP5oYQa4wQ6W7Keob8LsQas2VJPYjHDGlMUZeEeDxlNSZDpC3rjuL8dZAyZILivWJZGHSGWBfyAPhLiGcr7FpCRin+s6pY37JA+aSlJWSS4nMdrSxg9O2cFVTriJYQqSm8pTR3v6g2h1pCpKbwT6W5+6WRW5bHa5MS1eZwkBlivSksUW0OtYRIPYiHExY0tKh77EFKblE8KWxlNfByjslCyPI8Rq53WQp7FPXuUNu2NBvDKl6OvaBY2DWEjCFfm3hpDKFhGSJlxzzFO068oNatawjxXj+gYUI8n7BKQogxOhX16g1232gI8dyll8zS/smtMeS/rS80hHi+x2pFZduKot49jRHi+VlIKyrPRQaVIZ6awhKV5jBqSPc0YstaiXxN7e2UBQ0RIvUgdyne7+SNRmxZTW'+
			'gKS6SiPg2sSDlJbiEePzXViTnaP343TOJr+NxCpJtejwW9JPvRN7eQ9ULMY1NYkr2wj6YcTEDKkE+XfpqCqwzx/lUa3eBKiNQUNo2kR9/cQpJfTxvEVYaEkB6x/J2LzyWWv+LvuSSEGCOEGCOEGCOEGCOEGCOEGCOEGCOEGCOEGCOEGCOEGCOEGCOEGCOEGCOEGOM/Fam1X67w0lkAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.__37.appendChild(me._image_8);
		me.__36.appendChild(me.__37);
		me.__20.appendChild(me.__36);
		el=me.__33=document.createElement('div');
		el.ggId="\uad50\uc721\uc2dc\uc124";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12.5%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 56.66%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		els=me.__35__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uad50\uc721\uc2dc\uc124 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 15%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 27%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__35.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\uc721\uc2dc\uc124\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__35.ggUpdateText();
		el.appendChild(els);
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me.__33.appendChild(me.__35);
		el=me.__34=document.createElement('div');
		el.ggId="\uad50\uc721\uc2dc\uc124 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #8856f5;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.onclick=function (e) {
			player.setMediaVisibility("\uad50\uc721","2",0);
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAADIElEQVR4nO3av2sTYRzH8XdEBEHR1aWTg2vBgij4B2gdHSpujoKigwj+Qoi6+GNwcXTxBwg6WJ0Kir8oVMgkODgJkqWDFEHIYBwugVpzSXO5u+fzPPm8oEPba/Nt3zx5LrlrdLtdTMeW0APYvxxEjIOIcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiLGQcSkFOQVsDf0EJNKKcgR4AtwG9gddpTiGgldoFr/h6wC14AHwJ8w4xSTapC+FnAeeFvvKMWl9JQ1yCzwBnhOJPtL6itkvQ7Z/nIL+FX9OMVMU5C+NnAZeIjg/jKNQfpawBngQwWzFJb6HtIZ8r1Z4B3wGJipZ5zRUg9yGHhE/uppAAvAV6AJ7Khprl'+
			'ypB2kDJ4GDwPKQ47YDl8heWC6QhQoi9SB9y8Ah4NmI42bInsLuVj5RjmkJcgD4CBwfcdwP4ATZi8kgUg+yh+z09hNZlDy/gRvAPuAJ45+xlSb1094OsG3EzzwFLgLfqxhqXKkHGaYFnAXeVzBLYak/ZQ3SBk4B+xGLAbA19AA16gB3gJsIv5c1LUFeABeAb6EHGSX1IL4eImIVOA3MEVEMSG+FdID7ZO9L/Qw7SjEpBXlNdhorv08Mo/o6JNRQwd5U7Et1D4mWg4hxEDEOIiams6yyN1zJsxmvEDEOIiaVIEeBJWCt97HU+1p0YnphmLeHXAeu5nyvCVwp4TFqE3uQeeDliN91DFic4DFqFftT1rmSjpER+wpZA3YO+LnGhmN2TfAYtYp9hWxG8H/yOGIPsrLh8wb/B/hc0yyliD3IvU0cE+y20CJiD7JIdmqbp8ng'+
			'MyxZsW/qffNkNzPM9T5fIVsZw2JIbuqpBFF9jLGV9W6vZNUCyv47xg4c+x6SHAcR4yBiHERMlZdwJzljifG+rFJm9goR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHERMldfUy74uXsd19uA3/HmFiHEQMQ4ixkHElLWpB7+NPxVeIWIcRIyDiHEQMQ4ixkHEOIgYBxHjIGIcRIyDiHEQMX8BKVWV1tIC6cMAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me._image_7);
		me.__33.appendChild(me.__34);
		me.__20.appendChild(me.__33);
		el=me.__30=document.createElement('div');
		el.ggId="\uad50\ud1b5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12.5%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 43.96%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		els=me.__32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uad50\ud1b5 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 15%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 27%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__32.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\ud1b5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__32.ggUpdateText();
		el.appendChild(els);
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__32);
		el=me.__31=document.createElement('div');
		el.ggId="\uad50\ud1b5 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #6ac7b5;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.onclick=function (e) {
			player.setHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'vis_traffic', !player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'vis_traffic'));
			if (
				(
					((player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'vis_traffic') == true))
				)
			) {
				player.changePolygonMode(0);
			}
			if (
				(
					((player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'vis_traffic') == false))
				)
			) {
				player.changePolygonMode(1);
			}
			player.setMediaVisibility("\uad50\ud1b5","2",0);
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_6);
		me.__30.appendChild(me.__31);
		me.__20.appendChild(me.__30);
		el=me.__27=document.createElement('div');
		el.ggId="\uace0\uace0\ub3c4\ubdf0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12.5%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 31.26%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		els=me.__29__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uace0\uace0\ub3c4\ubdf0 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 15%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 27%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__29.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uace0\uace0\ub3c4\ubdf0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__29.ggUpdateText();
		el.appendChild(els);
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me.__29);
		el=me.__28=document.createElement('div');
		el.ggId="\uace0\uace0\ub3c4\ubdf0 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #150069;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._image_5);
		me.__27.appendChild(me.__28);
		me.__20.appendChild(me.__27);
		el=me.__24=document.createElement('div');
		el.ggId="\uc800\uace0\ub3c4\ubdf0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12.5%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 18.95%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		els=me.__26__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc800\uace0\ub3c4\ubdf0 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 15%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 27%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__26.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc800\uace0\ub3c4\ubdf0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__26.ggUpdateText();
		el.appendChild(els);
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__24.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		el.ggId="\uc800\uace0\ub3c4\ubdf0 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #889bf5;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me._image_4);
		me.__24.appendChild(me.__25);
		me.__20.appendChild(me.__24);
		el=me.__21=document.createElement('div');
		el.ggId="\ub300\uc0c1\uc9c0\uc704\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12.5%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 6.25%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		els=me.__23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub300\uc0c1\uc9c0 \uc704\uce58 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 15%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 27%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc0c1\uc9c0\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__23.ggUpdateText();
		el.appendChild(els);
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__23);
		el=me.__22=document.createElement('div');
		el.ggId="\ub300\uc0c1\uc9c0 \uc704\uce58 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ee5e3d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.onclick=function (e) {
			var params = {
						   pan: -1.29,
						   tilt: -61.69,
						   fov: 65.67,
						   projection: -1,
						   timingFunction: 3,
						   speed: 0.8
			};
			player.moveToEx(params);
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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'+
			'lFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me._image_3);
		me.__21.appendChild(me.__22);
		me.__20.appendChild(me.__21);
		me.__19.appendChild(me.__20);
		me.divSkin.appendChild(me.__19);
		el=me.__17=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd \uc811\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17.style.transition='';
				if (me.__17.ggCurrentLogicStateVisible == 0) {
					me.__17.style.visibility="hidden";
					me.__17.ggVisible=false;
				}
				else {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
			}
		}
		me.__17.logicBlock_visible();
		me.__17.onclick=function (e) {
			player.setVariableValue('vis_sidemenu', !player.getVariableValue('vis_sidemenu'));
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		el.ggId="\uc811\uae30 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #201e1d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAsCAYAAAA+aAX8AAAACXBIWXMAAC4jAAAuIwF4pT92AAAE4ElEQVRogdWZ24uVZRTGf3scc2Y8lFFX3XWACLpIO6gk0oFSouugsCwNSqE0rah/IKgMOgchYaVUgtnRIoO66wBFRIlzcEYdvbCLLDyN4/jrYu0P92y/vWd/hz1ODyw2bL5vvet9vrWed73vW1FpgNnAJcAwMNrooSmOZcBy4DfgVeB406fVNOtRH1O3qYvVSoPnpqp1qIvUXQYOqavVWc3eS/uzS31A3VN19IV6wxSYYBZbrG5XxzyLPvVR9YJWyehRH1R7HY/P/ieEVKpE7FRHPBf7jAyZMxEZ3eoq9fcUJ6NGycybAhNuZgvVj6vxNkKf+kh1vqlkzFQfVvc2caL6qXr9FJh0mt2sfq6emmAOqkNGyYzTkF'+
			'oi9jR+dxy2O7VKpqIuMD5Us4yoR5IhXbVkrFJ3Z3ByyvgC86cAEUlpfKKezDCHBEPqSnWu2oXZiKjFDs9vhlQMIrJmRD32qk+pyyrqKNCZo6EZAb4CngN+zPF+EUwDFgNPAHcAMwr6+wn4oQMYzOlgBnA38Awwv2AwWdABLASeBe6iOBH9wPfALxgi0l8gzUbUj9QbnZzSWGJoVm1DlReDRqd9mToHo9F6SP2zgNMRQ8TaKaoz1NuNFvt0gVgT7FHXqLOTMZKBuoxVZaiA81EjQ66zPWTcpn5ZIL5aDBqd6EW1Y9QOlnSgfxQYZNRQ93mWt7nrVO9Uv7XYqpFgt9Fwzawfq37gbmNvMlhgsDGjJS6jde9Ub1G/tjyNWKNemDZeWgDdhqj2FRj0tLG5K0rIUoOIMjSiX33cGo2ot0ZB9Bjb+CKiqqH6NzUavIlNU29V'+
			'v1PPFIxB48OOE8s0axbQDEND6rfzWTBmaEjWVWaJIZZlZMSQutY6sUyziYLqUpdbTFQ1SqaV3W6HcR7xjeVpxHobnF/UWytfabrRhwwUDGyHzTOkw3IzYr+6Tr24yZiZycAQ1ZW2vs1Pwxkb73YrxnnETstZPgeM0jhn+WxmWeq40zj32F8w0LSSWWSctZaBYXWDeqkZiDAjGYmGrLbYsjtqZMi1BsELDIJaOaGaCAeM7fhcMxJhDjIwlt2VFsuQMXWruqL6WwYRB42MaFkj6q2iDS+RmqEHWAGsBa7KuXU+ChwmLqrm5PSRYJi4JHoH+Cuvk7xkAMwC7gWeBi7P66QE7AfeIIg4XMRRnhOuBEeBrcRhywbgiiKB5MRB4DXgXQoSAcUyI0EPcB9xBHd1UWcZMEAQsRn4uwyHHSX4OA58SNTsgRL8tYJDwFvA+5REBJ'+
			'STGQlmEjfe7S6ZAeBN4G3g3zIdl5EZCY4RX2oj7cuQQSIDN1EyEVBMQNNwFNhCkLyOcjOkl8iITdVxSkeZZVKLHuAe4jj/yhL89QIvE6vXkRL8paLMMqnFceAD4AViIkUwRGTEFtpIBJCrHc9i3er95r/C7DX2Qpl2n3mtXZmR4ASR2i8CfRnfHQReqr5/rOS4UlG2gKbhNJHiFWA9rTVmfcArxOrUFrFMQ7szI8FJomXeCOyb4NlhorPcyiQSAZOTGQlOcTZD1gLXpDzTT/QRm4F/Ji2yKiYrMxKcIAh5nnNv/w8ArwPvcR6IANq+mjSy6cYBUXINcVB90haO89tpk1kmtRgFthHN2VJgF6EpR85TPMDkakY9TgA/E+L6K23Ya2TFf1s152mB8GCqAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=1.9;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32.7273%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 1.9%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32.7273% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me._image_2);
		me.__17.appendChild(me.__18);
		me.divSkin.appendChild(me.__17);
		el=me.__0=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd \uc0ac\uc774\ub4dc\ubc14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 300px;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_sidemenu') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__0.style.transition='';
				if (me.__0.ggCurrentLogicStateVisible == 0) {
					me.__0.style.visibility="hidden";
					me.__0.ggVisible=false;
				}
				else if (me.__0.ggCurrentLogicStateVisible == 1) {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
				else {
					me.__0.style.visibility="hidden";
					me.__0.ggVisible=false;
				}
			}
		}
		me.__0.logicBlock_visible();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75%;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \ubc84\ud2bc \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__img=document.createElement('img');
		els.className='ggskin ggskin__16';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABCCAYAAADuSnCvAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA80lEQVR4nO3bQQqDMBBA0ZniXvH+h4xeIN1/UohWC7H/LaWV8hmqgSQjosbD1Vqz97OvO3/IiAwCBgGDwNS6WOu4/7PLssS2bae/74SAQcAgYBAwCBgEDAIZjcVd73tIZveaaRhOCBgEDAIGgebi7qx5nqOUcuUtb9V6KDghYBAwCBgEDAIGAYOAQcAgYBAwCBgEDAIGAYOAQcAgYBAwCBgEDAIGAYOAQcAgYBAwCBgEDAIGAYOAQaC5YeaJuwt7OSFgEDAIGASmI2daKTPHPYv2gRMCBgGDgEHg0q3d+77Huq5X3vLn8ptDyz5l/oBBwCDwBvfYHJZCedSaAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \uc774\ubbf8\uc9c0";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.65,sy:0.65,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__16);
		el=me.__15=document.createElement('div');
		els=me.__15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \ud0dd\uc2a4\ud2b8";
		el.ggDx=0.98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 22%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.98%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__15.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__15.ggUpdateText();
		el.appendChild(els);
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__15);
		me.__13.appendChild(me.__14);
		me.__0.appendChild(me.__13);
		el=me.__9=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \ubc84\ud2bc \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		els=me.__12__img=document.createElement('img');
		els.className='ggskin ggskin__12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEMElEQVR4nO3cPYgUZxzH8e/koqgEBEEIXFCUiGAlBEGR4BELRcGQxipdqnR2phJFSBSE2ChCRARBUBHf0CIh6gXBNEKaBOUUAiqKJsYXFDHiWPzvUNfn2Z2deXbnN7v/L2xz4z7z8nFudl72sjzP8XT6oO4F8N7NQcRyELEcRCwHEctBxHIQsRxELAcRy0HEchCxHESsD6u8OcuyVMuRonnAdOB63QsyVZkLt4OyhywAxoELwKc1L0u18jwv/RJpMXALyCdfNxFBKbVNGw6yBLjDGwwplGEDWQrc430MGZRhAvkM+Jc4hgTKsICsAB7SGaN2lGEA+Rx4THjD38A2fgxlUb8XdtBBVgNPCW/wq8AottFTo3wXGO'+
			'uHIm8ss02bch6yFjgDzApM+wsYA24DE8AX2Mfg1j4BzlPDntJNTQDZAJwCZgam/YFh3H3rZ41GUQfZCBzDLom0dgX7NXY/MK2xKMogXwOHCWNcxjAetHl/I1FUQb4BDgIjgWnjwBrgUYFxGoeiCPIt8BNhjF+AdcCTLsZrFIoayCZgDxC6rn8OO8A/KzFuY1CUQDYDPxLGOAl8BTyvMH4jUFRAtgA7ItOOYp+2XiSYjz6KwJn698SvQx0ifCypWjdn9H09U68TJAN2RTZKDuynNxhTFUUZCpAMO3jHMPYSPpakrgjKwIOMYP/7YxixA3uv6oQS2osHBmQEOy7EMAqtaA9qh/Iw8LOBAJkGHImsdI590qqzdigDBzIdONFmBTd3M1gPK4rSaJAZwNnIir3Czs6VKoLSWJBZwM+RlXqFXbdSrBPKviKDqIF8BFyMrNBL'+
			'7Iqucu1QHlPgjF4JZDZwKbIyOXC6/Hbqa4uIP+Fyiw4oZbZpL65lzcEuk69s82/+7MF8e9EEds4UahR7ljjpta/UIHOBX4Flicets3/aTEuOkhLkY+yYsTThmE0oKUoqkFEMY0lg2v+J5qFcMpQUIPOB37CvBbT2BDiQYB5qhW4hJ0GpCrIQe+hgYWDaI+xhhL8rzkOxw4RvclVGqQqyFttDWnuAPaZzueL4qv1H/M5jJZSqIHt5/6LgfQzjSsWx1Wt3O3gU+LLMoCmOIdsnX2CPdI5hj3gOQzGUbdh9lK6r9C3ct9qCPRFyHLiWaMymNIVyHntQYhuwtexgqUDAHlYY1qZQ1gO7qwyk8hjQIDRBRQyouIcUuQQf++MCXd7gqq1+L7/vIWI5iFgOIpaDiOUgYjmIWA4iloOI5SBiOYhYDiKWg4jlIGI5iFgOIpaDiO'+
			'UgYjmIWA4iloOI5SBiOYhYDiKWg4iV8lHSblqeZZnKX2/o1Kp+zqwukLHJl9eS/8oSy0HEchCx+nEM+R3Y2Yf59LPxXg2cNeVrAcOS/8oSy0HEchCxHEQsBxHLQcRyELEcRCwHEctBxHIQsRxELAcRy0HEeg07lWk/Oi8mewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \uc774\ubbf8\uc9c0";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__12);
		el=me.__11=document.createElement('div');
		els=me.__11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0.98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 22%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.98%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__11.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc5c5\uac1c\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__11.ggUpdateText();
		el.appendChild(els);
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__11);
		me.__9.appendChild(me.__10);
		me.__0.appendChild(me.__9);
		el=me.__5=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4 \ubc84\ud2bc \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.onclick=function (e) {
			player.setVariableValue('vis_leftmenu', !player.getVariableValue('vis_leftmenu'));
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		els=me.__8__img=document.createElement('img');
		els.className='ggskin ggskin__8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEMElEQVR4nO3cPYgUZxzH8e/koqgEBEEIXFCUiGAlBEGR4BELRcGQxipdqnR2phJFSBSE2ChCRARBUBHf0CIh6gXBNEKaBOUUAiqKJsYXFDHiWPzvUNfn2Z2deXbnN7v/L2xz4z7z8nFudl72sjzP8XT6oO4F8N7NQcRyELEcRCwHEctBxHIQsRxELAcRy0HEchCxHESsD6u8OcuyVMuRonnAdOB63QsyVZkLt4OyhywAxoELwKc1L0u18jwv/RJpMXALyCdfNxFBKbVNGw6yBLjDGwwplGEDWQrc430MGZRhAvkM+Jc4hgTKsICsAB7SGaN2lGEA+Rx4THjD38A2fgxlUb8XdtBBVgNPCW/wq8AottFTo3wXGO'+
			'uHIm8ss02bch6yFjgDzApM+wsYA24DE8AX2Mfg1j4BzlPDntJNTQDZAJwCZgam/YFh3H3rZ41GUQfZCBzDLom0dgX7NXY/MK2xKMogXwOHCWNcxjAetHl/I1FUQb4BDgIjgWnjwBrgUYFxGoeiCPIt8BNhjF+AdcCTLsZrFIoayCZgDxC6rn8OO8A/KzFuY1CUQDYDPxLGOAl8BTyvMH4jUFRAtgA7ItOOYp+2XiSYjz6KwJn698SvQx0ifCypWjdn9H09U68TJAN2RTZKDuynNxhTFUUZCpAMO3jHMPYSPpakrgjKwIOMYP/7YxixA3uv6oQS2osHBmQEOy7EMAqtaA9qh/Iw8LOBAJkGHImsdI590qqzdigDBzIdONFmBTd3M1gPK4rSaJAZwNnIir3Czs6VKoLSWJBZwM+RlXqFXbdSrBPKviKDqIF8BFyMrNBL'+
			'7Iqucu1QHlPgjF4JZDZwKbIyOXC6/Hbqa4uIP+Fyiw4oZbZpL65lzcEuk69s82/+7MF8e9EEds4UahR7ljjpta/UIHOBX4Flicets3/aTEuOkhLkY+yYsTThmE0oKUoqkFEMY0lg2v+J5qFcMpQUIPOB37CvBbT2BDiQYB5qhW4hJ0GpCrIQe+hgYWDaI+xhhL8rzkOxw4RvclVGqQqyFttDWnuAPaZzueL4qv1H/M5jJZSqIHt5/6LgfQzjSsWx1Wt3O3gU+LLMoCmOIdsnX2CPdI5hj3gOQzGUbdh9lK6r9C3ct9qCPRFyHLiWaMymNIVyHntQYhuwtexgqUDAHlYY1qZQ1gO7qwyk8hjQIDRBRQyouIcUuQQf++MCXd7gqq1+L7/vIWI5iFgOIpaDiOUgYjmIWA4iloOI5SBiOYhYDiKWg4jlIGI5iFgOIpaDiO'+
			'UgYjmIWA4iloOI5SBiOYhYDiKWg4iV8lHSblqeZZnKX2/o1Kp+zqwukLHJl9eS/8oSy0HEchCx+nEM+R3Y2Yf59LPxXg2cNeVrAcOS/8oSy0HEchCxHEQsBxHLQcRyELEcRCwHEctBxHIQsRxELAcRy0HEeg07lWk/Oi8mewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4 \uc774\ubbf8\uc9c0";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__8);
		el=me.__7=document.createElement('div');
		els=me.__7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0.98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 22%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.98%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubcc0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7.ggUpdateText();
		el.appendChild(els);
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__7);
		me.__5.appendChild(me.__6);
		me.__0.appendChild(me.__5);
		el=me.__1=document.createElement('div');
		el.ggId="\ud648\ud398\uc774\uc9c0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\ud648\ud398\uc774\uc9c0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		els=me.__4__img=document.createElement('img');
		els.className='ggskin ggskin__4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEMElEQVR4nO3cPYgUZxzH8e/koqgEBEEIXFCUiGAlBEGR4BELRcGQxipdqnR2phJFSBSE2ChCRARBUBHf0CIh6gXBNEKaBOUUAiqKJsYXFDHiWPzvUNfn2Z2deXbnN7v/L2xz4z7z8nFudl72sjzP8XT6oO4F8N7NQcRyELEcRCwHEctBxHIQsRxELAcRy0HEchCxHESsD6u8OcuyVMuRonnAdOB63QsyVZkLt4OyhywAxoELwKc1L0u18jwv/RJpMXALyCdfNxFBKbVNGw6yBLjDGwwplGEDWQrc430MGZRhAvkM+Jc4hgTKsICsAB7SGaN2lGEA+Rx4THjD38A2fgxlUb8XdtBBVgNPCW/wq8AottFTo3wXGO'+
			'uHIm8ss02bch6yFjgDzApM+wsYA24DE8AX2Mfg1j4BzlPDntJNTQDZAJwCZgam/YFh3H3rZ41GUQfZCBzDLom0dgX7NXY/MK2xKMogXwOHCWNcxjAetHl/I1FUQb4BDgIjgWnjwBrgUYFxGoeiCPIt8BNhjF+AdcCTLsZrFIoayCZgDxC6rn8OO8A/KzFuY1CUQDYDPxLGOAl8BTyvMH4jUFRAtgA7ItOOYp+2XiSYjz6KwJn698SvQx0ifCypWjdn9H09U68TJAN2RTZKDuynNxhTFUUZCpAMO3jHMPYSPpakrgjKwIOMYP/7YxixA3uv6oQS2osHBmQEOy7EMAqtaA9qh/Iw8LOBAJkGHImsdI590qqzdigDBzIdONFmBTd3M1gPK4rSaJAZwNnIir3Czs6VKoLSWJBZwM+RlXqFXbdSrBPKviKDqIF8BFyMrNBL'+
			'7Iqucu1QHlPgjF4JZDZwKbIyOXC6/Hbqa4uIP+Fyiw4oZbZpL65lzcEuk69s82/+7MF8e9EEds4UahR7ljjpta/UIHOBX4Flicets3/aTEuOkhLkY+yYsTThmE0oKUoqkFEMY0lg2v+J5qFcMpQUIPOB37CvBbT2BDiQYB5qhW4hJ0GpCrIQe+hgYWDaI+xhhL8rzkOxw4RvclVGqQqyFttDWnuAPaZzueL4qv1H/M5jJZSqIHt5/6LgfQzjSsWx1Wt3O3gU+LLMoCmOIdsnX2CPdI5hj3gOQzGUbdh9lK6r9C3ct9qCPRFyHLiWaMymNIVyHntQYhuwtexgqUDAHlYY1qZQ1gO7qwyk8hjQIDRBRQyouIcUuQQf++MCXd7gqq1+L7/vIWI5iFgOIpaDiOUgYjmIWA4iloOI5SBiOYhYDiKWg4jlIGI5iFgOIpaDiO'+
			'UgYjmIWA4iloOI5SBiOYhYDiKWg4iV8lHSblqeZZnKX2/o1Kp+zqwukLHJl9eS/8oSy0HEchCx+nEM+R3Y2Yf59LPxXg2cNeVrAcOS/8oSy0HEchCxHEQsBxHLQcRyELEcRCwHEctBxHIQsRxELAcRy0HEeg07lWk/Oi8mewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud648\ud398\uc774\uc9c0 \uc774\ubbf8\uc9c0";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me.__4);
		el=me.__3=document.createElement('div');
		els=me.__3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud648\ud398\uc774\uc9c0 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0.98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 22%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.98%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud648\ud398\uc774\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3.ggUpdateText();
		el.appendChild(els);
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me.__3);
		me.__1.appendChild(me.__2);
		me.__0.appendChild(me.__1);
		me.divSkin.appendChild(me.__0);
		el=me.__m11=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd \uc811\uae30-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__m11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__m11.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__m11.ggCurrentLogicStateSize = newLogicStateSize;
				me.__m11.style.transition='width 0s, height 0s';
				if (me.__m11.ggCurrentLogicStateSize == 0) {
					me.__m11.style.width='35px';
					me.__m11.style.height='35px';
					skin.updateSize(me.__m11);
				}
				else {
					me.__m11.style.width='40px';
					me.__m11.style.height='40px';
					skin.updateSize(me.__m11);
				}
			}
		}
		me.__m11.logicBlock_size();
		me.__m11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m11.style.transition='width 0s, height 0s';
				if (me.__m11.ggCurrentLogicStateVisible == 0) {
					me.__m11.style.visibility="hidden";
					me.__m11.ggVisible=false;
				}
				else {
					me.__m11.style.visibility=(Number(me.__m11.style.opacity)>0||!me.__m11.style.opacity)?'inherit':'hidden';
					me.__m11.ggVisible=true;
				}
			}
		}
		me.__m11.logicBlock_visible();
		me.__m11.onclick=function (e) {
			player.setVariableValue('vis_sidemenu', !player.getVariableValue('vis_sidemenu'));
		}
		me.__m11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m12=document.createElement('div');
		el.ggId="\uc811\uae30 \ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #201e1d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m12.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2m=document.createElement('div');
		els=me._image_2m__img=document.createElement('img');
		els.className='ggskin ggskin_image_2m';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAsCAYAAAA+aAX8AAAACXBIWXMAAC4jAAAuIwF4pT92AAAE4ElEQVRogdWZ24uVZRTGf3scc2Y8lFFX3XWACLpIO6gk0oFSouugsCwNSqE0rah/IKgMOgchYaVUgtnRIoO66wBFRIlzcEYdvbCLLDyN4/jrYu0P92y/vWd/hz1ODyw2bL5vvet9vrWed73vW1FpgNnAJcAwMNrooSmOZcBy4DfgVeB406fVNOtRH1O3qYvVSoPnpqp1qIvUXQYOqavVWc3eS/uzS31A3VN19IV6wxSYYBZbrG5XxzyLPvVR9YJWyehRH1R7HY/P/ieEVKpE7FRHPBf7jAyZMxEZ3eoq9fcUJ6NGycybAhNuZgvVj6vxNkKf+kh1vqlkzFQfVvc2caL6qXr9FJh0mt2sfq6emmAOqkNGyYzTkF'+
			'oi9jR+dxy2O7VKpqIuMD5Us4yoR5IhXbVkrFJ3Z3ByyvgC86cAEUlpfKKezDCHBEPqSnWu2oXZiKjFDs9vhlQMIrJmRD32qk+pyyrqKNCZo6EZAb4CngN+zPF+EUwDFgNPAHcAMwr6+wn4oQMYzOlgBnA38Awwv2AwWdABLASeBe6iOBH9wPfALxgi0l8gzUbUj9QbnZzSWGJoVm1DlReDRqd9mToHo9F6SP2zgNMRQ8TaKaoz1NuNFvt0gVgT7FHXqLOTMZKBuoxVZaiA81EjQ66zPWTcpn5ZIL5aDBqd6EW1Y9QOlnSgfxQYZNRQ93mWt7nrVO9Uv7XYqpFgt9Fwzawfq37gbmNvMlhgsDGjJS6jde9Ub1G/tjyNWKNemDZeWgDdhqj2FRj0tLG5K0rIUoOIMjSiX33cGo2ot0ZB9Bjb+CKiqqH6NzUavIlNU29V'+
			'v1PPFIxB48OOE8s0axbQDEND6rfzWTBmaEjWVWaJIZZlZMSQutY6sUyziYLqUpdbTFQ1SqaV3W6HcR7xjeVpxHobnF/UWytfabrRhwwUDGyHzTOkw3IzYr+6Tr24yZiZycAQ1ZW2vs1Pwxkb73YrxnnETstZPgeM0jhn+WxmWeq40zj32F8w0LSSWWSctZaBYXWDeqkZiDAjGYmGrLbYsjtqZMi1BsELDIJaOaGaCAeM7fhcMxJhDjIwlt2VFsuQMXWruqL6WwYRB42MaFkj6q2iDS+RmqEHWAGsBa7KuXU+ChwmLqrm5PSRYJi4JHoH+Cuvk7xkAMwC7gWeBi7P66QE7AfeIIg4XMRRnhOuBEeBrcRhywbgiiKB5MRB4DXgXQoSAcUyI0EPcB9xBHd1UWcZMEAQsRn4uwyHHSX4OA58SNTsgRL8tYJDwFvA+5REBJ'+
			'STGQlmEjfe7S6ZAeBN4G3g3zIdl5EZCY4RX2oj7cuQQSIDN1EyEVBMQNNwFNhCkLyOcjOkl8iITdVxSkeZZVKLHuAe4jj/yhL89QIvE6vXkRL8paLMMqnFceAD4AViIkUwRGTEFtpIBJCrHc9i3er95r/C7DX2Qpl2n3mtXZmR4ASR2i8CfRnfHQReqr5/rOS4UlG2gKbhNJHiFWA9rTVmfcArxOrUFrFMQ7szI8FJomXeCOyb4NlhorPcyiQSAZOTGQlOcTZD1gLXpDzTT/QRm4F/Ji2yKiYrMxKcIAh5nnNv/w8ArwPvcR6IANq+mjSy6cYBUXINcVB90haO89tpk1kmtRgFthHN2VJgF6EpR85TPMDkakY9TgA/E+L6K23Ya2TFf1s152mB8GCqAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-m";
		el.ggDx=1.9;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32.7273%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 1.9%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32.7273% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2m.ggUpdatePosition=function (useTransition) {
		}
		me.__m12.appendChild(me._image_2m);
		me.__m11.appendChild(me.__m12);
		me.divSkin.appendChild(me.__m11);
		el=me.__m=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd \uc0ac\uc774\ub4dc\ubc14-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 300px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__m.style.transition='transform 0s';
				if (me.__m.ggCurrentLogicStateScaling == 0) {
					me.__m.ggParameter.sx = 0.8;
					me.__m.ggParameter.sy = 0.8;
					me.__m.style.transform=parameterToTransform(me.__m.ggParameter);
					skin.updateSize(me.__m);
				}
				else {
					me.__m.ggParameter.sx = 1;
					me.__m.ggParameter.sy = 1;
					me.__m.style.transform=parameterToTransform(me.__m.ggParameter);
					skin.updateSize(me.__m);
				}
			}
		}
		me.__m.logicBlock_scaling();
		me.__m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_sidemenu') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m.style.transition='transform 0s';
				if (me.__m.ggCurrentLogicStateVisible == 0) {
					me.__m.style.visibility="hidden";
					me.__m.ggVisible=false;
				}
				else if (me.__m.ggCurrentLogicStateVisible == 1) {
					me.__m.style.visibility=(Number(me.__m.style.opacity)>0||!me.__m.style.opacity)?'inherit':'hidden';
					me.__m.ggVisible=true;
				}
				else {
					me.__m.style.visibility="hidden";
					me.__m.ggVisible=false;
				}
			}
		}
		me.__m.logicBlock_visible();
		me.__m.ggUpdatePosition=function (useTransition) {
		}
		el=me._m3=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75%;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m3.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me._m3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m8=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \ubc84\ud2bc \ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m10=document.createElement('div');
		els=me.__m10__img=document.createElement('img');
		els.className='ggskin ggskin__m10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABCCAYAAADuSnCvAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA80lEQVR4nO3bQQqDMBBA0ZniXvH+h4xeIN1/UohWC7H/LaWV8hmqgSQjosbD1Vqz97OvO3/IiAwCBgGDwNS6WOu4/7PLssS2bae/74SAQcAgYBAwCBgEDAIZjcVd73tIZveaaRhOCBgEDAIGgebi7qx5nqOUcuUtb9V6KDghYBAwCBgEDAIGAYOAQcAgYBAwCBgEDAIGAYOAQcAgYBAwCBgEDAIGAYOAQcAgYBAwCBgEDAIGAYOAQaC5YeaJuwt7OSFgEDAIGASmI2daKTPHPYv2gRMCBgGDgEHg0q3d+77Huq5X3vLn8ptDyz5l/oBBwCDwBvfYHJZCedSaAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \uc774\ubbf8\uc9c0-m";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.65,sy:0.65,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__m10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m10.ggUpdatePosition=function (useTransition) {
		}
		me.__m8.appendChild(me.__m10);
		el=me.__m9=document.createElement('div');
		els=me.__m9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \ud0dd\uc2a4\ud2b8-m";
		el.ggDx=0.98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 22%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 21%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.98%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__m9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m9.ggUpdateText();
		el.appendChild(els);
		me.__m9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m9.ggUpdatePosition=function (useTransition) {
		}
		me.__m8.appendChild(me.__m9);
		me._m3.appendChild(me.__m8);
		me.__m.appendChild(me._m3);
		el=me._m2=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m5=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \ubc84\ud2bc \ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m7=document.createElement('div');
		els=me.__m7__img=document.createElement('img');
		els.className='ggskin ggskin__m7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEMElEQVR4nO3cPYgUZxzH8e/koqgEBEEIXFCUiGAlBEGR4BELRcGQxipdqnR2phJFSBSE2ChCRARBUBHf0CIh6gXBNEKaBOUUAiqKJsYXFDHiWPzvUNfn2Z2deXbnN7v/L2xz4z7z8nFudl72sjzP8XT6oO4F8N7NQcRyELEcRCwHEctBxHIQsRxELAcRy0HEchCxHESsD6u8OcuyVMuRonnAdOB63QsyVZkLt4OyhywAxoELwKc1L0u18jwv/RJpMXALyCdfNxFBKbVNGw6yBLjDGwwplGEDWQrc430MGZRhAvkM+Jc4hgTKsICsAB7SGaN2lGEA+Rx4THjD38A2fgxlUb8XdtBBVgNPCW/wq8AottFTo3wXGO'+
			'uHIm8ss02bch6yFjgDzApM+wsYA24DE8AX2Mfg1j4BzlPDntJNTQDZAJwCZgam/YFh3H3rZ41GUQfZCBzDLom0dgX7NXY/MK2xKMogXwOHCWNcxjAetHl/I1FUQb4BDgIjgWnjwBrgUYFxGoeiCPIt8BNhjF+AdcCTLsZrFIoayCZgDxC6rn8OO8A/KzFuY1CUQDYDPxLGOAl8BTyvMH4jUFRAtgA7ItOOYp+2XiSYjz6KwJn698SvQx0ifCypWjdn9H09U68TJAN2RTZKDuynNxhTFUUZCpAMO3jHMPYSPpakrgjKwIOMYP/7YxixA3uv6oQS2osHBmQEOy7EMAqtaA9qh/Iw8LOBAJkGHImsdI590qqzdigDBzIdONFmBTd3M1gPK4rSaJAZwNnIir3Czs6VKoLSWJBZwM+RlXqFXbdSrBPKviKDqIF8BFyMrNBL'+
			'7Iqucu1QHlPgjF4JZDZwKbIyOXC6/Hbqa4uIP+Fyiw4oZbZpL65lzcEuk69s82/+7MF8e9EEds4UahR7ljjpta/UIHOBX4Flicets3/aTEuOkhLkY+yYsTThmE0oKUoqkFEMY0lg2v+J5qFcMpQUIPOB37CvBbT2BDiQYB5qhW4hJ0GpCrIQe+hgYWDaI+xhhL8rzkOxw4RvclVGqQqyFttDWnuAPaZzueL4qv1H/M5jJZSqIHt5/6LgfQzjSsWx1Wt3O3gU+LLMoCmOIdsnX2CPdI5hj3gOQzGUbdh9lK6r9C3ct9qCPRFyHLiWaMymNIVyHntQYhuwtexgqUDAHlYY1qZQ1gO7qwyk8hjQIDRBRQyouIcUuQQf++MCXd7gqq1+L7/vIWI5iFgOIpaDiOUgYjmIWA4iloOI5SBiOYhYDiKWg4jlIGI5iFgOIpaDiO'+
			'UgYjmIWA4iloOI5SBiOYhYDiKWg4iV8lHSblqeZZnKX2/o1Kp+zqwukLHJl9eS/8oSy0HEchCx+nEM+R3Y2Yf59LPxXg2cNeVrAcOS/8oSy0HEchCxHEQsBxHLQcRyELEcRCwHEctBxHIQsRxELAcRy0HEeg07lWk/Oi8mewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \uc774\ubbf8\uc9c0-m";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__m7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m7.ggUpdatePosition=function (useTransition) {
		}
		me.__m5.appendChild(me.__m7);
		el=me.__m6=document.createElement('div');
		els=me.__m6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \ud0dd\uc2a4\ud2b8-m";
		el.ggDx=0.98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 22%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 21%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.98%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__m6.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc5c5\uac1c\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m6.ggUpdateText();
		el.appendChild(els);
		me.__m6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m6.ggUpdatePosition=function (useTransition) {
		}
		me.__m5.appendChild(me.__m6);
		me._m2.appendChild(me.__m5);
		me.__m.appendChild(me._m2);
		el=me._m1=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ubc84\ud2bc-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m2=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4 \ubc84\ud2bc \ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m2.onclick=function (e) {
			player.setVariableValue('vis_leftmenu', !player.getVariableValue('vis_leftmenu'));
		}
		me.__m2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m4=document.createElement('div');
		els=me.__m4__img=document.createElement('img');
		els.className='ggskin ggskin__m4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEMElEQVR4nO3cPYgUZxzH8e/koqgEBEEIXFCUiGAlBEGR4BELRcGQxipdqnR2phJFSBSE2ChCRARBUBHf0CIh6gXBNEKaBOUUAiqKJsYXFDHiWPzvUNfn2Z2deXbnN7v/L2xz4z7z8nFudl72sjzP8XT6oO4F8N7NQcRyELEcRCwHEctBxHIQsRxELAcRy0HEchCxHESsD6u8OcuyVMuRonnAdOB63QsyVZkLt4OyhywAxoELwKc1L0u18jwv/RJpMXALyCdfNxFBKbVNGw6yBLjDGwwplGEDWQrc430MGZRhAvkM+Jc4hgTKsICsAB7SGaN2lGEA+Rx4THjD38A2fgxlUb8XdtBBVgNPCW/wq8AottFTo3wXGO'+
			'uHIm8ss02bch6yFjgDzApM+wsYA24DE8AX2Mfg1j4BzlPDntJNTQDZAJwCZgam/YFh3H3rZ41GUQfZCBzDLom0dgX7NXY/MK2xKMogXwOHCWNcxjAetHl/I1FUQb4BDgIjgWnjwBrgUYFxGoeiCPIt8BNhjF+AdcCTLsZrFIoayCZgDxC6rn8OO8A/KzFuY1CUQDYDPxLGOAl8BTyvMH4jUFRAtgA7ItOOYp+2XiSYjz6KwJn698SvQx0ifCypWjdn9H09U68TJAN2RTZKDuynNxhTFUUZCpAMO3jHMPYSPpakrgjKwIOMYP/7YxixA3uv6oQS2osHBmQEOy7EMAqtaA9qh/Iw8LOBAJkGHImsdI590qqzdigDBzIdONFmBTd3M1gPK4rSaJAZwNnIir3Czs6VKoLSWJBZwM+RlXqFXbdSrBPKviKDqIF8BFyMrNBL'+
			'7Iqucu1QHlPgjF4JZDZwKbIyOXC6/Hbqa4uIP+Fyiw4oZbZpL65lzcEuk69s82/+7MF8e9EEds4UahR7ljjpta/UIHOBX4Flicets3/aTEuOkhLkY+yYsTThmE0oKUoqkFEMY0lg2v+J5qFcMpQUIPOB37CvBbT2BDiQYB5qhW4hJ0GpCrIQe+hgYWDaI+xhhL8rzkOxw4RvclVGqQqyFttDWnuAPaZzueL4qv1H/M5jJZSqIHt5/6LgfQzjSsWx1Wt3O3gU+LLMoCmOIdsnX2CPdI5hj3gOQzGUbdh9lK6r9C3ct9qCPRFyHLiWaMymNIVyHntQYhuwtexgqUDAHlYY1qZQ1gO7qwyk8hjQIDRBRQyouIcUuQQf++MCXd7gqq1+L7/vIWI5iFgOIpaDiOUgYjmIWA4iloOI5SBiOYhYDiKWg4jlIGI5iFgOIpaDiO'+
			'UgYjmIWA4iloOI5SBiOYhYDiKWg4iV8lHSblqeZZnKX2/o1Kp+zqwukLHJl9eS/8oSy0HEchCx+nEM+R3Y2Yf59LPxXg2cNeVrAcOS/8oSy0HEchCxHEQsBxHLQcRyELEcRCwHEctBxHIQsRxELAcRy0HEeg07lWk/Oi8mewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4 \uc774\ubbf8\uc9c0-m";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__m4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m4.ggUpdatePosition=function (useTransition) {
		}
		me.__m2.appendChild(me.__m4);
		el=me.__m3=document.createElement('div');
		els=me.__m3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4 \ud0dd\uc2a4\ud2b8-m";
		el.ggDx=0.98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 22%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 21%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.98%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__m3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubcc0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m3.ggUpdateText();
		el.appendChild(els);
		me.__m3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m3.ggUpdatePosition=function (useTransition) {
		}
		me.__m2.appendChild(me.__m3);
		me._m1.appendChild(me.__m2);
		me.__m.appendChild(me._m1);
		el=me._m=document.createElement('div');
		el.ggId="\ud648\ud398\uc774\uc9c0-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me._m0=document.createElement('div');
		el.ggId="\ud648\ud398\uc774\uc9c0\ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m1=document.createElement('div');
		els=me.__m1__img=document.createElement('img');
		els.className='ggskin ggskin__m1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEMElEQVR4nO3cPYgUZxzH8e/koqgEBEEIXFCUiGAlBEGR4BELRcGQxipdqnR2phJFSBSE2ChCRARBUBHf0CIh6gXBNEKaBOUUAiqKJsYXFDHiWPzvUNfn2Z2deXbnN7v/L2xz4z7z8nFudl72sjzP8XT6oO4F8N7NQcRyELEcRCwHEctBxHIQsRxELAcRy0HEchCxHESsD6u8OcuyVMuRonnAdOB63QsyVZkLt4OyhywAxoELwKc1L0u18jwv/RJpMXALyCdfNxFBKbVNGw6yBLjDGwwplGEDWQrc430MGZRhAvkM+Jc4hgTKsICsAB7SGaN2lGEA+Rx4THjD38A2fgxlUb8XdtBBVgNPCW/wq8AottFTo3wXGO'+
			'uHIm8ss02bch6yFjgDzApM+wsYA24DE8AX2Mfg1j4BzlPDntJNTQDZAJwCZgam/YFh3H3rZ41GUQfZCBzDLom0dgX7NXY/MK2xKMogXwOHCWNcxjAetHl/I1FUQb4BDgIjgWnjwBrgUYFxGoeiCPIt8BNhjF+AdcCTLsZrFIoayCZgDxC6rn8OO8A/KzFuY1CUQDYDPxLGOAl8BTyvMH4jUFRAtgA7ItOOYp+2XiSYjz6KwJn698SvQx0ifCypWjdn9H09U68TJAN2RTZKDuynNxhTFUUZCpAMO3jHMPYSPpakrgjKwIOMYP/7YxixA3uv6oQS2osHBmQEOy7EMAqtaA9qh/Iw8LOBAJkGHImsdI590qqzdigDBzIdONFmBTd3M1gPK4rSaJAZwNnIir3Czs6VKoLSWJBZwM+RlXqFXbdSrBPKviKDqIF8BFyMrNBL'+
			'7Iqucu1QHlPgjF4JZDZwKbIyOXC6/Hbqa4uIP+Fyiw4oZbZpL65lzcEuk69s82/+7MF8e9EEds4UahR7ljjpta/UIHOBX4Flicets3/aTEuOkhLkY+yYsTThmE0oKUoqkFEMY0lg2v+J5qFcMpQUIPOB37CvBbT2BDiQYB5qhW4hJ0GpCrIQe+hgYWDaI+xhhL8rzkOxw4RvclVGqQqyFttDWnuAPaZzueL4qv1H/M5jJZSqIHt5/6LgfQzjSsWx1Wt3O3gU+LLMoCmOIdsnX2CPdI5hj3gOQzGUbdh9lK6r9C3ct9qCPRFyHLiWaMymNIVyHntQYhuwtexgqUDAHlYY1qZQ1gO7qwyk8hjQIDRBRQyouIcUuQQf++MCXd7gqq1+L7/vIWI5iFgOIpaDiOUgYjmIWA4iloOI5SBiOYhYDiKWg4jlIGI5iFgOIpaDiO'+
			'UgYjmIWA4iloOI5SBiOYhYDiKWg4iV8lHSblqeZZnKX2/o1Kp+zqwukLHJl9eS/8oSy0HEchCx+nEM+R3Y2Yf59LPxXg2cNeVrAcOS/8oSy0HEchCxHEQsBxHLQcRyELEcRCwHEctBxHIQsRxELAcRy0HEeg07lWk/Oi8mewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud648\ud398\uc774\uc9c0 \uc774\ubbf8\uc9c0-m";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m1.ggUpdatePosition=function (useTransition) {
		}
		me._m0.appendChild(me.__m1);
		el=me.__m0=document.createElement('div');
		els=me.__m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud648\ud398\uc774\uc9c0 \ud0dd\uc2a4\ud2b8-m";
		el.ggDx=0.98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 22%;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 21%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0.98%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud648\ud398\uc774\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m0.ggUpdateText();
		el.appendChild(els);
		me.__m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m0.ggUpdatePosition=function (useTransition) {
		}
		me._m0.appendChild(me.__m0);
		me._m.appendChild(me._m0);
		me.__m.appendChild(me._m);
		me.divSkin.appendChild(me.__m);
		el=me.__=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc2dc\uc810";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__);
		me._logo.logicBlock_size();
		me.__19.logicBlock_size();
		me.__20.logicBlock_position();
		me.__17.logicBlock_visible();
		me.__0.logicBlock_visible();
		me.__m11.logicBlock_size();
		me.__m11.logicBlock_visible();
		me.__m.logicBlock_scaling();
		me.__m.logicBlock_visible();
		if (
			(
				((player.getViewerSize().width <= 640))
			)
		) {
			player.setPanTiltFov(-1.29,-61.69,65.67);
		}
		player.addListener('changenode', function(event) {
			me.__20.logicBlock_position();
			me.__0.logicBlock_visible();
			me.__m.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			me.__20.logicBlock_position();
			me.__0.logicBlock_visible();
			me.__m.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._logo.logicBlock_size();
			me.__19.logicBlock_size();
			me.__17.logicBlock_visible();
			me.__0.logicBlock_visible();
			me.__m11.logicBlock_size();
			me.__m11.logicBlock_visible();
			me.__m.logicBlock_scaling();
			me.__m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_leftmenu', function(event) {
			me.__20.logicBlock_position();
		});
		player.addListener('varchanged_vis_sidemenu', function(event) {
			me.__0.logicBlock_visible();
			me.__m.logicBlock_visible();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};