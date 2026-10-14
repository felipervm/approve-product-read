(() => {
  const descriptions = {
    huge: { copy: 'corpo amplo e solto, comprimento um pouco mais curto, mangas até o cotovelo e ombros deslocados.', url: 'https://justapprove.com.br/produtos/camiseta-huge-approve-only-ii-off-white/' },
    box: { copy: 'corpo amplo, ombros deslocados e mangas até o cotovelo. na NFL III, o comprimento é descrito como mais curto que o de uma oversized tradicional.', url: 'https://justapprove.com.br/produtos/camiseta-box-approve-x-nfl-27092026-branco/' },
    core: { copy: 'na Texaco, caimento tradicional, levemente ajustado. na Corinthians, a marca descreve a Core como a nova Bold, mais curta e alinhada à cintura.', url: 'https://justapprove.com.br/produtos/camiseta-core-approve-x-corinthians-centenario/' }
  };
  const tabs = [...document.querySelectorAll('[data-fit]')];
  const panel = document.querySelector('#fit-detail');
  function select(tab, focus = false) {
    const fit = tab.dataset.fit;
    tabs.forEach(t => {const active=t===tab;t.classList.toggle('is-active',active);t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;});
    document.querySelector('#detail-name').textContent = `${fit.toUpperCase()} / DESCRIÇÃO OFICIAL`;
    document.querySelector('#detail-copy').textContent = descriptions[fit].copy;
    document.querySelector('#detail-source').href = descriptions[fit].url;
    panel.setAttribute('aria-labelledby',tab.id);
    if(focus) tab.focus();
  }
  tabs.forEach((tab,index) => {
    tab.addEventListener('click',()=>select(tab));
    tab.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')select(tab);});
    tab.addEventListener('keydown',e=>{
      let target;
      if(e.key==='ArrowRight')target=tabs[(index+1)%tabs.length];
      if(e.key==='ArrowLeft')target=tabs[(index+tabs.length-1)%tabs.length];
      if(e.key==='Home')target=tabs[0];if(e.key==='End')target=tabs.at(-1);
      if(target){e.preventDefault();select(target,true);}
    });
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if('IntersectionObserver' in window && !reduced.matches){
    document.documentElement.classList.add('motion-ready');
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}}),{threshold:.15});
    document.querySelectorAll('[data-question]').forEach(el=>observer.observe(el));
  }
  const hero=document.querySelector('.hero');let framePending=false;
  const parallax=()=>{
    framePending=false;
    if(reduced.matches||innerWidth<601){hero.style.removeProperty('--hero-shift');return;}
    const y=Math.min(Math.max(scrollY,0),hero.offsetHeight);
    hero.style.setProperty('--hero-shift',`${-12+Math.min(y*.03,24)}px`);
  };
  addEventListener('scroll',()=>{if(!framePending){framePending=true;requestAnimationFrame(parallax);}},{passive:true});
  reduced.addEventListener('change',()=>{if(reduced.matches)document.documentElement.classList.remove('motion-ready');parallax();});
})();
