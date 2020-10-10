function loadHtml(template, resolve) {
  fetch("/templates/"+template).then(function(response){
    return response.text()                                 
  }).then(function(html){
    return resolve({template: html});
  })
}


Vue.component('title-nav',function(resolve){
  loadHtml("title-nav.html",resolve)
});

Vue.component('post-item',function(resolve){
  loadHtml("post-item.html",resolve)
});

Vue.component('index-main',function(resolve){
  loadHtml("main.html", resolve)
});

var router = new VueRouter({
  routes: [{path: '/', component:Vue.component('index-main')}]
})


var app = new Vue({
  el: "#app",
  router
});

