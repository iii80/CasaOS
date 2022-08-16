(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mixins_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/mixins/mixin */ "./src/mixins/mixin.js");\n/* harmony import */ var vue_plyr_dist_vue_plyr_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-plyr/dist/vue-plyr.css */ "./node_modules/vue-plyr/dist/vue-plyr.css");\n/* harmony import */ var vue_plyr_dist_vue_plyr_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_plyr_dist_vue_plyr_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n // import VuePlyr from \'vue-plyr\'\n\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n  mixins: [_mixins_mixin__WEBPACK_IMPORTED_MODULE_5__["mixin"]],\n  props: {\n    item: {\n      type: Object,\n      default: function _default() {\n        return {\n          path: \'/DATA/5 Seconds Of Summer - Amnesia.mp4\',\n          name: \'5 Seconds Of Summer - Amnesia.mp4\'\n        };\n      }\n    }\n  },\n  components: {\n    VuePlyr: function VuePlyr() {\n      return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! vue-plyr */ "./node_modules/vue-plyr/dist/vue-plyr.esm.js"));\n    }\n  },\n  data: function data() {\n    return {\n      type: "",\n      ext: "",\n      player: null\n    };\n  },\n  computed: {\n    isVideo: function isVideo() {\n      return this.type == "video-x-generic";\n    },\n    isAudio: function isAudio() {\n      return this.type == "audio-x-generic";\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.ext = this.getFileExt(this.item);\n    Object.keys(this.typeMap).forEach(function (_type) {\n      var extensions = _this.typeMap[_type];\n\n      if (extensions.indexOf(_this.ext.toLowerCase()) > -1) {\n        _this.type = _type;\n      }\n    });\n  },\n  methods: {\n    download: function download() {\n      this.downloadFile(this.item);\n    },\n    close: function close() {\n      this.$emit("close");\n    }\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.$refs.plyr.player.destroy();\n  }\n});\n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/VideoPlayer.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},'./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"41d1a626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=template&id=366472eb&':
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"41d1a626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=template&id=366472eb& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("div", { staticClass: "overlay" }, [\n    _c("header", { staticClass: "modal-card-head" }, [\n      _c("div", { staticClass: "is-flex-grow-1 is-flex " }, [\n        _c("h3", { staticClass: "title is-5 one-line" }, [\n          _vm._v(_vm._s(_vm.item.name)),\n        ]),\n      ]),\n      _c(\n        "div",\n        { staticClass: "is-flex is-align-items-center" },\n        [\n          _c("b-button", {\n            staticClass: "mr-2",\n            attrs: {\n              "icon-left": "download",\n              type: "is-primary",\n              size: "is-small",\n              label: _vm.$t("Download"),\n              rounded: "",\n            },\n            on: { click: _vm.download },\n          }),\n          _c(\n            "div",\n            {\n              staticClass:\n                "is-flex is-align-items-center modal-close-container close-btn modal-close-container-line",\n            },\n            [\n              _c("button", {\n                staticClass: "delete",\n                attrs: { type: "button" },\n                on: { click: _vm.close },\n              }),\n            ]\n          ),\n        ],\n        1\n      ),\n    ]),\n    _c(\n      "div",\n      {\n        staticClass:\n          "is-flex is-justify-content-center is-align-items-center is-flex-grow-1 v-container video",\n      },\n      [\n        _c(\n          "div",\n          { staticClass: "video-container" },\n          [\n            _vm.isVideo\n              ? _c("vue-plyr", { key: "video-player", ref: "plyr" }, [\n                  _c("video", { attrs: { controls: "", crossorigin: "" } }, [\n                    _c("source", {\n                      attrs: {\n                        src: _vm.getFileUrl(_vm.item),\n                        type: "video/mp4",\n                      },\n                    }),\n                  ]),\n                ])\n              : _vm._e(),\n            _vm.isAudio\n              ? _c("vue-plyr", { key: "audio-player", ref: "plyr" }, [\n                  _c(\n                    "audio",\n                    {\n                      attrs: { controls: "", crossorigin: "", playsinline: "" },\n                    },\n                    [\n                      _c("source", {\n                        attrs: {\n                          src: _vm.getFileUrl(_vm.item),\n                          type: "audio/" + _vm.ext,\n                        },\n                      }),\n                    ]\n                  ),\n                ])\n              : _vm._e(),\n          ],\n          1\n        ),\n      ]\n    ),\n    _c("div", { staticClass: "v-footer is-flex is-justify-content-center" }),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/VideoPlayer.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2241d1a626-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},"./src/components/filebrowser/viewers/VideoPlayer.vue":
/*!************************************************************!*\
  !*** ./src/components/filebrowser/viewers/VideoPlayer.vue ***!
  \************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VideoPlayer_vue_vue_type_template_id_366472eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=template&id=366472eb& */ "./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=template&id=366472eb&");\n/* harmony import */ var _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&lang=js& */ "./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(\n  _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _VideoPlayer_vue_vue_type_template_id_366472eb___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _VideoPlayer_vue_vue_type_template_id_366472eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/components/filebrowser/viewers/VideoPlayer.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/VideoPlayer.vue?')},"./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/VideoPlayer.vue?')},"./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=template&id=366472eb&":
/*!*******************************************************************************************!*\
  !*** ./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=template&id=366472eb& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_41d1a626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_366472eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"41d1a626-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=template&id=366472eb& */ "./node_modules/cache-loader/dist/cjs.js?{\\"cacheDirectory\\":\\"node_modules/.cache/vue-loader\\",\\"cacheIdentifier\\":\\"41d1a626-vue-loader-template\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/filebrowser/viewers/VideoPlayer.vue?vue&type=template&id=366472eb&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_41d1a626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_366472eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_41d1a626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_366472eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/VideoPlayer.vue?')}}]);