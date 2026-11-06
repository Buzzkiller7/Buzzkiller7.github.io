(() => {
 'use strict';
 const data=window.SITE_DATA;
 const ui={
  en:{reuse:'Reuse',retrofit:'Retrofit',expand:'Expand',dayCycle:'Day / night',zoomIn:'Zoom in',zoomOut:'Zoom out',skip:'Skip to the current research question',navResearch:'Research notes',navAbout:'About',navContact:'Contact',light:'Light',greeting:'Hello, I’m Chen.',headline1:'A small city.',headline2:'A few big questions.',welcome:'I study how cities change, what people need, and how the places we build can adapt.',hotspotSolar:'Rooftops & networks',hotspotStreet:'Life between buildings',hotspotFuture:'What comes next?',sceneLoading:'Preparing the research table…',followQuestion:'Follow this question',viewAssets:'Urban assets',viewPeople:'Human needs',viewDecisions:'Decisions',playTour:'Take a short tour',pauseTour:'Pause the tour',reset:'Reset view',cityMode:'City model',frameworkMode:'Research framework',openNote:'Open note',footerIdentity:'Architecture / Urban analytics / HKU',close:'Close notebook',next:'Next chapter',lampOn:'Turn the desk light on',lampOff:'Turn the desk light off',all:'All notes',published:'Published papers',working:'Working papers',researchTitle:'A few questions I’m working on.',researchIntro:'Published papers, a funded project and current working papers.',read:'Read the note',readPaper:'Open published paper',aboutTitle:'A little about me.',aboutIntro:'I’m Chen Yang, an MSc student in Urban Analytics at The University of Hong Kong, with a Bachelor of Architecture from Wuhan University.',aboutText:'My research connects urban space, changing human needs and environmental pressures. I work with spatial data and computational models, and aim to develop evidence for infrastructure adaptation and decisions.',education:'Education',experience:'Research & practice',contactTitle:'Let’s exchange ideas.',contactText:'I’m interested in conversations about urban research, spatial methods, energy and the built environment.',privacy:'This website uses no analytics or tracking cookies. Your language preference stays in your browser. The contact link opens your email app.',scope:'Scope',question:'The question',approach:'How I approach it',connection:'The connection',futureTitle:'What should the city do next?',futureIntro:'A future research direction, not a completed investment study.',futureText:'As technologies, climate pressures and needs change, infrastructure can enable new activity or become a constraint. I want to study how to compare renewal, reuse, capacity expansion and phased investment under uncertainty.',futureText2:'This connects two interests: infrastructure for emerging growth, and climate adaptation of the existing built environment. ',futureQuestion:'Which capacity should change, where, and when?',futureMethods:'Methods I hope to develop',futureMethodText:'Scenario analysis, infrastructure systems modelling, economic assessment and robust decision methods.',back:'Back to notes',
   chapters:{assets:{label:'The physical city',title:'What can the city we have support?',text:'Buildings and networks last for decades. Their form, capacity and location shape the opportunities a city can offer.',related:['solar-morphology','gcn-lstm','urban-assets']},people:{label:'The city as lived',title:'What changes when people enter the picture?',text:'A street is also a journey, a place of exposure, a service someone needs. Look at the gaps between urban systems and human needs.',related:['heat-fire']},decisions:{label:'The city yet to come',title:'What should we change, and when?',text:'Reuse, retrofit, expand, or wait? Different futures call for choices that can respond to uncertainty.',related:[]}}},
  zh:{reuse:'复用',retrofit:'改造',expand:'扩建',dayCycle:'昼夜',zoomIn:'放大模型',zoomOut:'缩小模型',skip:'跳至当前研究问题',navResearch:'研究笔记',navAbout:'关于我',navContact:'联系',light:'台灯',greeting:'你好，我是杨晨。',headline1:'一座小小的城市，',headline2:'几个值得追问的问题。',welcome:'我研究城市如何变化、人的需求如何被回应，以及建成环境应如何适应未来。',hotspotSolar:'屋顶与基础设施',hotspotStreet:'建筑之间的生活',hotspotFuture:'下一步，怎样改变？',sceneLoading:'正在准备城市研究台…',followQuestion:'沿着这个问题探索',viewAssets:'城市资产',viewPeople:'人的需求',viewDecisions:'适应决策',playTour:'播放简短导览',pauseTour:'暂停导览',reset:'视角复位',cityMode:'城市模型',frameworkMode:'研究框架',openNote:'打开笔记',footerIdentity:'建筑学 / 城市分析 / 香港大学',close:'关闭笔记',next:'下一个研究视角',lampOn:'打开台灯',lampOff:'关闭台灯',all:'全部笔记',published:'已发表论文',working:'工作论文',researchTitle:'一些正在追问的问题。',researchIntro:'已发表论文、基金项目与正在推进的工作论文。',read:'打开笔记',readPaper:'阅读正式论文',aboutTitle:'关于我。',aboutIntro:'我是杨晨，目前就读于香港大学城市分析理学硕士项目，本科毕业于武汉大学建筑学专业。',aboutText:'我关注城市空间、变化中的人的需求与环境压力之间的关系，结合空间数据与计算模型，逐步走向基础设施适应与决策研究。',education:'教育背景',experience:'科研与实践经历',contactTitle:'期待交换一些想法。',contactText:'欢迎围绕城市研究、空间方法、能源与建成环境交流。',privacy:'本站不使用访问统计或追踪 Cookie。语言偏好仅保存在你的浏览器中；联系链接会打开邮件应用。',scope:'研究范围',question:'研究问题',approach:'研究方法',connection:'与长期方向的联系',futureTitle:'城市的下一步，应该怎么走？',futureIntro:'拟发展的研究方向，并非已完成的投资决策研究。',futureText:'技术、气候与需求不断变化，既有基础设施可能支撑新活动，也可能形成约束。我希望研究如何在不确定性下比较更新、复用、扩容与分阶段投资。',futureText2:'这连接两个兴趣：面向新增长需求的基础设施，以及既有建成环境的气候适应。',futureQuestion:'哪些能力需要改变，在哪里，何时？',futureMethods:'希望进一步发展的方法',futureMethodText:'情景分析、基础设施系统建模、经济评估与稳健决策。',back:'返回研究笔记',
   chapters:{assets:{label:'城市的物理基础',title:'我们已有的城市，\n能够承载什么？',text:'建筑与网络长期存在。它们的形态、容量和位置，塑造一座城市能够提供的机会。',related:['solar-morphology','gcn-lstm','urban-assets']},people:{label:'被人们使用的城市',title:'从人的需求出发，\n城市还缺少什么？',text:'街道也是一段旅程、一种环境暴露，以及某个人需要的服务。关注城市系统与人的需求之间的错配。',related:['heat-fire']},decisions:{label:'尚待改变的城市',title:'应该改变什么，\n又应该何时改变？',text:'复用、改造、扩建，还是等待？未来并不唯一，城市需要能够回应不确定性的选择。',related:[]}}}
 };
 let language=data.profile.languageDefault,lens='assets',mode='city',selection=null,light=true,tourTimer=null,tourActive=false,currentPage='research',currentProject=null,filter='all';
 const views=['assets','people','decisions'];
 const notebook=document.getElementById('notebook');
 const body=document.getElementById('notebook-body');
 const escape=value=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
 const icon='<img src="assets/icons/arrow-up-right.svg" alt="" width="16" height="16">';
 try{const saved=localStorage.getItem('chen-yang-language');if(ui[saved])language=saved;}catch{}
 function c(){return ui[language];}

 function clearSelection(){selection=null;document.documentElement.classList.remove('has-selection');document.getElementById('object-popover').hidden=true;window.dispatchEvent(new Event('city-clear-selection'));}
 function decisionTools(){document.getElementById('adapt-actions').hidden=lens!=='decisions';}
 function setMode(next){stopTour();clearSelection();mode=next;document.getElementById(next==='framework'?'framework-panel':'home').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});window.dispatchEvent(new Event('city-mode'));}

 function showSelection(action,perform=true){
  stopTour();
  if(['desk','traffic'].includes(action.action)){window.dispatchEvent(new CustomEvent('city-prop',{detail:action}));clearSelection();if(action.id==='map')setMode('framework');if(action.id==='books')openNotebook('research');return;}
  if(action.action==='adapt'){setLens('decisions',false);window.dispatchEvent(new CustomEvent('city-adapt',{detail:action.id}));}
  if(action.action==='light'){if(perform)document.getElementById('lamp-button').click();clearSelection();return;}
  if(action.lens)setLens(action.lens,false);selection=action;
  const labels=language==='zh'?{solar:['城市资产','屋顶里的能源机会','城市形态与太阳能潜力'],building:['城市资产','建筑的变化','观察演化中的建成环境'],square:['人的需求','城市中的日常与暴露','人的活动、环境体验与安全'],notebook:['研究笔记','一些正在追问的问题','论文、基金项目与工作论文'],cabinet:['个人经历','研究的轨迹','教育、科研与建筑实践'],lamp:['工作台','工作灯',light?'已开启':'已关闭'],future:['适应决策','城市下一步的选择','更新、复用与适应性投资']}:{solar:['Urban assets','Energy above the city','Urban form and solar potential'],building:['Urban assets','Buildings in transition','Reading the changing built environment'],square:['Human needs','Life in the city','Activity, exposure and safety'],notebook:['Research notes','Questions in progress','Papers, projects and working papers'],cabinet:['Background','A research trajectory','Education, research and practice'],lamp:['The desk','Task light',light?'On':'Off'],future:['Adaptive decisions','The city’s next chapter','Renewal, reuse and adaptive investment']};
  const key=action.action==='light'?'lamp':action.action==='research'?'notebook':action.action==='about'?'cabinet':action.action==='future'?'future':action.id==='solar-morphology'?'solar':action.id==='heat-fire'?'square':'building';
  const strategy=language==='zh'?{reuse:['复用','旧建筑，新的公共生活','保留主体结构，打开首层，增加廊架与公共界面。'],retrofit:['改造','让既有建筑适应新的环境','增加立面遮阳、外部构件与屋顶光伏。'],expand:['扩建','为新的需求增加空间','从基础到楼层，逐步形成新的建筑体量。']}:{reuse:['Reuse','An existing building, a new public life','Keep the structure, open the ground floor and add a shared threshold.'],retrofit:['Retrofit','Help the existing city adapt','Add facade shading, external elements and rooftop solar.'],expand:['Expand','Make room for changing needs','Build additional space in stages, from foundations to floors.']};
  const text=action.action==='adapt'?strategy[action.id]:labels[key];document.getElementById('object-kicker').textContent=text[0];document.getElementById('object-title').textContent=text[1];document.getElementById('object-description').textContent=text[2];document.getElementById('object-open').hidden=action.action==='light';document.getElementById('object-popover').hidden=false;document.documentElement.classList.add('has-selection');
 }
 document.getElementById('object-close').addEventListener('click',clearSelection);
 document.getElementById('object-open').addEventListener('click',()=>{const a=selection;if(!a)return;if(a.action==='project')openNotebook('research',a.id);else openNotebook(a.action==='adapt'?'future':a.action);});

 function stopTour(){clearTimeout(tourTimer);tourTimer=null;tourActive=false;document.getElementById('tour-button').setAttribute('aria-pressed','false');document.getElementById('tour-symbol').textContent='▷';document.querySelector('[data-ui="playTour"]').textContent=c().playTour;}
 function setLens(next,user=true){
  if(!views.includes(next))return;const changed=next!==lens;if(user){stopTour();clearSelection();}lens=next;document.documentElement.dataset.lens=lens;decisionTools();
  const ch=c().chapters[lens];document.getElementById('chapter-number').textContent=['X','Y','Z'][views.indexOf(lens)];document.getElementById('chapter-label').textContent=ch.label;document.getElementById('chapter-title').textContent=ch.title;document.getElementById('chapter-description').textContent=ch.text;
  document.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.view===lens)));
  if(changed||user)window.dispatchEvent(new CustomEvent('city-lens',{detail:lens}));
 }
 function toggleTour(){
  if(tourActive){stopTour();return;}tourActive=true;document.getElementById('tour-button').setAttribute('aria-pressed','true');document.getElementById('tour-symbol').textContent='Ⅱ';document.querySelector('[data-ui="playTour"]').textContent=c().pauseTour;
  const frameworkTour=mode==='framework';if(frameworkTour){window.RESEARCH_FRAMEWORK?.setTab('process');window.RESEARCH_FRAMEWORK?.setStage(0);}else setLens('assets',false);let index=0;
  function advance(){index++;if(index>=(frameworkTour?5:views.length)){stopTour();return;}if(frameworkTour)window.RESEARCH_FRAMEWORK?.setStage(index);else setLens(views[index],false);tourTimer=setTimeout(advance,frameworkTour?4000:7000);}
  tourTimer=setTimeout(advance,frameworkTour?4000:7000);
 }
 function projectDetail(id){
  const project=data.projects.find(p=>p.id===id);if(!project)return;currentProject=id;
  const p=project[language],copy=c(),d=data.copy[language];
  document.getElementById('notebook-category').textContent=project.type==='published'?copy.published:(project.type==='working'?d.workingPaper:d.researchProject);
  document.getElementById('notebook-back').hidden=false;
  body.innerHTML=`<h2 id="notebook-title">${escape(p.title)}</h2>${project.journal?`<p class="note-meta">${escape(project.journal)} / ${project.year}</p><p class="note-authors">${escape(project.title)}</p><p class="note-authors">${escape(project.authors)}</p>`:''}<div class="note-section"><h3>${copy.question}</h3><p>${escape(p.question)}</p></div><div class="note-section"><h3>${copy.approach}</h3><p>${escape(p.approach)}</p></div><div class="note-section"><h3>${copy.connection}</h3><p>${escape(p.connection)}</p></div><p class="note-scope"><strong>${copy.scope}: </strong>${escape(p.scope)}</p>${project.url?`<a class="note-paper" href="${project.url}" target="_blank" rel="noopener noreferrer">${copy.readPaper}${icon}</a>`:''}`;
  body.scrollTop=0;notebook.scrollTop=0;
 }
 function entries(projects){return projects.map(project=>{const p=project[language],d=data.copy[language];const status=project.type==='published'?c().published:(project.type==='working'?d.workingPaper:d.researchProject);return `<article class="note-entry" data-note-id="${project.id}"><p class="note-meta">${status}${project.journal?' / '+project.journal:''}${project.year?' / '+project.year:''}</p><h3>${escape(p.title)}</h3><p>${escape(p.summary)}</p><button class="note-open" data-project="${project.id}">${c().read}${icon}</button></article>`;}).join('');}
 function renderNotebook(page,project=null){
  const copy=c(),d=data.copy[language];currentPage=page;currentProject=null;document.getElementById('notebook-back').hidden=true;
  if(project){projectDetail(project);return;}
  document.getElementById('notebook-category').textContent=page==='about'?copy.navAbout:page==='contact'?copy.navContact:copy.navResearch;
  if(page==='research'){
   const projects=data.projects.filter(p=>filter==='all'||(filter==='published'?p.type==='published':p.type==='working'));
   body.innerHTML=`<h2 id="notebook-title">${copy.researchTitle}</h2><p class="note-intro">${copy.researchIntro}</p><div class="note-filter" role="group" aria-label="Research status">${['all','published','working'].map(key=>`<button data-filter="${key}" aria-pressed="${key===filter}">${copy[key]}</button>`).join('')}</div>${entries(projects)}`;
  }else if(page==='lens'){
   const ch=copy.chapters[lens];
   body.innerHTML=`<h2 id="notebook-title">${ch.title}</h2><p class="note-intro">${ch.text}</p>${entries(data.projects.filter(p=>ch.related.includes(p.id)))}`;
  }else if(page==='future'){
   body.innerHTML=`<p class="note-meta">${d.developing||d.focusViews.decisions.connection}</p><h2 id="notebook-title">${copy.futureTitle}</h2><p class="note-intro">${copy.futureIntro}</p><p>${copy.futureText}</p><p>${copy.futureText2}</p><div class="note-section"><h3>${copy.futureQuestion}</h3><p>${d.focusViews.decisions.text}</p></div><div class="note-section"><h3>${copy.futureMethods}</h3><p>${copy.futureMethodText}</p></div>`;
  }else if(page==='about'){
   const ex=data.experience.map(item=>{const e=item[language];return `<article class="experience-entry"><p class="date">${escape(item.date)}${item.current?' '+d.present:''}</p><h4>${escape(e.org)}</h4><p>${escape(e.role)}</p><p class="description">${escape(e.text)}</p></article>`;}).join('');
   body.innerHTML=`<h2 id="notebook-title">${copy.aboutTitle}</h2><p>${copy.aboutIntro}</p><p>${copy.aboutText}</p><div class="note-section"><h3>${copy.education}</h3><article class="note-education"><p class="date">${d.hkuDates}</p><h3>${d.hku}</h3><p>${d.hkuDegree}</p></article><article class="note-education"><p class="date">${d.whuDates}</p><h3>${d.whu}</h3><p>${d.whuDegree}</p></article></div><div class="note-section"><h3>${copy.experience}</h3>${ex}</div>`;
  }else if(page==='contact'){
   body.innerHTML=`<h2 id="notebook-title">${copy.contactTitle}</h2><p>${copy.contactText}</p><a class="note-email" href="mailto:${data.profile.email}">${data.profile.email}</a><p class="note-privacy">${copy.privacy}</p>`;
  }
  notebook.scrollTop=0;
 }
 function openNotebook(page,project=null){stopTour();clearSelection();renderNotebook(page,project);if(!notebook.open)notebook.showModal();window.dispatchEvent(new CustomEvent('city-pause',{detail:true}));}
 function translate(next){
  language=next;document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-ui]').forEach(el=>{if(typeof c()[el.dataset.ui]==='string')el.textContent=c()[el.dataset.ui];});
  document.getElementById('time-button').setAttribute('aria-label',c().dayCycle);document.getElementById('zoom-in').setAttribute('aria-label',c().zoomIn);document.getElementById('zoom-out').setAttribute('aria-label',c().zoomOut);
  document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===language)));
  document.getElementById('close-notebook').setAttribute('aria-label',c().close);document.getElementById('notebook-back').setAttribute('aria-label',c().back);document.getElementById('next-chapter').setAttribute('aria-label',c().next);
  document.getElementById('lamp-button').setAttribute('aria-label',light?c().lampOff:c().lampOn);
  document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));window.dispatchEvent(new CustomEvent('city-language',{detail:language}));
  document.title=language==='zh'?'杨晨':'Chen Yang';document.querySelector('meta[property="og:title"]').content=document.title;
  document.querySelector('meta[name="description"]').content=c().welcome;document.querySelector('meta[property="og:description"]').content=c().welcome;
  if(tourActive)document.querySelector('[data-ui="playTour"]').textContent=c().pauseTour;
  setLens(lens,false);if(selection)showSelection(selection,false);if(notebook.open)renderNotebook(currentPage,currentProject);
  try{localStorage.setItem('chen-yang-language',language);}catch{}
 }
 document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>translate(b.dataset.lang)));
 document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setLens(b.dataset.view)));
 document.getElementById('next-chapter').addEventListener('click',()=>setLens(views[(views.indexOf(lens)+1)%3]));
 document.getElementById('chapter-notes').addEventListener('click',()=>openNotebook(lens==='decisions'?'future':'lens'));
 document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openNotebook(b.dataset.open)));
 document.getElementById('close-notebook').addEventListener('click',()=>notebook.close());
 notebook.addEventListener('close',()=>window.dispatchEvent(new CustomEvent('city-pause',{detail:false})));
 document.getElementById('notebook-back').addEventListener('click',()=>renderNotebook(currentPage));
 notebook.addEventListener('click',e=>{if(e.target!==notebook)return;const r=notebook.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)notebook.close();});
 body.addEventListener('click',e=>{const project=e.target.closest('[data-project]'),f=e.target.closest('[data-filter]');if(project)projectDetail(project.dataset.project);if(f){filter=f.dataset.filter;renderNotebook('research');}});
 document.getElementById('lamp-button').addEventListener('click',()=>{light=!light;document.documentElement.classList.toggle('lamp-off',!light);document.getElementById('lamp-button').setAttribute('aria-pressed',String(light));document.getElementById('lamp-button').setAttribute('aria-label',light?c().lampOff:c().lampOn);window.dispatchEvent(new CustomEvent('city-light',{detail:light}));});
 document.getElementById('tour-button').addEventListener('click',toggleTour);
 document.getElementById('reset-camera').addEventListener('click',()=>window.dispatchEvent(new Event('city-reset')));
 document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
 window.addEventListener('city-fallback',()=>setMode('framework'));
 document.querySelectorAll('[data-adapt]').forEach(b=>b.addEventListener('click',()=>showSelection({action:'adapt',id:b.dataset.adapt,lens:'decisions',key:'adapt-'+b.dataset.adapt})));
 window.addEventListener('city-object',e=>showSelection(e.detail));window.addEventListener('city-clear',()=>clearSelection());
 document.addEventListener('keydown',e=>{if(notebook.open||e.altKey||e.ctrlKey||e.metaKey||e.target.closest('input,textarea,select'))return;if(e.key==='Escape')clearSelection();if(['1','2','3'].includes(e.key))setLens(views[Number(e.key)-1]);});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stopTour();});
 window.URBAN_OBSERVATORY={get mode(){return mode},setMode,get lens(){return lens},get language(){return language},get touring(){return tourActive},setLens,stopTour};
 new IntersectionObserver(entries=>{mode=entries[0].isIntersecting?'framework':'city';},{threshold:.1}).observe(document.getElementById('framework-panel'));
 translate(language);
})();
