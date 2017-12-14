var vm = new Vue({
    el: '.bbb',
});
console.log(vm.$el);

vm.$el.append(vm.$el.cloneNode(true));
vm.$el.parentNode.insertBefore(vm.$el.cloneNode(true), vm.$el.nextSibling);
