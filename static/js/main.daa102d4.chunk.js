(this.webpackJsonpmeme=this.webpackJsonpmeme||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),l=a(2),r=a.n(l),o=function(){return m.a.createElement("div",null,m.a.createElement("h1",null,"Simple Meme Generator"))},c=a(3),i=a(4),s=a(5),u=a(7),h=a(6),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,m=new Array(n),l=0;l<n;l++)m[l]=arguments[l];return(e=t.call.apply(t,[this].concat(m))).state={topText:"",bottomText:"",randomImage:"https://i.imgflip.com/26am.jpg",allMemeImgs:[]},e.handleChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=Math.floor(Math.random()*e.state.allMemeImgs.length),n=e.state.allMemeImgs[a].url;e.setState({randomImage:n})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){return e.setState({allMemeImgs:t.data.memes})}))}},{key:"render",value:function(){return m.a.createElement("div",{className:"memeContainer"},m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("input",{type:"text",name:"topText",placeholder:"Add Top Text",value:this.state.topText,onChange:this.handleChange}),m.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Add Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),m.a.createElement("button",null,"Generate Meme ")),m.a.createElement("div",{className:"meme"},m.a.createElement("img",{src:this.state.randomImage,alt:""}),m.a.createElement("h2",{className:"topText"},this.state.topText),m.a.createElement("h2",null,this.state.bottomText)))}}]),a}(n.Component),d=function(){return m.a.createElement("div",null,m.a.createElement(o,null),m.a.createElement(p,null))};a(13);r.a.render(m.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.daa102d4.chunk.js.map