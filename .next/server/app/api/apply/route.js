/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/apply/route";
exports.ids = ["app/api/apply/route"];
exports.modules = {

/***/ "(rsc)/./app/api/apply/route.js":
/*!********************************!*\
  !*** ./app/api/apply/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Subscriber */ \"(rsc)/./models/Subscriber.js\");\n\n\n\nasync function POST(req) {\n    try {\n        const { name, email, phone, school, faculty, grade, more, category } = await req.json();\n        if (!name || !email || !phone || !school || !faculty || !grade || !more || !category) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"All fields are required\"\n            }, {\n                status: 400\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        // Check if a subscriber with the same email or phone already exists\n        const existingSubscriber = await _models_Subscriber__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            $or: [\n                {\n                    email\n                },\n                {\n                    phone\n                }\n            ]\n        });\n        if (existingSubscriber) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Email or phone already exists\"\n            }, {\n                status: 409\n            });\n        }\n        const newSubscriber = new _models_Subscriber__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            name,\n            email,\n            phone,\n            school,\n            faculty,\n            grade,\n            more,\n            category\n        });\n        await newSubscriber.save();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Subscriber added successfully\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FwcGx5L3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDTztBQUNMO0FBRXRDLGVBQWVHLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUUsR0FDbEUsTUFBTVIsSUFBSVMsSUFBSTtRQUVoQixJQUNFLENBQUNSLFFBQ0QsQ0FBQ0MsU0FDRCxDQUFDQyxTQUNELENBQUNDLFVBQ0QsQ0FBQ0MsV0FDRCxDQUFDQyxTQUNELENBQUNDLFFBQ0QsQ0FBQ0MsVUFDRDtZQUNBLE9BQU9aLHFEQUFZQSxDQUFDYSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQTBCLEdBQ25DO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNZCwrREFBaUJBO1FBRXZCLG9FQUFvRTtRQUNwRSxNQUFNZSxxQkFBcUIsTUFBTWQsMERBQVVBLENBQUNlLE9BQU8sQ0FBQztZQUNsREMsS0FBSztnQkFBQztvQkFBRVo7Z0JBQU07Z0JBQUc7b0JBQUVDO2dCQUFNO2FBQUU7UUFDN0I7UUFFQSxJQUFJUyxvQkFBb0I7WUFDdEIsT0FBT2hCLHFEQUFZQSxDQUFDYSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWdDLEdBQ3pDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNSSxnQkFBZ0IsSUFBSWpCLDBEQUFVQSxDQUFDO1lBQ25DRztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBQ0EsTUFBTU8sY0FBY0MsSUFBSTtRQUV4QixPQUFPcEIscURBQVlBLENBQUNhLElBQUksQ0FDdEI7WUFBRVEsU0FBUztRQUFnQyxHQUMzQztZQUFFTixRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPRCxPQUFPO1FBQ2QsT0FBT2QscURBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDcEU7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL211aGFtbWV0YnVyYWthc2FyY2lrbGkvTWVkZW5peWV0ZWtuby13ZWIvYXBwL2FwaS9hcHBseS9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCBTdWJzY3JpYmVyIGZyb20gXCJAL21vZGVscy9TdWJzY3JpYmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lLCBzY2hvb2wsIGZhY3VsdHksIGdyYWRlLCBtb3JlLCBjYXRlZ29yeSB9ID1cbiAgICAgIGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBpZiAoXG4gICAgICAhbmFtZSB8fFxuICAgICAgIWVtYWlsIHx8XG4gICAgICAhcGhvbmUgfHxcbiAgICAgICFzY2hvb2wgfHxcbiAgICAgICFmYWN1bHR5IHx8XG4gICAgICAhZ3JhZGUgfHxcbiAgICAgICFtb3JlIHx8XG4gICAgICAhY2F0ZWdvcnlcbiAgICApIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYSBzdWJzY3JpYmVyIHdpdGggdGhlIHNhbWUgZW1haWwgb3IgcGhvbmUgYWxyZWFkeSBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZ1N1YnNjcmliZXIgPSBhd2FpdCBTdWJzY3JpYmVyLmZpbmRPbmUoe1xuICAgICAgJG9yOiBbeyBlbWFpbCB9LCB7IHBob25lIH1dLFxuICAgIH0pO1xuXG4gICAgaWYgKGV4aXN0aW5nU3Vic2NyaWJlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIkVtYWlsIG9yIHBob25lIGFscmVhZHkgZXhpc3RzXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwOSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1N1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcih7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwaG9uZSxcbiAgICAgIHNjaG9vbCxcbiAgICAgIGZhY3VsdHksXG4gICAgICBncmFkZSxcbiAgICAgIG1vcmUsXG4gICAgICBjYXRlZ29yeSxcbiAgICB9KTtcbiAgICBhd2FpdCBuZXdTdWJzY3JpYmVyLnNhdmUoKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgbWVzc2FnZTogXCJTdWJzY3JpYmVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiIH0sXG4gICAgICB7IHN0YXR1czogMjAxIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlNlcnZlciBlcnJvclwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIlN1YnNjcmliZXIiLCJQT1NUIiwicmVxIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJzY2hvb2wiLCJmYWN1bHR5IiwiZ3JhZGUiLCJtb3JlIiwiY2F0ZWdvcnkiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJleGlzdGluZ1N1YnNjcmliZXIiLCJmaW5kT25lIiwiJG9yIiwibmV3U3Vic2NyaWJlciIsInNhdmUiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/apply/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI; // Store in .env file\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nlet cached = global.mongoose || {\n    conn: null,\n    promise: null\n};\nasync function connectToDatabase() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXLEVBQUUscUJBQXFCO0FBRWxFLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTixRQUFRLElBQUk7SUFBRU8sTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFckQsZUFBZUM7SUFDcEIsSUFBSUosT0FBT0UsSUFBSSxFQUFFLE9BQU9GLE9BQU9FLElBQUk7SUFFbkMsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkJILE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWE7UUFHL0M7SUFDRjtJQUVBSSxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCIiwic291cmNlcyI6WyIvVXNlcnMvbXVoYW1tZXRidXJha2FzYXJjaWtsaS9NZWRlbml5ZXRla25vLXdlYi9saWIvbW9uZ29kYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7IC8vIFN0b3JlIGluIC5lbnYgZmlsZVxuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlXCIpO1xufVxuXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlIHx8IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikgcmV0dXJuIGNhY2hlZC5jb25uO1xuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIHtcbiAgICAgIC8vIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIC8vIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNvbm5lY3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/Subscriber.js":
/*!******************************!*\
  !*** ./models/Subscriber.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SubscriberSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    phone: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    school: {\n        type: String,\n        required: true\n    },\n    faculty: {\n        type: String,\n        required: true\n    },\n    grade: {\n        type: String,\n        required: true\n    },\n    more: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Subscriber || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Subscriber\", SubscriberSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvU3Vic2NyaWJlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsbUJBQW1CLElBQUlELHdEQUFlLENBQUM7SUFDM0NHLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDQyxPQUFPO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7UUFBTUUsUUFBUTtJQUFLO0lBQ3BEQyxPQUFPO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUUsUUFBUTtJQUFLO0lBQ3BERSxRQUFRO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN2Q0ssU0FBUztRQUFFUCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDeENNLE9BQU87UUFBRVIsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3RDTyxNQUFNO1FBQUVULE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ1EsVUFBVTtRQUFFVixNQUFNQztRQUFRQyxVQUFVO0lBQUs7QUFDM0M7QUFFQSxpRUFBZU4sd0RBQWUsQ0FBQ2dCLFVBQVUsSUFDdkNoQixxREFBYyxDQUFDLGNBQWNDLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL211aGFtbWV0YnVyYWthc2FyY2lrbGkvTWVkZW5peWV0ZWtuby13ZWIvbW9kZWxzL1N1YnNjcmliZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBTdWJzY3JpYmVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSwgLy8gVW5pcXVlIGVtYWlsXG4gIHBob25lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LCAvLyBVbmlxdWUgcGhvbmVcbiAgc2Nob29sOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZmFjdWx0eTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGdyYWRlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgbW9yZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuU3Vic2NyaWJlciB8fFxuICBtb25nb29zZS5tb2RlbChcIlN1YnNjcmliZXJcIiwgU3Vic2NyaWJlclNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTdWJzY3JpYmVyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGhvbmUiLCJzY2hvb2wiLCJmYWN1bHR5IiwiZ3JhZGUiLCJtb3JlIiwiY2F0ZWdvcnkiLCJtb2RlbHMiLCJTdWJzY3JpYmVyIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/Subscriber.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fapply%2Froute&page=%2Fapi%2Fapply%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapply%2Froute.js&appDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fapply%2Froute&page=%2Fapi%2Fapply%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapply%2Froute.js&appDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_muhammetburakasarcikli_Medeniyetekno_web_app_api_apply_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/apply/route.js */ \"(rsc)/./app/api/apply/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/apply/route\",\n        pathname: \"/api/apply\",\n        filename: \"route\",\n        bundlePath: \"app/api/apply/route\"\n    },\n    resolvedPagePath: \"/Users/muhammetburakasarcikli/Medeniyetekno-web/app/api/apply/route.js\",\n    nextConfigOutput,\n    userland: _Users_muhammetburakasarcikli_Medeniyetekno_web_app_api_apply_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhcHBseSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXBwbHklMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhcHBseSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm11aGFtbWV0YnVyYWthc2FyY2lrbGklMkZNZWRlbml5ZXRla25vLXdlYiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZtdWhhbW1ldGJ1cmFrYXNhcmNpa2xpJTJGTWVkZW5peWV0ZWtuby13ZWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3NCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbXVoYW1tZXRidXJha2FzYXJjaWtsaS9NZWRlbml5ZXRla25vLXdlYi9hcHAvYXBpL2FwcGx5L3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hcHBseS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FwcGx5XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hcHBseS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9tdWhhbW1ldGJ1cmFrYXNhcmNpa2xpL01lZGVuaXlldGVrbm8td2ViL2FwcC9hcGkvYXBwbHkvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fapply%2Froute&page=%2Fapi%2Fapply%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapply%2Froute.js&appDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fapply%2Froute&page=%2Fapi%2Fapply%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapply%2Froute.js&appDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();