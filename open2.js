function Check(){return document.getElementById("AdvDiv").innerHTML;}function attachEventListener(target,eventType,functionRef){if(typeof target.addEventListener!='undefined'){target.addEventListener(eventType,functionRef,false);}else if(typeof target.attachEvent!='undefined'){target.attachEvent('on'+ eventType,functionRef);}return true;}function maybeCreatePopup(){if(Check()==0){var width=600;var height=600;popupnewwindow=window.open(ad_url,'popme','width='+ width+', height='+ height+', location=yes, menubar=yes, status=yes, toolbar=yes, scrollbars=yes, resizable=yes, left=0, top=0');if(!popupnewwindow||popupnewwindow.closed){document.getElementById("AdvDiv").innerHTML=0;}else{document.getElementById("AdvDiv").innerHTML=1;popupnewwindow.moveTo(0,0);popupnewwindow.blur();window.focus();}}}attachEventListener(document,'click',function(e){var node=e.target?e.target:e.srcElement;var havelink=false;if(node.nodeName.toLowerCase()=='a'){havelink=true;}else{while(node.parentNode){if(node.nodeName.toLowerCase()=='a'){havelink=true;break;}else if(node.nodeName.toLowerCase()=='body'){break;}else{node=node.parentNode;}}}if(havelink){maybeCreatePopup();}else{maybeCreatePopup();}});document.write("<div id=\"AdvDiv\" style=\"display:none\">0<\/div>");