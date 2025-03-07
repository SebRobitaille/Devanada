// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../script.js":[function(require,module,exports) {
var sections = document.querySelectorAll(".section");
var sectBtns = document.querySelectorAll(".controls");
var sectBtn = document.querySelectorAll(".control");
var allSections = document.querySelector(".main-content");
var ctaBtn = document.querySelector(".cta-btn");
var ctaBtns = document.querySelectorAll(".cta-btn");
var contactSec = document.getElementById("contact");
var contactBtn = document.querySelector(".control-5"); // CHANGE PAGE TRANSITION -- CHANGE PAGE TRANSITION -- CHANGE PAGE TRANSITION

function PageTransitions() {
  //button click active class
  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      var currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    });
  } // Sections active class


  allSections.addEventListener("click", function (e) {
    var id = e.target.dataset.id;

    if (id) {
      // remove selected from the other btns
      sectBtn.forEach(function (btn) {
        btn.classList.remove("active");
      }); // e.target.classList.add("active"); <--- might be useless
      // hide other sections

      sections.forEach(function (section) {
        section.classList.remove("active");
      });
      var element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  ctaBtns.forEach(function (button) {
    button.addEventListener("click", function (e) {
      sections.forEach(function (section) {
        section.classList.remove("active");
      });
      contactSec.classList.add("active");
      var currentBtn = document.querySelector(".active-btn");
      console.log(currentBtn);
      currentBtn.classList.remove("active-btn");
      contactBtn.classList.add("active-btn");
    });
  }); // // Toggle theme
  // const themeBtn = document.querySelector(".theme-btn");
  // themeBtn.addEventListener("click", () => {
  //   let element = document.body;
  //   element.classList.toggle("light-mode");
  // });
}

PageTransitions(); // TYPEWRITER FEATURE --  TYPEWRITER FEATURE -- TYPEWRITER FEATURE
// Start of the typing animation within the header

var TypeWriter = function TypeWriter(txtElement, words) {
  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  this.txtElement = txtElement; //the span for the element holding the word

  this.words = words; // The variable for the array of words

  this.txt = ""; // variable for the animation of the typing

  this.wordIndex = 0; //starting with the first word at the index of 0

  this.wait = parseInt(wait, 10); //check it's an integer for the wait time

  this.type(); //method of type that's associated with the typewriter

  this.isDeleting = false; //represents the state if it's deleting or not
}; // a way we add a method to the typeWriter is by using prototypes


TypeWriter.prototype.type = function () {
  var _this = this;

  //current index of the word (counting down from 1)
  // use the modulus operator "%" to get the remainder of the division
  var currentWord = this.wordIndex % this.words.length; //Get the full text of of the word

  var fullTxt = this.words[currentWord]; //Check if the words are deleting
  // The substring() method extracts characters from start to end

  if (this.isDeleting) {
    //removing letters
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //add letters
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  } //insert txt into elements
  //use template leteral `${}` to interpolate variables


  this.txtElement.innerHTML = "<span class=\"txt\">".concat(this.txt, "</span>"); //type speed
  // type speed changes (stop, faster deleting, etc), so use let

  var typeSpeed = 200; // if isDeleting is true, cut the speed by half

  if (this.isDeleting) {
    typeSpeed /= 2;
  } // check to see if the words are complete


  if (!this.isDeleting && this.txt === fullTxt) {
    // this will make the animation pause at the end
    typeSpeed = this.wait; // set isDeleting back to true

    this.isDeleting = true; // this is the "if" once it's completes typing out the word
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false; // move to the next word indrumenting by 1

    this.wordIndex++; // pause before starting the next word

    typeSpeed = 300;
  } // timer for each letter that is added or deleted


  setTimeout(function () {
    return _this.type();
  }, typeSpeed); // 2 words per second
}; // initializing on DOM load


document.addEventListener("DOMContentLoaded", initializeText);

function initializeText() {
  // getting the h2 element on the DOM
  var txtElement = document.querySelector(".txt-type"); // getting the text attributes using "data-"
  // need to use JSON.parse() method to turn string into an array

  var words = JSON.parse(txtElement.getAttribute("data-words")); // getting the wait attribute using "data-"

  var wait = txtElement.getAttribute("data-wait"); //initialize the typewriter function

  new TypeWriter(txtElement, words, wait);
} // Homepage Image Tilt:


var homepageSection = document.querySelector(".sec1");
homepageSection.addEventListener("mousemove", function (event) {
  var clientX = event.clientX;
  var clientY = event.clientY;
  var homepageImage = document.querySelector(".homepageImage");
  homepageImage.style.transform = "perspective(1000px) rotateY(".concat(clientX / 50, "deg) rotateX(").concat(clientY / 50, "deg) scale3d(1, 1, 1)");
}); // parralax effect on main page titles
// will be adding a slight parallax effect on Intersection Observer > getBoundingClientRect.

var mainSectionTitles = document.querySelectorAll(".section-title-main");
var mainSectionTitleOptions = {
  rootMargin: "0px",
  threshold: 0
};
var mainSectionTitleobserver = new IntersectionObserver(function (entries, mainSectionTitleobserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var parallaxEffect = function parallaxEffect() {
        var clientRect = entry.target.getBoundingClientRect();
        var fromTop = clientRect.y / 10;
        entry.target.style.transform = "translateY(".concat(fromTop, "px)");
      };

      document.addEventListener("scroll", parallaxEffect);
    }
  });
}, mainSectionTitleOptions);
mainSectionTitles.forEach(function (title) {
  mainSectionTitleobserver.observe(title);
}); // About Us headshot Animation

document.addEventListener("scroll", function () {
  // for the first headshot
  var headshotImgOne = document.querySelector(".headshotImgOne");
  var headShotOneBoundClientRect = headshotImgOne.getBoundingClientRect();
  var headshotOneFromTop = headShotOneBoundClientRect.y - 30;
  headshotImgOne.style.transform = "perspective(1000px) rotateY(".concat(headshotOneFromTop / 10, "deg) scale3d(1, 1, 1)"); // for the second headshot

  var headshotImageTwo = document.querySelector(".headshotImgTwo");
  var headShotTwoBoundClientRect = headshotImageTwo.getBoundingClientRect();
  var headshotTwoFromTop = (headShotTwoBoundClientRect.y - 30) * -1;
  headshotImageTwo.style.transform = "perspective(1000px) rotateY(".concat(headshotTwoFromTop / 10, "deg) scale3d(1, 1, 1)"); // for bottom text section

  var aboutUsTextContainer = document.querySelector(".about-section-3-text-container");
  var aboutUsTextContainerClientRect = aboutUsTextContainer.getBoundingClientRect();
  var aboutUsTextContainerY = aboutUsTextContainerClientRect.y;
  var maxBoxShadowSize = 20;
  var boxShadowValue = maxBoxShadowSize - aboutUsTextContainerY / 35;

  if (boxShadowValue < 0) {
    return;
  } else if (boxShadowValue > 0 && boxShadowValue < 30) {
    aboutUsTextContainer.style.boxShadow = "".concat(boxShadowValue, "px -").concat(boxShadowValue, "px 0px 0px #e63946, -").concat(boxShadowValue, "px ").concat(boxShadowValue, "px 0px 0px #e63946");
  } else {
    aboutUsTextContainer.style.boxShadow = "10px -10px 0px 0px #e63946, -10px 10px 0px 0px #e63946";
  }
}); // Our services section phone parallax effect

var servicesPageObserverOption = {
  rootMargin: "0px",
  threshold: 0
};
var servicesPagePhone = document.querySelector(".servicesPage-phone");

function moveServicePagePhone() {
  var servicesPagePhoneObserver = new IntersectionObserver(function (entries, servicesPagePhone) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var windowHeight = window.innerHeight;
        var boundingClient = entry.target.getBoundingClientRect();
        var boundingClientY = boundingClient.y;
        var scrollFromTop = windowHeight - boundingClientY;
        var moveAmount = scrollFromTop / 20 - 50;
        entry.target.style.transform = "translateY(".concat(moveAmount, "px)");
      }
    });
  }, servicesPageObserverOption);
  servicesPagePhoneObserver.observe(servicesPagePhone);
}

window.addEventListener("scroll", moveServicePagePhone); // Form script

var formSubmit = document.getElementById("form-submit");

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };
  var serviceID = "service_cz2czxg";
  var templateID = "template_g39s1td";
  emailjs.send(serviceID, templateID, params).then(function (res) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Thank you, your message has been successfully submitted");
  }).catch(function (error) {
    return console.log(error);
  });
}

formSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  sendMail();
}); // Intersection observer

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}); // Portfolio section

var galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(function (item) {
  observer.observe(item);
}); // contact section

var inputs = document.querySelectorAll("input");
var textarea = document.querySelector("textarea");
var contactForm = document.getElementById("contact-form");
var contactText = document.querySelector(".contact-text");
var triangle = document.querySelector(".triangle");
var dots = document.querySelector(".dots");
var contactEls = [textarea, contactForm, contactText, triangle, dots];
contactEls.forEach(function (el) {
  observer.observe(el);
});
inputs.forEach(function (input) {
  observer.observe(input);
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63787" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../script.js"], null)
//# sourceMappingURL=/script.76d4bba4.js.map