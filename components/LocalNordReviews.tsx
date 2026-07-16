import Script from 'next/script';

const WIDGET_SCRIPT = `
(function(){
  var cfg={"template":"carousel","color":"#fbdd03","bg":"#ffffff","text":"#111827","showDate":true,"showRating":true,"maxReviews":6,"showAgency":true,"agencyName":"Le Consultant Digital","autoplay":true};
  fetch("https://app.localnord.io/api/widget/2bb4ad97-46c6-42fc-aa84-e05f28371685?limit=6&minRating=4&sort=recent")
    .then(function(r){return r.json()})
    .then(function(d){
      var c=document.getElementById("ln-reviews-widget");
      if(!c)return;
      var stars=function(n){var s="";for(var i=0;i<5;i++)s+='<svg width="14" height="14" viewBox="0 0 24 24" fill="'+(i<n?cfg.color:"#e5e7eb")+'" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';return s};
      var starsSmall=function(n){var s="";for(var i=0;i<5;i++)s+='<svg width="12" height="12" viewBox="0 0 24 24" fill="'+(i<n?cfg.color:"#e5e7eb")+'" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';return s};
      var fmtDate=function(d){return new Date(d).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})};
      var html="";
      var font="font-family:-apple-system,system-ui,sans-serif";
      var esc=function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
      if(cfg.template==="badge"){
        html='<div style="display:inline-flex;align-items:center;gap:12px;padding:16px 24px;border-radius:16px;background:'+cfg.bg+';border:1px solid rgba(0,0,0,.08);'+font+'">';
        html+='<div style="display:flex;align-items:center;gap:4px">'+stars(Math.round(d.listing.rating||0))+'</div>';
        html+='<div><span style="font-size:20px;font-weight:700;color:'+cfg.text+'">'+((d.listing.rating||0).toFixed(1))+'</span>';
        html+='<span style="font-size:13px;color:#6b7280;margin-left:6px">'+(d.listing.reviewCount||0)+' avis Google</span></div></div>';
      }else if(cfg.template==="testimonial"){
        var slides=d.reviews.map(function(r,i){
          var s='<div style="text-align:center;padding:32px;background:'+cfg.bg+';border:1px solid rgba(0,0,0,.06);border-radius:20px;'+font+'">';
          s+='<div style="font-size:40px;color:'+cfg.color+';margin-bottom:16px">&ldquo;</div>';
          if(r.comment)s+='<p style="font-size:16px;line-height:1.7;color:#4b5563;margin:0 0 20px;font-style:italic;max-width:560px;display:inline-block">'+esc(r.comment)+'</p>';
          if(cfg.showRating)s+='<div style="display:flex;justify-content:center;gap:3px;margin-bottom:12px">'+stars(r.rating)+'</div>';
          s+='<div style="font-size:14px;font-weight:600;color:'+cfg.text+'">'+esc(r.author_name)+'</div>';
          if(cfg.showDate)s+='<div style="font-size:11px;color:#9ca3af;margin-top:4px">'+fmtDate(r.published_at)+'</div>';
          s+='</div>';
          return s;
        });
        html='<div style="display:flex;flex-direction:column;gap:16px;align-items:center">'+slides.join("")+'</div>';
      }else if(cfg.template==="compact"){
        var items=d.reviews.map(function(r){
          var s='<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:'+cfg.bg+';border:1px solid rgba(0,0,0,.06);border-radius:12px;'+font+'">';
          s+='<div style="width:32px;height:32px;border-radius:50%;background:'+cfg.color+'20;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:13px;color:'+cfg.color+';flex-shrink:0">'+esc(r.author_name.slice(0,1).toUpperCase())+'</div>';
          s+='<div style="flex:1;min-width:0"><div style="display:flex;align-items:center;gap:8px;margin-bottom:2px"><span style="font-size:12px;font-weight:600;color:'+cfg.text+'">'+esc(r.author_name)+'</span>';
          if(cfg.showRating)s+='<span style="display:flex;gap:1px">'+starsSmall(r.rating)+'</span>';
          s+='</div>';
          if(r.comment)s+='<p style="font-size:12px;color:#6b7280;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(r.comment)+'</p>';
          s+='</div></div>';
          return s;
        });
        html='<div style="display:flex;flex-direction:column;gap:8px">'+items.join("")+'</div>';
      }else if(cfg.template==="wall"){
        html='<div style="'+font+'">';
        html+='<div style="text-align:center;margin-bottom:24px;padding:20px;background:'+cfg.bg+';border:1px solid rgba(0,0,0,.06);border-radius:16px">';
        html+='<div style="font-size:36px;font-weight:700;color:'+cfg.text+'">'+((d.listing.rating||0).toFixed(1))+'</div>';
        html+='<div style="display:flex;justify-content:center;gap:3px;margin:8px 0">'+stars(Math.round(d.listing.rating||0))+'</div>';
        html+='<div style="font-size:13px;color:#6b7280">'+(d.listing.reviewCount||0)+' avis Google</div>';
        html+='</div>';
        var wallCards=d.reviews.map(function(r){
          var s='<div style="background:'+cfg.bg+';border:1px solid rgba(0,0,0,.06);border-radius:12px;padding:16px">';
          s+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">';
          s+='<div style="width:28px;height:28px;border-radius:50%;background:'+cfg.color+'20;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:11px;color:'+cfg.color+'">'+esc(r.author_name.slice(0,1).toUpperCase())+'</div>';
          s+='<span style="font-size:12px;font-weight:600;color:'+cfg.text+'">'+esc(r.author_name)+'</span>';
          if(cfg.showDate)s+='<span style="font-size:10px;color:#9ca3af;margin-left:auto">'+fmtDate(r.published_at)+'</span>';
          s+='</div>';
          if(cfg.showRating)s+='<div style="display:flex;gap:1px;margin-bottom:6px">'+starsSmall(r.rating)+'</div>';
          if(r.comment)s+='<p style="font-size:12px;line-height:1.5;color:#4b5563;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">'+esc(r.comment)+'</p>';
          s+='</div>';
          return s;
        });
        html+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px">'+wallCards.join("")+'</div>';
        html+='</div>';
      }else if(cfg.template==="masonry"){
        var mCards=d.reviews.map(function(r){
          var s='<div style="background:'+cfg.bg+';border:1px solid rgba(0,0,0,.08);border-radius:16px;padding:20px;break-inside:avoid;margin-bottom:12px;'+font+'">';
          s+='<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">';
          s+='<div style="width:36px;height:36px;border-radius:50%;background:'+cfg.color+'20;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;color:'+cfg.color+'">'+esc(r.author_name.slice(0,1).toUpperCase())+'</div>';
          s+='<div><div style="font-size:13px;font-weight:600;color:'+cfg.text+'">'+esc(r.author_name)+'</div>';
          if(cfg.showDate)s+='<div style="font-size:11px;color:#9ca3af">'+fmtDate(r.published_at)+'</div>';
          s+='</div></div>';
          if(cfg.showRating)s+='<div style="display:flex;gap:2px;margin-bottom:8px">'+stars(r.rating)+'</div>';
          if(r.comment)s+='<p style="font-size:13px;line-height:1.5;color:#4b5563;margin:0">'+esc(r.comment)+'</p>';
          s+='</div>';
          return s;
        });
        html='<div style="column-count:2;column-gap:12px">'+mCards.join("")+'</div>';
      }else{
        var cardStyle="background:"+cfg.bg+";border:1px solid rgba(0,0,0,.08);border-radius:16px;padding:20px;"+font;
        var cards=d.reviews.map(function(r){
          var card='<div style="'+cardStyle+';min-width:280px;max-width:340px;flex-shrink:0">';
          card+='<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">';
          card+='<div style="width:36px;height:36px;border-radius:50%;background:'+cfg.color+'20;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;color:'+cfg.color+'">'+esc(r.author_name.slice(0,1).toUpperCase())+'</div>';
          card+='<div><div style="font-size:13px;font-weight:600;color:'+cfg.text+'">'+esc(r.author_name)+'</div>';
          if(cfg.showDate)card+='<div style="font-size:11px;color:#9ca3af">'+fmtDate(r.published_at)+'</div>';
          card+='</div></div>';
          if(cfg.showRating)card+='<div style="display:flex;gap:2px;margin-bottom:8px">'+stars(r.rating)+'</div>';
          if(r.comment)card+='<p style="font-size:13px;line-height:1.5;color:#4b5563;margin:0;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden">'+esc(r.comment)+'</p>';
          card+='</div>';
          return card;
        });
        if(cfg.template==="carousel"){
          var uid="lnc"+Math.random().toString(36).slice(2,8);
          if(cfg.autoplay){
            var dur=Math.max(20,d.reviews.length*6);
            html='<style>@keyframes '+uid+'m{from{transform:translateX(0)}to{transform:translateX(-50%)}}#'+uid+'{display:flex;gap:16px;width:max-content;animation:'+uid+'m '+dur+'s linear infinite}#'+uid+':hover{animation-play-state:paused}#'+uid+'w{position:relative;overflow:hidden}#'+uid+'w::before,#'+uid+'w::after{content:"";position:absolute;top:0;bottom:0;width:48px;pointer-events:none;z-index:1}#'+uid+'w::before{left:0;background:linear-gradient(to right,'+cfg.bg+',transparent)}#'+uid+'w::after{right:0;background:linear-gradient(to left,'+cfg.bg+',transparent)}</style><div id="'+uid+'w"><div id="'+uid+'">'+cards.join("")+cards.join("")+'</div></div>';
          }else{
            var arw="position:absolute;top:50%;transform:translateY(-50%);width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.9);border:1px solid rgba(0,0,0,.1);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.1);z-index:1;transition:opacity .2s";
            var cL='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
            var cR='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
            html='<style>#'+uid+'::-webkit-scrollbar{display:none}</style><div style="position:relative"><div id="'+uid+'" style="display:flex;gap:16px;overflow-x:auto;padding:4px 0;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scroll-behavior:smooth;scrollbar-width:none">'+cards.join("")+'</div><button id="'+uid+'L" style="'+arw+';left:4px" aria-label="Précédent">'+cL+'</button><button id="'+uid+'R" style="'+arw+';right:4px" aria-label="Suivant">'+cR+'</button></div>';
          }
        }else if(cfg.template==="grid"){
          html='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">'+cards.join("")+'</div>';
        }else{
          html='<div style="display:flex;flex-direction:column;gap:12px">'+cards.map(function(c){return c.replace("min-width:280px;max-width:340px;flex-shrink:0","width:100%")}).join("")+'</div>';
        }
      }
      if(cfg.showAgency&&cfg.agencyName)html+='<div style="text-align:center;margin-top:12px;font-size:11px;color:#9ca3af;font-family:-apple-system,system-ui,sans-serif">Réalisé par '+esc(cfg.agencyName)+'</div>';
      c.innerHTML=html;
      if(cfg.template==="carousel"&&!cfg.autoplay){var sc=document.getElementById(uid),bL=document.getElementById(uid+"L"),bR=document.getElementById(uid+"R");if(sc&&bL&&bR){var upd=function(){bL.style.opacity=sc.scrollLeft>10?"1":"0";bL.style.pointerEvents=sc.scrollLeft>10?"auto":"none";bR.style.opacity=sc.scrollLeft<sc.scrollWidth-sc.clientWidth-10?"1":"0";bR.style.pointerEvents=sc.scrollLeft<sc.scrollWidth-sc.clientWidth-10?"auto":"none"};upd();sc.addEventListener("scroll",upd);bL.addEventListener("click",function(){sc.scrollBy({left:-300,behavior:"smooth"})});bR.addEventListener("click",function(){sc.scrollBy({left:300,behavior:"smooth"})})}}
    });
})();
`;

export default function LocalNordReviews() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <span className="eyebrow">Avis clients</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Ce qu&apos;en pensent mes clients</h2>
        </div>
        <div id="ln-reviews-widget" />
        <Script id="localnord-reviews-widget" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: WIDGET_SCRIPT }} />
      </div>
    </section>
  );
}
