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

Vue.component('index-main',function(resolve){
  loadHtml("main.html", resolve)
});

Vue.component('post-view',function(resolve){
  loadHtml("post-view.html", resolve)
})

var router = new VueRouter({
  routes: [
    {path: '/', component:Vue.component('index-main')},
    {path: "/post-view", component:Vue.component('post-view')}
  ]
})


var app = new Vue({
  el: "#app",
  router
});

