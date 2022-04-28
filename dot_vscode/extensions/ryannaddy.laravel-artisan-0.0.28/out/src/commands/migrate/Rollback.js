"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Common_1 = require("../../Common");
class MigrateRollback extends Common_1.default {
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            let database = yield this.getInput('What database should I use?');
            let command = `migrate:rollback ${database.length > 0 ? '--database=' + database : ''}`;
            this.execCmd(command, (info) => __awaiter(this, void 0, void 0, function* () {
                if (info.err) {
                    this.showError('The database could not be rolled back', info.err);
                }
                else {
                    this.showMessage('The database has been rolled back');
                }
            }));
        });
    }
}
exports.default = MigrateRollback;
//# sourceMappingURL=Rollback.js.map