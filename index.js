"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";

  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return (
      o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c),
      }),
      a
    );
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r),
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t,
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await")
          ? e.resolve(h.__await).then(
              function (t) {
                invoke("next", t, i, a);
              },
              function (t) {
                invoke("throw", t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke("throw", t, i, a);
              }
            );
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0,
        };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return {
            value: p.arg,
            done: n.done,
          };
        }
        "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ("throw" === n &&
          e.iterator["return"] &&
          ((r.method = "return"),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          "throw" === r.method)) ||
          ("return" !== n &&
            ((r.method = "throw"),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method"
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type)
      return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0],
    };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [
      {
        tryLoc: "root",
      },
    ]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction"
    )),
    (e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          "GeneratorFunction" === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return {
        __await: t,
      };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, "Generator"),
    define(g, a, function () {
      return this;
    }),
    define(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = "throw"),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = {
            iterator: values(e),
            resultName: r,
            nextLoc: n,
          }),
          "next" === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
var _require = require("discord.js"),
  Client = _require.Client,
  GatewayIntentBits = _require.GatewayIntentBits,
  Events = _require.Events,
  EmbedBuilder = _require.EmbedBuilder,
  Embed = _require.Embed;
var dotenv = require("dotenv");
var axios = require("axios");
var config = require("./config.js");

// Memuat variabel lingkungan dari file .env
dotenv.config();

// Menginisialisasi klien Discord dengan intents yang diperlukan
var client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    // Intent ini diperlukan untuk membaca konten pesan
    GatewayIntentBits.GuildMembers, // Intent ini diperlukan untuk mendeteksi anggota baru
  ],
});

// Daftar perintah bot
var commands = [
  {
    name: "ping",
    description: "Check the bot's latency",
  },
  {
    name: "hello",
    description: "Get a greeting message",
  },
  {
    name: "avatar",
    description: "Get the avatar of a user",
  },
  {
    name: "userinfo",
    description: "Get information about a user",
  },
  {
    name: "role",
    description: "Assign a role to a user",
  },
  {
    name: "createrole",
    description: "Create a new role with an optional color",
  },
  {
    name: "rolelist",
    description: "List all roles in the server",
  },
  {
    name: "help",
    description: "Display this help message",
  },
  {
    name: "ask",
    description: "Ask a question to the AI",
  },
  {
    name: "infomember",
    description: "Get information about a member",
  },
  {
    name: "serverinfo",
    description: "Get information about a server",
  },
  {
    name: "profile",
    description: "Get profile server",
  },
];

// Event handler ketika bot siap
client.once(Events.ClientReady, function () {
  console.log("Bot is ready!");
  client.user.setActivity("with index.js", {
    type: "PLAYING",
  }); // Mengatur status bot
});

// Event handler untuk menangani anggota baru
client.on(
  Events.GuildMemberAdd,
  /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(member) {
        var roleName, role, welcomeChannel;
        return _regeneratorRuntime().wrap(
          function _callee$(_context) {
            while (1)
              switch ((_context.prev = _context.next)) {
                case 0:
                  roleName = "member"; // Ganti dengan nama role Anda jika berbeda
                  role = member.guild.roles.cache.find(function (r) {
                    return r.name === roleName;
                  });
                  if (!role) {
                    _context.next = 14;
                    break;
                  }
                  _context.prev = 3;
                  _context.next = 6;
                  return member.roles.add(role);
                case 6:
                  console.log(
                    "Role "
                      .concat(roleName, " telah ditambahkan kepada ")
                      .concat(member.user.tag)
                  );
                  _context.next = 12;
                  break;
                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](3);
                  console.error(
                    "Gagal menambahkan role "
                      .concat(roleName, " kepada ")
                      .concat(member.user.tag, ":"),
                    _context.t0
                  );
                case 12:
                  _context.next = 15;
                  break;
                case 14:
                  console.log("Role ".concat(roleName, " tidak ditemukan."));
                case 15:
                  welcomeChannel = member.guild.channels.cache.find(function (
                    ch
                  ) {
                    return ch.name === "welcome";
                  }); // Ganti dengan nama channel sambutan Anda jika berbeda
                  if (welcomeChannel) {
                    welcomeChannel.send(
                      "Selamat datang di server, ".concat(member.user.tag, "!")
                    );
                  } else {
                    console.log("Channel #welcome tidak ditemukan.");
                  }
                case 17:
                case "end":
                  return _context.stop();
              }
          },
          _callee,
          null,
          [[3, 9]]
        );
      })
    );
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })()
);

// Fungsi untuk mendapatkan respons dari OpenAI
function getAIResponse(_x2) {
  return _getAIResponse.apply(this, arguments);
} // Event handler untuk menangani pesan
function _getAIResponse() {
  _getAIResponse = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(prompt) {
      var response;
      return _regeneratorRuntime().wrap(
        function _callee3$(_context3) {
          while (1)
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios.post(
                  "https://api.openai.com/v1/chat/completions",
                  {
                    model: "gpt-3.5-turbo",
                    messages: [
                      {
                        role: "user",
                        content: prompt,
                      },
                    ],
                    max_tokens: 150,
                  },
                  {
                    headers: {
                      Authorization: "Bearer ".concat(
                        process.env.OPENAI_API_KEY
                      ),
                    },
                  }
                );
              case 3:
                response = _context3.sent;
                return _context3.abrupt(
                  "return",
                  response.data.choices[0].message.content.trim()
                );
              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.error("Error getting AI response:", _context3.t0);
                return _context3.abrupt(
                  "return",
                  "Maaf, terjadi kesalahan saat memproses permintaan."
                );
              case 11:
              case "end":
                return _context3.stop();
            }
        },
        _callee3,
        null,
        [[0, 7]]
      );
    })
  );
  return _getAIResponse.apply(this, arguments);
}
client.on(
  Events.MessageCreate,
  /*#__PURE__*/ (function () {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(message) {
        var args,
          command,
          helpMessage,
          user,
          _user,
          member,
          roleName,
          colorArg,
          color,
          hexColor,
          _member,
          _roleName,
          role,
          roleList,
          query,
          aiResponse,
          _aiResponse,
          _args2,
          memberId,
          _member2,
          embed,
          _args3,
          amount,
          fetchedMessages,
          _embed,
          guild,
          _embed2,
          _guild,
          guildIconURL,
          _embed3;
        return _regeneratorRuntime().wrap(
          function _callee2$(_context2) {
            while (1)
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  if (!message.author.bot) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  if (!message.content.startsWith(config.prefix)) {
                    _context2.next = 95;
                    break;
                  }
                  args = message.content
                    .slice(config.prefix.length)
                    .trim()
                    .split(/ +/);
                  command = args.shift().toLowerCase();
                  if (!(command === "help")) {
                    _context2.next = 11;
                    break;
                  }
                  helpMessage = "**Available Commands:**\n";
                  commands.forEach(function (cmd) {
                    helpMessage += "- `"
                      .concat(config.prefix)
                      .concat(cmd.name, "` - ")
                      .concat(cmd.description, "\n");
                  });
                  message.channel.send(helpMessage);
                  _context2.next = 93;
                  break;
                case 11:
                  if (!(command === "ping")) {
                    _context2.next = 15;
                    break;
                  }
                  message.channel.send("Pong!");
                  _context2.next = 93;
                  break;
                case 15:
                  if (!(command === "hello")) {
                    _context2.next = 19;
                    break;
                  }
                  message.channel.send("Hello there!");
                  _context2.next = 93;
                  break;
                case 19:
                  if (!(command === "avatar")) {
                    _context2.next = 24;
                    break;
                  }
                  user = message.mentions.users.first() || message.author;
                  message.channel.send(
                    user.displayAvatarURL({
                      dynamic: true,
                      size: 1024,
                    })
                  );
                  _context2.next = 93;
                  break;
                case 24:
                  if (!(command === "userinfo")) {
                    _context2.next = 30;
                    break;
                  }
                  _user = message.mentions.users.first() || message.author;
                  member = message.guild.members.cache.get(_user.id);
                  message.channel.send(
                    "**Informasi Pengguna:**\n      Nama: "
                      .concat(_user.username, "\n      Tag: ")
                      .concat(_user.tag, "\n      ID: ")
                      .concat(_user.id, "\n      Bergabung pada: ")
                      .concat(member.joinedAt, "\n      Server: ")
                      .concat(message.guild.name)
                  );
                  _context2.next = 93;
                  break;
                case 30:
                  if (!(command === "createrole")) {
                    _context2.next = 58;
                    break;
                  }
                  if (message.member.permissions.has("MANAGE_ROLES")) {
                    _context2.next = 33;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.reply(
                      "Anda tidak memiliki izin untuk membuat role."
                    )
                  );
                case 33:
                  roleName = args.shift(); // Nama role adalah argumen pertama
                  colorArg = args.shift(); // Warna adalah argumen kedua
                  if (roleName) {
                    _context2.next = 37;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.reply("Silakan berikan nama role.")
                  );
                case 37:
                  color = 0x0000ff; // Default color is blue
                  if (!colorArg) {
                    _context2.next = 46;
                    break;
                  }
                  if (colorArg.startsWith("#")) {
                    colorArg = colorArg.slice(1);
                  }
                  hexColor = /^([0-9A-Fa-f]{6})$/;
                  if (!hexColor.test(colorArg)) {
                    _context2.next = 45;
                    break;
                  }
                  color = parseInt(colorArg, 16);
                  _context2.next = 46;
                  break;
                case 45:
                  return _context2.abrupt(
                    "return",
                    message.reply(
                      "Format warna tidak valid. Gunakan format hex seperti #ff5733."
                    )
                  );
                case 46:
                  _context2.prev = 46;
                  _context2.next = 49;
                  return message.guild.roles.create({
                    name: roleName,
                    color: color,
                    reason: "Role created by bot command",
                  });
                case 49:
                  message.channel.send(
                    "Role "
                      .concat(roleName, " dengan warna ")
                      .concat(
                        color.toString(16).toUpperCase(),
                        " telah dibuat."
                      )
                  );
                  _context2.next = 56;
                  break;
                case 52:
                  _context2.prev = 52;
                  _context2.t0 = _context2["catch"](46);
                  console.error(_context2.t0);
                  message.reply("Terjadi kesalahan saat membuat role.");
                case 56:
                  _context2.next = 93;
                  break;
                case 58:
                  if (!(command === "role")) {
                    _context2.next = 80;
                    break;
                  }
                  if (message.member.permissions.has("MANAGE_ROLES")) {
                    _context2.next = 61;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.reply(
                      "Anda tidak memiliki izin untuk mengatur role."
                    )
                  );
                case 61:
                  _member = message.mentions.members.first();
                  _roleName = args.join(" ").trim();
                  role = message.guild.roles.cache.find(function (r) {
                    return r.name.toLowerCase() === _roleName.toLowerCase();
                  });
                  if (role) {
                    _context2.next = 66;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.reply("Role tidak ditemukan.")
                  );
                case 66:
                  if (_member) {
                    _context2.next = 68;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.reply(
                      "Silakan sebutkan member yang akan diberikan role."
                    )
                  );
                case 68:
                  _context2.prev = 68;
                  _context2.next = 71;
                  return _member.roles.add(role);
                case 71:
                  message.channel.send(
                    "Role "
                      .concat(_roleName, " diberikan kepada ")
                      .concat(_member.user.tag)
                  );
                  _context2.next = 78;
                  break;
                case 74:
                  _context2.prev = 74;
                  _context2.t1 = _context2["catch"](68);
                  console.error(_context2.t1);
                  message.reply("Terjadi kesalahan saat memberikan role.");
                case 78:
                  _context2.next = 93;
                  break;
                case 80:
                  if (!(command === "rolelist")) {
                    _context2.next = 85;
                    break;
                  }
                  roleList = message.guild.roles.cache
                    .map(function (role) {
                      return role.name;
                    })
                    .join(", ");
                  message.channel.send("Daftar role: ".concat(roleList));
                  _context2.next = 93;
                  break;
                case 85:
                  if (!(command === "ask")) {
                    _context2.next = 93;
                    break;
                  }
                  query = args.join(" ");
                  if (query) {
                    _context2.next = 89;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.reply(
                      "Silakan berikan pertanyaan untuk diajukan ke AI."
                    )
                  );
                case 89:
                  _context2.next = 91;
                  return getAIResponse(query);
                case 91:
                  aiResponse = _context2.sent;
                  message.channel.send(aiResponse);
                case 93:
                  _context2.next = 100;
                  break;
                case 95:
                  if (!message.content.startsWith("!")) {
                    _context2.next = 100;
                    break;
                  }
                  _context2.next = 98;
                  return getAIResponse(message.content.slice(1));
                case 98:
                  _aiResponse = _context2.sent;
                  message.channel.send(_aiResponse);
                case 100:
                  if (!message.content.startsWith("!infomember")) {
                    _context2.next = 119;
                    break;
                  }
                  _args2 = message.content.split(" ").slice(1);
                  memberId = _args2[0];
                  if (memberId) {
                    _context2.next = 105;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.channel.send("Mohon berikan ID member.")
                  );
                case 105:
                  _context2.prev = 105;
                  _context2.next = 108;
                  return message.guild.members.fetch(memberId);
                case 108:
                  _member2 = _context2.sent;
                  if (_member2) {
                    _context2.next = 111;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.channel.send("Member tidak ditemukan.")
                  );
                case 111:
                  embed = new EmbedBuilder()
                    .setTitle("Informasi Member")
                    .setColor("#00FF00")
                    .setThumbnail(_member2.user.displayAvatarURL())
                    .addFields(
                      {
                        name: "Nama",
                        value: _member2.user.tag,
                        inline: true,
                      },
                      {
                        name: "ID",
                        value: _member2.id,
                        inline: true,
                      },
                      {
                        name: "Status",
                        value: _member2.presence
                          ? _member2.presence.status
                          : "Offline",
                        inline: true,
                      },
                      {
                        name: "Tanggal Bergabung",
                        value: _member2.joinedAt.toDateString(),
                        inline: true,
                      },
                      {
                        name: "Tanggal Akun Dibuat",
                        value: _member2.user.createdAt.toDateString(),
                        inline: true,
                      },
                      {
                        name: "Roles",
                        value: _member2.roles.cache
                          .map(function (role) {
                            return role.name;
                          })
                          .join(", "),
                        inline: false,
                      }
                    )
                    .setFooter({
                      text: "Informasi Member",
                    });
                  message.channel.send({
                    embeds: [embed],
                  });
                  _context2.next = 119;
                  break;
                case 115:
                  _context2.prev = 115;
                  _context2.t2 = _context2["catch"](105);
                  console.error(_context2.t2);
                  message.channel.send(
                    "Terjadi kesalahan saat mendapatkan informasi member."
                  );
                case 119:
                  if (!message.content.startsWith("!clear")) {
                    _context2.next = 140;
                    break;
                  }
                  if (message.member.permissions.has("MANAGE_MESSAGES")) {
                    _context2.next = 122;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.reply(
                      "Anda tidak memiliki izin untuk menggunakan command ini."
                    )
                  );
                case 122:
                  // Mendapatkan argumen dari command
                  _args3 = message.content.split(" ").slice(1);
                  amount = parseInt(_args3[0]); // Validasi jumlah pesan
                  if (
                    !(!amount || isNaN(amount) || amount <= 0 || amount > 100)
                  ) {
                    _context2.next = 126;
                    break;
                  }
                  return _context2.abrupt(
                    "return",
                    message.reply(
                      "Silakan masukkan jumlah pesan yang valid untuk dihapus (1-100)."
                    )
                  );
                case 126:
                  _context2.prev = 126;
                  _context2.next = 129;
                  return message.channel.messages.fetch({
                    limit: amount,
                  });
                case 129:
                  fetchedMessages = _context2.sent;
                  _context2.next = 132;
                  return message.channel.bulkDelete(fetchedMessages);
                case 132:
                  _embed = new EmbedBuilder()
                    .setTitle("Pesan Terhapus")
                    .setColor("#00FF00")
                    .setDescription(
                      "Berhasil menghapus ".concat(amount, " pesan.")
                    )
                    .setFooter({
                      text: "Bot Discord",
                    });
                  message.channel
                    .send({
                      embeds: [_embed],
                    })
                    .then(function (msg) {
                      setTimeout(function () {
                        return msg["delete"]();
                      }, 5000); // Menghapus pesan info setelah 5 detik
                    });
                  _context2.next = 140;
                  break;
                case 136:
                  _context2.prev = 136;
                  _context2.t3 = _context2["catch"](126);
                  console.error(_context2.t3);
                  message.reply("Terjadi kesalahan saat menghapus pesan.");
                case 140:
                  // Command untuk melihat informasi server
                  if (message.content.startsWith("!serverinfo")) {
                    guild = message.guild;
                    _embed2 = new EmbedBuilder()
                      .setTitle("Informasi Server: ".concat(guild.name))
                      .setColor("#00BFFF")
                      .setThumbnail(guild.iconURL())
                      .addFields(
                        {
                          name: "ID Server",
                          value: guild.id,
                          inline: true,
                        },
                        {
                          name: "Jumlah Anggota",
                          value: "".concat(guild.memberCount),
                          inline: true,
                        },
                        {
                          name: "Owner",
                          value: "<@".concat(guild.ownerId, ">"),
                          inline: true,
                        },
                        {
                          name: "Region",
                          value: guild.preferredLocale || "Unknown",
                          inline: true,
                        },
                        {
                          name: "Tanggal Bergabung",
                          value: guild.createdAt.toDateString(),
                          inline: true,
                        },
                        {
                          name: "Jumlah Kanal",
                          value: "".concat(guild.channels.cache.size),
                          inline: true,
                        },
                        {
                          name: "Jumlah Role",
                          value: "".concat(guild.roles.cache.size),
                          inline: true,
                        }
                      )
                      .setFooter({
                        text: "Bot Discord",
                      });
                    message.channel.send({
                      embeds: [_embed2],
                    });
                  }

                  // Command untuk melihat profil server
                  if (message.content.startsWith("!profile")) {
                    _guild = message.guild;
                    guildIconURL = _guild.iconURL({
                      size: 4096,
                    }); // Mengambil URL gambar dengan ukuran maksimum
                    _embed3 = new EmbedBuilder()
                      .setTitle("Profil Server: ".concat(_guild.name))
                      .setColor("#00BFFF")
                      .setImage(guildIconURL) // Menampilkan gambar dalam ukuran besar
                      .setFooter({
                        text: "Bot Discord",
                      });
                    message.channel.send({
                      embeds: [_embed3],
                    });
                  }
                case 142:
                case "end":
                  return _context2.stop();
              }
          },
          _callee2,
          null,
          [
            [46, 52],
            [68, 74],
            [105, 115],
            [126, 136],
          ]
        );
      })
    );
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  })()
);

// Menyiapkan bot dan menghubungkannya ke Discord
client.login(process.env.DISCORD_TOKEN);
