(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(75)},33:function(e,t,a){},35:function(e,t,a){},39:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),o=a.n(r),s=(a(33),a(5)),i=a(6),c=a(8),u=a(7),m=a(9),d=a(77),p=a(78),h=a(76),f=(a(35),function(e){var t={btnText:"Sign Up",btnLink:"/signup",onClickAction:function(){console.log("")}};return e.isUser&&(t.btnLink="/",t.btnText="Logout from "+e.user,t.onClickAction=e.logoutHandler),l.a.createElement("div",{className:"navbar"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.a,{to:"/"},e.isUser?"Upload":"Login")),e.isUser?l.a.createElement("li",null,l.a.createElement(h.a,{to:"/allfiles"},"Your Files")):"",l.a.createElement("li",{className:"signup-btn"},l.a.createElement(h.a,{onClick:t.onClickAction,to:t.btnLink},t.btnText)))))}),E=(a(39),a(12)),g=a.n(E),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",password2:"",email:"",submitted:!1,errors:""},a.handleSubmit=function(e){var t={username:a.state.username,password:a.state.password,password2:a.state.password2,email:a.state.email};a.setState({submitted:!0}),g.a.post("/users/signup",t).then(function(e){"Success - user created!"===e.data.msg&&a.setState({errors:"Woohoo! user created ^_^"},function(){setTimeout(function(){return window.location.href="/"},1e3)})}).catch(function(e){if(409===e.response.status){var t=e.response.data.errors.map(function(e){return e.msg}).join("\n");a.setState({errors:t})}}),e.preventDefault()},a.handleUsernameChange=function(e){a.setState({username:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handlePassword2Change=function(e){a.setState({password2:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.submitted||t.errors!==this.state.errors}},{key:"render",value:function(){return l.a.createElement("div",{className:"signup-top-div"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("table",{className:"signup-tbl"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Username:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"signup-input",onChange:this.handleUsernameChange,name:"username"}))),l.a.createElement("tr",null,l.a.createElement("th",null,"Password:"),l.a.createElement("td",null,l.a.createElement("input",{type:"password",className:"signup-input",onChange:this.handlePasswordChange,name:"password"}))),l.a.createElement("tr",null,l.a.createElement("th",null,"Confirm Password:"),l.a.createElement("td",null,l.a.createElement("input",{type:"password",className:"signup-input",onChange:this.handlePassword2Change,name:"password2"}))),l.a.createElement("tr",null,l.a.createElement("th",null,"Email:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"signup-input",onChange:this.handleEmailChange,name:"email"}))),l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("td",null,l.a.createElement("input",{type:"submit",className:"submit-btn",value:"Submit"})))))),l.a.createElement("div",{className:"signup-error-div"},this.state.errors))}}]),t}(n.Component),v=(a(60),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",submitted:!1,errors:""},a.handleSubmit=function(e){var t={username:a.state.username,password:a.state.password};a.setState({submitted:!0}),g.a.post("/users/login",t).then(function(e){200===e.status&&(localStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.user._id),localStorage.setItem("userName",e.data.user.username),a.props.loadUser())}).catch(function(e){401===e.response.status?a.setState({errors:"Incorrect username or password!"}):a.setState({errors:"Something went wrong..."})}),e.preventDefault()},a.handleUsernameChange=function(e){a.setState({username:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(){return this.state.submitted}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("table",{className:"login-tbl"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Username:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"signin-input",onChange:this.handleUsernameChange,name:"username"}))),l.a.createElement("tr",null,l.a.createElement("th",null,"Password:"),l.a.createElement("td",null,l.a.createElement("input",{type:"password",className:"signin-input",onChange:this.handlePasswordChange,name:"password"}))),l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("td",null,l.a.createElement("input",{type:"submit",className:"submit-btn",value:"Submit"})))),l.a.createElement("div",{className:"error-div"},this.state.errors))))}}]),t}(n.Component)),y=(a(62),a(27)),w=(a(64),function(e){var t=(Math.round(parseFloat(e.size)/1e6*100)/100).toString()+" MB";return"0 MB"==t&&(t=(Math.round(parseFloat(e.size)/1e3*100)/100).toString()+" KB"),l.a.createElement("div",{className:"file-box"},l.a.createElement("a",{href:"#",className:"remove-file-box",onClick:function(t){e.onRemove.call(void 0,t,e.index)},style:{marginLeft:"-80%",color:"green"}},"X"),l.a.createElement("p",null,e.fileName.slice(0,20)+"..."),l.a.createElement("p",null,t))}),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={files:[],description:""},a.descriptionChangedHandler=function(e){a.setState({description:e.target.value})},a.submitFilesHandler=function(e){e.target.value="Uploading...",e.preventDefault();var t={Type:"formData",Authorization:a.props.tokenProp,UploadDescription:a.state.description},n=new FormData;a.state.files.forEach(function(e){n.append("files",e)}),g.a.post("/files/upload",n,{headers:t}).then(function(e){window.location.href=window.location.href+"allfiles"}).catch(function(e){a.props.logout()})},a.onDrop=function(e){a.setState({files:e})},a.onRemove=function(e,t){e.preventDefault(),e.stopPropagation();var n=a.state.files.slice();n.splice(t,1),a.setState({files:n})},a.fileInputChangedHandler=function(e){a.setState({files:e.target.files})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"upload-form"},l.a.createElement("form",{onSubmit:this.submitFilesHandler,encType:"multipart/form-data"},l.a.createElement("table",{className:"upload-tbl"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("td",null,l.a.createElement(y.a,{onDrop:this.onDrop.bind(this),className:"dropzone"},0===this.state.files.length?l.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."):l.a.createElement("div",null,this.state.files.map(function(t,a){return l.a.createElement(w,{key:t.name,fileName:t.name,size:t.size,onRemove:e.onRemove,index:a})}))))),l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("td",null,l.a.createElement("input",{maxlength:"30",placeholder:"Describe your upload... (30 chars)",type:"text",onChange:this.descriptionChangedHandler}))),l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("td",null,l.a.createElement("input",{type:"submit",value:"Upload!"})))))))}}]),t}(n.Component),C=a(26),k=(a(66),a(68),function(e){var t=(Math.round(parseFloat(e.size)/1e6*100)/100).toString()+" MB";return"0 MB"==t&&(t=(Math.round(parseFloat(e.size)/1e3*100)/100).toString()+" KB"),l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",{className:"file-bar"},l.a.createElement("td",{className:"file-bar-property file-name-property"},e.filename),l.a.createElement("td",{className:"file-bar-property"},t),l.a.createElement("td",{className:"file-bar-property"},l.a.createElement("form",{method:"GET",action:"/files/download/"+encodeURIComponent(e.fileId)},l.a.createElement("button",{className:"download-btn"},"\u21e9"))),l.a.createElement("td",{className:"file-bar-property"},l.a.createElement("div",{onClick:e.onDelete},"\u274c")),l.a.createElement("td",{className:"file-bar-property"},l.a.createElement("div",{onClick:e.onCopy},"\ud83d\udccb")),l.a.createElement("td",{className:"file-bar-property"},e.uploadDate),l.a.createElement("td",{className:"file-bar-property"},e.fileDescription)))}),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={files:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"sortBySize",value:function(){var e=Object(C.a)(this.state.files);e.sort(function(e,t){return e-t}),this.setState({files:e})}},{key:"fetchData",value:function(){var e=this,t={Authorization:this.props.tokenProp};g.a.get("/files/all",{headers:t}).then(function(t){var a=t.data;e.setState({files:a},function(){})}).catch(function(t){401===t.response.status&&e.props.logout()})}},{key:"onCopy",value:function(e){var t=document.createElement("input");t.value=window.location.host+"/files/download/"+e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},{key:"onDeleteHandler",value:function(e){var t=this,a={Authorization:this.props.tokenProp};g.a.delete("/files/"+e,{headers:a}).then(function(e){t.fetchData()}).catch(function(e){401===e.response.status&&t.props.logout()})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"allfiles-tbl-top-div"},this.state.files.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"tbl-container"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",{id:"top-row"},l.a.createElement("th",{className:"file-name-property"},"File Name"),l.a.createElement("th",null,"Size"),l.a.createElement("th",null,"Download"),l.a.createElement("th",null,"Delete"),l.a.createElement("th",null,"Copy Link"),l.a.createElement("th",null,"Upload Date"),l.a.createElement("th",null,"File Description"))),l.a.createElement("tbody",null,this.state.files.map(function(t){return l.a.createElement(k,{key:t._id,size:t.length,filename:t.filename,fileId:t._id,onDelete:e.onDeleteHandler.bind(e,t._id),onCopy:e.onCopy.bind(e,t._id),uploadDate:new Date(t.uploadDate).toLocaleString(),fileDescription:t.metadata.uploadDescription})}))))):l.a.createElement("h1",null,"There are no files at the moment..."),console.log(this.state.files[0]))}}]),t}(n.Component),j=(a(70),function(e){return l.a.createElement("footer",{className:"footer"},"Made with ","<3"," by ",l.a.createElement("a",{href:"https://github.com/luzushka"},"Yonatan Lozinsky")," :)")}),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:localStorage.getItem("userName")||"",username:localStorage.getItem("userName")||"",userId:localStorage.getItem("userId")||"",token:localStorage.getItem("token")||""},a.handleLogout=function(){localStorage.clear(),a.setState({user:"",username:"",userId:"",token:""}),window.location.href="/"},a.loadUsers=function(){a.setState({user:!0,username:localStorage.getItem("userName"),userId:localStorage.getItem("userId"),token:localStorage.getItem("token")})},a.noUserRoutes=l.a.createElement("div",null,l.a.createElement(p.a,{path:"/",exact:!0,render:function(){return l.a.createElement(v,{loadUser:a.loadUsers})}}),l.a.createElement(p.a,{path:"/signup",exact:!0,render:function(){return l.a.createElement(b,null)}})),a.yesUserRoutes=l.a.createElement("div",null,l.a.createElement(p.a,{path:"/",exact:!0,render:function(){return l.a.createElement(S,{tokenProp:a.state.token,userId:a.state.userId,logout:a.handleLogout})}}),l.a.createElement(p.a,{path:"/allfiles",exact:!0,render:function(){return l.a.createElement(N,{tokenProp:a.state.token,logout:a.handleLogout})}})),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,{user:this.state.username,isUser:this.state.user,logoutHandler:this.handleLogout}),this.state.user?this.yesUserRoutes:this.noUserRoutes,l.a.createElement(j,null))}}]),t}(n.Component),D=(a(73),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(O,null)))}}]),t}(n.Component));o.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.334b5ae4.chunk.js.map