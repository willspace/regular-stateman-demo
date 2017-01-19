define(["regularjs", "./app.html", "../components/menu.js"], function(Regular, tpl ){


  return Regular.extend({
    template: tpl,

    config: function(data){
      data.menus = [
        {url: '/',name: "Home", state: "app.index",amiclass:"i-nav-overview" },
        {url: '/service', name: "Service", state: 'app.service',amiclass:"i-nav-rds",hasendline:true},
        {url: '/user', name: "User", state: 'app.user',amiclass:"i-nav-cdn" }
      ]
    }
  })
})