define("vendor/ane/components/ms-datepicker/ms-datepicker.ts",function(e){"use strict";var t=e("vendor/ane/components/ms-form/ms-control.ts"),n=e("vendor/ane/components/ms-form/utils.ts");t["default"].extend({displayName:"ms-datepicker",template:"\n<div></div>\n",defaults:{selected:"",mapValueToText:function(e){this.selected=e},onInit:function(){var e=this;n.emitToFormItem(this),this.$watch("value",function(t){e.mapValueToText(t),e.handleChange({target:{value:t},denyValidate:!0,type:"changed"})}),this.mapValueToText(this.value)}}})});