define(["regularjs", "./index.html"], function(Regular, tpl ){
    return Regular.extend({
        template: tpl,
        config: function(){
            this.$state.on("end", this.$update.bind(this,null));
        }
    })
})