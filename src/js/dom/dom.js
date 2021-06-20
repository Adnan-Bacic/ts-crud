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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var results = document.querySelector('#results');
var addUserForm = document.querySelector('#addUserForm');
var postName = document.querySelector('#post_name');
var postEmail = document.querySelector('#post_email');
import * as request from '../requests/requests.js';
var setUI = function (res) {
    var usersUI = res.map(function (item) {
        return ("\n        <div>\n        <p>" + item.id + "</p>\n        <p>\n        " + item.name + " - " + item.email + "\n        </p>\n        </div>\n\n        <div>\n        <button class=\"btn btn-info putBtn\" id=" + item.id + ">Put</button>\n        <button class=\"btn btn-info patchBtn\" id=" + item.id + ">Patch</button>\n        <button class=\"btn btn-danger deleteBtn\" id=" + item.id + ">Delete</button>\n        </div>\n        <br>\n        ");
        //join() to remove comma from map()
    }).join('');
    results.innerHTML = usersUI;
};
export var getUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request.getUsers()];
            case 1:
                res = _a.sent();
                setUI(res);
                return [2 /*return*/];
        }
    });
}); };
addUserForm.addEventListener(('submit'), function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var res, parsed, res2, arr;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                console.log('input', postName.value, postEmail.value);
                return [4 /*yield*/, request.addUser(postName.value, postEmail.value)];
            case 1:
                res = _a.sent();
                parsed = JSON.parse(res);
                return [4 /*yield*/, request.getUsers()
                    //create new array from the users array and add the new user object
                ];
            case 2:
                res2 = _a.sent();
                arr = __spreadArray([], res2);
                arr.push(parsed);
                setUI(arr);
                return [2 /*return*/];
        }
    });
}); });
window.addEventListener(('load'), function () { return __awaiter(void 0, void 0, void 0, function () {
    var deleteBtns;
    return __generator(this, function (_a) {
        deleteBtns = document.querySelectorAll('.deleteBtn');
        deleteBtns.forEach(function (deleteBtn) {
            deleteBtn.addEventListener(('click'), function () { return __awaiter(void 0, void 0, void 0, function () {
                var res, res2, filtered;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, request.deleteUser(parseInt(deleteBtn.id))];
                        case 1:
                            res = _a.sent();
                            return [4 /*yield*/, request.getUsers()];
                        case 2:
                            res2 = _a.sent();
                            filtered = res2.filter(function (item) {
                                //better to use user id instead of trashcan id???
                                return item.id !== parseInt(deleteBtn.id);
                            });
                            setUI(filtered);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        return [2 /*return*/];
    });
}); });
window.addEventListener(('load'), function () {
    var putBtns = document.querySelectorAll('.putBtn');
    putBtns.forEach(function (putBtn, i) {
        putBtn.addEventListener(('click'), function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, res2, filtered, newArr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.putUser(parseInt(putBtn.id))];
                    case 1:
                        res = _a.sent();
                        console.log('2', res);
                        return [4 /*yield*/, request.getUsers()];
                    case 2:
                        res2 = _a.sent();
                        filtered = res2.filter(function (item) {
                            //better to use user id instead of putBtn id???
                            return item.id !== parseInt(putBtn.id);
                        });
                        newArr = __spreadArray([], filtered);
                        //insert into specific index
                        //delete 0 items first
                        //insert res
                        newArr.splice(i, 0, res);
                        setUI(newArr);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
window.addEventListener(('load'), function () {
    var patchBtns = document.querySelectorAll('.patchBtn');
    patchBtns.forEach(function (patchBtn, i) {
        patchBtn.addEventListener(('click'), function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, res2, filtered, newArr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.patchUser(parseInt(patchBtn.id))];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, request.getUsers()];
                    case 2:
                        res2 = _a.sent();
                        filtered = res2.filter(function (item) {
                            //better to use user id instead of patchBtn id???
                            return item.id !== parseInt(patchBtn.id);
                        });
                        newArr = __spreadArray([], filtered);
                        //insert into specific index
                        //delete 0 items first
                        //insert res
                        newArr.splice(i, 0, res);
                        setUI(newArr);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
