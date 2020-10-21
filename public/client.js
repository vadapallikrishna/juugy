function loadHtml(template, resolve) {
  fetch("/templates/"+template).then(function(response){
    return response.text()                                 
  }).then(function(html){
    return resolve({template: html});
  })
}


Vue.component('title-nav',function(resolve){
  loadHtml("title-nav.html", resolve)
});

Vue.component('topic-nav',function(resolve){
  loadHtml("topic-nav.html", resolve)
});

Vue.component('post-item',function(resolve){
  loadHtml("post-item.html",resolve)
});

Vue.component('comment-item',function(resolve){
  loadHtml("comment-item.html",resolve)
})

Vue.component('comments-view', function(resolve){
  loadHtml("comments-view.html", resolve)
})

Vue.component('editor', function(resolve){
  loadHtml("editor.html", resolve)
})

Vue.component('aside-trending', function(resolve){
  loadHtml("aside-trending.html", resolve)
})

Vue.component("post-small", function(resolve){
  loadHtml("post-small.html", resolve)
})

Vue.component('index-main',function(resolve){
  loadHtml("main.html", resolve)
});

Vue.component('post-view',function(resolve){
  loadHtml("post-view.html", resolve)
});

Vue.component('new-post', function(resolve){
  loadHtml("new.html", resolve)
});

Vue.component('login', function(resolve){
  loadHtml("login.html", resolve)
});

var router = new VueRouter({
  routes: [
    {path: '/', component:Vue.component('index-main')},
    {path: "/post/new", component:Vue.component('new-post')},
    {path: "/post/:id", component:Vue.component('post-view')},
    {path: "/login", component:Vue.component("login")}
  ]
})


var app = new Vue({
  el: "#app",
  router
});

