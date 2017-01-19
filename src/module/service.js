
define(["regularjs", "./service.html","../css/fcstyle2.css"], function(Regular, tpl ){
    return Regular.extend({
        template: tpl,
        config: function(){
            this.$state.on("end", this.$update.bind(this,null));
        }
    })
})