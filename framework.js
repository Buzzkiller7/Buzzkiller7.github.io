(() => {
 const words={
 en:{identity:'Urban infrastructure transitions & decision science',title:'How cities respond to change.',dimensionsTitle:'Three ways of seeing the same city.',outcomes:'05 / Outcomes',process:'System transitions',axes:'Research dimensions',transformationLabel:'Structural transformations',transformationTitle:'Forces that change the city',transformations:'Technology · Energy · Climate · Demography · Economy',demandLabel:'Demand & stress',demandTitle:'Changing needs and pressures',demandText:'Industry, mobility, energy, health, exposure and extreme events.',capacityLabel:'Urban systems',capacityTitle:'Assets and system capacity',capacityText:'Buildings, land, roads, grids, public space and existing stock.',coupling:'Fit, mismatch and system constraints',decisionLabel:'Adaptation & decisions',decisionTitle:'How should urban systems adapt?',decisionText:'Expand · Renew · Reuse · Exit · Operate · Finance · Govern',growth:'Growth & value',growthText:'Opportunity, productivity and asset value.',resilience:'Safety & resilience',resilienceText:'Reliability, losses and adaptive capacity.',wellbeing:'Human wellbeing',wellbeingText:'Health, comfort, access and equity.',feedback:'Outcomes reshape the next cycle',assetsShort:'Urban assets',peopleShort:'Human needs',decisionsShort:'Adaptive decisions',xyQuestion:'How does urban space shape human experience?',xyExamples:'Shade, heat exposure, fire safety and access.',xzQuestion:'How does investment change urban capacity?',xzExamples:'Solar energy, data centres, grids and renewal.',yzQuestion:'Who benefits from resource allocation?',yzExamples:'Charging equity, health and public priorities.',xyzQuestion:'How can demand, capacity and decisions work together?',xyzExamples:'Adaptive planning and decisions with multiple objectives.',
 axesCopy:{assets:{label:'X / Urban assets & infrastructure',title:'What can the physical city support?',text:'Where are urban assets, how are they changing, and what do their form, condition, capacity and lifetimes allow?',terms:['Urban form','Buildings & land','Networks','Capacity','Asset change']},people:{label:'Y / Human needs, behaviour & wellbeing',title:'How do people use and experience cities?',text:'Human activities create demand. Environments and technologies shape exposure, health, safety, accessibility and everyday experience.',terms:['Activity & behaviour','Exposure','Health & safety','Access','Social differences']},decisions:{label:'Z / Investment, adaptation & governance',title:'Who decides how the city changes?',text:'As demand, risk and resource constraints change, how should construction, renewal, operations and allocation choices be compared?',terms:['Growth opportunities','Capital allocation','Investment timing','Governance','Value distribution']}}},
 zh:{identity:'城市基础设施转型与决策科学',title:'城市如何回应变化。',dimensionsTitle:'从三个维度，理解同一座城市。',outcomes:'05 / 评价结果',process:'系统演化',axes:'研究维度',transformationLabel:'外部结构性变革',transformationTitle:'改变城市的力量',transformations:'技术革命 · 能源转型 · 气候变化 · 人口演变 · 经济调整',demandLabel:'需求与压力',demandTitle:'变化中的活动与需求',demandText:'产业、人口、出行、能源、健康需求、环境暴露与极端事件。',capacityLabel:'城市系统',capacityTitle:'城市资产与系统容量',capacityText:'建筑、土地、道路、电网、公共空间、资产存量及其约束。',coupling:'适配、错配、拥塞与路径依赖',decisionLabel:'适应与决策',decisionTitle:'城市系统应当如何调整？',decisionText:'扩建 · 更新 · 复用 · 退出 · 运营调整 · 融资 · 政策治理',growth:'增长与价值',growthText:'经济机会、生产力与资产价值。',resilience:'安全与韧性',resilienceText:'风险损失、可靠性与适应能力。',wellbeing:'人的福祉',wellbeingText:'健康、舒适、可及性与公平。',feedback:'评价结果进入下一轮需求与决策',assetsShort:'城市资产',peopleShort:'人的需求',decisionsShort:'适应决策',xyQuestion:'物理城市如何影响人的活动与体验？',xyExamples:'建筑阴影、热暴露、火灾安全与交通可达性。',xzQuestion:'投资怎样改变城市资产的价值与能力？',xzExamples:'光伏、数据中心、电网扩容与建筑更新。',yzQuestion:'资源配置如何影响不同人群？',yzExamples:'充电公平、健康收益与公共投资优先级。',xyzQuestion:'如何兼顾系统容量、人的需求与投资效果？',xyzExamples:'适应性基础设施规划与多目标决策。',
 axesCopy:{assets:{label:'X / 城市资产与基础设施',title:'城市的物理基础，能够支持什么？',text:'城市有什么，在哪里，处于怎样的状态？研究其结构、容量、生命周期，以及能够承载的活动和面临的限制。',terms:['城市形态','建筑与土地','交通与能源网络','系统容量','资产变化']},people:{label:'Y / 人的需求、行为与福祉',title:'人们如何使用并体验城市？',text:'人的活动产生基础设施需求；环境与技术变化影响暴露、健康、安全、可及性与日常生活体验。',terms:['时空活动','环境暴露','健康与安全','服务可及性','社会差异']},decisions:{label:'Z / 投资、适应与治理',title:'谁来决定城市怎样改变？',text:'需求、风险与资源约束变化时，如何比较建设、改造、运营和资源配置方案，并理解其收益与成本分配？',terms:['增长机会','资本配置','投资时序','政策治理','价值分配']}}}
 };
 const panel=document.getElementById('framework-panel');
 let language=window.URBAN_OBSERVATORY?.language||'en',stage=0,axis='assets',relation=null,raf=0,start=performance.now(),nextStageAt=0,visible=false,lastFrame=0;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const process=document.getElementById('process-view');
 const stages=[['transformationTitle','transformations'],['demandTitle','demandText'],['capacityTitle','capacityText'],['decisionTitle','decisionText'],['outcomes',null]];
 function copy(){return words[language];}
 function setStage(next,manual=true){
  stage=Math.max(0,Math.min(4,next));process.dataset.stage=stage;
  panel.querySelectorAll('[data-fw-stage]').forEach(b=>{const active=Number(b.dataset.fwStage)===stage;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
  const routes=[['route-demand','route-capacity'],['route-coupling','route-decision'],['route-coupling','route-decision'],['route-growth','route-resilience','route-wellbeing'],['route-feedback']][stage];
  panel.querySelectorAll('.frame-route').forEach(p=>p.classList.toggle('is-live',routes.includes(p.id)));
  panel.querySelectorAll('[data-flow]').forEach(p=>p.classList.toggle('is-live',routes.includes(p.dataset.flow)));
  document.getElementById('stage-number').textContent=String(stage+1).padStart(2,'0');
  const [heading,description]=stages[stage];
  document.getElementById('stage-title').textContent=copy()[heading].replace(/^05\s*\/\s*/,'');
  document.getElementById('stage-description').textContent=description?copy()[description]:[copy().growthText,copy().resilienceText,copy().wellbeingText].join(' ');
  start=performance.now();nextStageAt=start+(manual?8000:4500);resume();
 }
 function setAxis(next){
  axis=next;relation=null;const map=panel.querySelector('.axes-map');map.dataset.axis=axis;map.removeAttribute('data-relation');
  const a=copy().axesCopy[axis];document.getElementById('axis-label').textContent=a.label;document.getElementById('axis-title').textContent=a.title;document.getElementById('axis-description').textContent=a.text;
  document.getElementById('axis-terms').replaceChildren(...a.terms.map(t=>{const s=document.createElement('span');s.textContent=t;return s;}));
  panel.querySelectorAll('button[data-axis]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.axis===axis)));
  panel.querySelectorAll('button[data-relation]').forEach(b=>{b.classList.remove('is-active');b.setAttribute('aria-pressed','false');});
 }
 function setRelation(next){
  relation=next;panel.querySelector('.axes-map').dataset.relation=relation;
  panel.querySelectorAll('button[data-relation]').forEach(b=>{b.classList.toggle('is-active',b.dataset.relation===relation);b.setAttribute('aria-pressed',String(b.dataset.relation===relation));});
  const letters={assets:'x',people:'y',decisions:'z'};panel.querySelectorAll('button[data-axis]').forEach(b=>b.setAttribute('aria-pressed',String(next.includes(letters[b.dataset.axis]))));
  document.getElementById('axis-label').textContent=next.split('').map(s=>s.toUpperCase()).join(' × ');
  document.getElementById('axis-title').textContent=copy()[next+'Question'];document.getElementById('axis-description').textContent=copy()[next+'Examples'];document.getElementById('axis-terms').replaceChildren();
 }
 function setTab(next){document.getElementById(next==='axes'?'axes-view':'process-view').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});}
 function translate(next){const keep=relation;language=next;panel.querySelectorAll('[data-fw]').forEach(el=>el.textContent=copy()[el.dataset.fw]);setAxis(axis);if(keep)setRelation(keep);setStage(stage,false);}
 function frame(now){
  if(now-lastFrame<40&&visible&&!reduced.matches){raf=requestAnimationFrame(frame);return;}lastFrame=now;
  if(!reduced.matches&&visible&&now>=nextStageAt)setStage((stage+1)%5,false);
  const seconds=(now-start)/1000;
  for(const dot of panel.querySelectorAll('[data-flow]')){
   if(!dot.classList.contains('is-live')){dot.style.opacity='0';continue;}
   const path=document.getElementById(dot.dataset.flow);const t=reduced.matches?.55:(seconds*.2)%1;const point=path.getPointAtLength(path.getTotalLength()*t);dot.setAttribute('cx',point.x);dot.setAttribute('cy',point.y);dot.style.opacity=reduced.matches?'.75':String(Math.sin(Math.PI*t));
  }
  if(visible&&!reduced.matches&&!document.hidden)raf=requestAnimationFrame(frame);else raf=0;
 }
 function resume(){if(!raf&&visible)raf=requestAnimationFrame(frame);}
 panel.addEventListener('click',e=>{const s=e.target.closest('[data-fw-stage]'),a=e.target.closest('button[data-axis]'),r=e.target.closest('button[data-relation]');if(s)setStage(Number(s.dataset.fwStage));if(a){window.URBAN_OBSERVATORY.setLens(a.dataset.axis);setAxis(a.dataset.axis);}if(r)setRelation(r.dataset.relation);});
 panel.querySelectorAll('.system-node').forEach(b=>{b.addEventListener('pointerenter',()=>setStage(Number(b.dataset.fwStage)));b.addEventListener('focus',()=>setStage(Number(b.dataset.fwStage)));});
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){nextStageAt=performance.now()+4500;resume();}},{threshold:.15}).observe(process);
 window.addEventListener('city-language',e=>translate(e.detail));window.addEventListener('city-lens',e=>setAxis(e.detail));
 document.addEventListener('visibilitychange',()=>{if(!document.hidden){nextStageAt=performance.now()+4500;resume();}});
 reduced.addEventListener('change',()=>resume());
 window.RESEARCH_FRAMEWORK={setStage,setTab,get tab(){return 'continuous'},get stage(){return stage},get relation(){return relation},get axis(){return axis},get animating(){return visible&&!reduced.matches&&!document.hidden}};
 translate(language);
})();
