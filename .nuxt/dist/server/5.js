exports.ids = [5];
exports.modules = {

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=2ab14f6e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-2ab14f6e>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-2ab14f6e>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-2ab14f6e>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-2ab14f6e>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-2ab14f6e>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-2ab14f6e><li data-v-2ab14f6e>That email is already taken</li></ul> <form data-v-2ab14f6e>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-2ab14f6e><input type=\"text\" placeholder=\"Your Name\" class=\"form-control form-control-lg\" data-v-2ab14f6e></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-2ab14f6e><input type=\"email\" placeholder=\"Email\" required=\"required\" class=\"form-control form-control-lg\" data-v-2ab14f6e></fieldset> <fieldset class=\"form-group\" data-v-2ab14f6e><input type=\"password\" placeholder=\"Password\" minlength=\"8\" required=\"required\" class=\"form-control form-control-lg\" data-v-2ab14f6e></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-2ab14f6e>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n\t\t\t\t\t")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=2ab14f6e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'LoginIndex',

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2ab14f6e",
  "c69be5f0"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map