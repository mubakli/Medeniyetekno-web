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
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "(rsc)/./app/api/contact/route.js":
/*!**********************************!*\
  !*** ./app/api/contact/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { name, email, text } = body;\n        // Check if all required fields are present\n        if (!name || !email || !text) {\n            return new Response(JSON.stringify({\n                success: false,\n                error: \"Please fill in all the fields (name, email, message).\"\n            }), {\n                status: 400\n            } // Bad request status\n            );\n        }\n        // Send the email via Resend API\n        const emailResponse = await resend.emails.send({\n            from: \"onboarding@resend.dev\",\n            to: process.env.RESEND_TO_EMAIL,\n            subject: `New Contact Form Submission from ${name}`,\n            text: `Name: ${name}\\nEmail: ${email}\\nMessage: ${text}`\n        });\n        console.log(\"Email Response:\", emailResponse);\n        // Check if the email was sent successfully\n        if (!emailResponse.error) {\n            // If email is sent successfully, return success with status 200\n            return new Response(JSON.stringify({\n                success: true,\n                message: \"Message sent successfully.\"\n            }), {\n                status: 200\n            });\n        } else {\n            // If there is an error in the response, return the error message\n            const errorMessage = emailResponse.error.message || \"Failed to send message.\";\n            return new Response(JSON.stringify({\n                success: false,\n                error: errorMessage\n            }), {\n                status: 500\n            } // Internal server error\n            );\n        }\n    } catch (error) {\n        console.error(\"Email Error:\", error);\n        // Catch and handle unexpected errors\n        return new Response(JSON.stringify({\n            success: false,\n            error: error.message || \"An unexpected error occurred.\"\n        }), {\n            status: 500\n        } // Return a 500 status for unexpected errors\n        );\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnRhY3Qvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxJQUFJRCwwQ0FBTUEsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBRTdDLGVBQWVDLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR0o7UUFFOUIsMkNBQTJDO1FBQzNDLElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxTQUFTLENBQUNDLE1BQU07WUFDNUIsT0FBTyxJQUFJQyxTQUNUQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2JDLFNBQVM7Z0JBQ1RDLE9BQU87WUFDVCxJQUNBO2dCQUFFQyxRQUFRO1lBQUksRUFBRSxxQkFBcUI7O1FBRXpDO1FBRUEsZ0NBQWdDO1FBQ2hDLE1BQU1DLGdCQUFnQixNQUFNakIsT0FBT2tCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1lBQzdDQyxNQUFNO1lBQ05DLElBQUlwQixRQUFRQyxHQUFHLENBQUNvQixlQUFlO1lBQy9CQyxTQUFTLENBQUMsaUNBQWlDLEVBQUVmLE1BQU07WUFDbkRFLE1BQU0sQ0FBQyxNQUFNLEVBQUVGLEtBQUssU0FBUyxFQUFFQyxNQUFNLFdBQVcsRUFBRUMsTUFBTTtRQUMxRDtRQUVBYyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CUjtRQUUvQiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDQSxjQUFjRixLQUFLLEVBQUU7WUFDeEIsZ0VBQWdFO1lBQ2hFLE9BQU8sSUFBSUosU0FDVEMsS0FBS0MsU0FBUyxDQUFDO2dCQUNiQyxTQUFTO2dCQUNUWSxTQUFTO1lBQ1gsSUFDQTtnQkFBRVYsUUFBUTtZQUFJO1FBRWxCLE9BQU87WUFDTCxpRUFBaUU7WUFDakUsTUFBTVcsZUFDSlYsY0FBY0YsS0FBSyxDQUFDVyxPQUFPLElBQUk7WUFDakMsT0FBTyxJQUFJZixTQUNUQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2JDLFNBQVM7Z0JBQ1RDLE9BQU9ZO1lBQ1QsSUFDQTtnQkFBRVgsUUFBUTtZQUFJLEVBQUUsd0JBQXdCOztRQUU1QztJQUNGLEVBQUUsT0FBT0QsT0FBTztRQUNkUyxRQUFRVCxLQUFLLENBQUMsZ0JBQWdCQTtRQUU5QixxQ0FBcUM7UUFDckMsT0FBTyxJQUFJSixTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFDYkMsU0FBUztZQUNUQyxPQUFPQSxNQUFNVyxPQUFPLElBQUk7UUFDMUIsSUFDQTtZQUFFVixRQUFRO1FBQUksRUFBRSw0Q0FBNEM7O0lBRWhFO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdWhhbW1ldGJ1cmFrYXNhcmNpa2xpL01lZGVuaXlldGVrbm8td2ViL2FwcC9hcGkvY29udGFjdC9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNlbmQgfSBmcm9tIFwicmVzZW5kXCI7XG5cbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCB0ZXh0IH0gPSBib2R5O1xuXG4gICAgLy8gQ2hlY2sgaWYgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmUgcHJlc2VudFxuICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXRleHQpIHtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgZmlsbCBpbiBhbGwgdGhlIGZpZWxkcyAobmFtZSwgZW1haWwsIG1lc3NhZ2UpLlwiLFxuICAgICAgICB9KSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9IC8vIEJhZCByZXF1ZXN0IHN0YXR1c1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSBlbWFpbCB2aWEgUmVzZW5kIEFQSVxuICAgIGNvbnN0IGVtYWlsUmVzcG9uc2UgPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xuICAgICAgZnJvbTogXCJvbmJvYXJkaW5nQHJlc2VuZC5kZXZcIixcbiAgICAgIHRvOiBwcm9jZXNzLmVudi5SRVNFTkRfVE9fRU1BSUwsXG4gICAgICBzdWJqZWN0OiBgTmV3IENvbnRhY3QgRm9ybSBTdWJtaXNzaW9uIGZyb20gJHtuYW1lfWAsXG4gICAgICB0ZXh0OiBgTmFtZTogJHtuYW1lfVxcbkVtYWlsOiAke2VtYWlsfVxcbk1lc3NhZ2U6ICR7dGV4dH1gLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJFbWFpbCBSZXNwb25zZTpcIiwgZW1haWxSZXNwb25zZSk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZW1haWwgd2FzIHNlbnQgc3VjY2Vzc2Z1bGx5XG4gICAgaWYgKCFlbWFpbFJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAvLyBJZiBlbWFpbCBpcyBzZW50IHN1Y2Nlc3NmdWxseSwgcmV0dXJuIHN1Y2Nlc3Mgd2l0aCBzdGF0dXMgMjAwXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBcIk1lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkuXCIsXG4gICAgICAgIH0pLFxuICAgICAgICB7IHN0YXR1czogMjAwIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSByZXNwb25zZSwgcmV0dXJuIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgICBlbWFpbFJlc3BvbnNlLmVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlLlwiO1xuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pLFxuICAgICAgICB7IHN0YXR1czogNTAwIH0gLy8gSW50ZXJuYWwgc2VydmVyIGVycm9yXG4gICAgICApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRW1haWwgRXJyb3I6XCIsIGVycm9yKTtcblxuICAgIC8vIENhdGNoIGFuZCBoYW5kbGUgdW5leHBlY3RlZCBlcnJvcnNcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLlwiLFxuICAgICAgfSksXG4gICAgICB7IHN0YXR1czogNTAwIH0gLy8gUmV0dXJuIGEgNTAwIHN0YXR1cyBmb3IgdW5leHBlY3RlZCBlcnJvcnNcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVzZW5kIiwicmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwibmFtZSIsImVtYWlsIiwidGV4dCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJlcnJvciIsInN0YXR1cyIsImVtYWlsUmVzcG9uc2UiLCJlbWFpbHMiLCJzZW5kIiwiZnJvbSIsInRvIiwiUkVTRU5EX1RPX0VNQUlMIiwic3ViamVjdCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/contact/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_muhammetburakasarcikli_Medeniyetekno_web_app_api_contact_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/contact/route.js */ \"(rsc)/./app/api/contact/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"/Users/muhammetburakasarcikli/Medeniyetekno-web/app/api/contact/route.js\",\n    nextConfigOutput,\n    userland: _Users_muhammetburakasarcikli_Medeniyetekno_web_app_api_contact_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm11aGFtbWV0YnVyYWthc2FyY2lrbGklMkZNZWRlbml5ZXRla25vLXdlYiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZtdWhhbW1ldGJ1cmFrYXNhcmNpa2xpJTJGTWVkZW5peWV0ZWtuby13ZWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3dCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbXVoYW1tZXRidXJha2FzYXJjaWtsaS9NZWRlbml5ZXRla25vLXdlYi9hcHAvYXBpL2NvbnRhY3Qvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvbnRhY3Qvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb250YWN0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb250YWN0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL211aGFtbWV0YnVyYWthc2FyY2lrbGkvTWVkZW5peWV0ZWtuby13ZWIvYXBwL2FwaS9jb250YWN0L3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/resend"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmuhammetburakasarcikli%2FMedeniyetekno-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();