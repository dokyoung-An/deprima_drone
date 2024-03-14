// Garden Gnome Software - Skin
// Pano2VR 7.0.9/20024
// Filename: ???? ?? ??.ggsk
// Generated 2024-03-14T10:38:21

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
	player.addVariable('vis_sitelogo', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
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
		el=me.__58=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 608px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 408px;';
		hs+='visibility : inherit;';
		hs+='width : 134px;';
		hs+='pointer-events:none;';
		hs+='transform:translateY(-50%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__58.logicBlock_position = function() {
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
			if (me.__58.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__58.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__58.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__58.ggCurrentLogicStatePosition == 0) {
					me.__58.style.left='0px';
					me.__58.style.top='315px';
				}
				else {
					me.__58.style.left='0px';
					me.__58.style.top='408px';
				}
			}
		}
		me.__58.logicBlock_position();
		me.__58.logicBlock_size = function() {
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
			if (me.__58.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__58.ggCurrentLogicStateSize = newLogicStateSize;
				me.__58.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__58.ggCurrentLogicStateSize == 0) {
					me.__58.style.width='82px';
					me.__58.style.height='500px';
					skin.updateSize(me.__58);
				}
				else {
					me.__58.style.width='134px';
					me.__58.style.height='608px';
					skin.updateSize(me.__58);
				}
			}
		}
		me.__58.logicBlock_size();
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 35px 35px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -200%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
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
		me.__59.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_leftmenu') == true)) && 
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_leftmenu') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__59.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__59.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__59.style.transition='left 800ms ease 0ms, top 800ms ease 0ms';
				if (me.__59.ggCurrentLogicStatePosition == 0) {
					me.__59.style.left='0%';
					me.__59.style.top='0px';
				}
				else if (me.__59.ggCurrentLogicStatePosition == 1) {
					me.__59.style.left='-20%';
					me.__59.style.top='0px';
				}
				else {
					me.__59.style.left='-200%';
					me.__59.style.top='0px';
				}
			}
		}
		me.__59.logicBlock_position();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me.__78=document.createElement('div');
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
		me.__78.ggIsActive=function() {
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
		me.__78.logicBlock_position = function() {
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
			if (me.__78.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__78.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__78.style.transition='right 0s, top 0s';
				if (me.__78.ggCurrentLogicStatePosition == 0) {
					me.__78.style.right='10px';
					me.__78.style.top='82.06%';
				}
				else {
					me.__78.style.right='0px';
					me.__78.style.top='82.06%';
				}
			}
		}
		me.__78.logicBlock_position();
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		el=me.__80=document.createElement('div');
		els=me.__80__text=document.createElement('div');
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__80.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc5f0\ud658\uacbd\n\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__80.ggUpdateText();
		el.appendChild(els);
		me.__80.ggIsActive=function() {
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
		me.__80.logicBlock_position = function() {
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
			if (me.__80.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__80.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__80.style.transition='left 0s, bottom 0s';
				if (me.__80.ggCurrentLogicStatePosition == 0) {
					me.__80.style.left = 'calc(50% - (100px / 2))';
					me.__80.style.bottom='10%';
				}
				else {
					me.__80.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__80.style.bottom='15%';
				}
			}
		}
		me.__80.logicBlock_position();
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me.__78.appendChild(me.__80);
		el=me.__79=document.createElement('div');
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
		me.__79.ggIsActive=function() {
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
		me.__79.logicBlock_bordercolor = function() {
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
			if (me.__79.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__79.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__79.style.transition='border-color 0s';
				if (me.__79.ggCurrentLogicStateBorderColor == 0) {
					me.__79.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__79.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__79.logicBlock_bordercolor();
		me.__79.onclick=function (e) {
			player.setMediaVisibility("\uc790\uc5f0","2",0);
			player.setVariableValue('vis_tree', !player.getVariableValue('vis_tree'));
		}
		me.__79.ggUpdatePosition=function (useTransition) {
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
		me.__79.appendChild(me._image_9);
		me.__78.appendChild(me.__79);
		me.__59.appendChild(me.__78);
		el=me.__75=document.createElement('div');
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
		me.__75.ggIsActive=function() {
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
		me.__75.logicBlock_position = function() {
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
			if (me.__75.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__75.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__75.style.transition='right 0s, top 0s';
				if (me.__75.ggCurrentLogicStatePosition == 0) {
					me.__75.style.right='10px';
					me.__75.style.top='69.36%';
				}
				else {
					me.__75.style.right='0px';
					me.__75.style.top='69.36%';
				}
			}
		}
		me.__75.logicBlock_position();
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me.__77=document.createElement('div');
		els=me.__77__text=document.createElement('div');
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__77.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0dd\ud65c\ud3b8\uc758\uc2dc\uc124\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__77.ggUpdateText();
		el.appendChild(els);
		me.__77.ggIsActive=function() {
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
		me.__77.logicBlock_position = function() {
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
			if (me.__77.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__77.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__77.style.transition='left 0s, bottom 0s';
				if (me.__77.ggCurrentLogicStatePosition == 0) {
					me.__77.style.left = 'calc(50% - (100% / 2))';
					me.__77.style.bottom='10%';
				}
				else {
					me.__77.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__77.style.bottom='15%';
				}
			}
		}
		me.__77.logicBlock_position();
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__77);
		el=me.__76=document.createElement('div');
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
		me.__76.ggIsActive=function() {
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
		me.__76.logicBlock_bordercolor = function() {
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
			if (me.__76.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__76.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__76.style.transition='border-color 0s';
				if (me.__76.ggCurrentLogicStateBorderColor == 0) {
					me.__76.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__76.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__76.logicBlock_bordercolor();
		me.__76.onclick=function (e) {
			var list=me.findElements("\ud55c\ub4ec\uc2a4\ud06c\ub9b0\uace8\ud504",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("KS\ubcd1\uc6d0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			player.setVariableValue('vis_shop', !player.getVariableValue('vis_shop'));
		}
		me.__76.ggUpdatePosition=function (useTransition) {
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
		me.__76.appendChild(me._image_8);
		me.__75.appendChild(me.__76);
		me.__59.appendChild(me.__75);
		el=me.__72=document.createElement('div');
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
		me.__72.ggIsActive=function() {
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
		me.__72.logicBlock_position = function() {
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
			if (me.__72.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__72.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__72.style.transition='right 0s, top 0s';
				if (me.__72.ggCurrentLogicStatePosition == 0) {
					me.__72.style.right='10px';
					me.__72.style.top='56.66%';
				}
				else {
					me.__72.style.right='0px';
					me.__72.style.top='56.66%';
				}
			}
		}
		me.__72.logicBlock_position();
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74=document.createElement('div');
		els=me.__74__text=document.createElement('div');
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
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__74.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\uc721\uc2dc\uc124\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__74.ggUpdateText();
		el.appendChild(els);
		me.__74.ggIsActive=function() {
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
		me.__74.logicBlock_position = function() {
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
			if (me.__74.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__74.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__74.style.transition='left 0s, bottom 0s';
				if (me.__74.ggCurrentLogicStatePosition == 0) {
					me.__74.style.left = 'calc(50% - (100px / 2))';
					me.__74.style.bottom='10%';
				}
				else {
					me.__74.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__74.style.bottom='15%';
				}
			}
		}
		me.__74.logicBlock_position();
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		me.__72.appendChild(me.__74);
		el=me.__73=document.createElement('div');
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
		me.__73.ggIsActive=function() {
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
		me.__73.logicBlock_bordercolor = function() {
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
			if (me.__73.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__73.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__73.style.transition='border-color 0s';
				if (me.__73.ggCurrentLogicStateBorderColor == 0) {
					me.__73.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__73.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__73.logicBlock_bordercolor();
		me.__73.onclick=function (e) {
			player.setMediaVisibility("\uad50\uc721","2",0);
			player.setVariableValue('vis_school', !player.getVariableValue('vis_school'));
		}
		me.__73.ggUpdatePosition=function (useTransition) {
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
		me.__73.appendChild(me._image_7);
		me.__72.appendChild(me.__73);
		me.__59.appendChild(me.__72);
		el=me.__69=document.createElement('div');
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
		me.__69.ggIsActive=function() {
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
		me.__69.logicBlock_position = function() {
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
			if (me.__69.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__69.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__69.style.transition='right 0s, top 0s';
				if (me.__69.ggCurrentLogicStatePosition == 0) {
					me.__69.style.right='10px';
					me.__69.style.top='43.96%';
				}
				else {
					me.__69.style.right='0px';
					me.__69.style.top='43.96%';
				}
			}
		}
		me.__69.logicBlock_position();
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		el=me.__71=document.createElement('div');
		els=me.__71__text=document.createElement('div');
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
		hs+='bottom : 19%;';
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
		me.__71.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\ud1b5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__71.ggUpdateText();
		el.appendChild(els);
		me.__71.ggIsActive=function() {
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
		me.__71.logicBlock_position = function() {
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
			if (me.__71.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__71.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__71.style.transition='left 0s, bottom 0s';
				if (me.__71.ggCurrentLogicStatePosition == 0) {
					me.__71.style.left = 'calc(50% - (100px / 2))';
					me.__71.style.bottom='14%';
				}
				else {
					me.__71.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__71.style.bottom='19%';
				}
			}
		}
		me.__71.logicBlock_position();
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me.__71);
		el=me.__70=document.createElement('div');
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
		me.__70.ggIsActive=function() {
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
		me.__70.logicBlock_bordercolor = function() {
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
			if (me.__70.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__70.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__70.style.transition='border-color 0s';
				if (me.__70.ggCurrentLogicStateBorderColor == 0) {
					me.__70.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__70.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__70.logicBlock_bordercolor();
		me.__70.onclick=function (e) {
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
		me.__70.ggUpdatePosition=function (useTransition) {
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
		me.__70.appendChild(me._image_6);
		me.__69.appendChild(me.__70);
		me.__59.appendChild(me.__69);
		el=me.__66=document.createElement('div');
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
		me.__66.ggIsActive=function() {
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
		me.__66.logicBlock_position = function() {
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
			if (me.__66.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__66.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__66.style.transition='right 0s, top 0s';
				if (me.__66.ggCurrentLogicStatePosition == 0) {
					me.__66.style.right='10px';
					me.__66.style.top='31.26%';
				}
				else {
					me.__66.style.right='0px';
					me.__66.style.top='31.26%';
				}
			}
		}
		me.__66.logicBlock_position();
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		el=me.__68=document.createElement('div');
		els=me.__68__text=document.createElement('div');
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
		hs+='bottom : 19%;';
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
		me.__68.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uace0\uace0\ub3c4\ubdf0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__68.ggUpdateText();
		el.appendChild(els);
		me.__68.ggIsActive=function() {
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
		me.__68.logicBlock_position = function() {
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
			if (me.__68.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__68.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__68.style.transition='left 0s, bottom 0s';
				if (me.__68.ggCurrentLogicStatePosition == 0) {
					me.__68.style.left = 'calc(50% - (100px / 2))';
					me.__68.style.bottom='14%';
				}
				else {
					me.__68.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__68.style.bottom='19%';
				}
			}
		}
		me.__68.logicBlock_position();
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__68);
		el=me.__67=document.createElement('div');
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
		me.__67.ggIsActive=function() {
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
		me.__67.logicBlock_bordercolor = function() {
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
			if (me.__67.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__67.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__67.style.transition='border-color 0s';
				if (me.__67.ggCurrentLogicStateBorderColor == 0) {
					me.__67.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__67.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__67.logicBlock_bordercolor();
		me.__67.onclick=function (e) {
			player.openNext("{node17}","");
		}
		me.__67.ggUpdatePosition=function (useTransition) {
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
		me.__67.appendChild(me._image_5);
		me.__66.appendChild(me.__67);
		me.__59.appendChild(me.__66);
		el=me.__63=document.createElement('div');
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
		me.__63.ggIsActive=function() {
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
		me.__63.logicBlock_position = function() {
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
			if (me.__63.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__63.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__63.style.transition='right 0s, top 0s';
				if (me.__63.ggCurrentLogicStatePosition == 0) {
					me.__63.style.right='10px';
					me.__63.style.top='18.95%';
				}
				else {
					me.__63.style.right='0px';
					me.__63.style.top='18.95%';
				}
			}
		}
		me.__63.logicBlock_position();
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		el=me.__65=document.createElement('div');
		els=me.__65__text=document.createElement('div');
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
		hs+='bottom : 19%;';
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
		me.__65.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc800\uace0\ub3c4\ubdf0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__65.ggUpdateText();
		el.appendChild(els);
		me.__65.ggIsActive=function() {
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
		me.__65.logicBlock_position = function() {
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
			if (me.__65.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__65.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__65.style.transition='left 0s, bottom 0s';
				if (me.__65.ggCurrentLogicStatePosition == 0) {
					me.__65.style.left = 'calc(50% - (100px / 2))';
					me.__65.style.bottom='14%';
				}
				else {
					me.__65.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__65.style.bottom='19%';
				}
			}
		}
		me.__65.logicBlock_position();
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me.__65);
		el=me.__64=document.createElement('div');
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
		me.__64.ggIsActive=function() {
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
		me.__64.logicBlock_bordercolor = function() {
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
			if (me.__64.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__64.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__64.style.transition='border-color 0s';
				if (me.__64.ggCurrentLogicStateBorderColor == 0) {
					me.__64.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__64.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__64.logicBlock_bordercolor();
		me.__64.onclick=function (e) {
			player.openNext("{node12}","");
		}
		me.__64.ggUpdatePosition=function (useTransition) {
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
		me.__64.appendChild(me._image_4);
		me.__63.appendChild(me.__64);
		me.__59.appendChild(me.__63);
		el=me.__60=document.createElement('div');
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
		me.__60.ggIsActive=function() {
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
		me.__60.logicBlock_position = function() {
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
			if (me.__60.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__60.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__60.style.transition='right 0s, top 0s';
				if (me.__60.ggCurrentLogicStatePosition == 0) {
					me.__60.style.right='10px';
					me.__60.style.top='6.25%';
				}
				else {
					me.__60.style.right='0px';
					me.__60.style.top='6.25%';
				}
			}
		}
		me.__60.logicBlock_position();
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		els=me.__62__text=document.createElement('div');
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
		hs+='bottom : 21%;';
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
		me.__62.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc0c1\uc9c0\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__62.ggUpdateText();
		el.appendChild(els);
		me.__62.ggIsActive=function() {
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
		me.__62.logicBlock_position = function() {
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
			if (me.__62.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__62.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__62.style.transition='left 0s, bottom 0s';
				if (me.__62.ggCurrentLogicStatePosition == 0) {
					me.__62.style.left = 'calc(50% - (100px / 2))';
					me.__62.style.bottom='18%';
				}
				else {
					me.__62.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__62.style.bottom='21%';
				}
			}
		}
		me.__62.logicBlock_position();
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me.__62);
		el=me.__61=document.createElement('div');
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
		me.__61.ggIsActive=function() {
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
		me.__61.onclick=function (e) {
			if (
				(
					((me.ggUserdata.tags.indexOf("\uace0\uace0\ub3c4") != -1))
				)
			) {
				var params = {
							   pan: 3.8,
							   tilt: -50.85,
							   fov: 106.6,
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
							   pan: 6.74,
							   tilt: -15.69,
							   fov: 110.33,
							   projection: -1,
							   timingFunction: 3,
							   speed: 0.8
				};
				player.moveToEx(params);
			}
		}
		me.__61.ggUpdatePosition=function (useTransition) {
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
		me.__61.appendChild(me._image_3);
		me.__60.appendChild(me.__61);
		me.__59.appendChild(me.__60);
		me.__58.appendChild(me.__59);
		me.divSkin.appendChild(me.__58);
		el=me.__56=document.createElement('div');
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
		me.__56.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__56.logicBlock_visible = function() {
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
			if (me.__56.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__56.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__56.style.transition='';
				if (me.__56.ggCurrentLogicStateVisible == 0) {
					me.__56.style.visibility="hidden";
					me.__56.ggVisible=false;
				}
				else {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggVisible=true;
				}
			}
		}
		me.__56.logicBlock_visible();
		me.__56.onclick=function (e) {
			player.setVariableValue('vis_sidemenu', !player.getVariableValue('vis_sidemenu'));
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
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
		me.__57.ggIsActive=function() {
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
		me.__57.ggUpdatePosition=function (useTransition) {
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
		me.__57.appendChild(me._image_2);
		me.__56.appendChild(me.__57);
		me.divSkin.appendChild(me.__56);
		el=me.__33=document.createElement('div');
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
		me.__33.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__33.logicBlock_visible = function() {
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
			if (me.__33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__33.style.transition='';
				if (me.__33.ggCurrentLogicStateVisible == 0) {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
				else if (me.__33.ggCurrentLogicStateVisible == 1) {
					me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
					me.__33.ggVisible=true;
				}
				else {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
			}
		}
		me.__33.logicBlock_visible();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
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
		me.__49.onclick=function (e) {
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
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
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
		me.__51.logicBlock_backgroundcolor = function() {
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
			if (me.__51.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__51.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__51.style.transition='background-color 0s';
				if (me.__51.ggCurrentLogicStateBackgroundColor == 0) {
					me.__51.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__51.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__51.logicBlock_backgroundcolor();
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__55=document.createElement('div');
		els=me.__55__img=document.createElement('img');
		els.className='ggskin ggskin__55';
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
		me.__55.ggIsActive=function() {
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
		me.__55.logicBlock_visible = function() {
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
			if (me.__55.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__55.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__55.style.transition='';
				if (me.__55.ggCurrentLogicStateVisible == 0) {
					me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
					me.__55.ggVisible=true;
				}
				else {
					me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
					me.__55.ggVisible=true;
				}
			}
		}
		me.__55.logicBlock_visible();
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me.__55);
		el=me.__54=document.createElement('div');
		els=me.__54__img=document.createElement('img');
		els.className='ggskin ggskin__54';
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
		me.__54.ggIsActive=function() {
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
		me.__54.logicBlock_visible = function() {
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
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
			}
		}
		me.__54.logicBlock_visible();
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me.__54);
		el=me.__53=document.createElement('div');
		els=me.__53__text=document.createElement('div');
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
		me.__53.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__53.ggUpdateText();
		el.appendChild(els);
		me.__53.ggIsActive=function() {
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
		me.__53.logicBlock_textcolor = function() {
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
			if (me.__53.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__53.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__53.style.transition='color 0s';
				if (me.__53.ggCurrentLogicStateTextColor == 0) {
					me.__53.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__53.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__53.logicBlock_textcolor();
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me.__53);
		el=me.__52=document.createElement('div');
		els=me.__52__text=document.createElement('div');
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
		me.__52.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__52.ggUpdateText();
		el.appendChild(els);
		me.__52.ggIsActive=function() {
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
		me.__52.logicBlock_visible = function() {
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
			if (me.__52.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__52.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__52.style.transition='';
				if (me.__52.ggCurrentLogicStateVisible == 0) {
					me.__52.style.visibility=(Number(me.__52.style.opacity)>0||!me.__52.style.opacity)?'inherit':'hidden';
					me.__52.ggVisible=true;
				}
				else {
					me.__52.style.visibility="hidden";
					me.__52.ggVisible=false;
				}
			}
		}
		me.__52.logicBlock_visible();
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me.__52);
		el=me._rectangle_111111=document.createElement('div');
		el.ggId="Rectangle 111111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_111111.ggIsActive=function() {
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
		me._rectangle_111111.onclick=function (e) {
			player.setVariableValue('vis_copy', !player.getVariableValue('vis_copy'));
		}
		me._rectangle_111111.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me._rectangle_111111);
		me.__49.appendChild(me.__51);
		el=me.__50=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1200;
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
		me.__50.ggIsActive=function() {
			return (me.__50.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__50.ggTimestamp) / me.__50.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__50.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__50.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__50.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__50.style.transition='';
				if (me.__50.ggCurrentLogicStateVisible == 0) {
					me.__50.style.visibility="hidden";
					me.__50.ggVisible=false;
				}
				else {
					me.__50.style.visibility=(Number(me.__50.style.opacity)>0||!me.__50.style.opacity)?'inherit':'hidden';
					me.__50.ggVisible=true;
				}
			}
		}
		me.__50.logicBlock_visible();
		me.__50.ggActivate=function () {
			player.setVariableValue('vis_copy', false);
		}
		me.__50.ggCurrentLogicStateVisible = -1;
		me.__50.ggUpdateConditionTimer=function () {
			me.__50.logicBlock_visible();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me.__50);
		me.__33.appendChild(me.__49);
		el=me.__44=document.createElement('div');
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
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
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
		me.__45.logicBlock_backgroundcolor = function() {
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
			if (me.__45.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__45.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__45.style.transition='background-color 0s';
				if (me.__45.ggCurrentLogicStateBackgroundColor == 0) {
					me.__45.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__45.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__45.logicBlock_backgroundcolor();
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		els=me.__48__img=document.createElement('img');
		els.className='ggskin ggskin__48';
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
		me.__48.logicBlock_visible = function() {
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
			if (me.__48.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__48.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__48.style.transition='';
				if (me.__48.ggCurrentLogicStateVisible == 0) {
					me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
					me.__48.ggVisible=true;
				}
				else {
					me.__48.style.visibility="hidden";
					me.__48.ggVisible=false;
				}
			}
		}
		me.__48.logicBlock_visible();
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		els=me.__47__img=document.createElement('img');
		els.className='ggskin ggskin__47';
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
		me.__47.logicBlock_visible = function() {
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
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__47);
		el=me.__46=document.createElement('div');
		els=me.__46__text=document.createElement('div');
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
		me.__46.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc5c5\uac1c\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__46.ggUpdateText();
		el.appendChild(els);
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
		me.__46.logicBlock_textcolor = function() {
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
			if (me.__46.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__46.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__46.style.transition='color 0s';
				if (me.__46.ggCurrentLogicStateTextColor == 0) {
					me.__46.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__46.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__46.logicBlock_textcolor();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__46);
		el=me._rectangle_1111=document.createElement('div');
		el.ggId="Rectangle 1111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1111.ggIsActive=function() {
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
		me._rectangle_1111.onclick=function (e) {
			player.setVariableValue('vis_business', true);
			me.__17.style.transition='none';
			me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
			me.__17.ggVisible=true;
		}
		me._rectangle_1111.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me._rectangle_1111);
		me.__44.appendChild(me.__45);
		me.__33.appendChild(me.__44);
		el=me.__39=document.createElement('div');
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
		el=me.__40=document.createElement('div');
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
		me.__40.logicBlock_backgroundcolor = function() {
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
			if (me.__40.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__40.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__40.style.transition='background-color 0s';
				if (me.__40.ggCurrentLogicStateBackgroundColor == 0) {
					me.__40.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__40.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__40.logicBlock_backgroundcolor();
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		els=me.__43__img=document.createElement('img');
		els.className='ggskin ggskin__43';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAACXBIWXMAAC4jAAAuIwF4pT92AAAJA0lEQVR4nO2da4xV1RWAvzkzQCnjDG9bdYbLoG0iBattbSq1Ig9DKcE2MdLoQLU1tNHGxJYWWlsfTdv4iEbbtAljRGMxQUis2qK2wMQHCK34AISWTqHjjNrYcYAWZhgQZvpjnQt39l373Mec1z33fslO5u455+y11z33nL3XXmvtKuLJSGAqMB04F0gBDcB4YBxQA9QDx4AjwGHgkPv3v4H9wD5gB7AH6A1T+HyoiloAlxHAF4DLgVnA54FhPl37Q+CvQKtbtgF9Pl27JKkFrgWeQu7IgZDKUeAZoNmVoWz4DLASeTyEpWxbOQw85MqUWOYhP/WolW0rrcCXA+u9QRjP+JnAz4EZBZ7XBewG/gHsdct7QDdyp6'+
			'Y5A3lkjAImAp8APumW8926QtgG/Ah4ocDzYkMT8CT533EHgDXA9cB5Psoxxb3mGuRLy1eeJ91zS4Ya4PtAD7k71ws8BszHv1GMF8OQR96j5PdC7wV+6PYp1kwBtpK7Q+8A30PG4lFRD9wMdJJb3r8g84lY8nXgf3h3YB+wFBgekYwaw4EbgH+SewTUHJGMKtXA/XgL3QXcSLx/sjXAd4GDePflV8SgH7XAs9iF7AceBsZEJWARnIm8d/qx9+t5ZDQVCeOB7R7CvQvMjUo4H5iD9/P/DQofqg6ZjyNjbJtQf0SMWaXOWMS8YOvn34CzwhJmArDLIkg/cAfghCVMCFQBP8X+6NmD6CRQPgq8ZhGgD7gmaAEiZBFiYNP6/iYBDo2rgactDfcAVwTVcIyYhdj8NR1sQHTkO/dYGuwBvhhEgzFlBvZZ+X1+N7YA/Rl3Aljo'+
			'd2MlwEKk79o7zjd9NAIfWBr5ll+NlCDN6DfjAWDSUC9eDWxWLj4A3DnUiyeA29F1s5Uhzm6XWS7cSkAvklykGhuaUo0Nd6UaGwYyytpUY8OcCMSpRl6qmo5WeJ3otRAyGXgLGUJm8j5wIbKaHyqucjd4HLKivaPz7rDkcTkTGU5+zKjvA6YhxrcsvCY695Gt9AFgCdEovQlYm+OwuyK4899HFu0HjPqP4DHKsSn+MuBrSv0q4M/FSOcDS8nP2LY0aEEUWpFFc5OFiM0nC5vif6nUfQD8oDi5fCFfT4AonvUAyxHzt8kvtIM1xc8DLlHqb0Ns1RV0DgG3KvUXI/OgQWiKX67UtaH/lMLktTyP2xioFN6sAv6u1Gc9KUzFX4i4Y5jciczUoqSF/H5xLUEL4sFJxDpr8iXELfEUpuK/o5y0H3jCF7GGQHtH537g6hyHrW'+
			'jv6IzyjgdYhz6E/Hbmh0zF16KbdR8g+rsdAFepUwBzrL4OmBvBGF6jH1mXNbkaqNNOSI9FM0svMDoY+RJNHbpv6De0g7Ulrt+FImYyWUW2PtebB41E96yaH5qYyWMu+irdINfwrygHHSQct7qkUoPuq3ll+p+gz/ZeRKIpYkWqsWEMMtfInG+0AC3tHZ35jvXD4ATif2MOWOYAT6dHNZoL9aYgpSoG11C2j+xJ3lJge6qxIW4BBs8rdTNAhpMjkYmTSWuQEhVJLkOZNuuOkpeVuulArYNE15mrJV2Iv0jcyHVHx+2ObyfbhF4NTHOAC5QTXifbvlyhOHYoddMcdL/v3QELU07sVOrOc5DgXZN9wcpSVuxX6lIOcI7yj38FLEw5oemywUF3uPxPwMKUE5ouxzmIK7JJd8DClBOa4sc66PFIh4KVpazoUepGOGS7cEBl'+
			'KOknmtllVJICCEoKhxjmckkYmoW3xwGOK/8opSi9uDNKqTvmIG7FJkkIHIsLWmTgAQfd+yn0MMIEo82Tuh3gbeUfqWBlKSsmK3WdDrrnU0mlC4k5TUpdu4Mk4jGZGrAw5cR0pa7NdsdfRHwy9JU6n1bqdjmIQ6rpKTYRSStVYWikkPQDmZzEVfxRJJTEZFawMpUFlyp1u4AjaZPBFuWAiuKHzjylbgucdlrVArouI16ZlEqNGnTFb4TTim9F8vRmMoYQ8zAmkHlkr3Ucx1D8UfSgsiXByZV4Fit1m5AkFIP847XggwXoK1QVvBmNntPgVLhopuKfwf02MhiO/s1V8GYxEueaSS/w+/SHTMUfRrKRmiyj8pIthGFIwlOTtcB/0x/MFajfKiecgyWSoYJKM3r2jpWZH0zFv4GezHgFMci1WAJUIwmhTbYgyaJPoa253q'+
			'vUNSHZSCt4Y0tInRUUpyn+WYxvx+VnVALRvKhD0rWbvIqkgxyEzctACw2fgOQli5JcER9RRoTcjaRQMbkVxV3GpvhWZO8OkxuA2cVK5gO5orujinO9HCOA2GU9lvw6Xn41y5AZbSZVwGqyk+KEghvdrQUYtwCfjSgGaiLwONnrF33ALcVedDl62qeNRJQaK2Y4wJ/QdaSNbvKmBtlDSbvw7UO5cEK4DV032/EhVPVc9PDwfsrbnHAtevrDI8jGML7QrDRQzgk/FyBmdE0nvs/yH7Q01EPhWw2VMpdgT3H7myAarEZeqjblZ6V/SiAzse+DsokAjYn1yMK41vCHwHVBNRwDrsKexnwnIezwMwEJPtYE6EeS3CfJJ6cKGRraEvfvJURf07Ow75owgOSZT4Kr92i8d2/bDZwdtlBjkFh9m1AdlLaLyEzEodfWv1eIcFl0'+
			'JPZdFNKPnhZKy6o5GlkQ8tqO6A/osWOhkt6Ay0vQLiTzRpzNDA7wTSTpg9eN9Gtitij0VSS6xCb0ALJ9zyLitWuOg2TIsw0Y0uUg0sdY0kh+myy2ATcR7Qu4HtkGr43c8r6KHmAQK2qQNdp8tu3sQ1bfFxLetqLz3TZtY/LMchT4cUiy+cYUCttItwux9S9Gj6IolknuNVe7beQrz3oC3Eo0jInOHCSV98UFnvceMiPciaRxeRt58XUjv6bjyPO51i11yP6Dk5AvbjqSBKnQLeG2Az9B7OyJYAHwEvnfcWGXl5FHXpJm3YP4HJKFVLPxh12OAI+4MpUNdYg38nrstu0gyjHgOcSgVx90J23E5WdVi3gvzEZyrX8K/yZbJ5HdfTYjK/6nXKWjJC6KN6lFlD8N8cyajPhwjnPLCE7nCOhB7uJut7yLpB1sQ4xYO5DHWq'+
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
		me.__43.logicBlock_visible = function() {
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
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
					me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
					me.__43.ggVisible=true;
				}
				else {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
			}
		}
		me.__43.logicBlock_visible();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__43);
		el=me.__42=document.createElement('div');
		els=me.__42__img=document.createElement('img');
		els.className='ggskin ggskin__42';
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
		hs+='top : 13%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__42.logicBlock_visible = function() {
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
			if (me.__42.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__42.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__42.style.transition='';
				if (me.__42.ggCurrentLogicStateVisible == 0) {
					me.__42.style.visibility=(Number(me.__42.style.opacity)>0||!me.__42.style.opacity)?'inherit':'hidden';
					me.__42.ggVisible=true;
				}
				else {
					me.__42.style.visibility="hidden";
					me.__42.ggVisible=false;
				}
			}
		}
		me.__42.logicBlock_visible();
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__42);
		el=me.__41=document.createElement('div');
		els=me.__41__text=document.createElement('div');
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
		me.__41.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubcc0\uc815\ubcf4", params);
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
		me.__41.logicBlock_textcolor = function() {
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
			if (me.__41.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__41.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__41.style.transition='color 0s';
				if (me.__41.ggCurrentLogicStateTextColor == 0) {
					me.__41.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__41.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__41.logicBlock_textcolor();
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__41);
		el=me._rectangle_111=document.createElement('div');
		el.ggId="Rectangle 111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 99;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_111.ggIsActive=function() {
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
		me._rectangle_111.onclick=function (e) {
			player.setVariableValue('vis_leftmenu', !player.getVariableValue('vis_leftmenu'));
			player.setVariableValue('vis_around', !player.getVariableValue('vis_around'));
		}
		me._rectangle_111.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me._rectangle_111);
		me.__39.appendChild(me.__40);
		me.__33.appendChild(me.__39);
		el=me.__34=document.createElement('div');
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
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
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
		me.__35.logicBlock_backgroundcolor = function() {
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
			if (me.__35.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__35.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__35.style.transition='background-color 0s';
				if (me.__35.ggCurrentLogicStateBackgroundColor == 0) {
					me.__35.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__35.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__35.logicBlock_backgroundcolor();
		me.__35.onclick=function (e) {
			player.setVariableValue('vis_home', !player.getVariableValue('vis_home'));
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		els=me.__38__img=document.createElement('img');
		els.className='ggskin ggskin__38';
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
		me.__38.logicBlock_visible = function() {
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
			if (me.__38.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__38.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__38.style.transition='';
				if (me.__38.ggCurrentLogicStateVisible == 0) {
					me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
					me.__38.ggVisible=true;
				}
				else {
					me.__38.style.visibility="hidden";
					me.__38.ggVisible=false;
				}
			}
		}
		me.__38.logicBlock_visible();
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__38);
		el=me.__37=document.createElement('div');
		els=me.__37__img=document.createElement('img');
		els.className='ggskin ggskin__37';
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
		me.__37.logicBlock_visible = function() {
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
			if (me.__37.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__37.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__37.style.transition='';
				if (me.__37.ggCurrentLogicStateVisible == 0) {
					me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
					me.__37.ggVisible=true;
				}
				else {
					me.__37.style.visibility="hidden";
					me.__37.ggVisible=false;
				}
			}
		}
		me.__37.logicBlock_visible();
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__37);
		el=me.__36=document.createElement('div');
		els=me.__36__text=document.createElement('div');
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
		me.__36.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud648\ud398\uc774\uc9c0", params);
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
		me.__36.logicBlock_textcolor = function() {
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
			if (me.__36.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__36.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__36.style.transition='color 0s';
				if (me.__36.ggCurrentLogicStateTextColor == 0) {
					me.__36.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__36.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__36.logicBlock_textcolor();
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__36);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
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
		me._rectangle_1.onclick=function (e) {
			player.openUrl("https:\/\/diprima.imweb.me\/","_blank");
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me._rectangle_1);
		me.__34.appendChild(me.__35);
		me.__33.appendChild(me.__34);
		me.divSkin.appendChild(me.__33);
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
		hs+='top : 20px;';
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
		hs+='top : 35px;';
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
			me.__17.style.transition='none';
			me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
			me.__17.ggVisible=true;
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
		el=me.__22=document.createElement('div');
		el.ggId="\uac00\uc6b4\ub370 \ucee8\ud2b8\ub864 \ucc3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((280px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__22.logicBlock_position = function() {
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
			if (me.__22.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__22.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__22.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__22.ggCurrentLogicStatePosition == 0) {
					me.__22.style.left = 'calc(50% - (280px / 2))';
					me.__22.style.bottom='10px';
				}
				else {
					me.__22.style.left='calc(50% - ((280px + 0px) / 2) + 0px)';
					me.__22.style.bottom='50px';
				}
			}
		}
		me.__22.logicBlock_position();
		me.__22.logicBlock_scaling = function() {
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
			if (me.__22.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__22.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__22.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__22.ggCurrentLogicStateScaling == 0) {
					me.__22.ggParameter.sx = 0.8;
					me.__22.ggParameter.sy = 0.8;
					me.__22.style.transform=parameterToTransform(me.__22.ggParameter);
					skin.updateSize(me.__22);
				}
				else {
					me.__22.ggParameter.sx = 1;
					me.__22.ggParameter.sy = 1;
					me.__22.style.transform=parameterToTransform(me.__22.ggParameter);
					skin.updateSize(me.__22);
				}
			}
		}
		me.__22.logicBlock_scaling();
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		el.ggId="\uac00\uc6b4\ub370 \ucee8\ud2b8\ub864 \ucc3d \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
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
		me.__22.appendChild(me.__32);
		el=me.__23=document.createElement('div');
		el.ggId="\uac00\uc6b4\ub370 \ucee8\ud2b8\ub864 \ucc3d \ub0b4\ubd80";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__30=document.createElement('div');
		el.ggId="\ud655\ub300";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
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
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
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
		me._rectangle_2.ggIsActive=function() {
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
		me._rectangle_2.onclick=function (e) {
			player.changeFovLog(-1,true);
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		els=me.__31__img=document.createElement('img');
		els.className='ggskin ggskin__31';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABACAYAAABC6cT1AAAACXBIWXMAAC4jAAAuIwF4pT92AAABLklEQVRoge3bPUoDYRSF4TcXrdyAjT8guAGx0oW4D3chuA/TCboEEd2DSCztxMIg0RMLgwSZ1hvhnAem+Zp732FgimGgmaQtSZeS3iTNJN1KOujeo52kC0nzX9d99x7VPRDYHDjb615iFeFD1roH/pfwdgl3k3A3CXeTcDcJd5NwNwl3k3A3CXeTcDcJd5NwNyMASWfAKR43YlxVJyNJ28CExU0wcVx8f7BzigbYL+ARmK96k2YPVVVPwDmgVW/TZAzc/DziktaBjYbB18DRr7NXYKdh9rSq3mHpu3RVzYCXv54s6WPgeF5Vfz57mcPra1DC3STcTcLdJNxNwt0k3E3C3STcTcLdJNxNwt0k3M1/Cf/sHriK8O'+
			'eBs0n3Eu0k7Uq6kjRd/EZ9J+mwe48vRuJk7KBPEO4AAAAASUVORK5CYII=';
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
		el.ggId="\ud655\ub300\uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
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
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me.__31);
		me.__30.appendChild(me._rectangle_2);
		me.__23.appendChild(me.__30);
		el=me.__28=document.createElement('div');
		el.ggId="\ucd95\uc18c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
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
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
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
		me._rectangle_3.ggIsActive=function() {
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
		me._rectangle_3.onclick=function (e) {
			player.changeFovLog(1,true);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		el.ggId="\ucd95\uc18c\uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 2px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((2px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me._rectangle_3.appendChild(me.__29);
		me.__28.appendChild(me._rectangle_3);
		me.__23.appendChild(me.__28);
		el=me.__26=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 50%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
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
		me._rectangle_4.ggIsActive=function() {
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
		me._rectangle_4.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__27=document.createElement('div');
		els=me.__27__img=document.createElement('img');
		els.className='ggskin ggskin__27';
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
		el.ggId="\uc790\ub3d9\ud68c\uc804\uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
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
		me._rectangle_4.appendChild(me.__27);
		me.__26.appendChild(me._rectangle_4);
		me.__23.appendChild(me.__26);
		el=me.__24=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
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
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
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
		me._rectangle_5.ggIsActive=function() {
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
		me._rectangle_5.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		els=me.__25__img=document.createElement('img');
		els.className='ggskin ggskin__25';
		hs='data:image/png;base64,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'+
			'rkJggg==';
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
		el.ggId="\uc804\uccb4\ud654\uba74\uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
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
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me.__25);
		me.__24.appendChild(me._rectangle_5);
		me.__23.appendChild(me.__24);
		me.__22.appendChild(me.__23);
		me.divSkin.appendChild(me.__22);
		el=me.__17=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694\ud31d\uc5c5\ucc3d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694\ud31d\uc5c5\ucc3d \ubc30\uacbd";
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
		me.__21.onclick=function (e) {
			me.__17.style.transition='none';
			me.__17.style.visibility='hidden';
			me.__17.ggVisible=false;
			player.setVariableValue('vis_business', false);
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me.__21);
		el=me.__18=document.createElement('div');
		el.ggId="\uc0ac\uc5c5\uac1c\uc694\uc0ac\uc9c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 78%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6%;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
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
		me.__18.logicBlock_position = function() {
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
			if (me.__18.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__18.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__18.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__18.ggCurrentLogicStatePosition == 0) {
					me.__18.style.left = 'calc(50% - (70% / 2))';
					me.__18.style.top='3%';
				}
				else {
					me.__18.style.left='calc(50% - ((70% + 0px) / 2) + 0px)';
					me.__18.style.top='6%';
				}
			}
		}
		me.__18.logicBlock_position();
		me.__18.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 940))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__18.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__18.ggCurrentLogicStateSize = newLogicStateSize;
				me.__18.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__18.ggCurrentLogicStateSize == 0) {
					me.__18.style.width='85%';
					me.__18.style.height='69.13%';
					me.__18.style.left = 'calc(50% - (85% / 2))';
					skin.updateSize(me.__18);
				}
				else if (me.__18.ggCurrentLogicStateSize == 1) {
					me.__18.style.width='88%';
					me.__18.style.height='75%';
					me.__18.style.left = 'calc(50% - (88% / 2))';
					skin.updateSize(me.__18);
				}
				else {
					me.__18.style.width='70%';
					me.__18.style.height='78%';
					me.__18.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__18);
				}
			}
		}
		me.__18.logicBlock_size();
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		els=me.__20__img=document.createElement('img');
		els.className='ggskin ggskin__20';
		hs=basePath + 'images/_20.png';
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
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \ub0b4\uc6a9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 88px;';
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
		me.__20.logicBlock_visible = function() {
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
			if (me.__20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__20.style.transition='';
				if (me.__20.ggCurrentLogicStateVisible == 0) {
					me.__20.style.visibility="hidden";
					me.__20.ggVisible=false;
				}
				else {
					me.__20.style.visibility=(Number(me.__20.style.opacity)>0||!me.__20.style.opacity)?'inherit':'hidden';
					me.__20.ggVisible=true;
				}
			}
		}
		me.__20.logicBlock_visible();
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me._close0=document.createElement('div');
		els=me._close0__img=document.createElement('img');
		els.className='ggskin ggskin_close0';
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
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -32px;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close0.ggIsActive=function() {
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
		me._close0.logicBlock_position = function() {
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
			if (me._close0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close0.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._close0.ggCurrentLogicStatePosition == 0) {
					me._close0.style.right='-20px';
					me._close0.style.top='-28px';
				}
				else {
					me._close0.style.right='-32px';
					me._close0.style.top='-40px';
				}
			}
		}
		me._close0.logicBlock_position();
		me._close0.logicBlock_size = function() {
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
			if (me._close0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._close0.ggCurrentLogicStateSize = newLogicStateSize;
				me._close0.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._close0.ggCurrentLogicStateSize == 0) {
					me._close0.style.width='25px';
					me._close0.style.height='25px';
					skin.updateSize(me._close0);
				}
				else {
					me._close0.style.width='32px';
					me._close0.style.height='32px';
					skin.updateSize(me._close0);
				}
			}
		}
		me._close0.logicBlock_size();
		me._close0.onclick=function (e) {
			me.__17.style.transition='none';
			me.__17.style.visibility='hidden';
			me.__17.ggVisible=false;
			player.setVariableValue('vis_business', false);
		}
		me._close0.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me._close0);
		me.__18.appendChild(me.__20);
		el=me.__19=document.createElement('div');
		els=me.__19__img=document.createElement('img');
		els.className='ggskin ggskin__19';
		hs=basePath + 'images/_19.png';
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
		el.ggId="\uc0ac\uc5c5\uac1c\uc694 \ub0b4\uc6a9-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 88px;';
		hs+='visibility : hidden;';
		hs+='width : 100.055%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
				((player.getViewerSize().width <= 640))
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
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_close';
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
		el.ggId="close-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -32px;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close.ggIsActive=function() {
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
		me._close.logicBlock_position = function() {
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
			if (me._close.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._close.ggCurrentLogicStatePosition == 0) {
					me._close.style.right='-20px';
					me._close.style.top='-28px';
				}
				else {
					me._close.style.right='-32px';
					me._close.style.top='-40px';
				}
			}
		}
		me._close.logicBlock_position();
		me._close.logicBlock_size = function() {
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
			if (me._close.ggCurrentLogicStateSize != newLogicStateSize) {
				me._close.ggCurrentLogicStateSize = newLogicStateSize;
				me._close.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._close.ggCurrentLogicStateSize == 0) {
					me._close.style.width='25px';
					me._close.style.height='25px';
					skin.updateSize(me._close);
				}
				else {
					me._close.style.width='32px';
					me._close.style.height='32px';
					skin.updateSize(me._close);
				}
			}
		}
		me._close.logicBlock_size();
		me._close.onclick=function (e) {
			me.__17.style.transition='none';
			me.__17.style.visibility='hidden';
			me.__17.ggVisible=false;
			player.setVariableValue('vis_business', false);
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me._close);
		me.__18.appendChild(me.__19);
		me.__17.appendChild(me.__18);
		me.divSkin.appendChild(me.__17);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
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
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			player.setVariableValue('vis_sitelogo', !player.getVariableValue('vis_sitelogo'));
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._start=document.createElement('div');
		el.ggId="start";
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
		me._start.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._start);
		el=me.__14=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 219px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 25px 25px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
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
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
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
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88.5714%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88.5714% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
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
		me._container_1.ggUpdatePosition=function (useTransition) {
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
		hs+='height : 100%;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		me._container_1.appendChild(me._image_1);
		me._container_2.appendChild(me._container_1);
		me.__15.appendChild(me._container_2);
		me.__14.appendChild(me.__15);
		me.divSkin.appendChild(me.__14);
		me.__58.logicBlock_position();
		me.__58.logicBlock_size();
		player.setVariableValue('vis_leftmenu', true);
		player.setVariableValue('vis_around', true);
		me.__59.logicBlock_position();
		me.__78.logicBlock_position();
		me.__80.logicBlock_position();
		me.__79.logicBlock_bordercolor();
		me.__75.logicBlock_position();
		me.__77.logicBlock_position();
		me.__76.logicBlock_bordercolor();
		me.__72.logicBlock_position();
		me.__74.logicBlock_position();
		me.__73.logicBlock_bordercolor();
		me.__69.logicBlock_position();
		me.__71.logicBlock_position();
		me.__70.logicBlock_bordercolor();
		me.__66.logicBlock_position();
		me.__68.logicBlock_position();
		me.__67.logicBlock_bordercolor();
		me.__63.logicBlock_position();
		me.__65.logicBlock_position();
		me.__64.logicBlock_bordercolor();
		me.__60.logicBlock_position();
		me.__62.logicBlock_position();
		me.__56.logicBlock_visible();
		me._image_2.logicBlock_position();
		me._image_2.logicBlock_angle();
		me.__33.logicBlock_visible();
		me.__51.logicBlock_backgroundcolor();
		me.__55.logicBlock_visible();
		me.__54.logicBlock_visible();
		me.__53.logicBlock_textcolor();
		me.__52.logicBlock_visible();
		me.__50.logicBlock_visible();
		me.__45.logicBlock_backgroundcolor();
		me.__48.logicBlock_visible();
		me.__47.logicBlock_visible();
		me.__46.logicBlock_textcolor();
		me.__40.logicBlock_backgroundcolor();
		me.__43.logicBlock_visible();
		me.__42.logicBlock_visible();
		me.__41.logicBlock_textcolor();
		me.__35.logicBlock_backgroundcolor();
		me.__38.logicBlock_visible();
		me.__37.logicBlock_visible();
		me.__36.logicBlock_textcolor();
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
		me.__22.logicBlock_position();
		me.__22.logicBlock_scaling();
		me.__18.logicBlock_position();
		me.__18.logicBlock_size();
		me.__20.logicBlock_visible();
		me._close0.logicBlock_position();
		me._close0.logicBlock_size();
		me.__19.logicBlock_visible();
		me._close.logicBlock_position();
		me._close.logicBlock_size();
		me._timer_1.logicBlock_visible();
		player.setPanTiltFov(-26.78,-16.82,81.88);
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('대상지로고')) {
				for(var i = 0; i < hotspotTemplates['대상지로고'].length; i++) {
					hotspotTemplates['대상지로고'][i].ggEvent_changenode();
				}
			}
			me.__59.logicBlock_position();
			me.__79.logicBlock_bordercolor();
			me.__76.logicBlock_bordercolor();
			me.__73.logicBlock_bordercolor();
			me.__70.logicBlock_bordercolor();
			me.__67.logicBlock_bordercolor();
			me.__64.logicBlock_bordercolor();
			me._image_2.logicBlock_position();
			me._image_2.logicBlock_angle();
			me.__33.logicBlock_visible();
			me.__51.logicBlock_backgroundcolor();
			me.__55.logicBlock_visible();
			me.__54.logicBlock_visible();
			me.__53.logicBlock_textcolor();
			me.__52.logicBlock_visible();
			me.__50.logicBlock_visible();
			me.__45.logicBlock_backgroundcolor();
			me.__48.logicBlock_visible();
			me.__47.logicBlock_visible();
			me.__46.logicBlock_textcolor();
			me.__40.logicBlock_backgroundcolor();
			me.__43.logicBlock_visible();
			me.__42.logicBlock_visible();
			me.__41.logicBlock_textcolor();
			me.__35.logicBlock_backgroundcolor();
			me.__38.logicBlock_visible();
			me.__37.logicBlock_visible();
			me.__36.logicBlock_textcolor();
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
			me._timer_1.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('대상지로고')) {
				for(var i = 0; i < hotspotTemplates['대상지로고'].length; i++) {
					hotspotTemplates['대상지로고'][i].ggEvent_configloaded();
				}
			}
			me.__59.logicBlock_position();
			me.__79.logicBlock_bordercolor();
			me.__76.logicBlock_bordercolor();
			me.__73.logicBlock_bordercolor();
			me.__70.logicBlock_bordercolor();
			me._image_2.logicBlock_position();
			me._image_2.logicBlock_angle();
			me.__33.logicBlock_visible();
			me.__51.logicBlock_backgroundcolor();
			me.__55.logicBlock_visible();
			me.__54.logicBlock_visible();
			me.__53.logicBlock_textcolor();
			me.__52.logicBlock_visible();
			me.__45.logicBlock_backgroundcolor();
			me.__48.logicBlock_visible();
			me.__47.logicBlock_visible();
			me.__46.logicBlock_textcolor();
			me.__40.logicBlock_backgroundcolor();
			me.__43.logicBlock_visible();
			me.__42.logicBlock_visible();
			me.__41.logicBlock_textcolor();
			me.__35.logicBlock_backgroundcolor();
			me.__38.logicBlock_visible();
			me.__37.logicBlock_visible();
			me.__36.logicBlock_textcolor();
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
			me.__58.logicBlock_position();
			me.__58.logicBlock_size();
			me.__59.logicBlock_position();
			me.__78.logicBlock_position();
			me.__80.logicBlock_position();
			me.__75.logicBlock_position();
			me.__77.logicBlock_position();
			me.__72.logicBlock_position();
			me.__74.logicBlock_position();
			me.__69.logicBlock_position();
			me.__71.logicBlock_position();
			me.__66.logicBlock_position();
			me.__68.logicBlock_position();
			me.__63.logicBlock_position();
			me.__65.logicBlock_position();
			me.__60.logicBlock_position();
			me.__62.logicBlock_position();
			me.__56.logicBlock_visible();
			me.__33.logicBlock_visible();
			me.__m15.logicBlock_size();
			me.__m15.logicBlock_visible();
			me.__m.logicBlock_scaling();
			me.__m.logicBlock_visible();
			me.__22.logicBlock_position();
			me.__22.logicBlock_scaling();
			me.__18.logicBlock_position();
			me.__18.logicBlock_size();
			me.__20.logicBlock_visible();
			me._close0.logicBlock_position();
			me._close0.logicBlock_size();
			me.__19.logicBlock_visible();
			me._close.logicBlock_position();
			me._close.logicBlock_size();
		});
		player.addListener('varchanged_vis_around', function(event) {
			me.__40.logicBlock_backgroundcolor();
			me.__43.logicBlock_visible();
			me.__42.logicBlock_visible();
			me.__41.logicBlock_textcolor();
			me.__m3.logicBlock_backgroundcolor();
			me.__m6.logicBlock_visible();
			me.__m5.logicBlock_visible();
			me.__m4.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_business', function(event) {
			me.__45.logicBlock_backgroundcolor();
			me.__48.logicBlock_visible();
			me.__47.logicBlock_visible();
			me.__46.logicBlock_textcolor();
			me.__m7.logicBlock_backgroundcolor();
			me.__m10.logicBlock_visible();
			me.__m9.logicBlock_visible();
			me.__m8.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_copy', function(event) {
			me.__51.logicBlock_backgroundcolor();
			me.__55.logicBlock_visible();
			me.__54.logicBlock_visible();
			me.__53.logicBlock_textcolor();
			me.__52.logicBlock_visible();
			me.__m11.logicBlock_backgroundcolor();
			me.__m14.logicBlock_visible();
			me.__m13.logicBlock_visible();
			me.__m12.logicBlock_textcolor();
			me._m4.logicBlock_visible();
		});
		player.addListener('varchanged_vis_home', function(event) {
			me.__35.logicBlock_backgroundcolor();
			me.__38.logicBlock_visible();
			me.__37.logicBlock_visible();
			me.__36.logicBlock_textcolor();
			me._m0.logicBlock_backgroundcolor();
			me.__m2.logicBlock_visible();
			me.__m1.logicBlock_visible();
			me.__m0.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_leftmenu', function(event) {
			me.__59.logicBlock_position();
		});
		player.addListener('varchanged_vis_school', function(event) {
			me.__73.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_shop', function(event) {
			me.__76.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_sidemenu', function(event) {
			me._image_2.logicBlock_position();
			me._image_2.logicBlock_angle();
			me.__33.logicBlock_visible();
			me.__m16.logicBlock_angle();
			me._image_2m.logicBlock_position();
			me.__m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sitelogo', function(event) {
			if (hotspotTemplates.hasOwnProperty('대상지로고')) {
				for(var i = 0; i < hotspotTemplates['대상지로고'].length; i++) {
					hotspotTemplates['대상지로고'][i].ggEvent_varchanged_vis_sitelogo();
				}
			}
		});
		player.addListener('varchanged_vis_trafficborder', function(event) {
			me.__70.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_tree', function(event) {
			me.__79.logicBlock_bordercolor();
		});
	};
	function SkinHotspotClass__(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__=document.createElement('div');
		el.ggId="\uc218\uc644\ud589\uc815\ubcf5\uc9c0\uc13c\ud130";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs=basePath + 'images/image_12.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me._external_2.appendChild(me._image_12);
		me.__.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__;
	};
	function SkinHotspotClass__0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__0=document.createElement('div');
		el.ggId="\ub86f\ub370\ub9c8\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__0.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_0']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_0']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_20=document.createElement('div');
		els=me._external_20__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_20.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_20.ggSubElement.setAttribute('alt', player._(me._external_20.ggAltText));
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_20.ggText_untranslated = img;
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_20.ggSubElement.style.width = '0px';
			me._external_20.ggSubElement.style.height = '0px';
			me._external_20.ggSubElement.src='';
			me._external_20.ggSubElement.src=me._external_20.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_20.ggText != player._(me._external_20.ggText_untranslated)) {
				me._external_20.ggText = player._(me._external_20.ggText_untranslated);
				me._external_20.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_20.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_20.clientWidth;
			var parentHeight = me._external_20.clientHeight;
			var img = me._external_20__img;
			var aspectRatioDiv = me._external_20.clientWidth / me._external_20.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_20.ggScrollbars || currentWidth < me._external_20.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_20.ggScrollbars || currentHeight < me._external_20.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_120=document.createElement('div');
		els=me._image_120__img=document.createElement('img');
		els.className='ggskin ggskin_image_120';
		hs='data:image/png;base64,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'+
			'yHj2b8BDsWR8f9AFV2QiYk9DPwx8hvxbChG5vJ0jnwcfrkSQQYV6Zv2lE6np5Nfs/gygh1sil5cs+SX4vzJ4a7igVTzMeqUTqQXkl+L+KBXqEYrImJEjv8vb48XW7A9a1cKsV0+o/SnwIKCh/yJm6QR+AHyzZ9vKqql6mPVKJ1KN5APtYWDhqDRCRIKyh/yy1j+IJeMnR6MBoxZm/aUTqaXAOuA+oHl0WyMiHrUCz5DflHfbKLdlbIRZf+lEqhlYC6wCVlPG2mkiUhFHyC/Qugl4IZaMt45yewYYc2E2WDqRugJ4H7AYuLrnz5XAdGAKEAW0lpDIyHQAGfJ75Z4CTgDv9vzZCfw6loz/dvSaV9qYDzMZ9wb/A9MkW6kIDZEQESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMY'+
			'LCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQI'+
			'CjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIyjMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAgKMxExgsJMRIygMBMRIy'+
			'jMRMQICjMRMYLCTESMoDATESMozETECAozETGCwkxEjKAwExEjKMxExAjh0W6AGCUELAPWAEuBawuc8ytgH7AN2AhsBXLVaZ6YzHJdd7TbIOPfbOAR4A+A9/i89jfAD4EngMMBt0suIwozGYlpwNeAh4HoCMvKAE8CXwZOj7AsuQwpzKRc95PvTU0PuNxTwKPA+oDLFcPpBYD4FQb+N/mwCTrI6Cnzxz116JmueKaemfgRIx9idxc9w8nhtB7DaT1K7ugZ3NNtuJ3dAFi1EaypDYRmTcNunondPAPsYf8/3QCsA9LBfQtiKoWZeBUGfgLcU+hDtzNDdvMeslv24nZ0eirQqq8lvGIB4ZULsWqLPnJ7FvgIkC2jzXIZUZiJV/8H+GyhD5xdB8ls2IrbfrGsgq0JdUTvWoZ9/Zxip/wN8IdlFS6XDYWZeLGO/HOsgXIu'+
			'mee2km3ZG0gl4eULiN61DEJWoY8/DvxDIBWJkRRmUso0YA+DH/bnXLrWv4qz62CgldmL5lCzbnWhQDsDLAROBlqhGENvM6WUJAXeWmae3xZ4kEHPLevzWwt9NBX4s8ArFGMozGQ4VwGfGnzQ2XmQ7JY9Fas0u2Uvzs6CQflQT5tEhlCYyXD+EIj0P+B2dpPZULDnFKjMhq19Qzr6iQCfq3jlMi4pzKSYEPDA4IPZzW/hXijvraUf7oWLZF9/q9BHD6B/t1KA/lFIMUsZPGncyZHdEsybSy+yLXvBGbKgxmzyK3OIDKAwk2JuHnzAaT3meUBsENyOTpzWY4U++nDVGiHjhsJMirlh8AGn9WjVG1GkzqXVboeMfQozKWbh4AO5o2eq3ogidS6odjtk7FOYSTEzBh9wT7VVvRFF6hzSNhGFmRTTMPiA2zVkqETFuZ2ZQo'+
			'eHtE1EYSYiRlCYSTHtgw9YNZFC51VUkaWBhrRNRGEmxQwZE2FNn1j1RhSps+B4Dbm8KcykmCGTL0Mzp1a9EUXqrN7IXRk3FGZSzPbBB+zmmVVvRJE6t1W7HTL2KcykmH8dfMBunoFVX1u1Blj1tfl9Aob6RdUaIeOGwkyK2UZ+g95L7BDh5dUbrxpevqDQhieHye+CLjKAwkyKyQFPDT4Y/uB7sSbUVbxya0Id4Q8OmYRAT5uGzD4XUZjJcJ4gv9N4H6s2QvTuyi9aEb17WaFhGZmeNokMoTCT4RwBnhx80F48h/CKgr2mQIRXLMBeXHCnpr8jf5spMoQ2NJFSppEfCjFtwNHqb2hymvwE89OBVijGUM9MSjkNPDrkaMiiZt3qQF8IhJcvKBZkAJ9HQSbDUM9MvCq+CfCvD5B5flvZy2lbE2qJ3rkM+31zi53ynWJ1'+
			'i/RSmIlXUeAfgXsKfeh2Zshu3kN2y17Pq9Fa9bWEVywgvHJhsTmYAM8Cv8+gFxEigynMxI8Y8E/A7xU9w8nhtB7FaT1G7shp3NPtfcv4WLVRrGkNhGZNw26ekR/dP3QcWX/PAfcD6eC+BTGVwkz8igDfovK3fX8D/Beg+ouoybikFwDiVzf5/TQ/BpyqQPmngI/31KEgE88UZlKuHwPvJf9iIIjnWZmest4L/EMA5cllRreZEoTZwCPkN+id7fPaw+SnKD2BBsTKCCjMJEgh8hv03kx+q7pryYfbhJ7PL5APrH3klxj6V/KTxjXXUkZMYSYiRtAzMxExgsJMRIygMBMRI/x/W3rVz7BngcUAAAAASUVORK5CYII=';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_120.ggUpdatePosition=function (useTransition) {
		}
		me._external_20.appendChild(me._image_120);
		me.__0.appendChild(me._external_20);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_20.style.width=hotspot.customimagewidth + 'px';
			me._external_20.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_20.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_20.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__0;
	};
	function SkinHotspotClass__1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__1=document.createElement('div');
		el.ggId="\uc218\uc644\ud558\ub098\uc911\ud559\uad50";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__1.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_21=document.createElement('div');
		els=me._external_21__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_21.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_21.ggSubElement.setAttribute('alt', player._(me._external_21.ggAltText));
			me._external_21.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_21.ggText_untranslated = img;
			me._external_21.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_21.ggSubElement.style.width = '0px';
			me._external_21.ggSubElement.style.height = '0px';
			me._external_21.ggSubElement.src='';
			me._external_21.ggSubElement.src=me._external_21.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_21.ggText != player._(me._external_21.ggText_untranslated)) {
				me._external_21.ggText = player._(me._external_21.ggText_untranslated);
				me._external_21.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_21.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_21.clientWidth;
			var parentHeight = me._external_21.clientHeight;
			var img = me._external_21__img;
			var aspectRatioDiv = me._external_21.clientWidth / me._external_21.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_21.ggScrollbars || currentWidth < me._external_21.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_21.ggScrollbars || currentHeight < me._external_21.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_121=document.createElement('div');
		els=me._image_121__img=document.createElement('img');
		els.className='ggskin ggskin_image_121';
		hs=basePath + 'images/image_121.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_121.ggUpdatePosition=function (useTransition) {
		}
		me._external_21.appendChild(me._image_121);
		me.__1.appendChild(me._external_21);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_21.style.width=hotspot.customimagewidth + 'px';
			me._external_21.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_21.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_21.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__1;
	};
	function SkinHotspotClass__2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__2=document.createElement('div');
		el.ggId="\uad11\uc8fc\uc218\uc644\ubcd1\uc6d0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__2.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_2']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_2']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_22=document.createElement('div');
		els=me._external_22__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_22.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_22.ggSubElement.setAttribute('alt', player._(me._external_22.ggAltText));
			me._external_22.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_22.ggText_untranslated = img;
			me._external_22.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_22.ggSubElement.style.width = '0px';
			me._external_22.ggSubElement.style.height = '0px';
			me._external_22.ggSubElement.src='';
			me._external_22.ggSubElement.src=me._external_22.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_22.ggText != player._(me._external_22.ggText_untranslated)) {
				me._external_22.ggText = player._(me._external_22.ggText_untranslated);
				me._external_22.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_22.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_22.clientWidth;
			var parentHeight = me._external_22.clientHeight;
			var img = me._external_22__img;
			var aspectRatioDiv = me._external_22.clientWidth / me._external_22.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_22.ggScrollbars || currentWidth < me._external_22.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_22.ggScrollbars || currentHeight < me._external_22.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_122=document.createElement('div');
		els=me._image_122__img=document.createElement('img');
		els.className='ggskin ggskin_image_122';
		hs=basePath + 'images/image_122.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_122.ggUpdatePosition=function (useTransition) {
		}
		me._external_22.appendChild(me._image_122);
		me.__2.appendChild(me._external_22);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_22.style.width=hotspot.customimagewidth + 'px';
			me._external_22.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_22.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_22.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__2;
	};
	function SkinHotspotClass__3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__3=document.createElement('div');
		el.ggId="\uace0\ub798\uc2e4\uacf5\uc6d0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__3.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_3']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_3']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_23=document.createElement('div');
		els=me._external_23__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_23.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_23.ggSubElement.setAttribute('alt', player._(me._external_23.ggAltText));
			me._external_23.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_23.ggText_untranslated = img;
			me._external_23.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_23.ggSubElement.style.width = '0px';
			me._external_23.ggSubElement.style.height = '0px';
			me._external_23.ggSubElement.src='';
			me._external_23.ggSubElement.src=me._external_23.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_23.ggText != player._(me._external_23.ggText_untranslated)) {
				me._external_23.ggText = player._(me._external_23.ggText_untranslated);
				me._external_23.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_23.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_23.clientWidth;
			var parentHeight = me._external_23.clientHeight;
			var img = me._external_23__img;
			var aspectRatioDiv = me._external_23.clientWidth / me._external_23.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_23.ggScrollbars || currentWidth < me._external_23.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_23.ggScrollbars || currentHeight < me._external_23.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_123=document.createElement('div');
		els=me._image_123__img=document.createElement('img');
		els.className='ggskin ggskin_image_123';
		hs='data:image/png;base64,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'+
			'AAAElFTkSuQmCC';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_123.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_123.ggUpdatePosition=function (useTransition) {
		}
		me._external_23.appendChild(me._image_123);
		me.__3.appendChild(me._external_23);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_23.style.width=hotspot.customimagewidth + 'px';
			me._external_23.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_23.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_23.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__3;
	};
	function SkinHotspotClass__10(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__10=document.createElement('div');
		el.ggId="\uc218\ubb381\uacf5\uc6d0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__10.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_10']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_10']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_24=document.createElement('div');
		els=me._external_24__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_24.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_24.ggSubElement.setAttribute('alt', player._(me._external_24.ggAltText));
			me._external_24.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_24.ggText_untranslated = img;
			me._external_24.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_24.ggSubElement.style.width = '0px';
			me._external_24.ggSubElement.style.height = '0px';
			me._external_24.ggSubElement.src='';
			me._external_24.ggSubElement.src=me._external_24.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_24.ggText != player._(me._external_24.ggText_untranslated)) {
				me._external_24.ggText = player._(me._external_24.ggText_untranslated);
				me._external_24.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_24.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_24.clientWidth;
			var parentHeight = me._external_24.clientHeight;
			var img = me._external_24__img;
			var aspectRatioDiv = me._external_24.clientWidth / me._external_24.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_24.ggScrollbars || currentWidth < me._external_24.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_24.ggScrollbars || currentHeight < me._external_24.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_124=document.createElement('div');
		els=me._image_124__img=document.createElement('img');
		els.className='ggskin ggskin_image_124';
		hs=basePath + 'images/image_124.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_124.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_124.ggUpdatePosition=function (useTransition) {
		}
		me._external_24.appendChild(me._image_124);
		me.__10.appendChild(me._external_24);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_24.style.width=hotspot.customimagewidth + 'px';
			me._external_24.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_24.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_24.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__10;
	};
	function SkinHotspotClass__4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__4=document.createElement('div');
		el.ggId="\uc601\uc0b0\uac15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__4.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_4']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_4']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_25=document.createElement('div');
		els=me._external_25__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_25.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_25.ggSubElement.setAttribute('alt', player._(me._external_25.ggAltText));
			me._external_25.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_25.ggText_untranslated = img;
			me._external_25.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_25.ggSubElement.style.width = '0px';
			me._external_25.ggSubElement.style.height = '0px';
			me._external_25.ggSubElement.src='';
			me._external_25.ggSubElement.src=me._external_25.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_25.ggText != player._(me._external_25.ggText_untranslated)) {
				me._external_25.ggText = player._(me._external_25.ggText_untranslated);
				me._external_25.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_25.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_25.clientWidth;
			var parentHeight = me._external_25.clientHeight;
			var img = me._external_25__img;
			var aspectRatioDiv = me._external_25.clientWidth / me._external_25.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_25.ggScrollbars || currentWidth < me._external_25.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_25.ggScrollbars || currentHeight < me._external_25.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_125=document.createElement('div');
		els=me._image_125__img=document.createElement('img');
		els.className='ggskin ggskin_image_125';
		hs=basePath + 'images/image_125.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_125.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_125.ggUpdatePosition=function (useTransition) {
		}
		me._external_25.appendChild(me._image_125);
		me.__4.appendChild(me._external_25);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_25.style.width=hotspot.customimagewidth + 'px';
			me._external_25.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_25.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_25.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__4;
	};
	function SkinHotspotClass__5(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__5=document.createElement('div');
		el.ggId="\uc218\uc644\uc9c0\ud558\ucc28\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__5.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_5']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_5']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_26=document.createElement('div');
		els=me._external_26__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_26.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_26.ggSubElement.setAttribute('alt', player._(me._external_26.ggAltText));
			me._external_26.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_26.ggText_untranslated = img;
			me._external_26.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_26.ggSubElement.style.width = '0px';
			me._external_26.ggSubElement.style.height = '0px';
			me._external_26.ggSubElement.src='';
			me._external_26.ggSubElement.src=me._external_26.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_26.ggText != player._(me._external_26.ggText_untranslated)) {
				me._external_26.ggText = player._(me._external_26.ggText_untranslated);
				me._external_26.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_26.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_26.clientWidth;
			var parentHeight = me._external_26.clientHeight;
			var img = me._external_26__img;
			var aspectRatioDiv = me._external_26.clientWidth / me._external_26.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_26.ggScrollbars || currentWidth < me._external_26.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_26.ggScrollbars || currentHeight < me._external_26.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_126=document.createElement('div');
		els=me._image_126__img=document.createElement('img');
		els.className='ggskin ggskin_image_126';
		hs=basePath + 'images/image_126.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_126.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_126.ggUpdatePosition=function (useTransition) {
		}
		me._external_26.appendChild(me._image_126);
		me.__5.appendChild(me._external_26);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_26.style.width=hotspot.customimagewidth + 'px';
			me._external_26.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_26.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_26.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__5;
	};
	function SkinHotspotClass__6(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__6=document.createElement('div');
		el.ggId="\uc2e0\ucc3d\ucd08\ub4f1\ud559\uad50";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__6.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__6.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__6.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_6']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__6.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_6']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_27=document.createElement('div');
		els=me._external_27__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_27.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_27.ggSubElement.setAttribute('alt', player._(me._external_27.ggAltText));
			me._external_27.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_27.ggText_untranslated = img;
			me._external_27.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_27.ggSubElement.style.width = '0px';
			me._external_27.ggSubElement.style.height = '0px';
			me._external_27.ggSubElement.src='';
			me._external_27.ggSubElement.src=me._external_27.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_27.ggText != player._(me._external_27.ggText_untranslated)) {
				me._external_27.ggText = player._(me._external_27.ggText_untranslated);
				me._external_27.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_27.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_27.clientWidth;
			var parentHeight = me._external_27.clientHeight;
			var img = me._external_27__img;
			var aspectRatioDiv = me._external_27.clientWidth / me._external_27.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_27.ggScrollbars || currentWidth < me._external_27.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_27.ggScrollbars || currentHeight < me._external_27.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_127=document.createElement('div');
		els=me._image_127__img=document.createElement('img');
		els.className='ggskin ggskin_image_127';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_127.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_127.ggUpdatePosition=function (useTransition) {
		}
		me._external_27.appendChild(me._image_127);
		me.__6.appendChild(me._external_27);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_27.style.width=hotspot.customimagewidth + 'px';
			me._external_27.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_27.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_27.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__6;
	};
	function SkinHotspotClass__7(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__7=document.createElement('div');
		el.ggId="\uad11\uc8fc\uc9c4\ud765\uace0\ub4f1\ud559\uad50";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__7.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_7']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_7']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_28=document.createElement('div');
		els=me._external_28__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_28.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_28.ggSubElement.setAttribute('alt', player._(me._external_28.ggAltText));
			me._external_28.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_28.ggText_untranslated = img;
			me._external_28.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_28.ggSubElement.style.width = '0px';
			me._external_28.ggSubElement.style.height = '0px';
			me._external_28.ggSubElement.src='';
			me._external_28.ggSubElement.src=me._external_28.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_28.ggText != player._(me._external_28.ggText_untranslated)) {
				me._external_28.ggText = player._(me._external_28.ggText_untranslated);
				me._external_28.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_28.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_28.clientWidth;
			var parentHeight = me._external_28.clientHeight;
			var img = me._external_28__img;
			var aspectRatioDiv = me._external_28.clientWidth / me._external_28.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_28.ggScrollbars || currentWidth < me._external_28.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_28.ggScrollbars || currentHeight < me._external_28.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_128=document.createElement('div');
		els=me._image_128__img=document.createElement('img');
		els.className='ggskin ggskin_image_128';
		hs=basePath + 'images/image_128.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_128.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_128.ggUpdatePosition=function (useTransition) {
		}
		me._external_28.appendChild(me._image_128);
		me.__7.appendChild(me._external_28);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_28.style.width=hotspot.customimagewidth + 'px';
			me._external_28.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_28.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_28.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__7;
	};
	function SkinHotspotClass__8(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__8=document.createElement('div');
		el.ggId="\uc218\ubb38\ucd08\ub4f1\ud559\uad50";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__8.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__8.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__8.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_8']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__8.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_8']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_29=document.createElement('div');
		els=me._external_29__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_29.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_29.ggSubElement.setAttribute('alt', player._(me._external_29.ggAltText));
			me._external_29.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_29.ggText_untranslated = img;
			me._external_29.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_29.ggSubElement.style.width = '0px';
			me._external_29.ggSubElement.style.height = '0px';
			me._external_29.ggSubElement.src='';
			me._external_29.ggSubElement.src=me._external_29.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_29.ggText != player._(me._external_29.ggText_untranslated)) {
				me._external_29.ggText = player._(me._external_29.ggText_untranslated);
				me._external_29.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_29.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_29.clientWidth;
			var parentHeight = me._external_29.clientHeight;
			var img = me._external_29__img;
			var aspectRatioDiv = me._external_29.clientWidth / me._external_29.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_29.ggScrollbars || currentWidth < me._external_29.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_29.ggScrollbars || currentHeight < me._external_29.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_129=document.createElement('div');
		els=me._image_129__img=document.createElement('img');
		els.className='ggskin ggskin_image_129';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_129.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_129.ggUpdatePosition=function (useTransition) {
		}
		me._external_29.appendChild(me._image_129);
		me.__8.appendChild(me._external_29);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_29.style.width=hotspot.customimagewidth + 'px';
			me._external_29.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_29.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_29.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__8;
	};
	function SkinHotspotClass__9(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uad11\uc8fc\ubcf4\uac74\ub300\ud559\uad50";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__9.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__9.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__9.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_9']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__9.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_9']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_210=document.createElement('div');
		els=me._external_210__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_210.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_210.ggSubElement.setAttribute('alt', player._(me._external_210.ggAltText));
			me._external_210.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_210.ggText_untranslated = img;
			me._external_210.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_210.ggSubElement.style.width = '0px';
			me._external_210.ggSubElement.style.height = '0px';
			me._external_210.ggSubElement.src='';
			me._external_210.ggSubElement.src=me._external_210.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_210.ggText != player._(me._external_210.ggText_untranslated)) {
				me._external_210.ggText = player._(me._external_210.ggText_untranslated);
				me._external_210.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_210.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_210.clientWidth;
			var parentHeight = me._external_210.clientHeight;
			var img = me._external_210__img;
			var aspectRatioDiv = me._external_210.clientWidth / me._external_210.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_210.ggScrollbars || currentWidth < me._external_210.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_210.ggScrollbars || currentHeight < me._external_210.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1210=document.createElement('div');
		els=me._image_1210__img=document.createElement('img');
		els.className='ggskin ggskin_image_1210';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1210.ggUpdatePosition=function (useTransition) {
		}
		me._external_210.appendChild(me._image_1210);
		me.__9.appendChild(me._external_210);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_210.style.width=hotspot.customimagewidth + 'px';
			me._external_210.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_210.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_210.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__9;
	};
	function SkinHotspotClass__11(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__11=document.createElement('div');
		el.ggId="\uc804\ub0a8\uacf5\uc5c5\uace0\ub4f1\ud559\uad50";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__11.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_11']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_11']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_211=document.createElement('div');
		els=me._external_211__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_211.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_211.ggSubElement.setAttribute('alt', player._(me._external_211.ggAltText));
			me._external_211.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_211.ggText_untranslated = img;
			me._external_211.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_211.ggSubElement.style.width = '0px';
			me._external_211.ggSubElement.style.height = '0px';
			me._external_211.ggSubElement.src='';
			me._external_211.ggSubElement.src=me._external_211.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_211.ggText != player._(me._external_211.ggText_untranslated)) {
				me._external_211.ggText = player._(me._external_211.ggText_untranslated);
				me._external_211.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_211.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_211.clientWidth;
			var parentHeight = me._external_211.clientHeight;
			var img = me._external_211__img;
			var aspectRatioDiv = me._external_211.clientWidth / me._external_211.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_211.ggScrollbars || currentWidth < me._external_211.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_211.ggScrollbars || currentHeight < me._external_211.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1211=document.createElement('div');
		els=me._image_1211__img=document.createElement('img');
		els.className='ggskin ggskin_image_1211';
		hs=basePath + 'images/image_1211.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1211.ggUpdatePosition=function (useTransition) {
		}
		me._external_211.appendChild(me._image_1211);
		me.__11.appendChild(me._external_211);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_211.style.width=hotspot.customimagewidth + 'px';
			me._external_211.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_211.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_211.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__11;
	};
	function SkinHotspotClass__12(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__12=document.createElement('div');
		el.ggId="\uc2e0\ucc3d\uc911\ud559\uad50";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__12.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_12']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_12']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_212=document.createElement('div');
		els=me._external_212__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_212.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_212.ggSubElement.setAttribute('alt', player._(me._external_212.ggAltText));
			me._external_212.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_212.ggText_untranslated = img;
			me._external_212.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_212.ggSubElement.style.width = '0px';
			me._external_212.ggSubElement.style.height = '0px';
			me._external_212.ggSubElement.src='';
			me._external_212.ggSubElement.src=me._external_212.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_212.ggText != player._(me._external_212.ggText_untranslated)) {
				me._external_212.ggText = player._(me._external_212.ggText_untranslated);
				me._external_212.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_212.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_212.clientWidth;
			var parentHeight = me._external_212.clientHeight;
			var img = me._external_212__img;
			var aspectRatioDiv = me._external_212.clientWidth / me._external_212.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_212.ggScrollbars || currentWidth < me._external_212.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_212.ggScrollbars || currentHeight < me._external_212.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1212=document.createElement('div');
		els=me._image_1212__img=document.createElement('img');
		els.className='ggskin ggskin_image_1212';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1212.ggUpdatePosition=function (useTransition) {
		}
		me._external_212.appendChild(me._image_1212);
		me.__12.appendChild(me._external_212);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_212.style.width=hotspot.customimagewidth + 'px';
			me._external_212.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_212.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_212.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__12;
	};
	function SkinHotspotClass_ks(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ks=document.createElement('div');
		el.ggId="KS\ubcd1\uc6d0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ks.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ks.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ks.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ks.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ks']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ks.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ks']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ks.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_213=document.createElement('div');
		els=me._external_213__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_213.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_213.ggSubElement.setAttribute('alt', player._(me._external_213.ggAltText));
			me._external_213.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_213.ggText_untranslated = img;
			me._external_213.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_213.ggSubElement.style.width = '0px';
			me._external_213.ggSubElement.style.height = '0px';
			me._external_213.ggSubElement.src='';
			me._external_213.ggSubElement.src=me._external_213.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_213.ggText != player._(me._external_213.ggText_untranslated)) {
				me._external_213.ggText = player._(me._external_213.ggText_untranslated);
				me._external_213.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_213.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_213.clientWidth;
			var parentHeight = me._external_213.clientHeight;
			var img = me._external_213__img;
			var aspectRatioDiv = me._external_213.clientWidth / me._external_213.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_213.ggScrollbars || currentWidth < me._external_213.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_213.ggScrollbars || currentHeight < me._external_213.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1213=document.createElement('div');
		els=me._image_1213__img=document.createElement('img');
		els.className='ggskin ggskin_image_1213';
		hs='data:image/png;base64,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'+
			'0hWeCoUFAAAAAElFTkSuQmCC';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1213.ggUpdatePosition=function (useTransition) {
		}
		me._external_213.appendChild(me._image_1213);
		me._ks.appendChild(me._external_213);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_213.style.width=hotspot.customimagewidth + 'px';
			me._external_213.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_213.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_213.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me._ks;
	};
	function SkinHotspotClass__13(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__13=document.createElement('div');
		el.ggId="\ud55c\ub4ec\uc2a4\ud06c\ub9b0\uace8\ud504";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__13.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__13.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__13.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_13']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__13.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_13']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_214=document.createElement('div');
		els=me._external_214__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_214.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_214.ggSubElement.setAttribute('alt', player._(me._external_214.ggAltText));
			me._external_214.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_214.ggText_untranslated = img;
			me._external_214.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_214.ggSubElement.style.width = '0px';
			me._external_214.ggSubElement.style.height = '0px';
			me._external_214.ggSubElement.src='';
			me._external_214.ggSubElement.src=me._external_214.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_214.ggText != player._(me._external_214.ggText_untranslated)) {
				me._external_214.ggText = player._(me._external_214.ggText_untranslated);
				me._external_214.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((110px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_214.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_214.clientWidth;
			var parentHeight = me._external_214.clientHeight;
			var img = me._external_214__img;
			var aspectRatioDiv = me._external_214.clientWidth / me._external_214.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_214.ggScrollbars || currentWidth < me._external_214.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_214.ggScrollbars || currentHeight < me._external_214.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1214=document.createElement('div');
		els=me._image_1214__img=document.createElement('img');
		els.className='ggskin ggskin_image_1214';
		hs='data:image/png;base64,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'+
			'xw2QOkXyIan04mRD4BLKhIJ0REalc7mS1nfxqORY5VogMVC5DBEtH45cAa4BZgXmV7IyJStXYDjwPrwrHIlgr3pToCZLBEND4PuB64EliBwd4jIiJ14iCZjfxeBNaHY5HdFe7PEFUXIMMlovHzgHcDi4B39v2aAUwDJgMhQHXhRaTWdAFJ4C3gOHAUeKPv13bglXAs8mblupdf1QeISAUN/59DBdlEBtF0WhERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBER'+
			'MaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIw'+
			'oQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESMKEBERMaIAERERIwoQERExogAR'+
			'EREjChARETGiABERESMKEBERMaIAERERIwoQERExogAREREjChARETGiABERESOBSndApMr4gCXANVm+6wa6gA7gNWAL8CywGUiXp3si1cNyHKfSfRCpBq3AXcCHgXcUeO4fgUeAB8iEi8iYoACRsW4q8LfAJ4BQkW0lgYeArwAnimxLpOopQGQsu5XMU8M0j9s9DtwNrPO4XZGqokF0GYsCwPfI3OC9Dg/62ny07xoaZ5S6pScQGWvCZILjxpxH2Gns3Yexdx8ifegkzolOnO5eAKzGINaU8fhmT8U/bxb+eTPBP+rPYU8Ca4CEd38EkeqgAJGxJAD8HLgp25dOd5LUxnZSL+/C6ep21aDV3Ehg2XwCyxdgNeYcQnkC+HMgZdBnkaqlAJGx5PvAndm+sHfsJ/nkZpwz54watsY1EVq9BP8lc3Id8iDwaaPGRaqUAk'+
			'TGijVkxiWGSjskn9pMatMuTy4SWDqf0Ool4LOyfX0b8M+eXEikCihAZCyYCrQzfMA87dCz7nnsHfs9vZh/4Rwa1qzIFiIngQXAMU8vKFIhmoUlY0GMLLOtkk9v8Tw8oO912NObs301Bfg7zy8oUiEKEKl35wMfH/6hvX0/qZfbS3bR1Mu7sLdnDaeP9fVJpOYpQKTefRoIDv7A6e4l+WTWJwRPJZ/cPDD9d5Ag8Jclv7hIGShApJ75gNuHf5ja+Aecs2azrQrhnD1H6qU/ZPvqdvT/ntQB/Ucs9exyhhdGtNOkXvZmxpUbqU27wB5RqLeVTMVfkZqmAJF6du3wD+zdh10vEvSC09WNvftwtq/eW7ZOiJSIAkTq2WXDP7B3Hyp7J3Jc8/Jy90PEawoQqWcLhn+QPnSy7J3Icc355e6HiNcUIFLPZg7/wDneWfZO5Ljm'+
			'iL6J1BoFiNSz8cM/cHpGTKstOac7me3jEX0TqTUKEBERMaIAkXp2ZvgHVkMw23EllaPM+4i+idQaBYjUsxHzZ61pE8reiRzXzDq3V6SWKECkno0oduWbNaXsnchxzfKtZhQpEQWI1LOtwz/wz5tV9k7kuOaWcvdDxGsKEKln/z78A/+8mVjNjWXrgNXcmNk3faTflK0TIiWiAJF6tgX445BP/D4CS8u3hi+wdD74R/xv1gGUvhywSIkpQKSepYGHh38YuOJdWOOaSn5xa1wTgStGLIanr08jKiyK1BoFiNS7B4AhK/msxiChG0tfDDd045JsU3iTfX0SqXkKEKl3B4GHhn/oXzSHwLKsTweeCCybj3/RnGxf/ZjMKyyRmmc5jlPpPoiU2lQy02anDvk07dCz7nnP90X3L5xDw5oV4LOGf3WCTBHFE55eUKRC9AQiY8'+
			'EJ4O4Rn/osGtas8HRQPbB0fq7wAPgMCg+pI3oCkbHk+8Cd2b6wX9lH8uktxlvdWuMaCd2wBP+723Id8oNc1xapVQoQGUtCwL8AN2X70ulOktrYTurlXa53LbSaGwksm09g+YJcNa8AngD+gmGD+SK1TgEiY00Y+BnwgZxH2Gns3Yewdx8mffAEzokzAyXZrcYQ1tTx+GZPxT9vZmaV+ch1HoM9BdwKJLz7I4hUBwWIjEVB4DuU/pXSg8D/AMq/CYlIGWgQXcaiXuDTwIeA4yVo/zhwW981FB5StxQgMpY9CryLzOC6F+MTyb623gX8swftiVQ1vcISyWgF7gJu7/vnQnSQKU/yAFokKGOIAkRkKB+wBLgWuAy4iEygjOv7/iyZkHiNTLn4fydTGFG1rWTMUYCIiIgRjYGIiIgRBYiIiBhRgIiIiBEFiIiIGFGAiIiI'+
			'EQWIiIgYUYCIiIgRBYiIiBj5/2eMO5wXJNVxAAAAAElFTkSuQmCC';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 99px;';
		hs+='left : calc(50% - ((130px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((99px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1214.ggUpdatePosition=function (useTransition) {
		}
		me._external_214.appendChild(me._image_1214);
		me.__13.appendChild(me._external_214);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_214.style.width=hotspot.customimagewidth + 'px';
			me._external_214.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_214.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_214.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__13;
	};
	function SkinHotspotClass__16(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__16=document.createElement('div');
		el.ggId="\ub300\uc0c1\uc9c0\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__16.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__16.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__16.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_16']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__16.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_16']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
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
		el.ggId="Image 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_sitelogo') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_10.style.transition='left 200ms linear 0ms, top 200ms linear 0ms';
				if (me._image_10.ggCurrentLogicStatePosition == 0) {
					me._image_10.style.left='0px';
					me._image_10.style.top='-10px';
				}
				else {
					me._image_10.style.left='0px';
					me._image_10.style.top='0px';
				}
			}
		}
		me._image_10.logicBlock_position();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAA9CAYAAAAQ593DAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQG'+
			'AAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6c'+
			'wR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCa'+
			'IkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj'+
			'9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj'+
			'1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisr'+
			'kw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUO'+
			'ihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNI'+
			'Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAD2EAAA9hAag/p2kAAAW4SURBVHic7d3dj5xVHQfwzw7dQrulpW/blgUpTYDyGkENsSARvRBjuJELEhOFEG5Ro3f+Ad5pfLk1ajQx8UJv1KiJCcZSlShCgEKFpIiF8lLb0rcttGXHi98zO9NJd7vbnZ0z88zvk5zsvO3M2eT57pxznvOcM9ZsNqWLGsdaXIl1VVldlStweXV7Vcf9ier2ePUeExi7wO0LaeLUBW6fxfvV/Q+q26cx3XF/uirHqnICx6vfTfMYG/EwbMBmXFX9XI9N2gf+VdXtVWWq11OnRSje0w7I/3AUh6rHD+FImeqVV/cwjGMrpqpyNSarsln7v3ZqOytC8W5VDuLNqrytxt8wdQnDBHbgI7hGHPRT4oBvFK'+
			'xX3cyIoLypHZLXsV+7KTe0hjEMW8SBvwPXY3v1WCrrXbxWlf1VeadojRZp0MOwCjfhZtyCG0VHNQ2HabyCl/Ay/i36LgNp0MKwEbdiJ27DdbKZUyczoln1IvZhLw4XrVGH0mFYKQ7+O6uyvWRlUhH/wbNV2YszpSpSIgxb8XF8DLeLMfmUiHMlL+AZ/FOMXvVNv8IwiXvwKdzQjw9MtfAqdmOP6KAvq+UMwwbcKwJwk/nPuKY0n6bofO/GU5bpxGCvw3CZaAJ9TjSDsvObem1GNKP+KJpSH/bqjXsVhrUiAF8QI0Ip9cNh/E4E4/hS32ypYdiCh/BZMTKUUgln8Cf8yhL6Fpcahkl8CZ8WTaOUBsE5/Bm/ENNGFmWxYZjAw3gQKxb7YSn1yRnRfPqlRcyZWmgYxsS3wGNiWnNKw+A9/ARPihGpeS0kDJvwNXx0iRVL'+
			'qZTn8H1x/cacLhaGXXgCa3pWrZTKOIkf4q9zvWCuMDTwZTFSlCfLUl00xYjTz8X5ivNcKAwr8A1x5jilOtqN74rRp1ndYWjgW7i7f/VKqYin8W0d3xDd0yW+LoOQRsPd4nif1RmGB3F/P2uTUmH34/OtO60wbMOjJWqTUmGPi+N/NgyPyLlFaTStVH0RNMSSKrtK1ialwj6JqQbuk+cS0mgbw30N3FG6JikNgDsauLZ0LVIaANc2xFVqKY26tQ09uFwupRo43sCB0rVIaQAcaOD50rVIaQA838BfLOAqoJRqrIndDbHG/t8KVyalkv6ON1rTMX6q4IKvKRV0Rhz/s3OT3mo9kNKI+ZHYhei8Kdy/EWvOpDQqnsTvW3e6L+75nrgCKKW6exo/6HxgrmugvylW0E6pjp7Cd1zkGuiWBr6CL8oZrak+mvg1fmaBq2N02o'+
			'WvimUlUxpmp8S6SXvmekGuqJdGwXN6sKLe7OvExdOPYd1Sa5ZSnxzDj/VwrdVOuQp3GgZn8VvLtAp3t9yfIQ2ivu7P0G2bGHH6jFxdI5VTdOeebmvxgNjTbUMv3jClBTgiNiX5gwHY063bCrHL5wO4S+72mXpvBv/S3u3z3PwvX7jl3Ad6oziLfa/cBzotTROvaO8DfXg5PmQ5w9BpEveIZe5v6McHplp4VQRgjyX0BRaqX2HotA2fwJ24HZf3uwJpYH2AF/As/iEuLeibEmHotBK3in7GXXINp1F0QPQBnsFeBS8yKx2GbhtxG27BzbhOdsLrZAav42W8hBctU/v/UgxaGLqtwk4Rjp24EauL1igtxrTo+O4TB/8+nC5ao3kMehi6jWErru8oO7C5ZKUS4ozvfrzWUd42RCuvDFsY5nIltotm1TW4uiqTcki3l5pi'+
			'VOdgVd7Af8WBf6JgvXqiLmGYy7gYvZoS4ZjCFvFNsql6Pp3vrJjqfAjviKWEDlY/36qer6W6h2E+Y1gvgrFBhGO96MSvqx5bJ6aa1GGG7jkxZeGYmMZwTHRej4qD/4gIwFFD1LTppVEOw2KsEU2xVlkjOvITVVktOvvj1XMrcEX12GViRKzV8W89dzHva081mBYjMR+KDmjruZPiP/Xp6jWnqjJdPXeio5y8hL97pPwfMNmZ4XGsBWcAAAAASUVORK5CYII=';
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
		el.ggId="Image 11";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -20px;';
		hs+='height : 5px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_sitelogo') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_11.style.transition='transform 50ms linear 0ms';
				if (me._image_11.ggCurrentLogicStateScaling == 0) {
					me._image_11.ggParameter.sx = 1.3;
					me._image_11.ggParameter.sy = 1.3;
					me._image_11.style.transform=parameterToTransform(me._image_11.ggParameter);
					setTimeout(function() {skin.updateSize(me._image_11);}, 100);
				}
				else {
					me._image_11.ggParameter.sx = 1;
					me._image_11.ggParameter.sy = 1;
					me._image_11.style.transform=parameterToTransform(me._image_11.ggParameter);
					setTimeout(function() {skin.updateSize(me._image_11);}, 100);
				}
			}
		}
		me._image_11.logicBlock_scaling();
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._image_10.appendChild(me._image_11);
		me._external_1.appendChild(me._image_10);
		me.__16.appendChild(me._external_1);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_10.logicBlock_position();
		me._image_11.logicBlock_scaling();
			me.ggEvent_changenode=function() {
				me._image_10.logicBlock_position();
				me._image_11.logicBlock_scaling();
			};
			me.ggEvent_configloaded=function() {
				me._image_10.logicBlock_position();
				me._image_11.logicBlock_scaling();
			};
			me.ggEvent_varchanged_vis_sitelogo=function() {
				me._image_10.logicBlock_position();
				me._image_11.logicBlock_scaling();
			};
		me.ggUse3d=true;
		me.gg3dDistance=350;
			me.__div = me.__16;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='대상지로고') {
				hotspot.skinid = '대상지로고';
				hsinst = new SkinHotspotClass__16(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='한듬스크린골프') {
				hotspot.skinid = '한듬스크린골프';
				hsinst = new SkinHotspotClass__13(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='KS병원') {
				hotspot.skinid = 'KS병원';
				hsinst = new SkinHotspotClass_ks(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='신창중학교') {
				hotspot.skinid = '신창중학교';
				hsinst = new SkinHotspotClass__12(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='전남공업고등학교') {
				hotspot.skinid = '전남공업고등학교';
				hsinst = new SkinHotspotClass__11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='광주보건대학교') {
				hotspot.skinid = '광주보건대학교';
				hsinst = new SkinHotspotClass__9(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수문초등학교') {
				hotspot.skinid = '수문초등학교';
				hsinst = new SkinHotspotClass__8(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='광주진흥고등학교') {
				hotspot.skinid = '광주진흥고등학교';
				hsinst = new SkinHotspotClass__7(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='신창초등학교') {
				hotspot.skinid = '신창초등학교';
				hsinst = new SkinHotspotClass__6(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수완지하차도') {
				hotspot.skinid = '수완지하차도';
				hsinst = new SkinHotspotClass__5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='영산강') {
				hotspot.skinid = '영산강';
				hsinst = new SkinHotspotClass__4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수문1공원') {
				hotspot.skinid = '수문1공원';
				hsinst = new SkinHotspotClass__10(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='고래실공원') {
				hotspot.skinid = '고래실공원';
				hsinst = new SkinHotspotClass__3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='광주수완병원') {
				hotspot.skinid = '광주수완병원';
				hsinst = new SkinHotspotClass__2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수완하나중학교') {
				hotspot.skinid = '수완하나중학교';
				hsinst = new SkinHotspotClass__1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='롯데마트') {
				hotspot.skinid = '롯데마트';
				hsinst = new SkinHotspotClass__0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '수완행정복지센터';
				hsinst = new SkinHotspotClass__(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__50.ggUpdateConditionTimer();
		if (me.__50.ggLastIsActive!=me.__50.ggIsActive()) {
			me.__50.ggLastIsActive=me.__50.ggIsActive();
			if (me.__50.ggLastIsActive) {
				player.setVariableValue('vis_copy', false);
			} else {
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('vis_sitelogo', !player.getVariableValue('vis_sitelogo'));
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
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