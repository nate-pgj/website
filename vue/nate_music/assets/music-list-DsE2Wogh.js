import{s as k,N as M,u as m,m as T,a as I,_ as b,r as N,o as l,c as o,F as f,e as n,h as g,w as v,v as S,g as L,x as O,t as _,b as h,y,z as F,A as C,B as w}from"./index-BpxGVssb.js";const U="album",E="duration",D={props:{list:{type:Array,default:()=>[]},listType:{type:String,default:U}},created(){},methods:{formatTime(s){return k(s)},selectItem(s,a,t){t&&/list-menu-icon-del/.test(t.target.className)||this.$emit("select",s,a)},getPlayIconType({id:s}){const{playing:a,currentMusic:{id:t}}=this;return a&&t===s?"pause":"play"},deleteItem(s){this.$emit("del",s)},downloadFun(s){const a=this;M({url:`lyric?id=${s.id}`}).then(t=>{var u={};t.lrc&&t.lrc.lyric&&(u=t.lrc),m({action:"get","data[db]":"nate_music"},function(p){var e=[];p.data.forEach(d=>{e.push(JSON.parse(d.info).id)}),e.includes(s.id)?console.log("已存在"):a.add_sqlpub_music(s,u)})})},add_sqlpub_music(s,a){const t=this,u={action:"add","data[db]":"nate_music","data[data]":JSON.stringify({info:JSON.stringify(s),lyrics:JSON.stringify(a)})};m(u,function(p){t.local_music.push(s),t.$store.dispatch("SET_LOCAL_MUSIC",t.local_music),console.log("数据已上传值sqlpub nate_music表",p),fetch("http://"+location.hostname+":3001/run-python",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:s})}).then(e=>e.text()).then(e=>{console.log("图片声音下载完成",e)})})},addFavorite(s){const a=this;if(this.music_group.MyFavorite.includes(s.id))console.log("已经在我的歌单中啦");else if(this.music_group.MyFavorite.push(s.id),this.isLocal==!0){const t={action:"update","data[db]":"nate_music_group","data[data]":JSON.stringify({ID:1,MyFavorite:JSON.stringify(this.music_group.MyFavorite)})};m(t,function(){s.MyFavorite=!0,a.$store.dispatch("SET_MUSIC_GROUP",a.music_group)})}else s.MyFavorite=!0},...T({SET_LOCAL_MUSIC:"SET_LOCAL_MUSIC",SET_MUSIC_GROUP:"SET_MUSIC_GROUP"})},computed:{isDuration(){return this.listType===E},...I(["playing","currentMusic","music_group","local_music","isLocal"])}},q={class:"music-list flex-col"},z={class:"list-item list-header"},A=n("span",{class:"list-name"},"歌曲",-1),J=n("span",{class:"list-artist"},"歌手",-1),P={key:0,class:"list-time"},$={key:1,class:"list-album"},B={key:2,class:"list-download"},R={class:"list-download"},G={class:"list-content",ref:"listContent"},V=["onDblclick"],Y=["textContent"],j={class:"list-name"},H={class:"list-menu"},K={class:"list-artist"},Q=["onClick"],W={key:1,class:"list-album"},X=["onClick"],Z=["onClick"],x={key:1};function ss(s,a,t,u,p,e){const d=N("nate-icon");return l(),o("div",q,[t.list.length>0?(l(),o(f,{key:0},[n("div",z,[A,J,e.isDuration?(l(),o("span",P,"时长")):(l(),o("span",$,"专辑")),["natelist","userlist","historylist"].includes(s.$route.path.split("/")[1])?g("",!0):(l(),o("span",B,"下载")),v(n("span",R,"我的",512),[[S,["natelist"].includes(s.$route.path.split("/")[1])]])]),n("div",G,[(l(!0),o(f,null,L(t.list,(i,c)=>(l(),o("div",{key:c,class:O(["list-item",{on:s.playing&&s.currentMusic.id===i.id}]),onDblclick:r=>e.selectItem(i,c,r)},[n("span",{class:"list-num",textContent:_(c+1)},null,8,Y),n("div",j,[n("span",null,_(i.name),1),n("div",H,[h(d,{class:"hover",type:e.getPlayIconType(i),size:40,onClick:y(r=>e.selectItem(i,c),["stop"])},null,8,["type","onClick"])])]),n("span",K,_(i.singer),1),e.isDuration?(l(),o("span",{key:0,class:"list-time",onClick:y(r=>e.deleteItem(c),["stop"])},[F(_(e.formatTime(i.duration))+" ",1),h(d,{class:"hover list-menu-icon-del",type:"delete-mini",size:40})],8,Q)):(l(),o("span",W,_(i.album),1)),["natelist","userlist","historylist"].includes(this.$route.path.split("/")[1])?g("",!0):(l(),o("span",{key:2,class:"list-download",onClick:y(r=>e.downloadFun(i,c),["stop"])},[h(d,{type:"download",size:40,style:C({color:s.local_music.map(r=>r.id).includes(i.id)?"red":""})},null,8,["style"])],8,X)),v(n("span",{class:"list-download",onClick:y(r=>e.addFavorite(i,c),["stop"])},[h(d,{type:"favorite",size:40,style:C({color:i.MyFavorite?"red":""})},null,8,["style"])],8,Z),[[S,["natelist"].includes(s.$route.path.split("/")[1])]])],42,V))),128)),w(s.$slots,"listBtn")],512)],64)):(l(),o("div",x,"弄啥呢，怎么啥也没有！！！"))])}const es=b(D,[["render",ss]]);export{es as M};
