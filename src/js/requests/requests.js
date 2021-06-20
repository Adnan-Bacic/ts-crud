var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//import axios from 'axios'
import { apiUrl } from '../constants.js';
export var getUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.get(apiUrl)];
            case 1:
                res = _a.sent();
                if (res.status !== 200) {
                    throw new Error('Cannot get users');
                }
                return [2 /*return*/, res.data];
            case 2:
                err_1 = _a.sent();
                console.warn('err', err_1);
                return [2 /*return*/, err_1];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var addUser = function (name, email) { return __awaiter(void 0, void 0, void 0, function () {
    var res, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.post(apiUrl, {
                        body: JSON.stringify({
                            id: 11,
                            name: name,
                            email: email,
                        }),
                    })];
            case 1:
                res = _a.sent();
                if (res.status !== 201) {
                    throw new Error('Cannot post user');
                }
                return [2 /*return*/, res.data.body];
            case 2:
                error_1 = _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var deleteUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.delete(apiUrl + "/" + id)];
            case 1:
                res = _a.sent();
                if (res.status !== 200) {
                    throw new Error('Cannot delete user');
                }
                return [2 /*return*/, res.data];
            case 2:
                err_2 = _a.sent();
                console.warn('err', err_2);
                return [2 /*return*/, err_2];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var putUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.put(apiUrl + "/" + id, {
                        name: 'put name',
                        email: 'put email'
                    })];
            case 1:
                res = _a.sent();
                if (res.status !== 200) {
                    throw new Error('Cannot put user');
                }
                return [2 /*return*/, res.data];
            case 2:
                err_3 = _a.sent();
                console.warn('err', err_3);
                return [2 /*return*/, err_3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var patchUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.patch(apiUrl + "/" + id, {
                        name: 'patch name',
                        email: 'patch email'
                    })];
            case 1:
                res = _a.sent();
                if (res.status !== 200) {
                    throw new Error('Cannot patch user');
                }
                return [2 /*return*/, res.data];
            case 2:
                err_4 = _a.sent();
                console.warn('err', err_4);
                return [2 /*return*/, err_4];
            case 3: return [2 /*return*/];
        }
    });
}); };
