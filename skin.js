// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ???? ?? ??.ggsk
// Generated 2024-01-31T14:11:29

function pano2vrSkin(player,base) {
	player.addVariable('vis_sidemenu', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_leftmenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_traffic', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 1, defaultValue: false } });
	player.addVariable('vis_trafficborder', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_school', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_shop', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_tree', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_around', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_business', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_copy', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_home', 2, false, { ignoreInState: 0  });
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
		el=me.__29=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 500px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		hs+='transform:translateY(-50%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__29.logicBlock_size = function() {
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
			if (me.__29.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__29.ggCurrentLogicStateSize = newLogicStateSize;
				me.__29.style.transition='width 0s, height 0s';
				if (me.__29.ggCurrentLogicStateSize == 0) {
					me.__29.style.width='75px';
					me.__29.style.height='500px';
					skin.updateSize(me.__29);
				}
				else {
					me.__29.style.width='110px';
					me.__29.style.height='500px';
					skin.updateSize(me.__29);
				}
			}
		}
		me.__29.logicBlock_size();
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
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
		me.__30.logicBlock_position = function() {
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
			if (me.__30.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__30.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__30.style.transition='left 800ms ease 0ms, top 800ms ease 0ms';
				if (me.__30.ggCurrentLogicStatePosition == 0) {
					me.__30.style.left='0%';
					me.__30.style.top='0px';
				}
				else {
					me.__30.style.left='-100%';
					me.__30.style.top='0px';
				}
			}
		}
		me.__30.logicBlock_position();
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
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
		me.__49.ggIsActive=function() {
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
		me.__49.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__49.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__49.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__49.style.transition='right 0s, top 0s';
				if (me.__49.ggCurrentLogicStatePosition == 0) {
					me.__49.style.right='10px';
					me.__49.style.top='82.06%';
				}
				else {
					me.__49.style.right='0px';
					me.__49.style.top='82.06%';
				}
			}
		}
		me.__49.logicBlock_position();
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		els=me.__51__text=document.createElement('div');
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
		hs+='bottom : 9%;';
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__51.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc5f0\ud658\uacbd\n\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__51.ggUpdateText();
		el.appendChild(els);
		me.__51.ggIsActive=function() {
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
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me.__51);
		el=me.__50=document.createElement('div');
		el.ggId="\uc790\uc5f0\ud658\uacbd \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f5bc62;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
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
		me.__50.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_tree') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__50.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__50.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__50.style.transition='border-color 0s';
				if (me.__50.ggCurrentLogicStateBorderColor == 0) {
					me.__50.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__50.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__50.logicBlock_bordercolor();
		me.__50.onclick=function (e) {
			player.setMediaVisibility("\uc790\uc5f0","2",0);
			player.setVariableValue('vis_tree', !player.getVariableValue('vis_tree'));
		}
		me.__50.ggUpdatePosition=function (useTransition) {
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
		me.__50.appendChild(me._image_9);
		me.__49.appendChild(me.__50);
		me.__30.appendChild(me.__49);
		el=me.__46=document.createElement('div');
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
		me.__46.ggIsActive=function() {
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
		me.__46.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__46.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__46.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__46.style.transition='right 0s, top 0s';
				if (me.__46.ggCurrentLogicStatePosition == 0) {
					me.__46.style.right='10px';
					me.__46.style.top='69.36%';
				}
				else {
					me.__46.style.right='0px';
					me.__46.style.top='69.36%';
				}
			}
		}
		me.__46.logicBlock_position();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		els=me.__48__text=document.createElement('div');
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
		hs+='bottom : 9%;';
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__48.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0dd\ud65c\ud3b8\uc758\uc2dc\uc124\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__48.ggUpdateText();
		el.appendChild(els);
		me.__48.ggIsActive=function() {
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
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		el.ggId="\uc0dd\ud65c\ud3b8\uc758\uc2dc\uc124 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f57ba2;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
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
		me.__47.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_shop') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__47.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__47.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__47.style.transition='border-color 0s';
				if (me.__47.ggCurrentLogicStateBorderColor == 0) {
					me.__47.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__47.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__47.logicBlock_bordercolor();
		me.__47.onclick=function (e) {
			player.setMediaVisibility("\uc0dd\ud65c","2",0);
			player.setVariableValue('vis_shop', !player.getVariableValue('vis_shop'));
		}
		me.__47.ggUpdatePosition=function (useTransition) {
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
		me.__47.appendChild(me._image_8);
		me.__46.appendChild(me.__47);
		me.__30.appendChild(me.__46);
		el=me.__43=document.createElement('div');
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
		me.__43.ggIsActive=function() {
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
		me.__43.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__43.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__43.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__43.style.transition='right 0s, top 0s';
				if (me.__43.ggCurrentLogicStatePosition == 0) {
					me.__43.style.right='10px';
					me.__43.style.top='56.66%';
				}
				else {
					me.__43.style.right='0px';
					me.__43.style.top='56.66%';
				}
			}
		}
		me.__43.logicBlock_position();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		els=me.__45__text=document.createElement('div');
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
		hs+='bottom : 11%;';
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__45.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\uc721\uc2dc\uc124\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__45.ggUpdateText();
		el.appendChild(els);
		me.__45.ggIsActive=function() {
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
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		el.ggId="\uad50\uc721\uc2dc\uc124 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #8856f5;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
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
		me.__44.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_school') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__44.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__44.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__44.style.transition='border-color 0s';
				if (me.__44.ggCurrentLogicStateBorderColor == 0) {
					me.__44.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__44.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__44.logicBlock_bordercolor();
		me.__44.onclick=function (e) {
			player.setMediaVisibility("\uad50\uc721","2",0);
			player.setVariableValue('vis_school', !player.getVariableValue('vis_school'));
		}
		me.__44.ggUpdatePosition=function (useTransition) {
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
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) - 2px);';
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
		me.__44.appendChild(me._image_7);
		me.__43.appendChild(me.__44);
		me.__30.appendChild(me.__43);
		el=me.__40=document.createElement('div');
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
		me.__40.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__40.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__40.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__40.style.transition='right 0s, top 0s';
				if (me.__40.ggCurrentLogicStatePosition == 0) {
					me.__40.style.right='10px';
					me.__40.style.top='43.96%';
				}
				else {
					me.__40.style.right='0px';
					me.__40.style.top='43.96%';
				}
			}
		}
		me.__40.logicBlock_position();
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		els=me.__42__text=document.createElement('div');
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
		hs+='bottom : 11%;';
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__42.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\ud1b5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__42.ggUpdateText();
		el.appendChild(els);
		me.__42.ggIsActive=function() {
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
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__42);
		el=me.__41=document.createElement('div');
		el.ggId="\uad50\ud1b5 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #6ac7b5;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__41.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_trafficborder') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__41.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__41.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__41.style.transition='border-color 0s';
				if (me.__41.ggCurrentLogicStateBorderColor == 0) {
					me.__41.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__41.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__41.logicBlock_bordercolor();
		me.__41.onclick=function (e) {
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
			player.setVariableValue('vis_trafficborder', !player.getVariableValue('vis_trafficborder'));
		}
		me.__41.ggUpdatePosition=function (useTransition) {
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
		me.__41.appendChild(me._image_6);
		me.__40.appendChild(me.__41);
		me.__30.appendChild(me.__40);
		el=me.__37=document.createElement('div');
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
		me.__37.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__37.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__37.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__37.style.transition='right 0s, top 0s';
				if (me.__37.ggCurrentLogicStatePosition == 0) {
					me.__37.style.right='10px';
					me.__37.style.top='31.26%';
				}
				else {
					me.__37.style.right='0px';
					me.__37.style.top='31.26%';
				}
			}
		}
		me.__37.logicBlock_position();
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
		els=me.__39__text=document.createElement('div');
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
		hs+='bottom : 11%;';
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__39.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uace0\uace0\ub3c4\ubdf0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__39.ggUpdateText();
		el.appendChild(els);
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
		me.__37.appendChild(me.__39);
		el=me.__38=document.createElement('div');
		el.ggId="\uace0\uace0\ub3c4\ubdf0 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #150069;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__38.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.ggUserdata.tags.indexOf("\uace0\uace0\ub3c4") != -1))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__38.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__38.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__38.style.transition='border-color 0s';
				if (me.__38.ggCurrentLogicStateBorderColor == 0) {
					me.__38.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__38.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__38.logicBlock_bordercolor();
		me.__38.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me.__38.ggUpdatePosition=function (useTransition) {
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
		me.__38.appendChild(me._image_5);
		me.__37.appendChild(me.__38);
		me.__30.appendChild(me.__37);
		el=me.__34=document.createElement('div');
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
		me.__34.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__34.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__34.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__34.style.transition='right 0s, top 0s';
				if (me.__34.ggCurrentLogicStatePosition == 0) {
					me.__34.style.right='10px';
					me.__34.style.top='18.95%';
				}
				else {
					me.__34.style.right='0px';
					me.__34.style.top='18.95%';
				}
			}
		}
		me.__34.logicBlock_position();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		els=me.__36__text=document.createElement('div');
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
		hs+='bottom : 11%;';
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__36.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc800\uace0\ub3c4\ubdf0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__36.ggUpdateText();
		el.appendChild(els);
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
		me.__34.appendChild(me.__36);
		el=me.__35=document.createElement('div');
		el.ggId="\uc800\uace0\ub3c4\ubdf0 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #889bf5;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__35.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc800\uace0\ub3c4") != -1))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__35.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__35.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__35.style.transition='border-color 0s';
				if (me.__35.ggCurrentLogicStateBorderColor == 0) {
					me.__35.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__35.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__35.logicBlock_bordercolor();
		me.__35.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me.__35.ggUpdatePosition=function (useTransition) {
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
		me.__35.appendChild(me._image_4);
		me.__34.appendChild(me.__35);
		me.__30.appendChild(me.__34);
		el=me.__31=document.createElement('div');
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
		me.__31.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__31.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__31.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__31.style.transition='right 0s, top 0s';
				if (me.__31.ggCurrentLogicStatePosition == 0) {
					me.__31.style.right='10px';
					me.__31.style.top='6.25%';
				}
				else {
					me.__31.style.right='0px';
					me.__31.style.top='6.25%';
				}
			}
		}
		me.__31.logicBlock_position();
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc0c1\uc9c0\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
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
		me.__31.appendChild(me.__33);
		el=me.__32=document.createElement('div');
		el.ggId="\ub300\uc0c1\uc9c0 \uc704\uce58 \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ee5e3d;';
		hs+='border : 0px solid rgba(255,255,255,0);';
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
		me.__32.onclick=function (e) {
			if (
				(
					((me.ggUserdata.tags.indexOf("\uace0\uace0\ub3c4") != -1))
				)
			) {
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
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc800\uace0\ub3c4") != -1))
				)
			) {
				var params = {
							   pan: -1.54,
							   tilt: -16.84,
							   fov: 76.07,
							   projection: -1,
							   timingFunction: 3,
							   speed: 0.8
				};
				player.moveToEx(params);
			}
		}
		me.__32.ggUpdatePosition=function (useTransition) {
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
		me.__32.appendChild(me._image_3);
		me.__31.appendChild(me.__32);
		me.__30.appendChild(me.__31);
		me.__29.appendChild(me.__30);
		me.divSkin.appendChild(me.__29);
		el=me.__27=document.createElement('div');
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
		me.__27.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__27.logicBlock_visible = function() {
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
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
				else {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.onclick=function (e) {
			player.setVariableValue('vis_sidemenu', !player.getVariableValue('vis_sidemenu'));
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
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
		me.__28.ggUpdatePosition=function (useTransition) {
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
		me._image_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_sidemenu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_2.style.transition='left 0s, top 0s, transform 0s';
				if (me._image_2.ggCurrentLogicStatePosition == 0) {
					me._image_2.style.left = 'calc(50% - (50% / 2) + (0px / 2) + 1.9%)';
					me._image_2.style.top = 'calc(50% - (32.7273% / 2))';
				}
				else {
					me._image_2.style.left='calc(50% - ((50% + 0px) / 2) + 1.9%)';
					me._image_2.style.top='calc(50% - ((32.7273% + 0px) / 2) + 2px)';
				}
			}
		}
		me._image_2.logicBlock_position();
		me._image_2.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_sidemenu') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_2.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_2.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_2.style.transition='left 0s, top 0s, transform 0s';
				if (me._image_2.ggCurrentLogicStateAngle == 0) {
					me._image_2.ggParameter.a = 180;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
				}
				else {
					me._image_2.ggParameter.a = 0;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
				}
			}
		}
		me._image_2.logicBlock_angle();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._image_2);
		me.__27.appendChild(me.__28);
		me.divSkin.appendChild(me.__27);
		el=me.__4=document.createElement('div');
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
		me.__4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__4.logicBlock_visible = function() {
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
			if (me.__4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4.style.transition='';
				if (me.__4.ggCurrentLogicStateVisible == 0) {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
				else if (me.__4.ggCurrentLogicStateVisible == 1) {
					me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
					me.__4.ggVisible=true;
				}
				else {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
			}
		}
		me.__4.logicBlock_visible();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
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
		me.__20.onclick=function (e) {
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
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
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
		me.__22.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__22.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__22.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__22.style.transition='background-color 0s';
				if (me.__22.ggCurrentLogicStateBackgroundColor == 0) {
					me.__22.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__22.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__22.logicBlock_backgroundcolor();
		me.__22.onclick=function (e) {
			player.setVariableValue('vis_copy', !player.getVariableValue('vis_copy'));
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		els=me.__26__img=document.createElement('img');
		els.className='ggskin ggskin__26';
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
		me.__26.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_copy') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__26.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__26.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__26.style.transition='';
				if (me.__26.ggCurrentLogicStateVisible == 0) {
					me.__26.style.visibility=(Number(me.__26.style.opacity)>0||!me.__26.style.opacity)?'inherit':'hidden';
					me.__26.ggVisible=true;
				}
				else {
					me.__26.style.visibility=(Number(me.__26.style.opacity)>0||!me.__26.style.opacity)?'inherit':'hidden';
					me.__26.ggVisible=true;
				}
			}
		}
		me.__26.logicBlock_visible();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		els=me.__25__img=document.createElement('img');
		els.className='ggskin ggskin__25';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABCCAYAAADuSnCvAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA7UlEQVR4nO3bQQrDIBQAUS1Zq/c/ZIgnsPvBRWxMqem8ZWhDGT42AY2ttRYeLsYYz372decPWZFBwCBgENh6FwfWoJ9zHEfIOX/8fScEDAIGAYOAQcAgYBDoPoectcp74cgLrBMCBgGDgEHg0qJKtdZQSpl5y1v11lonBAwCBgGDgEHAIGAQMAgYBAwCBgGDgEHAIGAQMAgYBAwCBgGDgEHAIGAQMAgYBAwCBgGDgEHAIGAQMAh0N8yssrvwDk4IGAQMAgaBbeRMKz3xzK8TAgYBg4BBYOrW7pRS2Pd95i2/7tKJZf9l/oBBwCDwBo0LInUmdVfgAAAAAElFTkSuQmCC';
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
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \uc774\ubbf8\uc9c0 \ud654\uc774\ud2b8";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.65,sy:0.65,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__25.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__25.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__25.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__25.style.transition='';
				if (me.__25.ggCurrentLogicStateVisible == 0) {
					me.__25.style.visibility=(Number(me.__25.style.opacity)>0||!me.__25.style.opacity)?'inherit':'hidden';
					me.__25.ggVisible=true;
				}
				else {
					me.__25.style.visibility="hidden";
					me.__25.ggVisible=false;
				}
			}
		}
		me.__25.logicBlock_visible();
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__25);
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
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
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
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
		me.__24.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__24.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__24.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__24.style.transition='color 0s';
				if (me.__24.ggCurrentLogicStateTextColor == 0) {
					me.__24.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__24.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__24.logicBlock_textcolor();
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__24);
		el=me.__23=document.createElement('div');
		els=me.__23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\uc644\ub8cc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : -100px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='line-height:12px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
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
		me.__23.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__23.style.transition='';
				if (me.__23.ggCurrentLogicStateVisible == 0) {
					me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
					me.__23.ggVisible=true;
				}
				else {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
			}
		}
		me.__23.logicBlock_visible();
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__23);
		me.__20.appendChild(me.__22);
		el=me.__21=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -127px;';
		hs+='position : absolute;';
		hs+='top : -138px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			return (me.__21.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__21.ggTimestamp) / me.__21.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__21.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__21.style.transition='';
				if (me.__21.ggCurrentLogicStateVisible == 0) {
					me.__21.style.visibility="hidden";
					me.__21.ggVisible=false;
				}
				else {
					me.__21.style.visibility=(Number(me.__21.style.opacity)>0||!me.__21.style.opacity)?'inherit':'hidden';
					me.__21.ggVisible=true;
				}
			}
		}
		me.__21.logicBlock_visible();
		me.__21.ggActivate=function () {
			player.setVariableValue('vis_copy', false);
		}
		me.__21.ggCurrentLogicStateVisible = -1;
		me.__21.ggUpdateConditionTimer=function () {
			me.__21.logicBlock_visible();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__21);
		me.__4.appendChild(me.__20);
		el=me.__15=document.createElement('div');
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
		el=me.__16=document.createElement('div');
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
		me.__16.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_business') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__16.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__16.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__16.style.transition='background-color 0s';
				if (me.__16.ggCurrentLogicStateBackgroundColor == 0) {
					me.__16.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__16.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__16.logicBlock_backgroundcolor();
		me.__16.onclick=function (e) {
			player.setVariableValue('vis_business', true);
			me.__.style.transition='none';
			me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
			me.__.ggVisible=true;
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__img=document.createElement('img');
		els.className='ggskin ggskin__19';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAADR0lEQVR4nO2dPWgUQRiGnzU/hBQSEEEQoqBimoBgY6OdaLASSZFOLCSl2lgKFlopqGgnsbAUAulE1EpT2IgBCxVtAoIEJKBEiHEtJuAZdia5u73ce7vvA1PdzffNzrO7s/Nx7GV5nmN02NHtAZj/sRAxLEQMCxHDQsSwEDEsRAwLEcNCxLAQMSxEjP5OBs+yrNKFsjzPs7Jj+goRw0LEsBAxLESMji7qEUpfCLeJbXlA8RUihoWIYSFiWIgYFiKGhYhhIWJYiBgWIoaFiGEhYliIGBYihoWIYSFiWIgYFiKGhYhhIWJYiBgWIoaFiGEhYliIGBYihoWIYSFiWIgYFiKGhYhhIWJYiBgWIoaFiGEhYliIGBYiho'+
			'WIYSFiWIgYFiKGhYhhIWJYiBhVErK/2wMogyoIGQDuAJ+BW8Bgd4fTJnmed6wRXmm0sZXJKDC/If4b4EDJeaDgWDoyZz0s5BSwFMmxDEyVmIuiPBYS6AOuA2uR+I3tITBcQk6K4lsI7AaeReLG2ntgvM28FMWuu5DjwGIk5mZtBZhuIzdFcesqJAMuA6uReDnwAjgEPEl8J1//fKSFMRQeSx2FjACziQleI6wnfQ19pglXRKzPF+BYk+MoPJa6CTkCfExM7BIwEek7Tlg7Yn1Xgas0tw+rtZCLpM/yecIeJMUw4SkrdQt7CuzZ4phqKWQYmNlkEu/R3G58irAvicX7CpzcQpzaCRkDFhITtwxMNiGikYOEHXxqLbpJ+sXStRIySfosXiAIa4dB4DbwJ5HnNbAv0r8WQgYIt6DULeoR5e22Ac4A3xL5vgPnCvpVXkhR'+
			'YbCxrRAW906wF3iZyJ0DD4Chhj6VFjJBvDCYA58Ij72dpA+4BvxOjOMd/26VlRWyWWFwltZ3061wgnRJ5idwoeizqgiJtVXgCt35O4tdwFyT4620kEVC8bCbZMAl4Bc1F/KcUFZX4SjwgRoKKSoMqrATeEyNhCwBp7d7llvgPPCDigvZSmFQiTHgLRUVcpewO+81hoD7VEhIO4VBJc4SSis9LWQBONzFSSybUeAVPSpkhnILgyr0Azc6MWfZ+sQZEarw295KYSFiWIgYFiKGhYhhIWJYiBgWIoaFiPEXkB52JlduelwAAAAASUVORK5CYII=';
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
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__19.ggIsActive=function() {
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
		me.__19.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_business') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__19.style.transition='';
				if (me.__19.ggCurrentLogicStateVisible == 0) {
					me.__19.style.visibility=(Number(me.__19.style.opacity)>0||!me.__19.style.opacity)?'inherit':'hidden';
					me.__19.ggVisible=true;
				}
				else {
					me.__19.style.visibility="hidden";
					me.__19.ggVisible=false;
				}
			}
		}
		me.__19.logicBlock_visible();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__19);
		el=me.__18=document.createElement('div');
		els=me.__18__img=document.createElement('img');
		els.className='ggskin ggskin__18';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAD1klEQVR4nO2dS4gcVRSGv84kYxhBAkEQAqMLlbgQBQWDYLLxQRAXokEDLkQkZCeushTGRbIxQSJxlcfGFyrZiW6ShaDiExzxgRpBFMEHEkGyMMnvopQkOFWZztxb/Vf7f1Cbrrr3nFtf33Orq5rukSSCD6smnUC4kAgxI0LMiBAzIsSMCDEjQsyIEDMixIwIMSNCzFhduf9pv1E2Kt1hZogZEWJGhJgRIWbUXtSXovhC2BO9XKBkhpgRIWZEiBkRYkaEmBEhZkSIGRFiRoSYESFmRIgZEWJGhJgRIWZEiBkRYkaEmBEhZkSIGRFiRoSYESFmRIgZEWJGhJgRIWZEiBkRYkaEmBEhZkSIGRFiRoSYESFmRIgZEW'+
			'JGhJgRIWZEiBkRYkaEmBEhZkSIGRFixjQJuWbSCZRgGoSsAZ4FTgDPALOTTWdljCr/f8hSnZf8eaZ54BVg03mvfQg8DHxbMA7UHwsw7BlyD/AxF8oAuPWf17f3nlEBhihkBlgA3gDWtxxzBfAicBCY6ymvIgytZF1Jc6LvHKPNF8BDwOIK4kJK1n+4A/iE8WQA3AC8D+wsnlEFhiBkBDwJHAM2tBxzHLgeeL1l/1rgeeA1YF3h/Moiqea2FOO0XyfpaEs/knRG0oKkmfPa7JR0qqPNd5I2TWAsy9qchdws6euWPiTpV0lbW9reKOnzjrZ/SdolaVVPYxm8kB3qfpe/K2n+In3MSTrY0YckvSXpqspjGbSQOUmH28+fJGm/pNkxctgu6WRHfz9JuqvCWAYvZKOkxY4Td1LStkvM41pJH3T0fUbSbkmrC41l8EK2qftd'+
			'vKhG2EpymZW0V9LZjjjvSLp6hWMZtJA1akpQF0fUlLJSOd0r6eeOeL9LeuASxjJ4IfNqFuc2TqlZ3GvktUHS8Y7YknRA0tpljmXwQraquWxt4xs1l701c5uR9JSk0x15fKpzpbJtLIMXsqBmEW3jqJoPhLVz+3fbLOmHjnz+lPRYy77i+Uzi5mIbp4FdwL4x25VgPXAYuG/MdsVvLroI+ZHm+cXbFXO5GCPgCWAPcNkYbcomYSDkGM0Tvl9qJjIGtwAvAdct49ipuv1+FngauBsfGQAf0Tx1fGESwSc1Q34DHgHerBm8AI8CzwGXt+yfipL1Hs0TvO9rBi7IRuBl4KYl9g2+ZO0HNjMcGQBf0nyR4kAfwfqaIX8AjwOv1gzWA/cDhzj31HGQJesz4EHgq5qBemSe5irsdgZYso4AtzE9MqApt1uA3TU6rz1DwpgM4V'+
			'sn/ysixIwIMSNCzIgQMyLEjAgxI0LMiBAz/gb1XRtPPmNHqwAAAABJRU5ErkJggg==';
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
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \uc774\ubbf8\uc9c0 \ud654\uc774\ud2b8";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
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
		me.__18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_business') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18.style.transition='';
				if (me.__18.ggCurrentLogicStateVisible == 0) {
					me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
					me.__18.ggVisible=true;
				}
				else {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
			}
		}
		me.__18.logicBlock_visible();
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__18);
		el=me.__17=document.createElement('div');
		els=me.__17__text=document.createElement('div');
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
		me.__17.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc5c5\uac1c\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__17.ggUpdateText();
		el.appendChild(els);
		me.__17.ggIsActive=function() {
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
		me.__17.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_business') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__17.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__17.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__17.style.transition='color 0s';
				if (me.__17.ggCurrentLogicStateTextColor == 0) {
					me.__17.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__17.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__17.logicBlock_textcolor();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__17);
		me.__15.appendChild(me.__16);
		me.__4.appendChild(me.__15);
		el=me.__10=document.createElement('div');
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
		el=me.__11=document.createElement('div');
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
		me.__11.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_around') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__11.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__11.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__11.style.transition='background-color 0s';
				if (me.__11.ggCurrentLogicStateBackgroundColor == 0) {
					me.__11.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__11.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__11.logicBlock_backgroundcolor();
		me.__11.onclick=function (e) {
			player.setVariableValue('vis_leftmenu', !player.getVariableValue('vis_leftmenu'));
			player.setVariableValue('vis_around', !player.getVariableValue('vis_around'));
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		els=me.__14__img=document.createElement('img');
		els.className='ggskin ggskin__14';
		hs='data:image/png;base64,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'+
			'z4P8RbBZFLww4SAAAAAElFTkSuQmCC';
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
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 13%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_around') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__14.style.transition='';
				if (me.__14.ggCurrentLogicStateVisible == 0) {
					me.__14.style.visibility=(Number(me.__14.style.opacity)>0||!me.__14.style.opacity)?'inherit':'hidden';
					me.__14.ggVisible=true;
				}
				else {
					me.__14.style.visibility="hidden";
					me.__14.ggVisible=false;
				}
			}
		}
		me.__14.logicBlock_visible();
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me.__14);
		el=me.__13=document.createElement('div');
		els=me.__13__img=document.createElement('img');
		els.className='ggskin ggskin__13';
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
		el.ggId="\uc8fc\ubc88\uc815\ubcf4 \uc774\ubbf8\uc9c0 \ud654\uc774\ud2b8";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
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
		me.__13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_around') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__13.style.transition='';
				if (me.__13.ggCurrentLogicStateVisible == 0) {
					me.__13.style.visibility=(Number(me.__13.style.opacity)>0||!me.__13.style.opacity)?'inherit':'hidden';
					me.__13.ggVisible=true;
				}
				else {
					me.__13.style.visibility="hidden";
					me.__13.ggVisible=false;
				}
			}
		}
		me.__13.logicBlock_visible();
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me.__13);
		el=me.__12=document.createElement('div');
		els=me.__12__text=document.createElement('div');
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
		hs+='bottom : 20%;';
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
		me.__12.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubcc0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__12.ggUpdateText();
		el.appendChild(els);
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
		me.__12.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_around') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__12.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__12.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__12.style.transition='color 0s';
				if (me.__12.ggCurrentLogicStateTextColor == 0) {
					me.__12.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__12.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__12.logicBlock_textcolor();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me.__12);
		me.__10.appendChild(me.__11);
		me.__4.appendChild(me.__10);
		el=me.__5=document.createElement('div');
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
		me.__6.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_home') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__6.style.transition='background-color 0s';
				if (me.__6.ggCurrentLogicStateBackgroundColor == 0) {
					me.__6.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__6.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__6.logicBlock_backgroundcolor();
		me.__6.onclick=function (e) {
			player.setVariableValue('vis_home', !player.getVariableValue('vis_home'));
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		els=me.__9__img=document.createElement('img');
		els.className='ggskin ggskin__9';
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
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_home') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__9.style.transition='';
				if (me.__9.ggCurrentLogicStateVisible == 0) {
					me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
					me.__9.ggVisible=true;
				}
				else {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
			}
		}
		me.__9.logicBlock_visible();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__9);
		el=me.__8=document.createElement('div');
		els=me.__8__img=document.createElement('img');
		els.className='ggskin ggskin__8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAETElEQVR4nO3cT4hVZRjH8e91TEoUURSEkSxxCFwJIhRRTbZICiw3LsKFYBHppnChbawpKIMgF6kLK1qEiyLU/IMRWWMLgxDaFMiAuEgIFEUGJBQ5LZ65OV7ec7v3nvc95/fOPF+4m3lm3nPgw/137nunVRQFnk5zmj4B7/4cRCwHEctBxHIQsRxELAcRy0HEchCxHEQsBxHLQcSaSSAPA6ubPomqzRSQR4Fx4CcyR5kJII8BvwCPACvIHCV3kDXAz8DwtJ9ljZIzyFoMY3lgli1KriDrgB+BZV1+J0uUHEGewDCW9PC72aHkBvIU8D2wKDC7BPwV+HkbZSTheUUrJ5DngDPAwsDsIvA0sIFylLMMhrIHKDpuHw'+
			'6wTk/lArIROAHMD8z+BEaBK8AEaVBqKweQTcBx4KHA7HcM4+9pP8saRR1kC/ANMC8wu4A9jF0NzLJFUQbZChwhjHEew7je5e+zRFEF2Q58CQwFZuPA88DNHtbJDkUR5A3gMGGMH4AXgMk+1ssKRQ3kTeAA0ArMTmNP8LcGWDcbFCWQ3cAnhDGOAZuBfyqsnwWKCsheYF/J7Gvs1dbtCMeRR1EA+QAYK5l9BbwC3Il4PGmUJkFawMfA2yXzz4FtwN0Ex5ZFaQqkBXwK7CqZHwJeIw1GO0mUJkCGsJe1O0rm+4Gd2EW81PWCsrSG8/ivukGGsDd820vm+4C3qAej3f+hvFrjudQK8gB2KWRryfwdyp9PUtcNJfTZS7LqApnHvZevofYA79V0LmV1Q6mtOkAeBI4CLwdmBfYQ9VEN59FLjaOkBpkPfIddf+qswJ689yc+'+
			'h37rBWVxqoO3En5PfQFwEngmMLsLvI6911BtBHuVtSIwm8R2vkzEPmgqkEXAKeDJkvkJ7EKheiPAb4Sf2K8AzxIZJcVD1hLsMnkZBsAfCY6bogngs5LZMAl2s8QGWYbtmVofed0mu9ZlFh0lJshybGvn2ohr5lBUlFggwxjGmsAs5pVa1aKhxABZCZzDvhbQ2STwRYRjqBX6CDkKSlWQVdimg1WB2U1sM8LlisdQ7Ajh9ymVUaqCbMTuIZ1dx7bpnK+4vmo3KH/zWAmlKshB7OPX6V3FMC5UXFu9bu/oh4GXBlk0xnPI+1M3sC2do9gWz9lQGcoY9mlo382tekZT7cV2hHyL7USfTbVR2pdZxoB3B10sFgjYZoXZWhvlRSpeLFXYdTJTmiDCletK95BWK7Sn7f7KLl728rcKVTn/QS7c+j1ELAcRy0HEchCxHEQsBx'+
			'HLQcRyELEcRCwHEctBxHIQsRxELAcRy0HEchCxHEQsBxHLQcRyELEcRCwHEctBxHIQsWJuJe2nx4ui2N3Qsfst9LXuZDUFMjp18zryhyyxHEQsBxGrjueQX9H5bz+xGk+1cMp/PuMNkD9kieUgYjmIWA4iloOI5SBiOYhYDiKWg4jlIGI5iFgOIpaDiOUgYv0LoePXVD97FpIAAAAASUVORK5CYII=';
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
		el.ggId="\ud648\ud398\uc774\uc9c0 \uc774\ubbf8\uc9c0 \ud654\uc774\ud2b8";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_home') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__8.style.transition='';
				if (me.__8.ggCurrentLogicStateVisible == 0) {
					me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
					me.__8.ggVisible=true;
				}
				else {
					me.__8.style.visibility="hidden";
					me.__8.ggVisible=false;
				}
			}
		}
		me.__8.logicBlock_visible();
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__8);
		el=me.__7=document.createElement('div');
		els=me.__7__text=document.createElement('div');
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
		me.__7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud648\ud398\uc774\uc9c0", params);
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
		me.__7.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_home') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__7.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__7.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__7.style.transition='color 0s';
				if (me.__7.ggCurrentLogicStateTextColor == 0) {
					me.__7.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__7.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__7.logicBlock_textcolor();
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__7);
		me.__5.appendChild(me.__6);
		me.__4.appendChild(me.__5);
		me.divSkin.appendChild(me.__4);
		el=me.__m15=document.createElement('div');
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
		me.__m15.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__m15.logicBlock_size = function() {
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
			if (me.__m15.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__m15.ggCurrentLogicStateSize = newLogicStateSize;
				me.__m15.style.transition='width 0s, height 0s';
				if (me.__m15.ggCurrentLogicStateSize == 0) {
					me.__m15.style.width='35px';
					me.__m15.style.height='35px';
					skin.updateSize(me.__m15);
				}
				else {
					me.__m15.style.width='40px';
					me.__m15.style.height='40px';
					skin.updateSize(me.__m15);
				}
			}
		}
		me.__m15.logicBlock_size();
		me.__m15.logicBlock_visible = function() {
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
			if (me.__m15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m15.style.transition='width 0s, height 0s';
				if (me.__m15.ggCurrentLogicStateVisible == 0) {
					me.__m15.style.visibility="hidden";
					me.__m15.ggVisible=false;
				}
				else {
					me.__m15.style.visibility=(Number(me.__m15.style.opacity)>0||!me.__m15.style.opacity)?'inherit':'hidden';
					me.__m15.ggVisible=true;
				}
			}
		}
		me.__m15.logicBlock_visible();
		me.__m15.onclick=function (e) {
			player.setVariableValue('vis_sidemenu', !player.getVariableValue('vis_sidemenu'));
		}
		me.__m15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m16=document.createElement('div');
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
		me.__m16.ggIsActive=function() {
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
		me.__m16.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_sidemenu') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__m16.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__m16.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__m16.style.transition='transform 0s';
				if (me.__m16.ggCurrentLogicStateAngle == 0) {
					me.__m16.ggParameter.a = 180;
					me.__m16.style.transform=parameterToTransform(me.__m16.ggParameter);
				}
				else {
					me.__m16.ggParameter.a = 0;
					me.__m16.style.transform=parameterToTransform(me.__m16.ggParameter);
				}
			}
		}
		me.__m16.logicBlock_angle();
		me.__m16.ggUpdatePosition=function (useTransition) {
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
		me._image_2m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_sidemenu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_2m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_2m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_2m.style.transition='left 0s, top 0s';
				if (me._image_2m.ggCurrentLogicStatePosition == 0) {
					me._image_2m.style.left = 'calc(50% - (50% / 2) + (0px / 2) + 1.9%)';
					me._image_2m.style.top = 'calc(50% - (32.7273% / 2))';
				}
				else {
					me._image_2m.style.left='calc(50% - ((50% + 0px) / 2) + 1.9%)';
					me._image_2m.style.top='calc(50% - ((32.7273% + 0px) / 2) + 2px)';
				}
			}
		}
		me._image_2m.logicBlock_position();
		me._image_2m.ggUpdatePosition=function (useTransition) {
		}
		me.__m16.appendChild(me._image_2m);
		me.__m15.appendChild(me.__m16);
		me.divSkin.appendChild(me.__m15);
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
		hs+='top : 65px;';
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
		el=me.__m11=document.createElement('div');
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
		me.__m11.ggIsActive=function() {
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
		me.__m11.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__m11.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__m11.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__m11.style.transition='background-color 0s';
				if (me.__m11.ggCurrentLogicStateBackgroundColor == 0) {
					me.__m11.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__m11.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__m11.logicBlock_backgroundcolor();
		me.__m11.onclick=function (e) {
			player.setVariableValue('vis_copy', !player.getVariableValue('vis_copy'));
		}
		me.__m11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m14=document.createElement('div');
		els=me.__m14__img=document.createElement('img');
		els.className='ggskin ggskin__m14';
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
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__m14.ggIsActive=function() {
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
		me.__m14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_copy') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m14.style.transition='';
				if (me.__m14.ggCurrentLogicStateVisible == 0) {
					me.__m14.style.visibility=(Number(me.__m14.style.opacity)>0||!me.__m14.style.opacity)?'inherit':'hidden';
					me.__m14.ggVisible=true;
				}
				else {
					me.__m14.style.visibility="hidden";
					me.__m14.ggVisible=false;
				}
			}
		}
		me.__m14.logicBlock_visible();
		me.__m14.ggUpdatePosition=function (useTransition) {
		}
		me.__m11.appendChild(me.__m14);
		el=me.__m13=document.createElement('div');
		els=me.__m13__img=document.createElement('img');
		els.className='ggskin ggskin__m13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABCCAYAAADuSnCvAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA7UlEQVR4nO3bQQrDIBQAUS1Zq/c/ZIgnsPvBRWxMqem8ZWhDGT42AY2ttRYeLsYYz372decPWZFBwCBgENh6FwfWoJ9zHEfIOX/8fScEDAIGAYOAQcAgYBDoPoectcp74cgLrBMCBgGDgEHg0qJKtdZQSpl5y1v11lonBAwCBgGDgEHAIGAQMAgYBAwCBgGDgEHAIGAQMAgYBAwCBgGDgEHAIGAQMAgYBAwCBgGDgEHAIGAQMAh0N8yssrvwDk4IGAQMAgaBbeRMKz3xzK8TAgYBg4BBYOrW7pRS2Pd95i2/7tKJZf9l/oBBwCDwBo0LInUmdVfgAAAAAElFTkSuQmCC';
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
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \uc774\ubbf8\uc9c0 \ud654\uc774\ud2b8-m";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.65,sy:0.65,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__m13.ggIsActive=function() {
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
		me.__m13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m13.style.transition='';
				if (me.__m13.ggCurrentLogicStateVisible == 0) {
					me.__m13.style.visibility=(Number(me.__m13.style.opacity)>0||!me.__m13.style.opacity)?'inherit':'hidden';
					me.__m13.ggVisible=true;
				}
				else {
					me.__m13.style.visibility="hidden";
					me.__m13.ggVisible=false;
				}
			}
		}
		me.__m13.logicBlock_visible();
		me.__m13.ggUpdatePosition=function (useTransition) {
		}
		me.__m11.appendChild(me.__m13);
		el=me.__m12=document.createElement('div');
		els=me.__m12__text=document.createElement('div');
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
		me.__m12.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m12.ggUpdateText();
		el.appendChild(els);
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
		me.__m12.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__m12.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__m12.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__m12.style.transition='color 0s';
				if (me.__m12.ggCurrentLogicStateTextColor == 0) {
					me.__m12.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__m12.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__m12.logicBlock_textcolor();
		me.__m12.ggUpdatePosition=function (useTransition) {
		}
		me.__m11.appendChild(me.__m12);
		el=me._m4=document.createElement('div');
		els=me._m4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\uc644\ub8cc-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='line-height:12px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m4.ggUpdateText();
		el.appendChild(els);
		me._m4.ggIsActive=function() {
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
		me._m4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m4.style.transition='';
				if (me._m4.ggCurrentLogicStateVisible == 0) {
					me._m4.style.visibility=(Number(me._m4.style.opacity)>0||!me._m4.style.opacity)?'inherit':'hidden';
					me._m4.ggVisible=true;
				}
				else {
					me._m4.style.visibility="hidden";
					me._m4.ggVisible=false;
				}
			}
		}
		me._m4.logicBlock_visible();
		me._m4.ggUpdatePosition=function (useTransition) {
		}
		me.__m11.appendChild(me._m4);
		me._m3.appendChild(me.__m11);
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
		el=me.__m7=document.createElement('div');
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
		me.__m7.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_business') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__m7.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__m7.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__m7.style.transition='background-color 0s';
				if (me.__m7.ggCurrentLogicStateBackgroundColor == 0) {
					me.__m7.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__m7.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__m7.logicBlock_backgroundcolor();
		me.__m7.onclick=function (e) {
			player.setVariableValue('vis_business', true);
			me.__.style.transition='none';
			me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
			me.__.ggVisible=true;
		}
		me.__m7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m10=document.createElement('div');
		els=me.__m10__img=document.createElement('img');
		els.className='ggskin ggskin__m10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAADR0lEQVR4nO2dPWgUQRiGnzU/hBQSEEEQoqBimoBgY6OdaLASSZFOLCSl2lgKFlopqGgnsbAUAulE1EpT2IgBCxVtAoIEJKBEiHEtJuAZdia5u73ce7vvA1PdzffNzrO7s/Nx7GV5nmN02NHtAZj/sRAxLEQMCxHDQsSwEDEsRAwLEcNCxLAQMSxEjP5OBs+yrNKFsjzPs7Jj+goRw0LEsBAxLESMji7qEUpfCLeJbXlA8RUihoWIYSFiWIgYFiKGhYhhIWJYiBgWIoaFiGEhYliIGBYihoWIYSFiWIgYFiKGhYhhIWJYiBgWIoaFiGEhYliIGBYihoWIYSFiWIgYFiKGhYhhIWJYiBgWIoaFiGEhYliIGBYiho'+
			'WIYSFiWIgYFiKGhYhhIWJYiBhVErK/2wMogyoIGQDuAJ+BW8Bgd4fTJnmed6wRXmm0sZXJKDC/If4b4EDJeaDgWDoyZz0s5BSwFMmxDEyVmIuiPBYS6AOuA2uR+I3tITBcQk6K4lsI7AaeReLG2ntgvM28FMWuu5DjwGIk5mZtBZhuIzdFcesqJAMuA6uReDnwAjgEPEl8J1//fKSFMRQeSx2FjACziQleI6wnfQ19pglXRKzPF+BYk+MoPJa6CTkCfExM7BIwEek7Tlg7Yn1Xgas0tw+rtZCLpM/yecIeJMUw4SkrdQt7CuzZ4phqKWQYmNlkEu/R3G58irAvicX7CpzcQpzaCRkDFhITtwxMNiGikYOEHXxqLbpJ+sXStRIySfosXiAIa4dB4DbwJ5HnNbAv0r8WQgYIt6DULeoR5e22Ac4A3xL5vgPnCvpVXkhR'+
			'YbCxrRAW906wF3iZyJ0DD4Chhj6VFjJBvDCYA58Ij72dpA+4BvxOjOMd/26VlRWyWWFwltZ3061wgnRJ5idwoeizqgiJtVXgCt35O4tdwFyT4620kEVC8bCbZMAl4Bc1F/KcUFZX4SjwgRoKKSoMqrATeEyNhCwBp7d7llvgPPCDigvZSmFQiTHgLRUVcpewO+81hoD7VEhIO4VBJc4SSis9LWQBONzFSSybUeAVPSpkhnILgyr0Azc6MWfZ+sQZEarw295KYSFiWIgYFiKGhYhhIWJYiBgWIoaFiPEXkB52JlduelwAAAAASUVORK5CYII=';
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
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
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
		me.__m10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_business') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m10.style.transition='';
				if (me.__m10.ggCurrentLogicStateVisible == 0) {
					me.__m10.style.visibility=(Number(me.__m10.style.opacity)>0||!me.__m10.style.opacity)?'inherit':'hidden';
					me.__m10.ggVisible=true;
				}
				else {
					me.__m10.style.visibility="hidden";
					me.__m10.ggVisible=false;
				}
			}
		}
		me.__m10.logicBlock_visible();
		me.__m10.ggUpdatePosition=function (useTransition) {
		}
		me.__m7.appendChild(me.__m10);
		el=me.__m9=document.createElement('div');
		els=me.__m9__img=document.createElement('img');
		els.className='ggskin ggskin__m9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAD1klEQVR4nO2dS4gcVRSGv84kYxhBAkEQAqMLlbgQBQWDYLLxQRAXokEDLkQkZCeushTGRbIxQSJxlcfGFyrZiW6ShaDiExzxgRpBFMEHEkGyMMnvopQkOFWZztxb/Vf7f1Cbrrr3nFtf33Orq5rukSSCD6smnUC4kAgxI0LMiBAzIsSMCDEjQsyIEDMixIwIMSNCzFhduf9pv1E2Kt1hZogZEWJGhJgRIWbUXtSXovhC2BO9XKBkhpgRIWZEiBkRYkaEmBEhZkSIGRFiRoSYESFmRIgZEWJGhJgRIWZEiBkRYkaEmBEhZkSIGRFiRoSYESFmRIgZEWJGhJgRIWZEiBkRYkaEmBEhZkSIGRFiRoSYESFmRIgZEW'+
			'JGhJgRIWZEiBkRYkaEmBEhZkSIGRFixjQJuWbSCZRgGoSsAZ4FTgDPALOTTWdljCr/f8hSnZf8eaZ54BVg03mvfQg8DHxbMA7UHwsw7BlyD/AxF8oAuPWf17f3nlEBhihkBlgA3gDWtxxzBfAicBCY6ymvIgytZF1Jc6LvHKPNF8BDwOIK4kJK1n+4A/iE8WQA3AC8D+wsnlEFhiBkBDwJHAM2tBxzHLgeeL1l/1rgeeA1YF3h/Moiqea2FOO0XyfpaEs/knRG0oKkmfPa7JR0qqPNd5I2TWAsy9qchdws6euWPiTpV0lbW9reKOnzjrZ/SdolaVVPYxm8kB3qfpe/K2n+In3MSTrY0YckvSXpqspjGbSQOUmH28+fJGm/pNkxctgu6WRHfz9JuqvCWAYvZKOkxY4Td1LStkvM41pJH3T0fUbSbkmrC41l8EK2qftd'+
			'vKhG2EpymZW0V9LZjjjvSLp6hWMZtJA1akpQF0fUlLJSOd0r6eeOeL9LeuASxjJ4IfNqFuc2TqlZ3GvktUHS8Y7YknRA0tpljmXwQraquWxt4xs1l701c5uR9JSk0x15fKpzpbJtLIMXsqBmEW3jqJoPhLVz+3fbLOmHjnz+lPRYy77i+Uzi5mIbp4FdwL4x25VgPXAYuG/MdsVvLroI+ZHm+cXbFXO5GCPgCWAPcNkYbcomYSDkGM0Tvl9qJjIGtwAvAdct49ipuv1+FngauBsfGQAf0Tx1fGESwSc1Q34DHgHerBm8AI8CzwGXt+yfipL1Hs0TvO9rBi7IRuBl4KYl9g2+ZO0HNjMcGQBf0nyR4kAfwfqaIX8AjwOv1gzWA/cDhzj31HGQJesz4EHgq5qBemSe5irsdgZYso4AtzE9MqApt1uA3TU6rz1DwpgM4V'+
			'sn/ysixIwIMSNCzIgQMyLEjAgxI0LMiBAz/gb1XRtPPmNHqwAAAABJRU5ErkJggg==';
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
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \uc774\ubbf8\uc9c0 \ud654\uc774\ud2b8-m";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__m9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_business') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m9.style.transition='';
				if (me.__m9.ggCurrentLogicStateVisible == 0) {
					me.__m9.style.visibility=(Number(me.__m9.style.opacity)>0||!me.__m9.style.opacity)?'inherit':'hidden';
					me.__m9.ggVisible=true;
				}
				else {
					me.__m9.style.visibility="hidden";
					me.__m9.ggVisible=false;
				}
			}
		}
		me.__m9.logicBlock_visible();
		me.__m9.ggUpdatePosition=function (useTransition) {
		}
		me.__m7.appendChild(me.__m9);
		el=me.__m8=document.createElement('div');
		els=me.__m8__text=document.createElement('div');
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
		me.__m8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc5c5\uac1c\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m8.ggUpdateText();
		el.appendChild(els);
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
		me.__m8.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_business') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__m8.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__m8.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__m8.style.transition='color 0s';
				if (me.__m8.ggCurrentLogicStateTextColor == 0) {
					me.__m8.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__m8.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__m8.logicBlock_textcolor();
		me.__m8.ggUpdatePosition=function (useTransition) {
		}
		me.__m7.appendChild(me.__m8);
		me._m2.appendChild(me.__m7);
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
		el=me.__m3=document.createElement('div');
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
		me.__m3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_around') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__m3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__m3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__m3.style.transition='background-color 0s';
				if (me.__m3.ggCurrentLogicStateBackgroundColor == 0) {
					me.__m3.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__m3.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__m3.logicBlock_backgroundcolor();
		me.__m3.onclick=function (e) {
			player.setVariableValue('vis_leftmenu', !player.getVariableValue('vis_leftmenu'));
			player.setVariableValue('vis_around', !player.getVariableValue('vis_around'));
		}
		me.__m3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m6=document.createElement('div');
		els=me.__m6__img=document.createElement('img');
		els.className='ggskin ggskin__m6';
		hs='data:image/png;base64,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'+
			'z4P8RbBZFLww4SAAAAAElFTkSuQmCC';
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
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__m6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_around') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m6.style.transition='';
				if (me.__m6.ggCurrentLogicStateVisible == 0) {
					me.__m6.style.visibility=(Number(me.__m6.style.opacity)>0||!me.__m6.style.opacity)?'inherit':'hidden';
					me.__m6.ggVisible=true;
				}
				else {
					me.__m6.style.visibility="hidden";
					me.__m6.ggVisible=false;
				}
			}
		}
		me.__m6.logicBlock_visible();
		me.__m6.ggUpdatePosition=function (useTransition) {
		}
		me.__m3.appendChild(me.__m6);
		el=me.__m5=document.createElement('div');
		els=me.__m5__img=document.createElement('img');
		els.className='ggskin ggskin__m5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAACXBIWXMAAC4jAAAuIwF4pT92AAAKBUlEQVR4nO2de7BVVR3HP/fcC4RceYNJApeHNZNBmWWTlA+8KDkM2UxiI2hWDD1sakoSyDLtNWrZlE1M0WjvhzA9fESQPGqEMsUUCI0u0IUbOsZT4QIi3G9//Pa5HPdZe599ztl7n+295zOzZu75nbP3+q3v3c+1fuu3GiSRQfoD5wCTgYlACzAaGA4MA5qAQcBLwGHgEHDQ+/s5YAewHdgIPA0cSdP5KDRkRPh+wDuBS4CpwDuAPjHt+2XgMWCNVx4FjsW074qppfDNwHuBq4DLsKM8DY4BDwNLgd9jZ0nq1EL484B5wDWY+LXkMPBr4PvAE2lWnKbw04GbsMtJFlkLfAP4YxqVpSH8xcBXgSllbrcH2AL8G9'+
			'jqlWeBfdjNNM/p2JkzABgJvB54g1fe6NnK4VFgEfDnMrcriySFHw98E3hfxN8fAP4ErATWAW0x+TEBuBC4HJgGDI243e+Az2FPR/EjKe7SJOlGSZ0qzRFJP5V0haQ+CfjiL30kTZf0Y6/uKP7d5LUpVl/ibtgESX+L0KD/SvqspEFxN6iMMkjSpyR1RPD375Imxll/nA35gKQXSzRgu6R5kvomIGSlpa+kuZK2lfD9kKQ5cdUbx04aJX2rhNN7JH1CCZyyMZYmSZ+UdKBEW+6Oox3VOtssaXmIk12S7pE0JAPCRi1nyO47XSHtWiHp9GrqqcbB4ZI2hDi3W9K0DAhZaWlV+PX/SUkjK91/pU6dKWlLiFMPSRqWAfGqLUMlPRDSzmckjapk35U4M0LS5gBHuiTdKimXAdHiKg2SvqjgS8/TniaJCn+apCcCHDgm6ZoM'+
			'CJVUuVrS0YC2P6UyH43LqbhR0v0BFXdKuiwD4iRdpko6HKDBw55GsQt/Z4jo78qAKGmVKQp+K78rbuFnyH2NOyFpZgbESLvM9NrupyuqHlEqGSNpb0AlH8mACLUqc+Q+GPdLGltq+1yJPrRG4JfYOKefrwD3xN5r9+rh58BtDvsQbHClKWzjUt3C87HBAT9rsS7Wk9F8jI/2XR3jsRGsBQXmZcCSljGjV6XsTiOwAmh1fLcIuD1owzDhxwH/BE7z2Z8HzsVG81OlfVdHKzZeGsTCljGj70jLH48zgKeA1/rsx4BJwDbXRmGXmrsoFl3AddRG9PHYAHUYt3v/nDR5HpiNaVPIazANnQQJfxHukaN7sVGiWjAPu35G+V3arAF+6LDPxH0ZChT+6w7bXmworFacF/F3aR/xeRZg48R+vub6sUv46cAFDvst2LhoHTcHgZ'+
			'sd9vOBGX6jS/gFDlsb7lMpTaLGvaT9ZFPIvcC/HPaiK4Vf+HOxcAw/twEnqnarOpYQ7YxbkrQjIZwEbnXYL8TCErvxC/8xx0Y7gPticasKWsaM3gHMKvGzhTV4lvezDPcj5EcLPxQK34yF1fn5NrU/2gHwRJ0A+J/VlwHTavAM76ILuNthnwUMzH8ofIGajb0GF3IUGIXdOOpEZyCwm+LY0OuBn8Arj/irHTv4DXXRK+FF7Cz0032pzAvfH/fz768ScKq34NLuUryzIC/8VIrj0w8S3i9SJ5y1wH6frR8mfnfXpeto/ws2myJTtO/qGIK9axS+byzBeidTjXEvwQms59L/wNIK3J8/4l0h1KuT9KoSvI6y7RS/5M0DNrTv6ojarZAWKxy2KWCXmv7Yi5OfNUl6VCGlOspcb9215BGHbTLQnMNm1/lHS/Zgs+WyRqkj'+
			'OmtHfDvFXeiNwKQc8GbHBv+guH+5TmVsdNgm5bB5pH62JOxMb2KTw3Z2Dpu86yeZ6Se9kx0OW0sOOMvxxX8SdqY34dJydA4Y4fjifwk705twaTksh3sW3L6EnelNuIQfmgP6Or44mKwvvYpOh61fjuIQDqg/SsaJq9tlQKkQvjoJkSODuVx6GK70L5054LjjiyiBQ3WiMcBheylHcZ8xuKOD61SGK4nF/hzu6KdyM17UCcb1nrQvB+x0fNGSrC+9inEOW0cOd+TThISd6U2Md9jac1giHj/nJOxMb2Kyw9YWdMS/FWhI1p9ew1scts05LCDVHyk2EksrVac6WoAzfbaTeMIfxaaS+JmarE+9gnc7bJuBw/kug/WOH9SFr57pDtt6OBXQ5Apcugh3z2WdaDThFn4VnBJ+DZant5AhwHuS86vHM53isY7j+IQ/intS2X'+
			'XJ+dXjudZhW42XUrewW9g1+WAG0fM01jnFYGzGn5/u6aKFwj9AcYLjvrj/c3XCuRab51rIESyJKPBK4Q9hc/D9zKd+ky2HPsCNDvtS4IX8B/8I1GLHBmcBH4zPrx7PHGCsw/6Dwg9+4Z/Encx4ISWyUdQBLC5ykcO+HksW3Y1rzNWVrWM8MLd6v3o8HwLOdtiLJsW5hF+O77/j8WXsbl3HzUAsXbufx4GH/MagKAPX1PARwJ2V+xULpWZ81HJGyB1YChU/N+MIlwkSfg22foafuXhzeGpEqdndtZrnegm+CcQefyBgHllYXM187I22kAZsLqw/KU4qeLO7XROMlwBvq9EcqJHALygevzgGfCZwqxJJyxY4kp1J0iqVkWOxB5ecpJUBGi0K27bUjpskPRaw4y9loOG1LrcEaLNBJVaAiLJGyETs+d4/PVzYi9XPyjkv'+
			'exCzsbb7LzGd2FysrWEbR4md3AZ83GFvAH6EuzOopzMDy03jGpe+gRKiA2WluP1OwGnVKUv7WuvTPq1ygYJT3H4v6n7KqbBRdlMNEn9GBkRJulys4HVQVquMtU/KrXiQLGW3i5clXZ8BcZIq71dwGvNNSjCNeb6MkCWrd9ElS3LfkAGh4ioNskfDoMT9W1XBkhWVOjNKwasmSJZn/tW0IEtQGSzptyHt3CLpdZXsuxqnhkh6JMSpXbJE97UWr9JysaSdIe37q2wNkYr2X61z/RW8ioJkp+cS2ZFTayGjlsGSFit8OaIHZct2VFxPHI7mF+AKc3SPbMWzLHcz5CR9WNJzIe3okvRdZWABrsJypSxpfRjPyBY5ydKqOTlJsxT8wJDngNfGWOqNuxFjFG2RxTZJN6i2N+BBsmXw2iL4+7ikcXHWn0SDmiQtVLRlO49JWi'+
			'pbVyOtZUWv8OoMeiYv5KikzyfhW5IL6U7Axm+jLqS7F1tEdyU2OOzKelEJYzm1kO7lwPCI2y0HPk1A4v1qSWPp6FYslff5ZW73LJbrZROWxmUnlu1oHxYcdBzr5Gv2ykBM1LHY4PxkLAnSqDLr3QB8ATsAEiPNxdJnYIulu2LGs8A67Ax9kBRSCqQpfJ63Y93MV1Hcx582nVhG1MVYNEBq1EL4PAOBK7HUuq2kFyZ4HBvMvw+LZXwh/OfJUEvhC2nGohcuxW6Eb8KisuLgJLa6zzpsxL87VLqWZEV4P82Y+JOwyKxxWAznMK/041SOgE5sUsU+r+zG0g62YUntNmIBuZni/+SJpfUa+pkSAAAAAElFTkSuQmCC';
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
		el.ggId="\uc8fc\ubc88\uc815\ubcf4 \uc774\ubbf8\uc9c0 \ud654\uc774\ud2b8-m";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
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
		me.__m5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_around') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m5.style.transition='';
				if (me.__m5.ggCurrentLogicStateVisible == 0) {
					me.__m5.style.visibility=(Number(me.__m5.style.opacity)>0||!me.__m5.style.opacity)?'inherit':'hidden';
					me.__m5.ggVisible=true;
				}
				else {
					me.__m5.style.visibility="hidden";
					me.__m5.ggVisible=false;
				}
			}
		}
		me.__m5.logicBlock_visible();
		me.__m5.ggUpdatePosition=function (useTransition) {
		}
		me.__m3.appendChild(me.__m5);
		el=me.__m4=document.createElement('div');
		els=me.__m4__text=document.createElement('div');
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
		hs+='bottom : 17%;';
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
		me.__m4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubcc0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m4.ggUpdateText();
		el.appendChild(els);
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
		me.__m4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_around') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__m4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__m4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__m4.style.transition='color 0s';
				if (me.__m4.ggCurrentLogicStateTextColor == 0) {
					me.__m4.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__m4.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__m4.logicBlock_textcolor();
		me.__m4.ggUpdatePosition=function (useTransition) {
		}
		me.__m3.appendChild(me.__m4);
		me._m1.appendChild(me.__m3);
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
		me._m0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_home') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m0.style.transition='background-color 0s';
				if (me._m0.ggCurrentLogicStateBackgroundColor == 0) {
					me._m0.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me._m0.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._m0.logicBlock_backgroundcolor();
		me._m0.onclick=function (e) {
			player.setVariableValue('vis_home', !player.getVariableValue('vis_home'));
		}
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m2=document.createElement('div');
		els=me.__m2__img=document.createElement('img');
		els.className='ggskin ggskin__m2';
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
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__m2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_home') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m2.style.transition='';
				if (me.__m2.ggCurrentLogicStateVisible == 0) {
					me.__m2.style.visibility=(Number(me.__m2.style.opacity)>0||!me.__m2.style.opacity)?'inherit':'hidden';
					me.__m2.ggVisible=true;
				}
				else {
					me.__m2.style.visibility="hidden";
					me.__m2.ggVisible=false;
				}
			}
		}
		me.__m2.logicBlock_visible();
		me.__m2.ggUpdatePosition=function (useTransition) {
		}
		me._m0.appendChild(me.__m2);
		el=me.__m1=document.createElement('div');
		els=me.__m1__img=document.createElement('img');
		els.className='ggskin ggskin__m1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAETElEQVR4nO3cT4hVZRjH8e91TEoUURSEkSxxCFwJIhRRTbZICiw3LsKFYBHppnChbawpKIMgF6kLK1qEiyLU/IMRWWMLgxDaFMiAuEgIFEUGJBQ5LZ65OV7ec7v3nvc95/fOPF+4m3lm3nPgw/137nunVRQFnk5zmj4B7/4cRCwHEctBxHIQsRxELAcRy0HEchCxHEQsBxHLQcSaSSAPA6ubPomqzRSQR4Fx4CcyR5kJII8BvwCPACvIHCV3kDXAz8DwtJ9ljZIzyFoMY3lgli1KriDrgB+BZV1+J0uUHEGewDCW9PC72aHkBvIU8D2wKDC7BPwV+HkbZSTheUUrJ5DngDPAwsDsIvA0sIFylLMMhrIHKDpuHw'+
			'6wTk/lArIROAHMD8z+BEaBK8AEaVBqKweQTcBx4KHA7HcM4+9pP8saRR1kC/ANMC8wu4A9jF0NzLJFUQbZChwhjHEew7je5e+zRFEF2Q58CQwFZuPA88DNHtbJDkUR5A3gMGGMH4AXgMk+1ssKRQ3kTeAA0ArMTmNP8LcGWDcbFCWQ3cAnhDGOAZuBfyqsnwWKCsheYF/J7Gvs1dbtCMeRR1EA+QAYK5l9BbwC3Il4PGmUJkFawMfA2yXzz4FtwN0Ex5ZFaQqkBXwK7CqZHwJeIw1GO0mUJkCGsJe1O0rm+4Gd2EW81PWCsrSG8/ivukGGsDd820vm+4C3qAej3f+hvFrjudQK8gB2KWRryfwdyp9PUtcNJfTZS7LqApnHvZevofYA79V0LmV1Q6mtOkAeBI4CLwdmBfYQ9VEN59FLjaOkBpkPfIddf+qswJ689yc+'+
			'h37rBWVxqoO3En5PfQFwEngmMLsLvI6911BtBHuVtSIwm8R2vkzEPmgqkEXAKeDJkvkJ7EKheiPAb4Sf2K8AzxIZJcVD1hLsMnkZBsAfCY6bogngs5LZMAl2s8QGWYbtmVofed0mu9ZlFh0lJshybGvn2ohr5lBUlFggwxjGmsAs5pVa1aKhxABZCZzDvhbQ2STwRYRjqBX6CDkKSlWQVdimg1WB2U1sM8LlisdQ7Ajh9ymVUaqCbMTuIZ1dx7bpnK+4vmo3KH/zWAmlKshB7OPX6V3FMC5UXFu9bu/oh4GXBlk0xnPI+1M3sC2do9gWz9lQGcoY9mlo382tekZT7cV2hHyL7USfTbVR2pdZxoB3B10sFgjYZoXZWhvlRSpeLFXYdTJTmiDCletK95BWK7Sn7f7KLl728rcKVTn/QS7c+j1ELAcRy0HEchCxHEQsBx'+
			'HLQcRyELEcRCwHEctBxHIQsRxELAcRy0HEchCxHEQsBxHLQcRyELEcRCwHEctBxHIQsWJuJe2nx4ui2N3Qsfst9LXuZDUFMjp18zryhyyxHEQsBxGrjueQX9H5bz+xGk+1cMp/PuMNkD9kieUgYjmIWA4iloOI5SBiOYhYDiKWg4jlIGI5iFgOIpaDiOUgYv0LoePXVD97FpIAAAAASUVORK5CYII=';
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
		el.ggId="\ud648\ud398\uc774\uc9c0 \uc774\ubbf8\uc9c0 \ud654\uc774\ud2b8-m";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0.5%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__m1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_home') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m1.style.transition='';
				if (me.__m1.ggCurrentLogicStateVisible == 0) {
					me.__m1.style.visibility=(Number(me.__m1.style.opacity)>0||!me.__m1.style.opacity)?'inherit':'hidden';
					me.__m1.ggVisible=true;
				}
				else {
					me.__m1.style.visibility="hidden";
					me.__m1.ggVisible=false;
				}
			}
		}
		me.__m1.logicBlock_visible();
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
		me.__m0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_home') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__m0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__m0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__m0.style.transition='color 0s';
				if (me.__m0.ggCurrentLogicStateTextColor == 0) {
					me.__m0.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__m0.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__m0.logicBlock_textcolor();
		me.__m0.ggUpdatePosition=function (useTransition) {
		}
		me._m0.appendChild(me.__m0);
		me._m.appendChild(me._m0);
		me.__m.appendChild(me._m);
		me.divSkin.appendChild(me.__m);
		el=me.__=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694\ud31d\uc5c5\ucc3d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
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
		el=me.__0=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
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
		me.__0.ggIsActive=function() {
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
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 82%;';
		hs+='left : calc(50% - ((59% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 59%;';
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
		me.__1.logicBlock_size = function() {
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
			if (me.__1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1.style.transition='width 0s, height 0s';
				if (me.__1.ggCurrentLogicStateSize == 0) {
					me.__1.style.width='75%';
					me.__1.style.height='71%';
					me.__1.style.left = 'calc(50% - (75% / 2))';
					me.__1.style.top = 'calc(50% - (71% / 2))';
					skin.updateSize(me.__1);
				}
				else {
					me.__1.style.width='59%';
					me.__1.style.height='82%';
					me.__1.style.left = 'calc(50% - (59% / 2))';
					me.__1.style.top = 'calc(50% - (82% / 2))';
					skin.updateSize(me.__1);
				}
			}
		}
		me.__1.logicBlock_size();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		els=me.__2__img=document.createElement('img');
		els.className='ggskin ggskin__2';
		hs=basePath + 'images/_2.jpg';
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
		el.ggId="\uc0ac\uc5c5\uac1c\uc694\uc0ac\uc9c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
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
		el=me.__3=document.createElement('div');
		els=me.__3__img=document.createElement('img');
		els.className='ggskin ggskin__3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
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
		el.ggId="\ub2eb\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -52px;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__3.style.transition='right 0s, top 0s';
				if (me.__3.ggCurrentLogicStatePosition == 0) {
					me.__3.style.right='-32px';
					me.__3.style.top='-32px';
				}
				else {
					me.__3.style.right='-52px';
					me.__3.style.top='-32px';
				}
			}
		}
		me.__3.logicBlock_position();
		me.__3.onclick=function (e) {
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
			player.setVariableValue('vis_business', false);
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me.__3);
		me.__1.appendChild(me.__2);
		me.__0.appendChild(me.__1);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me._logo.logicBlock_size();
		me.__29.logicBlock_size();
		me.__30.logicBlock_position();
		me.__49.logicBlock_position();
		me.__50.logicBlock_bordercolor();
		me.__46.logicBlock_position();
		me.__47.logicBlock_bordercolor();
		me.__43.logicBlock_position();
		me.__44.logicBlock_bordercolor();
		me.__40.logicBlock_position();
		me.__41.logicBlock_bordercolor();
		me.__37.logicBlock_position();
		me.__38.logicBlock_bordercolor();
		me.__34.logicBlock_position();
		me.__35.logicBlock_bordercolor();
		me.__31.logicBlock_position();
		me.__27.logicBlock_visible();
		me._image_2.logicBlock_position();
		me._image_2.logicBlock_angle();
		me.__4.logicBlock_visible();
		me.__22.logicBlock_backgroundcolor();
		me.__26.logicBlock_visible();
		me.__25.logicBlock_visible();
		me.__24.logicBlock_textcolor();
		me.__23.logicBlock_visible();
		me.__21.logicBlock_visible();
		me.__16.logicBlock_backgroundcolor();
		me.__19.logicBlock_visible();
		me.__18.logicBlock_visible();
		me.__17.logicBlock_textcolor();
		me.__11.logicBlock_backgroundcolor();
		me.__14.logicBlock_visible();
		me.__13.logicBlock_visible();
		me.__12.logicBlock_textcolor();
		me.__6.logicBlock_backgroundcolor();
		me.__9.logicBlock_visible();
		me.__8.logicBlock_visible();
		me.__7.logicBlock_textcolor();
		me.__m15.logicBlock_size();
		me.__m15.logicBlock_visible();
		me.__m16.logicBlock_angle();
		me._image_2m.logicBlock_position();
		me.__m.logicBlock_scaling();
		me.__m.logicBlock_visible();
		me.__m11.logicBlock_backgroundcolor();
		me.__m14.logicBlock_visible();
		me.__m13.logicBlock_visible();
		me.__m12.logicBlock_textcolor();
		me._m4.logicBlock_visible();
		me.__m7.logicBlock_backgroundcolor();
		me.__m10.logicBlock_visible();
		me.__m9.logicBlock_visible();
		me.__m8.logicBlock_textcolor();
		me.__m3.logicBlock_backgroundcolor();
		me.__m6.logicBlock_visible();
		me.__m5.logicBlock_visible();
		me.__m4.logicBlock_textcolor();
		me._m0.logicBlock_backgroundcolor();
		me.__m2.logicBlock_visible();
		me.__m1.logicBlock_visible();
		me.__m0.logicBlock_textcolor();
		me.__1.logicBlock_size();
		me.__3.logicBlock_position();
		player.addListener('changenode', function(event) {
			me.__30.logicBlock_position();
			me.__50.logicBlock_bordercolor();
			me.__47.logicBlock_bordercolor();
			me.__44.logicBlock_bordercolor();
			me.__41.logicBlock_bordercolor();
			me.__38.logicBlock_bordercolor();
			me.__35.logicBlock_bordercolor();
			me._image_2.logicBlock_position();
			me._image_2.logicBlock_angle();
			me.__4.logicBlock_visible();
			me.__22.logicBlock_backgroundcolor();
			me.__26.logicBlock_visible();
			me.__25.logicBlock_visible();
			me.__24.logicBlock_textcolor();
			me.__23.logicBlock_visible();
			me.__21.logicBlock_visible();
			me.__16.logicBlock_backgroundcolor();
			me.__19.logicBlock_visible();
			me.__18.logicBlock_visible();
			me.__17.logicBlock_textcolor();
			me.__11.logicBlock_backgroundcolor();
			me.__14.logicBlock_visible();
			me.__13.logicBlock_visible();
			me.__12.logicBlock_textcolor();
			me.__6.logicBlock_backgroundcolor();
			me.__9.logicBlock_visible();
			me.__8.logicBlock_visible();
			me.__7.logicBlock_textcolor();
			me.__m16.logicBlock_angle();
			me._image_2m.logicBlock_position();
			me.__m.logicBlock_visible();
			me.__m11.logicBlock_backgroundcolor();
			me.__m14.logicBlock_visible();
			me.__m13.logicBlock_visible();
			me.__m12.logicBlock_textcolor();
			me._m4.logicBlock_visible();
			me.__m7.logicBlock_backgroundcolor();
			me.__m10.logicBlock_visible();
			me.__m9.logicBlock_visible();
			me.__m8.logicBlock_textcolor();
			me.__m3.logicBlock_backgroundcolor();
			me.__m6.logicBlock_visible();
			me.__m5.logicBlock_visible();
			me.__m4.logicBlock_textcolor();
			me._m0.logicBlock_backgroundcolor();
			me.__m2.logicBlock_visible();
			me.__m1.logicBlock_visible();
			me.__m0.logicBlock_textcolor();
		});
		player.addListener('configloaded', function(event) {
			me.__30.logicBlock_position();
			me.__50.logicBlock_bordercolor();
			me.__47.logicBlock_bordercolor();
			me.__44.logicBlock_bordercolor();
			me.__41.logicBlock_bordercolor();
			me._image_2.logicBlock_position();
			me._image_2.logicBlock_angle();
			me.__4.logicBlock_visible();
			me.__22.logicBlock_backgroundcolor();
			me.__26.logicBlock_visible();
			me.__25.logicBlock_visible();
			me.__24.logicBlock_textcolor();
			me.__23.logicBlock_visible();
			me.__16.logicBlock_backgroundcolor();
			me.__19.logicBlock_visible();
			me.__18.logicBlock_visible();
			me.__17.logicBlock_textcolor();
			me.__11.logicBlock_backgroundcolor();
			me.__14.logicBlock_visible();
			me.__13.logicBlock_visible();
			me.__12.logicBlock_textcolor();
			me.__6.logicBlock_backgroundcolor();
			me.__9.logicBlock_visible();
			me.__8.logicBlock_visible();
			me.__7.logicBlock_textcolor();
			me.__m16.logicBlock_angle();
			me._image_2m.logicBlock_position();
			me.__m.logicBlock_visible();
			me.__m11.logicBlock_backgroundcolor();
			me.__m14.logicBlock_visible();
			me.__m13.logicBlock_visible();
			me.__m12.logicBlock_textcolor();
			me._m4.logicBlock_visible();
			me.__m7.logicBlock_backgroundcolor();
			me.__m10.logicBlock_visible();
			me.__m9.logicBlock_visible();
			me.__m8.logicBlock_textcolor();
			me.__m3.logicBlock_backgroundcolor();
			me.__m6.logicBlock_visible();
			me.__m5.logicBlock_visible();
			me.__m4.logicBlock_textcolor();
			me._m0.logicBlock_backgroundcolor();
			me.__m2.logicBlock_visible();
			me.__m1.logicBlock_visible();
			me.__m0.logicBlock_textcolor();
		});
		player.addListener('sizechanged', function(event) {
			me._logo.logicBlock_size();
			me.__29.logicBlock_size();
			me.__49.logicBlock_position();
			me.__46.logicBlock_position();
			me.__43.logicBlock_position();
			me.__40.logicBlock_position();
			me.__37.logicBlock_position();
			me.__34.logicBlock_position();
			me.__31.logicBlock_position();
			me.__27.logicBlock_visible();
			me.__4.logicBlock_visible();
			me.__m15.logicBlock_size();
			me.__m15.logicBlock_visible();
			me.__m.logicBlock_scaling();
			me.__m.logicBlock_visible();
			me.__1.logicBlock_size();
			me.__3.logicBlock_position();
		});
		player.addListener('varchanged_vis_around', function(event) {
			me.__11.logicBlock_backgroundcolor();
			me.__14.logicBlock_visible();
			me.__13.logicBlock_visible();
			me.__12.logicBlock_textcolor();
			me.__m3.logicBlock_backgroundcolor();
			me.__m6.logicBlock_visible();
			me.__m5.logicBlock_visible();
			me.__m4.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_business', function(event) {
			me.__16.logicBlock_backgroundcolor();
			me.__19.logicBlock_visible();
			me.__18.logicBlock_visible();
			me.__17.logicBlock_textcolor();
			me.__m7.logicBlock_backgroundcolor();
			me.__m10.logicBlock_visible();
			me.__m9.logicBlock_visible();
			me.__m8.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_copy', function(event) {
			me.__22.logicBlock_backgroundcolor();
			me.__26.logicBlock_visible();
			me.__25.logicBlock_visible();
			me.__24.logicBlock_textcolor();
			me.__23.logicBlock_visible();
			me.__m11.logicBlock_backgroundcolor();
			me.__m14.logicBlock_visible();
			me.__m13.logicBlock_visible();
			me.__m12.logicBlock_textcolor();
			me._m4.logicBlock_visible();
		});
		player.addListener('varchanged_vis_home', function(event) {
			me.__6.logicBlock_backgroundcolor();
			me.__9.logicBlock_visible();
			me.__8.logicBlock_visible();
			me.__7.logicBlock_textcolor();
			me._m0.logicBlock_backgroundcolor();
			me.__m2.logicBlock_visible();
			me.__m1.logicBlock_visible();
			me.__m0.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_leftmenu', function(event) {
			me.__30.logicBlock_position();
		});
		player.addListener('varchanged_vis_school', function(event) {
			me.__44.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_shop', function(event) {
			me.__47.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_sidemenu', function(event) {
			me._image_2.logicBlock_position();
			me._image_2.logicBlock_angle();
			me.__4.logicBlock_visible();
			me.__m16.logicBlock_angle();
			me._image_2m.logicBlock_position();
			me.__m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_trafficborder', function(event) {
			me.__41.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_tree', function(event) {
			me.__50.logicBlock_bordercolor();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__21.ggUpdateConditionTimer();
		if (me.__21.ggLastIsActive!=me.__21.ggIsActive()) {
			me.__21.ggLastIsActive=me.__21.ggIsActive();
			if (me.__21.ggLastIsActive) {
				player.setVariableValue('vis_copy', false);
			} else {
			}
		}
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