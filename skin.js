// Garden Gnome Software - Skin
// Pano2VR 7.0.9/20024
// Filename: ???? ?? ??.ggsk
// Generated 2024-03-14T17:22:40

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
		el=me.__79=document.createElement('div');
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
		me.__79.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__79.logicBlock_position = function() {
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
			if (me.__79.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__79.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__79.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__79.ggCurrentLogicStatePosition == 0) {
					me.__79.style.left='0px';
					me.__79.style.top='315px';
				}
				else {
					me.__79.style.left='0px';
					me.__79.style.top='408px';
				}
			}
		}
		me.__79.logicBlock_position();
		me.__79.logicBlock_size = function() {
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
			if (me.__79.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__79.ggCurrentLogicStateSize = newLogicStateSize;
				me.__79.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__79.ggCurrentLogicStateSize == 0) {
					me.__79.style.width='82px';
					me.__79.style.height='500px';
					skin.updateSize(me.__79);
				}
				else {
					me.__79.style.width='134px';
					me.__79.style.height='608px';
					skin.updateSize(me.__79);
				}
			}
		}
		me.__79.logicBlock_size();
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		el=me.__80=document.createElement('div');
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
			if (me.__80.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__80.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__80.style.transition='left 800ms ease 0ms, top 800ms ease 0ms';
				if (me.__80.ggCurrentLogicStatePosition == 0) {
					me.__80.style.left='0%';
					me.__80.style.top='0px';
				}
				else if (me.__80.ggCurrentLogicStatePosition == 1) {
					me.__80.style.left='-20%';
					me.__80.style.top='0px';
				}
				else {
					me.__80.style.left='-200%';
					me.__80.style.top='0px';
				}
			}
		}
		me.__80.logicBlock_position();
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		el=me.__99=document.createElement('div');
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
		me.__99.ggIsActive=function() {
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
		me.__99.logicBlock_position = function() {
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
			if (me.__99.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__99.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__99.style.transition='right 0s, top 0s';
				if (me.__99.ggCurrentLogicStatePosition == 0) {
					me.__99.style.right='10px';
					me.__99.style.top='82.06%';
				}
				else {
					me.__99.style.right='0px';
					me.__99.style.top='82.06%';
				}
			}
		}
		me.__99.logicBlock_position();
		me.__99.ggUpdatePosition=function (useTransition) {
		}
		el=me.__101=document.createElement('div');
		els=me.__101__text=document.createElement('div');
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
		me.__101.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc5f0\ud658\uacbd\n\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__101.ggUpdateText();
		el.appendChild(els);
		me.__101.ggIsActive=function() {
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
		me.__101.logicBlock_position = function() {
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
			if (me.__101.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__101.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__101.style.transition='left 0s, bottom 0s';
				if (me.__101.ggCurrentLogicStatePosition == 0) {
					me.__101.style.left = 'calc(50% - (100px / 2))';
					me.__101.style.bottom='10%';
				}
				else {
					me.__101.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__101.style.bottom='15%';
				}
			}
		}
		me.__101.logicBlock_position();
		me.__101.ggUpdatePosition=function (useTransition) {
		}
		me.__99.appendChild(me.__101);
		el=me.__100=document.createElement('div');
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
		me.__100.ggIsActive=function() {
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
		me.__100.logicBlock_bordercolor = function() {
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
			if (me.__100.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__100.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__100.style.transition='border-color 0s';
				if (me.__100.ggCurrentLogicStateBorderColor == 0) {
					me.__100.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__100.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__100.logicBlock_bordercolor();
		me.__100.onclick=function (e) {
			player.setVariableValue('vis_tree', !player.getVariableValue('vis_tree'));
			var list=me.findElements("\uc601\uc0b0\uac15",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc81c\ubd09\uc0b0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\ubd88\ud0dc\uc0b0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc5b4\ub4f1\uc0b0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc218\ubb381\uacf5\uc6d0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc644\ub3d9\uacf5\uc6d0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uace0\ub798\uc2e4\uacf5\uc6d0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc218\uc6441\uc800\uc218\uc9c0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc6d0\ub2e8\uc0b0\uacf5\uc6d0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\ub3c4\ucd0c2\uc800\uc218\uc9c0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\ubb34\uc591\uacf5\uc6d0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc6d4\ubd09\uc0b0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
		}
		me.__100.ggUpdatePosition=function (useTransition) {
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
		me.__100.appendChild(me._image_9);
		me.__99.appendChild(me.__100);
		me.__80.appendChild(me.__99);
		el=me.__96=document.createElement('div');
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
		me.__96.ggIsActive=function() {
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
		me.__96.logicBlock_position = function() {
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
			if (me.__96.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__96.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__96.style.transition='right 0s, top 0s';
				if (me.__96.ggCurrentLogicStatePosition == 0) {
					me.__96.style.right='10px';
					me.__96.style.top='69.36%';
				}
				else {
					me.__96.style.right='0px';
					me.__96.style.top='69.36%';
				}
			}
		}
		me.__96.logicBlock_position();
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		el=me.__98=document.createElement('div');
		els=me.__98__text=document.createElement('div');
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
		me.__98.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0dd\ud65c\ud3b8\uc758\uc2dc\uc124\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__98.ggUpdateText();
		el.appendChild(els);
		me.__98.ggIsActive=function() {
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
		me.__98.logicBlock_position = function() {
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
			if (me.__98.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__98.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__98.style.transition='left 0s, bottom 0s';
				if (me.__98.ggCurrentLogicStatePosition == 0) {
					me.__98.style.left = 'calc(50% - (100% / 2))';
					me.__98.style.bottom='10%';
				}
				else {
					me.__98.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__98.style.bottom='15%';
				}
			}
		}
		me.__98.logicBlock_position();
		me.__98.ggUpdatePosition=function (useTransition) {
		}
		me.__96.appendChild(me.__98);
		el=me.__97=document.createElement('div');
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
		me.__97.ggIsActive=function() {
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
		me.__97.logicBlock_bordercolor = function() {
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
			if (me.__97.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__97.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__97.style.transition='border-color 0s';
				if (me.__97.ggCurrentLogicStateBorderColor == 0) {
					me.__97.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__97.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__97.logicBlock_bordercolor();
		me.__97.onclick=function (e) {
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
			var list=me.findElements("\uc77c\uc9c4\uc2a4\ud3ec\ub809\uc2a4",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\ub86f\ub370\ub9c8\ud2b8",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc218\uc644\ubb38\ud654\uc13c\ud130",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc5b4\ub4f1\uc0b0CC",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uad11\uc8fc\uc218\uc644\ubcd1\uc6d0",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc218\uc644\ud589\uc815\ubcf5\uc9c0\uc13c\ud130",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			me.__13.ggVisible = !me.__13.ggVisible;
			var flag=me.__13.ggVisible;
			me.__13.style.transition='none';
			me.__13.style.visibility=((flag)&&(Number(me.__13.style.opacity)>0||!me.__13.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_shop', !player.getVariableValue('vis_shop'));
		}
		me.__97.ggUpdatePosition=function (useTransition) {
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
		me.__97.appendChild(me._image_8);
		me.__96.appendChild(me.__97);
		me.__80.appendChild(me.__96);
		el=me.__93=document.createElement('div');
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
		me.__93.ggIsActive=function() {
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
		me.__93.logicBlock_position = function() {
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
			if (me.__93.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__93.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__93.style.transition='right 0s, top 0s';
				if (me.__93.ggCurrentLogicStatePosition == 0) {
					me.__93.style.right='10px';
					me.__93.style.top='56.66%';
				}
				else {
					me.__93.style.right='0px';
					me.__93.style.top='56.66%';
				}
			}
		}
		me.__93.logicBlock_position();
		me.__93.ggUpdatePosition=function (useTransition) {
		}
		el=me.__95=document.createElement('div');
		els=me.__95__text=document.createElement('div');
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
		me.__95.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\uc721\uc2dc\uc124\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__95.ggUpdateText();
		el.appendChild(els);
		me.__95.ggIsActive=function() {
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
		me.__95.logicBlock_position = function() {
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
			if (me.__95.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__95.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__95.style.transition='left 0s, bottom 0s';
				if (me.__95.ggCurrentLogicStatePosition == 0) {
					me.__95.style.left = 'calc(50% - (100px / 2))';
					me.__95.style.bottom='10%';
				}
				else {
					me.__95.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__95.style.bottom='15%';
				}
			}
		}
		me.__95.logicBlock_position();
		me.__95.ggUpdatePosition=function (useTransition) {
		}
		me.__93.appendChild(me.__95);
		el=me.__94=document.createElement('div');
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
		me.__94.ggIsActive=function() {
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
		me.__94.logicBlock_bordercolor = function() {
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
			if (me.__94.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__94.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__94.style.transition='border-color 0s';
				if (me.__94.ggCurrentLogicStateBorderColor == 0) {
					me.__94.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__94.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__94.logicBlock_bordercolor();
		me.__94.onclick=function (e) {
			var list=me.findElements("\uad11\uc8fc\ubcf4\uac74\ub300\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc218\ubb38\ucd08\ub4f1\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uad11\uc8fc\uc804\uc790\uace0\ub4f1\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc218\uc644\ucd08\ub4f1\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uad11\uc8fc\uc9c4\ud765\uace0\ub4f1\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\ub0a8\ubd80\ub300\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc218\uc644\uace0\ub4f1\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc218\uc644\ud558\ub098\uc911\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc2e0\ucc3d\uc911\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc2e0\ucc3d\ucd08\ub4f1\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc804\ub0a8\uacf5\uc5c5\uace0\ub4f1\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\ucc9c\uace1\uc911\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\ucca8\ub2e8\uace0\ub4f1\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\ucca8\ub2e8\uc911\ud559\uad50",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			player.setVariableValue('vis_school', !player.getVariableValue('vis_school'));
		}
		me.__94.ggUpdatePosition=function (useTransition) {
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
		me.__94.appendChild(me._image_7);
		me.__93.appendChild(me.__94);
		me.__80.appendChild(me.__93);
		el=me.__90=document.createElement('div');
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
		me.__90.ggIsActive=function() {
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
		me.__90.logicBlock_position = function() {
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
			if (me.__90.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__90.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__90.style.transition='right 0s, top 0s';
				if (me.__90.ggCurrentLogicStatePosition == 0) {
					me.__90.style.right='10px';
					me.__90.style.top='43.96%';
				}
				else {
					me.__90.style.right='0px';
					me.__90.style.top='43.96%';
				}
			}
		}
		me.__90.logicBlock_position();
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		el=me.__92=document.createElement('div');
		els=me.__92__text=document.createElement('div');
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
		me.__92.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\ud1b5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__92.ggUpdateText();
		el.appendChild(els);
		me.__92.ggIsActive=function() {
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
		me.__92.logicBlock_position = function() {
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
			if (me.__92.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__92.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__92.style.transition='left 0s, bottom 0s';
				if (me.__92.ggCurrentLogicStatePosition == 0) {
					me.__92.style.left = 'calc(50% - (100px / 2))';
					me.__92.style.bottom='14%';
				}
				else {
					me.__92.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__92.style.bottom='19%';
				}
			}
		}
		me.__92.logicBlock_position();
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		me.__90.appendChild(me.__92);
		el=me.__91=document.createElement('div');
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
		me.__91.ggIsActive=function() {
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
		me.__91.logicBlock_bordercolor = function() {
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
			if (me.__91.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__91.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__91.style.transition='border-color 0s';
				if (me.__91.ggCurrentLogicStateBorderColor == 0) {
					me.__91.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__91.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__91.logicBlock_bordercolor();
		me.__91.onclick=function (e) {
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
			var list=me.findElements("\ud638\ub0a8\uace0\uc18d\ub3c4\ub85c",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc218\uc644\uc9c0\ud558\ucc28\ub3c4",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uad11\uc8fc2\ud638\uc120",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("\uc0b0\uc6d4IC",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			player.setVariableValue('vis_trafficborder', !player.getVariableValue('vis_trafficborder'));
		}
		me.__91.ggUpdatePosition=function (useTransition) {
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
		me.__91.appendChild(me._image_6);
		me.__90.appendChild(me.__91);
		me.__80.appendChild(me.__90);
		el=me.__87=document.createElement('div');
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
		me.__87.ggIsActive=function() {
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
		me.__87.logicBlock_position = function() {
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
			if (me.__87.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__87.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__87.style.transition='right 0s, top 0s';
				if (me.__87.ggCurrentLogicStatePosition == 0) {
					me.__87.style.right='10px';
					me.__87.style.top='31.26%';
				}
				else {
					me.__87.style.right='0px';
					me.__87.style.top='31.26%';
				}
			}
		}
		me.__87.logicBlock_position();
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		el=me.__89=document.createElement('div');
		els=me.__89__text=document.createElement('div');
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
		me.__89.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uace0\uace0\ub3c4\ubdf0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__89.ggUpdateText();
		el.appendChild(els);
		me.__89.ggIsActive=function() {
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
		me.__89.logicBlock_position = function() {
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
			if (me.__89.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__89.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__89.style.transition='left 0s, bottom 0s';
				if (me.__89.ggCurrentLogicStatePosition == 0) {
					me.__89.style.left = 'calc(50% - (100px / 2))';
					me.__89.style.bottom='14%';
				}
				else {
					me.__89.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__89.style.bottom='19%';
				}
			}
		}
		me.__89.logicBlock_position();
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		me.__87.appendChild(me.__89);
		el=me.__88=document.createElement('div');
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
		me.__88.ggIsActive=function() {
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
		me.__88.logicBlock_bordercolor = function() {
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
			if (me.__88.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__88.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__88.style.transition='border-color 0s';
				if (me.__88.ggCurrentLogicStateBorderColor == 0) {
					me.__88.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__88.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__88.logicBlock_bordercolor();
		me.__88.onclick=function (e) {
			player.openNext("{node17}","");
		}
		me.__88.ggUpdatePosition=function (useTransition) {
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
		me.__88.appendChild(me._image_5);
		me.__87.appendChild(me.__88);
		me.__80.appendChild(me.__87);
		el=me.__84=document.createElement('div');
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
		me.__84.ggIsActive=function() {
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
		me.__84.logicBlock_position = function() {
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
			if (me.__84.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__84.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__84.style.transition='right 0s, top 0s';
				if (me.__84.ggCurrentLogicStatePosition == 0) {
					me.__84.style.right='10px';
					me.__84.style.top='18.95%';
				}
				else {
					me.__84.style.right='0px';
					me.__84.style.top='18.95%';
				}
			}
		}
		me.__84.logicBlock_position();
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		el=me.__86=document.createElement('div');
		els=me.__86__text=document.createElement('div');
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
		me.__86.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc800\uace0\ub3c4\ubdf0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__86.ggUpdateText();
		el.appendChild(els);
		me.__86.ggIsActive=function() {
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
		me.__86.logicBlock_position = function() {
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
			if (me.__86.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__86.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__86.style.transition='left 0s, bottom 0s';
				if (me.__86.ggCurrentLogicStatePosition == 0) {
					me.__86.style.left = 'calc(50% - (100px / 2))';
					me.__86.style.bottom='14%';
				}
				else {
					me.__86.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__86.style.bottom='19%';
				}
			}
		}
		me.__86.logicBlock_position();
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		me.__84.appendChild(me.__86);
		el=me.__85=document.createElement('div');
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
		me.__85.ggIsActive=function() {
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
		me.__85.logicBlock_bordercolor = function() {
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
			if (me.__85.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__85.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__85.style.transition='border-color 0s';
				if (me.__85.ggCurrentLogicStateBorderColor == 0) {
					me.__85.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__85.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__85.logicBlock_bordercolor();
		me.__85.onclick=function (e) {
			player.openNext("{node12}","");
		}
		me.__85.ggUpdatePosition=function (useTransition) {
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
		me.__85.appendChild(me._image_4);
		me.__84.appendChild(me.__85);
		me.__80.appendChild(me.__84);
		el=me.__81=document.createElement('div');
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
		me.__81.ggIsActive=function() {
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
		me.__81.logicBlock_position = function() {
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
			if (me.__81.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__81.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__81.style.transition='right 0s, top 0s';
				if (me.__81.ggCurrentLogicStatePosition == 0) {
					me.__81.style.right='10px';
					me.__81.style.top='6.25%';
				}
				else {
					me.__81.style.right='0px';
					me.__81.style.top='6.25%';
				}
			}
		}
		me.__81.logicBlock_position();
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		el=me.__83=document.createElement('div');
		els=me.__83__text=document.createElement('div');
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
		me.__83.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc0c1\uc9c0\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__83.ggUpdateText();
		el.appendChild(els);
		me.__83.ggIsActive=function() {
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
		me.__83.logicBlock_position = function() {
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
			if (me.__83.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__83.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__83.style.transition='left 0s, bottom 0s';
				if (me.__83.ggCurrentLogicStatePosition == 0) {
					me.__83.style.left = 'calc(50% - (100px / 2))';
					me.__83.style.bottom='18%';
				}
				else {
					me.__83.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me.__83.style.bottom='21%';
				}
			}
		}
		me.__83.logicBlock_position();
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		me.__81.appendChild(me.__83);
		el=me.__82=document.createElement('div');
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
		me.__82.ggIsActive=function() {
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
		me.__82.onclick=function (e) {
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
		me.__82.ggUpdatePosition=function (useTransition) {
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
		me.__82.appendChild(me._image_3);
		me.__81.appendChild(me.__82);
		me.__80.appendChild(me.__81);
		me.__79.appendChild(me.__80);
		me.divSkin.appendChild(me.__79);
		el=me.__77=document.createElement('div');
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
		me.__77.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__77.logicBlock_visible = function() {
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
			if (me.__77.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__77.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__77.style.transition='';
				if (me.__77.ggCurrentLogicStateVisible == 0) {
					me.__77.style.visibility="hidden";
					me.__77.ggVisible=false;
				}
				else {
					me.__77.style.visibility=(Number(me.__77.style.opacity)>0||!me.__77.style.opacity)?'inherit':'hidden';
					me.__77.ggVisible=true;
				}
			}
		}
		me.__77.logicBlock_visible();
		me.__77.onclick=function (e) {
			player.setVariableValue('vis_sidemenu', !player.getVariableValue('vis_sidemenu'));
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		el=me.__78=document.createElement('div');
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
		me.__78.ggUpdatePosition=function (useTransition) {
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
		me.__78.appendChild(me._image_2);
		me.__77.appendChild(me.__78);
		me.divSkin.appendChild(me.__77);
		el=me.__54=document.createElement('div');
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
		me.__54.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__54.logicBlock_visible = function() {
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
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
				else if (me.__54.ggCurrentLogicStateVisible == 1) {
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
		el=me.__70=document.createElement('div');
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
		me.__70.onclick=function (e) {
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
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me.__72=document.createElement('div');
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
		me.__72.logicBlock_backgroundcolor = function() {
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
			if (me.__72.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__72.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__72.style.transition='background-color 0s';
				if (me.__72.ggCurrentLogicStateBackgroundColor == 0) {
					me.__72.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__72.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__72.logicBlock_backgroundcolor();
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		el=me.__76=document.createElement('div');
		els=me.__76__img=document.createElement('img');
		els.className='ggskin ggskin__76';
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
		me.__76.logicBlock_visible = function() {
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
			if (me.__76.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__76.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__76.style.transition='';
				if (me.__76.ggCurrentLogicStateVisible == 0) {
					me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
					me.__76.ggVisible=true;
				}
				else {
					me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
					me.__76.ggVisible=true;
				}
			}
		}
		me.__76.logicBlock_visible();
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me.__72.appendChild(me.__76);
		el=me.__75=document.createElement('div');
		els=me.__75__img=document.createElement('img');
		els.className='ggskin ggskin__75';
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
		me.__75.logicBlock_visible = function() {
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
			if (me.__75.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__75.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__75.style.transition='';
				if (me.__75.ggCurrentLogicStateVisible == 0) {
					me.__75.style.visibility=(Number(me.__75.style.opacity)>0||!me.__75.style.opacity)?'inherit':'hidden';
					me.__75.ggVisible=true;
				}
				else {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
			}
		}
		me.__75.logicBlock_visible();
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		me.__72.appendChild(me.__75);
		el=me.__74=document.createElement('div');
		els=me.__74__text=document.createElement('div');
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
		me.__74.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac", params);
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
		me.__74.logicBlock_textcolor = function() {
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
			if (me.__74.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__74.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__74.style.transition='color 0s';
				if (me.__74.ggCurrentLogicStateTextColor == 0) {
					me.__74.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__74.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__74.logicBlock_textcolor();
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		me.__72.appendChild(me.__74);
		el=me.__73=document.createElement('div');
		els=me.__73__text=document.createElement('div');
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
		me.__73.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__73.ggUpdateText();
		el.appendChild(els);
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
		me.__73.logicBlock_visible = function() {
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
			if (me.__73.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__73.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__73.style.transition='';
				if (me.__73.ggCurrentLogicStateVisible == 0) {
					me.__73.style.visibility=(Number(me.__73.style.opacity)>0||!me.__73.style.opacity)?'inherit':'hidden';
					me.__73.ggVisible=true;
				}
				else {
					me.__73.style.visibility="hidden";
					me.__73.ggVisible=false;
				}
			}
		}
		me.__73.logicBlock_visible();
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		me.__72.appendChild(me.__73);
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
		me.__72.appendChild(me._rectangle_111111);
		me.__70.appendChild(me.__72);
		el=me.__71=document.createElement('div');
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
		me.__71.ggIsActive=function() {
			return (me.__71.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__71.ggTimestamp) / me.__71.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__71.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__71.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__71.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__71.style.transition='';
				if (me.__71.ggCurrentLogicStateVisible == 0) {
					me.__71.style.visibility="hidden";
					me.__71.ggVisible=false;
				}
				else {
					me.__71.style.visibility=(Number(me.__71.style.opacity)>0||!me.__71.style.opacity)?'inherit':'hidden';
					me.__71.ggVisible=true;
				}
			}
		}
		me.__71.logicBlock_visible();
		me.__71.ggActivate=function () {
			player.setVariableValue('vis_copy', false);
		}
		me.__71.ggCurrentLogicStateVisible = -1;
		me.__71.ggUpdateConditionTimer=function () {
			me.__71.logicBlock_visible();
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me.__71);
		me.__54.appendChild(me.__70);
		el=me.__65=document.createElement('div');
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
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me.__66=document.createElement('div');
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
		me.__66.logicBlock_backgroundcolor = function() {
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
			if (me.__66.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__66.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__66.style.transition='background-color 0s';
				if (me.__66.ggCurrentLogicStateBackgroundColor == 0) {
					me.__66.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__66.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__66.logicBlock_backgroundcolor();
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		el=me.__69=document.createElement('div');
		els=me.__69__img=document.createElement('img');
		els.className='ggskin ggskin__69';
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
		me.__69.logicBlock_visible = function() {
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
			if (me.__69.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__69.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__69.style.transition='';
				if (me.__69.ggCurrentLogicStateVisible == 0) {
					me.__69.style.visibility=(Number(me.__69.style.opacity)>0||!me.__69.style.opacity)?'inherit':'hidden';
					me.__69.ggVisible=true;
				}
				else {
					me.__69.style.visibility="hidden";
					me.__69.ggVisible=false;
				}
			}
		}
		me.__69.logicBlock_visible();
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__69);
		el=me.__68=document.createElement('div');
		els=me.__68__img=document.createElement('img');
		els.className='ggskin ggskin__68';
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
		me.__68.logicBlock_visible = function() {
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
			if (me.__68.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__68.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__68.style.transition='';
				if (me.__68.ggCurrentLogicStateVisible == 0) {
					me.__68.style.visibility=(Number(me.__68.style.opacity)>0||!me.__68.style.opacity)?'inherit':'hidden';
					me.__68.ggVisible=true;
				}
				else {
					me.__68.style.visibility="hidden";
					me.__68.ggVisible=false;
				}
			}
		}
		me.__68.logicBlock_visible();
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__68);
		el=me.__67=document.createElement('div');
		els=me.__67__text=document.createElement('div');
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
		me.__67.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc5c5\uac1c\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__67.ggUpdateText();
		el.appendChild(els);
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
		me.__67.logicBlock_textcolor = function() {
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
			if (me.__67.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__67.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__67.style.transition='color 0s';
				if (me.__67.ggCurrentLogicStateTextColor == 0) {
					me.__67.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__67.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__67.logicBlock_textcolor();
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__67);
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
			me.__38.style.transition='none';
			me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
			me.__38.ggVisible=true;
		}
		me._rectangle_1111.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me._rectangle_1111);
		me.__65.appendChild(me.__66);
		me.__54.appendChild(me.__65);
		el=me.__60=document.createElement('div');
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
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
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
		me.__61.logicBlock_backgroundcolor = function() {
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
			if (me.__61.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__61.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__61.style.transition='background-color 0s';
				if (me.__61.ggCurrentLogicStateBackgroundColor == 0) {
					me.__61.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__61.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__61.logicBlock_backgroundcolor();
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__64=document.createElement('div');
		els=me.__64__img=document.createElement('img');
		els.className='ggskin ggskin__64';
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
		me.__64.logicBlock_visible = function() {
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
			if (me.__64.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__64.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__64.style.transition='';
				if (me.__64.ggCurrentLogicStateVisible == 0) {
					me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
					me.__64.ggVisible=true;
				}
				else {
					me.__64.style.visibility="hidden";
					me.__64.ggVisible=false;
				}
			}
		}
		me.__64.logicBlock_visible();
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__64);
		el=me.__63=document.createElement('div');
		els=me.__63__img=document.createElement('img');
		els.className='ggskin ggskin__63';
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
		me.__63.logicBlock_visible = function() {
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
			if (me.__63.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__63.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__63.style.transition='';
				if (me.__63.ggCurrentLogicStateVisible == 0) {
					me.__63.style.visibility=(Number(me.__63.style.opacity)>0||!me.__63.style.opacity)?'inherit':'hidden';
					me.__63.ggVisible=true;
				}
				else {
					me.__63.style.visibility="hidden";
					me.__63.ggVisible=false;
				}
			}
		}
		me.__63.logicBlock_visible();
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__63);
		el=me.__62=document.createElement('div');
		els=me.__62__text=document.createElement('div');
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
		me.__62.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubcc0\uc815\ubcf4", params);
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
		me.__62.logicBlock_textcolor = function() {
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
			if (me.__62.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__62.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__62.style.transition='color 0s';
				if (me.__62.ggCurrentLogicStateTextColor == 0) {
					me.__62.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__62.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__62.logicBlock_textcolor();
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__62);
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
		me.__61.appendChild(me._rectangle_111);
		me.__60.appendChild(me.__61);
		me.__54.appendChild(me.__60);
		el=me.__55=document.createElement('div');
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
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__56=document.createElement('div');
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
		me.__56.ggIsActive=function() {
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
		me.__56.logicBlock_backgroundcolor = function() {
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
			if (me.__56.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__56.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__56.style.transition='background-color 0s';
				if (me.__56.ggCurrentLogicStateBackgroundColor == 0) {
					me.__56.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__56.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__56.logicBlock_backgroundcolor();
		me.__56.onclick=function (e) {
			player.setVariableValue('vis_home', !player.getVariableValue('vis_home'));
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
		els=me.__59__img=document.createElement('img');
		els.className='ggskin ggskin__59';
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
		me.__59.logicBlock_visible = function() {
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
			if (me.__59.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__59.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__59.style.transition='';
				if (me.__59.ggCurrentLogicStateVisible == 0) {
					me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
					me.__59.ggVisible=true;
				}
				else {
					me.__59.style.visibility="hidden";
					me.__59.ggVisible=false;
				}
			}
		}
		me.__59.logicBlock_visible();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__59);
		el=me.__58=document.createElement('div');
		els=me.__58__img=document.createElement('img');
		els.className='ggskin ggskin__58';
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
		me.__58.ggIsActive=function() {
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
		me.__58.logicBlock_visible = function() {
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
			if (me.__58.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__58.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__58.style.transition='';
				if (me.__58.ggCurrentLogicStateVisible == 0) {
					me.__58.style.visibility=(Number(me.__58.style.opacity)>0||!me.__58.style.opacity)?'inherit':'hidden';
					me.__58.ggVisible=true;
				}
				else {
					me.__58.style.visibility="hidden";
					me.__58.ggVisible=false;
				}
			}
		}
		me.__58.logicBlock_visible();
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__58);
		el=me.__57=document.createElement('div');
		els=me.__57__text=document.createElement('div');
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
		me.__57.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud648\ud398\uc774\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__57.ggUpdateText();
		el.appendChild(els);
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
		me.__57.logicBlock_textcolor = function() {
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
			if (me.__57.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__57.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__57.style.transition='color 0s';
				if (me.__57.ggCurrentLogicStateTextColor == 0) {
					me.__57.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__57.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__57.logicBlock_textcolor();
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__57);
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
		me.__56.appendChild(me._rectangle_1);
		me.__55.appendChild(me.__56);
		me.__54.appendChild(me.__55);
		me.divSkin.appendChild(me.__54);
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
			me.__38.style.transition='none';
			me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
			me.__38.ggVisible=true;
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
		el=me.__43=document.createElement('div');
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
		me.__43.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
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
				me.__43.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__43.ggCurrentLogicStatePosition == 0) {
					me.__43.style.left = 'calc(50% - (280px / 2))';
					me.__43.style.bottom='10px';
				}
				else {
					me.__43.style.left='calc(50% - ((280px + 0px) / 2) + 0px)';
					me.__43.style.bottom='50px';
				}
			}
		}
		me.__43.logicBlock_position();
		me.__43.logicBlock_scaling = function() {
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
			if (me.__43.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__43.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__43.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__43.ggCurrentLogicStateScaling == 0) {
					me.__43.ggParameter.sx = 0.8;
					me.__43.ggParameter.sy = 0.8;
					me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
					skin.updateSize(me.__43);
				}
				else {
					me.__43.ggParameter.sx = 1;
					me.__43.ggParameter.sy = 1;
					me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
					skin.updateSize(me.__43);
				}
			}
		}
		me.__43.logicBlock_scaling();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
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
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__53);
		el=me.__44=document.createElement('div');
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
		el=me.__51=document.createElement('div');
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
		el=me.__52=document.createElement('div');
		els=me.__52__img=document.createElement('img');
		els.className='ggskin ggskin__52';
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
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me.__52);
		me.__51.appendChild(me._rectangle_2);
		me.__44.appendChild(me.__51);
		el=me.__49=document.createElement('div');
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
		me.__49.ggUpdatePosition=function (useTransition) {
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
		el=me.__50=document.createElement('div');
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
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me.__50);
		me.__49.appendChild(me._rectangle_3);
		me.__44.appendChild(me.__49);
		el=me.__47=document.createElement('div');
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
		me.__47.ggUpdatePosition=function (useTransition) {
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
		el=me.__48=document.createElement('div');
		els=me.__48__img=document.createElement('img');
		els.className='ggskin ggskin__48';
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
		me._rectangle_4.appendChild(me.__48);
		me.__47.appendChild(me._rectangle_4);
		me.__44.appendChild(me.__47);
		el=me.__45=document.createElement('div');
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
		el=me.__46=document.createElement('div');
		els=me.__46__img=document.createElement('img');
		els.className='ggskin ggskin__46';
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
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me.__46);
		me.__45.appendChild(me._rectangle_5);
		me.__44.appendChild(me.__45);
		me.__43.appendChild(me.__44);
		me.divSkin.appendChild(me.__43);
		el=me.__38=document.createElement('div');
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
		me.__38.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
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
		me.__42.onclick=function (e) {
			me.__38.style.transition='none';
			me.__38.style.visibility='hidden';
			me.__38.ggVisible=false;
			player.setVariableValue('vis_business', false);
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__38.appendChild(me.__42);
		el=me.__39=document.createElement('div');
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
		me.__39.logicBlock_position = function() {
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
			if (me.__39.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__39.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__39.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__39.ggCurrentLogicStatePosition == 0) {
					me.__39.style.left = 'calc(50% - (70% / 2))';
					me.__39.style.top='3%';
				}
				else {
					me.__39.style.left='calc(50% - ((70% + 0px) / 2) + 0px)';
					me.__39.style.top='6%';
				}
			}
		}
		me.__39.logicBlock_position();
		me.__39.logicBlock_size = function() {
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
			if (me.__39.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__39.ggCurrentLogicStateSize = newLogicStateSize;
				me.__39.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__39.ggCurrentLogicStateSize == 0) {
					me.__39.style.width='85%';
					me.__39.style.height='69.13%';
					me.__39.style.left = 'calc(50% - (85% / 2))';
					skin.updateSize(me.__39);
				}
				else if (me.__39.ggCurrentLogicStateSize == 1) {
					me.__39.style.width='88%';
					me.__39.style.height='75%';
					me.__39.style.left = 'calc(50% - (88% / 2))';
					skin.updateSize(me.__39);
				}
				else {
					me.__39.style.width='70%';
					me.__39.style.height='78%';
					me.__39.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__39);
				}
			}
		}
		me.__39.logicBlock_size();
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		els=me.__41__img=document.createElement('img');
		els.className='ggskin ggskin__41';
		hs=basePath + 'images/_41.png';
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
		me.__41.logicBlock_visible = function() {
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
			if (me.__41.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__41.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__41.style.transition='';
				if (me.__41.ggCurrentLogicStateVisible == 0) {
					me.__41.style.visibility="hidden";
					me.__41.ggVisible=false;
				}
				else {
					me.__41.style.visibility=(Number(me.__41.style.opacity)>0||!me.__41.style.opacity)?'inherit':'hidden';
					me.__41.ggVisible=true;
				}
			}
		}
		me.__41.logicBlock_visible();
		me.__41.ggUpdatePosition=function (useTransition) {
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
			me.__38.style.transition='none';
			me.__38.style.visibility='hidden';
			me.__38.ggVisible=false;
			player.setVariableValue('vis_business', false);
		}
		me._close0.ggUpdatePosition=function (useTransition) {
		}
		me.__41.appendChild(me._close0);
		me.__39.appendChild(me.__41);
		el=me.__40=document.createElement('div');
		els=me.__40__img=document.createElement('img');
		els.className='ggskin ggskin__40';
		hs=basePath + 'images/_40.png';
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
		me.__40.logicBlock_visible = function() {
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
			if (me.__40.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40.style.transition='';
				if (me.__40.ggCurrentLogicStateVisible == 0) {
					me.__40.style.visibility=(Number(me.__40.style.opacity)>0||!me.__40.style.opacity)?'inherit':'hidden';
					me.__40.ggVisible=true;
				}
				else {
					me.__40.style.visibility="hidden";
					me.__40.ggVisible=false;
				}
			}
		}
		me.__40.logicBlock_visible();
		me.__40.ggUpdatePosition=function (useTransition) {
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
			me.__38.style.transition='none';
			me.__38.style.visibility='hidden';
			me.__38.ggVisible=false;
			player.setVariableValue('vis_business', false);
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me._close);
		me.__39.appendChild(me.__40);
		me.__38.appendChild(me.__39);
		me.divSkin.appendChild(me.__38);
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
		el=me.__35=document.createElement('div');
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
		me.__35.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
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
		me.__36.appendChild(me._container_2);
		me.__35.appendChild(me.__36);
		me.divSkin.appendChild(me.__35);
		me.__79.logicBlock_position();
		me.__79.logicBlock_size();
		player.setVariableValue('vis_leftmenu', true);
		player.setVariableValue('vis_around', true);
		me.__80.logicBlock_position();
		me.__99.logicBlock_position();
		me.__101.logicBlock_position();
		me.__100.logicBlock_bordercolor();
		me.__96.logicBlock_position();
		me.__98.logicBlock_position();
		me.__97.logicBlock_bordercolor();
		me.__93.logicBlock_position();
		me.__95.logicBlock_position();
		me.__94.logicBlock_bordercolor();
		me.__90.logicBlock_position();
		me.__92.logicBlock_position();
		me.__91.logicBlock_bordercolor();
		me.__87.logicBlock_position();
		me.__89.logicBlock_position();
		me.__88.logicBlock_bordercolor();
		me.__84.logicBlock_position();
		me.__86.logicBlock_position();
		me.__85.logicBlock_bordercolor();
		me.__81.logicBlock_position();
		me.__83.logicBlock_position();
		me.__77.logicBlock_visible();
		me._image_2.logicBlock_position();
		me._image_2.logicBlock_angle();
		me.__54.logicBlock_visible();
		me.__72.logicBlock_backgroundcolor();
		me.__76.logicBlock_visible();
		me.__75.logicBlock_visible();
		me.__74.logicBlock_textcolor();
		me.__73.logicBlock_visible();
		me.__71.logicBlock_visible();
		me.__66.logicBlock_backgroundcolor();
		me.__69.logicBlock_visible();
		me.__68.logicBlock_visible();
		me.__67.logicBlock_textcolor();
		me.__61.logicBlock_backgroundcolor();
		me.__64.logicBlock_visible();
		me.__63.logicBlock_visible();
		me.__62.logicBlock_textcolor();
		me.__56.logicBlock_backgroundcolor();
		me.__59.logicBlock_visible();
		me.__58.logicBlock_visible();
		me.__57.logicBlock_textcolor();
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
		me.__43.logicBlock_position();
		me.__43.logicBlock_scaling();
		me.__39.logicBlock_position();
		me.__39.logicBlock_size();
		me.__41.logicBlock_visible();
		me._close0.logicBlock_position();
		me._close0.logicBlock_size();
		me.__40.logicBlock_visible();
		me._close.logicBlock_position();
		me._close.logicBlock_size();
		me._timer_1.logicBlock_visible();
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('대상지로고')) {
				for(var i = 0; i < hotspotTemplates['대상지로고'].length; i++) {
					hotspotTemplates['대상지로고'][i].ggEvent_changenode();
				}
			}
			me.__80.logicBlock_position();
			me.__100.logicBlock_bordercolor();
			me.__97.logicBlock_bordercolor();
			me.__94.logicBlock_bordercolor();
			me.__91.logicBlock_bordercolor();
			me.__88.logicBlock_bordercolor();
			me.__85.logicBlock_bordercolor();
			me._image_2.logicBlock_position();
			me._image_2.logicBlock_angle();
			me.__54.logicBlock_visible();
			me.__72.logicBlock_backgroundcolor();
			me.__76.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__74.logicBlock_textcolor();
			me.__73.logicBlock_visible();
			me.__71.logicBlock_visible();
			me.__66.logicBlock_backgroundcolor();
			me.__69.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__67.logicBlock_textcolor();
			me.__61.logicBlock_backgroundcolor();
			me.__64.logicBlock_visible();
			me.__63.logicBlock_visible();
			me.__62.logicBlock_textcolor();
			me.__56.logicBlock_backgroundcolor();
			me.__59.logicBlock_visible();
			me.__58.logicBlock_visible();
			me.__57.logicBlock_textcolor();
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
			me.__80.logicBlock_position();
			me.__100.logicBlock_bordercolor();
			me.__97.logicBlock_bordercolor();
			me.__94.logicBlock_bordercolor();
			me.__91.logicBlock_bordercolor();
			me._image_2.logicBlock_position();
			me._image_2.logicBlock_angle();
			me.__54.logicBlock_visible();
			me.__72.logicBlock_backgroundcolor();
			me.__76.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__74.logicBlock_textcolor();
			me.__73.logicBlock_visible();
			me.__66.logicBlock_backgroundcolor();
			me.__69.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__67.logicBlock_textcolor();
			me.__61.logicBlock_backgroundcolor();
			me.__64.logicBlock_visible();
			me.__63.logicBlock_visible();
			me.__62.logicBlock_textcolor();
			me.__56.logicBlock_backgroundcolor();
			me.__59.logicBlock_visible();
			me.__58.logicBlock_visible();
			me.__57.logicBlock_textcolor();
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
		player.addListener('imagesready', function(event) {
			if (
				(
					((player.getViewerSize().width <= 420))
				)
			) {
				player.setPanTiltFov(3.8,-33.8,100);
			}
		});
		player.addListener('sizechanged', function(event) {
			me.__79.logicBlock_position();
			me.__79.logicBlock_size();
			me.__80.logicBlock_position();
			me.__99.logicBlock_position();
			me.__101.logicBlock_position();
			me.__96.logicBlock_position();
			me.__98.logicBlock_position();
			me.__93.logicBlock_position();
			me.__95.logicBlock_position();
			me.__90.logicBlock_position();
			me.__92.logicBlock_position();
			me.__87.logicBlock_position();
			me.__89.logicBlock_position();
			me.__84.logicBlock_position();
			me.__86.logicBlock_position();
			me.__81.logicBlock_position();
			me.__83.logicBlock_position();
			me.__77.logicBlock_visible();
			me.__54.logicBlock_visible();
			me.__m15.logicBlock_size();
			me.__m15.logicBlock_visible();
			me.__m.logicBlock_scaling();
			me.__m.logicBlock_visible();
			me.__43.logicBlock_position();
			me.__43.logicBlock_scaling();
			me.__39.logicBlock_position();
			me.__39.logicBlock_size();
			me.__41.logicBlock_visible();
			me._close0.logicBlock_position();
			me._close0.logicBlock_size();
			me.__40.logicBlock_visible();
			me._close.logicBlock_position();
			me._close.logicBlock_size();
		});
		player.addListener('varchanged_vis_around', function(event) {
			me.__61.logicBlock_backgroundcolor();
			me.__64.logicBlock_visible();
			me.__63.logicBlock_visible();
			me.__62.logicBlock_textcolor();
			me.__m3.logicBlock_backgroundcolor();
			me.__m6.logicBlock_visible();
			me.__m5.logicBlock_visible();
			me.__m4.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_business', function(event) {
			me.__66.logicBlock_backgroundcolor();
			me.__69.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__67.logicBlock_textcolor();
			me.__m7.logicBlock_backgroundcolor();
			me.__m10.logicBlock_visible();
			me.__m9.logicBlock_visible();
			me.__m8.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_copy', function(event) {
			me.__72.logicBlock_backgroundcolor();
			me.__76.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__74.logicBlock_textcolor();
			me.__73.logicBlock_visible();
			me.__m11.logicBlock_backgroundcolor();
			me.__m14.logicBlock_visible();
			me.__m13.logicBlock_visible();
			me.__m12.logicBlock_textcolor();
			me._m4.logicBlock_visible();
		});
		player.addListener('varchanged_vis_home', function(event) {
			me.__56.logicBlock_backgroundcolor();
			me.__59.logicBlock_visible();
			me.__58.logicBlock_visible();
			me.__57.logicBlock_textcolor();
			me._m0.logicBlock_backgroundcolor();
			me.__m2.logicBlock_visible();
			me.__m1.logicBlock_visible();
			me.__m0.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_leftmenu', function(event) {
			me.__80.logicBlock_position();
		});
		player.addListener('varchanged_vis_school', function(event) {
			me.__94.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_shop', function(event) {
			me.__97.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_sidemenu', function(event) {
			me._image_2.logicBlock_position();
			me._image_2.logicBlock_angle();
			me.__54.logicBlock_visible();
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
			me.__91.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_tree', function(event) {
			me.__100.logicBlock_bordercolor();
		});
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
		el.ggId="\uad11\uc8fc2\ud638\uc120";
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
		me.__2.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__2;
	};
	function SkinHotspotClass_ic(parentScope,hotspot) {
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
		el=me._ic=document.createElement('div');
		el.ggId="\uc0b0\uc6d4IC";
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
		me._ic.ggIsActive=function() {
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
		me._ic.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ic.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ic.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ic']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ic.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ic']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ic.ggUpdatePosition=function (useTransition) {
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
			'8Cn/e63CENvYTLtuAYNjQ93YvB2hYRsew0/sCwfRq5CduDA8BTXlYCPAxstL1wkTPXi8BtXpd76rNJpkFEFmYM/cGuAD6Nv8dXRELXgv+zdEU0hAZE6I5jNE952Xz8+xx+mrFn1YrI1Prxb+H57+EeZ2C3iAfHME952Qr82xHeSITudERmiUH8Jw18x649Qu02bcExbChAvgJ8EtAqM5F/6gZ+Bdw7dExJ1Jr24BjmKS/LwR8etwM6qETOZAfxb+33K6/L3TDTjbFixoJjNE952YXADcAWYOnMtkZkWrwDbMN/QFLIp8bPlKgIjtE85WVLgQ8A64HLCGHvD5EodAL/Rlg7gb96Xe53Zrg9YYm64BjPU16WC5wLlAKLh37lAfOBeUAiYG1jU5HI6AB68Z9DdAqoA44N/doHvOV1uaNnN24bRH1wSESN/8fXgiCxRMOi'+
			'ImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwS'+
			'EixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQc'+
			'ImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixhQcImJMwSEixpwz3QCZVg7gIuBy4MIA328EqoHDwGvAC8CrwOD0NE9iRZzP55vpNkjkFQIe4OPAWYbvfQ/4DeDFHyoiCo5ZLhv4LnA7kBhmWb3AQ8Bd+O9M5Aym4Ji9rsd/lzDf5nJPAZ8HttpcrsQQdY7OPk7gv/B/sO0ODYbKfHyoDvWRnaF0xzG7pOIPjA9PdsGAz0dFawMHW05xvKOVhu5Ougb6AEiJTyAnOZVFaRmszJzPqowc4uPipqrvz8ANQKeNfwaJAQqO2cMJ/A74X4G+2dXfx/O1lbxUd5y2vl5LBaYnJLIhbxFX5BeT4kyY7LI/AtcC/SG0WWKUgmP2+DnwmUDfeKOplieP7ae1ryekgucmJHFd8WrWZhdMdskDwGdDKl'+
			'xikoJjdrgBf7/DGIM+H09VHuDFuuO2VLIxbxEfK16NI/Djy83AY7ZUJFFPwRH7soGDjOsIHfT5ePjIG7zRVGtrZWuy8rlt2ZpA4dEErAQabK1QopJGVWLf9wgwevK74xW2hwb4H3ueOn4g0LeygP9ne4USlRQcsa0I+NT4F19vrOGF2sqIVfpi7XFeb6wJ9K3bhtoks5yCI7Z9Fhgz3NE10M+TlQHvCGz1ZOUBugYmDKQkAJ+LeOUy4xQcscsB3DL+xedrjnE6xNETE6f7eni+5ligb92C/l/NevoHjl0XMm7B2oDPZ9sIihUv1h1nYGLneiH+Fbgyiyk4Ytf7x79Q0dpAu8XJXXZo7+ulojXgIMoV09YImREKjth1wfgXKlpOTXsjJqkz0F4fMosoOGLXyvEvVHW0TnsjJqlzxXS3Q6aXgiN2TZj/3dDdMe2NqA9c'+
			'56Rz02V2UHDErvTxLwQYHo247v6AdU5om8wuCg4RMabgiF1t419IiZ/+fXWSnQHrnNA2mV0UHLFrwpzvnOS0aW9EbuA6A85Hl9lDwRG7Do5/oSgtY9obMUmdh6a7HTK9FByxa8/4F1ZlRmKL0alNUudr090OmV4Kjtj1t/EvrMrIYU5CuKcgWDcnIZFVGTmBvvX8tDVCZoSCI3a9hv+wpBHxcXFszFs0bQ3YmLco0GbG1fhPf5NZTMERuwaBR8e/eEXBYuYmJEW88rkJSVyRXxzoW4+iIyNnPQVHbPPiP2FtREq8k+uKV0e84uuKVwfa+bx3qE0yyyk4YtsJ/McyjrE2u4DLA98N2GJj/qLJdjx/GJ0ve0bQZsWxLxv/8Gf26BdnYLPiRvyL23Su7BlAdxyxrxH/Wa5jOOLiuG3ZGls7SzfmLZosNAC+iELjjKE7jt'+
			'lj0gOZ9jSe5KnKipC3FExPSOK64lVckL1gskt+MVndMjspOGaPROBJghwB+WLdccu7hM1JSGSjtSMgr2NcJ63MbgqO2SUVeAr44GQXDPh8VLQ0UNHqP3T6VHcHnf3+Q6dTnQnMT05jUVoGqzLmsyoz6KHTzwDXo0OnzzgKjtknAfgJkX90eAD4AtAX4XokCqlzdPbpw3/eyk1AJDYhPYX/nNjPotA4Y/1/HZ93VmkV/CAAAAAASUVORK5CYII=';
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
		me._ic.appendChild(me._external_20);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_20.style.width=hotspot.customimagewidth + 'px';
			me._external_20.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_20.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_20.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me._ic;
	};
	function SkinHotspotClass_cc(parentScope,hotspot) {
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
		el=me._cc=document.createElement('div');
		el.ggId="\uc5b4\ub4f1\uc0b0CC";
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
		me._cc.ggIsActive=function() {
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
		me._cc.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._cc.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._cc.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['cc']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._cc.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['cc']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._cc.ggUpdatePosition=function (useTransition) {
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
		me._cc.appendChild(me._external_21);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_21.style.width=hotspot.customimagewidth + 'px';
			me._external_21.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_21.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_21.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me._cc;
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
		el.ggId="\uc5b4\ub4f1\uc0b0";
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
		me.__.appendChild(me._external_22);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_22.style.width=hotspot.customimagewidth + 'px';
			me._external_22.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_22.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_22.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
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
		el.ggId="\uc6d4\ubd09\uc0b0";
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
		me.__0.appendChild(me._external_23);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_23.style.width=hotspot.customimagewidth + 'px';
			me._external_23.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_23.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_23.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
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
		el.ggId="\ub0a8\ubd80\ub300\ud559\uad50";
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
		me.__1.appendChild(me._external_24);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_24.style.width=hotspot.customimagewidth + 'px';
			me._external_24.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_24.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_24.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__1;
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
		el.ggId="\uad11\uc8fc\uc804\uc790\uace0\ub4f1\ud559\uad50";
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
		me.__3.appendChild(me._external_25);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_25.style.width=hotspot.customimagewidth + 'px';
			me._external_25.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_25.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_25.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__3;
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
		el.ggId="\ubb34\uc591\uacf5\uc6d0";
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
		me.__4.appendChild(me._external_26);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_26.style.width=hotspot.customimagewidth + 'px';
			me._external_26.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_26.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_26.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
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
		el.ggId="\ucca8\ub2e8\uace0\ub4f1\ud559\uad50";
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
		me.__5.appendChild(me._external_27);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_27.style.width=hotspot.customimagewidth + 'px';
			me._external_27.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_27.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_27.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
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
		el.ggId="\ucca8\ub2e8\uc911\ud559\uad50";
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
		me.__6.appendChild(me._external_28);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_28.style.width=hotspot.customimagewidth + 'px';
			me._external_28.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_28.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_28.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
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
		el.ggId="\ubd88\ud0dc\uc0b0";
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
		me.__7.appendChild(me._external_29);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_29.style.width=hotspot.customimagewidth + 'px';
			me._external_29.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_29.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_29.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
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
		el.ggId="\uc81c\ubd09\uc0b0";
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
		me.__8.appendChild(me._external_210);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_210.style.width=hotspot.customimagewidth + 'px';
			me._external_210.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_210.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_210.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
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
		el.ggId="\ucc9c\uace1\uc911\ud559\uad50";
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
		hs='data:image/png;base64,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'+
			'FEiipcC7V1s1NqgjF2bYmx48so27+Isb06PpMl05lfOfgE+KEv4PnI8jsbsiwwAfzeYAfgEeBHlt1URCT+BPszX8Czq5SVsDQw69Vt2PEQ0NHym4vIgWQncL0v4Pl7qSsCmbd3y0ndN9cfeK4Q9xeRA8JzQP9yCUsoUAuzMb83eBrwJ2BAQQsSkdZiFXCd1Zv/WqHg83d8Ac/bwPHA5cBnhS5PRFqsz4jnxOByDEsoQguzMb83WEF8X82bgMFFK1hEytlHwL3E97HMftuNIipqYDbm9wZPB34KXAjoLEaRA0sN8WmIj5VrazKZkgVmvbqpSBOBScDpQGUp6yMiBbMfqD9ccUappwjlouSB2ZjfG/QApwFnAiOBoYCmpYu0TLXAUmA+8Drwti/gCZa2Svkpq8BM5PcGK4lPTzqO+Aqi3kAPoHPdf20BT8kqKHJgCxJf'+
			'qri97r9NxAduPiHeL7nKF/DkseV3+SnrwJRWL/GXTxv9SVnTtkAiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJ'+
			'giIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIi'+
			'hhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGnKWugBxQ7MAJwGnA8CTvbweqgbXAYuBtYBEQLU71RNKzxWKxUtdBWr8qYApwCXBElp/9HJgGPEw8TEVKRoEphdQZ+B1wJeDK814h4DHg18RboiJFp8CUQplEvFV4iMX33QZcBwQsvq9IRhr0Eas5gUeIB5rVYUndPf9RV4b64KWo1MIUK3mIB+X4VBdEI7D+wwgbPorw1adRdn4VY38w/jtY6bHRoa'+
			'uNbkfZ6Xmcg16DHdgdacubCXiBoHXfgkhqCkyxihP4J3Besjdr9sZY/GqYpbPDBL8x+53zHGxj6Dgnw89x4m5rS3XZy8APgXAOdRbJigJTrPIXYHKyN9YsiDDnyRDf7sztd61tBxtjr3DRb2TK5uZU4Jqcbi6SBQWmWMFLvF+xiVgU5jwZYulr1jT+hp7lZOwVLmzJe94vBp61pCCRFBSYkq/OwGoSBnhiUXjpwRrWLIhYWljfEQ4m3OBOFpo7gH7AVksLFGlEo+SSr7tIMhr+xlMhy8MS6h7vnwole6sTcKflBYo0osCUfPQAfpr44uoFEZb8q3BjMEv/FWZ18jD+SV2dRApCgSn5uAaoaPxCTTDGnCeStgAtNeeJEDXBZt1JFcDPCl64HLAUmJIrO/DjxBcXvxJm767C94vv3RVj8StJW7E/Rr/XUiD6xZJcDSdh'+
			'I41oBMtGxE0sfS1MtPmTeRXxHZFELKfAlFydkfjC+g8jBHcXb9ZFcHeM9R8m7cs8vWiVkAOKAlNyNSzxhfXLrR8VzyRFmcn22hTJmwJTctUv8YUtnxV/n98UZfYtdj3kwKDAlFx1S3xhx1fFXwSx48ukZTarm4gVFJiSq/aJLySZ5lNwKcpsVjcRKygwRUQMKTAlV3sSX3B7Um7BVjApymxWNxErKDAlV18mvtDpsOIHZqduSctsVjcRKygwJVerE1/o2rv4v04pylxT7HrIgUGBKblakvhCr0Hpz5MohBRlLi52PeTAoMCUXL2Z+EKvwQ48BxXvsdxzkI1eg5MG5ltFq4QcUBSYkqvFwOeNX7A74ruiF8vQs5zJDkmrBhYVrRJyQFFgSq6iwN8TXxx+rpO2HQrfymzbwcbwc5KG89+J103EcgpMycfDQJPNL90eG2'+
			'P/w1Xwgsf+hyvZSZKhujqJFIQCU/KxGXgs8cV+IxwMO7twj+ZDz3bSb0TSvsvHiT+SixSEDkGTfHUmPo2nc+MXS3AI2nbim25st7RAkUbUwpR8bQeuS3zRZocJN7gtHQQaepYzVVgCXI/CUgpMLUyxyl+Aycne+Pi9CG88Fcr56Iq2B9sYc4WLY0elnOf511Rli1hJgSlWcQHPAecle7Nmb4zFr4ZZ+lrYeFd2z0E2hp7lZPg5zmQDPPVeBi4iYfBJpBAUmGIlD/A8cE6qC6KR+FEW65dH+OrTKDu3xNj/bfx3sLKdjY5dbRzWx06vQQ56DXYkm2fZ2CxgEhC07lsQSU2BKVarAP4vhX9Engr8J1Bb4HJEGmjQR6xWS/y88v8DbCvA/bcBF9eVobCUolJgSqH8AziW+GCQFf2Lobp7HQs8a8H9RLKmR3IphipgCvDj'+
			'uj9no5r4cseH0aR0KTEFphSTHTiB+Jnmw4BjiAdou7r3vyUeimuJbx/3JvGNNLQ2XMqCAlNExJD6MEVEDCkwRUQMKTBFRAz9L46BeJIg6Mo6AAAAAElFTkSuQmCC';
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
		me.__9.appendChild(me._external_211);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_211.style.width=hotspot.customimagewidth + 'px';
			me._external_211.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_211.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_211.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__9;
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
		el.ggId="\uc6d4\uacc4\ucd08\ub4f1\ud559\uad50";
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
		me.__10.appendChild(me._external_212);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_212.style.width=hotspot.customimagewidth + 'px';
			me._external_212.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_212.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_212.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__10;
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
		el.ggId="\ud638\ub0a8\uace0\uc18d\ub3c4\ub85c";
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
		me.__11.appendChild(me._external_213);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_213.style.width=hotspot.customimagewidth + 'px';
			me._external_213.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_213.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_213.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
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
		el.ggId="\uc77c\uc9c4\uc2a4\ud3ec\ub809\uc2a4";
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
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
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
		me.__12.appendChild(me._external_214);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_214.style.width=hotspot.customimagewidth + 'px';
			me._external_214.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_214.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_214.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__12;
	};
	function SkinHotspotClass__20(parentScope,hotspot) {
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
		el=me.__20=document.createElement('div');
		el.ggId="\ub3c4\ucd0c2\uc800\uc218\uc9c0";
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
		me.__20.ggIsActive=function() {
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
		me.__20.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_20']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_20']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_215=document.createElement('div');
		els=me._external_215__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_215.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_215.ggSubElement.setAttribute('alt', player._(me._external_215.ggAltText));
			me._external_215.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_215.ggText_untranslated = img;
			me._external_215.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_215.ggSubElement.style.width = '0px';
			me._external_215.ggSubElement.style.height = '0px';
			me._external_215.ggSubElement.src='';
			me._external_215.ggSubElement.src=me._external_215.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_215.ggText != player._(me._external_215.ggText_untranslated)) {
				me._external_215.ggText = player._(me._external_215.ggText_untranslated);
				me._external_215.ggUpdateImage()
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
		me._external_215.ggIsActive=function() {
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
		me._external_215.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_215.clientWidth;
			var parentHeight = me._external_215.clientHeight;
			var img = me._external_215__img;
			var aspectRatioDiv = me._external_215.clientWidth / me._external_215.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_215.ggScrollbars || currentWidth < me._external_215.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_215.ggScrollbars || currentHeight < me._external_215.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1215=document.createElement('div');
		els=me._image_1215__img=document.createElement('img');
		els.className='ggskin ggskin_image_1215';
		hs=basePath + 'images/image_1215.png';
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
		me._image_1215.ggIsActive=function() {
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
		me._image_1215.ggUpdatePosition=function (useTransition) {
		}
		me._external_215.appendChild(me._image_1215);
		me.__20.appendChild(me._external_215);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_215.style.width=hotspot.customimagewidth + 'px';
			me._external_215.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_215.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_215.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__20;
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
		el.ggId="\uac00\ub78c\uc2dd\uc790\uc7ac\ub9c8\ud2b8";
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
		el=me._external_216=document.createElement('div');
		els=me._external_216__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_216.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_216.ggSubElement.setAttribute('alt', player._(me._external_216.ggAltText));
			me._external_216.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_216.ggText_untranslated = img;
			me._external_216.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_216.ggSubElement.style.width = '0px';
			me._external_216.ggSubElement.style.height = '0px';
			me._external_216.ggSubElement.src='';
			me._external_216.ggSubElement.src=me._external_216.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_216.ggText != player._(me._external_216.ggText_untranslated)) {
				me._external_216.ggText = player._(me._external_216.ggText_untranslated);
				me._external_216.ggUpdateImage()
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
		me._external_216.ggIsActive=function() {
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
		me._external_216.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_216.clientWidth;
			var parentHeight = me._external_216.clientHeight;
			var img = me._external_216__img;
			var aspectRatioDiv = me._external_216.clientWidth / me._external_216.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_216.ggScrollbars || currentWidth < me._external_216.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_216.ggScrollbars || currentHeight < me._external_216.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1216=document.createElement('div');
		els=me._image_1216__img=document.createElement('img');
		els.className='ggskin ggskin_image_1216';
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
		me._image_1216.ggIsActive=function() {
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
		me._image_1216.ggUpdatePosition=function (useTransition) {
		}
		me._external_216.appendChild(me._image_1216);
		me.__13.appendChild(me._external_216);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_216.style.width=hotspot.customimagewidth + 'px';
			me._external_216.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_216.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_216.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__13;
	};
	function SkinHotspotClass__14(parentScope,hotspot) {
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
		el=me.__14=document.createElement('div');
		el.ggId="\uc218\uc6441\uc800\uc218\uc9c0";
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
		me.__14.ggIsActive=function() {
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
		me.__14.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__14.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__14.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_14']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__14.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_14']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_217=document.createElement('div');
		els=me._external_217__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_217.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_217.ggSubElement.setAttribute('alt', player._(me._external_217.ggAltText));
			me._external_217.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_217.ggText_untranslated = img;
			me._external_217.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_217.ggSubElement.style.width = '0px';
			me._external_217.ggSubElement.style.height = '0px';
			me._external_217.ggSubElement.src='';
			me._external_217.ggSubElement.src=me._external_217.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_217.ggText != player._(me._external_217.ggText_untranslated)) {
				me._external_217.ggText = player._(me._external_217.ggText_untranslated);
				me._external_217.ggUpdateImage()
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
		me._external_217.ggIsActive=function() {
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
		me._external_217.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_217.clientWidth;
			var parentHeight = me._external_217.clientHeight;
			var img = me._external_217__img;
			var aspectRatioDiv = me._external_217.clientWidth / me._external_217.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_217.ggScrollbars || currentWidth < me._external_217.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_217.ggScrollbars || currentHeight < me._external_217.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1217=document.createElement('div');
		els=me._image_1217__img=document.createElement('img');
		els.className='ggskin ggskin_image_1217';
		hs=basePath + 'images/image_1217.png';
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
		me._image_1217.ggIsActive=function() {
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
		me._image_1217.ggUpdatePosition=function (useTransition) {
		}
		me._external_217.appendChild(me._image_1217);
		me.__14.appendChild(me._external_217);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_217.style.width=hotspot.customimagewidth + 'px';
			me._external_217.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_217.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_217.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__14;
	};
	function SkinHotspotClass__15(parentScope,hotspot) {
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
		el=me.__15=document.createElement('div');
		el.ggId="\uc218\uc644\ubb38\ud654\uc13c\ud130";
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
		me.__15.ggIsActive=function() {
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
		me.__15.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__15.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__15.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_15']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__15.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_15']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_218=document.createElement('div');
		els=me._external_218__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_218.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_218.ggSubElement.setAttribute('alt', player._(me._external_218.ggAltText));
			me._external_218.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_218.ggText_untranslated = img;
			me._external_218.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_218.ggSubElement.style.width = '0px';
			me._external_218.ggSubElement.style.height = '0px';
			me._external_218.ggSubElement.src='';
			me._external_218.ggSubElement.src=me._external_218.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_218.ggText != player._(me._external_218.ggText_untranslated)) {
				me._external_218.ggText = player._(me._external_218.ggText_untranslated);
				me._external_218.ggUpdateImage()
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
		me._external_218.ggIsActive=function() {
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
		me._external_218.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_218.clientWidth;
			var parentHeight = me._external_218.clientHeight;
			var img = me._external_218__img;
			var aspectRatioDiv = me._external_218.clientWidth / me._external_218.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_218.ggScrollbars || currentWidth < me._external_218.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_218.ggScrollbars || currentHeight < me._external_218.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1218=document.createElement('div');
		els=me._image_1218__img=document.createElement('img');
		els.className='ggskin ggskin_image_1218';
		hs=basePath + 'images/image_1218.png';
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
		me._image_1218.ggIsActive=function() {
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
		me._image_1218.ggUpdatePosition=function (useTransition) {
		}
		me._external_218.appendChild(me._image_1218);
		me.__15.appendChild(me._external_218);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_218.style.width=hotspot.customimagewidth + 'px';
			me._external_218.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_218.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_218.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__15;
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
		el.ggId="\uc6d0\ub2e8\uc0b0\uacf5\uc6d0";
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
		el=me._external_219=document.createElement('div');
		els=me._external_219__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_219.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_219.ggSubElement.setAttribute('alt', player._(me._external_219.ggAltText));
			me._external_219.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_219.ggText_untranslated = img;
			me._external_219.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_219.ggSubElement.style.width = '0px';
			me._external_219.ggSubElement.style.height = '0px';
			me._external_219.ggSubElement.src='';
			me._external_219.ggSubElement.src=me._external_219.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_219.ggText != player._(me._external_219.ggText_untranslated)) {
				me._external_219.ggText = player._(me._external_219.ggText_untranslated);
				me._external_219.ggUpdateImage()
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
		me._external_219.ggIsActive=function() {
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
		me._external_219.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_219.clientWidth;
			var parentHeight = me._external_219.clientHeight;
			var img = me._external_219__img;
			var aspectRatioDiv = me._external_219.clientWidth / me._external_219.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_219.ggScrollbars || currentWidth < me._external_219.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_219.ggScrollbars || currentHeight < me._external_219.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1219=document.createElement('div');
		els=me._image_1219__img=document.createElement('img');
		els.className='ggskin ggskin_image_1219';
		hs=basePath + 'images/image_1219.png';
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
		me._image_1219.ggIsActive=function() {
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
		me._image_1219.ggUpdatePosition=function (useTransition) {
		}
		me._external_219.appendChild(me._image_1219);
		me.__16.appendChild(me._external_219);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_219.style.width=hotspot.customimagewidth + 'px';
			me._external_219.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_219.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_219.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__16;
	};
	function SkinHotspotClass__17(parentScope,hotspot) {
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
		el=me.__17=document.createElement('div');
		el.ggId="\uc218\uc644\uace0\ub4f1\ud559\uad50";
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
		me.__17.ggIsActive=function() {
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
		me.__17.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__17.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__17.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_17']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__17.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_17']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_220=document.createElement('div');
		els=me._external_220__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_220.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_220.ggSubElement.setAttribute('alt', player._(me._external_220.ggAltText));
			me._external_220.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_220.ggText_untranslated = img;
			me._external_220.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_220.ggSubElement.style.width = '0px';
			me._external_220.ggSubElement.style.height = '0px';
			me._external_220.ggSubElement.src='';
			me._external_220.ggSubElement.src=me._external_220.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_220.ggText != player._(me._external_220.ggText_untranslated)) {
				me._external_220.ggText = player._(me._external_220.ggText_untranslated);
				me._external_220.ggUpdateImage()
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
		me._external_220.ggIsActive=function() {
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
		me._external_220.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_220.clientWidth;
			var parentHeight = me._external_220.clientHeight;
			var img = me._external_220__img;
			var aspectRatioDiv = me._external_220.clientWidth / me._external_220.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_220.ggScrollbars || currentWidth < me._external_220.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_220.ggScrollbars || currentHeight < me._external_220.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1220=document.createElement('div');
		els=me._image_1220__img=document.createElement('img');
		els.className='ggskin ggskin_image_1220';
		hs='data:image/png;base64,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'+
			'3pa95GV0SKobEhuW/4ulfj7FqfcLJhWSa7gcu7yjPLVAULTIDqUHQI8BxwrhvX8wdgxAQfw8b5GD4+2WljqfIp4hnbhn27m9i1oYndGxPsXJ/Ip9md6g1gbjgSfNu1K7qsoIEJUB2KlgM/xuHgdhM9elsMGZ0MzgFnWvQdZNGrv0WPXhal5ZaWXRMx0NgAjfU2J47ZHDtkc2SfzcG3bfbtbmLvtiZOHPUkM34GfCUcCeYxKNB7BQ/MFs3TKB/GwdxzETnp1JEMyqJNd3SiaIEJUB2KjgIeBT5StEKISLH8EfhCOBLcXuyCmCrqZL/mN2omcDPJnjEROfkdJvmZn9mdwhKKXMNsqzoUPY3k/hw3A1reQuTkEye5pc33CrUtrtu6TGC2qA5Fx5Lc9uJqilwDFhFXNJHcYfYHhd6Dx21dLjBbNAfn14F5gEZbinQ/9cBj'+
			'wAPN23J3e102MFtUh6KDSIbmjUBFkYsjIp3bRHILicfCkeC+YhfGTV0+MNuqDkWnAiFgLjCmuKURkTa2As8CkXAkuKrIZfFMtwrMtqpD0THAHGAG8GFyWHtTRHL2FsmFwv8CLA5HgluLXJ6C6LaBmao6FD0dmAiMB0Y2/zsDOA3oDwSAnkUroEj3cRyIAYeA/cC7wI7mfxuAdeFI8L3iFa94TprAlG4p9ZdPKwFIl6ZhOyIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJ'+
			'giIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIi'+
			'hhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIoYUmCIihhSYIiKGFJgiIob8xS6AnHJKgHOBi9J8rx44DuwBtgCrgGXAG0'+
			'BTYYonkpll23axyyCnhqHArcC1wPscnvtP4EngYZJhKlIUCkzx2kDgbuBGIJDntWLAQuAu4ECe1xJxTIEpXrqKZK3wNJevux/4ChBx+boiWanTR7zgB/6LZKC5HZY0X/Pp5nvoObwUjGqY4rYgyaC8PNMBTQnY8WaCnesTvLOtiUPv2NRHk7+H5UGLfmdYDBlTwogJPkZO8lHiy3q/F4AQEHXvRxBJT4EpbvIDvwE+ke6bDcdtVr0cZ01NnOgRs9+7YF+Lyio/Uy/xU9bTynTY88CVQDyHMosYU2CKm34C3JLuG5tXJljyixjHDuX2+9azn8XszwWomJ6xuvkI8KWcLi5iSIEpbgmRfK7Yjt0ES34RY81idyp/lXP8zP5cACv90/drgF+6ciORNBSY4oaBwCZSOnjsJnjuwQY2r0y4erOx03xccXtZutA8CFQA+1y9'+
			'oUgz9ZKLG+4lTW/40kUx18MSmpv3i2LpvjUAuMf1G4o0U2BKvoYBX0x9cdPKBKt/710fzJrfx9mUPoy/0FwmEdcpMCVfXwJK277QELVZ8vO0NUBXLfl5jIZoh0dKpcCXPb+5nJIUmJKPEuC61BdXvRTn+GHvn40fP2yz6qW0tdjr0O+2eEC/VJKPqaQspNGUwLUecRNrFsdp6tgyH0pyRSQRVykwJR8fTX1hx5sJonWFG3kRrbPZ8WbaZ5kzC1YIOWUoMCUfU1Jf2LHO/V7xzmS459RCl0NOfgpMyUdF6gvvbi/8Or8Z7jm20OWQk58CU/IxJPWFg+8UfiLEwb1p79mhbCL5UmBKPnqnvpBmmI/nMtyzQ9lE8qXAFBExpMCUfBxNfaEsmHEJNs9kuGeHsonkS4Ep+dib+sKAwYUPzAFD0t6zQ9lE8qXAlHxsSn3hjF'+
			'GF/5XKcM/NhS6HnPwUmJKP1akvjJyYfT8JL2S456pCl0NOfgpMyccrqS+MnOQj2KdwzfJgH4uRk9IG5qsFK4ScMhSYko9VwD/bvlDiS66KXiiVc/zpNknbA7xRsELIKUOBKfloAp5IfXHqpX569vO+ltmzn8XUS9KG8xMkyybiKgWm5OthoN3il2VBi9mfD3h+49mfD6TbSTLWXCYR1ykwJV9vAQtTX6yY5mPKxd41zSsv9lMxLe2zy0dJNslFXKdN0MQNA0kO4xnY9sUibIJ2gOSiGwdcvaFIM9UwxQ0HgK+kvmiVwBW3l7naCVQ5x58pLAFuQ2EpHlINU9z0E+CWdN/4+2sJli6K5bx1Rc++FrM+F+D9F2Qc5/nTTPcWcYsCU9wUAJ4BPpHumw3HbVa9HGfN4rjxquzBPhaVc/xMvcSfroOnxfPAZ0jpfBJxmwJT'+
			'3BYEfg1ckumApkRyK4sd6xK8s62JQ+/a1B9L/h6W97Lof4bF4NEljJzoY+QkX7pxlm29CFwFRN37EUTSU2CKF0qB/4f3TeRHgP8FNHp8HxFAnT7ijUaS+5V/FtjvwfX3A9c030NhKQWjwBQvPQ28n2RnkBvPF2PN13o/8EsXrifiiJrkUihDgVuB65r/24k9JKc7PowGpUsRKTCl0EqAc0nuaT4FOIdkgPZq/v4xkqG4heTyca+QXEhDc8Ol6BSYIiKG9AxTRMSQAlNExJACU0TEkAJTRMSQAlNExJACU0TEkAJTRMSQAlNExND/AC/lum6mcH3+AAAAAElFTkSuQmCC';
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
		me._image_1220.ggIsActive=function() {
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
		me._image_1220.ggUpdatePosition=function (useTransition) {
		}
		me._external_220.appendChild(me._image_1220);
		me.__17.appendChild(me._external_220);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_220.style.width=hotspot.customimagewidth + 'px';
			me._external_220.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_220.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_220.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__17;
	};
	function SkinHotspotClass__18(parentScope,hotspot) {
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
		el=me.__18=document.createElement('div');
		el.ggId="\uc644\ub3d9\uacf5\uc6d0";
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
		me.__18.ggIsActive=function() {
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
		me.__18.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__18.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__18.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_18']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__18.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_18']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_221=document.createElement('div');
		els=me._external_221__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_221.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_221.ggSubElement.setAttribute('alt', player._(me._external_221.ggAltText));
			me._external_221.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_221.ggText_untranslated = img;
			me._external_221.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_221.ggSubElement.style.width = '0px';
			me._external_221.ggSubElement.style.height = '0px';
			me._external_221.ggSubElement.src='';
			me._external_221.ggSubElement.src=me._external_221.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_221.ggText != player._(me._external_221.ggText_untranslated)) {
				me._external_221.ggText = player._(me._external_221.ggText_untranslated);
				me._external_221.ggUpdateImage()
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
		me._external_221.ggIsActive=function() {
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
		me._external_221.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_221.clientWidth;
			var parentHeight = me._external_221.clientHeight;
			var img = me._external_221__img;
			var aspectRatioDiv = me._external_221.clientWidth / me._external_221.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_221.ggScrollbars || currentWidth < me._external_221.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_221.ggScrollbars || currentHeight < me._external_221.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1221=document.createElement('div');
		els=me._image_1221__img=document.createElement('img');
		els.className='ggskin ggskin_image_1221';
		hs=basePath + 'images/image_1221.png';
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
		me._image_1221.ggIsActive=function() {
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
		me._image_1221.ggUpdatePosition=function (useTransition) {
		}
		me._external_221.appendChild(me._image_1221);
		me.__18.appendChild(me._external_221);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_221.style.width=hotspot.customimagewidth + 'px';
			me._external_221.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_221.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_221.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__18;
	};
	function SkinHotspotClass__19(parentScope,hotspot) {
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
		el=me.__19=document.createElement('div');
		el.ggId="\uc218\uc644\ucd08\ub4f1\ud559\uad50";
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
		me.__19.ggIsActive=function() {
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
		me.__19.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__19.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__19.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_19']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__19.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_19']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_222=document.createElement('div');
		els=me._external_222__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_222.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_222.ggSubElement.setAttribute('alt', player._(me._external_222.ggAltText));
			me._external_222.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_222.ggText_untranslated = img;
			me._external_222.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_222.ggSubElement.style.width = '0px';
			me._external_222.ggSubElement.style.height = '0px';
			me._external_222.ggSubElement.src='';
			me._external_222.ggSubElement.src=me._external_222.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_222.ggText != player._(me._external_222.ggText_untranslated)) {
				me._external_222.ggText = player._(me._external_222.ggText_untranslated);
				me._external_222.ggUpdateImage()
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
		me._external_222.ggIsActive=function() {
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
		me._external_222.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_222.clientWidth;
			var parentHeight = me._external_222.clientHeight;
			var img = me._external_222__img;
			var aspectRatioDiv = me._external_222.clientWidth / me._external_222.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_222.ggScrollbars || currentWidth < me._external_222.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_222.ggScrollbars || currentHeight < me._external_222.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1222=document.createElement('div');
		els=me._image_1222__img=document.createElement('img');
		els.className='ggskin ggskin_image_1222';
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
		me._image_1222.ggIsActive=function() {
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
		me._image_1222.ggUpdatePosition=function (useTransition) {
		}
		me._external_222.appendChild(me._image_1222);
		me.__19.appendChild(me._external_222);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_222.style.width=hotspot.customimagewidth + 'px';
			me._external_222.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_222.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_222.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__19;
	};
	function SkinHotspotClass__21(parentScope,hotspot) {
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
		el=me.__21=document.createElement('div');
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
		me.__21.ggIsActive=function() {
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
		me.__21.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__21.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__21.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_21']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__21.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_21']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_223=document.createElement('div');
		els=me._external_223__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_223.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_223.ggSubElement.setAttribute('alt', player._(me._external_223.ggAltText));
			me._external_223.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_223.ggText_untranslated = img;
			me._external_223.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_223.ggSubElement.style.width = '0px';
			me._external_223.ggSubElement.style.height = '0px';
			me._external_223.ggSubElement.src='';
			me._external_223.ggSubElement.src=me._external_223.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_223.ggText != player._(me._external_223.ggText_untranslated)) {
				me._external_223.ggText = player._(me._external_223.ggText_untranslated);
				me._external_223.ggUpdateImage()
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
		me._external_223.ggIsActive=function() {
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
		me._external_223.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_223.clientWidth;
			var parentHeight = me._external_223.clientHeight;
			var img = me._external_223__img;
			var aspectRatioDiv = me._external_223.clientWidth / me._external_223.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_223.ggScrollbars || currentWidth < me._external_223.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_223.ggScrollbars || currentHeight < me._external_223.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1223=document.createElement('div');
		els=me._image_1223__img=document.createElement('img');
		els.className='ggskin ggskin_image_1223';
		hs=basePath + 'images/image_1223.png';
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
		me._image_1223.ggIsActive=function() {
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
		me._image_1223.ggUpdatePosition=function (useTransition) {
		}
		me._external_223.appendChild(me._image_1223);
		me.__21.appendChild(me._external_223);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_223.style.width=hotspot.customimagewidth + 'px';
			me._external_223.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_223.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_223.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__21;
	};
	function SkinHotspotClass__22(parentScope,hotspot) {
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
		el=me.__22=document.createElement('div');
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
		me.__22.ggIsActive=function() {
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
		me.__22.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__22.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__22.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_22']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__22.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_22']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_224=document.createElement('div');
		els=me._external_224__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_224.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_224.ggSubElement.setAttribute('alt', player._(me._external_224.ggAltText));
			me._external_224.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_224.ggText_untranslated = img;
			me._external_224.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_224.ggSubElement.style.width = '0px';
			me._external_224.ggSubElement.style.height = '0px';
			me._external_224.ggSubElement.src='';
			me._external_224.ggSubElement.src=me._external_224.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_224.ggText != player._(me._external_224.ggText_untranslated)) {
				me._external_224.ggText = player._(me._external_224.ggText_untranslated);
				me._external_224.ggUpdateImage()
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
		me._external_224.ggIsActive=function() {
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
		me._external_224.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_224.clientWidth;
			var parentHeight = me._external_224.clientHeight;
			var img = me._external_224__img;
			var aspectRatioDiv = me._external_224.clientWidth / me._external_224.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_224.ggScrollbars || currentWidth < me._external_224.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_224.ggScrollbars || currentHeight < me._external_224.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1224=document.createElement('div');
		els=me._image_1224__img=document.createElement('img');
		els.className='ggskin ggskin_image_1224';
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
		me._image_1224.ggIsActive=function() {
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
		me._image_1224.ggUpdatePosition=function (useTransition) {
		}
		me._external_224.appendChild(me._image_1224);
		me.__22.appendChild(me._external_224);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_224.style.width=hotspot.customimagewidth + 'px';
			me._external_224.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_224.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_224.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__22;
	};
	function SkinHotspotClass__23(parentScope,hotspot) {
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
		el=me.__23=document.createElement('div');
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
		me.__23.ggIsActive=function() {
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
		me.__23.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__23.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__23.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_23']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__23.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_23']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_225=document.createElement('div');
		els=me._external_225__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_225.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_225.ggSubElement.setAttribute('alt', player._(me._external_225.ggAltText));
			me._external_225.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_225.ggText_untranslated = img;
			me._external_225.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_225.ggSubElement.style.width = '0px';
			me._external_225.ggSubElement.style.height = '0px';
			me._external_225.ggSubElement.src='';
			me._external_225.ggSubElement.src=me._external_225.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_225.ggText != player._(me._external_225.ggText_untranslated)) {
				me._external_225.ggText = player._(me._external_225.ggText_untranslated);
				me._external_225.ggUpdateImage()
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
		me._external_225.ggIsActive=function() {
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
		me._external_225.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_225.clientWidth;
			var parentHeight = me._external_225.clientHeight;
			var img = me._external_225__img;
			var aspectRatioDiv = me._external_225.clientWidth / me._external_225.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_225.ggScrollbars || currentWidth < me._external_225.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_225.ggScrollbars || currentHeight < me._external_225.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1225=document.createElement('div');
		els=me._image_1225__img=document.createElement('img');
		els.className='ggskin ggskin_image_1225';
		hs=basePath + 'images/image_1225.png';
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
		me._image_1225.ggIsActive=function() {
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
		me._image_1225.ggUpdatePosition=function (useTransition) {
		}
		me._external_225.appendChild(me._image_1225);
		me.__23.appendChild(me._external_225);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_225.style.width=hotspot.customimagewidth + 'px';
			me._external_225.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_225.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_225.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__23;
	};
	function SkinHotspotClass__24(parentScope,hotspot) {
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
		el=me.__24=document.createElement('div');
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
		me.__24.ggIsActive=function() {
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
		me.__24.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__24.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__24.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_24']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__24.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_24']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_226=document.createElement('div');
		els=me._external_226__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_226.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_226.ggSubElement.setAttribute('alt', player._(me._external_226.ggAltText));
			me._external_226.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_226.ggText_untranslated = img;
			me._external_226.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_226.ggSubElement.style.width = '0px';
			me._external_226.ggSubElement.style.height = '0px';
			me._external_226.ggSubElement.src='';
			me._external_226.ggSubElement.src=me._external_226.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_226.ggText != player._(me._external_226.ggText_untranslated)) {
				me._external_226.ggText = player._(me._external_226.ggText_untranslated);
				me._external_226.ggUpdateImage()
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
		me._external_226.ggIsActive=function() {
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
		me._external_226.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_226.clientWidth;
			var parentHeight = me._external_226.clientHeight;
			var img = me._external_226__img;
			var aspectRatioDiv = me._external_226.clientWidth / me._external_226.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_226.ggScrollbars || currentWidth < me._external_226.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_226.ggScrollbars || currentHeight < me._external_226.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1226=document.createElement('div');
		els=me._image_1226__img=document.createElement('img');
		els.className='ggskin ggskin_image_1226';
		hs=basePath + 'images/image_1226.png';
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
		me._image_1226.ggIsActive=function() {
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
		me._image_1226.ggUpdatePosition=function (useTransition) {
		}
		me._external_226.appendChild(me._image_1226);
		me.__24.appendChild(me._external_226);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_226.style.width=hotspot.customimagewidth + 'px';
			me._external_226.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_226.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_226.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__24;
	};
	function SkinHotspotClass__25(parentScope,hotspot) {
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
		el=me.__25=document.createElement('div');
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
		me.__25.ggIsActive=function() {
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
		me.__25.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__25.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__25.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_25']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__25.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_25']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_227=document.createElement('div');
		els=me._external_227__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_227.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_227.ggSubElement.setAttribute('alt', player._(me._external_227.ggAltText));
			me._external_227.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_227.ggText_untranslated = img;
			me._external_227.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_227.ggSubElement.style.width = '0px';
			me._external_227.ggSubElement.style.height = '0px';
			me._external_227.ggSubElement.src='';
			me._external_227.ggSubElement.src=me._external_227.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_227.ggText != player._(me._external_227.ggText_untranslated)) {
				me._external_227.ggText = player._(me._external_227.ggText_untranslated);
				me._external_227.ggUpdateImage()
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
		me._external_227.ggIsActive=function() {
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
		me._external_227.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_227.clientWidth;
			var parentHeight = me._external_227.clientHeight;
			var img = me._external_227__img;
			var aspectRatioDiv = me._external_227.clientWidth / me._external_227.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_227.ggScrollbars || currentWidth < me._external_227.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_227.ggScrollbars || currentHeight < me._external_227.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1227=document.createElement('div');
		els=me._image_1227__img=document.createElement('img');
		els.className='ggskin ggskin_image_1227';
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
		me._image_1227.ggIsActive=function() {
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
		me._image_1227.ggUpdatePosition=function (useTransition) {
		}
		me._external_227.appendChild(me._image_1227);
		me.__25.appendChild(me._external_227);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_227.style.width=hotspot.customimagewidth + 'px';
			me._external_227.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_227.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_227.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__25;
	};
	function SkinHotspotClass__110(parentScope,hotspot) {
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
		el=me.__110=document.createElement('div');
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
		me.__110.ggIsActive=function() {
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
		me.__110.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__110.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__110.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_110']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__110.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_110']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_228=document.createElement('div');
		els=me._external_228__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_228.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_228.ggSubElement.setAttribute('alt', player._(me._external_228.ggAltText));
			me._external_228.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_228.ggText_untranslated = img;
			me._external_228.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_228.ggSubElement.style.width = '0px';
			me._external_228.ggSubElement.style.height = '0px';
			me._external_228.ggSubElement.src='';
			me._external_228.ggSubElement.src=me._external_228.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_228.ggText != player._(me._external_228.ggText_untranslated)) {
				me._external_228.ggText = player._(me._external_228.ggText_untranslated);
				me._external_228.ggUpdateImage()
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
		me._external_228.ggIsActive=function() {
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
		me._external_228.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_228.clientWidth;
			var parentHeight = me._external_228.clientHeight;
			var img = me._external_228__img;
			var aspectRatioDiv = me._external_228.clientWidth / me._external_228.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_228.ggScrollbars || currentWidth < me._external_228.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_228.ggScrollbars || currentHeight < me._external_228.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1228=document.createElement('div');
		els=me._image_1228__img=document.createElement('img');
		els.className='ggskin ggskin_image_1228';
		hs=basePath + 'images/image_1228.png';
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
		hs+='height : 92px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((92px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1228.ggIsActive=function() {
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
		me._image_1228.ggUpdatePosition=function (useTransition) {
		}
		me._external_228.appendChild(me._image_1228);
		me.__110.appendChild(me._external_228);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_228.style.width=hotspot.customimagewidth + 'px';
			me._external_228.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_228.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_228.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__110;
	};
	function SkinHotspotClass__26(parentScope,hotspot) {
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
		el=me.__26=document.createElement('div');
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
		me.__26.ggIsActive=function() {
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
		me.__26.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__26.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__26.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_26']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__26.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_26']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_229=document.createElement('div');
		els=me._external_229__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_229.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_229.ggSubElement.setAttribute('alt', player._(me._external_229.ggAltText));
			me._external_229.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_229.ggText_untranslated = img;
			me._external_229.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_229.ggSubElement.style.width = '0px';
			me._external_229.ggSubElement.style.height = '0px';
			me._external_229.ggSubElement.src='';
			me._external_229.ggSubElement.src=me._external_229.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_229.ggText != player._(me._external_229.ggText_untranslated)) {
				me._external_229.ggText = player._(me._external_229.ggText_untranslated);
				me._external_229.ggUpdateImage()
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
		me._external_229.ggIsActive=function() {
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
		me._external_229.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_229.clientWidth;
			var parentHeight = me._external_229.clientHeight;
			var img = me._external_229__img;
			var aspectRatioDiv = me._external_229.clientWidth / me._external_229.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_229.ggScrollbars || currentWidth < me._external_229.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_229.ggScrollbars || currentHeight < me._external_229.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1229=document.createElement('div');
		els=me._image_1229__img=document.createElement('img');
		els.className='ggskin ggskin_image_1229';
		hs=basePath + 'images/image_1229.png';
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
		me._image_1229.ggIsActive=function() {
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
		me._image_1229.ggUpdatePosition=function (useTransition) {
		}
		me._external_229.appendChild(me._image_1229);
		me.__26.appendChild(me._external_229);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_229.style.width=hotspot.customimagewidth + 'px';
			me._external_229.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_229.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_229.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__26;
	};
	function SkinHotspotClass__27(parentScope,hotspot) {
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
		el=me.__27=document.createElement('div');
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
		me.__27.ggIsActive=function() {
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
		me.__27.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_27']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_27']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_230=document.createElement('div');
		els=me._external_230__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_230.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_230.ggSubElement.setAttribute('alt', player._(me._external_230.ggAltText));
			me._external_230.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_230.ggText_untranslated = img;
			me._external_230.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_230.ggSubElement.style.width = '0px';
			me._external_230.ggSubElement.style.height = '0px';
			me._external_230.ggSubElement.src='';
			me._external_230.ggSubElement.src=me._external_230.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_230.ggText != player._(me._external_230.ggText_untranslated)) {
				me._external_230.ggText = player._(me._external_230.ggText_untranslated);
				me._external_230.ggUpdateImage()
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
		me._external_230.ggIsActive=function() {
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
		me._external_230.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_230.clientWidth;
			var parentHeight = me._external_230.clientHeight;
			var img = me._external_230__img;
			var aspectRatioDiv = me._external_230.clientWidth / me._external_230.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_230.ggScrollbars || currentWidth < me._external_230.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_230.ggScrollbars || currentHeight < me._external_230.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1230=document.createElement('div');
		els=me._image_1230__img=document.createElement('img');
		els.className='ggskin ggskin_image_1230';
		hs=basePath + 'images/image_1230.png';
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
		me._image_1230.ggIsActive=function() {
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
		me._image_1230.ggUpdatePosition=function (useTransition) {
		}
		me._external_230.appendChild(me._image_1230);
		me.__27.appendChild(me._external_230);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_230.style.width=hotspot.customimagewidth + 'px';
			me._external_230.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_230.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_230.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__27;
	};
	function SkinHotspotClass__28(parentScope,hotspot) {
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
		el=me.__28=document.createElement('div');
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
		me.__28.ggIsActive=function() {
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
		me.__28.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__28.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__28.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_28']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__28.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_28']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_231=document.createElement('div');
		els=me._external_231__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_231.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_231.ggSubElement.setAttribute('alt', player._(me._external_231.ggAltText));
			me._external_231.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_231.ggText_untranslated = img;
			me._external_231.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_231.ggSubElement.style.width = '0px';
			me._external_231.ggSubElement.style.height = '0px';
			me._external_231.ggSubElement.src='';
			me._external_231.ggSubElement.src=me._external_231.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_231.ggText != player._(me._external_231.ggText_untranslated)) {
				me._external_231.ggText = player._(me._external_231.ggText_untranslated);
				me._external_231.ggUpdateImage()
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
		me._external_231.ggIsActive=function() {
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
		me._external_231.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_231.clientWidth;
			var parentHeight = me._external_231.clientHeight;
			var img = me._external_231__img;
			var aspectRatioDiv = me._external_231.clientWidth / me._external_231.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_231.ggScrollbars || currentWidth < me._external_231.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_231.ggScrollbars || currentHeight < me._external_231.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1231=document.createElement('div');
		els=me._image_1231__img=document.createElement('img');
		els.className='ggskin ggskin_image_1231';
		hs=basePath + 'images/image_1231.png';
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
		me._image_1231.ggIsActive=function() {
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
		me._image_1231.ggUpdatePosition=function (useTransition) {
		}
		me._external_231.appendChild(me._image_1231);
		me.__28.appendChild(me._external_231);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_231.style.width=hotspot.customimagewidth + 'px';
			me._external_231.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_231.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_231.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__28;
	};
	function SkinHotspotClass__29(parentScope,hotspot) {
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
		el=me.__29=document.createElement('div');
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
		me.__29.ggIsActive=function() {
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
		me.__29.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__29.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__29.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_29']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__29.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_29']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_232=document.createElement('div');
		els=me._external_232__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_232.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_232.ggSubElement.setAttribute('alt', player._(me._external_232.ggAltText));
			me._external_232.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_232.ggText_untranslated = img;
			me._external_232.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_232.ggSubElement.style.width = '0px';
			me._external_232.ggSubElement.style.height = '0px';
			me._external_232.ggSubElement.src='';
			me._external_232.ggSubElement.src=me._external_232.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_232.ggText != player._(me._external_232.ggText_untranslated)) {
				me._external_232.ggText = player._(me._external_232.ggText_untranslated);
				me._external_232.ggUpdateImage()
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
		me._external_232.ggIsActive=function() {
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
		me._external_232.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_232.clientWidth;
			var parentHeight = me._external_232.clientHeight;
			var img = me._external_232__img;
			var aspectRatioDiv = me._external_232.clientWidth / me._external_232.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_232.ggScrollbars || currentWidth < me._external_232.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_232.ggScrollbars || currentHeight < me._external_232.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1232=document.createElement('div');
		els=me._image_1232__img=document.createElement('img');
		els.className='ggskin ggskin_image_1232';
		hs=basePath + 'images/image_1232.png';
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
		me._image_1232.ggIsActive=function() {
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
		me._image_1232.ggUpdatePosition=function (useTransition) {
		}
		me._external_232.appendChild(me._image_1232);
		me.__29.appendChild(me._external_232);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_232.style.width=hotspot.customimagewidth + 'px';
			me._external_232.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_232.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_232.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__29;
	};
	function SkinHotspotClass__30(parentScope,hotspot) {
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
		el=me.__30=document.createElement('div');
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
		me.__30.ggIsActive=function() {
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
		me.__30.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__30.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__30.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_30']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__30.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_30']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_233=document.createElement('div');
		els=me._external_233__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_233.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_233.ggSubElement.setAttribute('alt', player._(me._external_233.ggAltText));
			me._external_233.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_233.ggText_untranslated = img;
			me._external_233.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_233.ggSubElement.style.width = '0px';
			me._external_233.ggSubElement.style.height = '0px';
			me._external_233.ggSubElement.src='';
			me._external_233.ggSubElement.src=me._external_233.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_233.ggText != player._(me._external_233.ggText_untranslated)) {
				me._external_233.ggText = player._(me._external_233.ggText_untranslated);
				me._external_233.ggUpdateImage()
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
		me._external_233.ggIsActive=function() {
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
		me._external_233.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_233.clientWidth;
			var parentHeight = me._external_233.clientHeight;
			var img = me._external_233__img;
			var aspectRatioDiv = me._external_233.clientWidth / me._external_233.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_233.ggScrollbars || currentWidth < me._external_233.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_233.ggScrollbars || currentHeight < me._external_233.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1233=document.createElement('div');
		els=me._image_1233__img=document.createElement('img');
		els.className='ggskin ggskin_image_1233';
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
		me._image_1233.ggIsActive=function() {
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
		me._image_1233.ggUpdatePosition=function (useTransition) {
		}
		me._external_233.appendChild(me._image_1233);
		me.__30.appendChild(me._external_233);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_233.style.width=hotspot.customimagewidth + 'px';
			me._external_233.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_233.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_233.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__30;
	};
	function SkinHotspotClass__31(parentScope,hotspot) {
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
		el=me.__31=document.createElement('div');
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
		me.__31.ggIsActive=function() {
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
		me.__31.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__31.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__31.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_31']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__31.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_31']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_234=document.createElement('div');
		els=me._external_234__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_234.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_234.ggSubElement.setAttribute('alt', player._(me._external_234.ggAltText));
			me._external_234.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_234.ggText_untranslated = img;
			me._external_234.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_234.ggSubElement.style.width = '0px';
			me._external_234.ggSubElement.style.height = '0px';
			me._external_234.ggSubElement.src='';
			me._external_234.ggSubElement.src=me._external_234.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_234.ggText != player._(me._external_234.ggText_untranslated)) {
				me._external_234.ggText = player._(me._external_234.ggText_untranslated);
				me._external_234.ggUpdateImage()
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
		me._external_234.ggIsActive=function() {
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
		me._external_234.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_234.clientWidth;
			var parentHeight = me._external_234.clientHeight;
			var img = me._external_234__img;
			var aspectRatioDiv = me._external_234.clientWidth / me._external_234.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_234.ggScrollbars || currentWidth < me._external_234.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_234.ggScrollbars || currentHeight < me._external_234.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1234=document.createElement('div');
		els=me._image_1234__img=document.createElement('img');
		els.className='ggskin ggskin_image_1234';
		hs='data:image/png;base64,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'+
			'5XKyU5CW2AGl9wBvAbIK3N8ipnuJhzvceR3ctF5MzSeDjK60+F2PpO2iPOTgCf9Qe8qx2sVlpyFtoANb7gp4CXSTO43R6oqi5m+lVuvAMU3iKSWLAxypoXwqyvbSGc+ha07U4An/cHvG86V7P05TS0oaPF/SowKN1jFJfAhXPcTPtcMYOGKrxFpKtjh6KsfaWFja+HacnsduEx4PJCaGG3y3loQ0cf90vAiEyOY1kwcpKLC+e4GVvlwlPqTP1ExDwtzbBjXYSNr4fZuymSyia88ewDrsh3H3Z3eQltgBpfcDjwAnCxE8dze2DUJBcjJrgYOTF2E9FSI1zktBWNQv2+VvZubmXflgh7NkUy6QLp7j1ggT/g3e/YER2St9AGqPEFS4EfkOIEHDv69LcYPjYW3oPPsRhYbtGvzKJPP4viUkvLpYoYoKUZWpqinDoR5URD'+
			'lI/qoxzdH6V+XysHdramMynGjh8Bd/gD3gwGC2dPXkO7XduU98dJYa0SERGHNRIL65xPTU9FQYQ2QI0vOAb4MfDpfNdFRM44vwNu8ge8u/JdkWQKZiJ224c1B7iV2B1bEZFsO0Ysc+aYENhQQC3tzmp8wbOI7bd2K6DlmETEaWFi2yP+iz/gPZzvyqSiIEO7XY0vOJ7YFmZXU0BXBSJirFYgAHwnV3s6Oq2gQ7tdW3h/A7gB0GhsEUlVE/Ak8H1/wLs135XJhBGh3a7GFywnFtw3A5V5ro6IFL6txLYDe9If8NbnuzJOMCq0O6vxBacBPmABMC6/tRGRArIDWAEE/AHv2jzXxXHGhnZnNb7gOGA+MAv4JGms3S0ixvqA2GYrbwGv+QPeHXmuT1adFqHdXY0veDZwITARGN32byhwFlAGeIC+eaugiNh1EggBDcBh4B'+
			'Cwu+3fZmCjP+D9MH/Vy73TMrTljNP9l1irzshpS8PoREQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltE'+
			'xCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExCAKbRERgyi0RUQMotAWETGIQltExC'+
			'DufFdAJA1FwMXAbGBaLz8/AtQB24G1wBvAe0Brbqonkj1WNBrNdx1E7KoAbgeuBT6W4mv/CjwNPE4s0EWMpNAWEwwBvgvcDHgyPFYIWAY8QKxFLmIUhbYUuoXEWsdnOXzcw8AdQMDh44pklW5ESqFyA/9FLFSdDmzajvls2zl0b0eMoZa2FCIvsbC+Il6B1gjsfj/Cnk0RDu5speFglKZg7He51GsxaKjF8HFFjJrkYvRkF0WuhOd7CfABQefegkh2KLSl0LiBXwBX9vbD5pNR1r4aZn1tmOBH9n53vQMtqqrdTLvcTUlfK16xF4G/A8Jp1FkkZxTaUmh+CNzW2w+2rY6w8qchTjSk9zvbd5DFvC97qJwZt9m9BPhaWgcXyRGFthQSH7F+5i6irbDypyHWv+ZMI7hqvpt5X/Zg9X5H5xrgfxw5kUgWKLSlUAwBttLt'+
			'pmO0FV54tJltqyOOnmz8DBdXLSrpLbiPApVAvaMnFHGIRo9IoXiIXkaJrFoecjywoa2rZXmotx8NBh50/IQiDlFoSyEYAXy1+5NbV0dY9+vs3Rdc/+swW3v/QriprU4iBUehLYXga0Bx5yeag1FW/qTXlrCjVv4kRHOwRxdhMfCPWT+5SBoU2pJvRcB13Z9c+0qYk8eyf7/l5LEoa1/ptTV/Hfr7kAKkX0rJt2l0W/ypNYJjI0XsWP9amNaevSQVxFYSFCkoCm3Jt890f2L3+xGCjbkb1RRsjLL7/V77tufkrBIiNim0Jd+mdn9i90bnR4skE+ecva3VLZJXCm3Jt8ruTxzalfu9CuKcc3yu6yGSjEJb8m149yeOHsz9hK+jB3o9Z4+6ieSbQlvyrX/3J3oZgpd1cc7Zo24i+abQFhExiEJb8u149ydKvHGXT82aOO'+
			'fsUTeRfFNoS74d6P7E4GG5D+3Bw3s9Z4+6ieSbQlvybWv3J4aOyf2vZZxzbst1PUSSUWhLvq3r/sToCxPvDZYNcc65Ntf1EElGoS359tvuT4ye7MI7IHddJN4BFqMn9xrar+esEiI2KbQl39YCf+38RJErtrtMrlTNd/e28W8d8F7OKiFik0Jb8q0VeKr7k9M+56bvoOy3tvsOsph2ea9fEE8Rq5tIQVFoSyF4HOiyeHaJ12LeVzxZP/G8r3h626E91FYnkYKj0JZC8AGwrPuTlTNcTL0se90kVZe5qZzRa1/2j4l1j4gUHG3sK4ViCLEhdkM6P5mHjX2PEFso6oijJxRxiFraUiiOAHd0f9IqgqsWlTh6Y7JqvjteYAPciQJbCpha2lJofgjc1tsP/vx2hFXLQ2lvQ9Z3oMXcL3s4/9K448CfiHdukUKh0JZC4wGe'+
			'A67s7YfNJ6OsfTXM+tfCtne38Q6wqJrvZtrl7t5uOrZ7EfgS3W6IihQahbYUIi/wc+DyeAVaI7FtyXZvjHBwZysNh6I0nYj9Lpf2sygbajFsbBGjL3QxerKrt3HYnb0MLASCzr0FkexQaEuhKgb+L9nvrlgC/G+gJcvnEXGEbkRKoWoBvgb8A3A4C8c/DFzTdg4FthhDoS2F7lngfGI3KJ3obw61Het84H8cOJ5ITql7RExSAdwOXNf236moIzY1/XE0cUYMptAWExUBFwOfAaYC5xEL8X5tPz9BLJi3E1v69bfEFn/SWiJiPIW2iIhB1KctImIQhbaIiEEU2iIiBlFoi4gYRKEtImIQhbaIiEEU2iIiBlFoi4gYRKEtImIQhbaIiEEU2iIiBlFoi4gYRKEtImIQhbaIiEEU2iIiBlFoi4gYRKEtImIQhbaIiEEU2i'+
			'IiBlFoi4gYRKEtImIQhbaIiEEU2iIiBlFoi4gYRKEtImIQhbaIiEEU2iIiBlFoi4gYRKEtImIQhbaIiEEU2iIiBlFoi4gYRKEtImIQhbaIiEEU2iIiBlFoi4gYRKEtImIQhbaIiEEU2iIiBlFoi4gYRKEtImIQhbaIiEEU2iIiBlFoi4gYRKEtImKQ/w+2FQjNnGaNDQAAAABJRU5ErkJggg==';
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
		me._image_1234.ggIsActive=function() {
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
		me._image_1234.ggUpdatePosition=function (useTransition) {
		}
		me._external_234.appendChild(me._image_1234);
		me.__31.appendChild(me._external_234);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_234.style.width=hotspot.customimagewidth + 'px';
			me._external_234.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_234.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_234.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__31;
	};
	function SkinHotspotClass__32(parentScope,hotspot) {
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
		el=me.__32=document.createElement('div');
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
		me.__32.ggIsActive=function() {
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
		me.__32.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__32.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__32.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_32']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__32.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_32']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_235=document.createElement('div');
		els=me._external_235__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_235.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_235.ggSubElement.setAttribute('alt', player._(me._external_235.ggAltText));
			me._external_235.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_235.ggText_untranslated = img;
			me._external_235.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_235.ggSubElement.style.width = '0px';
			me._external_235.ggSubElement.style.height = '0px';
			me._external_235.ggSubElement.src='';
			me._external_235.ggSubElement.src=me._external_235.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_235.ggText != player._(me._external_235.ggText_untranslated)) {
				me._external_235.ggText = player._(me._external_235.ggText_untranslated);
				me._external_235.ggUpdateImage()
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
		me._external_235.ggIsActive=function() {
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
		me._external_235.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_235.clientWidth;
			var parentHeight = me._external_235.clientHeight;
			var img = me._external_235__img;
			var aspectRatioDiv = me._external_235.clientWidth / me._external_235.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_235.ggScrollbars || currentWidth < me._external_235.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_235.ggScrollbars || currentHeight < me._external_235.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1235=document.createElement('div');
		els=me._image_1235__img=document.createElement('img');
		els.className='ggskin ggskin_image_1235';
		hs=basePath + 'images/image_1235.png';
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
		me._image_1235.ggIsActive=function() {
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
		me._image_1235.ggUpdatePosition=function (useTransition) {
		}
		me._external_235.appendChild(me._image_1235);
		me.__32.appendChild(me._external_235);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_235.style.width=hotspot.customimagewidth + 'px';
			me._external_235.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_235.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_235.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__32;
	};
	function SkinHotspotClass__33(parentScope,hotspot) {
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
		el=me.__33=document.createElement('div');
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
		me.__33.ggIsActive=function() {
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
		me.__33.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_33']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_33']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_236=document.createElement('div');
		els=me._external_236__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_236.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_236.ggSubElement.setAttribute('alt', player._(me._external_236.ggAltText));
			me._external_236.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_236.ggText_untranslated = img;
			me._external_236.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_236.ggSubElement.style.width = '0px';
			me._external_236.ggSubElement.style.height = '0px';
			me._external_236.ggSubElement.src='';
			me._external_236.ggSubElement.src=me._external_236.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_236.ggText != player._(me._external_236.ggText_untranslated)) {
				me._external_236.ggText = player._(me._external_236.ggText_untranslated);
				me._external_236.ggUpdateImage()
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
		me._external_236.ggIsActive=function() {
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
		me._external_236.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_236.clientWidth;
			var parentHeight = me._external_236.clientHeight;
			var img = me._external_236__img;
			var aspectRatioDiv = me._external_236.clientWidth / me._external_236.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_236.ggScrollbars || currentWidth < me._external_236.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_236.ggScrollbars || currentHeight < me._external_236.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1236=document.createElement('div');
		els=me._image_1236__img=document.createElement('img');
		els.className='ggskin ggskin_image_1236';
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
		me._image_1236.ggIsActive=function() {
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
		me._image_1236.ggUpdatePosition=function (useTransition) {
		}
		me._external_236.appendChild(me._image_1236);
		me.__33.appendChild(me._external_236);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_236.style.width=hotspot.customimagewidth + 'px';
			me._external_236.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_236.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_236.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__33;
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
		el=me._external_237=document.createElement('div');
		els=me._external_237__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_237.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_237.ggSubElement.setAttribute('alt', player._(me._external_237.ggAltText));
			me._external_237.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_237.ggText_untranslated = img;
			me._external_237.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_237.ggSubElement.style.width = '0px';
			me._external_237.ggSubElement.style.height = '0px';
			me._external_237.ggSubElement.src='';
			me._external_237.ggSubElement.src=me._external_237.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_237.ggText != player._(me._external_237.ggText_untranslated)) {
				me._external_237.ggText = player._(me._external_237.ggText_untranslated);
				me._external_237.ggUpdateImage()
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
		me._external_237.ggIsActive=function() {
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
		me._external_237.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_237.clientWidth;
			var parentHeight = me._external_237.clientHeight;
			var img = me._external_237__img;
			var aspectRatioDiv = me._external_237.clientWidth / me._external_237.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_237.ggScrollbars || currentWidth < me._external_237.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_237.ggScrollbars || currentHeight < me._external_237.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1237=document.createElement('div');
		els=me._image_1237__img=document.createElement('img');
		els.className='ggskin ggskin_image_1237';
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
		me._image_1237.ggIsActive=function() {
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
		me._image_1237.ggUpdatePosition=function (useTransition) {
		}
		me._external_237.appendChild(me._image_1237);
		me._ks.appendChild(me._external_237);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_237.style.width=hotspot.customimagewidth + 'px';
			me._external_237.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_237.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_237.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me._ks;
	};
	function SkinHotspotClass__34(parentScope,hotspot) {
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
		el=me.__34=document.createElement('div');
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
		me.__34.ggIsActive=function() {
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
		me.__34.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__34.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__34.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_34']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__34.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_34']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_238=document.createElement('div');
		els=me._external_238__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_238.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_238.ggSubElement.setAttribute('alt', player._(me._external_238.ggAltText));
			me._external_238.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_238.ggText_untranslated = img;
			me._external_238.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_238.ggSubElement.style.width = '0px';
			me._external_238.ggSubElement.style.height = '0px';
			me._external_238.ggSubElement.src='';
			me._external_238.ggSubElement.src=me._external_238.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_238.ggText != player._(me._external_238.ggText_untranslated)) {
				me._external_238.ggText = player._(me._external_238.ggText_untranslated);
				me._external_238.ggUpdateImage()
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
		me._external_238.ggIsActive=function() {
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
		me._external_238.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_238.clientWidth;
			var parentHeight = me._external_238.clientHeight;
			var img = me._external_238__img;
			var aspectRatioDiv = me._external_238.clientWidth / me._external_238.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_238.ggScrollbars || currentWidth < me._external_238.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_238.ggScrollbars || currentHeight < me._external_238.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_1238=document.createElement('div');
		els=me._image_1238__img=document.createElement('img');
		els.className='ggskin ggskin_image_1238';
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
		me._image_1238.ggIsActive=function() {
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
		me._image_1238.ggUpdatePosition=function (useTransition) {
		}
		me._external_238.appendChild(me._image_1238);
		me.__34.appendChild(me._external_238);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_238.style.width=hotspot.customimagewidth + 'px';
			me._external_238.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_238.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_238.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__34;
	};
	function SkinHotspotClass__37(parentScope,hotspot) {
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
		el=me.__37=document.createElement('div');
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
		me.__37.ggIsActive=function() {
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
		me.__37.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__37.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__37.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_37']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__37.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_37']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__37.ggUpdatePosition=function (useTransition) {
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
		me.__37.appendChild(me._external_1);
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
			me.__div = me.__37;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='대상지로고') {
				hotspot.skinid = '대상지로고';
				hsinst = new SkinHotspotClass__37(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='한듬스크린골프') {
				hotspot.skinid = '한듬스크린골프';
				hsinst = new SkinHotspotClass__34(me, hotspot);
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
				hsinst = new SkinHotspotClass__33(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='전남공업고등학교') {
				hotspot.skinid = '전남공업고등학교';
				hsinst = new SkinHotspotClass__32(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='광주보건대학교') {
				hotspot.skinid = '광주보건대학교';
				hsinst = new SkinHotspotClass__31(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수문초등학교') {
				hotspot.skinid = '수문초등학교';
				hsinst = new SkinHotspotClass__30(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='광주진흥고등학교') {
				hotspot.skinid = '광주진흥고등학교';
				hsinst = new SkinHotspotClass__29(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='신창초등학교') {
				hotspot.skinid = '신창초등학교';
				hsinst = new SkinHotspotClass__28(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수완지하차도') {
				hotspot.skinid = '수완지하차도';
				hsinst = new SkinHotspotClass__27(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='영산강') {
				hotspot.skinid = '영산강';
				hsinst = new SkinHotspotClass__26(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수문1공원') {
				hotspot.skinid = '수문1공원';
				hsinst = new SkinHotspotClass__110(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='고래실공원') {
				hotspot.skinid = '고래실공원';
				hsinst = new SkinHotspotClass__25(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='광주수완병원') {
				hotspot.skinid = '광주수완병원';
				hsinst = new SkinHotspotClass__24(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수완하나중학교') {
				hotspot.skinid = '수완하나중학교';
				hsinst = new SkinHotspotClass__23(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='롯데마트') {
				hotspot.skinid = '롯데마트';
				hsinst = new SkinHotspotClass__22(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수완행정복지센터') {
				hotspot.skinid = '수완행정복지센터';
				hsinst = new SkinHotspotClass__21(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수완초등학교') {
				hotspot.skinid = '수완초등학교';
				hsinst = new SkinHotspotClass__19(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='완동공원') {
				hotspot.skinid = '완동공원';
				hsinst = new SkinHotspotClass__18(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수완고등학교') {
				hotspot.skinid = '수완고등학교';
				hsinst = new SkinHotspotClass__17(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='원단산공원') {
				hotspot.skinid = '원단산공원';
				hsinst = new SkinHotspotClass__16(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수완문화센터') {
				hotspot.skinid = '수완문화센터';
				hsinst = new SkinHotspotClass__15(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수완1저수지') {
				hotspot.skinid = '수완1저수지';
				hsinst = new SkinHotspotClass__14(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='가람식자재마트') {
				hotspot.skinid = '가람식자재마트';
				hsinst = new SkinHotspotClass__13(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='도촌2저수지') {
				hotspot.skinid = '도촌2저수지';
				hsinst = new SkinHotspotClass__20(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='일진스포렉스') {
				hotspot.skinid = '일진스포렉스';
				hsinst = new SkinHotspotClass__12(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='호남고속도로') {
				hotspot.skinid = '호남고속도로';
				hsinst = new SkinHotspotClass__11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='월계초등학교') {
				hotspot.skinid = '월계초등학교';
				hsinst = new SkinHotspotClass__10(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='천곡중학교') {
				hotspot.skinid = '천곡중학교';
				hsinst = new SkinHotspotClass__9(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제봉산') {
				hotspot.skinid = '제봉산';
				hsinst = new SkinHotspotClass__8(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='불태산') {
				hotspot.skinid = '불태산';
				hsinst = new SkinHotspotClass__7(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='첨단중학교') {
				hotspot.skinid = '첨단중학교';
				hsinst = new SkinHotspotClass__6(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='첨단고등학교') {
				hotspot.skinid = '첨단고등학교';
				hsinst = new SkinHotspotClass__5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='무양공원') {
				hotspot.skinid = '무양공원';
				hsinst = new SkinHotspotClass__4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='광주전자고등학교') {
				hotspot.skinid = '광주전자고등학교';
				hsinst = new SkinHotspotClass__3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='남부대학교') {
				hotspot.skinid = '남부대학교';
				hsinst = new SkinHotspotClass__1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='월봉산') {
				hotspot.skinid = '월봉산';
				hsinst = new SkinHotspotClass__0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='어등산') {
				hotspot.skinid = '어등산';
				hsinst = new SkinHotspotClass__(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='어등산CC') {
				hotspot.skinid = '어등산CC';
				hsinst = new SkinHotspotClass_cc(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='산월IC') {
				hotspot.skinid = '산월IC';
				hsinst = new SkinHotspotClass_ic(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '광주2호선';
				hsinst = new SkinHotspotClass__2(me, hotspot);
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
		me.__71.ggUpdateConditionTimer();
		if (me.__71.ggLastIsActive!=me.__71.ggIsActive()) {
			me.__71.ggLastIsActive=me.__71.ggIsActive();
			if (me.__71.ggLastIsActive) {
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