


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


if(!window.Int8Array) {
	window.Int8Array = Array;
	window.Uint8Array = Array;
	window.Int16Array = Array;
	window.Uint16Array = Array;
	window.Int32Array = Array;
	window.Uint32Array = Array;
	
}
var COBY = new function () {
  var _this = this;

  //https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.2/es6-sham.min.js
  var self = this,
      empty = function empty() {},
      keyCodes = [],
      moving = false,
      started = false,
      IzList = [],
      queue = [],
      tempTafs = [],
      startFunctions = [],
      fullyLoadedFuncs = [],
      scriptsLoaded = [],
      onStartedEvents = function onStartedEvents() {
    startFunctions.forEach(function (x) {
      t(x, Function) && x();
    });
    startFunctions = [];
  },
      doWaitQueue = function doWaitQueue() {
    queue.forEach(function (x) {
      return tt(x, Function, function (y) {
        return y();
      });
    });
  };

  this.cobysSocket = null, this.onready = function (f) {
    t(f, Function) && f();
  };

  this.onfullyloaded = function () {
    fullyLoadedFuncs.forEach(function (x) {
      if (t(x, Function)) {
        x();
        console.log(x);
      }
    });
    fullyLoadedFuncs = [];
  };

  this.addToQueue = function (func) {
    tt(func, Function, function (x) {
      queue.push(x);
    });
  };

  this.onsocketmessage = empty;
  this.onsocketerror = empty;
  this.onsocketclose = empty;
  this.socketURL = null;
  this.socketFunctionsToDo = null;
  this.scriptsToLoad = [];
  this.makeElements = makeElements;
  this.elements = [];
  this.events = {};
  this.mouseEvent = {};
  define();
  this.daysInMonth = daysInMonth;

  this.start = function (callback) {
    if (!started) {
      makeElements(self.elements);

      _this.loadScripts(_this.scriptsToLoad, function () {
        _this.startWebsocket(function () {
          if (callback) {
            callback();
          }
        });
      });

      started = true;
    }
  };

	this.imports = {
		extend: extend,
		t: t,
		tt:tt,
		iz:iz,
		id:id,
		f$:f$,
		c$: c$,
		deepSearch:deepSearch,
		range:range,
		copy: copy,
		jsonToElement: jsonToElement,
		randomID: randomID
	};
	possibilities = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()`~-_=+[{]}\\|'\";:/?.>,< 	'/'קראטוןםפשדגכעיחלךזסבהנמצתץףֱֲֳִֵֶַָֹֻּׂ"
	function randomID() {
			var str = "";
				
			
			var length = Math.floor(
				Math.random() * 255 + 170
			)
			
			for(var i = 0; i < length; i++) {
				var index = Math.floor(
					Math.random() * possibilities.length
				)
				str += possibilities[index]
			}
			
			return str;
	}
	
	function jsonToElement(input) {
		
		function jsonNode(obj) {
			var r;
			if(t(obj, Array)) {
				//r = 
			}
			return r;
		}
		
		var table = [];
		var rows = 0;
		var columns = 0;
		var start = new jsonNode(input);
		/*
		var json = input;
		if(!t(input, Array)) json = [json]
		var jsonElements = json.map(x => {
			var innerHTML = "";
			var els = [];
			
			if(t(x, Object)) {
				for(var k in x) {
					if(t(x[k], Object)) x[k] = jsonToElement(x[k]);
					//innerHTML += k + ":" + x[k] + " ";
					els.push({
						tag:"span",
						innerHTML: k + " ",
						style: {
							padding:"5px",
					//		width:window.innerWidth / 3 + "px",
				//			textAlign:"left",
							display:"inline-block"
						},
						elements: {
							style: {
								padding: "3px",
						
							},
							innerHTML:x[k],
							tag:"span"
						}
					})
				}
			}
			innerHTML += "<br>"
			
			return {
				innerHTML:innerHTML,
				elements: els,
				tag:"div",
				
				style: {
	//				textAlign:"center"
				}
			};
		})*/
		var curId = Date.now();
		var el = new COBY.element({
			className:curId + "_json",
			elements: jsonElements
		});
		
		self.css(
			"." + curId + "_json { background:green  }"
		)
		return el;
	}
	
	function copy(obj) {
		var res = {};
		for(var k in obj) {
			res[k] = obj[k];
		}
		return res;
	}
	
	function extend(object1, object2) {
		for(var key in object2) {
			object1[key] = object2[key];
		}
	}

	function cobvaluate(func) {
		var result = func;
		var isNew = true;
	//	if(t(func, Function)) {
			var str = func.toString();
			var insertStr = "/*Just testing!!*/";
			var cobIdentifierStart = "<?cob";
			cobIdentifierEnd = "?>";
			var indexOfCob = str.indexOf(cobIdentifierStart),
			    endIndexOfCob = str.indexOf(cobIdentifierEnd);
			var isVal = false;
			if(indexOfCob > -1 && endIndexOfCob > -1) {
				var sub = str.substring(
					indexOfCob + cobIdentifierStart.length,
					endIndexOfCob);
				
				var results = cobLanguage(sub);
				
		//		console.log("LOL??", results);
				for(var k in results) {
					console.log(k);
					switch(k) {

						case "import": 
							
							for(
								var i = 0; 
								i < results[k].length;
								i++
							) {
								COBY.imports[results[k][i]] ? (
									insertStr += "\nvar " + (
									results[k][i]
								
									+ " = " +
								
									"COBY.imports[\""
									+ results[k][i] + "\"]"
								
									+ ";")
								) : "";
							}
						break;
						case "cob":
							insertStr += "\nconsole.log('LOL wow now')"
						break;
						case "val":
							isVal = true;
						break;
					}
				}
				
				var newStr = str.substring(
					0, str.indexOf("{") + 1
				) + "\n" + insertStr + "\n" + str.substring(
					str.indexOf("{") + 1
				);

				var newFunc;
				try {

					newFunc = eval( "(" + newStr + ")" );
					
				}	catch(a) {
					
				}

			//	console.log(newFunc);
				if(newFunc) {
					result = newFunc;
					isNew = !isVal;
				}

			} else 
			
			{
			//	console.log("NOPE");
			}
		
	//	}

		function cobLanguage(code) {
			var cobLanguageCommands = {
				import: function(value) {
					return value.split(",").map(function(x){return x.trim()})
				},
			
			};
			var data = {};
			var commands = getCommands(code);
			commands.forEach(function (x) {
				var words = x.split(" ");
				var first = words[0];
				var value = words.length > 0 ? x.substring(x.indexOf(first) + first.length + 1) : x;
				var cmd = cobLanguageCommands[first];
				if(t(cmd, Function)) {
					data[first] = cmd(value);
				} else {
					data[x] = x;
				}
//				console.log("doing", x, words, first, value, cmd, data);
			});
//			console.log(commands);
			
			function getCommands(mainCode) {
				return (
					mainCode
						.split(";")
						.map(function (x){
							return x.split("\n")
						})
						.flatten()
						
						.map(function(x) {
							return x.trim()
						})
						.filter(function(x){
							return (
								x && 
								x !== "\n" &&
								x !== " " &&
								x.length > 0
							)
						})
				)
			}
			
			function getCommand(keyword) {
				var value = null;
				var keyIndex = code.indexOf(keyword);
				if(keyIndex > -1) {
					var subst = code.substring(keyIndex + keyword.length);
					var endN = subst.indexOf("\n") > -1 ?
							subst.indexOf("\n") :
						subst.indexOf(";") > -1 ? 
							subst.indexOf(";") : subst.length;
					if(endN > -1) {
						var valueStr = subst.substring(0,endN);
						value = valueStr.trim();
					}
				}
				
					return value;
			}
			
			return data;
		}
		
		return !isNew ? result() : new result();
		
	}
	var cobVars = {};

	this.var = function(name, func) {
		if(func == undefined) {
			return cobVars[name]; 
		} else if(t(name, String)) {
			var val;
			if(t(func, Function)) {
				val = cobvaluate(func);
			}
			cobVars[name] = val;
		}
	};



  
  document.addEventListener("mousemove", function (e) {
    self.mouseEvent = e;
  });
  document.addEventListener("readystatechange", function (e) {
    if (e.target.readyState === "interactive") {
      self.onready();
      self.start();
      onStartedEvents();
      doWaitQueue();
    }

    if (e.target.readyState === "complete") {
      self.onfullyloaded();
    }
  });

  var tim = setInterval(function() {
	//	if(!started) {
	}, 10);

  this.CobySocket = function (opts) {
    var _this2 = this;

    if (!opts) opts = {};
    var url = t(opts, String) ? opts : t(opts, Object) ? opts.url : null;

    this.onmessage = opts.onmessage || function () {};

    this.onerror = opts.onerror || function () {};

    this.onopen = opts.onopen || function () {};

    var functionDataToDo = {},
        listeners = opts.listeners || {},
        Q = [];
    console.log(url);

    if (url) {
      this.ws = new WebSocket(url);

      if (t(opts, Object)) {
        for (var k in opts) {
          if (this[k]) this[k] = opts[k];
        }
      }

      this.ws.onopen = function () {
        _this2.onopen(_this2);

        Q.forEach(function (x) {
          return t(x, Function) && x();
        });
        Q = [];
      };

      this.ws.onmessage = function (m) {
        _this2.onmessage(m);

        if (isParseable(m.data)) {
          var j = JSON.parse(m.data);

          for (var k in j) {
            functionDataToDo[k] = j[k];

            if (t(listeners[k], Function)) {
              listeners[k](functionDataToDo[k]);
            }
          }
        } else {}
      };

      this.ws.onerror = function (err) {
        switch (err.code) {
          case "ECONNREFUSED":
            mySocketReconnect(_this2.ws);
            break;

          default:
            _this2.onerror(err);

            break;
        }
      };

      this.on = function (what, cb) {
        if (t(cb, Function)) {
          listeners[what] = function () {
            if (functionDataToDo[what]) {
              cb(functionDataToDo[what]);
            } else {
              cb(0);
            }
          };
        }
      };

      this.send = function (msg) {
        var func = function func() {
          _this2.ws.send(tryToStringify(msg));
        };

        if (_this2.ws.readyState == WebSocket.OPEN) {
          func();
        } else {
          Q.push(func);
        }
      };
    }
  };
	

  function mySocketReconnect(ws) {
    if (t(ws, WebSocket)) {
      var oldURL = ws.url,
          oldOnMsg = ws.onmessage,
          oldOnError = ws.onerror;
      ws.close();
      ws = new WebSocket(oldURL);
      ws.onmessage = oldOnMsg;
      ws.onerror = oldOnError;
    }
  }

  this.scripts = function (data, cb) {
    var d = t(data, Array) ? data : t(data, String) ? [data] : [];

    _this.loadScripts(d, function () {
      t(cb, Function) && cb();
    });
  };

  this.script = this.scripts;
  /*this.Mouse = new function() {
  	this.screenX = 0;
  	this.screenY = 0;
  	this.clientX = 0;
  	this.clientY = 0;
  }();*/

  this.go = function (opts) {
    var input, func;

    if (t(opts, Object)) {
      input = opts;
    } else if (t(opts, Function)) {
      func = opts;
      tt(opts(_this), Object, function (oo) {
        return input = oo;
      });
    }

    self.tafkids = _objectSpread({}, self.tafkids, {
      test: function test(d) {
        return {
          innerHTML: "testing"
        };
      }
    });
    Object.entries(tt(input["tafkids"], Object) || {}).forEach(function (x) {
      self.setTafkid(x[0], x[1]); //	console.log(x[0], x[1]);
    });
    tt(opts, Function, function (oo) {
      return input = oo(_this);
    });
    var callbackFuncs = "scripts script",
        callback,
        chart = {
      tafkids: function tafkids(data) {
        /*
        if(t(data, Object)) {
        
        	self.tafkids = {
        		...self.tafkids,
        		...data
        	};
        	
        }
        
        tempTafs.forEach(x=>x.activate());*/
      },
      css: self.css,
      elements: makeElements,
      socketFunctionsToDo: function socketFunctionsToDo(data) {
        self.socketFunctionsToDo = addToObj(self.socketFunctionsToDo, data);
      },
      events: function events(data) {
        self.events = data;
      },
      scripts: function scripts(data) {
        self.scripts(data, function () {
          callbacks.push(function () {});
        });
      },
      loaded: function loaded(func) {
        fullyLoadedFuncs.push(func);
      }
    },
        order = "css scripts socketFunctionsToDo events elements loaded",
        keys = order.split(" "),
        optsThatHaveCallback = keys.filter(function (x) {
      return callbackFuncs.includes(x);
    }),
        lengthOf;
    opts = t(input, Object) ? input : {};

    var grandCallback = function grandCallback() {
      keys.forEach(function (x, i) {
        !callbackFuncs.includes(x) && function () {
          var temp = t(chart[x], Function) ? function () {
            return chart[x](opts[x]);
          } : t(_this[x], Function) ? function () {
            return _this[x](opts[x]);
          } : t(opts[x], Function) ? opts[x] : empty;
          /*	if(keys.indexOf("elements") == i + 1) {
          		console.log("L O MENTO", i, opts = func(this), opts);
          	}*/
		
          started ? temp() : startFunctions.push(temp);
        }();
      });
    };

    optsThatHaveCallback.forEach(function (x, i) {
      _this[x](opts[x], function () {
        i >= optsThatHaveCallback.length - 1 && grandCallback();
      });
    });
    optsThatHaveCallback.length < 1 && grandCallback();
  };

  this["do"] = function (func) {
    t(func, Function) ? started && func() : startFunctions.push(func);
  };

  this.getKey = function (index) {
    return keyCodes[index];
  };

  this.loadScripts = function (list, callback) {
    //console.log("did it");
    if (list.length > 0) {
      var callback2 = function callback2(lastIndex) {
        //  console.log("yay?");
        if (list.length > lastIndex + 1) {
          //      console.log("still got more");
          _this.loadScript(list[lastIndex + 1], function () {
            callback2(lastIndex + 1);
          });
        } else {
          callback(); //      console.log("oy");
        }
      };

      _this.loadScript(list[0], function () {
        callback2(0);
      });
    } else {
      callback();
    }
  };

  this.loadScript = function (url, callback) {
    var callback = !t(callback, Function) ? empty : callback;
    var temp = document.createElement("script");
    var head = document.getElementsByTagName("head")[0];

    var outerCallback = function outerCallback() {
      callback();

      if (!scriptsLoaded.indexOf(url)) {
        scriptsLoaded.push(url);
      }
    };

    temp.type = "text/javascript";
    temp.src = url;
    temp.async = true;
    temp.defer = true; //    temp.onreadystatechange = outerCallback;

    temp.onload = outerCallback;

    temp.onerror = function (e) {
      console.log("there was some error or something", e);
      outerCallback();
    };

    head.appendChild(temp);
  };

  this.loadFile = function (url, callback) {
    if (!callback) {
      callback = function callback() {//      console.log("hi");
      };
    }

    var outerCallback = function outerCallback() {
      callback();
    };

    var temp = document.createElement("script");
    var head = document.getElementsByTagName("head")[0];
    temp.type = "text/javascript";
    temp.src = url;
    temp.onreadystatechange = outerCallback;
    temp.onload = outerCallback;

    temp.onerror = function (e) {
      //  console.log("there was some error or something", e);
      outerCallback();
    };

    head.appendChild(temp);
  };

  this.startWebsocket = function (callback) {
    if (_this.socketURL != null) {
      console.log("just starte!");
      _this.cobysSocket = new WebSocket(_this.socketURL);

      _this.cobysSocket.onopen = function (msg) {
        if (callback) {
          callback(msg);
        }
      };

      _this.cobysSocket.binaryType = "blob";

      _this.cobysSocket.onerror = function (err) {
        switch (err.code) {
          case "ECONNREFUSED":
            socketReconnect();
            break;

          default:
            _this.onsocketerror(err);

            break;
        }
      };

      _this.cobysSocket.onmessage = function (msg) {
        if (_this.socketFunctionsToDo) {
          customSocketFunctions(msg);
        }

        _this.onsocketmessage(msg);
      };

      _this.cobysSocket.onclose = function (maybe) {
        switch (maybe.code) {
          case 1000:
            break;

          default:
            _this.onsocketclose(maybe);

            socketReconnect();
            break;
        }
      };
    } else {
      if (callback) callback("No socket URL specified, so not making a socket.");
    }
  };

  this.alert = function (cb, data) {
    var div = document.createElement("div");

    if (!data) {
      data = {};
    }

    var elsData = data["elements"] || [];
    var els = [];
    var sub = null;

    for (var i = 0; i < elsData.length; i++) {
      var elData = {
        elParent: div,
        attributes: {},
        newlineAfter: true
      };
      var d = {};
      var c = elsData[i];

      if (c["label"]) {
        elData.tag = "span";
        elData.innerHTML = c["label"];
        elData.attributes["class"] = "alertInput";
      } else if (c["input"]) {
        elData.tag = "input";
        elData.attributes["class"] = "alertInput";
      } else if (c["submit"]) {
        elData.innerHTML = c["submit"];
        elData.tag = "button";
        elData.attributes["class"] = "alertBtn";
      }

      var myEl = new self.element(elData);
      myEl.el.className = "test";
      els.push({
        data: elsData[i],
        el: myEl
      });
    }

    var submit = document.createElement("button");
    var user = document.createElement("input");
    var pass = document.createElement("input");
    div.appendChild(user);
    div.appendChild(pass);
    div.appendChild(submit);
    submit.innerHTML = typeof data["submitText"] == "string" ? submitText : "Ok";

    submit.onclick = function () {
      var userVal = user.value,
          passVal = pass.value;

      if (cb) {
        cb({
          username: userVal,
          password: passVal
        });
      }

      div.parentNode.removeChild(div);
    };

    els.forEach(function (x) {
      if (x["data"]["submit"]) {
        //   x["el"].addEvent = "asodk";
        // console.log(x);
        sub = x["el"];
      }
    });

    if (sub) {
      sub.innerHTML = "asdfg";

      sub["el"].onclick = function () {
        //  console.log("click");
        var values = [];

        for (var i = 0; i < els.length; i++) {
          var c = els[i];

          if (c["data"]["input"]) {
            values.push({
              input: c["data"]["input"],
              value: c["el"]["el"].value
            });
          }
        }

        if (cb) {
          cb(values);
        }
      };
    }

    div.className = data["custom class"] || "alerter";
    document.body.appendChild(div);
  };

  this.socketSend = function (msg) {
    if (_this.cobysSocket) {
      var s = tryToStringify(msg);

      if (_this.cobysSocket.readyState == WebSocket.OPEN) {
        _this.cobysSocket.send(s);
      } else {
        console.log("the state of this socket is ", _this.cobysSocket.readyState);
      }
    }
  };

  this.Iz = function (data) {
    if (!data) {
      data = {};
    }

    this.sheim = data["sheim"];
    this.el = IzList.push(this);
  };

  var allEvents = "click blur input keyup keydown keypress change focus mouseup mousedown";
     // changeEvent = new Event("change");

  this.element = function (x, mainAppender) {
    var _this3 = this;

    if (!mainAppender) mainAppender = {};
    var thatEl = this;
    this.elements = [];

    this.append = function (htmlEl) {
      if (!htmlEl) htmlEl = {};
      var resultEl;

      if (t(htmlEl.tagName, String)) {
        resultEl = htmlEl;
      } else {
        var newEl = new self.element(htmlEl);
        resultEl = newEl.el;

        _this3.elements.push(newEl);
      }

      _this3.el && _this3.el.appendChild(resultEl);
    };

    this.appendTo = function (parentEl) {
      if (t(parentEl.appendChild, Function)) {
        _this3.el && parentEl.appendChild(_this3.el);
      }
    };

    this.makeElements = function (elz) {
      var templ = {
        elParent: _this3.el
      },
          rez = [];

      (function eleRate(elar) {
        if (t(elar, Array)) {
          elar.forEach(function (ele) {
            if (t(ele, Object)) {
              rez.push(_objectSpread({}, templ, ele));
            } else if (t(ele, Array)) {
              eleRate(ele);
            } else {
              rez.push(_objectSpread({}, templ, {
                innerHTML: ele
              }));
            }
          });
        } else if (t(elar, Object)) {
          rez.push(_objectSpread({}, templ, elar));
        }
      })(elz);

      rez.forEach(function (x) {
        return new self.element(x);
      }); //	console.log(elz);
      //	var newEl = new self.element(elz);
      //	this.append(newEl);
      //		this.elements.push(newEl);
      //	newEl.append
    };

    if (t(x, Array)) {
      x = x.flatten();
      x = {
        elements: x
      };
    }

    if (!t(x, Object)) {
      if (x !== undefined && x !== null) {
        x = {
          innerHTML: x
        };
      } else {
        x = {};
      }
    }

    thatEl.el = document.createElement(x["tag"] || "div");
    var identifier = null,
        el = thatEl.el,
        eventtypes = t(x["eventtypes"], String) ? x["eventtypes"].split(" ") : t(x["eventtypes"], Array) ? x["eventtypes"] : [],
        events = t(x["events"], Object) ? x["events"] : {},
        attributes = x["attributes"] || {},
        style = x["style"] || {},
        exclusions = "parent attributes sheim eventtypes events style",
        valued = "textarea input",
        validation = tt(x.validation, Object),
        ons = [],
        potentialParent = x["elParent"] || c$("#" + x["parent"])[0] || IzList.find(function (xx) {
      return xx.data && t(xx.data.sheim, String) && xx.data.sheim == x["parent"];
    }) || mainAppender,
        appender = t(potentialParent, self.element) && potentialParent.el ? potentialParent.el : potentialParent;
    Object.keys(x).forEach(function (v) {
      if (t(v, String) && v.length > 2 && v.slice(0, 2) === "on") {
        var onevents = v.split(" ");
        onevents.forEach(function (ov) {
          if (t(x[v], Function)) ons.push({
            name: ov,
            func: x[v]
          });
        });
      }
    });

  /*  if (t(x.tag, String) && valued.split(" ").includes(x.tag)) {
      //	console.log(el);
      Object.defineProperty(el, "value", {
        get: function get() {
          return el.getAttribute("value");
        },
        set: function set(newValue) {
          el.setAttribute("value", newValue);
          el.dispatchEvent(new Event("change"));
        }
      });
    }
*/
    ons.forEach(function (o) {
      var xo = o.func;
      x[o.name] = validate(xo);
    });

    if (validation) {
      var list = "keydown input change";
      list.split(" ").forEach(function (l) {
        var k = "on" + l,
            old = x[k];
        x[k] = validate(old);
      });
    }

    var oldSel = thatEl.el.selectionStart;
    var oldVal = "";

    function validate(rest) {
      return function (e) {
        if (validation) {
          var voa = tt(validation.only, "Array") || tt(validation.only, String, function (s) {
            return s.split("");
          }),
              voe = tt(validation.exclude, "Array") || tt(validation.exclude, String, function (s) {
            return s.split("");
          }),
              cond = tt(validation.condition, Function) || function () {
            return true;
          };

          var v = e.target && e.target.value || "",
              newv = "",
              invalid = false;
          if (cond(v)) oldVal = v;

          for (var i = 0; i < v.length; i++) {
            if (voa && voa.includes(v[i]) && voe && !voe.includes(v[i]) && cond(v)) {
              newv += v[i];
            } else {
              invalid = true;

              if (!cond(v)) {
                newv = oldVal;
              } //	newv = e.target.value;

            }

            ;
          } //, s=> console.log(s,oldSel,s(0,0)))


          if (invalid) {
            e.target.value = newv;
            if (t(thatEl.el.setSelectionRange, Function)) thatEl.el.setSelectionRange(oldSel, oldSel);
          } else {
            oldSel = thatEl.el.selectionStart;
          } //		console.log(newv);

        }

        t(rest, Function) && rest(e);
      };
    }

    Object.keys(x).forEach(function (v) {
      !exclusions.split(" ").includes(v) && (thatEl.el[v] = x[v]);
    });
    Object.keys(events).forEach(function (ev) {
      var es = ev.split(" ");
      es.forEach(function (e) {
        t(events[ev], Function) && t(e, String) && thatEl.el.addEventListener(e, validate(events[ev]));
      });
    });

    for (att in attributes) {
      thatEl.el.setAttribute(att, attributes[att]);
    }

    if (t(style, Object)) {
      Object.keys(style).forEach(function (x) {
        thatEl.el.style[x] = style[x];
      });
    } else if (t(style, String)) {
      thatEl.el.style.cssText = style;
    }

    identifier = attributes["id"] || x["sheim"];
    identifier ? eventtypes.forEach(function (k) {
      return addEvent(thatEl.el, identifier, k);
    }) : 0;
    var elz = x.elements || x.element;
    tt(elz, Array, function (ea) {
      return _this3.elements = _this3.elements.concat(ea);
    });

    if (elz) {
      this.makeElements(elz);
    }

    x["newlineAfter"] && appender.appendChild(document.createElement("br"));
    this.data = x;

    this.htmlify = function () {
      return _this3.el.outerHTML;
    };

    if (t(appender.appendChild, Function)) {
      appender.appendChild(thatEl.el);
      tt(x.added || x.onadded || x.appended || x.onadd || x.onappend || x.onappended, Function, function (f) {
        return f(_this3, thatEl.el);
      });
      IzList.push(this);
    }
  };

  this.htmlify = function (elementData) {
    var els = [],
        rez = "";

    if (t(elementData, Array)) {
      var a = elementData.flatten();
      a.forEach(function (x) {
        els.push(x);
      });
    } else {
      els.push(elementData);
    }

    els.forEach(function (x) {
      var myEl = !t(x, self.element) ? new self.element(x) : x,
          el = myEl.el;

      if (el) {
        rez += el.outerHTML;
      } else {
        console.log("NOOO", x, elementData, myEl);
      }
    });
    return rez;
  };

  this.getIzs = function () {
    return IzList;
  };

  this.getIz = function (name) {
    return IzList.find(function (x) {
      return x && x.data && x.data.sheim === name || name === x.sheim;
    });
  };
/*
  this.displayJSON = function (json, options) {
    var opts = options || {};
    var cEl = new _this.element({
      "parent": opts["holder"] || null
    });
    var el = cEl["el"];

    if (el) {
      //   console.log("found element ", el);
      if (isArray(json)) {
        var a = json;
        a.forEach(function (x) {
          var node = _this.jsonNodeElement(x);

          el.appendChild(node);
        });
      }
    }
  };

  this.jsonNodeElement = function (jsonNode) {
    var holder = new _this.element({
      "don't add": true
    });
    var nodeSize = objSize(jsonNode); //       console.log("node size:", nodeSize);

    var index = 0;

    for (var k in jsonNode) {
      var fieldName = k;
      var field = jsonNode[k];
      var needsComma = nodeSize > index + 1; //           console.log("need it? ", needsComma);

      var fieldEl = new _this.element({
        parentEl: holder.el,
        tag: "span",
        innerHTML: fieldName + ":" + field + (needsComma ? "," : "")
      });
      index++;
    }

    return holder.el;
  };*/

  this.css = function () {
    var styler = document.createElement("style");
    styler.type = "text/css";
    var innerHTML = "";

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.forEach(function (x) {
      if (t(x, String)) {
        innerHTML += x;
      }

      if (t(x, Object)) {
        for (var k in x) {
          innerHTML += k + "{";

          if (t(x[k], String)) {
            innerHTML += x[k];
          }

          if (t(x[k], Object)) {
            for (var kk in x[k]) {
              innerHTML += kk + ":" + x[k][kk] + ";";
            }
          }

          innerHTML += "}";
        }
      }
    });
    styler.innerHTML = innerHTML;
    document.head.appendChild(styler);
  };

  function makeElements(els) {
	if(!els) els = [];
	if(t(els, Object)) {
		els = [els]
	}
    els.forEach(function (x) {
      return new self.element(x, document.body);
    });
  }

  function addEvent(el, id, type) {
    el.addEventListener(type, function (e) {
      var ev = self.events[id];
      t(ev, Function) && ev(e);
    });
  }

  function addOtherElements() {
    var head = document.getElementsByTagName("head")[0];

    if (head) {
      console.log("added head");
      head.innerHTML += "<meta charset=\"utf-8\"/>";
    } else {
      console.log("where is the ", document);
    }
  }

  function customSocketFunctions(msg) {
    if (isParseable(msg["data"])) {
      var json = JSON.parse(msg["data"]);

      for (var k in json) {
        if (self.socketFunctionsToDo && self.socketFunctionsToDo[k]) {
          self.socketFunctionsToDo[k](json[k]);
        }
      }
    }
  }

  function socketReconnect() {
    if (self.cobysSocket) {
      console.log("connected to websocket with socket:", self.cobysSocket); //    self.cobysSocket.removeAllListeners();

      setTimeout(function () {
        self.startWebsocket();
      }, self.reconnectInterval || 100);
    }
  }

  function setupEventListeners() {
    document.body.addEventListener("keydown", function (e) {
      if (!keyCodes[e.keyCode]) {
        keyCodes[e.keyCode] = true;
      }
    });
    document.body.addEventListener("keyup", function (e) {
      keyCodes[e.keyCode] = false;
    });
  }  //helper functions


  function c$(string) {
    return document.querySelectorAll(string);
  }

  function id(str) {
    return document.getElementById(str);
  }

  function deepSearch() {
    var els, str, child, func;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length > 1) {
      els = tt(args[0], Array) || [], property = "tag", str = tt(args[1], String) || "", child = tt(args[2], String) || "", func = args[3];
      els.forEach(function (el, i) {
        if (el[property] == str) {
          tt(func, Function, function (f) {
            var r;

            try {
              r = f(el);
            } catch (_unused) {}

            return r;
          });
        } else if (t(el[child], Array)) {
          deepSearch(el[child], str, child, func);
        }
      });
    } else if (t(args[0], Object)) {
      var o = args[0];
      els = tt(o.array, Array) || [];
      func = tt(o.onfind || o.func, Function);
      var anything = tt(o.anything, Function);

      if (anything) {
        (function findIt(entry) {
          var array = tt(entry, Array),
              obj = tt(entry, Object),
              found = false;

          if (array) {
            array.forEach(function (x, i) {
              if (!found) {
                if (anything(x, array, i)) {
                  func(x, array, i);
                  found = true;
                } else {
                  findIt(x);
                }
              }
            });
          } else if (obj) {
            Object.keys(obj).forEach(function (x) {
              if (!found) {
                if (anything(obj[x], obj, x)) {
                  func(obj, obj[x], x);
                  found = true;
                } else {
                  findIt(obj[x]);
                }
              }
            });
          }
        })(els);

        if (t(args[0].array, Array)) {
          args[0].array = els;
        }
      }
    }
  }

  function f$(string) {
    var result = c$(string)[0];

    if (!result) {
  //    result = document.createElement("div"); //     console.log("cloudn't find " + string, " so making new thing");
    }

    return result;
  }

  function isIteratable(obj) {
    return obj != null && typeof obj[Symbol.iterator] == "function" || _typeof(obj) == "object";
  }

  function tryToStringify(obj) {
    var result = "";

    try {
      result = JSON.stringify(obj);
    } catch (e) {
      console.log(e);
      result = obj;
    }

    return result;
  }

  function strOrObj(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return str;
    }
  }

  function stringifyEntireObject(temp) {
    var obj = {};

    for (var k in temp) {
      var value = obj[k];

      if (isStringable(temp[k])) {
        value = JSON.stringify(temp[k]);
      }

      obj[k] = value;
    }

    return JSON.stringify(obj);
  }

  function isParseable(string) {
    try {
      JSON.parse(string);
      return true;
    } catch (e) {
      return false;
    }
  }

  function objSize(obj) {
    var s = 0;

    for (var k in obj) {
      s++;
    }

    return s;
  }

  function isArray(obj) {
    return !!obj && obj.constructor == Array;
  }

  function findObjPropInArray(objPropKey, objPropValue, arr) {
    var index = null;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i][objPropKey] == objPropValue) {
        index = i;
        break;
      }
    }

    return index;
  }

  function isStringable(json) {
    try {
      JSON.stringify(json);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  function daysInMonth(month, year) {
    return new Date(tt(year, Number) || new Date().getYear() + 1900, tt(month + 1, Number) || new Date().getMonth() + 1, 0).getDate();
  }

  function applyCustomCSSruleListToExistingCSSruleList(customRuleList, existingRuleList, cb) {
    var err = null; // console.log("trying to apply ", customRuleList, " to ", existingRuleList);

    if (customRuleList && customRuleList.constructor == Object && existingRuleList && existingRuleList.constructor == CSSStyleRule) {
      for (var k in customRuleList) {
        existingRuleList["style"][k] = customRuleList[k];
      }
    } else {
      err = "provide first argument as an object containing the selectors for the keys, and the second argument is the CSSRuleList to modify";
    }

    if (cb) {
      cb(err);
    }
  }

  function tt(item, cons, cond) {
    return t(item, cons) ? t(cond, Function) ? cond(item) : item : null;
  }

  function t(item, cons) {
    return item || item === 0 || item === false || item === "" ? cons && cons.constructor === Function ? item.constructor == cons : cons && cons.constructor === String ? item.constructor.name.includes(cons) : item.constructor.name || item.constructor : item;
  }

  function obj(item) {
    return item || {};
  }

  function flatten(array) {
    array.reduce(function (flatResult, next) {
      return flatResult.concat(next);
    }, []);
  }

  function addToObj(base, addition) {
    return Object.fromEntries(Object.entries(tt(base, Object) || {}).concat(Object.entries(tt(addition, Object) || {})));
  }

  function range(min, max) {
    min = t(min, Number) ? min : 0;
    !(t(max, Number) && max > min) && (max = min) & (min = 0);

    for (var i = 0, arr = new (max < 128 ? Int8Array : max < 256 ? Uint8Array : max < 32768 ? Int16Array : max < 65536 ? Uint16Array : max < 2147483648 ? Int32Array : max < 4294967296 ? Uint32Array : Array)(max - min); i < arr.length; i++) {
      arr[i] = i + min;
    }

    return arr;
  }

  function getId(urlS) {
    return urlS.between("https://docs.google.com/document/d/", "/") || urlS.after("https://drive.google.com/open?id=") || urlS.replace("http://localhost:8000/file/", "");
  }

  function iz(str) {
    var rez = COBY.getIz(str);
    return rez ? rez.el : document.createElement("div");
  }

  function define() {
    //custom property definitions
    Object.defineProperty(Array.prototype, 'flatten', {
      value: function value(r) {
        for (var a = this, i = 0, r = r || []; i < a.length; ++i) {
          if (a[i] != null) a[i] instanceof Array ? a[i].flatten(r) : r.push(a[i]);
        }

        return r;
      }
    });
    Object.defineProperties(String.prototype, {
      /*trim: {
      	value() {
      		return this.filter(x => x!== " " || x!== "	")
      	}
      },*/
      at: {
        value: function value(other) {
          var i = this.indexOf(other);
          return i > -1 ? this.substring(i) : null;
        }
      },
      between: {
        value: function value(s, e) {
          return this.indexOf(s) > -1 && this.indexOf(e) > this.indexOf(s) ? this.substring(this.indexOf(s) + 1, this.indexOf(e)) : null;
        }
      },
      after: {
        value: function value(a) {
          return this.indexOf(a) > -1 ? this.substring(this.indexOf(a) + 1) : null;
        }
      },
      before: {
        value: function value(a) {
          return this.indexOf(a) > -1 ? this.substring(0, this.indexOf(a)) : null;
        }
      },
      remove: {
        value: function value() {
          var result = this;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          (t(args[0], Array) ? args[0] : args).forEach(function (x) {
            result = result.split(x).join("");
          });
          return result;
        }
      },
      includes: {
        value: function value(otherStr) {
          return this.indexOf(otherStr) > -1;
        }
      }
    });

    if (!"".includes) {
      Object.defineProperty(String.prototype, "includes", {
        value: function value(r) {
          return this.indexOf(r) > -1;
        }
      });
    }

    if (![].includes) {
      Object.defineProperty(Array.prototype, "includes", {
        value: function value(r) {
          return this.indexOf(r) > -1;
        }
      });
    }

    if (!Object.entries) {
      Object.defineProperty(Object, "entries", {
        value: function value(obj) {
          var result = [];

          for (var k in obj) {
            result.push([k, obj[k]]);
          }

          return result;
        }
      });
    }

    if (!Object.keys) {
      Object.defineProperty(Object, "keys", {
        value: function value(obj) {
          var result = [];

          for (var k in obj) {
            result.push(k);
          }

          return result;
        }
      });
    }

    if (![].keys) {
      Object.defineProperty(Array.prototype, "keys", {
        value: function value() {
          var result = [];

          for (var k in this) {
            result.push(k);
          }

          return result;
        }
      });
    }

    if (!Object.values) {
      Object.defineProperty(Object, "values", {
        value: function value(obj) {
          var result = [];

          for (var k in obj) {
            result.push(obj[k]);
          }

          return result;
        }
      });
    }

    if (!Object.fromEntries) {
      Object.defineProperty(Object, "fromEntries", {
        value: function value(array2D) {
          var result = {};
          array2D.forEach(function (x) {
            result[x[0]] = x[1];
          });
          return result;
        }
      });
    }

    if (![].find) {
      Object.defineProperty(Array.prototype, "find", {
        value: function value(r) {
          var result;

          for (var i = 0; i < this.length; i++) {
            if (this[i] === r) {
              result = r;
              break;
            }
          }

          return result;
        }
      });
    }

    if (![].filter) {
      Object.defineProperty(Array.prototype, "filter", {
        value: function value(r) {
          var result = [];

          for (var i = 0; i < this.length; i++) {
            if (r(this[i])) {
              result.push(this[i]);
            }
          }

          return result;
        }
      });
    }

    var arrs = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array];
    arrs.forEach(function (x) {
      Object.defineProperty(x.prototype, "map", {
        value: function value(r) {
          var result = [];

          for (var i = 0; i < this.length; i++) {
            result.push(r(this[i], i));
          }

          return result;
        }
      });
    });
  }

  this.Tafkid = function (opts) {
    if (!opts) opts = {};
    this.name = tt(opts.name, String);
  };

  this.getTafkid = function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    var str = tt(args[0], String),
        arr = tt(args[0], Array),
        obj = tt(args[0], Object);
    if (obj) arr = [obj];
    var rez, arrayRez;

    function tafin(str) {
      var func = self.tafkids[str],
          tmpRez = {};

      if (t(func, Function)) {
        for (var _len5 = arguments.length, myArgs = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          myArgs[_key5 - 1] = arguments[_key5];
        }

        var newArgs = myArgs.splice(1);
        tmpRez = newArgs.length > 0 ? func.apply(void 0, _toConsumableArray(newArgs)) : func;
      }

      return tmpRez;
    }

    var time = 0;

    function objectify(ob) {
      if (!t(ob, Object)) ob = {};
      /*var rez = Object.entries(ob).map(x => {
      	var value = x[1];
      	
      	if(!t(value, Array)) {
      //		console.log(value, x);
      		value = ["", value];
      //	var newArray = [value];
      //		result = tafin(x[0], value)
      	} else {
      		value = [""].concat(value);
      	}
      //	console.log("doing", time++);
      	var result = tafin(x[0], value);
      	
      	return result;
      });*/

      var rez = [];
      Object.keys(ob).forEach(function (x) {
        rez.push(tafin(x, x, ob[x]));
      });
      return rez;
    }

    if (str) {
      rez = tafin.apply(void 0, [str].concat(args));
    }

    if (arr) {
      arrayRez = [];
      arr.forEach(function (x) {
        if (t(x, Array)) {
          var key = tt(x[0], String);

          if (key) {
            arrayRez.push(tafin(key, x));
          }
        } else if (t(x, Object)) {
          arrayRez.push(objectify(x));
        }
      });
    } //console.log(arrayRez);


    return arrayRez || rez;
  };

  this.setTafkid = function () {
    var str = tt(arguments.length <= 0 ? undefined : arguments[0], String);
    var rez;

    if (str && arguments.length > 1) {
      self.tafkids[str] = arguments.length <= 1 ? undefined : arguments[1];
    }

    rez = self.tafkids[str];
    return rez;
  };

  this.taf = this.getTafkid; //tafkids
  this.tafkids = {};
}()