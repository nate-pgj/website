import{M as c}from"./music-list-DsE2Wogh.js";import{_ as r,m as n,a as o,r as l,o as u,c as p,b as m}from"./index-BpxGVssb.js";const _={components:{musicList:c},data(){return{playlist:[]}},created(){this.getData()},methods:{getData(){this.local_music.forEach(t=>{this.music_group.MyFavorite.includes(t.id)&&(t.MyFavorite=!0),this.playlist.push(t)}),this.$store.dispatch("setPlaylist",{list:this.playlist})},selectItem(t,s){t.id!==this.currentMusic.id&&(this.setCurrentIndex(s),this.setPlaying(!0))},...n({setPlaying:"SET_PLAYING",setCurrentIndex:"SET_CURRENTINDEX",clearPlaylist:"CLEAR_PLAYLIST"})},watch:{local_music(){this.getData()}},computed:{playing:function(){return this.$store.state.playing},currentMusic:function(){return this.$store.getters.currentMusic},music_group:function(){return this.$store.state.music_group},...o(["local_music"])}},h={class:"natelist"};function d(t,s,f,y,e,i){const a=l("music-list");return u(),p("div",h,[m(a,{list:e.playlist,"list-type":"duration",onSelect:i.selectItem},null,8,["list","onSelect"])])}const E=r(_,[["render",d]]);export{E as default};