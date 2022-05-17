"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bool = exports.BoolArgumentType = void 0;
const internal_1 = require("../internal");
class BoolArgumentType extends internal_1.ArgumentType {
    parse(reader) {
        return reader.readBoolean();
    }
    listSuggestions(context, builder) {
        if ("true".startsWith(builder.getRemaining().toLowerCase())) {
            builder.suggest("true");
        }
        if ("false".startsWith(builder.getRemaining().toLowerCase())) {
            builder.suggest("false");
        }
        return builder.buildPromise();
    }
}
exports.BoolArgumentType = BoolArgumentType;
function bool() {
    return new BoolArgumentType();
}
exports.bool = bool;
//# sourceMappingURL=BoolArgumentType.js.map