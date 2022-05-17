"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.field = exports.queryEncode = void 0;
function queryEncode(obj) {
    return Object.keys(obj)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
        .join("&");
}
exports.queryEncode = queryEncode;
function field(_target, propertyKey, descriptor) {
    const after = descriptor.value;
    const real_name = propertyKey
        .split(/(?=[A-Z])/)
        .map((s) => s.toLocaleLowerCase())
        .join("_");
    descriptor.value = function (...args) {
        this.fields[real_name] = true;
        return after.apply(this, args);
    };
}
exports.field = field;
//# sourceMappingURL=util.js.map