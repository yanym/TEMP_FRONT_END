(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(333)},167:function(e,t,a){},168:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),l=a.n(o),i=(a(167),a(49)),c=a(50),s=a(55),d=a(51),u=a(56),h=(a(168),a(88)),f=a(334),v=(a(115),a(111)),b=a.n(v),m=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e,t,n){a.setState({filteredInfo:t,sortedInfo:n})},a.clearFilters=function(){a.setState({filteredInfo:null})},a.clearAll=function(){a.setState({filteredInfo:null,sortedInfo:null})},a.setAgeSort=function(){a.setState({sortedInfo:{order:"descend",columnKey:"id"}})},a.state={filteredInfo:null,sortedInfo:null,dataSource:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("./predict_result1.json").then(function(t){for(var a=0,n=t.data.length;a<n;a++){for(var r=e.state.dataSource.length,o=0,l=0;l<r;l++)t.data[a].id===e.state.dataSource[l].id&&(console.log(t.data[a].id),o=1,e.state.dataSource[l].ts<t.data[a].ts&&(e.state.dataSource.splice(l,1),e.state.dataSource.push(t.data[a])));0===o&&e.state.dataSource.push(t.data[a])}}),b.a.get("./predict_result2.json").then(function(t){for(var a=0,n=t.data.length;a<n;a++){for(var r=e.state.dataSource.length,o=0,l=0;l<r;l++)t.data[a].id===e.state.dataSource[l].id&&(console.log(t.data[a].id),o=1,e.state.dataSource[l].ts<t.data[a].ts&&(e.state.dataSource.splice(l,1),e.state.dataSource.push(t.data[a])));0===o&&e.state.dataSource.push(t.data[a])}})}},{key:"render",value:function(){var e=this.state,t=e.sortedInfo,a=e.filteredInfo;a=a||{};var n=[{title:"Cow ID",dataIndex:"id",key:"id",sorter:function(e,t){return e.id-t.id},sortOrder:"id"===(t=t||{}).columnKey&&t.order},{title:"Calving Probability in 24 Hours (%)",dataIndex:"probability",key:"probability",sorter:function(e,t){return e.probability-t.probability},sortOrder:"probability"===t.columnKey&&t.order},{title:"Timestamp",dataIndex:"ts",key:"ts",sorter:function(e,t){return e.ts-t.ts},sortOrder:"ts"===t.columnKey&&t.order}];return r.a.createElement("div",null,r.a.createElement("div",{className:"table-operations"},r.a.createElement(h.a,{onClick:this.setAgeSort},"Sort ID"),r.a.createElement(h.a,{onClick:this.clearFilters},"Clear filters"),r.a.createElement(h.a,{onClick:this.clearAll},"Clear filters and sorters"),r.a.createElement(h.a,{onClick:this.clearAll},"Refresh")),r.a.createElement(f.a,{columns:n,dataSource:this.state.dataSource,onChange:this.handleChange,pagination:!1}))}}]),t}(r.a.Component),A=a(335),w=a(336),y=a(85),g=A.a.MonthPicker,L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={size:"large"},a.handleSizeChange=function(e){a.setState({size:e.target.value})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.size;return r.a.createElement("div",null,r.a.createElement("img",{src:"data:image/png;base64,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",alt:"Logo"}),"    ",r.a.createElement("b",null,"CS 5412 Project by Group 34"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Enter Calving Date: ")," ",r.a.createElement(A.a,{size:e})," ",r.a.createElement(g,{size:e,placeholder:"Select Month"})," ",r.a.createElement(w.a,{size:"large",min:1,max:1e5,placeholder:"Cow ID"}),r.a.createElement(y.a.Group,{value:e,onChange:this.handleSizeChange},r.a.createElement(y.a.Button,{value:"large",onChange:function(e){alert("Upload Succeeded")}},"Submit"),r.a.createElement(y.a.Button,{value:"large"},"Clear")),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(m,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,1,2]]]);
//# sourceMappingURL=main.fd4f87d4.chunk.js.map