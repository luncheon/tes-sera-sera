"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/regenerator-runtime/runtime.js
  var require_runtime = __commonJS({
    "node_modules/regenerator-runtime/runtime.js"(exports, module) {
      var runtime = function(exports2) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var defineProperty = Object.defineProperty || function(obj, key, desc) {
          obj[key] = desc.value;
        };
        var undefined;
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define2(obj, key, value) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }
        try {
          define2({}, "");
        } catch (err) {
          define2 = function(obj, key, value) {
            return obj[key] = value;
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);
          defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });
          return generator;
        }
        exports2.wrap = wrap;
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var IteratorPrototype = {};
        define2(IteratorPrototype, iteratorSymbol, function() {
          return this;
        });
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          IteratorPrototype = NativeIteratorPrototype;
        }
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = GeneratorFunctionPrototype;
        defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
        defineProperty(
          GeneratorFunctionPrototype,
          "constructor",
          { value: GeneratorFunction, configurable: true }
        );
        GeneratorFunction.displayName = define2(
          GeneratorFunctionPrototype,
          toStringTagSymbol,
          "GeneratorFunction"
        );
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function(method) {
            define2(prototype, method, function(arg) {
              return this._invoke(method, arg);
            });
          });
        }
        exports2.isGeneratorFunction = function(genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports2.mark = function(genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define2(genFun, toStringTagSymbol, "GeneratorFunction");
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };
        exports2.awrap = function(arg) {
          return { __await: arg };
        };
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function(value2) {
                  invoke("next", value2, resolve, reject);
                }, function(err) {
                  invoke("throw", err, resolve, reject);
                });
              }
              return PromiseImpl.resolve(value).then(function(unwrapped) {
                result.value = unwrapped;
                resolve(result);
              }, function(error) {
                return invoke("throw", error, resolve, reject);
              });
            }
          }
          var previousPromise;
          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
          }
          defineProperty(this, "_invoke", { value: enqueue });
        }
        defineIteratorMethods(AsyncIterator.prototype);
        define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
          return this;
        });
        exports2.AsyncIterator = AsyncIterator;
        exports2.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0)
            PromiseImpl = Promise;
          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList),
            PromiseImpl
          );
          return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
        };
        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }
            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }
              return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel)
                    continue;
                  return delegateResult;
                }
              }
              if (context.method === "next") {
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }
                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }
              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);
              if (record.type === "normal") {
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                if (record.arg === ContinueSentinel) {
                  continue;
                }
                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted;
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method;
          var method = delegate.iterator[methodName];
          if (method === undefined) {
            context.delegate = null;
            if (methodName === "throw" && delegate.iterator["return"]) {
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);
              if (context.method === "throw") {
                return ContinueSentinel;
              }
            }
            if (methodName !== "return") {
              context.method = "throw";
              context.arg = new TypeError(
                "The iterator does not provide a '" + methodName + "' method"
              );
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }
          var info = record.arg;
          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }
          } else {
            return info;
          }
          context.delegate = null;
          return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        define2(Gp, toStringTagSymbol, "Generator");
        define2(Gp, iteratorSymbol, function() {
          return this;
        });
        define2(Gp, "toString", function() {
          return "[object Generator]";
        });
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          if (1 in locs) {
            entry.catchLoc = locs[1];
          }
          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }
          this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [{ tryLoc: "root" }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }
        exports2.keys = function(val) {
          var object = Object(val);
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();
          return function next() {
            while (keys.length) {
              var key2 = keys.pop();
              if (key2 in object) {
                next.value = key2;
                next.done = false;
                return next;
              }
            }
            next.done = true;
            return next;
          };
        };
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }
            if (typeof iterable.next === "function") {
              return iterable;
            }
            if (!isNaN(iterable.length)) {
              var i = -1, next = function next2() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next2.value = iterable[i];
                    next2.done = false;
                    return next2;
                  }
                }
                next2.value = undefined;
                next2.done = true;
                return next2;
              };
              return next.next = next;
            }
          }
          return { next: doneResult };
        }
        exports2.values = values;
        function doneResult() {
          return { value: undefined, done: true };
        }
        Context.prototype = {
          constructor: Context,
          reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
              for (var name in this) {
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },
          stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }
            return this.rval;
          },
          dispatchException: function(exception) {
            if (this.done) {
              throw exception;
            }
            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;
              if (caught) {
                context.method = "next";
                context.arg = undefined;
              }
              return !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;
              if (entry.tryLoc === "root") {
                return handle("end");
              }
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              finallyEntry = null;
            }
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }
            return this.complete(record);
          },
          complete: function(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }
            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }
            return ContinueSentinel;
          },
          finish: function(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc
            };
            if (this.method === "next") {
              this.arg = undefined;
            }
            return ContinueSentinel;
          }
        };
        return exports2;
      }(
        // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        typeof module === "object" ? module.exports : {}
      );
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
    }
  });

  // node_modules/tesseract.js/src/utils/getId.js
  var require_getId = __commonJS({
    "node_modules/tesseract.js/src/utils/getId.js"(exports, module) {
      module.exports = (prefix, cnt) => `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`;
    }
  });

  // node_modules/tesseract.js/src/createJob.js
  var require_createJob = __commonJS({
    "node_modules/tesseract.js/src/createJob.js"(exports, module) {
      var getId = require_getId();
      var jobCounter = 0;
      module.exports = ({
        id: _id,
        action,
        payload = {}
      }) => {
        let id = _id;
        if (typeof id === "undefined") {
          id = getId("Job", jobCounter);
          jobCounter += 1;
        }
        return {
          id,
          action,
          payload
        };
      };
    }
  });

  // node_modules/tesseract.js/src/utils/log.js
  var require_log = __commonJS({
    "node_modules/tesseract.js/src/utils/log.js"(exports) {
      var logging = false;
      exports.logging = logging;
      exports.setLogging = (_logging) => {
        logging = _logging;
      };
      exports.log = (...args) => logging ? console.log.apply(exports, args) : null;
    }
  });

  // node_modules/tesseract.js/src/createScheduler.js
  var require_createScheduler = __commonJS({
    "node_modules/tesseract.js/src/createScheduler.js"(exports, module) {
      var createJob = require_createJob();
      var { log } = require_log();
      var getId = require_getId();
      var schedulerCounter = 0;
      module.exports = () => {
        const id = getId("Scheduler", schedulerCounter);
        const workers = {};
        const runningWorkers = {};
        let jobQueue = [];
        schedulerCounter += 1;
        const getQueueLen = () => jobQueue.length;
        const getNumWorkers = () => Object.keys(workers).length;
        const dequeue = () => {
          if (jobQueue.length !== 0) {
            const wIds = Object.keys(workers);
            for (let i = 0; i < wIds.length; i += 1) {
              if (typeof runningWorkers[wIds[i]] === "undefined") {
                jobQueue[0](workers[wIds[i]]);
                break;
              }
            }
          }
        };
        const queue = (action, payload) => new Promise((resolve, reject) => {
          const job = createJob({ action, payload });
          jobQueue.push(async (w) => {
            jobQueue.shift();
            runningWorkers[w.id] = job;
            try {
              resolve(await w[action].apply(exports, [...payload, job.id]));
            } catch (err) {
              reject(err);
            } finally {
              delete runningWorkers[w.id];
              dequeue();
            }
          });
          log(`[${id}]: Add ${job.id} to JobQueue`);
          log(`[${id}]: JobQueue length=${jobQueue.length}`);
          dequeue();
        });
        const addWorker = (w) => {
          workers[w.id] = w;
          log(`[${id}]: Add ${w.id}`);
          log(`[${id}]: Number of workers=${getNumWorkers()}`);
          dequeue();
          return w.id;
        };
        const addJob = async (action, ...payload) => {
          if (getNumWorkers() === 0) {
            throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
          }
          return queue(action, payload);
        };
        const terminate = async () => {
          Object.keys(workers).forEach(async (wid) => {
            await workers[wid].terminate();
          });
          jobQueue = [];
        };
        return {
          addWorker,
          addJob,
          terminate,
          getQueueLen,
          getNumWorkers
        };
      };
    }
  });

  // node_modules/is-electron/index.js
  var require_is_electron = __commonJS({
    "node_modules/is-electron/index.js"(exports, module) {
      function isElectron() {
        if (typeof window !== "undefined" && typeof window.process === "object" && window.process.type === "renderer") {
          return true;
        }
        if (typeof process !== "undefined" && typeof process.versions === "object" && !!process.versions.electron) {
          return true;
        }
        if (typeof navigator === "object" && typeof navigator.userAgent === "string" && navigator.userAgent.indexOf("Electron") >= 0) {
          return true;
        }
        return false;
      }
      module.exports = isElectron;
    }
  });

  // node_modules/tesseract.js/src/utils/getEnvironment.js
  var require_getEnvironment = __commonJS({
    "node_modules/tesseract.js/src/utils/getEnvironment.js"(exports, module) {
      var isElectron = require_is_electron();
      module.exports = (key) => {
        const env = {};
        if (typeof WorkerGlobalScope !== "undefined") {
          env.type = "webworker";
        } else if (isElectron()) {
          env.type = "electron";
        } else if (typeof window === "object") {
          env.type = "browser";
        } else if (typeof process === "object" && typeof __require === "function") {
          env.type = "node";
        }
        if (typeof key === "undefined") {
          return env;
        }
        return env[key];
      };
    }
  });

  // node_modules/resolve-url/resolve-url.js
  var require_resolve_url = __commonJS({
    "node_modules/resolve-url/resolve-url.js"(exports, module) {
      void function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.resolveUrl = factory();
        }
      }(exports, function() {
        function resolveUrl() {
          var numUrls = arguments.length;
          if (numUrls === 0) {
            throw new Error("resolveUrl requires at least one argument; got none.");
          }
          var base = document.createElement("base");
          base.href = arguments[0];
          if (numUrls === 1) {
            return base.href;
          }
          var head = document.getElementsByTagName("head")[0];
          head.insertBefore(base, head.firstChild);
          var a = document.createElement("a");
          var resolved;
          for (var index = 1; index < numUrls; index++) {
            a.href = arguments[index];
            resolved = a.href;
            base.href = resolved;
          }
          head.removeChild(base);
          return resolved;
        }
        return resolveUrl;
      });
    }
  });

  // node_modules/tesseract.js/src/utils/resolvePaths.js
  var require_resolvePaths = __commonJS({
    "node_modules/tesseract.js/src/utils/resolvePaths.js"(exports, module) {
      var isBrowser = require_getEnvironment()("type") === "browser";
      var resolveURL = isBrowser ? require_resolve_url() : (s) => s;
      module.exports = (options) => {
        const opts = { ...options };
        ["corePath", "workerPath", "langPath"].forEach((key) => {
          if (options[key]) {
            opts[key] = resolveURL(opts[key]);
          }
        });
        return opts;
      };
    }
  });

  // node_modules/tesseract.js/src/utils/circularize.js
  var require_circularize = __commonJS({
    "node_modules/tesseract.js/src/utils/circularize.js"(exports, module) {
      module.exports = (page) => {
        const blocks = [];
        const paragraphs = [];
        const lines = [];
        const words = [];
        const symbols = [];
        if (page.blocks) {
          page.blocks.forEach((block) => {
            block.paragraphs.forEach((paragraph) => {
              paragraph.lines.forEach((line) => {
                line.words.forEach((word) => {
                  word.symbols.forEach((sym) => {
                    symbols.push({
                      ...sym,
                      page,
                      block,
                      paragraph,
                      line,
                      word
                    });
                  });
                  words.push({
                    ...word,
                    page,
                    block,
                    paragraph,
                    line
                  });
                });
                lines.push({
                  ...line,
                  page,
                  block,
                  paragraph
                });
              });
              paragraphs.push({
                ...paragraph,
                page,
                block
              });
            });
            blocks.push({
              ...block,
              page
            });
          });
        }
        return {
          ...page,
          blocks,
          paragraphs,
          lines,
          words,
          symbols
        };
      };
    }
  });

  // node_modules/tesseract.js/src/constants/OEM.js
  var require_OEM = __commonJS({
    "node_modules/tesseract.js/src/constants/OEM.js"(exports, module) {
      module.exports = {
        TESSERACT_ONLY: 0,
        LSTM_ONLY: 1,
        TESSERACT_LSTM_COMBINED: 2,
        DEFAULT: 3
      };
    }
  });

  // node_modules/tesseract.js/src/constants/config.js
  var require_config = __commonJS({
    "node_modules/tesseract.js/src/constants/config.js"(exports, module) {
      var OEM2 = require_OEM();
      module.exports = {
        defaultOEM: OEM2.DEFAULT
      };
    }
  });

  // node_modules/tesseract.js/package.json
  var require_package = __commonJS({
    "node_modules/tesseract.js/package.json"(exports, module) {
      module.exports = {
        name: "tesseract.js",
        version: "4.0.2",
        description: "Pure Javascript Multilingual OCR",
        main: "src/index.js",
        types: "src/index.d.ts",
        unpkg: "dist/tesseract.min.js",
        jsdelivr: "dist/tesseract.min.js",
        scripts: {
          start: "node scripts/server.js",
          build: "rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.js",
          "profile:tesseract": "webpack-bundle-analyzer dist/tesseract-stats.json",
          "profile:worker": "webpack-bundle-analyzer dist/worker-stats.json",
          prepublishOnly: "npm run build",
          wait: "rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js",
          test: "npm-run-all -p -r start test:all",
          "test:all": "npm-run-all wait test:browser:* test:node:all",
          "test:node": "nyc mocha --exit --bail --require ./scripts/test-helper.js",
          "test:node:all": "npm run test:node -- ./tests/*.test.js",
          "test:browser-tpl": "mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000",
          "test:browser:detect": "npm run test:browser-tpl -- -f ./tests/detect.test.html",
          "test:browser:recognize": "npm run test:browser-tpl -- -f ./tests/recognize.test.html",
          "test:browser:scheduler": "npm run test:browser-tpl -- -f ./tests/scheduler.test.html",
          "test:browser:FS": "npm run test:browser-tpl -- -f ./tests/FS.test.html",
          lint: "eslint src",
          "lint:fix": "eslint --fix src",
          postinstall: "opencollective-postinstall || true"
        },
        browser: {
          "./src/worker/node/index.js": "./src/worker/browser/index.js"
        },
        author: "",
        contributors: [
          "jeromewu"
        ],
        license: "Apache-2.0",
        devDependencies: {
          "@babel/core": "^7.18.7",
          "@babel/preset-env": "^7.18.7",
          "@rollup/plugin-commonjs": "^22.0.2",
          acorn: "^6.4.0",
          "babel-loader": "^8.2.0",
          buffer: "^6.0.3",
          cors: "^2.8.5",
          eslint: "^7.2.0",
          "eslint-config-airbnb-base": "^14.2.0",
          "eslint-plugin-import": "^2.22.1",
          "expect.js": "^0.3.1",
          express: "^4.17.1",
          mocha: "^10.0.0",
          "mocha-headless-chrome": "^4.0.0",
          "npm-run-all": "^4.1.5",
          nyc: "^15.1.0",
          rimraf: "^2.7.1",
          rollup: "^2.79.0",
          "wait-on": "^3.3.0",
          webpack: "^5.74.0",
          "webpack-bundle-analyzer": "^4.6.0",
          "webpack-cli": "^4.10.0",
          "webpack-dev-middleware": "^5.3.3"
        },
        dependencies: {
          "babel-eslint": "^10.1.0",
          "bmp-js": "^0.1.0",
          "file-type": "^12.4.1",
          "idb-keyval": "^3.2.0",
          "is-electron": "^2.2.0",
          "is-url": "^1.2.4",
          "node-fetch": "^2.6.0",
          "opencollective-postinstall": "^2.0.2",
          "regenerator-runtime": "^0.13.3",
          "resolve-url": "^0.2.1",
          "tesseract.js-core": "^4.0.2",
          "wasm-feature-detect": "^1.2.11",
          zlibjs: "^0.3.1"
        },
        repository: {
          type: "git",
          url: "https://github.com/naptha/tesseract.js.git"
        },
        bugs: {
          url: "https://github.com/naptha/tesseract.js/issues"
        },
        homepage: "https://github.com/naptha/tesseract.js",
        collective: {
          type: "opencollective",
          url: "https://opencollective.com/tesseractjs"
        }
      };
    }
  });

  // node_modules/tesseract.js/src/constants/defaultOptions.js
  var require_defaultOptions = __commonJS({
    "node_modules/tesseract.js/src/constants/defaultOptions.js"(exports, module) {
      module.exports = {
        /*
         * default path for downloading *.traineddata
         */
        langPath: "https://tessdata.projectnaptha.com/4.0.0",
        /*
         * Use BlobURL for worker script by default
         * TODO: remove this option
         *
         */
        workerBlobURL: true,
        logger: () => {
        }
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/defaultOptions.js
  var require_defaultOptions2 = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/defaultOptions.js"(exports, module) {
      var resolveURL = require_resolve_url();
      var { version } = require_package();
      var defaultOptions = require_defaultOptions();
      module.exports = {
        ...defaultOptions,
        workerPath: typeof process !== "undefined" && process.env.TESS_ENV === "development" ? resolveURL(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`) : `https://unpkg.com/tesseract.js@v${version}/dist/worker.min.js`,
        /*
         * If browser doesn't support WebAssembly,
         * load ASM version instead
         */
        corePath: null
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/spawnWorker.js
  var require_spawnWorker = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/spawnWorker.js"(exports, module) {
      module.exports = ({ workerPath, workerBlobURL }) => {
        let worker;
        if (Blob && URL && workerBlobURL) {
          const blob = new Blob([`importScripts("${workerPath}");`], {
            type: "application/javascript"
          });
          worker = new Worker(URL.createObjectURL(blob));
        } else {
          worker = new Worker(workerPath);
        }
        return worker;
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/terminateWorker.js
  var require_terminateWorker = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/terminateWorker.js"(exports, module) {
      module.exports = (worker) => {
        worker.terminate();
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/onMessage.js
  var require_onMessage = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/onMessage.js"(exports, module) {
      module.exports = (worker, handler) => {
        worker.onmessage = ({ data }) => {
          handler(data);
        };
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/send.js
  var require_send = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/send.js"(exports, module) {
      module.exports = async (worker, packet) => {
        worker.postMessage(packet);
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/loadImage.js
  var require_loadImage = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/loadImage.js"(exports, module) {
      var resolveURL = require_resolve_url();
      var readFromBlobOrFile = (blob) => new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = ({ target: { error: { code } } }) => {
          reject(Error(`File could not be read! Code=${code}`));
        };
        fileReader.readAsArrayBuffer(blob);
      });
      var loadImage = async (image) => {
        let data = image;
        if (typeof image === "undefined") {
          return "undefined";
        }
        if (typeof image === "string") {
          if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
            data = atob(image.split(",")[1]).split("").map((c) => c.charCodeAt(0));
          } else {
            const resp = await fetch(resolveURL(image));
            data = await resp.arrayBuffer();
          }
        } else if (image instanceof HTMLElement) {
          if (image.tagName === "IMG") {
            data = await loadImage(image.src);
          }
          if (image.tagName === "VIDEO") {
            data = await loadImage(image.poster);
          }
          if (image.tagName === "CANVAS") {
            await new Promise((resolve) => {
              image.toBlob(async (blob) => {
                data = await readFromBlobOrFile(blob);
                resolve();
              });
            });
          }
        } else if (image instanceof File || image instanceof Blob) {
          data = await readFromBlobOrFile(image);
        }
        return new Uint8Array(data);
      };
      module.exports = loadImage;
    }
  });

  // node_modules/tesseract.js/src/worker/browser/index.js
  var require_browser = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/index.js"(exports, module) {
      var defaultOptions = require_defaultOptions2();
      var spawnWorker = require_spawnWorker();
      var terminateWorker = require_terminateWorker();
      var onMessage = require_onMessage();
      var send = require_send();
      var loadImage = require_loadImage();
      module.exports = {
        defaultOptions,
        spawnWorker,
        terminateWorker,
        onMessage,
        send,
        loadImage
      };
    }
  });

  // node_modules/tesseract.js/src/createWorker.js
  var require_createWorker = __commonJS({
    "node_modules/tesseract.js/src/createWorker.js"(exports, module) {
      var resolvePaths = require_resolvePaths();
      var circularize = require_circularize();
      var createJob = require_createJob();
      var { log } = require_log();
      var getId = require_getId();
      var { defaultOEM } = require_config();
      var {
        defaultOptions,
        spawnWorker,
        terminateWorker,
        onMessage,
        loadImage,
        send
      } = require_browser();
      var workerCounter = 0;
      module.exports = async (_options = {}) => {
        const id = getId("Worker", workerCounter);
        const {
          logger,
          errorHandler,
          ...options
        } = resolvePaths({
          ...defaultOptions,
          ..._options
        });
        const resolves = {};
        const rejects = {};
        let workerResReject;
        let workerResResolve;
        const workerRes = new Promise((resolve, reject) => {
          workerResResolve = resolve;
          workerResReject = reject;
        });
        const workerError = (event) => {
          workerResReject(event.message);
        };
        let worker = spawnWorker(options);
        worker.onerror = workerError;
        workerCounter += 1;
        const setResolve = (action, res) => {
          resolves[action] = res;
        };
        const setReject = (action, rej) => {
          rejects[action] = rej;
        };
        const startJob = ({ id: jobId, action, payload }) => new Promise((resolve, reject) => {
          log(`[${id}]: Start ${jobId}, action=${action}`);
          setResolve(action, resolve);
          setReject(action, reject);
          send(worker, {
            workerId: id,
            jobId,
            action,
            payload
          });
        });
        const load = () => console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)");
        const loadInternal = (jobId) => startJob(createJob({
          id: jobId,
          action: "load",
          payload: { options }
        }));
        const writeText = (path, text, jobId) => startJob(createJob({
          id: jobId,
          action: "FS",
          payload: { method: "writeFile", args: [path, text] }
        }));
        const readText = (path, jobId) => startJob(createJob({
          id: jobId,
          action: "FS",
          payload: { method: "readFile", args: [path, { encoding: "utf8" }] }
        }));
        const removeFile = (path, jobId) => startJob(createJob({
          id: jobId,
          action: "FS",
          payload: { method: "unlink", args: [path] }
        }));
        const FS = (method, args, jobId) => startJob(createJob({
          id: jobId,
          action: "FS",
          payload: { method, args }
        }));
        const loadLanguage = (langs = "eng", jobId) => startJob(createJob({
          id: jobId,
          action: "loadLanguage",
          payload: { langs, options }
        }));
        const initialize = (langs = "eng", oem = defaultOEM, config, jobId) => startJob(createJob({
          id: jobId,
          action: "initialize",
          payload: { langs, oem, config }
        }));
        const setParameters = (params = {}, jobId) => startJob(createJob({
          id: jobId,
          action: "setParameters",
          payload: { params }
        }));
        const recognize = async (image, opts = {}, output = {
          blocks: true,
          text: true,
          hocr: true,
          tsv: true
        }, jobId) => startJob(createJob({
          id: jobId,
          action: "recognize",
          payload: { image: await loadImage(image), options: opts, output }
        }));
        const getPDF = (title = "Tesseract OCR Result", textonly = false, jobId) => {
          console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead.");
          return startJob(createJob({
            id: jobId,
            action: "getPDF",
            payload: { title, textonly }
          }));
        };
        const detect = async (image, jobId) => startJob(createJob({
          id: jobId,
          action: "detect",
          payload: { image: await loadImage(image) }
        }));
        const terminate = async () => {
          if (worker !== null) {
            terminateWorker(worker);
            worker = null;
          }
          return Promise.resolve();
        };
        onMessage(worker, ({
          workerId,
          jobId,
          status,
          action,
          data
        }) => {
          if (status === "resolve") {
            log(`[${workerId}]: Complete ${jobId}`);
            let d = data;
            if (action === "recognize") {
              d = circularize(data);
            } else if (action === "getPDF") {
              d = Array.from({ ...data, length: Object.keys(data).length });
            }
            resolves[action]({ jobId, data: d });
          } else if (status === "reject") {
            rejects[action](data);
            if (action === "load")
              workerResReject(data);
            if (errorHandler) {
              errorHandler(data);
            } else {
              throw Error(data);
            }
          } else if (status === "progress") {
            logger({ ...data, userJobId: jobId });
          }
        });
        const resolveObj = {
          id,
          worker,
          setResolve,
          setReject,
          load,
          writeText,
          readText,
          removeFile,
          FS,
          loadLanguage,
          initialize,
          setParameters,
          recognize,
          getPDF,
          detect,
          terminate
        };
        loadInternal().then(() => workerResResolve(resolveObj)).catch(() => {
        });
        return workerRes;
      };
    }
  });

  // node_modules/tesseract.js/src/Tesseract.js
  var require_Tesseract = __commonJS({
    "node_modules/tesseract.js/src/Tesseract.js"(exports, module) {
      var createWorker2 = require_createWorker();
      var recognize = async (image, langs, options) => {
        const worker = await createWorker2(options);
        await worker.loadLanguage(langs);
        await worker.initialize(langs);
        return worker.recognize(image).finally(async () => {
          await worker.terminate();
        });
      };
      var detect = async (image, options) => {
        const worker = await createWorker2(options);
        await worker.loadLanguage("osd");
        await worker.initialize("osd");
        return worker.detect(image).finally(async () => {
          await worker.terminate();
        });
      };
      module.exports = {
        recognize,
        detect
      };
    }
  });

  // node_modules/tesseract.js/src/constants/languages.js
  var require_languages = __commonJS({
    "node_modules/tesseract.js/src/constants/languages.js"(exports, module) {
      module.exports = {
        AFR: "afr",
        AMH: "amh",
        ARA: "ara",
        ASM: "asm",
        AZE: "aze",
        AZE_CYRL: "aze_cyrl",
        BEL: "bel",
        BEN: "ben",
        BOD: "bod",
        BOS: "bos",
        BUL: "bul",
        CAT: "cat",
        CEB: "ceb",
        CES: "ces",
        CHI_SIM: "chi_sim",
        CHI_TRA: "chi_tra",
        CHR: "chr",
        CYM: "cym",
        DAN: "dan",
        DEU: "deu",
        DZO: "dzo",
        ELL: "ell",
        ENG: "eng",
        ENM: "enm",
        EPO: "epo",
        EST: "est",
        EUS: "eus",
        FAS: "fas",
        FIN: "fin",
        FRA: "fra",
        FRK: "frk",
        FRM: "frm",
        GLE: "gle",
        GLG: "glg",
        GRC: "grc",
        GUJ: "guj",
        HAT: "hat",
        HEB: "heb",
        HIN: "hin",
        HRV: "hrv",
        HUN: "hun",
        IKU: "iku",
        IND: "ind",
        ISL: "isl",
        ITA: "ita",
        ITA_OLD: "ita_old",
        JAV: "jav",
        JPN: "jpn",
        KAN: "kan",
        KAT: "kat",
        KAT_OLD: "kat_old",
        KAZ: "kaz",
        KHM: "khm",
        KIR: "kir",
        KOR: "kor",
        KUR: "kur",
        LAO: "lao",
        LAT: "lat",
        LAV: "lav",
        LIT: "lit",
        MAL: "mal",
        MAR: "mar",
        MKD: "mkd",
        MLT: "mlt",
        MSA: "msa",
        MYA: "mya",
        NEP: "nep",
        NLD: "nld",
        NOR: "nor",
        ORI: "ori",
        PAN: "pan",
        POL: "pol",
        POR: "por",
        PUS: "pus",
        RON: "ron",
        RUS: "rus",
        SAN: "san",
        SIN: "sin",
        SLK: "slk",
        SLV: "slv",
        SPA: "spa",
        SPA_OLD: "spa_old",
        SQI: "sqi",
        SRP: "srp",
        SRP_LATN: "srp_latn",
        SWA: "swa",
        SWE: "swe",
        SYR: "syr",
        TAM: "tam",
        TEL: "tel",
        TGK: "tgk",
        TGL: "tgl",
        THA: "tha",
        TIR: "tir",
        TUR: "tur",
        UIG: "uig",
        UKR: "ukr",
        URD: "urd",
        UZB: "uzb",
        UZB_CYRL: "uzb_cyrl",
        VIE: "vie",
        YID: "yid"
      };
    }
  });

  // node_modules/tesseract.js/src/constants/PSM.js
  var require_PSM = __commonJS({
    "node_modules/tesseract.js/src/constants/PSM.js"(exports, module) {
      module.exports = {
        OSD_ONLY: "0",
        AUTO_OSD: "1",
        AUTO_ONLY: "2",
        AUTO: "3",
        SINGLE_COLUMN: "4",
        SINGLE_BLOCK_VERT_TEXT: "5",
        SINGLE_BLOCK: "6",
        SINGLE_LINE: "7",
        SINGLE_WORD: "8",
        CIRCLE_WORD: "9",
        SINGLE_CHAR: "10",
        SPARSE_TEXT: "11",
        SPARSE_TEXT_OSD: "12",
        RAW_LINE: "13"
      };
    }
  });

  // node_modules/tesseract.js/src/index.js
  var require_src = __commonJS({
    "node_modules/tesseract.js/src/index.js"(exports, module) {
      require_runtime();
      var createScheduler = require_createScheduler();
      var createWorker2 = require_createWorker();
      var Tesseract2 = require_Tesseract();
      var languages = require_languages();
      var OEM2 = require_OEM();
      var PSM2 = require_PSM();
      var { setLogging } = require_log();
      module.exports = {
        languages,
        OEM: OEM2,
        PSM: PSM2,
        createScheduler,
        createWorker: createWorker2,
        setLogging,
        ...Tesseract2
      };
    }
  });

  // app.ts
  var Tesseract = __toESM(require_src());
  var sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
  var createTesseractWorker = async (langs, params, options) => {
    const tesseractWorker = await Tesseract.createWorker(options);
    await tesseractWorker.load();
    await tesseractWorker.loadLanguage(langs);
    await tesseractWorker.initialize(langs);
    await tesseractWorker.setParameters(params);
    return tesseractWorker;
  };
  var startCamera = async (videoElement) => {
    videoElement.srcObject = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
        width: videoElement.width,
        height: videoElement.height
      }
    });
    await new Promise((resolve) => videoElement.onloadedmetadata = resolve);
    videoElement.play();
  };
  var main = async () => {
    const searchParams = new URLSearchParams(location.search);
    const params = {
      oem: searchParams.get("oem") ? parseInt(searchParams.get("oem"), 10) : Tesseract.OEM.DEFAULT,
      psm: searchParams.get("psm") || Tesseract.PSM.SINGLE_BLOCK,
      languages: searchParams.get("languages") || "jpn+eng",
      characters: searchParams.get("characters") || ""
    };
    for (const [key, value] of Object.entries(params)) {
      document.querySelector(`[name=${key}]`).value = value;
    }
    const statusTextElement = document.getElementsByClassName("status-text")[0];
    const progressElement = document.getElementsByTagName("progress")[0];
    const videoElement = document.getElementsByTagName("video")[0];
    const [tesseractWorker] = await Promise.all([
      createTesseractWorker(
        params.languages,
        {
          tessedit_ocr_engine_mode: params.oem,
          tessedit_pageseg_mode: params.psm,
          tessedit_char_whitelist: params.characters,
          tessjs_create_hocr: "0",
          tessjs_create_tsv: "0"
        },
        {
          logger: (log) => {
            statusTextElement.textContent = log.status;
            progressElement.value = log.progress;
          }
        }
      ),
      startCamera(videoElement)
    ]);
    let videoChanged = true;
    videoElement.addEventListener("play", () => videoChanged = true);
    const canvasElement = document.getElementsByTagName("canvas")[0];
    const context2d = canvasElement.getContext("2d");
    const resultElement = document.getElementsByTagName("textarea")[0];
    while (true) {
      if (videoElement.paused) {
        if (videoChanged) {
          videoChanged = false;
        } else {
          await sleep(1e3);
          continue;
        }
      }
      context2d.drawImage(videoElement, 0, 0);
      const { data } = await tesseractWorker.recognize(canvasElement);
      console.debug(data);
      resultElement.value = data.text;
      await sleep(1e3);
    }
  };
  (async () => {
    try {
      await main();
    } catch (error) {
      console.error(error);
      alert(error.message || JSON.stringify(error));
    }
  })();
})();
