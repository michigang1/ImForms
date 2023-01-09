/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "0002882c8a9552176c0c9db07a9fe89a"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.cf0391ac.css",
    "revision": "86e8662e9450332933ca800d0d3d66da"
  },
  {
    "url": "assets/img/delete1.4fa3cfee.png",
    "revision": "4fa3cfeeca35ba9c148e3b15c830dcb6"
  },
  {
    "url": "assets/img/delete2.57355b79.png",
    "revision": "57355b797088cac3eb091ecda913d62b"
  },
  {
    "url": "assets/img/get_all.30fb0ae3.png",
    "revision": "30fb0ae3f131b092149a294834d7968a"
  },
  {
    "url": "assets/img/get_last.737016a3.png",
    "revision": "737016a33039f5c4f2f1c64ad51198a2"
  },
  {
    "url": "assets/img/get1.1326019c.png",
    "revision": "1326019ccb3e864250e1243d87c85e95"
  },
  {
    "url": "assets/img/get2.7f07b438.png",
    "revision": "7f07b438e09e5da053ec8815f0b7f7f4"
  },
  {
    "url": "assets/img/post1.cb3a73ef.png",
    "revision": "cb3a73ef88fef3c217186c0b1dc1dbfd"
  },
  {
    "url": "assets/img/post2.0067864f.png",
    "revision": "0067864fde0323e76affad74063fdbcb"
  },
  {
    "url": "assets/img/put_check.ef8bc180.png",
    "revision": "ef8bc18083977386cf6f77dd713dbdb4"
  },
  {
    "url": "assets/img/put.e58fcba8.png",
    "revision": "e58fcba8b734ee0459f9f37744aa4110"
  },
  {
    "url": "assets/img/put2.237ba0c0.png",
    "revision": "237ba0c0c0c9a022e447365994ac5a7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2afcd984.js",
    "revision": "e249ae60d5e28c11cb1c5dba7764ee7d"
  },
  {
    "url": "assets/js/11.e2d18c8d.js",
    "revision": "55549af1ed6d20ef0e1bef241c30de7b"
  },
  {
    "url": "assets/js/12.097b4725.js",
    "revision": "65bbc134c67a83aa434a5971b949b03f"
  },
  {
    "url": "assets/js/13.122133fe.js",
    "revision": "c75030ac5d3793eb865a5aabc3c998b8"
  },
  {
    "url": "assets/js/14.621422ee.js",
    "revision": "88173bc82130d1a272530c05341e5fae"
  },
  {
    "url": "assets/js/15.83adb39b.js",
    "revision": "651176b09f7fb1262d0262ee17435eca"
  },
  {
    "url": "assets/js/16.e2e2c83b.js",
    "revision": "ee59d9a9fde591cc2ba50dd5bd3cb3f7"
  },
  {
    "url": "assets/js/17.acfa0b75.js",
    "revision": "d7ee6776a3079dc445088c50c59c257f"
  },
  {
    "url": "assets/js/18.9cf16ca4.js",
    "revision": "9d8e1c7dbf86d05063c3aa1fdaca72b0"
  },
  {
    "url": "assets/js/19.5f6b4e78.js",
    "revision": "cbde49f7803270f9eb38cb94e80cff34"
  },
  {
    "url": "assets/js/2.b611f23d.js",
    "revision": "ea577ccaa82e2d517999a3bdf16f6d07"
  },
  {
    "url": "assets/js/20.06edf502.js",
    "revision": "9984799b079bf888a374c2ed7ac5a637"
  },
  {
    "url": "assets/js/21.2e3881c5.js",
    "revision": "a86e0b4634711b04c4670e67554271ef"
  },
  {
    "url": "assets/js/22.40b80d87.js",
    "revision": "be206760ac668e479303111dbc0b9734"
  },
  {
    "url": "assets/js/23.e3959f29.js",
    "revision": "5a3df62c94c1f414daafab8b9791bf05"
  },
  {
    "url": "assets/js/24.a76c9edc.js",
    "revision": "146c904b29b732eaf43f5f5019286476"
  },
  {
    "url": "assets/js/26.e08f9aa2.js",
    "revision": "8c81b1cd43d727680472e430d9f82d0a"
  },
  {
    "url": "assets/js/3.a24fade3.js",
    "revision": "f5d4e695c0585ec35eb0d245344661c9"
  },
  {
    "url": "assets/js/4.c7c4720c.js",
    "revision": "1dbcb47074cef327f87e9a3517dfafae"
  },
  {
    "url": "assets/js/5.61c7e5e0.js",
    "revision": "8acc44ba200d114be212a860c99d6d85"
  },
  {
    "url": "assets/js/6.a695b207.js",
    "revision": "2dd729d0c07ada51e8cd609ba203af0c"
  },
  {
    "url": "assets/js/7.64f2cb8a.js",
    "revision": "1b2432bab498621be4725bffe5d79346"
  },
  {
    "url": "assets/js/8.dd544bb7.js",
    "revision": "d7c60d919482cdb3e38c0e4f77ac115f"
  },
  {
    "url": "assets/js/9.271f3fac.js",
    "revision": "810bcf1f1fb3763be01117ea59c5699c"
  },
  {
    "url": "assets/js/app.3643ae2f.js",
    "revision": "e988b0237a49c32a547171fe1c7524c8"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5094793ca94e8f5312344da313852655"
  },
  {
    "url": "design/index.html",
    "revision": "3aeae5cb029be62bb295e7e6d32a51df"
  },
  {
    "url": "index.html",
    "revision": "e606480f817c5124160d1369940cb7a5"
  },
  {
    "url": "intro/index.html",
    "revision": "6fdca100b9bc385da09876d9c9d36611"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "043b0087a309eb7e3b1d2187ea988de7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "311f7529b69cd902face65eb4a2c0c1e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "22cb5125dfe51126b23d8ef3c745dc32"
  },
  {
    "url": "software/index.html",
    "revision": "cfe4dee5edac8d78d52dcc6a397ea2aa"
  },
  {
    "url": "test/index.html",
    "revision": "0e57d96639b07abc1776741ceb809599"
  },
  {
    "url": "use cases/index.html",
    "revision": "3cb71b9e20705ee5750e5836c8c39515"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
